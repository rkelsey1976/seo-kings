'use client';
import React, { useEffect, useRef } from 'react';

// SEO meta (title, description) is handled by Next.js metadata in each app route.
// This component outputs JSON-LD schemas and moves them into <head> so all JSON-LD
// lives in the head after hydration. We remove any previous page's JSON-LD first
// so client-side navigation (e.g. Bath then Saltford) doesn't leave multiple area schemas in the head.
const SEO_SCRIPT_DATA_ATTR = 'data-seo-kings-ld';

export default function SEO({ schemas }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || typeof document === 'undefined') return;
    // Remove any JSON-LD we previously injected (from another area page or route) so the head only has this page's schema
    document.querySelectorAll(`script[type="application/ld+json"][${SEO_SCRIPT_DATA_ATTR}]`).forEach((s) => s.remove());
    const scripts = containerRef.current.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach((script) => {
      script.setAttribute(SEO_SCRIPT_DATA_ATTR, '');
      if (script.parentNode !== document.head) document.head.appendChild(script);
    });
  }, [schemas]);

  if (!schemas || !Array.isArray(schemas) || schemas.length === 0) return null;
  return (
    <div ref={containerRef} hidden aria-hidden="true" suppressHydrationWarning>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </div>
  );
}
