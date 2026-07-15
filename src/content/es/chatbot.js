// Spanish (neutral) chatbot copy. Same structure as en/chatbot.js (same UI keys, same
// number of quickReplies and intents). `keywords` are the Spanish matching terms — they
// are language-specific, so the keyword arrays may differ in length from English.
// Plain strings only — no functions/JSX.
//
// Optional per-intent fields read by Chatbot.jsx (mirror en/chatbot.js):
//   leadCapture: true        → after this answer the bot offers to take the visitor's email
//   cta: { path, label }     → internal link rendered under the answer (client-side <Link>)
export default {
  ui: {
    openAria: 'Abrir chat',
    avatarAlt: 'Asistente virtual de Webraf',
    headerTitle: 'Asistente virtual',
    headerSubtitle: 'Webraf',
    closeAria: 'Cerrar chat',
    typing: 'El asistente está escribiendo...',
    placeholder: 'Escribe tu pregunta aquí...',
    sendAria: 'Enviar mensaje',
  },
  quickReplies: [
    { label: 'Quiero una página web', value: 'Quiero una página web' },
    { label: 'Planes y precios', value: 'Cuáles son los planes y precios' },
    { label: 'Tiempo de entrega', value: 'Cuánto tarda' },
  ],
  leadCapture: {
    prompt: `Por cierto, si lo prefieres, déjanos tu email aquí en el chat y te escribimos nosotros. 📧`,
    success: `¡Gracias! Hemos recibido tu email. Te responderemos en menos de 24 h laborables.`,
    error: `Lo sentimos, no pudimos enviar tu email en este momento. Inténtalo de nuevo en unos minutos o usa nuestro formulario de contacto:`,
    errorLinkLabel: 'Ir al formulario de contacto',
    contactPath: '/es/contacto?service=web-development',
  },
  fallback: `Gracias por escribirme. Puedo ayudarte con información sobre:\n\n✅ Creación de páginas web\n✅ Planes Inicial, Empresarial y E-Commerce\n✅ Entrega en 7 días hábiles o menos\n✅ SEO local y Google\n✅ Chatbot e IA integrados\n✅ WhatsApp, formularios y contacto\n\n WhatsApp: +58 414 473 5431\n📧 Correo: contact@webraf.com\n\nCuéntame un poco sobre lo que necesitas y te ayudo.`,
  intents: [
    {
      keywords: ['hola', 'buenas', 'hey', 'saludos', 'ayuda', 'info', 'informacion', 'información', 'asistencia', 'soporte'],
      response: `¡Hola! 👋 Soy el asistente virtual de Webraf.\n\nPuedo ayudarte con información sobre creación de páginas web, planes, precios, entrega en 7 días hábiles o menos, SEO local, integración de IA, chatbots, tiendas online y datos de contacto.\n\n¿Qué tipo de página web necesitas para tu negocio?`,
    },
    {
      keywords: ['7 dias', '7 días', 'siete dias', 'tiempo', 'cuanto tarda', 'cuánto tarda', 'entrega', 'rapido', 'rápido', 'plazo'],
      response: `Un sitio web empresarial estándar puede estar listo en 7 días hábiles o menos, según la cantidad de páginas y qué tan preparado esté el contenido. Las funciones a medida y los proyectos e-commerce requieren un plazo mayor.\n\nAcordamos un cronograma claro antes de empezar y te mantenemos informado durante todo el proceso.`,
    },
    {
      keywords: ['quienes son', 'quiénes son', 'empresa', 'webraf', 'sobre nosotros', 'que hacen', 'qué hacen'],
      response: `Somos Webraf, especialistas en diseño y desarrollo web de alto rendimiento.\n\nTransformamos tu visión en una experiencia digital profesional, moderna y estratégica para que tu negocio gane presencia, confianza y más oportunidades de venta.`,
    },
    {
      keywords: ['pagina web', 'página web', 'sitio web', 'web', 'quiero una web', 'crear web', 'necesito web', 'desarrollo web', 'landing'],
      leadCapture: true,
      response: `¡Excelente elección! 🚀\n\nEn Webraf creamos páginas web modernas, rápidas y estratégicas para que tu negocio transmita profesionalismo y atraiga más clientes.\n\nPodemos desarrollar Landing Pages, páginas web empresariales o tiendas online en tiempo récord.\n\n¿Te gustaría agendar una **CONSULTA GRATUITA** por WhatsApp para asesorarte con tu proyecto?\n\n Haz clic aquí para chatear:\nhttps://wa.me/584144735431?text=Hola+me+gustaria+agendar+una+consulta+gratuita`,
    },
    {
      keywords: ['servicios', 'que ofrecen', 'qué ofrecen', 'incluye', 'beneficios', 'soluciones digitales'],
      response: `Nuestros servicios están enfocados en hacer crecer tu marca en internet.\n\nOfrecemos:\n\n✅ Presencia digital profesional\n✅ Desarrollo web rápido y profesional\n✅ Optimización de ventas\n✅ Posicionamiento SEO local\n✅ Integración con WhatsApp\n✅ Formularios de contacto\n✅ Chatbot con IA\n✅ Tiendas online\n✅ Automatización digital`,
    },
    {
      keywords: ['presencia digital', 'profesionalismo', 'imagen profesional', 'marca', 'confianza', 'negocio profesional'],
      response: `Desarrollamos una página web moderna, clara y atractiva que fortalece la imagen de tu negocio, genera confianza en los clientes y hace que tu marca transmita profesionalismo desde el primer clic.\n\nUna buena página web ayuda a que tu negocio se vea más serio, competitivo y listo para vender.`,
    },
    {
      keywords: ['ventas', 'aumentar ventas', 'vender mas', 'vender más', 'conversiones', 'clientes', 'atraer clientes'],
      response: `Aplicamos estrategias de posicionamiento geolocal y optimización web para que tu negocio gane más visibilidad, atraiga clientes en tu zona, aparezca mejor en Google y aumente sus posibilidades de ser recomendado por la IA.\n\nEl objetivo es que tu página web no solo se vea bien, sino que también ayude a generar contactos y oportunidades de venta reales.`,
    },
    {
      keywords: ['google', 'seo', 'posicionamiento', 'busqueda', 'búsqueda', 'aparecer en google', 'primeros resultados', 'local', 'seo local'],
      response: `Sí, trabajamos el posicionamiento SEO local para que tu negocio tenga más visibilidad en Google y pueda atraer clientes en tu zona.\n\nSegún el plan, podemos incluir optimización de SEO local básica o avanzada para mejorar la estructura, el contenido y la presencia digital de tu negocio.`,
    },
    {
      keywords: ['ia', 'inteligencia artificial', 'recomendado por ia', 'chatgpt', 'recomendar', 'recomendacion', 'recomendación'],
      response: `Sí, desarrollamos páginas web con enfoque en tecnología e IA.\n\nUna página web bien estructurada, clara y optimizada ayuda a que tu negocio tenga más posibilidades de ser entendido, encontrado y recomendado por las herramientas digitales y la inteligencia artificial.\n\nTambién podemos integrar un chatbot para responder preguntas frecuentes y captar clientes.`,
    },
    {
      keywords: ['chatbot', 'bot', 'asistente virtual', 'automatizacion', 'automatización', 'responder clientes', 'whatsapp automatico', 'respuesta automatica'],
      response: `Podemos integrar un chatbot o asistente virtual para responder preguntas frecuentes, guiar a tus clientes y ayudarte a captar oportunidades incluso fuera del horario de atención.\n\nEs ideal para explicar servicios, mostrar planes, enviar datos de contacto y guiar al usuario hacia WhatsApp o un formulario.`,
    },
    {
      keywords: ['planes', 'precios', 'precio', 'plan', 'costo', 'cuanto cuesta', 'cuánto cuesta', 'tarifa', 'paquetes', 'basico', '299', '599', '1500'],
      leadCapture: true,
      cta: { path: '/es/precios', label: 'Ver planes y precios' },
      response: `Nuestros precios son simples y transparentes, sin costos ocultos:\n\n✅ Inicial — $299 (landing page de 5 secciones, entrega en 7 días hábiles o menos)\n✅ Empresarial — $599 (hasta 5 páginas, dominio y hosting por 1 año)\n✅ E-Commerce — $1,500 (tienda online completa)\n\nTambién ofrecemos servicios mensuales de SEO, gestión web y analítica de KPIs.\n\n¿Quieres asesoría sobre qué plan se adapta a tu negocio? Escríbenos:\nhttps://wa.me/584144735431?text=Hola+me+gustaria+saber+que+plan+se+adapta+a+mi+negocio`,
    },
    {
      keywords: ['dominio', 'hosting', 'correo corporativo', 'servidor'],
      response: `Sí, podemos orientarte con el dominio y el hosting.\n\nEl Plan Empresarial incluye dominio y hosting por 1 año. En otros planes, también podemos ayudarte a gestionarlo según las necesidades de tu proyecto.\n\nTener tu propio dominio ayuda a que tu negocio se vea más profesional y confiable.`,
    },
    {
      keywords: ['whatsapp', 'contacto', 'asesor', 'humano', 'correo', 'email', 'llamar', 'cotizar', 'agendar', 'consulta gratuita'],
      response: `Por supuesto, puedes contactarnos directamente para recibir asesoría gratuita.\n\n WhatsApp: +58 414 473 5431\n📧 Correo: contact@webraf.com\n📍 Cobertura: 100% remoto, en todo el mundo\n\nTambién puedes escribirnos por WhatsApp aquí:\nhttps://wa.me/584144735431\n\nCuéntanos qué tipo de página web necesitas y con gusto te ayudamos.`,
    },
    {
      keywords: ['ubicacion', 'ubicación', 'donde estan', 'dónde están', 'maracay', 'venezuela', 'aragua'],
      response: `Trabajamos 100% de forma remota.\n\nAtendemos clientes en todo el mundo — Estados Unidos, España, Latinoamérica y más.`,
    },
    {
      keywords: ['clientes', 'testimonios', 'reseñas', 'opiniones', 'reseñas de google', 'calificaciones'],
      response: `Nuestros clientes nos califican con 4.9/5 en reseñas.\n\nHan destacado nuestra entrega rápida, el diseño profesional, la integración de automatización, el SEO local y el soporte durante todo el proceso.\n\nTrabajamos con negocios en Venezuela, Estados Unidos y España.`,
    },
    {
      keywords: ['bilingue', 'bilingüe', 'ingles', 'inglés', 'español', 'hispano'],
      response: `Sí, podemos desarrollar páginas web bilingües en español e inglés.\n\nEs una excelente opción si tu negocio atiende a audiencias hispanas, clientes internacionales o quieres proyectar una imagen más profesional en distintos mercados.`,
    },
    {
      keywords: ['formulario', 'formulario de contacto', 'boton whatsapp', 'botón whatsapp', 'redes sociales', 'instagram', 'facebook'],
      response: `Sí, podemos integrar un formulario de contacto, un botón de WhatsApp y enlaces a tus redes sociales.\n\nLa idea es que tus visitantes puedan contactarte de forma rápida y sencilla desde cualquier dispositivo.`,
    },
    {
      keywords: ['mantenimiento', 'soporte', 'cambios', 'actualizaciones', 'posventa', 'postventa'],
      response: `Podemos ofrecer soporte según el tipo de proyecto contratado.\n\nEl Plan Empresarial incluye soporte prioritario por 1 mes y el Plan E-Commerce por 2 meses. Para otros planes, podemos orientarte sobre las opciones de mantenimiento, cambios o actualizaciones según lo que necesites.`,
    },
  ],
};
