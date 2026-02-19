'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const navRef = useRef(null);

  const services = [
    { 
      name: 'Website Design', 
      href: '/web-design',
      description: 'Custom websites that convert visitors into customers',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-primary to-primary-dark',
    },
    { 
      name: 'Web Design Packages', 
      href: '/web-design-packages',
      description: 'From £399 — 1-page Starter, Professional, Full',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-primary to-primary-dark',
    },
    { 
      name: 'Local SEO', 
      href: '/local-seo',
      description: 'Rank higher on Google for local searches',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      color: 'from-secondary to-secondary-dark',
    },
    { 
      name: 'Google Business Profile', 
      href: '/google-business-profile',
      description: 'One-off £150 — or included in SEO & website packages',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'from-accent to-accent-dark',
    },
  ];

  const areas = [
    { 
      name: 'Bath', 
      slug: 'bath',
      description: 'Historic city centre and surrounding areas',
      postcodes: 'BA1, BA2',
    },
    { 
      name: 'Keynsham', 
      slug: 'keynsham',
      description: 'Town between Bath and Bristol',
      postcodes: 'BS31',
    },
    { 
      name: 'Midsomer Norton', 
      slug: 'midsomer-norton',
      description: 'Market town in the Somer Valley',
      postcodes: 'BA3',
    },
    { 
      name: 'Radstock', 
      slug: 'radstock',
      description: 'Former mining town with rich heritage',
      postcodes: 'BA3',
    },
    { 
      name: 'Peasedown St John', 
      slug: 'peasedown-st-john',
      description: 'Growing village south of Bath',
      postcodes: 'BA2',
    },
    { 
      name: 'Paulton', 
      slug: 'paulton',
      description: 'Village in the Cam Valley',
      postcodes: 'BS39',
    },
    { 
      name: 'Saltford', 
      slug: 'saltford',
      description: 'Riverside village on the River Avon',
      postcodes: 'BS31',
    },
    { 
      name: 'Timsbury', 
      slug: 'timsbury',
      description: 'Rural village near Paulton',
      postcodes: 'BA2',
    },
  ];

  const navLinks = [
    { name: 'Case Studies', href: '/case-studies', isRoute: true },
    { name: 'About', href: '/about', isRoute: true },
    { name: 'Contact', href: '/contact', isRoute: true },
  ];

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsServicesOpen(false);
        setIsAreasOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsAreasOpen(false);
    setIsMenuOpen(false);
  }, []);

  const closeAllMenus = () => {
    setIsServicesOpen(false);
    setIsAreasOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50" aria-label="Main navigation">
      {/* Skip to main content - first focusable element, target main landmark */}
      <a 
        href="#main-content" 
        tabIndex={0}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
      
      {/* Main Nav Bar */}
      <div className="bg-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2" onClick={closeAllMenus}>
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M2 20h20v-2H2v2zm2-4h16l1-9-5 3-4-6-4 6-5-3 1 9z"/>
                </svg>
                <span className="text-xl font-bold text-white">
                  SEOKings
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Services Dropdown Trigger */}
              <button 
                className={`flex items-center gap-1 transition-colors duration-200 text-sm font-medium ${isServicesOpen ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                onClick={() => {
                  setIsServicesOpen(!isServicesOpen);
                  setIsAreasOpen(false);
                }}
                aria-expanded={isServicesOpen}
              >
                Services
                <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Areas Dropdown Trigger */}
              <button 
                className={`flex items-center gap-1 transition-colors duration-200 text-sm font-medium ${isAreasOpen ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                onClick={() => {
                  setIsAreasOpen(!isAreasOpen);
                  setIsServicesOpen(false);
                }}
                aria-expanded={isAreasOpen}
              >
                Areas
                <svg className={`w-4 h-4 transition-transform duration-300 ${isAreasOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                    onClick={closeAllMenus}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                    onClick={closeAllMenus}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a 
                href="/contact" 
                className="bg-primary hover:bg-primary-light text-white px-5 py-2 rounded-lg font-medium transition-all duration-200 btn-glow"
                onClick={closeAllMenus}
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  setIsServicesOpen(false);
                  setIsAreasOpen(false);
                }}
                className="text-gray-300 hover:text-white p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark rounded-lg"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Mega Menu - Slides down under nav */}
      {isServicesOpen && (
        <div 
          id="services-menu"
          className="hidden md:block bg-dark/95 backdrop-blur-xl border-b border-white/5 overflow-hidden transition-all duration-300 ease-out max-h-96 opacity-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="group flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-200"
                  onClick={closeAllMenus}
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`} aria-hidden="true">
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <span className="text-white font-semibold mb-1 group-hover:text-primary-light transition-colors block">
                      {service.name}
                    </span>
                    <span className="text-sm text-gray-300 leading-relaxed block">
                      {service.description}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" aria-hidden="true">
                    <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
              <p className="text-sm text-gray-300">
                Not sure which service you need?
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-light hover:text-white transition-colors"
                onClick={closeAllMenus}
              >
                Get a free consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Areas Mega Menu - Slides down under nav */}
      {isAreasOpen && (
        <div 
          id="areas-menu"
          className="hidden md:block bg-dark/95 backdrop-blur-xl border-b border-white/5 overflow-hidden transition-all duration-300 ease-out opacity-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid md:grid-cols-5 gap-6">
              {/* Areas Grid - Left Side */}
              <div className="md:col-span-3">
                <div className="grid grid-cols-2 gap-3">
                  {areas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      className="group flex gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                      onClick={closeAllMenus}
                    >
                      {/* Location Icon */}
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <span className="text-white font-semibold text-sm group-hover:text-primary-light transition-colors block">
                          {area.name}
                        </span>
                        <span className="text-xs text-gray-400 block">
                          {area.postcodes}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* View All Link */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <Link 
                    href="/areas"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-light hover:text-white transition-colors"
                    onClick={closeAllMenus}
                  >
                    View all areas
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* CTA Card - Right Side */}
              <div className="md:col-span-2">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex-1">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Free Local SEO Audit
                    </h3>
                    <p className="text-sm text-gray-300 mb-4">
                      Find out how your business ranks in your area. We'll analyse your online presence and show you exactly how to get more local customers.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-6 py-3 rounded-xl font-semibold text-sm text-center transition-all duration-300 btn-glow"
                    onClick={closeAllMenus}
                  >
                    Get Your Free Audit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-dark/95 backdrop-blur-xl border-b border-white/5 overflow-hidden transition-all duration-300 ease-out max-h-screen opacity-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col gap-4">
              {/* Mobile Services Links */}
              <div className="border-b border-white/5 pb-4">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="flex items-center gap-3 py-3 text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={closeAllMenus}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white`} aria-hidden="true">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {service.icon.props.children}
                      </svg>
                    </div>
                    <span className="font-medium">{service.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Areas Links */}
              <div className="border-b border-white/5 pb-4">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Areas We Serve</div>
                <div className="grid grid-cols-2 gap-2">
                  {areas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      className="flex items-center gap-2 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                      onClick={closeAllMenus}
                    >
                      <svg className="w-4 h-4 text-primary-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span className="text-sm font-medium">{area.name}</span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/areas"
                  className="flex items-center gap-2 py-2 mt-2 text-primary-light hover:text-white transition-colors duration-200"
                  onClick={closeAllMenus}
                >
                  <span className="text-sm font-medium">View all areas →</span>
                </Link>
              </div>
              
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-2"
                    onClick={closeAllMenus}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-2"
                    onClick={closeAllMenus}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a 
                href="/contact" 
                className="bg-primary hover:bg-primary-light text-white px-5 py-3 rounded-lg font-medium transition-all duration-200 w-full mt-2 text-center block"
                onClick={closeAllMenus}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
