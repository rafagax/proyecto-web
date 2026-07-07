// Content for the Jesús Vásquez author page (/jvportafolio + /es/jvportafolio).
// One object per locale, picked by the component via useLocalizedContent's locale.
// Facts, figures, dates and links are the SAME in both languages (only translated).

import seoProofImg from '../assets/mejorasseoindicadores.webp';

// Verifiable external links (same for both locales). Used in the hero buttons, the
// "Verifiable links" section and the JSON-LD `sameAs`.
export const AUTHOR_LINKS = {
  linkedin: 'https://www.linkedin.com/in/jr-vasquez/',
  github: 'https://github.com/rafagax',
  portfolio: 'https://portafolio-kpi-jv.vercel.app/',
};

export const AUTHOR_PHOTO = '/Rafagaxjv/jesus.webp';

const stackItems = {
  en: [
    { name: 'HTML5', category: 'Markup', icon: 'html5' },
    { name: 'CSS3', category: 'Styling', icon: 'css3' },
    { name: 'JavaScript', category: 'Language', icon: 'javascript' },
    { name: 'React', category: 'Framework', icon: 'react' },
    { name: 'Node.js', category: 'Runtime', icon: 'nodejs' },
    { name: 'Bootstrap', category: 'CSS Framework', icon: 'bootstrap' },
    { name: 'WordPress', category: 'CMS Specialist', icon: 'wordpress', highlight: true },
    { name: 'Power BI', category: 'Analytics', icon: 'powerbi' },
    { name: 'Git', category: 'Version Control', icon: 'git' },
    { name: 'GitHub', category: 'Collaboration', icon: 'github' },
    { name: 'VS Code', category: 'IDE', icon: 'vscode' },
    { name: 'API Integration', category: 'Backend', icon: 'api' },
    { name: 'Technical SEO', category: 'Optimization', icon: 'seo' },
    { name: 'Core Web Vitals', category: 'Performance', icon: 'cwv' },
    { name: 'AI Workflows', category: 'Automation', icon: 'ai' },
  ],
  es: [
    { name: 'HTML5', category: 'Marcado', icon: 'html5' },
    { name: 'CSS3', category: 'Estilos', icon: 'css3' },
    { name: 'JavaScript', category: 'Lenguaje', icon: 'javascript' },
    { name: 'React', category: 'Framework', icon: 'react' },
    { name: 'Node.js', category: 'Runtime', icon: 'nodejs' },
    { name: 'Bootstrap', category: 'Framework CSS', icon: 'bootstrap' },
    { name: 'WordPress', category: 'Especialista CMS', icon: 'wordpress', highlight: true },
    { name: 'Power BI', category: 'Analítica', icon: 'powerbi' },
    { name: 'Git', category: 'Control de versiones', icon: 'git' },
    { name: 'GitHub', category: 'Colaboración', icon: 'github' },
    { name: 'VS Code', category: 'IDE', icon: 'vscode' },
    { name: 'Integración de APIs', category: 'Backend', icon: 'api' },
    { name: 'SEO Técnico', category: 'Optimización', icon: 'seo' },
    { name: 'Core Web Vitals', category: 'Rendimiento', icon: 'cwv' },
    { name: 'Flujos con IA', category: 'Automatización', icon: 'ai' },
  ],
};

