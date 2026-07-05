import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';

const STORAGE_KEY = 'cookie-consent';

// GDPR / Google Consent Mode v2 banner. Analytics + ad storage start "denied"
// (the default is set in app/root.jsx before the gtag config runs); accepting
// here flips them to "granted". The choice is remembered in localStorage, and
// root.jsx re-applies a stored "granted" on the next visit before the first hit.
const CookieBanner = () => {
  const { locale, content } = useLocalizedContent();
  const { cookies } = content.common;
  // Render nothing during prerender/SSR and until we've checked localStorage on
  // the client, so the banner never ends up in the static HTML (no hydration
  // mismatch) and only shows to visitors who haven't decided yet.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let decided;
    try {
      decided = localStorage.getItem(STORAGE_KEY);
    } catch {
      decided = 'blocked'; // localStorage unavailable (private mode): keep hidden
    }
    if (decided) return undefined; // already accepted/rejected, or blocked
    // Defer to the next frame so we don't setState synchronously inside the effect.
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // While the banner is open, hide the floating WhatsApp / chatbot bubbles so they
  // never overlap the banner text (they return as soon as the visitor decides).
  useEffect(() => {
    document.body.classList.toggle('cookie-consent-open', visible);
    return () => document.body.classList.remove('cookie-consent-open');
  }, [visible]);

  const decide = (granted) => {
    const value = granted ? 'granted' : 'denied';
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore write failures */
    }
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: value,
        analytics_storage: value,
        ad_user_data: value,
        ad_personalization: value,
      });
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label={cookies.aria}>
      <div className="cookie-banner__inner">
        <p className="cookie-banner__text">
          {cookies.message}{' '}
          <Link className="cookie-banner__link" to={getLocalizedPath('privacy', locale)}>
            {cookies.learnMore}
          </Link>
        </p>
        <div className="cookie-banner__actions">
          <button
            type="button"
            className="cookie-banner__btn cookie-banner__btn--reject"
            onClick={() => decide(false)}
          >
            {cookies.reject}
          </button>
          <button
            type="button"
            className="cookie-banner__btn cookie-banner__btn--accept"
            onClick={() => decide(true)}
          >
            {cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
