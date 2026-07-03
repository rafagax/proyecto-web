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
        'Electronics Engineer and Front-End Developer with 4+ years building fast, SEO-optimized websites and KPI dashboards. The expert behind Webraf.',
    },
    photoAlt: 'Jesús Vásquez, Electronics Engineer and Front-End Developer, founder of Webraf',
    hero: {
      name: 'Jesús Vásquez',
      tagline: 'Electronics Engineer · Front-End Developer · Technical SEO Specialist',
      badges: {
        location: 'Maracay, Venezuela · International remote work',
        experience: '4+ years of experience',
        languages: 'Native Spanish · English C1',
      },
      linkedin: 'View LinkedIn',
      github: 'View GitHub',
      contact: 'Contact',
    },
    about: {
      heading: 'About Me',
      paragraphs: [
        "I'm an Electronics Engineer and Front-End Web Developer with 4+ years of experience building fast, accessible, search-optimized websites. I'm the founder and technical lead of Webraf, where I combine three disciplines that rarely meet in one person: front-end development (HTML, CSS, JavaScript, React), technical SEO, and data analysis with KPI dashboards in Power BI.",
        "I currently work as Web Development Coordinator at WebSell, where I run on-page and technical SEO audits, optimize load times and Core Web Vitals, oversee front-end architecture, and implement security protocols — including cleaning and recovering sites compromised by malware. Through end-to-end technical and on-page SEO strategies, we've ranked client sites among the top two Google results for their target searches.",
        'Previously I led the Management Indicators Department at Sisprot Global Fiber, where I built JavaScript and React applications to automate data collection and visualization, and coordinated a 15-person team using Power BI and AI tools. I believe in continuous learning and in building user-centered solutions that are measurable and verifiable.',
      ],
    },
    experience: {
      heading: 'Professional Experience',
      roles: [
        {
          company: 'WebSell',
          title: 'Web Development Coordinator',
          period: '2025–Present · Maracay, Venezuela',
          bullets: [
            'On-page and technical SEO audits and optimization to grow organic visibility.',
            'Load time, UX and Core Web Vitals optimization.',
            'Front-end architecture oversight (HTML, CSS, JavaScript, PHP) and CMS integrations.',
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
        { value: 'Top 2 on Google', label: 'Client sites ranked among the top two results for their target searches.' },
        { value: '90+ PageSpeed', label: 'Score maintained on audited and optimized sites (PageSpeed Insights).' },
        { value: '+300% productivity', label: 'On the sales team I coordinated using data and AI tools.' },
        { value: '−25% errors', label: 'In planning and inventory after implementing digital tools.' },
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
      items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Bootstrap', 'WordPress', 'PHP', 'Power BI', 'Git', 'GitHub', 'VS Code', 'API integration', 'AI workflows (Claude, Gemini, ChatGPT)'],
    },
    links: {
      heading: 'Verifiable Links',
      subtitle: 'The evidence behind the experience above.',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      portfolio: 'Portfolio (Vercel)',
    },
    cta: {
      heading: 'Want me to apply this experience to your project?',
      text: 'Explore what Webraf can do for your business, or reach out directly.',
      services: 'See SEO services',
      contact: 'Contact me',
    },
  },

  es: {
    meta: {
      title: 'Jesús Vásquez — Desarrollador Front-End y Especialista en SEO Técnico | Webraf',
      description:
        'Ingeniero Electrónico y Desarrollador Front-End con más de 4 años creando sitios web rápidos y optimizados para SEO, y dashboards de KPI. El experto detrás de Webraf.',
    },
    photoAlt: 'Jesús Vásquez, Ingeniero Electrónico y Desarrollador Front-End, fundador de Webraf',
    hero: {
      name: 'Jesús Vásquez',
      tagline: 'Ingeniero Electrónico · Desarrollador Front-End · Especialista en SEO Técnico',
      badges: {
        location: 'Maracay, Venezuela · Trabajo remoto internacional',
        experience: 'Más de 4 años de experiencia',
        languages: 'Español nativo · Inglés C1',
      },
      linkedin: 'Ver LinkedIn',
      github: 'Ver GitHub',
      contact: 'Contactar',
    },
    about: {
      heading: 'Sobre mí',
      paragraphs: [
        'Soy Ingeniero Electrónico y Desarrollador Web Front-End con más de 4 años de experiencia construyendo sitios web rápidos, accesibles y optimizados para buscadores. Soy el fundador y responsable técnico de Webraf, donde combino tres disciplinas que rara vez se encuentran en una sola persona: desarrollo front-end (HTML, CSS, JavaScript, React), SEO técnico y análisis de datos con dashboards de KPI en Power BI.',
        'Actualmente me desempeño como Coordinador de Desarrollo Web en WebSell, donde ejecuto auditorías SEO on-page y técnicas, optimizo tiempos de carga y Core Web Vitals, superviso la arquitectura front-end e implemento protocolos de seguridad, incluyendo la limpieza y recuperación de sitios comprometidos por malware. Gracias a estrategias integrales de SEO técnico y on-page, hemos posicionado sitios de clientes entre los dos primeros resultados de Google en sus búsquedas objetivo.',
        'Antes lideré el Departamento de Indicadores de Gestión en Sisprot Global Fiber, donde desarrollé aplicaciones en JavaScript y React para automatizar la recopilación y visualización de datos, y coordiné un equipo de 15 personas apoyándome en Power BI y herramientas de inteligencia artificial. Creo en el aprendizaje continuo y en construir soluciones centradas en el usuario, medibles y verificables.',
      ],
    },
    experience: {
      heading: 'Experiencia profesional',
      roles: [
        {
          company: 'WebSell',
          title: 'Coordinador de Desarrollo Web',
          period: '2025–Actualidad · Maracay, Venezuela',
          bullets: [
            'Auditorías y optimización SEO on-page y técnica para incrementar la visibilidad orgánica.',
            'Optimización de tiempos de carga, UX y Core Web Vitals.',
            'Supervisión de arquitectura front-end (HTML, CSS, JavaScript, PHP) e integraciones en CMS.',
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
        { value: 'Top 2 en Google', label: 'Sitios de clientes posicionados entre los dos primeros resultados en sus búsquedas objetivo.' },
        { value: '+90 en PageSpeed', label: 'Puntuación mantenida en los sitios auditados y optimizados (PageSpeed Insights).' },
        { value: '+300% productividad', label: 'En el equipo de ventas que coordiné con herramientas de datos e IA.' },
        { value: '−25% de errores', label: 'En planificación e inventario tras implementar herramientas digitales.' },
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
      items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Bootstrap', 'WordPress', 'PHP', 'Power BI', 'Git', 'GitHub', 'VS Code', 'Integración de APIs', 'Flujos con IA (Claude, Gemini, ChatGPT)'],
    },
    links: {
      heading: 'Enlaces verificables',
      subtitle: 'La evidencia detrás de la experiencia anterior.',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      portfolio: 'Portafolio (Vercel)',
    },
    cta: {
      heading: '¿Quieres que aplique esta experiencia a tu proyecto?',
      text: 'Conoce lo que Webraf puede hacer por tu negocio, o escríbeme directamente.',
      services: 'Ver servicios de SEO',
      contact: 'Escríbeme',
    },
  },
};

export default content;
