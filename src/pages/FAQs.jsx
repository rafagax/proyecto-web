import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "How long does it take to build my website?",
    answer: "Our standard delivery time is 7 business days for Landing Pages and Business sites. E-Commerce projects typically take 14–21 days depending on complexity. We always keep you updated throughout the process.",
  },
  {
    question: "What do I need to provide to get started?",
    answer: "To get started, we'll need your brand assets (logo, colors if available), any photos or content you want to include, and a brief description of your business and goals. Don't worry if you don't have everything — we can guide you through it.",
  },
  {
    question: "Do you offer hosting and domain services?",
    answer: "Yes! Our Business and E-Commerce plans include domain registration and hosting for the first year. After that, renewal costs are very affordable and we'll help you manage everything.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. All our websites are built with a mobile-first approach, meaning they look and work perfectly on smartphones, tablets and desktops. Over 60% of web traffic comes from mobile devices — we take that seriously.",
  },
  {
    question: "What is SEO and why do I need it?",
    answer: "SEO (Search Engine Optimization) is the process of optimizing your website so it appears higher in Google search results. This means more people find your business organically without paying for ads. Local SEO specifically targets clients in your geographic area.",
  },
  {
    question: "Can you integrate a chatbot or WhatsApp automation?",
    answer: "Yes! We specialize in AI chatbot integration and WhatsApp automation. These tools allow you to respond to client inquiries 24/7 automatically, capture leads, and route conversations — all without you lifting a finger.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes. The Business plan includes 3 months of priority support, and the E-Commerce plan includes 1 month. We also offer ongoing maintenance packages for clients who want continued support after that period.",
  },
  {
    question: "Can I update my website content myself?",
    answer: "We can build your site with a content management system (CMS) so you can update text, images and products yourself without needing a developer. Just let us know during the consultation.",
  },
  {
    question: "Do you work with clients outside of Venezuela?",
    answer: "Absolutely! We have clients in the United States and Spain, and we work remotely with businesses anywhere in the world. All communication is done via WhatsApp, email or video call.",
  },
  {
    question: "How do I pay? Do you accept international payments?",
    answer: "We accept international payments via bank transfer, PayPal, Zelle, and cryptocurrency. We'll discuss the best payment method for you during the initial consultation. A 50% deposit is required to start the project.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => (
  <div
    style={{
      background: 'var(--bg-secondary)',
      border: `1px solid ${isOpen ? 'rgba(0, 229, 255, 0.3)' : 'rgba(255, 255, 255, 0.06)'}`,
      borderRadius: 'var(--border-radius-md)',
      overflow: 'hidden',
      transition: 'border-color 0.3s ease',
    }}
  >
    <button
      onClick={onClick}
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2rem',
        background: 'transparent',
        color: 'white',
        textAlign: 'left',
        cursor: 'pointer',
        gap: '1rem',
        fontSize: '1rem',
        fontWeight: '600',
        fontFamily: 'inherit',
      }}
    >
      <span>{faq.question}</span>
      <span style={{ color: 'var(--accent-cyan)', flexShrink: 0 }}>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </span>
    </button>
    <div
      style={{
        maxHeight: isOpen ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
      }}
    >
      <p style={{ color: 'var(--text-secondary)', padding: '0 2rem 1.75rem', lineHeight: '1.7', fontSize: '0.98rem' }}>
        {faq.answer}
      </p>
    </div>
  </div>
);

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '180px', paddingBottom: '4rem' }}>
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--accent-cyan)', display: 'block', marginBottom: '1rem' }}>
            Got Questions?
          </span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '650px', margin: '0 auto' }}>
            Everything you need to know about our services, process and pricing. Can't find your answer? Reach out to us directly.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                faq={faq}
                isOpen={openIndex === idx}
                onClick={() => handleToggle(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Still have <span className="text-gradient">questions?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
            Our team is happy to answer any questions you have. Reach out on WhatsApp or schedule a free consultation call.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/584144735431?text=Hello!%20I%20have%20some%20questions%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '16px 40px', fontSize: '1.05rem' }}
            >
              Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn btn-secondary" style={{ padding: '16px 40px', fontSize: '1.05rem' }}>
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
