import { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updateMetaTags } from '../utils/seo';

const Pricing = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Web Development Pricing | Affordable Plans for All Businesses',
      description: 'Simple, transparent pricing for websites, e-commerce stores, and digital services. Starting at $299 for landing pages. No hidden fees.',
      keywords: 'web development pricing, website cost, landing page price, e-commerce pricing, affordable web design',
      canonical: 'https://yourdomain.com/pricing'
    });
  }, []);
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '180px', paddingBottom: '4rem' }}>
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--accent-cyan)', display: 'block', marginBottom: '1rem' }}>
            Transparent Pricing
          </span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            Plans & <span className="text-gradient">Pricing</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '650px', margin: '0 auto' }}>
            Simple, transparent pricing. No hidden fees. Choose the plan that best fits your business needs and start growing today.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="pricing-grid">
            {/* Starter */}
            <div className="pricing-card">
              <h3>Starter</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Perfect for freelancers & new businesses</p>
              <div className="price-amount">$299</div>
              <ul className="price-features">
                <li><CheckCircle2 size={18} /> 5-Section Landing Page</li>
                <li><CheckCircle2 size={18} /> Responsive Design (Mobile-First)</li>
                <li><CheckCircle2 size={18} /> WhatsApp CTA Button</li>
                <li><CheckCircle2 size={18} /> Contact Form</li>
                <li><CheckCircle2 size={18} /> Google Analytics Setup</li>
                <li><CheckCircle2 size={18} /> Delivery in 7 Days</li>
                <li style={{ opacity: 0.4 }}><CheckCircle2 size={18} /> Local SEO Positioning</li>
                <li style={{ opacity: 0.4 }}><CheckCircle2 size={18} /> Social Media Integration</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary" style={{ width: '100%', marginTop: 'auto' }}>Get Started</Link>
            </div>

            {/* Business — Most Popular */}
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <h3>Business</h3>
              <p style={{ color: 'var(--text-secondary)' }}>For growing SMEs & service businesses</p>
              <div className="price-amount text-gradient">$599</div>
              <ul className="price-features">
                <li><CheckCircle2 size={18} /> Multi-Page Website (Up to 5 Pages)</li>
                <li><CheckCircle2 size={18} /> Premium Responsive Design</li>
                <li><CheckCircle2 size={18} /> Advanced SEO Optimization</li>
                <li><CheckCircle2 size={18} /> Social Media Integration</li>
                <li><CheckCircle2 size={18} /> Domain & Hosting for 1 Year</li>
                <li><CheckCircle2 size={18} /> WhatsApp Chatbot</li>
                <li><CheckCircle2 size={18} /> Google My Business Setup</li>
                <li><CheckCircle2 size={18} /> Priority Support (3 Months)</li>
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}>Get Started</Link>
            </div>

            {/* E-Commerce */}
            <div className="pricing-card">
              <h3>E-Commerce</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Full online store for product businesses</p>
              <div className="price-amount">$1,500</div>
              <ul className="price-features">
                <li><CheckCircle2 size={18} /> Full Online Store</li>
                <li><CheckCircle2 size={18} /> Payment Gateway Integration</li>
                <li><CheckCircle2 size={18} /> Admin Dashboard</li>
                <li><CheckCircle2 size={18} /> First 20 Products Uploaded</li>
                <li><CheckCircle2 size={18} /> Inventory Management</li>
                <li><CheckCircle2 size={18} /> Order Tracking System</li>
                <li><CheckCircle2 size={18} /> SEO for Products</li>
                <li><CheckCircle2 size={18} /> Priority Support (1 Month)</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary" style={{ width: '100%', marginTop: 'auto' }}>Get Started</Link>
            </div>
          </div>

          {/* Monthly Services Section */}
          <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid rgba(0, 229, 255, 0.15)' }}>
            <h2 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '1rem' }}>
              Monthly <span className="text-gradient">Services</span>
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
              Ongoing monthly services to keep your business growing and performing at its best.
            </p>

            <div className="pricing-grid">
              {/* SEO Service */}
              <div className="pricing-card">
                <h3>SEO Optimization</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Rank higher on Google</p>
                <div className="price-amount">$499<span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: '500' }}>/month</span></div>
                <ul className="price-features">
                  <li><CheckCircle2 size={18} /> Keyword Research & Strategy</li>
                  <li><CheckCircle2 size={18} /> On-Page Optimization</li>
                  <li><CheckCircle2 size={18} /> Content Optimization</li>
                  <li><CheckCircle2 size={18} /> Backlink Building</li>
                  <li><CheckCircle2 size={18} /> Monthly SEO Audit</li>
                  <li><CheckCircle2 size={18} /> Google Analytics Reports</li>
                  <li><CheckCircle2 size={18} /> 10+ Pages Optimized</li>
                  <li><CheckCircle2 size={18} /> Priority Support</li>
                </ul>
                <Link to="/contact" className="btn btn-secondary" style={{ width: '100%', marginTop: 'auto' }}>Get Started</Link>
              </div>

              {/* Website Management Service */}
              <div className="pricing-card">
                <h3>Website Management</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Keep your site running smoothly</p>
                <div className="price-amount">$499<span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: '500' }}>/month</span></div>
                <ul className="price-features">
                  <li><CheckCircle2 size={18} /> Daily Security Monitoring</li>
                  <li><CheckCircle2 size={18} /> Automatic Backups</li>
                  <li><CheckCircle2 size={18} /> Software Updates</li>
                  <li><CheckCircle2 size={18} /> Performance Optimization</li>
                  <li><CheckCircle2 size={18} /> 99.9% Uptime Guarantee</li>
                  <li><CheckCircle2 size={18} /> Content Updates (Up to 5/month)</li>
                  <li><CheckCircle2 size={18} /> Bug Fixes & Support</li>
                  <li><CheckCircle2 size={18} /> Monthly Performance Report</li>
                </ul>
                <Link to="/contact" className="btn btn-secondary" style={{ width: '100%', marginTop: 'auto' }}>Get Started</Link>
              </div>

              {/* KPI Service */}
              <div className="pricing-card">
                <h3>KPI Analytics</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Track what matters to your business</p>
                <div className="price-amount">$499<span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: '500' }}>/month</span></div>
                <ul className="price-features">
                  <li><CheckCircle2 size={18} /> Custom Dashboard Setup</li>
                  <li><CheckCircle2 size={18} /> Sales & Revenue Tracking</li>
                  <li><CheckCircle2 size={18} /> Customer Behavior Analysis</li>
                  <li><CheckCircle2 size={18} /> Growth Metrics Dashboard</li>
                  <li><CheckCircle2 size={18} /> Department Performance KPIs</li>
                  <li><CheckCircle2 size={18} /> Real-Time Data Updates</li>
                  <li><CheckCircle2 size={18} /> Weekly Performance Reviews</li>
                  <li><CheckCircle2 size={18} /> Strategic Recommendations</li>
                </ul>
                <Link to="/contact" className="btn btn-secondary" style={{ width: '100%', marginTop: 'auto' }}>Get Started</Link>
              </div>
            </div>
          </div>

          {/* Custom Plan CTA */}
          <div style={{ marginTop: '5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--border-radius-md)', padding: '4rem 3rem', textAlign: 'center', border: '1px solid rgba(0, 229, 255, 0.15)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Need a <span className="text-gradient">Custom Plan?</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto 2rem', lineHeight: '1.7' }}>
              Every business is unique. If none of the above plans fit your needs, let's talk and we'll build a tailored solution for you.
            </p>
            <a
              href="https://wa.me/584144735431?text=Hello!%20I%20would%20like%20a%20custom%20quote%20for%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '16px 40px', fontSize: '1.1rem' }}
            >
              Request a Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Have <span className="text-gradient">questions?</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Check our FAQ page for answers to the most common questions about our services and pricing.
          </p>
          <Link to="/faqs" className="btn btn-secondary" style={{ padding: '14px 36px' }}>View FAQs</Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
