'use client';
import Link from 'next/link';
import SEO from '../components/SEO';
import SectionTag from '../components/SectionTag';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

const included = [
  'A fast, mobile-first one-page website — the same £250 site we sell outright',
  'Your Google Business Profile set up and optimised (our £100 service)',
  'Hosting, SSL and updates included',
  'One Google post a month to keep your profile active',
  'A monthly one-page report: where you rank, what moved',
  'Live within a week of your photos and details arriving',
];

const faqs = [
  {
    q: 'Who owns the website and domain?',
    a: 'Your domain is registered in your name from day one — always, no exceptions. The website itself is ours while you subscribe, and you can buy it outright for £250 at any time, after which you just pay standard hosting at £50/year. No hostage-taking: our own advice page tells people to avoid designers who lock you in, and we hold ourselves to it.',
  },
  {
    q: 'What happens if I cancel?',
    a: "After the six-month minimum you can cancel monthly. You keep your domain and your Google Business Profile (it's yours — we just optimised it). The website comes down unless you buy it out for £250. Most people who cancel choose the buyout — the site is usually paying for itself by then.",
  },
  {
    q: 'Why not just buy a site for £250?',
    a: "You can — and if you have the cash and want to own everything immediately, that's the better deal and we'll say so. £99/month is for trades who'd rather not pay upfront, and it includes the Google Business Profile work, hosting, monthly Google posts and rank reports that would otherwise be add-ons. Different route, same site.",
  },
  {
    q: 'What does "one page" cover?',
    a: 'Your services, your area, photos of your work, reviews, a contact form and click-to-call — everything a local trade needs to get found and get calls, on one fast page. Need more pages later? Each is £50, or the full local SEO service from £150/month takes over when you want to push harder.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No. First month\'s £99, then £99 a month. Six-month minimum so the Google work has time to show, then monthly rolling.',
  },
  {
    q: 'Will I actually get more calls?',
    a: "No honest agency guarantees rankings. What we can say: most local trades have no website and an incomplete Google profile, so a fast site plus an optimised, active profile puts you ahead of most of your competition — and your monthly report shows exactly where you stand, so you can judge it for yourself.",
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/site-and-google',
      url: 'https://seo-kings.co.uk/site-and-google',
      name: 'Site + Google — £99/month Website & Google Setup for Trades | SEO Kings',
      description:
        'A professional one-page website plus Google Business Profile optimisation, hosting, monthly Google posts and rank reports — £99/month, nothing upfront. You own your domain, buy the site out anytime.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Site + Google' },
        ],
      },
    },
    {
      '@type': 'Service',
      name: 'Site + Google',
      description: 'Subscription website and Google Business Profile service for trades: one-page site, GBP optimisation, hosting, monthly Google posts and rank reports.',
      provider: { '@id': 'https://seo-kings.co.uk/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Bristol' },
        { '@type': 'City', name: 'Keynsham' },
      ],
      offers: {
        '@type': 'Offer',
        price: '99',
        priceCurrency: 'GBP',
        description: '£99 per month, six-month minimum, no setup fee. Site buyout available at £250.',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

export default function SiteAndGoogle() {
  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero */}
      <section className="pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTag className="mb-6">Site + Google</SectionTag>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                A website and a working Google profile.{' '}
                <span className="text-primary">£99 a month.</span> Nothing upfront.
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                For trades who want the phone to ring without finding £250–450 today:
                we build your one-page site, sort your Google Business Profile, host it,
                post to Google monthly and send you a rank report — for less than most
                vans cost to fill up.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                You own your domain from day one. Buy the site outright for £250 whenever
                you like. Six-month minimum, then monthly. No setup fee, no small print
                you&apos;ll regret.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-colors"
                >
                  Start with a free check
                </Link>
                <a
                  href="tel:07702264921"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
                  aria-label="Call SEO Kings on 07702 264 921"
                >
                  07702 264 921
                </a>
              </div>
            </div>

            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <p className="text-xs font-mono tracking-widest uppercase text-gray-600 mb-6">What £99/month gets you</p>
              <ul className="space-y-3.5">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 shrink-0 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-baseline justify-between">
                <span className="text-gray-400 text-sm">Per month, all in</span>
                <span className="text-3xl font-bold text-primary">£99</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Own it vs subscribe */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">Two honest routes</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
            Buy it outright, or subscribe — we&apos;ll tell you which suits you
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-2xl mb-10">
            If you have the cash and want to own everything today,{' '}
            <Link href="/web-design-packages" className="text-primary hover:underline">buy the site from £250</Link>{' '}
            — that&apos;s the better long-term deal and we&apos;ll say so on the phone.
            Site + Google exists for a different situation: nothing upfront, the Google
            work included, and the option to own it later. No wrong answer — just
            different cash flow.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-sm mb-3">Buy outright</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>£250 one-page site, yours immediately</li>
                <li>GBP optimisation +£100 if you want it</li>
                <li>Hosting free for 6 months, then £50/year</li>
                <li>No ongoing commitment at all</li>
              </ul>
            </div>
            <div className="bg-dark-card border border-primary/30 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-sm mb-3">Site + Google — £99/month</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Nothing upfront, live within a week</li>
                <li>GBP optimisation, hosting and monthly posts included</li>
                <li>Monthly rank report — see it working</li>
                <li>Own your domain always; buy the site out for £250 anytime</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">Straight answers</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">
              Common questions about Site + Google
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
