import { useState, useEffect } from 'react';
import { ArrowRight, Bot, CheckCircle2, MessageCircle, Mail, MapPin, ChevronRight, Code, TrendingUp, BarChart3, Search } from 'lucide-react';
import heroImg from '../assets/Hero2.webp';
import { Link } from 'react-router-dom';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { BlogCarousel } from '../components/BlogCarousel';
import { blogPosts } from '../data/blogPosts';
import { updateMetaTags } from '../utils/seo';

const Home = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Premium Web Design, SEO & AI Automation for Growing Businesses | Inversiones Digitales',
      description: 'Build a high-converting website, grow your visibility on Google, track your KPIs, and automate customer engagement with AI. Book a strategy call.',
      keywords: 'web development, web design, landing pages, SEO, AI chatbots, e-commerce, business websites, digital marketing',
      ogTitle: 'Premium Web Design, SEO & AI Automation for Growing Businesses',
      ogDescription: 'Build a high-converting website, grow your visibility on Google, track your KPIs, and automate customer engagement with AI.',
      canonical: 'https://yourdomain.com/'
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, service, message } = formData;
    const phone = '584144735431';
    const text = `Hello, my name is ${name}. My email is ${email}. I'm interested in: ${service}. My message: ${message}`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const testimonials = [
    {
      text: 'In 7 days I had my website up and running and receiving clients. The team was incredibly professional and handled everything I asked for.',
      author: 'Rafael Martínez',
      location: 'Valencia, Venezuela 🇻🇪',
      service: 'Landing Page'
    },
    {
      text: 'Thanks to the AI automation they implemented, I answer WhatsApp inquiries effortlessly. My sales went up 40% in the first month.',
      author: 'Daniela Suárez',
      location: 'Maracay, Venezuela 🇻🇪',
      service: 'AI Automation'
    },
    {
      text: 'The chatbot they integrated handles clients while I sleep. It\'s an investment that paid for itself in less than a month.',
      author: 'Miguel Ángel Torres',
      location: 'Maturín, Venezuela 🇻🇪',
      service: 'AI Chatbot'
    },
    {
      text: 'I wasn\'t showing up on Google at all. Now I\'m the top result in my city. The local SEO work they did was extraordinary.',
      author: 'Valentina Castro',
      location: 'Los Teques, Venezuela 🇻🇪',
      service: 'SEO + Web'
    },
    {
      text: 'I needed a bilingual website for my Hispanic audience and they delivered perfectly. The design is clean, fast and professional. Highly recommended!',
      author: 'James Rodríguez',
      location: 'Miami, Florida 🇺🇸',
      service: 'Bilingual Web'
    },
    {
      text: 'My business visibility skyrocketed after their local SEO work. I went from being invisible online to getting 3–4 new clients per week.',
      author: 'Sofia Mendez',
      location: 'Houston, Texas 🇺🇸',
      service: 'Local SEO'
    },
    {
      text: 'I hired the service from Spain and the experience was flawless. They delivered ahead of schedule and the design exceeded my expectations.',
      author: 'Carlos Fernández',
      location: 'Madrid, Spain 🇪🇸',
      service: 'Professional Web'
    },
    {
      text: 'I needed an online store and they set it up in record time. The post-sale support was also excellent. My business grew remarkably.',
      author: 'Lucía Herrera',
      location: 'Barcelona, Spain 🇪🇸',
      service: 'E-Commerce'
    },
    {
      text: 'They built my website in less than a week and the results were immediate. My restaurant started getting online reservations right away. Amazing team!',
      author: 'Carlos Pérez',
      location: 'New York, NY 🇺🇸',
      service: 'Web + SEO'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero" >
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', paddingBottom: '4rem' }}>
          <div className="hero-content hero-content-responsive" style={{ flex: '1 1 400px', textAlign: 'left', margin: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '2rem', minHeight: '600px' }}>
            <h1 className="hero-title" style={{ lineHeight: 1.1, marginBottom: '2rem' }}>
              Web Development,<br className="mobile-only-break" /> <span className="text-gradient">AI Automation</span>,<br className="mobile-only-break" /> and <span className="text-gradient">Advanced Analytics</span>
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.1rem', maxWidth: '550px', marginLeft: 0, marginBottom: '2rem' }}>
              We build your professional website, optimize your Google ranking, and automate your sales with AI, while structuring your key metrics (KPIs) so you maintain total control over your growth in real time.
            </p >

            {/* Hero CTA - Free Advisory (Desktop Only) */}
            <div className="hero-advisory-wrap desktop-only" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
              <a
                href="https://wa.me/584144735431?text=Hello,%20I%20would%20like%20to%20get%20a%20free%20advisory%20session%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="hero-advisory-btn"
              >
                <span className="hero-advisory-btn-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L19 6L15.45 11.13L22 12L15.45 12.87L19 18L13.09 15.74L12 22L10.91 15.74L5 18L8.55 12.87L2 12L8.55 11.13L5 6L10.91 8.26L12 2Z" fill="currentColor" />
                  </svg>
                </span>
                Get Your Free Audit
                <ArrowRight size={17} />
              </a>
            </div>

            {/* Mobile: Hero Image between subtitle and CTA */}
            {/*
            <div className="mobile-hero-img mobile-only">
              <img src={heroImg} alt="AI Technology" className="mobile-hero-img-el" />
            </div>
            */}

            {/* Mobile Hero CTA Button (Mobile Only) */}
            <div className="mobile-hero-cta mobile-only">
              <a
                href="https://wa.me/584144735431?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20audit%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mobile-audit"
              >
                Get Your Free Audit
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Mobile Hero Service Cards List (Mobile Only) */}
            <div className="mobile-hero-services mobile-only">
              <Link to="/services/custom-ux-ui" className="mobile-service-card">
                <div className="service-card-icon-box">
                  <Code size={18} />
                </div>
                <div className="service-card-text">
                  <h4>Web Development & Design</h4>
                  <p>Professional websites built for growth</p>
                </div>
                <ChevronRight size={18} className="service-card-arrow" />
              </Link>

              <Link to="/services/seo-positioning" className="mobile-service-card">
                <div className="service-card-icon-box">
                  <TrendingUp size={18} />
                </div>
                <div className="service-card-text">
                  <h4>SEO & Digital Growth</h4>
                  <p>Rank higher and attract more customers</p>
                </div>
                <ChevronRight size={18} className="service-card-arrow" />
              </Link>

              <Link to="/services/kpi-dashboards" className="mobile-service-card">
                <div className="service-card-icon-box">
                  <BarChart3 size={18} />
                </div>
                <div className="service-card-text">
                  <h4>KPI & Performance Indicators</h4>
                  <p>Know exactly how your business is performing</p>
                </div>
                <ChevronRight size={18} className="service-card-arrow" />
              </Link>

              <Link to="/services/whatsapp-ai-agents" className="mobile-service-card">
                <div className="service-card-icon-box">
                  <Bot size={18} />
                </div>
                <div className="service-card-text">
                  <h4>AI Automation & Chatbots</h4>
                  <p>24/7 customer engagement solutions</p>
                </div>
                <ChevronRight size={18} className="service-card-arrow" />
              </Link>
            </div>

            <div className="hero-contact-form desktop-only" style={{ marginTop: '1.5rem', width: '100%', maxWidth: '320px', margin: '1.5rem auto 0' }}>
              <h3 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.25rem', textAlign: 'center' }}>Get Your Free Audit</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                const phone = e.target.phone?.value || '';
                const email = e.target.email?.value || '';
                const message = e.target.message?.value || '';
                const waPhone = '584144735431';
                const text = `📱 Phone: ${phone}\n📧 Email: ${email}\n💬 Message: ${message}`;
                window.open(`https://wa.me/${waPhone}?text=${encodeURIComponent(text)}`, '_blank');
              }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="tel" name="phone" placeholder="Your phone number" required style={{ padding: '0.9rem', borderRadius: '10px', border: '1px solid rgba(77, 148, 255, 0.3)', background: 'rgba(255, 255, 255, 0.05)', color: '#fff', fontSize: '0.9rem', width: '100%' }} />
                <input type="email" name="email" placeholder="Your email" required style={{ padding: '0.9rem', borderRadius: '10px', border: '1px solid rgba(77, 148, 255, 0.3)', background: 'rgba(255, 255, 255, 0.05)', color: '#fff', fontSize: '0.9rem', width: '100%' }} />
                <textarea name="message" placeholder="What service do you need or why are you contacting us?" required rows="4" style={{ padding: '0.9rem', borderRadius: '10px', border: '1px solid rgba(77, 148, 255, 0.3)', background: 'rgba(255, 255, 255, 0.05)', color: '#fff', fontSize: '0.9rem', width: '100%', fontFamily: 'inherit', resize: 'none' }} />
                <button type="submit" style={{ padding: '1rem', borderRadius: '10px', background: '#4d94ff', color: '#05050a', border: 'none', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.target.style.boxShadow = '0 8px 25px rgba(77, 148, 255, 0.4)'} onMouseLeave={(e) => e.target.style.boxShadow = 'none'}>
                  Get Your Free Audit
                </button>
              </form>
            </div>
          </div>
          {/* Desktop hero image */}
          <div className="hero-image desktop-only" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={heroImg} alt="AI Technology" style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'contain', filter: 'drop-shadow(0 0 30px rgba(77, 148, 255, 0.3))' }} />
          </div>
        </div>
      </section>

      {/* 2. Problem / Value Proposition */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              Your Website Should Do <span className="text-gradient">More Than Look Good</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', lineHeight: '1.7' }}>
              A premium website should attract the right audience, convert visitors into qualified leads, and give you clear insight into what is working. We combine design, SEO, performance tracking, and AI automation to create a digital presence built for measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="section" id="services">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>
              Digital Growth Services for <span className="text-gradient">Ambitious Businesses</span>
            </h2>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '2rem' }}>
            <div className="service-card" style={{ padding: '2.5rem 2rem' }}>
              <div className="service-icon" style={{ marginBottom: '1.5rem' }}><Code size={32} /></div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Web Development & Design</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                High-end, responsive websites designed to build trust, convert visitors, and support long-term business growth.
              </p>
              <div className="service-highlight">We build your website in just 7 days</div>
            </div>

            <div className="service-card" style={{ padding: '2.5rem 2rem' }}>
              <div className="service-icon" style={{ marginBottom: '1.5rem' }}><TrendingUp size={32} /></div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>SEO & Digital Growth</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Improve your visibility on Google, attract qualified traffic, and turn search intent into real business opportunities.
              </p>
              <div className="service-highlight">Rank #1 in your city and get found first</div>
            </div>

            <div className="service-card" style={{ padding: '2.5rem 2rem' }}>
              <div className="service-icon" style={{ marginBottom: '1.5rem' }}><BarChart3 size={32} /></div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>KPI & Performance Indicators</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Get clear dashboards and performance insights so you always know what is working and where to improve.
              </p>
              <div className="service-highlight">Know what's working, in real time</div>
            </div>

            <div className="service-card" style={{ padding: '2.5rem 2rem' }}>
              <div className="service-icon" style={{ marginBottom: '1.5rem' }}><Bot size={32} /></div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>AI Automation & Chatbots</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Engage leads, answer questions, and support customers 24/7 with intelligent AI-powered automation.
              </p>
              <div className="service-highlight">A 24/7 AI agent selling for you</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Differentiator: Digital Growth System */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
            <div style={{ flex: '1 1 450px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                Not Just a Website.<br />
                <span className="text-gradient">A Digital Growth System.</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Your website, SEO, KPIs, and automation should not work separately. We connect them into one clear system designed to attract better visitors, generate more leads, and help you make smarter business decisions.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href="https://wa.me/584144735431?text=Hello,%20I%20would%20like%20to%20learn%20more%20about%20your%20Digital%20Growth%20System."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-advisory-btn"
                  style={{ margin: 0 }}
                >
                  Discover the System
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>
            
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '380px' }}>
              {/* Visual System representation using CSS */}
              <div className="system-diagram-container">
                {/* Static Center Hub */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(77, 148, 255, 0.2) 0%, rgba(5, 5, 10, 0.9) 70%)',
                  border: '2px dashed var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 30px rgba(77, 148, 255, 0.3)',
                  zIndex: 10
                }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#fff', textAlign: 'center' }}>SYSTEM</span>
                </div>

                {/* Rotating Orbit Container */}
                <div className="orbit-container">
                  {/* Web Node */}
                  <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <div className="orbiting-node" style={{
                      padding: '0.75rem 1.25rem',
                      borderRadius: '30px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(77, 148, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                      whiteSpace: 'nowrap'
                    }}>
                      <Code size={16} style={{ color: 'var(--accent-cyan)' }} />
                      <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Web Design</span>
                    </div>
                  </div>

                  {/* SEO Node */}
                  <div style={{ position: 'absolute', top: '50%', left: '100%', transform: 'translate(-50%, -50%)' }}>
                    <div className="orbiting-node" style={{
                      padding: '0.75rem 1.25rem',
                      borderRadius: '30px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(77, 148, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                      whiteSpace: 'nowrap'
                    }}>
                      <TrendingUp size={16} style={{ color: 'var(--accent-cyan)' }} />
                      <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>SEO</span>
                    </div>
                  </div>

                  {/* KPI Node */}
                  <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <div className="orbiting-node" style={{
                      padding: '0.75rem 1.25rem',
                      borderRadius: '30px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(77, 148, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                      whiteSpace: 'nowrap'
                    }}>
                      <BarChart3 size={16} style={{ color: 'var(--accent-cyan)' }} />
                      <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>KPI Dashboards</span>
                    </div>
                  </div>

                  {/* AI Node */}
                  <div style={{ position: 'absolute', top: '50%', left: '0', transform: 'translate(-50%, -50%)' }}>
                    <div className="orbiting-node" style={{
                      padding: '0.75rem 1.25rem',
                      borderRadius: '30px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(77, 148, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                      whiteSpace: 'nowrap'
                    }}>
                      <Bot size={16} style={{ color: 'var(--accent-cyan)' }} />
                      <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>AI Automation</span>
                    </div>
                  </div>

                  {/* Animated Ring */}
                  <div className="system-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Offerings — What We Actually Build */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <span className="feature-eyebrow" style={{ justifyContent: 'center' }}>What We Build</span>
            <h2 style={{ fontSize: '2.5rem', lineHeight: 1.2 }}>
              Three Things That Turn Your Website Into a <span className="text-gradient">Sales Machine</span>
            </h2>
          </div>

          {/* Offering 1 — Web Development */}
          <div className="feature-row">
            <div className="feature-text">
              <span className="feature-eyebrow"><Code size={16} /> Web Development &amp; Design</span>
              <h3 style={{ fontSize: '1.9rem', marginBottom: '1rem', lineHeight: 1.25, color: '#fff' }}>
                A fast, premium website built to <span className="text-gradient">convert</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                We hand-code every site for speed, trust, and conversions — no bloated templates. Designed mobile-first and engineered to turn visitors into paying customers.
              </p>
              <ul className="feature-bullets">
                <li><CheckCircle2 size={18} /> Custom design tailored to your brand identity</li>
                <li><CheckCircle2 size={18} /> Loads in under 2 seconds on any device</li>
                <li><CheckCircle2 size={18} /> Clear calls-to-action that drive WhatsApp leads</li>
              </ul>
              <Link to="/services/custom-ux-ui" className="hero-advisory-btn" style={{ margin: 0 }}>
                Explore Web Development <ArrowRight size={16} />
              </Link>
            </div>
            <div className="feature-visual feature-visual-image">
              {/* Premium corporate website image */}
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&h=650&fit=crop&q=80"
                alt="Premium corporate website design on screen"
                loading="lazy"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(5,5,10,0) 30%, rgba(5,5,10,0.92) 100%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', left: '1.5rem', bottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontWeight: 700, fontSize: '1rem' }}>
                <Code size={16} style={{ color: 'var(--accent-cyan)' }} />
                Premium corporate websites
              </div>
            </div>
          </div>

          {/* Offering 2 — SEO */}
          <div className="feature-row reverse">
            <div className="feature-text">
              <span className="feature-eyebrow"><TrendingUp size={16} /> SEO &amp; Digital Growth</span>
              <h3 style={{ fontSize: '1.9rem', marginBottom: '1rem', lineHeight: 1.25, color: '#fff' }}>
                Get found first when customers <span className="text-gradient">search for you</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                We optimize your site to climb Google for the searches that bring real buyers in your area — so you attract qualified traffic instead of paying for every click.
              </p>
              <ul className="feature-bullets">
                <li><CheckCircle2 size={18} /> Local SEO to dominate your city &amp; niche</li>
                <li><CheckCircle2 size={18} /> Keyword &amp; competitor research that targets buyers</li>
                <li><CheckCircle2 size={18} /> Built to rank from day one, not months later</li>
              </ul>
              <Link to="/services/seo-positioning" className="hero-advisory-btn" style={{ margin: 0 }}>
                Explore SEO &amp; Growth <ArrowRight size={16} />
              </Link>
            </div>
            <div className="feature-visual">
              {/* Search ranking mockup */}
              <div style={{ width: '82%', maxWidth: '340px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 16px', borderRadius: 30, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: 28 }}>
                  <Search size={16} style={{ color: 'var(--accent-cyan)' }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>best [your service] near me</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 130 }}>
                  {[40, 58, 74, 100].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '6px 6px 0 0', background: i === 3 ? 'linear-gradient(180deg, var(--accent-cyan), var(--accent-blue))' : 'rgba(255,255,255,0.08)', position: 'relative' }}>
                      {i === 3 && <span style={{ position: 'absolute', top: -26, left: '50%', transform: 'translateX(-50%)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>#1</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Offering 3 — AI WhatsApp Agents */}
          <div className="feature-row">
            <div className="feature-text">
              <span className="feature-eyebrow"><Bot size={16} /> AI Automation &amp; WhatsApp Agents</span>
              <h3 style={{ fontSize: '1.9rem', marginBottom: '1rem', lineHeight: 1.25, color: '#fff' }}>
                An AI agent that <span className="text-gradient">answers and sells</span> for you, 24/7
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                We build smart WhatsApp agents that reply in seconds, answer questions, qualify leads, and book appointments — even while you sleep. Stop losing sales to slow replies.
              </p>
              <ul className="feature-bullets">
                <li><CheckCircle2 size={18} /> Instant replies that capture every lead</li>
                <li><CheckCircle2 size={18} /> Answers FAQs, quotes prices &amp; books appointments</li>
                <li><CheckCircle2 size={18} /> Trained on your business, in your tone of voice</li>
              </ul>
              <Link to="/services/whatsapp-ai-agents" className="hero-advisory-btn" style={{ margin: 0 }}>
                Explore AI Agents <ArrowRight size={16} />
              </Link>
            </div>
            <div className="feature-visual">
              {/* WhatsApp chat mockup */}
              <div style={{ width: '82%', maxWidth: '320px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ alignSelf: 'flex-start', maxWidth: '82%', padding: '11px 15px', borderRadius: '16px 16px 16px 4px', background: 'rgba(255,255,255,0.07)', color: '#fff', fontSize: '0.85rem', lineHeight: 1.45 }}>
                  Hi! Do you have availability this week? 👋
                </div>
                <div style={{ alignSelf: 'flex-end', maxWidth: '82%', padding: '11px 15px', borderRadius: '16px 16px 4px 16px', background: 'linear-gradient(135deg, #4d94ff, #0066ff)', color: '#05050a', fontSize: '0.85rem', fontWeight: 500, lineHeight: 1.45 }}>
                  Yes! I can book you for Thursday at 3pm. Shall I confirm it? ✅
                </div>
                <div style={{ alignSelf: 'flex-end', maxWidth: '82%', padding: '11px 15px', borderRadius: '16px 16px 4px 16px', background: 'linear-gradient(135deg, #4d94ff, #0066ff)', color: '#05050a', fontSize: '0.85rem', fontWeight: 500, lineHeight: 1.45 }}>
                  Great — you're booked. Here's a quick price list meanwhile 📋
                </div>
                <div style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: 8, marginTop: 4, fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  <Bot size={14} /> AI agent replied in 8 seconds
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. How It Works — 3-Step Process */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <span className="feature-eyebrow" style={{ justifyContent: 'center' }}>How It Works</span>
            <h2 style={{ fontSize: '2.5rem' }}>
              From Idea to Live in <span className="text-gradient">3 Simple Steps</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem' }}>
              A clear, no-stress process that takes you from where you are to a digital presence that sells.
            </p>
          </div>

          <div className="process-timeline-wrapper" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', position: 'relative' }}>
            {/* Step 1 */}
            <div style={{ flex: '1 1 280px', position: 'relative', padding: '2.25rem 2rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '14px', border: '1px solid rgba(77, 148, 255, 0.1)' }}>
              <div style={{ position: 'absolute', top: '-22px', left: '2rem', fontSize: '3rem', fontWeight: '900', color: 'rgba(77, 148, 255, 0.18)', fontStyle: 'italic', fontFamily: 'monospace' }}>01</div>
              <h3 style={{ fontSize: '1.35rem', marginTop: '1rem', marginBottom: '1rem', color: '#fff' }}>Discover</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                We learn your business, study your competitors, and pinpoint the searches and questions your customers use — so every decision is built around real demand.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{ flex: '1 1 280px', position: 'relative', padding: '2.25rem 2rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '14px', border: '1px solid rgba(77, 148, 255, 0.1)' }}>
              <div style={{ position: 'absolute', top: '-22px', left: '2rem', fontSize: '3rem', fontWeight: '900', color: 'rgba(77, 148, 255, 0.18)', fontStyle: 'italic', fontFamily: 'monospace' }}>02</div>
              <h3 style={{ fontSize: '1.35rem', marginTop: '1rem', marginBottom: '1rem', color: '#fff' }}>Build</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                We design and code your fast, mobile-first website, optimize it for Google, and set up your AI WhatsApp agent so it's ready to answer and sell from day one.
              </p>
            </div>

            {/* Step 3 */}
            <div style={{ flex: '1 1 280px', position: 'relative', padding: '2.25rem 2rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '14px', border: '1px solid rgba(77, 148, 255, 0.1)' }}>
              <div style={{ position: 'absolute', top: '-22px', left: '2rem', fontSize: '3rem', fontWeight: '900', color: 'rgba(77, 148, 255, 0.18)', fontStyle: 'italic', fontFamily: 'monospace' }}>03</div>
              <h3 style={{ fontSize: '1.35rem', marginTop: '1rem', marginBottom: '1rem', color: '#fff' }}>Grow</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                After launch we monitor performance, refine your SEO, and fine-tune your AI agent's replies — continuously improving so you capture more leads and close more sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pricing Teaser (light) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', padding: '3.5rem 2.5rem', borderRadius: '20px', border: '1px solid rgba(77, 148, 255, 0.15)', background: 'linear-gradient(180deg, rgba(77, 148, 255, 0.05), rgba(255, 255, 255, 0.01))' }}>
            <span className="feature-eyebrow" style={{ justifyContent: 'center' }}>Transparent Pricing</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
              Professional websites starting from <span className="text-gradient">$299</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 2rem' }}>
              Simple, transparent pricing with no hidden fees. Start with a one-time build and add monthly SEO, management, or AI services whenever you're ready.
            </p>
            <Link to="/pricing" className="hero-advisory-btn" style={{ margin: 0 }}>
              See Plans &amp; Pricing <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Final CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Ready to Build a <span className="text-gradient">Smarter Digital Presence?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Book your free audit and strategy session today. We'll identify local search opportunities, audit site speed, and outline a custom digital growth blueprint for your business.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a
              href="https://wa.me/584144735431?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20audit%20and%20strategy%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="hero-advisory-btn"
            >
              <span className="hero-advisory-btn-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L19 6L15.45 11.13L22 12L15.45 12.87L19 18L13.09 15.74L12 22L10.91 15.74L5 18L8.55 12.87L2 12L8.55 11.13L5 6L10.91 8.26L12 2Z" fill="currentColor" />
                </svg>
              </span>
              Get Your Free Audit
              <ArrowRight size={17} />
            </a>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <div style={{ padding: '2.5rem 2rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <MessageCircle size={32} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }} />
              <h3>WhatsApp</h3>
              <a href="https://wa.me/584144735431" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontWeight: '600' }}>
                +58 414 473 5431
              </a>
            </div>
            <div style={{ padding: '2.5rem 2rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Mail size={32} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }} />
              <h3>Email</h3>
              <a href="mailto:inversionesdigitales@hotmail.es" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontWeight: '600' }}>
                inversionesdigitales@hotmail.es
              </a>
            </div>
            <div style={{ padding: '2.5rem 2rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <MapPin size={32} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }} />
              <h3>Location</h3>
              <p style={{ color: 'var(--text-secondary)', fontWeight: '600', margin: 0 }}>
                Maracay, Aragua, Venezuela
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Carousel Component */}
      <BlogCarousel />

      {/* Contact Form Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Schedule Free Consultation</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Service of Interest</label>
                <input
                  type="text"
                  name="service"
                  placeholder="e.g. Business Plan"
                  value={formData.service}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us a bit about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    color: '#fff',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-whatsapp-large"
                style={{ width: '100%' }}
              >
                Schedule Free Consultation
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
