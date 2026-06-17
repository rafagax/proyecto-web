import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Clock, Zap, Target, BarChart3 } from 'lucide-react';
import { updateMetaTags, addServiceSchema } from '../utils/seo';

const serviceDetails = {
  'web-development': {
    title: 'Web Development & Design',
    description: 'Custom, high-performance websites designed to build trust, convert visitors, and grow your business — built mobile-first and ready in days.',
    benefits: ['Custom brand-aligned design', 'Mobile-first & responsive', 'Fast loading & optimized', 'Ongoing maintenance & support', 'SEO-ready structure'],
    process: ['Discovery & Strategy', 'Design & Prototyping', 'Development', 'Testing & QA', 'Launch & Support'],
    timeline: '7-14 days',
    price: 'Starting at $299',
    features: [
      'Custom visual design aligned with your brand',
      'Fully responsive on all devices (mobile-first)',
      'Loads in under 2 seconds, performance-optimized',
      'SEO-friendly, accessible code',
      'Website maintenance, updates & backups',
      'Priority technical support'
    ]
  },
  'seo': {
    title: 'SEO & Digital Growth',
    description: 'Rank higher on Google, attract qualified local traffic, and turn searches into customers — backed by analytics and clear monthly reporting.',
    benefits: ['Higher Google rankings', 'Qualified local traffic', 'Content that ranks', 'Clear analytics & reports', 'Long-term organic growth'],
    process: ['Keyword & Competitor Research', 'On-page Optimization', 'Local SEO & Content', 'Tracking & Analytics', 'Monthly Reporting'],
    timeline: 'Ongoing (results in 30-60 days)',
    price: 'Starting at $300/month',
    features: [
      'Keyword research & strategy',
      'On-page & technical optimization',
      'Google Business Profile & local SEO',
      'SEO-optimized content & blog articles',
      'Analytics & conversion tracking (GA4)',
      'Monthly ranking & performance reports'
    ]
  },
  'kpi-dashboards': {
    title: 'KPI & Performance Indicators',
    description: 'Custom dashboards that turn your data into clear, real-time insights — so you always know what is working and where to grow.',
    benefits: ['Real-time data visibility', 'Data-driven decisions', 'Goal & sales tracking', 'Team alignment', 'Instant reporting'],
    process: ['KPI Definition', 'Data Source Setup', 'Dashboard Design', 'Testing & Training', 'Ongoing Review'],
    timeline: '7-14 days',
    price: 'Starting at $399',
    features: [
      'Custom KPI dashboard design',
      'Multi-source data integration',
      'Real-time updates & alerts',
      'Sales, revenue & growth metrics',
      'Customer behavior insights',
      'Monthly performance reports'
    ]
  },
  'ai-automation': {
    title: 'AI Automation & Chatbots',
    description: 'Smart WhatsApp agents and automations that reply in seconds, qualify leads, and sell for you 24/7 — even while you sleep.',
    benefits: ['24/7 instant replies', 'Automated lead capture', 'More sales, less manual work', 'Seamless human handoff', 'Connected to your systems'],
    process: ['Requirements & Strategy', 'Bot & Flow Design', 'WhatsApp & System Integration', 'Training & Testing', 'Launch & Optimize'],
    timeline: '5-7 days',
    price: 'Starting at $399/month',
    features: [
      'AI WhatsApp agent that answers & sells 24/7',
      'Automated lead capture & qualification',
      'FAQ, pricing & appointment booking',
      'Workflow & process automation',
      'CRM & system integrations',
      'Seamless handoff to humans + analytics'
    ]
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId] || serviceDetails['web-development'];

  useEffect(() => {
    updateMetaTags({
      title: `${service.title} | Professional Web Development Services`,
      description: service.description,
      keywords: `${service.title}, web development, digital services, business solutions`,
      canonical: `https://yourdomain.com/services/${serviceId}`
    });
    addServiceSchema(service.title, service.description, service.price);
  }, [serviceId, service]);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '50vh', paddingTop: '180px', paddingBottom: '4rem' }}>
        <div className="hero-bg-glow"></div>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--accent-cyan)', display: 'block', marginBottom: '1rem' }}>
              Service Details
            </span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
              {service.title}
            </h1>
            <p className="hero-subtitle" style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem' }}>
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section" style={{ paddingTop: '2rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'var(--bg-primary)', padding: '2rem', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(77, 148, 255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <Clock size={24} color="var(--accent-cyan)" />
                <h3 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>TIMELINE</h3>
              </div>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>{service.timeline}</p>
            </div>

            <div style={{ background: 'var(--bg-primary)', padding: '2rem', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(77, 148, 255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <Target size={24} color="var(--accent-cyan)" />
                <h3 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>PRICING</h3>
              </div>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>{service.price}</p>
            </div>

            <div style={{ background: 'var(--bg-primary)', padding: '2rem', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(77, 148, 255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <Zap size={24} color="var(--accent-cyan)" />
                <h3 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>BENEFITS</h3>
              </div>
              <p style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--accent-cyan)' }}>{service.benefits.length}+ Key Benefits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
              What's <span className="text-gradient">Included</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {service.features.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ flexShrink: 0, marginTop: '2px' }}>
                    <CheckCircle2 size={24} color="var(--accent-cyan)" />
                  </div>
                  <div>
                    <p style={{ color: 'white', fontSize: '1rem', fontWeight: '500', margin: 0 }}>{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" style={{ paddingTop: '2rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
            Our <span className="text-gradient">Process</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {service.process.map((step, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--accent-gradient)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'white',
                    margin: '0 auto 1rem',
                    boxShadow: '0 8px 20px rgba(77, 148, 255, 0.3)',
                  }}
                >
                  {idx + 1}
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{step}</h3>
                {idx < service.process.length - 1 && (
                  <div style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem', opacity: 0.5 }}>↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ padding: '4rem var(--spacing-md)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
            Ready to get <span className="text-gradient">started?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.7' }}>
            Let's discuss how this service can help your business grow. Schedule a free consultation with our team today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              Schedule Free Consultation
            </Link>
            <Link to="/services" className="btn btn-secondary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
