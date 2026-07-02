// English chatbot copy. Exact current text. Interpolated contact constants are inlined
// as literals (email / location / WhatsApp number). `keywords` are the matching terms
// for English input. Plain strings only — no functions/JSX.
export default {
  ui: {
    openAria: 'Open chat',
    avatarAlt: 'Virtual Assistant Webraf',
    headerTitle: 'Virtual Assistant',
    headerSubtitle: 'Webraf',
    closeAria: 'Close chat',
    typing: 'The assistant is typing...',
    placeholder: 'Type your question here...',
    sendAria: 'Send message',
  },
  quickReplies: [
    { label: 'I want a website', value: 'I want a website' },
    { label: 'Plans & Pricing', value: 'What are the plans and pricing' },
    { label: 'Delivery Time', value: 'How long does it take' },
  ],
  fallback: `Thank you for writing to me. I can help you with information about:\n\n✅ Website creation\n✅ Starter, Business, and E-Commerce Plans\n✅ 7-day delivery\n✅ Local SEO and Google\n✅ Integrated chatbot and AI\n✅ WhatsApp, forms, and contact\n\n WhatsApp: +58 414 473 5431\n📧 Email: contact@webraf.com\n\nTell me a bit about what you need and I'll help you.`,
  intents: [
    {
      keywords: ['hi', 'hello', 'hey', 'greetings', 'help', 'info', 'information', 'assistance', 'support'],
      response: `Hello! 👋 I'm the virtual assistant for Webraf.\n\nI can help you with information about web creation, plans, pricing, 7-day delivery, local SEO, AI integration, chatbots, online stores, and contact details.\n\nWhat type of website do you need for your business?`,
    },
    {
      keywords: ['7 days', 'seven days', 'time', 'how long', 'delivery', 'fast', 'quick', 'timeline', 'deadline'],
      response: `Your web design can be ready in just 7 days, depending on the type of project, the number of sections, and the information you need to include.\n\nWe work with a fast, organized, and professional process so you can start showcasing your business on the internet as soon as possible.`,
    },
    {
      keywords: ['who are you', 'company', 'digital investments', 'about us', 'what do you do'],
      response: `We are Webraf, specialists in high-performance web design and development.\n\nWe transform your vision into a professional, modern, and strategic digital experience so your business gains presence, trust, and more sales opportunities.`,
    },
    {
      keywords: ['website', 'web site', 'web page', 'web', 'want a website', 'build website', 'create website', 'need website', 'web development'],
      response: `Excellent choice! 🚀\n\nAt Webraf we create modern, fast, and strategic websites for your business to transmit professionalism and attract more customers.\n\nWe can develop Landing Pages, Business Websites, or Online Stores in record time.\n\nWould you like to schedule a **FREE CONSULTATION** on WhatsApp to advise you on your project?\n\n Click here to chat:\nhttps://wa.me/584144735431?text=Hi+I+would+like+to+schedule+a+free+consultation`,
    },
    {
      keywords: ['services', 'what do you offer', 'include', 'benefits', 'digital solutions'],
      response: `Our services are focused on growing your brand on the internet.\n\nWe offer:\n\n✅ Professional digital presence\n✅ Fast and professional web development\n✅ Sales optimization\n✅ Local SEO positioning\n✅ WhatsApp integration\n✅ Contact forms\n✅ AI-powered chatbot\n✅ Online stores\n✅ Digital automation`,
    },
    {
      keywords: ['digital presence', 'professionalism', 'professional image', 'brand', 'trust', 'professional business'],
      response: `We develop a modern, clear, and attractive website that strengthens your business image, builds customer trust, and makes your brand transmit professionalism from the first click.\n\nA good website helps your business look more serious, competitive, and ready to sell.`,
    },
    {
      keywords: ['sales', 'increase sales', 'sell more', 'conversions', 'customers', 'attract customers'],
      response: `We apply geo-local positioning strategies and web optimization so your business gains more visibility, attracts customers in your area, appears better on Google, and increases its chances of being recommended by AI.\n\nThe goal is for your website to not only look good, but also help generate real sales contacts and opportunities.`,
    },
    {
      keywords: ['google', 'seo', 'positioning', 'search', 'appear on google', 'top results', 'local', 'local seo', 'geo local'],
      response: `Yes, we work on local SEO positioning so your business has more visibility on Google and can attract customers in your area.\n\nDepending on the plan, we can include basic or advanced local SEO optimization to improve your business structure, content, and digital presence.`,
    },
    {
      keywords: ['ai', 'artificial intelligence', 'recommended by ai', 'chatgpt', 'recommend', 'recommendation', 'ai integrated'],
      response: `Yes, we develop websites with a focus on technology and AI.\n\nA well-structured, clear, and optimized website helps your business have more chances of being understood, found, and recommended by digital tools and artificial intelligence.\n\nWe can also integrate a chatbot to answer frequently asked questions and capture customers.`,
    },
    {
      keywords: ['chatbot', 'bot', 'virtual assistant', 'automation', 'respond customers', 'whatsapp automatic', 'auto response'],
      response: `We can integrate a chatbot or virtual assistant to answer frequently asked questions, guide your customers, and help you capture opportunities even outside business hours.\n\nIt's ideal for explaining services, showing plans, sending contact details, and guiding the user to WhatsApp or a form.`,
    },
    {
      keywords: ['plans', 'pricing', 'price', 'plan', 'cost', 'how much', 'rate', 'packages', 'basic', '299', '599', '1500'],
      response: `Special offer this week only! \n\nCreate your professional website with **50% discount** and pay only **$149.99**.\n\nMake your business look more trustworthy, modern, and ready to receive customers.\n\n Take advantage of this promotion before it ends:\nhttps://wa.me/584144735431?text=Hi+I+would+like+to+take+advantage+of+the+149+offer`,
    },
    {
      keywords: ['domain', 'hosting', 'corporate email', 'server'],
      response: `Yes, we can guide you with domain and hosting.\n\nThe Business Plan includes domain and hosting for 1 year. In other plans, we can also help you manage it according to your project needs.\n\nHaving your own domain helps your business look more professional and trustworthy.`,
    },
    {
      keywords: ['whatsapp', 'contact', 'advisor', 'human', 'email', 'call', 'quote', 'schedule', 'free consultation'],
      response: `Of course, you can contact us directly for free advice.\n\n WhatsApp: +58 414 473 5431\n📧 Email: contact@webraf.com\n📍 Location: Maracay, Aragua, Venezuela\n\nYou can also message us on WhatsApp here:\nhttps://wa.me/584144735431\n\nTell us what type of website you need and we'll be happy to help.`,
    },
    {
      keywords: ['location', 'where are you', 'maracay', 'venezuela', 'aragua'],
      response: `We are located in Maracay, Aragua, Venezuela.\n\nWe can also serve remote projects for clients in Venezuela, United States, Spain, and other countries.`,
    },
    {
      keywords: ['clients', 'testimonials', 'reviews', 'opinions', 'google reviews', 'ratings'],
      response: `Our clients rate us 4.9/5 in reviews.\n\nThey have highlighted our fast delivery, professional design, automation integration, local SEO, and support throughout the process.\n\nWe work with businesses in Venezuela, United States, and Spain.`,
    },
    {
      keywords: ['bilingual', 'english', 'spanish', 'hispanic'],
      response: `Yes, we can develop bilingual websites in Spanish and English.\n\nIt's an excellent option if your business serves Hispanic audiences, international customers, or wants to project a more professional image in different markets.`,
    },
    {
      keywords: ['form', 'contact form', 'whatsapp button', 'social media', 'instagram', 'facebook'],
      response: `Yes, we can integrate a contact form, WhatsApp button, and links to your social media.\n\nThe idea is for your visitors to be able to contact you quickly and easily from any device.`,
    },
    {
      keywords: ['maintenance', 'support', 'changes', 'updates', 'after-sales'],
      response: `We can offer support depending on the type of project contracted.\n\nThe E-Commerce Plan includes priority support for 1 month. For other plans, we can guide you on maintenance, changes, or updates options according to what you need.`,
    },
  ],
};
