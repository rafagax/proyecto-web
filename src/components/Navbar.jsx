import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { ServicesMegaMenu } from './ServicesMegaMenu';
import ThemeToggle from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';
import { BUSINESS_WHATSAPP } from '../config/forms.js';

// Logos live in /public/logos (static paths, not ES imports). NOTE: React 19's SSR
// auto-emits <link rel="preload" as="image"> in the prerendered <head> for EVERY
// eagerly rendered <img> regardless of how the src is referenced — the only opt-outs
// at the <img> level are loading="lazy", fetchPriority="low", or a <picture>/<noscript>
// ancestor. None of the variants should ever be preloaded (they compete with the
// hero image, the LCP, for bandwidth) — here the <picture> ancestor suppresses it,
// and loading/fetchPriority are kept as belt-and-suspenders.
// One <picture> per theme: <source media> swaps the square (mobile) and horizontal
// (desktop) file inside a single <img>, so only ONE logo file is requested per theme
// per load (previously both dark h + sq were always downloaded). CSS still picks the
// dark/light pair via the logo-dark/logo-light classes (no hydration flash).
const LOGO = {
  hDark: '/logos/webraf-h-dark.webp',
  hLight: '/logos/webraf-h-light.webp',
  sqDark: '/logos/webraf-sq-dark.webp',
  sqLight: '/logos/webraf-sq-light.webp',
};

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
  const mobileMenuRef = useRef(null);
  const menuToggleRef = useRef(null);

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

  useEffect(() => {
    // While the mobile menu is open: move focus into it, trap Tab inside,
    // close on Escape, and return focus to the hamburger button on close.
    if (!mobileMenuOpen) return undefined;
    const menu = mobileMenuRef.current;
    // Capture the toggle button now: the ref may have changed by cleanup time.
    const toggleButton = menuToggleRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    menu?.querySelector('.mobile-menu-close')?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        return;
      }
      if (e.key !== 'Tab' || !menu) return;
      const focusables = Array.from(menu.querySelectorAll(focusableSelector));
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && (document.activeElement === first || !menu.contains(document.activeElement))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (document.activeElement === last || !menu.contains(document.activeElement))) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      toggleButton?.focus();
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to={navPath.home} className="navbar-logo" aria-label="Webraf — Web Development">
            {/* Dark <img> (default theme) stays eager; its <picture> ancestor stops
                React's SSR preload and the media queries make the browser fetch
                only the variant for the current breakpoint. The light <img> is
                display:none until the user switches theme, so loading="lazy" means
                it is never downloaded unless/until it becomes visible. Intrinsic
                width/height on <source> and <img> prevent CLS. */}
            <picture>
              <source media="(max-width: 768px)" srcSet={LOGO.sqDark} width="240" height="240" />
              <img src={LOGO.hDark} alt="Webraf" className="logo-img logo-dark" width={480} height={160} fetchPriority="low" />
            </picture>
            <picture>
              <source media="(max-width: 768px)" srcSet={LOGO.sqLight} width="240" height="240" />
              <img src={LOGO.hLight} alt="Webraf" className="logo-img logo-light" width={480} height={160} loading="lazy" />
            </picture>
          </Link>

          <nav className="navbar-links" aria-label={locale === 'es' ? 'Principal' : 'Main'}>
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
            <button
              ref={menuToggleRef}
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label={nav.openMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — inert (plus visibility:hidden in CSS) while closed so its
          links never sit in the tab order or accessibility tree off-screen. */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        inert={!mobileMenuOpen}
      >
        <div className="mobile-menu-header">
          <Link to={navPath.home} className="navbar-logo" onClick={() => setMobileMenuOpen(false)} aria-label="Webraf — Web Development">
            {/* Same <picture> mechanics as the header logo above: one file per
                theme/breakpoint, no SSR preload, light variant lazy until the
                theme switch makes it visible. Same URLs as the header, so the
                browser serves these from cache (no extra request). */}
            <picture>
              <source media="(max-width: 768px)" srcSet={LOGO.sqDark} width="240" height="240" />
              <img src={LOGO.hDark} alt="Webraf" className="logo-img logo-dark" width={480} height={160} fetchPriority="low" />
            </picture>
            <picture>
              <source media="(max-width: 768px)" srcSet={LOGO.sqLight} width="240" height="240" />
              <img src={LOGO.hLight} alt="Webraf" className="logo-img logo-light" width={480} height={160} loading="lazy" />
            </picture>
          </Link>
          <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)} aria-label={nav.closeMenu}>
            <X size={32} />
          </button>
        </div>

        <nav className="mobile-menu-nav" aria-label={locale === 'es' ? 'Móvil' : 'Mobile'}>
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
              {/* Business priority order: flagship service first; the index page moves
                  to a trailing "view all" link so it doesn't compete for the first tap. */}
              <div className="mobile-submenu-col">
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
                <Link to={getLocalizedPath('services', locale)} className="mobile-submenu-item" onClick={() => setMobileMenuOpen(false)}>
                  {locale === 'es' ? 'Ver todos los servicios →' : 'View all services →'}
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
              href={`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(home.whatsapp.audit)}`}
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
