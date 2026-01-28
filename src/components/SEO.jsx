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
}) => {
  const siteTitle = 'SEO Kings';
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Local SEO Services in Bath & BANES`;
  const siteUrl = 'https://seokings.co.uk';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // Default LocalBusiness schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SEO Kings",
    "description": "Local SEO services for tradespeople and small businesses in Bath & North East Somerset",
    "url": siteUrl,
    "telephone": "01225 123 456",
    "email": "hello@seokings.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bath",
      "addressRegion": "Somerset",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Bath and North East Somerset"
    },
    "priceRange": "££",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "47"
    }
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
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional SEO */}
      <meta name="author" content="SEO Kings" />
      <meta name="geo.region" content="GB-BST" />
      <meta name="geo.placename" content={geoPlacename} />
      
      {/* Default Schema.org Local Business (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(defaultSchema)}
      </script>

      {/* Additional Schema Markup */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
