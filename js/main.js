document.addEventListener('DOMContentLoaded', () => {
  const languageSelect = document.getElementById('language-select');
  const themeSelect = document.getElementById('theme-select');

  if (!window.translations) {
    console.error('translations.js não carregado. Verifique js/translations.js');
    return;
  }

  function changeLanguage(lang) {
    const t = translations[lang] || translations['pt'];

    // nav / header
    if (document.getElementById('title') && t.title) document.getElementById('title').textContent = t.title;
    if (document.getElementById('subtitle') && t.subtitle) document.getElementById('subtitle').textContent = t.subtitle;
    if (document.getElementById('content') && t.content) document.getElementById('content').textContent = t.content;

    // sections: about
    if (document.getElementById('about-title') && t.about?.title) document.getElementById('about-title').textContent = t.about.title;
    if (document.getElementById('about-content') && t.about?.content) document.getElementById('about-content').textContent = t.about.content;

    // experience
    if (document.getElementById('experience-title') && t.experience?.title) document.getElementById('experience-title').textContent = t.experience.title;
    if (document.getElementById('experience-list') && t.experience?.items)
      document.getElementById('experience-list').innerHTML = t.experience.items.map(i => `<li>${i}</li>`).join('');

    // education
    if (document.getElementById('education-title') && t.education?.title) document.getElementById('education-title').textContent = t.education.title;
    if (document.getElementById('education-list') && t.education?.items)
      document.getElementById('education-list').innerHTML = t.education.items.map(i => `<li>${i}</li>`).join('');

    // skills
    if (document.getElementById('skills-title') && t.skills?.title) document.getElementById('skills-title').textContent = t.skills.title;
    if (document.getElementById('skills-list') && t.skills?.items)
      document.getElementById('skills-list').innerHTML = t.skills.items.map(i => `<li>${i}</li>`).join('');

    // projects
    if (document.getElementById('projects-title') && t.projects?.title) document.getElementById('projects-title').textContent = t.projects.title;
    if (document.getElementById('projects-list') && t.projects?.items)
      document.getElementById('projects-list').innerHTML = t.projects.items.map(i => `<li>${i}</li>`).join('');
  }

  function applyTheme(theme) {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }

  // Carregar preferências
  const savedLang = localStorage.getItem('lang') || 'pt';
  const savedTheme = localStorage.getItem('theme') || 'light';

  if (languageSelect) languageSelect.value = savedLang;
  if (themeSelect) themeSelect.value = savedTheme;

  changeLanguage(savedLang);
  applyTheme(savedTheme);

  // Listeners
  if (languageSelect) {
    languageSelect.addEventListener('change', (e) => {
      const lang = e.target.value;
      localStorage.setItem('lang', lang);
      changeLanguage(lang);
    });
  }

  if (themeSelect) {
    themeSelect.addEventListener('change', (e) => {
      const theme = e.target.value;
      localStorage.setItem('theme', theme);
      applyTheme(theme);
    });
  }
});
