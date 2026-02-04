import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Industries' },
    { id: 'trades', label: 'Tradespeople' },
    { id: 'hospitality', label: 'Hospitality' },
    { id: 'services', label: 'Local Services' },
  ];

  const caseStudies = [
    {
      id: 1,
      slug: 'mitchell-plumbing',
      business: 'Mitchell Plumbing',
      industry: 'trades',
      location: 'Bath, BA1',
      logo: 'MP',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=250&fit=crop&auto=format&q=80',
      imageAlt: 'Professional plumber working in Bath - Mitchell Plumbing SEO case study showing 340% increase in leads',
      challenge: 'Struggling to get found online, relying entirely on word-of-mouth referrals.',
      solution: 'Complete local SEO overhaul including website optimisation, Google Business Profile management, and review strategy.',
      results: [
        { metric: '340%', label: 'Increase in enquiries' },
        { metric: '#1', label: 'Google ranking for "plumber Bath"' },
        { metric: '50+', label: 'New 5-star reviews' },
      ],
      timeframe: '4 months',
      quote: "Before SEO Kings, I was getting maybe 2-3 calls a week. Now I'm turning work away. Best investment I've made in my business.",
      author: 'Dave Mitchell',
      role: 'Owner',
      services: ['Local SEO', 'Google Business Profile'],
      color: 'from-primary to-primary-dark',
    },
    {
      id: 2,
      slug: 'keynsham-electrics',
      business: 'Keynsham Electrics',
      industry: 'trades',
      location: 'Keynsham, BS31',
      logo: 'KE',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=250&fit=crop&auto=format&q=80',
      imageAlt: 'Electrician performing electrical installation in Keynsham - local SEO success story with 52 monthly calls',
      challenge: 'New business with no online presence, competing against established electricians.',
      solution: 'Built a conversion-focused website and implemented aggressive local SEO strategy targeting Keynsham and surrounding areas.',
      results: [
        { metric: '+52', label: 'Calls per month' },
        { metric: 'Top 3', label: 'For 15+ local keywords' },
        { metric: '£85K', label: 'Revenue in first year' },
      ],
      timeframe: '3 months',
      quote: "They explained everything in plain English, no techy nonsense. Within 3 months I was on the first page of Google.",
      author: 'Sarah Thompson',
      role: 'Director',
      services: ['Website Design', 'Local SEO'],
      color: 'from-secondary to-secondary-dark',
    },
    {
      id: 3,
      slug: 'norton-roofing',
      business: 'Norton Roofing',
      industry: 'trades',
      location: 'Midsomer Norton, BA3',
      logo: 'NR',
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=250&fit=crop&auto=format&q=80',
      imageAlt: 'Roofer working on roof in Midsomer Norton - Google Business Profile optimisation case study with dozens of new reviews',
      challenge: 'Zero Google reviews and invisible in local searches despite 20 years in business.',
      solution: 'Review generation campaign, GBP optimisation, and local citation building across BANES.',
      results: [
        { metric: '50+', label: 'Google reviews gained' },
        { metric: '£180K', label: 'In new contracts' },
        { metric: '5★', label: 'Average rating' },
      ],
      timeframe: '6 months',
      quote: "I was skeptical at first, but the results speak for themselves. My Google Business Profile now gets 50+ views a day.",
      author: 'Mark Williams',
      role: 'Owner',
      services: ['Google Business Profile', 'Local SEO'],
      color: 'from-accent to-accent-dark',
    },
    {
      id: 4,
      slug: 'the-bath-kitchen',
      business: 'The Bath Kitchen',
      industry: 'hospitality',
      location: 'Bath, BA1',
      logo: 'TBK',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop&auto=format&q=80',
      imageAlt: 'Restaurant interior in Bath city centre - The Bath Kitchen SEO case study showing 120% increase in online bookings',
      challenge: 'High competition in Bath restaurant scene, struggling to stand out online.',
      solution: 'Website redesign with online booking integration, local SEO, and review management strategy.',
      results: [
        { metric: '+120%', label: 'Online bookings' },
        { metric: '#2', label: 'For "restaurant Bath"' },
        { metric: '200+', label: 'New reviews in 6 months' },
      ],
      timeframe: '5 months',
      quote: "Our online bookings have more than doubled. The new website looks fantastic and actually converts visitors.",
      author: 'James & Emma Cole',
      role: 'Owners',
      services: ['Website Design', 'Local SEO', 'Google Business Profile'],
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      slug: 'radstock-dental',
      business: 'Radstock Dental',
      industry: 'services',
      location: 'Radstock, BA3',
      logo: 'RD',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=250&fit=crop&auto=format&q=80',
      imageAlt: 'Modern dental practice in Radstock - local SEO case study showing 75% increase in private patient enquiries',
      challenge: 'Wanted to attract more private patients rather than relying solely on NHS.',
      solution: 'Targeted SEO campaign for high-value dental services, new service pages, and local visibility boost.',
      results: [
        { metric: '+75%', label: 'Private patient enquiries' },
        { metric: '£250K', label: 'Additional revenue' },
        { metric: '#1', label: 'For "dentist Radstock"' },
      ],
      timeframe: '6 months',
      quote: "We've seen a significant shift towards private patients. The ROI on our SEO investment has been incredible.",
      author: 'Dr. Sarah Patel',
      role: 'Practice Owner',
      services: ['Local SEO', 'Website Design'],
      color: 'from-teal-500 to-cyan-500',
    },
    {
      id: 6,
      slug: 'saltford-garden-centre',
      business: 'Saltford Garden Centre',
      industry: 'services',
      location: 'Saltford, BS31',
      logo: 'SGC',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop&auto=format&q=80',
      imageAlt: 'Beautiful garden centre plants in Saltford - local SEO case study with 200% traffic increase and 35% more footfall',
      challenge: 'Competing with big chain garden centres, needed to highlight local expertise.',
      solution: 'Content strategy showcasing local knowledge, seasonal SEO campaigns, and Google Business Profile optimization.',
      results: [
        { metric: '+200%', label: 'Website traffic' },
        { metric: '35%', label: 'Increase in footfall' },
        { metric: '500+', label: 'Email subscribers' },
      ],
      timeframe: '8 months',
      quote: "People now find us when searching for gardening advice in the area. It's brought in customers we'd never have reached.",
      author: 'Tom & Linda Harris',
      role: 'Owners',
      services: ['Local SEO', 'Google Business Profile'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 7,
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      industry: 'services',
      location: 'Midsomer Norton, BA3',
      logo: 'PC',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=250&fit=crop&auto=format&q=80',
      imageAlt: 'Professional cleaning services in Midsomer Norton - Peachy Cleans website and local SEO case study',
      challenge: 'New cleaning business with no website or online presence in a competitive local market.',
      solution: 'Professional website built from scratch and local SEO to get visible on Google for Midsomer Norton and surrounding areas.',
      results: [
        { metric: 'New site', label: 'Live at peachycleans.info' },
        { metric: 'Visible', label: 'On Google for local searches' },
        { metric: 'Regular', label: 'Enquiries from area' },
      ],
      timeframe: 'Recent',
      quote: "SEO Kings built our website and got us visible on Google. We're now getting regular enquiries from Midsomer Norton and the surrounding area. Professional from start to finish.",
      author: 'Peachy Cleans',
      role: 'Cleaning Services',
      services: ['Website Design', 'Local SEO'],
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === activeFilter);

  const stats = [
    { value: '£2.4M+', label: 'Revenue generated for clients' },
    { value: '340%', label: 'Average increase in leads' },
    { value: '150+', label: 'Local businesses helped' },
    { value: '98%', label: 'Client retention rate' },
  ];

  return (
    <>
      <SEO
        title="Case Studies - SEO Results for BANES Businesses"
        description="Real SEO case studies from Bath & BANES. See how we helped tradespeople and local businesses dominate Google and get more customers."
        keywords="SEO case studies, SEO results Bath, local SEO success stories, BANES business growth, SEO ROI examples"
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

      {/* Stats Bar */}
      <section className="py-12 bg-dark-lighter border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
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
                      to={`/case-studies/${study.slug}`}
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
          {filteredCaseStudies.length === 0 && (
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
              From tradespeople to restaurants, we've helped businesses across BANES succeed online.
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
              to="/contact"
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
