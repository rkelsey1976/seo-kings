import React from 'react';
import SectionDivider from './SectionDivider';

const WhyChoose = () => {
  const bullets = [
    'Website designer for trades: plumbers, electricians, builders, roofers, landscapers',
    'Website design from £399 — one-page or full site, built to get you found on Google',
    'Focus on Bath & North East Somerset',
    'No long contracts or complicated jargon',
    'Google Business Profile set up and optimised so you show up in the map pack',
    'Fast, mobile-friendly websites that convert visitors to customers',
  ];

  return (
    <section className="py-24 relative">
      <SectionDivider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose
            <span className="gradient-text"> SEO Kings</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Customers in Bath, Keynsham, Midsomer Norton, Radstock and across Bath and North East Somerset search Google for local trades every day. If you&apos;re not on page 1 or in the map pack, you miss calls and jobs.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            We fix that with <strong className="text-gray-300">website design</strong> and getting your <strong className="text-gray-300">Google listing</strong> right — so you get found when it matters.
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
