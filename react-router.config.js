import { blogPosts } from './src/data/blogPosts.js';

/** @type {import('@react-router/dev/config').Config} */
export default {
  // SPA mode (no server runtime needed in production) ...
  ssr: false,
  // ...but prerender each known route to static HTML at build time (SSG).
  // This gives crawlers and link-preview bots (WhatsApp, FB, X, LinkedIn)
  // fully rendered HTML + correct per-route meta tags.
  async prerender() {
    return [
      '/',
      '/en',
      '/servicios',
      '/en/services',
      '/servicios/desarrollo-web',
      '/en/services/web-development',
      '/servicios/seo',
      '/en/services/seo',
      '/servicios/dashboards-kpi',
      '/en/services/kpi-dashboards',
      '/servicios/automatizacion-ia',
      '/en/services/ai-automation',
      '/precios',
      '/en/pricing',
      '/clientes',
      '/en/clients',
      '/preguntas-frecuentes',
      '/en/faqs',
      '/contacto',
      '/en/contact',
      '/blog',
      ...blogPosts.map((p) => `/blog/${p.slug}`),
    ];
  },
};
