// English clients copy. Client names, businesses, locations, initials, colors and
// website URLs stay in OurClients.jsx (not translated). Rating percentages and stat
// values also stay structural. This module holds only translatable text, merged by
// index for `clients`. Plain strings only — no functions/JSX.
export default {
  meta: {
    title: 'Case Studies & Client Reviews — Real Projects | Webraf',
    description:
      'Three real client projects — problem, solution and result — plus reviews from businesses we have helped with web development, SEO and AI automation.',
    ogTitle: 'Case Studies & Client Reviews | Webraf',
    ogDescription: 'Real projects, real results: case studies and reviews from businesses we have helped grow online.',
  },
  hero: {
    badge: 'Case Studies',
    title: { before: 'Real projects, ', accent: 'real results', after: '' },
    subtitle: 'How we help small businesses and professionals win clients online — from the problem to the result.',
    overallLabel: 'Overall Review Rating',
    ratingCategories: ['Quality', 'Schedule', 'Cost', 'Willing to Refer'],
    stats: ['Google Rating', 'Happy Clients', 'Countries Served', 'Satisfaction Rate'],
  },
  // Case studies (matched by index with CASE_STUDIES in OurClients.jsx:
  // doctor, lawyer, swimwear shop). `metric` renders as a highlighted line only
  // when non-empty — leave '' until the owner provides REAL numbers.
  caseStudies: {
    heading: { before: 'Case ', accent: 'studies', after: '' },
    subtitle: 'Three real client projects: the problem they came with, what we built, and where they are now.',
    labels: { problem: 'Problem', solution: 'Solution', result: 'Result' },
    liveButton: 'View live site',
    items: [
      {
        service: 'Medical website + local SEO',
        problem:
          'Parents searching for a paediatric gastroenterologist in Aragua could not find reliable information about the practice: services, location and appointment details lived only on social media and word of mouth.',
        solution:
          'A professional medical website that organises the services, credentials and contact channels of the practice, optimised for local searches in her specialty.',
        result:
          'The practice now appears among the top Google results for her specialty in Aragua — parents find it and book consultations directly from search.',
        metric: '', // TODO: owner — real figures (monthly visits, appointments coming from the site)
      },
      {
        service: 'Corporate website',
        problem:
          'The law firm had no online presence of its own: prospective clients could not verify its track record or practice areas before making first contact.',
        solution:
          'A sober corporate website presenting the firm’s practice areas, profile and contact channels, designed to convey professional trust.',
        result:
          'The firm now has a verifiable professional presence that backs up every referral and business contact.',
        metric: '', // TODO: owner — real figures (enquiries received through the site)
      },
      {
        service: 'Online shop',
        problem:
          'The swimwear brand sold only through social media: the catalogue was hard to browse, orders were handled by hand, and there was no storefront of its own to reach new customers.',
        solution:
          'An online shop with the collection organised as an easy-to-browse catalogue and a direct ordering channel, with a visual design true to the brand.',
        result:
          'A catalogue customers can browse at any hour, extending the brand’s reach beyond its social media following.',
        metric: '', // TODO: owner — real figures (orders/sales coming from the site)
      },
    ],
  },
  testimonials: {
    heading: { before: 'What our clients ', accent: 'say', after: '' },
    subtitle: 'Businesses from Venezuela, the USA and Spain trust us to build their digital presence.',
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
