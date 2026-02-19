'use client';
import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

// Case study data – real client only (no made-up figures)
const caseStudiesData = {
  'peachy-cleans': {
    id: 1,
    slug: 'peachy-cleans',
    business: 'Peachy Cleans',
    industry: 'Cleaning Services',
    location: 'Midsomer Norton, BA3',
    logo: 'PC',
    tagline: 'Professional website and local visibility in Midsomer Norton',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952',
    heroImageAlt: 'Professional cleaning services - Peachy Cleans Midsomer Norton website and SEO case study',
    color: 'from-pink-500 to-rose-500',
    overview: 'Peachy Cleans is a professional cleaning services business serving Midsomer Norton and the surrounding area. They came to SEO Kings with no website and no real presence on Google. We built them a clear, professional site and got them visible for local cleaning searches. They are now having fully booked weeks and have hired new staff to keep up with demand. We are now working with them to target multiple areas (Midsomer Norton, Radstock, Bath, Frome, Paulton, Peasedown St John, Wells and surrounding Somerset) and multiple keywords on Google so they show up across their full service area.',
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
      'Ongoing: targeting multiple areas and multiple keywords on Google (Midsomer Norton, Radstock, Bath, Frome, Paulton, Peasedown St John, Wells and surrounding Somerset) so they show up across their full service area.',
    ],
    results: [
      { metric: 'New site', label: 'Live website', description: 'Professional presence at peachycleans.info' },
      { metric: '#1', label: 'On Google', description: 'For "cleaner Midsomer Norton" and local searches' },
      { metric: 'Fully booked', label: 'Weeks', description: 'Consistent demand from local customers' },
      { metric: 'Hiring', label: 'New staff', description: 'Growing the team to keep up with enquiries' },
      { metric: 'Ongoing', label: 'Multiple areas & keywords', description: 'Targeting Radstock, Bath, Frome, Paulton, Wells and more on Google' },
    ],
    timeline: [
      { month: 'Phase 1', title: 'Discovery', description: 'Brief, goals, and structure agreed' },
      { month: 'Phase 2', title: 'Design & Build', description: 'Website designed and built, content in place' },
      { month: 'Phase 3', title: 'Launch & SEO', description: 'Site live, local SEO and GBP work started' },
      { month: 'Ongoing', title: 'Results & expansion', description: 'Fully booked weeks, hiring new staff. Now targeting multiple areas and multiple keywords on Google across their full service area.' },
    ],
    testimonial: {
      quote: "SEO Kings built our website and got us visible on Google. We're now having fully booked weeks and have had to hire new staff to keep up. Professional from start to finish.",
      author: 'Peachy Cleans',
      role: 'Professional Cleaning Services, Midsomer Norton',
    },
    services: ['Website Design', 'Local SEO'],
    relatedCases: [],
  },
};

const CaseStudyDetail = ({ params: staticParams }) => {
  const dynamicParams = useParams();
  const slug = staticParams?.slug ?? dynamicParams?.slug;
  const caseStudy = caseStudiesData[slug];

  const router = useRouter();
  useEffect(() => {
    if (!caseStudy) router.replace('/case-studies');
  }, [caseStudy, router]);
  if (!caseStudy) return null;

  const relatedCases = caseStudy.relatedCases
    .map(relatedSlug => caseStudiesData[relatedSlug])
    .filter(Boolean);

  return (
    <>
      <SEO
        title={`${caseStudy.business} Case Study | SEO Kings`}
        description={`How we helped ${caseStudy.business} in ${caseStudy.location} achieve ${caseStudy.results[0].metric} ${caseStudy.results[0].label.toLowerCase()}. Local SEO results.`}
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
          headline: `${caseStudy.business} Case Study | SEO Kings`,
          description: `How we helped ${caseStudy.business} in ${caseStudy.location} achieve strong local SEO results.`,
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
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-80`} />
        <div className="absolute inset-0 bg-dark/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            href="/case-studies" 
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

      {/* Full spotlight CTA when no related case studies */}
      {relatedCases.length === 0 && (
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">See the full story</h2>
            <p className="text-gray-400 mb-6">
              Our Client Spotlight page has the full breakdown: what we built, how it helps them show up on Google, and proof from search and Maps.
            </p>
            <Link
              href="/spotlight/peachy-cleans"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              View full Client Spotlight
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
};

export default CaseStudyDetail;
