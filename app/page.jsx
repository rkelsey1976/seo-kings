import dynamic from 'next/dynamic';
import Hero from '../src/components/Hero/Hero';
import DesignProcess from '../src/components/DesignProcess';
import WhyChoose from '../src/components/WhyChoose';
import Services from '../src/components/Services';
import HowItWorks from '../src/components/HowItWorks';
import Reviews from '../src/components/Reviews';
import HomepageFAQ from '../src/components/HomepageFAQ';
import AreasCovered from '../src/components/AreasCovered';
import HomePageFAQSchema from './HomePageFAQSchema';
import HomepageLocalBusinessSchema from './HomepageLocalBusinessSchema';

const Spotlight = dynamic(() => import('../src/components/Spotlight'), { ssr: true });
const CTABanner = dynamic(() => import('../src/components/CTABanner'), { ssr: true });

// Revalidate every hour when using a server (ISR); ignored with output: 'export'
export const revalidate = 3600;

export const metadata = {
  title: 'Website Designer Bath & North East Somerset | Get Found on Google',
  description: 'Website designer Bath & North East Somerset — website design from £399, Google Business Profile and local SEO for trades. Get found on Google. Free check today.',
  alternates: { canonical: 'https://seo-kings.co.uk/' },
  other: {
    'trustpilot-one-time-domain-verification-id': '7d8c84ad-2a23-4a65-8cf6-2ac075ac9030',
  },
};

export default function HomePage() {
  return (
    <>
      <HomepageLocalBusinessSchema />
      <HomePageFAQSchema />
      <Hero />
      <DesignProcess />
      <WhyChoose />
      <AreasCovered />
      <Services />
      <HowItWorks />
      <Reviews />
      <Spotlight />
      <HomepageFAQ />
      <CTABanner />
    </>
  );
}
