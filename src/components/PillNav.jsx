'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import MagneticButton from './library/MagneticButton';

const services = [
  {
    name: 'Website Design',
    href: '/web-design-for',
    description: 'Fast-loading sites that rank and convert. Live in 2 weeks.',
    price: 'From £250',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Local SEO',
    href: '/local-seo',
    description: 'Map Pack rankings in your area. 40+ calls a month, typical.',
    price: 'From £150/mo',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: 'Google Business Profile',
    href: '/google-business-profile',
    description: 'Full setup and optimisation. One-off, no ongoing fees.',
    price: '£100',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    name: 'Packages & Pricing',
    href: '/web-design-packages',
    description: 'Per-page pricing, no hidden fees. Hosting 6 months free.',
    price: 'View plans',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
];

const featuredAreas = [
  { name: 'Bath', slug: 'bath', postcodes: 'BA1, BA2' },
  { name: 'Bristol', slug: 'bristol', postcodes: 'BS1–BS16' },
];

const otherAreas = [
  { name: 'Keynsham', slug: 'keynsham', postcodes: 'BS31' },
  { name: 'Midsomer Norton', slug: 'midsomer-norton', postcodes: 'BA3' },
  { name: 'Radstock', slug: 'radstock', postcodes: 'BA3' },
  { name: 'Peasedown St John', slug: 'peasedown-st-john', postcodes: 'BA2' },
  { name: 'Paulton', slug: 'paulton', postcodes: 'BS39' },
  { name: 'Saltford', slug: 'saltford', postcodes: 'BS31' },
  { name: 'Timsbury', slug: 'timsbury', postcodes: 'BA2' },
  { name: 'Westfield', slug: 'westfield', postcodes: 'BA3' },
  { name: 'Chew Magna', slug: 'chew-magna', postcodes: 'BS39' },
  { name: 'Temple Cloud', slug: 'temple-cloud', postcodes: 'BS39' },
  { name: 'Clutton', slug: 'clutton', postcodes: 'BS39' },
];

const otherNavItems = [
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const PillNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const navRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setServicesOpen(false);
        setAreasOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAreasOpen(false);
    setIsOpen(false);
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50" aria-label="Main navigation">
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
          onClick={() => closeAllMenus()}
        >
          <img src="/crown-logo.svg" alt="SEO Kings" width="32" height="32" className="h-8 w-auto opacity-90" />
          <span className="text-base font-bold text-white tracking-tight">SEO Kings</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {/* Services Mega Menu */}
          <button
            onClick={() => {
              setServicesOpen(!servicesOpen);
              setAreasOpen(false);
            }}
            className={`flex items-center gap-1 px-4 py-2 text-sm rounded-full transition-all duration-200 ${
              servicesOpen ? 'text-white bg-white/5' : 'text-white hover:bg-white/5'
            }`}
          >
            Services
            <svg className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Areas Mega Menu */}
          <button
            onClick={() => {
              setAreasOpen(!areasOpen);
              setServicesOpen(false);
            }}
            className={`flex items-center gap-1 px-4 py-2 text-sm rounded-full transition-all duration-200 ${
              areasOpen ? 'text-white bg-white/5' : 'text-white hover:bg-white/5'
            }`}
          >
            Areas
            <svg className={`w-4 h-4 transition-transform duration-300 ${areasOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Other nav items */}
          {otherNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm text-white hover:text-white rounded-full hover:bg-white/5 transition-all duration-200"
              onClick={() => closeAllMenus()}
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
            onClick={() => closeAllMenus()}
          >
            Get a Quote
          </MagneticButton>

          {/* Mobile toggle */}
          <button
            onClick={() => {
              setServicesOpen(false);
              setAreasOpen(false);
              setIsOpen(!isOpen);
            }}
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

      {/* Services Mega Menu */}
      {servicesOpen && (
        <div
          className="hidden md:block backdrop-blur-2xl border-b border-white/[0.06]"
          style={{ background: 'rgba(7,8,13,0.98)' }}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-10">
            <div className="grid grid-cols-12 gap-12">

              {/* Left — intro column */}
              <div className="col-span-3 border-r border-white/[0.06] pr-10">
                <div className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-3">Services</div>
                <p className="text-white text-lg font-semibold leading-snug tracking-tight mb-3">
                  Built to get you found. Priced for trades.
                </p>
                <p className="text-gray-500 text-[13px] leading-relaxed mb-6">
                  Websites, local SEO and Google Business Profile — the three things that put a trade on page one.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary hover:text-white transition-colors"
                  onClick={() => closeAllMenus()}
                >
                  All services
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Middle — service list */}
              <div className="col-span-6">
                <ul className="-my-1">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="group flex items-center gap-4 py-4 border-b border-white/[0.04] last:border-b-0 -mx-4 px-4 rounded-lg hover:bg-white/[0.03] transition-colors duration-200"
                        onClick={() => closeAllMenus()}
                      >
                        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-400 group-hover:text-primary group-hover:border-primary/30 transition-colors duration-200 shrink-0">
                          {service.icon}
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block text-white text-sm font-medium tracking-tight group-hover:text-white transition-colors">
                            {service.name}
                          </span>
                          <span className="block text-gray-500 text-[13px] leading-relaxed truncate">
                            {service.description}
                          </span>
                        </span>
                        <span className="text-[11px] font-mono tracking-[0.08em] uppercase text-gray-500 group-hover:text-primary transition-colors shrink-0">
                          {service.price}
                        </span>
                        <svg className="w-3.5 h-3.5 text-gray-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — proof */}
              <div className="col-span-3">
                <div className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-gray-500 mb-4">Latest result</div>
                <Link
                  href="/case-studies/peachy-cleans"
                  className="group block"
                  onClick={() => closeAllMenus()}
                >
                  <div className="text-white text-2xl font-bold tracking-tight mb-1">#1</div>
                  <div className="text-gray-400 text-[13px] leading-relaxed mb-1">
                    Map Pack — &ldquo;cleaning Midsomer Norton&rdquo;
                  </div>
                  <div className="text-gray-500 text-[13px] mb-4">
                    Peachy Cleans · 40+ calls a month
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary group-hover:text-white transition-colors">
                    Read the case study
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Areas Mega Menu */}
      {areasOpen && (
        <div
          className="hidden md:block backdrop-blur-2xl border-b border-white/[0.06]"
          style={{ background: 'rgba(7,8,13,0.98)' }}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-10">
            <div className="grid grid-cols-12 gap-12">

              {/* Left — intro column */}
              <div className="col-span-3 border-r border-white/[0.06] pr-10">
                <div className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-3">Areas</div>
                <p className="text-white text-lg font-semibold leading-snug tracking-tight mb-3">
                  Based in Keynsham. Ranking across Somerset &amp; Bristol.
                </p>
                <p className="text-gray-500 text-[13px] leading-relaxed mb-6">
                  We rank #1 organically for &ldquo;SEO Bristol&rdquo; — the same work we sell.
                </p>
                <Link
                  href="/areas"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary hover:text-white transition-colors"
                  onClick={() => closeAllMenus()}
                >
                  All areas
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Middle — featured areas */}
              <div className="col-span-4">
                <ul>
                  {featuredAreas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas/${area.slug}`}
                        className="group flex items-baseline justify-between gap-4 py-5 border-b border-white/[0.04] last:border-b-0 -mx-4 px-4 rounded-lg hover:bg-white/[0.03] transition-colors duration-200"
                        onClick={() => closeAllMenus()}
                      >
                        <span>
                          <span className="block text-white text-xl font-semibold tracking-tight mb-0.5">
                            {area.name}
                          </span>
                          <span className="block text-gray-500 text-[13px]">
                            Web design, SEO &amp; GBP · {area.postcodes}
                          </span>
                        </span>
                        <svg className="w-4 h-4 text-gray-600 self-center opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — all areas list */}
              <div className="col-span-5">
                <div className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-gray-500 mb-4">Also serving</div>
                <ul className="grid grid-cols-2 gap-x-8">
                  {otherAreas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas/${area.slug}`}
                        className="group flex items-baseline justify-between gap-3 py-[7px] border-b border-white/[0.04] transition-colors"
                        onClick={() => closeAllMenus()}
                      >
                        <span className="text-[13px] text-gray-400 group-hover:text-white transition-colors">
                          {area.name}
                        </span>
                        <span className="text-[11px] font-mono text-gray-600 group-hover:text-gray-400 transition-colors">
                          {area.postcodes}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Mobile dropdown — full viewport */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[68px] z-40 flex flex-col" style={{ background: '#07080D' }}>
          <div className="flex-1 flex flex-col justify-start pt-8 px-6 overflow-y-auto">
            {/* Mobile Services */}
            <div className={`border-b border-white/5 pb-4 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: isOpen ? '60ms' : '0ms' }}>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Services</div>
              <div className="flex flex-col gap-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="flex flex-col py-2 text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={() => closeAllMenus()}
                  >
                    <span className="text-sm font-medium">{service.name}</span>
                    <span className="text-xs text-gray-500">{service.description}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Featured Areas */}
            <div className={`border-b border-white/5 pb-4 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: isOpen ? '120ms' : '0ms' }}>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Featured Areas</div>
              <div className="flex flex-col gap-2">
                {featuredAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="flex justify-between py-2 text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={() => closeAllMenus()}
                  >
                    <span className="text-sm font-medium">{area.name}</span>
                    <span className="text-xs text-gray-500">{area.postcodes}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Other Areas */}
            <div className={`border-b border-white/5 pb-4 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: isOpen ? '180ms' : '0ms' }}>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Other Areas</div>
              <div className="grid grid-cols-2 gap-2">
                {otherAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="flex flex-col py-2 text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={() => closeAllMenus()}
                  >
                    <span className="text-sm font-medium">{area.name}</span>
                    <span className="text-xs text-gray-500">{area.postcodes}</span>
                  </Link>
                ))}
              </div>
              <Link
                href="/areas"
                className="flex items-center gap-2 py-2 mt-3 text-primary-light hover:text-white transition-colors duration-200"
                onClick={() => closeAllMenus()}
              >
                <span className="text-sm font-medium">View all areas →</span>
              </Link>
            </div>

            {/* Other Navigation Links */}
            {otherNavItems.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium py-2 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                style={{ transitionDelay: isOpen ? `${240 + i * 50}ms` : '0ms' }}
                onClick={() => closeAllMenus()}
              >
                {link.name}
              </Link>
            ))}

            <div className={`transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: isOpen ? '380ms' : '0ms' }}>
              <a
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 w-full mt-2 text-center block"
                onClick={() => closeAllMenus()}
              >
                Get a Quote
              </a>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-white/[0.06]" />

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
                onClick={() => closeAllMenus()}
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
