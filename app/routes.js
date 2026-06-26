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
  // Legacy English service-detail pages still served for SEO/KPI/AI (not yet migrated).
  // /services and /services/web-development-design are 301'd in vercel.json.
  route('services/:serviceId', 'routes/service-detail.jsx'),
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
  route('blog', 'routes/blog.jsx'),
  route('blog/:slug', 'routes/blog-post.jsx'),
  route('about', 'routes/home.jsx', { id: 'about' }),
  route('seo', 'routes/seo.jsx'),
  route('kpi', 'routes/kpi.jsx'),
  route('*', 'routes/catch-all.jsx'),
];
