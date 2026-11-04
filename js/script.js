// Types the hero code window once on page load (skipped if the visitor prefers reduced motion)
const code = document.querySelector('#code code');
const parts = [...code.children];

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const texts = parts.map(p => p.textContent);
  parts.forEach(p => (p.textContent = ''));
  code.classList.add('typing');
  let i = 0, j = 0;
  (function type() {
    if (i >= parts.length) { code.classList.remove('typing'); return; }
    parts[i].textContent += texts[i][j++];
    if (j >= texts[i].length) { i++; j = 0; }
    setTimeout(type, 22);
  })();
}

document.getElementById('y').textContent = new Date().getFullYear();
