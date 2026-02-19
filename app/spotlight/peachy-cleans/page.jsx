import Link from 'next/link';
import Spotlight from '../../../src/components/Spotlight';

export const metadata = {
  title: 'Peachy Cleans – Number 1 on Google & Top of Maps | Client Spotlight',
  description: 'How we got Peachy Cleans to #1 on Google and top of Maps in Midsomer Norton. One-page website, Google listing, and local SEO for cleaning services in Bath & North East Somerset.',
  keywords: 'Peachy Cleans, Midsomer Norton cleaning, local SEO case study, cleaner Midsomer Norton, Google Maps ranking, Bath North East Somerset SEO',
  alternates: { canonical: 'https://seo-kings.co.uk/spotlight/peachy-cleans' },
  openGraph: {
    title: 'Peachy Cleans – #1 on Google & Top of Maps | SEO Kings Spotlight',
    description: 'We built their website and got them to number one in the Google map pack and organic search. See the full story.',
    url: 'https://seo-kings.co.uk/spotlight/peachy-cleans',
  },
};

export default function SpotlightPeachyCleansPage() {
  return (
    <div className="min-h-screen">
      {/* Back link */}
      <div className="bg-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
          <span className="text-gray-600 mx-2">·</span>
          <Link
            href="/case-studies/peachy-cleans"
            className="text-gray-400 hover:text-primary-light transition-colors text-sm font-medium"
          >
            Full case study
          </Link>
        </div>
      </div>

      <Spotlight variant="full" />
    </div>
  );
}
