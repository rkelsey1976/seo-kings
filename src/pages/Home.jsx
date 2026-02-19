import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Results from '../components/Results';
import Spotlight from '../components/Spotlight';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
    <>
      <SEO
        title="Local SEO Services in Bath & North East Somerset"
        description="Local SEO for Bath & North East Somerset. We help tradespeople and small businesses get found on Google. Website design, local SEO, GBP. Free audit."
        keywords="SEO Bath, local SEO Bath and North East Somerset, SEO services Bath, website design Bath, Google Business Profile Bath, SEO for tradesmen, local SEO Somerset"
        canonical="/"
      />
      <Hero />
      <Services />
      <HowItWorks />
      <Results />
      <Spotlight />
      <CTABanner />
    </>
  );
};

export default Home;
