'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import MagneticButton from './library/MagneticButton';

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */

const Icon = {
  monitor: (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  wrench: (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  bundle: (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  tag: (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
  refresh: (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  pin: (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  doc: (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

/* ─────────────────────────────────────────────
   MEGA MENU DATA
───────────────────────────────────────────── */

const webDesignItems = [
  { name: 'Web Design for Trades', href: '/web-design-for', description: 'Dedicated pages for your trade — plumbers, electricians, builders and more.', price: 'Browse trades', icon: Icon.wrench },
  { name: 'Site + Google Bundle', href: '/site-and-google', description: 'Website and Google Business Profile, set up and optimised together.', price: '£99/mo', icon: Icon.bundle },
  { name: 'Web Design Packages', href: '/web-design-packages', description: 'Per-page pricing, no hidden fees. Hosting 6 months free.', price: 'View plans', icon: Icon.tag },
  { name: 'Website Redesign', href: '/website-redesign', description: "Existing site outdated or not converting? Rebuilt from the ground up.", price: 'Get a quote', icon: Icon.refresh },
  { name: 'Website Designer — Bath', href: '/website-designer-bath', description: 'Fast, mobile-first sites for Bath trades and small businesses.', price: 'BA1 & BA2', icon: Icon.pin },
  { name: 'Website Designer — Bristol', href: '/website-designer-bristol', description: 'Web design for Bristol trades, from the Harbourside to Kingswood.', price: 'BS1–BS16', icon: Icon.pin },
  { name: 'Blog', href: '/blog', description: 'Guides on websites, speed and getting found for trades.', price: 'Read more', icon: Icon.doc },
];

// SEO dropdown: core services (compact list, column 1) + area breakdown (columns 2–4)
const seoServiceLinks = [
  { name: 'Local SEO', href: '/local-seo' },
  { name: 'Google Business Profile', href: '/google-business-profile' },
  { name: 'Website Redesign', href: '/website-redesign' },
  { name: 'Blog', href: '/blog' },
];

const bathLinks = [
  { name: 'Bath Hub', href: '/areas/bath' },
  { name: 'SEO Bath', href: '/seo/bath' },
  { name: 'Local SEO Bath', href: '/local-seo/bath' },
];

const bristolLinks = [
  { name: 'Bristol Hub', href: '/areas/bristol' },
  { name: 'SEO Bristol', href: '/seo/bristol' },
  { name: 'Local SEO Bristol', href: '/local-seo/bristol' },
];

const bristolNeighbourhoods = [
  { name: 'Clifton', href: '/areas/clifton-bristol' },
  { name: 'Bedminster', href: '/areas/bedminster-bristol' },
  { name: 'Southville', href: '/areas/southville-bristol' },
  { name: 'Brislington', href: '/areas/brislington' },
  { name: 'Knowle', href: '/areas/knowle-bristol' },
  { name: 'Redland', href: '/areas/redland-bristol' },
];

const otherAreas = [
  { name: 'Keynsham', slug: 'keynsham', postcodes: 'BS31' },
  { name: 'Midsomer Norton', slug: 'midsomer-norton', postcodes: 'BA3' },
  { name: 'Radstock', slug: 'radstock', postcodes: 'BA3' },
  { name: 'Peasedown St John', slug: 'peasedown-st-john', postcodes: 'BA2' },
  { name: 'Paulton', slug: 'paulton', postcodes: 'BS39' },
  { name: 'Saltford', slug: 'saltford', postcodes: 'BS31' },
];

const toolsItems = [
  { name: 'Local SEO Checklist (PDF)', href: '/tools/local-seo-checklist' },
  { name: 'GBP Score Checker', href: '/google-business-profile-score-checker' },
  { name: 'Free SEO Audit', href: '/tools/seo-audit' },
  { name: 'Website ROI Calculator', href: '/website-roi-calculator' },
  { name: 'Review Request Generator', href: '/review-request-generator' },
  { name: 'Invoice & Quote Generator', href: '/invoice-template-generator' },
];

const otherNavItems = [
  { name: 'Case Studies', href: '/case-studies' },
];

/* ─────────────────────────────────────────────
   SHARED SUB-COMPONENTS
───────────────────────────────────────────── */

const ChevronDown = ({ open }) => (
  <svg className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ArrowRight = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const PillNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // 'webDesign' | 'seo' | 'tools' | null
  const [mobileSection, setMobileSection] = useState(null);
  const navRef = useRef(null);

  const toggleMobileSection = (section) =>
    setMobileSection((current) => (current === section ? null : section));

  const toggleMenu = (menu) =>
    setOpenMenu((current) => (current === menu ? null : menu));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAllMenus = () => {
    setOpenMenu(null);
    setIsOpen(false);
    setMobileSection(null);
  };

  const desktopMenuButtonClass = (menu) =>
    `flex items-center gap-1 px-4 py-2 text-sm rounded-full transition-all duration-200 ${
      openMenu === menu ? 'text-white bg-white/5' : 'text-white hover:bg-white/5'
    }`;

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50" aria-label="Main navigation">
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
        <Link href="/" className="flex items-center gap-2.5" onClick={closeAllMenus}>
          <img src="/crown-logo.svg" alt="SEO Kings" width="32" height="32" className="h-8 w-auto opacity-90" />
          <span className="text-base font-bold text-white tracking-tight">SEO Kings</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          <button onClick={() => toggleMenu('webDesign')} className={desktopMenuButtonClass('webDesign')} aria-expanded={openMenu === 'webDesign'}>
            Website Design
            <ChevronDown open={openMenu === 'webDesign'} />
          </button>

          <button onClick={() => toggleMenu('seo')} className={desktopMenuButtonClass('seo')} aria-expanded={openMenu === 'seo'}>
            SEO
            <ChevronDown open={openMenu === 'seo'} />
          </button>

          {otherNavItems.map((item) => (
            <Link key={item.name} href={item.href} className="px-4 py-2 text-sm text-white hover:text-white rounded-full hover:bg-white/5 transition-all duration-200" onClick={closeAllMenus}>
              {item.name}
            </Link>
          ))}

          <div className="relative">
            <button onClick={() => toggleMenu('tools')} className={desktopMenuButtonClass('tools')} aria-expanded={openMenu === 'tools'}>
              Free Tools
              <ChevronDown open={openMenu === 'tools'} />
            </button>

            {openMenu === 'tools' && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 backdrop-blur-2xl border border-white/[0.06] rounded-2xl shadow-2xl p-3"
                style={{ background: 'rgba(7,8,13,0.98)' }}
              >
                {toolsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors group"
                    onClick={closeAllMenus}
                  >
                    {item.name}
                    <ArrowRight className="w-3.5 h-3.5 text-gray-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all duration-200" />
                  </Link>
                ))}
                <div className="mt-1 pt-2 border-t border-white/[0.06]">
                  <Link href="/tools" className="flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium text-primary hover:text-white transition-colors" onClick={closeAllMenus}>
                    Trades Growth Hub
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/contact" className="px-4 py-2 text-sm text-white hover:text-white rounded-full hover:bg-white/5 transition-all duration-200" onClick={closeAllMenus}>
            Contact
          </Link>
        </div>

        {/* Right: CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <MagneticButton
            as={Link}
            href="/web-design-packages"
            strength={0.35}
            className="hidden md:inline-flex items-center px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-colors duration-200"
            onClick={closeAllMenus}
          >
            Get a Quote
          </MagneticButton>

          <button
            onClick={() => {
              setOpenMenu(null);
              setMobileSection(null);
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

      {/* Website Design Mega Menu */}
      {openMenu === 'webDesign' && (
        <div className="hidden md:block backdrop-blur-2xl border-b border-white/[0.06]" style={{ background: 'rgba(7,8,13,0.98)' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-10">
            <div className="grid grid-cols-12 gap-12">
              <div className="col-span-3 border-r border-white/[0.06] pr-10">
                <div className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-3">Website Design</div>
                <p className="text-white text-lg font-semibold leading-snug tracking-tight mb-3">
                  Fast, mobile-first sites. Built to rank.
                </p>
                <p className="text-gray-500 text-[13px] leading-relaxed mb-6">
                  Websites for trades from £250 — live in 2 weeks, built with SEO foundations from day one.
                </p>
                <Link href="/web-design" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary hover:text-white transition-colors" onClick={closeAllMenus}>
                  All web design
                  <ArrowRight />
                </Link>
              </div>

              <div className="col-span-6">
                <ul className="-my-1">
                  {webDesignItems.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="group flex items-center gap-4 py-4 border-b border-white/[0.04] last:border-b-0 -mx-4 px-4 rounded-lg hover:bg-white/[0.03] transition-colors duration-200" onClick={closeAllMenus}>
                        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-400 group-hover:text-primary group-hover:border-primary/30 transition-colors duration-200 shrink-0">
                          {item.icon}
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block text-white text-sm font-medium tracking-tight group-hover:text-white transition-colors">{item.name}</span>
                          <span className="block text-gray-500 text-[13px] leading-relaxed truncate">{item.description}</span>
                        </span>
                        <span className="text-[11px] font-mono tracking-[0.08em] uppercase text-gray-500 group-hover:text-primary transition-colors shrink-0">{item.price}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-3">
                <div className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-gray-500 mb-4">Latest result</div>
                <Link href="/case-studies/peachy-cleans" className="group block" onClick={closeAllMenus}>
                  <div className="text-white text-2xl font-bold tracking-tight mb-1">#1</div>
                  <div className="text-gray-400 text-[13px] leading-relaxed mb-1">Map Pack — &ldquo;cleaning Midsomer Norton&rdquo;</div>
                  <div className="text-gray-500 text-[13px] mb-4">Peachy Cleans · 40+ calls a month</div>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary group-hover:text-white transition-colors">
                    Read the case study
                    <ArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SEO Mega Menu — services + full area breakdown (Bath, Bristol, other towns) */}
      {openMenu === 'seo' && (
        <div className="hidden md:block backdrop-blur-2xl border-b border-white/[0.06]" style={{ background: 'rgba(7,8,13,0.98)' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-10">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-3 border-r border-white/[0.06] pr-8">
                <div className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-3">SEO</div>
                <p className="text-white text-lg font-semibold leading-snug tracking-tight mb-3">
                  Get found. Rank higher. Get the call.
                </p>
                <p className="text-gray-500 text-[13px] leading-relaxed mb-5">
                  Local SEO and Google Business Profile optimisation for trades across Bath and Bristol.
                </p>
                <ul className="space-y-1 mb-5">
                  {seoServiceLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="flex items-center justify-between py-1.5 text-[13px] text-gray-400 hover:text-white transition-colors group" onClick={closeAllMenus}>
                        {item.name}
                        <ArrowRight className="w-3.5 h-3.5 text-gray-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/seo" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary hover:text-white transition-colors" onClick={closeAllMenus}>
                  All SEO services
                  <ArrowRight />
                </Link>
              </div>

              <div className="col-span-3">
                <div className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-gray-500 mb-4">Bath</div>
                <ul className="space-y-1">
                  {bathLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="flex items-center justify-between py-2 text-[13px] text-gray-400 hover:text-white transition-colors group" onClick={closeAllMenus}>
                        {item.name}
                        <ArrowRight className="w-3.5 h-3.5 text-gray-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-3">
                <div className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-gray-500 mb-4">Bristol</div>
                <ul className="space-y-1 mb-4">
                  {bristolLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="flex items-center justify-between py-2 text-[13px] text-gray-400 hover:text-white transition-colors group" onClick={closeAllMenus}>
                        {item.name}
                        <ArrowRight className="w-3.5 h-3.5 text-gray-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-white/[0.04]">
                  <div className="grid grid-cols-2 gap-x-4">
                    {bristolNeighbourhoods.map((item) => (
                      <Link key={item.href} href={item.href} className="py-1.5 text-[12px] text-gray-500 hover:text-white transition-colors" onClick={closeAllMenus}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <Link href="/areas/bristol" className="inline-flex items-center gap-1 mt-2 text-[12px] font-medium text-primary hover:text-white transition-colors" onClick={closeAllMenus}>
                    All Bristol areas
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              <div className="col-span-3">
                <div className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-gray-500 mb-4">Other areas</div>
                <ul className="grid grid-cols-2 gap-x-6">
                  {otherAreas.map((area) => (
                    <li key={area.slug}>
                      <Link href={`/areas/${area.slug}`} className="group flex items-baseline justify-between gap-3 py-[7px] border-b border-white/[0.04] transition-colors" onClick={closeAllMenus}>
                        <span className="text-[13px] text-gray-400 group-hover:text-white transition-colors">{area.name}</span>
                        <span className="text-[11px] font-mono text-gray-600">{area.postcodes}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/areas" className="inline-flex items-center gap-1 mt-3 text-[12px] font-medium text-primary hover:text-white transition-colors" onClick={closeAllMenus}>
                  All areas
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile dropdown — full viewport */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[68px] z-40 flex flex-col" style={{ background: '#07080D' }}>
          <div className="flex-1 flex flex-col justify-start pt-4 px-6 overflow-y-auto">

            {/* Website Design accordion */}
            <div className="border-b border-white/5">
              <button onClick={() => toggleMobileSection('webDesign')} className="w-full flex items-center justify-between py-4 text-white" aria-expanded={mobileSection === 'webDesign'}>
                <span className="text-base font-medium">Website Design</span>
                <ChevronDown open={mobileSection === 'webDesign'} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileSection === 'webDesign' ? 'max-h-[36rem] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col gap-1 pb-3">
                  <Link href="/web-design" className="flex flex-col py-2.5 pl-3 border-l border-white/10 text-gray-300 hover:text-white hover:border-primary transition-colors duration-200" onClick={closeAllMenus}>
                    <span className="text-sm font-medium">Website Design (all)</span>
                  </Link>
                  {webDesignItems.map((item) => (
                    <Link key={item.name} href={item.href} className="flex flex-col py-2.5 pl-3 border-l border-white/10 text-gray-300 hover:text-white hover:border-primary transition-colors duration-200" onClick={closeAllMenus}>
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-xs text-gray-500">{item.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* SEO accordion — services + Bath/Bristol/other areas */}
            <div className="border-b border-white/5">
              <button onClick={() => toggleMobileSection('seo')} className="w-full flex items-center justify-between py-4 text-white" aria-expanded={mobileSection === 'seo'}>
                <span className="text-base font-medium">SEO</span>
                <ChevronDown open={mobileSection === 'seo'} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileSection === 'seo' ? 'max-h-[48rem] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pb-3">
                  <Link href="/seo" className="flex flex-col py-2.5 pl-3 border-l border-white/10 text-gray-300 hover:text-white hover:border-primary transition-colors duration-200" onClick={closeAllMenus}>
                    <span className="text-sm font-medium">SEO (all)</span>
                  </Link>
                  <div className="flex flex-col gap-1 mb-2">
                    {seoServiceLinks.map((item) => (
                      <Link key={item.href} href={item.href} className="py-2 pl-3 border-l border-white/10 text-gray-300 hover:text-white hover:border-primary transition-colors duration-200 text-sm" onClick={closeAllMenus}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <p className="pl-3 text-[11px] font-mono uppercase tracking-[0.1em] text-gray-500 mt-3 mb-1">Bath</p>
                  <div className="flex flex-col gap-1 mb-2">
                    {bathLinks.map((item) => (
                      <Link key={item.href} href={item.href} className="py-2 pl-3 border-l border-white/10 text-gray-300 hover:text-white hover:border-primary transition-colors duration-200 text-sm" onClick={closeAllMenus}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <p className="pl-3 text-[11px] font-mono uppercase tracking-[0.1em] text-gray-500 mt-3 mb-1">Bristol</p>
                  <div className="flex flex-col gap-1 mb-2">
                    {bristolLinks.map((item) => (
                      <Link key={item.href} href={item.href} className="py-2 pl-3 border-l border-white/10 text-gray-300 hover:text-white hover:border-primary transition-colors duration-200 text-sm" onClick={closeAllMenus}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <p className="pl-3 text-[11px] font-mono uppercase tracking-[0.1em] text-gray-500 mt-3 mb-1">Other areas</p>
                  <div className="grid grid-cols-2 gap-x-4 pl-3 border-l border-white/10">
                    {otherAreas.map((area) => (
                      <Link key={area.slug} href={`/areas/${area.slug}`} className="flex items-center justify-between py-2 text-gray-400 hover:text-white transition-colors duration-200" onClick={closeAllMenus}>
                        <span className="text-sm">{area.name}</span>
                        <span className="text-[11px] text-gray-600 font-mono">{area.postcodes}</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/areas" className="flex items-center gap-2 py-2.5 mt-2 pl-3 text-primary-light hover:text-white transition-colors duration-200" onClick={closeAllMenus}>
                    <span className="text-sm font-medium">View all areas →</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Case Studies */}
            {otherNavItems.map((link) => (
              <Link key={link.name} href={link.href} className="text-white hover:text-primary-light transition-colors duration-200 text-base font-medium py-4 border-b border-white/5" onClick={closeAllMenus}>
                {link.name}
              </Link>
            ))}

            {/* Free Tools accordion */}
            <div className="border-b border-white/5">
              <button onClick={() => toggleMobileSection('tools')} className="w-full flex items-center justify-between py-4 text-white" aria-expanded={mobileSection === 'tools'}>
                <span className="text-base font-medium">Free Tools</span>
                <ChevronDown open={mobileSection === 'tools'} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileSection === 'tools' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col gap-1 pb-3">
                  {toolsItems.map((item) => (
                    <Link key={item.href} href={item.href} className="py-2.5 pl-3 border-l border-white/10 text-gray-300 hover:text-white hover:border-primary transition-colors duration-200 text-sm" onClick={closeAllMenus}>
                      {item.name}
                    </Link>
                  ))}
                  <Link href="/tools" className="flex items-center gap-2 py-2.5 pl-3 text-primary-light hover:text-white transition-colors duration-200" onClick={closeAllMenus}>
                    <span className="text-sm font-medium">Trades Growth Hub →</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact */}
            <Link href="/contact" className="text-white hover:text-primary-light transition-colors duration-200 text-base font-medium py-4 border-b border-white/5" onClick={closeAllMenus}>
              Contact
            </Link>

            <div className="mt-6">
              <a href="/contact" className="bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 w-full mt-2 text-center block" onClick={closeAllMenus}>
                Get a Quote
              </a>
            </div>

            <div className="my-6 h-px bg-white/[0.06]" />

            <div className="mt-6 flex flex-col gap-3">
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-primary mb-2">Quick Contact</p>
              <a href="tel:07702264921" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm font-medium">07702 264 921</span>
              </a>
              <a href="https://wa.me/447702264921" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.687.854 5.305 2.457 7.423l-2.585 9.446a.75.75 0 00.961.92l9.197-3.354c2.02 1.08 4.291 1.655 6.715 1.655h.005c5.427 0 9.847-4.420 9.847-9.848 0-2.631-.997-5.109-2.829-7.019-1.831-1.91-4.318-2.990-7.018-2.990z" />
                </svg>
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>

            <div className="mt-auto pb-6">
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm text-gray-300 hover:text-white rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200" onClick={closeAllMenus}>
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
