document.addEventListener('DOMContentLoaded', () => {
  const languageSelect = document.getElementById('language');
  const themeSelect = document.getElementById('theme');

  const titleEl = document.getElementById('title');
  const subtitleEl = document.getElementById('subtitle');
  const contentEl = document.getElementById('content');

  if (!window.translations) {
    console.error('translations.js não carregado (verifique o caminho e o nome do arquivo).');
    return;
  }

  function updateLanguage(lang) {
    const t = translations[lang] || translations.pt;
    if (titleEl) titleEl.textContent = t.title;
    if (subtitleEl) subtitleEl.textContent = t.subtitle;
    if (contentEl) contentEl.textContent = t.content;
  }

  function applyTheme(theme) {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }

  // Carrega preferências salvas (opcional)
  const savedLang = localStorage.getItem('lang') || 'pt';
  const savedTheme = localStorage.getItem('theme') || 'light';

  if (languageSelect) languageSelect.value = savedLang;
  if (themeSelect) themeSelect.value = savedTheme;

  updateLanguage(savedLang);
  applyTheme(savedTheme);

  if (languageSelect) {
    languageSelect.addEventListener('change', () => {
      const lang = languageSelect.value;
      updateLanguage(lang);
      localStorage.setItem('lang', lang);
    });
  }

  if (themeSelect) {
    themeSelect.addEventListener('change', () => {
      const theme = themeSelect.value;
      applyTheme(theme);
      localStorage.setItem('theme', theme);
    });
  }
});
