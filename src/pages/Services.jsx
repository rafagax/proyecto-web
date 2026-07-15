import { Bot, Cpu, Activity, Zap, Search, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';

// Icons + accent colors per card (structural — copy comes from localized content,
// matched by index). Order kept identical to the original layout.
const cardVisuals = [
  { icon: <Bot size={32} />, color: '#0066ff' },
  { icon: <Cpu size={32} />, color: '#4d94ff' },
  { icon: <Activity size={32} />, color: '#0066ff' },
  { icon: <MessageSquare size={32} />, color: '#4d94ff' },
  { icon: <Zap size={32} />, color: '#0066ff' },
  { icon: <Search size={32} />, color: '#4d94ff' },
];

const Services = () => {
  const { locale, content } = useLocalizedContent();
  const t = content.services.index;
  // Locale-correct internal links from the manifest.
  const contactPath = getLocalizedPath('contact', locale);

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '180px', paddingBottom: '4rem' }}>
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--accent-cyan)', display: 'block', marginBottom: '1rem' }}>
            {t.eyebrow}
          </span>
          <h1 className="hero-title page-hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            {t.title.before}<span className="text-gradient">{t.title.accent}</span>{t.title.after}
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '650px', margin: '0 auto' }}>
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {t.cards.map((service, idx) => {
              const v = cardVisuals[idx];
              return (
                <div
                  key={idx}
                  className="service-card svc-page-card"
                  style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  <div
                    className="service-icon"
                    style={{ background: `${v.color}18`, color: v.color, width: '60px', height: '60px', borderRadius: '16px' }}
                  >
                    {v.icon}
                  </div>
                  <h3 style={{ fontSize: '1.3rem' }}>{service.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', flex: 1 }}>{service.description}</p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {service.benefits.map((b, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: v.color, flexShrink: 0 }}></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  {/* Primary link goes to the service detail page (hub → spoke);
                      contact stays available as a secondary, muted CTA. */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.5rem' }}>
                    <Link
                      to={getLocalizedPath(service.serviceKey, locale)}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: v.color, fontWeight: '600', fontSize: '0.9rem', transition: 'gap 0.2s' }}
                      onMouseOver={e => e.currentTarget.style.gap = '10px'}
                      onMouseOut={e => e.currentTarget.style.gap = '6px'}
                    >
                      {service.detailCta} <ArrowRight size={16} />
                    </Link>
                    <Link
                      to={contactPath}
                      style={{ color: 'var(--text-secondary)', fontWeight: '500', fontSize: '0.85rem' }}
                      onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'}
                      onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      {t.cardCta}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Keyword-anchor links to the four service detail pages */}
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>
              {t.detailLinksHeading.before}<span className="text-gradient">{t.detailLinksHeading.accent}</span>{t.detailLinksHeading.after}
            </h2>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {t.detailLinks.map((l) => (
                <Link key={l.key} to={getLocalizedPath(l.key, locale)} className="btn btn-secondary" style={{ padding: '12px 24px', fontSize: '0.95rem' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
            {t.cta.heading.before}<span className="text-gradient">{t.cta.heading.accent}</span>{t.cta.heading.after}
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
            {t.cta.copy}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to={contactPath} className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              {t.cta.primary}
            </Link>
            <Link to={getLocalizedPath('pricing', locale)} className="btn btn-secondary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              {t.cta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
