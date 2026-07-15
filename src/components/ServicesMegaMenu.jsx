import { useState, useRef, useEffect } from 'react';
import { Code, TrendingUp, BarChart3, Bot, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';

export const ServicesMegaMenu = () => {
  const { locale, content } = useLocalizedContent();
  const { nav, services } = content.common;
  // Web Development & Design is bilingual: link to the locale-correct path from the
  // manifest. SEO/KPI/AI are not migrated yet, so they keep their legacy URLs.
  const serviceItems = [
    {
      title: services.web.title,
      description: services.web.description,
      icon: <Code size={20} />,
      path: getLocalizedPath('svc-web', locale),
    },
    {
      title: services.seo.title,
      description: services.seo.description,
      icon: <TrendingUp size={20} />,
      path: getLocalizedPath('svc-seo', locale),
    },
    {
      title: services.kpi.title,
      description: services.kpi.description,
      icon: <BarChart3 size={20} />,
      path: getLocalizedPath('svc-kpi', locale),
    },
    {
      title: services.ai.title,
      description: services.ai.description,
      icon: <Bot size={20} />,
      path: getLocalizedPath('svc-ai', locale),
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const wrapperRef = useRef(null);
  // True while the current tap started on a touch pointer with the menu closed
  // (set on pointerdown, i.e. before any emulated mouseenter can open it).
  const touchOpensMenuRef = useRef(false);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  // Keyboard accessibility: open while any element inside has focus,
  // close when focus leaves the menu or Escape is pressed.
  const handleFocus = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const handleBlur = (e) => {
    if (!wrapperRef.current?.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setIsOpen(false);
  };

  // Touch support (wide touch screens show the desktop navbar): the first tap on
  // the trigger opens the dropdown instead of navigating; a second tap follows the
  // link. ARIA APG "disclosure navigation" pattern.
  const handleTriggerPointerDown = (e) => {
    touchOpensMenuRef.current = e.pointerType === 'touch' && !isOpen;
  };

  const handleTriggerClick = (e) => {
    if (touchOpensMenuRef.current) {
      e.preventDefault();
      touchOpensMenuRef.current = false;
      setIsOpen(true);
    }
  };

  // While open: close on tap/click outside and on Escape pressed anywhere
  // (the wrapper's onKeyDown only fires while focus is inside the menu).
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleOutsidePointerDown = (e) => {
      if (!wrapperRef.current?.contains(e.target)) setIsOpen(false);
    };
    const handleDocumentKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('pointerdown', handleOutsidePointerDown);
    document.addEventListener('keydown', handleDocumentKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handleOutsidePointerDown);
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={wrapperRef}
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      {/* Services Trigger (clickable → locale services index, hover/focus → dropdown) */}
      <Link
        to={getLocalizedPath('services', locale)}
        className="services-trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
        style={{
          background: 'transparent',
          border: 'none',
          fontSize: '0.92rem',
          fontWeight: '500',
          letterSpacing: '0.3px',
          cursor: 'pointer',
          padding: '10px 0',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
        }}
        onPointerDown={handleTriggerPointerDown}
        onClick={handleTriggerClick}
      >
        {nav.services}
        <ChevronDown size={14} style={{ transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </Link>

      {/* Dropdown */}
      {isOpen && (
        <div className="services-dropdown">
          {serviceItems.map((item) => (
            <Link key={item.path} to={item.path} className="services-dropdown-item">
              <span className="services-dropdown-icon">{item.icon}</span>
              <span className="services-dropdown-text">
                {/* Not a heading: nav menu items must stay out of the document outline. */}
                <span className="services-dropdown-item-title">{item.title}</span>
                <p>{item.description}</p>
              </span>
              <ChevronRight size={16} className="services-dropdown-arrow" />
            </Link>
          ))}
        </div>
      )}

      <style>{`
        /* Trigger color lives here (not inline) so hover uses the theme token:
           a hardcoded #fff turned invisible on the light theme's white navbar. */
        .services-trigger {
          color: var(--text-secondary);
        }

        .services-trigger:hover {
          color: var(--text-primary);
        }

        .services-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          width: 340px;
          background: #11131c;
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          padding: 0.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.55);
          animation: servicesDropdownIn 0.22s ease-out forwards;
        }

        [data-theme="light"] .services-dropdown {
          background: #ffffff;
          box-shadow: 0 25px 50px -12px rgba(13, 17, 38, 0.18);
        }

        @keyframes servicesDropdownIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .services-dropdown-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 0.85rem 1rem;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .services-dropdown-item:hover {
          background: rgba(77, 148, 255, 0.1);
        }

        .services-dropdown-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 10px;
          color: var(--accent-cyan);
          background: rgba(77, 148, 255, 0.08);
          border: 1px solid rgba(77, 148, 255, 0.18);
        }

        .services-dropdown-text {
          flex: 1;
          min-width: 0;
        }

        .services-dropdown-text .services-dropdown-item-title {
          display: block;
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 2px;
        }

        .services-dropdown-text p {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.3;
        }

        .services-dropdown-arrow {
          color: var(--accent-cyan);
          flex-shrink: 0;
          opacity: 0;
          transform: translateX(-4px);
          transition: all 0.2s ease;
        }

        .services-dropdown-item:hover .services-dropdown-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
};