const content = {
  en: {
    meta: {
      title: 'Jesús Vásquez — Front-End Developer & Technical SEO Specialist | Webraf',
      description:
        'Electronics Engineer and Front-End Developer with 5+ years building fast, SEO-optimized websites and KPI dashboards. The expert behind Webraf.',
    },
    photoAlt: 'Jesús Vásquez, Electronics Engineer and Front-End Developer, founder of Webraf',
    hero: {
      name: 'Jesús Vásquez',
      tagline: 'Electronics Engineer · Front-End Developer · Technical SEO Specialist',
      badges: {
        location: 'Maracay, Venezuela · International remote work',
        experience: '5+ years of experience',
        languages: 'Native Spanish · English C1',
      },
      trustBadges: ['5+ years', '100+ client projects', 'WordPress Specialist'],
      linkedin: 'View LinkedIn',
      github: 'View GitHub',
      contact: 'Contact',
    },
    about: {
      heading: 'About Me',
      paragraphs: [
        "I'm an Electronics Engineer, Front-End Web Developer and Technical SEO Specialist with 5+ years of experience building fast, accessible and search-optimized websites. I founded Webraf to combine development, technical SEO, analytics and AI-assisted workflows into practical digital solutions for businesses.",
        'In my agency work, I supported more than 100 client projects, handling technical and on-page SEO audits, Core Web Vitals improvements, front-end fixes, CMS optimizations and security recovery for compromised websites.',
        'I combine development, data and AI to build solutions you can measure — not just launch and forget.',
      ],
    },
    experience: {
      heading: 'Professional Experience',
      roles: [
        {
          company: 'Web Development Agency',
          title: 'Web Development Coordinator',
          period: '2025–Present · Maracay, Venezuela',
          bullets: [
            'On-page and technical SEO audits and optimization to grow organic visibility.',
            'Load time, UX and Core Web Vitals optimization.',
            'Front-end architecture oversight (HTML, CSS, JavaScript) and WordPress CMS integrations.',
            'Web security: cleaning malware-compromised sites and recovering after incidents, reducing downtime.',
          ],
        },
        {
          company: 'Independent',
          title: 'Front-End Web Developer',
          period: '2021–2026',
          bullets: [
            'Custom site development with HTML5, CSS3, JavaScript, Bootstrap, Node.js and WordPress.',
            'Auditing and fixing crawl issues, broken tags and Core Web Vitals, keeping scores above 90 in Google PageSpeed Insights.',
            'Responsive layouts and debugging of layout and JavaScript errors.',
          ],
        },
        {
          company: 'Sisprot Global Fiber C.A.',
          title: 'Management Indicators Lead & Sales Lead',
          period: '2023–2025',
          bullets: [
            'JavaScript and React applications to automate the collection, processing and visualization of management data.',
            'Dynamic Power BI dashboards and reports for board-level decision-making.',
            'Coordinated a 15-person team with data- and AI-driven strategies, achieving a 300% increase in sales productivity and a 25% reduction in planning and inventory errors.',
          ],
        },
      ],
    },
    results: {
      heading: 'Measurable Results',
      cards: [
        {
          value: 'Top 1 on Google',
          label: 'Multiple client sites reached #1 positions on Google for target searches through technical SEO, on-page optimization and performance improvements.',
          icon: 'trending',
        },
        {
          value: '90+ PageSpeed',
          label: 'Score maintained on audited and optimized sites (PageSpeed Insights).',
          icon: 'gauge',
        },
        {
          value: '+300% productivity',
          label: 'On the sales team I coordinated using data and AI tools.',
          icon: 'chart',
        },
        {
          value: '−25% errors',
          label: 'In planning and inventory after implementing digital tools.',
          icon: 'shield',
        },
      ],
    },
    proofOfWork: {
      heading: 'Proof of Work',
      subtitle: 'Real SEO and performance improvements from client projects — measurable, not theoretical.',
      items: [
        {
          src: seoProofImg,
          alt: 'SEO and performance metrics dashboard showing improved search rankings and Core Web Vitals scores',
          caption: 'SEO rankings and performance indicators after technical optimization',
        },
      ],
    },
    education: {
      heading: 'Education & Credentials',
      items: [
        'Electronics Engineering — Politécnico Santiago Mariño, Venezuela (2019).',
        'Diploma in Management Indicators — DiplomadosOnline.com / Universidad Central de Venezuela (2024).',
        'The Complete JavaScript Course: From Zero to Expert — Udemy, 120 hours (2022).',
        'Web Design from Zero to Advanced — Udemy, 90 hours (2021).',
        'Bootstrap 4 From Scratch With 5 Projects — Udemy (2021).',
        'Practical Front-End, HTML/CSS and Git/GitHub courses — Platzi (2023).',
        'English C1 (fluent) · Native Spanish.',
      ],
    },
    stack: {
      heading: 'Tech Stack',
      subtitle: 'Technologies and disciplines I use daily across development, SEO and analytics.',
      items: stackItems.en,
      carouselLabel: 'Technologies in motion',
    },
    aiSkills: {
      heading: 'AI-Assisted Development',
      description:
        'AI-assisted development workflows with ChatGPT, Claude, Gemini, Cursor, Codex CLI, Gemini CLI and Antigravity, including terminal-based coding, debugging, documentation and automation support.',
      chips: ['Cursor', 'Codex CLI', 'Gemini CLI', 'Antigravity'],
    },
    links: {
      heading: 'Verifiable Links',
      subtitle: 'The evidence behind the experience above.',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      portfolio: 'Portfolio (Vercel)',
    },
    cta: {
      heading: 'Want me to build or improve your website?',
      text: "Explore Webraf's web development services or contact me directly to discuss your project.",
      services: 'See Web Development Services',
      contact: 'Contact me',
    },
  },

  es: {
    meta: {
      title: 'Jesús Vásquez — Desarrollador Front-End y Especialista en SEO Técnico | Webraf',
      description:
        'Ingeniero Electrónico y Desarrollador Front-End con más de 5 años creando sitios web rápidos y optimizados para SEO, y dashboards de KPI. El experto detrás de Webraf.',
    },
    photoAlt: 'Jesús Vásquez, Ingeniero Electrónico y Desarrollador Front-End, fundador de Webraf',
    hero: {
      name: 'Jesús Vásquez',
      tagline: 'Ingeniero Electrónico · Desarrollador Front-End · Especialista en SEO Técnico',
      badges: {
        location: 'Maracay, Venezuela · Trabajo remoto internacional',
        experience: 'Más de 5 años de experiencia',
        languages: 'Español nativo · Inglés C1',
      },
      trustBadges: ['5+ años', '100+ proyectos', 'Especialista WordPress'],
      linkedin: 'Ver LinkedIn',
      github: 'Ver GitHub',
      contact: 'Contactar',
    },
    about: {
      heading: 'Sobre mí',
      paragraphs: [
        'Soy Ingeniero Electrónico, Desarrollador Web Front-End y Especialista en SEO Técnico con más de 5 años de experiencia construyendo sitios web rápidos, accesibles y optimizados para buscadores. Fundé Webraf para combinar desarrollo, SEO técnico, analítica y flujos asistidos por IA en soluciones digitales prácticas para negocios.',
        'En mi trabajo en agencia, apoyé más de 100 proyectos de clientes, realizando auditorías SEO técnicas y on-page, mejoras de Core Web Vitals, correcciones front-end, optimizaciones en CMS y recuperación de sitios comprometidos por malware.',
        'Combino desarrollo, datos e IA para crear soluciones que puedes medir — no solo lanzar y olvidar.',
      ],
    },
    experience: {
      heading: 'Experiencia profesional',
      roles: [
        {
          company: 'Agencia de desarrollo web',
          title: 'Coordinador de Desarrollo Web',
          period: '2025–Actualidad · Maracay, Venezuela',
          bullets: [
            'Auditorías y optimización SEO on-page y técnica para incrementar la visibilidad orgánica.',
            'Optimización de tiempos de carga, UX y Core Web Vitals.',
            'Supervisión de arquitectura front-end (HTML, CSS, JavaScript) e integraciones en WordPress.',
            'Seguridad web: limpieza de sitios comprometidos por malware y recuperación tras incidentes, reduciendo el tiempo de inactividad.',
          ],
        },
        {
          company: 'Independiente',
          title: 'Desarrollador Web Front-End',
          period: '2021–2026',
          bullets: [
            'Desarrollo de sitios a medida con HTML5, CSS3, JavaScript, Bootstrap, Node.js y WordPress.',
            'Auditoría y corrección de deficiencias de rastreo, etiquetas defectuosas y Core Web Vitals, manteniendo puntuaciones superiores a 90 en Google PageSpeed Insights.',
            'Maquetación responsive y depuración de errores de maquetación y JavaScript.',
          ],
        },
        {
          company: 'Sisprot Global Fiber C.A.',
          title: 'Encargado de Indicadores de Gestión y Líder de Ventas',
          period: '2023–2025',
          bullets: [
            'Desarrollo de aplicaciones en JavaScript y React para automatizar recopilación, procesamiento y visualización de datos gerenciales.',
            'Dashboards y reportes dinámicos en Power BI para la toma de decisiones de la junta directiva.',
            'Coordinación de un equipo de 15 personas con estrategias basadas en datos e IA, logrando un aumento del 300% en la productividad de ventas y una reducción del 25% en errores de planificación e inventario.',
          ],
        },
      ],
    },
    results: {
      heading: 'Resultados medibles',
      cards: [
        {
          value: 'Top 1 en Google',
          label: 'Varios sitios de clientes alcanzaron la posición #1 en Google para búsquedas objetivo mediante SEO técnico, optimización on-page y mejoras de rendimiento.',
          icon: 'trending',
        },
        {
          value: '+90 en PageSpeed',
          label: 'Puntuación mantenida en los sitios auditados y optimizados (PageSpeed Insights).',
          icon: 'gauge',
        },
        {
          value: '+300% productividad',
          label: 'En el equipo de ventas que coordiné con herramientas de datos e IA.',
          icon: 'chart',
        },
        {
          value: '−25% de errores',
          label: 'En planificación e inventario tras implementar herramientas digitales.',
          icon: 'shield',
        },
      ],
    },
    proofOfWork: {
      heading: 'Trabajo comprobable',
      subtitle: 'Mejoras reales de SEO y rendimiento en proyectos de clientes — medibles, no teóricas.',
      items: [
        {
          src: seoProofImg,
          alt: 'Panel de métricas SEO y rendimiento mostrando mejoras en posiciones de búsqueda y Core Web Vitals',
          caption: 'Indicadores de posicionamiento y rendimiento tras optimización técnica',
        },
      ],
    },
    education: {
      heading: 'Formación y credenciales',
      items: [
        'Ingeniería Electrónica — Politécnico Santiago Mariño, Venezuela (2019).',
        'Diplomado en Indicadores de Gestión — DiplomadosOnline.com / Universidad Central de Venezuela (2024).',
        'The Complete JavaScript Course: From Zero to Expert — Udemy, 120 horas (2022).',
        'Diseño Web Desde Cero a Avanzado — Udemy, 90 horas (2021).',
        'Bootstrap 4 From Scratch With 5 Projects — Udemy (2021).',
        'Cursos Prácticos de Front-End, HTML/CSS y Git/GitHub — Platzi (2023).',
        'Inglés C1 (fluido) · Español nativo.',
      ],
    },
    stack: {
      heading: 'Stack tecnológico',
      subtitle: 'Tecnologías y disciplinas que uso a diario en desarrollo, SEO y analítica.',
      items: stackItems.es,
      carouselLabel: 'Tecnologías en movimiento',
    },
    aiSkills: {
      heading: 'Desarrollo asistido por IA',
      description:
        'Flujos de desarrollo asistidos por IA con ChatGPT, Claude, Gemini, Cursor, Codex CLI, Gemini CLI y Antigravity, incluyendo codificación en terminal, depuración, documentación y soporte de automatización.',
      chips: ['Cursor', 'Codex CLI', 'Gemini CLI', 'Antigravity'],
    },
    links: {
      heading: 'Enlaces verificables',
      subtitle: 'La evidencia detrás de la experiencia anterior.',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      portfolio: 'Portafolio (Vercel)',
    },
    cta: {
      heading: '¿Quieres que construya o mejore tu sitio web?',
      text: 'Explora los servicios de desarrollo web de Webraf o escríbeme directamente para hablar de tu proyecto.',
      services: 'Ver servicios de desarrollo web',
      contact: 'Escríbeme',
    },
  },
};

export default content;
