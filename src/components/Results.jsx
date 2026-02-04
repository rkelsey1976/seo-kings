import React from 'react';

const Results = () => {
  const stats = [
    {
      value: '150+',
      label: 'Local Businesses Helped',
      description: 'Trades & SMBs across BANES',
    },
    {
      value: '3x',
      label: 'Average Lead Increase',
      description: 'Within the first 6 months',
    },
    {
      value: '#1',
      label: 'Google Rankings',
      description: 'For competitive local terms',
    },
    {
      value: '£2.4M+',
      label: 'Revenue Generated',
      description: 'For our clients in 2025',
    },
  ];

  const caseStudies = [
    {
      business: 'Bath Plumbing Co.',
      trade: 'Plumber',
      location: 'Bath, BA1',
      result: 'Page 5 → #1 on Google',
      metric: '+340%',
      metricLabel: 'More enquiries',
      timeframe: '4 months',
    },
    {
      business: 'Keynsham Electrics',
      trade: 'Electrician',
      location: 'Keynsham, BS31',
      result: 'Not ranking → Top 3',
      metric: '+52',
      metricLabel: 'Calls per month',
      timeframe: '3 months',
    },
    {
      business: 'Norton Roofing',
      trade: 'Roofer',
      location: 'Midsomer Norton, BA3',
      result: 'Dozens of Google reviews',
      metric: '£180K',
      metricLabel: 'New contracts',
      timeframe: '6 months',
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
            Real Results for
            <span className="gradient-text"> BANES Businesses</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what we've achieved for local tradespeople just like you.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-dark-card border border-white/5 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-white font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Recent Success Stories
          </h3>
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
                  {/* Result */}
                  <div className="mb-6">
                    <div className="text-sm text-gray-300 mb-1">Result</div>
                    <div className="text-white font-medium">{study.result}</div>
                  </div>

                  {/* Metric */}
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-3xl font-bold text-green-400">
                        {study.metric}
                      </div>
                      <div className="text-sm text-gray-300">
                        {study.metricLabel}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-300">Timeframe</div>
                      <div className="text-sm text-white font-medium">
                        {study.timeframe}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center">
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 text-primary-light hover:text-white transition-colors font-medium"
          >
            View all case studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;
