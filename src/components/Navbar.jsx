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

  const servicesColumns = [
    {
      title: 'Web Development & Design',
      focus: 'Professional websites built for growth',
      icon: <Code size={18} />,
      links: [
        { name: 'Custom Web Design', path: '/services/custom-ux-ui' },
        { name: 'Responsive Development', path: '/services/responsive-web' },
        { name: 'Website Maintenance', path: '/services/maintenance-updates' },
        { name: 'Performance & Speed', path: '/services/performance-optimization' },
        { name: 'Technical Support', path: '/services/technical-support' },
      ]
    },
    {
      title: 'AI Automation & Chatbots',
      focus: '24/7 customer engagement solutions',
      icon: <Bot size={18} />,
      links: [
        { name: 'AI Chatbots', path: '/services/whatsapp-ai-agents' },
        { name: 'Process Automation', path: '/services/workflow-automation' },
        { name: 'API Integration', path: '/services/system-integration' },
        { name: 'Lead Capture', path: '/services/conversational-solutions' },
        { name: 'WhatsApp Integration', path: '/services/custom-chatbots' },
      ]
    },
    {
      title: 'SEO & Digital Growth',
      focus: 'Rank higher and attract more customers',
      icon: <BarChart3 size={18} />,
      links: [
        { name: 'Local SEO', path: '/services/seo-positioning' },
        { name: 'Analytics & Tracking', path: '/services/traffic-analytics' },
        { name: 'Performance Dashboards', path: '/services/kpi-dashboards' },
        { name: 'Monthly Reports', path: '/services/performance-reports' },
        { name: 'Content Marketing', path: '/services/content-strategy' },
      ]
    }
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

            {/* Services Mega Menu Trigger */}
            <div className="nav-mega-item">
              <span className={`nav-mega-trigger ${location.pathname.startsWith('/services') ? 'active' : ''}`}>
                Services <ChevronDown size={14} className="chevron-icon" />
              </span>
              <div className="mega-menu-dropdown">
                <div className="mega-menu-content">
                  {servicesColumns.map((col) => (
                    <div key={col.title} className="mega-menu-column">
                      <div className="mega-menu-col-header">
                        <span className="mega-menu-col-icon">{col.icon}</span>
                        <div>
                          <h4>{col.title}</h4>
                          <p>{col.focus}</p>
                        </div>
                      </div>
                      <ul className="mega-menu-col-links">
                        {col.links.map((link) => (
                          <li key={link.path}>
                            <Link
                              to={link.path}
                              className={location.pathname === link.path ? 'active' : ''}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
