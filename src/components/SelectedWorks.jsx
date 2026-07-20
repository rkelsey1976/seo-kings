import Image from 'next/image';
import Link from 'next/link';

/**
 * SelectedWorks — dribbble-style portfolio cards for the homepage.
 * Server component: links stay crawlable, no client JS needed.
 */
const works = [
  {
    business: 'Bath Painter',
    category: 'Web Design & Branding',
    proof: 'Enquiries up within a week of launch',
    image: '/images/case-studies/bath-painter.webp',
    alt: 'Bath Painter — bespoke website design and branding for a Bath painter and decorator',
    slug: 'bath-painter',
  },
  {
    business: 'Aspect Builds',
    category: 'Web Design & Local SEO',
    proof: '40-page site · live in under 2 weeks',
    image: '/images/case-studies/aspect-builds.webp',
    alt: 'Aspect Builds — 40-page builder website with local SEO for Bath',
    slug: 'aspect-builds',
  },
  {
    business: 'Peachy Cleans',
    category: 'Web Design & GBP',
    proof: '#1 Map Pack · "cleaning Midsomer Norton"',
    image: '/images/case-studies/peachy-cleans.webp',
    alt: 'Peachy Cleans — cleaning company website and Google Business Profile for Midsomer Norton',
    slug: 'peachy-cleans',
  },
  {
    business: 'Aurelian Massage',
    category: 'Web Design & Booking',
    proof: 'Live in under a week · already ranking',
    image: '/images/case-studies/aurelian-massage.webp',
    alt: 'Aurelian Massage — massage therapy website with online booking for Bath',
    slug: 'aurelian-massage',
  },
];

const SelectedWorks = () => (
  <section className="py-24 border-t border-white/[0.06]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10">
        <span className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-primary">Selected work</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 tracking-tight">
          Sites we&apos;ve shipped
        </h2>
        <p className="text-lg max-w-2xl mt-4 text-white/55">
          Real builds for real trades — every one live, ranking and taking enquiries.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {works.map(({ business, category, proof, image, alt, slug }) => (
          <Link
            key={slug}
            href={`/case-studies/${slug}`}
            className="group block bg-dark-card border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/15 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between gap-4 px-6 py-4">
              <div className="flex items-center gap-3 min-w-0">
                <svg
                  className="w-4 h-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
                <span className="text-white font-semibold truncate">{business}</span>
              </div>
              <span className="text-sm text-white/40 shrink-0">{category}</span>
            </div>

            {/* Screenshot */}
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>

            {/* Proof caption */}
            <div className="px-6 py-4 text-[11px] font-mono tracking-[0.12em] uppercase text-white/35 transition-colors group-hover:text-white/55">
              {proof}
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default SelectedWorks;
