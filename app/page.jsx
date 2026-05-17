import dynamic from 'next/dynamic';
import Hero from '../src/components/Hero/Hero';
import MarqueeText from '../src/components/MarqueeText';
import StepsScroll from '../src/components/StepsScroll';
import BentoGrid from '../src/components/BentoGrid';
import FAQTestimonials from '../src/components/FAQTestimonials';
import HomePageFAQSchema from './HomePageFAQSchema';
import HomepageLocalBusinessSchema from './HomepageLocalBusinessSchema';

const Spotlight = dynamic(() => import('../src/components/Spotlight'), { ssr: true });
const CTABanner = dynamic(() => import('../src/components/CTABanner'), { ssr: true });

export const revalidate = 3600;

export const metadata = {
  title: 'Websites That Get You Calls — £399 | SEO Kings Bath',
  description: 'Fast website design + Google Business Profile for trades in Bath, Keynsham & Midsomer Norton. From £399. Get found on Google. Free audit — no card needed.',
  alternates: { canonical: 'https://seo-kings.co.uk/' },
  other: {
    'trustpilot-one-time-domain-verification-id': '7d8c84ad-2a23-4a65-8cf6-2ac075ac9030',
  },
};

/* ══════ HOMEPAGE: CONVERSION-FOCUSED 2026 ══════
   Ruthless trim: removed StatsCounter, AreasCovered, Reviews section.
   Peachy Cleans spotlight moved UP — proof first.
   Every word earns its place.
*/

const marqueeItems = [
  "Peachy Cleans — Map Pack · 'cleaning Midsomer Norton'",
  "New Decorating — #1 organic · 'exterior painter Bath'",
  "Aurelian Massage — ranking · 'massage Bath'",
  "Websites from £399 — live in 2 weeks",
  "Google Business Profile included",
  "No contracts. No lock-in.",
];

const howItWorksSteps = [
  {
    number: '01',
    tag: 'Discovery',
    heading: 'We audit where the calls are going.',
    description: 'We check where you rank, what your competitors are doing, and where the missed calls are. Takes 10 minutes. The report is yours either way.',
    image: '/images/home/website-designer-bath-professional-workspace.webp',
    imageAlt: 'Website designer Bath — professional setup for building fast, SEO-ready sites',
  },
  {
    number: '02',
    tag: 'Build',
    heading: 'Your site goes live in under 2 weeks.',
    description: 'Mobile-first, fast-loading, built to show up when customers search "[your trade] near me" in Bath, Keynsham or wherever you work.',
    image: '/images/home/local-seo-get-found-google-analytics.webp',
    imageAlt: 'Local SEO audit — Google rankings and visibility for Bath businesses',
  },
  {
    number: '03',
    tag: 'Win',
    heading: 'The calls come in.',
    description: 'You get a monthly ranking report showing exactly where you sit and what\'s moved. Most clients see calls within the first 30 days.',
    image: '/images/home/website-design-workflow-bath-somerset.webp',
    imageAlt: 'Website design results — real local search wins for trades in Bath and Somerset',
  },
];

const bentoCells = [
  {
    colSpan: 2,
    featured: true,
    stat: '£399',
    statLabel: 'ONE-PAGE SITES FROM',
    tag: 'Core Service',
    heading: 'Website Design for Trades',
    body: 'Mobile-first. Fast-loading. Built to rank for "[your trade] near me". One-page from £399. Multi-page from £599. Click-to-call, quote form, and GBP set-up included.',
    href: '/web-design',
    theme: 'dark',
    imageBg: '/images/cards/bg-website.webp',
    accentColor: '#E8715A',
  },
  {
    stat: '3',
    statLabel: 'Named Clients With Proof',
    tag: 'Results',
    heading: 'Rankings You Can Verify',
    body: 'Peachy Cleans — Map Pack "cleaning Midsomer Norton". New Decorating — #1 organic "exterior painter Bath". Aurelian Massage — ranking for "massage Bath". Exact keywords. Exact positions.',
    href: '/case-studies',
    theme: 'dark',
    imageBg: '/images/keynsham/keynsham-cta-background-code.webp',
    accentColor: '#4A90A4',
  },
  {
    tag: 'Included',
    heading: 'Google Business Profile',
    body: 'Claim, verify and fully optimise your GBP. Show up in the Map Pack — the top 3 results that capture 60% of local clicks. One-off £150 or included with every site.',
    href: '/google-business-profile',
    theme: 'dark',
    imageBg: '/images/keynsham/keynsham-code-screen.webp',
    accentColor: '#4A90A4',
  },
  {
    colSpan: 2,
    tag: 'Add-on',
    heading: 'Ongoing Local SEO',
    body: 'Keyword research, on-page optimisation, local citations, and monthly ranking reports. Know exactly where you sit and what\'s improving every month.',
    href: '/local-seo',
    theme: 'dark',
    imageBg: '/images/keynsham/keynsham-coding.webp',
    accentColor: '#E8715A',
  },
];

export default function HomePage() {
  return (
    <>
      <HomepageLocalBusinessSchema />
      <HomePageFAQSchema />
      <Hero />

      {/* Marquee */}
      <section className="py-6" style={{ background: '#0B1324', boxShadow: "0 -1px 0 0 rgba(255,255,255,0.04), 0 1px 0 0 rgba(255,255,255,0.04)" }}>
        <MarqueeText items={marqueeItems} speed={28} />
      </section>

      {/* What You Get — Bento Grid */}
      <section id="services" className="py-28 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20">
            <span className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase" style={{ color: '#E8715A' }}>Services</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 tracking-tight tracking-tighter-display">
              What You Get
            </h2>
            <p className="text-lg max-w-2xl mt-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
              One core service — website design for local trades — with add-ons that actually make sense.
            </p>
          </div>
          <BentoGrid cells={bentoCells} columns={4} gap="md" />
        </div>
      </section>

      {/* How It Works — StepsScroll */}
      <section className="py-28 lg:py-32 relative" style={{ background: "#0B1324" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20">
            <span className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase" style={{ color: '#E8715A' }}>Process</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 tracking-tight tracking-tighter-display">
              How It Works
            </h2>
            <p className="text-lg max-w-2xl mt-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Three steps. Get started in minutes.
            </p>
          </div>
          <StepsScroll steps={howItWorksSteps} accentColor="#E8715A" />
        </div>
      </section>

      <FAQTestimonials />
      <CTABanner />
    </>
  );
}
