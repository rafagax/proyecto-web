import { useEffect } from 'react';
import { Bot, Cpu, Activity, Zap, Search, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updateMetaTags } from '../utils/seo';

const services = [
  {
    icon: <Bot size={32} />,
    title: 'Professional Digital Presence',
    description: 'We build a modern, clear and attractive website that strengthens your business image, builds trust with your clients, and makes your brand project professionalism from the very first click.',
    benefits: ['Custom visual design', 'Optimized loading speed', 'Mobile-friendly layout', 'Brand consistency'],
    color: '#0066ff',
  },
  {
    icon: <Cpu size={32} />,
    title: 'Fast & Professional Web Development',
    description: 'We create multi-device websites delivered in just 7 days, using the latest frameworks and technologies to ensure performance, reliability and scalability.',
    benefits: ['Delivery in 7 business days', 'React / Next.js powered', 'Performance optimized', 'Cross-browser compatible'],
    color: '#4d94ff',
  },
  {
    icon: <Activity size={32} />,
    title: 'Sales Growth & Local SEO',
    description: 'We apply geo-local positioning strategies so your business ranks first on Google in your city, attracts local clients, and gets recommended by AI assistants.',
    benefits: ['Google Business Profile setup', 'Keyword targeting', 'Local citation building', 'AI recommendation optimization'],
    color: '#0066ff',
  },
  {
    icon: <MessageSquare size={32} />,
    title: 'AI Chatbot Integration',
    description: 'We integrate intelligent AI chatbots into your website that attend to clients 24/7, answer common questions, and route leads to WhatsApp automatically.',
    benefits: ['24/7 customer attendance', 'WhatsApp integration', 'Lead capture automation', 'Custom conversation flows'],
    color: '#4d94ff',
  },
  {
    icon: <Zap size={32} />,
    title: 'Business Automation',
    description: 'We automate repetitive tasks and workflows so your team focuses on what matters. From WhatsApp responses to CRM integrations and email sequences.',
    benefits: ['WhatsApp auto-responses', 'CRM integration', 'Email marketing automation', 'Workflow optimization'],
    color: '#0066ff',
  },
  {
    icon: <Search size={32} />,
    title: 'SEO & Content Strategy',
    description: 'We develop a full SEO and content strategy to make your business discoverable online, driving organic traffic that converts into paying customers.',
    benefits: ['Technical SEO audit', 'Content planning', 'On-page optimization', 'Monthly reporting'],
    color: '#4d94ff',
  },
];

const Services = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Web Development Services | Professional Digital Solutions',
      description: 'Explore our comprehensive services: web design, SEO optimization, AI chatbots, e-commerce development, and business automation.',
      keywords: 'web development services, web design, SEO services, AI chatbots, e-commerce, business automation, digital marketing',
      canonical: 'https://yourdomain.com/services'
    });
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '180px', paddingBottom: '4rem' }}>
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--accent-cyan)', display: 'block', marginBottom: '1rem' }}>
            What We Do
          </span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '650px', margin: '0 auto' }}>
            We offer complete digital solutions tailored to help your business grow online — from web development and AI automation to SEO and lead generation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {services.map((service, idx) => (
              <div
                key={idx}
                className="service-card"
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <div
                  className="service-icon"
                  style={{ background: `${service.color}18`, color: service.color, width: '60px', height: '60px', borderRadius: '16px' }}
                >
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', flex: 1 }}>{service.description}</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {service.benefits.map((b, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: service.color, flexShrink: 0 }}></span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: service.color, fontWeight: '600', fontSize: '0.9rem', marginTop: '0.5rem', transition: 'gap 0.2s' }}
                  onMouseOver={e => e.currentTarget.style.gap = '10px'}
                  onMouseOut={e => e.currentTarget.style.gap = '6px'}
                >
                  Get this service <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
            Ready to <span className="text-gradient">level up?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
            Let's build your digital presence together. Schedule a free consultation and we'll map out the best strategy for your business.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              Get in Touch
            </Link>
            <Link to="/pricing" className="btn btn-secondary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
