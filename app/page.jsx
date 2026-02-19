import dynamic from 'next/dynamic';
import Hero from '../src/components/Hero/Hero';
import WhyChoose from '../src/components/WhyChoose';
import Services from '../src/components/Services';
import HowItWorks from '../src/components/HowItWorks';
import Results from '../src/components/Results';

const Spotlight = dynamic(() => import('../src/components/Spotlight'), { ssr: true });
const CTABanner = dynamic(() => import('../src/components/CTABanner'), { ssr: true });

export const metadata = {
  title: 'Local SEO Bath & BANES | Get More Customers – SEO Kings',
  description: 'Local SEO for tradespeople and small businesses in Bath & North East Somerset. Plumbers, electricians, builders – rank higher on Google. Free audit today.',
  keywords: 'SEO Bath, local SEO BANES, SEO services Bath, website designer Bath, website design Bath, Google Business Profile Bath, SEO for tradesmen, local SEO Somerset',
  alternates: { canonical: 'https://seo-kings.co.uk/' },
  other: {
    'trustpilot-one-time-domain-verification-id': '7d8c84ad-2a23-4a65-8cf6-2ac075ac9030',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Services />
      <HowItWorks />
      <Results />
      <Spotlight />
      <CTABanner />
    </>
  );
}
