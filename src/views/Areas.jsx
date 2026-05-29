'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';

const BANESMap = dynamic(() => import('../components/BANESMap'), { ssr: false });

const areas = [
  {
    name: 'Bath',
    slug: 'bath',
    description: 'Website design for trades across the city and surrounding areas.',
    postcodes: 'BA1, BA2',
    image: '/images/areas/bath-roman-baths.webp',
  },
  {
    name: 'Keynsham',
    slug: 'keynsham',
    description: 'Fast local websites for Keynsham trades — built to rank in BS31.',
    postcodes: 'BS31',
    image: '/images/areas/keynsham-health-centre.webp',
  },
  {
    name: 'Midsomer Norton',
    slug: 'midsomer-norton',
    description: 'Get found by customers searching for your trade in Midsomer Norton.',
    postcodes: 'BA3',
    image: '/images/areas/midsomer-norton.webp',
  },
  {
    name: 'Radstock',
    slug: 'radstock',
    description: 'Local website design and SEO for trades in Radstock and surrounding villages.',
    postcodes: 'BA3',
    image: '/images/areas/radstock.webp',
  },
  {
    name: 'Peasedown St John',
    slug: 'peasedown-st-john',
    description: 'Website design for trades and small businesses in Peasedown St John.',
    postcodes: 'BA2',
    image: '/images/areas/peasedown-st-john.webp',
  },
  {
    name: 'Paulton',
    slug: 'paulton',
    description: 'Get your trade found on Google in Paulton and the Cam Valley.',
    postcodes: 'BS39',
    image: '/images/areas/paulton.webp',
  },
  {
    name: 'Saltford',
    slug: 'saltford',
    description: 'Fast, local websites for trades and businesses in Saltford.',
    postcodes: 'BS31',
    image: '/images/areas/saltford-marina.webp',
  },
  {
    name: 'Timsbury',
    slug: 'timsbury',
    description: 'Website design for local trades in Timsbury and nearby villages.',
    postcodes: 'BA2',
    image: '/images/areas/timsbury.webp',
  },
  {
    name: 'Westfield',
    slug: 'westfield',
    description: 'Local SEO and website design for trades in Westfield.',
    postcodes: 'BA3',
    image: '/images/areas/westfield.webp',
  },
  {
    name: 'Chew Magna',
    slug: 'chew-magna',
    description: 'Get found by customers in the Chew Valley and surrounding areas.',
    postcodes: 'BS40',
    image: '/images/areas/chew-magna.webp',
  },
  {
    name: 'Temple Cloud',
    slug: 'temple-cloud',
    description: 'Website design and local SEO for trades in Temple Cloud.',
    postcodes: 'BS39',
    image: '/images/areas/temple-cloud.webp',
  },
  {
    name: 'Clutton',
    slug: 'clutton',
    description: 'Fast local websites for trades and businesses in Clutton.',
    postcodes: 'BS39',
    image: '/images/areas/clutton.webp',
  },
  // ── Expansion areas — swap placeholder images when photos are available ──
  {
    name: 'Frome',
    slug: 'frome',
    description: 'Website design and local SEO for trades in Frome and the BA11 area.',
    postcodes: 'BA11',
    image: '/images/areas/frome.webp',
  },
  {
    name: 'Bradford on Avon',
    slug: 'bradford-on-avon',
    description: 'Local websites for trades and businesses in Bradford on Avon.',
    postcodes: 'BA15',
    image: '/images/areas/bradford-on-avon.webp',
  },
  {
    name: 'Corsham',
    slug: 'corsham',
    description: 'Website design and local SEO for Corsham trades and businesses.',
    postcodes: 'SN13',
    image: '/images/areas/corsham.webp',
  },
  {
    name: 'Shepton Mallet',
    slug: 'shepton-mallet',
    description: 'Get found on Google in Shepton Mallet and across BA4.',
    postcodes: 'BA4',
    image: '/images/areas/shepton-mallet.webp',
  },
  {
    name: 'Melksham',
    slug: 'melksham',
    description: 'Fast, Google-ready websites for trades in Melksham and SN12.',
    postcodes: 'SN12',
    image: '/images/areas/melksham.webp',
  },
];

const heroFeatures = [
  'Bath & BANES',
  'From £250',
  'Live in 2 weeks',
  'Mobile-first',
];

const Areas = () => {
  return (
    <>
      <SEO schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
              { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: 'https://seo-kings.co.uk/areas' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            '@id': 'https://seo-kings.co.uk/areas',
            name: 'Areas We Serve — Bath & North East Somerset',
            description: 'Local SEO and website design services across Bath and North East Somerset.',
            url: 'https://seo-kings.co.uk/areas',
            isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
            provider: { '@id': 'https://seo-kings.co.uk/#organization' },
          },
        ]} />

      {/* ── HERO ─────────────────────────────────── */}
      <ServicePageHero
        badge="Bath, Somerset & Wiltshire"
        title="Website Design Across"
        highlight="Bath, Somerset & Wiltshire"
        description="Someone in Bath, Frome, Bradford on Avon or Melksham is searching for your trade right now. We build fast local websites that get you found and get you called. From £250, live in 2 weeks."
        features={heroFeatures}
        ctaText="Get a Free Audit"
        ctaSecondary="Call Us Today"
      />

      {/* ── AREAS GRID ───────────────────────────── */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
              All areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Website Design Across Bath, Somerset &amp; Wiltshire
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Select your area to see what we&apos;ve done locally and what we can do for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, index) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group bg-dark-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={`Website design in ${area.name}, ${area.postcodes}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading={index < 4 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/40 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="px-2 py-1 bg-primary/80 text-white text-xs font-semibold rounded">
                      {area.postcodes}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-primary-light transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <span className="text-primary-light text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    See local work
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-center text-sm text-gray-600 mt-10">
            Don&apos;t see your area?{' '}
            <Link href="/website-designer-near-me" className="text-primary-light hover:underline">
              Check our full coverage
            </Link>{' '}
            — we serve Bath, Somerset and Wiltshire.
          </p>
        </div>
      </section>

      {/* ── COVERAGE MAP ─────────────────────────── */}
      <section className="py-12 bg-dark-lighter border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-card border border-white/10 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">Our Coverage Area</h2>
              <p className="text-gray-400 text-sm mt-1">
                Bath, Somerset &amp; Wiltshire — click markers for area details
              </p>
            </div>

            <BANESMap />

            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-t border-white/10">
              {[
                { value: '22', label: 'Years experience' },
                { value: '£250', label: 'Websites from' },
                { value: '2 wks', label: 'Typical turnaround' },
                { value: '3', label: 'Verified client results' },
              ].map(({ value, label }) => (
                <div key={label} className="p-6 text-center">
                  <div className="text-3xl font-bold gradient-text">{value}</div>
                  <div className="text-sm text-gray-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <CTABanner />
    </>
  );
};

export default Areas;
