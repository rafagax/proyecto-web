import { useState, useRef } from 'react';
import { Code, TrendingUp, BarChart3, Bot, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceItems = [
  {
    title: 'Web Development & Design',
    description: 'Premium websites built for speed, trust, and conversions.',
    icon: <Code size={20} />,
    path: '/services/web-development-design',
  },
  {
    title: 'SEO & Digital Growth',
    description: 'Improve visibility, attract qualified traffic, and grow organically.',
    icon: <TrendingUp size={20} />,
    path: '/services/seo-digital-growth',
  },
  {
    title: 'KPI Dashboards & Analytics',
    description: 'Track leads, sales, and business performance with clarity.',
    icon: <BarChart3 size={20} />,
    path: '/services/kpi-dashboards',
  },
  {
    title: 'AI Automation & Chatbots',
    description: 'Automate replies, qualify leads, and support customers 24/7.',
    icon: <Bot size={20} />,
    path: '/services/ai-automation-chatbots',
  },
];

export const ServicesMegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const wrapperRef = useRef(null);

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
      {/* Services Trigger (clickable → /services, hover/focus → dropdown) */}
      <Link
        to="/services"
        className="services-trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--text-secondary)',
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
        onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
      >
        Services
        <ChevronDown size={14} style={{ transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </Link>

      {/* Dropdown */}
      {isOpen && (
        <div className="services-dropdown">
          {serviceItems.map((item) => (
            <Link key={item.path} to={item.path} className="services-dropdown-item">
              <span className="services-dropdown-icon">{item.icon}</span>
              <span className="services-dropdown-text">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </span>
              <ChevronRight size={16} className="services-dropdown-arrow" />
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .services-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          width: 340px;
          background: var(--bg-navbar);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          padding: 0.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.55);
          animation: servicesDropdownIn 0.22s ease-out forwards;
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

        .services-dropdown-text h4 {
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
