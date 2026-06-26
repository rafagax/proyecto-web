import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ServicesMegaMenu } from './ServicesMegaMenu';
import ThemeToggle from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';

const Navbar = () => {
  const { locale, content } = useLocalizedContent();
  const { nav, services } = content.common;
  // Locale-correct paths for the shared nav links (built from the manifest, never by
  // concatenating /en). Blog stays /blog until it is migrated.
  const navPath = {
    home: getLocalizedPath('home', locale),
    clients: getLocalizedPath('clients', locale),
    pricing: getLocalizedPath('pricing', locale),
    faqs: getLocalizedPath('faqs', locale),
    contact: getLocalizedPath('contact', locale),
  };
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
          <Link to={navPath.home} className="navbar-logo" />

          <nav className="navbar-links">
            <Link to={navPath.home} className={location.pathname === navPath.home ? 'active' : ''}>
              {nav.home}
            </Link>

            <Link to={navPath.clients} className={location.pathname === navPath.clients ? 'active' : ''}>
              {nav.clients}
            </Link>

            {/* Services Mega Menu */}
            <ServicesMegaMenu />

            <Link to={navPath.pricing} className={location.pathname === navPath.pricing ? 'active' : ''}>
              {nav.pricing}
            </Link>

            <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
              {nav.blog}
            </Link>

            <Link to={navPath.faqs} className={location.pathname === navPath.faqs ? 'active' : ''}>
              {nav.faqs}
            </Link>

            <Link to={navPath.contact} className={`btn btn-contact-header ${location.pathname === navPath.contact ? 'active' : ''}`}>
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
          <Link to={navPath.home} className="navbar-logo" onClick={() => setMobileMenuOpen(false)} />
          <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)} aria-label={nav.closeMenu}>
            <X size={32} />
          </button>
        </div>

        <nav className="mobile-menu-nav">
          {/* Home */}
          <Link
            to={navPath.home}
            className={`mobile-menu-item ${location.pathname === navPath.home ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {nav.home}
          </Link>

          {/* Services Section in Mobile - First Priority */}
          <div>
            <Link to={getLocalizedPath('services', locale)} className="mobile-menu-item" style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)', paddingLeft: '1rem', paddingBottom: '0.5rem' }} onClick={() => setMobileMenuOpen(false)}>
              {nav.services}
            </Link>
            <Link to={getLocalizedPath('svc-web', locale)} className="mobile-menu-item" style={{ paddingLeft: '2rem', fontSize: '0.85rem' }} onClick={() => setMobileMenuOpen(false)}>
              {services.web.title}
            </Link>
            <Link to={getLocalizedPath('svc-seo', locale)} className="mobile-menu-item" style={{ paddingLeft: '2rem', fontSize: '0.85rem' }} onClick={() => setMobileMenuOpen(false)}>
              {services.seo.title}
            </Link>
            <Link to={getLocalizedPath('svc-kpi', locale)} className="mobile-menu-item" style={{ paddingLeft: '2rem', fontSize: '0.85rem' }} onClick={() => setMobileMenuOpen(false)}>
              {services.kpi.title}
            </Link>
            <Link to={getLocalizedPath('svc-ai', locale)} className="mobile-menu-item" style={{ paddingLeft: '2rem', fontSize: '0.85rem' }} onClick={() => setMobileMenuOpen(false)}>
              {services.ai.title}
            </Link>
          </div>

          {/* Clients - High Conversion Priority */}
          <Link
            to={navPath.clients}
            className={`mobile-menu-item ${location.pathname === navPath.clients ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {nav.clients}
          </Link>

          {/* Pricing - High Conversion Priority */}
          <Link
            to={navPath.pricing}
            className={`mobile-menu-item ${location.pathname === navPath.pricing ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {nav.pricing}
          </Link>

          {/* Contact Us - CTA Priority */}
          <Link
            to={navPath.contact}
            className={`mobile-menu-item contact-link ${location.pathname === navPath.contact ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {nav.contactUs}
          </Link>

          {/* FAQs - Medium Priority */}
          <Link
            to={navPath.faqs}
            className={`mobile-menu-item ${location.pathname === navPath.faqs ? 'active' : ''}`}
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
