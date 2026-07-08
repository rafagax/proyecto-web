// Spanish (neutral) services copy (index page + web-development detail + metadata).
// Same key structure/order as en/services.js. Segmented headings use
// { before, accent, after }. Plain strings only — no functions/JSX.
export default {
  indexMeta: {
    title: 'Servicios de Web, SEO, KPI e IA | Webraf',
    description:
      'Explora nuestros servicios: desarrollo y diseño web premium, SEO y crecimiento digital, dashboards de KPI y analítica, y automatización con IA y chatbots.',
    ogTitle: 'Nuestros servicios | Webraf',
    ogDescription: 'Desarrollo web premium, SEO, dashboards de KPI y automatización con IA para negocios en crecimiento.',
  },
  index: {
    eyebrow: 'Lo que hacemos',
    title: { before: 'Nuestros ', accent: 'Servicios', after: '' },
    subtitle:
      'Ofrecemos soluciones digitales completas, pensadas para ayudar a tu negocio a crecer en internet — desde desarrollo web y automatización con IA hasta SEO y generación de clientes potenciales.',
    cardCta: 'Solicitar este servicio',
    // serviceKey maps each card to its detail page in app/route-manifest.js;
    // detailCta is the descriptive anchor for that link.
    cards: [
      {
        title: 'Presencia digital profesional',
        description:
          'Creamos una página web moderna, clara y atractiva que fortalece la imagen de tu negocio, genera confianza en tus clientes y hace que tu marca transmita profesionalismo desde el primer clic.',
        benefits: ['Diseño visual a medida', 'Velocidad de carga optimizada', 'Diseño adaptado a móviles', 'Coherencia de marca'],
        serviceKey: 'svc-web',
        detailCta: 'Ver diseño y desarrollo web',
      },
      {
        title: 'Desarrollo web rápido y profesional',
        description:
          'Creamos páginas web multidispositivo entregadas en solo 7 días, usando los frameworks y tecnologías más actuales para garantizar rendimiento, fiabilidad y escalabilidad.',
        benefits: ['Entrega en 7 días hábiles', 'Hecho con React / Next.js', 'Rendimiento optimizado', 'Compatible con todos los navegadores'],
        serviceKey: 'svc-web',
        detailCta: 'Ver nuestro servicio de desarrollo web',
      },
      {
        title: 'Crecimiento de ventas y SEO local',
        description:
          'Aplicamos estrategias de posicionamiento geolocal para que tu negocio aparezca de primero en Google en tu ciudad, atraiga clientes locales y sea recomendado por los asistentes de IA.',
        benefits: ['Configuración del Perfil de Empresa en Google', 'Selección de palabras clave', 'Creación de citas locales', 'Optimización para recomendación por IA'],
        serviceKey: 'svc-seo',
        detailCta: 'Ver nuestro servicio de SEO',
      },
      {
        title: 'Integración de chatbot con IA',
        description:
          'Integramos chatbots inteligentes con IA en tu página web que atienden a los clientes 24/7, responden preguntas frecuentes y derivan los contactos a WhatsApp automáticamente.',
        benefits: ['Atención al cliente 24/7', 'Integración con WhatsApp', 'Captura automática de contactos', 'Flujos de conversación a medida'],
        serviceKey: 'svc-ai',
        detailCta: 'Ver automatización con IA y chatbots',
      },
      {
        title: 'Automatización de negocios',
        description:
          'Automatizamos tareas y flujos repetitivos para que tu equipo se concentre en lo que importa. Desde respuestas de WhatsApp hasta integraciones con CRM y secuencias de correo.',
        benefits: ['Respuestas automáticas de WhatsApp', 'Integración con CRM', 'Automatización de email marketing', 'Optimización de flujos de trabajo'],
        serviceKey: 'svc-ai',
        detailCta: 'Ver nuestro servicio de automatización con IA',
      },
      {
        title: 'Estrategia de SEO y contenidos',
        description:
          'Desarrollamos una estrategia completa de SEO y contenidos para que tu negocio sea fácil de encontrar en internet, atrayendo tráfico orgánico que se convierte en clientes.',
        benefits: ['Auditoría técnica de SEO', 'Planificación de contenidos', 'Optimización on-page', 'Reportes mensuales'],
        serviceKey: 'svc-seo',
        detailCta: 'Ver nuestro servicio de SEO y contenidos',
      },
    ],
    // Hub → spoke row: one keyword-anchor link per service detail page.
    detailLinksHeading: { before: 'Conoce cada ', accent: 'servicio', after: ' a fondo' },
    detailLinks: [
      { key: 'svc-web', label: 'Desarrollo y diseño web' },
      { key: 'svc-seo', label: 'SEO y crecimiento digital' },
      { key: 'svc-kpi', label: 'Dashboards de KPI y analítica' },
      { key: 'svc-ai', label: 'Automatización con IA y chatbots' },
    ],
    cta: {
      heading: { before: '¿Listo para ', accent: 'dar el siguiente paso?', after: '' },
      copy: 'Construyamos juntos tu presencia digital. Agenda una consulta gratuita y trazaremos la mejor estrategia para tu negocio.',
      primary: 'Contáctanos',
      secondary: 'Ver precios',
    },
  },
  webMeta: {
    title: 'Servicios de desarrollo y diseño web premium | Webraf',
    description:
      'Diseño y desarrollo web premium: sitios web rápidos, responsivos y orientados a conversión que generan confianza y convierten visitantes en clientes.',
    ogTitle: 'Desarrollo y diseño web premium para negocios en crecimiento',
    ogDescription:
      'Servicios de desarrollo y diseño web premium para negocios que necesitan páginas web rápidas, responsivas y orientadas a conversión, creadas para generar confianza y atraer clientes potenciales calificados.',
    schemaName: 'Desarrollo y diseño web',
  },
  webDetail: {
    // Secondary-action labels for the market-aware CTAs (contract C2): Spanish
    // pages lead with WhatsApp and offer the contact form as the alternative;
    // English pages lead with the form and offer WhatsApp.
    ctaAlt: {
      whatsapp: '¿Prefieres WhatsApp? Escríbenos',
      form: '¿Prefieres el formulario? Cuéntanos tu proyecto',
    },
    hero: {
      title: { before: 'Diseño y ', accent: 'desarrollo web', after: '' },
      subtitle:
        'Creamos páginas web modernas, responsivas y orientadas a conversión, diseñadas para representar tu marca, atraer al público adecuado y convertir a los visitantes en clientes.',
      cta: 'Solicita una cotización gratis',
      alt: 'Diseño de página web moderna, responsiva y orientada a conversión',
      waQuote: 'Hola, me gustaría obtener una cotización gratis para una página web.',
    },
    custom: {
      heading: { before: 'Páginas web a medida construidas en torno a ', accent: 'tu marca', after: '' },
      copy:
        'Más que una presencia en internet: diseñamos y desarrollamos páginas web a medida que reflejan tu marca, comunican tu valor con claridad y convierten a los visitantes en clientes.',
      points: ['Diseño único alineado con tu marca', 'Mensaje y estructura claros', 'Creada para convertir y crecer', 'Flexible para futuras actualizaciones'],
      cta: 'Inicia tu proyecto web',
      waQuote: 'Hola, me gustaría iniciar un proyecto web.',
      alt: 'Diseñador trabajando en el diseño y los wireframes de una página web moderna',
    },
    responsive: {
      heading: { before: 'Responsiva, rápida y optimizada para ', accent: 'cualquier dispositivo', after: '' },
      copy:
        'Creamos páginas web que se ven muy bien y funcionan con fluidez en computadoras, tabletas y móviles. Cada página está estructurada para mejorar la experiencia de usuario, la velocidad de carga y la visibilidad en los buscadores.',
      points: ['Diseño adaptado a móviles', 'Velocidad de página optimizada', 'Estructura amigable para SEO', 'Navegación y experiencia de usuario fluidas'],
      cta: 'Mejora tu presencia en internet',
      waQuote: 'Hola, me gustaría mejorar mi presencia en internet con una nueva página web.',
      alt: 'Una misma página web mostrada en computadora, tableta y móvil',
    },
    ecommerce: {
      heading: { before: 'Tiendas online diseñadas para ', accent: 'vender', after: '' },
      copy:
        'Si tu objetivo es vender en internet, podemos crear una tienda online profesional que facilite mostrar productos, gestionar inventario, procesar pedidos y ofrecer una experiencia de compra segura a tus clientes.',
      points: [
        'Configuración de catálogo de productos y carrito de compra',
        'Integración de pago seguro',
        'Gestión sencilla de inventario y pedidos',
        'Experiencia de compra fácil de usar',
        'Estructura escalable para el crecimiento futuro',
      ],
      cta: 'Crea tu tienda online',
      waQuote: 'Hola, me gustaría crear una tienda online.',
      alt: 'Panel de tienda online y disposición de productos de e-commerce',
    },
    essentials: {
      heading: { before: 'Todo lo que tu página web necesita para causar una ', accent: 'gran impresión', after: '' },
      copy:
        'Una página web exitosa combina estrategia, diseño, contenido y funcionalidad — trabajando en conjunto para ayudar a tu negocio a destacar y crecer en internet.',
      capabilities: [
        { title: 'Identidad de marca', text: 'Un diseño que refleja tu logo, colores, estilo y personalidad.' },
        { title: 'Mensaje claro', text: 'Textos y titulares sólidos que comunican lo que ofreces y por qué importa.' },
        { title: 'Experiencia de usuario', text: 'Navegación simple y diseños intuitivos que ayudan a los visitantes a encontrar lo que buscan.' },
        { title: 'Estrategia de conversión', text: 'CTAs estratégicos, formularios de contacto y secciones diseñadas para generar clientes potenciales.' },
        { title: 'Estructura lista para SEO', text: 'Bases limpias y amigables con los buscadores que ayudan a que tu negocio aparezca en Google.' },
        { title: 'Analítica y seguimiento', text: 'Seguimiento claro del rendimiento para medir resultados y tomar mejores decisiones.' },
      ],
      cta: 'Crea una página web que funcione',
      waQuote: 'Hola, me gustaría crear una página web que funcione para mi negocio.',
    },
    why: {
      heading: { before: '¿Por qué trabajar con nuestro ', accent: 'equipo de diseño web?', after: '' },
      copy:
        'Combinamos diseño, estrategia y desarrollo para crear páginas web que no solo son visualmente atractivas, sino también funcionales, seguras y orientadas a resultados. Nuestro proceso es personalizado, transparente y construido en torno a los objetivos de tu negocio.',
      points: [
        'Servicio personalizado desde la estrategia hasta el lanzamiento',
        'Diseño moderno enfocado en conversiones',
        'Desarrollo confiable y soporte técnico',
        'Comunicación clara durante todo el proyecto',
        'Páginas web escalables construidas para el crecimiento a largo plazo',
      ],
      cta: 'Hablemos de tu proyecto',
      waQuote: 'Hola, me gustaría hablar sobre mi proyecto web.',
    },
    process: {
      heading: { before: 'Nuestro proceso de ', accent: 'desarrollo web', after: '' },
      steps: [
        { title: 'Descubrimiento', text: 'Entendemos tu negocio, tus objetivos, tu público y tu competencia.' },
        { title: 'Estrategia y estructura', text: 'Definimos la disposición de la página, el recorrido del usuario, las secciones y los puntos clave de conversión.' },
        { title: 'Diseño', text: 'Creamos una dirección visual moderna que encaja con tu marca y mejora la experiencia de usuario.' },
        { title: 'Desarrollo', text: 'Construimos la página web con código responsivo, optimizado y escalable.' },
        { title: 'Lanzamiento y soporte', text: 'Probamos, lanzamos y damos soporte para que tu página web funcione correctamente.' },
      ],
      cta: 'Inicia el proceso',
      waQuote: 'Hola, me gustaría iniciar el proceso para una nueva página web.',
    },
    finalCta: {
      heading: { before: '¿Listo para crear una página web que ', accent: 'haga crecer tu negocio?', after: '' },
      copy:
        'Creemos una página web profesional que represente tu marca, mejore tu presencia en internet y te ayude a generar más clientes potenciales, ventas y oportunidades.',
      primary: 'Solicita una cotización gratis',
      primaryWaQuote: 'Hola, me gustaría obtener una cotización gratis para una página web.',
      secondary: 'Contáctanos hoy',
    },
    otherHeading: { before: 'Explora nuestros otros ', accent: 'servicios', after: '' },
    otherLearnMore: 'Conoce más',
    others: [
      { title: 'SEO y crecimiento digital', short: 'Mejora la visibilidad, atrae tráfico calificado y crece de forma orgánica.' },
      { title: 'Dashboards de KPI y analítica', short: 'Controla contactos, ventas y el rendimiento del negocio con claridad.' },
      { title: 'Automatización con IA y chatbots', short: 'Automatiza respuestas, califica contactos y atiende clientes 24/7.' },
    ],
  },
};
