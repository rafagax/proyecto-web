// Spanish (neutral) pricing copy. Prices, "popular" flags and muted-feature
// positions stay in Pricing.jsx (structural). Same keys/order as en/pricing.js.
export default {
  meta: {
    title: 'Planes y precios — Páginas web desde $299 | Webraf — Web Development',
    description:
      'Precios simples y transparentes para páginas web, SEO, dashboards de KPI y automatización con IA. Páginas web profesionales desde $299, sin costos ocultos.',
    ogTitle: 'Planes y precios | Webraf — Web Development',
    ogDescription: 'Precios transparentes y sin costos ocultos. Páginas web desde $299, además de servicios mensuales de SEO, gestión e IA.',
  },
  hero: {
    eyebrow: 'Precios transparentes',
    title: { before: 'Planes y ', accent: 'precios', after: '' },
    subtitle:
      'Precios simples y transparentes. Sin costos ocultos. Elige el plan que mejor se adapte a las necesidades de tu negocio y empieza a crecer hoy.',
  },
  popularBadge: 'Más popular',
  getStarted: 'Empezar',
  plans: [
    {
      name: 'Inicial',
      audience: 'Perfecto para freelancers y negocios nuevos',
      features: ['Landing page de 5 secciones', 'Diseño responsivo (mobile-first)', 'Botón de WhatsApp (CTA)', 'Formulario de contacto', 'Configuración de Google Analytics', 'Entrega en 7 días', 'Posicionamiento SEO local', 'Integración de redes sociales'],
    },
    {
      name: 'Empresarial',
      audience: 'Para pymes y negocios de servicios en crecimiento',
      features: ['Página web multipágina (hasta 5 páginas)', 'Diseño responsivo premium', 'Optimización SEO avanzada', 'Integración de redes sociales', 'Dominio y hosting por 1 año', 'Chatbot de WhatsApp', 'Configuración de Google My Business', 'Soporte prioritario (1 mes)'],
    },
    {
      name: 'E-Commerce',
      audience: 'Tienda online completa para negocios de productos',
      features: ['Tienda online completa', 'Integración de pasarela de pago', 'Panel de administración', 'Primeros 20 productos cargados', 'Gestión de inventario', 'Sistema de seguimiento de pedidos', 'SEO para productos', 'Soporte prioritario (2 meses)'],
    },
  ],
  monthly: {
    heading: { before: 'Servicios ', accent: 'mensuales', after: '' },
    subtitle: 'Servicios mensuales continuos para mantener tu negocio creciendo y rindiendo al máximo.',
    perMonth: '/mes',
    plans: [
      {
        name: 'Optimización SEO',
        audience: 'Posiciónate más alto en Google',
        features: ['Investigación y estrategia de palabras clave', 'Optimización on-page', 'Optimización de contenido', 'Construcción de enlaces', 'Auditoría SEO mensual', 'Reportes de Google Analytics', '10+ páginas optimizadas', 'Soporte prioritario'],
      },
      {
        name: 'Gestión de sitio web',
        audience: 'Mantén tu sitio funcionando sin problemas',
        features: ['Monitoreo de seguridad diario', 'Copias de seguridad automáticas', 'Actualizaciones de software', 'Optimización de rendimiento', 'Garantía de disponibilidad del 99.9%', 'Actualizaciones de contenido (hasta 5/mes)', 'Corrección de errores y soporte', 'Reporte de rendimiento mensual'],
      },
      {
        name: 'Analítica de KPI',
        audience: 'Mide lo que importa para tu negocio',
        features: ['Configuración de dashboard a medida', 'Seguimiento de ventas e ingresos', 'Análisis del comportamiento del cliente', 'Dashboard de métricas de crecimiento', 'KPIs de rendimiento por departamento', 'Datos actualizados en tiempo real', 'Revisiones de rendimiento semanales', 'Recomendaciones estratégicas'],
      },
    ],
  },
  custom: {
    heading: { before: '¿Necesitas un ', accent: 'plan a medida?', after: '' },
    copy: 'Cada negocio es único. Si ninguno de los planes anteriores se ajusta a lo que necesitas, hablemos y crearemos una solución a tu medida.',
    cta: 'Solicita una cotización a medida',
    waQuote: '¡Hola! Me gustaría una cotización a medida para mi proyecto.',
  },
  faqTeaser: {
    heading: { before: '¿Tienes ', accent: 'preguntas?', after: '' },
    copy: 'Visita nuestra página de preguntas frecuentes para resolver las dudas más comunes sobre nuestros servicios y precios.',
    cta: 'Ver preguntas frecuentes',
  },
};
