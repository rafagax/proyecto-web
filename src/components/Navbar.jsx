import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Code, Bot, BarChart3 } from 'lucide-react';
import logoImg from '../assets/logo sin fondo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  const topServices = [
    {
      name: 'We Create Your Professional Website',
      path: '/services/custom-ux-ui',
      icon: <Code size={18} />,
    },
    {
      name: 'Rank #1 on Google - Local SEO',
      path: '/services/responsive-web',
      icon: <BarChart3 size={18} />,
    },
    {
      name: 'Website Management & Maintenance',
      path: '/services/maintenance-updates',
      icon: <Code size={18} />,
    },
    {
      name: 'AI Automation - Sell 24/7 on WhatsApp',
      path: '/services/whatsapp-ai-agents',
      icon: <Bot size={18} />,
    },
  ];

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Clients', path: '/our-clients' },
    { name: 'Blog', path: '/blog' },
    { name: 'KPI', path: '/kpi' },
    { name: 'FAQs', path: '/faqs' }
  ];

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="navbar-logo">
            <img src={logoImg} alt="Inversiones Digitales Logo" className="header-logo" />
          </Link>

          <nav className="navbar-links">
            <Link
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>

            <Link
              to="/our-clients"
              className={location.pathname === '/our-clients' ? 'active' : ''}
            >
              Clients
            </Link>

            {/* Services Menu - 4 Top Services */}
            <div className="nav-mega-item">
              <span className={`nav-mega-trigger ${location.pathname.startsWith('/services') ? 'active' : ''}`}>
                Services <ChevronDown size={14} className="chevron-icon" />
              </span>
              <div className="mega-menu-dropdown">
                <div className="mega-menu-content">
                  <ul className="mega-menu-col-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {topServices.map((service) => (
                      <li key={service.path}>
                        <Link
                          to={service.path}
                          className={location.pathname === service.path ? 'active' : ''}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '1rem', paddingTop: '1rem' }}>
                    <Link to="/services" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/pricing"
              className={location.pathname === '/pricing' ? 'active' : ''}
            >
              Pricing
            </Link>

            <Link
              to="/blog"
              className={location.pathname === '/blog' ? 'active' : ''}
            >
              Blog
            </Link>

            <Link
              to="/faqs"
              className={location.pathname === '/faqs' ? 'active' : ''}
            >
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
            <img src={logoImg} alt="Inversiones Digitales Logo" className="mobile-nav-logo" />
          </Link>
          <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
            <X size={32} />
          </button>
        </div>
        
        <nav className="mobile-menu-nav">
          <Link
            to="/"
            className={`mobile-menu-item ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/our-clients"
            className={`mobile-menu-item ${location.pathname === '/our-clients' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Clients
          </Link>

          {/* Services Accordion */}
          <div className="mobile-menu-dropdown-container">
            <button 
              className={`mobile-menu-item dropdown-toggle ${location.pathname.startsWith('/services') ? 'active' : ''}`}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <span>Services</span>
              <ChevronDown size={18} className={`chevron-icon ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`mobile-mega-submenu ${mobileServicesOpen ? 'open' : ''}`}>
              {servicesColumns.map((col) => (
                <div key={col.title} className="mobile-submenu-col">
                  <div className="mobile-submenu-col-header">
                    <span className="col-icon">{col.icon}</span>
                    <span>{col.title}</span>
                  </div>
                  <div className="mobile-submenu-col-links">
                    {col.links.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className={`mobile-submenu-item ${location.pathname === link.path ? 'active' : ''}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/pricing"
            className={`mobile-menu-item ${location.pathname === '/pricing' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>

          <Link
            to="/blog"
            className={`mobile-menu-item ${location.pathname === '/blog' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>

          <Link
            to="/faqs"
            className={`mobile-menu-item ${location.pathname === '/faqs' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQs
          </Link>

          <div className="mobile-menu-footer">
            <Link
              to="/contact"
              className="btn btn-primary mobile-contact-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
