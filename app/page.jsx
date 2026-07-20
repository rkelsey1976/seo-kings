import dynamic from 'next/dynamic';
import Hero from '../src/components/Hero/Hero';
import SelectedWorks from '../src/components/SelectedWorks';
import HomePageFAQSchema from './HomePageFAQSchema';
import HomepageLocalBusinessSchema from './HomepageLocalBusinessSchema';

const MarqueeText = dynamic(() => import('../src/components/MarqueeText'), { ssr: false });
const BentoGrid = dynamic(() => import('../src/components/BentoGrid'), { ssr: false });
const StepsScroll = dynamic(() => import('../src/components/StepsScroll'), { ssr: false });
const FAQTestimonials = dynamic(() => import('../src/components/FAQTestimonials'), { ssr: false });
const CTABanner = dynamic(() => import('../src/components/CTABanner'), { ssr: false });
const Spotlight = dynamic(() => import('../src/components/Spotlight'), { ssr: false });
const Results = dynamic(() => import('../src/components/Results'), { ssr: false });

export const revalidate = 3600;

export const metadata = {
  title: 'Local SEO & Web Design for Trades | Bath £250 Sites',
  description: 'Web design + local SEO for trades in Bath & Bristol. Peachy Cleans Map Pack #1. From £250, free audit — see where you rank.',
  alternates: { canonical: 'https://seo-kings.co.uk/' },
  openGraph: {
    url: 'https://seo-kings.co.uk/',
  },
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
  "New Decorating — Top 3 Map Pack · 'exterior painter Bath'",
  "Aurelian Massage — ranking · 'massage Bath'",
  "Websites from £250 — live in 2 weeks",
  "Google Business Profile optimisation — £100 add-on",
  "No contracts. No lock-in.",
];

const howItWorksSteps = [
  {
    number: '01',
    tag: 'Free Audit',
    heading: 'Find out where you\'re losing calls.',
    description: 'We audit your current rankings, check your competitors, and find where the missed opportunities are. Free report. Takes 10 minutes. Either way, the insights are yours.',
    image: '/images/home/website-designer-bath-professional-workspace.webp',
    imageAlt: 'Website designer Bath — professional setup for building fast, SEO-ready sites',
  },
  {
    number: '02',
    tag: 'Launch',
    heading: 'Live and ranking within 2 weeks.',
    description: 'Fast, mobile-first site built to show up when customers search for "[your trade] near me". Built with local SEO from day one, not bolted on after.',
    image: '/images/home/local-seo-get-found-google-analytics.webp',
    imageAlt: 'Local SEO audit — Google rankings and visibility for Bath businesses',
  },
  {
    number: '03',
    tag: 'Results',
    heading: 'Phone starts ringing.',
    description: 'Monthly ranking reports show exactly where you sit and what\'s improving. Most clients see their first calls within 30 days. You\'ll know it\'s working because you\'ll get enquiries.',
    image: '/images/home/website-design-workflow-bath-somerset.webp',
    imageAlt: 'Website design results — real local search wins for trades in Bath and Somerset',
  },
];

const bentoCells = [
  {
    colSpan: 2,
    featured: true,
    stat: '£250',
    statLabel: 'ONE-PAGE SITES FROM',
    tag: 'Core Service',
    heading: 'Website Design for Trades',
    body: 'Mobile-first. Fast-loading. Built to rank for "[your trade] near me". One-page from £250. Multi-page from £350. Click-to-call and quote form included. Add GBP optimisation for £100.',
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
    body: "Peachy Cleans — Map Pack \"cleaning Midsomer Norton\". New Decorating — Top 3 Map Pack \"exterior painter Bath\". Aurelian Massage — ranking for \"massage Bath\". Exact keywords. Exact positions.",
    href: '/case-studies',
    theme: 'dark',
    imageBg: '/images/results/peachy-cleans-map-pack.webp',
    imageFocus: 'left center',
    lightBg: true,
    accentColor: '#E8715A',
  },
  {
    tag: 'Add-on',
    heading: 'Google Business Profile',
    body: 'Claim, verify and fully optimise your GBP. Show up in the Map Pack — the top 3 results that capture 60% of local clicks. One-off £100 add-on to any website package.',
    href: '/google-business-profile',
    theme: 'dark',
    imageBg: '/images/keynsham/keynsham-code-screen.webp',
    accentColor: '#E8715A',
  },
  {
    colSpan: 2,
    tag: 'Add-on',
    heading: 'Ongoing Local SEO',
    body: "Keyword research, on-page optimisation, local citations, and monthly ranking reports. Know exactly where you sit and what's improving every month.",
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
      {/* Server-rendered H1 for SEO + crawlers. Visually identical to Hero headline but renders in static HTML. */}
      <h1 className="sr-only">Web Design & Local SEO for Local Trades That Gets You Calls — Bath & North East Somerset</h1>
      <Hero />

      {/* Marquee */}
      <section className="py-6" style={{ background: '#0B1324', boxShadow: "0 -1px 0 0 rgba(255,255,255,0.04), 0 1px 0 0 rgba(255,255,255,0.04)" }}>
        <MarqueeText items={marqueeItems} speed={28} />
      </section>

      {/* What You Get — Bento Grid */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-10">
            <span className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-primary">Services</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 tracking-tight tracking-tighter-display">
              Everything You Need to Get Found and Get Calls
            </h2>
            <p className="text-lg max-w-2xl mt-4 text-white/55">
              Website design is our core. Local SEO, Google Business Profile optimisation, and ongoing ranking reports are add-ons that actually move the needle.
            </p>
          </div>
          <BentoGrid cells={bentoCells} columns={4} gap="md" />
        </div>
      </section>

      {/* Results — Real client numbers */}
      <Results />

      {/* Selected Works — dribbble-style portfolio cards */}
      <SelectedWorks />

      {/* How It Works — StepsScroll */}
      <section className="py-24 relative" style={{ background: "#0B1324" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-10">
            <span className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-primary">Process</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 tracking-tight tracking-tighter-display">
              How It Works
            </h2>
            <p className="text-lg max-w-2xl mt-4 text-white/55">
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
