import Link from 'next/link';
import SEO from '../components/SEO';
import SectionTag from '../components/SectionTag';

const TOOLS = [
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
      name: 'Free Tools for Tradespeople | SEO Kings',
      description:
        'Four free tools for trades and local businesses: check your Google Business Profile score, generate review requests, create invoices and quotes, and work out what a website is worth to you.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Free Tools' },
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
          <SectionTag className="mb-6">Free Tools</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Free tools for <span className="text-primary">tradespeople</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Four tools we built for the trades we work with — now free for everyone.
            No sign-up walls, no sales calls. Use them, share them, bookmark them.
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
