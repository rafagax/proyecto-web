import { blogPosts } from './src/data/blogPosts.js';

// Legacy English service-detail slugs still served as-is (not yet migrated).
// web-development-design is excluded: it now lives at /servicios/desarrollo-web
// and /en/services/web-development (and the legacy URL 301s there).
const legacyServiceDetails = [
  'seo-digital-growth',
  'kpi-dashboards',
  'ai-automation-chatbots',
];

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
      '/precios',
      '/en/pricing',
      '/clientes',
      '/en/clients',
      '/preguntas-frecuentes',
      '/en/faqs',
      '/contacto',
      '/en/contact',
      '/blog',
      '/seo',
      '/kpi',
      ...legacyServiceDetails.map((s) => `/services/${s}`),
      ...blogPosts.map((p) => `/blog/${p.slug}`),
    ];
  },
};
