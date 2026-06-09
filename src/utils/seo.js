/**
 * SEO utilities untuk dynamic meta tags
 * Menggunakan config dari seo.config.json
 */

import { getSeoForPage, getBreadcrumbsForPage, getOrganization, getLocalBusiness } from '@/config/seoConfig.js'

export const updateMetaTagsFromConfig = (pageName) => {
  const seoData = getSeoForPage(pageName)
  if (!seoData) return

  updateMetaTags(seoData)
}

export const updateMetaTags = ({
  title = 'Kios Purwa',
  description = 'Platform digital UMKM lokal Indonesia',
  keywords = 'UMKM, kerajinan, fashion, aksesoris, Bali',
  image = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4urKJ1NfGGCKETaiYQFWWHWxH86M9Ya60Kya3xtRZgPIHUefRPi0187YiPg7y1sX5NX_YRtlcaxRROMXTl1_VuO27M1C5f2vTcHZWvfs7anqWiRs_PlfPW4hX8hCawy5jspGNND5O2s20Bt-s7bucrHjGY1Z0ngDmoyM-SyEiJDlqpchcmVL1VfC7q5jWttH8rzmD6Dvg1Ef8NMt0REMra35LDQ8CJFmHwfyIHzXmQ1cdmJLdiYv4IEnnGMon74VvH8VT3jJfLxct',
  url = typeof window !== 'undefined' ? window.location.href : 'https://kiospurwa.net',
  type = 'website',
} = {}) => {
  if (typeof document === 'undefined') return;

  // Update title
  document.title = title;

  // Helper to set/update meta tag
  const setMeta = (name, content, isProperty = false) => {
    const attr = isProperty ? 'property' : 'name';
    let tag = document.querySelector(`meta[${attr}="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(attr, name);
      document.head.appendChild(tag);
    }
    tag.content = content;
  };

  // Standard meta tags
  setMeta('description', description);
  setMeta('keywords', keywords);
  setMeta('viewport', 'width=device-width, initial-scale=1.0');
  setMeta('author', 'Kios Purwa');
  setMeta('theme-color', '#2563eb');

  // Open Graph tags (Facebook, LinkedIn, etc)
  setMeta('og:title', title, true);
  setMeta('og:description', description, true);
  setMeta('og:image', image, true);
  setMeta('og:url', url, true);
  setMeta('og:type', type, true);
  setMeta('og:site_name', 'Kios Purwa', true);

  // Twitter Card
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
  setMeta('twitter:image', image);
  setMeta('twitter:site', '@kiospurwa');

  // Additional SEO tags
  setMeta('robots', 'index, follow');
  setMeta('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
  setMeta('bingbot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

  // Canonical URL (prevent duplicate content)
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
};

/**
 * Add structured data (JSON-LD) untuk schema.org
 */
export const addStructuredData = (schema) => {
  if (typeof document === 'undefined') return;

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Schema untuk Organization
 */
export const getOrganizationSchema = () => {
  const org = getOrganization()
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': org.name,
    'url': org.url,
    'logo': org.logo,
    'description': org.description,
    'foundingDate': '2024',
    'location': {
      '@type': 'Place',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'ID',
        'addressLocality': 'Sukawati',
        'addressRegion': 'Bali'
      }
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'Customer Support',
      'telephone': org.phone
    },
    'sameAs': Object.values(org.socialMedia)
  }
};

/**
 * Schema untuk LocalBusiness
 */
export const getLocalBusinessSchema = () => {
  const business = getLocalBusiness()
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': business.name,
    'image': 'https://kiospurwa.net/logo.png',
    'description': 'Toko kerajinan tangan lokal Bali dengan koleksi tas, fashion, dan aksesori',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': business.streetAddress,
      'addressLocality': business.addressLocality,
      'addressRegion': business.addressRegion,
      'postalCode': business.postalCode,
      'addressCountry': business.addressCountry
    },
    'telephone': business.telephone,
    'priceRange': business.priceRange,
    'areaServed': business.areaServed
  }
};

/**
 * Schema untuk Product
 */
export const getProductSchema = ({ id, title, description, price, image, category }) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  'id': `https://kiospurwa.net/catalog?product=${id}`,
  'name': title,
  'description': description,
  'image': image.startsWith('http') ? image : `https://kiospurwa.net${image}`,
  'category': category,
  'offers': {
    '@type': 'Offer',
    'price': price.replace(/\D/g, ''),
    'priceCurrency': 'IDR',
    'availability': 'https://schema.org/InStock',
    'url': `https://kiospurwa.net/catalog?product=${id}`
  }
});

/**
 * Schema untuk BreadcrumbList (navigation breadcrumbs)
 */
export const getBreadcrumbSchema = (breadcrumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': crumb.name,
    'item': crumb.url
  }))
});

/**
 * Schema untuk WebPage
 */
export const getWebPageSchema = ({ title, description, datePublished, dateModified }) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': title,
  'description': description,
  'url': typeof window !== 'undefined' ? window.location.href : 'https://kiospurwa.net',
  'datePublished': datePublished,
  'dateModified': dateModified,
  'inLanguage': 'id-ID'
});

/**
 * Schema untuk FAQPage
 */
export const getFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map(faq => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer
    }
  }))
});
