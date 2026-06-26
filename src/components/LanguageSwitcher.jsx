import { Link, useLocation } from 'react-router-dom';
import { getEquivalentPath } from '../../app/route-manifest.js';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';

// Discreet ES | EN language switcher. The active language is derived from the URL;
// each option links to the equivalent page from the route manifest (never invents a
// URL). When a language has no registered equivalent for the current page, that
// option is hidden rather than falling back to the home page. Styled inline to reuse
// the navbar's visual language without touching CSS.
export function LanguageSwitcher({ onNavigate }) {
  const { pathname } = useLocation();
  const { locale, content } = useLocalizedContent();
  const { language } = content.common;

  const options = [
    { code: 'es', label: language.codeEs, href: getEquivalentPath(pathname, 'es') },
    { code: 'en', label: language.codeEn, href: getEquivalentPath(pathname, 'en') },
  ].filter((o) => o.href);

  if (options.length === 0) return null;

  return (
    <div
      aria-label={language.switchLabel}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.92rem', lineHeight: 1 }}
    >
      {options.map((o, i) => (
        <span key={o.code} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          {i > 0 && (
            <span aria-hidden="true" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>
              |
            </span>
          )}
          <Link
            to={o.href}
            onClick={onNavigate}
            aria-current={locale === o.code ? 'page' : undefined}
            style={{
              color: locale === o.code ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              fontWeight: locale === o.code ? 700 : 500,
              textDecoration: 'none',
              letterSpacing: '0.3px',
              transition: 'color 0.3s ease',
            }}
          >
            {o.label}
          </Link>
        </span>
      ))}
    </div>
  );
}
