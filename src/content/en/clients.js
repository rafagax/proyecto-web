// English clients copy. Client names, businesses, locations, initials, colors and
// website URLs stay in OurClients.jsx (not translated). Rating percentages and stat
// values also stay structural. This module holds only translatable text, merged by
// index for `clients`. Plain strings only — no functions/JSX.
export default {
  meta: {
    title: 'Client Testimonials — Success Stories & Reviews | Webraf',
    description:
      'See what our clients say about our web development and digital services. Real results from real businesses.',
    ogTitle: 'Client Success Stories | Webraf',
    ogDescription: 'Real results from businesses we have helped with web development, SEO, and AI automation.',
  },
  hero: {
    badge: 'Testimonials',
    title: { before: 'What Others Said', accent: 'About Us', after: '' },
    subtitle: 'Businesses from Venezuela, the USA & Spain trust us to build their digital presence.',
    overallLabel: 'Overall Review Rating',
    ratingCategories: ['Quality', 'Schedule', 'Cost', 'Willing to Refer'],
    stats: ['Google Rating', 'Happy Clients', 'Countries Served', 'Satisfaction Rate'],
  },
  card: {
    verifiedReview: 'Verified Review',
    google: 'Google',
    viewSite: 'View Site',
  },
  clients: [
    { quote: 'They transformed my fashion business with a beautiful e-commerce site. The website helped me reach customers internationally. Sales increased 150% in the first 3 months!', result: '+150% sales growth', service: 'E-Commerce Fashion' },
    { quote: 'As a pediatric gastroenterologist I needed a professional website where parents could find my services and book a consultation with confidence. The site feels trustworthy and approachable, and I now get more new patients every week.', result: 'More new patients weekly', service: 'Professional Medical Web' },
    { quote: "The team delivered a professional B2B website that clearly communicates our services. Lead generation increased significantly and we're closing more deals with serious clients.", result: '+85% qualified leads', service: 'B2B Solutions' },
    { quote: 'In 7 days I had my website up and running and receiving clients. The team was incredibly professional and handled everything I asked for.', result: '+60% more inquiries', service: 'Landing Page' },
    { quote: 'Thanks to the AI automation they implemented, I answer WhatsApp inquiries effortlessly. My sales went up 40% in the first month.', result: '+40% sales in month 1', service: 'AI Automation' },
    { quote: 'I needed a bilingual website for my Hispanic audience and they delivered perfectly. The design is clean, fast and professional. Highly recommended!', result: 'Doubled online reach', service: 'Bilingual Web' },
    { quote: 'My business visibility skyrocketed after their local SEO work. I went from being invisible online to getting 3–4 new clients per week.', result: '3–4 new clients/week', service: 'Local SEO' },
    { quote: 'I hired the service from Spain and the experience was flawless. They delivered ahead of schedule and the design exceeded my expectations.', result: 'Ahead of schedule', service: 'Professional Web' },
    { quote: "The chatbot they integrated handles clients while I sleep. It's an investment that paid for itself in less than a month.", result: 'ROI in 30 days', service: 'AI Chatbot' },
  ],
  cta: {
    heading: { before: 'Be our next ', accent: 'success story', after: '' },
    copy: "From fashion e-commerce to B2B platforms and medical practices — we've helped 60+ businesses across Venezuela, USA, and Spain transform their digital presence. Your success story could be next!",
    button: 'Schedule Free Consultation',
  },
};
