import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

// Case study data
const caseStudiesData = {
  'mitchell-plumbing': {
    id: 1,
    slug: 'mitchell-plumbing',
    business: 'Mitchell Plumbing',
    industry: 'Plumbing',
    location: 'Bath, BA1',
    logo: 'MP',
    tagline: 'From 2 calls a week to turning work away',
    heroImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7',
    heroImageAlt: 'Professional plumber working on pipes in Bath - Mitchell Plumbing SEO success story',
    color: 'from-primary to-primary-dark',
    overview: 'Mitchell Plumbing is a family-run plumbing business that had been operating in Bath for over 15 years. Despite their excellent reputation among existing customers, they struggled to attract new business online and relied almost entirely on word-of-mouth referrals.',
    challenge: [
      'No visibility on Google for local plumbing searches',
      'Website was outdated and not mobile-friendly',
      'Zero Google reviews despite years in business',
      'Competitors dominating local search results',
      'Inconsistent lead flow, feast or famine',
    ],
    solution: [
      'Complete website redesign with mobile-first approach',
      'Comprehensive local SEO strategy targeting Bath and surrounding areas',
      'Google Business Profile optimisation and ongoing management',
      'Review generation campaign to build social proof',
      'Local citation building across 50+ directories',
    ],
    results: [
      { metric: '340%', label: 'Increase in enquiries', description: 'Monthly leads went from 8 to 35+' },
      { metric: '#1', label: 'Google ranking', description: 'For "plumber Bath" and 12 other key terms' },
      { metric: '50+', label: 'New reviews', description: '5-star reviews in first 6 months' },
      { metric: '£180K', label: 'Additional revenue', description: 'Directly attributed to SEO in year 1' },
    ],
    timeline: [
      { month: 'Month 1', title: 'Foundation', description: 'Website redesign, GBP optimisation, initial keyword research' },
      { month: 'Month 2', title: 'Content & Citations', description: 'Service pages created, local citations built, review campaign launched' },
      { month: 'Month 3', title: 'First Results', description: 'Ranking improvements begin, first page visibility for 5 keywords' },
      { month: 'Month 4', title: 'Breakthrough', description: '#1 ranking for "plumber Bath", enquiries triple' },
      { month: 'Month 6', title: 'Dominance', description: 'Top 3 for 15+ keywords, consistent 35+ monthly leads' },
    ],
    testimonial: {
      quote: "Before SEO Kings, I was getting maybe 2-3 calls a week. Now I'm turning work away. Best investment I've made in my business. They explained everything in plain English and delivered exactly what they promised.",
      author: 'Dave Mitchell',
      role: 'Owner, Mitchell Plumbing',
    },
    services: ['Website Design', 'Local SEO', 'Google Business Profile'],
    relatedCases: ['keynsham-electrics', 'norton-roofing'],
  },
  'keynsham-electrics': {
    id: 2,
    slug: 'keynsham-electrics',
    business: 'Keynsham Electrics',
    industry: 'Electrical',
    location: 'Keynsham, BS31',
    logo: 'KE',
    tagline: 'New business to £85K revenue in year one',
    heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e',
    heroImageAlt: 'Electrician performing electrical work in Keynsham - Keynsham Electrics SEO case study',
    color: 'from-secondary to-secondary-dark',
    overview: 'Keynsham Electrics was a brand new electrical business started by Sarah Thompson after 10 years working for larger firms. With no existing online presence and competing against established electricians, she needed to build visibility fast.',
    challenge: [
      'Brand new business with zero online presence',
      'Competing against electricians with years of reviews',
      'Limited marketing budget as a startup',
      'No website or Google Business Profile',
      'Needed leads quickly to sustain the business',
    ],
    solution: [
      'Built a professional, conversion-focused website from scratch',
      'Aggressive local SEO targeting Keynsham and surrounding areas',
      'Google Business Profile setup and optimisation',
      'Targeted service pages for high-value electrical work',
      'Local link building through community involvement',
    ],
    results: [
      { metric: '+52', label: 'Calls per month', description: 'From zero to consistent lead flow' },
      { metric: 'Top 3', label: 'For 15+ keywords', description: 'Dominating Keynsham searches' },
      { metric: '£85K', label: 'Revenue year 1', description: 'Exceeded first-year targets' },
      { metric: '5★', label: 'Google rating', description: 'Built from scratch to excellent' },
    ],
    timeline: [
      { month: 'Month 1', title: 'Launch', description: 'Website built and launched, GBP created and optimised' },
      { month: 'Month 2', title: 'Visibility', description: 'First rankings appear, initial enquiries start coming in' },
      { month: 'Month 3', title: 'Growth', description: 'Top 3 for main keywords, 30+ calls per month' },
      { month: 'Month 6', title: 'Established', description: '50+ monthly calls, hired first employee' },
    ],
    testimonial: {
      quote: "They explained everything in plain English, no techy nonsense. Within 3 months I was on the first page of Google. I've now hired my first employee and we're busier than ever.",
      author: 'Sarah Thompson',
      role: 'Director, Keynsham Electrics',
    },
    services: ['Website Design', 'Local SEO'],
    relatedCases: ['mitchell-plumbing', 'norton-roofing'],
  },
  'norton-roofing': {
    id: 3,
    slug: 'norton-roofing',
    business: 'Norton Roofing',
    industry: 'Roofing',
    location: 'Midsomer Norton, BA3',
    logo: 'NR',
    tagline: 'Zero reviews to dozens of five-star ratings',
    heroImage: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8',
    heroImageAlt: 'Roofer working on roof tiles in Midsomer Norton - Norton Roofing Google reviews case study',
    color: 'from-accent to-accent-dark',
    overview: 'Norton Roofing had been serving the Midsomer Norton area for over 20 years but had never focused on their online presence. Despite decades of happy customers, they had zero Google reviews and were invisible in local searches.',
    challenge: [
      'Zero Google reviews despite 20 years in business',
      'Invisible in local search results',
      'Younger competitors with better online presence',
      'No system for collecting customer feedback',
      'Losing contracts to companies with better reviews',
    ],
    solution: [
      'Implemented review generation campaign with follow-up system',
      'Complete Google Business Profile overhaul',
      'Local citation building across roofing directories',
      'On-page SEO improvements to existing website',
      'Reputation management and review response strategy',
    ],
    results: [
      { metric: '50+', label: 'Google reviews', description: 'Built credibility from scratch' },
      { metric: '£180K', label: 'New contracts', description: 'Won through improved visibility' },
      { metric: '5★', label: 'Average rating', description: 'Exceptional customer feedback' },
      { metric: '+250%', label: 'GBP views', description: 'Monthly profile visibility' },
    ],
    timeline: [
      { month: 'Month 1', title: 'Audit & Setup', description: 'GBP optimisation, review campaign strategy developed' },
      { month: 'Month 2', title: 'Review Push', description: 'First 15 reviews collected, GBP posts started' },
      { month: 'Month 3', title: 'Momentum', description: '30 reviews, ranking improvements begin' },
      { month: 'Month 6', title: 'Authority', description: '50+ reviews, top 3 for roofing keywords' },
    ],
    testimonial: {
      quote: "I was skeptical at first, but the results speak for themselves. My Google Business Profile now gets 50+ views a day. Customers tell me they chose us because of our reviews.",
      author: 'Mark Williams',
      role: 'Owner, Norton Roofing',
    },
    services: ['Google Business Profile', 'Local SEO'],
    relatedCases: ['mitchell-plumbing', 'keynsham-electrics'],
  },
  'the-bath-kitchen': {
    id: 4,
    slug: 'the-bath-kitchen',
    business: 'The Bath Kitchen',
    industry: 'Restaurant',
    location: 'Bath, BA1',
    logo: 'TBK',
    tagline: 'Online bookings up 120% in 5 months',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    heroImageAlt: 'Restaurant interior in Bath - The Bath Kitchen online bookings SEO case study',
    color: 'from-orange-500 to-red-500',
    overview: 'The Bath Kitchen is an independent restaurant in the heart of Bath, competing against chain restaurants and other independents in a crowded market. They needed to stand out online and convert more website visitors into bookings.',
    challenge: [
      'High competition in Bath restaurant scene',
      'Website not converting visitors to bookings',
      'Poor visibility for restaurant-related searches',
      'Reviews scattered across multiple platforms',
      'No cohesive online marketing strategy',
    ],
    solution: [
      'Website redesign with integrated booking system',
      'Local SEO targeting food and restaurant keywords',
      'Google Business Profile optimisation with regular posts',
      'Review management across Google, TripAdvisor, and Facebook',
      'Content strategy highlighting unique offerings',
    ],
    results: [
      { metric: '+120%', label: 'Online bookings', description: 'More than doubled in 5 months' },
      { metric: '#2', label: 'Google ranking', description: 'For "restaurant Bath"' },
      { metric: '200+', label: 'New reviews', description: 'Collected across platforms' },
      { metric: '35%', label: 'Revenue increase', description: 'Year over year growth' },
    ],
    timeline: [
      { month: 'Month 1', title: 'Foundation', description: 'Website redesign with booking integration' },
      { month: 'Month 2', title: 'SEO & Reviews', description: 'Local SEO implementation, review campaign' },
      { month: 'Month 3', title: 'Visibility', description: 'Rankings improve, bookings increase 50%' },
      { month: 'Month 5', title: 'Success', description: 'Bookings doubled, consistent growth' },
    ],
    testimonial: {
      quote: "Our online bookings have more than doubled. The new website looks fantastic and actually converts visitors. We're now competing with the big chains and winning.",
      author: 'James & Emma Cole',
      role: 'Owners, The Bath Kitchen',
    },
    services: ['Website Design', 'Local SEO', 'Google Business Profile'],
    relatedCases: ['radstock-dental', 'saltford-garden-centre'],
  },
  'radstock-dental': {
    id: 5,
    slug: 'radstock-dental',
    business: 'Radstock Dental',
    industry: 'Dental',
    location: 'Radstock, BA3',
    logo: 'RD',
    tagline: '75% increase in private patient enquiries',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09',
    heroImageAlt: 'Modern dental practice treatment room in Radstock - private patient SEO case study',
    color: 'from-teal-500 to-cyan-500',
    overview: 'Radstock Dental wanted to shift their patient mix towards more private treatments. With NHS work providing steady but low-margin income, they needed to attract patients seeking cosmetic and premium dental services.',
    challenge: [
      'Over-reliance on NHS patients',
      'Private treatment pages not ranking',
      'Competitors advertising heavily on Google Ads',
      'Website didn\'t communicate premium positioning',
      'No clear differentiation from other practices',
    ],
    solution: [
      'Created dedicated service pages for high-value treatments',
      'Local SEO targeting private dental keywords',
      'Google Business Profile optimised for private services',
      'Content marketing establishing expertise',
      'Review strategy focusing on private treatment patients',
    ],
    results: [
      { metric: '+75%', label: 'Private enquiries', description: 'Significant shift in patient mix' },
      { metric: '£250K', label: 'Additional revenue', description: 'From private treatments' },
      { metric: '#1', label: 'Google ranking', description: 'For "dentist Radstock"' },
      { metric: '5★', label: 'Google rating', description: 'From client reviews' },
    ],
    timeline: [
      { month: 'Month 1', title: 'Strategy', description: 'Keyword research, service page planning' },
      { month: 'Month 2', title: 'Implementation', description: 'New pages live, GBP optimised' },
      { month: 'Month 4', title: 'Results', description: 'Private enquiries up 40%' },
      { month: 'Month 6', title: 'Growth', description: '75% increase achieved, ROI proven' },
    ],
    testimonial: {
      quote: "We've seen a significant shift towards private patients. The ROI on our SEO investment has been incredible. It's paying for itself many times over.",
      author: 'Dr. Sarah Patel',
      role: 'Practice Owner, Radstock Dental',
    },
    services: ['Local SEO', 'Website Design'],
    relatedCases: ['the-bath-kitchen', 'saltford-garden-centre'],
  },
  'saltford-garden-centre': {
    id: 6,
    slug: 'saltford-garden-centre',
    business: 'Saltford Garden Centre',
    industry: 'Retail',
    location: 'Saltford, BS31',
    logo: 'SGC',
    tagline: '200% traffic increase, 35% more footfall',
    heroImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b',
    heroImageAlt: 'Beautiful garden centre plants and flowers in Saltford - website traffic SEO case study',
    color: 'from-green-500 to-emerald-500',
    overview: 'Saltford Garden Centre faced stiff competition from large chain garden centres. They needed to leverage their local expertise and personal service to attract customers who valued independent businesses.',
    challenge: [
      'Competing with big chain garden centres',
      'Limited online visibility for local searches',
      'Website not showcasing local expertise',
      'Seasonal business with quiet periods',
      'No email list for marketing',
    ],
    solution: [
      'Content strategy highlighting local gardening knowledge',
      'Seasonal SEO campaigns for peak periods',
      'Google Business Profile with regular seasonal posts',
      'Email capture and newsletter implementation',
      'Local event promotion through online channels',
    ],
    results: [
      { metric: '+200%', label: 'Website traffic', description: 'Organic visitors tripled' },
      { metric: '35%', label: 'Footfall increase', description: 'More in-store visitors' },
      { metric: '500+', label: 'Email subscribers', description: 'Built valuable marketing list' },
      { metric: '#1', label: 'Local rankings', description: 'For garden centre keywords' },
    ],
    timeline: [
      { month: 'Month 1-2', title: 'Foundation', description: 'Website updates, content strategy developed' },
      { month: 'Month 3-4', title: 'Content Push', description: 'Blog posts, seasonal guides published' },
      { month: 'Month 5-6', title: 'Growth', description: 'Traffic doubles, footfall increases' },
      { month: 'Month 8', title: 'Results', description: 'Traffic triples, email list thriving' },
    ],
    testimonial: {
      quote: "People now find us when searching for gardening advice in the area. It's brought in customers we'd never have reached. The content strategy really works.",
      author: 'Tom & Linda Harris',
      role: 'Owners, Saltford Garden Centre',
    },
    services: ['Local SEO', 'Google Business Profile'],
    relatedCases: ['the-bath-kitchen', 'radstock-dental'],
  },
  'peachy-cleans': {
    id: 7,
    slug: 'peachy-cleans',
    business: 'Peachy Cleans',
    industry: 'Cleaning Services',
    location: 'Midsomer Norton, BA3',
    logo: 'PC',
    tagline: 'Professional website and local visibility in Midsomer Norton',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952',
    heroImageAlt: 'Professional cleaning services - Peachy Cleans Midsomer Norton website and SEO case study',
    color: 'from-pink-500 to-rose-500',
    overview: 'Peachy Cleans is a professional cleaning services business serving Midsomer Norton and the surrounding area. They came to SEO Kings with no website and no real presence on Google. We built them a clear, professional site and got them visible for local cleaning searches.',
    challenge: [
      'No website — enquiries only by word of mouth',
      'Invisible on Google for cleaning searches in the area',
      'Competing with established cleaning companies online',
      'No way for potential customers to find or contact them',
      'New business needing to build trust quickly',
    ],
    solution: [
      'Professional website built from scratch at peachycleans.info',
      'Mobile-friendly design with clear services and contact options',
      'Local SEO targeting Midsomer Norton and surrounding areas',
      'Google Business Profile setup and optimisation',
      'Clear structure and content for local cleaning keywords',
    ],
    results: [
      { metric: 'New site', label: 'Live website', description: 'Professional presence at peachycleans.info' },
      { metric: 'Visible', label: 'On Google', description: 'Showing for local cleaning searches' },
      { metric: 'Regular', label: 'Enquiries', description: 'From Midsomer Norton and surrounding area' },
      { metric: '5★', label: 'Client feedback', description: 'Professional from start to finish' },
    ],
    timeline: [
      { month: 'Phase 1', title: 'Discovery', description: 'Brief, goals, and structure agreed' },
      { month: 'Phase 2', title: 'Design & Build', description: 'Website designed and built, content in place' },
      { month: 'Phase 3', title: 'Launch & SEO', description: 'Site live, local SEO and GBP work started' },
      { month: 'Ongoing', title: 'Results', description: 'Regular enquiries from the local area' },
    ],
    testimonial: {
      quote: "SEO Kings built our website and got us visible on Google. We're now getting regular enquiries from Midsomer Norton and the surrounding area. Professional from start to finish.",
      author: 'Peachy Cleans',
      role: 'Professional Cleaning Services, Midsomer Norton',
    },
    services: ['Website Design', 'Local SEO'],
    relatedCases: ['norton-roofing', 'saltford-garden-centre'],
  },
};

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const caseStudy = caseStudiesData[slug];

  // Redirect to case studies page if not found
  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  const relatedCases = caseStudy.relatedCases
    .map(relatedSlug => caseStudiesData[relatedSlug])
    .filter(Boolean);

  return (
    <>
      <SEO
        title={`${caseStudy.business} Case Study - ${caseStudy.tagline}`}
        description={`See how we helped ${caseStudy.business} in ${caseStudy.location} achieve ${caseStudy.results[0].metric} ${caseStudy.results[0].label.toLowerCase()}. Real SEO results for local businesses.`}
        keywords={`${caseStudy.industry} SEO, ${caseStudy.location} SEO, local SEO case study, ${caseStudy.business}`}
        canonical={`/case-studies/${caseStudy.slug}`}
        ogType="article"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Case Studies', url: '/case-studies' },
          { name: caseStudy.business }
        ]}
        article={{
          type: 'Article',
          headline: `${caseStudy.business} Case Study - ${caseStudy.tagline}`,
          description: `See how we helped ${caseStudy.business} in ${caseStudy.location} achieve remarkable SEO results.`,
          image: caseStudy.heroImage,
          datePublished: '2025-01-15',
          dateModified: '2026-01-28'
        }}
      />

      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 overflow-hidden`}>
        {/* Background Image */}
        {caseStudy.heroImage && (
          <img
            src={`${caseStudy.heroImage}?w=1920&h=600&fit=crop&auto=format&q=75`}
            srcSet={`${caseStudy.heroImage}?w=800&h=400&fit=crop&auto=format&q=75 800w, ${caseStudy.heroImage}?w=1200&h=500&fit=crop&auto=format&q=75 1200w, ${caseStudy.heroImage}?w=1920&h=600&fit=crop&auto=format&q=75 1920w`}
            sizes="100vw"
            alt={caseStudy.heroImageAlt}
            width={1920}
            height={600}
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-80`} />
        <div className="absolute inset-0 bg-dark/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
              {caseStudy.logo}
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {caseStudy.business}
              </h1>
              <p className="text-white/80 text-lg">
                {caseStudy.industry} · {caseStudy.location}
              </p>
            </div>
          </div>

          <p className="text-2xl sm:text-3xl font-medium text-white/90 max-w-3xl">
            {caseStudy.tagline}
          </p>
        </div>
      </section>

      {/* Results Bar */}
      <section className="py-8 bg-dark-lighter border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-1">{result.metric}</div>
                <div className="text-white font-medium">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
          <p className="text-lg text-gray-400 leading-relaxed">{caseStudy.overview}</p>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Challenge */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">The Challenge</h2>
              </div>
              <ul className="space-y-3">
                {caseStudy.challenge.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Our Solution</h2>
              </div>
              <ul className="space-y-3">
                {caseStudy.solution.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Results */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">The Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="bg-dark-card border border-white/5 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">{result.metric}</div>
                <div className="text-white font-medium mb-2">{result.label}</div>
                <div className="text-sm text-gray-500">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Project Timeline</h2>
          <div className="space-y-6">
            {caseStudy.timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${caseStudy.color}`} />
                  {index < caseStudy.timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-white/10 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <div className="text-sm text-primary-light font-medium mb-1">{item.month}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 md:p-12 relative">
            <div className="absolute -top-4 left-8">
              <div className={`w-8 h-8 bg-gradient-to-br ${caseStudy.color} rounded-lg flex items-center justify-center`}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 pt-4">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${caseStudy.color} flex items-center justify-center text-white font-bold`}>
                {caseStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold text-white">{caseStudy.testimonial.author}</div>
                <div className="text-gray-500">{caseStudy.testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Used */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Services Used</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {caseStudy.services.map((service, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-dark border border-white/10 rounded-full text-white font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCases.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Related Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedCases.map((related) => (
                <Link
                  key={related.slug}
                  to={`/case-studies/${related.slug}`}
                  className="bg-dark-card border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-r ${related.color} p-6`}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-white font-bold">
                        {related.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                          {related.business}
                        </h3>
                        <p className="text-white/70">{related.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-400 mb-4">{related.tagline}</p>
                    <div className="flex items-center gap-2 text-primary-light font-medium">
                      Read case study
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
};

export default CaseStudyDetail;
