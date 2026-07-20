'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import MagneticButton from './library/MagneticButton';

const services = [
  {
    name: 'Website Design',
    href: '/web-design-for',
    description: 'Fast-loading sites that rank and convert',
    benefit: 'Live in 2 weeks',
    price: 'From £250',
    result: 'Rankings + calls within weeks',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    bgGradient: 'from-primary/10 to-primary/5',
    borderColor: 'border-primary/30',
    accentColor: 'text-primary',
  },
  {
    name: 'Local SEO',
    href: '/local-seo',
    description: 'Rank on Google Maps in your area',
    benefit: 'Map Pack positions',
    price: 'From £150/mo',
    result: '40+ calls/month typical',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    bgGradient: 'from-secondary/10 to-secondary/5',
    borderColor: 'border-secondary/30',
    accentColor: 'text-secondary',
  },
  {
    name: 'Google Business Profile',
    href: '/google-business-profile',
    description: 'Get found in local searches instantly',
    benefit: 'Complete optimisation',
    price: 'From £100',
    result: 'Appear in Map Pack',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6a2 2 0 012-2h6a2 2 0 012 2v13m-8-5h4m0 0h4" />
      </svg>
    ),
    bgGradient: 'from-amber-500/10 to-amber-500/5',
    borderColor: 'border-amber-500/30',
    accentColor: 'text-amber-500',
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
              setIsOpen(!isOpen);
              closeAllMenus();
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
          className="hidden md:block backdrop-blur-2xl border-b border-white/10 overflow-hidden transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, rgba(7,8,13,0.98) 0%, rgba(7,8,13,0.95) 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-[0.15em] text-primary mb-2">Services</h3>
                <p className="text-gray-300 text-sm">Choose what you need to get found and get calls</p>
              </div>
              <Link
                href="/services"
                className="text-xs font-semibold text-primary-light hover:text-white transition-colors flex items-center gap-1.5"
                onClick={() => closeAllMenus()}
              >
                View all
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className={`group flex flex-col p-6 rounded-2xl border-2 ${service.borderColor} bg-gradient-to-br ${service.bgGradient} hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/15 hover:to-primary/8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1`}
                  onClick={() => closeAllMenus()}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${service.accentColor} mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h4 className="text-white font-bold text-base mb-1 group-hover:text-primary-light transition-colors">
                    {service.name}
                  </h4>

                  {/* Price */}
                  <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${service.accentColor}`}>
                    {service.price}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-white/5 my-3" />

                  {/* Results */}
                  <div className="flex items-start gap-2 mb-4">
                    <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-300">{service.result}</span>
                  </div>

                  {/* CTA Arrow */}
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-200 mt-auto">
                    Get started
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Areas Mega Menu */}
      {areasOpen && (
        <div
          className="hidden md:block backdrop-blur-2xl border-b border-white/10 overflow-hidden transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, rgba(7,8,13,0.98) 0%, rgba(7,8,13,0.95) 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12">
            {/* Header */}
            <div className="mb-10 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-[0.15em] text-secondary mb-2">Areas</h3>
                <p className="text-gray-300 text-sm">Fast results in Somerset & Bristol. We rank #1 for "SEO Bristol"</p>
              </div>
              <Link
                href="/areas"
                className="text-xs font-semibold text-primary-light hover:text-white transition-colors flex items-center gap-1.5"
                onClick={() => closeAllMenus()}
              >
                View all
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Featured Areas - 2 Column */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {featuredAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group relative flex flex-col p-8 rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-primary/12 to-primary/4 hover:border-primary/70 hover:from-primary/20 hover:to-primary/8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-1 overflow-hidden"
                  onClick={() => closeAllMenus()}
                >
                  {/* Background accent */}
                  <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all duration-300" />

                  <div className="relative">
                    {/* Icon + Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl mb-1 group-hover:text-primary-light transition-colors">
                          {area.name}
                        </h4>
                        <p className="text-xs text-gray-400">3-6 months to Map Pack</p>
                      </div>
                    </div>

                    {/* Postcodes */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {area.postcodes.split(', ').map((code) => (
                        <span key={code} className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
                          {code}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Real rankings · Real clients · Real results</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                      Explore area
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Other Areas Grid - 5 Column */}
            <div>
              <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-[0.15em] mb-4 font-mono">Also serving</h5>
              <div className="grid md:grid-cols-5 gap-3 mb-8">
                {otherAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="group flex flex-col p-4 rounded-xl border-2 border-white/8 bg-white/3 hover:border-white/20 hover:bg-white/6 transition-all duration-200 hover:shadow-md"
                    onClick={() => closeAllMenus()}
                  >
                    <span className="text-white font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                      {area.name}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/10 text-gray-400 group-hover:bg-primary/20 group-hover:text-primary transition-all w-fit">
                      {area.postcodes}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.08] mb-8" />

            {/* Bottom CTA */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Not in your area?</p>
                <p className="text-xs text-gray-500">We work across Somerset & Bristol</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
                onClick={() => closeAllMenus()}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Free Audit
              </Link>
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
