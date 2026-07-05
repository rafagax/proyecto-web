import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import privacyContent from '../content/privacy.js';

// Bilingual privacy policy. Locale is derived from the URL by useLocalizedContent.
const PrivacyPolicy = () => {
  const { locale } = useLocalizedContent();
  const t = privacyContent[locale] || privacyContent.en;

  return (
    <div className="section" style={{ paddingTop: '130px' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        <h1 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{t.title}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
          {t.lastUpdated}
        </p>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          {t.intro}
        </p>

        {t.sections.map((s, i) => (
          <section key={i} style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
              {s.heading}
            </h2>
            {s.paragraphs.map((p, j) => (
              <p
                key={j}
                style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}
              >
                {p}
              </p>
            ))}
            {s.list && (
              <ul
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  paddingLeft: '1.25rem',
                  marginTop: '0.5rem',
                }}
              >
                {s.list.map((li, k) => (
                  <li key={k} style={{ marginBottom: '0.5rem' }}>
                    {li}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
