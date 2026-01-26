# 🎨 Portfólio Pessoal - Thiago Andrade

Portfólio HTML estático moderno e responsivo, otimizado para GitHub Pages.

## ✨ Características

- ✅ **Totalmente Responsivo** - Mobile-first com suporte para tablets e desktops
- ✅ **Dark Mode** - Toggle de tema com preferência salva em localStorage
- ✅ **Acessível** - Semântica HTML5 correta e ARIA labels
- ✅ **Rápido** - Sem dependências pesadas, CSS puro e Vanilla JS
- ✅ **Moderno** - Design clean com animações suaves
- ✅ **SEO Otimizado** - Meta tags completas para compartilhamento social
- ✅ **Menu Responsivo** - Hamburger menu automático em mobile
- ✅ **Animações** - Fade-in, slide-in com intersection observer

## 📁 Estrutura de Arquivos

```
euthiagoandrade.github.io/
├── index.html           # Estrutura HTML semântica
├── style.css            # Estilos (20KB otimizado)
├── script.js            # Funcionalidades JavaScript
├── CNAME                # Configuração de domínio customizado
├── README.md            # Este arquivo
└── .gitignore           # Arquivos a ignorar no Git
```

## 🚀 Como Usar

### 1. **Clone ou Acesse seu Repositório**
```bash
git clone https://github.com/EuThiagoAndrade/euthiagoandrade.github.io.git
cd euthiagoandrade.github.io
```

### 2. **Personalize os Dados**

Abra `script.js` e edite os arrays de dados:

#### Projetos
```javascript
const projectsData = [
    {
        title: "Seu Projeto 1",
        description: "Descrição do projeto",
        tags: ["Python", "JavaScript"],
        github: "https://github.com/seu-usuario/seu-repo",
        demo: "https://seu-demo.com",
        icon: "🚀"
    },
    // Adicione mais projetos aqui
];
```

#### Artigos
```javascript
const articlesData = [
    {
        title: "Seu Artigo 1",
        date: "Janeiro 2026",
        tags: ["Python", "IA"],
        description: "Descrição do artigo",
        link: "https://seu-blog.com/artigo"
    },
    // Adicione mais artigos aqui
];
```

#### Links Sociais
Em `index.html`, seção de contato:
```html
<a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub">
    <i class="fab fa-github"></i>
</a>
```

#### Informações Pessoais
Em `index.html`, hero section:
```html
<h1>Olá! Sou Seu Nome</h1>
<p class="subtitle">Seu Título | Sua Especialidade</p>
```

### 3. **Substitua as Imagens**

- **Foto de Perfil**: Hero section (atualmente SVG placeholder)
- **Foto Profissional**: About section (atualmente SVG placeholder)

Substituir SVGs por imagens reais:
```html
<!-- Trocar de: -->
<img src="data:image/svg+xml,..." alt="Foto">

<!-- Para: -->
<img src="images/sua-foto.jpg" alt="Seu Nome">
```

### 4. **Faça o Deploy**

```bash
git add .
git commit -m "feat: Personalizar portfólio com meus dados"
git push origin main
```

Acesse em: `https://euthiagoandrade.github.io`

## 🎯 Customizações Principais

### Alterar Cores
Em `style.css`, seção `:root`:
```css
:root {
    --primary: #2563eb;        /* Cor principal (azul) */
    --secondary: #7c3aed;      /* Cor secundária (roxo) */
    --accent: #06b6d4;         /* Cor de destaque */
    /* ... mais cores */
}
```

### Alterar Fontes
Em `index.html`, `<link>` do Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Em `style.css`:
```css
body {
    font-family: 'Inter', sans-serif;  /* Trocar fonte aqui */
}
```

### Adicionar/Remover Seções

1. **HTML**: Adicione nova `<section>` em `index.html`
2. **CSS**: Crie estilos em `style.css`
3. **JS**: Adicione funcionalidade em `script.js` se necessário
4. **Nav**: Adicione link no menu de navegação

## 📱 Breakpoints Responsivos

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Tela Grande**: > 1024px

## 🔧 Funcionalidades Incluídas

### Dark Mode
- Toggle no header
- Preferência salva em localStorage
- Ativa automaticamente se preferência do sistema

### Menu Responsivo
- Hamburger menu automático em mobile
- Animação suave de abertura/fechamento
- Links fecham menu ao clicar

### Navegação Suave
- Scroll behavior: smooth
- Link ativo atualiza ao scroll
- Botão "Voltar ao topo" aparece após scroll > 300px

### Formulário de Contato
- Validação básica
- Feedback ao enviar
- Log no console (Customizar com backend conforme necessário)

### Animações
- Fade-in: Elementos aparecem gradualmente
- Slide-in: Elementos deslizam de baixo
- Float: Imagem flutua no hero
- Stagger: Delay progressivo entre elementos

## 🌐 SEO & Meta Tags

Já incluídas em `index.html`:
- Description
- Keywords
- Open Graph (para compartilhamento social)
- Theme color
- Viewport (responsive)

## 📊 Performance

- **Sem frameworks**: Vanilla CSS e JS
- **Sem dependências externas**: Apenas Font Awesome (CDN)
- **Minificação**: CSS 20KB, JS 9KB
- **Lazy loading**: Não necessário (conteúdo leve)

## 🎨 Paleta de Cores Padrão

| Cor | Valor |
|-----|-------|
| Primária | #2563eb (Azul) |
| Secundária | #7c3aed (Roxo) |
| Accent | #06b6d4 (Ciano) |
| Sucesso | #10b981 (Verde) |
| Perigo | #ef4444 (Vermelho) |
| Aviso | #f59e0b (Amarelo) |

## 🔒 Boas Práticas

- ✅ Sem uso de localStorage inseguro
- ✅ Sem inline scripts (separação de concerns)
- ✅ HTML semântico (header, nav, section, article, footer)
- ✅ ARIA labels para acessibilidade
- ✅ Atributos alt em todas as imagens
- ✅ Links com rel="noopener noreferrer" para segurança

## 📝 Licença

Este projeto é livre para uso e modificação. Sinta-se livre para customizar conforme necessário!

## 💡 Próximas Melhorias

- [ ] Integração com GitHub API para buscar repositórios automaticamente
- [ ] Backend para envio de emails do formulário
- [ ] Blog integrado com Markdown
- [ ] Analytics com Google Analytics
- [ ] PWA support (offline)

## 📞 Contato

- **GitHub**: [EuThiagoAndrade](https://github.com/EuThiagoAndrade)
- **LinkedIn**: [Seu Perfil](https://linkedin.com)
- **Email**: seu-email@example.com

---

**Desenvolvido com ❤️ e muito código** 🚀
