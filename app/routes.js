import { index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.jsx'),
  // English Home. Same module as `/`; the active locale is derived from the URL
  // (getLocaleFromPath) at render time, so this renders the English Home.
  route('en', 'routes/home.jsx', { id: 'home-en' }),
  // Bilingual Services index (same module; locale derived from the URL).
  route('servicios', 'routes/services.jsx', { id: 'services-es' }),
  route('en/services', 'routes/services.jsx', { id: 'services-en' }),
  // Bilingual Web Development & Design detail (same module; locale from the URL).
  route('servicios/desarrollo-web', 'routes/service-web.jsx', { id: 'svc-web-es' }),
  route('en/services/web-development', 'routes/service-web.jsx', { id: 'svc-web-en' }),
  // Bilingual SEO / KPI / AI service details (same module each; locale from the URL).
  // The legacy /services/<slug>, /seo and /kpi URLs are 301'd in vercel.json.
  route('servicios/seo', 'routes/service-seo.jsx', { id: 'svc-seo-es' }),
  route('en/services/seo', 'routes/service-seo.jsx', { id: 'svc-seo-en' }),
  route('servicios/dashboards-kpi', 'routes/service-kpi.jsx', { id: 'svc-kpi-es' }),
  route('en/services/kpi-dashboards', 'routes/service-kpi.jsx', { id: 'svc-kpi-en' }),
  route('servicios/automatizacion-ia', 'routes/service-ai.jsx', { id: 'svc-ai-es' }),
  route('en/services/ai-automation', 'routes/service-ai.jsx', { id: 'svc-ai-en' }),
  // Bilingual core pages (same module each; locale derived from the URL). The legacy
  // English URLs (/pricing, /our-clients, /faqs, /contact) are 301'd in vercel.json.
  route('precios', 'routes/pricing.jsx', { id: 'pricing-es' }),
  route('en/pricing', 'routes/pricing.jsx', { id: 'pricing-en' }),
  route('clientes', 'routes/our-clients.jsx', { id: 'clients-es' }),
  route('en/clients', 'routes/our-clients.jsx', { id: 'clients-en' }),
  route('preguntas-frecuentes', 'routes/faqs.jsx', { id: 'faqs-es' }),
  route('en/faqs', 'routes/faqs.jsx', { id: 'faqs-en' }),
  route('contacto', 'routes/contact.jsx', { id: 'contact-es' }),
  route('en/contact', 'routes/contact.jsx', { id: 'contact-en' }),
  // Bilingual blog index + articles (same modules; locale from the URL). Slugs are
  // identical across languages.
  route('blog', 'routes/blog.jsx', { id: 'blog-es' }),
  route('en/blog', 'routes/blog.jsx', { id: 'blog-en' }),
  route('blog/:slug', 'routes/blog-post.jsx', { id: 'blog-post-es' }),
  route('en/blog/:slug', 'routes/blog-post.jsx', { id: 'blog-post-en' }),
  route('about', 'routes/home.jsx', { id: 'about' }),
  // Catch-all for unknown URLs → localized NotFound. The real HTTP 404 status is
  // served by Vercel from the prerendered /404 and /en/404 documents (vercel.json).
  route('*', 'routes/not-found.jsx'),
];
