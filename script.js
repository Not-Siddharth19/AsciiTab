document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCollapsible();
});

const themes = ['mocha', 'latte', 'macchiato', 'frappe'];

function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('asciitab-theme') || 'mocha';
  document.documentElement.setAttribute('data-theme', saved);
  updateToggleIcon(saved);
  updateShowcaseButtons(saved);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const currentIndex = themes.indexOf(current);
    const nextIndex = (currentIndex + 1) % themes.length;
    const next = themes[nextIndex];
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('asciitab-theme', next);
    updateToggleIcon(next);
    updateShowcaseButtons(next);
  });
}

function updateToggleIcon(theme) {
  const toggle = document.getElementById('themeToggle');
  let icon, label;
  
  if (theme === 'latte') {
    icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
    label = 'Latte';
  } else {
    icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    const themeNames = { mocha: 'Mocha', macchiato: 'Macchiato', frappe: 'Frappé' };
    label = themeNames[theme] || theme;
  }
  
  toggle.innerHTML = `${icon} ${label}`;
}

function updateShowcaseButtons(activeTheme) {
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === activeTheme);
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.feature-card, .step, .faq-item, .contributing-card, .screenshot, .mockup-widget, .minimalism-card').forEach(el => {
    observer.observe(el);
  });
}

function initCollapsible() {
  const collapsibles = document.querySelectorAll('.collapsible, .collapsible-section');

  collapsibles.forEach(collapsible => {
    const header = collapsible.querySelector('.collapsible-header');
    header.addEventListener('click', () => {
      collapsibles.forEach(c => {
        if (c !== collapsible) c.classList.remove('open');
      });
      collapsible.classList.toggle('open');
    });
  });
}

function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

function initThemeShowcase() {
  const themeButtons = document.querySelectorAll('.theme-btn');

  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('asciitab-theme', theme);
      updateToggleIcon(theme);
      updateShowcaseButtons(theme);
    });
  });
}
