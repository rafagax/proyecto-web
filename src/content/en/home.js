// English Home page copy.
// Segmented headings store the gradient part under an `accent` key (or accent1/accent2
// for the hero). Concatenating the segment values reconstructs the exact visible text;
// no HTML/JSX is stored here. Mirrors the current visible English text exactly.
export default {
  cta: {
    freeAudit: 'Get Your Free Audit',
  },

  hero: {
    title: {
      before: 'Web Development, ',
      accent1: 'AI Automation',
      middle: ', SEO & ',
      accent2: 'KPI Dashboards',
    },
    subtitle:
      'We build your professional website, optimize your Google ranking, and automate your sales with AI, while structuring your key metrics (KPIs) so you maintain total control over your growth in real time.',
    imageAlt: 'Web development, AI automation, SEO and KPI dashboards illustration',
    cards: {
      web: { tagline: 'Premium websites built to convert' },
      seo: { tagline: 'Get found and attract qualified traffic' },
      kpi: { tagline: 'Track the numbers that matter' },
      ai: { tagline: 'Respond faster, 24/7' },
    },
    form: {
      phonePlaceholder: 'Your phone number',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'What service do you need or why are you contacting us?',
    },
  },

  value: {
    title: { before: 'Your Website Should Do ', accent: 'More Than Look Good', after: '' },
    description:
      'A premium website should attract the right audience, convert visitors into qualified leads, and give you clear insight into what is working. We combine design, SEO, performance tracking, and AI automation to create a digital presence built for measurable growth.',
  },

  featured: {
    title: { before: 'A fast, premium website built to ', accent: 'convert', after: '' },
    description:
      'We design and develop responsive websites that communicate your value clearly, build trust, and guide visitors toward action.',
    imageAlt: 'Premium corporate website design on screen',
    imageCaption: 'Premium corporate websites',
    bullets: [
      'Custom design tailored to your brand',
      'Fast, mobile-first development',
      'Clear calls to action for more enquiries',
    ],
    cta: 'Explore Web Development',
  },

  servicesGrid: {
    web: {
      description:
        'High-end, responsive websites designed to build trust, convert visitors, and support long-term business growth.',
      highlight: 'Built fast — ready in 7 days or less',
    },
    seo: {
      description:
        'Improve your visibility on Google, attract qualified traffic, and turn search intent into real business opportunities.',
      highlight: 'Optimized to compete in local search',
    },
    kpi: {
      description:
        'Get clear dashboards and performance insights so you always know what is working and where to improve.',
      highlight: "Know what's working, in real time",
    },
    ai: {
      description:
        'Engage leads, answer questions, and support customers 24/7 with intelligent AI-powered automation.',
      highlight: 'A 24/7 AI agent working for you',
    },
    cta: 'Explore All Our Services',
  },

  system: {
    title: { before: 'Not Just a Website. ', accent: 'A Digital Growth System.', after: '' },
    description:
      'Your website, SEO, KPIs, and automation should not work separately. We connect them into one clear system designed to attract better visitors, generate more leads, and help you make smarter business decisions.',
    cta: 'Discover the System',
    diagram: { center: 'SYSTEM', web: 'Web Design', seo: 'SEO', kpi: 'KPI Dashboards', ai: 'AI Automation' },
  },

  build: {
    eyebrow: 'What We Build',
    title: { before: 'Everything Your Digital Presence Needs to ', accent: 'Grow', after: '' },
    seo: {
      title: { before: 'Improve visibility and attract ', accent: 'qualified traffic', after: '' },
      description:
        'We optimize your website and search presence so the right people can find your business when they are actively looking for your services.',
      bullets: [
        'Local and organic SEO strategy',
        'Keyword and competitor research',
        'On-page and technical SEO foundations',
      ],
      imageAlt: 'SEO and digital growth — search visibility and qualified traffic',
      cta: 'Explore SEO & Growth',
    },
    ai: {
      title: { before: 'Respond faster with ', accent: 'intelligent automation', after: '' },
      description:
        'We build AI-powered chat and WhatsApp systems that answer questions, qualify leads, and support customers around the clock.',
      bullets: [
        'Instant replies for common questions',
        'Lead qualification and appointment flows',
        'Custom responses trained on your business',
      ],
      mockupAria: 'WhatsApp chat showing an AI assistant answering a customer and booking an appointment',
      mockup: {
        assistant: 'AI Assistant',
        online: 'online',
        msg1: 'Hi! Do you have availability this week? 👋',
        msg2: 'Yes! I can book you for Thursday at 3pm. Shall I confirm it? ✅',
        msg3: "Great — you're booked. Here's a quick price list meanwhile 📋",
      },
      cta: 'Explore AI Automation',
    },
    kpi: {
      title: { before: 'Track the numbers that ', accent: 'actually matter', after: '' },
      description:
        'We create clear dashboards that help you understand leads, sales, website performance, and marketing results without confusion.',
      bullets: [
        'Lead and sales tracking',
        'Marketing performance visibility',
        'Clear reports for better decisions',
      ],
      imageAlt: 'Customer support call center team monitoring business KPIs',
      cta: 'Explore KPI Dashboards',
    },
  },

  process: {
    eyebrow: 'How It Works',
    title: { before: 'From First Idea to Website Launch — in ', accent: '3 Simple Steps', after: '' },
    subtitle:
      'A clear, guided process that turns your idea into a professional website ready to attract customers and grow your business.',
    steps: {
      discover: {
        title: 'Discover',
        text: 'We learn about your business, your goals and the customers you want to reach. Then we define the right structure, content and strategy for your website.',
      },
      build: {
        title: 'Build',
        text: 'We design and develop a fast, mobile-first website with clear messaging, strong visuals and SEO-ready foundations — built to look professional from day one.',
      },
      launch: {
        title: 'Launch & Improve',
        text: 'Your website is ready to go live in 7 days or less. We publish it, connect the essentials and stay available for updates, fixes and improvements as your business grows.',
      },
    },
    cta: 'Start Your Project',
  },

  benefits: {
    eyebrow: 'Why Choose Us',
    title: { before: 'What You Actually ', accent: 'Get', after: '' },
    subtitle:
      'No vague promises — just a clear, reliable web solution built to help your business look professional, load fast, and convert better.',
    items: {
      fast: {
        title: 'Fast-Loading Websites',
        text: "Optimized structure, clean code and lightweight pages so your visitors don't wait — and Google can reward better performance.",
      },
      responsive: {
        title: 'Responsive Design',
        text: 'Your website will look sharp and work smoothly on mobiles, tablets and desktops, where most customers actually browse.',
      },
      seoReady: {
        title: 'SEO-Ready Structure',
        text: 'Clean headings, metadata, semantic HTML and performance best practices to help your business get discovered online.',
      },
      deliveryProcess: {
        title: 'Clear Delivery Process',
        text: "You always know what's being built, what comes next and when each phase will be delivered. No confusion, no surprises.",
      },
      conversion: {
        title: 'Conversion-Focused Layouts',
        text: 'Every section is designed with a purpose: guide visitors, build trust and turn interest into real enquiries.',
      },
      support: {
        title: 'Support After Launch',
        text: "We don't disappear after publishing. You get help with fixes, updates and improvements to keep your website running smoothly.",
      },
    },
  },

  finalCta: {
    title: { before: 'Ready to Build a ', accent: 'Smarter Digital Presence?', after: '' },
    description:
      "Book your free audit and strategy session today. We'll identify local search opportunities, audit site speed, and outline a custom digital growth blueprint for your business.",
    contact: { whatsappLabel: 'WhatsApp', emailLabel: 'Email', locationLabel: 'Location' },
  },

  pricing: {
    eyebrow: 'Transparent Pricing',
    title: { before: 'Professional websites starting from ', accent: '$299', after: '' },
    description:
      "Simple, transparent pricing with no hidden fees. Start with a one-time build and add monthly SEO, management, or AI services whenever you're ready.",
    cta: 'See Plans & Pricing',
  },

  contactForm: {
    eyebrow: 'Final Step',
    title: { before: 'Ready for a system that ', accent: 'sells for you?', after: '' },
    description:
      "Let's talk about your project. In your free consultation we'll dig into your current needs and map out the best digital strategy to accelerate your growth — no strings attached.",
    name: { label: 'Full Name', placeholder: 'Your name' },
    email: { label: 'Email Address', placeholder: 'you@email.com' },
    phone: { label: 'Phone Number', placeholder: 'Your phone number' },
    message: { label: 'Message', placeholder: 'Tell us a bit about your project...' },
    submit: 'Get My Free Digital Strategy',
  },

  whatsapp: {
    advisory: 'Hello, I would like to get a free advisory session for my business.',
    audit: 'Hello, I would like to request a free audit for my business.',
    system: 'Hello, I would like to learn more about your Digital Growth System.',
    project: 'Hello, I would like to start my website project.',
    auditStrategy: 'Hello, I would like to request a free audit and strategy session.',
  },
};
