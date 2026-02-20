'use client';
import React from 'react';

// SEO meta (title, description) is handled by Next.js metadata in each app route.
// This component outputs JSON-LD schemas when the schemas prop is provided.
export default function SEO({ schemas }) {
  if (!schemas || !Array.isArray(schemas) || schemas.length === 0) return null;
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
