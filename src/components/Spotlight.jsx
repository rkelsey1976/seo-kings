import React from 'react';
import Link from 'next/link';
import SectionDivider from './SectionDivider';

const images = [
  {
    src: '/spotlight/peachy-map-pack.PNG',
    alt: 'Peachy Cleans ranked number 1 in Google Maps pack for cleaning services Midsomer Norton',
    label: '#1 in map pack',
    description: 'Peachy Cleans ranks #1 in the Google Maps pack for local cleaning searches.',
  },
  {
    src: '/spotlight/peachy-organic.PNG',
    alt: 'Peachy Cleans ranked number 1 in Google organic search results',
    label: '#1 in organic search',
    description: 'We got Peachy Cleans to #1 in organic search for their key terms.',
  },
  {
    src: '/spotlight/peachy-website.PNG',
    alt: 'Fast website design for local Midsomer Norton business - Peachy Cleans',
    label: 'Website built for local search',
    description: 'Professional website built for Midsomer Norton and surrounding areas.',
  },
];

const whatWeBuilt = [
  'A clean one-page website at peachycleans.info',
  'Loads fast on phones',
  'Lists all services clearly: regular home cleaning, one-off deep cleans, Airbnb changeovers, end of tenancy, commercial, builders cleans, elderly care cleaning',
  'Big buttons to call or message for a free quote',
  'Photos of clean homes and happy customers',
  'Everything on one easy screen – no confusion',
];

const howItHelps = [
  'Clear details on where they work (Midsomer Norton, Radstock, Paulton, Peasedown St John, Bath, Frome, Wells, and nearby Somerset areas)',
  'Fresh photos added to Google',
  'Regular updates posted',
  'Reviews answered quickly to build trust',
];

const results = [
  'Top spot in Google search for a key local term',
  'Strong position in Google Maps for Midsomer Norton searches',
  'Beats bigger companies and directories in many cases',
  'More local leads for a small business started in 2023 by Alisha Kelsey',
  '5-star rated, fully insured, DBS checked – trust shown online',
];

const backgroundPattern = (
  <div className="absolute inset-0 opacity-5" aria-hidden="true">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='https://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  </div>
);

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 text-primary-light" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

/**
 * Client Spotlight – Peachy Cleans
 * variant="summary" (default): short hero, 3 proof images, quote, CTAs → for homepage etc.
 * variant="full": full case study (What We Built, How It Helps, Results, etc.) → for /spotlight/peachy-cleans
 */
const Spotlight = ({ variant = 'summary' }) => {
  const isFull = variant === 'full';

  return (
    <section className="py-24 bg-dark-lighter relative" id="spotlight">
      <SectionDivider fill="dark-lighter" />
      {backgroundPattern}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero / Top Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-4">
            Client Spotlight
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Peachy Cleans – <span className="gradient-text">Number 1 on Google</span> &amp; Top of Maps in Midsomer Norton
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {isFull ? (
              <>Peachy Cleans shows up number 1 when people search &ldquo;cleaner Midsomer Norton&rdquo; on Google. They also appear near the top of Google Maps results. We built them a simple, fast one-page website and helped their Google listing stand out. Now more local people see them first and call for cleaning jobs in Midsomer Norton, Radstock, and nearby areas.</>
            ) : (
              <>We built them a simple, fast one-page website and got them to #1 for &ldquo;cleaner Midsomer Norton&rdquo; on Google and near the top of Maps. More local calls and bookings — no ads.</>
            )}
          </p>
        </div>

        {/* What We Built – full only */}
        {isFull && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">What We Built</h3>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {whatWeBuilt.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* How It Helps – full only */}
        {isFull && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">How It Helps Them Show Up High</h3>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-6">
              We made the website and Google listing work well together:
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {howItHelps.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mt-6">
              Now, when someone searches &ldquo;cleaner Midsomer Norton&rdquo;: Peachy Cleans appears number 1 in the main Google results and near the top of Google Maps. People searching on phones see them right away – more calls and bookings from local customers, without paying for ads.
            </p>
          </div>
        )}

        {/* Three proof images – equal-height cards, full image visible (object-contain) */}
        <div className={`grid md:grid-cols-3 gap-8 ${isFull ? 'mb-16' : 'mb-12'}`}>
          {images.map((img, index) => (
            <div key={index} className="group flex flex-col">
              <div className="rounded-2xl border border-white/10 overflow-hidden bg-dark shadow-xl transition-all duration-300 group-hover:border-primary/30 flex flex-col flex-1">
                <div className="h-64 flex items-center justify-center bg-dark p-1">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                  />
                </div>
                <div className="p-4 flex-shrink-0">
                  <div className="text-sm font-semibold text-primary-light mb-1">{img.label}</div>
                  <p className="text-sm text-gray-400">{img.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Results – full only */}
        {isFull && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">The Results</h3>
            <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {results.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-center max-w-xl mx-auto mt-6">
              A simple website plus a well-set-up Google listing = more people find you easily and choose you.
            </p>
          </div>
        )}

        {/* Quote + CTA */}
        <div className="bg-dark border border-white/5 rounded-2xl p-8 md:p-10 text-center max-w-3xl mx-auto mb-12">
          <blockquote className="text-xl text-gray-300 leading-relaxed mb-6">
            &ldquo;SEO Kings built our website and got us found across Midsomer Norton, Radstock and Bath. We&apos;re now getting regular enquiries from our service areas — couldn&apos;t ask for more.&rdquo;
          </blockquote>
          <div className="mb-8">
            <div className="font-semibold text-white">Alisha Kelsey</div>
            <a
              href="https://peachycleans.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:text-white transition-colors text-sm"
            >
              Peachy Cleans
            </a>
            <span className="text-gray-500 text-sm"> · Midsomer Norton</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {isFull ? (
              <>
                <Link
                  href="/case-studies/peachy-cleans"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Read the full case study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="https://peachycleans.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-primary/50 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Visit peachycleans.info
                </a>
              </>
            ) : (
              <>
                <Link
                  href="/spotlight/peachy-cleans"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Read the full story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="https://peachycleans.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-primary/50 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Visit peachycleans.info
                </a>
              </>
            )}
          </div>
        </div>

        {/* Want the same? CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Want the same for your business?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            We help cleaning companies, trades, and local services in Bath &amp; BANES get more calls from Google. Message us for a free check. We look at your website and Google listing, then show easy ways to get higher in search and Maps. No pressure, no long contracts.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 btn-glow"
          >
            Get Your Free Check
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          {isFull && (
            <p className="text-gray-500 text-sm mt-6">
              #LocalCleaning #MidsomerNorton #BathBANES #MoreCustomers
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
