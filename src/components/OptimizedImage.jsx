import React from 'react';

/**
 * OptimizedImage Component
 * 
 * A reusable image component with built-in SEO and performance optimizations:
 * - Lazy loading for below-the-fold images
 * - Automatic WebP format via Unsplash
 * - Responsive srcset generation
 * - Proper width/height to prevent CLS
 * - Descriptive alt text support
 * 
 * @param {string} src - Base Unsplash URL (without size params)
 * @param {string} alt - Descriptive alt text for SEO
 * @param {number} width - Display width
 * @param {number} height - Display height
 * @param {string} className - CSS classes
 * @param {boolean} priority - If true, loads eagerly (for above-fold images)
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
  // Generate optimized URL with auto format and quality
  const getOptimizedUrl = (baseUrl, w, h) => {
    const url = new URL(baseUrl);
    url.searchParams.set('w', w);
    url.searchParams.set('h', h);
    url.searchParams.set('fit', 'crop');
    url.searchParams.set('auto', 'format');
    url.searchParams.set('q', '80');
    return url.toString();
  };

  // Generate srcset for responsive images
  const generateSrcSet = (baseUrl, baseWidth, baseHeight) => {
    const aspectRatio = baseHeight / baseWidth;
    const widths = [400, 600, 800, 1200];
    
    return widths
      .filter(w => w <= baseWidth * 2) // Don't upscale beyond 2x
      .map(w => {
        const h = Math.round(w * aspectRatio);
        return `${getOptimizedUrl(baseUrl, w, h)} ${w}w`;
      })
      .join(', ');
  };

  // Extract base URL (remove existing query params if any)
  const baseUrl = src.split('?')[0];
  
  const optimizedSrc = getOptimizedUrl(baseUrl, width, height);
  const srcSet = generateSrcSet(baseUrl, width, height);

  return (
    <img
      src={optimizedSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={className}
      {...props}
    />
  );
};

export default OptimizedImage;
