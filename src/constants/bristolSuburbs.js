/**
 * Bristol suburb data — single source of truth.
 *
 * Used by:
 *   - /areas/bristol (BristolHub.jsx) — body-copy linkify + neighbourhood grid
 *   - /seo/bristol (SEOBristol.jsx) — FAQ linkify + sub-areas section
 *   - /local-seo/bristol (LocalSEOBristol.jsx) — TODO
 *   - /website-designer-bristol — TODO
 *
 * The 16 Bristol suburbs we target with dedicated /areas/<slug> pages.
 * Slugs are the actual URL slugs (some have a -bristol suffix, brislington
 * doesn't — this is the live canonical pattern).
 */

import React from 'react';
import Link from 'next/link';

// Display name → URL slug. Keys are lowercase for case-insensitive matching.
export const BRISTOL_SUBURB_SLUGS = {
  'clifton': 'clifton-bristol',
  'bedminster': 'bedminster-bristol',
  'horfield': 'horfield-bristol',
  'filton': 'filton-bristol',
  'bradley stoke': 'bradley-stoke-bristol',
  'brislington': 'brislington',
  'whitchurch': 'whitchurch-bristol',
  'knowle': 'knowle-bristol',
  'stockwood': 'stockwood-bristol',
  'southville': 'southville-bristol',
  'long ashton': 'long-ashton-bristol',
  'yate': 'yate-bristol',
  'kingswood': 'kingswood',
  'redland': 'redland-bristol',
  'bishopston': 'bishopston-bristol',
  'cotham': 'cotham-bristol',
};

// Ordered list of [display name, slug] pairs for grids and listings.
// Order roughly = north-of-river → central → south-of-river → outer suburbs.
export const BRISTOL_SUBURB_LIST = [
  { name: 'Clifton', slug: 'clifton-bristol' },
  { name: 'Cotham', slug: 'cotham-bristol' },
  { name: 'Redland', slug: 'redland-bristol' },
  { name: 'Bishopston', slug: 'bishopston-bristol' },
  { name: 'Horfield', slug: 'horfield-bristol' },
  { name: 'Filton', slug: 'filton-bristol' },
  { name: 'Bradley Stoke', slug: 'bradley-stoke-bristol' },
  { name: 'Southville', slug: 'southville-bristol' },
  { name: 'Bedminster', slug: 'bedminster-bristol' },
  { name: 'Brislington', slug: 'brislington' },
  { name: 'Knowle', slug: 'knowle-bristol' },
  { name: 'Whitchurch', slug: 'whitchurch-bristol' },
  { name: 'Stockwood', slug: 'stockwood-bristol' },
  { name: 'Long Ashton', slug: 'long-ashton-bristol' },
  { name: 'Kingswood', slug: 'kingswood' },
  { name: 'Yate', slug: 'yate-bristol' },
];

// Default link style for body-copy linkify. Pages can override if they need
// a different colour treatment.
const DEFAULT_LINK_CLASS = 'text-white hover:text-primary transition-colors underline decoration-dotted underline-offset-2';

// Render a string with suburb names turned into <Link> components.
// Case-insensitive match, preserves the original capitalisation in the
// displayed text, longest suburb names matched first.
export function linkifyBristolSuburbs(text, linkClass = DEFAULT_LINK_CLASS) {
  if (!text) return text;
  const parts = [];
  const keys = Object.keys(BRISTOL_SUBURB_SLUGS).sort((a, b) => b.length - a.length);
  const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`\\b(${keys.map(escape).join('|')})\\b`, 'gi');
  const remaining = text;
  let last = 0;
  let m;
  while ((m = pattern.exec(remaining)) !== null) {
    if (m.index > last) parts.push(remaining.slice(last, m.index));
    const matched = m[1];
    const slug = BRISTOL_SUBURB_SLUGS[matched.toLowerCase()];
    parts.push(
      <Link key={`${m.index}-${slug}`} href={`/areas/${slug}`} className={linkClass}>
        {matched}
      </Link>
    );
    last = m.index + matched.length;
  }
  if (last < remaining.length) parts.push(remaining.slice(last));
  return parts;
}
