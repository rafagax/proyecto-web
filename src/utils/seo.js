// SEO utilities for managing meta tags and structured data

export const updateMetaTags = (config) => {
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage = 'https://yourdomain.com/og-image.png',
    canonical
  } = config;

  // Update title
  if (title) {
    document.title = `${title} | Digital Solutions Pro`;
  }

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description || '');

  // Update or create meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', keywords || '');

  // Update OG tags
  updateOGTag('og:title', ogTitle || title || '');
  updateOGTag('og:description', ogDescription || description || '');
  updateOGTag('og:image', ogImage);

  // Update canonical
  if (canonical) {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);
  }

  // Scroll to top
  window.scrollTo(0, 0);
};

const updateOGTag = (property, content) => {
  let ogTag = document.querySelector(`meta[property="${property}"]`);
  if (!ogTag) {
    ogTag = document.createElement('meta');
    ogTag.setAttribute('property', property);
    document.head.appendChild(ogTag);
  }
  ogTag.setAttribute('content', content);
};

// Schema.org JSON-LD helpers
export const addServiceSchema = (serviceName, description, price) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'Digital Solutions Pro'
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
      name: 'Digital Solutions Pro'
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
