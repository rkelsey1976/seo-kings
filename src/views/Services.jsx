'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import SectionTag from '../components/SectionTag';

const services = [
  {
    name: 'Website Design',
    slug: 'web-design',
    price: 'From £250',
    tag: 'Core Service',
    description: 'A fast, mobile-first website built to rank for your trade locally. One-page sites from £250. Multi-page sites are £250 base + £50 per page. Click-to-call, quote form, and Google Business Profile set-up included.',
    bullets: [
      'Live in under 2 weeks',
      'Mobile-first and fast-loading',
      'Built to rank for "[trade] near me" searches',
      'Click-to-call and quote form included',
    ],
    cta: 'View Website Design',
    accentColor: '#E8715A',
  },
  {
    name: 'Website Design Packages',
    slug: 'web-design-packages',
    price: 'From £250',
    tag: 'Pricing',
    description: 'Simple per-page pricing — £250 base + £50 per additional page, up to 30 pages. Use the calculator to build your exact quote. No hidden fees.',
    bullets: [
      '1-page site from £250',
      '3-page site from £350',
      '5-page site from £450',
      'All include GBP set-up',
    ],
    cta: 'View Packages & Pricing',
    accentColor: '#E8715A',
  },
  {
    name: 'Google Business Profile',
    slug: 'google-business-profile',
    price: '£100 one-off',
    tag: 'Add-on',
    description: 'Claim, verify and fully optimise your GBP so you show up in the Map Pack — the top 3 results that capture the majority of local clicks. Included with all website packages.',
    bullets: [
      'Claim and verify your listing',
      'Full optimisation for Map Pack',
      'Categories, photos, and posts set up',
      'Included free with every website',
    ],
    cta: 'View Google Business Profile',
    accentColor: '#E8715A',
  },
  {
    name: 'Local SEO',
    slug: 'local-seo',
    price: 'From £150/mo',
    tag: 'Add-on',
    description: 'Ongoing keyword research, on-page optimisation, local citations, and monthly ranking reports. Know exactly where you sit on Google and what\'s improving every month.',
    bullets: [
      'Monthly keyword tracking',
      'On-page and citation optimisation',
      'Monthly ranking report',
      'No long-term contracts',
    ],
    cta: 'View Local SEO',
    accentColor: '#E8715A',
  },
  {
    name: 'Website Redesign',
    slug: 'website-redesign',
    price: 'From £250',
    tag: 'Add-on',
    description: 'Got a site that looks dated, loads slowly, or isn\'t getting you any enquiries? We redesign it from the ground up — fast, mobile-first, and built to rank. Keep your domain, ditch everything else.',
    bullets: [
      'Full redesign — not a facelift',
      'Mobile-first and faster than before',
      'SEO foundations rebuilt from scratch',
      'Same domain, completely new site',
    ],
    cta: 'View Website Redesign',
    accentColor: '#E8715A',
  },
  {
    name: 'Social Media Integration',
    slug: 'services',
    price: 'Included',
    tag: 'Add-on',
    description: 'Your website and social profiles working together. We link your Facebook, Instagram and Google Business Profile so customers can find, follow and contact you from wherever they land.',
    bullets: [
      'Facebook and Instagram linked',
      'Google Business Profile connected',
      'Click-to-follow buttons on your site',
      'Consistent branding across all platforms',
    ],
    cta: 'Get in Touch',
    accentColor: '#E8715A',
  },
  {
    name: 'Logo Design',
    slug: 'contact',
    price: 'From £100',
    tag: 'Add-on',
    description: 'A clean, professional logo that works everywhere — your website, Google Business Profile, van signage and social media. Designed for trades and local businesses across Bath and Somerset.',
    bullets: [
      'Professional logo built for your trade',
      'Supplied in PNG, SVG and PDF formats',
      'Light and dark versions included',
      'Designed to work at any size',
    ],
    cta: 'Get in Touch',
    accentColor: '#E8715A',
  },
  {
    name: 'Website Hosting',
    slug: 'hosting',
    price: '6 months free',
    tag: 'Add-on',
    description: 'SSL, daily backups, uptime monitoring and content tweaks — so your site stays fast, secure and up to date. Free for 6 months with every website, then £50/year.',
    bullets: [
      'Free SSL certificate included',
      'Daily automated backups',
      'Uptime monitoring and alerts',
      'Content tweaks and updates',
    ],
    cta: 'View Hosting',
    accentColor: '#E8715A',
  },
];

const results = [
  { business: 'Peachy Cleans', result: 'Map Pack · "cleaning Midsomer Norton"', slug: 'peachy-cleans' },
  { business: 'New Decorating', result: '#1 organic · "exterior painter Bath"', slug: 'new-decorating' },
  { business: 'Aurelian Massage', result: 'Ranking · "massage Bath"', slug: 'aurelian-massage' },
];

const Services = () => {
  return (
    <>
      <SEO
        title="Web Design & Local SEO Services Bath"
        description="Website design from £250, Google Business Profile set-up, and local SEO for trades in Bath & North East Somerset. See all services and pricing."
        canonical="/services"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services' },
        ]}
      />

      {/* Hero */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/website-design/web-design-planning-wireframe.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark/75 via-dark/70 to-dark" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6 text-primary">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Everything you need to get found on Google
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              One core service — website design for local trades — with add-ons that actually make sense. All work together to get you visible and get you calls.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col hover:border-white/10 transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span
                      className="inline-block text-[10px] font-semibold tracking-[0.14em] uppercase font-mono px-3 py-1 rounded-full mb-3"
                      style={{
                        color: service.accentColor,
                        backgroundColor: `${service.accentColor}18`,
                        border: `1px solid ${service.accentColor}30`,
                      }}
                    >
                      {service.tag}
                    </span>
                    <h2 className="text-2xl font-bold text-white">{service.name}</h2>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-2xl font-bold" style={{ color: service.accentColor }}>{service.price}</div>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2 mb-8 flex-1">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <svg className="w-4 h-4 shrink-0" style={{ color: service.accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: service.accentColor }}
                >
                  {service.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-8">Verified Results</SectionTag>
          <div className="grid sm:grid-cols-3 gap-4">
            {results.map((r) => (
              <Link
                key={r.slug}
                href={`/case-studies/${r.slug}`}
                className="flex items-center justify-between p-4 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group"
              >
                <div>
                  <div className="text-sm font-semibold text-white mb-1">{r.business}</div>
                  <div className="text-xs text-gray-500">{r.result}</div>
                </div>
                <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default Services;
