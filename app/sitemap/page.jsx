import React from 'react';
import Link from 'next/link';
import SEO from '../../src/components/SEO';

const baseUrl = 'https://seo-kings.co.uk';

const sitemapSections = [
  {
    title: 'Main',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Us' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/web-design', label: 'Website Design' },
      { href: '/web-design-packages', label: 'Web Design Packages' },
      { href: '/local-seo', label: 'Local SEO' },
      { href: '/local-seo/plumbers', label: 'Local SEO for Plumbers' },
      { href: '/local-seo/electricians', label: 'Local SEO for Electricians' },
      { href: '/local-seo/roofers', label: 'Local SEO for Roofers' },
      { href: '/google-business-profile', label: 'Google Business Profile' },
    ],
  },
  {
    title: 'Blog',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/blog/beautiful-websites-that-rank', label: 'Beautiful Websites That Rank' },
      { href: '/blog/what-is-local-seo-bath', label: 'What Is Local SEO Bath' },
      { href: '/blog/get-more-google-reviews-bath', label: 'Get More Google Reviews' },
      { href: '/blog/local-seo-bath', label: 'Local SEO in Bath' },
      { href: '/blog/seo-for-plumbers-bath', label: 'SEO for Plumbers Bath' },
      { href: '/blog/free-seo-audit-what-we-check', label: 'Free SEO Audit – What We Check' },
      { href: '/blog/website-design-midsomer-norton-peachy-cleans', label: 'Website Design Midsomer Norton – Peachy Cleans' },
      { href: '/blog/website-design-bath', label: 'Website Design Bath' },
      { href: '/blog/website-design-keynsham', label: 'Website Design Keynsham' },
      { href: '/blog/website-design-radstock', label: 'Website Design Radstock' },
      { href: '/blog/website-design-trowbridge', label: 'Website Design Trowbridge' },
      { href: '/blog/one-page-website-bath-banes', label: 'One-Page Website Bath & BANES' },
      { href: '/blog/why-speed-matters-for-seo', label: 'Why Speed Matters for SEO' },
      { href: '/blog/how-we-get-you-number-one-google-maps', label: 'How We Get You to Number One on Google Maps' },
    ],
  },
  {
    title: 'Case Studies & Spotlight',
    links: [
      { href: '/case-studies', label: 'Case Studies' },
      { href: '/case-studies/peachy-cleans', label: 'Case Study: Peachy Cleans' },
      { href: '/spotlight/peachy-cleans', label: 'Client Spotlight: Peachy Cleans' },
    ],
  },
  {
    title: 'Areas We Serve',
    links: [
      { href: '/areas', label: 'All Areas' },
      { href: '/areas/bath', label: 'Bath' },
      { href: '/areas/keynsham', label: 'Keynsham' },
      { href: '/areas/midsomer-norton', label: 'Midsomer Norton' },
      { href: '/areas/radstock', label: 'Radstock' },
      { href: '/areas/peasedown-st-john', label: 'Peasedown St John' },
      { href: '/areas/paulton', label: 'Paulton' },
      { href: '/areas/saltford', label: 'Saltford' },
      { href: '/areas/timsbury', label: 'Timsbury' },
      { href: '/areas/westfield', label: 'Westfield' },
      { href: '/areas/chew-magna', label: 'Chew Magna' },
      { href: '/areas/temple-cloud', label: 'Temple Cloud' },
      { href: '/areas/clutton', label: 'Clutton' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <SEO
        title="Sitemap | SEO Kings"
        description="A list of all pages on the SEO Kings website. Website design and local SEO for Bath, BANES and the South West."
        canonical="/sitemap"
      />
      <main className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Sitemap</h1>
          <p className="text-gray-400 mb-10">
            All pages on the SEO Kings website. You can also view our{' '}
            <a href={`${baseUrl}/sitemap.xml`} className="text-primary-light hover:text-white underline">
              XML sitemap
            </a>{' '}
            for search engines.
          </p>
          <nav className="space-y-10" aria-label="Site map">
            {sitemapSections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </div>
      </main>
    </>
  );
}
