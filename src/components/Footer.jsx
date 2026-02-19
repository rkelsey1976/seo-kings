import React from 'react';
import Link from 'next/link';
import { GOOGLE_MAPS_PLACE_URL } from '../constants/business';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Website Design', href: '/web-design' },
    { name: 'Web Design Packages', href: '/web-design-packages' },
    { name: 'Local SEO', href: '/local-seo' },
    { name: 'Google Business Profile', href: '/google-business-profile' },
    { name: 'Free SEO Audit', href: '/contact' },
  ];

  const areas = [
    { name: 'Bath', slug: 'bath' },
    { name: 'Keynsham', slug: 'keynsham' },
    { name: 'Midsomer Norton', slug: 'midsomer-norton' },
    { name: 'Radstock', slug: 'radstock' },
    { name: 'Peasedown St John', slug: 'peasedown-st-john' },
    { name: 'Paulton', slug: 'paulton' },
    { name: 'Saltford', slug: 'saltford' },
    { name: 'Timsbury', slug: 'timsbury' },
  ];

  const company = [
    { name: 'About Us', href: '/about', isRoute: true },
    { name: 'Blog', href: '/blog', isRoute: true },
    { name: 'Case Studies', href: '/case-studies', isRoute: true },
    { name: 'Contact', href: '/contact', isRoute: true },
  ];

  return (
    <footer className="bg-dark-lighter border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Top Section - Brand & Contact */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 pb-8 sm:pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="lg:max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M2 20h20v-2H2v2zm2-4h16l1-9-5 3-4-6-4 6-5-3 1 9z"/>
              </svg>
              <span className="text-xl font-bold text-white">
                SEOKings
              </span>
            </Link>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Helping tradespeople and local businesses in Bath & North East Somerset 
              get found on Google and grow their customer base.
            </p>
          </div>

          {/* Contact & Social - Side by side on mobile */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            {/* Contact Info */}
            <div className="space-y-3">
              <p className="text-white font-semibold text-sm uppercase tracking-wider">Contact</p>
              <a href="tel:07702264921" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors" aria-label="Call SEO Kings on 07702 264 921">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm sm:text-base">07702 264 921</span>
              </a>
              <a href={GOOGLE_MAPS_PLACE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors" aria-label="Leave a review for SEO Kings on Google">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-sm sm:text-base">Leave a review on Google</span>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Follow Us</p>
              <ul className="flex gap-3 list-none" aria-label="Social media links">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61587531959737"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow SEO Kings on Facebook"
                    className="w-10 h-10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/seokings"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with SEO Kings on LinkedIn"
                    className="w-10 h-10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/seokings"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow SEO Kings on Instagram"
                    className="w-10 h-10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={GOOGLE_MAPS_PLACE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View SEO Kings on Google Maps and leave a review"
                    className="w-10 h-10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                    title="Google Maps &amp; Reviews"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Links Section - 2 columns on mobile, 3 on tablet, 3 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 pt-8 sm:pt-12">
          {/* Services Column */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</p>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Column - Show first 4 on mobile with "View all" */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Areas</p>
            <ul className="space-y-2 sm:space-y-3">
              {/* Show first 4 areas on mobile, all on larger screens */}
              {areas.slice(0, 4).map((area, index) => (
                <li key={index}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              {/* Hidden on mobile, shown on sm+ */}
              {areas.slice(4).map((area, index) => (
                <li key={index + 4} className="hidden sm:block">
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              {/* View all link - only on mobile */}
              <li className="sm:hidden">
                <Link
                  href="/areas"
                  className="text-primary-light hover:text-white transition-colors text-sm font-medium inline-flex items-center gap-1"
                >
                  View all
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-2 sm:col-span-1">
            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</p>
            {/* On mobile, show as inline list. On larger screens, vertical */}
            <ul className="flex flex-wrap gap-x-6 gap-y-2 sm:flex-col sm:space-y-3 sm:gap-0">
              {company.map((item, index) => (
                <li key={index}>
                  {item.isRoute ? (
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm order-2 sm:order-1">
              © {currentYear} SEO Kings. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm order-1 sm:order-2">
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
