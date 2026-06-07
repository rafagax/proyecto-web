import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Clock, Zap, Target, BarChart3 } from 'lucide-react';
import { updateMetaTags, addServiceSchema } from '../utils/seo';

const serviceDetails = {
  'custom-ux-ui': {
    title: 'Custom Web Design & UX',
    description: 'Professional custom web design tailored to your brand identity and user experience.',
    benefits: ['Unique brand identity', 'Intuitive user experience', 'Modern design trends', 'Mobile responsive', 'Fast loading times'],
    process: ['Discovery & Strategy', 'Wireframing', 'Design & Prototyping', 'User Testing', 'Development & Launch'],
    timeline: '7-14 days',
    price: 'Starting at $500',
    features: [
      'Custom visual design aligned with your brand',
      'Fully responsive on all devices',
      'Optimized for user engagement',
      'Modern UI/UX best practices',
      'Accessibility standards compliance',
      'SEO-friendly structure'
    ]
  },
  'responsive-web': {
    title: 'Responsive Web Development',
    description: 'Build fast, modern websites that work perfectly on all devices.',
    benefits: ['Mobile-first approach', 'Fast performance', 'Clean code', 'Easy maintenance', 'Future-proof technology'],
    process: ['Requirements Analysis', 'Architecture Design', 'Development', 'Testing', 'Deployment'],
    timeline: '7 days',
    price: 'Starting at $299',
    features: [
      'React.js & modern frameworks',
      'Mobile-first responsive design',
      'Optimized for speed and performance',
      'Cross-browser compatibility',
      'Clean, maintainable code',
      'Future-ready technology stack'
    ]
  },
  'maintenance-updates': {
    title: 'Website Maintenance & Updates',
    description: 'Keep your website secure, fast, and updated with regular maintenance services.',
    benefits: ['Constant security', 'Regular backups', 'Performance monitoring', 'Bug fixes', 'Feature updates'],
    process: ['Monitoring', 'Maintenance', 'Updates', 'Optimization', 'Reporting'],
    timeline: 'Ongoing',
    price: 'Starting at $99/month',
    features: [
      'Daily security monitoring',
      'Automatic backups',
      'Performance optimization',
      'Bug fixes & patches',
      'Software updates',
      'Monthly performance reports'
    ]
  },
  'performance-optimization': {
    title: 'Website Performance Optimization',
    description: 'Boost your website speed and performance for better user experience and rankings.',
    benefits: ['Faster load times', 'Better SEO rankings', 'Higher conversions', 'Improved UX', 'Reduced bounce rate'],
    process: ['Audit & Analysis', 'Optimization Strategy', 'Implementation', 'Testing', 'Monitoring'],
    timeline: '3-5 days',
    price: 'Starting at $299',
    features: [
      'Comprehensive speed audit',
      'Image optimization',
      'Code minification & caching',
      'CDN integration',
      'Database optimization',
      'Performance monitoring dashboard'
    ]
  },
  'whatsapp-ai-agents': {
    title: 'AI WhatsApp Agents',
    description: 'Automate customer support and lead generation with intelligent WhatsApp bots.',
    benefits: ['24/7 availability', 'Instant responses', 'Lead capture', 'Cost reduction', 'Increased conversions'],
    process: ['Requirement Gathering', 'Bot Configuration', 'Integration', 'Training & Testing', 'Deployment'],
    timeline: '5-7 days',
    price: 'Starting at $399/month',
    features: [
      'Natural language processing',
      'Automated lead capture',
      'FAQ automation',
      'Order tracking integration',
      'Seamless handoff to humans',
      'Analytics & reporting'
    ]
  },
  'workflow-automation': {
    title: 'Business Process Automation',
    description: 'Automate repetitive tasks and workflows to increase productivity and reduce errors.',
    benefits: ['Time savings', 'Error reduction', 'Cost efficiency', 'Scalability', 'Better reporting'],
    process: ['Process Analysis', 'Automation Design', 'Implementation', 'Testing', 'Training'],
    timeline: '7-14 days',
    price: 'Starting at $299/month',
    features: [
      'Email automation workflows',
      'CRM integration',
      'Task automation',
      'Data synchronization',
      'Performance monitoring',
      'Custom reporting'
    ]
  },
  'system-integration': {
    title: 'API & System Integration',
    description: 'Connect your business systems seamlessly with custom API integrations.',
    benefits: ['Data synchronization', 'Reduced manual work', 'Better data flow', 'System compatibility', 'Scalable infrastructure'],
    process: ['API Analysis', 'Integration Design', 'Development', 'Testing', 'Deployment'],
    timeline: '7-21 days',
    price: 'Starting at $499',
    features: [
      'Custom API development',
      'Third-party service integration',
      'Real-time data sync',
      'Secure authentication',
      'Error handling & logging',
      'API documentation'
    ]
  },
  'seo-positioning': {
    title: 'Local SEO & Web Positioning',
    description: 'Rank higher on Google and attract local customers searching for your services.',
    benefits: ['Higher rankings', 'Local visibility', 'Organic traffic', 'Lead generation', 'Cost-effective marketing'],
    process: ['Keyword Research', 'On-page Optimization', 'Local SEO Setup', 'Link Building', 'Monitoring'],
    timeline: 'Ongoing (results in 30-60 days)',
    price: 'Starting at $299/month',
    features: [
      'Keyword research & strategy',
      'On-page optimization',
      'Google Business Profile setup',
      'Local citation building',
      'Link building strategy',
      'Monthly ranking reports'
    ]
  },
  'traffic-analytics': {
    title: 'Traffic & User Analytics',
    description: 'Understand your website visitors with detailed analytics and insights.',
    benefits: ['Better understanding of users', 'Data-driven decisions', 'Optimization opportunities', 'ROI tracking', 'Competitive insights'],
    process: ['Setup & Configuration', 'Data Collection', 'Analysis', 'Reporting', 'Recommendations'],
    timeline: 'Ongoing',
    price: 'Starting at $149/month',
    features: [
      'Google Analytics 4 setup',
      'Conversion tracking',
      'User behavior analysis',
      'Traffic source identification',
      'Custom dashboards',
      'Monthly performance reports'
    ]
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId] || serviceDetails['custom-ux-ui'];

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
            <div style={{ background: 'var(--bg-primary)', padding: '2rem', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(0,229,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <Clock size={24} color="var(--accent-cyan)" />
                <h3 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>TIMELINE</h3>
              </div>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>{service.timeline}</p>
            </div>

            <div style={{ background: 'var(--bg-primary)', padding: '2rem', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(0,229,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <Target size={24} color="var(--accent-cyan)" />
                <h3 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>PRICING</h3>
              </div>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>{service.price}</p>
            </div>

            <div style={{ background: 'var(--bg-primary)', padding: '2rem', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(0,229,255,0.1)' }}>
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
                    boxShadow: '0 8px 20px rgba(0, 229, 255, 0.3)',
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
