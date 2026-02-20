import React from 'react';
import Link from 'next/link';
import SectionDivider from './SectionDivider';

// Main hero image – Peachy Cleans website hero (featured in large panel)
const mainImage = {
  src: '/spotlight/peachy-hero.png',
  alt: 'Peachy Cleans website hero – professional cleaning services in Midsomer Norton, Radstock, Bath and surrounding areas',
  label: 'Live website',
  description: 'Peachy Cleans website at peachycleans.info – committed to ensuring cleanliness meets excellence.',
};

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
  'Fully booked weeks and hiring new staff to keep up with demand',
  'More local leads for a small business started in 2023 by Alisha Kelsey',
  '5-star rated, fully insured, DBS checked – trust shown online',
];

const ongoingWork = [
  'We’re now working with them to target multiple areas: Midsomer Norton, Radstock, Bath, Frome, Paulton, Peasedown St John, Wells and surrounding Somerset.',
  'Targeting multiple keywords on Google so they show up when people search for cleaning services in each of those areas – not just one town.',
  'Same approach that got them to #1 in Midsomer Norton, expanded across their full service area.',
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
  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

/**
 * Client Spotlight – Peachy Cleans
 * Feature-section layout (Tailwind UI style): headline, offset feature list + screenshot panel, testimonial, CTA.
 * variant="summary" (default): homepage – main screenshot + feature list + quote + CTAs
 * variant="full": full case study with What We Built, How It Helps, Results, then proof images
 */
const Spotlight = ({ variant = 'summary' }) => {
  const isFull = variant === 'full';

  return (
    <section className="py-24 bg-dark-lighter relative" id="spotlight">
      <SectionDivider fill="dark-lighter" />
      {backgroundPattern}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Feature section header – centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            Client Spotlight
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Peachy Cleans – <span className="gradient-text">Number 1 on Google</span> &amp; Top of Maps in Midsomer Norton
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            {isFull ? (
              <>Peachy Cleans shows up number 1 when people search &ldquo;cleaner Midsomer Norton&rdquo; on Google. They also appear near the top of Google Maps results. We built them a simple, fast one-page website and helped their Google listing stand out. They&apos;re now having fully booked weeks and hiring new staff. We&apos;re now working with them to target multiple areas and multiple keywords on Google so they show up across Midsomer Norton, Radstock, Bath, Frome and surrounding areas.</>
            ) : (
              <>We built them a simple, fast one-page website and got them to #1 for &ldquo;cleaner Midsomer Norton&rdquo; on Google and near the top of Maps. They&apos;re now having fully booked weeks and hiring new staff. We&apos;re now working with them to target multiple areas and multiple keywords on Google.</>
            )}
          </p>
        </div>

        {/* Feature section: offset layout – feature list left, large screenshot right (summary) or stacked (full) */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:gap-y-16 xl:gap-x-16 mb-20">
          {/* Left: feature list – 2x2 style */}
          <div className="lg:col-span-5 lg:col-start-1">
            <div className="space-y-10">
              <div>
                <h3 className="text-base font-semibold text-primary mb-4">What we did</h3>
                <ul className="space-y-3">
                  {(isFull ? whatWeBuilt : whatWeBuilt.slice(0, 4)).map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <CheckIcon />
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-primary mb-4">The results</h3>
                <ul className="space-y-3">
                  {(isFull ? results : results.slice(0, 3)).map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <CheckIcon />
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-primary mb-4">What we&apos;re doing now</h3>
                <ul className="space-y-3">
                  {ongoingWork.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <CheckIcon />
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: large bordered screenshot panel – feature-section style */}
          <div className="mt-10 lg:mt-0 lg:col-span-7 lg:col-start-6">
            <div className="relative rounded-2xl border border-white/10 bg-dark shadow-2xl overflow-visible ring-1 ring-white/5">
              <div className="relative aspect-[4/3] sm:aspect-[3/2] flex items-center justify-center bg-dark p-4 sm:p-6 overflow-hidden rounded-t-2xl">
                <img
                  src={mainImage.src}
                  alt={mainImage.alt}
                  width={800}
                  height={533}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain rounded-lg"
                />
                {/* Floating card – #1 in Google (like main hero) */}
                <div className="absolute left-4 top-4 sm:left-6 sm:-left-4 sm:top-1/4 bg-dark-card border border-white/10 rounded-xl p-3 sm:p-4 shadow-xl z-10 animate-float-card-left delay-700" aria-hidden="true">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-300">Google Ranking</div>
                      <div className="text-base sm:text-lg font-bold text-white">#1 Position</div>
                    </div>
                  </div>
                </div>
                {/* Floating card – More Calls (like main hero) */}
                <div className="absolute right-4 bottom-4 sm:right-6 sm:-right-2 sm:bottom-1/4 bg-dark-card border border-white/10 rounded-xl p-3 sm:p-4 shadow-xl z-10 animate-float-card-right delay-900" aria-hidden="true">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-300">More Calls</div>
                      <div className="text-base sm:text-lg font-bold text-white">More Jobs</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-4 sm:px-6 sm:py-5 border-t border-white/5">
                <p className="text-sm font-semibold text-primary-light">{mainImage.label}</p>
                <p className="mt-1 text-sm text-gray-400">{mainImage.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Helps – full variant only */}
        {isFull && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">How It Helps Them Show Up High</h3>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
              We made the website and Google listing work well together:
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {howItHelps.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mt-8">
              Now, when someone searches &ldquo;cleaner Midsomer Norton&rdquo;: Peachy Cleans appears number 1 in the main Google results and near the top of Google Maps. People searching on phones see them right away – more calls and bookings from local customers, without paying for ads. They&apos;re now having fully booked weeks and hiring new staff. We&apos;re now working with them to target multiple areas (Midsomer Norton, Radstock, Bath, Frome, Paulton, Peasedown St John, Wells and surrounding Somerset) and multiple keywords on Google so they show up across their full service area.
            </p>
          </div>
        )}

        {/* With testimonial – contained panel, feature-section style */}
        <div className="mx-auto max-w-4xl mb-20">
          <div className="rounded-2xl border border-white/10 bg-dark-card/50 px-6 py-10 sm:px-10 sm:py-12 text-center">
            <blockquote className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-8">
              &ldquo;SEO Kings built our website and got us found across Midsomer Norton, Radstock and Bath. We&apos;re now having fully booked weeks and have had to hire new staff to keep up. Couldn&apos;t ask for more.&rdquo;
            </blockquote>
            <div className="mb-8">
              <p className="font-semibold text-white">Alisha Kelsey</p>
              <a
                href="https://peachycleans.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-white transition-colors text-sm"
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
        </div>

        {/* CTA – simple, centered */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Want the same for your business?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            We help cleaning companies, trades, and local services in Bath &amp; North East Somerset get more calls from Google. Message us for a free check. We look at your website and Google listing, then show easy ways to get higher in search and Maps. No pressure, no long contracts.
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
              #LocalCleaning #MidsomerNorton #BathNorthEastSomerset #MoreCustomers
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
