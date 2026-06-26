import {
  ArrowRight,
  Check,
  Palette,
  MessageSquare,
  MousePointerClick,
  Target,
  Search,
  BarChart3,
  TrendingUp,
  Bot,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/herodevelop12.webp';
import responsiveImg from '../assets/developwebhero.webp';
import storeImg from '../assets/tiendachica.webp';
import MobileAutoCarousel from '../components/MobileAutoCarousel';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';

const WHATSAPP_PHONE = '584144735431';
const wa = (msg) => `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;

// Branded fallback if a stock image fails to load — degrade to a clean panel
// instead of a broken-image icon.
const onImgError = (e) => {
  e.currentTarget.style.display = 'none';
};

// Capability card — `reveal` adds the scroll-reveal animation (used in the
// desktop grid; omitted in the mobile carousel so cards never stay hidden).
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

// Icons for the 6 capability cards and the 3 "other services" links (structural —
// copy comes from localized content, matched by index/order).
const capabilityIcons = [Palette, MessageSquare, MousePointerClick, Target, Search, BarChart3];
const otherDefs = [
  { Icon: TrendingUp, path: '/services/seo-digital-growth' },
  { Icon: BarChart3, path: '/services/kpi-dashboards' },
  { Icon: Bot, path: '/services/ai-automation-chatbots' },
];

// Dedicated landing page for "Web Design & Development".
// Rebuilt with a modern, conversion-focused section flow while keeping the
// site's brand identity (CSS variables, Navbar/Footer, accent gradient).
const WebDevDesignDetail = () => {
  const { locale, content } = useLocalizedContent();
  const wd = content.services.webDetail;
  const contactPath = getLocalizedPath('contact', locale);
  const others = otherDefs.map((d, i) => ({ ...d, ...wd.others[i] }));

  return (
    <div className="animate-fade-in wdd-page">
      {/* 1. Hero */}
      <section className="hero wdd-hero-section" style={{ paddingTop: '170px', paddingBottom: '4rem', overflow: 'hidden' }}>
        <div className="hero-bg-glow"></div>
        <div className="container">
          <div className="wdd-hero">
            <div className="reveal-left wdd-hero-text">
              <h1 className="hero-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.12, marginBottom: '1.5rem' }}>
                {wd.hero.title.before}<span className="text-gradient">{wd.hero.title.accent}</span>{wd.hero.title.after}
              </h1>
              <p className="hero-subtitle" style={{ fontSize: '1.12rem', lineHeight: 1.7, maxWidth: '560px', margin: 0 }}>
                {wd.hero.subtitle}
              </p>
            </div>

            {/* Hero image — between subtitle and CTA on mobile, on the right on desktop */}
            <div className="reveal-right wdd-hero-img">
              <img src={heroImg} alt={wd.hero.alt} fetchPriority="high" decoding="async" />
            </div>

            <div className="wdd-hero-cta">
              <a href={wa(wd.hero.waQuote)} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                {wd.hero.cta} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Custom Website Design */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="wdd-two-col" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                {wd.custom.heading.before}<span className="text-gradient">{wd.custom.heading.accent}</span>{wd.custom.heading.after}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                {wd.custom.copy}
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {wd.custom.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href={wa(wd.custom.waQuote)} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                {wd.custom.cta} <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal-right wdd-imgpanel wdd-col-img">
              <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1100&q=80&fit=crop" alt={wd.custom.alt} loading="lazy" onError={onImgError} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Responsive & Optimized */}
      <section className="section">
        <div className="container">
          <div className="wdd-two-col reverse" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                {wd.responsive.heading.before}<span className="text-gradient">{wd.responsive.heading.accent}</span>{wd.responsive.heading.after}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                {wd.responsive.copy}
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {wd.responsive.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href={wa(wd.responsive.waQuote)} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                {wd.responsive.cta} <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal-right wdd-col-img wdd-imgpanel">
              <img src={responsiveImg} alt={wd.responsive.alt} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ecommerce */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="wdd-two-col" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                {wd.ecommerce.heading.before}<span className="text-gradient">{wd.ecommerce.heading.accent}</span>{wd.ecommerce.heading.after}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                {wd.ecommerce.copy}
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {wd.ecommerce.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href={wa(wd.ecommerce.waQuote)} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                {wd.ecommerce.cta} <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal-right wdd-col-img">
              <img src={storeImg} alt={wd.ecommerce.alt} loading="lazy" onError={onImgError} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 20, border: '1px solid var(--border-subtle)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Website Essentials + Advanced Features (merged) */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem' }} className="reveal">
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
              {wd.essentials.heading.before}<span className="text-gradient">{wd.essentials.heading.accent}</span>{wd.essentials.heading.after}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              {wd.essentials.copy}
            </p>
          </div>

          {/* Desktop: unified grid */}
          <div className="wdd-feature-grid wdd-only-desktop reveal-group">
            {wd.essentials.capabilities.map((c, i) => <FeatureCard key={c.title} Icon={capabilityIcons[i]} title={c.title} text={c.text} reveal />)}
          </div>
          {/* Mobile: swipeable auto-scrolling carousel */}
          <MobileAutoCarousel>
            {wd.essentials.capabilities.map((c, i) => <FeatureCard key={c.title} Icon={capabilityIcons[i]} title={c.title} text={c.text} />)}
          </MobileAutoCarousel>

          {/* Single CTA for the section */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href={wa(wd.essentials.waQuote)} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
              {wd.essentials.cta} <ArrowRight size={16} />
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
                {wd.why.heading.before}<span className="text-gradient">{wd.why.heading.accent}</span>{wd.why.heading.after}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                {wd.why.copy}
              </p>
              <a href={wa(wd.why.waQuote)} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                {wd.why.cta} <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal-right">
              <div className="wdd-why-card">
                {wd.why.points.map((p) => (
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
              {wd.process.heading.before}<span className="text-gradient">{wd.process.heading.accent}</span>{wd.process.heading.after}
            </h2>
          </div>
          {/* Desktop: grid */}
          <div className="wdd-process wdd-only-desktop reveal-group">
            {wd.process.steps.map((p, i) => <ProcessCard key={p.title} n={String(i + 1).padStart(2, '0')} title={p.title} text={p.text} reveal />)}
          </div>
          {/* Mobile: swipeable auto-scrolling carousel */}
          <MobileAutoCarousel speed={0.95}>
            {wd.process.steps.map((p, i) => <ProcessCard key={p.title} n={String(i + 1).padStart(2, '0')} title={p.title} text={p.text} />)}
          </MobileAutoCarousel>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href={wa(wd.process.waQuote)} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
              {wd.process.cta} <ArrowRight size={16} />
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
                {wd.finalCta.heading.before}<span className="text-gradient">{wd.finalCta.heading.accent}</span>{wd.finalCta.heading.after}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '2.25rem' }}>
                {wd.finalCta.copy}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <a href={wa(wd.finalCta.primaryWaQuote)} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                  {wd.finalCta.primary} <ArrowRight size={16} />
                </a>
                <Link to={contactPath} className="btn btn-secondary" style={{ padding: '14px 34px', fontSize: '1rem' }}>
                  {wd.finalCta.secondary}
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
              {wd.otherHeading.before}<span className="text-gradient">{wd.otherHeading.accent}</span>{wd.otherHeading.after}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {others.map((other) => {
                const OtherIcon = other.Icon;
                return (
                  <Link key={other.path} to={other.path} className="service-card" style={{ padding: '2rem 1.75rem', display: 'block', textDecoration: 'none' }}>
                    <div className="service-icon" style={{ marginBottom: '1.25rem', width: '50px', height: '50px' }}>
                      <OtherIcon size={26} />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>{other.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1rem' }}>{other.short}</p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem' }}>
                      {wd.otherLearnMore} <ArrowRight size={15} />
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

export default WebDevDesignDetail;
