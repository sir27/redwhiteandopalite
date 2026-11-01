const body = document.body;
const panel = document.getElementById('panel');
const titleEl = document.getElementById('panel-title');
const bodyEl = document.getElementById('panel-body');
const questionsEl = document.getElementById('panel-questions');
const questionListEl = document.getElementById('panel-question-list');
let activeSpan = null;

function closePanel() {
  panel.hidden = true;
  if (activeSpan) activeSpan.classList.remove('selected');
  activeSpan = null;
}

function setMode(mode) {
  body.classList.toggle('mode-explain', mode === 'explain');
  body.classList.toggle('mode-lyrics', mode === 'lyrics');
  document.querySelectorAll('.toggle button').forEach(b =>
    b.classList.toggle('active', b.dataset.mode === mode));
  document.querySelectorAll('.annot').forEach(s => {
    if (mode === 'explain') {
      s.tabIndex = 0;
      s.setAttribute('role', 'button');
    } else {
      s.removeAttribute('tabindex');
      s.removeAttribute('role');
    }
  });
  if (mode === 'lyrics') closePanel();
}

function openAnnotation(span) {
  const data = ANNOTATIONS[span.dataset.id];
  if (!data) return;
  if (activeSpan) activeSpan.classList.remove('selected');
  activeSpan = span;
  span.classList.add('selected');
  titleEl.textContent = data.title || span.textContent;
  bodyEl.innerHTML = data.body || '';
  const nums = data.questions || [];
  questionsEl.hidden = nums.length === 0;
  questionsEl.open = false;
  questionListEl.replaceChildren(...nums.map(n => {
    const item = QUESTIONS[n] || { q: '', a: [] };
    const li = document.createElement('li');
    const q = document.createElement('div');
    q.className = 'q';
    q.textContent = `${n}. ${item.q}`;
    const answers = document.createElement('ul');
    answers.className = 'answers';
    item.a.forEach(text => {
      const a = document.createElement('li');
      a.textContent = text;
      answers.append(a);
    });
    li.append(q, answers);
    return li;
  }));
  panel.hidden = false;
}

document.querySelector('.toggle').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (b) setMode(b.dataset.mode);
});

const lyrics = document.getElementById('lyrics');
lyrics.addEventListener('click', e => {
  const span = e.target.closest('.annot');
  if (span && body.classList.contains('mode-explain')) openAnnotation(span);
});
lyrics.addEventListener('keydown', e => {
  const span = e.target.closest('.annot');
  if ((e.key === 'Enter' || e.key === ' ') && span && body.classList.contains('mode-explain')) {
    e.preventDefault();
    openAnnotation(span);
  }
});

document.getElementById('close').addEventListener('click', closePanel);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });

function updateHeaderHeight() {
  const h = document.querySelector('header').offsetHeight;
  document.documentElement.style.setProperty('--header-h', h + 'px');
}
updateHeaderHeight();
window.addEventListener('resize', updateHeaderHeight);
window.addEventListener('load', updateHeaderHeight);
if (document.fonts) document.fonts.ready.then(updateHeaderHeight);

setMode('explain');
