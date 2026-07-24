import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';
import pediatricWebsite from '../assets/pediatra.webp';
import lawyerWebsite from '../assets/abogado.webp';
import swimwearWebsite from '../assets/bikinis-orgina.webp';
import briochefWebsite from '../assets/briocheff.webp';
import farmavitalWebsite from '../assets/Farmavital.webp';
import stageMiamiWebsite from '../assets/stagemiami.webp';

// Structural client data (not translated): names, businesses, locations, initials,
// colors and website URLs. The translatable quote/result/service come from content
// and are merged by index.
const CLIENTS = [
  { name: 'Georgina Machado', business: 'Bikinis L.B. Orgina', location: 'Venezuela 🇻🇪', initial: 'B', color: '#4d94ff', website: 'https://bikinislborgina.vercel.app/' },
  { name: 'Dra. Katherine Ainslie', business: 'DragastroPedia Aragua', location: 'Aragua, Venezuela 🇻🇪', initial: 'D', color: '#0066ff', website: 'https://dragastropedia-aragua.com/' },
  { name: 'Abg. Victor Correa', business: 'Soluciones Cofer', location: 'Venezuela 🇻🇪', initial: 'S', color: '#4d94ff', website: 'https://solucionescofer.com/' },
  { name: 'Rafael Martínez', business: 'Tech Services Valencia', location: 'Valencia, Venezuela 🇻🇪', initial: 'R', color: '#0066ff' },
  { name: 'Daniela Suárez', business: 'Beauty Studio Maracay', location: 'Maracay, Venezuela 🇻🇪', initial: 'D', color: '#4d94ff' },
  { name: 'James Rodríguez', business: 'JR Consulting Group', location: 'Miami, Florida 🇺🇸', initial: 'J', color: '#0066ff' },
  { name: 'Sofia Mendez', business: "Sofia's Legal Services", location: 'Houston, Texas 🇺🇸', initial: 'S', color: '#4d94ff' },
  { name: 'Carlos Fernández', business: 'CF Digital Agency', location: 'Madrid, Spain 🇪🇸', initial: 'C', color: '#0066ff' },
  { name: 'Miguel Ángel Torres', business: 'Torres Auto Parts', location: 'Maturín, Venezuela 🇻🇪', initial: 'M', color: '#0066ff' },
];

// Recent live client projects, ordered by business priority. Structural data
// only — the translatable
// service/problem/solution/result copy lives in content/{en,es}/clients.js
// (caseStudies.items) and is merged by index.
const CASE_STUDIES = [
  {
    business: 'Stage Miami Events',
    location: 'Miami, Florida',
    website: 'https://stagemiamievents.com/',
    image: stageMiamiWebsite,
    imageWidth: 1468,
    imageHeight: 728,
    language: 'en',
    featured: true,
    contentIndex: 5,
  },
  {
    business: 'DragastroPedia Aragua',
    client: 'Dra. Katherine Ainslie',
    location: 'Aragua, Venezuela',
    website: 'https://dragastropedia-aragua.com/',
    image: pediatricWebsite,
    imageWidth: 1428,
    imageHeight: 728,
    language: 'es',
    contentIndex: 0,
  },
  {
    business: 'Soluciones Cofer',
    client: 'Abg. Victor Correa',
    location: 'Venezuela',
    website: 'https://solucionescofer.com/',
    image: lawyerWebsite,
    imageWidth: 1368,
    imageHeight: 728,
    language: 'es',
    contentIndex: 1,
  },
  {
    business: 'Briochef',
    location: 'Madrid, Spain',
    website: 'https://briochef.com/',
    image: briochefWebsite,
    imageWidth: 1514,
    imageHeight: 728,
    language: 'es',
    contentIndex: 3,
  },
  {
    business: 'FarmaVital',
    website: 'https://farmavitalgrupo.com/',
    image: farmavitalWebsite,
    imageWidth: 1468,
    imageHeight: 728,
    language: 'es',
    contentIndex: 4,
  },
  {
    business: 'Bikinis L.B. Orgina',
    client: 'Georgina Machado',
    location: 'Venezuela',
    website: 'https://bikinislborgina.vercel.app/',
    image: swimwearWebsite,
    imageWidth: 1428,
    imageHeight: 728,
    language: 'es',
    contentIndex: 2,
  },
];

// Rating bar widths and stat values (structural, identical across locales). Labels come
// from localized content, matched by index.
const ratingPct = [98, 96, 94, 99];
const statValues = ['4.9/5', '60+', '3', '100%'];

