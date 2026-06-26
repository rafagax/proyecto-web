// Spanish (neutral) blog-carousel copy. `categories` maps each data category to its
// Spanish label. `posts` overlays the visible title/excerpt per post (keyed by the
// data slug) — it does NOT touch slugs, ids, links, images, dates or order.
export default {
  section: {
    heading: { before: 'Desde nuestro ', accent: 'Blog' },
    subtitle: 'Aprende ideas del sector, estrategias y consejos para hacer crecer tu negocio en internet.',
    prevLabel: 'Artículo anterior',
    nextLabel: 'Artículo siguiente',
    indicatorLabel: 'Ir al artículo',
    readMore: 'Leer más',
    viewAll: 'Ver todos los artículos',
  },
  categories: {
    'Web Development': 'Desarrollo web',
    SEO: 'SEO',
    'AI & Automation': 'IA y automatización',
    'E-Commerce': 'E-Commerce',
    Performance: 'Rendimiento',
    'Web Design': 'Diseño web',
  },
  posts: {
    'why-your-business-needs-website-2025': {
      title: 'Por qué tu negocio necesita una página web en 2025',
      excerpt: 'Una página web profesional ya no es opcional: es esencial para el éxito de tu negocio. Descubre por qué y cómo empezar.',
    },
    'local-seo-rank-number-one-city-google': {
      title: 'SEO local: cómo posicionarte #1 en tu ciudad en Google',
      excerpt: 'Descubre estrategias comprobadas para dominar los resultados de búsqueda locales y atraer clientes que buscan tus servicios en tu zona.',
    },
    'ai-chatbots-24-7-sales-tool': {
      title: 'Chatbots con IA: la herramienta de ventas 24/7 que le falta a tu negocio',
      excerpt: 'Descubre cómo los chatbots con IA pueden atender consultas automáticamente, calificar clientes potenciales y aumentar tus ventas mientras duermes.',
    },
    'launch-online-store-7-days': {
      title: 'Cómo lanzar una tienda online en 7 días',
      excerpt: 'Deja de dejar dinero sobre la mesa. Aprende a crear y lanzar una tienda en línea totalmente funcional en solo una semana.',
    },
    'web-performance-core-web-vitals': {
      title: 'Rendimiento web y Core Web Vitals: por qué la velocidad gana clientes',
      excerpt: 'Google posiciona mejor los sitios rápidos. Conoce las métricas que importan y cómo optimizar tu sitio para velocidad y experiencia de usuario.',
    },
    'mobile-first-design-strategy': {
      title: 'Diseño mobile-first: el futuro del desarrollo web',
      excerpt: 'Más del 70% del tráfico web proviene de dispositivos móviles. Descubre por qué el diseño mobile-first es esencial y cómo transforma la interacción de los usuarios.',
    },
  },
};
