// English FAQ copy (page + FAQPage JSON-LD source). Exact current text. The visible
// questions/answers and the structured data both read from `categories`, so they stay
// in sync. Plain strings only — no functions/JSX.
export default {
  meta: {
    title: 'Frequently Asked Questions — Web, SEO, KPI & AI | Webraf',
    description:
      'Answers to common questions about web development, SEO, KPI dashboards, AI automation, pricing, and our process.',
    ogTitle: 'FAQs | Webraf',
    ogDescription: 'Clear answers about our web development, SEO, KPI dashboards and AI automation services, plus pricing and process.',
  },
  hero: {
    eyebrow: 'Got Questions?',
    title: { before: 'Frequently Asked ', accent: 'Questions', after: '' },
    subtitle:
      "Clear answers about our web development, SEO, KPI dashboards, and AI automation services — plus pricing and how we work. Can't find your answer? Reach out and we'll help.",
  },
  cta: {
    heading: { before: 'Still have ', accent: 'questions?', after: '' },
    copy: "Our team is happy to answer anything you'd like to know. Reach out on WhatsApp or book a free strategy session.",
    whatsapp: 'Chat on WhatsApp',
    sendMessage: 'Send a Message',
    waQuote: 'Hello! I have some questions about your services.',
  },
  categories: [
    {
      category: 'Web Development & Design',
      items: [
        { question: 'How long does it take to build a professional website?', answer: 'Most professional websites are ready in about 7 days or less, depending on the number of pages and how much of your content is prepared. Larger projects with custom features or e-commerce can take a little longer. We agree on a clear timeline before we start and keep you updated at every phase.' },
        { question: 'What makes a premium website different from a basic website?', answer: 'A premium website is built around your business goals rather than a generic template. It loads fast, works flawlessly on every device, communicates your value clearly, and is structured to guide visitors toward contacting you. The difference shows in performance, trust, and the quality of the leads it generates.' },
        { question: 'Will my website be mobile-friendly?', answer: 'Yes. Every site we build is designed mobile-first, so it looks sharp and works smoothly on phones, tablets, and desktops. Since most visitors browse on mobile, we treat the mobile experience as a priority, not an afterthought.' },
        { question: 'Can you connect WhatsApp, forms, or booking links?', answer: 'Absolutely. We set up contact forms, click-to-chat WhatsApp links, and booking or calendar links so visitors can reach you in the way that suits them best. Capturing leads cleanly is part of every build.' },
      ],
    },
    {
      category: 'SEO & Digital Growth',
      items: [
        { question: 'How long does SEO take to show results?', answer: 'SEO is a medium-term investment. Early improvements in structure and visibility can appear within the first weeks, while stronger, more competitive results typically build over a few months. We focus on steady, durable growth rather than short-lived spikes.' },
        { question: 'Do you guarantee first-page rankings?', answer: "No reputable provider can guarantee a specific ranking, because search results depend on factors outside anyone's control. What we can do is apply proven, up-to-date SEO practices designed to improve your visibility and help you compete for the searches that matter most to your business." },
        { question: 'Can you help my business appear in local searches?', answer: 'Yes. Local SEO is one of our core strengths. We optimize your website and local signals so your business is easier to find when nearby customers search for the services you offer.' },
        { question: 'What is included in your SEO service?', answer: 'Our SEO service includes an audit and opportunity analysis, keyword and competitor research, on-page and technical improvements, local SEO, a content strategy for growth, and performance tracking so you can see how your visibility is developing.' },
      ],
    },
    {
      category: 'KPI Dashboards & Analytics',
      items: [
        { question: 'What KPIs should my business track?', answer: 'It depends on your goals, but most businesses benefit from tracking leads, sales, conversion rate, traffic sources, and campaign performance. During setup we help you identify the handful of metrics that genuinely drive your decisions, so your dashboard stays clear instead of cluttered.' },
        { question: 'Can you track leads, sales, and marketing performance?', answer: "Yes. We build dashboards that bring leads, sales, and marketing results into one clear view, so you can see what's working and where to focus without digging through separate tools." },
        { question: 'Do I need a dashboard if I already have Google Analytics?', answer: "Google Analytics is powerful but not always easy to act on. A KPI dashboard distills the numbers that matter for your business into a clear, owner-friendly view — often combining website data with leads and sales that Analytics alone doesn't capture." },
        { question: 'Can dashboards be customized to my business?', answer: "Yes. Every dashboard is built around your specific goals, data sources, and the way you like to review performance. It's tailored to your business, not a fixed template." },
      ],
    },
    {
      category: 'AI Automation & Chatbots',
      items: [
        { question: 'What can an AI chatbot do for my business?', answer: 'An AI chatbot can answer common questions instantly, qualify leads, share information about your services, collect contact details, and guide prospects toward booking or buying — at any hour, without you having to reply manually.' },
        { question: 'Can an AI agent reply on WhatsApp?', answer: 'Yes. WhatsApp automation is one of the most popular setups we build. Your AI agent can respond to inquiries in seconds, handle frequently asked questions, and keep conversations moving even outside working hours.' },
        { question: 'Can the chatbot book appointments or qualify leads?', answer: 'Yes. We design flows that qualify leads by asking the right questions and can handle appointment requests, so the conversations that reach you are already organized and ready to act on.' },
        { question: 'What happens if the AI cannot answer a question?', answer: 'We build in a clear escalation path. When a question falls outside what the AI should handle, the conversation is handed over to a human, so customers always receive a proper answer.' },
      ],
    },
    {
      category: 'Pricing & Process',
      items: [
        { question: 'Do you offer a free audit?', answer: 'Yes. We offer a free, no-obligation audit where we review your current website or digital presence and highlight practical opportunities to improve. It is a useful starting point whether or not you decide to work with us.' },
        { question: 'What happens during the strategy session?', answer: 'We learn about your business and goals, review your current situation, and outline the most effective approach for you. You leave with clear next steps and a realistic understanding of timelines and scope.' },
        { question: 'Can I start with one service and add more later?', answer: 'Absolutely. Many clients start with a website and later add SEO, KPI dashboards, or AI automation as they grow. Each service works well on its own and even better as part of a connected system.' },
        { question: 'Do you offer support after launch?', answer: "Yes. We stay available after launch for updates, fixes, and improvements. We don't disappear once your project goes live." },
      ],
    },
  ],
};
