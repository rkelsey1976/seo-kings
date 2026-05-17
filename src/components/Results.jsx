import React from 'react';
import Link from 'next/link';
import SectionDivider from './SectionDivider';

const Results = () => {
  const caseStudies = [
    {
      business: 'Peachy Cleans',
      trade: 'Cleaning Services',
      location: 'Midsomer Norton',
      result: 'No website → #1 on Google & top of Maps',
      metric: 'Fully booked weeks, hired new staff',
      metricLabel: '',
      timeframe: 'Ongoing',
      slug: 'peachy-cleans',
    },
    {
      business: 'New Decorating',
      trade: 'Painter & Decorator',
      location: 'Bath & BANES',
      result: 'No website, no GBP → #1 organic search',
      metric: '#1 for "exterior painter Bath" — ranking across BANES',
      metricLabel: '',
      timeframe: '1 week',
      slug: 'new-decorating',
    },
    {
      business: 'Aurelian Massage',
      trade: 'Massage Therapy',
      location: 'Bath City Centre',
      result: 'New business → live in under a week',
      metric: 'Already getting calls from Google in Bath',
      metricLabel: '',
      timeframe: 'Under 1 week',
      slug: 'aurelian-massage',
    },
  ];

  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <SectionDivider />
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Real Clients, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Three businesses that came to us with no online presence — and left ranking on Google.
          </p>
        </div>

        {/* Case Studies */}
        <div className="mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-dark-card border border-white/5 rounded-2xl overflow-hidden group hover:border-white/10 transition-all duration-300"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 px-6 py-4 border-b border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
                      {study.trade}
                    </span>
                    <span className="text-xs text-gray-300">
                      {study.location}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mt-1">
                    {study.business}
                  </h4>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-white font-medium mb-2">{study.result}</div>
                  {(study.metric || study.metricLabel) && (
                    <div className="text-green-400 font-semibold">
                      {study.metric} {study.metricLabel}
                    </div>
                  )}
                  {study.timeframe && (
                    <div className="text-sm text-gray-400 mt-1">{study.timeframe}</div>
                  )}
                  {study.slug && (
                    <Link href={`/case-studies/${study.slug}`} className="inline-flex items-center gap-1 mt-4 text-sm text-primary-light hover:text-white transition-colors">
                      Read case study
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-primary-light hover:text-white transition-colors font-medium"
          >
            View All Case Studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Results;
