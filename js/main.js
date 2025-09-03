const languageSelect = document.getElementById('language');
const themeSelect = document.getElementById('theme');

const titleEl = document.getElementById('title');
const subtitleEl = document.getElementById('subtitle');
const contentEl = document.getElementById('content');

// Função para atualizar idioma
function updateLanguage(lang) {
  titleEl.textContent = translations[lang].title;
  subtitleEl.textContent = translations[lang].subtitle;
  contentEl.textContent = translations[lang].content;
}

// Inicializa idioma padrão
updateLanguage(languageSelect.value);

// Evento de mudança de idioma
languageSelect.addEventListener('change', () => {
  updateLanguage(languageSelect.value);
});

// Tema
themeSelect.addEventListener('change', () => {
  if(themeSelect.value === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
