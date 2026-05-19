import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

const caseStudyCallouts = [
  {
    slug: 'peachy-cleans',
    business: 'Peachy Cleans',
    outcome: 'Fully booked weeks and hiring new staff after getting visible for "cleaner Midsomer Norton".',
    color: 'from-pink-500 to-rose-500',
  },
  {
    slug: 'new-decorating',
    business: 'New Decorating',
    outcome: 'Top 8 on Google Maps within a week — now getting calls for painter and decorator searches in Bath and BANES.',
    color: 'from-amber-600 to-orange-600',
  },
];

const results = [
  { metric: '340%', label: 'Average traffic increase', subtext: 'Within 6 months' },
  { metric: '#1', label: 'Google rankings achieved', subtext: 'For local search terms' },
  { metric: '£2.4M', label: 'Revenue generated', subtext: 'For Bath and North East Somerset clients in 2025' },
];

const HowWeAreDifferent = () => {
  return (
    <>
      <SEO
        title="How We're Different – Website Designer That Gets You Calls | SEO Kings"
        description="We're not like other website designers. We combine website design with local and hyper-local SEO so your site gets found on Google and gets you calls. Bath & North East Somerset."
        canonical="/how-we-are-different"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: "How We're Different" },
        ]}
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: "How We're Different – SEO Kings",
            description: 'How SEO Kings differs from other website designers: local and hyper-local SEO to get more calls for your business in Bath and North East Somerset.',
            url: 'https://seo-kings.co.uk/how-we-are-different',
          },
        ]}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div>
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
              Why choose SEO Kings
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We Don&apos;t Just Build Websites —
              <span className="gradient-text"> We Get You Calls</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
              Other website designers hand you a pretty site and walk away. We combine website design with
              local and hyper-local SEO so your site gets found on Google and in the map pack — and generates
              real enquiries and calls for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Other designers vs SEO Kings */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary-light text-sm font-medium mb-4">
              The difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Other Designers vs SEO Kings
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark border border-red-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-red-400 mb-4">Many website designers</h3>
              <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <li>• Pretty site, but no SEO or Google Business Profile</li>
                <li>• Invisible for &quot;plumber Bath&quot;, &quot;electrician Keynsham&quot;, &quot;near me&quot;</li>
                <li>• No presence in the map pack — so no calls from Google</li>
                <li>• You end up with a site that almost nobody finds</li>
              </ul>
            </div>
            <div className="bg-dark border border-primary/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary-light mb-4">SEO Kings</h3>
              <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                <li>• Site <strong className="text-white">plus</strong> local and hyper-local SEO and GBP</li>
                <li>• Area-focused content so you show for town and postcode searches</li>
                <li>• Visible in the map pack and for &quot;near me&quot; and &quot;[service] [town]&quot;</li>
                <li>• More visibility, more calls — a site that actually brings in work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO and hyper-local */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent-light text-sm font-medium mb-6">
                Local &amp; hyper-local
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Local SEO and Hyper-Local: What We Actually Do
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  <strong className="text-gray-300">Local SEO</strong> is what gets you found when people search
                  for your service in your area — like &quot;plumber Bath&quot; or &quot;electrician Keynsham&quot;. It focuses on
                  the results that show with a map: the local map pack and Google Maps.
                </p>
                <p>
                  <strong className="text-gray-300">Hyper-local</strong> means we target specific towns and postcodes:
                  Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford and across
                  Bath and North East Somerset. We build real area pages and optimise your Google Business Profile
                  so you show for &quot;near me&quot; and &quot;[service] [town]&quot; — not just a generic &quot;UK&quot; or &quot;Somerset&quot; listing.
                </p>
                <p>
                  We use real area data and schema so each location is properly represented. That&apos;s how you
                  compete in the places where your customers actually search.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/areas"
                  className="inline-flex items-center text-primary-light hover:text-white font-medium transition-colors"
                >
                  View all areas we serve
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="bg-dark-card border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Towns we target</h3>
              <p className="text-gray-400 text-sm mb-4">
                Dedicated area pages and GBP optimisation so you show where it matters.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Bath', 'Keynsham', 'Midsomer Norton', 'Radstock', 'Peasedown St John', 'Paulton', 'Saltford', 'Bitton', 'Trowbridge'].map((town) => (
                  <span
                    key={town}
                    className="px-3 py-1.5 bg-dark border border-white/5 rounded-lg text-gray-300 text-sm"
                  >
                    {town}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we get calls */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
              How we get calls for your business
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              From Google to Your Phone
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We don&apos;t just care about rankings — we care about enquiries and calls.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Map pack and Google Business Profile</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                When people search locally, the map pack drives most of the clicks. We set up and optimise your
                GBP so your business appears there with the right category, phone number, areas and description —
                so searchers become callers.
              </p>
            </div>
            <div className="bg-dark border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center text-white mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Website built for local search</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Fast, mobile-friendly sites with clear area and service content. Click-to-call and contact forms
                where visitors expect them — so anyone who finds you on Google can call or enquire in one tap.
              </p>
            </div>
            <div className="bg-dark border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Local SEO add-on</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Keyword research, on-page optimisation, GBP optimisation and (where relevant) citations — so you
                rank for the searches that matter in your area. More traffic, more calls. We report on rankings
                and can focus on enquiries and leads when you add our Growth or Scale packages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof: case studies + metrics */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary-light text-sm font-medium mb-4">
              Proof
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Real Results for Local Businesses
            </h2>
          </div>

          {/* Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {results.map((item, index) => (
              <div
                key={index}
                className="bg-dark-card border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary-light mb-1">{item.metric}</div>
                <div className="text-white font-medium">{item.label}</div>
                <div className="text-gray-500 text-sm">{item.subtext}</div>
              </div>
            ))}
          </div>

          {/* Case study callouts */}
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudyCallouts.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="block bg-dark border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-colors group"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${c.color} text-white font-bold text-sm mb-4`}>
                  {c.business.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                  {c.business}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{c.outcome}</p>
                <span className="inline-flex items-center mt-3 text-primary-light text-sm font-medium group-hover:underline">
                  Read case study
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/case-studies"
              className="text-primary-light hover:text-white font-medium transition-colors"
            >
              View all case studies →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default HowWeAreDifferent;
