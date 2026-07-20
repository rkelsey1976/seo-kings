'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import MagneticButton from './library/MagneticButton';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Web Design for Trades', href: '/web-design-for' },
  { name: 'Areas', href: '/areas' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const PillNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" aria-label="Main navigation">
      {/* Skip link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-coral focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to content
      </a>

      {/* Full-width pill bar */}
      <div
        className="flex items-center justify-between h-[68px] px-6 sm:px-12 lg:px-20 backdrop-blur-xl border-b border-white/[0.05]"
        style={{ background: 'rgba(7,8,13,0.92)' }}
      >

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setIsOpen(false)}
        >
          <img src="/crown-logo.svg" alt="SEO Kings" width="32" height="32" className="h-8 w-auto opacity-90" />
          <span className="text-base font-bold text-white tracking-tight">SEO Kings</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm text-white hover:text-white rounded-full hover:bg-white/5 transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <MagneticButton
            as={Link}
            href="/web-design-packages"
            strength={0.35}
            className="hidden md:inline-flex items-center px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-colors duration-200"
          >
            Get a Quote
          </MagneticButton>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/5 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown — full viewport */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[68px] z-40 flex flex-col" style={{ background: '#07080D' }}>
          <div className="flex-1 flex flex-col justify-start pt-8 px-6 overflow-y-auto">
            {/* Main Navigation Section */}
            <div className="flex flex-col gap-1">
              {navItems.slice(0, -1).map((item, idx) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-full px-4 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 flex items-center justify-between group"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.name}</span>
                  <svg className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-white/[0.06]" />

            {/* CTA Section */}
            <div className="flex flex-col gap-4 mb-6">
              <Link
                href="/web-design-packages"
                className="flex items-center justify-center w-full px-6 py-4 rounded-lg text-base font-bold text-white bg-primary hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
              <p className="text-xs text-gray-500 text-center">From £250 — No hidden fees</p>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.06]" />

            {/* Contact Section */}
            <div className="mt-6 flex flex-col gap-3">
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-primary mb-2">Quick Contact</p>
              <a
                href="tel:07702264921"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm font-medium">07702 264 921</span>
              </a>
              <a
                href="https://wa.me/447702264921"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.687.854 5.305 2.457 7.423l-2.585 9.446a.75.75 0 00.961.92l9.197-3.354c2.02 1.08 4.291 1.655 6.715 1.655h.005c5.427 0 9.847-4.420 9.847-9.848 0-2.631-.997-5.109-2.829-7.019-1.831-1.91-4.318-2.990-7.018-2.990z" />
                </svg>
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>

            {/* Contact Link at bottom */}
            <div className="mt-auto pb-6">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm text-gray-300 hover:text-white rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default PillNav;
