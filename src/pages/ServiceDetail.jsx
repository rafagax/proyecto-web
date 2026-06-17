import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Code, TrendingUp, BarChart3, Bot } from 'lucide-react';
import { updateMetaTags, addServiceSchema } from '../utils/seo';

const WHATSAPP_PHONE = '584144735431';

// Canonical service slugs, in display order.
const SERVICE_ORDER = [
  'web-development-design',
  'seo-digital-growth',
  'kpi-dashboards',
  'ai-automation-chatbots',
];

// Redirect-style aliases so previously published URLs keep resolving,
// while the canonical tag always points to the new clean URL.
export const aliasMap = {
  'web-development': 'web-development-design',
  'seo': 'seo-digital-growth',
  'ai-automation': 'ai-automation-chatbots',
};

export const serviceDetails = {
  'web-development-design': {
    Icon: Code,
    eyebrow: 'Web Development & Design',
    short: 'Premium websites built for speed, trust, and conversions.',
    h1: 'Premium Web Development & Design for Growing Businesses',
    intro: 'We design and develop fast, responsive, conversion-focused websites that help your business look professional, build trust, and turn visitors into qualified leads.',
    metaTitle: 'Premium Web Development & Design Services | Digital Investments',
    metaDescription: 'Premium web development and design services for businesses that need fast, responsive, conversion-focused websites built to earn trust and generate qualified leads.',
    valueHeading: 'A Website Built to Perform, Not Just Look Good',
    valueCopy: 'Your website should be more than a digital brochure. It should communicate your value clearly, load quickly, guide visitors toward action, and support your long-term growth.',
    included: [
      'Custom website structure and layout',
      'Responsive mobile-first design',
      'Clean, fast, hand-coded development',
      'Conversion-focused calls to action',
      'SEO-ready technical foundation',
      'Contact forms, WhatsApp links, and lead capture setup',
      'Launch support and post-launch adjustments',
    ],
    bestFor: [
      'Professional service businesses',
      'Local businesses',
      'Consultants and agencies',
      'Premium personal brands',
      'Companies that need a stronger online presence',
    ],
    process: [
      'Discovery & Strategy',
      'Design & Prototyping',
      'Development',
      'Testing & QA',
      'Launch & Support',
    ],
    ctaHeading: 'Build a Website That Works as Hard as You Do',
    ctaButton: 'Get Your Free Audit',
    ctaMessage: "Hello, I'm interested in your Web Development & Design service and would like a free audit.",
  },

  'seo-digital-growth': {
    Icon: TrendingUp,
    eyebrow: 'SEO & Digital Growth',
    short: 'Improve visibility, attract qualified traffic, and grow organically.',
    h1: 'SEO & Digital Growth Services for Businesses That Want to Be Found',
    intro: 'We help your business improve visibility on Google, attract qualified visitors, and turn search intent into measurable growth opportunities.',
    metaTitle: 'SEO & Digital Growth Services | Rank Higher and Attract Better Leads',
    metaDescription: 'SEO and digital growth services designed to help businesses improve Google visibility, attract qualified traffic, and turn search intent into real opportunities.',
    valueHeading: 'Get Found by the People Already Searching for You',
    valueCopy: 'The best traffic comes from people who are already looking for what you offer. We optimize your website structure, content, local presence, and search signals so your business becomes easier to find and easier to trust.',
    included: [
      'SEO audit and opportunity analysis',
      'Keyword and competitor research',
      'Local SEO optimization',
      'On-page SEO improvements',
      'Metadata, headings, and internal linking',
      'Technical SEO recommendations',
      'Content strategy for growth',
      'Performance tracking',
    ],
    bestFor: [
      'Local businesses',
      'Service providers',
      'Companies competing in Google search',
      'Businesses that want organic leads',
      'Brands that want to reduce dependence on paid ads',
    ],
    process: [
      'SEO Audit & Analysis',
      'Keyword & Competitor Research',
      'On-Page & Technical Optimization',
      'Local SEO & Content',
      'Tracking & Reporting',
    ],
    ctaHeading: 'Turn Google Searches Into Real Business Opportunities',
    ctaButton: 'Get Your Free SEO Audit',
    ctaMessage: "Hello, I'm interested in your SEO & Digital Growth service and would like a free SEO audit.",
  },

  'kpi-dashboards': {
    Icon: BarChart3,
    eyebrow: 'KPI Dashboards & Analytics',
    short: 'Track leads, sales, and business performance with clarity.',
    h1: 'KPI Dashboards & Analytics for Smarter Business Decisions',
    intro: 'We create clear performance dashboards that help you understand where your leads come from, what is working, and which numbers matter most for growth.',
    metaTitle: 'KPI Dashboards & Analytics for Business Growth | Digital Investments',
    metaDescription: 'Custom KPI dashboards and analytics systems that help businesses track leads, sales, marketing performance, and growth metrics in real time.',
    valueHeading: "Know What's Working Before You Spend More",
    valueCopy: 'Growth without tracking is guesswork. A clear KPI dashboard gives you visibility into leads, sales, campaigns, conversion rates, and customer activity so you can make better decisions with confidence.',
    included: [
      'Custom KPI dashboard setup',
      'Lead and sales tracking structure',
      'Website performance indicators',
      'Marketing campaign tracking',
      'Conversion rate visibility',
      'Monthly performance snapshots',
      'Clear reporting for business owners',
      'Integration recommendations',
    ],
    bestFor: [
      'Business owners who want clarity',
      'Agencies and service providers',
      'Companies running marketing campaigns',
      'Teams that need better reporting',
      'Businesses scaling operations',
    ],
    process: [
      'Define Your KPIs',
      'Connect Data Sources',
      'Dashboard Design',
      'Review & Training',
      'Ongoing Reporting',
    ],
    ctaHeading: 'Stop Guessing. Start Tracking What Matters.',
    ctaButton: 'Plan My KPI Dashboard',
    ctaMessage: "Hello, I'm interested in your KPI Dashboards & Analytics service and would like to plan a dashboard.",
  },

  'ai-automation-chatbots': {
    Icon: Bot,
    eyebrow: 'AI Automation & Chatbots',
    short: 'Automate replies, qualify leads, and support customers 24/7.',
    h1: 'AI Automation & Chatbots That Help You Respond Faster and Convert More Leads',
    intro: 'We build AI-powered chatbots and WhatsApp automation systems that answer questions, qualify leads, support customers, and help your business respond instantly — even outside working hours.',
    metaTitle: 'AI Automation & Chatbots for Businesses | WhatsApp AI Agents',
    metaDescription: 'AI automation and chatbot services for businesses that want faster replies, lead qualification, appointment booking, and 24/7 customer support.',
    valueHeading: 'Never Lose a Lead Because You Replied Too Late',
    valueCopy: 'Customers expect fast answers. AI automation helps your business respond instantly, handle common questions, collect useful information, and guide prospects toward the next step.',
    included: [
      'AI chatbot strategy',
      'WhatsApp automation setup',
      'Lead qualification flows',
      'FAQ and service-based responses',
      'Appointment request handling',
      'Custom tone of voice training',
      'Escalation to a human when needed',
      'Testing, optimization, and support',
    ],
    bestFor: [
      'Service businesses',
      'Appointment-based businesses',
      'Clinics, salons, agencies, and consultants',
      'Businesses receiving many WhatsApp inquiries',
      'Teams that want to save time and respond faster',
    ],
    process: [
      'Strategy & Use Cases',
      'Flow & Script Design',
      'WhatsApp & System Setup',
      'Training & Testing',
      'Launch & Optimization',
    ],
    ctaHeading: 'Give Your Business a Smarter Way to Respond',
    ctaButton: 'Build My AI Assistant',
    ctaMessage: "Hello, I'm interested in your AI Automation & Chatbots service and would like to build an AI assistant.",
  },
};

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
