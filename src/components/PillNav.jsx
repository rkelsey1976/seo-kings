'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import MagneticButton from './library/MagneticButton';

const navItems = [
  { name: 'Services', href: '/services' },
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
      <div className="flex items-center justify-between h-16 px-8 sm:px-12 lg:px-16
        bg-[#0B1324]/80 backdrop-blur-xl
        border-b border-white/[0.06]">

        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <svg className="w-6 h-6 text-coral" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span className="text-base font-bold text-white tracking-tight">SEO Kings</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <MagneticButton
            as={Link}
            href="/contact"
            strength={0.35}
            className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-coral hover:bg-[#d65a3f] transition-colors duration-200"
          >
            Get Started
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

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden p-4
          bg-[#0B1324]/95 backdrop-blur-xl
          border-b border-white/[0.06]">
          <div className="flex flex-col gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2.5 text-sm text-gray-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-white/10">
              <Link
                href="/contact"
                className="flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-coral hover:bg-[#d65a3f] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default PillNav;
