// English pricing copy. Prices, "popular" flags and muted-feature positions stay in
// Pricing.jsx (structural, unchanged); this module holds only translatable text.
// Plain strings only — no functions/JSX/booleans.
export default {
  meta: {
    title: 'Website Design Packages & Pricing — From $299 | Webraf',
    description:
      'Website design packages from $299 with no hidden fees. See how much a website costs for a small business, compare plans, and get started today.',
    ogTitle: 'Website Design Packages & Pricing | Webraf',
    ogDescription: 'Transparent website design packages with no hidden fees. Websites from $299, plus monthly SEO, management, and AI services.',
  },
  hero: {
    eyebrow: 'Transparent Pricing',
    title: { before: 'Website Design ', accent: 'Packages & Pricing', after: '' },
    subtitle:
      'Simple, transparent website design packages with no hidden fees. Choose the plan that best fits your business needs and start growing today.',
  },
  popularBadge: 'Most Popular',
  getStarted: 'Get Started',
  notIncludedLabel: 'Not included:',
  plans: [
    {
      name: 'Starter',
      audience: 'Perfect for freelancers & new businesses',
      features: ['5-Section Landing Page', 'Responsive Design (Mobile-First)', 'WhatsApp CTA Button', 'Contact Form', 'Google Analytics Setup', 'Delivery in 7 Days', 'Local SEO Positioning', 'Social Media Integration'],
    },
    {
      name: 'Business',
      audience: 'For growing SMEs & service businesses',
      features: ['Multi-Page Website (Up to 5 Pages)', 'Premium Responsive Design', 'Advanced SEO Optimization', 'Social Media Integration', 'Domain & Hosting for 1 Year', 'WhatsApp Chatbot', 'Google My Business Setup', 'Priority Support (1 Month)'],
    },
    {
      name: 'E-Commerce',
      audience: 'Full online store for product businesses',
      features: ['Full Online Store', 'Payment Gateway Integration', 'Admin Dashboard', 'First 20 Products Uploaded', 'Inventory Management', 'Order Tracking System', 'SEO for Products', 'Priority Support (2 Months)'],
    },
  ],
  // Trust strip under the plan cards. Only commitments already published elsewhere
  // on the site (FAQs, plan features) — no invented guarantees.
  trust: {
    items: [
      {
        title: 'Free, no-obligation audit',
        text: 'Start with a free audit of your website or digital presence — a useful starting point whether or not you decide to work with us.',
      },
      {
        title: 'No hidden fees',
        text: 'The price you see is the price you pay. We agree on a clear timeline and scope before we start.',
      },
      {
        title: 'Support after launch',
        text: "We stay available after launch for updates, fixes, and improvements. We don't disappear once your project goes live.",
      },
    ],
  },
  monthly: {
    heading: { before: 'Monthly ', accent: 'Services', after: '' },
    subtitle: 'Ongoing monthly services to keep your business growing and performing at its best.',
    perMonth: '/month',
    plans: [
      {
        name: 'SEO Optimization',
        audience: 'Rank higher on Google',
        features: ['Keyword Research & Strategy', 'On-Page Optimization', 'Content Optimization', 'Backlink Building', 'Monthly SEO Audit', 'Google Analytics Reports', '10+ Pages Optimized', 'Priority Support'],
      },
      {
        name: 'Website Management',
        audience: 'Keep your site running smoothly',
        features: ['Daily Security Monitoring', 'Automatic Backups', 'Software Updates', 'Performance Optimization', '99.9% Uptime Guarantee', 'Content Updates (Up to 5/month)', 'Bug Fixes & Support', 'Monthly Performance Report'],
      },
      {
        name: 'KPI Analytics',
        audience: 'Track what matters to your business',
        features: ['Custom Dashboard Setup', 'Sales & Revenue Tracking', 'Customer Behavior Analysis', 'Growth Metrics Dashboard', 'Department Performance KPIs', 'Real-Time Data Updates', 'Weekly Performance Reviews', 'Strategic Recommendations'],
      },
    ],
  },
  custom: {
    heading: { before: 'Need a ', accent: 'Custom Plan?', after: '' },
    copy: "Every business is unique. If none of the above plans fit your needs, let's talk and we'll build a tailored solution for you.",
    cta: 'Request a Custom Quote',
    waQuote: 'Hello! I would like a custom quote for my project.',
  },
  faqTeaser: {
    heading: { before: 'Have ', accent: 'questions?', after: '' },
    copy: 'Wondering how much a website costs for a small business? Our FAQ page covers that and the most common questions about our services and pricing.',
    cta: 'View FAQs',
  },
};
