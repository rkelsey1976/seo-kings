'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';

const tradesData = {
  plumbers: {
    name: 'Plumbers',
    headline: 'Local SEO for Plumbers in Bath & North East Somerset',
    intro: 'When someone in Bath or Keynsham searches "plumber near me" or "emergency plumber Bath", they\'re ready to hire. If you\'re not on page one of Google, your competitors are getting those calls. We help plumbers across Bath and North East Somerset rank higher so you get more enquiries and more jobs.',
    whatWeDo: [
      'Keyword research for "plumber Bath", "plumber Keynsham" and every area you serve',
      'Google Business Profile optimisation so you appear in the map pack',
      'Website SEO: service pages, location pages, and content that ranks',
      'Local citations and backlinks from relevant directories',
      'Review growth and professional responses to every review',
      'Monthly reporting so you see rankings, calls and form leads',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped a local business get found on Google — website and local SEO in Midsomer Norton.",
    },
    faqs: [
      { q: 'How much does SEO cost for a plumber?', a: 'Our local SEO packages start from £150/month. We tailor the plan to your area and competition. Every plumber gets a free audit first so you know exactly what we\'d do and what it would cost.' },
      { q: 'How long until I see results?', a: 'Most plumbers see noticeable improvements within 3–6 months. Quick wins like Google Business Profile optimisation can show results in weeks. Competitive terms like "plumber Bath" may take a few months to reach page one.' },
      { q: 'Do you work with one-man bands?', a: 'Yes. We work with sole traders, small teams, and larger plumbing firms across Bath and North East Somerset. The goal is the same: get you found when local customers search for a plumber.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset. We focus only on local SEO in Bath and North East Somerset.' },
    ],
    metaTitle: 'Local SEO for Plumbers in Bath & North East Somerset',
    metaDescription: 'Get more plumbing jobs from Google. We help plumbers in Bath, Keynsham, Midsomer Norton and Bath and North East Somerset rank #1 for local searches. Free audit.',
  },
  electricians: {
    name: 'Electricians',
    headline: 'Local SEO for Electricians in Bath & North East Somerset',
    intro: 'Searches like "electrician Bath" and "electrician Keynsham" are made by people ready to book. If you\'re not on the first page of Google, you\'re missing those jobs. We help electricians across Bath and North East Somerset get found, get more calls, and win more work.',
    whatWeDo: [
      'Target the exact terms your customers search: "electrician [area]", "emergency electrician"',
      'Optimise your Google Business Profile so you show in the map pack',
      'Website SEO: service pages, areas you cover, and content that ranks',
      'Local citations and quality backlinks',
      'Review strategy and professional responses',
      'Monthly reports: rankings, traffic, calls and leads',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped a local business get found on Google — website and local SEO in Midsomer Norton.",
    },
    faqs: [
      { q: 'How much does SEO cost for an electrician?', a: 'Our local SEO packages start from £150/month. We offer a free audit first: we\'ll check your current rankings, your Google Business Profile and your website, then give you a clear plan and quote.' },
      { q: 'How long until I rank on Google?', a: 'Many electricians see improvements within 3–6 months. Google Business Profile optimisation can bring quick wins. Ranking for competitive terms may take a few months of consistent work.' },
      { q: 'Do you do websites as well?', a: 'Yes. We build fast, mobile-friendly websites that are optimised for local search. We can do website + SEO together so you have one team handling everything.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset. We specialise in local SEO for this area only.' },
    ],
    metaTitle: 'Local SEO for Electricians in Bath & North East Somerset',
    metaDescription: 'Get more electrical jobs from Google. We help electricians in Bath, Keynsham, Radstock and Bath and North East Somerset rank #1 for local searches. Free audit.',
  },
  roofers: {
    name: 'Roofers',
    headline: 'Local SEO for Roofers in Bath & North East Somerset',
    intro: 'Homeowners searching "roofer Bath" or "roofing Keynsham" are looking for someone now. We help roofers across Bath and North East Somerset rank on Google so you appear when it matters and get more enquiries.',
    whatWeDo: [
      'Keyword research for "roofer Bath", "roofing [area]" and related searches',
      'Google Business Profile setup and optimisation for the map pack',
      'Website SEO: services, areas, and content that ranks for local roofing searches',
      'Local citations and backlinks',
      'Review growth and professional responses',
      'Monthly reporting: rankings, calls and leads',
    ],
    caseStudy: {
      slug: 'peachy-cleans',
      business: 'Peachy Cleans',
      snippet: "See how we helped a local business get found on Google — website and local SEO in Midsomer Norton.",
    },
    faqs: [
      { q: 'How much does SEO cost for a roofer?', a: 'Our local SEO packages start from £150/month. We tailor everything to your area and competition. You get a free audit first so you know exactly what we\'d do and the cost.' },
      { q: 'How long until I see more enquiries?', a: 'Many roofers see a clear increase in enquiries within 3–6 months. Google Business Profile and basic website SEO can show results sooner. Competitive terms take longer but last longer too.' },
      { q: 'I\'m a sole trader — is SEO worth it?', a: 'Yes. Local SEO helps you compete with bigger firms. When someone searches "roofer Midsomer Norton", they often call the first few results. We get you into those spots.' },
      { q: 'What areas do you cover?', a: 'Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and all of Bath and North East Somerset.' },
    ],
    metaTitle: 'Local SEO for Roofers in Bath & North East Somerset',
    metaDescription: 'Get more roofing jobs from Google. We help roofers in Bath, Midsomer Norton, Keynsham and Bath and North East Somerset rank #1 for local searches. Free audit.',
  },
};

