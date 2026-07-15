// Spanish (neutral) clients copy. Same keys/order as en/clients.js. Names, businesses,
// locations, website URLs, percentages and stat values stay in OurClients.jsx.
export default {
  meta: {
    title: 'Casos de estudio y opiniones de clientes | Webraf',
    description:
      'Proyectos, sitios web y opiniones de clientes de Webraf en desarrollo web, SEO, analítica y automatización con IA.',
    ogTitle: 'Casos de estudio y opiniones de clientes | Webraf',
    ogDescription: 'Proyectos reales, resultados reales: casos de estudio y reseñas de negocios a los que hemos ayudado a crecer en internet.',
  },
  hero: {
    badge: 'Casos de estudio',
    title: { before: 'Proyectos reales, ', accent: 'resultados reales', after: '' },
    subtitle: 'Así ayudamos a pymes y profesionales a conseguir clientes en internet: del problema al resultado.',
    overallLabel: 'Calificación general de reseñas',
    ratingCategories: ['Calidad', 'Cumplimiento de plazos', 'Costo', 'Dispuesto a recomendar'],
    stats: ['Calificación de clientes', 'Clientes directos', 'Países atendidos', 'Tasa de satisfacción'],
  },
  // Casos de estudio (emparejados por índice con CASE_STUDIES en OurClients.jsx).
  // `metric` solo se muestra si no
  // está vacío — dejar '' hasta que el dueño aporte cifras REALES.
  caseStudies: {
    heading: { before: 'Proyectos web ', accent: 'recientes', after: '' },
    subtitle: 'Una selección de sitios recientes creados según la marca, el público y los objetivos comerciales de cada cliente.',
    mobileHeading: 'Sitios web realizados recientemente',
    languageLabels: {
      es: 'Sitio web en español',
      en: 'Sitio web en inglés',
    },
    labels: { problem: 'Problema', solution: 'Solución', result: 'Resultado' },
    liveButton: 'Ver web en vivo',
    items: [
      {
        service: 'Web médica + SEO local',
        imageAlt: 'Página principal del sitio de gastroenterología pediátrica creado para la Dra. Katherine Ainslie',
        summary: 'Una web médica confiable que presenta la consulta con claridad y facilita a las familias solicitar una cita.',
        problem:
          'Los padres que buscaban una gastroenteróloga pediátrica en Aragua no encontraban información fiable sobre la consulta: los servicios, la ubicación y la forma de pedir cita solo circulaban por redes sociales y el boca a boca.',
        solution:
          'Una página web médica profesional que organiza los servicios, las credenciales y las vías de contacto de la consulta, optimizada para las búsquedas locales de su especialidad.',
        result:
          'La consulta aparece posicionada en los primeros resultados de Google para su especialidad en Aragua: los padres la encuentran y piden cita directamente desde el buscador.',
        metric: '', // TODO: dueño — cifras reales (visitas mensuales, citas llegadas desde la web)
      },
      {
        service: 'Web corporativa',
        imageAlt: 'Sitio web corporativo de servicios jurídicos creado para Soluciones Cofer',
        summary: 'Una web corporativa profesional que presenta con claridad la experiencia, las áreas de práctica y las vías de contacto.',
        problem:
          'El despacho no tenía presencia propia en internet: los clientes potenciales no podían verificar su trayectoria ni sus áreas de práctica antes del primer contacto.',
        solution:
          'Una página web corporativa sobria que presenta las áreas de práctica, el perfil del despacho y las vías de contacto, pensada para transmitir confianza profesional.',
        result:
          'El despacho cuenta ahora con una presencia profesional verificable que respalda cada recomendación y contacto comercial.',
        metric: '', // TODO: dueño — cifras reales (consultas recibidas a través de la web)
      },
      {
        service: 'Tienda online',
        imageAlt: 'Catálogo online de trajes de baño creado para Bikinis L.B. Orgina',
        summary: 'Un catálogo online vibrante que organiza la colección y ofrece una ruta directa para realizar pedidos.',
        problem:
          'La marca de trajes de baño vendía solo por redes sociales: el catálogo era difícil de consultar, los pedidos se gestionaban a mano y no tenía un escaparate propio para llegar a nuevas clientas.',
        solution:
          'Una tienda online con la colección organizada en un catálogo fácil de recorrer y un canal directo de pedidos, con un diseño visual fiel a la marca.',
        result:
          'Un catálogo que las clientas pueden consultar a cualquier hora y que amplía el alcance de la marca más allá de sus redes sociales.',
        metric: '', // TODO: dueño — cifras reales (pedidos/ventas procedentes de la web)
      },
      {
        service: 'Web, SEO y gestión del sitio',
        imageAlt: 'Sitio web para restaurante creado para Briochef en Madrid',
        summary: 'Una web de restaurante con identidad propia, respaldada por SEO y gestión continua del sitio, con accesos claros para reservas, delivery y contacto.',
        problem: '',
        solution: '',
        result: '',
        metric: '',
      },
      {
        service: 'Web, SEO y gestión del sitio',
        imageAlt: 'Catálogo de farmacia online desarrollado para FarmaVital',
        summary: 'Un catálogo online respaldado por SEO y gestión del sitio, que facilita consultar productos de salud, marcas e información de la tienda.',
        problem: '',
        solution: '',
        result: '',
        metric: '',
      },
      {
        service: 'Web para eventos',
        imageAlt: 'Sitio web de espacios para eventos y solicitudes de presupuesto desarrollado para Stage Miami Events',
        summary: 'Una web de eventos enfocada en conversión que presenta los servicios y facilita solicitar información directamente.',
        problem: '',
        solution: '',
        result: '',
        metric: '',
      },
    ],
  },
  testimonials: {
    heading: { before: 'Lo que dicen ', accent: 'nuestros clientes', after: '' },
    subtitle: 'Negocios de Venezuela, Estados Unidos y España confían en nosotros para construir su presencia digital.',
    projectsHeading: 'Otros sitios web y proyectos de clientes',
  },
  card: {
    viewSite: 'Ver sitio',
  },
  clients: [
    { quote: 'Transformaron mi negocio de moda con una hermosa tienda online. La página web me ayudó a llegar a clientes de forma internacional. ¡Las ventas aumentaron 150% en los primeros 3 meses!', result: '+150% de crecimiento en ventas', service: 'Moda E-Commerce' },
    { quote: 'Como gastropediatra necesitaba una página profesional donde los padres encontraran mis servicios y pudieran agendar una consulta con confianza. El sitio transmite seriedad y cercanía, y ahora recibo más pacientes nuevos cada semana.', result: 'Más pacientes nuevos cada semana', service: 'Web médica profesional' },
    { quote: 'El equipo entregó una página web B2B profesional que comunica con claridad nuestros servicios. La generación de contactos aumentó de forma significativa y estamos cerrando más tratos con clientes serios.', result: '+85% de contactos calificados', service: 'Soluciones B2B' },
    { quote: 'En 7 días tenía mi página web en línea y recibiendo clientes. El equipo fue increíblemente profesional y se encargó de todo lo que pedí.', result: '+60% más consultas', service: 'Landing page' },
    { quote: 'Gracias a la automatización con IA que implementaron, respondo las consultas de WhatsApp sin esfuerzo. Mis ventas subieron 40% en el primer mes.', result: '+40% de ventas en el primer mes', service: 'Automatización con IA' },
    { quote: 'Necesitaba una página web bilingüe para mi audiencia hispana y lo lograron a la perfección. El diseño es limpio, rápido y profesional. ¡Muy recomendados!', result: 'Duplicó el alcance en internet', service: 'Web bilingüe' },
    { quote: 'Mi visibilidad como negocio se disparó tras su trabajo de SEO local. Pasé de ser invisible en internet a conseguir de 3 a 4 clientes nuevos por semana.', result: '3–4 clientes nuevos/semana', service: 'SEO local' },
    { quote: 'Contraté el servicio desde España y la experiencia fue impecable. Entregaron antes de lo previsto y el diseño superó mis expectativas.', result: 'Entrega anticipada', service: 'Web profesional' },
    { quote: 'El chatbot que integraron atiende a los clientes mientras duermo. Es una inversión que se pagó sola en menos de un mes.', result: 'Retorno en 30 días', service: 'Chatbot con IA' },
  ],
  cta: {
    heading: { before: 'Sé nuestro próximo ', accent: 'caso de éxito', after: '' },
    copy: 'Desde e-commerce de moda hasta plataformas B2B y consultorios médicos: hemos trabajado directamente con más de 60 clientes en Venezuela, Estados Unidos y España. Entre trabajos directos, de agencia y freelance, nuestro fundador ha apoyado más de 100 proyectos de clientes.',
    button: 'Agenda una consulta gratuita',
  },
};
