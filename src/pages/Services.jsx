'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

const services = [
  {
    name: 'Website Design',
    slug: 'web-design',
    price: 'From £399',
    tag: 'Core Service',
    description: 'A fast, mobile-first website built to rank for your trade locally. One-page sites from £399. Multi-page from £599. Click-to-call, quote form, and Google Business Profile set-up included.',
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
    price: 'From £399',
    tag: 'Pricing',
    description: 'Three clear packages — Starter, Professional, and Full — so you know exactly what you\'re getting and what it costs. No hidden fees.',
    bullets: [
      'Starter (1-page) from £399',
      'Professional (3-page) from £599',
      'Full (5+ page) from £999',
      'All include GBP set-up',
    ],
    cta: 'View Packages & Pricing',
    accentColor: '#E8715A',
  },
  {
    name: 'Google Business Profile',
    slug: 'google-business-profile',
    price: '£150 one-off',
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
        title="Web Design & Local SEO Services Bath | SEO Kings"
        description="Website design from £399, Google Business Profile set-up, and local SEO for trades in Bath & North East Somerset. See all services and pricing."
        canonical="/services"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services' },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/website-design/web-design-planning-wireframe.webp"
            alt="Web design planning and wireframing session"
            fill
            priority
            className="object-cover object-center opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6" style={{ color: '#E8715A' }}>
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
      <section className="py-16">
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
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-8" style={{ color: '#E8715A' }}>
            Verified Results
          </p>
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
