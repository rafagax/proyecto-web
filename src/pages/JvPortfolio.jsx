import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, Clock, Languages, ExternalLink, GraduationCap, ArrowRight, Pause, Play } from 'lucide-react';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';
import jvContent, { AUTHOR_LINKS, AUTHOR_PHOTO } from '../content/jvPortfolio.js';
import './JvPortfolio.css';

// Real KPI dashboards Jesús built (his name appears on each). Reused from src/assets
// (same fingerprinted module as the KPI service page — no duplication in the build).
import pagespeedShot from '../assets/pagspeeddestok.webp';
import kpiRevenue from '../assets/kpi financiero.webp';
import kpiOperations from '../assets/kpi operational.webp';
import kpiCallCenter from '../assets/kpi-call-center.webp';
import stageMiamiWebsite from '../assets/stagemiami.webp';
import pediatricWebsite from '../assets/pediatra.webp';
import lawyerWebsite from '../assets/abogado.webp';
import briochefWebsite from '../assets/briocheff.webp';
import farmavitalWebsite from '../assets/Farmavital.webp';
import swimwearWebsite from '../assets/bikinis-orgina.webp';

const PROOF_IMAGES = [kpiRevenue, kpiOperations, kpiCallCenter];

const WEBSITE_PROJECTS = [
  {
    name: 'Stage Miami Events',
    url: 'https://stagemiamievents.com/',
    image: stageMiamiWebsite,
    width: 1468,
    height: 728,
    language: 'en',
  },
  {
    name: 'DragastroPedia Aragua',
    url: 'https://dragastropedia-aragua.com/',
    image: pediatricWebsite,
    width: 1428,
    height: 728,
    language: 'es',
  },
  {
    name: 'Soluciones Cofer',
    url: 'https://solucionescofer.com/',
    image: lawyerWebsite,
    width: 1368,
    height: 728,
    language: 'es',
  },
  {
    name: 'Briochef',
    url: 'https://briochef.com/',
    image: briochefWebsite,
    width: 1514,
    height: 728,
    language: 'es',
  },
  {
    name: 'FarmaVital',
    url: 'https://farmavitalgrupo.com/',
    image: farmavitalWebsite,
    width: 1468,
    height: 728,
    language: 'es',
  },
  {
    name: 'Bikinis L.B. Orgina',
    url: 'https://bikinislborgina.vercel.app/',
    image: swimwearWebsite,
    width: 1428,
    height: 728,
    language: 'es',
  },
];

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

