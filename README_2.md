# Fabio Mendes - Portfolio Website

Um portfólio profissional moderno desenvolvido com Next.js, TypeScript e Tailwind CSS, com suporte a múltiplos idiomas e tema escuro/claro.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos
- **GitHub Pages** - Hospedagem estática

## ✨ Funcionalidades

- 🌍 **Multilíngue** - Suporte para Português, Inglês e Espanhol
- 🌙 **Tema Escuro/Claro** - Alternância entre temas com persistência
- 📱 **Responsivo** - Design adaptável para todos os dispositivos
- ⚡ **Performance** - Otimizado para velocidade e SEO
- 🎨 **Animações** - Transições suaves e micro-interações
- 🔧 **TypeScript** - Código type-safe e manutenível

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/fab1omendes/fab1omendes.github.io.git

# Entre no diretório
cd fab1omendes.github.io

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Linting
npm run lint

# Deploy para GitHub Pages
npm run deploy
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── Header.tsx         # Cabeçalho com navegação
│   ├── About.tsx          # Seção sobre
│   ├── Experience.tsx     # Experiência profissional
│   ├── Education.tsx      # Formação acadêmica
│   ├── Skills.tsx         # Habilidades técnicas
│   └── Projects.tsx       # Projetos realizados
├── hooks/                 # Hooks personalizados
│   ├── useLanguage.ts     # Gerenciamento de idioma
│   └── useTheme.ts        # Gerenciamento de tema
└── lib/                   # Utilitários
    └── translations.ts    # Sistema de traduções

public/
└── locales/               # Arquivos de tradução
    ├── pt/               # Português
    ├── en/               # Inglês
    └── es/               # Espanhol
```

## 🌍 Sistema de Internacionalização

O projeto utiliza um sistema de traduções customizado com arquivos JSON organizados por idioma:

- `public/locales/pt/common.json` - Traduções em português
- `public/locales/en/common.json` - Traduções em inglês  
- `public/locales/es/common.json` - Traduções em espanhol

### Adicionando Novas Traduções

1. Adicione a chave no arquivo JSON do idioma desejado
2. Use a função `getTranslation()` nos componentes:

```typescript
import { getTranslation } from '@/lib/translations';

const title = getTranslation(language, 'about.title');
```

## 🎨 Sistema de Temas

O projeto suporta tema claro e escuro com persistência no localStorage:

```typescript
import { useTheme } from '@/hooks/useTheme';

const { theme, toggleTheme } = useTheme();
```

## 🚀 Deploy

### GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages:

1. Faça push das alterações para a branch `main`
2. Execute `npm run build` para gerar os arquivos estáticos
3. Os arquivos serão exportados na pasta `out/`

### Configuração do GitHub Pages

1. Vá para Settings > Pages no seu repositório
2. Selecione "Deploy from a branch"
3. Escolha a branch `gh-pages` e pasta `/ (root)`

## 📝 Personalização

### Adicionando Novas Seções

1. Crie um novo componente em `src/components/`
2. Importe e adicione na página principal (`src/app/page.tsx`)
3. Adicione as traduções nos arquivos JSON

### Modificando Estilos

O projeto usa Tailwind CSS. Para customizações:

1. Modifique `src/app/globals.css` para estilos globais
2. Use classes Tailwind nos componentes
3. Configure o tema no `tailwind.config.js`

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Fabio Mendes**
- LinkedIn: [fabio-mendes](https://linkedin.com/in/fabio-mendes)
- GitHub: [@fab1omendes](https://github.com/fab1omendes)
- Email: [seu-email@exemplo.com](mailto:seu-email@exemplo.com)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!