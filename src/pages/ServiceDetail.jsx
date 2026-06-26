import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { updateMetaTags, addServiceSchema } from '../utils/seo';
import WebDevDesignDetail from './WebDevDesignDetail';
import SeoDigitalGrowthDetail from './SeoDigitalGrowthDetail';
import KpiDashboardsDetail from './KpiDashboardsDetail';
import AiAutomationChatbotsDetail from './AiAutomationChatbotsDetail';
import { serviceDetails, aliasMap } from '../data/serviceDetails';

const WHATSAPP_PHONE = '584144735431';

// Canonical service slugs, in display order.
const SERVICE_ORDER = [
  'web-development-design',
  'seo-digital-growth',
  'kpi-dashboards',
  'ai-automation-chatbots',
];

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const canonicalSlug = aliasMap[serviceId] || serviceId;
  const activeSlug = serviceDetails[canonicalSlug] ? canonicalSlug : 'web-development-design';
  const service = serviceDetails[activeSlug];
  const Icon = service.Icon;

  const otherServices = SERVICE_ORDER.filter((slug) => slug !== activeSlug).map((slug) => ({
    slug,
    ...serviceDetails[slug],
  }));

  useEffect(() => {
    updateMetaTags({
      title: service.metaTitle,
      description: service.metaDescription,
      keywords: `${service.eyebrow}, web development, SEO, KPI dashboards, AI automation, digital services`,
      ogTitle: service.h1,
      ogDescription: service.metaDescription,
      canonical: `https://yourdomain.com/services/${activeSlug}`,
    });
    addServiceSchema(service.eyebrow, service.metaDescription);
  }, [activeSlug, service]);

  const ctaHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(service.ctaMessage)}`;

  // Dedicated, richer layouts per service.
  if (activeSlug === 'web-development-design') {
    return <WebDevDesignDetail service={service} ctaHref={ctaHref} otherServices={otherServices} />;
  }
  if (activeSlug === 'seo-digital-growth') {
    return <SeoDigitalGrowthDetail service={service} ctaHref={ctaHref} otherServices={otherServices} />;
  }
  if (activeSlug === 'kpi-dashboards') {
    return <KpiDashboardsDetail service={service} ctaHref={ctaHref} otherServices={otherServices} />;
  }
  if (activeSlug === 'ai-automation-chatbots') {
    return <AiAutomationChatbotsDetail service={service} ctaHref={ctaHref} otherServices={otherServices} />;
  }

  return (
    <div className="animate-fade-in">
      {/* Hero / Intro */}
      <section className="hero" style={{ minHeight: '50vh', paddingTop: '180px', paddingBottom: '4rem' }}>
        <div className="hero-bg-glow"></div>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
            <span className="feature-eyebrow" style={{ justifyContent: 'center' }}>
              <Icon size={16} /> {service.eyebrow}
            </span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.3rem, 5vw, 3.4rem)', marginBottom: '1.5rem', lineHeight: 1.15 }}>
              {service.h1}
            </h1>
            <p className="hero-subtitle" style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.12rem', lineHeight: 1.7 }}>
              {service.intro}
            </p>
            <div style={{ marginTop: '2.25rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                {service.ctaButton} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section" style={{ paddingTop: '2rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>{service.valueHeading}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.12rem', lineHeight: 1.8 }}>{service.valueCopy}</p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '2.5rem', textAlign: 'center' }}>
              What's <span className="text-gradient">Included</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {service.included.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.85rem' }}>
                  <div style={{ flexShrink: 0, marginTop: '2px' }}>
                    <CheckCircle2 size={22} color="var(--accent-cyan)" />
                  </div>
                  <p style={{ color: 'white', fontSize: '1rem', fontWeight: 500, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works / Process */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', marginBottom: '3rem', textAlign: 'center' }}>
            How It <span className="text-gradient">Works</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.75rem', maxWidth: '1040px', margin: '0 auto' }}>
            {service.process.map((step, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    background: 'var(--accent-gradient)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'white',
                    margin: '0 auto 1rem',
                    boxShadow: '0 8px 20px rgba(77, 148, 255, 0.3)',
                  }}
                >
                  {idx + 1}
                </div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: 0 }}>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best For */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '2.5rem', textAlign: 'center' }}>
              Best <span className="text-gradient">For</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {service.bestFor.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.1rem 1.25rem',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(77, 148, 255, 0.12)',
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)', flexShrink: 0 }}></span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.98rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '680px' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', lineHeight: 1.25 }}>{service.ctaHeading}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '1.08rem' }}>
            Book a free, no-pressure strategy session. We'll review where you are now and outline a clear plan tailored to your business.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
              {service.ctaButton} <ArrowRight size={16} />
            </a>
            <Link to="/pricing" className="btn btn-secondary" style={{ padding: '14px 34px', fontSize: '1rem' }}>
              See Plans & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Other Services — internal linking */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', textAlign: 'center' }}>
            Explore Our Other <span className="text-gradient">Services</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {otherServices.map((other) => {
              const OtherIcon = other.Icon;
              return (
                <Link
                  key={other.slug}
                  to={`/services/${other.slug}`}
                  className="service-card"
                  style={{ padding: '2rem 1.75rem', display: 'block', textDecoration: 'none' }}
                >
                  <div className="service-icon" style={{ marginBottom: '1.25rem', width: '50px', height: '50px' }}>
                    <OtherIcon size={26} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: '#fff' }}>{other.eyebrow}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1rem' }}>{other.short}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem' }}>
                    Learn more <ArrowRight size={15} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
