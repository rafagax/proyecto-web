// Content for the Jesús Vásquez author page (/jvportafolio + /es/jvportafolio).
// One object per locale, picked by the component via useLocalizedContent's locale.
// Facts, figures, dates and links are the SAME in both languages (only translated).

// Verifiable external links (same for both locales). Used in the hero buttons, the
// "Verifiable links" section and the JSON-LD `sameAs`.
export const AUTHOR_LINKS = {
  linkedin: 'https://www.linkedin.com/in/jr-vasquez/',
  github: 'https://github.com/rafagax',
  portfolio: 'https://portafolio-kpi-jv.vercel.app/',
};

export const AUTHOR_PHOTO = '/Rafagaxjv/jesus.webp';

const content = {
  en: {
    meta: {
      title: 'Jesús Vásquez — Front-End Developer & Technical SEO Specialist | Webraf',
      description:
        'Front-End Developer (React) and Technical SEO Specialist with 5+ years building fast, SEO-optimized websites, KPI dashboards and AI workflows. The expert behind Webraf.',
    },
    photoAlt: 'Jesús Vásquez, Electronics Engineer and Front-End Developer, founder of Webraf',
    hero: {
      name: 'Jesús Vásquez',
      tagline: 'Electronics Engineer · Front-End Developer · Technical SEO Specialist',
      founderBadge: 'Founder & Technical Lead of Webraf',
      badges: {
        location: 'International remote work',
        experience: '5+ years of experience',
        languages: 'Native Spanish · English C1',
      },
      linkedin: 'View LinkedIn',
      github: 'View GitHub',
      contact: 'Contact',
    },
    about: {
      heading: 'About Me',
      paragraphs: [
        "I'm an Electronics Engineer, Front-End Web Developer and Technical SEO Specialist with 5+ years of experience. My main focus is front-end development with React — together with JavaScript, HTML and CSS — building fast, accessible and search-optimized websites. I founded Webraf to combine development, technical SEO, analytics and AI-assisted workflows into practical digital solutions for businesses.",
        'Across agency and freelance work I have supported more than 100 client projects: technical and on-page SEO audits, Core Web Vitals and performance improvements, front-end fixes, and CMS work with WordPress, along with regular site maintenance and security when a project needs it.',
        "Today I bring development, data and AI together to build solutions that are measurable, verifiable and made to last. If something can be tracked, optimized and improved, that's the work I enjoy most.",
      ],
    },
    experience: {
      heading: 'Professional Experience',
      roles: [
        {
          company: 'Web Development Agency',
          title: 'Web Development Coordinator',
          period: '2025–Present · Remote',
          bullets: [
            'On-page and technical SEO audits and optimization to grow organic visibility.',
            'Load time, UX and Core Web Vitals optimization.',
            'Front-end architecture oversight (HTML, CSS, JavaScript, React) and CMS / WordPress integrations.',
            'Site maintenance and security, including recovery of compromised sites when needed.',
          ],
        },
        {
          company: 'Independent',
          title: 'Front-End Web Developer',
          period: '2021–2026',
          bullets: [
            'Custom site development with React, JavaScript, HTML5, CSS3, Bootstrap, Node.js and WordPress.',
            'Auditing and fixing crawl issues, broken tags and Core Web Vitals, keeping scores above 90 in Google PageSpeed Insights.',
            'Responsive layouts and debugging of layout and JavaScript errors.',
          ],
        },
        {
          company: 'Sisprot Global Fiber C.A.',
          title: 'Management Indicators Lead & Sales Lead',
          period: '2023–2025',
          bullets: [
            'Management control of the company’s departments through Power BI dashboards and reports for board-level decision-making.',
            'Automated the collection, processing and visualization of management data with JavaScript and React applications.',
            'Increased the company’s operability and overall productivity by 300% — across departments including sales — with data- and AI-driven strategies, while reducing planning and inventory errors by 25%.',
          ],
        },
      ],
    },
    results: {
      heading: 'Measurable Results',
      cards: [
        { value: 'Top 1 on Google', label: 'Multiple client sites reached #1 positions on Google for target searches through technical SEO, on-page optimization and performance improvements.' },
        { value: '100+ projects supported', label: 'Client projects supported across agency and freelance work — audits, fixes, optimization and maintenance.' },
        { value: '90+ PageSpeed', label: 'Performance score maintained on audited and optimized sites (PageSpeed Insights).' },
        { value: '+300% productivity', label: 'Company-wide productivity gain from managing departments (sales included) with Power BI control dashboards.' },
        { value: '−25% errors', label: 'Fewer planning and inventory errors after centralizing management indicators in Power BI.' },
      ],
    },
    webProjects: {
      heading: 'Recently Developed Websites',
      subtitle: 'Real client projects built to communicate each business clearly, strengthen trust, and make the next step easy for visitors.',
      carouselLabel: 'Selected client website projects',
      pauseCarousel: 'Pause automatic website carousel',
      playCarousel: 'Play automatic website carousel',
      visitSite: 'Visit website',
      moreButton: 'View more websites',
      languageLabels: {
        en: 'English-language website',
        es: 'Spanish-language website',
      },
      items: [
        { category: 'Events website', alt: 'Stage Miami Events website designed for venue enquiries and event bookings' },
        { category: 'Medical website + local SEO', alt: 'Pediatric gastroenterology website developed for DragastroPedia Aragua' },
        { category: 'Corporate website', alt: 'Corporate legal services website developed for Soluciones Cofer' },
        { category: 'Website, SEO & management', alt: 'Restaurant website developed and managed for Briochef in Madrid' },
        { category: 'Website, SEO & management', alt: 'Online pharmacy website and catalogue developed for FarmaVital' },
        { category: 'Online shop', alt: 'Online swimwear catalogue developed for Bikinis L.B. Orgina' },
      ],
    },
    speed: {
      heading: 'Websites that load in under 1 second',
      copy: 'Speed is measured, not promised. This is a real Google PageSpeed Insights audit (desktop) of this very website — built with the same optimization process I apply to every client project.',
      points: [
        'Performance, Accessibility, Best Practices and SEO scored by Google',
        'Load time under one second on desktop',
        'Fast sites rank better on Google and convert more visitors into customers',
      ],
      alt: 'Google PageSpeed Insights desktop audit showing near-perfect scores and sub-second load time',
      caption: 'Real PageSpeed Insights audit (desktop view).',
      cta: 'I want a site this fast',
    },
    proof: {
      heading: 'KPI Dashboards & Analytics',
      subtitle: 'Real KPI dashboards I designed and built in Power BI — each one prepared and signed by me.',
      items: [
        {
          alt: 'Revenue and collections KPI dashboard built in Power BI by Jesús Vásquez',
          caption: 'Revenue & collections dashboard — daily and accumulated income, migrated vs. non-migrated clients.',
        },
        {
          alt: 'Operational command center dashboard built in Power BI by Jesús Vásquez',
          caption: 'Operational command center — installations by agency, goals and daily performance.',
        },
        {
          alt: 'Call center analytics dashboard built in Power BI by Jesús Vásquez',
          caption: 'Call center analytics — tickets by agent, channel and shift, with satisfaction and response time.',
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
      subtitle: 'The tools I use to design, build, optimize and measure.',
      items: [
        { name: 'React', cat: 'Front-end · Main', icon: 'react' },
        { name: 'JavaScript', cat: 'Front-end', icon: 'js' },
        { name: 'HTML5', cat: 'Front-end', icon: 'code' },
        { name: 'CSS3', cat: 'Front-end', icon: 'code' },
        { name: 'Node.js', cat: 'Runtime', icon: 'node' },
        { name: 'Bootstrap', cat: 'Front-end', icon: 'code' },
        { name: 'WordPress', cat: 'CMS', icon: 'wp' },
        { name: 'Shopify', cat: 'E-commerce', icon: 'shopify' },
        { name: 'Power BI', cat: 'Data & BI', icon: 'bi' },
        { name: 'Git', cat: 'Tooling', icon: 'git' },
        { name: 'GitHub', cat: 'Tooling', icon: 'github' },
        { name: 'VS Code', cat: 'Tooling', icon: 'code' },
        { name: 'Technical SEO', cat: 'SEO', icon: 'seo' },
        { name: 'Core Web Vitals', cat: 'Performance', icon: 'gauge' },
        { name: 'AI Workflows', cat: 'AI', icon: 'ai' },
      ],
    },
    ai: {
      heading: 'Advanced AI Development',
      text: 'I work hands-on with advanced AI development — terminal and command-line coding, building AI agents, and orchestrating automation workflows — applying it across design, debugging, documentation and delivery to move faster without sacrificing quality.',
      tags: [
        'AI agent creation',
        'Terminal-based coding',
        'Automation workflows',
        'Claude',
        'Gemini',
        'ChatGPT',
        'Cursor',
        'OpenAI Codex',
        'Antigravity',
        'Prompt engineering',
      ],
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
        'Desarrollador Front-End (React) y Especialista en SEO Técnico con más de 5 años creando sitios web rápidos y optimizados, dashboards de KPI y flujos con IA. El experto detrás de Webraf.',
    },
    photoAlt: 'Jesús Vásquez, Ingeniero Electrónico y Desarrollador Front-End, fundador de Webraf',
    hero: {
      name: 'Jesús Vásquez',
      tagline: 'Ingeniero Electrónico · Desarrollador Front-End · Especialista en SEO Técnico',
      founderBadge: 'Fundador y responsable técnico de Webraf',
      badges: {
        location: 'Trabajo remoto internacional',
        experience: 'Más de 5 años de experiencia',
        languages: 'Español nativo · Inglés C1',
      },
      linkedin: 'Ver LinkedIn',
      github: 'Ver GitHub',
      contact: 'Contactar',
    },
    about: {
      heading: 'Sobre mí',
      paragraphs: [
        'Soy Ingeniero Electrónico, Desarrollador Web Front-End y Especialista en SEO Técnico con más de 5 años de experiencia. Mi enfoque principal es el desarrollo front-end con React —junto con JavaScript, HTML y CSS— para construir sitios web rápidos, accesibles y optimizados para buscadores. Fundé Webraf para combinar desarrollo, SEO técnico, analítica y flujos de trabajo asistidos por IA en soluciones digitales prácticas para negocios.',
        'Entre trabajo de agencia e independiente he dado soporte a más de 100 proyectos de clientes: auditorías SEO técnicas y on-page, mejoras de Core Web Vitals y rendimiento, correcciones de front-end y trabajo con CMS y WordPress, además del mantenimiento y la seguridad del sitio cuando el proyecto lo requiere.',
        'Hoy combino desarrollo, datos e IA para crear soluciones medibles, verificables y hechas para durar. Si algo se puede medir, optimizar y mejorar, ese es el trabajo que más disfruto.',
      ],
    },
    experience: {
      heading: 'Experiencia profesional',
      roles: [
        {
          company: 'Agencia de desarrollo web',
          title: 'Coordinador de Desarrollo Web',
          period: '2025–Actualidad · Remoto',
          bullets: [
            'Auditorías y optimización SEO on-page y técnica para incrementar la visibilidad orgánica.',
            'Optimización de tiempos de carga, UX y Core Web Vitals.',
            'Supervisión de arquitectura front-end (HTML, CSS, JavaScript, React) e integraciones en CMS / WordPress.',
            'Mantenimiento y seguridad de sitios, incluyendo la recuperación de sitios comprometidos cuando es necesario.',
          ],
        },
        {
          company: 'Independiente',
          title: 'Desarrollador Web Front-End',
          period: '2021–2026',
          bullets: [
            'Desarrollo de sitios a medida con React, JavaScript, HTML5, CSS3, Bootstrap, Node.js y WordPress.',
            'Auditoría y corrección de deficiencias de rastreo, etiquetas defectuosas y Core Web Vitals, manteniendo puntuaciones superiores a 90 en Google PageSpeed Insights.',
            'Maquetación responsive y depuración de errores de maquetación y JavaScript.',
          ],
        },
        {
          company: 'Sisprot Global Fiber C.A.',
          title: 'Encargado de Indicadores de Gestión y Líder de Ventas',
          period: '2023–2025',
          bullets: [
            'Control de gestión de los departamentos de la empresa mediante dashboards y reportes en Power BI para la toma de decisiones de la junta directiva.',
            'Automatización de la recopilación, procesamiento y visualización de datos gerenciales con aplicaciones en JavaScript y React.',
            'Aumento de la operatividad y la productividad general de la empresa en un 300% —en varios departamentos, incluido el de ventas— con estrategias basadas en datos e IA, reduciendo los errores de planificación e inventario en un 25%.',
          ],
        },
      ],
    },
    results: {
      heading: 'Resultados medibles',
      cards: [
        { value: 'Top 1 en Google', label: 'Varios sitios de clientes alcanzaron la posición #1 en Google en sus búsquedas objetivo mediante SEO técnico, optimización on-page y mejoras de rendimiento.' },
        { value: '+100 proyectos apoyados', label: 'Proyectos de clientes atendidos entre trabajo de agencia e independiente: auditorías, correcciones, optimización y mantenimiento.' },
        { value: '+90 en PageSpeed', label: 'Puntuación de rendimiento mantenida en los sitios auditados y optimizados (PageSpeed Insights).' },
        { value: '+300% productividad', label: 'Aumento de la productividad de la empresa gracias al control de los departamentos (incluido ventas) con dashboards en Power BI.' },
        { value: '−25% de errores', label: 'Menos errores de planificación e inventario tras centralizar los indicadores de gestión en Power BI.' },
      ],
    },
    webProjects: {
      heading: 'Sitios web desarrollados recientemente',
      subtitle: 'Proyectos reales creados para comunicar cada negocio con claridad, generar confianza y facilitar el siguiente paso a sus visitantes.',
      carouselLabel: 'Proyectos web seleccionados de clientes',
      pauseCarousel: 'Pausar el carrusel automático de sitios web',
      playCarousel: 'Reproducir el carrusel automático de sitios web',
      visitSite: 'Visitar sitio web',
      moreButton: 'Ver más sitios web',
      languageLabels: {
        en: 'Sitio web en inglés',
        es: 'Sitio web en español',
      },
      items: [
        { category: 'Web para eventos', alt: 'Sitio web de Stage Miami Events diseñado para consultas y reservas de eventos' },
        { category: 'Web médica + SEO local', alt: 'Sitio web de gastroenterología pediátrica desarrollado para DragastroPedia Aragua' },
        { category: 'Web corporativa', alt: 'Sitio web corporativo de servicios legales desarrollado para Soluciones Cofer' },
        { category: 'Web, SEO y gestión del sitio', alt: 'Sitio web de restaurante desarrollado y gestionado para Briochef en Madrid' },
        { category: 'Web, SEO y gestión del sitio', alt: 'Sitio web y catálogo de farmacia online desarrollado para FarmaVital' },
        { category: 'Tienda online', alt: 'Catálogo online de trajes de baño desarrollado para Bikinis L.B. Orgina' },
      ],
    },
    speed: {
      heading: 'Páginas web que cargan en menos de 1 segundo',
      copy: 'La velocidad se mide, no se promete. Esta es una auditoría real de Google PageSpeed Insights (escritorio) de este mismo sitio web — construido con el mismo proceso de optimización que aplico a cada proyecto de cliente.',
      points: [
        'Rendimiento, Accesibilidad, Buenas prácticas y SEO medidos por Google',
        'Tiempo de carga por debajo de 1 segundo en escritorio',
        'Una web rápida posiciona mejor en Google y convierte más visitas en clientes',
      ],
      alt: 'Auditoría de Google PageSpeed Insights en escritorio con puntuaciones casi perfectas y carga inferior a un segundo',
      caption: 'Auditoría real de PageSpeed Insights (vista de escritorio).',
      cta: 'Quiero una web así de rápida',
    },
    proof: {
      heading: 'Dashboards KPI y analítica',
      subtitle: 'Dashboards de KPI reales que diseñé y construí en Power BI — cada uno preparado y firmado por mí.',
      items: [
        {
          alt: 'Dashboard de KPI de ingresos y cobranzas construido en Power BI por Jesús Vásquez',
          caption: 'Dashboard de ingresos y cobranzas — ingresos diarios y acumulados, clientes migrados vs. no migrados.',
        },
        {
          alt: 'Dashboard de centro de mando operativo construido en Power BI por Jesús Vásquez',
          caption: 'Centro de mando operativo — instalaciones por agencia, metas y desempeño diario.',
        },
        {
          alt: 'Dashboard de analítica de call center construido en Power BI por Jesús Vásquez',
          caption: 'Analítica de call center — tickets por agente, canal y turno, con satisfacción y tiempo de respuesta.',
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
      subtitle: 'Las herramientas con las que diseño, construyo, optimizo y mido.',
      items: [
        { name: 'React', cat: 'Front-end · Principal', icon: 'react' },
        { name: 'JavaScript', cat: 'Front-end', icon: 'js' },
        { name: 'HTML5', cat: 'Front-end', icon: 'code' },
        { name: 'CSS3', cat: 'Front-end', icon: 'code' },
        { name: 'Node.js', cat: 'Runtime', icon: 'node' },
        { name: 'Bootstrap', cat: 'Front-end', icon: 'code' },
        { name: 'WordPress', cat: 'CMS', icon: 'wp' },
        { name: 'Shopify', cat: 'E-commerce', icon: 'shopify' },
        { name: 'Power BI', cat: 'Datos & BI', icon: 'bi' },
        { name: 'Git', cat: 'Herramientas', icon: 'git' },
        { name: 'GitHub', cat: 'Herramientas', icon: 'github' },
        { name: 'VS Code', cat: 'Herramientas', icon: 'code' },
        { name: 'SEO Técnico', cat: 'SEO', icon: 'seo' },
        { name: 'Core Web Vitals', cat: 'Rendimiento', icon: 'gauge' },
        { name: 'Flujos con IA', cat: 'IA', icon: 'ai' },
      ],
    },
    ai: {
      heading: 'Desarrollo avanzado con IA',
      text: 'Trabajo de forma práctica con desarrollo avanzado con IA —programación en terminal y línea de comandos, creación de agentes de IA y orquestación de flujos de trabajo de automatización— aplicándola al diseño, la depuración, la documentación y la entrega para avanzar más rápido sin sacrificar la calidad.',
      tags: [
        'Creación de agentes de IA',
        'Programación en terminal',
        'Flujos de automatización',
        'Claude',
        'Gemini',
        'ChatGPT',
        'Cursor',
        'OpenAI Codex',
        'Antigravity',
        'Ingeniería de prompts',
      ],
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
      text: 'Conoce los servicios de desarrollo web de Webraf o escríbeme directamente para hablar de tu proyecto.',
      services: 'Ver servicios de desarrollo web',
      contact: 'Escríbeme',
    },
  },
};

export default content;
