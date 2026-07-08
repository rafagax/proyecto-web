import { blogPosts } from './src/data/blogPosts.js';
import { blogPostPath } from './app/route-manifest.js';

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
      // ES slugs are translated (route-manifest is the single source of truth),
      // so resolve each path through blogPostPath instead of reusing the EN slug.
      ...blogPosts.map((p) => blogPostPath(p.slug, 'en')),
      ...blogPosts.map((p) => blogPostPath(p.slug, 'es')),
      // Bilingual author page (Jesús Vásquez).
      '/jvportafolio',
      '/es/jvportafolio',
      // Bilingual Privacy Policy.
      '/privacy',
      '/es/privacidad',
      // Localized 404 documents — served with a real HTTP 404 by Apache/cPanel:
      // public/.htaccess points ErrorDocument at /404.html (a flat copy of
      // /404/index.html made postbuild) and scripts/generate-seo-files.mjs writes
      // build/client/es/.htaccess so /es/* errors get the Spanish 404.
      // They are NOT canonical routes and are NOT added to the sitemap.
      '/404',
      '/es/404',
    ];
  },
};
