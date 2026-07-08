// English copy for the SEO & Digital Growth detail page. Images, icons, section order
// and reverse flags stay structural in SeoDigitalGrowthDetail.jsx; this holds only
// translatable text. Segmented headings use { before, accent, after }. Strings only.
export default {
  meta: {
    title: 'SEO Services — Rank Higher & Get More Clients | Webraf',
    description:
      'SEO and digital growth services designed to help businesses improve Google visibility, attract qualified traffic, and turn search intent into real opportunities.',
    ogTitle: 'SEO & Digital Growth Services for Businesses That Want to Be Found',
    schemaName: 'SEO & Digital Growth',
  },
  // Secondary-action labels for the market-aware CTAs (contract C2): English
  // pages lead with the contact form and offer WhatsApp as the alternative;
  // Spanish pages lead with WhatsApp and offer the form.
  ctaAlt: {
    whatsapp: 'Prefer WhatsApp? Chat with us',
    form: 'Prefer the contact form? Tell us about your project',
  },
  hero: {
    title: { before: 'SEO & Digital ', accent: 'Growth', after: '' },
    subtitle: 'We help your business rank higher on Google, attract qualified traffic, and turn search intent into real customers.',
    cta: 'Get a Free SEO Audit',
    alt: 'SEO analytics dashboard showing search growth',
    waQuote: "Hello, I'd like to get a free SEO audit for my business.",
  },
  sections: [
    {
      heading: { before: 'Get Found by the People Already ', accent: 'Searching', after: '' },
      copy: 'The best traffic comes from people already looking for what you offer. We optimize your website and content so the right customers find you first on Google.',
      points: ['Keyword & competitor research', 'On-page SEO optimization', 'Content built to rank', 'Higher visibility on Google'],
      cta: 'Start Ranking Higher',
      waQuote: "Hello, I'd like to start ranking higher on Google.",
      alt: 'Search analytics and keyword research on a laptop',
    },
    {
      heading: { before: "Technical SEO That's Fast and Built to ", accent: 'Rank', after: '' },
      copy: 'Search engines reward fast, well-structured sites. We fix the technical foundations so your pages load quickly, get indexed, and climb the rankings.',
      points: ['Site speed optimization', 'Clean, crawlable structure', 'Metadata & schema markup', 'Mobile-first indexing'],
      cta: 'Improve My Rankings',
      waQuote: "Hello, I'd like to improve my technical SEO and rankings.",
      alt: 'Technical SEO performance and search ranking improvements',
    },
    {
      heading: { before: 'Dominate Local Search in ', accent: 'Your Area', after: '' },
      copy: 'If your customers are nearby, local SEO puts your business on the map. We optimize your local presence so you show up when people search for services near them.',
      points: ['Google Business Profile optimization', 'Local keyword targeting', 'Maps & local pack ranking', 'Reviews & reputation signals', 'Location-based content'],
      cta: 'Boost My Local SEO',
      waQuote: "Hello, I'd like to boost my local SEO.",
      alt: 'Local search growth and performance analytics',
    },
  ],
  capabilities: {
    heading: { before: 'Everything Your SEO Needs to ', accent: 'Grow', after: '' },
    copy: 'Strategy, content, and technical expertise working together to grow your visibility, traffic, and qualified leads.',
    items: [
      { title: 'Keyword Research', text: 'We find the terms your customers actually search so you target real demand.' },
      { title: 'On-Page SEO', text: 'Optimized titles, headings, content, and internal links built to rank.' },
      { title: 'Technical SEO', text: 'Fast, crawlable, well-structured pages that search engines reward.' },
      { title: 'Local SEO', text: 'Show up on Google Maps and the local pack for customers near you.' },
      { title: 'Content Strategy', text: 'A content plan that attracts qualified traffic and builds authority.' },
      { title: 'Analytics & Tracking', text: 'Clear reporting so you see rankings, traffic, and results over time.' },
    ],
    cta: 'Grow My Organic Traffic',
    waQuote: "Hello, I'd like to grow my organic traffic with SEO.",
  },
  why: {
    heading: { before: 'Why Work With Our ', accent: 'SEO Team?', after: '' },
    copy: 'We combine strategy, technical expertise, and content to grow your visibility — focused on real results: more traffic, more leads, more sales. Our process is transparent and built around your goals.',
    cta: "Let's Talk About Your Growth",
    waQuote: "Hello, I'd like to talk about growing my business with SEO.",
    points: ['Personalized strategy from audit to results', 'White-hat, sustainable SEO methods', 'Clear, transparent reporting', 'Focus on traffic that actually converts', 'Built for long-term organic growth'],
  },
  process: {
    heading: { before: 'Our ', accent: 'SEO Process', after: '' },
    steps: [
      { title: 'SEO Audit', text: 'We analyze your site, competitors, and current visibility to find opportunities.' },
      { title: 'Keyword Research', text: 'We map the search terms and intent that bring qualified customers.' },
      { title: 'On-Page & Technical', text: 'We optimize content, structure, speed, and metadata to rank.' },
      { title: 'Local & Content', text: 'We strengthen local presence and publish content that attracts traffic.' },
      { title: 'Track & Report', text: 'We measure rankings, traffic, and leads — and keep improving.' },
    ],
    cta: 'Start the Process',
    waQuote: "Hello, I'd like to start the SEO process for my business.",
  },
  finalCta: {
    heading: { before: 'Ready to Rank Higher and ', accent: 'Grow Your Traffic?', after: '' },
    copy: "Let's build an SEO strategy that gets your business found, drives qualified traffic, and turns searches into customers.",
    primary: 'Get a Free SEO Audit',
    primaryWaQuote: "Hello, I'd like to get a free SEO audit for my business.",
    secondary: 'Contact Us Today',
  },
  otherHeading: { before: 'Explore Our Other ', accent: 'Services', after: '' },
  otherLearnMore: 'Learn more',
  others: [
    { title: 'Web Development & Design', short: 'Premium websites built for speed, trust, and conversions.' },
    { title: 'KPI Dashboards & Analytics', short: 'Track leads, sales, and business performance with clarity.' },
    { title: 'AI Automation & Chatbots', short: 'Automate replies, qualify leads, and support customers 24/7.' },
  ],
};
