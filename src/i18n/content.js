// Locale content bundles. Static imports only (no async/dynamic import, no
// window/document/navigator) so this is safe during prerender and in the browser.
//
// Commit 3 is additive: nothing imports this yet, and the bundles hold only a
// minimal placeholder (languageName) — no real translated content.

import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from './locale.js';
import esCommon from '../content/es/common.js';
import enCommon from '../content/en/common.js';
import esHome from '../content/es/home.js';
import enHome from '../content/en/home.js';
import esTestimonials from '../content/es/testimonials.js';
import enTestimonials from '../content/en/testimonials.js';
import esBlog from '../content/es/blog.js';
import enBlog from '../content/en/blog.js';
import esChatbot from '../content/es/chatbot.js';
import enChatbot from '../content/en/chatbot.js';
import esServices from '../content/es/services.js';
import enServices from '../content/en/services.js';
import esPricing from '../content/es/pricing.js';
import enPricing from '../content/en/pricing.js';
import esClients from '../content/es/clients.js';
import enClients from '../content/en/clients.js';
import esFaqs from '../content/es/faqs.js';
import enFaqs from '../content/en/faqs.js';
import esContact from '../content/es/contact.js';
import enContact from '../content/en/contact.js';
import esServiceSeo from '../content/es/serviceSeo.js';
import enServiceSeo from '../content/en/serviceSeo.js';
import esServiceKpi from '../content/es/serviceKpi.js';
import enServiceKpi from '../content/en/serviceKpi.js';
import esServiceAi from '../content/es/serviceAi.js';
import enServiceAi from '../content/en/serviceAi.js';

const BUNDLES = {
  es: { common: esCommon, home: esHome, testimonials: esTestimonials, blog: esBlog, chatbot: esChatbot, services: esServices, pricing: esPricing, clients: esClients, faqs: esFaqs, contact: esContact, serviceSeo: esServiceSeo, serviceKpi: esServiceKpi, serviceAi: esServiceAi },
  en: { common: enCommon, home: enHome, testimonials: enTestimonials, blog: enBlog, chatbot: enChatbot, services: enServices, pricing: enPricing, clients: enClients, faqs: enFaqs, contact: enContact, serviceSeo: enServiceSeo, serviceKpi: enServiceKpi, serviceAi: enServiceAi },
};

// Return the content bundle for a locale. Unknown/undefined locales fall back to
// the default locale's bundle.
export function getContent(locale) {
  const key = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  return BUNDLES[key];
}
