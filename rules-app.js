(() => {
  const KEY='eikomiCoachRules.v02';
  const byId=id=>document.getElementById(id);
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const split=v=>String(v||'').split(';').map(x=>x.trim()).filter(Boolean);
  let packs=[],D=null,info=null,sentenceMap=new Map(),ruleMap=new Map(),summaryMap=new Map();
  let quizIndex=0,quickIndex=0,gachiSentenceId=null,gachiStep=0,wrongCount=0,lastAnswer=null,gachiHubScroll=0,quizSession={},lessonEntryMode='menu',listenOrigin='menu';
  const savedPackOpenIds=new Set();
  const state=(()=>{try{return JSON.parse(localStorage.getItem(KEY))||{};}catch{return{}}})();
  state.questions ||= {}; state.quick ||= {}; state.gachi ||= {}; state.listenHistory ||= []; state.preReadSeen ||= {}; state.latestResults ||= {}; state.listenPosition ||= {};
  const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
  function show(id){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===id));window.scrollTo({top:0,behavior:'smooth'});}
  function bindData(pack){D=pack.data;D.tables ||= [];D.notes ||= [];info=D.info[0];sentenceMap=new Map(D.sentences.map(x=>[x.sentenceId,x]));ruleMap=new Map(D.rules.map(x=>[String(x.ruleId),x]));summaryMap=new Map(D.summaries.map(x=>[x.questionId,x]));}
  const qrec=id=>state.questions[id] ||= {attempts:[],correctCount:0,clearedAt:null,selfCheck:null};
  const fmt=iso=>{if(!iso)return'—';const d=new Date(iso);return `${String(d.getFullYear()).slice(2)}/${d.getMonth()+1}/${d.getDate()}`;};
  function ruleHtml(ids){return split(ids).map(id=>{const r=ruleMap.get(String(id));return r?`<div class="rules-rule"><b>Rule ${esc(id)}：${esc(r.officialTitle)}</b><small>${esc(r.easyExplanation)}</small></div>`:''}).join('');}
  function notesHtml(){
    const notes=(D?.notes||[])
      .filter(n=>!n.status||n.status==='active')
      .sort((a,b)=>Number(a.noteNo||0)-Number(b.noteNo||0));
    if(!notes.length)return '';
    return `<aside class="rules-notes" aria-label="本文のNotes"><h3>[Notes]</h3><dl>${notes.map(n=>`<div><dt>${esc(n.term)}</dt><dd>${esc(n.meaning)}</dd></div>`).join('')}</dl></aside>`;
  }
  function quickContextText(ids){
    const sentenceIds=split(ids);
    return sentenceIds
      .map(id=>sentenceMap.get(id))
      .filter(Boolean)
      .map(sentence=>sentence.displayText||sentence.english||sentence.speechTextReference||'')
      .filter(Boolean)
      .join(' ');
  }
  function ensureData(){if(D)return true;alert('Rules教材が未読込です。設定からLessonごとのCSV 9ファイルを読み込んでください。');show('settingsView');return false;}
  function packStats(pack){const oldD=D,oldInfo=info,oldSentenceMap=sentenceMap,oldRuleMap=ruleMap,oldSummaryMap=summaryMap;bindData(pack);const out=lessonStats();D=oldD;info=oldInfo;sentenceMap=oldSentenceMap;ruleMap=oldRuleMap;summaryMap=oldSummaryMap;return out;}
  async function refreshPacks(){packs=await RulesStore.loadAll();renderSavedRules();}
  function renderSavedRules(){
    const box=byId('savedRulesMaterial');
    if(!box)return;
    box.innerHTML=packs.length?packs.map(p=>{
      const open=savedPackOpenIds.has(p.lessonId);
      return `<article class="review-item rules-saved-pack-card ${open?'is-open':''}" data-id="${esc(p.lessonId)}">
        <button class="rules-saved-pack-summary" type="button" aria-expanded="${open?'true':'false'}">
          <span class="rules-saved-pack-main"><small>${esc(p.lessonId)}</small><strong>${esc(p.title)}</strong><em>${esc(p.files?.length||9)}ファイル保存済み</em></span>
          <span class="rules-saved-pack-meta">更新 ${fmt(p.updatedAt)} <span class="rules-saved-pack-arrow">${open?'▲':'▼'}</span></span>
        </button>
        <div class="rules-saved-pack-detail" ${open?'':'hidden'}>
          <div class="rules-inline-actions"><button class="secondary-button rules-open-pack" data-id="${esc(p.lessonId)}">開く</button><button class="ghost-button rules-delete-pack" data-id="${esc(p.lessonId)}">削除</button></div>
        </div>
      </article>`;
    }).join(''):'<p class="empty-state">Rules教材はまだ読み込まれていません。</p>';
    box.querySelectorAll('.rules-saved-pack-summary').forEach(b=>b.onclick=()=>{
      const card=b.closest('.rules-saved-pack-card'),id=card.dataset.id,opening=!card.classList.contains('is-open');
      card.classList.toggle('is-open',opening);
      card.querySelector('.rules-saved-pack-detail')?.toggleAttribute('hidden',!opening);
      b.setAttribute('aria-expanded',String(opening));
      card.querySelector('.rules-saved-pack-arrow').textContent=opening?'▲':'▼';
      if(opening)savedPackOpenIds.add(id);else savedPackOpenIds.delete(id);
    });
    box.querySelectorAll('.rules-open-pack').forEach(b=>b.onclick=()=>{const p=packs.find(x=>x.lessonId===b.dataset.id);bindData(p);renderLessonList();show('rulesLessonView');});
    box.querySelectorAll('.rules-delete-pack').forEach(b=>b.onclick=async()=>{if(confirm('この端末からRules教材を削除しますか？')){savedPackOpenIds.delete(b.dataset.id);await RulesStore.remove(b.dataset.id);if(info?.lessonId===b.dataset.id){D=null;info=null;}await refreshPacks();}});
  }
  function lessonStats(){const cleared=D.questions.filter(q=>q.responseType==='open_ja'?qrec(q.questionId).selfCheck==='understood':qrec(q.questionId).correctCount>=2).length;const quickDone=Object.keys(state.quick).filter(id=>D.quick.some(q=>q.quickId===id)).length;const gDone=Object.entries(state.gachi).filter(([id,v])=>D.gachi.some(g=>g.sentenceId===id)&&v.status==='understood').length;const review=Object.entries(state.gachi).filter(([id,v])=>D.gachi.some(g=>g.sentenceId===id)&&v.status==='review').length;const listens=state.listenHistory.filter(x=>x.lessonId===info.lessonId&&x.completed).length;const dates=[...D.questions.flatMap(q=>qrec(q.questionId).attempts.map(a=>a.at)),...state.listenHistory.filter(x=>x.lessonId===info.lessonId).map(x=>x.at)].filter(Boolean).sort();return{cleared,quickDone,gDone,review,listens,last:dates.at(-1)};}
  function openLesson(pack){
    if(!pack)return;
    bindData(pack);
    const st=lessonStats();
    const latest=state.latestResults[info.lessonId];
    const completed=st.cleared>=D.questions.length && D.questions.length>0;
    if(completed&&latest){renderResult(latest);show('rulesResultView');return;}
    renderMenu();show('rulesMenuView');
  }
  function startLessonMode(pack,mode){
    if(!pack)return;
    bindData(pack);
    if(mode==='book'){
      renderPreRead();show('rulesPreReadView');
      return;
    }
    if(mode==='quick'){quickIndex=0;renderQuick();show('rulesQuickView');return;}
    if(mode==='gachi'){renderGachiHub();show('rulesGachiHubView');return;}
    if(mode==='listen'){listenOrigin='menu';renderListen();show('rulesListenView');}
  }
  function renderLessonList(){
    if(!packs.length){D=null;ensureData();return;}
    const listenOnly=lessonEntryMode==='listen';
    const head=document.querySelector('#rulesLessonView .section-head');
    if(head)head.innerHTML=listenOnly
      ?'<p class="eyebrow">Listening</p><h2>長文を聞く</h2>'
      :'<p class="eyebrow">Rules</p><h2>Rules / 英作文</h2><p>Lessonカードをタップして学習を始めます。</p>';

    if(listenOnly){
      byId('rulesLessonList').innerHTML=packs.map(p=>{
        const st=packStats(p),pi=p.data.info[0];
        return `<article class="review-item rules-listen-lesson-card">
          <div class="review-item-top"><span>Lesson ${esc(pi.lessonOrder)}</span><span>${st.listens}回聞いた</span></div>
          <strong class="rules-lesson-title">${esc(pi.title)}</strong>
          <button class="secondary-button rules-listen-open" data-id="${esc(p.lessonId)}" type="button">この長文を聞く</button>
        </article>`;
      }).join('');
      document.querySelectorAll('.rules-listen-open').forEach(b=>b.onclick=()=>{
        bindData(packs.find(x=>x.lessonId===b.dataset.id));
        listenOrigin='home';renderListen();show('rulesListenView');lessonEntryMode='menu';
      });
      return;
    }

    const activeId=info?.lessonId||packs[0]?.lessonId;
    byId('rulesLessonList').innerHTML=packs.map(p=>{
      const st=packStats(p),pi=p.data.info[0];
      const open=p.lessonId===activeId;
      const started=st.cleared||st.quickDone||st.gDone||st.listens;
      const completed=st.cleared>=p.data.questions.length&&p.data.questions.length>0;
      const entryLabel=completed?'完了済み・結果を見る':started?'続きから':'Lesson先頭から';
      return `<article class="review-item rules-lesson-card ${open?'is-open':''}" data-id="${esc(p.lessonId)}" tabindex="0" role="button" aria-label="Lesson ${esc(pi.lessonOrder)} ${esc(pi.title)} ${entryLabel}">
        <div class="rules-lesson-summary">
          <span><small>Lesson ${esc(pi.lessonOrder)}</small><strong>${esc(pi.title)}</strong><em>${entryLabel}</em></span>
          <span class="rules-lesson-summary-meta">最終 ${fmt(st.last)} <button class="rules-lesson-toggle" type="button" aria-expanded="${open?'true':'false'}" aria-label="詳細を${open?'閉じる':'開く'}">${open?'▲':'▼'}</button></span>
        </div>
        <div class="rules-lesson-detail" ${open?'':'hidden'}>
          <div class="rules-lesson-stats">
            <button class="rules-lesson-mode" data-mode="book" type="button">本書問題<br><b>${st.cleared}/${p.data.questions.length}</b></button>
            <button class="rules-lesson-mode" data-mode="quick" type="button">さくっと精読<br><b>${st.quickDone}/${p.data.quick.length}</b></button>
            <button class="rules-lesson-mode" data-mode="gachi" type="button">ガチ精読<br><b>確認済み${st.gDone}・要復習${st.review}</b></button>
            <button class="rules-lesson-mode" data-mode="listen" type="button">リスニング<br><b>${st.listens}回</b></button>
          </div>
        </div>
      </article>`;
    }).join('');

    const lessonList=byId('rulesLessonList');

    // 各モードボタンはカード全体のクリック処理から独立させる。
    // iPad/Safariでも確実に直接遷移するよう、個別にイベント登録する。
    lessonList.querySelectorAll('.rules-lesson-mode').forEach(button=>{
      button.addEventListener('click',e=>{
        e.preventDefault();
        e.stopPropagation();
        const card=button.closest('.rules-lesson-card');
        const pack=packs.find(x=>x.lessonId===card?.dataset.id);
        startLessonMode(pack,button.dataset.mode);
      });
    });

    lessonList.querySelectorAll('.rules-lesson-toggle').forEach(toggle=>{
      toggle.addEventListener('click',e=>{
        e.preventDefault();
        e.stopPropagation();
        const card=toggle.closest('.rules-lesson-card');
        const opening=!card.classList.contains('is-open');
        card.classList.toggle('is-open',opening);
        card.querySelector('.rules-lesson-detail')?.toggleAttribute('hidden',!opening);
        toggle.setAttribute('aria-expanded',String(opening));
        toggle.setAttribute('aria-label',`詳細を${opening?'閉じる':'開く'}`);
        toggle.textContent=opening?'▲':'▼';
      });
    });

    lessonList.onclick=e=>{
      if(e.target.closest('.rules-lesson-toggle,.rules-lesson-mode'))return;
      const card=e.target.closest('.rules-lesson-card');
      if(card)openLesson(packs.find(x=>x.lessonId===card.dataset.id));
    };
    lessonList.onkeydown=e=>{
      if(e.key!=='Enter'&&e.key!==' ')return;
      if(e.target.closest('.rules-lesson-toggle,.rules-lesson-mode'))return;
      const card=e.target.closest('.rules-lesson-card');
      if(!card)return;
      e.preventDefault();
      openLesson(packs.find(x=>x.lessonId===card.dataset.id));
    };
  }
  function renderMenu(){const st=lessonStats(),latest=state.latestResults[info.lessonId];byId('rulesLessonHeader').innerHTML=`<p class="eyebrow">Lesson ${esc(info.lessonOrder)}</p><h2>${esc(info.title)}</h2><p>本書問題 ${st.cleared}/${D.questions.length}・さくっと ${st.quickDone}/${D.quick.length}・リスニング ${st.listens}回</p>${latest?`<button id="rulesOpenLatestResult" class="secondary-button">最新のLesson結果を見る</button><small class="rules-result-saved-note">${fmt(latest.completedAt)}の結果を保存中</small>`:''}`;if(latest)byId('rulesOpenLatestResult').onclick=()=>{renderResult(latest);show('rulesResultView');};}
  function renderPreRead(){byId('rulesPreReadCard').innerHTML=`<p class="eyebrow">Before Reading</p><h2>読む前チェック</h2><div class="rules-callout"><b>今回の話題</b><p>${esc(info.topicJa)}</p></div><h3>先に知っておく単語</h3><div class="rules-vocab-list">${D.vocab.map(v=>`<div><b>${esc(v.word)}</b><span>${esc(v.meaningJa)}</span></div>`).join('')}</div><div class="rules-callout"><b>読むときのミッション</b><p>${esc(info.mission)}</p></div><p class="rules-gentle">🌱 ${esc(info.preReadMessage)}</p><button id="rulesBeginBook" class="primary-button wide">本文と問題へ</button>`;byId('rulesBeginBook').onclick=()=>{state.preReadSeen[info.lessonId]=true;save();quizIndex=0;wrongCount=0;quizSession={};renderQuiz();show('rulesQuizView');};}
  function questionTarget(q){
    if(!q)return null;
    return{
      sentenceId:q.targetSentenceId||split(q.evidenceSentenceIds)[0],
      type:q.targetType||'',
      displayLabel:q.targetDisplayText||'',
      markerLabel:q.targetLabel||'',
      text:q.targetText||'',
      start:q.targetStartText||'',
      end:q.targetEndText||''
    };
  }
  function markTarget(text,target){
    const source=String(text||'');
    if(!target)return esc(source);
    if(target.type==='blank'){
      const marker=target.markerLabel?`（ ${esc(target.markerLabel)} ）`:'（　）';
      let idx=target.start?source.indexOf(target.start):-1;
      if(idx>=0){
        idx+=target.start.length;
        return `${esc(source.slice(0,idx))}<span class="rules-question-target blank">${marker}</span>${esc(source.slice(idx))}`;
      }
      // targetStartText がない教材では、CSVの targetText を空所位置として使う。
      if(target.text){
        idx=source.toLowerCase().indexOf(target.text.toLowerCase());
        if(idx>=0){
          return `${esc(source.slice(0,idx))}<span class="rules-question-target blank">${marker}</span>${esc(source.slice(idx+target.text.length))}`;
        }
      }
      if(target.end){
        idx=source.indexOf(target.end);
        if(idx>=0){
          return `${esc(source.slice(0,idx))}<span class="rules-question-target blank">${marker}</span>${esc(source.slice(idx))}`;
        }
      }
      return esc(source);
    }
    if(target.text){
      const idx=source.toLowerCase().indexOf(target.text.toLowerCase());
      if(idx>=0)return `${esc(source.slice(0,idx))}<span class="rules-question-target">${esc(source.slice(idx,idx+target.text.length))}</span>${esc(source.slice(idx+target.text.length))}`;
    }
    return esc(source);
  }
  function tableHtml(q=null,reveal=false){if(!D.tables?.length)return'';const targetIds=new Set(reveal?split(q?.targetCellIds):[]),targetTable=q?.targetTableId||'';if(q&&!targetTable)return'';const tables=[...new Set(D.tables.map(r=>r.tableId))].filter(id=>!targetTable||id===targetTable);return tables.map(tableId=>{const rows=D.tables.filter(r=>r.tableId===tableId);const title=rows[0]?.tableTitle||'表',note=rows[0]?.tableNote||'';const cols=[...new Map(rows.sort((a,b)=>Number(a.columnOrder)-Number(b.columnOrder)).map(r=>[r.columnId,{id:r.columnId,label:r.columnHeader,order:Number(r.columnOrder)}])).values()].sort((a,b)=>a.order-b.order);const rowIds=[...new Map(rows.map(r=>[r.rowId,{id:r.rowId,order:Number(r.rowOrder)}])).values()].sort((a,b)=>a.order-b.order);const desktop=`<div class="rules-data-table-wrap"><table class="rules-data-table"><thead><tr>${cols.map(c=>`<th>${esc(c.label)}</th>`).join('')}</tr></thead><tbody>${rowIds.map(ro=>`<tr>${cols.map(c=>{const cell=rows.find(x=>x.rowId===ro.id&&x.columnId===c.id);const hit=targetIds.has(cell?.cellId);return `<td id="rt-${esc(cell?.cellId||'')}" class="${hit?'target-cell':''}">${esc(cell?.cellText||'')}</td>`;}).join('')}</tr>`).join('')}</tbody></table></div>`;const mobile=`<div class="rules-data-cards">${rowIds.map(ro=>`<article class="rules-data-row-card">${cols.map(c=>{const cell=rows.find(x=>x.rowId===ro.id&&x.columnId===c.id);const hit=targetIds.has(cell?.cellId);return `<div id="rm-${esc(cell?.cellId||'')}" class="${hit?'target-cell':''}"><small>${esc(c.label)}</small><b>${esc(cell?.cellText||'')}</b></div>`;}).join('')}</article>`).join('')}</div>`;return `<section class="rules-table-block ${targetTable===tableId?'question-table':''}"><h3>${esc(title)}</h3>${note?`<p class="rules-table-note">${esc(note)}</p>`:''}${desktop}${mobile}</section>`;}).join('');}
  function passageHtml(high=[],q=null,revealTable=false){const hs=new Set(high),target=questionTarget(q);let p='';const text=D.sentences.map(s=>{let h='';if(s.paragraphId!==p){p=s.paragraphId;h=`<h3>${esc(String(p).replace(/.*P/,'Paragraph '))}</h3>`;}const html=target?.sentenceId===s.sentenceId?markTarget(s.displayText,target):esc(s.displayText);return `${h}<p id="rs-${esc(s.sentenceId)}" class="rules-sentence ${hs.has(s.sentenceId)?'highlight':''}">${html}</p>`;}).join('');return tableHtml(q,revealTable)+text+notesHtml();}
  function focusQuestionEvidence(q,revealTable=false){const cell=split(q?.targetCellIds)[0];const first=q?.targetSentenceId||split(q?.evidenceSentenceIds)[0];setTimeout(()=>{const el=(revealTable&&cell)?(document.getElementById('rt-'+cell)||document.getElementById('rm-'+cell)):document.getElementById('rs-'+first);el?.scrollIntoView({behavior:'smooth',block:'center'});},60);}
  function renderQuiz(){
    const q=D.questions[quizIndex],target=questionTarget(q);wrongCount=0;lastAnswer=null;
    byId('rulesQuizProgress').textContent=`${quizIndex+1} / ${D.questions.length}`;
    byId('rulesPassage').innerHTML=passageHtml([],q);
    if(q.responseType==='open_ja'){
      const saved=qrec(q.questionId).selfCheck;
      byId('rulesQuestionPanel').innerHTML=`<p class="eyebrow">Book Question ${esc(q.bookQuestionNo)}</p>${target?.displayLabel?`<p class="rules-target-reminder">確認するところ：<b>${esc(target.displayLabel)}</b></p>`:''}<div class="rules-open-question"><h2>${esc(q.question)}</h2><p class="rules-open-guide">まず本文を見ながら、自分の言葉で答えを考えよう。入力内容は採点しません。</p><textarea id="rulesOpenAnswer" rows="6" placeholder="ここに自分の答えをメモできます（入力しなくてもOK）"></textarea><button id="rulesShowModel" class="primary-button wide" type="button">模範解答を見る</button><div id="rulesBookFeedback">${saved?`<p class="rules-result-saved-note">前回：${saved==='understood'?'理解した':'もう一度確認'}</p>`:''}</div></div>`;
      byId('rulesShowModel').onclick=()=>showOpenAnswer(q);
      focusQuestionEvidence(q);return;
    }
    const count=Number(q.choiceCount||4),isPool=Boolean(q.choicePoolId);const group=isPool?D.questions.filter(x=>x.bookQuestionGroupId===q.bookQuestionGroupId):[];const usedAnswers=new Set(group.filter(x=>Number(x.order)<Number(q.order)).map(x=>{const a=(quizSession[x.questionId]||[]).filter(v=>v.correct).at(-1);return a?String(a.selected):null;}).filter(Boolean));const choices=Array.from({length:count},(_,i)=>({i:i+1,text:q['choice'+(i+1)]}));const pool=isPool?`<div class="rules-choice-pool interactive"><b>共通語群から1語選んでください</b><p>8語を使って空所を順に埋めます。1つの語は1回だけ使い、2語余ります。</p><div>${choices.map(c=>`<button type="button" class="rules-pool-choice ${usedAnswers.has(String(c.i))?'used':''}" data-i="${c.i}" ${usedAnswers.has(String(c.i))?'disabled':''}>${esc(c.text)}</button>`).join('')}</div><small>残り ${choices.length-usedAnswers.size}語</small></div>`:'';const normalChoices=isPool?'':`<div class="choices-box">${choices.map(c=>`<button class="choice-button rules-book-choice" data-i="${c.i}">${esc(c.text)}</button>`).join('')}</div>`;byId('rulesQuestionPanel').innerHTML=`<p class="eyebrow">Book Question ${esc(q.bookQuestionNo)}${q.subQuestionNo?' - '+esc(q.subQuestionNo):''}</p>${target?.displayLabel?`<p class="rules-target-reminder">確認するところ：<b>${esc(target.displayLabel)}</b></p>`:''}${pool}<h2>${esc(q.question)}</h2>${normalChoices}<div id="rulesBookFeedback"></div><p class="rules-count">この問題の正解回数：${qrec(q.questionId).correctCount}/2</p>`;document.querySelectorAll(isPool?'.rules-pool-choice:not([disabled])':'.rules-book-choice').forEach(b=>b.onclick=()=>answerBook(q,Number(b.dataset.i)));focusQuestionEvidence(q);
  }
  function showOpenAnswer(q){const sum=summaryMap.get(q.questionId),draft=byId('rulesOpenAnswer')?.value||'';byId('rulesPassage').innerHTML=passageHtml(split(q.evidenceSentenceIds),q,true);focusQuestionEvidence(q,true);byId('rulesExplainCard').innerHTML=`<p class="eyebrow">Model Answer</p><h2>模範解答</h2>${q.targetTableId?tableHtml(q,true):''}<p class="rules-answer-reveal">${esc(q.modelAnswerJa||sum?.modelAnswerJa||'')}</p><h3>本文の根拠</h3><p>${esc(sum?.evidenceSummary||'')}</p><h3>解説</h3><p class="rules-translation">${esc(sum?.easyExplanation||'')}</p>${ruleHtml(sum?.ruleId||q.ruleIds)}${draft?`<details><summary>自分のメモを見る</summary><p>${esc(draft)}</p></details>`:''}<p class="rules-open-check-label">内容を確認して、今の状態を選んでください。</p><div class="rules-rating"><button class="secondary-button" data-open-rate="understood">理解した</button><button class="ghost-button" data-open-rate="review">もう一度確認</button></div>`;document.querySelectorAll('[data-open-rate]').forEach(b=>b.onclick=()=>completeOpenQuestion(q,b.dataset.openRate,draft));show('rulesExplainView');}
  function completeOpenQuestion(q,status,draft){const rec=qrec(q.questionId),attempt={type:'selfcheck',status,draft,correct:status==='understood',at:new Date().toISOString()};rec.selfCheck=status;rec.attempts.push(attempt);(quizSession[q.questionId] ||= []).push(attempt);save();if(quizIndex<D.questions.length-1){quizIndex++;renderQuiz();show('rulesQuizView');}else{const snapshot=saveLatestResult();renderResult(snapshot);show('rulesResultView');}}
  function answerBook(q,selected){const correct=selected===Number(q.answer),rec=qrec(q.questionId),sum=summaryMap.get(q.questionId);const attempt={selected,correct,at:new Date().toISOString()};rec.attempts.push(attempt);(quizSession[q.questionId] ||= []).push(attempt);lastAnswer={q,selected,correct,sum};if(correct){if(rec.correctCount<2)rec.correctCount++;if(rec.correctCount>=2&&!rec.clearedAt)rec.clearedAt=new Date().toISOString();save();showExplanation();return;}wrongCount++;save();document.querySelectorAll('.rules-book-choice,.rules-pool-choice').forEach(b=>{b.classList.toggle('rules-choice-wrong',Number(b.dataset.i)===selected);});byId('rulesPassage').innerHTML=passageHtml(split(q.evidenceSentenceIds),q,true);focusQuestionEvidence(q,true);if(wrongCount<2){byId('rulesBookFeedback').innerHTML=`<div class="rules-retry-note"><b>ちがいます。根拠の近くをもう一度見てみよう。</b><p>${esc(sum?.['choice'+selected+'Feedback']||'本文と選択肢のズレを確認しよう。')}</p><button id="rulesRetryBtn" class="secondary-button">もう一度選ぶ</button></div>`;document.querySelectorAll('.rules-book-choice,.rules-pool-choice').forEach(b=>b.disabled=true);byId('rulesRetryBtn').onclick=()=>{document.querySelectorAll('.rules-book-choice,.rules-pool-choice').forEach(b=>{if(!b.classList.contains('used'))b.disabled=false;b.classList.remove('rules-choice-wrong');});byId('rulesBookFeedback').innerHTML='';};}else showExplanation();}
  function showExplanation(){const {q,selected,correct,sum}=lastAnswer;byId('rulesExplainCard').innerHTML=`<p class="eyebrow">Answer & Explanation</p><h2>${correct?'正解！':'ここで整理しよう'}</h2><div class="rules-callout"><b>正解</b><p>${esc(q['choice'+q.answer])}</p></div>${q.targetTableId?tableHtml(q,true):''}<h3>本文の根拠</h3><p>${esc(sum?.evidenceSummary||'')}</p><h3>解説</h3><p class="rules-translation">${esc(sum?.easyExplanation||'')}</p>${ruleHtml(sum?.ruleId)}${!correct?`<p><b>選んだ答えのズレ：</b>${esc(sum?.['choice'+selected+'Feedback']||'')}</p>`:''}<button id="rulesExplainNext" class="primary-button wide">${quizIndex===D.questions.length-1?'Lesson結果へ':'次の問題'}</button>`;byId('rulesExplainNext').onclick=()=>{if(quizIndex<D.questions.length-1){quizIndex++;renderQuiz();show('rulesQuizView');}else{const snapshot=saveLatestResult();renderResult(snapshot);show('rulesResultView');}};show('rulesExplainView');}
  function makeResultSnapshot(){const questions=D.questions.map(q=>({questionId:q.questionId,attempts:(quizSession[q.questionId]||[]).slice(-2)}));const openMode=D.questions.some(q=>q.responseType==='open_ja');const first=openMode?questions.filter(x=>x.attempts.at(-1)?.status==='understood').length:questions.filter(x=>x.attempts[0]?.correct).length;const second=openMode?0:questions.filter(x=>!x.attempts[0]?.correct&&x.attempts[1]?.correct).length;return{lessonId:info.lessonId,lessonOrder:info.lessonOrder,title:info.title,completedAt:new Date().toISOString(),first,second,pending:D.questions.length-first-second,openMode,questions};}
  function saveLatestResult(){const snapshot=makeResultSnapshot();state.latestResults[info.lessonId]=snapshot;save();return snapshot;}
  function snapshotAttempts(questionId,snapshot){return snapshot?.questions?.find(x=>x.questionId===questionId)?.attempts||qrec(questionId).attempts.slice(-2);}
  function renderQuestionReview(questionId,snapshot=state.latestResults[info.lessonId]){const q=D.questions.find(x=>x.questionId===questionId),sum=summaryMap.get(questionId);if(!q)return;const saved=snapshotAttempts(questionId,snapshot);if(q.responseType==='open_ja'){const last=saved.at(-1);byId('rulesResultCard').innerHTML=`<button id="rulesBackResult" class="back-button" type="button">← Lesson結果</button><p class="eyebrow">Question Review</p><h2>問題 ${esc(q.bookQuestionNo)}</h2><div class="rules-callout"><b>問題</b><p>${esc(q.question)}</p></div>${last?.draft?`<h3>自分のメモ</h3><p>${esc(last.draft)}</p>`:''}<div class="rules-callout"><b>模範解答</b><p>${esc(q.modelAnswerJa||sum?.modelAnswerJa||'')}</p></div><h3>本文の根拠</h3><p>${esc(sum?.evidenceSummary||'')}</p><h3>解説</h3><p class="rules-translation">${esc(sum?.easyExplanation||'')}</p>${ruleHtml(sum?.ruleId||q.ruleIds)}<p class="rules-result-saved-note">自己確認：${last?.status==='understood'?'理解した':'もう一度確認'}</p>`;}else{const attempts=saved.map((a,i)=>`<li>${i+1}回目：${esc(q['choice'+a.selected]||a.selected)}（${a.correct?'正解':'不正解'}）</li>`).join('');byId('rulesResultCard').innerHTML=`<button id="rulesBackResult" class="back-button" type="button">← Lesson結果</button><p class="eyebrow">Question Review</p><h2>問題 ${esc(q.bookQuestionNo)}${q.subQuestionNo?'-'+esc(q.subQuestionNo):''}</h2><div class="rules-callout"><b>問題</b><p>${esc(q.question)}</p></div><h3>選択肢</h3><ol>${Array.from({length:Number(q.choiceCount||4)},(_,i)=>`<li>${esc(q['choice'+(i+1)])}</li>`).join('')}</ol><h3>自分の回答</h3><ul>${attempts||'<li>未回答</li>'}</ul><div class="rules-callout"><b>正解</b><p>${esc(q['choice'+q.answer])}</p></div><h3>本文の根拠</h3><p>${esc(sum?.evidenceSummary||'')}</p><h3>解説</h3><p class="rules-translation">${esc(sum?.easyExplanation||'')}</p>${ruleHtml(sum?.ruleId)}`;}byId('rulesBackResult').onclick=()=>renderResult(snapshot);}
  function resultQuestionIds(snapshot,group){
    return D.questions.filter(q=>{
      const attempts=snapshotAttempts(q.questionId,snapshot);
      if(snapshot.openMode){const understood=attempts.at(-1)?.status==='understood';return group==='first'?understood:group==='pending'?!understood:false;}
      if(group==='first')return Boolean(attempts[0]?.correct);
      if(group==='second')return Boolean(!attempts[0]?.correct&&attempts[1]?.correct);
      if(group==='pending')return !attempts[0]?.correct&&!attempts[1]?.correct;
      return false;
    }).map(q=>q.questionId);
  }
  function renderResultQuestionList(snapshot,group){
    const host=byId('rulesResultQuestionList');
    if(!host)return;
    const ids=resultQuestionIds(snapshot,group);
    host.innerHTML=ids.length?ids.map(id=>{const q=D.questions.find(x=>x.questionId===id);return `<button class="rules-result-question review-item" data-id="${esc(id)}"><span>問題 ${esc(q.bookQuestionNo)}${q.subQuestionNo?'-'+esc(q.subQuestionNo):''}</span><small>タップして問題・解答・根拠・解説を見る</small></button>`;}).join(''):'<p class="empty-state">この条件に当てはまる問題はありません。</p>';
    host.querySelectorAll('.rules-result-question').forEach(b=>b.onclick=()=>renderQuestionReview(b.dataset.id,snapshot));
  }
  function renderResult(snapshot=state.latestResults[info.lessonId]||makeResultSnapshot()){
    const first=snapshot.first,second=snapshot.second,pending=snapshot.pending;
    byId('rulesResultCard').innerHTML=`<p class="eyebrow">Lesson Result</p><h2>Lesson ${esc(info.lessonOrder)} 結果</h2><p class="rules-result-saved-note">この結果は端末に保存されています（${fmt(snapshot.completedAt)}）</p>
      <div class="rules-result-grid rules-result-filter-grid">${snapshot.openMode?`<button data-result-group="first"><b>${first}</b>理解した</button><button data-result-group="pending"><b>${pending}</b>もう一度確認</button>`:`<button data-result-group="first"><b>${first}</b>1回目で正解</button><button data-result-group="second"><b>${second}</b>2回目で正解</button><button data-result-group="pending"><b>${pending}</b>確認したい問題</button>`}<div class="rules-result-listen-stat"><b>${lessonStats().listens}</b>聞いた回数</div></div>
      <div id="rulesResultFilteredBlock" class="rules-result-filtered-block hidden"><h3 id="rulesResultFilterTitle">問題を見直す</h3><div id="rulesResultQuestionList" class="rules-result-question-list"></div></div>
      <h3>次におすすめ</h3><div class="rules-inline-actions"><button class="secondary-button rules-result-quick">さくっと精読</button><button class="ghost-button rules-result-gachi">ガチ精読</button><button class="ghost-button rules-result-listen">長文を聞く</button></div><button class="primary-button wide rules-result-menu">Lessonメニューへ</button>`;
    document.querySelectorAll('[data-result-group]').forEach(b=>b.onclick=()=>{
      document.querySelectorAll('[data-result-group]').forEach(x=>x.classList.toggle('active',x===b));
      const labels={first:snapshot.openMode?'理解した':'1回目で正解',second:'2回目で正解',pending:snapshot.openMode?'もう一度確認':'確認したい問題'};
      byId('rulesResultFilterTitle').textContent=`${labels[b.dataset.resultGroup]}の問題`;
      byId('rulesResultFilteredBlock').classList.remove('hidden');
      renderResultQuestionList(snapshot,b.dataset.resultGroup);
      byId('rulesResultFilteredBlock').scrollIntoView({behavior:'smooth',block:'start'});
    });
    document.querySelector('.rules-result-quick').onclick=()=>{quickIndex=0;renderQuick();show('rulesQuickView');};document.querySelector('.rules-result-gachi').onclick=()=>{renderGachiHub();show('rulesGachiHubView');};document.querySelector('.rules-result-listen').onclick=()=>{listenOrigin='menu';renderListen();show('rulesListenView');};document.querySelector('.rules-result-menu').onclick=()=>{renderMenu();show('rulesMenuView');};
  }
  function renderQuick(){
    const q=D.quick[quickIndex];
    if(!q){
      alert('このLessonには、さくっと精読の問題がありません。');
      renderLessonList();
      show('rulesLessonView');
      return;
    }

    const focusWord=q.focusWord||q.keyToken||'ポイント';
    const sentenceIds=q.targetSentenceIds||q.contextSentenceIds||'';
    const context=quickContextText(sentenceIds);
    const evidence=q.evidenceText||'';
    const ruleIds=q.relatedRuleIds||q.ruleIds||'';

    byId('rulesQuickProgress').textContent=`${quickIndex+1} / ${D.quick.length}`;
    byId('rulesQuickCard').innerHTML=`
      <p class="eyebrow">Quick Reading</p>
      <h2>${esc(focusWord)}に注目</h2>
      ${context?`<div class="rules-context">${esc(context)}</div>`:''}
      ${evidence?`<p class="rules-hint">確認するところ：${esc(evidence)}</p>`:''}
      ${q.easyHint?`<p class="rules-hint">💡 ${esc(q.easyHint)}</p>`:''}
      <h3>${esc(q.prompt)}</h3>
      <div class="choices-box">
        ${[1,2,3,4].map(i=>`<button class="choice-button rules-quick-choice" type="button" data-i="${i}">${esc(q['choice'+i])}</button>`).join('')}
      </div>
      <div id="rulesQuickFeedback"></div>`;

    byId('rulesQuickCard').querySelectorAll('.rules-quick-choice').forEach(button=>{
      button.addEventListener('click',()=>{
        const selected=Number(button.dataset.i);
        const correct=selected===Number(q.answer);
        state.quick[q.quickId]={correct,at:new Date().toISOString()};
        save();

        byId('rulesQuickCard').querySelectorAll('.rules-quick-choice').forEach(choice=>{
          choice.disabled=true;
        });

        byId('rulesQuickFeedback').innerHTML=`
          <div class="feedback-box">
            <strong>${correct?'いいね！':'前後をもう一度見よう'}</strong>
            <p>${esc(q.easyExplanation)}</p>
            ${ruleHtml(ruleIds)}
            <button id="rulesNextQuick" class="primary-button wide" type="button">${quickIndex===D.quick.length-1?'Lessonメニューへ':'次へ'}</button>
          </div>`;

        byId('rulesNextQuick').addEventListener('click',()=>{
          if(quickIndex<D.quick.length-1){
            quickIndex+=1;
            renderQuick();
          }else{
            renderMenu();
            show('rulesMenuView');
          }
        });
      });
    });
  }

  function renderGachiHub(){const gset=new Set(D.gachi.map(g=>g.sentenceId));const body=D.sentences.map(s=>{const st=state.gachi[s.sentenceId]?.status;const enabled=gset.has(s.sentenceId);const parts=s.displayText.split('/');return `<div class="rules-gachi-row ${st==='review'?'review':st==='understood'?'done':''}"><span class="rules-sentence-no">${esc(String(s.sentenceOrder).padStart(2,'0'))}</span><p>${parts.map(p=>`<button class="rules-phrase ${enabled?'available':''}" data-sid="${esc(s.sentenceId)}" ${enabled?'':'disabled'}>${esc(p.trim())}</button>`).join(' / ')}</p></div>`;}).join('');byId('rulesGachiHubCard').innerHTML=`<p class="eyebrow">Deep Reading</p><h2>分からないところだけ確認しよう</h2><p>薄い青緑の文はタップして詳しく確認できます。確認済みは緑、要復習は黄色で表示します。</p><div class="rules-status-legend"><span class="available">確認できる文</span><span class="done">確認済み</span><span class="review">要復習</span></div><div class="rules-gachi-passage">${body}</div>${notesHtml()}<button id="rulesTranslationToggle" class="secondary-button wide">日本語訳を確認</button><div id="rulesFullTranslation" class="rules-full-translation hidden">${D.sentences.map(s=>`<div class="rules-translation-row"><span class="rules-sentence-no">${esc(String(s.sentenceOrder).padStart(2,'0'))}</span><p>${esc(s.japanese)}</p></div>`).join('')}</div><div class="rules-gachi-footer-actions"><button id="rulesGachiBackLesson" class="primary-button">Lesson ${esc(info.lessonOrder)}へ戻る</button><button id="rulesGachiListen" class="ghost-button">長文を聞く</button></div>`;document.querySelectorAll('.rules-phrase:not([disabled])').forEach(b=>b.onclick=()=>{gachiHubScroll=window.scrollY;gachiSentenceId=b.dataset.sid;gachiStep=0;renderGachi();show('rulesGachiView');});byId('rulesTranslationToggle').onclick=()=>{byId('rulesFullTranslation').classList.toggle('hidden');byId('rulesTranslationToggle').textContent=byId('rulesFullTranslation').classList.contains('hidden')?'日本語訳を確認':'日本語訳を閉じる';};byId('rulesGachiBackLesson').onclick=()=>{renderMenu();show('rulesMenuView');};byId('rulesGachiListen').onclick=()=>{renderListen();show('rulesListenView');};}
  function renderGachi(){const g=D.gachi.find(x=>x.sentenceId===gachiSentenceId),s=sentenceMap.get(gachiSentenceId),chunks=D.chunks.filter(c=>c.sentenceId===gachiSentenceId).sort((a,b)=>Number(a.chunkNo||a.chunkOrder)-Number(b.chunkNo||b.chunkOrder)).map(c=>({english:String(c.analysisChunk||c.englishChunk||'').trim(),meaning:String(c.analysisChunkTranslation||c.meaningJa||'').trim(),note:String(c.analysisNote||'').trim()})).filter(c=>c.english||c.meaning);byId('rulesGachiProgress').textContent=`Sentence ${esc(s.sentenceOrder)}`;const names=['① 主語','② 動詞','③ 骨組み','④ チャンク','⑤ 自然な訳'];let body=['<h3>主語</h3><p class="rules-answer-reveal">'+esc(g.subjectTarget)+'</p>','<h3>動詞の中心</h3><p class="rules-answer-reveal">'+esc(g.verbTarget)+'</p>','<h3>骨組み</h3><p class="rules-skeleton">'+esc(g.skeletonJa)+'</p><p>'+esc(g.coachPoint)+'</p>','<h3>意味を区切って追う</h3><div class="rules-chunks">'+chunks.map(c=>`<div><b>${esc(c.english)}</b><span>${esc(c.meaning)}</span>${c.note?`<small>${esc(c.note)}</small>`:''}</div>`).join('')+'</div>',`<h3>自然な訳</h3><p class="rules-translation">${esc(s.japanese)}</p><div class="rules-rating"><button data-rate="understood" class="secondary-button">理解した</button><button data-rate="review" class="ghost-button">要復習</button></div>`][gachiStep];byId('rulesGachiCard').innerHTML=`<div class="rules-stepper">${names.map((n,i)=>`<span class="${i===gachiStep?'active':''}">${n}</span>`).join('')}</div><p class="eyebrow">Sentence ${esc(s.sentenceOrder)}</p><h2>${esc(s.displayText)}</h2>${body}${gachiStep<4?'<button id="rulesGachiMore" class="primary-button wide">次へ</button>':''}`;if(gachiStep<4)byId('rulesGachiMore').onclick=()=>{gachiStep++;renderGachi();};document.querySelectorAll('[data-rate]').forEach(b=>b.onclick=()=>{state.gachi[gachiSentenceId]={status:b.dataset.rate,at:new Date().toISOString()};save();renderGachiHub();show('rulesGachiHubView');requestAnimationFrame(()=>window.scrollTo({top:gachiHubScroll,behavior:'smooth'}));});}
  let speaking=false,utterances=[],listenRunId=0;
  function renderListen(){
    const hist=state.listenHistory.filter(x=>x.lessonId===info.lessonId&&x.completed);
    const last=hist.at(-1);
    const back=byId('rulesListenView')?.querySelector('.rules-back-menu');
    if(back){back.textContent=listenOrigin==='home'?'← ホーム':'← Lesson';back.dataset.listenBack=listenOrigin;}
    byId('rulesListenCard').innerHTML=`<p class="eyebrow">Listening Only</p>
      <h2>${esc(info.title)}</h2>
      <div class="rules-listen-stats"><div><b>${hist.length}</b><span>累計</span></div><div><b>${fmt(last?.at)}</b><span>最後に聞いた日</span></div></div>
      <div class="rules-listen-options">
        <label><input type="radio" name="listenMode" value="chunked" checked> 区切って聞く</label>
        <label><input type="radio" name="listenMode" value="natural"> 自然に聞く</label>
        <label><input id="rulesGuideToggle" type="checkbox" checked> ガイドON</label>
        <label>速度 <select id="rulesListenRate"><option value="0.75">ゆっくり</option><option value="0.9" selected>標準</option><option value="1.05">少し速い</option></select></label>
      </div>
      <div class="rules-listen-controls rules-listen-controls-simple">
        <button id="rulesListenStart" class="primary-button">再生</button>
        <button id="rulesListenStop" class="ghost-button">中断</button>
      </div>
      <p id="rulesListenStatus" class="rules-gentle">毎回、本文の先頭から再生します。最後まで再生すると1回として記録します。</p>
      <div id="rulesListenText" class="rules-listen-text">${D.sentences.map(s=>`<p data-sentence="${esc(s.sentenceId)}"><span class="rules-listen-number">${esc(s.sentenceOrder)}</span>${s.displayText.split('/').map((p,i)=>`<span class="rules-listen-phrase" data-key="${esc(s.sentenceId)}-${i}">${esc(p.trim())}</span>`).join(' / ')}</p>`).join('')}</div>
      ${notesHtml()}
      <details class="rules-listen-translation"><summary>日本語訳を見る</summary>${D.sentences.map(s=>`<p><span class="rules-listen-number">${esc(s.sentenceOrder)}</span>${esc(s.japanese)}</p>`).join('')}</details>`;
    byId('rulesListenStart').onclick=startListen;
    byId('rulesListenStop').onclick=stopListen;
  }
  function stopListen(userInitiated=true){listenRunId++;const wasSpeaking=speaking;speaking=false;speechSynthesis.cancel();document.querySelectorAll('.rules-listen-phrase').forEach(x=>x.classList.remove('current','next'));if(userInitiated&&wasSpeaking&&byId('rulesListenStatus')){byId('rulesListenStatus').textContent='ここで中断しました。この回は記録していません。次回も本文の先頭から再生します。';byId('rulesListenStatus').className='rules-gentle rules-status-neutral';}}
  function startListen(){if(!('speechSynthesis'in window)){alert('このブラウザでは音声読み上げを利用できません。');return;}stopListen(false);speaking=true;const runId=++listenRunId,mode=document.querySelector('input[name="listenMode"]:checked').value,guide=byId('rulesGuideToggle').checked;utterances=[];D.sentences.forEach(s=>{const parts=mode==='chunked'?s.displayText.split('/').map(x=>x.trim()).filter(Boolean):[s.speechTextReference||s.displayText.replaceAll('/',' ')];parts.forEach((text,i)=>utterances.push({text,key:`${s.sentenceId}-${mode==='chunked'?i:0}`,sentenceId:s.sentenceId,partIndex:i,natural:mode==='natural'}));});let idx=0;const next=()=>{if(!speaking||runId!==listenRunId)return;if(idx>=utterances.length){speaking=false;state.listenHistory.push({lessonId:info.lessonId,mode,guide,completed:true,at:new Date().toISOString()});save();byId('rulesListenStatus').textContent='✅ 1回聞いたとして記録しました。';renderListen();return;}const item=utterances[idx];document.querySelectorAll('.rules-listen-phrase').forEach(x=>x.classList.remove('current','next'));if(guide){const currentNodes=item.natural?[...document.querySelectorAll(`[data-key^="${CSS.escape(item.sentenceId+'-')}"]`)]:[document.querySelector(`[data-key="${CSS.escape(item.key)}"]`)].filter(Boolean);currentNodes.forEach(x=>x.classList.add('current'));currentNodes[0]?.scrollIntoView({behavior:'smooth',block:'center'});const ni=utterances[idx+1];if(ni){const nextNodes=ni.natural?[...document.querySelectorAll(`[data-key^="${CSS.escape(ni.sentenceId+'-')}"]`)]:[document.querySelector(`[data-key="${CSS.escape(ni.key)}"]`)].filter(Boolean);nextNodes.forEach(x=>x.classList.add('next'));}}const u=new SpeechSynthesisUtterance(item.text);u.lang='en-US';u.rate=Number(byId('rulesListenRate')?.value||.9);u.onend=()=>{if(runId!==listenRunId)return;idx++;setTimeout(next,mode==='chunked'?220:40)};u.onerror=()=>{if(runId!==listenRunId||!speaking)return;speaking=false;byId('rulesListenStatus').textContent='音声を再生できませんでした。もう一度お試しください。';byId('rulesListenStatus').className='rules-gentle rules-status-error';};byId('rulesListenStatus').textContent=`文${sentenceMap.get(item.sentenceId)?.sentenceOrder||''}を再生中…`;speechSynthesis.speak(u);};next();}
  async function init(){await refreshPacks();const input=byId('rulesCsvFilesInput');input?.addEventListener('change',()=>{const names=[...input.files].map(f=>f.name);byId('rulesCsvFilesName').textContent=names.length?names.join('、'):'ZIPを1つ選ぶ（CSV個別選択も可）';byId('rulesCsvImportStatus').textContent=names.length?'選択したファイルを確認できます。保存ボタンを押してください。':'';});byId('importRulesCsvBtn')?.addEventListener('click',async()=>{try{byId('rulesCsvImportStatus').textContent='ZIP内の必要ファイルを確認中…';const before=new Set(packs.map(p=>p.lessonId)),newPacks=await RulesStore.buildPacks(input.files);await RulesStore.savePacks(newPacks);const messages=newPacks.map(p=>`${before.has(p.lessonId)?'差し替え':'追加'}：Lesson ${p.lessonOrder}「${p.title}」／必要CSV ${p.files.length}件${p.ignoredCount?`・不要ファイル ${p.ignoredCount}件を除外`:''}`);byId('rulesCsvImportStatus').innerHTML='✅ '+messages.map(esc).join('<br>');await refreshPacks();bindData(newPacks[0]);input.value='';byId('rulesCsvFilesName').textContent='ZIPを1つ選ぶ（CSV個別選択も可）';}catch(e){byId('rulesCsvImportStatus').textContent='⚠️ '+e.message;}});document.querySelectorAll('.rules-test-entry').forEach(b=>b.onclick=()=>{lessonEntryMode='menu';if(!D&&packs.length)bindData(packs[0]);if(ensureData()){renderLessonList();show('rulesLessonView');}});document.querySelectorAll('.rules-listen-entry').forEach(b=>b.onclick=()=>{lessonEntryMode='listen';listenOrigin='home';if(!D&&packs.length)bindData(packs[0]);if(ensureData()){renderLessonList();show('rulesLessonView');}});document.querySelectorAll('.rules-back-home').forEach(b=>b.onclick=()=>show('homeView'));document.querySelectorAll('.rules-back-lessons').forEach(b=>b.onclick=()=>{renderLessonList();show('rulesLessonView');});document.querySelectorAll('.rules-back-menu').forEach(b=>b.onclick=()=>{stopListen();if(b.dataset.listenBack==='home'){listenOrigin='menu';show('homeView');}else{renderMenu();show('rulesMenuView');}});document.querySelectorAll('.rules-back-quiz').forEach(b=>b.onclick=()=>show('rulesQuizView'));document.querySelectorAll('.rules-back-gachi-hub').forEach(b=>b.onclick=()=>{renderGachiHub();show('rulesGachiHubView');requestAnimationFrame(()=>window.scrollTo({top:gachiHubScroll,behavior:'smooth'}));});document.querySelector('.rules-start-quiz').onclick=()=>{renderPreRead();show('rulesPreReadView');};document.querySelector('.rules-start-quick').onclick=()=>{quickIndex=0;renderQuick();show('rulesQuickView');};document.querySelector('.rules-start-gachi').onclick=()=>{renderGachiHub();show('rulesGachiHubView');};document.querySelector('.rules-start-listen').onclick=()=>{listenOrigin='menu';renderListen();show('rulesListenView');};byId('rulesPassageToggle').onclick=()=>{const p=byId('rulesPassage');p.classList.toggle('hidden');byId('rulesPassageToggle').textContent=p.classList.contains('hidden')?'本文を見る':'本文を閉じる';};}
  document.addEventListener('DOMContentLoaded',init);
})();
