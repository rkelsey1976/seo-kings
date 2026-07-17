import Link from 'next/link';
import SEO from '../components/SEO';
import SectionTag from '../components/SectionTag';

// All figures computed from the June 2026 dataset — see methodology section.
const KEY_STATS = [
  { value: '136', label: 'trade businesses found', sub: 'across 15 trades in and around Bath' },
  { value: '6,984', label: 'Google reviews between them', sub: 'a median of 27 reviews each' },
  { value: '4.86', label: 'average star rating', sub: '73 hold a perfect 5.0' },
  { value: '0', label: 'have a website', sub: 'every one trades on Google Maps alone' },
];

const REVIEW_BUCKETS = [
  { label: '0–9 reviews', count: 21 },
  { label: '10–24 reviews', count: 37 },
  { label: '25–49 reviews', count: 33 },
  { label: '50–99 reviews', count: 25 },
  { label: '100+ reviews', count: 15 },
];

const TRADES = [
  ['Plumbers', 10], ['Roofers', 10], ['Builders', 10], ['Gas engineers', 10],
  ['Driveway & paving', 10], ['Electricians', 9], ['Cleaners', 9], ['Landscapers', 9],
  ['Kitchen fitters', 9], ['Heating engineers', 9], ['Plasterers', 9], ['Carpenters', 9],
  ['Painters & decorators', 8], ['Tilers', 8], ['Bathroom fitters', 7],
];

const MAX_BUCKET = Math.max(...REVIEW_BUCKETS.map((b) => b.count));

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/bath-trades-website-report',
      url: 'https://seo-kings.co.uk/bath-trades-website-report',
      name: 'The Invisible Trades of Bath — 136 Top-Rated Trades With No Website (2026 Report)',
      description:
        'SEO Kings identified 136 highly-rated trade businesses in and around Bath with no website at all — nearly 7,000 Google reviews between them. Full data and methodology.',
      inLanguage: 'en-GB',
      datePublished: '2026-06-10',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Bath Trades Website Report' , item: 'https://seo-kings.co.uk/bath-trades-website-report' },
        ],
      },
    },
    {
      '@type': 'Dataset',
      name: 'Bath trades without websites — June 2026',
      description:
        '136 trade businesses across 15 trades in Bath and North East Somerset, identified via Google Maps listings in June 2026 as having no website. Fields: trade, star rating, review count.',
      creator: { '@id': 'https://seo-kings.co.uk/#organization' },
      temporalCoverage: '2026-06',
      spatialCoverage: { '@type': 'Place', name: 'Bath and North East Somerset, UK' },
      license: 'https://creativecommons.org/licenses/by/4.0/',
    },
  ],
};

export default function BathTradesReport() {
  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero */}
      <section className="pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Research · June 2026</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight max-w-3xl">
            The invisible trades of Bath: <span className="text-primary">136 top-rated businesses, zero websites</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            We went looking for trade businesses in and around Bath that operate without any website.
            We found 136 of them — and they aren&apos;t struggling businesses. Between them they hold
            nearly 7,000 Google reviews at an average of 4.86 stars. Here&apos;s what the data says.
          </p>
        </div>
      </section>

      {/* Key stats */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {KEY_STATS.map(({ value, label, sub }) => (
              <div key={label} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                <div className="text-4xl font-bold text-primary mb-2">{value}</div>
                <div className="text-white font-semibold text-sm mb-1">{label}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finding 1 */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionTag className="mb-6">Finding 1</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              These aren&apos;t struggling businesses
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The easy assumption is that a trade with no website is a trade without enough work to
              need one. The data says otherwise. The 136 businesses we found hold 6,984 Google reviews
              between them — a median of 27 each. Forty of them have more than 50 reviews; fifteen have
              over 100; the most-reviewed has 607. Seventy-three hold a perfect 5.0 rating.
            </p>
            <p className="text-gray-400 leading-relaxed">
              These are busy, well-regarded businesses with years of happy customers — running entirely
              on Google Maps, word of mouth and a mobile number.
            </p>
          </div>

          {/* Review distribution chart */}
          <div className="mt-12 max-w-2xl">
            <h3 className="text-white font-semibold text-sm mb-6">Review counts across the 136 businesses</h3>
            <div className="space-y-3">
              {REVIEW_BUCKETS.map(({ label, count }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-28 shrink-0 text-xs text-gray-400 text-right font-mono">{label}</div>
                  <div className="flex-1 h-7 bg-dark-card rounded-md overflow-hidden">
                    <div
                      className="h-full bg-primary/80 rounded-md flex items-center justify-end px-2"
                      style={{ width: `${(count / MAX_BUCKET) * 100}%` }}
                    >
                      <span className="text-[11px] font-mono font-medium text-white">{count}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Finding 2 */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionTag className="mb-6">Finding 2</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              It spans every trade — not just the usual suspects
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              We expected the gap to cluster in one or two trades. It doesn&apos;t. We found
              website-less businesses in all fifteen trades we looked at, in roughly equal numbers —
              from plumbers and electricians to kitchen fitters and driveway specialists.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-4xl">
            {TRADES.map(([trade, count]) => (
              <div key={trade} className="bg-dark-card border border-white/[0.06] rounded-xl px-4 py-3 flex items-center justify-between">
                <span className="text-gray-300 text-xs">{trade}</span>
                <span className="text-primary font-mono font-semibold text-sm">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finding 3 */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionTag className="mb-6">Finding 3</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              What a Maps-only business misses
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              A Google Business Profile with strong reviews is a genuine asset — it&apos;s why these
              businesses are findable at all. But a Maps listing only works when someone searches a
              trade and a place. It can&apos;t rank for the hundreds of question searches customers
              make before they pick up the phone — &quot;how much does a rewire cost&quot;, &quot;do I
              need scaffolding for a roof repair&quot; — and it gives a customer comparing three
              businesses nothing to look at beyond the review count.
            </p>
            <p className="text-gray-400 leading-relaxed">
              It also means the business&apos;s reputation lives entirely on a platform it doesn&apos;t
              control. A suspended or hijacked profile — which happens to trades more often than
              people think — takes the whole business offline overnight.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionTag className="mb-6">Methodology</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              How we collected the data
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              In June 2026 we searched Google Maps listings across fifteen trade categories in Bath,
              North East Somerset and the immediate surrounding area, and recorded every business we
              found whose listing showed no website. For each we logged the trade, star rating and
              review count. Businesses are not named in this report.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              This is a census of businesses we found <em>without</em> websites — it is not a survey of
              all trades in the area, so it doesn&apos;t tell you what percentage of Bath trades lack a
              website. What it shows is the scale and quality of the businesses operating offline: at
              least 136 of them, most highly rated, across every trade we checked.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Journalists and researchers: you&apos;re welcome to cite these figures with a link to this
              page. The anonymised dataset is available on request —{' '}
              <Link href="/contact" className="text-primary hover:underline">get in touch</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionTag className="mb-6">If This Is You</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              Trading on Maps alone?
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              If your business is one of the 136 — or sounds like it could be — two of our free tools
              will show you where you stand: the{' '}
              <Link href="/google-business-profile-score-checker" className="text-primary hover:underline">GBP Score Checker</Link>{' '}
              scores your Maps listing, and the{' '}
              <Link href="/website-roi-calculator" className="text-primary hover:underline">Website ROI Calculator</Link>{' '}
              works out how many jobs a website needs to win to pay for itself. And if you want it
              handled, we build <Link href="/web-design" className="text-primary hover:underline">websites for trades from £250</Link>.
            </p>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              See all our free tools
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
