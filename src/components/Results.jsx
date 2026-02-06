import React from 'react';
import Link from 'next/link';

const Results = () => {
  const caseStudies = [
    {
      business: 'Bath Plumbing Co.',
      trade: 'Plumber',
      location: 'Bath',
      result: 'From page 5 → #1 for "plumber Bath"',
      metric: 'Huge increase in calls',
      metricLabel: '',
      timeframe: '',
    },
    {
      business: 'Keynsham Electrics',
      trade: 'Electrician',
      location: 'Keynsham',
      result: 'Not ranking → Top 3 in Keynsham',
      metric: '+52 calls per month',
      metricLabel: 'in 3 months',
      timeframe: '3 months',
    },
    {
      business: 'Norton Roofing',
      trade: 'Roofer',
      location: 'Midsomer Norton',
      result: '£180K in new contracts',
      metric: 'Dominating Midsomer Norton searches',
      metricLabel: '',
      timeframe: '',
    },
  ];

  return (
    <section id="results" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent-light text-sm font-medium mb-4">
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">Proven Results</span>
          </h2>
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
