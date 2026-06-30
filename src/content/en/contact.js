// English contact copy. The contact values (phone/email/location) and the form's
// submit/validation logic stay in Contact.jsx; this module holds only translatable
// text. `form.waTemplate` uses {name}/{email}/{phone}/{message} tokens that the
// component fills in — no functions in content. Plain strings only.
export default {
  meta: {
    title: 'Contact Us — Free Web Strategy Consultation | Webraf — Web Development',
    description:
      'Ready to grow your business? Contact us for a free consultation. We usually respond within a few hours via WhatsApp, email, or phone.',
    ogTitle: 'Contact Us | Webraf — Web Development',
    ogDescription: 'Book a free consultation and strategy session for your website, SEO, KPI dashboards, or AI automation.',
  },
  hero: {
    eyebrow: "Let's Talk",
    title: { before: 'Get in ', accent: 'Touch', after: '' },
    subtitle:
      'Ready to start your project? Write to us and a professional will get back to you as soon as possible — usually within a few hours.',
  },
  info: {
    heading: { before: 'Professional Websites in ', accent: '7 Days', after: '' },
    copy:
      "Don't let another day pass without a professional online presence. Our team will analyze your needs and create a customized strategy to help you stand out and dominate your market.",
    whatsappLabel: 'WhatsApp',
    emailLabel: 'Email',
    locationLabel: 'Location',
    fastResponseTitle: 'Lightning-Fast Response',
    fastResponseBefore: 'We typically respond within ',
    fastResponseStrong: '2–4 hours',
    fastResponseAfter: " during business hours. Leave us a message and let's start building your digital empire!",
  },
  form: {
    nameLabel: 'Full Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email Address',
    emailPlaceholder: 'you@email.com',
    phoneLabel: 'Phone Number',
    phonePlaceholder: 'Your phone number',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us a bit about your project...',
    submit: 'Schedule Free Strategy Call',
    waTemplate: 'Hello, my name is {name}. My email is {email}. My phone is {phone}. My message: {message}',
  },
};
