'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      industry: 'services',
      location: 'Midsomer Norton, BA3',
      logo: 'PC',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=250&fit=crop&auto=format&q=80',
      imageAlt: 'Professional cleaning services in Midsomer Norton - Peachy Cleans website and local SEO case study',
      challenge: 'New cleaning business with no website or online presence in a competitive local market.',
      solution: 'Professional website built from scratch and local SEO to get visible on Google for Midsomer Norton and surrounding areas. Now working with them to target multiple areas and multiple keywords on Google across their full service area.',
      results: [
        { metric: 'New site', label: 'Live at peachycleans.info' },
        { metric: '#1', label: 'On Google for local searches' },
        { metric: 'Fully booked', label: 'Weeks · hiring new staff' },
        { metric: 'Ongoing', label: 'Multiple areas & keywords' },
      ],
      timeframe: 'Recent',
      quote: "SEO Kings built our website and got us visible on Google. We're now having fully booked weeks and have had to hire new staff to keep up. Professional from start to finish.",
      author: 'Peachy Cleans',
      role: 'Cleaning Services',
      services: ['Website Design', 'Local SEO'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      id: 2,
      slug: 'new-decorating',
      business: 'New Decorating',
      industry: 'Painter & Decorator',
      location: 'Bath, Keynsham, Midsomer Norton, Radstock & BANES',
      logo: 'ND',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=250&fit=crop&auto=format&q=80',
      imageAlt: 'Painter and decorator Bath - New Decorating website and Google Business Profile case study',
      challenge: 'No website and no Google listing — invisible when people searched for a painter and decorator in Bath and the surrounding areas.',
      solution: 'New website at new-decorating.co.uk plus Google Business Profile set up and optimised so both work together. Within a week he was in the top 8 on Google Maps and ranking for long-tail keywords.',
      results: [
        { metric: 'New site', label: 'Live at new-decorating.co.uk' },
        { metric: 'Top 8', label: 'On Google Maps in a week' },
        { metric: 'Ranking', label: 'Long-tail keywords' },
      ],
      timeframe: 'Within a week',
      quote: 'We had no website and no Google listing — customers couldn\'t find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.',
      author: 'Jay',
      role: 'New Decorating, Painter & Decorator',
      services: ['Website Design', 'Google Business Profile'],
      color: 'from-amber-600 to-orange-600',
    },
  ];

  return (
    <>
      <SEO
        title="Case Studies - SEO Results for Bath and North East Somerset Businesses"
        description="Real SEO case studies from Bath & North East Somerset. See how we helped tradespeople and local businesses dominate Google and get more customers."
        keywords="SEO case studies, SEO results Bath, local SEO success stories, Bath and North East Somerset business growth, SEO ROI examples"
        canonical="/case-studies"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Case Studies' }
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
              Case Studies
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Real Results for
              <span className="gradient-text"> Real Businesses</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Don't just take our word for it. See how we've helped local businesses 
              across Bath & North East Somerset dominate Google and grow their customer base.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-dark-card border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 group"
              >
                {/* Header with Image */}
                <div className="relative h-48">
                  <img
                    src={study.image}
                    alt={study.imageAlt}
                    width={400}
                    height={192}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${study.color} opacity-70`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
                  <div className="absolute inset-0 p-6 flex items-end">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-white font-bold">
                          {study.logo}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{study.business}</h3>
                          <p className="text-white/80 text-sm">{study.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-white/60 uppercase tracking-wider">Timeframe</div>
                        <div className="text-white font-semibold">{study.timeframe}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Challenge</div>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Solution</div>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/5 rounded-xl">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-green-400">{result.metric}</div>
                        <div className="text-xs text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-2 border-primary pl-4 mb-6">
                    <p className="text-gray-400 text-sm italic">"{study.quote}"</p>
                    <footer className="mt-2 text-sm">
                      <span className="text-white font-medium">{study.author}</span>
                      <span className="text-gray-500"> · {study.role}</span>
                    </footer>
                  </blockquote>

                  {/* Services Used & Link */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary-light hover:text-white transition-colors"
                    >
                      Full story
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {caseStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400">No case studies found for this filter.</p>
              <button
                onClick={() => setActiveFilter('all')}
                className="mt-4 text-primary-light hover:text-white transition-colors"
              >
                View all case studies
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Industries We've Helped
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From tradespeople to restaurants, we've helped businesses across Bath and North East Somerset succeed online.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Plumbers',
              'Electricians',
              'Roofers',
              'Builders',
              'Landscapers',
              'Restaurants',
              'Dentists',
              'Salons',
              'Gyms',
              'Accountants',
              'Solicitors',
              'Retail',
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-dark border border-white/5 rounded-xl p-4 text-center hover:border-primary/30 transition-colors"
              >
                <span className="text-gray-300 text-sm">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Business Could Be Next */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Your Business Could Be Our Next
            <span className="gradient-text"> Success Story</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Every business on this page started where you are now. Ready to join them?
            Get a free SEO audit and see exactly what's possible for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 btn-glow"
            >
              Get Your Free Audit
            </Link>
            <a
              href="tel:07702264921"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              07702 264 921
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default CaseStudies;
