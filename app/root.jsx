import { useEffect } from 'react';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from 'react-router';

import '../src/index.css';
import '../src/App.css';

import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Chatbot from '../src/components/Chatbot';
import { SITE_URL, absoluteUrl } from '../src/config/site.js';
import { getLocaleFromPath } from '../src/i18n/locale.js';

// Site-wide <link> tags (favicon, font preconnects).
export const links = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
  { rel: 'apple-touch-icon', href: '/favicon.svg' },
];

// Localized descriptions for the global structured data. Spanish reuses the approved
// Home description; English keeps the exact current text. Everything else (brand,
// endpoints, phone, address, IDs) is unchanged and shared across locales.
const SCHEMA_DESCRIPTION = {
  org: {
    en: 'Premium web development, SEO, KPI dashboards and AI automation for growing businesses.',
    es: 'Desarrollo web premium, automatización con IA, SEO y dashboards de KPI para atraer clientes, mejorar conversiones y acelerar tu crecimiento.',
  },
  localBusiness: {
    en: 'Premium web development, SEO, KPI dashboards and AI automation services.',
    es: 'Desarrollo web premium, automatización con IA, SEO y dashboards de KPI para atraer clientes, mejorar conversiones y acelerar tu crecimiento.',
  },
};

const orgSchema = (lang) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'InversionesDigitales',
  url: SITE_URL,
  description: SCHEMA_DESCRIPTION.org[lang] || SCHEMA_DESCRIPTION.org.en,
  logo: absoluteUrl('/logo.png'),
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+584144735431',
    areaServed: ['VE', 'US', 'ES'],
    availableLanguage: 'English',
  },
});

const localBusinessSchema = (lang) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'InversionesDigitales',
  image: absoluteUrl('/og-image.webp'),
  description: SCHEMA_DESCRIPTION.localBusiness[lang] || SCHEMA_DESCRIPTION.localBusiness.en,
  telephone: '+584144735431',
  email: 'inversionesdigitales@hotmail.es',
  priceRange: '$299–$1500',
  areaServed: { '@type': 'GeoShape', addressCountry: ['VE', 'US', 'ES'] },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Maracay',
    addressRegion: 'Aragua',
    addressCountry: 'VE',
  },
});

// Reveals .reveal / .reveal-left / .reveal-right once on viewport enter and
// staggers .reveal-card children of .reveal-group. Single IntersectionObserver,
// re-scans on route change. (Effects only run in the browser — SSG/prerender safe.)
function ScrollRevealManager() {
  const location = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const simple = document.querySelectorAll(
      '.reveal:not(.is-visible), .reveal-left:not(.is-visible), .reveal-right:not(.is-visible)'
    );
    const groups = document.querySelectorAll('.reveal-group:not(.is-revealed)');
    if (!simple.length && !groups.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      simple.forEach((el) => el.classList.add('is-visible'));
      groups.forEach((g) => {
        g.classList.add('is-revealed');
        g.querySelectorAll('.reveal-card').forEach((c) => c.classList.add('is-visible'));
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (el.classList.contains('reveal-group')) {
            el.classList.add('is-revealed');
            el.querySelectorAll('.reveal-card').forEach((card, i) => {
              window.setTimeout(() => card.classList.add('is-visible'), Math.min(i, 8) * 40);
            });
          } else {
            el.classList.add('is-visible');
          }
          observer.unobserve(el);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    simple.forEach((el) => observer.observe(el));
    groups.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}

export function Layout({ children }) {
  // The document language is derived from the URL (es at the root, en under /en/).
  const { pathname } = useLocation();
  const lang = getLocaleFromPath(pathname);
  return (
    <html lang={lang} className="reveal-ready" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Apply the saved theme before first paint (default = dark) to avoid a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(localStorage.getItem('theme')==='light'){document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();",
          }}
        />
        {/* Failsafe: if the JS bundle hasn't taken over within 4s (slow/failed
            network), reveal all scroll-reveal content so nothing stays hidden. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.setTimeout(function(){if(!window.__appReady){document.documentElement.classList.remove('reveal-ready');}},4000);",
          }}
        />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="InversionesDigitales" />
        <meta property="og:image" content={absoluteUrl('/og-image.webp')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={absoluteUrl('/og-image.webp')} />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema(lang)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema(lang)) }}
        />
        {/* If JS is disabled, never keep reveal content hidden */}
        <noscript>
          <style>{`.reveal,.reveal-left,.reveal-right,.reveal-card,.bar-rise,.chat-bubble{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body suppressHydrationWarning>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <ScrollRevealManager />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/584144735431?text=Hello,%20I%20came%20from%20your%20website%20and%20I'd%20like%20to%20ask%20something."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.52 3.449C18.24 1.245 15.24 0 12 0C5.383 0 0 5.383 0 12C0 14.12 0.549 16.19 1.593 18.016L0 24L6.115 22.396C7.882 23.344 9.905 23.856 12 23.856C18.617 23.856 24 18.473 24 12C24 8.76 22.755 5.76 20.52 3.449ZM12 21.841C10.203 21.841 8.468 21.359 6.953 20.461L6.593 20.248L2.946 21.203L3.918 17.656L3.684 17.284C2.688 15.704 2.156 13.888 2.156 12C2.156 6.577 6.577 2.156 12 2.156C14.633 2.156 17.076 3.181 18.939 5.044C20.801 6.907 21.827 9.349 21.827 12C21.827 17.423 17.423 21.841 12 21.841ZM17.423 14.588C17.125 14.439 15.656 13.715 15.385 13.616C15.115 13.517 14.916 13.468 14.717 13.765C14.519 14.063 13.973 14.708 13.805 14.907C13.636 15.105 13.468 15.13 13.171 14.981C12.873 14.832 11.909 14.517 10.771 13.501C9.885 12.711 9.288 11.733 9.119 11.436C8.951 11.139 9.101 10.978 9.25 10.831C9.384 10.697 9.553 10.479 9.702 10.306C9.851 10.132 9.901 10.008 10 9.81C10.099 9.612 10.05 9.438 9.975 9.29C9.9 9.141 9.288 7.643 9.032 7.03C8.784 6.435 8.536 6.516 8.357 6.505C8.188 6.495 7.989 6.495 7.791 6.495C7.592 6.495 7.27 6.569 6.997 6.867C6.724 7.164 5.955 7.883 5.955 9.346C5.955 10.809 7.022 12.222 7.171 12.421C7.32 12.619 9.245 15.707 12.27 16.902C14.656 17.844 15.291 17.656 15.936 17.557C16.581 17.458 18.016 16.69 18.313 15.847C18.611 15.005 18.611 14.286 18.512 14.137C18.413 13.988 18.215 13.888 17.917 13.74Z" fill="white" />
        </svg>
      </a>
      <Chatbot />
    </>
  );
}

export function HydrateFallback() {
  return null;
}
