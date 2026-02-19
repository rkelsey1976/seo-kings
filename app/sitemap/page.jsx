import React from 'react';
import Link from 'next/link';
import SEO from '../../src/components/SEO';
import { BASE_URL, BLOG_LINKS, AREA_LINKS, CASE_STUDY_LINKS } from '../../src/constants/sitemap';

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
    links: BLOG_LINKS,
  },
  {
    title: 'Case Studies & Spotlight',
    links: [
      ...CASE_STUDY_LINKS,
      { href: '/spotlight/peachy-cleans', label: 'Client Spotlight: Peachy Cleans' },
    ],
  },
  {
    title: 'Areas We Serve',
    links: AREA_LINKS,
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
        description="A list of all pages on the SEO Kings website. Website design and local SEO for Bath, North East Somerset and the South West."
        canonical="/sitemap"
      />
      <main className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Sitemap</h1>
          <p className="text-gray-400 mb-10">
            All pages on the SEO Kings website. You can also view our{' '}
            <a href={`${BASE_URL}/sitemap.xml`} className="text-primary-light hover:text-white underline">
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
