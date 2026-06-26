// English blog copy: carousel UI (`section`), category labels, blog-index page
// (`index`/`indexMeta`), article page UI (`article`), and per-post fields
// (`posts`, keyed by the data slug — title/excerpt/content/date). Slugs, ids,
// images, authors and external URLs stay in src/data/blogPosts.js. Strings only.
export default {
  indexMeta: {
    title: 'Blog — Web Development, SEO & AI Insights | InversionesDigitales',
    description: 'Learn about web development, SEO strategies, AI chatbots, and digital marketing tips for your business.',
    ogTitle: 'Blog | InversionesDigitales',
    ogDescription: 'Web development, SEO, AI automation and digital marketing insights for growing businesses.',
  },
  index: {
    eyebrow: 'Insights & Tips',
    title: { before: 'Digital Solutions ', accent: 'Blog', after: '' },
    subtitle: 'Tips, insights, and strategies for growing your business online.',
    newsletter: {
      heading: 'Subscribe to Our Newsletter',
      copy: 'Get the latest web development tips and digital marketing strategies.',
      placeholder: 'Enter your email',
      button: 'Subscribe',
    },
  },
  article: {
    backToBlog: 'Back to Blog',
    ctaHeading: 'Ready to take your business online?',
    ctaCopy: "Get a professional website built in just 7 days. Let's transform your digital presence.",
    ctaButton: 'Get Started Now',
    notFound: {
      title: 'Post Not Found',
      copy: "Sorry, we couldn't find the article you're looking for.",
    },
  },
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
      content: 'In 2025, your website is your digital storefront.',
      date: 'June 2025',
    },
    'local-seo-rank-number-one-city-google': {
      title: 'Local SEO: How to Rank #1 in Your City on Google',
      excerpt: 'Discover proven strategies to dominate local search results and attract customers searching for your services in your area.',
      content: 'Local SEO is the fastest way to attract customers.',
      date: 'May 2025',
    },
    'ai-chatbots-24-7-sales-tool': {
      title: 'AI Chatbots: The 24/7 Sales Tool Your Business Is Missing',
      excerpt: 'Learn how AI chatbots can handle customer inquiries automatically, qualify leads, and increase sales while you sleep.',
      content: 'Imagine having a sales team that never sleeps.',
      date: 'April 2025',
    },
    'launch-online-store-7-days': {
      title: 'How to Launch an Online Store in 7 Days',
      excerpt: 'Stop leaving money on the table. Learn how to build and launch a fully functional e-commerce store in just one week.',
      content: 'E-commerce is essential for your business.',
      date: 'March 2025',
    },
    'web-performance-core-web-vitals': {
      title: 'Web Performance & Core Web Vitals: Why Speed Wins Customers',
      excerpt: 'Google ranks fast websites higher. Learn the metrics that matter and how to optimize your site for speed and user experience.',
      content: 'Speed is a ranking factor and drives conversions.',
      date: 'February 2025',
    },
    'mobile-first-design-strategy': {
      title: 'Mobile-First Design: The Future of Web Development',
      excerpt: 'Over 70% of web traffic comes from mobile devices. Discover why mobile-first design is essential and how it transforms user engagement.',
      content: 'Mobile-first design ensures your users have the best experience on any device.',
      date: 'January 2025',
    },
  },
};
