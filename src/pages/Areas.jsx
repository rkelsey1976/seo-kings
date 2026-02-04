import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BANESMap from '../components/BANESMap';

const Areas = () => {
  const areas = [
    {
      name: 'Bath',
      slug: 'bath',
      description: 'Historic city centre and surrounding areas',
      postcodes: 'BA1, BA2',
      population: '90,000+',
      image: 'https://images.unsplash.com/photo-1589996448606-27d38d70f566?w=400&h=300&fit=crop&auto=format&q=80',
    },
    {
      name: 'Keynsham',
      slug: 'keynsham',
      description: 'Town between Bath and Bristol',
      postcodes: 'BS31',
      population: '16,000+',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&auto=format&q=80',
    },
    {
      name: 'Midsomer Norton',
      slug: 'midsomer-norton',
      description: 'Market town in the Somer Valley',
      postcodes: 'BA3',
      population: '12,000+',
      image: 'https://images.unsplash.com/photo-1517030330234-94c4fb948ebc?w=400&h=300&fit=crop&auto=format&q=80',
    },
    {
      name: 'Radstock',
      slug: 'radstock',
      description: 'Former mining town with rich heritage',
      postcodes: 'BA3',
      population: '6,000+',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=300&fit=crop&auto=format&q=80',
    },
    {
      name: 'Peasedown St John',
      slug: 'peasedown-st-john',
      description: 'Growing village south of Bath',
      postcodes: 'BA2',
      population: '6,500+',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&auto=format&q=80',
    },
    {
      name: 'Paulton',
      slug: 'paulton',
      description: 'Village in the Cam Valley',
      postcodes: 'BS39',
      population: '5,500+',
      image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?w=400&h=300&fit=crop&auto=format&q=80',
    },
    {
      name: 'Saltford',
      slug: 'saltford',
      description: 'Riverside village on the River Avon',
      postcodes: 'BS31',
      population: '4,500+',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format&q=80',
    },
    {
      name: 'Timsbury',
      slug: 'timsbury',
      description: 'Rural village near Paulton',
      postcodes: 'BA2',
      population: '3,000+',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop&auto=format&q=80',
    },
  ];

  return (
    <>
      <SEO
        title="Areas We Serve | Local SEO Services in Bath & BANES"
        description="Local SEO across Bath & North East Somerset. We help businesses in Bath, Keynsham, Midsomer Norton, Radstock and nearby get found on Google."
        keywords="SEO Bath, SEO Keynsham, SEO Midsomer Norton, SEO BANES, local SEO Somerset, SEO near me"
        canonical="/areas"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Areas We Serve' }
        ]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="animate-fade-in-down inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
              Service Areas
            </span>
            <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Areas We <span className="gradient-text">Serve</span>
            </h1>
            <p className="animate-fade-in-up delay-200 text-xl text-gray-300 max-w-3xl mx-auto">
              Proud to help local businesses across Bath and North East Somerset dominate Google search results.
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
              <p className="text-gray-400 mt-1">Bath & North East Somerset (BANES) - Click markers for details</p>
            </div>
            
            {/* Interactive Map with BANES Boundary */}
            <BANESMap />

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-t border-white/10">
              <div className="p-6 text-center">
                <div className="text-3xl font-bold gradient-text">8</div>
                <div className="text-sm text-gray-400">Areas Covered</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold gradient-text">150+</div>
                <div className="text-sm text-gray-400">Local Clients</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold gradient-text">140k+</div>
                <div className="text-sm text-gray-400">Population Reach</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-gray-400">Local Focus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Local SEO Services in Every Area
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Click on your area to learn more about our local SEO services and see results from businesses just like yours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, index) => (
              <Link
                key={area.slug}
                to={`/areas/${area.slug}`}
                className="group bg-dark-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={area.image}
                    alt={`${area.name} - Local SEO services`}
                    width={400}
                    height={300}
                    loading="lazy"
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
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See Your Area?
          </h2>
          <p className="text-gray-400 mb-8">
            We also serve businesses in surrounding areas. Get in touch to see how we can help your business get found on Google.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 btn-glow"
            >
              Get Your Free Audit
            </Link>
            <a
              href="tel:07702264921"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
