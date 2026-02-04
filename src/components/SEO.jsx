import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = '/og-image.jpg',
  noIndex = false,
  geoPlacename = 'Bath',
  schemas = [], // Additional schema objects
  breadcrumbs = null, // Array of {name, url} objects
  article = null, // Article data for blog/case studies
}) => {
  const siteTitle = 'SEO Kings';
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Local SEO Services in Bath & BANES`;
  const siteUrl = 'https://seokings.co.uk';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // Organization Schema - represents the company
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "SEO Kings",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/logo.png`,
      "width": 200,
      "height": 200
    },
    "image": `${siteUrl}/og-image.jpg`,
    "description": "Local SEO services for tradespeople and small businesses in Bath & North East Somerset. We help local businesses get found on Google.",
    "telephone": "+447702264921",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Bath",
      "addressRegion": "Somerset",
      "postalCode": "BA1",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.3751,
      "longitude": -2.3617
    },
    "sameAs": [
      "https://facebook.com/seokings",
      "https://linkedin.com/company/seokings",
      "https://instagram.com/seokings"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+447702264921",
      "contactType": "customer service",
      "areaServed": "GB",
      "availableLanguage": "English"
    }
  };

  // WebSite Schema - for sitelinks search box potential
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "url": siteUrl,
    "name": "SEO Kings",
    "description": "Local SEO services for tradespeople and small businesses in Bath & North East Somerset",
    "publisher": {
      "@id": `${siteUrl}/#organization`
    },
    "inLanguage": "en-GB"
  };

  // LocalBusiness/ProfessionalService Schema - more specific than Organization
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteUrl}/#localbusiness`,
    "name": "SEO Kings",
    "description": "Expert local SEO services helping tradespeople and small businesses in Bath & North East Somerset get found on Google and grow their customer base.",
    "url": siteUrl,
    "telephone": "+447702264921",
    "image": `${siteUrl}/og-image.jpg`,
    "logo": `${siteUrl}/logo.png`,
    "priceRange": "££",
    "currenciesAccepted": "GBP",
    "paymentAccepted": "Bank Transfer, Credit Card",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bath",
      "addressRegion": "Somerset",
      "postalCode": "BA1",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.3751,
      "longitude": -2.3617
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bath",
        "sameAs": "https://en.wikipedia.org/wiki/Bath,_Somerset"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Bath and North East Somerset",
        "sameAs": "https://en.wikipedia.org/wiki/Bath_and_North_East_Somerset"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 51.3751,
        "longitude": -2.3617
      },
      "geoRadius": "20000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO",
            "description": "Improve your rankings in local search results"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design",
            "description": "Professional websites built to convert visitors into customers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Business Profile Management",
            "description": "Optimise and manage your Google Business Profile"
          }
        }
      ]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:30"
      }
    ],
    "sameAs": [
      "https://facebook.com/seokings",
      "https://linkedin.com/company/seokings",
      "https://instagram.com/seokings"
    ]
  };

  // Breadcrumb Schema - if breadcrumbs provided
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `${siteUrl}${item.url}` : undefined
    }))
  } : null;

  // Article Schema - for blog posts and case studies
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": article.type || "Article",
    "headline": article.headline || title,
    "description": article.description || description,
    "image": article.image ? `${siteUrl}${article.image}` : `${siteUrl}${ogImage}`,
    "author": {
      "@type": "Organization",
      "name": "SEO Kings",
      "@id": `${siteUrl}/#organization`
    },
    "publisher": {
      "@type": "Organization",
      "name": "SEO Kings",
      "@id": `${siteUrl}/#organization`,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullCanonical
    }
  } : null;

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${fullCanonical}/#webpage`,
    "url": fullCanonical,
    "name": fullTitle,
    "description": description,
    "isPartOf": {
      "@id": `${siteUrl}/#website`
    },
    "about": {
      "@id": `${siteUrl}/#organization`
    },
    "inLanguage": "en-GB"
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook (no og:description to avoid "more than one description" audit; platforms fall back to meta name="description") */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter (no twitter:description to avoid duplicate description; uses meta name="description" as fallback) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@seokings" />
      <meta name="twitter:creator" content="@seokings" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional SEO Meta */}
      <meta name="author" content="SEO Kings" />
      <meta name="publisher" content="SEO Kings" />
      <meta name="copyright" content="SEO Kings" />
      <meta name="geo.region" content="GB-BST" />
      <meta name="geo.placename" content={geoPlacename} />
      <meta name="geo.position" content="51.3751;-2.3617" />
      <meta name="ICBM" content="51.3751, -2.3617" />
      
      {/* Language */}
      <html lang="en-GB" />
      <meta httpEquiv="content-language" content="en-GB" />

      {/* Mobile */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="SEO Kings" />

      {/* Schema.org - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Schema.org - WebSite */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* Schema.org - LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* Schema.org - WebPage */}
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>

      {/* Schema.org - Breadcrumbs (if provided) */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* Schema.org - Article (if provided) */}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}

      {/* Additional Custom Schema Markup */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
