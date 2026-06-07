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

            <Link to="/kpi" className={location.pathname === '/kpi' ? 'active' : ''}>
              KPI
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
            <img src={logoImg} alt="Digital Investments Logo" className="mobile-nav-logo" />
          </Link>
          <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
            <X size={32} />
          </button>
        </div>

        <nav className="mobile-menu-nav">
          {mainLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-menu-item ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`mobile-menu-item contact-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
