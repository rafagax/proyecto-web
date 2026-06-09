import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoImg from '../assets/logo sin fondo.png';
import { ServicesMegaMenu } from './ServicesMegaMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('mobile-menu-open');
    }
  }, [mobileMenuOpen]);

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'Clients', path: '/our-clients' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQs', path: '/faqs' }
  ];

  return (
    <>
      {/* iPhone Status Bar (Desktop Mockup Only) */}
      <div className="iphone-status-bar desktop-only">
        <span className="status-time">9:41</span>
        <div className="status-icons">
          <span className="signal-bars">
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
            <span className="bar bar4"></span>
          </span>
          <svg className="wifi-icon" width="13" height="9" viewBox="0 0 16 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6c2.2 0 4.2.9 5.7 2.3l-1.4 1.4A5.9 5.9 0 0 0 8 7.5a5.9 5.9 0 0 0-4.3 1.8L2.3 7.9A7.9 7.9 0 0 1 8 6zm0-4c3.3 0 6.3 1.3 8.5 3.5l-1.4 1.4A9.9 9.9 0 0 0 8 3.5a9.9 9.9 0 0 0-7.1 2.9L.5 5C2.7 2.8 5.7 1.5 8 1.5z" />
          </svg>
          <span className="battery-box">
            <span className="battery-level"></span>
            <span className="battery-tip"></span>
          </span>
        </div>
      </div>

      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="navbar-logo">
            <div className="logo-box">
              <span className="logo-data">DATA</span>
              <span className="logo-flow">FLOW</span>
            </div>
          </Link>

          <nav className="navbar-links">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>

            <Link to="/our-clients" className={location.pathname === '/our-clients' ? 'active' : ''}>
              Clients
            </Link>

            {/* Services Mega Menu */}
            <ServicesMegaMenu />

            <Link to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>
              Pricing
            </Link>

            <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
              Blog
            </Link>

            <Link to="/faqs" className={location.pathname === '/faqs' ? 'active' : ''}>
              FAQs
            </Link>

            <Link to="/contact" className={`btn btn-contact-header ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </nav>

          <button className="menu-toggle" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
            <div className="logo-box logo-box-mobile">
              <span className="logo-data">DATA</span>
              <span className="logo-flow">FLOW</span>
            </div>
          </Link>
          <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
            <X size={32} />
          </button>
        </div>

        <nav className="mobile-menu-nav">
          {/* Services Section in Mobile - First Priority */}
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#fff', paddingLeft: '1rem', paddingBottom: '0.5rem' }}>
              Services
            </div>
            <Link to="/services/custom-ux-ui" className="mobile-menu-item" style={{ paddingLeft: '2rem', fontSize: '0.85rem' }} onClick={() => setMobileMenuOpen(false)}>
              We Create Your Professional Website
            </Link>
            <Link to="/services/seo-positioning" className="mobile-menu-item" style={{ paddingLeft: '2rem', fontSize: '0.85rem' }} onClick={() => setMobileMenuOpen(false)}>
              Rank #1 on Google - Local SEO
            </Link>
            <Link to="/services/maintenance-updates" className="mobile-menu-item" style={{ paddingLeft: '2rem', fontSize: '0.85rem' }} onClick={() => setMobileMenuOpen(false)}>
              Website Management & Maintenance
            </Link>
            <Link to="/services/whatsapp-ai-agents" className="mobile-menu-item" style={{ paddingLeft: '2rem', fontSize: '0.85rem' }} onClick={() => setMobileMenuOpen(false)}>
              AI Automation - Sell 24/7 on WhatsApp
            </Link>
          </div>

          {/* Clients - High Conversion Priority */}
          <Link
            to="/our-clients"
            className={`mobile-menu-item ${location.pathname === '/our-clients' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Clients
          </Link>

          {/* Pricing - High Conversion Priority */}
          <Link
            to="/pricing"
            className={`mobile-menu-item ${location.pathname === '/pricing' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>

          {/* Contact Us - CTA Priority */}
          <Link
            to="/contact"
            className={`mobile-menu-item contact-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>

          {/* FAQs - Medium Priority */}
          <Link
            to="/faqs"
            className={`mobile-menu-item ${location.pathname === '/faqs' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQs
          </Link>

          {/* Blog - Lower Priority */}
          <Link
            to="/blog"
            className={`mobile-menu-item ${location.pathname === '/blog' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
