// Spanish (neutral) Home page copy. Commit 5 is content-only — not connected to
// Home.jsx yet. Segmented headings store the gradient part under an `accent` key
// (or accent1/accent2 for the hero); concatenating the segments rebuilds the visible
// text. No HTML/JSX is stored here. Mismas claves que en/home.js.
export default {
  cta: {
    freeAudit: 'Auditoría gratuita',
  },

  hero: {
    title: {
      before: 'Desarrollo web, ',
      accent1: 'automatización con IA',
      middle: ', SEO y ',
      accent2: 'dashboards de KPI',
    },
    subtitle:
      'Creamos tu sitio web profesional, optimizamos tu posición en Google y automatizamos tus ventas con IA, mientras estructuramos tus métricas clave (KPIs) para que mantengas el control total de tu crecimiento en tiempo real.',
    imageAlt: 'Ilustración de desarrollo web, automatización con IA, SEO y dashboards de KPI',
    cards: {
      web: { tagline: 'Sitios web premium que convierten' },
      seo: { tagline: 'Mejora tu visibilidad y atrae tráfico calificado' },
      kpi: { tagline: 'Controla los números que importan' },
      ai: { tagline: 'Responde más rápido, 24/7' },
    },
    form: {
      phonePlaceholder: 'Tu número de teléfono',
      emailPlaceholder: 'Tu correo',
      messagePlaceholder: '¿Qué servicio necesitas o por qué nos contactas?',
    },
  },

  value: {
    title: { before: 'Tu sitio web debe hacer ', accent: 'más que verse bien', after: '' },
    description:
      'Un sitio web premium debe atraer a la audiencia correcta, convertir visitantes en leads calificados y darte una visión clara de qué está funcionando. Combinamos diseño, SEO, seguimiento de rendimiento y automatización con IA para crear una presencia digital pensada para un crecimiento medible.',
  },

  featured: {
    title: { before: 'Un sitio web rápido y premium, hecho para ', accent: 'convertir', after: '' },
    description:
      'Diseñamos y desarrollamos sitios web responsivos que comunican tu valor con claridad, generan confianza y guían a los visitantes hacia la acción.',
    imageAlt: 'Diseño de sitio web corporativo premium en pantalla',
    imageCaption: 'Sitios web corporativos premium',
    bullets: [
      'Diseño personalizado según tu marca',
      'Desarrollo rápido con enfoque mobile-first',
      'Llamadas a la acción claras para generar más consultas',
    ],
    cta: 'Ver desarrollo web',
  },

  servicesGrid: {
    web: {
      description:
        'Sitios web responsivos de alta gama, diseñados para generar confianza, convertir visitantes y respaldar el crecimiento del negocio a largo plazo.',
      highlight: 'Listo en 7 días o menos',
    },
    seo: {
      description:
        'Mejora tu visibilidad en Google, atrae tráfico calificado y convierte la intención de búsqueda en oportunidades reales de negocio.',
      highlight: 'Optimizado para competir en búsquedas locales',
    },
    kpi: {
      description:
        'Obtén dashboards claros e información de rendimiento para saber siempre qué funciona y dónde mejorar.',
      highlight: 'Conoce qué funciona en tiempo real',
    },
    ai: {
      description:
        'Capta leads, responde preguntas y atiende clientes 24/7 con automatización inteligente impulsada por IA.',
      highlight: 'Un agente de IA trabajando para ti 24/7',
    },
    cta: 'Explora todos nuestros servicios',
  },

  system: {
    title: { before: 'No solo un sitio web. ', accent: 'Un sistema de crecimiento digital.', after: '' },
    description:
      'Tu sitio web, SEO, KPIs y automatización no deberían trabajar por separado. Los conectamos en un solo sistema claro, diseñado para atraer mejores visitantes, generar más leads y ayudarte a tomar decisiones más inteligentes.',
    cta: 'Descubre el sistema',
    diagram: { center: 'SISTEMA', web: 'Diseño web', seo: 'SEO', kpi: 'Dashboards de KPI', ai: 'IA y automatización' },
  },

  build: {
    eyebrow: 'Lo que construimos',
    title: { before: 'Todo lo que tu presencia digital necesita para ', accent: 'crecer', after: '' },
    seo: {
      title: { before: 'Mejora tu visibilidad y atrae ', accent: 'tráfico calificado', after: '' },
      description:
        'Optimizamos tu sitio web y tu presencia en buscadores para que las personas correctas encuentren tu negocio cuando buscan activamente tus servicios.',
      bullets: [
        'Estrategia de SEO local y orgánico',
        'Investigación de palabras clave y competencia',
        'Bases de SEO on-page y técnico',
      ],
      imageAlt: 'SEO y crecimiento digital — visibilidad de búsqueda y tráfico calificado',
      cta: 'Explora SEO y crecimiento',
    },
    ai: {
      title: { before: 'Responde más rápido con ', accent: 'automatización inteligente', after: '' },
      description:
        'Creamos sistemas de chat y WhatsApp con IA que responden preguntas, califican leads y atienden clientes a toda hora.',
      bullets: [
        'Respuestas instantáneas a preguntas frecuentes',
        'Calificación de leads y flujos de citas',
        'Respuestas personalizadas entrenadas con tu negocio',
      ],
      mockupAria: 'Chat de WhatsApp donde un asistente de IA responde a un cliente y agenda una cita',
      mockup: {
        assistant: 'Asistente de IA',
        online: 'en línea',
        msg1: '¡Hola! ¿Tienen disponibilidad esta semana? 👋',
        msg2: '¡Sí! Puedo agendarte el jueves a las 3 p. m. ¿Lo confirmo? ✅',
        msg3: '¡Listo, quedaste agendado! Mientras, te comparto una lista rápida de precios 📋',
      },
      cta: 'Explora automatización con IA',
    },
    kpi: {
      title: { before: 'Controla los números que ', accent: 'realmente importan', after: '' },
      description:
        'Creamos dashboards claros que te ayudan a entender leads, ventas, rendimiento del sitio y resultados de marketing sin confusión.',
      bullets: [
        'Seguimiento de leads y ventas',
        'Visibilidad del rendimiento de marketing',
        'Reportes claros para mejores decisiones',
      ],
      imageAlt: 'Equipo de call center de atención al cliente monitoreando KPIs del negocio',
      cta: 'Explora dashboards de KPI',
    },
  },

  process: {
    eyebrow: 'Cómo funciona',
    title: { before: 'De la primera idea al lanzamiento de tu web — en ', accent: '3 simples pasos', after: '' },
    subtitle:
      'Un proceso claro y guiado que convierte tu idea en un sitio web profesional, listo para atraer clientes y hacer crecer tu negocio.',
    steps: {
      discover: {
        title: 'Descubrir',
        text: 'Conocemos tu negocio, tus objetivos y los clientes que quieres alcanzar. Luego definimos la estructura, el contenido y la estrategia correctos para tu sitio web.',
      },
      build: {
        title: 'Construir',
        text: 'Diseñamos y desarrollamos un sitio web rápido con enfoque mobile-first, con un mensaje claro, buenos visuales y bases listas para SEO — pensado para verse profesional desde el primer día.',
      },
      launch: {
        title: 'Lanzar y mejorar',
        text: 'Tu sitio web queda listo para publicarse en 7 días o menos. Lo publicamos, conectamos lo esencial y seguimos disponibles para actualizaciones, ajustes y mejoras a medida que tu negocio crece.',
      },
    },
    cta: 'Inicia tu proyecto',
  },

  benefits: {
    eyebrow: 'Por qué elegirnos',
    title: { before: 'Lo que realmente ', accent: 'obtienes', after: '' },
    subtitle:
      'Sin promesas vagas — solo una solución web clara y confiable, creada para que tu negocio se vea profesional, cargue rápido y convierta mejor.',
    items: {
      fast: {
        title: 'Sitios web de carga rápida',
        text: 'Estructura optimizada, código limpio y páginas livianas para que tus visitantes no esperen — y Google pueda recompensar un mejor rendimiento.',
      },
      responsive: {
        title: 'Diseño responsivo',
        text: 'Tu sitio web se verá nítido y funcionará sin problemas en móviles, tablets y computadoras, donde la mayoría de los clientes navega.',
      },
      seoReady: {
        title: 'Estructura lista para SEO',
        text: 'Encabezados limpios, metadatos, HTML semántico y buenas prácticas de rendimiento para ayudar a que tu negocio sea descubierto en línea.',
      },
      deliveryProcess: {
        title: 'Proceso de entrega claro',
        text: 'Siempre sabes qué se está construyendo, qué sigue y cuándo se entrega cada fase. Sin confusiones, sin sorpresas.',
      },
      conversion: {
        title: 'Diseños orientados a conversión',
        text: 'Cada sección está diseñada con un propósito: guiar a los visitantes, generar confianza y convertir el interés en consultas reales.',
      },
      support: {
        title: 'Soporte después del lanzamiento',
        text: 'No desaparecemos después de publicar. Recibes ayuda con correcciones, actualizaciones y mejoras para mantener tu sitio web funcionando sin problemas.',
      },
    },
  },

  finalCta: {
    title: { before: '¿Listo para construir una ', accent: 'presencia digital más inteligente?', after: '' },
    description:
      'Agenda hoy tu auditoría y sesión de estrategia gratuita. Identificaremos oportunidades de búsqueda local, evaluaremos la velocidad del sitio y trazaremos un plan de crecimiento digital a medida para tu negocio.',
    contact: { whatsappLabel: 'WhatsApp', emailLabel: 'Correo', locationLabel: 'Ubicación' },
  },

  pricing: {
    eyebrow: 'Precios transparentes',
    title: { before: 'Sitios web profesionales desde ', accent: '$299', after: '' },
    description:
      'Precios simples y transparentes, sin costos ocultos. Empieza con una creación única y agrega SEO, gestión o servicios de IA mensuales cuando quieras.',
    cta: 'Ver planes y precios',
  },

  contactForm: {
    eyebrow: 'Paso final',
    title: { before: '¿Listo para un sistema que ', accent: 'vende por ti?', after: '' },
    description:
      'Hablemos de tu proyecto. En tu consulta gratuita analizaremos tus necesidades actuales y trazaremos la mejor estrategia digital para acelerar tu crecimiento — sin compromiso.',
    name: { label: 'Nombre completo', placeholder: 'Tu nombre' },
    email: { label: 'Correo electrónico', placeholder: 'tu@correo.com' },
    phone: { label: 'Número de teléfono', placeholder: 'Tu número de teléfono' },
    message: { label: 'Mensaje', placeholder: 'Cuéntanos un poco sobre tu proyecto...' },
    submit: 'Obtén tu estrategia digital gratuita',
  },

  whatsapp: {
    advisory: 'Hola, me gustaría agendar una sesión de asesoría gratuita para mi negocio.',
    audit: 'Hola, me gustaría solicitar una auditoría gratuita para mi negocio.',
    system: 'Hola, me gustaría conocer más sobre tu sistema de crecimiento digital.',
    project: 'Hola, me gustaría iniciar mi proyecto web.',
    auditStrategy: 'Hola, me gustaría solicitar una auditoría y una sesión de estrategia gratuitas.',
  },
};
