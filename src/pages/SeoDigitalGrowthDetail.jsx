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
// Each heavy image ships as AVIF (scripts/gen-avif.mjs) with the WebP original
// as the <picture> fallback. NOTE: wrapping the eager hero in <picture>
// suppresses React 19's automatic SSR preload — app/routes/service-seo.jsx
// emits the equivalent manual preload via its links() export.
import seoMainImg from '../assets/seoimagen.webp';
import seoMainAvif from '../assets/seoimagen.avif';
import seoHeroImg from '../assets/seo imagen setion.webp';
import seoHeroAvif from '../assets/seo imagen setion.avif';
import seoLocalImg from '../assets/servicioseoimagenes.webp';
import seoLocalAvif from '../assets/servicioseoimagenes.avif';
import seoTechImg from '../assets/seoimagen3.webp';
import seoTechAvif from '../assets/seoimagen3.avif';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';
import { BUSINESS_WHATSAPP } from '../config/forms.js';

const wa = (msg) => `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(msg)}`;

// Discreet secondary-channel link shown under the hero CTA.
const altCtaStyle = { color: 'var(--text-secondary)', fontSize: '0.92rem', textDecoration: 'underline', textUnderlineOffset: 4 };

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
// { webp, avif } pairs, in section order (AVIF served via <picture>, WebP fallback).
const sectionImages = [
  { webp: seoHeroImg, avif: seoHeroAvif },
  { webp: seoTechImg, avif: seoTechAvif },
  { webp: seoLocalImg, avif: seoLocalAvif },
];
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
  // Deep link to the localized contact form with this service preselected (contract C2).
  const contactHref = `${contactPath}?service=seo`;
  const isEs = locale === 'es';
  const others = otherDefs.map((d, i) => ({ ...d, ...t.others[i] }));

  // Market-aware CTAs: English visitors (US/UK primary market) get the contact
  // form as the primary action with WhatsApp as a secondary option; Spanish
  // visitors keep WhatsApp primary with the form as the alternative.
  const primaryCta = (label, waQuote) =>
    isEs ? (
      <a href={wa(waQuote)} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
        {label} <ArrowRight size={16} />
      </a>
    ) : (
      <Link to={contactHref} className="hero-advisory-btn" style={{ margin: 0 }}>
        {label} <ArrowRight size={16} />
      </Link>
    );
  const altCta = (waQuote) =>
    isEs ? (
      <Link to={contactHref} style={altCtaStyle}>{t.ctaAlt.form}</Link>
    ) : (
      <a href={wa(waQuote)} target="_blank" rel="noopener noreferrer" style={altCtaStyle}>{t.ctaAlt.whatsapp}</a>
    );

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
              <picture>
                <source type="image/avif" srcSet={seoMainAvif} />
                <img src={seoMainImg} alt={t.hero.alt} width={1448} height={1086} fetchPriority="high" decoding="async" onError={onImgError} />
              </picture>
            </div>

            <div className="wdd-hero-cta">
              {primaryCta(t.hero.cta, t.hero.waQuote)}
              <div style={{ marginTop: '0.9rem' }}>{altCta(t.hero.waQuote)}</div>
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
                {primaryCta(s.cta, s.waQuote)}
              </div>
              <div className="reveal-right wdd-col-img">
                <picture>
                  <source type="image/avif" srcSet={sectionImages[i].avif} />
                  <img src={sectionImages[i].webp} alt={s.alt} width={1448} height={1086} loading="lazy" onError={onImgError} style={colImgStyle} />
                </picture>
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

          {/* Single grid — desktop grid, horizontal scroll-snap carousel on mobile (CSS only, no duplicated DOM) */}
          <div className="wdd-feature-grid reveal-group">
            {t.capabilities.items.map((c, i) => <FeatureCard key={c.title} Icon={capabilityIcons[i]} title={c.title} text={c.text} reveal />)}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            {primaryCta(t.capabilities.cta, t.capabilities.waQuote)}
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
              {primaryCta(t.why.cta, t.why.waQuote)}
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
          {/* Single grid — desktop grid, horizontal scroll-snap carousel on mobile (CSS only, no duplicated DOM) */}
          <div className="wdd-process reveal-group">
            {t.process.steps.map((p, i) => <ProcessCard key={p.title} n={String(i + 1).padStart(2, '0')} title={p.title} text={p.text} reveal />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            {primaryCta(t.process.cta, t.process.waQuote)}
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
                {primaryCta(t.finalCta.primary, t.finalCta.primaryWaQuote)}
                {isEs ? (
                  <Link to={contactHref} className="btn btn-secondary" style={{ padding: '14px 34px', fontSize: '1rem' }}>
                    {t.finalCta.secondary}
                  </Link>
                ) : (
                  <a href={wa(t.finalCta.primaryWaQuote)} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '14px 34px', fontSize: '1rem' }}>
                    {t.ctaAlt.whatsapp}
                  </a>
                )}
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
