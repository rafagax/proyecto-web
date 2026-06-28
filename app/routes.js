import { index, route } from '@react-router/dev/routes';

export default [
  // English (primary) Home at the root.
  index('routes/home.jsx'),
  // Spanish Home at /es. Same module as `/`; the active locale is derived from the
  // URL (getLocaleFromPath) at render time, so this renders the Spanish Home.
  route('es', 'routes/home.jsx', { id: 'home-es' }),
  // Bilingual Services index (same module; locale derived from the URL).
  route('services', 'routes/services.jsx', { id: 'services-en' }),
  route('es/servicios', 'routes/services.jsx', { id: 'services-es' }),
  // Bilingual Web Development & Design detail (same module; locale from the URL).
  route('services/web-development', 'routes/service-web.jsx', { id: 'svc-web-en' }),
  route('es/servicios/desarrollo-web', 'routes/service-web.jsx', { id: 'svc-web-es' }),
  // Bilingual SEO / KPI / AI service details (same module each; locale from the URL).
  route('services/seo', 'routes/service-seo.jsx', { id: 'svc-seo-en' }),
  route('es/servicios/seo', 'routes/service-seo.jsx', { id: 'svc-seo-es' }),
  route('services/kpi-dashboards', 'routes/service-kpi.jsx', { id: 'svc-kpi-en' }),
  route('es/servicios/dashboards-kpi', 'routes/service-kpi.jsx', { id: 'svc-kpi-es' }),
  route('services/ai-automation', 'routes/service-ai.jsx', { id: 'svc-ai-en' }),
  route('es/servicios/automatizacion-ia', 'routes/service-ai.jsx', { id: 'svc-ai-es' }),
  // Bilingual core pages (same module each; locale derived from the URL).
  route('pricing', 'routes/pricing.jsx', { id: 'pricing-en' }),
  route('es/precios', 'routes/pricing.jsx', { id: 'pricing-es' }),
  route('clients', 'routes/our-clients.jsx', { id: 'clients-en' }),
  route('es/clientes', 'routes/our-clients.jsx', { id: 'clients-es' }),
  route('faqs', 'routes/faqs.jsx', { id: 'faqs-en' }),
  route('es/preguntas-frecuentes', 'routes/faqs.jsx', { id: 'faqs-es' }),
  route('contact', 'routes/contact.jsx', { id: 'contact-en' }),
  route('es/contacto', 'routes/contact.jsx', { id: 'contact-es' }),
  // Bilingual blog index + articles (same modules; locale from the URL). Slugs are
  // identical across languages.
  route('blog', 'routes/blog.jsx', { id: 'blog-en' }),
  route('es/blog', 'routes/blog.jsx', { id: 'blog-es' }),
  route('blog/:slug', 'routes/blog-post.jsx', { id: 'blog-post-en' }),
  route('es/blog/:slug', 'routes/blog-post.jsx', { id: 'blog-post-es' }),
  // Standalone CEO portfolio page (opens from the footer in a new tab).
  route('jvportafolio', 'routes/jv-portfolio.jsx'),
  // Catch-all for unknown URLs → localized NotFound. The real HTTP 404 status is
  // served by Vercel from the prerendered /404 and /es/404 documents (vercel.json).
  route('*', 'routes/not-found.jsx'),
];
