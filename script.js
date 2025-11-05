// script.js - interactions: theme toggle, smooth scroll, ripple on buttons

document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle (persist in localStorage)
  const themeBtn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('cv-theme');
  if (saved === 'dark') document.body.classList.add('dark');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const darkNow = document.body.classList.toggle('dark');
      localStorage.setItem('cv-theme', darkNow ? 'dark' : 'light');
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Minimal UI: remove ripple for a cleaner look
  // keep button focus styles native for accessibility

  // Download CV
  // Download CV link fallback: keep link simple
  const dlBtn = document.getElementById('download-cv');
  if (dlBtn) {
    dlBtn.addEventListener('click', () => {
      const href = dlBtn.getAttribute('data-href');
      if (!href) return;
      window.open(href, '_blank');
    });
  }

  // Simple download for sidebar link
  const dlSimple = document.getElementById('download-cv-simple');
  if (dlSimple) {
    dlSimple.addEventListener('click', (e) => {
      // let browser handle it naturally (anchor)
    });
  }

  // No canvas/particles: keep JS minimal and performant
});
