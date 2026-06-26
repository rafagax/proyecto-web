import { blogPosts } from './src/data/blogPosts.js';

const services = [
  'web-development-design',
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
      '/services',
      '/pricing',
      '/blog',
      '/contact',
      '/our-clients',
      '/faqs',
      '/seo',
      '/kpi',
      ...services.map((s) => `/services/${s}`),
      ...blogPosts.map((p) => `/blog/${p.slug}`),
    ];
  },
};
