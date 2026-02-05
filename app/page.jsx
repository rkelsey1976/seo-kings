import dynamic from 'next/dynamic';
import Hero from '../src/components/Hero/Hero';
import Services from '../src/components/Services';
import HowItWorks from '../src/components/HowItWorks';
import Results from '../src/components/Results';

const Testimonials = dynamic(() => import('../src/components/Testimonials'), { ssr: true });
const CTABanner = dynamic(() => import('../src/components/CTABanner'), { ssr: true });

export const metadata = {
  title: 'Local SEO Services in Bath & BANES',
  description: 'Local SEO for Bath & BANES. We help tradespeople and small businesses get found on Google. Website design, local SEO, GBP. Free audit.',
  keywords: 'SEO Bath, local SEO BANES, SEO services Bath, website design Bath, Google Business Profile Bath, SEO for tradesmen, local SEO Somerset',
  alternates: { canonical: 'https://seo-kings.co.uk/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Results />
      <Testimonials />
      <CTABanner />
    </>
  );
}
