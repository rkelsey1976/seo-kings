import Link from 'next/link';
import SEO from '../components/SEO';
import SectionTag from '../components/SectionTag';

const TOOLS = [
  {
    href: '/tools/local-seo-checklist',
    name: 'The Local SEO Checklist for Trades',
    tag: 'PDF · free download',
    desc: 'The 22 things that decide whether you show up on Google Maps — profile, reviews, website and citations. The same list we use in paid audits, printable and tickable.',
    cta: 'Get the checklist',
  },
  {
    href: '/google-business-profile-score-checker',
    name: 'Google Business Profile Score Checker',
    tag: 'GBP · 2 minutes',
    desc: 'Score your Google Business Profile against the same checklist we use in paid audits. See exactly what’s stopping you appearing in the Map Pack — and what to fix first.',
    cta: 'Check your GBP score',
  },
  {
    href: '/review-request-generator',
    name: 'Review Request Generator',
    tag: 'Reviews · 1 minute',
    desc: 'Builds a personalised WhatsApp message asking your customer for a Google review — casual or professional tone, ready to copy and send while the job’s still fresh.',
    cta: 'Write a review request',
  },
  {
    href: '/invoice-template-generator',
    name: 'Invoice & Quote Generator',
    tag: 'Paperwork · 3 minutes',
    desc: 'Create a clean, professional invoice or quote for your trade business — your details, line items and VAT, ready to download and send. No sign-up, no software to buy.',
    cta: 'Create an invoice',
  },
  {
    href: '/website-roi-calculator',
    name: 'Website ROI Calculator',
    tag: 'Numbers · 1 minute',
    desc: 'Work out how many extra jobs a website needs to win before it pays for itself, based on your average job value. For most trades the answer is one or two.',
    cta: 'Run the numbers',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/tools',
      url: 'https://seo-kings.co.uk/tools',
      name: 'Trades Growth Hub — Free Tools, Guides & Checklists | SEO Kings',
      description:
        'Free tools, guides and checklists for trades and local businesses: check your Google Business Profile score, download the Local SEO Checklist, generate review requests, create invoices, and learn how to get found on Google.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Trades Growth Hub' , item: 'https://seo-kings.co.uk/tools' },
        ],
      },
    },
    {
      '@type': 'ItemList',
      name: 'Free tools for tradespeople',
      itemListElement: TOOLS.map((tool, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://seo-kings.co.uk${tool.href}`,
        name: tool.name,
      })),
    },
  ],
};

export default function ToolsHub() {
  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero */}
      <section className="pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Trades Growth Hub</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            The Trades <span className="text-primary">Growth Hub</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Free tools, guides and checklists we built for the trades we work with — now free
            for everyone. No sign-up walls, no sales calls. Use them, share them, bookmark them.
          </p>
        </div>
      </section>

      {/* Tool cards */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {TOOLS.map(({ href, name, tag, desc, cta }) => (
              <Link
                key={href}
                href={href}
                className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col hover:border-primary/40 transition-colors group"
              >
                <div className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-3">{tag}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">{name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">{desc}</p>
                <span className="text-primary text-sm font-semibold inline-flex items-center gap-2">
                  {cta}
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guides — existing content, grouped */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">Guides</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight tracking-tight">
            How to get found on Google — the guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-sm mb-4">Google Business Profile & reviews</h3>
              <ul className="space-y-3">
                {[
                  { href: '/blog/set-up-google-business-profile-tradesperson', label: 'Set up your GBP as a tradesperson' },
                  { href: '/blog/get-trade-business-google-map-pack', label: 'Get into the Google Map Pack' },
                  { href: '/blog/google-map-pack-bristol', label: 'The Map Pack in Bristol' },
                  { href: '/blog/google-map-pack-bath', label: 'The Map Pack in Bath' },
                  { href: '/blog/get-more-google-reviews-bath', label: 'Get more Google reviews' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-sm mb-4">Websites for trades</h3>
              <ul className="space-y-3">
                {[
                  { href: '/blog/website-cost-bristol', label: 'What a website costs in Bristol' },
                  { href: '/blog/website-cost-bath', label: 'What a website costs in Bath' },
                  { href: '/blog/do-i-need-a-website-plumber-bath', label: 'Do I need a website as a plumber?' },
                  { href: '/blog/why-plumbing-website-not-getting-calls', label: "Why your website isn't getting calls" },
                  { href: '/blog/wordpress-vs-custom-website-trades', label: 'WordPress vs a custom site' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-white font-semibold text-sm mb-4">Proof it works</h3>
              <ul className="space-y-3">
                {[
                  { href: '/case-studies', label: 'All case studies' },
                  { href: '/case-studies/new-decorating', label: 'Top 3 Map Pack — New Decorating' },
                  { href: '/case-studies/peachy-cleans', label: 'Map Pack #1 — Peachy Cleans' },
                  { href: '/bath-trades-website-report', label: 'The Invisible Trades of Bath report' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why free */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionTag className="mb-6">Why Free?</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              No catch — this is what we do all day
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We build websites and run local SEO for trades across Bath, Keynsham and Somerset.
              These tools cover the questions we get asked most — what&apos;s wrong with my Google
              profile, how do I ask for reviews, is a website worth it. The tools answer them
              properly, whether you ever work with us or not.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              If a tool shows you a problem you&apos;d rather not fix yourself, that&apos;s where we
              come in: <Link href="/web-design" className="text-primary hover:underline">web design from £250</Link>,{' '}
              <Link href="/local-seo" className="text-primary hover:underline">local SEO from £150/month</Link>, or{' '}
              <Link href="/google-business-profile" className="text-primary hover:underline">GBP optimisation for £100</Link>.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Curious how big the problem is locally? Our research found{' '}
              <Link href="/bath-trades-website-report" className="text-primary hover:underline">136 top-rated Bath trades with no website at all</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
