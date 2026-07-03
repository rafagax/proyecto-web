import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { getEquivalentPath } from '../../app/route-manifest.js';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';

// Language switcher. Two presentations, SAME link logic (getEquivalentPath — never
// invents a URL; hidden when the current page has no equivalent):
//   • variant="compact" (mobile header): a single pill showing the language you can
//     switch TO (Español on English pages, English on Spanish pages) so the option is
//     always visible with one tap.
//   • variant="full" (default, desktop + mobile menu settings row): both languages as
//     pills (English · Español) with the active one highlighted.
export function LanguageSwitcher({ onNavigate, variant = 'full' }) {
  const { pathname } = useLocation();
  const { locale, content } = useLocalizedContent();
  const { language } = content.common;

  if (variant === 'compact') {
    const other = locale === 'es' ? 'en' : 'es';
    const href = getEquivalentPath(pathname, other);
    if (!href) return null;
    const otherLabel = other === 'es' ? language.esName : language.enName; // destination autonym
    const aria = other === 'es' ? language.switchToEs : language.switchToEn;
    return (
      <Link
        to={href}
        preventScrollReset
        onClick={onNavigate}
        aria-label={aria}
        lang={other}
        className="lang-pill-compact"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          minHeight: '44px',
          padding: '0 14px',
          border: '1px solid var(--border-subtle)',
          borderRadius: '999px',
          background: 'var(--bg-card)',
          color: 'var(--text-primary)',
          fontSize: '0.85rem',
          fontWeight: 700,
          letterSpacing: '0.2px',
          textDecoration: 'none',
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        <Globe size={15} aria-hidden="true" style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
        {otherLabel}
      </Link>
    );
  }

  // Full variant: English first (primary market), then Español. The active language shows
  // as a filled pill; the other stays visible so a visitor can switch in one tap.
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
            preventScrollReset
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
