import { useState, useEffect } from 'react';
import { MessageCircle, Mail, MapPin } from 'lucide-react';
import { updateMetaTags } from '../utils/seo';

const Contact = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Contact Us | Get Your Free Web Strategy Consultation',
      description: 'Ready to transform your business? Contact us for a free consultation. We respond within 2 hours. WhatsApp, email, and phone support available.',
      keywords: 'contact us, free consultation, web development quote, business consultation, digital strategy',
      canonical: 'https://yourdomain.com/contact'
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
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '20vh', paddingTop: '50px', paddingBottom: '0rem', marginTop: '40px' }}>
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--accent-cyan)', display: 'block', marginBottom: '1rem' }}>
            Let's Talk
          </span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Ready to start your project? Write to us and a professional will get back to you as soon as possible — usually within a few hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ paddingTop: '0rem' }}>
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h3 style={{ fontSize: '1.8rem', lineHeight: '1.2' }}>Professional Websites in <span className="text-gradient">7 Days</span></h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1.05rem' }}>
                Don't let another day pass without a professional online presence. Our team will analyze your needs and create a customized strategy to help you stand out and dominate your market.
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

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.08) 0%, rgba(77, 148, 255, 0.08) 100%)', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(77, 148, 255,0.2)' }}>
                <p style={{ color: 'var(--accent-cyan)', fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.9rem' }}>⚡ Lightning-Fast Response</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  We typically respond within <strong style={{ color: '#fff' }}>2–4 hours</strong> during business hours. Leave us a message and let's start building your digital empire!
                </p>
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
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: '1.5rem', padding: '18px', fontSize: '1.1rem', fontWeight: '700', width: '100%', boxShadow: '0 10px 25px rgba(77, 148, 255, 0.4)', letterSpacing: '0.5px' }}
              >
                Schedule Free Strategy Call
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
