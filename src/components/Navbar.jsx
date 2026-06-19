import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoImg from '../assets/logo sin fondo.webp';
import { ServicesMegaMenu } from './ServicesMegaMenu';
import ThemeToggle from './ThemeToggle';

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
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="navbar-logo">
            <img src={logoImg} alt="Digital Investments Logo" className="header-logo" />
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

            <ThemeToggle />
          </nav>

          <div className="navbar-mobile-actions">
            <ThemeToggle className="theme-toggle-mobile" />
            <button className="menu-toggle" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
            <img src={logoImg} alt="Digital Investments Logo" className="mobile-nav-logo" />
          </Link>
          <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
            <X size={32} />
          </button>
        </div>

        <nav className="mobile-menu-nav">
          {/* Home */}
          <Link
            to="/"
            className={`mobile-menu-item ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Services Section in Mobile - First Priority */}
          <div>
            <Link to="/services" className="mobile-menu-item" style={{ fontSize: '0.9rem', fontWeight: '600', color: '#fff', paddingLeft: '1rem', paddingBottom: '0.5rem' }} onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link to="/services/web-development-design" className="mobile-menu-item" style={{ paddingLeft: '2rem', fontSize: '0.85rem' }} onClick={() => setMobileMenuOpen(false)}>
              Web Development & Design
            </Link>
            <Link to="/services/seo-digital-growth" className="mobile-menu-item" style={{ paddingLeft: '2rem', fontSize: '0.85rem' }} onClick={() => setMobileMenuOpen(false)}>
              SEO & Digital Growth
            </Link>
            <Link to="/services/kpi-dashboards" className="mobile-menu-item" style={{ paddingLeft: '2rem', fontSize: '0.85rem' }} onClick={() => setMobileMenuOpen(false)}>
              KPI Dashboards & Analytics
            </Link>
            <Link to="/services/ai-automation-chatbots" className="mobile-menu-item" style={{ paddingLeft: '2rem', fontSize: '0.85rem' }} onClick={() => setMobileMenuOpen(false)}>
              AI Automation & Chatbots
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
