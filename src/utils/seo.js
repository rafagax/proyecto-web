// SEO utilities for managing meta tags and structured data

// NOTE: The document head (title, description, og, canonical) is now managed by
// React Router's per-route `meta` exports in framework mode (SSG/prerender), so
// the head is correct in the prerendered HTML for crawlers and link-preview bots.
// This is kept as a no-op so existing page imports/calls don't break; managing the
// head imperatively here would fight React Router's <Meta> on the client.
export const updateMetaTags = () => {};

// Schema.org JSON-LD helpers
export const addServiceSchema = (serviceName, description, price) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'Digital Investments'
    },
    ...(price && { price: price })
  };

  addJSONLD(schema);
};

export const addFAQSchema = (faqs) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  addJSONLD(schema);
};

export const addArticleSchema = (article) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishedDate,
    author: {
      '@type': 'Organization',
      name: 'Digital Investments'
    }
  };

  addJSONLD(schema);
};

const addJSONLD = (schema) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};
