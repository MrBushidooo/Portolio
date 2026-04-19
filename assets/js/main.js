// ── NAV ACTIVE STATE ────────────────────────────
(function () {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    const isHome = href === 'index.html' || href === '../index.html';
    const isResume = href.includes('resume');
    if (isHome && (path === '/' || path.endsWith('index.html') || path.endsWith('/'))) {
      link.classList.add('active');
    } else if (isResume && path.includes('resume')) {
      link.classList.add('active');
    }
  });
})();

// ── HAMBURGER ───────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

// ── SCROLL FADE-UP ──────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
