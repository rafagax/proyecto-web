import { useState, useRef } from 'react';
import { Code, BarChart3, Bot, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    id: 'web-development',
    title: 'Web Development & Design',
    icon: <Code size={20} />,
    services: [
      { name: 'We Create Your Professional Website', path: '/services/custom-ux-ui' },
      { name: 'Fast & Responsive Development', path: '/services/responsive-web' },
      { name: 'Website Management & Maintenance', path: '/services/maintenance-updates' },
      { name: 'Performance & Speed Optimization', path: '/services/performance-optimization' },
      { name: 'Technical Support', path: '/services/technical-support' },
    ]
  },
  {
    id: 'seo-growth',
    title: 'SEO & Digital Growth',
    icon: <BarChart3 size={20} />,
    services: [
      { name: 'Rank #1 on Google - Local SEO', path: '/services/seo-positioning' },
      { name: 'Analytics & Performance Tracking', path: '/services/traffic-analytics' },
      { name: 'Content Strategy & Marketing', path: '/services/content-strategy' },
      { name: 'Monthly Performance Reports', path: '/services/performance-reports' },
      { name: 'Organic Traffic Growth', path: '/services/traffic-analytics' },
    ]
  },
  {
    id: 'kpi-indicators',
    title: 'KPI & Performance Indicators',
    icon: <BarChart3 size={20} />,
    services: [
      { name: 'Productivity Indicators by Department', path: '/services/traffic-analytics' },
      { name: 'Understand Customer Behavior', path: '/services/traffic-analytics' },
      { name: 'Business Growth Dashboard', path: '/services/performance-reports' },
      { name: 'Sales & Revenue Indicators', path: '/services/kpi-dashboards' },
      { name: 'Business Intelligence Tools', path: '/services/kpi-dashboards' },
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Chatbots',
    icon: <Bot size={20} />,
    services: [
      { name: 'AI Automation - Sell 24/7 on WhatsApp', path: '/services/whatsapp-ai-agents' },
      { name: 'Process Automation & Workflows', path: '/services/workflow-automation' },
      { name: 'API Integration & Systems', path: '/services/system-integration' },
      { name: 'Lead Capture Automation', path: '/services/conversational-solutions' },
      { name: 'WhatsApp Integration', path: '/services/custom-chatbots' },
    ]
  }
];

export const ServicesMegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Services Button */}
      <button
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
          transition: 'all 0.3s ease',
          position: 'relative',
        }}
        className="services-trigger"
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--text-secondary)';
        }}
      >
        Services
        <ChevronDown size={14} style={{ transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>

      {/* Mega Menu - 4 Columns Layout */}
      {isOpen && (
        <div className="services-mega-menu-container">
          <div className="services-mega-menu-wrapper">
            {serviceCategories.map((category) => (
              <div key={category.id} className="services-column">
                {/* Column Header */}
                <div className="services-column-header">
                  <span className="services-column-icon">{category.icon}</span>
                  <h4 className="services-column-title">{category.title}</h4>
                </div>

                {/* Column Services List */}
                <ul className="services-column-list">
                  {category.services.map((service, idx) => (
                    <li key={idx}>
                      <Link to={service.path} className="services-column-link">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .services-mega-menu-container {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 12px;
          z-index: 9999;
          display: flex;
          justify-content: center;
          padding: 0 20px;
          width: 100vw;
          pointer-events: auto;
        }

        .services-mega-menu-wrapper {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
          max-width: 1200px;
          background: rgba(10, 10, 12, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(0, 229, 255, 0.15);
          border-radius: 16px;
          padding: 32px 28px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          gap: 32px;
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .services-column {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .services-column-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .services-column-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .services-column-title {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.3px;
        }

        .services-column-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .services-column-list li {
          margin: 0;
          padding: 0;
        }

        .services-column-link {
          display: inline-block;
          font-size: 0.9rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: all 0.25s ease;
          position: relative;
          line-height: 1.5;
        }

        .services-column-link:hover {
          color: #fff;
          transform: translateX(4px);
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .services-mega-menu-wrapper {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            padding: 28px 24px;
          }
        }

        @media (max-width: 768px) {
          .services-mega-menu-wrapper {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 20px;
          }

          .services-mega-menu-container {
            padding: 0 10px;
          }
        }
      `}</style>
    </div>
  );
};
