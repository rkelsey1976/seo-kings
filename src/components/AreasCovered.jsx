import Link from 'next/link';
import SectionDivider from './SectionDivider';

const areas = [
  { name: 'Bath', slug: 'bath', postcode: 'BA1 / BA2' },
  { name: 'Keynsham', slug: 'keynsham', postcode: 'BS31' },
  { name: 'Midsomer Norton', slug: 'midsomer-norton', postcode: 'BA3' },
  { name: 'Radstock', slug: 'radstock', postcode: 'BA3' },
  { name: 'Saltford', slug: 'saltford', postcode: 'BS31' },
  { name: 'Peasedown St John', slug: 'peasedown-st-john', postcode: 'BA2' },
  { name: 'Paulton', slug: 'paulton', postcode: 'BS39' },
  { name: 'Timsbury', slug: 'timsbury', postcode: 'BA2' },
];

export default function AreasCovered() {
  return (
    <section className="py-20 relative" aria-labelledby="areas-covered-heading">
      <SectionDivider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="areas-covered-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Areas We
            <span className="gradient-text"> Cover</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We build websites and get local businesses found on Google across Bath and North East Somerset. Select your area for a dedicated local guide.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group flex flex-col items-center justify-center gap-1 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-primary/30 transition-all duration-200 text-center"
            >
              <span className="text-base font-semibold text-white group-hover:text-primary-light transition-colors">
                {area.name}
              </span>
              <span className="text-xs text-gray-500">{area.postcode}</span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-light hover:text-white transition-colors"
          >
            View all service areas
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
