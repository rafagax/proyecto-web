import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock, Languages, ExternalLink, GraduationCap, ArrowRight } from 'lucide-react';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';
import jvContent, { AUTHOR_LINKS, AUTHOR_PHOTO } from '../content/jvPortfolio.js';

// Brand icons as inline SVG (this lucide-react build does not export Linkedin/Github).
const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);
const GitHubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
  </svg>
);

// Author / E-E-A-T page for Jesús Vásquez. Bilingual (locale from the URL), indexable,
// uses the site's design tokens (--accent-cyan, --bg-card, --border-subtle, .btn) so it
// respects light/dark and stays responsive. Exactly one <h1> (the name).
export default function JvPortfolio() {
  const { locale } = useLocalizedContent();
  const t = jvContent[locale] || jvContent.en;
  const seoPath = getLocalizedPath('svc-seo', locale);
  const contactPath = getLocalizedPath('contact', locale);

  const cardStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--border-radius-md)',
    padding: '1.5rem',
  };
  const h2Style = {
    fontSize: 'clamp(1.6rem, 4vw, 2.1rem)',
    marginBottom: '1.75rem',
    color: 'var(--text-primary)',
  };
  const outlineBtn = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '11px 18px',
    borderRadius: '10px',
    border: '1px solid var(--border-subtle)',
    background: 'var(--bg-card)',
    color: 'var(--text-primary)',
    fontWeight: 600,
    textDecoration: 'none',
    fontSize: '0.95rem',
  };

  return (
    <div className="animate-fade-in">
      {/* 1 — Hero */}
      <section className="section" style={{ paddingTop: '120px', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'center' }}>
            <div style={{ flex: '0 0 auto', margin: '0 auto' }}>
              <img
                src={AUTHOR_PHOTO}
                alt={t.photoAlt}
                width="280"
                height="350"
                fetchPriority="high"
                style={{
                  width: '280px',
                  maxWidth: '72vw',
                  height: 'auto',
                  borderRadius: '18px',
                  objectFit: 'cover',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: '0 20px 55px rgba(0, 0, 0, 0.35)',
                }}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            <div style={{ flex: '1 1 360px' }}>
              <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '0 0 0.75rem', color: 'var(--text-primary)' }}>
                {t.hero.name}
              </h1>
              <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '1.05rem', margin: '0 0 1.5rem' }}>
                {t.hero.tagline}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem', color: 'var(--text-secondary)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} style={{ color: 'var(--accent-cyan)' }} /> {t.hero.badges.location}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Clock size={16} style={{ color: 'var(--accent-cyan)' }} /> {t.hero.badges.experience}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Languages size={16} style={{ color: 'var(--accent-cyan)' }} /> {t.hero.badges.languages}</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a href={AUTHOR_LINKS.linkedin} target="_blank" rel="noopener noreferrer" style={outlineBtn}>
                  <LinkedInIcon size={18} /> {t.hero.linkedin}
                </a>
                <a href={AUTHOR_LINKS.github} target="_blank" rel="noopener noreferrer" style={outlineBtn}>
                  <GitHubIcon size={18} /> {t.hero.github}
                </a>
                <Link to={contactPath} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '11px 20px' }}>
                  <Mail size={18} /> {t.hero.contact}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — About */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2 style={h2Style}>{t.about.heading}</h2>
          {t.about.paragraphs.map((p, i) => (
            <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.25rem' }}>{p}</p>
          ))}
        </div>
      </section>

      {/* 3 — Experience */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={h2Style}>{t.experience.heading}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {t.experience.roles.map((r, i) => (
              <div key={i} style={cardStyle}>
                <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.15rem', color: 'var(--text-primary)' }}>{r.title}</h3>
                <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, margin: '0 0 0.15rem' }}>{r.company}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '0 0 0.9rem' }}>{r.period}</p>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {r.bullets.map((b, j) => <li key={j} style={{ marginBottom: '0.4rem' }}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Measurable results */}
      <section className="section">
        <div className="container">
          <h2 style={{ ...h2Style, textAlign: 'center' }}>{t.results.heading}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {t.results.cards.map((c, i) => (
              <div key={i} style={{ ...cardStyle, textAlign: 'center' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-cyan)', margin: '0 0 0.5rem' }}>{c.value}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Education & credentials */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2 style={{ ...h2Style, display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <GraduationCap size={26} style={{ color: 'var(--accent-cyan)' }} /> {t.education.heading}
          </h2>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.02rem' }}>
            {t.education.items.map((e, i) => <li key={i} style={{ marginBottom: '0.4rem' }}>{e}</li>)}
          </ul>
        </div>
      </section>

      {/* 6 — Tech stack */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2 style={h2Style}>{t.stack.heading}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {t.stack.items.map((s, i) => (
              <span key={i} style={{ padding: '8px 14px', borderRadius: '999px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Verifiable links */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2 style={h2Style}>{t.links.heading}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{t.links.subtitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href={AUTHOR_LINKS.linkedin} target="_blank" rel="noopener noreferrer" style={outlineBtn}><LinkedInIcon size={18} /> {t.links.linkedin}</a>
            <a href={AUTHOR_LINKS.github} target="_blank" rel="noopener noreferrer" style={outlineBtn}><GitHubIcon size={18} /> {t.links.github}</a>
            <a href={AUTHOR_LINKS.portfolio} target="_blank" rel="noopener noreferrer" style={outlineBtn}><ExternalLink size={18} /> {t.links.portfolio}</a>
          </div>
        </div>
      </section>

      {/* 8 — Final CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.1rem)', marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.cta.heading}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>{t.cta.text}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            <Link to={seoPath} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px' }}>
              {t.cta.services} <ArrowRight size={18} />
            </Link>
            <Link to={contactPath} style={outlineBtn}>
              <Mail size={18} /> {t.cta.contact}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
