import { index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.jsx'),
  route('services', 'routes/services.jsx'),
  route('services/:serviceId', 'routes/service-detail.jsx'),
  route('pricing', 'routes/pricing.jsx'),
  route('blog', 'routes/blog.jsx'),
  route('blog/:slug', 'routes/blog-post.jsx'),
  route('contact', 'routes/contact.jsx'),
  route('contacto', 'routes/contact.jsx', { id: 'contact-es' }),
  route('our-clients', 'routes/our-clients.jsx'),
  route('about', 'routes/home.jsx', { id: 'about' }),
  route('faqs', 'routes/faqs.jsx'),
  route('seo', 'routes/seo.jsx'),
  route('kpi', 'routes/kpi.jsx'),
  route('*', 'routes/catch-all.jsx'),
];
