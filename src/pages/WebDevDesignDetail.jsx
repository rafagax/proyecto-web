import {
  ArrowRight,
  Check,
  Palette,
  MessageSquare,
  MousePointerClick,
  Target,
  Search,
  BarChart3,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/herodevelop12.webp';
import responsiveImg from '../assets/developwebhero.webp';
import MobileAutoCarousel from '../components/MobileAutoCarousel';

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

// Dedicated landing page for "Web Design & Development".
// Rebuilt with a modern, conversion-focused section flow while keeping the
// site's brand identity (CSS variables, Navbar/Footer, accent gradient).
const WebDevDesignDetail = ({ otherServices = [] }) => {
  const customPoints = [
    'Unique design aligned with your brand identity',
    'Clear messaging and professional structure',
    'Built to support conversions and business growth',
    'Flexible layout for future updates and expansion',
  ];

  const responsivePoints = [
    'Mobile-friendly design',
    'Optimized page speed',
    'SEO-friendly structure',
    'Smooth navigation and user experience',
  ];

  const ecommercePoints = [
    'Product catalog and shopping cart setup',
    'Secure checkout integration',
    'Easy inventory and order management',
    'User-friendly purchasing experience',
    'Scalable structure for future growth',
  ];

  const capabilities = [
    { Icon: Palette, title: 'Brand Identity', text: 'A design that reflects your logo, colors, style, and personality.' },
    { Icon: MessageSquare, title: 'Clear Message', text: 'Strong copy and headlines that communicate what you offer and why it matters.' },
    { Icon: MousePointerClick, title: 'User Experience', text: 'Simple navigation and intuitive layouts that help visitors find what they need.' },
    { Icon: Target, title: 'Conversion Strategy', text: 'Strategic CTAs, contact forms, and sections designed to generate leads.' },
    { Icon: Search, title: 'SEO-Ready Structure', text: 'Clean, search-friendly foundations that help your business get found on Google.' },
    { Icon: BarChart3, title: 'Analytics & Tracking', text: 'Clear performance tracking to measure results and make better decisions.' },
  ];

  const whyPoints = [
    'Personalized service from strategy to launch',
    'Modern design focused on conversions',
    'Reliable development and technical support',
    'Clear communication throughout the project',
    'Scalable websites built for long-term growth',
  ];

  const process = [
    { n: '01', title: 'Discovery', text: 'We understand your business, goals, audience, and competitors.' },
    { n: '02', title: 'Strategy & Structure', text: 'We define the page layout, user journey, sections, and key conversion points.' },
    { n: '03', title: 'Design', text: 'We create a modern visual direction that fits your brand and improves user experience.' },
    { n: '04', title: 'Development', text: 'We build the website with responsive, optimized, and scalable code.' },
    { n: '05', title: 'Launch & Support', text: 'We test, launch, and provide support to help your website perform properly.' },
  ];

  return (
    <div className="animate-fade-in wdd-page">
      {/* 1. Hero */}
      <section className="hero wdd-hero-section" style={{ paddingTop: '170px', paddingBottom: '4rem', overflow: 'hidden' }}>
        <div className="hero-bg-glow"></div>
        <div className="container">
          <div className="wdd-hero">
            <div className="reveal-left">
              <h1 className="hero-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.12, marginBottom: '1.5rem' }}>
                Web Design &amp; Development That Helps Your <span className="text-gradient">Business Grow</span>
              </h1>
              <p className="hero-subtitle" style={{ fontSize: '1.12rem', lineHeight: 1.7, maxWidth: '560px', margin: 0 }}>
                We create modern, responsive, and conversion-focused websites designed to represent your brand, attract the right audience, and turn visitors into customers.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
                <a href={wa("Hello, I'd like to get a free quote for a website.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                  Get a Free Quote <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Hero image */}
            <div className="reveal-right wdd-hero-img">
              <img src={heroImg} alt="Modern, responsive, conversion-focused website design" fetchPriority="high" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Custom Website Design */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="wdd-two-col" style={{ alignItems: 'center' }}>
            <div className="reveal-left">              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Custom Websites Built Around <span className="text-gradient">Your Brand</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Your website should be more than just an online presence. It should reflect your brand, communicate your value clearly, and guide visitors toward taking action. We design and develop custom websites tailored to your business goals, audience, and industry.
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {customPoints.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href={wa("Hello, I'd like to start a website project.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Start Your Website Project <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal-right wdd-imgpanel wdd-col-img">
              <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1100&q=80&fit=crop" alt="Designer working on a modern website layout and wireframes" loading="lazy" onError={onImgError} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Responsive & Optimized */}
      <section className="section">
        <div className="container">
          <div className="wdd-two-col reverse" style={{ alignItems: 'center' }}>
            <div className="reveal-left">              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Responsive, Fast, and Optimized for <span className="text-gradient">Every Device</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                We build websites that look great and perform smoothly across desktop, tablet, and mobile devices. Every page is structured to improve user experience, loading speed, and visibility on search engines.
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {responsivePoints.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href={wa("Hello, I'd like to improve my online presence with a new website.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Improve Your Online Presence <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal-right wdd-col-img wdd-imgpanel">
              <img src={responsiveImg} alt="One website displayed across desktop, tablet, and mobile devices" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ecommerce */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="wdd-two-col" style={{ alignItems: 'center' }}>
            <div className="reveal-left">              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Ecommerce Websites Designed to <span className="text-gradient">Sell</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                If your goal is to sell online, we can build a professional ecommerce website that makes it easy to showcase products, manage inventory, process orders, and provide a secure shopping experience for your customers.
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {ecommercePoints.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href={wa("Hello, I'd like to build an online store.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Build Your Online Store <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal-right wdd-imgpanel wdd-col-img">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1100&q=80&fit=crop" alt="Ecommerce online store dashboard and product layout" loading="lazy" onError={onImgError} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Website Essentials + Advanced Features (merged) */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem' }} className="reveal">            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
              Everything Your Website Needs to Make a <span className="text-gradient">Strong Impression</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              A successful website combines strategy, design, content, and functionality — working together to help your business stand out and grow online.
            </p>
          </div>

          {/* Desktop: unified grid */}
          <div className="wdd-feature-grid wdd-only-desktop reveal-group">
            {capabilities.map((c) => <FeatureCard key={c.title} {...c} reveal />)}
          </div>
          {/* Mobile: swipeable auto-scrolling carousel */}
          <MobileAutoCarousel>
            {capabilities.map((c) => <FeatureCard key={c.title} {...c} />)}
          </MobileAutoCarousel>

          {/* Single CTA for the section */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href={wa("Hello, I'd like to create a website that works for my business.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
              Create a Website That Works <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="wdd-two-col" style={{ alignItems: 'center' }}>
            <div className="reveal-left">              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Why Work With Our <span className="text-gradient">Web Design Team?</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                We combine design, strategy, and development to create websites that are not only visually attractive but also functional, secure, and focused on results. Our process is personalized, transparent, and built around your business goals.
              </p>
              <a href={wa("Hello, I'd like to talk about my website project.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Let's Talk About Your Project <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal-right">
              <div className="wdd-why-card">
                {whyPoints.map((p) => (
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
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="reveal">            <h2 style={{ fontSize: '2.3rem', lineHeight: 1.2 }}>
              Our Website <span className="text-gradient">Development Process</span>
            </h2>
          </div>
          {/* Desktop: grid */}
          <div className="wdd-process wdd-only-desktop reveal-group">
            {process.map((p) => <ProcessCard key={p.n} {...p} reveal />)}
          </div>
          {/* Mobile: swipeable auto-scrolling carousel */}
          <MobileAutoCarousel speed={0.6}>
            {process.map((p) => <ProcessCard key={p.n} {...p} />)}
          </MobileAutoCarousel>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href={wa("Hello, I'd like to start the process for a new website.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
              Start the Process <ArrowRight size={16} />
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
                Ready to Build a Website That <span className="text-gradient">Grows Your Business?</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '2.25rem' }}>
                Let's create a professional website that represents your brand, improves your online presence, and helps you generate more leads, sales, and opportunities.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <a href={wa("Hello, I'd like to get a free quote for a website.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                  Get a Free Quote <ArrowRight size={16} />
                </a>
                <Link to="/contact" className="btn btn-secondary" style={{ padding: '14px 34px', fontSize: '1rem' }}>
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore other services — internal linking (SEO) */}
      {otherServices.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', textAlign: 'center' }}>
              Explore Our Other <span className="text-gradient">Services</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {otherServices.map((other) => {
                const OtherIcon = other.Icon;
                return (
                  <Link key={other.slug} to={`/services/${other.slug}`} className="service-card" style={{ padding: '2rem 1.75rem', display: 'block', textDecoration: 'none' }}>
                    <div className="service-icon" style={{ marginBottom: '1.25rem', width: '50px', height: '50px' }}>
                      <OtherIcon size={26} />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>{other.eyebrow}</h3>
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
      )}
    </div>
  );
};

export default WebDevDesignDetail;
