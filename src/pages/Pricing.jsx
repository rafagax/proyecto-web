import { CheckCircle2, XCircle, ClipboardCheck, ShieldCheck, LifeBuoy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';
import './Pricing.css';

const WHATSAPP_PHONE = '584144735431';

// Structural per-plan data (identical across locales): price, "popular" flag, the
// feature indices shown as NOT included, and the service/plan slugs carried to the
// contact page (?service=...&plan=...) so leads arrive pre-qualified. Text comes
// from localized content, matched by index — so prices/order never change with language.
const MAIN = [
  { price: '$299', popular: false, muted: [6, 7], service: 'web-development', plan: 'starter' },
  { price: '$599', popular: true, muted: [], service: 'web-development', plan: 'business' },
  { price: '$1,500', popular: false, muted: [], service: 'web-development', plan: 'ecommerce' },
];
const MONTHLY = [
  { price: '$300', popular: false, service: 'seo', plan: 'seo-optimization' },
  { price: '$400', popular: true, service: 'web-development', plan: 'website-management' },
  { price: '$499', popular: false, service: 'kpi-dashboards', plan: 'kpi-analytics' },
];

// Icons for the trust strip, matched by index to t.trust.items.
const TRUST_ICONS = [ClipboardCheck, ShieldCheck, LifeBuoy];

const Pricing = () => {
  const { locale, content } = useLocalizedContent();
  const t = content.pricing;
  const contactPath = getLocalizedPath('contact', locale);
  const faqsPath = getLocalizedPath('faqs', locale);

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '180px', paddingBottom: '4rem' }}>
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--accent-cyan)', display: 'block', marginBottom: '1rem' }}>
            {t.hero.eyebrow}
          </span>
          <h1 className="hero-title page-hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            {t.hero.title.before}<span className="text-gradient">{t.hero.title.accent}</span>{t.hero.title.after}
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '650px', margin: '0 auto' }}>
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="pricing-grid">
            {t.plans.map((plan, i) => {
              const s = MAIN[i];
              return (
                <div key={plan.name} className={`pricing-card${s.popular ? ' popular' : ''}`}>
                  {s.popular && <div className="popular-badge">{t.popularBadge}</div>}
                  <h3>{plan.name}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{plan.audience}</p>
                  <div className={`price-amount${s.popular ? ' text-gradient' : ''}`}>{s.price}</div>
                  <ul className="price-features">
                    {plan.features.map((f, fi) =>
                      s.muted.includes(fi) ? (
                        <li key={fi} className="feature-excluded">
                          <XCircle size={18} />
                          <span className="pricing-sr-only">{t.notIncludedLabel} </span>
                          <s>{f}</s>
                        </li>
                      ) : (
                        <li key={fi}><CheckCircle2 size={18} /> {f}</li>
                      )
                    )}
                  </ul>
                  <Link to={`${contactPath}?service=${s.service}&plan=${s.plan}`} className={`btn ${s.popular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', marginTop: 'auto' }}>{t.getStarted}</Link>
                </div>
              );
            })}
          </div>

          {/* Trust strip — real commitments already published on the site (FAQs/plans),
              surfaced at the decision point. No invented guarantees. */}
          <div className="pricing-trust">
            {t.trust.items.map((item, i) => {
              const Icon = TRUST_ICONS[i];
              return (
                <div key={item.title} className="pricing-trust-item">
                  <Icon size={22} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Monthly Services Section */}
          <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid rgba(77, 148, 255, 0.15)' }}>
            <h2 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '1rem' }}>
              {t.monthly.heading.before}<span className="text-gradient">{t.monthly.heading.accent}</span>{t.monthly.heading.after}
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
              {t.monthly.subtitle}
            </p>

            <div className="pricing-grid">
              {t.monthly.plans.map((plan, i) => {
                const s = MONTHLY[i];
                return (
                  <div key={plan.name} className={`pricing-card${s.popular ? ' popular' : ''}`}>
                    {s.popular && <div className="popular-badge">{t.popularBadge}</div>}
                    <h3>{plan.name}</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>{plan.audience}</p>
                    <div className={`price-amount${s.popular ? ' text-gradient' : ''}`}>{s.price}<span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: '500' }}>{t.monthly.perMonth}</span></div>
                    <ul className="price-features">
                      {plan.features.map((f, fi) => (
                        <li key={fi}><CheckCircle2 size={18} /> {f}</li>
                      ))}
                    </ul>
                    <Link to={`${contactPath}?service=${s.service}&plan=${s.plan}`} className={`btn ${s.popular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', marginTop: 'auto' }}>{t.getStarted}</Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Custom Plan CTA */}
          <div style={{ marginTop: '5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--border-radius-md)', padding: '4rem 3rem', textAlign: 'center', border: '1px solid rgba(77, 148, 255, 0.15)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{t.custom.heading.before}<span className="text-gradient">{t.custom.heading.accent}</span>{t.custom.heading.after}</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto 2rem', lineHeight: '1.7' }}>
              {t.custom.copy}
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(t.custom.waQuote)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '16px 40px', fontSize: '1.1rem' }}
            >
              {t.custom.cta}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{t.faqTeaser.heading.before}<span className="text-gradient">{t.faqTeaser.heading.accent}</span>{t.faqTeaser.heading.after}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            {t.faqTeaser.copy}
          </p>
          <Link to={faqsPath} className="btn btn-secondary" style={{ padding: '14px 36px' }}>{t.faqTeaser.cta}</Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
