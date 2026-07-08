(() => {
  const STORAGE_KEY = "eikomiCoachPrototypeLog.v03";
  const SESSION_KEY = "eikomiCoachPrototypeActiveSession.v03";
  const TODAY_SESSION_KEY = "eikomiCoachPrototypeTodaySession.v03";

  const questions = (typeof QUESTIONS !== "undefined" ? QUESTIONS : [])
    .filter(q => q && q.id && q.choices && q.choices.length === 4)
    .filter(q => !["hold", "retired"].includes(q.status));

  const focusTypes = new Set(["grammar_focus", "translation_point"]);
  const readingTypes = new Set([
    "reading_reference",
    "reading_reason",
    "reading_example",
    "reading_tf",
    "vocab_context",
    "discourse_marker",
    // v0.4: アプリ完結型の読解・判断問題
    "reading_evidence",
    "choice_elimination",
    "number_compare",
    "mini_context",
    "fact_opinion",
    "story_sequence",
    "character_change",
    "story_outline"
  ]);

  const mistakeTagLabels = {
    structure: "文の形をつかむ",
    grammar: "文法ポイント",
    transword: "日本語訳の調整",
    reference: "指示語の確認",
    pinpoint: "本文の根拠探し",
    tf: "内容一致チェック",
    meaning: "単語・熟語の意味",
    inference: "文脈から考える"
  };

  function mistakeTagLabel(tag) {
    return mistakeTagLabels[tag] || tag || "確認ポイント";
  }

  const SORT_LABELS = {
    rangeAsc: "範囲↑",
    rangeDesc: "範囲↓",
    newDesc: "未習得",
    reviewDesc: "復習"
  };


  const materialConfigs = {
    focus: {
      title: "FOCUS構文",
      lead: "構文だけランダムに確認するか、FOCUS番号ごとに選べます。",
      randomMode: "focus",
      randomLabel: "FOCUS構文 ランダム10問",
      printLabel: "FOCUS別に選ぶ",
      icon: "🔎"
    },
    reading: {
      title: "Cutting Edge読解",
      lead: "読解問題をランダムに確認するか、Y番号ごとに選べます。",
      randomMode: "reading",
      randomLabel: "Cutting Edge読解 ランダム10問",
      printLabel: "Y番号別に選ぶ",
      icon: "📘"
    },
    vocab: {
      title: "重要単語",
      lead: "先生指定語句をランダムに確認するか、プリント別に選べます。",
      randomMode: "vocab",
      randomLabel: "重要単語 ランダム10問",
      printLabel: "プリント別に選ぶ",
      icon: "🧩"
    }
  };

  const modeTitles = {
    today: "今日の10問",
    focus: "FOCUS構文",
    reading: "Cutting Edge読解",
    vocab: "重要単語",
    mistakes: "今日やる復習",
    reviewToday: "今日やる復習",
    reviewAll: "すべての復習",
    materialPrint: "プリント別",
    testPrep: "テスト対策",
    sessionMistakes: "確認ポイントだけ",
    recommendedDrill: "おすすめドリル"
  };

  const state = {
    view: "homeView",
    currentMode: "today",
    session: [],
    displayQuestion: null,
    index: 0,
    selected: null,
    sessionResults: [],
    records: loadRecords(),
    activeSession: loadActiveSession(),
    reviewPanel: "review",
    currentMaterial: null,
    materialSort: "rangeAsc",
    vocabAxis: "print",
    learningPages: { today: 0, previous: 0 },
    showTodayLearning: false,
    showPreviousLearning: false,
    resultAction: null
  };

  const el = (id) => document.getElementById(id);
  const views = Array.from(document.querySelectorAll(".view"));
  const navItems = Array.from(document.querySelectorAll(".nav-item"));

  function loadRecords() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }

  function saveRecords() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.records));
  }

  function loadActiveSession() {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY)) || null; }
    catch { return null; }
  }

  function saveActiveSession(session) {
    state.activeSession = session;
    if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    else localStorage.removeItem(SESSION_KEY);
    renderContinueSlots();
  }

  function getAppTodayDate() {
    const shifted = new Date(Date.now() - 3 * 60 * 60 * 1000);
    const y = shifted.getFullYear();
    const m = String(shifted.getMonth() + 1).padStart(2, "0");
    const d = String(shifted.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function addDays(dateString, days) {
    const [y, m, d] = dateString.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    date.setDate(date.getDate() + days);
    const yy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yy}-${mm}-${dd}`;
  }

  function toAppDate(value) {
    if (!value) return null;
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return null;
    const y = parsed.getFullYear();
    const m = String(parsed.getMonth() + 1).padStart(2, "0");
    const d = String(parsed.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function getRecord(id) {
    if (!state.records[id]) {
      state.records[id] = {
        questionId: id,
        attempts: [],
        statusInApp: "new",
        srsLevel: 0,
        nextReviewAt: null,
        consecutiveCorrect: 0,
        lastResult: null,
        lastAnsweredAt: null
      };
    }

    const r = state.records[id];
    r.questionId ||= id;
    r.attempts ||= [];
    r.statusInApp ||= "new";
    r.srsLevel = Number.isInteger(r.srsLevel) ? r.srsLevel : (r.statusInApp === "cleared" ? 2 : 0);
    r.consecutiveCorrect = Number.isInteger(r.consecutiveCorrect) ? r.consecutiveCorrect : 0;
    r.nextReviewAt = toAppDate(r.nextReviewAt);
    return r;
  }

  function showView(viewId) {
    state.view = viewId;
    views.forEach(v => v.classList.toggle("active", v.id === viewId));
    navItems.forEach(n => n.classList.toggle("active", n.dataset.nav === viewId));
    if (viewId === "reviewView") renderReview();
    if (viewId === "analysisView") renderAnalysis();
    if (viewId === "homeView") renderHomeStats();
    if (viewId === "materialView" && state.currentMaterial) renderMaterialPicker(state.currentMaterial);
    if (viewId === "testPrepView") renderTestPrepView();
    renderContinueSlots();
  }

  function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function byType(typeSet) {
    return questions.filter(q => typeSet.has(q.type));
  }

  function statusOf(q) {
    return getRecord(q.id).statusInApp;
  }

  function isNew(q) {
    return statusOf(q) === "new";
  }

  function isDueReview(q, appToday = getAppTodayDate()) {
    const r = getRecord(q.id);
    return (r.statusInApp === "review" || r.statusInApp === "weak") &&
      r.nextReviewAt && r.nextReviewAt <= appToday;
  }

  function reviewPriority(q) {
    const r = getRecord(q.id);
    const weakScore = r.statusInApp === "weak" ? 0 : 1;
    const lastScore = r.lastResult === "wrong" ? 0 : 1;
    return `${weakScore}-${lastScore}-${r.nextReviewAt || "9999-99-99"}`;
  }

  function sortDueReview(list) {
    return [...list].sort((a, b) => reviewPriority(a).localeCompare(reviewPriority(b)));
  }

  function takeUnique(source, count, selectedIds) {
    const picked = [];
    for (const q of source) {
      if (picked.length >= count) break;
      if (selectedIds.has(q.id)) continue;
      picked.push(q);
      selectedIds.add(q.id);
    }
    return picked;
  }

  function buildTodaySession() {
    const selected = new Set();
    const todayTypes = q => focusTypes.has(q.type) || readingTypes.has(q.type);
    const focusNew = shuffle(byType(focusTypes).filter(isNew));
    const readingNew = shuffle(byType(readingTypes).filter(isNew));

    const result = [
      ...takeUnique(focusNew, 5, selected),
      ...takeUnique(readingNew, 5, selected)
    ];

    if (result.length < 10) {
      const otherNew = shuffle(questions.filter(q => todayTypes(q) && isNew(q) && !selected.has(q.id)));
      result.push(...takeUnique(otherNew, 10 - result.length, selected));
    }

    if (result.length < 10) {
      const due = sortDueReview(questions.filter(q => todayTypes(q) && isDueReview(q) && !selected.has(q.id)));
      result.push(...takeUnique(due, 10 - result.length, selected));
    }

    return shuffle(result).slice(0, 10);
  }

  function newAndDueFirst(list) {
    const score = { new: 0, review: 1, weak: 2, cleared: 3 };
    return shuffle(list).sort((a, b) => {
      const ar = getRecord(a.id);
      const br = getRecord(b.id);
      return (score[ar.statusInApp] ?? 0) - (score[br.statusInApp] ?? 0);
    });
  }

  function getDueQuestions(appToday = getAppTodayDate()) {
    return questions.filter(q => isDueReview(q, appToday));
  }

  function getTodayReviewQuestions() {
    const today = getAppTodayDate();
    const due = getDueQuestions(today);
    const todayDue = sortDueReview(due.filter(q => getRecord(q.id).nextReviewAt === today));
    const pastDue = sortDueReview(due.filter(q => getRecord(q.id).nextReviewAt < today));

    if (todayDue.length > 10) return todayDue;
    if (todayDue.length > 0) return [...todayDue, ...pastDue].slice(0, 10);
    return pastDue.slice(0, 10);
  }

  function getHaystack(q) {
    return [q.source || "", ...(q.tags || [])].join(" ");
  }

  function getPrintNames() {
    const names = new Set();
    questions.forEach(q => {
      const matches = getHaystack(q).match(/Cutting Edge Y\d+|FOCUS \d+/g) || [];
      matches.forEach(name => names.add(name));
    });
    return [...names].sort((a, b) => a.localeCompare(b, "ja"));
  }

  function getRangeNumber(label) {
    const focus = String(label).match(/FOCUS (\d+)/);
    if (focus) return Number(focus[1]);
    const ce = String(label).match(/Y(\d+)/);
    if (ce) return Number(ce[1]);
    const date = String(label).match(/(\d{4})-(\d{2})-(\d{2})/);
    if (date) return Number(`${date[1]}${date[2]}${date[3]}`);
    return Number.MAX_SAFE_INTEGER;
  }

  function dateLabel(dateString) {
    if (!dateString) return "アップ日未設定";
    const m = String(dateString).match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!m) return `${dateString}アップ分`;
    return `${Number(m[2])}月${Number(m[3])}日アップ分`;
  }

  function getVocabGroupKey(q, axis) {
    if (axis === "date") {
      return q.uploadedDate || q.lessonDate || q.createdAt?.slice?.(0, 10) || "アップ日未設定";
    }
    if (axis === "set") {
      return q.vocabSetTitle || q.vocabSetId || "第一回・セット未分類";
    }
    const match = getHaystack(q).match(/Cutting Edge Y\d+|FOCUS \d+/);
    return match ? match[0] : "第一回・セット未分類";
  }

  function groupLabel(material, key) {
    if (material === "vocab" && state.vocabAxis === "date") return dateLabel(key);
    return key;
  }

  function materialMatchesGroup(q, material, key) {
    if (material === "focus") return focusTypes.has(q.type) && getHaystack(q).includes(key);
    if (material === "reading") return readingTypes.has(q.type) && getHaystack(q).includes(key);
    if (material === "vocab") return q.type === "teacher_vocab" && getVocabGroupKey(q, state.vocabAxis) === key;
    return false;
  }

  function getMaterialGroups(material) {
    const map = new Map();
    questions.forEach(q => {
      let keys = [];
      const haystack = getHaystack(q);
      if (material === "focus" && focusTypes.has(q.type)) keys = haystack.match(/FOCUS \d+/g) || [];
      if (material === "reading" && readingTypes.has(q.type)) keys = haystack.match(/Cutting Edge Y\d+/g) || [];
      if (material === "vocab" && q.type === "teacher_vocab") keys = [getVocabGroupKey(q, state.vocabAxis)];

      keys.forEach(key => {
        if (!map.has(key)) map.set(key, { key, label: groupLabel(material, key), items: [] });
        map.get(key).items.push(q);
      });
    });

    const groups = [...map.values()].map(g => {
      const uniq = new Map(g.items.map(q => [q.id, q]));
      const items = [...uniq.values()];
      const counts = { new: 0, review: 0, weak: 0, cleared: 0 };
      items.forEach(q => {
        const status = getRecord(q.id).statusInApp || "new";
        counts[status] = (counts[status] || 0) + 1;
      });
      return { ...g, items, counts, total: items.length, reviewTotal: counts.review + counts.weak };
    });

    return sortMaterialGroups(groups, state.materialSort);
  }

  function sortMaterialGroups(groups, sortKey) {
    const sorted = [...groups];
    sorted.sort((a, b) => {
      if (sortKey === "rangeDesc") return getRangeNumber(b.key) - getRangeNumber(a.key) || b.label.localeCompare(a.label, "ja", { numeric: true });
      if (sortKey === "newDesc") return b.counts.new - a.counts.new || getRangeNumber(a.key) - getRangeNumber(b.key);
      if (sortKey === "reviewDesc") return b.reviewTotal - a.reviewTotal || getRangeNumber(a.key) - getRangeNumber(b.key);
      return getRangeNumber(a.key) - getRangeNumber(b.key) || a.label.localeCompare(b.label, "ja", { numeric: true });
    });
    return sorted;
  }

  function questionsForPrint(printName) {
    return questions.filter(q => getHaystack(q).includes(printName));
  }

  function questionsForMaterialPrint(material, printName) {
    return questions.filter(q => materialMatchesGroup(q, material, printName));
  }

  function extractNumber(q, pattern) {
    const match = getHaystack(q).match(pattern);
    return match ? Number(match[1]) : null;
  }

  function availableNumbers(pattern, prefix) {
    const nums = new Set();
    questions.forEach(q => {
      const n = extractNumber(q, pattern);
      if (n !== null) nums.add(n);
    });
    return [...nums].sort((a,b) => a - b).map(n => ({ value: n, label: `${prefix}${String(n).padStart(prefix === "Y" ? 2 : 1, "0")}` }));
  }

  function getTestPrepOptions() {
    return {
      ceStart: Number(el("ceStart")?.value || 1),
      ceEnd: Number(el("ceEnd")?.value || 7),
      focusStart: Number(el("focusStart")?.value || 1),
      focusEnd: Number(el("focusEnd")?.value || 5)
    };
  }

  function inRange(n, start, end) {
    if (n === null) return false;
    const min = Math.min(start, end);
    const max = Math.max(start, end);
    return n >= min && n <= max;
  }

  function questionsForTestPrep(options) {
    const selected = new Map();
    questions.forEach(q => {
      const ce = extractNumber(q, /Cutting Edge Y(\d+)/);
      const focus = extractNumber(q, /FOCUS (\d+)/);
      if (inRange(ce, options.ceStart, options.ceEnd)) selected.set(q.id, q);
      if (inRange(focus, options.focusStart, options.focusEnd)) selected.set(q.id, q);
    });
    return [...selected.values()];
  }

  function prioritizedForTestPrep(list) {
    const score = { weak: 0, review: 1, new: 2, cleared: 3 };
    return shuffle(list).sort((a, b) => {
      const ar = getRecord(a.id);
      const br = getRecord(b.id);
      const byStatus = (score[ar.statusInApp] ?? 2) - (score[br.statusInApp] ?? 2);
      if (byStatus) return byStatus;
      return (ar.nextReviewAt || "9999-99-99").localeCompare(br.nextReviewAt || "9999-99-99");
    });
  }

  function buildSession(mode, options = {}) {
    if (mode === "today") return buildTodaySession();
    if (mode === "focus") return newAndDueFirst(byType(focusTypes)).slice(0, 10);
    if (mode === "reading") return newAndDueFirst(byType(readingTypes)).slice(0, 10);
    if (mode === "vocab") return newAndDueFirst(questions.filter(q => q.type === "teacher_vocab")).slice(0, 10);
    if (mode === "mistakes" || mode === "reviewToday") return getTodayReviewQuestions();
    if (mode === "reviewAll") return sortDueReview(getDueQuestions());
    if (mode === "reviewDate") return sortDueReview(getDueQuestions().filter(q => getRecord(q.id).nextReviewAt === options.date));
    if (mode === "reviewOlder") {
      const border = addDays(getAppTodayDate(), -2);
      return sortDueReview(getDueQuestions().filter(q => getRecord(q.id).nextReviewAt < border));
    }
    if (mode === "print") return shuffle(questionsForPrint(options.printName));
    if (mode === "materialPrint") return shuffle(questionsForMaterialPrint(options.material, options.printName)).slice(0, 20);
    if (mode === "sessionMistakes") return (options.ids || []).map(id => questions.find(q => q.id === id)).filter(Boolean);
    if (mode === "testPrep") return prioritizedForTestPrep(questionsForTestPrep(options)).slice(0, 20);
    if (mode === "recommendedDrill") return buildRecommendedDrillSession(options);
    return buildTodaySession();
  }

  function buildDisplayQuestion(q) {
    const order = shuffle(q.choices.map((_, i) => i));
    return {
      ...q,
      displayChoices: order.map(i => q.choices[i]),
      displayToOriginal: order,
      correctPos: order.indexOf(q.answer)
    };
  }

  function startQuiz(mode, options = {}) {
    state.currentMode = mode;
    state.currentOptions = options;
    state.session = buildSession(mode, options);
    state.index = 0;
    state.selected = null;
    state.sessionResults = [];

    if (!state.session.length) {
      alert(mode === "reviewToday" || mode === "mistakes" ? "今日やる復習はありません。今はスッキリです。" : mode === "recommendedDrill" ? "今おすすめできるドリル問題がまだありません。" : "このモードで出せる問題がまだありません。");
      return;
    }

    if (mode === "today" || mode === "reviewToday" || mode === "mistakes" || mode === "recommendedDrill") {
      createOrUpdateSession();
    } else {
      saveActiveSession(null);
    }

    showView("quizView");
    renderQuestion();
  }

  function createOrUpdateSession() {
    const mode = state.currentMode === "mistakes" ? "reviewToday" : state.currentMode;
    const session = {
      mode,
      title: modeTitles[mode] || modeTitles[state.currentMode] || "クイズ",
      questionIds: state.session.map(q => q.id),
      answeredIds: [],
      remainingIds: state.session.map(q => q.id),
      appDate: getAppTodayDate(),
      startedAt: new Date().toISOString(),
      lastAnsweredAt: null
    };
    saveActiveSession(session);
  }

  function updateActiveSessionAfterAnswer(questionId) {
    if (!state.activeSession) return;
    const s = { ...state.activeSession };
    if (!s.answeredIds.includes(questionId)) s.answeredIds = [...s.answeredIds, questionId];
    s.remainingIds = (s.remainingIds || []).filter(id => id !== questionId);
    s.lastAnsweredAt = new Date().toISOString();
    if (!s.remainingIds.length) saveActiveSession(null);
    else saveActiveSession(s);
  }

  function validateActiveSession(session) {
    if (!session || !session.remainingIds || !session.remainingIds.length) return null;

    if (session.mode === "today") {
      if (session.appDate !== getAppTodayDate()) return null;
      return session;
    }

    if (session.mode === "reviewToday") {
      const validIds = session.remainingIds.filter(id => {
        const q = questions.find(item => item.id === id);
        return q && isDueReview(q);
      });
      if (!validIds.length) return null;
      return { ...session, remainingIds: validIds };
    }

    if (session.mode === "recommendedDrill") {
      const validIds = session.remainingIds.filter(id => questions.find(q => q.id === id));
      if (!validIds.length) return null;
      return { ...session, remainingIds: validIds };
    }

    return null;
  }

  function resumeActiveSession() {
    const validated = validateActiveSession(state.activeSession);
    if (!validated) {
      saveActiveSession(null);
      alert("続きから出せる問題はありません。ホームから始めてください。");
      return;
    }
    saveActiveSession(validated);
    state.currentMode = validated.mode;
    state.currentOptions = {};
    state.session = validated.remainingIds.map(id => questions.find(q => q.id === id)).filter(Boolean);
    state.index = 0;
    state.selected = null;
    state.sessionResults = [];
    showView("quizView");
    renderQuestion();
  }

  function renderQuestion() {
    const original = state.session[state.index];
    const q = buildDisplayQuestion(original);
    const r = getRecord(original.id);
    state.displayQuestion = q;
    state.selected = null;

    el("progressPill").textContent = `${state.index + 1} / ${state.session.length}`;
    el("sourceText").textContent = original.source || "参照元";
    el("questionTitle").textContent = original.title || "問題";
    el("questionText").textContent = original.question || "";

    const badge = el("lastBadge");
    badge.className = "last-badge hidden";
    if (r.lastResult) {
      badge.textContent = r.lastResult === "correct" ? "前回正解" : "前回ミス";
      badge.classList.remove("hidden");
      badge.classList.add(r.lastResult === "correct" ? "correct" : "wrong");
    }

    el("feedbackBox").classList.add("hidden");
    const box = el("choicesBox");
    box.innerHTML = "";

    q.displayChoices.forEach((choice, displayIndex) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice-button";
      btn.textContent = choice;
      btn.addEventListener("click", () => answerQuestion(displayIndex));
      box.appendChild(btn);
    });
  }

  function getAttemptMode(record) {
    if (record.statusInApp === "review") return "review";
    if (record.statusInApp === "weak") return "weak";
    if (record.statusInApp === "cleared" && ["print", "materialPrint", "testPrep"].includes(state.currentMode)) return "printCheck";
    return "new";
  }

  function answerQuestion(displayIndex) {
    if (state.selected !== null) return;
    state.selected = displayIndex;

    const displayQ = state.displayQuestion;
    const originalQ = state.session[state.index];
    const r = getRecord(originalQ.id);
    const selectedOriginalIndex = displayQ.displayToOriginal[displayIndex];
    const correct = displayIndex === displayQ.correctPos;
    const attemptMode = getAttemptMode(r);
    const countedAsMistake = !correct && attemptMode !== "new";

    const buttons = Array.from(document.querySelectorAll(".choice-button"));
    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === displayIndex) btn.classList.add("selected", correct ? "correct" : "wrong");
      if (!correct && i === displayQ.correctPos) btn.classList.add("selected", "correct");
    });

    applyLearningRule(r, correct, attemptMode);

    const attempt = {
      mode: attemptMode,
      selected: selectedOriginalIndex,
      selectedDisplayIndex: displayIndex,
      correct,
      countedAsMistake,
      answeredAt: new Date().toISOString(),
      appDate: getAppTodayDate()
    };
    r.attempts.push(attempt);
    r.lastResult = correct ? "correct" : "wrong";
    r.lastAnsweredAt = attempt.answeredAt;
    r.lastMode = state.currentMode;

    state.sessionResults.push({ question: originalQ, correct, countedAsMistake, attemptMode, selected: selectedOriginalIndex });
    saveRecords();
    updateActiveSessionAfterAnswer(originalQ.id);
    renderFeedback(originalQ, correct, countedAsMistake, attemptMode, r);
  }

  function setNextReview(record, days) {
    record.nextReviewAt = addDays(getAppTodayDate(), days);
  }

  function clearRecord(record) {
    record.statusInApp = "cleared";
    record.srsLevel = 2;
    record.nextReviewAt = null;
    record.consecutiveCorrect = 0;
  }

  function applyLearningRule(record, correct, attemptMode) {
    if (attemptMode === "new") {
      if (correct) {
        clearRecord(record);
      } else {
        record.statusInApp = "review";
        record.srsLevel = 0;
        record.consecutiveCorrect = 0;
        setNextReview(record, 1);
      }
      return;
    }

    if (attemptMode === "printCheck") {
      if (correct) {
        clearRecord(record);
      } else {
        record.statusInApp = "review";
        record.srsLevel = 0;
        record.consecutiveCorrect = 0;
        setNextReview(record, 1);
      }
      return;
    }

    if (attemptMode === "review") {
      if (correct) {
        if ((record.srsLevel || 0) >= 1) {
          clearRecord(record);
        } else {
          record.statusInApp = "review";
          record.srsLevel = 1;
          record.consecutiveCorrect = 0;
          setNextReview(record, 4);
        }
      } else {
        record.statusInApp = "weak";
        record.srsLevel = 0;
        record.consecutiveCorrect = 0;
        setNextReview(record, 1);
      }
      return;
    }

    if (attemptMode === "weak") {
      if (correct) {
        if ((record.consecutiveCorrect || 0) >= 1) {
          record.statusInApp = "review";
          record.srsLevel = 1;
          record.consecutiveCorrect = 0;
          setNextReview(record, 4);
        } else {
          record.statusInApp = "weak";
          record.srsLevel = 0;
          record.consecutiveCorrect = 1;
          setNextReview(record, 1);
        }
      } else {
        record.statusInApp = "weak";
        record.srsLevel = 0;
        record.consecutiveCorrect = 0;
        setNextReview(record, 1);
      }
    }
  }

  function statusLabel(record) {
    if (record.statusInApp === "cleared") return "習得済み";
    if (record.statusInApp === "weak") return "苦手";
    if (record.statusInApp === "review") return record.srsLevel === 1 ? "復習中：4日後確認" : "復習中：1日後確認";
    return "新規";
  }

  function renderFeedback(q, correct, countedAsMistake, attemptMode, record) {
    const box = el("feedbackBox");
    const title = el("feedbackTitle");
    const tag = el("mistakeTagBadge");
    const text = el("feedbackText");

    title.textContent = correct ? "いいね！" : "ここ確認しよう";
    tag.textContent = correct ? statusLabel(record) : mistakeTagLabel(q.mistakeTag);

    if (correct) {
      text.textContent = q.explanation || "正解です。";
    } else if (attemptMode === "new") {
      text.textContent = q.explanation || "解説を確認して、次の復習で見直そう。";
    } else {
      text.textContent = `復習で確認したいポイントです。${q.explanation || ""}`;
    }

    box.classList.remove("hidden");
  }

  function nextQuestion() {
    if (state.index + 1 >= state.session.length) {
      saveActiveSession(null);
      renderResult();
      showView("resultView");
      return;
    }
    state.index += 1;
    renderQuestion();
  }

  function stopSession() {
    if (state.activeSession && state.activeSession.remainingIds?.length) {
      alert("ここまでの結果を保存しました。\nまた続きからできます。");
    }
    showView("homeView");
  }

  function renderResult() {
    const total = state.sessionResults.length;
    const correct = state.sessionResults.filter(r => r.correct).length;
    const wrongItems = state.sessionResults.filter(r => !r.correct);
    const wrong = wrongItems.length;

    el("resultTitle").textContent = wrong
      ? `おつかれ！今日は${correct}問できた`
      : "満点！今日はスッキリ";
    el("resultSummary").textContent = wrong
      ? `${total}問中 ${correct}問 正解。確認したいところが${wrong}問あるよ。次の復習に入れておくね。`
      : `${total}問中 ${correct}問 正解。この調子でOK！`;

    const counts = {};
    wrongItems.forEach(r => {
      const key = mistakeTagLabel(r.question.mistakeTag);
      counts[key] = (counts[key] || 0) + 1;
    });

    const box = el("resultMistakes");
    box.innerHTML = "";
    if (!Object.keys(counts).length) {
      box.innerHTML = `<div class="result-row result-row-good"><span>今日の確認ポイント</span><strong>なし</strong></div>`;
    } else {
      const heading = document.createElement("div");
      heading.className = "result-list-heading";
      heading.textContent = "今日の確認ポイント";
      box.appendChild(heading);
      Object.entries(counts).forEach(([key, value]) => {
        const row = document.createElement("div");
        row.className = "result-row result-row-check";
        row.innerHTML = `<span>${escapeHtml(key)}</span><strong>${value}問</strong>`;
        box.appendChild(row);
      });
    }

    const homeBtn = el("resultHomeBtn");
    const actionBtn = el("againBtn");
    homeBtn.textContent = "今日はここまで";
    actionBtn.classList.remove("hidden");

    if (wrong) {
      actionBtn.textContent = "確認ポイントだけやる";
      state.resultAction = { mode: "sessionMistakes", options: { ids: wrongItems.map(r => r.question.id) } };
    } else if (state.currentMode === "today") {
      actionBtn.textContent = "別の10問をやる";
      state.resultAction = { mode: "today", options: {} };
    } else if (state.currentMode === "reviewToday" || state.currentMode === "mistakes") {
      const remaining = getTodayReviewQuestions();
      if (remaining.length) {
        actionBtn.textContent = "残りの復習を見る";
        state.resultAction = { mode: "reviewToday", options: {} };
      } else {
        actionBtn.classList.add("hidden");
        state.resultAction = null;
      }
    } else {
      actionBtn.textContent = "同じ条件で続ける";
      state.resultAction = { mode: state.currentMode, options: state.currentOptions || {} };
    }
  }

  function countStatuses() {
    const counts = { new: 0, cleared: 0, review: 0, weak: 0 };
    questions.forEach(q => {
      const status = getRecord(q.id).statusInApp || "new";
      counts[status] = (counts[status] || 0) + 1;
    });
    return counts;
  }

  function renderHomeStats() {
    const counts = countStatuses();
    el("statCleared").textContent = counts.cleared;
    el("statReview").textContent = counts.review;
    el("statWeak").textContent = counts.weak;
    renderContinueSlots();
  }

  function renderContinueSlots() {
    const slots = [el("homeContinueSlot"), el("reviewContinueSlot")].filter(Boolean);
    const validated = validateActiveSession(state.activeSession);
    if (!validated && state.activeSession) saveActiveSession(null);
    slots.forEach(slot => {
      if (!slot) return;
      slot.innerHTML = "";
      if (!validated) return;

      const wrap = document.createElement("div");
      wrap.className = "continue-card";

      const resumeBtn = document.createElement("button");
      resumeBtn.type = "button";
      resumeBtn.className = "continue-main";
      resumeBtn.dataset.action = "resume";
      resumeBtn.innerHTML = `<span>続きから</span><strong>${escapeHtml(validated.title || "クイズ")}</strong><small>残り${validated.remainingIds.length}問</small>`;

      const discardBtn = document.createElement("button");
      discardBtn.type = "button";
      discardBtn.className = "continue-discard";
      discardBtn.dataset.action = "discard-session";
      discardBtn.textContent = "破棄";

      wrap.appendChild(resumeBtn);
      wrap.appendChild(discardBtn);
      slot.appendChild(wrap);
    });
  }

  function reviewGroups() {
    const today = getAppTodayDate();
    const yesterday = addDays(today, -1);
    const dayBefore = addDays(today, -2);
    const due = getDueQuestions(today);
    return {
      today,
      yesterday,
      dayBefore,
      todaySet: getTodayReviewQuestions(),
      yesterdayItems: sortDueReview(due.filter(q => getRecord(q.id).nextReviewAt === yesterday)),
      dayBeforeItems: sortDueReview(due.filter(q => getRecord(q.id).nextReviewAt === dayBefore)),
      olderItems: sortDueReview(due.filter(q => getRecord(q.id).nextReviewAt < dayBefore)),
      allItems: sortDueReview(due)
    };
  }

  function renderMaterialPicker(material) {
    const config = materialConfigs[material];
    if (!config) return;
    el("materialTitle").textContent = config.title;
    el("materialLead").textContent = config.lead;

    const box = el("materialActionBox");
    box.innerHTML = "";

    const randomBtn = document.createElement("button");
    randomBtn.type = "button";
    randomBtn.className = "review-item review-action material-random-card";
    randomBtn.dataset.startMode = config.randomMode;
    randomBtn.innerHTML = `
      <div class="review-item-top">
        <span>ランダム10問</span>
        <span class="review-badge">10問</span>
      </div>
      <strong>${config.icon} ${escapeHtml(config.randomLabel)}</strong>
      <p>範囲を決めずに、この教材だけをサクッと確認。</p>
    `;
    box.appendChild(randomBtn);

    if (material === "vocab") {
      const axisRow = document.createElement("div");
      axisRow.className = "sort-chip-row axis-chip-row";
      axisRow.innerHTML = [
        ["print", "プリント別"],
        ["date", "アップ日別"],
        ["set", "セット別"]
      ].map(([key, label]) => `<button type="button" class="sort-chip ${state.vocabAxis === key ? "active" : ""}" data-vocab-axis="${key}">${label}</button>`).join("");
      box.appendChild(axisRow);
    }

    const heading = document.createElement("div");
    heading.className = "inline-heading";
    heading.textContent = config.printLabel;
    box.appendChild(heading);

    const sortRow = document.createElement("div");
    sortRow.className = "sort-chip-row";
    const sortLabels = material === "vocab" && state.vocabAxis === "date"
      ? { ...SORT_LABELS, rangeAsc: "日付↑", rangeDesc: "日付↓" }
      : SORT_LABELS;
    sortRow.innerHTML = Object.entries(sortLabels).map(([key, label]) =>
      `<button type="button" class="sort-chip ${state.materialSort === key ? "active" : ""}" data-material-sort="${key}">${label}</button>`
    ).join("");
    box.appendChild(sortRow);

    const groups = getMaterialGroups(material);
    if (!groups.length) {
      const empty = document.createElement("article");
      empty.className = "review-item";
      empty.innerHTML = `<strong>表示できる範囲がありません</strong><p>source / tags / uploadedDate / vocabSetTitle などが入ると、ここに表示されます。</p>`;
      box.appendChild(empty);
      return;
    }

    const list = document.createElement("div");
    list.className = "material-range-list";
    groups.forEach(group => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "material-row review-action";
      btn.dataset.materialPrint = material;
      btn.dataset.printName = group.key;
      btn.innerHTML = `
        <strong>${escapeHtml(group.label)}</strong>
        <span>未習得${group.counts.new}・復習${group.reviewTotal}・全${group.total}問</span>
      `;
      list.appendChild(btn);
    });
    box.appendChild(list);
  }

  function fillSelect(select, options, defaultValue) {
    if (!select) return;
    select.innerHTML = "";
    options.forEach(opt => {
      const item = document.createElement("option");
      item.value = opt.value;
      item.textContent = opt.label;
      if (opt.value === defaultValue) item.selected = true;
      select.appendChild(item);
    });
  }

  function renderTestPrepView() {
    const ceOptions = availableNumbers(/Cutting Edge Y(\d+)/, "Y");
    const focusOptions = availableNumbers(/FOCUS (\d+)/, "");

    if (!el("ceStart")?.options.length) {
      fillSelect(el("ceStart"), ceOptions, ceOptions[0]?.value);
      fillSelect(el("ceEnd"), ceOptions, ceOptions.at(-1)?.value);
      fillSelect(el("focusStart"), focusOptions, focusOptions[0]?.value);
      fillSelect(el("focusEnd"), focusOptions, focusOptions.at(-1)?.value);
    }
    updateTestPrepSummary();
  }

  function updateTestPrepSummary() {
    const box = el("testPrepSummary");
    if (!box) return;
    const options = getTestPrepOptions();
    const items = questionsForTestPrep(options);
    const counts = { weak: 0, review: 0, new: 0, cleared: 0 };
    items.forEach(q => {
      const status = getRecord(q.id).statusInApp;
      counts[status] = (counts[status] || 0) + 1;
    });
    box.innerHTML = `
      <span>対象 ${items.length}問</span>
      <small>苦手 ${counts.weak} / 復習 ${counts.review} / 新規 ${counts.new} / 習得済み ${counts.cleared}</small>
      <small>出題は優先度順に最大20問です。</small>
    `;
  }

  function renderReview() {
    if (state.reviewPanel === "print") return renderPrintPicker();

    const box = el("reviewList");
    const g = reviewGroups();
    box.innerHTML = "";

    if (!g.allItems.length) {
      box.innerHTML = `<div class="review-item"><strong>復習リストは空です</strong><p>今はスッキリ。新規問題でミスしたものがここに入ります。</p></div>`;
      return;
    }

    addReviewButton(box, "今日やる復習", g.todaySet.length, "reviewToday", "まずはここだけでOK");
    addReviewButton(box, "昨日の復習分", g.yesterdayItems.length, "reviewDate", "余裕があれば追加", { date: g.yesterday });
    addReviewButton(box, "一昨日の復習分", g.dayBeforeItems.length, "reviewDate", "さらに余裕があれば", { date: g.dayBefore });
    addReviewButton(box, "それ以前の復習分", g.olderItems.length, "reviewOlder", "古いものから整理", {});
    addReviewButton(box, "すべての復習", g.allItems.length, "reviewAll", "まとめて確認", {});
  }

  function addReviewButton(box, title, count, mode, note, options = {}) {
    if (!count) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "review-item review-action";
    btn.dataset.reviewMode = mode;
    if (options.date) btn.dataset.reviewDate = options.date;
    btn.innerHTML = `
      <div class="review-item-top">
        <span>${escapeHtml(note)}</span>
        <span class="review-badge">${count}問</span>
      </div>
      <strong>${escapeHtml(title)}</strong>
      <p>期限切れではなく、ここから少しずつ消化。</p>
    `;
    box.appendChild(btn);
  }

  function renderPrintPicker() {
    const box = el("reviewList");
    const names = getPrintNames();
    box.innerHTML = "";
    if (!names.length) {
      box.innerHTML = `<div class="review-item"><strong>プリント名が見つかりません</strong><p>source または tags に Cutting Edge Y01 / FOCUS 1 のような名前が必要です。</p></div>`;
      return;
    }
    names.forEach(name => {
      const count = questionsForPrint(name).length;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "review-item review-action";
      btn.dataset.printName = name;
      btn.innerHTML = `
        <div class="review-item-top">
          <span>プリント別</span>
          <span class="review-badge">${count}問</span>
        </div>
        <strong>${escapeHtml(name)}</strong>
        <p>読解・構文・同じプリントに紐づく重要単語を含めて確認。</p>
      `;
      box.appendChild(btn);
    });
  }


  const teacherAdviceMap = {
    structure: {
      title: "文の形をつかむ練習",
      message: "主語・動詞・かたまりを先に見ると、意味が安定しそうです。",
      drillLabel: "文の形ドリル"
    },
    grammar: {
      title: "文法ポイントの確認",
      message: "形を見て反応できるように、短い問題でサッと戻しましょう。",
      drillLabel: "文法ポイントドリル"
    },
    transword: {
      title: "日本語訳の調整",
      message: "英語の形をつかんだあと、日本語として自然に直す練習が効きます。",
      drillLabel: "訳し方ドリル"
    },
    reference: {
      title: "指示語の確認",
      message: "it / this / they が何を受けているか、前の内容に戻る練習をしましょう。",
      drillLabel: "指示語ドリル"
    },
    pinpoint: {
      title: "本文の根拠探し",
      message: "答えを選ぶ前に、英文のどこが根拠かを1か所決めると安定します。",
      drillLabel: "根拠探しドリル"
    },
    tf: {
      title: "内容一致チェック",
      message: "本文にある／ない、数字や主語のズレを落ち着いて確認するとよさそうです。",
      drillLabel: "内容一致ドリル"
    },
    meaning: {
      title: "単語・熟語の意味",
      message: "単語だけでなく、本文中でどう使われているかをセットで確認しましょう。",
      drillLabel: "語句確認ドリル"
    },
    inference: {
      title: "文脈から考える練習",
      message: "前後の流れをセットで見ると、選択肢に引っ張られにくくなります。",
      drillLabel: "文脈判断ドリル"
    }
  };

  const mistakeTagAliases = {
    "構文を拾えていない": "structure",
    "単語・熟語の意味ミス": "meaning",
    "指示語の戻り先ミス": "reference",
    "本文根拠を見つけられない": "pinpoint",
    "内容一致チェック": "tf",
    "選択肢の読み違い": "tf",
    "日本語化ミス": "transword",
    "文脈判断ミス": "inference"
  };

  function normalizeMistakeTag(tag) {
    if (!tag) return "unknown";
    if (mistakeTagLabels[tag]) return tag;
    return mistakeTagAliases[tag] || tag;
  }

  function getQuestionById(id) {
    return questions.find(q => q.id === id);
  }

  function getAnalysisAttempts(days = 7) {
    const attempts = getAllAttemptsWithQuestionId();
    const today = getAppTodayDate();
    const todayWrong = attempts.filter(a => !a.correct && (a.appDate || toAppDate(a.answeredAt)) === today);
    if (todayWrong.length) return { scope: "today", attempts: todayWrong };

    const since = addDays(today, -(days - 1));
    const recentWrong = attempts.filter(a => {
      const date = a.appDate || toAppDate(a.answeredAt);
      return !a.correct && date && date >= since && date <= today;
    });
    return { scope: "recent", attempts: recentWrong };
  }

  function getMistakeStats(attempts) {
    const map = new Map();
    attempts.forEach(a => {
      const q = getQuestionById(a.questionId);
      if (!q) return;
      const tag = normalizeMistakeTag(q.mistakeTag);
      const current = map.get(tag) || { tag, label: mistakeTagLabel(tag), count: 0, questionIds: [] };
      current.count += 1;
      if (!current.questionIds.includes(q.id)) current.questionIds.push(q.id);
      map.set(tag, current);
    });
    return [...map.values()].sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, "ja"));
  }

  function getTopMistakeInfo() {
    const analysis = getAnalysisAttempts(7);
    const stats = getMistakeStats(analysis.attempts);
    return { ...analysis, stats, top: stats[0] || null };
  }

  function recommendedDrillCandidates(tag) {
    const normalized = normalizeMistakeTag(tag);
    const usedRecently = new Set(getAllAttemptsWithQuestionId().slice(0, 30).map(a => a.questionId));
    const base = questions.filter(q => {
      if (q.type === "teacher_vocab") return false;
      return normalizeMistakeTag(q.mistakeTag) === normalized;
    });

    const notRecent = shuffle(base.filter(q => !usedRecently.has(q.id)));
    const recent = shuffle(base.filter(q => usedRecently.has(q.id)));
    return [...notRecent, ...recent].slice(0, 3);
  }

  function buildRecommendedDrillSession(options = {}) {
    let tag = normalizeMistakeTag(options.mistakeTag);
    if (!tag || tag === "unknown") tag = getTopMistakeInfo().top?.tag || "pinpoint";
    let result = recommendedDrillCandidates(tag);

    if (result.length < 3) {
      const fallback = shuffle(questions.filter(q => q.type !== "teacher_vocab" && !result.some(item => item.id === q.id)));
      result = [...result, ...fallback].slice(0, 3);
    }
    return result;
  }

  function buildTeacherDiagnosis(topInfo) {
    const totalWrong = topInfo.attempts.length;
    const scopeText = topInfo.scope === "today" ? "今日" : "最近";
    if (!totalWrong) {
      return {
        title: "今日はかなり安定しています",
        message: "確認ポイントはまだ少なめです。このまま新しい問題に進んでもOK。",
        drillTitle: "軽く3問だけ確認",
        drillMessage: "必要なら、読解問題を3問だけ追加で確認できます。",
        tag: "pinpoint"
      };
    }

    const top = topInfo.top;
    const advice = teacherAdviceMap[top.tag] || {
      title: mistakeTagLabel(top.tag),
      message: "ここだけ短く確認すると、次の問題で安定しやすくなります。",
      drillLabel: `${mistakeTagLabel(top.tag)}ドリル`
    };

    return {
      title: `${scopeText}は「${advice.title}」で少し迷いが出ています`,
      message: advice.message,
      drillTitle: advice.drillLabel,
      drillMessage: `${mistakeTagLabel(top.tag)}を3問だけ確認しよう。`,
      tag: top.tag
    };
  }

  function renderAnalysis() {
    const counts = countStatuses();
    el("analysisCleared").textContent = counts.cleared;
    el("analysisReview").textContent = counts.review;
    el("analysisWeak").textContent = counts.weak;
    el("analysisNew").textContent = counts.new;

    renderTodayReflection();
    renderWeakTags();
    renderRecentAttempts();
  }

  function renderTodayReflection() {
    const card = el("todayReflectionCard");
    if (!card) return;
    const today = getAppTodayDate();
    const todayAttempts = [];
    Object.values(state.records).forEach(r => {
      (r.attempts || []).forEach(a => {
        if ((a.appDate || toAppDate(a.answeredAt)) === today) todayAttempts.push(a);
      });
    });
    const total = todayAttempts.length;
    const correct = todayAttempts.filter(a => a.correct).length;
    const misses = todayAttempts.filter(a => !a.correct).length;
    const dueCount = getDueQuestions().length;
    const topInfo = getTopMistakeInfo();
    const diagnosis = buildTeacherDiagnosis(topInfo);
    const stats = topInfo.stats.slice(0, 3);
    const drillItems = buildRecommendedDrillSession({ mistakeTag: diagnosis.tag });
    const canStart = drillItems.length > 0;
    const scopeLabel = topInfo.scope === "today" ? "今日のつまずきTOP3" : "最近のつまずきTOP3";

    const statsHtml = stats.length
      ? stats.map(item => `<div class="tag-item"><span>${escapeHtml(item.label)}</span><strong>${item.count}</strong></div>`).join("")
      : `<div class="tag-item"><span>確認ポイント</span><strong>なし</strong></div>`;

    const drillPreview = canStart
      ? drillItems.map(q => `<li>${escapeHtml(q.title || q.id)} <small>${escapeHtml(q.source || "")}</small></li>`).join("")
      : `<li>おすすめできる問題がまだありません</li>`;

    card.innerHTML = `
      <div class="teacher-diagnosis-head">
        <span class="teacher-badge">先生メモ</span>
        <span class="teacher-summary">${total}問 / 正解 ${correct} / ミス ${misses} / 復習あと${dueCount}問</span>
      </div>
      <h3>${escapeHtml(diagnosis.title)}</h3>
      <p class="teacher-message">${escapeHtml(diagnosis.message)}</p>
      <div class="teacher-grid">
        <div class="teacher-panel">
          <h4>${escapeHtml(scopeLabel)}</h4>
          <div class="tag-list">${statsHtml}</div>
        </div>
        <div class="teacher-panel teacher-drill-panel">
          <h4>${escapeHtml(diagnosis.drillTitle)}</h4>
          <p>${escapeHtml(diagnosis.drillMessage)}</p>
          <ul class="drill-preview-list">${drillPreview}</ul>
          <button class="primary-button wide" type="button" data-action="recommended-drill" data-mistake-tag="${escapeHtml(diagnosis.tag)}" ${canStart ? "" : "disabled"}>おすすめドリルを始める</button>
        </div>
      </div>
    `;
  }

  function renderWeakTags() {
    const weakTagCounts = {};
    questions.forEach(q => {
      const r = getRecord(q.id);
      if (r.statusInApp === "weak" || r.statusInApp === "review") {
        const key = mistakeTagLabel(q.mistakeTag);
        weakTagCounts[key] = (weakTagCounts[key] || 0) + 1;
      }
    });

    const weakBox = el("weakTagsList");
    weakBox.innerHTML = "";
    const entries = Object.entries(weakTagCounts).sort((a,b) => b[1] - a[1]);
    if (!entries.length) {
      weakBox.innerHTML = `<div class="tag-item"><span>残っているポイント</span><strong>なし</strong></div>`;
    } else {
      entries.forEach(([key, value]) => {
        const div = document.createElement("div");
        div.className = "tag-item";
        div.innerHTML = `<span>${escapeHtml(key)}</span><strong>${value}</strong>`;
        weakBox.appendChild(div);
      });
    }
  }

  function getAllAttemptsWithQuestionId() {
    const attempts = [];
    Object.values(state.records).forEach(r => {
      (r.attempts || []).forEach(a => attempts.push({ ...a, questionId: r.questionId }));
    });
    attempts.sort((a,b) => new Date(b.answeredAt) - new Date(a.answeredAt));
    return attempts;
  }

  function getPreviousLearningDate(attempts, today) {
    const dates = [...new Set(attempts
      .map(a => a.appDate || toAppDate(a.answeredAt))
      .filter(date => date && date < today))];
    dates.sort((a, b) => b.localeCompare(a));
    return dates[0] || null;
  }

  function renderRecentAttempts() {
    const attempts = getAllAttemptsWithQuestionId();
    const today = getAppTodayDate();
    const todayAttempts = attempts.filter(a => (a.appDate || toAppDate(a.answeredAt)) === today);
    const previousDate = getPreviousLearningDate(attempts, today);
    const previousAttempts = previousDate
      ? attempts.filter(a => (a.appDate || toAppDate(a.answeredAt)) === previousDate)
      : [];

    const todayToggleBtn = el("toggleTodayLearningBtn");
    const todayBlock = el("todayLearningBlock");
    if (todayToggleBtn) {
      todayToggleBtn.textContent = state.showTodayLearning
        ? "今日の学習ログを閉じる"
        : `今日の学習ログを開く（${todayAttempts.length}件）`;
    }
    todayBlock?.classList.toggle("hidden", !state.showTodayLearning);

    if (state.showTodayLearning) {
      renderLearningList("today", todayAttempts, el("todayLearningList"), el("todayLearningPager"), "今日の学習はまだありません");
    } else {
      if (el("todayLearningList")) el("todayLearningList").innerHTML = "";
      if (el("todayLearningPager")) el("todayLearningPager").innerHTML = "";
    }

    const toggleBtn = el("togglePreviousLearningBtn");
    const previousBlock = el("previousLearningBlock");
    if (!state.showTodayLearning || !previousAttempts.length) {
      toggleBtn?.classList.add("hidden");
      previousBlock?.classList.add("hidden");
      return;
    }

    toggleBtn?.classList.remove("hidden");
    toggleBtn.textContent = state.showPreviousLearning ? "前回の学習を閉じる" : `前回の学習も見る（${previousDate}）`;
    previousBlock?.classList.toggle("hidden", !state.showPreviousLearning);
    if (state.showPreviousLearning) {
      renderLearningList("previous", previousAttempts, el("previousLearningList"), el("previousLearningPager"), "前回の学習はありません");
    }
  }

  function getTodayAttemptsForLog() {
    const today = getAppTodayDate();
    return getAllAttemptsWithQuestionId()
      .filter(a => (a.appDate || toAppDate(a.answeredAt)) === today)
      .sort((a, b) => new Date(a.answeredAt) - new Date(b.answeredAt));
  }

  function buildLearningLogText() {
    const today = getAppTodayDate();
    const topInfo = getTopMistakeInfo();
    const diagnosis = buildTeacherDiagnosis(topInfo);
    const stats = topInfo.stats.slice(0, 3);
    const attempts = getTodayAttemptsForLog();
    const drillItems = buildRecommendedDrillSession({ mistakeTag: diagnosis.tag });

    const lines = [];
    lines.push("英コミュCoach 学習ログ");
    lines.push(`日付：${today}`);
    lines.push("");
    lines.push("【今日の診断】");
    lines.push(diagnosis.title);
    lines.push(diagnosis.message);
    lines.push(`おすすめ：${diagnosis.drillTitle}`);
    lines.push("");
    lines.push("【つまずきTOP3】");
    if (stats.length) {
      stats.forEach((item, index) => lines.push(`${index + 1}. ${item.label}：${item.count}回`));
    } else {
      lines.push("確認ポイントはまだ少なめです。");
    }
    lines.push("");
    lines.push("【おすすめドリル候補】");
    if (drillItems.length) {
      drillItems.forEach((q, index) => lines.push(`${index + 1}. ${q.id} / ${q.source || "参照元未設定"} / ${q.title || "タイトル未設定"}`));
    } else {
      lines.push("候補なし");
    }
    lines.push("");
    lines.push("【今日の解答ログ】");
    if (!attempts.length) {
      lines.push("今日の解答ログはまだありません。");
    } else {
      attempts.forEach((a, index) => {
        const q = getQuestionById(a.questionId);
        const selectedText = q?.choices?.[a.selected] ?? "選択記録なし";
        const correctText = q?.choices?.[q.answer] ?? "正解データなし";
        const result = a.correct ? "correct" : "wrong";
        lines.push(`${index + 1}. ${a.questionId} / ${q?.source || "参照元未設定"} / ${q?.type || "type未設定"}`);
        lines.push(`   title：${q?.title || "タイトル未設定"}`);
        lines.push(`   result：${result}`);
        lines.push(`   selected：${selectedText}`);
        lines.push(`   correct：${correctText}`);
        lines.push(`   mistakeTag：${mistakeTagLabel(q?.mistakeTag)}`);
        lines.push(`   answeredAt：${a.answeredAt || "時刻なし"}`);
      });
    }
    return lines.join("\n");
  }

  async function copyTextToClipboard(text) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    if (!ok) throw new Error("copy failed");
  }

  async function copyAnalysisLog() {
    const btn = el("copyAnalysisLogBtn");
    const original = btn?.textContent || "学習ログをコピー";
    try {
      await copyTextToClipboard(buildLearningLogText());
      if (btn) {
        btn.textContent = "コピーしました";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove("copied");
        }, 1600);
      }
    } catch (error) {
      alert("コピーできませんでした。ブラウザの権限を確認してください。");
    }
  }

  function renderLearningList(kind, attempts, listEl, pagerEl, emptyText) {
    if (!listEl || !pagerEl) return;
    const pageSize = 20;
    const maxPage = Math.max(0, Math.ceil(attempts.length / pageSize) - 1);
    state.learningPages[kind] = Math.min(state.learningPages[kind] || 0, maxPage);
    const page = state.learningPages[kind];
    const start = page * pageSize;
    const pageItems = attempts.slice(start, start + pageSize);

    listEl.innerHTML = "";
    pagerEl.innerHTML = "";
    if (!attempts.length) {
      listEl.innerHTML = `<div class="learning-empty">${escapeHtml(emptyText)}</div>`;
      return;
    }

    pageItems.forEach(a => listEl.appendChild(createLearningCard(a)));

    const info = document.createElement("span");
    info.textContent = `${start + 1}〜${Math.min(start + pageSize, attempts.length)}件を表示中 / 全${attempts.length}件`;
    pagerEl.appendChild(info);

    if (page > 0) {
      const prev = document.createElement("button");
      prev.type = "button";
      prev.className = "pager-button";
      prev.dataset.learningPage = kind;
      prev.dataset.pageDelta = "-1";
      prev.textContent = "前へ";
      pagerEl.appendChild(prev);
    }
    if (page < maxPage) {
      const next = document.createElement("button");
      next.type = "button";
      next.className = "pager-button";
      next.dataset.learningPage = kind;
      next.dataset.pageDelta = "1";
      next.textContent = "次へ";
      pagerEl.appendChild(next);
    }
  }

  function createLearningCard(attempt) {
    const q = questions.find(item => item.id === attempt.questionId);
    const correctText = q?.choices?.[q.answer] ?? "正解データなし";
    const selectedText = q?.choices?.[attempt.selected] ?? "選択記録なし";
    const card = document.createElement("article");
    card.className = `learning-card ${attempt.correct ? "is-correct" : "is-wrong"}`;
    card.innerHTML = `
      <div class="learning-card-head">
        <strong>${escapeHtml(q?.title || attempt.questionId)}</strong>
        <span class="result-pill ${attempt.correct ? "correct" : "wrong"}">${attempt.correct ? "正解" : "確認ポイント"}</span>
      </div>
      <p><b>Q：</b>${escapeHtml(q?.question || "問題文データなし")}</p>
      <p><b>A：</b><span class="answer-text">${escapeHtml(correctText)}</span></p>
      ${attempt.correct ? "" : `<p><b>誤答：</b><span class="wrong-text">${escapeHtml(selectedText)}</span></p>`}
      <small>確認ポイント：${escapeHtml(mistakeTagLabel(q?.mistakeTag))}</small>
    `;
    return card;
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, ch => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    }[ch]));
  }

  document.addEventListener("click", (e) => {
    const modeBtn = e.target.closest("[data-start-mode]");
    if (modeBtn) {
      state.reviewPanel = "review";
      startQuiz(modeBtn.dataset.startMode === "mistakes" ? "reviewToday" : modeBtn.dataset.startMode);
      return;
    }

    const materialBtn = e.target.closest("[data-material]");
    if (materialBtn) {
      state.currentMaterial = materialBtn.dataset.material;
      state.materialSort = "rangeAsc";
      showView("materialView");
      return;
    }

    const action = e.target.closest("[data-action]");
    if (action?.dataset.action === "resume") {
      resumeActiveSession();
      return;
    }
    if (action?.dataset.action === "discard-session") {
      saveActiveSession(null);
      return;
    }
    if (action?.dataset.action === "test-prep") {
      showView("testPrepView");
      return;
    }
    if (action?.dataset.action === "recommended-drill") {
      startQuiz("recommendedDrill", { mistakeTag: action.dataset.mistakeTag });
      return;
    }

    const sortBtn = e.target.closest("[data-material-sort]");
    if (sortBtn) {
      state.materialSort = sortBtn.dataset.materialSort;
      renderMaterialPicker(state.currentMaterial);
      return;
    }

    const axisBtn = e.target.closest("[data-vocab-axis]");
    if (axisBtn) {
      state.vocabAxis = axisBtn.dataset.vocabAxis;
      state.materialSort = "rangeAsc";
      renderMaterialPicker(state.currentMaterial);
      return;
    }

    const pageBtn = e.target.closest("[data-learning-page]");
    if (pageBtn) {
      const kind = pageBtn.dataset.learningPage;
      state.learningPages[kind] = Math.max(0, (state.learningPages[kind] || 0) + Number(pageBtn.dataset.pageDelta || 0));
      renderAnalysis();
      return;
    }

    const materialPrintBtn = e.target.closest("[data-material-print]");
    if (materialPrintBtn) {
      startQuiz("materialPrint", { material: materialPrintBtn.dataset.materialPrint, printName: materialPrintBtn.dataset.printName });
      return;
    }

    const reviewBtn = e.target.closest("[data-review-mode]");
    if (reviewBtn) {
      const mode = reviewBtn.dataset.reviewMode;
      const options = reviewBtn.dataset.reviewDate ? { date: reviewBtn.dataset.reviewDate } : {};
      startQuiz(mode, options);
      return;
    }

    const printBtn = e.target.closest("[data-print-name]");
    if (printBtn) {
      startQuiz("print", { printName: printBtn.dataset.printName });
      return;
    }

    const navBtn = e.target.closest("[data-nav]");
    if (navBtn) {
      state.reviewPanel = "review";
      showView(navBtn.dataset.nav);
    }
  });

  el("nextBtn").addEventListener("click", nextQuestion);
  el("stopBtn")?.addEventListener("click", stopSession);
  el("backHomeBtn").addEventListener("click", () => showView("homeView"));
  el("resultHomeBtn").addEventListener("click", () => showView("homeView"));
  el("againBtn").addEventListener("click", () => {
    if (!state.resultAction) return;
    startQuiz(state.resultAction.mode, state.resultAction.options || {});
  });
  el("toggleTodayLearningBtn")?.addEventListener("click", () => {
    state.showTodayLearning = !state.showTodayLearning;
    if (!state.showTodayLearning) state.showPreviousLearning = false;
    renderAnalysis();
  });
  el("copyAnalysisLogBtn")?.addEventListener("click", copyAnalysisLog);
  el("togglePreviousLearningBtn")?.addEventListener("click", () => {
    state.showPreviousLearning = !state.showPreviousLearning;
    renderAnalysis();
  });
  ["ceStart", "ceEnd", "focusStart", "focusEnd"].forEach(id => {
    el(id)?.addEventListener("change", updateTestPrepSummary);
  });
  el("testPrepStartBtn")?.addEventListener("click", () => startQuiz("testPrep", getTestPrepOptions()));
  el("resetBtn").addEventListener("click", () => {
    if (!confirm("試作版v0.4 Phase2-1の学習ログを初期化しますか？")) return;
    state.records = {};
    saveRecords();
    saveActiveSession(null);
    renderHomeStats();
    renderAnalysis();
    renderReview();
  });

  Object.keys(state.records).forEach(getRecord);
  saveRecords();
  renderHomeStats();
  renderContinueSlots();
})();