const LocalSEOTrade = ({ params: staticParams }) => {
  const dynamicParams = useParams();
  const tradeSlug = staticParams?.tradeSlug ?? dynamicParams?.tradeSlug;
  const router = useRouter();
  const trade = tradeSlug ? tradesData[tradeSlug] : null;

  useEffect(() => {
    if (!trade) router.replace('/local-seo');
  }, [trade, router]);

  if (!trade) return null;

  return (
    <>
      <SEO
        title={trade.metaTitle}
        description={trade.metaDescription}
        keywords={`SEO for ${trade.name.toLowerCase()}, local SEO ${trade.name.toLowerCase()} Bath, ${trade.name.toLowerCase()} Bath and North East Somerset, Google ranking ${trade.name.toLowerCase()}`}
        canonical={`/local-seo/${tradeSlug}`}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Local SEO', url: '/local-seo' },
          { name: `For ${trade.name}` },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/local-seo" className="hover:text-white transition-colors">Local SEO</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary-light">For {trade.name}</li>
            </ol>
          </nav>
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
            Local SEO for {trade.name}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {trade.headline}
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-3xl leading-relaxed">
            {trade.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center">
              Get Your Free SEO Audit
            </Link>
            <a href="tel:07702264921" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3" aria-label="Call SEO Kings on 07702 264 921">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              07702 264 921
            </a>
          </div>
        </div>
      </section>

      {/* What we do for [trade] */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">What we do for {trade.name}</h2>
          <ul className="space-y-4">
            {trade.whatWeDo.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Areas we serve */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Areas we serve</h2>
          <p className="text-gray-400 mb-6">
            We help {trade.name.toLowerCase()} in Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and across Bath and North East Somerset.
          </p>
          <Link href="/areas" className="inline-flex items-center gap-2 text-primary-light hover:text-white font-medium transition-colors">
            View all areas we cover
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      {/* Case study CTA */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Real results for {trade.name.toLowerCase()}</h2>
          <p className="text-gray-400 mb-6">
            {trade.caseStudy.snippet}
          </p>
          <Link href={`/case-studies/${trade.caseStudy.slug}`} className="inline-flex items-center gap-2 text-primary-light hover:text-white font-medium transition-colors">
            Read the {trade.caseStudy.business} case study
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">SEO for {trade.name} – FAQs</h2>
            <p className="text-gray-400">Common questions about local SEO for {trade.name.toLowerCase()} in Bath & North East Somerset.</p>
          </div>
          <FAQAccordion faqs={trade.faqs} />
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default LocalSEOTrade;