const StarRating = () => (
  <div style={{ display: "flex", gap: "2px", color: "#FFD700", marginBottom: "0.75rem" }}>
    {[1, 2, 3, 4, 5].map((i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const RatingBar = ({ label, pct }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <span style={{ minWidth: '110px', fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'right' }}>{label}</span>
    <div style={{ flex: 1, height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
      <div
        style={{
          width: `${pct}%`,
          height: '100%',
          borderRadius: '4px',
          background: 'var(--accent-gradient)',
          boxShadow: '0 0 8px rgba(77, 148, 255,0.4)',
        }}
      />
    </div>
    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-cyan)', minWidth: '36px' }}>
      {(pct / 20).toFixed(1)}
    </span>
  </div>
);

const OurClients = () => {
  const { locale, content } = useLocalizedContent();
  const t = content.clients;
  const clients = CLIENTS.map((c, i) => ({ ...c, ...t.clients[i] }));
  const studies = CASE_STUDIES.map((s) => ({ ...s, ...t.caseStudies.items[s.contentIndex] }));

  return (
    <div className="animate-fade-in">
      <style>{`
        .client-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          border-radius: 16px;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          transition: all 0.3s ease;
          text-decoration: none;
          z-index: 10;
          position: relative;
        }
        .client-link-btn:hover {
          background-color: var(--hover-bg) !important;
          border-color: var(--hover-border) !important;
          opacity: 0.95;
        }
      `}</style>

      {/* Page Header — same pattern as Blog/Contact so the mobile interior-header
          rules (.hero:has(.page-hero-title)) apply. */}
      <section className="hero clients-page-hero" style={{ minHeight: '30vh', paddingTop: '160px', paddingBottom: '2rem' }}>
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="clients-hero-eyebrow" style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--accent-cyan)', display: 'block', marginBottom: '1rem' }}>
            {t.hero.badge}
          </span>
          <h1 className="hero-title page-hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            {t.hero.title.before}<span className="text-gradient">{t.hero.title.accent}</span>{t.hero.title.after}
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '650px', margin: '0 auto' }}>
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ── Case Studies (primary content) ── */}
      <section className="section clients-projects-section">
        <div className="container">
          <h2 className="clients-projects-title">
            {t.caseStudies.heading.before}<span className="text-gradient">{t.caseStudies.heading.accent}</span>{t.caseStudies.heading.after}
          </h2>
          <p className="clients-projects-intro">
            {t.caseStudies.subtitle}
          </p>

          <h3 className="clients-projects-mobile-heading">
            {t.caseStudies.mobileHeading}
          </h3>

          <div className="case-studies-grid">
            {studies.map((s) => (
              <article key={s.website} className={`case-study-card${s.featured ? ' case-study-card--featured' : ''}`}>
                <a
                  href={s.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-study-visual"
                  aria-label={`${t.caseStudies.liveButton}: ${s.business}`}
                >
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    width={s.imageWidth}
                    height={s.imageHeight}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="case-study-visual-label">
                    {t.caseStudies.languageLabels[s.language]}
                  </span>
                </a>

                <div className="case-study-content">
                  <header className="case-study-head">
                    <span className="case-study-service">{s.service}</span>
                    <h3>{s.business}</h3>
                    {(s.client || s.location) && (
                      <p className="case-study-client">{[s.client, s.location].filter(Boolean).join(' · ')}</p>
                    )}
                  </header>

                  <p className="case-study-summary">{s.summary}</p>

                  <a
                    href={s.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary case-study-live"
                  >
                    {t.caseStudies.liveButton} <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials (secondary, below the case studies) ── */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">

          {/* Review Summary Card */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1.5rem, 4vw, 3rem)',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(77, 148, 255,0.12)',
            borderRadius: '20px',
            padding: 'clamp(1.5rem, 5vw, 3.5rem)',
            backdropFilter: 'blur(12px)',
            marginBottom: '2.5rem',
          }}>

            {/* Left — Heading */}
            <div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: '800', lineHeight: '1.15', marginBottom: '0.75rem' }}>
                {t.testimonials.heading.before}<span className="text-gradient">{t.testimonials.heading.accent}</span>{t.testimonials.heading.after}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '340px' }}>
                {t.testimonials.subtitle}
              </p>
            </div>

            {/* Right — Score + bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Overall score */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{t.hero.overallLabel}</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ fontSize: '3.5rem', fontWeight: '900', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>4.9</span>
                  </div>
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '3px', marginTop: '6px' }}>
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i <= 5 ? '#4d94ff' : 'rgba(255,255,255,0.2)'}>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {t.hero.ratingCategories.map((label, i) => (
                  <RatingBar key={label} label={label} pct={ratingPct[i]} />
                ))}
              </div>
            </div>
          </div>

          {/* Stats Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '2.5rem',
          }}>
            {t.hero.stats.map((label, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{statValues[i]}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>{label}</div>
              </div>
            ))}
          </div>

          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            textAlign: 'center',
            margin: '0 0 2rem',
          }}>
            {t.testimonials.projectsHeading}
          </h2>

          {/* Testimonial cards — min(100%, 320px) so the column never forces
              horizontal overflow on narrow phones. */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem' }}>
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="testimonial-card"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', position: 'relative' }}
              >
                <StarRating />

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>
                  &ldquo;{client.quote}&rdquo;
                </p>

                <div style={{ background: `${client.color}15`, border: `1px solid ${client.color}40`, borderRadius: '8px', padding: '8px 14px', fontSize: '0.85rem', color: client.color, fontWeight: '600' }}>
                  ✓ {client.result}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: `linear-gradient(135deg, ${client.color}, ${client.color}88)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', fontWeight: '800', color: '#fff', flexShrink: 0,
                    boxShadow: `0 0 12px ${client.color}55`,
                  }}>
                    {client.initial}
                  </div>
                  <div>
                    <p style={{ fontWeight: '700', fontSize: '0.9rem', margin: 0 }}>{client.name}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', margin: 0 }}>{client.business}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', margin: 0, opacity: 0.7 }}>{client.location}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span style={{
                    display: 'inline-block', padding: '4px 12px', borderRadius: '20px',
                    background: `${client.color}22`, color: client.color,
                    fontSize: '0.7rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em',
                  }}>
                    {client.service}
                  </span>

                  {client.website && (
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="client-link-btn"
                      style={{
                        background: `${client.color}15`,
                        color: client.color,
                        border: `1px solid ${client.color}40`,
                        '--hover-bg': `${client.color}25`,
                        '--hover-border': `${client.color}80`
                      }}
                    >
                      🔗 {t.card.viewSite}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
            {t.cta.heading.before}<span className="text-gradient">{t.cta.heading.accent}</span>{t.cta.heading.after}
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
            {t.cta.copy}
          </p>
          <Link to={getLocalizedPath('contact', locale)} className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
            {t.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurClients;