// Line-style glyphs for the tech cards / marquee (currentColor stroke, no dependency).
const TECH_PATHS = {
  code: (<><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>),
  js: (<><path d="M6 8l4 4-4 4" /><line x1="12" y1="16" x2="18" y2="16" /></>),
  react: (<><circle cx="12" cy="12" r="1.6" /><ellipse cx="12" cy="12" rx="10" ry="4.2" /><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" /></>),
  node: (<path d="M12 2.5l8 4.6v9.8l-8 4.6-8-4.6V7.1l8-4.6z" />),
  wp: (<><circle cx="12" cy="12" r="9.2" /><path d="M2.8 12h18.4M12 2.8c2.6 2.3 4 5.8 4 9.2s-1.4 6.9-4 9.2c-2.6-2.3-4-5.8-4-9.2s1.4-6.9 4-9.2z" /></>),
  shopify: (<><path d="M6 8h12l-1 11.5a1 1 0 0 1-1 .9H8a1 1 0 0 1-1-.9L6 8z" /><path d="M9.2 8V6.4a2.8 2.8 0 0 1 5.6 0V8" /></>),
  bi: (<><path d="M3 21h18" /><rect x="5" y="11" width="3.2" height="8" rx="1" /><rect x="10.4" y="5" width="3.2" height="14" rx="1" /><rect x="15.8" y="14" width="3.2" height="5" rx="1" /></>),
  git: (<><circle cx="6" cy="7" r="2.2" /><circle cx="6" cy="17" r="2.2" /><circle cx="17" cy="9" r="2.2" /><path d="M6 9.2v5.6M8.9 7.6C13 7.6 15 8.6 15 11.2v.4" /></>),
  seo: (<><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>),
  gauge: (<><path d="M12 13l3.5-3.5" /><path d="M3.5 18a9 9 0 1 1 17 0" /></>),
  ai: (<><path d="M12 3l1.8 4.4L18 9l-4.2 1.6L12 15l-1.8-4.4L6 9l4.2-1.6L12 3z" /><path d="M18.5 14.5l.7 1.7 1.8.7-1.8.7-.7 1.7-.7-1.7-1.8-.7 1.8-.7.7-1.7z" /></>),
};

const ICON_COLOR = {
  code: '#4d94ff', js: '#e0b400', react: '#12b5cb', node: '#3fb950', wp: '#7c5cff',
  shopify: '#7ab55c', bi: '#f5a623', git: '#f0603c', github: 'var(--text-primary)',
  seo: '#2ea043', gauge: '#e0a92e', ai: '#d857c7',
};

function TechIcon({ icon }) {
  const color = ICON_COLOR[icon] || 'var(--accent-cyan)';
  if (icon === 'github') {
    return (
      <span className="jv-tech-ico">
        <span style={{ color, display: 'flex' }}><GitHubIcon size={22} /></span>
      </span>
    );
  }
  return (
    <span className="jv-tech-ico">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {TECH_PATHS[icon] || TECH_PATHS.code}
      </svg>
    </span>
  );
}

// Small localized eyebrow labels (presentation only) for stronger visual hierarchy.
const EYEBROWS = {
  en: { about: 'Profile', exp: 'Experience', results: 'Impact', websites: 'Recent projects', perf: 'Performance', proof: 'Data & analytics', edu: 'Credentials', stack: 'Toolbox', ai: 'AI', links: 'Evidence' },
  es: { about: 'Perfil', exp: 'Experiencia', results: 'Impacto', websites: 'Proyectos recientes', perf: 'Rendimiento', proof: 'Datos y analítica', edu: 'Credenciales', stack: 'Herramientas', ai: 'IA', links: 'Evidencia' },
};

const Eyebrow = ({ children }) => <span className="jv-eyebrow">{children}</span>;

// Author / E-E-A-T page for Jesús Vásquez. Bilingual (locale from the URL), indexable,
// uses the site's design tokens (--accent-cyan, --bg-card, --border-subtle, .btn) so it
// respects light/dark and stays responsive. Exactly one <h1> (the name).
// Motion uses the site's existing scroll-reveal system (.reveal / .reveal-card, driven by
// the global IntersectionObserver) + a couple of tiny CSS loops — no libraries, and it all
// honors prefers-reduced-motion, so Core Web Vitals are unaffected.
export default function JvPortfolio() {
  const { locale } = useLocalizedContent();
  const t = jvContent[locale] || jvContent.en;
  const eb = EYEBROWS[locale] || EYEBROWS.en;
  const websiteCarouselRef = useRef(null);
  const websiteCarouselDirectionRef = useRef(1);
  const websiteCarouselInteractionPausedRef = useRef(false);
  const [isWebsiteCarouselPaused, setIsWebsiteCarouselPaused] = useState(false);
  const webPath = getLocalizedPath('svc-web', locale);
  const contactPath = getLocalizedPath('contact', locale);
  const clientsPath = getLocalizedPath('clients', locale);
  const websiteProjects = WEBSITE_PROJECTS.map((project, index) => ({
    ...project,
    ...t.webProjects.items[index],
  }));

  useEffect(() => {
    const carousel = websiteCarouselRef.current;
    if (!carousel || isWebsiteCarouselPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const advanceCarousel = () => {
      if (websiteCarouselInteractionPausedRef.current) return;

      const firstCard = carousel.querySelector('.jv-web-project');
      if (!firstCard) return;

      const styles = window.getComputedStyle(carousel);
      const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
      const step = firstCard.getBoundingClientRect().width + gap;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      if (maxScroll <= 1) return;

      let target = carousel.scrollLeft + (step * websiteCarouselDirectionRef.current);
      if (target >= maxScroll - 2) {
        target = maxScroll;
        websiteCarouselDirectionRef.current = -1;
      } else if (target <= 2) {
        target = 0;
        websiteCarouselDirectionRef.current = 1;
      }

      carousel.scrollTo({ left: target, behavior: 'smooth' });
    };

    const intervalId = window.setInterval(advanceCarousel, 2800);
    return () => window.clearInterval(intervalId);
  }, [isWebsiteCarouselPaused]);

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
    <div className="animate-fade-in jv-page">
      {/* 1 — Hero */}
      <section className="section jv-hero" style={{ paddingTop: '120px', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'center' }}>
            <div className="jv-float" style={{ flex: '0 0 auto', margin: '0 auto' }}>
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
              <span className="jv-founder-badge"><span className="jv-dot" /> {t.hero.founderBadge}</span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '0 0 0.75rem', color: 'var(--text-primary)' }}>
                {t.hero.name}
              </h1>
              <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '1.05rem', margin: '0 0 1.5rem' }}>
                {t.hero.tagline}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem', color: 'var(--text-secondary)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Globe size={16} style={{ color: 'var(--accent-cyan)' }} /> {t.hero.badges.location}</span>
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
        <div className="container reveal" style={{ maxWidth: '820px' }}>
          <Eyebrow>{eb.about}</Eyebrow>
          <h2 style={h2Style}>{t.about.heading}</h2>
          {t.about.paragraphs.map((p, i) => (
            <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.25rem' }}>{p}</p>
          ))}
        </div>
      </section>

      {/* 3 — Experience */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <Eyebrow>{eb.exp}</Eyebrow>
          <h2 style={h2Style}>{t.experience.heading}</h2>
          <div className="reveal-group" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {t.experience.roles.map((r, i) => (
              <div key={i} className="reveal-card" style={cardStyle}>
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
      <section className="section jv-results-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <Eyebrow>{eb.results}</Eyebrow>
            <h2 style={{ ...h2Style, marginBottom: 0 }}>{t.results.heading}</h2>
          </div>
          <div className="jv-metrics reveal-group">
            {t.results.cards.map((c, i) => (
              <div key={i} className="jv-metric reveal-card">
                <p className="jv-metric__value">{c.value}</p>
                <p className="jv-metric__label">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4b — Selected client websites. One DOM list: three cards on desktop,
          all six become a touch-friendly scroll-snap carousel on mobile. */}
      <section className="section jv-web-projects-section" id="website-projects" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="jv-web-projects-heading-row">
            <div>
              <Eyebrow>{eb.websites}</Eyebrow>
              <h2 style={{ ...h2Style, marginBottom: '0.6rem' }}>{t.webProjects.heading}</h2>
              <p className="jv-web-projects-intro">{t.webProjects.subtitle}</p>
            </div>
            <button
              type="button"
              className="jv-web-carousel-toggle"
              onClick={() => setIsWebsiteCarouselPaused((paused) => !paused)}
              aria-label={isWebsiteCarouselPaused ? t.webProjects.playCarousel : t.webProjects.pauseCarousel}
              title={isWebsiteCarouselPaused ? t.webProjects.playCarousel : t.webProjects.pauseCarousel}
            >
              {isWebsiteCarouselPaused ? <Play size={17} /> : <Pause size={17} />}
            </button>
          </div>

          <div
            className="jv-web-projects-grid reveal-group"
            role="region"
            aria-label={t.webProjects.carouselLabel}
            tabIndex={0}
            ref={websiteCarouselRef}
            onMouseEnter={() => { websiteCarouselInteractionPausedRef.current = true; }}
            onMouseLeave={() => { websiteCarouselInteractionPausedRef.current = false; }}
            onFocus={() => { websiteCarouselInteractionPausedRef.current = true; }}
            onBlur={() => { websiteCarouselInteractionPausedRef.current = false; }}
            onTouchStart={() => { websiteCarouselInteractionPausedRef.current = true; }}
            onTouchEnd={() => { websiteCarouselInteractionPausedRef.current = false; }}
          >
            {websiteProjects.map((project) => (
              <article key={project.url} className="jv-web-project reveal-card">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jv-web-project__visual"
                  aria-label={`${t.webProjects.visitSite}: ${project.name}`}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    width={project.width}
                    height={project.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="jv-web-project__language">
                    {t.webProjects.languageLabels[project.language]}
                  </span>
                </a>

                <div className="jv-web-project__body">
                  <span className="jv-web-project__category">{project.category}</span>
                  <h3>{project.name}</h3>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="jv-web-project__link">
                    {t.webProjects.visitSite} <ExternalLink size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="jv-web-projects-cta">
            <Link to={clientsPath} className="btn btn-secondary">
              {t.webProjects.moreButton} <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4c — Web performance proof (real PageSpeed audit) — conversion section:
          evidence that delivered sites hit sub-second loads with near-perfect scores. */}
      <section className="section jv-speed-section">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="reveal-left" style={{ flex: '1 1 380px', maxWidth: '560px' }}>
              <Eyebrow>{eb.perf}</Eyebrow>
              <h2 style={{ ...h2Style, marginBottom: '1rem' }}>{t.speed.heading}</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{t.speed.copy}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem', display: 'grid', gap: '0.6rem' }}>
                {t.speed.points.map((p) => (
                  <li key={p} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    <span aria-hidden="true" style={{ color: 'var(--accent-text, var(--accent-cyan))', fontWeight: 700 }}>✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link to={webPath} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px' }}>
                {t.speed.cta} <ArrowRight size={17} />
              </Link>
            </div>
            <figure className="reveal-right" style={{ flex: '1 1 340px', maxWidth: '480px', margin: '0 auto' }}>
              <img
                src={pagespeedShot}
                alt={t.speed.alt}
                width={945}
                height={831}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-subtle)' }}
              />
              <figcaption style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.6rem', textAlign: 'center' }}>
                {t.speed.caption}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 5 — Proof of work (real Power BI dashboards) */}
      <section className="section jv-kpi-section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <Eyebrow>{eb.proof}</Eyebrow>
          <h2 style={{ ...h2Style, marginBottom: '0.6rem' }}>{t.proof.heading}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', maxWidth: '70ch' }}>{t.proof.subtitle}</p>
          <div className="jv-proof-grid reveal-group">
            {t.proof.items.map((it, i) => (
              <figure key={i} className="jv-proof-card reveal-card">
                <div className="jv-proof-figure">
                  <span className="jv-proof-tag">Power BI</span>
                  <img src={PROOF_IMAGES[i]} alt={it.alt} loading="lazy" decoding="async" width="640" height="400" />
                </div>
                <figcaption className="jv-proof-cap">{it.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Education & credentials */}
      <section className="section">
        <div className="container reveal" style={{ maxWidth: '820px' }}>
          <Eyebrow>{eb.edu}</Eyebrow>
          <h2 style={{ ...h2Style, display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <GraduationCap size={26} style={{ color: 'var(--accent-cyan)' }} /> {t.education.heading}
          </h2>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.02rem' }}>
            {t.education.items.map((e, i) => <li key={i} style={{ marginBottom: '0.4rem' }}>{e}</li>)}
          </ul>
        </div>
      </section>

      {/* 7 — Tech stack (cards + auto-scrolling marquee) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <Eyebrow>{eb.stack}</Eyebrow>
          <h2 style={{ ...h2Style, marginBottom: '0.6rem' }}>{t.stack.heading}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>{t.stack.subtitle}</p>

          <div className="jv-tech-grid reveal-group">
            {t.stack.items.map((s) => (
              <div key={s.name} className="jv-tech-card reveal-card">
                <TechIcon icon={s.icon} />
                <span className="jv-tech-meta">
                  <span className="jv-tech-name" translate="no">{s.name}</span>
                  <span className="jv-tech-cat" translate="no">{s.cat}</span>
                </span>
              </div>
            ))}
          </div>

          {/* Auto-scrolling marquee — duplicated set for a seamless loop */}
          <div className="jv-marquee" aria-hidden="true">
            <div className="jv-marquee__track" data-dup="">
              {[...t.stack.items, ...t.stack.items].map((s, i) => (
                <span key={i} className="jv-chip" translate="no">
                  <span className="jv-chip-dot" style={{ color: ICON_COLOR[s.icon] || 'var(--accent-cyan)' }} />
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8 — Advanced AI development */}
      <section className="section">
        <div className="container reveal" style={{ maxWidth: '900px' }}>
          <Eyebrow>{eb.ai}</Eyebrow>
          <h2 style={{ ...h2Style, marginBottom: '1.25rem' }}>{t.ai.heading}</h2>
          <div className="jv-ai-card">
            <p className="jv-ai-card__text">{t.ai.text}</p>
            <div className="jv-ai-tags">
              {t.ai.tags.map((tag) => <span key={tag} className="jv-ai-tag" translate="no">{tag}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* 9 — Verifiable links */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container reveal" style={{ maxWidth: '820px' }}>
          <Eyebrow>{eb.links}</Eyebrow>
          <h2 style={h2Style}>{t.links.heading}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{t.links.subtitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href={AUTHOR_LINKS.linkedin} target="_blank" rel="noopener noreferrer" style={outlineBtn}><LinkedInIcon size={18} /> {t.links.linkedin}</a>
            <a href={AUTHOR_LINKS.github} target="_blank" rel="noopener noreferrer" style={outlineBtn}><GitHubIcon size={18} /> {t.links.github}</a>
            <a href={AUTHOR_LINKS.portfolio} target="_blank" rel="noopener noreferrer" style={outlineBtn}><ExternalLink size={18} /> {t.links.portfolio}</a>
          </div>
        </div>
      </section>

      {/* 10 — Final CTA (web development) */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container reveal" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.1rem)', marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.cta.heading}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>{t.cta.text}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            <Link to={webPath} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px' }}>
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
