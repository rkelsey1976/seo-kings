'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../components/SEO';

const BANESMap = dynamic(() => import('../components/BANESMap'), { ssr: false });

const Areas = () => {
  const areas = [
    {
      name: 'Bath',
      slug: 'bath',
      description: 'Historic city centre and surrounding areas',
      postcodes: 'BA1, BA2',
      population: '90,000+',
      image: '/images/areas/bath-roman-baths.webp',
    },
    {
      name: 'Keynsham',
      slug: 'keynsham',
      description: 'Town between Bath and Bristol',
      postcodes: 'BS31',
      population: '16,000+',
      image: '/images/areas/keynsham-health-centre.webp',
    },
    {
      name: 'Midsomer Norton',
      slug: 'midsomer-norton',
      description: 'Market town in the Somer Valley',
      postcodes: 'BA3',
      population: '12,000+',
      image: '/images/areas/midsomer-norton.webp',
    },
    {
      name: 'Radstock',
      slug: 'radstock',
      description: 'Former mining town with rich heritage',
      postcodes: 'BA3',
      population: '6,000+',
      image: '/images/areas/radstock.webp',
    },
    {
      name: 'Peasedown St John',
      slug: 'peasedown-st-john',
      description: 'Growing village south of Bath',
      postcodes: 'BA2',
      population: '6,500+',
      image: '/images/areas/peasedown-st-john.webp',
    },
    {
      name: 'Paulton',
      slug: 'paulton',
      description: 'Village in the Cam Valley',
      postcodes: 'BS39',
      population: '5,500+',
      image: '/images/areas/paulton.webp',
    },
    {
      name: 'Saltford',
      slug: 'saltford',
      description: 'Riverside village on the River Avon',
      postcodes: 'BS31',
      population: '4,500+',
      image: '/images/areas/saltford-marina.webp',
    },
    {
      name: 'Timsbury',
      slug: 'timsbury',
      description: 'Rural village near Paulton',
      postcodes: 'BA2',
      population: '3,000+',
      image: '/images/areas/timsbury.webp',
    },
    {
      name: 'Westfield',
      slug: 'westfield',
      description: 'Village in the Somer Valley near Radstock',
      postcodes: 'BA3',
      population: '2,000+',
      image: '/images/areas/westfield.webp',
    },
    {
      name: 'Chew Magna',
      slug: 'chew-magna',
      description: 'Village in the Chew Valley',
      postcodes: 'BS40',
      population: '1,200+',
      image: '/images/areas/chew-magna.webp',
    },
    {
      name: 'Temple Cloud',
      slug: 'temple-cloud',
      description: 'Village in the Cam Valley near Paulton',
      postcodes: 'BS39',
      population: '1,500+',
      image: '/images/areas/temple-cloud.webp',
    },
    {
      name: 'Clutton',
      slug: 'clutton',
      description: 'Village in the Cam Valley near Temple Cloud',
      postcodes: 'BS39',
      population: '1,800+',
      image: '/images/areas/clutton.webp',
    },
  ];

  return (
    <>
      <SEO
        title="Website Design & Local SEO Services | 41 Areas in Bath & North East Somerset"
        description="Professional website design from £399 across Bath, Keynsham, Midsomer Norton, Radstock and 37 other areas. Local SEO and Google Business Profile services for trades and small businesses."
        canonical="/areas"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Areas We Serve' }
        ]}
        schemas={[
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
            description: 'Local SEO and website design services across Bath and North East Somerset. We help businesses in Bath, Keynsham, Midsomer Norton, Radstock and nearby get found on Google.',
            url: 'https://seo-kings.co.uk/areas',
            isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
            provider: { '@id': 'https://seo-kings.co.uk/#organization' },
          },
        ]}
      />

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/areas/bath-roman-baths.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark/75 via-dark/70 to-dark" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="animate-fade-in-down inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
              Service Areas
            </span>
            <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Website Design in <span className="gradient-text">Bath & North East Somerset</span>
            </h1>
            <p className="animate-fade-in-up delay-200 text-xl text-gray-300 max-w-3xl mx-auto">
              Professional website design from £399 covering 41 areas across Bath and North East Somerset. We help local trades and businesses get found on Google.
            </p>
            <p className="animate-fade-in-up delay-300 text-sm text-gray-500 mt-4">
              Searching for a{' '}
              <Link href="/website-designer-near-me" className="text-primary-light hover:underline">
                website designer near me
              </Link>
              ? See our full coverage below.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-card border border-white/10 rounded-2xl overflow-hidden">
            {/* Map Header */}
            <div className="p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold text-white">Our Coverage Area</h2>
              <p className="text-gray-400 mt-1">Bath & North East Somerset - Click markers for details</p>
            </div>
            
            {/* Interactive Map with BANES Boundary */}
            <BANESMap />

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-t border-white/10">
              <div className="p-6 text-center">
                <div className="text-3xl font-bold gradient-text">41</div>
                <div className="text-sm text-gray-400">Areas & Neighbourhoods</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold gradient-text">£399</div>
                <div className="text-sm text-gray-400">Website Design from</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold gradient-text">150K+</div>
                <div className="text-sm text-gray-400">Population Reach</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold gradient-text">5★</div>
                <div className="text-sm text-gray-400">Google Rated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
              Website Design & Local SEO in Every Area
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose your area below to see website design packages, local SEO services, and real results from trades and businesses just like yours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, index) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group bg-dark-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={`Website Design and Local SEO in ${area.name} — get found on Google`}
                    width={400}
                    height={300}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="px-2 py-1 bg-primary/80 text-white text-xs font-medium rounded">
                      {area.postcodes}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-light transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">{area.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Pop. {area.population}</span>
                    <span className="text-primary-light text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      View area
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
            Ready for a Website That Ranks?
          </h2>
          <p className="text-gray-400 mb-8">
            We cover 41 areas across Bath and North East Somerset. Not sure if we serve your location? Get in touch — we likely do, or can help nearby.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 btn-glow"
            >
              Get Your Free Audit
            </Link>
            <a
              href="tel:07702264921"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              07702 264 921
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Areas;
