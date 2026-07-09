import { useEffect, useRef } from 'react';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useMatches,
  useRouteError,
} from 'react-router';

import '../src/index.css';
import '../src/App.css';
import './skip-link.css';

import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Chatbot from '../src/components/Chatbot';
import CookieBanner from '../src/components/CookieBanner';
import { SITE_URL, absoluteUrl } from '../src/config/site.js';
import { BUSINESS_WHATSAPP } from '../src/config/forms.js';
import { getLocaleFromPath } from '../src/i18n/locale.js';
import { OG_IMAGE } from './og.js';

// Site-wide <link> tags (favicons). No font preconnects: the site uses system fonts
// only, so connections to Google Fonts would be opened and never used.
export const links = () => [
  // Brand favicons generated from the Webraf square logo (scripts/gen-favicons.mjs).
  // The 48px PNG doubles as Google's SERP favicon (min 48×48 required).
  { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
  { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' },
  { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
  { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-48.png' },
  // iOS home-screen icon must be a PNG (Safari ignores SVG here) — 180×180.
  { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  // Web app manifest (public/manifest.webmanifest; icons from scripts/gen-avif.mjs).
  { rel: 'manifest', href: '/manifest.webmanifest' },
];

// Localized description for the global structured data. Spanish reuses the approved
// Home description; English keeps the exact current text. Everything else (brand,
// endpoints, phone, IDs) is shared across locales.
const SCHEMA_DESCRIPTION = {
  en: 'Premium web development, SEO, KPI dashboards and AI automation for growing businesses.',
  es: 'Desarrollo web premium, automatización con IA, SEO y dashboards de KPI para atraer clientes, mejorar conversiones y acelerar tu crecimiento.',
};

// Single consolidated business entity (no physical address: the business is 100%
// remote/worldwide, so a LocalBusiness/ProfessionalService type would be wrong and
// would never validate without an address). The @id lets other schema blocks
// (e.g. BlogPosting.publisher) reference this same entity instead of duplicating it.
const orgSchema = (lang) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#org`,
  name: 'Webraf',
  url: `${SITE_URL}/`,
  description: SCHEMA_DESCRIPTION[lang] || SCHEMA_DESCRIPTION.en,
  logo: { '@type': 'ImageObject', url: absoluteUrl('/logo.png') },
  image: absoluteUrl(OG_IMAGE.path),
  email: 'contact@webraf.com',
  telephone: '+584144735431',
  areaServed: 'Worldwide',
  knowsLanguage: ['en', 'es'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+584144735431',
    email: 'contact@webraf.com',
    areaServed: 'Worldwide',
    availableLanguage: ['English', 'Spanish'],
  },
});

// Reveals .reveal / .reveal-left / .reveal-right once on viewport enter and
// staggers .reveal-card children of .reveal-group. Single IntersectionObserver,
// re-scans on route change. (Effects only run in the browser — SSG/prerender safe.)
function ScrollRevealManager() {
  const location = useLocation();
  const firstRun = useRef(true);

  useEffect(() => {
    const isNav = !firstRun.current;
    firstRun.current = false;

    // After the first page load, stop gating content behind the scroll-reveal
    // animation. Client-side navigation (e.g. switching ES/EN) remounts sections whose
    // reveal animation can't be reliably re-triggered (the content mounts a frame or
    // two after the route changes, so the IntersectionObserver misses it and the
    // sections stay stuck hidden at opacity 0). Removing `reveal-ready` from <html>
    // makes ALL current and future reveal content visible, so nothing is ever hidden
    // after a navigation. The first load still animates.
    if (isNav) {
      document.documentElement.classList.remove('reveal-ready');
      return undefined;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const simple = document.querySelectorAll(
      '.reveal:not(.is-visible), .reveal-left:not(.is-visible), .reveal-right:not(.is-visible)'
    );
    const groups = document.querySelectorAll('.reveal-group:not(.is-revealed)');
    if (!simple.length && !groups.length) return undefined;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      simple.forEach((el) => el.classList.add('is-visible'));
      groups.forEach((g) => {
        g.classList.add('is-revealed');
        g.querySelectorAll('.reveal-card').forEach((c) => c.classList.add('is-visible'));
      });
      return undefined;
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

// Skip-link copy per locale (first tabbable element on every page).
const SKIP_LINK = { en: 'Skip to content', es: 'Saltar al contenido' };

export function Layout({ children }) {
  // The document language is derived from the URL (en at the root, es under /es/).
  const { pathname } = useLocation();
  const lang = getLocaleFromPath(pathname);
  // The catch-all 404 route is noindex and shouldn't describe the business entity.
  const matches = useMatches();
  const isNotFound = matches.some((m) => m.id === 'routes/not-found');
  return (
    <html lang={lang} className="reveal-ready" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Analytics (gtag.js) — GA4 property G-NHBD8R7RQY, with Consent
            Mode v2. Analytics/ads storage default to "denied" until the visitor
            accepts via the cookie banner; a stored "granted" is re-applied here
            before the first hit so returning visitors are measured immediately.
            The dataLayer/gtag() stub and every consent/config call below stay
            INLINE (they must run before any hit); only the ~177KB gtag.js
            download is deferred (next script) so it never competes with the
            LCP. Everything queued here is replayed when the script arrives. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}" +
              "gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});" +
              "try{if(localStorage.getItem('cookie-consent')==='granted'){gtag('consent','update',{ad_storage:'granted',analytics_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});}}catch(e){}" +
              "gtag('js',new Date());gtag('config','G-NHBD8R7RQY');",
          }}
        />
        {/* Deferred gtag.js loader: inject the external script only on the first
            user interaction (pointerdown/keydown/scroll, once) or after 3.5s of
            idle, whichever comes first. PageSpeed flagged gtag.js as the largest
            unused JS at startup; deferring it frees bandwidth/CPU for the LCP
            without losing hits (they queue in dataLayer, see stub above). The
            `d` guard makes the load idempotent across the racing triggers. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var d=false;function l(){if(d)return;d=true;" +
              "var s=document.createElement('script');s.async=true;" +
              "s.src='https://www.googletagmanager.com/gtag/js?id=G-NHBD8R7RQY';" +
              "document.head.appendChild(s);}" +
              "['pointerdown','keydown','scroll'].forEach(function(e){window.addEventListener(e,l,{once:true,passive:true});});" +
              "window.setTimeout(l,3500);})();",
          }}
        />
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
        {/* No global robots directive: valid pages are indexable by default. Only the
            404 route emits robots=noindex,nofollow (app/routes/not-found.jsx). */}
        {/* og:type/og:image/og:url/og:locale are emitted per route via ogTags()
            (app/og.js) so every document carries exactly ONE of each; only the
            site-wide constants live here. */}
        <meta property="og:site_name" content="Webraf" />
        <meta name="twitter:card" content="summary_large_image" />
        <Meta />
        <Links />
        {!isNotFound && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema(lang)) }}
          />
        )}
        {/* If JS is disabled, never keep reveal content hidden */}
        <noscript>
          <style>{`.reveal,.reveal-left,.reveal-right,.reveal-card,.bar-rise,.chat-bubble{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body suppressHydrationWarning>
        <a href="#main" className="skip-link">
          {SKIP_LINK[lang] || SKIP_LINK.en}
        </a>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// Floating WhatsApp button copy per locale (prefilled message + aria label).
const WHATSAPP = {
  en: { message: "Hello, I came from your website and I'd like to ask something.", aria: 'Chat on WhatsApp' },
  es: { message: 'Hola, vengo de tu sitio web y me gustaría hacer una consulta.', aria: 'Chatear por WhatsApp' },
};

export default function App() {
  // The chatbot keeps its conversation in component state and persists across
  // navigation. Keying it by locale remounts it (fresh, in the new language) when the
  // user switches ES/EN, so a greeting captured in the previous language never lingers.
  const { pathname } = useLocation();
  const lang = getLocaleFromPath(pathname);
  const wa = WHATSAPP[lang] || WHATSAPP.en;
  return (
    <>
      <ScrollRevealManager />
      <Navbar />
      {/* id + tabIndex make <main> the skip link's focus target (app/skip-link.css). */}
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href={`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(wa.message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label={wa.aria}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.52 3.449C18.24 1.245 15.24 0 12 0C5.383 0 0 5.383 0 12C0 14.12 0.549 16.19 1.593 18.016L0 24L6.115 22.396C7.882 23.344 9.905 23.856 12 23.856C18.617 23.856 24 18.473 24 12C24 8.76 22.755 5.76 20.52 3.449ZM12 21.841C10.203 21.841 8.468 21.359 6.953 20.461L6.593 20.248L2.946 21.203L3.918 17.656L3.684 17.284C2.688 15.704 2.156 13.888 2.156 12C2.156 6.577 6.577 2.156 12 2.156C14.633 2.156 17.076 3.181 18.939 5.044C20.801 6.907 21.827 9.349 21.827 12C21.827 17.423 17.423 21.841 12 21.841ZM17.423 14.588C17.125 14.439 15.656 13.715 15.385 13.616C15.115 13.517 14.916 13.468 14.717 13.765C14.519 14.063 13.973 14.708 13.805 14.907C13.636 15.105 13.468 15.13 13.171 14.981C12.873 14.832 11.909 14.517 10.771 13.501C9.885 12.711 9.288 11.733 9.119 11.436C8.951 11.139 9.101 10.978 9.25 10.831C9.384 10.697 9.553 10.479 9.702 10.306C9.851 10.132 9.901 10.008 10 9.81C10.099 9.612 10.05 9.438 9.975 9.29C9.9 9.141 9.288 7.643 9.032 7.03C8.784 6.435 8.536 6.516 8.357 6.505C8.188 6.495 7.989 6.495 7.791 6.495C7.592 6.495 7.27 6.569 6.997 6.867C6.724 7.164 5.955 7.883 5.955 9.346C5.955 10.809 7.022 12.222 7.171 12.421C7.32 12.619 9.245 15.707 12.27 16.902C14.656 17.844 15.291 17.656 15.936 17.557C16.581 17.458 18.016 16.69 18.313 15.847C18.611 15.005 18.611 14.286 18.512 14.137C18.413 13.988 18.215 13.888 17.917 13.74Z" fill="white" />
        </svg>
      </a>
      <Chatbot key={lang} />
      <CookieBanner />
    </>
  );
}

export function HydrateFallback() {
  return null;
}

// Last-resort safety net: without this, an unhandled render/commit error (e.g. the
// browser's auto-translate feature mutating the DOM out from under React) unmounts
// the app and leaves a BLANK page. Renders inside <Layout>, self-contained on
// purpose (no Navbar/Footer — they could be the very thing that crashed).
const ERROR_COPY = {
  en: {
    title: 'Something went wrong',
    body: 'An unexpected error occurred while displaying this page. If your browser is auto-translating the site, turning translation off usually fixes it — Webraf is available natively in English and Spanish.',
    reload: 'Reload page',
    home: 'Go to homepage',
  },
  es: {
    title: 'Algo salió mal',
    body: 'Ocurrió un error inesperado al mostrar esta página. Si tu navegador está traduciendo el sitio automáticamente, desactivar la traducción suele solucionarlo — Webraf está disponible en español e inglés de forma nativa.',
    reload: 'Recargar página',
    home: 'Ir al inicio',
  },
};

export function ErrorBoundary() {
  const error = useRouteError();
  const { pathname } = useLocation();
  const lang = getLocaleFromPath(pathname);
  const t = ERROR_COPY[lang] || ERROR_COPY.en;
  if (typeof console !== 'undefined') console.error(error);
  return (
    <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '96px 24px 48px', gap: '1rem' }}>
      <h1 style={{ fontSize: '1.8rem', margin: 0 }}>{t.title}</h1>
      <p style={{ maxWidth: '46ch', color: 'var(--text-secondary)', margin: 0 }}>{t.body}</p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
        <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>
          {t.reload}
        </button>
        <a href={lang === 'es' ? '/es/' : '/'} className="btn btn-secondary">
          {t.home}
        </a>
      </div>
    </div>
  );
}
