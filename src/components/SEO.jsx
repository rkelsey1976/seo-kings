'use client';
import React, { useEffect, useRef } from 'react';

// SEO meta (title, description) is handled by Next.js metadata in each app route.
// This component outputs JSON-LD schemas and moves them into <head> so all JSON-LD
// lives in the head after hydration. Initial HTML has them in body (crawlers accept either).
export default function SEO({ schemas }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || typeof document === 'undefined') return;
    const scripts = containerRef.current.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach((script) => {
      if (script.parentNode !== document.head) document.head.appendChild(script);
    });
  }, [schemas]);

  if (!schemas || !Array.isArray(schemas) || schemas.length === 0) return null;
  return (
    <div ref={containerRef} hidden aria-hidden="true">
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
