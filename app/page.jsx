import dynamic from 'next/dynamic';
import Hero from '../src/components/Hero/Hero';
import WhyChoose from '../src/components/WhyChoose';
import Services from '../src/components/Services';
import HowItWorks from '../src/components/HowItWorks';
import Reviews from '../src/components/Reviews';

const Spotlight = dynamic(() => import('../src/components/Spotlight'), { ssr: true });
const CTABanner = dynamic(() => import('../src/components/CTABanner'), { ssr: true });

export const metadata = {
  title: 'Get Found on Google Bath & North East Somerset | Website & Google Listing for Trades – SEO Kings',
  description: 'Website designer Bath & North East Somerset — we help trades get found on Google. Website design from £399, Google Business Profile, and getting you on the map. Plumbers, electricians, builders. Free check today.',
  keywords: 'website designer Bath, website design Bath, get found on Google Bath, Google Business Profile Bath, Google listing Bath, website for plumbers electricians Bath, get on Google Maps Bath and North East Somerset, website designer Bath and North East Somerset',
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
      <Reviews />
      <Spotlight />
      <CTABanner />
    </>
  );
}
