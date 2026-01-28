import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Results from '../components/Results';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
    <>
      <SEO
        title="Local SEO Services in Bath & BANES"
        description="SEO Kings helps tradespeople and local businesses in Bath & North East Somerset get found on Google. Website design, local SEO, and Google Business Profile management. Get your free audit today."
        keywords="SEO Bath, local SEO BANES, SEO services Bath, website design Bath, Google Business Profile Bath, SEO for tradesmen, local SEO Somerset"
        canonical="/"
      />
      <Hero />
      <Services />
      <HowItWorks />
      <Results />
      <Testimonials />
      <CTABanner />
    </>
  );
};

export default Home;
