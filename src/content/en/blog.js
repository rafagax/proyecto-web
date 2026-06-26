// English blog-carousel copy. `categories` maps each data category to its visible label.
// `posts` overlays the visible title/excerpt per post (keyed by the data slug) with the
// EXACT current English text — it does NOT touch slugs, ids, links, images, dates or order.
export default {
  section: {
    heading: { before: 'From Our ', accent: 'Blog' },
    subtitle: 'Learn industry insights, strategies, and tips to grow your business online.',
    prevLabel: 'Previous article',
    nextLabel: 'Next article',
    indicatorLabel: 'Go to article',
    readMore: 'Read More',
    viewAll: 'View All Articles',
  },
  categories: {
    'Web Development': 'Web Development',
    SEO: 'SEO',
    'AI & Automation': 'AI & Automation',
    'E-Commerce': 'E-Commerce',
    Performance: 'Performance',
    'Web Design': 'Web Design',
  },
  posts: {
    'why-your-business-needs-website-2025': {
      title: 'Why Your Business Needs a Website in 2025',
      excerpt: 'A professional website is no longer optional—it\'s essential for business success. Learn why and how to get started.',
    },
    'local-seo-rank-number-one-city-google': {
      title: 'Local SEO: How to Rank #1 in Your City on Google',
      excerpt: 'Discover proven strategies to dominate local search results and attract customers searching for your services in your area.',
    },
    'ai-chatbots-24-7-sales-tool': {
      title: 'AI Chatbots: The 24/7 Sales Tool Your Business Is Missing',
      excerpt: 'Learn how AI chatbots can handle customer inquiries automatically, qualify leads, and increase sales while you sleep.',
    },
    'launch-online-store-7-days': {
      title: 'How to Launch an Online Store in 7 Days',
      excerpt: 'Stop leaving money on the table. Learn how to build and launch a fully functional e-commerce store in just one week.',
    },
    'web-performance-core-web-vitals': {
      title: 'Web Performance & Core Web Vitals: Why Speed Wins Customers',
      excerpt: 'Google ranks fast websites higher. Learn the metrics that matter and how to optimize your site for speed and user experience.',
    },
    'mobile-first-design-strategy': {
      title: 'Mobile-First Design: The Future of Web Development',
      excerpt: 'Over 70% of web traffic comes from mobile devices. Discover why mobile-first design is essential and how it transforms user engagement.',
    },
  },
};
