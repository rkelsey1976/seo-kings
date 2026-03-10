import React from 'react';
import Image from 'next/image';

/**
 * OptimizedImage Component
 *
 * Uses next/image for Core Web Vitals (CLS, LCP): proper dimensions, lazy loading, priority.
 * For external URLs (e.g. Unsplash) ensure the host is in next.config.js images.remotePatterns.
 *
 * @param {string} src - Image URL (e.g. Unsplash with or without query params)
 * @param {string} alt - Descriptive alt text for SEO
 * @param {number} width - Display width
 * @param {number} height - Display height
 * @param {string} className - CSS classes
 * @param {boolean} priority - If true, loads eagerly (for above-fold / LCP images)
 * @param {string} sizes - Responsive sizes attribute
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '100vw',
  ...props
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      className={className}
      {...props}
    />
  );
};

export default OptimizedImage;
