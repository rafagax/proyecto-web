import { useState, useEffect } from 'react';
import { ArrowRight, Cpu, Bot, Zap, Activity, CheckCircle2, MessageCircle, Mail, MapPin } from 'lucide-react';
import heroImg from '../assets/hero.png';
import { Link } from 'react-router-dom';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { updateMetaTags } from '../utils/seo';

const Home = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Professional Web Development & Digital Solutions',
      description: 'Build stunning websites in 7 days with AI integration, local SEO, and business automation. We create landing pages and e-commerce solutions for small businesses and enterprises.',
      keywords: 'web development, web design, landing pages, SEO, AI chatbots, e-commerce, business websites, digital marketing',
      ogTitle: 'Transform Your Business with Professional Web Development',
      ogDescription: 'Get a professional website built in 7 days with modern technology and AI-powered features.',
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
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          <div className="hero-content" style={{ flex: '1 1 400px', textAlign: 'left', margin: 0 }}>
            <h1 className="hero-title" style={{ lineHeight: 1.1, marginBottom: '2rem' }}>
              Accelerate Your Business<br />
              with AI-Powered<br />
              <span className="text-gradient">Digital Solutions</span>
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.1rem', maxWidth: '550px', marginLeft: 0 }}>
              We build ultra-fast, automated digital ecosystems optimized for SEO. <strong>Boost your sales</strong> with cutting-edge technology.
            </p>
            <div className="hero-buttons" style={{ marginTop: '3rem', justifyContent: 'flex-start' }}>
              <a href="https://wa.me/584144735431?text=Hello,%20I%20would%20like%20to%20get%20more%20information%20about%20your%20web%20development%20services." target="_blank" rel="noopener noreferrer" className="btn-whatsapp-large">
                <div className="whatsapp-icon-bg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.52 3.449C18.24 1.245 15.24 0 12 0C5.383 0 0 5.383 0 12C0 14.12 0.549 16.19 1.593 18.016L0 24L6.115 22.396C7.882 23.344 9.905 23.856 12 23.856C18.617 23.856 24 18.473 24 12C24 8.76 22.755 5.76 20.52 3.449ZM12 21.841C10.203 21.841 8.468 21.359 6.953 20.461L6.593 20.248L2.946 21.203L3.918 17.656L3.684 17.284C2.688 15.704 2.156 13.888 2.156 12C2.156 6.577 6.577 2.156 12 2.156C14.633 2.156 17.076 3.181 18.939 5.044C20.801 6.907 21.827 9.349 21.827 12C21.827 17.423 17.423 21.841 12 21.841ZM17.423 14.588C17.125 14.439 15.656 13.715 15.385 13.616C15.115 13.517 14.916 13.468 14.717 13.765C14.519 14.063 13.973 14.708 13.805 14.907C13.636 15.105 13.468 15.13 13.171 14.981C12.873 14.832 11.909 14.517 10.771 13.501C9.885 12.711 9.288 11.733 9.119 11.436C8.951 11.139 9.101 10.978 9.25 10.831C9.384 10.697 9.553 10.479 9.702 10.306C9.851 10.132 9.901 10.008 10 9.81C10.099 9.612 10.05 9.438 9.975 9.29C9.9 9.141 9.288 7.643 9.032 7.03C8.784 6.435 8.536 6.516 8.357 6.505C8.188 6.495 7.989 6.495 7.791 6.495C7.592 6.495 7.27 6.569 6.997 6.867C6.724 7.164 5.955 7.883 5.955 9.346C5.955 10.809 7.022 12.222 7.171 12.421C7.32 12.619 9.245 15.707 12.27 16.902C14.656 17.844 15.291 17.656 15.936 17.557C16.581 17.458 18.016 16.69 18.313 15.847C18.611 15.005 18.611 14.286 18.512 14.137C18.413 13.988 18.215 13.888 17.917 13.74Z" fill="white" />
                  </svg>
                </div>
                Get Your Free Audit
              </a>
            </div>
          </div>
          <div className="hero-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={heroImg} alt="AI Technology" style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'contain', filter: 'drop-shadow(0 0 30px rgba(0, 229, 255, 0.3))' }} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Our <span className="text-gradient">Core Services</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Complete digital solutions designed to accelerate your business growth and maximize online visibility.
            </p>
          </div>

          <div className="services-grid">
            {/* 1st: Professional Digital Presence */}
            <div className="service-card">
              <div className="service-icon"><Bot size={24} /></div>
              <h3>Professional Digital Presence</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We design and build stunning, modern websites that establish your brand authority, build customer trust, and showcase professionalism from the first interaction, driving more conversions and customer loyalty.
              </p>
            </div>

            {/* 2nd: Fast Web Development */}
            <div className="service-card">
              <div className="service-icon"><Cpu size={24} /></div>
              <h3>Lightning-Fast Web Development</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                High-performance, fully responsive websites built and deployed in <strong style={{ color: 'var(--accent-cyan)' }}>7 business days</strong>, using cutting-edge technologies optimized for speed, security, and mobile-first design.
              </p>
            </div>

            {/* 3rd: Sales Growth & Local SEO */}
            <div className="service-card">
              <div className="service-icon"><Activity size={24} /></div>
              <h3>Sales Growth & Local SEO</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Strategic local positioning to rank #1 in your city on Google Maps, attract high-intent local customers, and increase direct sales through geo-targeted SEO and optimization.
              </p>
            </div>

            {/* 4th: AI Chatbot Integration */}
            <div className="service-card">
              <div className="service-icon"><MessageSqule size={24} /></div>
              <h3>AI Chatbot & Automation</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Deploy AI-powered chatbots that handle customer inquiries 24/7, generate leads automatically, reduce support costs, and deliver personalized customer experiences at scale.
              </p>
            </div>

            {/* 5th: E-commerce Solutions */}
            <div className="service-card">
              <div className="service-icon"><Zap size={24} /></div>
              <h3>E-commerce & Payment Integration</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Build secure, high-converting online stores with multi-currency payment gateways, inventory management, and seamless checkout experiences that maximize sales and customer satisfaction.
              </p>
            </div>

            {/* 6th: Performance & Security */}
            <div className="service-card">
              <div className="service-icon"><CheckCircle2 size={24} /></div>
              <h3>Performance & Security Optimization</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Enterprise-grade security, SSL certificates, DDoS protection, lightning-fast load times, and continuous monitoring to ensure your website operates flawlessly 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Transform Your Digital Presence?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Join hundreds of businesses already accelerating growth with our solutions. Let's start your journey today.
          </p>
          <div className="hero-buttons">
            <a href="https://wa.me/584144735431?text=Hello,%20I%20would%20like%20to%20get%20more%20information%20about%20your%20web%20development%20services." target="_blank" rel="noopener noreferrer" className="btn-whatsapp-large">
              Start Your Free Audit
            </a>
            <Link to="/contact" className="btn-secondary">Schedule a Consultation</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />
    </div>
  );
};

export default Home;
