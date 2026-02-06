import dynamic from 'next/dynamic';
import Hero from '../src/components/Hero/Hero';
import WhyChoose from '../src/components/WhyChoose';
import Services from '../src/components/Services';
import HowItWorks from '../src/components/HowItWorks';
import Results from '../src/components/Results';

const Testimonials = dynamic(() => import('../src/components/Testimonials'), { ssr: true });
const CTABanner = dynamic(() => import('../src/components/CTABanner'), { ssr: true });

export const metadata = {
  title: 'Local SEO Bath & BANES | Get More Customers – SEO Kings',
  description: 'Local SEO for tradespeople and small businesses in Bath & North East Somerset. Plumbers, electricians, builders – rank higher on Google. Free audit today.',
  keywords: 'SEO Bath, local SEO BANES, SEO services Bath, website design Bath, Google Business Profile Bath, SEO for tradesmen, local SEO Somerset',
  alternates: { canonical: 'https://seo-kings.co.uk/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Services />
      <HowItWorks />
      <Results />
      <Testimonials />
      <CTABanner />
    </>
  );
}
