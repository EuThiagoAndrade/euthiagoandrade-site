// ========== THEME TOGGLE ==========
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Verificar preferência salva ou do sistema
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.classList.toggle('dark-mode', savedTheme === 'dark');
} else if (prefersDark) {
    htmlElement.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark-mode');
    const isDarkMode = htmlElement.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    const isDarkMode = htmlElement.classList.contains('dark-mode');
    icon.classList.toggle('fa-moon', !isDarkMode);
    icon.classList.toggle('fa-sun', isDarkMode);
}

updateThemeIcon();

// ========== MOBILE MENU ==========
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        updateActiveLink(link);
    });
});

// ========== ACTIVE LINK MANAGEMENT ==========
function updateActiveLink(element) {
    navLinks.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}

window.addEventListener('scroll', () => {
    let currentSection = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// ========== BACK TO TOP BUTTON ==========
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== PROJECTS DATA ==========
const projectsData = [
    {
        title: "Sistema de Análise de Dados",
        description: "Plataforma web para processamento e visualização de dados com integração a APIs externas.",
        tags: ["Python", "SQL", "FastAPI", "React"],
        github: "https://github.com/EuThiagoAndrade/seu-repo",
        demo: "#",
        icon: "📊"
    },
    {
        title: "Agente IA com LangChain",
        description: "Agente inteligente que utiliza LLMs para automação de tarefas complexas e análise de documentos.",
        tags: ["IA", "LangChain", "Python", "RAG"],
        github: "https://github.com/EuThiagoAndrade/seu-repo",
        demo: "#",
        icon: "🤖"
    },
    {
        title: "CLI Automation Tool",
        description: "Ferramenta de linha de comando para automação de processos recorrentes com suporte a scripts customizados.",
        tags: ["Python", "CLI", "Automação", "Git"],
        github: "https://github.com/EuThiagoAndrade/seu-repo",
        demo: "#",
        icon: "⚙️"
    },
    {
        title: "Dashboard de Investimentos",
        description: "Dashboard interativo para rastreamento de investimentos em Bitcoin, B3 e Tesouro Direto.",
        tags: ["Python", "JavaScript", "APIs", "Dados"],
        github: "https://github.com/EuThiagoAndrade/seu-repo",
        demo: "#",
        icon: "💹"
    },
    {
        title: "Web Scraper Avançado",
        description: "Sistema robusto de web scraping com suporte a JavaScript renderizado e proxy rotation.",
        tags: ["Python", "Scraping", "Selenium", "BeautifulSoup"],
        github: "https://github.com/EuThiagoAndrade/seu-repo",
        demo: "#",
        icon: "🕷️"
    },
    {
        title: "Documentação Técnica",
        description: "Gerador de documentação automatizado para projetos Python com análise estática de código.",
        tags: ["Python", "Documentação", "AST", "Markdown"],
        github: "https://github.com/EuThiagoAndrade/seu-repo",
        demo: "#",
        icon: "📚"
    }
];

// ========== RENDER PROJECTS ==========
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = projectsData.map((project, index) => `
        <div class="project-card slide-in stagger-${index % 3 + 1}">
            <div class="project-image">${project.icon}</div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> Código
                    </a>
                    ${project.demo !== '#' ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer"><i class="fas fa-link"></i> Demo</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// ========== ARTICLES DATA ==========
const articlesData = [
    {
        title: "Introdução a Agentes IA com LangChain",
        date: "Janeiro 2026",
        tags: ["IA", "LangChain", "Python"],
        description: "Descubra como construir agentes inteligentes que podem realizar tarefas complexas utilizando LLMs e integração com ferramentas externas.",
        link: "#"
    },
    {
        title: "Otimizando Pipelines de Dados com Python",
        date: "Dezembro 2025",
        tags: ["Python", "Dados", "Performance"],
        description: "Técnicas avançadas para melhorar performance em processamento de grandes volumes de dados usando Python e bibliotecas especializadas.",
        link: "#"
    },
    {
        title: "Git Workflows para Equipes",
        date: "Novembro 2025",
        tags: ["Git", "DevOps", "Colaboração"],
        description: "Melhores práticas de versionamento e colaboração em projetos de software utilizando Git e estratégias de branching.",
        link: "#"
    },
    {
        title: "RAG: Retrieval-Augmented Generation Explicado",
        date: "Outubro 2025",
        tags: ["IA", "RAG", "LLMs"],
        description: "Entenda como RAG revoluciona o uso de LLMs, permitindo que modelos acessem conhecimento externo de forma eficiente.",
        link: "#"
    }
];

// ========== RENDER ARTICLES ==========
function renderArticles() {
    const articlesList = document.getElementById('articles-list');
    articlesList.innerHTML = articlesData.map((article, index) => `
        <article class="article-item slide-in stagger-${index % 3 + 1}">
            <div class="article-header">
                <h3>${article.title}</h3>
                <span class="article-date">${article.date}</span>
            </div>
            <div class="article-tags">
                ${article.tags.map(tag => `<span class="article-tag">#${tag}</span>`).join('')}
            </div>
            <p class="article-description">${article.description}</p>
            <a href="${article.link}" class="article-link">Ler artigo completo</a>
        </article>
    `).join('');
}

// ========== CONTACT FORM HANDLING ==========
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    console.log('Formulário enviado:', formData);
    alert('Obrigado pela mensagem! Entraremos em contato em breve.');
    contactForm.reset();
});

// ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .slide-in').forEach(el => {
        observer.observe(el);
    });
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderArticles();
    observeElements();
});
