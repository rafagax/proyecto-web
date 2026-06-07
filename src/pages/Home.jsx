import { useState, useEffect } from 'react';
import { ArrowRight, Cpu, Bot, Zap, Activity, CheckCircle2, MessageCircle, Mail, MapPin, Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';
import heroImg from '../assets/hero.png';
import { Link } from 'react-router-dom';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { BlogCarousel } from '../components/BlogCarousel';
import { blogPosts } from '../data/blogPosts';
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
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const pricingPlans = [
    {
      name: 'Starter',
      subtitle: 'Ideal to get started',
      price: '$299',
      features: [
        '5-Section Landing Page',
        'Responsive Design',
        'WhatsApp Button',
        'Contact Form',
        'Local SEO Positioning'
      ],
      popular: false
    },
    {
      name: 'Business',
      subtitle: 'For growing businesses',
      price: '$599',
      features: [
        'Multi-Page Website (Up to 5)',
        'Premium Responsive Design',
        'Advanced SEO Optimization',
        'Social Media Integration',
        'Domain & Hosting for 1 Year'
      ],
      popular: true
    },
    {
      name: 'E-Commerce',
      subtitle: 'Sell your products online',
      price: '$1500',
      features: [
        'Full Online Store',
        'Payment Gateways',
        'Admin Dashboard',
        'First 20 Products Uploaded',
        'Priority Support 1 Month'
      ],
      popular: false
    }
  ];

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
      <section className="hero">
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', paddingBottom: '4rem' }}>
          <div className="hero-content" style={{ flex: '1 1 400px', textAlign: 'left', margin: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '2rem', minHeight: '600px' }}>
            <h1 className="hero-title" style={{ lineHeight: 1.1, marginBottom: '2rem' }}>
              Web Development, <span className="text-gradient">AI Automation</span>, and <br />
              Advanced Analytics
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.1rem', maxWidth: '550px', marginLeft: 0, marginBottom: '2.5rem' }}>
              We build your professional website, optimize your Google ranking, and automate your sales with AI, while structuring your key metrics (KPIs) so you maintain total control over your growth in reaal time.
            </p>
            <div className="hero-buttons" style={{ marginTop: 0, justifyContent: 'flex-start' }}>
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
            <div className="service-card">
              <div className="service-icon"><Bot size={24} /></div>
              <h3>Professional Digital Presence</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We design and build stunning, modern websites that establish your brand authority, build customer trust, and showcase professionalism from the first interaction, driving more conversions and customer loyalty.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon"><Cpu size={24} /></div>
              <h3>Lightning-Fast Web Development</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                High-performance, fully responsive websites built and deployed in <strong style={{ color: 'var(--accent-cyan)' }}>7 business days</strong>, using cutting-edge technologies optimized for speed, security, and mobile-first design.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon"><Activity size={24} /></div>
              <h3>SEO & Growth Strategy</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Data-driven SEO and local marketing strategies that position your business at the top of Google search results, attract qualified leads, and generate sustainable revenue growth in your market.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/services" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let's Build Something Great</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
            Ready to transform your digital presence? Get in touch with our team for a personalized consultation and free strategy session.
          </p>
          <div className="hero-buttons">
            <a href="https://wa.me/584144735431?text=Hello,%20I%20would%20like%20to%20get%20more%20information%20about%20your%20web%20development%20services." target="_blank" rel="noopener noreferrer" className="btn-whatsapp-large">
              Start Your Free Audit
            </a>
            <Link to="/contact" className="btn-whatsapp-large">Schedule a Consultation</Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Websites Delivered in 7 Days</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
            Don't let another day go by without a professional online presence. Contact us today and our team will reach out within 24 hours with a personalized strategy.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <div style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <MessageCircle size={32} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }} />
              <h3>WhatsApp</h3>
              <a href="https://wa.me/584144735431" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>
                +58 414 473 5431
              </a>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Mail size={32} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }} />
              <h3>Email</h3>
              <a href="mailto:inversionesdigitales@hotmail.es" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>
                inversionesdigitales@hotmail.es
              </a>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <MapPin size={32} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }} />
              <h3>Location</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
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
