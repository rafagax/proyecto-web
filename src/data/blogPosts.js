import imgBusinessWebsite from '../assets/blog-business-website.webp';
import imgLocalSeo from '../assets/blog-local-seo-google.webp';
import imgAiChatbots from '../assets/blog-ai-chatbots.webp';
import imgOnlineStore from '../assets/blog-online-store.webp';
import imgWebPerformance from '../assets/blog-web-performance.webp';
import imgMobileFirst from '../assets/blog-mobile-first.webp';

// `date` is the human-readable display string (localized copies live in
// src/content/{en,es}/blog.js). `dateISO` / `dateModifiedISO` are the canonical
// ISO 8601 dates used for JSON-LD (datePublished/dateModified) and sitemap lastmod.
// `ogImage` is the 1200x630 JPG cover for social scrapers (webp is not rendered by
// WhatsApp/LinkedIn) — regenerate with scripts/gen-blog-og.mjs.
export const blogPosts = [
  {
    id: 1,
    slug: 'why-your-business-needs-a-website',
    title: 'Why Your Business Needs a Website in 2026',
    excerpt: 'A professional website is no longer optional—it\'s essential for business success. Learn why and how to get started.',
    category: 'Web Development',
    date: 'June 2026',
    dateISO: '2026-06-15',
    dateModifiedISO: '2026-06-15',
    author: 'Jesús Vásquez',
    image: imgBusinessWebsite,
    ogImage: '/blog-og/why-your-business-needs-a-website.jpg',
    content: 'In 2026, your website is your digital storefront.',
  },
  {
    id: 2,
    slug: 'local-seo-rank-number-one-city-google',
    title: 'Local SEO: How to Rank #1 in Your City on Google',
    excerpt: 'Discover proven strategies to dominate local search results and attract customers searching for your services in your area.',
    category: 'SEO',
    date: 'May 2026',
    dateISO: '2026-05-15',
    dateModifiedISO: '2026-05-15',
    author: 'Jesús Vásquez',
    image: imgLocalSeo,
    ogImage: '/blog-og/local-seo-rank-number-one-city-google.jpg',
    content: 'Local SEO is the fastest way to attract customers.',
  },
  {
    id: 3,
    slug: 'ai-chatbots-24-7-sales-tool',
    title: 'AI Chatbots: The 24/7 Sales Tool Your Business Is Missing',
    excerpt: 'Learn how AI chatbots can handle customer inquiries automatically, qualify leads, and increase sales while you sleep.',
    category: 'AI & Automation',
    date: 'April 2026',
    dateISO: '2026-04-15',
    dateModifiedISO: '2026-04-15',
    author: 'Jesús Vásquez',
    image: imgAiChatbots,
    ogImage: '/blog-og/ai-chatbots-24-7-sales-tool.jpg',
    content: 'Imagine having a sales team that never sleeps.',
  },
  {
    id: 4,
    slug: 'launch-online-store-7-days',
    title: 'How to Launch an Online Store in 7 Days',
    excerpt: 'Stop leaving money on the table. Learn how to build and launch a fully functional e-commerce store in just one week.',
    category: 'E-Commerce',
    date: 'March 2026',
    dateISO: '2026-03-15',
    dateModifiedISO: '2026-03-15',
    author: 'Jesús Vásquez',
    image: imgOnlineStore,
    ogImage: '/blog-og/launch-online-store-7-days.jpg',
    content: 'E-commerce is essential for your business.',
  },
  {
    id: 5,
    slug: 'web-performance-core-web-vitals',
    title: 'Web Performance & Core Web Vitals: Why Speed Wins Customers',
    excerpt: 'Google ranks fast websites higher. Learn the metrics that matter and how to optimize your site for speed and user experience.',
    category: 'Performance',
    date: 'February 2026',
    dateISO: '2026-02-15',
    dateModifiedISO: '2026-02-15',
    author: 'Jesús Vásquez',
    image: imgWebPerformance,
    ogImage: '/blog-og/web-performance-core-web-vitals.jpg',
    content: 'Speed is a ranking factor and drives conversions.',
  },
  {
    id: 6,
    slug: 'mobile-first-design-strategy',
    title: 'Mobile-First Design: The Future of Web Development',
    excerpt: 'Over 70% of web traffic comes from mobile devices. Discover why mobile-first design is essential and how it transforms user engagement.',
    category: 'Web Design',
    date: 'January 2026',
    dateISO: '2026-01-15',
    dateModifiedISO: '2026-01-15',
    author: 'Jesús Vásquez',
    image: imgMobileFirst,
    ogImage: '/blog-og/mobile-first-design-strategy.jpg',
    content: 'Mobile-first design ensures your users have the best experience on any device.',
  },
];
