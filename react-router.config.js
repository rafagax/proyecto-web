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
      '/es',
      '/services',
      '/es/servicios',
      '/services/web-development',
      '/es/servicios/desarrollo-web',
      '/services/seo',
      '/es/servicios/seo',
      '/services/kpi-dashboards',
      '/es/servicios/dashboards-kpi',
      '/services/ai-automation',
      '/es/servicios/automatizacion-ia',
      '/pricing',
      '/es/precios',
      '/clients',
      '/es/clientes',
      '/faqs',
      '/es/preguntas-frecuentes',
      '/contact',
      '/es/contacto',
      '/blog',
      '/es/blog',
      ...blogPosts.map((p) => `/blog/${p.slug}`),
      ...blogPosts.map((p) => `/es/blog/${p.slug}`),
      // Standalone CEO portfolio page (linked from the footer).
      '/jvportafolio',
      // Localized 404 documents — served with a real HTTP 404 by vercel.json routes.
      // They are NOT canonical routes and are NOT added to the sitemap.
      '/404',
      '/es/404',
    ];
  },
};
