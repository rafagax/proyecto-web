import { useEffect } from 'react';
import { ArrowRight, Zap, Clock, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updateMetaTags } from '../utils/seo';

const Home = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Professional Web Development & Digital Solutions | 7-Day Delivery',
      description: 'Build stunning, fast websites in 7 days. AI chatbots, local SEO, and business automation. Perfect for small businesses and e-commerce stores.',
      keywords: 'web design, web development, SEO, landing pages, AI chatbots, e-commerce',
    });
  }, []);

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Professional Web Solutions for Your Business</h1>
          <p>Build your online presence in just 7 days with our expert web development team. Featuring AI chatbots, local SEO, and business automation.</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Get Started <ArrowRight size={20} />
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <Clock size={40} />
              <h3>Fast Delivery</h3>
              <p>Your website ready in just 7 days</p>
            </div>
            <div className="feature-card">
              <Zap size={40} />
              <h3>High Performance</h3>
              <p>Optimized for speed and user experience</p>
            </div>
            <div className="feature-card">
              <Smartphone size={40} />
              <h3>Responsive Design</h3>
              <p>Perfect on all devices and screen sizes</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Contact us today for a free consultation.</p>
          <Link to="/contact" className="btn btn-primary">
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
