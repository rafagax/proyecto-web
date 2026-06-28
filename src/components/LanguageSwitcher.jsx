import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { getEquivalentPath } from '../../app/route-manifest.js';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';

// Language switcher: a globe + a pill toggle showing BOTH languages by name
// (Español | English) with the active one highlighted as a filled pill. The active
// language is derived from the URL; each option links to the equivalent page from the
// route manifest (never invents a URL). When a language has no registered equivalent
// for the current page, that option is hidden. Styled inline to reuse the navbar's
// visuals without touching CSS. Names are autonyms (same in any locale).
export function LanguageSwitcher({ onNavigate }) {
  const { pathname } = useLocation();
  const { locale, content } = useLocalizedContent();
  const { language } = content.common;

  // English first (the primary market), then Español. The active language shows as a
  // filled pill; the other stays visible so a visitor can switch without opening a menu.
  const options = [
    { code: 'en', label: 'English', href: getEquivalentPath(pathname, 'en') },
    { code: 'es', label: 'Español', href: getEquivalentPath(pathname, 'es') },
  ].filter((o) => o.href);

  if (options.length === 0) return null;

  return (
    <div
      aria-label={language.switchLabel}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '3px 4px 3px 9px',
        border: '1px solid var(--border-subtle)',
        borderRadius: '999px',
        background: 'var(--bg-card)',
        fontSize: '0.8rem',
        lineHeight: 1,
      }}
    >
      <Globe size={15} aria-hidden="true" style={{ color: 'var(--text-secondary)', flexShrink: 0 }} />
      {options.map((o) => {
        const active = locale === o.code;
        return (
          <Link
            key={o.code}
            to={o.href}
            onClick={onNavigate}
            aria-current={active ? 'page' : undefined}
            style={{
              padding: '4px 9px',
              borderRadius: '999px',
              background: active ? 'var(--accent-cyan)' : 'transparent',
              color: active ? '#fff' : 'var(--text-secondary)',
              fontWeight: active ? 700 : 500,
              textDecoration: 'none',
              letterSpacing: '0.2px',
              whiteSpace: 'nowrap',
              transition: 'background 0.25s ease, color 0.25s ease',
            }}
          >
            {o.label}
          </Link>
        );
      })}
    </div>
  );
}
