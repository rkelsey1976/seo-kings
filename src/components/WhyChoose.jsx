import React from 'react';

const WhyChoose = () => {
  const bullets = [
    'Specialise in trades: plumbers, electricians, builders, roofers, landscapers',
    'Focus on Bath & North East Somerset (BANES)',
    'No long contracts or complicated jargon',
    'Clear monthly reports showing your progress',
    'Fast, mobile-friendly websites that convert visitors to customers',
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose
            <span className="gradient-text"> SEO Kings</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Customers in Bath, Keynsham, Midsomer Norton, Radstock and across BANES search Google for local trades every day. If you&apos;re not on page 1 or in the map pack, you miss calls and jobs.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            We fix that with straightforward local SEO that works for real businesses like yours.
          </p>
        </div>

        <ul className="space-y-4 max-w-2xl mx-auto">
          {bullets.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-300">
              <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChoose;
