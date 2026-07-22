(() => {
  const STORAGE_KEY = "eikomiCoachPrototypeLog.v03";
  const SESSION_KEY = "eikomiCoachPrototypeActiveSession.v03";
  const TODAY_SESSION_KEY = "eikomiCoachPrototypeTodaySession.v03";
  const TEXT_STUDY_PROGRESS_KEY = "eikomiCoachTextStudyProgress.v01";
  const DAILY_READING_COMPLETION_KEY = "eikomiCoachDailyReadingCompletion.v01";
  const SELF_REVIEW_KEY = "eikomiCoachSelfReview.v01";
  const PROBLEM_CATEGORY_COMPLETION_KEY = "eikomiCoachProblemCategoryCompletion.v01";
  const MATERIAL_ACTIVITY_KEY = "eikomiCoachMaterialActivity.v01";

  const questions = (typeof QUESTIONS !== "undefined" ? QUESTIONS : [])
    .filter(q => q && q.id && q.choices && q.choices.length === 4)
    .filter(q => !["hold", "retired"].includes(q.status));

  const focusTypes = new Set([
    "grammar_focus", "translation_point",
    // Phase2-1.38: 定期テスト形式の少数試作
    "test_full_translation", "test_japanese_to_english", "test_phrase_build",
    "self_translation", "self_japanese_to_english"
  ]);
  const writingTypes = new Set(["mini_test"]);
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
    "story_outline",
    // Phase2-1.38: 定期テスト形式の少数試作
    "test_word_form",
    "test_phrase_completion",
    "test_sentence_insertion"
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
      lead: "FOCUS番号を選び、本文・構文・問題を教材ごとに確認します。",
      printLabel: "FOCUS別に選ぶ",
      icon: "🔎"
    },
    reading: {
      title: "Cutting Edge読解",
      lead: "Y番号を選び、音読・文の分析・問題演習を教材ごとに進めます。",
      printLabel: "Y番号別に選ぶ",
      icon: "📘"
    },
    writing: {
      title: "Insight Writing",
      lead: "プリント番号を選び、英作文・語法問題を確認します。",
      printLabel: "プリント別に選ぶ",
      icon: "✍️"
    },
    vocab: {
      title: "重要単語",
      lead: "テスト回・日付・セットから範囲を選んで確認します。",
      printLabel: "プリント別に選ぶ",
      icon: "🧩"
    }
  };

  const modeTitles = {
    today: "今日の10問",
    focus: "FOCUS構文",
    reading: "Cutting Edge読解",
    writing: "Insight Writing",
    vocab: "重要単語",
    mistakes: "今日やる復習",
    reviewToday: "今日やる復習",
    reviewAll: "すべての復習",
    materialPrint: "プリント別",
    testPrep: "テスト対策",
    sessionMistakes: "確認ポイントだけ"
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
    resultAction: null,
    currentReaderBundle: null,
    currentReaderIndex: 0,
    currentReaderMode: null,
    currentReaderStudyType: "breakdown",
    currentProblemMaterial: null,
    currentProblemPrintName: null,
    currentProblemCategory: "all",
    replaceMaterialId: null
  };

  const el = (id) => document.getElementById(id);
  const views = Array.from(document.querySelectorAll(".view"));
  const navItems = Array.from(document.querySelectorAll(".nav-item"));

  function loadRecords() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }

  function loadJsonStorage(key, fallback = {}) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value && typeof value === "object" ? value : fallback;
    } catch {
      return fallback;
    }
  }

  function saveJsonStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }


  function problemCategoryCompletionId(material, printName, category) {
    return [material, printName, category || "all"].map(value => String(value || "").trim()).join("::");
  }

  function getProblemCategoryCompletion(material, printName, category) {
    const all = loadJsonStorage(PROBLEM_CATEGORY_COMPLETION_KEY, {});
    return all[problemCategoryCompletionId(material, printName, category)] || null;
  }

  function markProblemCategoryComplete(material, printName, category) {
    if (!material || !printName) return;
    const all = loadJsonStorage(PROBLEM_CATEGORY_COMPLETION_KEY, {});
    const key = problemCategoryCompletionId(material, printName, category);
    all[key] = {
      material,
      printName,
      category: category || "all",
      appDate: getAppTodayDate(),
      completedAt: new Date().toISOString()
    };
    saveJsonStorage(PROBLEM_CATEGORY_COMPLETION_KEY, all);
  }

  function formatCompletionDate(appDate) {
    const match = String(appDate || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return "";
    return `${Number(match[2])}/${Number(match[3])}完了`;
  }

  function getMaterialLatestAttemptDate(items) {
    let latest = null;
    (items || []).forEach(question => {
      const record = state.records[question.id];
      const candidate = record?.lastAnsweredAt
        || record?.attempts?.map(attempt => attempt.answeredAt).filter(Boolean).sort().at(-1)
        || null;
      if (candidate && (!latest || String(candidate) > String(latest))) latest = candidate;
    });
    return toAppDate(latest);
  }

  function formatMaterialAttemptStatus(items) {
    const latestDate = getMaterialLatestAttemptDate(items);
    if (!latestDate) return "未着手";
    const match = latestDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return "着手済み";
    return `最終着手 ${Number(match[2])}/${Number(match[3])}`;
  }

  function materialActivityId(activityType, materialId) {
    return `${String(activityType || "").trim()}::${String(materialId || "").trim()}`;
  }

  function markMaterialActivity(activityType, materialId) {
    const type = String(activityType || "").trim();
    const id = String(materialId || "").trim();
    if (!type || !id) return;
    const all = loadJsonStorage(MATERIAL_ACTIVITY_KEY, {});
    all[materialActivityId(type, id)] = {
      activityType: type,
      materialId: id,
      appDate: getAppTodayDate(),
      startedAt: new Date().toISOString()
    };
    saveJsonStorage(MATERIAL_ACTIVITY_KEY, all);
  }

  function getMaterialActivityDate(activityType, materialId) {
    const all = loadJsonStorage(MATERIAL_ACTIVITY_KEY, {});
    const item = all[materialActivityId(activityType, materialId)];
    return toAppDate(item?.startedAt || item?.appDate || null);
  }

  function formatActivityDate(dateValue) {
    const appDate = toAppDate(dateValue);
    if (!appDate) return "未着手";
    const match = appDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return "着手済み";
    return `最終着手 ${Number(match[2])}/${Number(match[3])}`;
  }

  function appendActionWithStatus(target, button, statusText) {
    const wrap = document.createElement("div");
    wrap.className = "material-action-with-status";
    const status = document.createElement("small");
    status.className = "material-action-status";
    status.textContent = statusText || "未着手";
    wrap.append(button, status);
    target.appendChild(wrap);
  }

  function markCurrentProblemCategoryCompleteIfEligible() {
    if (state.currentMode !== "materialPrint") return;
    const options = state.currentOptions || {};
    const material = options.material;
    const printName = options.printName;
    const category = options.category || "all";
    if (!material || !printName) return;
    const fullCount = questionsForMaterialPrint(material, printName, category).length;
    if (!fullCount || state.session.length !== fullCount || state.sessionResults.length !== fullCount) return;
    markProblemCategoryComplete(material, printName, category);
  }

  function getTextStudyProgress(materialId) {
    const all = loadJsonStorage(TEXT_STUDY_PROGRESS_KEY, {});
    const item = all[String(materialId || "").trim()];
    if (!item || !Number.isInteger(item.sentenceIndex) || item.sentenceIndex < 0) return null;
    return item;
  }

  function saveTextStudyProgress(materialId, sentenceIndex) {
    const id = String(materialId || "").trim();
    if (!id) return;
    const all = loadJsonStorage(TEXT_STUDY_PROGRESS_KEY, {});
    all[id] = { sentenceIndex, updatedAt: new Date().toISOString() };
    saveJsonStorage(TEXT_STUDY_PROGRESS_KEY, all);
  }

  function clearTextStudyProgress(materialId) {
    const id = String(materialId || "").trim();
    const all = loadJsonStorage(TEXT_STUDY_PROGRESS_KEY, {});
    delete all[id];
    saveJsonStorage(TEXT_STUDY_PROGRESS_KEY, all);
  }

  function getTodayReadingCompletion() {
    const item = loadJsonStorage(DAILY_READING_COMPLETION_KEY, {});
    return item?.appDate === getAppTodayDate() ? item : null;
  }

  function markTodayReadingComplete(materialId) {
    saveJsonStorage(DAILY_READING_COMPLETION_KEY, {
      appDate: getAppTodayDate(),
      materialId: String(materialId || "").trim(),
      completedAt: new Date().toISOString()
    });
  }

  function stopSpeechSynthesis() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  }

  function selfReviewKey(materialId, sentenceNo) {
    return `${String(materialId || "").trim()}::${Number(sentenceNo)}`;
  }

  function getSelfReviewMap() {
    return loadJsonStorage(SELF_REVIEW_KEY, {});
  }

  function setSelfReviewStatus(materialId, sentenceNo, status) {
    const all = getSelfReviewMap();
    const key = selfReviewKey(materialId, sentenceNo);
    all[key] = { materialId, sentenceNo: Number(sentenceNo), status, updatedAt: new Date().toISOString() };
    saveJsonStorage(SELF_REVIEW_KEY, all);
  }

  function getSelfReviewStatus(materialId, sentenceNo) {
    return getSelfReviewMap()[selfReviewKey(materialId, sentenceNo)]?.status || null;
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
    const leavingRulesListen = viewId !== "rulesListenView" && document.getElementById("rulesListenView")?.classList.contains("active");
    if (leavingRulesListen) window.RulesApp?.stopListen?.(false);
    const leavingTextStudy = viewId !== "textStudyView" && document.getElementById("textStudyView")?.classList.contains("active");
    if (leavingTextStudy) stopSpeechSynthesis();
    state.view = viewId;
    views.forEach(v => v.classList.toggle("active", v.id === viewId));
    navItems.forEach(n => n.classList.toggle("active", n.dataset.nav === viewId));
    if (viewId === "reviewView") renderReview();
    if (viewId === "analysisView") renderAnalysis();
    if (viewId === "homeView") renderHomeStats();
    if (viewId === "materialView" && state.currentMaterial) renderMaterialPicker(state.currentMaterial);
    if (viewId === "testPrepView") renderTestPrepView();
    if (viewId === "settingsView") renderSavedMaterials();
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

  function loadTodaySession() {
    try {
      const saved = JSON.parse(localStorage.getItem(TODAY_SESSION_KEY));
      if (!saved || saved.appDate !== getAppTodayDate() || !Array.isArray(saved.questionIds)) return null;
      const restored = saved.questionIds.map(id => questions.find(q => q.id === id)).filter(Boolean);
      return restored.length === saved.questionIds.length && restored.length ? restored : null;
    } catch {
      return null;
    }
  }

  function saveTodaySession(session) {
    localStorage.setItem(TODAY_SESSION_KEY, JSON.stringify({
      appDate: getAppTodayDate(),
      questionIds: session.map(q => q.id)
    }));
  }

  function buildTodaySession() {
    const saved = loadTodaySession();
    if (saved) return saved;

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

    const session = shuffle(result).slice(0, 10);
    if (session.length) saveTodaySession(session);
    return session;
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
      const matches = getHaystack(q).match(/Cutting Edge Y\d+|FOCUS \d+|Insight Writing \d+/g) || [];
      matches.forEach(name => names.add(name));
    });
    return [...names].sort((a, b) => a.localeCompare(b, "ja"));
  }

  function getRangeNumber(label) {
    const focus = String(label).match(/FOCUS (\d+)/);
    if (focus) return Number(focus[1]);
    const ce = String(label).match(/Y(\d+)/);
    if (ce) return Number(ce[1]);
    const writing = String(label).match(/Insight Writing (\d+)/);
    if (writing) return Number(writing[1]);
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
    if (material === "writing") return writingTypes.has(q.type) && getHaystack(q).includes(key);
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
      if (material === "writing" && writingTypes.has(q.type)) keys = haystack.match(/Insight Writing \d+/g) || [];
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

  function getMaterialProblemCategory(material, question) {
    if (material === "reading") {
      if (["vocab_context", "discourse_marker", "mini_context"].includes(question.type)) return "language";
      if (["reading_evidence", "choice_elimination", "number_compare", "fact_opinion", "story_sequence", "character_change", "story_outline"].includes(question.type)) return "readingSkill";
      if (["test_word_form", "test_phrase_completion", "test_sentence_insertion"].includes(question.type)) return "testStyle";
      return "content";
    }
    if (material === "focus") {
      if (["test_japanese_to_english", "test_phrase_build", "self_japanese_to_english"].includes(question.type)) return "production";
      if (["translation_point", "test_full_translation", "self_translation"].includes(question.type)) return "translation";
      return "structure";
    }
    return "all";
  }

  function materialProblemCategoryLabel(material, category) {
    const labels = material === "reading"
      ? { content: "本文を確認", language: "語句・文法を確認", readingSkill: "読み方を確認", testStyle: "テスト形式で確認" }
      : material === "focus"
        ? { structure: "構文を確認", translation: "和訳を確認", production: "構文を使う" }
        : { all: "まとめて確認" };
    return labels[category] || "問題を解く";
  }

  function questionsForMaterialPrint(material, printName, category = "all") {
    const list = questions.filter(q => materialMatchesGroup(q, material, printName));
    if (!category || category === "all") return list;
    return list.filter(q => getMaterialProblemCategory(material, q) === category);
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
    if (mode === "writing") return newAndDueFirst(byType(writingTypes)).slice(0, 10);
    if (mode === "vocab") return newAndDueFirst(questions.filter(q => q.type === "teacher_vocab")).slice(0, 10);
    if (mode === "mistakes" || mode === "reviewToday") return getTodayReviewQuestions();
    if (mode === "reviewAll") return sortDueReview(getDueQuestions());
    if (mode === "reviewDate") return sortDueReview(getDueQuestions().filter(q => getRecord(q.id).nextReviewAt === options.date));
    if (mode === "reviewOlder") {
      const border = addDays(getAppTodayDate(), -2);
      return sortDueReview(getDueQuestions().filter(q => getRecord(q.id).nextReviewAt < border));
    }
    if (mode === "print") return shuffle(questionsForPrint(options.printName));
    if (mode === "materialPrint") {
      const list = questionsForMaterialPrint(options.material, options.printName, options.category);
      if (options.ordered) {
        const categoryOrder = options.material === "reading"
          ? ["language", "content", "readingSkill", "testStyle"]
          : options.material === "focus"
            ? ["structure", "translation", "production"]
            : ["all"];
        return list
          .map((q, index) => ({ q, index, category: getMaterialProblemCategory(options.material, q) }))
          .sort((a, b) => {
            const ai = categoryOrder.indexOf(a.category);
            const bi = categoryOrder.indexOf(b.category);
            return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi) || a.index - b.index;
          })
          .map(item => item.q)
          .slice(0, 20);
      }
      return shuffle(list).slice(0, 20);
    }
    if (mode === "sessionMistakes") return (options.ids || []).map(id => questions.find(q => q.id === id)).filter(Boolean);
    if (mode === "testPrep") return prioritizedForTestPrep(questionsForTestPrep(options)).slice(0, 20);
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
    // クイズ開始元へ戻れるよう、直前の画面を記録する。
    // 結果画面やクイズ画面からの再実行時は、既存の戻り先を維持する。
    if (!["quizView", "resultView"].includes(state.view)) {
      state.quizReturnView = state.view || "homeView";
    }
    state.currentMode = mode;
    state.currentOptions = options;
    state.session = buildSession(mode, options);
    state.index = 0;
    state.selected = null;
    state.sessionResults = [];

    if (!state.session.length) {
      alert(mode === "reviewToday" || mode === "mistakes" ? "今日やる復習はありません。今はスッキリです。" : "このモードで出せる問題がまだありません。");
      return;
    }

    // どの問題モードでも「今日はここまで」から再開できるようにする。
    createOrUpdateSession();

    showView("quizView");
    renderQuestion();
  }

  function createOrUpdateSession() {
    const mode = state.currentMode === "mistakes" ? "reviewToday" : state.currentMode;
    const options = state.currentOptions || {};
    const session = {
      mode,
      title: mode === "materialPrint" && options.categoryLabel
        ? options.categoryLabel
        : modeTitles[mode] || modeTitles[state.currentMode] || "クイズ",
      questionIds: state.session.map(q => q.id),
      answeredIds: [],
      remainingIds: state.session.map(q => q.id),
      options,
      returnView: state.quizReturnView || "homeView",
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

    // 教材別・テスト対策・種類別なども、残っている問題が存在すれば再開可能。
    const validIds = session.remainingIds.filter(id => {
      const q = questions.find(item => item.id === id);
      return q && q.status !== "hold" && q.status !== "retired";
    });
    if (!validIds.length) return null;
    return { ...session, remainingIds: validIds };
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
    state.currentOptions = validated.options || {};
    state.quizReturnView = validated.returnView || "homeView";
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

    if (original.questionMode === "self_assessment") {
      renderSelfAssessmentQuestion(original, box);
      return;
    }

    q.displayChoices.forEach((choice, displayIndex) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice-button";
      btn.textContent = choice;
      btn.addEventListener("click", () => answerQuestion(displayIndex));
      box.appendChild(btn);
    });
  }

  function renderSelfAssessmentQuestion(q, box) {
    const note = document.createElement("p");
    note.className = "self-answer-instruction";
    note.textContent = q.selfInstruction || "紙か頭の中で答えてから、模範解答を確認しよう。";
    box.appendChild(note);

    const reveal = document.createElement("button");
    reveal.type = "button";
    reveal.className = "primary-button wide self-answer-reveal";
    reveal.textContent = "答えを見る";
    box.appendChild(reveal);

    const answerPanel = document.createElement("section");
    answerPanel.className = "self-answer-panel hidden";
    answerPanel.innerHTML = `
      <p class="self-answer-label">模範解答</p>
      <div class="self-answer-model">${escapeHtml(q.modelAnswer || "")}</div>
      ${q.keyPoints ? `<div class="self-answer-points"><strong>確認ポイント</strong><p>${escapeHtml(q.keyPoints)}</p></div>` : ""}
      <p class="self-answer-question">自分の答えはどうだった？</p>
      <div class="self-answer-actions">
        <button type="button" class="self-check-button" data-self-assessment="done">できた</button>
        <button type="button" class="self-check-button needs-review" data-self-assessment="review">要復習</button>
      </div>`;
    box.appendChild(answerPanel);

    reveal.addEventListener("click", () => {
      reveal.classList.add("hidden");
      answerPanel.classList.remove("hidden");
    });
    answerPanel.querySelector('[data-self-assessment="done"]')?.addEventListener("click", () => answerSelfAssessment(true));
    answerPanel.querySelector('[data-self-assessment="review"]')?.addEventListener("click", () => answerSelfAssessment(false));
  }

  function answerSelfAssessment(correct) {
    if (state.selected !== null) return;
    state.selected = correct ? 0 : 1;

    const originalQ = state.session[state.index];
    const r = getRecord(originalQ.id);
    const attemptMode = getAttemptMode(r);
    const countedAsMistake = !correct && attemptMode !== "new";

    document.querySelectorAll("[data-self-assessment]").forEach(btn => {
      btn.disabled = true;
      const isChosen = (correct && btn.dataset.selfAssessment === "done") || (!correct && btn.dataset.selfAssessment === "review");
      if (isChosen) btn.classList.add("selected");
    });

    applyLearningRule(r, correct, attemptMode);
    const attempt = {
      mode: attemptMode,
      selected: correct ? 0 : 1,
      selectedDisplayIndex: correct ? 0 : 1,
      correct,
      countedAsMistake,
      selfAssessed: true,
      answeredAt: new Date().toISOString(),
      appDate: getAppTodayDate()
    };
    r.attempts.push(attempt);
    r.lastResult = correct ? "correct" : "wrong";
    r.lastAnsweredAt = attempt.answeredAt;
    r.lastMode = state.currentMode;

    state.sessionResults.push({ question: originalQ, correct, countedAsMistake, attemptMode, selected: attempt.selected });
    saveRecords();
    updateActiveSessionAfterAnswer(originalQ.id);
    renderFeedback(originalQ, correct, countedAsMistake, attemptMode, r);
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
      markCurrentProblemCategoryCompleteIfEligible();
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

  function getHomeProgressStats() {
    const today = getAppTodayDate();
    const attempts = getAllAttemptsWithQuestionId();
    const todayAttempts = attempts.filter(a => (a.appDate || toAppDate(a.answeredAt)) === today);
    const todaySummaries = buildLearningSummaries(todayAttempts);
    const learnedIds = new Set();

    Object.values(state.records).forEach(r => {
      if ((r.attempts || []).length) learnedIds.add(r.questionId);
    });

    return {
      todayChallenge: todaySummaries.length,
      todayClear: todaySummaries.filter(item => item.status === "clean-clear" || item.status === "retry-clear").length,
      totalLearned: learnedIds.size
    };
  }

  function renderHomeStats() {
    const progress = getHomeProgressStats();
    el("statTodayChallenge").textContent = progress.todayChallenge;
    el("statTodayClear").textContent = progress.todayClear;
    el("statTotalLearned").textContent = progress.totalLearned;
    renderDailyReadingCard();
    renderContinueSlots();
  }

  function renderDailyReadingCard() {
    const slot = el("dailyReadingSlot");
    if (!slot) return;

    const summary = window.RulesApp?.getDailyReadingSummary?.();
    const lessonLine = summary?.ready
      ? `Rules Lesson ${escapeHtml(String(summary.lessonOrder))}　${escapeHtml(summary.title)}`
      : "Rulesの長文を少しずつ聞こう";
    const progressLine = summary?.ready
      ? `${summary.completedToday ? "✅ 今日は音読済み" : "次に聞くLesson"}・今月 ${summary.monthDays}日`
      : "教材を読み込むと、ここからワンタップで始められます。";
    slot.innerHTML = `
      <section class="daily-reading-card" aria-label="今日の音読">
        <div class="daily-reading-icon" aria-hidden="true">🎧</div>
        <div class="daily-reading-copy">
          <p class="eyebrow">Daily Reading</p>
          <strong>今日の音読</strong>
          <span>${lessonLine}</span>
          <small>${progressLine}</small>
        </div>
        <button type="button" class="primary-button daily-reading-start rules-listen-entry" ${summary&&!summary.ready?'disabled':''}>${summary?.completedToday?'もう少し聞く':'すぐに聞く'}</button>
      </section>`;
  }

  document.addEventListener("rules-ready", renderDailyReadingCard);
  document.addEventListener("rules-progress-updated", renderDailyReadingCard);

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

  function problemPickerCategories(material, printName) {
    const items = questionsForMaterialPrint(material, printName, "all");
    const order = material === "reading"
      ? ["content", "language", "readingSkill", "testStyle"]
      : material === "focus"
        ? ["structure", "translation", "production"]
        : [];
    return [
      { category: "all", label: "おすすめ順", count: items.length },
      ...order.map(category => ({
        category,
        label: materialProblemCategoryLabel(material, category),
        count: items.filter(q => getMaterialProblemCategory(material, q) === category).length
      })).filter(item => item.count > 0)
    ].filter(item => item.count > 0);
  }

  function renderProblemPicker() {
    const material = state.currentProblemMaterial;
    const printName = state.currentProblemPrintName;
    if (!material || !printName) return;
    const categories = problemPickerCategories(material, printName);
    if (!categories.some(item => item.category === state.currentProblemCategory)) {
      state.currentProblemCategory = categories[0]?.category || "all";
    }
    const title = el("problemPickerTitle");
    const summary = el("problemPickerSummary");
    const tabs = el("problemPickerTabs");
    const panel = el("problemPickerPanel");
    if (!title || !summary || !tabs || !panel) return;

    title.textContent = `${printName}　問題を解く`;
    summary.textContent = "タブを切り替えて、今やる内容をワンタッチで選べます。";
    tabs.innerHTML = categories.map(item => {
      const completion = getProblemCategoryCompletion(material, printName, item.category);
      const completedLabel = formatCompletionDate(completion?.appDate);
      return `
      <button type="button" class="reader-reading-tab ${item.category === state.currentProblemCategory ? "active" : ""}"
        role="tab" aria-selected="${item.category === state.currentProblemCategory ? "true" : "false"}"
        data-problem-picker-category="${escapeHtml(item.category)}">
        <span>${escapeHtml(item.label)}</span>
        <small>${item.count}問${completedLabel ? `・${escapeHtml(completedLabel)}` : ""}</small>
      </button>`;
    }).join("");

    const selected = categories.find(item => item.category === state.currentProblemCategory) || categories[0];
    if (!selected) {
      panel.innerHTML = `<p>この範囲には出題できる問題がありません。</p>`;
      return;
    }
    const description = selected.category === "all"
      ? "まずはおすすめ順で、範囲全体を確認します。"
      : `「${selected.label}」だけをまとめて確認します。`;
    panel.innerHTML = `
      <div class="problem-picker-copy">
        <strong>${escapeHtml(selected.label)}</strong>
        <p>${escapeHtml(description)}</p>
        <small>${selected.count}問</small>
      </div>
      <button type="button" class="primary-button wide problem-picker-start"
        data-material-print="${escapeHtml(material)}"
        data-print-name="${escapeHtml(printName)}"
        data-problem-category="${escapeHtml(selected.category)}"
        data-problem-ordered="${selected.category === "all" ? "true" : "false"}">
        ${selected.category === "all" ? "おすすめ順で始める" : "この種類を始める"}
      </button>`;
  }

  function openProblemPicker(material, printName) {
    state.currentProblemMaterial = material;
    state.currentProblemPrintName = printName;
    state.currentProblemCategory = "all";
    renderProblemPicker();
    showView("problemPickerView");
    window.scrollTo({ top: 0 });
  }

  function renderMaterialPicker(material) {
    const config = materialConfigs[material];
    if (!config) return;
    el("materialTitle").textContent = config.title;
    el("materialLead").textContent = config.lead;

    const box = el("materialActionBox");
    box.innerHTML = "";

    if (material === "reading" || material === "focus") {
      const guide = document.createElement("section");
      guide.className = "material-learning-guide";
      guide.innerHTML = material === "reading"
        ? `
          <strong>この教材でできること</strong>
          <div class="material-learning-steps">
            <span><b>1</b> 音読する</span>
            <span><b>2</b> 文をほどく</span>
            <span><b>3</b> 問題を解いて確認</span>
          </div>
          <small>音読は全文、文をほどくのは重要文・苦手文だけでOK。</small>`
        : `
          <strong>この教材でできること</strong>
          <div class="material-learning-steps">
            <span><b>1</b> 例文・中文を読む</span>
            <span><b>2</b> 構文をほどいて理解</span>
            <span><b>3</b> 訳・問題で確認</span>
          </div>
          <small>FOCUSは「構文が分かる・自分で訳せる」を目標にします。</small>`;
      box.appendChild(guide);
    }

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

    const roundMeta = {
      "1st": { label: "第一回定期テスト", order: 1 },
      "2nd": { label: "第二回定期テスト", order: 2 },
      common: { label: "共通・回次未設定", order: 9 }
    };
    const groupedByRound = new Map();
    groups.forEach(group => {
      const rounds = [...new Set(group.items.map(q => q.testRound).filter(Boolean))];
      const roundKey = rounds.length === 1 && (rounds[0] === "1st" || rounds[0] === "2nd") ? rounds[0] : "common";
      if (!groupedByRound.has(roundKey)) groupedByRound.set(roundKey, []);
      groupedByRound.get(roundKey).push(group);
    });

    const list = document.createElement("div");
    list.className = "material-round-list";

    [...groupedByRound.entries()]
      .sort((a, b) => (roundMeta[a[0]]?.order ?? 99) - (roundMeta[b[0]]?.order ?? 99))
      .forEach(([roundKey, roundGroups]) => {
        const details = document.createElement("details");
        details.className = "material-round-card";

        const totalQuestions = roundGroups.reduce((sum, group) => sum + group.total, 0);
        const totalReview = roundGroups.reduce((sum, group) => sum + group.reviewTotal, 0);
        const summary = document.createElement("summary");
        summary.className = "material-round-summary";
        summary.innerHTML = `
          <span class="material-round-summary-main">
            <strong>${escapeHtml(roundMeta[roundKey]?.label || roundKey)}</strong>
            <small>${roundGroups.length}範囲・全${totalQuestions}問${totalReview ? `・復習${totalReview}` : ""}</small>
          </span>
          <span class="material-round-toggle" aria-hidden="true"></span>
        `;
        details.appendChild(summary);

        const roundList = document.createElement("div");
        roundList.className = "material-range-list material-round-content";

        roundGroups.forEach(group => {
          const card = document.createElement("article");
          card.className = "material-study-card";

          const header = document.createElement("div");
          header.className = "material-study-card-header";
          header.innerHTML = `
            <div class="material-study-card-copy">
              <strong>${escapeHtml(group.label)}</strong>
              <small>未習得 ${group.counts.new}　復習 ${group.reviewTotal}　全 ${group.total}問</small>
            </div>
          `;
          card.appendChild(header);

          const mainActions = document.createElement("div");
          mainActions.className = "material-study-main-actions";

          const appendQuestionButton = target => {
            const startAllBtn = document.createElement("button");
            startAllBtn.type = "button";
            startAllBtn.className = "material-primary-action material-start-all";
            startAllBtn.dataset.openProblemMaterial = material;
            startAllBtn.dataset.openProblemPrint = group.key;
            startAllBtn.textContent = "📝 問題を解く";
            appendActionWithStatus(target, startAllBtn, formatMaterialAttemptStatus(group.items));
          };

          const appendQuestionCategoryMenu = target => {
            const problemMenu = document.createElement("section");
            problemMenu.className = "material-problem-menu material-category-tabs";

            const heading = document.createElement("div");
            heading.className = "material-category-tabs-heading";
            heading.innerHTML = `<strong>問題を種類から選ぶ</strong><small>タブを切り替えて、確認したい種類を選べます。</small>`;

            const tabList = document.createElement("div");
            tabList.className = "material-category-tab-list";
            tabList.setAttribute("role", "tablist");
            tabList.setAttribute("aria-label", "問題の種類");

            const panel = document.createElement("div");
            panel.className = "material-category-tab-panel";

            const categoryOrder = material === "reading"
              ? ["content", "language", "readingSkill", "testStyle"]
              : material === "focus"
                ? ["structure", "translation", "production"]
                : ["all"];

            const categories = categoryOrder.map(category => {
              const count = category === "all"
                ? group.items.length
                : group.items.filter(q => getMaterialProblemCategory(material, q) === category).length;
              return { category, count };
            }).filter(item => item.count > 0);

            const renderCategory = selectedIndex => {
              const selected = categories[selectedIndex];
              if (!selected) return;
              tabList.querySelectorAll(".material-category-tab").forEach((button, index) => {
                const active = index === selectedIndex;
                button.classList.toggle("active", active);
                button.setAttribute("aria-selected", active ? "true" : "false");
                button.tabIndex = active ? 0 : -1;
              });
              panel.innerHTML = "";
              const copy = document.createElement("div");
              copy.className = "material-category-tab-copy";
              copy.innerHTML = `<strong>${escapeHtml(materialProblemCategoryLabel(material, selected.category))}</strong><small>${selected.count}問あります</small>`;
              const startBtn = document.createElement("button");
              startBtn.type = "button";
              startBtn.className = "material-menu-action material-problem-category material-category-start";
              startBtn.dataset.materialPrint = material;
              startBtn.dataset.printName = group.key;
              startBtn.dataset.problemCategory = selected.category;
              startBtn.textContent = `この種類を解く（${selected.count}問）`;
              panel.append(copy, startBtn);
            };

            categories.forEach((item, index) => {
              const button = document.createElement("button");
              button.type = "button";
              button.className = "material-category-tab";
              button.setAttribute("role", "tab");
              button.setAttribute("aria-selected", index === 0 ? "true" : "false");
              button.tabIndex = index === 0 ? 0 : -1;
              button.innerHTML = `<span>${escapeHtml(materialProblemCategoryLabel(material, item.category))}</span><small>${item.count}</small>`;
              button.addEventListener("click", () => renderCategory(index));
              tabList.appendChild(button);
            });

            problemMenu.append(heading, tabList, panel);
            target.appendChild(problemMenu);
            renderCategory(0);
          };

          if (material === "reading") {
            const match = String(group.key).match(/Cutting Edge Y(\d+)/i);
            if (match) {
              const hasSecondRound = group.items.some(q => q.testRound === "2nd");
              const hasFirstRound = group.items.some(q => q.testRound === "1st");
              const textRound = hasSecondRound && !hasFirstRound ? "T2" : "T1";
              const textMaterialId = `${textRound}_CE_Y${String(Number(match[1])).padStart(2, "0")}`;

              const readingBtn = document.createElement("button");
              readingBtn.type = "button";
              readingBtn.className = "material-primary-action";
              readingBtn.dataset.openReadingMaterial = textMaterialId;
              readingBtn.textContent = "🔊 音読する";
              appendActionWithStatus(mainActions, readingBtn, formatActivityDate(getMaterialActivityDate("reading", textMaterialId)));

              const breakdownBtn = document.createElement("button");
              breakdownBtn.type = "button";
              breakdownBtn.className = "material-primary-action material-breakdown-action";
              breakdownBtn.dataset.openTextMaterial = textMaterialId;
              breakdownBtn.textContent = "🧩 文をほどく";
              appendActionWithStatus(mainActions, breakdownBtn, formatActivityDate(getMaterialActivityDate("breakdown", textMaterialId)));

              appendQuestionButton(mainActions);
              mainActions.classList.add("has-three-actions");

            } else {
              appendQuestionButton(mainActions);
            }
          } else if (material === "focus") {
            const match = String(group.key).match(/FOCUS (\d+)/i);
            if (match) {
              const hasSecondRound = group.items.some(q => q.testRound === "2nd");
              const hasFirstRound = group.items.some(q => q.testRound === "1st");
              const textRound = hasSecondRound && !hasFirstRound ? "T2" : "T1";
              const focusNo = String(Number(match[1])).padStart(2, "0");

              const readingBtn = document.createElement("button");
              readingBtn.type = "button";
              readingBtn.className = "material-primary-action";
              readingBtn.dataset.openReadingMaterial = `${textRound}_FOCUS_${focusNo}_EXAMPLE`;
              readingBtn.textContent = "🔊 音読する";
              appendActionWithStatus(mainActions, readingBtn, formatActivityDate(getMaterialActivityDate("reading", `${textRound}_FOCUS_${focusNo}_EXAMPLE`)));

              const breakdownBtn = document.createElement("button");
              breakdownBtn.type = "button";
              breakdownBtn.className = "material-primary-action material-breakdown-action";
              breakdownBtn.dataset.openTextMaterial = `${textRound}_FOCUS_${focusNo}_EXAMPLE`;
              breakdownBtn.textContent = "🧩 文をほどく";
              appendActionWithStatus(mainActions, breakdownBtn, formatActivityDate(getMaterialActivityDate("breakdown", `${textRound}_FOCUS_${focusNo}_EXAMPLE`)));

              appendQuestionButton(mainActions);
              mainActions.classList.add("has-three-actions");

            } else {
              appendQuestionButton(mainActions);
            }
          } else {
            appendQuestionButton(mainActions);
          }

          card.appendChild(mainActions);
          roundList.appendChild(card);
        });

        details.appendChild(roundList);
        list.appendChild(details);
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

  async function renderReview() {
    const box = el("reviewList");
    if (!box) return;
    box.innerHTML = `<p class="empty-text">本人が「要復習」にした文を確認しています…</p>`;

    const items = Object.values(getSelfReviewMap())
      .filter(item => item?.status === "needs_review")
      .sort((a, b) => String(b.updatedAt || "").localeCompare(String(a.updatedAt || "")));

    if (!items.length) {
      box.innerHTML = `<div class="review-item"><strong>自分で選んだ復習はありません</strong><p>本文学習で「要復習」にした文だけ、ここに残ります。HOMEの「今日やる復習」はシステムが自動で選びます。</p></div>`;
      return;
    }

    const materialIds = [...new Set(items.map(item => item.materialId))];
    const bundles = new Map();
    await Promise.all(materialIds.map(async id => {
      try { bundles.set(id, await getMaterialBundle(id)); } catch {}
    }));

    box.innerHTML = items.map(item => {
      const bundle = bundles.get(item.materialId);
      const row = bundle?.materials?.find(r => Number(r.sentenceNo) === Number(item.sentenceNo));
      const preview = row?.english || "教材本文を読み込むと、この文をもう一度確認できます。";
      return `
        <article class="review-item self-review-item">
          <div class="review-item-top">
            <span>${escapeHtml(materialDisplayTitle(item.materialId))}</span>
            <span class="review-badge">第${Number(item.sentenceNo)}文</span>
          </div>
          <strong>要復習にした文</strong>
          <p>${escapeHtml(preview)}</p>
          <button type="button" class="secondary-button" data-open-self-review="${escapeHtml(item.materialId)}" data-sentence-no="${Number(item.sentenceNo)}">この文をもう一度</button>
        </article>`;
    }).join("");
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

  // v0.4 Phase2-1.6: 教材ごとの学習バランス集計（今後教材が増えても自動集計できるよう、
  // 固定リストではなくsource文字列から動的に分類する）
  function getMaterialCategory(q) {
    if (!q) return "その他";
    if (q.type === "teacher_vocab") return "重要単語";
    const source = q.source || "";
    if (source.includes("重要単語")) return "重要単語";
    if (source.includes("Cutting Edge")) return "Cutting Edge";
    if (source.includes("FOCUS")) return "FOCUS";
    if (source.includes("Insight")) return "Insight Writing";
    const match = source.match(/^[^\s（(／/]+/);
    return (match && match[0]) || "その他";
  }

  function getRecentMaterialCounts(days = 7) {
    const today = getAppTodayDate();
    const since = addDays(today, -(days - 1));
    const counts = {};
    getAllAttemptsWithQuestionId().forEach(a => {
      const date = a.appDate || toAppDate(a.answeredAt);
      if (!date || date < since || date > today) return;
      const category = getMaterialCategory(getQuestionById(a.questionId));
      counts[category] = (counts[category] || 0) + 1;
    });
    return counts;
  }

  // v0.4 Phase2-1.6: 今日のメモはAI風の文言ではなく、直近7日間の教材バランスから
  // ルールベースで自然な文章を組み立てる。
  function buildTodayMemo(materialCounts) {
    const focus = materialCounts["FOCUS"] || 0;
    const cuttingEdge = materialCounts["Cutting Edge"] || 0;
    const vocab = materialCounts["重要単語"] || 0;
    const readingTotal = focus + cuttingEdge;
    const total = Object.values(materialCounts).reduce((sum, n) => sum + n, 0);

    if (total === 0) {
      return {
        badge: "学習開始直後",
        message: "まだ分析できる学習履歴がありません。\n教材から学習を始めると、ここに振り返りが表示されます。"
      };
    }

    if (readingTotal >= 3 && vocab === 0) {
      return {
        badge: "単語不足",
        message: "長文をよく頑張っています。\n先生指定単語も少し確認すると、さらに点につながりそうです。"
      };
    }

    const focusHeavy = focus >= 3 && (cuttingEdge === 0 || focus >= cuttingEdge * 3);
    const cuttingEdgeHeavy = cuttingEdge >= 3 && (focus === 0 || cuttingEdge >= focus * 3);

    if (focusHeavy) {
      return {
        badge: "FOCUS偏重",
        message: "最近はFOCUSを中心に学習しています。\n時間があればCutting Edgeも確認すると、さらにバランスよく復習できます。"
      };
    }

    if (cuttingEdgeHeavy) {
      return {
        badge: "Cutting Edge偏重",
        message: "最近はCutting Edgeをよく進めています。\nFOCUSも少し確認すると定期テスト対策がより安心です。"
      };
    }

    return {
      badge: "バランス良好",
      message: "最近は教材をバランスよく進められています😊\nこの調子で続けましょう。"
    };
  }

  function renderAnalysis() {
    const materialCounts = getRecentMaterialCounts(7);
    renderReadingHabit();
    renderTodayMemo(materialCounts);
    renderCheckPoints();
    renderMaterialBalance(materialCounts);
    renderRecentAttempts();
  }

  function renderReadingHabit() {
    const box = el("readingHabitCalendarBody");
    if (!box) return;
    if (window.RulesApp?.renderHabitCalendar) {
      window.RulesApp.renderHabitCalendar(box);
    } else {
      box.innerHTML = `<p class="muted">Rulesの長文を読み込むと、ここに音読カレンダーが表示されます。</p>`;
    }
  }

  function renderTodayMemo(materialCounts) {
    const body = el("todayMemoBody");
    if (!body) return;
    const memo = buildTodayMemo(materialCounts);
    const messageHtml = escapeHtml(memo.message).replace(/\n/g, "<br>");
    body.innerHTML = `
      <span class="teacher-badge">${escapeHtml(memo.badge)}</span>
      <p class="teacher-message">${messageHtml}</p>
    `;
  }

  function renderCheckPoints() {
    const box = el("checkPointsList");
    if (!box) return;
    const topInfo = getTopMistakeInfo();
    const stats = topInfo.stats.slice(0, 3);
    const scopeLabel = topInfo.scope === "today" ? "今日の確認ポイントTOP3" : "最近の確認ポイントTOP3";

    const statsHtml = stats.length
      ? stats.map(item => `<div class="tag-item"><span>${escapeHtml(item.label)}</span><strong>${item.count}</strong></div>`).join("")
      : `<div class="tag-item"><span>確認ポイント</span><strong>なし</strong></div>`;

    box.innerHTML = `
      <p class="checkpoints-scope-label">${escapeHtml(scopeLabel)}</p>
      <div class="tag-list">${statsHtml}</div>
    `;
  }

  function renderMaterialBalance(materialCounts) {
    const box = el("materialBalanceList");
    if (!box) return;
    const entries = Object.entries(materialCounts).sort((a, b) => b[1] - a[1]);
    if (!entries.length) {
      box.innerHTML = `<div class="tag-item"><span>学習ログ</span><strong>まだありません</strong></div>`;
      return;
    }
    const max = Math.max(...entries.map(([, count]) => count));
    box.innerHTML = entries.map(([label, count]) => {
      const width = max ? Math.round((count / max) * 100) : 0;
      return `
        <div class="material-balance-row">
          <span class="material-balance-label">${escapeHtml(label)}</span>
          <div class="material-balance-bar"><span style="width:${width}%"></span></div>
          <strong class="material-balance-count">${count}問</strong>
        </div>`;
    }).join("");
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
    const todaySummaries = buildLearningSummaries(todayAttempts);
    const previousDate = getPreviousLearningDate(attempts, today);
    const previousAttempts = previousDate
      ? attempts.filter(a => (a.appDate || toAppDate(a.answeredAt)) === previousDate)
      : [];
    const previousSummaries = buildLearningSummaries(previousAttempts);

    const todayToggleBtn = el("toggleTodayLearningBtn");
    const todayBlock = el("todayLearningBlock");
    if (todayToggleBtn) {
      todayToggleBtn.textContent = state.showTodayLearning
        ? "今日の学習ログを閉じる"
        : `今日の学習ログを開く（${todaySummaries.length}問）`;
    }
    todayBlock?.classList.toggle("hidden", !state.showTodayLearning);

    if (state.showTodayLearning) {
      renderLearningList("today", todaySummaries, el("todayLearningList"), el("todayLearningPager"), "今日の学習はまだありません");
    } else {
      if (el("todayLearningList")) el("todayLearningList").innerHTML = "";
      if (el("todayLearningPager")) el("todayLearningPager").innerHTML = "";
    }

    const toggleBtn = el("togglePreviousLearningBtn");
    const previousBlock = el("previousLearningBlock");
    if (!state.showTodayLearning || !previousSummaries.length) {
      toggleBtn?.classList.add("hidden");
      previousBlock?.classList.add("hidden");
      return;
    }

    toggleBtn?.classList.remove("hidden");
    toggleBtn.textContent = state.showPreviousLearning ? "前回の学習を閉じる" : `前回の学習も見る（${previousDate} / ${previousSummaries.length}問）`;
    previousBlock?.classList.toggle("hidden", !state.showPreviousLearning);
    if (state.showPreviousLearning) {
      renderLearningList("previous", previousSummaries, el("previousLearningList"), el("previousLearningPager"), "前回の学習はありません");
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
    const materialCounts = getRecentMaterialCounts(7);
    const memo = buildTodayMemo(materialCounts);
    const topInfo = getTopMistakeInfo();
    const stats = topInfo.stats.slice(0, 3);
    const attempts = getTodayAttemptsForLog();

    const lines = [];
    lines.push("英コミュCoach 学習ログ");
    lines.push(`日付：${today}`);
    lines.push("");
    lines.push("【今日のメモ】");
    lines.push(memo.badge);
    lines.push(memo.message);
    lines.push("");
    lines.push("【確認ポイントTOP3】");
    if (stats.length) {
      stats.forEach((item, index) => lines.push(`${index + 1}. ${item.label}：${item.count}回`));
    } else {
      lines.push("確認ポイントはまだ少なめです。");
    }
    lines.push("");
    lines.push("【最近の学習バランス（直近7日）】");
    const balanceEntries = Object.entries(materialCounts).sort((a, b) => b[1] - a[1]);
    if (balanceEntries.length) {
      balanceEntries.forEach(([label, count]) => lines.push(`${label}：${count}問`));
    } else {
      lines.push("学習ログはまだありません。");
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

  // v0.4 AI分析用JSON出力: 復習プリント自動生成ツール（Claude側管理）向けに、
  // 人間可読のテキストではなく構造化データをそのまま渡す。
  function getMasteryCounts() {
    const counts = { cleared: 0, review: 0, weak: 0, new: 0 };
    questions.forEach(q => {
      const status = state.records[q.id]?.statusInApp || "new";
      counts[status] = (counts[status] || 0) + 1;
    });
    return counts;
  }

  function getUnlearnedVocab(sampleSize = 10) {
    const vocabQuestions = questions.filter(q => q.type === "teacher_vocab");
    const unlearned = vocabQuestions.filter(q => {
      const status = state.records[q.id]?.statusInApp;
      return !status || status === "new";
    });
    const sample = shuffle(unlearned).slice(0, sampleSize).map(q => {
      const word = (q.title || "").replace(/^重要単語[:：]\s*/, "").trim();
      return word || q.title || q.id;
    });
    return { count: unlearned.length, sample };
  }

  // v0.4 復習プリント用: 弱点タグに紐づく実際の問題内容（英文・解説）を、
  // 重複を避けつつ弱点上位から集める。並べ替え問題などの素材に使う。
  function getWeakPointQuestionDetails(stats, maxPerTag = 2) {
    const seen = new Set();
    const details = [];
    stats.forEach(stat => {
      (stat.questionIds || []).slice(0, maxPerTag).forEach(id => {
        if (seen.has(id)) return;
        const q = getQuestionById(id);
        if (!q) return;
        seen.add(id);
        details.push({
          id: q.id,
          mistakeTag: mistakeTagLabel(q.mistakeTag),
          source: q.source || null,
          title: q.title || null,
          question: q.question || null,
          explanation: q.explanation || null
        });
      });
    });
    return details;
  }

  function buildAnalysisJSON() {
    const today = getAppTodayDate();
    const materialCounts = getRecentMaterialCounts(7);
    const memo = buildTodayMemo(materialCounts);
    const topInfo = getTopMistakeInfo();
    const stats = topInfo.stats.slice(0, 3);
    const attempts = getTodayAttemptsForLog();
    const readingHabit = window.RulesApp?.getDailyReadingSummary?.() || null;

    return {
      date: today,
      todayMemo: { badge: memo.badge, message: memo.message },
      weakPoints: stats.map(s => ({
        tag: s.tag,
        label: s.label,
        count: s.count,
        questionIds: s.questionIds || []
      })),
      materialBalance: Object.entries(materialCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([category, count]) => ({ category, count })),
      mastery: getMasteryCounts(),
      readingHabit: readingHabit ? { monthDays: readingHabit.monthDays || 0 } : null,
      unlearnedVocab: getUnlearnedVocab(10),
      weakPointQuestions: getWeakPointQuestionDetails(stats),
      hasAnswerLog: attempts.length > 0,
      answerLog: attempts.map(a => {
        const q = getQuestionById(a.questionId);
        return {
          questionId: a.questionId,
          source: q?.source || null,
          type: q?.type || null,
          title: q?.title || null,
          result: a.correct ? "correct" : "wrong",
          selected: q?.choices?.[a.selected] ?? null,
          correct: q?.choices?.[q?.answer] ?? null,
          mistakeTag: q ? mistakeTagLabel(q.mistakeTag) : null,
          answeredAt: a.answeredAt || null
        };
      })
    };
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

  async function copyAnalysisJson() {
    const btn = el("copyAnalysisJsonBtn");
    const original = btn?.textContent || "AI分析用JSONをコピー";
    try {
      await copyTextToClipboard(JSON.stringify(buildAnalysisJSON(), null, 2));
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

  function buildLearningSummaries(attempts) {
    const grouped = new Map();
    attempts.forEach(attempt => {
      if (!attempt.questionId) return;
      if (!grouped.has(attempt.questionId)) grouped.set(attempt.questionId, []);
      grouped.get(attempt.questionId).push(attempt);
    });

    return [...grouped.entries()].map(([questionId, items]) => {
      const sorted = [...items].sort((a, b) => new Date(a.answeredAt || 0) - new Date(b.answeredAt || 0));
      const first = sorted[0];
      const last = sorted[sorted.length - 1];
      let status = "needs-check";
      if (sorted.length === 1 && first?.correct) status = "clean-clear";
      else if (sorted.length >= 2 && last?.correct) status = "retry-clear";

      return {
        questionId,
        attempts: sorted,
        first,
        last,
        status,
        attemptCount: sorted.length,
        latestAnsweredAt: last?.answeredAt || ""
      };
    }).sort((a, b) => new Date(b.latestAnsweredAt || 0) - new Date(a.latestAnsweredAt || 0));
  }

  function trimQuestionText(text, length = 72) {
    const compact = String(text || "問題文データなし").replace(/\s+/g, " ").trim();
    return compact.length > length ? `${compact.slice(0, length)}…` : compact;
  }

  function renderLearningList(kind, summaries, listEl, pagerEl, emptyText) {
    if (!listEl || !pagerEl) return;
    const pageSize = 20;
    const maxPage = Math.max(0, Math.ceil(summaries.length / pageSize) - 1);
    state.learningPages[kind] = Math.min(state.learningPages[kind] || 0, maxPage);
    const page = state.learningPages[kind];
    const start = page * pageSize;
    const pageItems = summaries.slice(start, start + pageSize);

    listEl.innerHTML = "";
    pagerEl.innerHTML = "";
    if (!summaries.length) {
      listEl.innerHTML = `<div class="learning-empty">${escapeHtml(emptyText)}</div>`;
      return;
    }

    pageItems.forEach(summary => listEl.appendChild(createLearningCard(summary)));

    const info = document.createElement("span");
    info.textContent = `${start + 1}〜${Math.min(start + pageSize, summaries.length)}問を表示中 / 全${summaries.length}問`;
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

  function createLearningCard(summary) {
    const q = questions.find(item => item.id === summary.questionId);
    const correctText = q?.choices?.[q.answer] ?? "正解データなし";
    const selectedText = q?.choices?.[summary.last?.selected] ?? "選択記録なし";
    const card = document.createElement("article");
    const statusClass = `is-${summary.status}`;
    const isCleanClear = summary.status === "clean-clear";
    const isRetryClear = summary.status === "retry-clear";
    const isNeedsCheck = summary.status === "needs-check";
    const icon = isCleanClear ? "✅" : isRetryClear ? "🟡" : "❌";
    const statusText = isCleanClear ? "1回目でクリア" : isRetryClear ? `${summary.attemptCount}回目でクリア` : "確認ポイント";
    const pillClass = isCleanClear ? "clean" : isRetryClear ? "retry" : "needs";
    const source = q?.source || "参照元未設定";
    const title = q?.title || summary.questionId;

    card.className = `learning-card ${statusClass}`;
    card.innerHTML = `
      <div class="learning-card-head">
        <div class="learning-card-title">
          <span class="learning-icon" aria-hidden="true">${icon}</span>
          <strong>${escapeHtml(source)}｜${escapeHtml(title)}</strong>
        </div>
        <span class="result-pill ${pillClass}">${escapeHtml(statusText)}</span>
      </div>
      <p class="learning-question">${escapeHtml(trimQuestionText(q?.question))}</p>
      ${isNeedsCheck ? `<p><b>正解：</b><span class="answer-text">${escapeHtml(correctText)}</span></p>` : ""}
      ${isNeedsCheck ? `<p><b>選んだ答え：</b><span class="wrong-text">${escapeHtml(selectedText)}</span></p>` : ""}
      ${isNeedsCheck ? `<small>ポイント：${escapeHtml(mistakeTagLabel(q?.mistakeTag))}</small>` : ""}
    `;
    return card;
  }


  // --- Phase2-1.6: 教材CSV（本文学習） ---
  const MATERIAL_DB_NAME = "eikomiCoachMaterials.v01";
  const MATERIAL_DB_VERSION = 1;
  const MATERIAL_STORE = "materials";
  const GUIDE_STORE = "sentenceGuides";

  function openMaterialDb() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(MATERIAL_DB_NAME, MATERIAL_DB_VERSION);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(MATERIAL_STORE)) {
          const store = db.createObjectStore(MATERIAL_STORE, { keyPath: "key" });
          store.createIndex("materialId", "materialId", { unique: false });
        }
        if (!db.objectStoreNames.contains(GUIDE_STORE)) {
          const store = db.createObjectStore(GUIDE_STORE, { keyPath: "key" });
          store.createIndex("materialId", "materialId", { unique: false });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("教材データベースを開けませんでした。"));
    });
  }

  function idbRequest(request) {
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("教材データの保存に失敗しました。"));
    });
  }

  async function getAllFromStore(storeName) {
    const db = await openMaterialDb();
    try {
      const tx = db.transaction(storeName, "readonly");
      return await idbRequest(tx.objectStore(storeName).getAll());
    } finally {
      db.close();
    }
  }

  async function getByMaterialId(storeName, materialId) {
    const normalizedId = String(materialId ?? "").trim();
    const db = await openMaterialDb();
    try {
      const tx = db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      let indexedRows = [];
      if (store.indexNames.contains("materialId")) {
        indexedRows = await idbRequest(store.index("materialId").getAll(normalizedId));
      }
      if (indexedRows.length) return indexedRows;

      // Fallback: older / inconsistent IndexedDB states may fail exact index lookup.
      // Scan the store and compare normalized materialId values instead.
      const allRows = await idbRequest(store.getAll());
      return allRows.filter(row => String(row?.materialId ?? "").trim() === normalizedId);
    } finally {
      db.close();
    }
  }

  function transactionDone(tx) {
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error || new Error("教材データの保存に失敗しました。"));
      tx.onabort = () => reject(tx.error || new Error("教材データの保存が中断されました。"));
    });
  }

  async function getKeysByMaterialId(storeName, materialId) {
    const normalizedId = String(materialId ?? "").trim();
    const db = await openMaterialDb();
    try {
      const tx = db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      let keys = [];
      if (store.indexNames.contains("materialId")) {
        keys = await idbRequest(store.index("materialId").getAllKeys(normalizedId));
      }
      if (keys.length) return keys;

      // Fallback for older/inconsistent stores: scan rows and return their primary keys.
      const rows = await idbRequest(store.getAll());
      return rows
        .filter(row => String(row?.materialId ?? "").trim() === normalizedId)
        .map(row => row.key)
        .filter(Boolean);
    } finally {
      db.close();
    }
  }

  async function replaceMaterialData(materialId, materials, guides) {
    const [oldMaterials, oldGuides] = await Promise.all([
      getKeysByMaterialId(MATERIAL_STORE, materialId),
      getKeysByMaterialId(GUIDE_STORE, materialId)
    ]);
    const db = await openMaterialDb();
    try {
      const tx = db.transaction([MATERIAL_STORE, GUIDE_STORE], "readwrite");
      const materialStore = tx.objectStore(MATERIAL_STORE);
      const guideStore = tx.objectStore(GUIDE_STORE);
      oldMaterials.forEach(key => materialStore.delete(key));
      oldGuides.forEach(key => guideStore.delete(key));
      materials.forEach(row => materialStore.put(row));
      guides.forEach(row => guideStore.put(row));
      await transactionDone(tx);
    } finally {
      db.close();
    }
  }

  async function deleteMaterialData(materialId) {
    const [materialKeys, guideKeys] = await Promise.all([
      getKeysByMaterialId(MATERIAL_STORE, materialId),
      getKeysByMaterialId(GUIDE_STORE, materialId)
    ]);
    const db = await openMaterialDb();
    try {
      const tx = db.transaction([MATERIAL_STORE, GUIDE_STORE], "readwrite");
      const materialStore = tx.objectStore(MATERIAL_STORE);
      const guideStore = tx.objectStore(GUIDE_STORE);
      materialKeys.forEach(key => materialStore.delete(key));
      guideKeys.forEach(key => guideStore.delete(key));
      await transactionDone(tx);
    } finally {
      db.close();
    }
  }

  // Unified material repository API. UI code should use these helpers instead of touching IndexedDB directly.
  async function getMaterialBundle(materialId) {
    const normalizedId = String(materialId ?? "").trim();
    if (!normalizedId) throw new Error("教材IDが指定されていません。");
    const [materials, guides] = await Promise.all([
      getByMaterialId(MATERIAL_STORE, normalizedId),
      getByMaterialId(GUIDE_STORE, normalizedId)
    ]);
    materials.sort((a, b) => Number(a.sentenceNo) - Number(b.sentenceNo));
    guides.sort((a, b) => Number(a.sentenceNo) - Number(b.sentenceNo));
    return { materialId: normalizedId, materials, guides };
  }

  async function removeMaterialBundle(materialId) {
    const normalizedId = String(materialId ?? "").trim();
    if (!normalizedId) throw new Error("教材IDが指定されていません。");
    await deleteMaterialData(normalizedId);
    const verify = await getMaterialBundle(normalizedId);
    if (verify.materials.length || verify.guides.length) {
      throw new Error("教材データを完全に削除できませんでした。もう一度お試しください。");
    }
  }

  function parseCsv(text) {
    const normalized = String(text || "").replace(/^\uFEFF/, "");
    const rows = [];
    let row = [];
    let field = "";
    let inQuotes = false;

    for (let i = 0; i < normalized.length; i += 1) {
      const ch = normalized[i];
      if (inQuotes) {
        if (ch === '"') {
          if (normalized[i + 1] === '"') {
            field += '"';
            i += 1;
          } else {
            inQuotes = false;
          }
        } else {
          field += ch;
        }
        continue;
      }
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ",") {
        row.push(field);
        field = "";
      } else if (ch === "\n") {
        row.push(field.replace(/\r$/, ""));
        if (row.some(value => value !== "")) rows.push(row);
        row = [];
        field = "";
      } else {
        field += ch;
      }
    }
    if (inQuotes) throw new Error("CSVの引用符が閉じていません。");
    row.push(field.replace(/\r$/, ""));
    if (row.some(value => value !== "")) rows.push(row);
    if (!rows.length) throw new Error("CSVが空です。");

    const headers = rows[0].map(h => h.trim());
    if (new Set(headers).size !== headers.length) throw new Error("CSVヘッダーに重複があります。");
    return rows.slice(1).map((values, index) => {
      if (values.length > headers.length) throw new Error(`${index + 2}行目の列数がヘッダーより多いです。`);
      const obj = {};
      headers.forEach((header, i) => { obj[header] = values[i] ?? ""; });
      return obj;
    });
  }

  function normalizePositiveInteger(value, label, rowNo, { optional = false } = {}) {
    const raw = String(value ?? "").trim();
    if (!raw && optional) return null;
    if (!/^\d+$/.test(raw) || Number(raw) < 1) throw new Error(`${rowNo}行目の${label}は正の整数にしてください。`);
    return Number(raw);
  }

  function validateMaterialsCsv(rows) {
    if (!rows.length) throw new Error("本文CSVにデータ行がありません。");
    const seen = new Set();
    const materialIds = new Set();
    return rows.map((row, index) => {
      const rowNo = index + 2;
      const materialId = String(row.materialId ?? "").trim();
      const english = String(row.english ?? "").trim();
      if (!materialId) throw new Error(`${rowNo}行目のmaterialIdが空です。`);
      if (!english) throw new Error(`${rowNo}行目のenglishが空です。`);
      const sentenceNo = normalizePositiveInteger(row.sentenceNo, "sentenceNo", rowNo);
      const paragraphNo = normalizePositiveInteger(row.paragraphNo, "paragraphNo", rowNo, { optional: true });
      const key = `${materialId}::${sentenceNo}`;
      if (seen.has(key)) throw new Error(`${rowNo}行目で materialId + sentenceNo が重複しています。`);
      seen.add(key);
      materialIds.add(materialId);
      return {
        key,
        materialId,
        paragraphNo,
        sentenceNo,
        english,
        translation: String(row.translation ?? "").trim(),
        readingTarget: /^(true|1|yes|対象)$/i.test(String(row.readingTarget ?? row.audioTarget ?? "").trim())
          ? true
          : /^(false|0|no|対象外)$/i.test(String(row.readingTarget ?? row.audioTarget ?? "").trim())
            ? false
            : undefined,
        importedAt: new Date().toISOString()
      };
    }).sort((a, b) => a.materialId.localeCompare(b.materialId) || a.sentenceNo - b.sentenceNo);
  }

  function validateGuidesCsv(rows, materialRows) {
    if (!rows.length) return [];
    const materialKeys = new Set(materialRows.map(row => row.key));
    const seen = new Set();
    const allowedStatus = new Set(["verified", "needs_review", "hold", ""]);
    return rows.map((row, index) => {
      const rowNo = index + 2;
      const materialId = String(row.materialId ?? "").trim();
      if (!materialId) throw new Error(`文ガイドCSV ${rowNo}行目のmaterialIdが空です。`);
      const sentenceNo = normalizePositiveInteger(row.sentenceNo, "sentenceNo", rowNo);
      const key = `${materialId}::${sentenceNo}`;
      if (seen.has(key)) throw new Error(`文ガイドCSV ${rowNo}行目で materialId + sentenceNo が重複しています。`);
      if (!materialKeys.has(key)) throw new Error(`文ガイドCSV ${rowNo}行目が、本文CSVにない文を参照しています。`);
      const validationStatus = String(row.validationStatus ?? "").trim();
      if (!allowedStatus.has(validationStatus)) throw new Error(`文ガイドCSV ${rowNo}行目のvalidationStatusが不正です。`);
      seen.add(key);
      const chunkText = String(row.chunkText ?? "").trim();
      const chunkTranslations = String(row.chunkTranslations ?? "").trim();
      const chunks = chunkText ? chunkText.split("|||").map(part => part.trim()).filter(Boolean) : [];
      const translations = chunkTranslations ? chunkTranslations.split("|||").map(part => part.trim()) : [];
      const subjectChunkIndexRaw = String(row.subjectChunkIndex ?? "").trim();
      const verbChunkIndexRaw = String(row.verbChunkIndex ?? "").trim();
      const subjectChunkIndex = subjectChunkIndexRaw === "" ? null : Number(subjectChunkIndexRaw);
      const verbChunkIndex = verbChunkIndexRaw === "" ? null : Number(verbChunkIndexRaw);

      if (chunks.length) {
        if (translations.length && translations.length !== chunks.length) {
          throw new Error(`文ガイドCSV ${rowNo}行目のchunkTextとchunkTranslationsの個数が一致しません。`);
        }
        for (const [label, idx] of [["subjectChunkIndex", subjectChunkIndex], ["verbChunkIndex", verbChunkIndex]]) {
          if (idx !== null && (!Number.isInteger(idx) || idx < 0 || idx >= chunks.length)) {
            throw new Error(`文ガイドCSV ${rowNo}行目の${label}がチャンク範囲外です。`);
          }
        }
      }

      const analysisChunksRaw = String(row.analysisChunks ?? "").trim();
      const analysisTranslationsRaw = String(row.analysisChunkTranslations ?? "").trim();
      const analysisParts = analysisChunksRaw ? analysisChunksRaw.split("|||").map(part => part.trim()).filter(Boolean) : [];
      const analysisTranslationParts = analysisTranslationsRaw ? analysisTranslationsRaw.split("|||").map(part => part.trim()) : [];
      if (analysisParts.length && analysisTranslationParts.length !== analysisParts.length) {
        throw new Error(`文ガイドCSV ${rowNo}行目のanalysisChunksとanalysisChunkTranslationsの個数が一致しません。`);
      }
      const subjectTarget = String(row.subjectTarget ?? row.subject ?? "").trim();
      const verbTarget = String(row.verbTarget ?? row.verb ?? "").trim();
      // subjectTarget / verbTarget は、画面に表示する学習用ラベル。
      // 複数の主語・動詞（"I / she / I"）、省略表示（"（省略）"）、
      // 短縮形を展開した表記（"have been learning"）など、英文の連続文字列と
      // 一致しない正当なデータがあるため、ここでは本文内の完全一致を必須にしない。
      // 本文との対応は materialId + sentenceNo、チャンク範囲は index 検証で保証する。

      return {
        key,
        materialId,
        sentenceNo,
        subject: String(row.subject ?? "").trim(),
        verb: String(row.verb ?? "").trim(),
        pattern: String(row.pattern ?? "").trim(),
        chunksLegacy: String(row.chunks ?? "").trim(),
        chunkText,
        structureNote: String(row.structureNote ?? "").trim(),
        translationPoint: String(row.translationPoint ?? "").trim(),
        subjectChunkIndex,
        verbChunkIndex,
        chunkTranslations,
        finalTranslation: String(row.finalTranslation ?? "").trim(),
        analysisChunks: String(row.analysisChunks ?? "").trim(),
        analysisChunkTranslations: String(row.analysisChunkTranslations ?? "").trim(),
        subjectTarget,
        verbTarget,
        validationStatus,
        importedAt: new Date().toISOString()
      };
    });
  }

  function readFileText(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = () => reject(reader.error || new Error(`${file.name} を読み込めませんでした。`));
      reader.readAsText(file, "UTF-8");
    });
  }

  function setCsvStatus(message, kind = "") {
    const box = el("csvImportStatus");
    if (!box) return;
    box.textContent = message;
    box.className = `csv-status${kind ? ` ${kind}` : ""}`;
  }

  function setMaterialBundleStatus(message, kind = "") {
    const box = el("materialBundleImportStatus");
    if (!box) return;
    box.textContent = message;
    box.className = `csv-status${kind ? ` ${kind}` : ""}`;
  }

  function materialImportVersionScore(file) {
    const source = `${file?.path || ""}/${file?.name || ""}`;
    const version = source.match(/_v(\d+)(?:[_\.](\d+))?/i);
    const versionScore = version ? Number(version[1]) * 1000 + Number(version[2] || 0) : 0;
    const finalBonus = /最終|final|verified/i.test(source) ? 1000000 : 0;
    return finalBonus + versionScore;
  }

  function isNormalMaterialCsv(file) {
    const name = String(file?.name || "").toLowerCase();
    const path = String(file?.path || file?.name || "").replace(/\\/g, "/").toLowerCase();
    if (!name.endsWith(".csv")) return false;
    if (path.includes("__macosx") || /(^|\/)sample(?:_csv)?\//i.test(path)) return false;
    return /_materials(?:_v\d+(?:[_\.]\d+)?)?\.csv$/i.test(name) ||
      /_sentence_guides(?:_v\d+(?:[_\.]\d+)?)?\.csv$/i.test(name);
  }

  function isMaterialsFilename(name) {
    return /_materials(?:_v\d+(?:[_\.]\d+)?)?\.csv$/i.test(String(name || ""));
  }

  function isGuidesFilename(name) {
    return /_sentence_guides(?:_v\d+(?:[_\.]\d+)?)?\.csv$/i.test(String(name || ""));
  }

  async function replaceMaterialBundles(packs) {
    const oldKeys = await Promise.all(packs.map(async pack => ({
      materialId: pack.materialId,
      materialKeys: await getKeysByMaterialId(MATERIAL_STORE, pack.materialId),
      guideKeys: pack.guidesProvided ? await getKeysByMaterialId(GUIDE_STORE, pack.materialId) : []
    })));
    const db = await openMaterialDb();
    try {
      const tx = db.transaction([MATERIAL_STORE, GUIDE_STORE], "readwrite");
      const materialStore = tx.objectStore(MATERIAL_STORE);
      const guideStore = tx.objectStore(GUIDE_STORE);
      oldKeys.forEach(group => {
        group.materialKeys.forEach(key => materialStore.delete(key));
        group.guideKeys.forEach(key => guideStore.delete(key));
      });
      packs.forEach(pack => {
        pack.materials.forEach(row => materialStore.put(row));
        if (pack.guidesProvided) pack.guides.forEach(row => guideStore.put(row));
      });
      await transactionDone(tx);
    } finally {
      db.close();
    }
  }

  async function buildNormalMaterialPacks(fileList) {
    if (!window.RulesStore?.normalizeInputs) {
      throw new Error("ZIP読込機能を初期化できませんでした。ページを再読み込みしてください。");
    }
    const expandedFiles = await window.RulesStore.normalizeInputs(fileList);
    const candidates = expandedFiles.filter(isNormalMaterialCsv);
    if (!candidates.length) {
      throw new Error("materials.csv / sentence_guides.csv が見つかりませんでした。READMEや検査レポート、sample_csvは自動的に除外します。");
    }

    const materialCandidates = [];
    const guideCandidates = [];
    for (const file of candidates) {
      const rows = parseCsv(await file.text());
      const ids = [...new Set(rows.map(row => String(row.materialId ?? "").trim()).filter(Boolean))];
      if (ids.length !== 1) throw new Error(`${file.name} のmaterialIdを1教材に統一してください。`);
      const item = { file, rows, materialId: ids[0], score: materialImportVersionScore(file) };
      if (isMaterialsFilename(file.name)) materialCandidates.push(item);
      else if (isGuidesFilename(file.name)) guideCandidates.push(item);
    }
    if (!materialCandidates.length) throw new Error("本文CSV（*_materials.csv）が見つかりませんでした。");

    const latestById = items => {
      const map = new Map();
      items.forEach(item => {
        const current = map.get(item.materialId);
        if (!current || item.score > current.score) map.set(item.materialId, item);
      });
      return map;
    };
    const materialsById = latestById(materialCandidates);
    const guidesById = latestById(guideCandidates);
    const orphanGuideIds = [...guidesById.keys()].filter(id => !materialsById.has(id));
    if (orphanGuideIds.length) {
      throw new Error(`本文CSVがない文ガイドがあります：${orphanGuideIds.join("、")}`);
    }

    const packs = [];
    for (const [materialId, materialItem] of materialsById.entries()) {
      const materials = validateMaterialsCsv(materialItem.rows);
      const guideItem = guidesById.get(materialId);
      const guides = guideItem ? validateGuidesCsv(guideItem.rows, materials) : [];
      packs.push({
        materialId,
        materials,
        guides,
        guidesProvided: Boolean(guideItem),
        materialFileName: materialItem.file.name,
        guideFileName: guideItem?.file?.name || ""
      });
    }
    return packs.sort((a, b) => a.materialId.localeCompare(b.materialId, "ja", { numeric: true }));
  }

  async function importMaterialBundleFiles() {
    const files = el("materialBundleFilesInput")?.files;
    if (!files?.length) {
      setMaterialBundleStatus("英文教材ZIPまたはCSVを選んでください。", "error");
      return;
    }
    const button = el("importMaterialBundleBtn");
    if (button) button.disabled = true;
    setMaterialBundleStatus("データパックを展開して確認しています…");
    try {
      const packs = await buildNormalMaterialPacks(files);
      const existingRows = await getAllFromStore(MATERIAL_STORE);
      const existingIds = new Set(existingRows.map(row => String(row.materialId || "").trim()));
      const lines = packs.map(pack => {
        const action = existingIds.has(pack.materialId) ? "差し替え" : "追加";
        const guideText = pack.guidesProvided ? ` / 文ガイド ${pack.guides.length}文` : " / 文ガイドなし（既存ガイドは維持）";
        return `${action}：${materialDisplayTitle(pack.materialId)}　本文 ${pack.materials.length}文${guideText}`;
      });
      const confirmed = confirm(`次の英文教材を保存します。\n\n${lines.join("\n")}\n\n別のmaterialIdの既存教材は削除されません。よろしいですか？`);
      if (!confirmed) {
        setMaterialBundleStatus("保存をキャンセルしました。");
        return;
      }

      await replaceMaterialBundles(packs);
      for (const pack of packs) {
        const saved = await getMaterialBundle(pack.materialId);
        if (saved.materials.length !== pack.materials.length) {
          throw new Error(`${materialDisplayTitle(pack.materialId)} の保存確認に失敗しました。`);
        }
        if (pack.guidesProvided && saved.guides.length !== pack.guides.length) {
          throw new Error(`${materialDisplayTitle(pack.materialId)} の文ガイド保存確認に失敗しました。`);
        }
      }
      const totalMaterials = packs.reduce((sum, pack) => sum + pack.materials.length, 0);
      const totalGuides = packs.reduce((sum, pack) => sum + (pack.guidesProvided ? pack.guides.length : 0), 0);
      setMaterialBundleStatus(`${packs.length}教材を保存しました。本文 ${totalMaterials}文 / 文ガイド ${totalGuides}文`, "success");
      if (el("materialBundleFilesInput")) el("materialBundleFilesInput").value = "";
      updateMaterialBundleFileNames();
      await renderSavedMaterials();
    } catch (error) {
      console.error(error);
      setMaterialBundleStatus(error?.message || "データパックの読み込みに失敗しました。", "error");
    } finally {
      if (button) button.disabled = false;
    }
  }

  function updateMaterialBundleFileNames() {
    const files = [...(el("materialBundleFilesInput")?.files || [])];
    if (!el("materialBundleFilesName")) return;
    if (!files.length) {
      el("materialBundleFilesName").textContent = "ZIPを1つ選ぶ（CSV複数選択も可）";
    } else if (files.length === 1) {
      el("materialBundleFilesName").textContent = files[0].name;
    } else {
      el("materialBundleFilesName").textContent = `${files.length}ファイルを選択中`;
    }
  }

  async function importSelectedCsvFiles() {
    const materialsFile = el("materialsCsvInput")?.files?.[0];
    const guidesFile = el("guidesCsvInput")?.files?.[0];
    if (!materialsFile) {
      setCsvStatus("本文CSV（materials.csv）を選んでください。", "error");
      return;
    }

    const button = el("importMaterialCsvBtn");
    if (button) button.disabled = true;
    setCsvStatus("CSVを確認しています…");
    try {
      const materialsText = await readFileText(materialsFile);
      const materials = validateMaterialsCsv(parseCsv(materialsText));
      const materialIds = [...new Set(materials.map(row => row.materialId))];
      if (materialIds.length !== 1) throw new Error("1回の読み込みでは、本文CSVのmaterialIdを1教材に統一してください。");

      let guides = [];
      if (guidesFile) {
        const guidesText = await readFileText(guidesFile);
        guides = validateGuidesCsv(parseCsv(guidesText), materials);
        const guideIds = [...new Set(guides.map(row => row.materialId))];
        if (guideIds.some(id => id !== materialIds[0])) throw new Error("本文CSVと文ガイドCSVのmaterialIdが一致していません。");
      }

      const materialId = materialIds[0];
      if (state.replaceMaterialId && state.replaceMaterialId !== materialId) {
        throw new Error(`${materialDisplayTitle(state.replaceMaterialId)} の差し替え中です。同じ materialId（${state.replaceMaterialId}）のCSVを選んでください。`);
      }
      await replaceMaterialData(materialId, materials, guides);

      // Round-trip verification: do not report success until the saved rows can be read back.
      const [savedMaterials, savedGuides] = await Promise.all([
        getByMaterialId(MATERIAL_STORE, materialId),
        getByMaterialId(GUIDE_STORE, materialId)
      ]);
      if (savedMaterials.length !== materials.length) {
        throw new Error(`保存確認に失敗しました。本文 ${materials.length}文のうち ${savedMaterials.length}文しか読み戻せません。`);
      }
      if (savedGuides.length !== guides.length) {
        throw new Error(`保存確認に失敗しました。文ガイド ${guides.length}文のうち ${savedGuides.length}文しか読み戻せません。`);
      }

      setCsvStatus(`${materialDisplayTitle(materialId)} を保存しました。本文 ${savedMaterials.length}文 / 文ガイド ${savedGuides.length}文`, "success");
      state.replaceMaterialId = null;
      const details = el("csvImportDetails");
      if (details) details.open = false;
      if (el("csvImportModeTitle")) el("csvImportModeTitle").textContent = "教材を追加・差し替える";
      if (el("materialsCsvInput")) el("materialsCsvInput").value = "";
      if (el("guidesCsvInput")) el("guidesCsvInput").value = "";
      updateCsvFileNames();
      await renderSavedMaterials();
    } catch (error) {
      console.error(error);
      setCsvStatus(error?.message || "CSVの読み込みに失敗しました。", "error");
    } finally {
      if (button) button.disabled = false;
    }
  }

  function updateCsvFileNames() {
    const materialsFile = el("materialsCsvInput")?.files?.[0];
    const guidesFile = el("guidesCsvInput")?.files?.[0];
    if (el("materialsCsvName")) el("materialsCsvName").textContent = materialsFile?.name || "選ぶとファイル名が表示されます";
    if (el("guidesCsvName")) el("guidesCsvName").textContent = guidesFile?.name || "必要な場合だけ選択";
  }

  async function renderSavedMaterials() {
    const list = el("savedMaterialsList");
    if (!list) return;
    list.innerHTML = `<p class="empty-text">教材を確認しています…</p>`;
    try {
      const materials = await getAllFromStore(MATERIAL_STORE);
      const guides = await getAllFromStore(GUIDE_STORE);
      const map = new Map();
      materials.forEach(row => {
        if (!map.has(row.materialId)) map.set(row.materialId, { materialId: row.materialId, sentences: [], guides: 0, updatedAt: null });
        const group = map.get(row.materialId);
        group.sentences.push(row);
        if (!group.updatedAt || String(row.importedAt || "") > String(group.updatedAt || "")) group.updatedAt = row.importedAt;
      });
      guides.forEach(row => {
        if (map.has(row.materialId)) map.get(row.materialId).guides += 1;
      });
      const groups = [...map.values()].sort((a, b) => a.materialId.localeCompare(b.materialId, "ja", { numeric: true }));
      const details = el("csvImportDetails");
      if (details && !groups.length) details.open = true;

      if (!groups.length) {
        list.innerHTML = `<div class="review-item"><strong>まだ教材はありません</strong><p>下の「教材を追加・差し替える」からCSVを読み込んでください。</p></div>`;
        return;
      }

      const previousOpen = Boolean(list.querySelector(".saved-materials-group")?.open);
      const totalSentences = groups.reduce((sum, group) => sum + group.sentences.length, 0);
      const totalGuides = groups.reduce((sum, group) => sum + group.guides, 0);
      const rowsHtml = groups.map(group => {
        const paragraphs = new Set(group.sentences.map(row => row.paragraphNo).filter(Boolean));
        const displayTitle = materialDisplayTitle(group.materialId);
        const updated = group.updatedAt ? new Date(group.updatedAt) : null;
        const updatedText = updated && !Number.isNaN(updated.getTime()) ? `${updated.getMonth()+1}/${updated.getDate()} ${String(updated.getHours()).padStart(2,"0")}:${String(updated.getMinutes()).padStart(2,"0")}` : "保存済み";
        const countText = `本文 ${group.sentences.length}文${paragraphs.size ? `・段落 ${paragraphs.size}` : ""}・ガイド ${group.guides}文`;
        return `
          <div class="saved-material-row" role="row">
            <div class="saved-material-main" role="cell">
              <strong>${escapeHtml(displayTitle)}</strong>
              <small>${escapeHtml(group.materialId)}</small>
            </div>
            <div class="saved-material-count" role="cell">${escapeHtml(countText)}</div>
            <div class="saved-material-updated" role="cell"><span>更新</span>${escapeHtml(updatedText)}</div>
            <div class="saved-material-row-actions" role="cell">
              <button class="secondary-button compact-button" type="button" data-open-saved-material="${escapeHtml(group.materialId)}">開く</button>
              <button class="ghost-button compact-button" type="button" data-replace-saved-material="${escapeHtml(group.materialId)}">差替</button>
              <button class="ghost-button danger-button compact-button" type="button" data-delete-saved-material="${escapeHtml(group.materialId)}">削除</button>
            </div>
          </div>`;
      }).join("");

      list.innerHTML = `
        <details class="saved-materials-group"${previousOpen ? " open" : ""}>
          <summary class="saved-materials-group-summary">
            <span>
              <strong>通常教材</strong>
              <small>${groups.length}教材 / 本文 ${totalSentences}文 / 文ガイド ${totalGuides}文</small>
            </span>
            <span class="saved-materials-group-toggle" aria-hidden="true"></span>
          </summary>
          <div class="saved-materials-group-content saved-materials-table" role="table" aria-label="取り込み済み通常教材一覧">
            <div class="saved-materials-table-head" role="row">
              <span role="columnheader">教材</span>
              <span role="columnheader">収録内容</span>
              <span role="columnheader">最終更新</span>
              <span role="columnheader">操作</span>
            </div>
            ${rowsHtml}
          </div>
        </details>`;
    } catch (error) {
      console.error(error);
      list.innerHTML = `<p class="empty-text">教材データを読み込めませんでした。</p>`;
    }
  }

  function materialDisplayTitle(materialId) {
    const id = String(materialId || "").trim();
    const ceMatch = id.match(/^T(\d+)_CE_Y(\d+)$/i);
    if (ceMatch) return `第${ceMatch[1]}回 / Cutting Edge Y${String(Number(ceMatch[2])).padStart(2, "0")}`;
    const focusMatch = id.match(/^T(\d+)_FOCUS[_-]?(\d+)(?:[_-](.+))?$/i);
    if (focusMatch) {
      const kind = String(focusMatch[3] || "").toUpperCase();
      const kindLabel = kind.includes("MODEL") || kind.includes("TEXT") || kind.includes("PASSAGE") ? " 中文" : kind.includes("EXAMPLE") ? " 重要例文" : "";
      return `第${focusMatch[1]}回 / FOCUS ${Number(focusMatch[2])}${kindLabel}`;
    }
    return id || "教材";
  }

  function hasInteractiveChunkGuide(guide) {
    if (!guide || guide.validationStatus === "hold") return false;
    const tapChunks = String(guide.chunkText || "").split("|||").map(part => part.trim()).filter(Boolean);
    const analysisChunks = String(guide.analysisChunks || guide.chunkText || "").split("|||").map(part => part.trim()).filter(Boolean);
    const analysisTranslations = String(guide.analysisChunkTranslations || guide.chunkTranslations || "").split("|||").map(part => part.trim());
    return tapChunks.length > 0 &&
      analysisChunks.length > 0 &&
      analysisTranslations.length === analysisChunks.length &&
      Number.isInteger(guide.subjectChunkIndex) &&
      Number.isInteger(guide.verbChunkIndex);
  }

  function guideDetailsHtml(guide) {
    if (!guide || guide.validationStatus === "hold") return "";
    if (hasInteractiveChunkGuide(guide)) return interactiveGuideHtml(guide);

    const chunks = guide.chunkText
      ? guide.chunkText.split(" / ").map(part => `<span>${escapeHtml(part)}</span>`).join("")
      : "";
    return `
      <details class="sentence-guide">
        <summary>文をほどく</summary>
        <div class="guide-body">
          ${guide.subject || guide.verb || guide.pattern ? `<div class="guide-facts">
            ${guide.subject ? `<span><small>主語</small>${escapeHtml(guide.subject)}</span>` : ""}
            ${guide.verb ? `<span><small>動詞</small>${escapeHtml(guide.verb)}</span>` : ""}
            ${guide.pattern ? `<span><small>型</small>${escapeHtml(guide.pattern)}</span>` : ""}
          </div>` : ""}
          ${chunks ? `<div class="chunk-flow">${chunks}</div>` : ""}
          ${guide.structureNote ? `<p><b>文の見方：</b>${escapeHtml(guide.structureNote)}</p>` : ""}
          ${guide.translationPoint ? `<p><b>訳すポイント：</b>${escapeHtml(guide.translationPoint)}</p>` : ""}
          ${guide.validationStatus === "needs_review" ? `<small class="guide-review-note">このガイドは追加確認中です。</small>` : ""}
        </div>
      </details>`;
  }

  function interactiveGuideHtml(guide) {
    const tapChunks = String(guide.chunkText || "").split("|||").map(part => part.trim()).filter(Boolean);
    const analysisChunks = String(guide.analysisChunks || guide.chunkText || "").split("|||").map(part => part.trim()).filter(Boolean);
    const analysisTranslations = String(guide.analysisChunkTranslations || guide.chunkTranslations || "").split("|||").map(part => part.trim());
    const guideKey = `${guide.materialId}::${guide.sentenceNo}`;
    const subjectTarget = guide.subjectTarget || guide.subject || "";
    const verbTarget = guide.verbTarget || guide.verb || "";
    return `
      <details class="sentence-guide interactive-guide" data-guide-key="${escapeHtml(guideKey)}" open>
        <summary>文をほどく</summary>
        <div class="guide-body sentence-breakdown" data-stage="subject" data-subject-index="${guide.subjectChunkIndex}" data-verb-index="${guide.verbChunkIndex}" data-subject-misses="0" data-verb-misses="0">
          <div class="breakdown-progress" aria-label="文をほどく進み具合">
            <span class="active" data-breakdown-progress="subject">① 主語</span>
            <i>→</i>
            <span data-breakdown-progress="verb">② 動詞</span>
            <i>→</i>
            <span data-breakdown-progress="structure">③ 骨組み</span>
            <i>→</i>
            <span data-breakdown-progress="translation">④ 訳す</span>
          </div>
          <p class="breakdown-transition hidden" data-breakdown-transition aria-live="polite"></p>
          <div class="breakdown-step" data-breakdown-step="subject">
            <div class="breakdown-step-head"><span>STEP 1</span><strong>文の中心の「主語」はどのかたまり？</strong></div>
            <p class="breakdown-help">主節の「だれが・なにが」にあたるかたまりを1つタップ。</p>
            <div class="chunk-choice-grid">
              ${tapChunks.map((chunk, index) => `<button type="button" class="chunk-choice" data-chunk-answer="subject" data-chunk-index="${index}">${escapeHtml(chunk)}</button>`).join("")}
            </div>
            <p class="breakdown-feedback" data-feedback="subject" aria-live="polite"></p>
          </div>

          <div class="breakdown-step hidden" data-breakdown-step="verb">
            <div class="breakdown-step-head"><span>STEP 2</span><strong>「どうする・どうなる」の中心があるかたまりは？</strong></div>
            <p class="breakdown-help">中心になる動詞を含むかたまりを1つタップ。</p>
            <div class="chunk-choice-grid">
              ${tapChunks.map((chunk, index) => `<button type="button" class="chunk-choice" data-chunk-answer="verb" data-chunk-index="${index}">${escapeHtml(chunk)}</button>`).join("")}
            </div>
            <p class="breakdown-feedback" data-feedback="verb" aria-live="polite"></p>
          </div>

          <div class="breakdown-step hidden" data-breakdown-step="structure">
            <div class="breakdown-step-head"><span>STEP 3</span><strong>骨組みを確認</strong></div>
            <div class="guide-facts breakdown-facts">
              ${subjectTarget ? `<span><small>主語</small>${escapeHtml(subjectTarget)}</span>` : ""}
              ${verbTarget ? `<span><small>動詞の中心</small>${escapeHtml(verbTarget)}</span>` : ""}
              ${guide.pattern ? `<span><small>文の型</small>${escapeHtml(guide.pattern)}</span>` : ""}
            </div>
            ${guide.structureNote ? `<p><b>文の見方：</b>${escapeHtml(guide.structureNote)}</p>` : ""}
            ${guide.translationPoint ? `<p><b>訳すポイント：</b>${escapeHtml(guide.translationPoint)}</p>` : ""}
            <button type="button" class="secondary-button breakdown-next" data-breakdown-next="translation">授業プリントの区切りで訳してみる</button>
          </div>

          <div class="breakdown-step hidden" data-breakdown-step="translation">
            <div class="breakdown-step-head"><span>STEP 4</span><strong>授業プリントの区切りで意味をつなぐ</strong></div>
            <p class="breakdown-help">英語の区切りごとに自分で訳してから、意味を確認しよう。</p>
            <div class="translation-chunk-list">
              ${analysisChunks.map((chunk, index) => `
                <div class="translation-chunk" data-translation-chunk="${index}">
                  <div class="translation-chunk-english">${escapeHtml(chunk)}</div>
                  <button type="button" class="translation-reveal" data-reveal-chunk="${index}">意味を見る</button>
                  <div class="translation-chunk-ja hidden">→ ${escapeHtml(analysisTranslations[index] || "")}</div>
                </div>`).join("")}
            </div>
            <button type="button" class="primary-button wide hidden" data-show-final-translation>最後に自然な一文へつなぐ</button>
            <div class="final-translation-box hidden" data-final-translation>
              <small>自然につなぐと</small>
              <p>${escapeHtml(guide.finalTranslation || "")}</p>
            </div>
          </div>
        </div>
      </details>`;
  }

  function advanceBreakdownStep(container, fromStage) {
    const order = ["subject", "verb", "structure", "translation"];
    const labels = {
      subject: "主語OK！ 次は動詞の中心を探そう。",
      verb: "動詞OK！ 文の骨組みを確認しよう。",
      structure: "骨組みOK！ 区切りごとに意味をつなごう。"
    };
    const current = order.indexOf(fromStage);
    if (current < 0 || current >= order.length - 1) return;
    container.querySelector(`[data-breakdown-step="${fromStage}"]`)?.classList.add("hidden");
    const next = order[current + 1];
    const nextStep = container.querySelector(`[data-breakdown-step="${next}"]`);
    nextStep?.classList.remove("hidden");
    nextStep?.classList.remove("step-enter");
    void nextStep?.offsetWidth;
    nextStep?.classList.add("step-enter");
    container.dataset.stage = next;

    order.forEach((stage, index) => {
      const marker = container.querySelector(`[data-breakdown-progress="${stage}"]`);
      marker?.classList.toggle("done", index < order.indexOf(next));
      marker?.classList.toggle("active", stage === next);
    });

    const transition = container.querySelector("[data-breakdown-transition]");
    if (transition) {
      transition.textContent = labels[fromStage] || "次のステップへ進みます。";
      transition.classList.remove("hidden", "show");
      void transition.offsetWidth;
      transition.classList.add("show");
      window.setTimeout(() => transition.classList.add("hidden"), 1200);
    }

    if (next === "structure" || next === "translation") {
      const sentenceList = el("materialSentenceList");
      const selfCheck = sentenceList?.querySelector("[data-self-check-panel]");
      const selected = selfCheck?.querySelector("[data-self-check].selected");
      const required = sentenceList?.querySelector("[data-self-check-required]");
      const nextButton = sentenceList?.querySelector("[data-text-next]");
      selfCheck?.classList.remove("hidden");
      required?.classList.toggle("hidden", Boolean(selected));
      nextButton?.classList.toggle("hidden", !selected);
    }

    window.setTimeout(() => nextStep?.scrollIntoView({ behavior: "smooth", block: "center" }), 120);
  }

  function handleChunkAnswer(button) {
    const container = button.closest(".sentence-breakdown");
    if (!container) return;
    const type = button.dataset.chunkAnswer;
    const selectedIndex = Number(button.dataset.chunkIndex);
    const correctIndex = Number(type === "subject" ? container.dataset.subjectIndex : container.dataset.verbIndex);
    const missKey = type === "subject" ? "subjectMisses" : "verbMisses";
    const feedback = container.querySelector(`[data-feedback="${type}"]`);
    const buttons = [...container.querySelectorAll(`[data-chunk-answer="${type}"]`)];

    buttons.forEach(btn => btn.classList.remove("wrong", "correct", "revealed-correct"));
    if (selectedIndex === correctIndex) {
      button.classList.add("correct");
      if (feedback) feedback.textContent = type === "subject" ? "正解！ 文の中心の主語をつかめました。" : "正解！ 動詞の中心があるかたまりです。";
      buttons.forEach(btn => { btn.disabled = true; });
      window.setTimeout(() => advanceBreakdownStep(container, type), 450);
      return;
    }

    const misses = Number(container.dataset[missKey] || 0) + 1;
    container.dataset[missKey] = String(misses);
    button.classList.add("wrong");

    if (misses >= 3) {
      const correctButton = buttons.find(btn => Number(btn.dataset.chunkIndex) === correctIndex);
      if (correctButton) correctButton.classList.add("revealed-correct");
      buttons.forEach(btn => { btn.disabled = true; });
      if (feedback) feedback.textContent = `3回考えたので、ここで正解を確認しよう。緑のかたまりが正解です。`;
      window.setTimeout(() => advanceBreakdownStep(container, type), 900);
      return;
    }

    if (feedback) feedback.textContent = `もう一度見てみよう。選択はリセットしました。（${misses}/3）`;
    window.setTimeout(() => {
      button.classList.remove("wrong");
    }, 350);
  }

  const CUTTING_EDGE_READING_MIN_WORDS = 15;

  function englishWordCount(text) {
    return (String(text || "").match(/[A-Za-z]+(?:'[A-Za-z]+)?/g) || []).length;
  }

  function isReadingTarget(row, materialId) {
    if (typeof row?.readingTarget === "boolean") return row.readingTarget;
    // FOCUSの重要例文・中文は、短くても構文音読の価値があるため全件対象。
    // Cutting Edgeは、毎日の音読が細切れにならないよう短文を自動除外する。
    if (/^T\d+_CE_Y\d+/i.test(String(materialId || ""))) {
      return englishWordCount(row?.english) >= CUTTING_EDGE_READING_MIN_WORDS;
    }
    return true;
  }

  function readingBundle(bundle) {
    const allMaterials = Array.isArray(bundle?.materials) ? bundle.materials : [];
    const materials = allMaterials.filter(row => isReadingTarget(row, bundle?.materialId));
    return {
      ...bundle,
      materials,
      sourceMaterialCount: allMaterials.length,
      excludedShortSentenceCount: Math.max(0, allMaterials.length - materials.length)
    };
  }

  function currentReaderRow() {
    return state.currentReaderBundle?.materials?.[state.currentReaderIndex] || null;
  }

  function focusReadingPair(materialId) {
    const match = String(materialId || "").match(/^(T\d+)_FOCUS[_-]?(\d+)(?:[_-](EXAMPLE|PASSAGE|MODEL|TEXT))?$/i);
    if (!match) return null;
    const round = match[1].toUpperCase();
    const focusNo = String(Number(match[2])).padStart(2, "0");
    const kind = String(match[3] || "EXAMPLE").toUpperCase();
    return {
      kind: kind === "PASSAGE" || kind === "MODEL" || kind === "TEXT" ? "PASSAGE" : "EXAMPLE",
      exampleId: `${round}_FOCUS_${focusNo}_EXAMPLE`,
      passageId: `${round}_FOCUS_${focusNo}_PASSAGE`
    };
  }

  function renderReaderReadingTabs(materialId) {
    const tabs = el("readerReadingTabs");
    if (!tabs) return;
    const pair = focusReadingPair(materialId);
    if (!pair) {
      tabs.innerHTML = "";
      tabs.classList.add("hidden");
      return;
    }
    tabs.innerHTML = `
      <button type="button" class="reader-reading-tab ${pair.kind === "EXAMPLE" ? "active" : ""}" data-switch-reading-material="${escapeHtml(pair.exampleId)}">重要例文</button>
      <button type="button" class="reader-reading-tab ${pair.kind === "PASSAGE" ? "active" : ""}" data-switch-reading-material="${escapeHtml(pair.passageId)}">中文</button>`;
    tabs.classList.remove("hidden");
  }

  async function preferredDailyReadingMaterial(category) {
    const pattern = category === "focus" ? /^T\d+_FOCUS[_-]?\d+_(?:EXAMPLE|PASSAGE)$/i : /^T\d+_CE_Y\d+$/i;
    const progressMap = loadJsonStorage(TEXT_STUDY_PROGRESS_KEY, {});
    const recent = Object.entries(progressMap)
      .filter(([materialId, item]) => pattern.test(materialId) && Number.isInteger(item?.sentenceIndex) && item.sentenceIndex >= 0)
      .sort((a, b) => String(b[1]?.updatedAt || "").localeCompare(String(a[1]?.updatedAt || "")))[0];
    if (recent) return recent[0];

    const materials = await getAllFromStore(MATERIAL_STORE);
    const ids = [...new Set(materials.map(row => String(row.materialId || "").trim()).filter(id => pattern.test(id)))];
    ids.sort((a, b) => a.localeCompare(b, "ja", { numeric: true }));
    if (category === "focus") {
      const example = ids.find(id => /_EXAMPLE$/i.test(id));
      return example || ids[0] || null;
    }
    return ids[0] || null;
  }

  function renderReaderStartChoice(bundle, returnView) {
    const reader = el("materialReader");
    if (!reader) throw new Error("本文表示エリアが見つかりません。");
    state.currentReaderMaterialId = bundle.materialId;
    state.currentReaderReturnView = returnView;
    state.currentReaderBundle = bundle;
    state.currentReaderMode = "choice";
    const progress = getTextStudyProgress(bundle.materialId);
    const hasProgress = progress && progress.sentenceIndex < bundle.materials.length;
    if (el("readerMaterialTitle")) el("readerMaterialTitle").textContent = materialDisplayTitle(bundle.materialId);
    renderReaderReadingTabs(bundle.materialId);
    if (el("readerMaterialSummary")) {
      const sourceCount = Number(bundle.sourceMaterialCount || bundle.materials.length);
      el("readerMaterialSummary").textContent = state.currentReaderStudyType === "reading"
        ? `音読対象 ${bundle.materials.length}文${sourceCount !== bundle.materials.length ? `（全${sourceCount}文）` : ""}`
        : `本文 ${bundle.materials.length}文 / 文ガイド ${bundle.guides.filter(g => g.validationStatus !== "hold").length}文`;
    }
    const sentenceList = el("materialSentenceList");
    sentenceList.innerHTML = `
      <article class="text-start-card">
        <span class="mode-icon">📖</span>
        <h3>${escapeHtml(materialDisplayTitle(bundle.materialId))}</h3>
        <p>${state.currentReaderStudyType === "reading" ? "ある程度まとまりのある文を、1文ずつ音声で聞いて自分でも読みます。" : "1文ずつ、文の形と訳し方を確認します。"}</p>
        ${state.currentReaderStudyType === "reading" && bundle.excludedShortSentenceCount ? `<small>短い文 ${bundle.excludedShortSentenceCount}文は音読対象から外しています。「文をほどく」では確認できます。</small>` : ""}
        ${hasProgress ? `<button type="button" class="primary-button wide" data-text-start="resume">第${progress.sentenceIndex + 1}文から続ける</button>` : ""}
        <button type="button" class="${hasProgress ? "secondary-button" : "primary-button"} wide" data-text-start="restart">最初から始める</button>
      </article>`;
    reader.classList.remove("hidden");
    showView("textStudyView");
    window.scrollTo({ top: 0 });
  }

  function startTextStudyAt(index) {
    const bundle = state.currentReaderBundle;
    if (!bundle?.materials?.length) return;
    state.currentReaderMode = "study";
    state.currentReaderIndex = Math.max(0, Math.min(Number(index) || 0, bundle.materials.length - 1));
    renderCurrentSentence();
  }

  function renderCurrentSentence() {
    const bundle = state.currentReaderBundle;
    const row = currentReaderRow();
    const list = el("materialSentenceList");
    if (!bundle || !row || !list) return;
    const guide = bundle.guides.find(g => Number(g.sentenceNo) === Number(row.sentenceNo));
    const label = row.paragraphNo ? `第${row.paragraphNo}段落・第${row.sentenceNo}文` : `第${row.sentenceNo}文`;
    const status = getSelfReviewStatus(bundle.materialId, row.sentenceNo);
    const isLast = state.currentReaderIndex === bundle.materials.length - 1;
    const interactiveGuide = hasInteractiveChunkGuide(guide);
    if (el("readerMaterialSummary")) el("readerMaterialSummary").textContent = `${state.currentReaderIndex + 1} / ${bundle.materials.length}文`;

    if (state.currentReaderStudyType === "reading") {
      list.innerHTML = `
        <article class="sentence-card single-sentence-card reading-only-card">
          <div class="sentence-progress-row">
            <span class="sentence-meta">${escapeHtml(label)}</span>
            <button type="button" class="ghost-button" data-text-pause>一時中断</button>
          </div>
          <p class="sentence-english">${escapeHtml(row.english)}</p>
          <div class="reading-audio-actions">
            <button type="button" class="primary-button wide" data-read-aloud>🔊 英文を聞く</button>
            <button type="button" class="secondary-button wide" data-stop-reading>停止</button>
          </div>
          ${row.translation ? `<details class="translation-toggle"><summary>意味を確認する</summary><p>${escapeHtml(row.translation)}</p></details>` : ""}
          <div class="sentence-self-check" data-self-check-panel>
            <p><strong>自分でも読めた？</strong></p>
            <div class="self-check-buttons">
              <button type="button" class="self-check-button ${status === "understood" ? "selected" : ""}" data-self-check="understood">読めた</button>
              <button type="button" class="self-check-button needs-review ${status === "needs_review" ? "selected" : ""}" data-self-check="needs_review">要復習</button>
            </div>
          </div>
          <p class="self-check-required ${status ? "hidden" : ""}" data-self-check-required>「読めた」か「要復習」を選ぶと、次の文へ進めます。</p>
          <div class="sentence-navigation-actions">
            <button type="button" class="primary-button wide ${status ? "" : "hidden"}" data-text-next>${isLast ? "音読を終える" : "次の文へ"}</button>
            <button type="button" class="text-skip-button" data-text-skip>${isLast ? "この文をスキップして終了" : "この文をスキップ"}</button>
          </div>
        </article>`;
      if (!state.preserveReaderScroll) window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    list.innerHTML = `
      <article class="sentence-card single-sentence-card">
        <div class="sentence-progress-row">
          <span class="sentence-meta">${escapeHtml(label)}</span>
          <button type="button" class="ghost-button" data-text-pause>一時中断</button>
        </div>
        <p class="sentence-english">${escapeHtml(row.english)}</p>
        ${guideDetailsHtml(guide)}
        ${row.translation && !interactiveGuide ? `<details class="translation-toggle"><summary>和訳を考える / 訳を見る</summary><p>${escapeHtml(row.translation)}</p></details>` : ""}
        <div class="sentence-self-check ${interactiveGuide ? "hidden" : ""}" data-self-check-panel>
          <p><strong>この文はどうだった？</strong></p>
          <div class="self-check-buttons">
            <button type="button" class="self-check-button ${status === "understood" ? "selected" : ""}" data-self-check="understood">理解した</button>
            <button type="button" class="self-check-button needs-review ${status === "needs_review" ? "selected" : ""}" data-self-check="needs_review">要復習</button>
          </div>
          <small>「要復習」は下の「復習」タブに残ります。HOMEの「今日やる復習」とは別管理です。</small>
        </div>
        <p class="self-check-required ${status || interactiveGuide ? "hidden" : ""}" data-self-check-required>「理解した」か「要復習」を選ぶと、次の文へ進めます。</p>
        <div class="sentence-navigation-actions">
          <button type="button" class="primary-button wide ${status && !interactiveGuide ? "" : "hidden"}" data-text-next>${isLast ? "この教材を終える" : "次の文へ"}</button>
          <button type="button" class="text-skip-button" data-text-skip>${isLast ? "この文をスキップして終了" : "この文をスキップ"}</button>
        </div>
      </article>`;
    if (!state.preserveReaderScroll) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function openSavedMaterial(materialId, returnView = "materialView", options = {}) {
    const storedBundle = await getMaterialBundle(materialId);
    if (!storedBundle.materials.length) throw new Error(`この端末に ${materialDisplayTitle(materialId)} の本文データがありません。設定からCSVを読み込んでください。`);
    state.currentReaderStudyType = options.studyType === "reading" ? "reading" : "breakdown";
    const bundle = state.currentReaderStudyType === "reading" ? readingBundle(storedBundle) : storedBundle;
    if (!bundle.materials.length) throw new Error(`${materialDisplayTitle(materialId)} には現在の基準で音読対象になる文がありません。「文をほどく」から確認してください。`);
    state.currentReaderBundle = bundle;
    state.currentReaderMaterialId = bundle.materialId;
    state.currentReaderReturnView = returnView;
    if (Number.isInteger(options.sentenceNo)) {
      const index = bundle.materials.findIndex(row => Number(row.sentenceNo) === Number(options.sentenceNo));
      if (el("readerMaterialTitle")) el("readerMaterialTitle").textContent = materialDisplayTitle(bundle.materialId);
      renderReaderReadingTabs(bundle.materialId);
      el("materialReader")?.classList.remove("hidden");
      startTextStudyAt(index >= 0 ? index : 0);
      showView("textStudyView");
      window.scrollTo({ top: 0 });
      return;
    }
    if (options.autoStart) {
      state.preserveReaderScroll = Boolean(options.preserveScroll);
      state.currentReaderMaterialId = bundle.materialId;
      state.currentReaderReturnView = returnView;
      state.currentReaderBundle = bundle;
      if (el("readerMaterialTitle")) el("readerMaterialTitle").textContent = materialDisplayTitle(bundle.materialId);
      renderReaderReadingTabs(bundle.materialId);
      el("materialReader")?.classList.remove("hidden");
      const progress = getTextStudyProgress(bundle.materialId);
      const startIndex = progress && progress.sentenceIndex < bundle.materials.length ? progress.sentenceIndex : 0;
      startTextStudyAt(startIndex);
      showView("textStudyView");
      if (!options.preserveScroll) window.scrollTo({ top: 0 });
      state.preserveReaderScroll = false;
      return;
    }
    renderReaderStartChoice(bundle, returnView);
  }

  function pauseTextStudy() {
    const bundle = state.currentReaderBundle;
    if (!bundle) return;
    saveTextStudyProgress(bundle.materialId, state.currentReaderIndex);
    const title = materialDisplayTitle(bundle.materialId);
    alert(`${title} は第${state.currentReaderIndex + 1}文から再開できます。`);
    closeMaterialReader();
  }

  function skipTextSentence() {
    const bundle = state.currentReaderBundle;
    if (!bundle) return;
    const row = currentReaderRow();
    if (row) saveTextStudyProgress(bundle.materialId, state.currentReaderIndex + 1);
    if (state.currentReaderIndex >= bundle.materials.length - 1) {
      clearTextStudyProgress(bundle.materialId);
      if (state.currentReaderStudyType === "reading") markTodayReadingComplete(bundle.materialId);
      alert(state.currentReaderStudyType === "reading"
        ? `${materialDisplayTitle(bundle.materialId)} の今日の音読はここまでです。`
        : `${materialDisplayTitle(bundle.materialId)} の本文学習はここまでです。`);
      closeMaterialReader();
      return;
    }
    state.currentReaderIndex += 1;
    renderCurrentSentence();
  }

  function nextTextSentence() {
    const bundle = state.currentReaderBundle;
    if (!bundle) return;
    const row = currentReaderRow();
    if (!row || !getSelfReviewStatus(bundle.materialId, row.sentenceNo)) {
      el("materialSentenceList")?.querySelector("[data-self-check-required]")?.classList.remove("hidden");
      return;
    }
    if (row) saveTextStudyProgress(bundle.materialId, state.currentReaderIndex + 1);
    if (state.currentReaderIndex >= bundle.materials.length - 1) {
      clearTextStudyProgress(bundle.materialId);
      if (state.currentReaderStudyType === "reading") markTodayReadingComplete(bundle.materialId);
      alert(state.currentReaderStudyType === "reading"
        ? `${materialDisplayTitle(bundle.materialId)} の今日の音読はここまでです。`
        : `${materialDisplayTitle(bundle.materialId)} の本文学習はここまでです。`);
      closeMaterialReader();
      return;
    }
    state.currentReaderIndex += 1;
    renderCurrentSentence();
  }

  function closeMaterialReader() {
    stopSpeechSynthesis();
    const returnView = state.currentReaderReturnView || "materialView";
    state.currentReaderMaterialId = null;
    state.currentReaderReturnView = null;
    state.currentReaderBundle = null;
    state.currentReaderMode = null;
    renderReaderReadingTabs(null);
    el("materialReader")?.classList.add("hidden");
    showView(returnView);
  }

  async function deleteSavedMaterial(materialId) {
    const normalizedId = String(materialId ?? "").trim();
    if (!normalizedId) return;
    const title = materialDisplayTitle(normalizedId);
    if (!confirm(`${title} の保存済み教材データを削除しますか？\n本文・文ガイドだけをこの端末から削除します。\n学習ログやSRSは削除されません。`)) return;
    await removeMaterialBundle(normalizedId);
    if (state.currentReaderMaterialId === normalizedId) closeMaterialReader();
    setCsvStatus(`${title} の教材データをこの端末から削除しました。`, "success");
    await renderSavedMaterials();
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

  window.addEventListener("pagehide", stopSpeechSynthesis);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopSpeechSynthesis();
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest("#closeProblemPickerBtn")) {
      e.preventDefault();
      showView("materialView");
      return;
    }

    const finishedReadingBtn = e.target.closest("[data-daily-reading-finished]");
    if (finishedReadingBtn) {
      e.preventDefault();
      alert("今日の音読は終わりです。明日また少しずつ続けよう！");
      return;
    }

    const dailyReadingCategoryBtn = e.target.closest("[data-daily-reading-category]");
    if (dailyReadingCategoryBtn) {
      e.preventDefault();
      const category = dailyReadingCategoryBtn.dataset.dailyReadingCategory;
      const originalText = dailyReadingCategoryBtn.textContent;
      dailyReadingCategoryBtn.disabled = true;
      dailyReadingCategoryBtn.textContent = "読み込み中…";
      preferredDailyReadingMaterial(category)
        .then(materialId => {
          if (!materialId) throw new Error(`${category === "focus" ? "FOCUS" : "Cutting Edge"} の本文データがありません。設定から教材CSVを読み込んでください。`);
          return openSavedMaterial(materialId, "homeView", { studyType: "reading", autoStart: true });
        })
        .catch(async error => {
          console.error(error);
          alert(error?.message || "教材を開けませんでした。");
          showView("settingsView");
          await renderSavedMaterials();
        })
        .finally(() => {
          dailyReadingCategoryBtn.disabled = false;
          dailyReadingCategoryBtn.textContent = originalText;
        });
      return;
    }

    const switchReadingBtn = e.target.closest("[data-switch-reading-material]");
    if (switchReadingBtn) {
      e.preventDefault();
      const materialId = switchReadingBtn.dataset.switchReadingMaterial;
      if (materialId === state.currentReaderMaterialId) return;
      const previousScrollY = window.scrollY;
      stopSpeechSynthesis();
      switchReadingBtn.disabled = true;
      openSavedMaterial(materialId, state.currentReaderReturnView || "materialView", { studyType: state.currentReaderStudyType, autoStart: true, preserveScroll: true })
        .then(() => {
          window.requestAnimationFrame(() => window.scrollTo({ top: previousScrollY }));
        })
        .catch(error => {
          console.error(error);
          alert(error?.message || "音読内容を切り替えられませんでした。");
          renderReaderReadingTabs(state.currentReaderMaterialId);
        });
      return;
    }

    const readingMaterialBtn = e.target.closest("[data-open-reading-material]");
    if (readingMaterialBtn) {
      e.preventDefault();
      e.stopPropagation();
      const materialId = readingMaterialBtn.dataset.openReadingMaterial;
      const originalText = readingMaterialBtn.textContent;
      readingMaterialBtn.disabled = true;
      readingMaterialBtn.textContent = "読み込み中…";
      openSavedMaterial(materialId, state.view === "homeView" ? "homeView" : "materialView", { studyType: "reading", autoStart: true })
        .then(() => markMaterialActivity("reading", materialId))
        .catch(async error => {
          console.error(error);
          alert(error?.message || "教材を開けませんでした。");
          showView("settingsView");
          await renderSavedMaterials();
        })
        .finally(() => {
          readingMaterialBtn.disabled = false;
          readingMaterialBtn.textContent = originalText;
        });
      return;
    }

    const textMaterialBtn = e.target.closest("[data-open-text-material]");
    if (textMaterialBtn) {
      e.preventDefault();
      e.stopPropagation();
      const materialId = textMaterialBtn.dataset.openTextMaterial;
      const originalText = textMaterialBtn.textContent;
      textMaterialBtn.disabled = true;
      textMaterialBtn.textContent = "読み込み中…";
      openSavedMaterial(materialId, "materialView", { studyType: "breakdown" })
        .then(() => markMaterialActivity("breakdown", materialId))
        .catch(async error => {
          console.error(error);
          alert(error?.message || "教材を開けませんでした。");
          showView("settingsView");
          await renderSavedMaterials();
        })
        .finally(() => {
          textMaterialBtn.disabled = false;
          textMaterialBtn.textContent = originalText;
        });
      return;
    }

    const problemPickerCategoryBtn = e.target.closest("[data-problem-picker-category]");
    if (problemPickerCategoryBtn) {
      e.preventDefault();
      state.currentProblemCategory = problemPickerCategoryBtn.dataset.problemPickerCategory || "all";
      renderProblemPicker();
      return;
    }

    const openProblemBtn = e.target.closest("[data-open-problem-material]");
    if (openProblemBtn) {
      e.preventDefault();
      e.stopPropagation();
      openProblemPicker(openProblemBtn.dataset.openProblemMaterial, openProblemBtn.dataset.openProblemPrint);
      return;
    }

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
    if (action?.dataset.action === "text-study") {
      showView("textStudyView");
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
      startQuiz("materialPrint", {
        material: materialPrintBtn.dataset.materialPrint,
        printName: materialPrintBtn.dataset.printName,
        category: materialPrintBtn.dataset.problemCategory || "all",
        ordered: materialPrintBtn.dataset.problemOrdered === "true",
        categoryLabel: materialPrintBtn.dataset.problemCategory === "all"
          ? `${materialPrintBtn.dataset.printName} 問題`
          : materialProblemCategoryLabel(materialPrintBtn.dataset.materialPrint, materialPrintBtn.dataset.problemCategory || "all")
      });
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

    const openSavedBtn = e.target.closest("[data-open-saved-material]");
    if (openSavedBtn) {
      const materialId = openSavedBtn.dataset.openSavedMaterial;
      openSavedBtn.disabled = true;
      openSavedMaterial(materialId, "settingsView")
        .catch(error => {
          console.error(error);
          setCsvStatus(error?.message || "教材を開けませんでした。", "error");
        })
        .finally(() => { openSavedBtn.disabled = false; });
      return;
    }

    const deleteSavedBtn = e.target.closest("[data-delete-saved-material]");
    if (deleteSavedBtn) {
      const materialId = deleteSavedBtn.dataset.deleteSavedMaterial;
      deleteSavedBtn.disabled = true;
      deleteSavedMaterial(materialId)
        .catch(error => {
          console.error(error);
          setCsvStatus(error?.message || "教材を削除できませんでした。", "error");
        })
        .finally(() => { deleteSavedBtn.disabled = false; });
      return;
    }

    const replaceSavedBtn = e.target.closest("[data-replace-saved-material]");
    if (replaceSavedBtn) {
      const materialId = replaceSavedBtn.dataset.replaceSavedMaterial;
      state.replaceMaterialId = materialId;
      const details = el("csvImportDetails");
      if (details) details.open = true;
      if (el("csvImportModeTitle")) el("csvImportModeTitle").textContent = `${materialDisplayTitle(materialId)} を差し替える`;
      setCsvStatus(`同じ materialId（${materialId}）の新しいCSVを選んでください。`);
      el("csvImportDetails")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const textStartBtn = e.target.closest("[data-text-start]");
    if (textStartBtn) {
      const mode = textStartBtn.dataset.textStart;
      if (mode === "resume") {
        const progress = getTextStudyProgress(state.currentReaderMaterialId);
        startTextStudyAt(progress?.sentenceIndex || 0);
      } else {
        clearTextStudyProgress(state.currentReaderMaterialId);
        startTextStudyAt(0);
      }
      return;
    }

    const textPauseBtn = e.target.closest("[data-text-pause]");
    if (textPauseBtn) {
      pauseTextStudy();
      return;
    }

    const readAloudBtn = e.target.closest("[data-read-aloud]");
    if (readAloudBtn) {
      const row = currentReaderRow();
      if (!row?.english) return;
      if (!("speechSynthesis" in window)) {
        alert("このブラウザでは音声読み上げを利用できません。");
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(row.english);
      utterance.lang = "en-US";
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
      return;
    }

    const stopReadingBtn = e.target.closest("[data-stop-reading]");
    if (stopReadingBtn) {
      stopSpeechSynthesis();
      return;
    }

    const selfCheckBtn = e.target.closest("[data-self-check]");
    if (selfCheckBtn) {
      const row = currentReaderRow();
      const bundle = state.currentReaderBundle;
      if (!row || !bundle) return;
      setSelfReviewStatus(bundle.materialId, row.sentenceNo, selfCheckBtn.dataset.selfCheck);
      const panel = selfCheckBtn.closest(".sentence-self-check");
      panel?.querySelectorAll("[data-self-check]").forEach(btn => btn.classList.toggle("selected", btn === selfCheckBtn));
      el("materialSentenceList")?.querySelector("[data-text-next]")?.classList.remove("hidden");
      el("materialSentenceList")?.querySelector("[data-self-check-required]")?.classList.add("hidden");
      return;
    }

    const textNextBtn = e.target.closest("[data-text-next]");
    if (textNextBtn) {
      nextTextSentence();
      return;
    }

    const textSkipBtn = e.target.closest("[data-text-skip]");
    if (textSkipBtn) {
      skipTextSentence();
      return;
    }

    const selfReviewBtn = e.target.closest("[data-open-self-review]");
    if (selfReviewBtn) {
      openSavedMaterial(selfReviewBtn.dataset.openSelfReview, "reviewView", { sentenceNo: Number(selfReviewBtn.dataset.sentenceNo) })
        .catch(error => { console.error(error); alert(error?.message || "この文を開けませんでした。"); });
      return;
    }

    const chunkAnswerBtn = e.target.closest("[data-chunk-answer]");
    if (chunkAnswerBtn) {
      handleChunkAnswer(chunkAnswerBtn);
      return;
    }

    const breakdownNextBtn = e.target.closest("[data-breakdown-next]");
    if (breakdownNextBtn) {
      const container = breakdownNextBtn.closest(".sentence-breakdown");
      if (container) advanceBreakdownStep(container, "structure");
      return;
    }

    const revealChunkBtn = e.target.closest("[data-reveal-chunk]");
    if (revealChunkBtn) {
      const container = revealChunkBtn.closest(".sentence-breakdown");
      const row = revealChunkBtn.closest(".translation-chunk");
      row?.querySelector(".translation-chunk-ja")?.classList.remove("hidden");
      revealChunkBtn.classList.add("hidden");
      if (container) {
        const remaining = container.querySelectorAll("[data-reveal-chunk]:not(.hidden)").length;
        if (remaining === 0) container.querySelector("[data-show-final-translation]")?.classList.remove("hidden");
      }
      return;
    }

    const finalTranslationBtn = e.target.closest("[data-show-final-translation]");
    if (finalTranslationBtn) {
      const container = finalTranslationBtn.closest(".sentence-breakdown");
      container?.querySelector("[data-final-translation]")?.classList.remove("hidden");
      finalTranslationBtn.classList.add("hidden");
      return;
    }

    const navBtn = e.target.closest("[data-nav]");
    if (navBtn) {
      state.reviewPanel = "review";
      showView(navBtn.dataset.nav);
    }
  });

  el("settingsBtn")?.addEventListener("click", () => {
    showView("settingsView");
    renderSavedMaterials().catch(error => console.error(error));
  });
  el("nextBtn").addEventListener("click", nextQuestion);
  el("stopBtn")?.addEventListener("click", stopSession);
  el("backHomeBtn").addEventListener("click", () => {
    const returnView = state.quizReturnView || "homeView";
    showView(returnView);
  });
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
  el("copyAnalysisJsonBtn")?.addEventListener("click", copyAnalysisJson);
  el("togglePreviousLearningBtn")?.addEventListener("click", () => {
    state.showPreviousLearning = !state.showPreviousLearning;
    renderAnalysis();
  });
  ["ceStart", "ceEnd", "focusStart", "focusEnd"].forEach(id => {
    el(id)?.addEventListener("change", updateTestPrepSummary);
  });
  el("testPrepStartBtn")?.addEventListener("click", () => startQuiz("testPrep", getTestPrepOptions()));
  el("materialBundleFilesInput")?.addEventListener("change", updateMaterialBundleFileNames);
  el("importMaterialBundleBtn")?.addEventListener("click", importMaterialBundleFiles);
  el("materialsCsvInput")?.addEventListener("change", updateCsvFileNames);
  el("guidesCsvInput")?.addEventListener("change", updateCsvFileNames);
  el("importMaterialCsvBtn")?.addEventListener("click", importSelectedCsvFiles);
  el("closeMaterialReaderBtn")?.addEventListener("click", closeMaterialReader);
  el("resetBtn").addEventListener("click", () => {
    if (!confirm("学習ログと今日の音読完了状態を初期化しますか？")) return;
    state.records = {};
    saveRecords();
    saveActiveSession(null);
    localStorage.removeItem(TODAY_SESSION_KEY);
    localStorage.removeItem(DAILY_READING_COMPLETION_KEY);
    renderHomeStats();
    renderAnalysis();
    renderReview();
  });

  window.EikomiApp = { ...(window.EikomiApp || {}), showView };

  Object.keys(state.records).forEach(getRecord);
  saveRecords();
  renderHomeStats();
  renderContinueSlots();
})();
