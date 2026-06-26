// Spanish (neutral) contact copy. Same keys/order as en/contact.js. Contact values
// and form logic stay in Contact.jsx. `form.waTemplate` uses the same tokens.
export default {
  meta: {
    title: 'Contáctanos — Consultoría gratuita de estrategia web | InversionesDigitales',
    description:
      '¿Listo para hacer crecer tu negocio? Contáctanos para una consulta gratuita. Normalmente respondemos en pocas horas por WhatsApp, correo o teléfono.',
    ogTitle: 'Contáctanos | InversionesDigitales',
    ogDescription: 'Agenda una consulta y sesión de estrategia gratuita para tu página web, SEO, dashboards de KPI o automatización con IA.',
  },
  hero: {
    eyebrow: 'Hablemos',
    title: { before: 'Ponte en ', accent: 'contacto', after: '' },
    subtitle:
      '¿Listo para empezar tu proyecto? Escríbenos y un profesional te responderá lo antes posible — normalmente en pocas horas.',
  },
  info: {
    heading: { before: 'Páginas web profesionales en ', accent: '7 días', after: '' },
    copy:
      'No dejes pasar un día más sin una presencia profesional en internet. Nuestro equipo analizará tus necesidades y creará una estrategia personalizada para ayudarte a destacar y dominar tu mercado.',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'Correo',
    locationLabel: 'Ubicación',
    fastResponseTitle: 'Respuesta ultrarrápida',
    fastResponseBefore: 'Normalmente respondemos en ',
    fastResponseStrong: '2–4 horas',
    fastResponseAfter: ' en horario laboral. Déjanos un mensaje y ¡empecemos a construir tu imperio digital!',
  },
  form: {
    nameLabel: 'Nombre completo',
    namePlaceholder: 'Tu nombre',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'tu@correo.com',
    phoneLabel: 'Número de teléfono',
    phonePlaceholder: 'Tu número de teléfono',
    messageLabel: 'Mensaje',
    messagePlaceholder: 'Cuéntanos un poco sobre tu proyecto...',
    submit: 'Agenda tu llamada de estrategia gratis',
    waTemplate: 'Hola, mi nombre es {name}. Mi correo es {email}. Mi teléfono es {phone}. Mi mensaje: {message}',
  },
};
