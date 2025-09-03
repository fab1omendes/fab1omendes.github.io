document.addEventListener('DOMContentLoaded', () => {
  const languageSelect = document.getElementById('language');
  const themeSelect = document.getElementById('theme');

  // Elementos principais
  const elements = {
    title: document.getElementById('title'),
    subtitle: document.getElementById('subtitle'),
    content: document.getElementById('content'),
    whoiam: document.getElementById('whoiam'),
    about: document.getElementById('about'),
    project: document.getElementById('project'),
  };

  if (!window.translations) {
    console.error('❌ translations.js não carregado (verifique o caminho e o nome do arquivo).');
    return;
  }

  function updateLanguage(lang) {
    const t = translations[lang] || translations['pt-br'];
    Object.keys(elements).forEach(key => {
      if (elements[key] && t[key]) {
        elements[key].textContent = t[key];
      }
    });
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // Carrega preferências salvas
  const savedLang = localStorage.getItem('lang') || 'pt-br';
  const savedTheme = localStorage.getItem('theme') || 'light';

  if (languageSelect) languageSelect.value = savedLang;
  if (themeSelect) themeSelect.value = savedTheme;

  updateLanguage(savedLang);
  applyTheme(savedTheme);

  // Eventos
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
