import { useState } from 'react';
import { ArrowRight, Cpu, Bot, Zap, Activity, CheckCircle2, MessageCircle, Mail, MapPin } from 'lucide-react';
import heroImg from '../assets/hero.png';
import { Link } from 'react-router-dom';
import { TestimonialsSection } from '../components/TestimonialsSection';

const Home = () => {
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
              Looking for a<br />
              smart website<br />
              <span className="text-gradient">powered by AI?</span>
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
            <h2 style={{ fontSize: '2.5rem' }}>Our <span className="text-gradient">Services</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Complete digital solutions to grow your brand online.
            </p>
          </div>

          <div className="services-grid">
            {/* 1st: Professional Digital Presence */}
            <div className="service-card">
              <div className="service-icon"><Bot size={24} /></div>
              <h3>Professional Digital Presence</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We build a modern, clear and attractive website that strengthens your business image, builds trust with your clients, and makes your brand project professionalism from the very first click — helping more customers choose your services.
              </p>
            </div>

            {/* 2nd: Fast Web Development */}
            <div className="service-card">
              <div className="service-icon"><Cpu size={24} /></div>
              <h3>Fast & Professional Web Development</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We create modern, fast and multi-device websites in just <strong style={{ color: 'var(--accent-cyan)' }}>7 days</strong>, delivering a clear, attractive and trustworthy experience from the first click.
              </p>
            </div>

            {/* 3rd: Sales Growth */}
            <div className="service-card">
              <div className="service-icon"><Activity size={24} /></div>
              <h3>Sales Growth</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We apply geo-local positioning and web optimization strategies so your business gains more visibility, attracts local clients, ranks first on Google, and gets recommended by AI.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-secondary" style={{ padding: '14px 36px', fontSize: '1rem' }}>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section" id="pricing" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Plans & <span className="text-gradient">Pricing</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Choose the plan that best fits your business needs.
            </p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Ideal to get started</p>
              <div className="price-amount">$299</div>
              <ul className="price-features">
                <li><CheckCircle2 size={18} /> 5-Section Landing Page</li>
                <li><CheckCircle2 size={18} /> Responsive Design</li>
                <li><CheckCircle2 size={18} /> WhatsApp Button</li>
                <li><CheckCircle2 size={18} /> Contact Form</li>
                <li style={{ opacity: 0.5 }}><CheckCircle2 size={18} /> Local SEO Positioning</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary" style={{ width: '100%' }}>Choose Plan</Link>
            </div>

            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <h3>Business</h3>
              <p style={{ color: 'var(--text-secondary)' }}>For growing businesses</p>
              <div className="price-amount text-gradient">$599</div>
              <ul className="price-features">
                <li><CheckCircle2 size={18} /> Multi-Page Website (Up to 5)</li>
                <li><CheckCircle2 size={18} /> Premium Responsive Design</li>
                <li><CheckCircle2 size={18} /> Advanced SEO Optimization</li>
                <li><CheckCircle2 size={18} /> Social Media Integration</li>
                <li><CheckCircle2 size={18} /> Domain & Hosting for 1 Year</li>
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>Choose Plan</Link>
            </div>

            <div className="pricing-card">
              <h3>E-Commerce</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Sell your products online</p>
              <div className="price-amount">$1500</div>
              <ul className="price-features">
                <li><CheckCircle2 size={18} /> Full Online Store</li>
                <li><CheckCircle2 size={18} /> Payment Gateways</li>
                <li><CheckCircle2 size={18} /> Admin Dashboard</li>
                <li><CheckCircle2 size={18} /> First 20 Products Uploaded</li>
                <li><CheckCircle2 size={18} /> Priority Support 1 Month</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary" style={{ width: '100%' }}>Choose Plan</Link>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/pricing" className="btn btn-secondary" style={{ padding: '14px 36px', fontSize: '1rem' }}>
              See Full Pricing Details
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}><span className="text-gradient">Get in Touch</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Ready to start your project? Write to us and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <h3 style={{ fontSize: '1.8rem', lineHeight: '1.2' }}>Your web design ready in just <span className="text-gradient">7 days</span>!</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1.05rem' }}>
                Don't wait any longer to grow your business. Leave us a message about your project and a professional will contact you shortly.
              </p>

              <div className="contact-item">
                <div className="contact-icon"><MessageCircle size={24} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.2rem' }}>WhatsApp</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>+58 414 473 5431</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Mail size={24} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.2rem' }}>Email</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>inversionesdigitales@hotmail.es</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><MapPin size={24} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.2rem' }}>Location</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>Maracay, Aragua, Venezuela</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Service of Interest</label>
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  placeholder="e.g. Business Plan"
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us a bit about your project..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '1.5rem', padding: '18px', fontSize: '1.2rem', width: '100%', boxShadow: '0 10px 25px rgba(0, 229, 255, 0.4)' }}>
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
