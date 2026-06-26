import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ServicesMegaMenu } from './ServicesMegaMenu';
import ThemeToggle from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';

const Navbar = () => {
  const { content } = useLocalizedContent();
  const { nav, services } = content.common;
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
    // Route changes must close the mobile navigation menu.
    // eslint-disable-next-line react-hooks/set-state-in-effect
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

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="navbar-logo" />

          <nav className="navbar-links">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              {nav.home}
            </Link>

            <Link to="/our-clients" className={location.pathname === '/our-clients' ? 'active' : ''}>
              {nav.clients}
            </Link>

            {/* Services Mega Menu */}
            <ServicesMegaMenu />

            <Link to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>
              {nav.pricing}
            </Link>

            <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
              {nav.blog}
            </Link>

            <Link to="/faqs" className={location.pathname === '/faqs' ? 'active' : ''}>
              {nav.faqs}
            </Link>

            <Link to="/contact" className={`btn btn-contact-header ${location.pathname === '/contact' ? 'active' : ''}`}>
              {nav.contact}
            </Link>

            <LanguageSwitcher />

            <ThemeToggle />
          </nav>

          <div className="navbar-mobile-actions">
            <ThemeToggle className="theme-toggle-mobile" />
            <button className="menu-toggle" onClick={() => setMobileMenuOpen(true)} aria-label={nav.openMenu}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)} />
          <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)} aria-label={nav.closeMenu}>
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
            {nav.home}
          </Link>

          {/* Services Section in Mobile - First Priority */}
          <div>
            <Link to="/services" className="mobile-menu-item" style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)', paddingLeft: '1rem', paddingBottom: '0.5rem' }} onClick={() => setMobileMenuOpen(false)}>
              {nav.services}
            </Link>
            <Link to="/services/web-development-design" className="mobile-menu-item" style={{ paddingLeft: '2rem', fontSize: '0.85rem' }} onClick={() => setMobileMenuOpen(false)}>
              {services.web.title}
            </Link>
            <Link to="/services/seo-digital-growth" className="mobile-menu-item" style={{ paddingLeft: '2rem', fontSize: '0.85rem' }} onClick={() => setMobileMenuOpen(false)}>
              {services.seo.title}
            </Link>
            <Link to="/services/kpi-dashboards" className="mobile-menu-item" style={{ paddingLeft: '2rem', fontSize: '0.85rem' }} onClick={() => setMobileMenuOpen(false)}>
              {services.kpi.title}
            </Link>
            <Link to="/services/ai-automation-chatbots" className="mobile-menu-item" style={{ paddingLeft: '2rem', fontSize: '0.85rem' }} onClick={() => setMobileMenuOpen(false)}>
              {services.ai.title}
            </Link>
          </div>

          {/* Clients - High Conversion Priority */}
          <Link
            to="/our-clients"
            className={`mobile-menu-item ${location.pathname === '/our-clients' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {nav.clients}
          </Link>

          {/* Pricing - High Conversion Priority */}
          <Link
            to="/pricing"
            className={`mobile-menu-item ${location.pathname === '/pricing' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {nav.pricing}
          </Link>

          {/* Contact Us - CTA Priority */}
          <Link
            to="/contact"
            className={`mobile-menu-item contact-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {nav.contactUs}
          </Link>

          {/* FAQs - Medium Priority */}
          <Link
            to="/faqs"
            className={`mobile-menu-item ${location.pathname === '/faqs' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {nav.faqs}
          </Link>

          {/* Blog - Lower Priority */}
          <Link
            to="/blog"
            className={`mobile-menu-item ${location.pathname === '/blog' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {nav.blog}
          </Link>

          {/* Language switcher */}
          <div className="mobile-menu-item" style={{ paddingTop: '0.5rem' }}>
            <LanguageSwitcher onNavigate={() => setMobileMenuOpen(false)} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
