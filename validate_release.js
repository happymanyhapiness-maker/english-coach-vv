const fs = require('fs');
const vm = require('vm');
const src = fs.readFileSync('questions.js','utf8');
const ctx = {};
vm.createContext(ctx);
vm.runInContext(src + '\nthis.QUESTIONS = QUESTIONS;', ctx);
const qs = ctx.QUESTIONS;
const ids = new Set();
const issues = [];
for (const q of qs) {
  if (ids.has(q.id)) issues.push(`duplicate id: ${q.id}`);
  ids.add(q.id);
  if (!Array.isArray(q.choices) || q.choices.length !== 4) issues.push(`choices length: ${q.id}`);
  if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) issues.push(`answer range: ${q.id}`);
}
const active = qs.filter(q => !['hold','retired'].includes(q.status));
const counts = {
  total: qs.length,
  active: active.length,
  hold: qs.filter(q => q.status === 'hold').length,
  retired: qs.filter(q => q.status === 'retired').length,
  teacher_vocab: qs.filter(q => q.type === 'teacher_vocab').length,
  non_teacher_vocab: qs.filter(q => q.type !== 'teacher_vocab').length,
  focus1: qs.filter(q => (q.source || '').includes('FOCUS 1') || (q.tags || []).includes('FOCUS 1')).length,
  v04_extra: qs.filter(q => ['reading_evidence','choice_elimination','number_compare','mini_context'].includes(q.type)).length,
  issues: issues.length
};
console.log(JSON.stringify(counts, null, 2));
if (issues.length) { console.error(issues.join('\n')); process.exit(1); }
