import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { ServicesMegaMenu } from './ServicesMegaMenu';
import ThemeToggle from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';
import logoHDark from '../assets/webraf-h-dark.webp';
import logoHLight from '../assets/webraf-h-light.webp';
import logoSqDark from '../assets/webraf-sq-dark.webp';
import logoSqLight from '../assets/webraf-sq-light.webp';

const Navbar = () => {
  const { locale, content } = useLocalizedContent();
  const { nav, services } = content.common;
  const { home } = content;
  // Locale-correct paths for the shared nav links (built from the manifest, never by
  // concatenating /en). Blog stays /blog until it is migrated.
  const navPath = {
    home: getLocalizedPath('home', locale),
    clients: getLocalizedPath('clients', locale),
    pricing: getLocalizedPath('pricing', locale),
    faqs: getLocalizedPath('faqs', locale),
    contact: getLocalizedPath('contact', locale),
    blog: getLocalizedPath('blog', locale),
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
          <Link to={navPath.home} className="navbar-logo" aria-label="Webraf — Web Development">
            <img src={logoHDark} alt="Webraf" className="logo-h logo-dark" />
            <img src={logoHLight} alt="Webraf" className="logo-h logo-light" />
            <img src={logoSqDark} alt="Webraf" className="logo-sq logo-dark" />
            <img src={logoSqLight} alt="Webraf" className="logo-sq logo-light" />
          </Link>

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

            <Link to={navPath.blog} className={location.pathname.startsWith(navPath.blog) ? 'active' : ''}>
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
            <LanguageSwitcher variant="compact" />
            <button className="menu-toggle" onClick={() => setMobileMenuOpen(true)} aria-label={nav.openMenu}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <Link to={navPath.home} className="navbar-logo" onClick={() => setMobileMenuOpen(false)} aria-label="Webraf — Web Development">
            <img src={logoHDark} alt="Webraf" className="logo-h logo-dark" />
            <img src={logoHLight} alt="Webraf" className="logo-h logo-light" />
            <img src={logoSqDark} alt="Webraf" className="logo-sq logo-dark" />
            <img src={logoSqLight} alt="Webraf" className="logo-sq logo-light" />
          </Link>
          <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)} aria-label={nav.closeMenu}>
            <X size={32} />
          </button>
        </div>

        <nav className="mobile-menu-nav">
          {/* 1. Home */}
          <Link
            to={navPath.home}
            className={`mobile-menu-item ${location.pathname === navPath.home ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {nav.home}
          </Link>

          {/* 2. Services — accordion (same links as the desktop dropdown) */}
          <div className="mobile-menu-dropdown-container">
            <button
              type="button"
              className="mobile-menu-item dropdown-toggle"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              {nav.services}
              <ChevronDown
                size={20}
                className="chevron-icon"
                style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>
            <div className={`mobile-mega-submenu ${servicesOpen ? 'open' : ''}`}>
              <div className="mobile-submenu-col">
                <Link to={getLocalizedPath('services', locale)} className="mobile-submenu-item" onClick={() => setMobileMenuOpen(false)}>
                  {nav.services}
                </Link>
                <Link to={getLocalizedPath('svc-web', locale)} className="mobile-submenu-item" onClick={() => setMobileMenuOpen(false)}>
                  {services.web.title}
                </Link>
                <Link to={getLocalizedPath('svc-seo', locale)} className="mobile-submenu-item" onClick={() => setMobileMenuOpen(false)}>
                  {services.seo.title}
                </Link>
                <Link to={getLocalizedPath('svc-kpi', locale)} className="mobile-submenu-item" onClick={() => setMobileMenuOpen(false)}>
                  {services.kpi.title}
                </Link>
                <Link to={getLocalizedPath('svc-ai', locale)} className="mobile-submenu-item" onClick={() => setMobileMenuOpen(false)}>
                  {services.ai.title}
                </Link>
              </div>
            </div>
          </div>

          {/* 3. Clients */}
          <Link
            to={navPath.clients}
            className={`mobile-menu-item ${location.pathname === navPath.clients ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {nav.clients}
          </Link>

          {/* 4. Pricing */}
          <Link
            to={navPath.pricing}
            className={`mobile-menu-item ${location.pathname === navPath.pricing ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {nav.pricing}
          </Link>

          {/* 5. Blog */}
          <Link
            to={navPath.blog}
            className={`mobile-menu-item ${location.pathname.startsWith(navPath.blog) ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {nav.blog}
          </Link>

          {/* 6. FAQs */}
          <Link
            to={navPath.faqs}
            className={`mobile-menu-item ${location.pathname === navPath.faqs ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {nav.faqs}
          </Link>

          {/* Footer: CTA button + Contact link + settings row (language + theme) */}
          <div className="mobile-menu-footer">
            <a
              href={`https://wa.me/584144735431?text=${encodeURIComponent(home.whatsapp.audit)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mobile-menu-cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              {home.cta.freeAudit} <ArrowRight size={18} />
            </a>
            <Link
              to={navPath.contact}
              className={`mobile-menu-item contact-link ${location.pathname === navPath.contact ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {nav.contactUs}
            </Link>
            <div className="mobile-menu-settings">
              <LanguageSwitcher variant="full" onNavigate={() => setMobileMenuOpen(false)} />
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
