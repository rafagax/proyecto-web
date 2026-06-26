import {
  ArrowRight,
  Check,
  Search,
  FileText,
  Gauge,
  MapPin,
  PenLine,
  BarChart3,
  Code,
  Bot,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileAutoCarousel from '../components/MobileAutoCarousel';
import seoMainImg from '../assets/seoimagen.webp';
import seoHeroImg from '../assets/seo imagen setion.webp';
import seoLocalImg from '../assets/servicioseoimagenes.webp';
import seoTechImg from '../assets/seoimagen3.webp';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';

const WHATSAPP_PHONE = '584144735431';
const wa = (msg) => `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;

const onImgError = (e) => {
  e.currentTarget.style.display = 'none';
};

const FeatureCard = ({ Icon, title, text, reveal = false }) => (
  <div className={`wdd-feature-card${reveal ? ' reveal-card' : ''}`}>
    <div className="wdd-feature-icon"><Icon size={22} strokeWidth={1.7} /></div>
    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>{title}</h3>
    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{text}</p>
  </div>
);

const ProcessCard = ({ n, title, text, reveal = false }) => (
  <div className={`wdd-process-card${reveal ? ' reveal-card' : ''}`}>
    <div className="wdd-process-n">{n}</div>
    <h3 style={{ fontSize: '1.15rem', margin: '0.75rem 0 0.5rem', color: 'var(--text-primary)' }}>{title}</h3>
    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>{text}</p>
  </div>
);

// Structural per-section/visual data (identical across locales): images, the
// reverse layout flag, the alternating background, the capability/other-service
// icons. Text comes from localized content.
const capabilityIcons = [Search, FileText, Gauge, MapPin, PenLine, BarChart3];
const sectionImages = [seoHeroImg, seoTechImg, seoLocalImg];
const sectionReverse = [false, true, false];
const sectionBg = [{ background: 'var(--bg-secondary)' }, undefined, { background: 'var(--bg-secondary)' }];
const colImgStyle = { width: '100%', height: 'auto', display: 'block', borderRadius: 20, border: '1px solid var(--border-subtle)' };
const otherDefs = [
  { Icon: Code, key: 'svc-web' },
  { Icon: BarChart3, key: 'svc-kpi' },
  { Icon: Bot, key: 'svc-ai' },
];

// Dedicated landing page for "SEO & Digital Growth" — same theme/structure as
// the other service pages, content-driven from the locale bundle.
const SeoDigitalGrowthDetail = () => {
  const { locale, content } = useLocalizedContent();
  const t = content.serviceSeo;
  const contactPath = getLocalizedPath('contact', locale);
  const others = otherDefs.map((d, i) => ({ ...d, ...t.others[i] }));

  return (
    <div className="animate-fade-in wdd-page">
      {/* 1. Hero */}
      <section className="hero wdd-hero-section" style={{ paddingTop: '170px', paddingBottom: '4rem', overflow: 'hidden' }}>
        <div className="hero-bg-glow"></div>
        <div className="container">
          <div className="wdd-hero">
            <div className="reveal-left wdd-hero-text">
              <h1 className="hero-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.12, marginBottom: '1.5rem' }}>
                {t.hero.title.before}<span className="text-gradient">{t.hero.title.accent}</span>{t.hero.title.after}
              </h1>
              <p className="hero-subtitle" style={{ fontSize: '1.12rem', lineHeight: 1.7, maxWidth: '560px', margin: 0 }}>
                {t.hero.subtitle}
              </p>
            </div>

            <div
              className="reveal-right wdd-hero-img"
              style={{ borderRadius: 22, overflow: 'hidden', background: 'radial-gradient(circle at 30% 20%, rgba(77,148,255,0.18), var(--bg-card) 70%)' }}
            >
              <img src={seoMainImg} alt={t.hero.alt} fetchPriority="high" decoding="async" onError={onImgError} />
            </div>

            <div className="wdd-hero-cta">
              <a href={wa(t.hero.waQuote)} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                {t.hero.cta} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2-4. Alternating two-column sections */}
      {t.sections.map((s, i) => (
        <section key={i} className="section" style={sectionBg[i]}>
          <div className="container">
            <div className={`wdd-two-col${sectionReverse[i] ? ' reverse' : ''}`} style={{ alignItems: 'center' }}>
              <div className="reveal-left">
                <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                  {s.heading.before}<span className="text-gradient">{s.heading.accent}</span>{s.heading.after}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                  {s.copy}
                </p>
                <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                  {s.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <a href={wa(s.waQuote)} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                  {s.cta} <ArrowRight size={16} />
                </a>
              </div>
              <div className="reveal-right wdd-col-img">
                <img src={sectionImages[i]} alt={s.alt} loading="lazy" onError={onImgError} style={colImgStyle} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 5. Capabilities */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem' }} className="reveal">
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
              {t.capabilities.heading.before}<span className="text-gradient">{t.capabilities.heading.accent}</span>{t.capabilities.heading.after}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              {t.capabilities.copy}
            </p>
          </div>

          <div className="wdd-feature-grid wdd-only-desktop reveal-group">
            {t.capabilities.items.map((c, i) => <FeatureCard key={c.title} Icon={capabilityIcons[i]} title={c.title} text={c.text} reveal />)}
          </div>
          <MobileAutoCarousel>
            {t.capabilities.items.map((c, i) => <FeatureCard key={c.title} Icon={capabilityIcons[i]} title={c.title} text={c.text} />)}
          </MobileAutoCarousel>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href={wa(t.capabilities.waQuote)} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
              {t.capabilities.cta} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="wdd-two-col" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                {t.why.heading.before}<span className="text-gradient">{t.why.heading.accent}</span>{t.why.heading.after}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                {t.why.copy}
              </p>
              <a href={wa(t.why.waQuote)} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                {t.why.cta} <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal-right">
              <div className="wdd-why-card">
                {t.why.points.map((p) => (
                  <div key={p} className="wdd-why-row">
                    <span className="wdd-check"><Check size={16} /></span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Process */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="reveal">
            <h2 style={{ fontSize: '2.3rem', lineHeight: 1.2 }}>
              {t.process.heading.before}<span className="text-gradient">{t.process.heading.accent}</span>{t.process.heading.after}
            </h2>
          </div>
          <div className="wdd-process wdd-only-desktop reveal-group">
            {t.process.steps.map((p, i) => <ProcessCard key={p.title} n={String(i + 1).padStart(2, '0')} title={p.title} text={p.text} reveal />)}
          </div>
          <MobileAutoCarousel speed={0.95}>
            {t.process.steps.map((p, i) => <ProcessCard key={p.title} n={String(i + 1).padStart(2, '0')} title={p.title} text={p.text} />)}
          </MobileAutoCarousel>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href={wa(t.process.waQuote)} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
              {t.process.cta} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="wdd-cta reveal">
            <div className="wdd-cta-grid"></div>
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                {t.finalCta.heading.before}<span className="text-gradient">{t.finalCta.heading.accent}</span>{t.finalCta.heading.after}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '2.25rem' }}>
                {t.finalCta.copy}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <a href={wa(t.finalCta.primaryWaQuote)} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                  {t.finalCta.primary} <ArrowRight size={16} />
                </a>
                <Link to={contactPath} className="btn btn-secondary" style={{ padding: '14px 34px', fontSize: '1rem' }}>
                  {t.finalCta.secondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore other services — internal linking (SEO) */}
      {others.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', textAlign: 'center' }}>
              {t.otherHeading.before}<span className="text-gradient">{t.otherHeading.accent}</span>{t.otherHeading.after}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {others.map((other) => {
                const OtherIcon = other.Icon;
                return (
                  <Link key={other.key} to={getLocalizedPath(other.key, locale)} className="service-card" style={{ padding: '2rem 1.75rem', display: 'block', textDecoration: 'none' }}>
                    <div className="service-icon" style={{ marginBottom: '1.25rem', width: '50px', height: '50px' }}>
                      <OtherIcon size={26} />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>{other.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1rem' }}>{other.short}</p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem' }}>
                      {t.otherLearnMore} <ArrowRight size={15} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SeoDigitalGrowthDetail;
