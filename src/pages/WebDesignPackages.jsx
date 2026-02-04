import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

const packages = [
  {
    name: 'Starter',
    price: '1,500',
    period: 'one-off',
    tagline: 'Get your business online',
    features: [
      'Up to 5 pages',
      'Full custom design',
      'Contact form',
      'Mobile-responsive',
      'SEO basics included',
      '12 months free hosting',
      'SSL certificate',
      'UK support',
    ],
    cta: 'Choose Plan',
    href: '/contact?package=starter',
    popular: false,
    gradient: 'from-primary to-primary-dark',
  },
  {
    name: 'Professional',
    price: '2,000',
    period: 'one-off',
    tagline: 'For growing businesses',
    features: [
      'Up to 8 pages',
      'Full custom design',
      'Contact form + callback request',
      'Portfolio or gallery',
      'Mobile-responsive',
      'SEO optimised',
      '12 months free hosting',
      '30-day post-launch support',
    ],
    cta: 'Choose Plan',
    href: '/contact?package=professional',
    popular: true,
    gradient: 'from-secondary to-secondary-dark',
  },
  {
    name: 'Full Package',
    price: '2,500',
    period: 'one-off',
    tagline: 'Everything you need',
    features: [
      'Up to 10 pages',
      'Full custom design',
      'Contact form + callback + booking',
      'Portfolio/gallery',
      'Social media integration',
      'SEO optimised',
      '12 months free hosting',
      '60-day post-launch support',
    ],
    cta: 'Choose Plan',
    href: '/contact?package=full',
    popular: false,
    gradient: 'from-accent to-accent-dark',
  },
];

const processSteps = [
  { step: '01', title: 'Sign up', description: 'Complete our form with your details and requirements. We\'ll get in touch within 24 hours.' },
  { step: '02', title: 'Design', description: 'We create custom designs for your business. You review and feedback until you\'re happy.' },
  { step: '03', title: 'Development', description: 'We build your site, test on every device, and make sure everything works perfectly.' },
  { step: '04', title: 'Launch', description: 'Go live with confidence. We provide training and support to keep things running smoothly.' },
];

const included = [
  'SEO optimised',
  'Mobile responsive',
  '12 months free hosting',
  'UK technical support',
  'Contact form',
  'SSL certificate',
  'Fast, secure servers',
  'Easy to update',
];

const WebDesignPackages = () => {
  return (
    <>
      <SEO
        title="Web Design Packages | Bath & BANES"
        description="Web design packages for local businesses in Bath & BANES. From £1,500 for 5-page sites. Custom design, SEO included, 12 months free hosting. Get a quote."
        keywords="web design packages Bath, website packages BANES, pay monthly website, business website cost, web design price Bath"
        canonical="/web-design-packages"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Website Design', url: '/web-design' },
          { name: 'Packages' },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
            Website design & development
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Web Design <span className="gradient-text">Packages</span>
          </h1>
          <p className="text-2xl text-gray-400 mb-2">
            From only <span className="text-white font-bold">£1,500</span>
          </p>
          <p className="text-gray-500 text-sm">Pay monthly options available — no hidden fees</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border bg-dark-card overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                  pkg.popular
                    ? 'border-primary ring-2 ring-primary/30 shadow-lg shadow-primary/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary py-2 text-center text-white text-sm font-semibold">
                    Most popular
                  </div>
                )}
                <div className={`p-8 ${pkg.popular ? 'pt-14' : ''}`}>
                  <h3 className="text-2xl font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{pkg.tagline}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">£{pkg.price}</span>
                    <span className="text-gray-500 ml-1">/{pkg.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={pkg.href}
                    className={`block w-full text-center bg-gradient-to-r ${pkg.gradient} text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary-light text-sm font-medium mb-4">
              Our process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              From idea to launch in 4 steps
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We keep it simple and keep you in the loop every step of the way.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="relative bg-dark-card border border-white/5 rounded-2xl p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-lg font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What's included
          </h2>
          <p className="text-gray-400 mb-12">
            Every package comes with the essentials to get your business found online.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {included.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 text-sm"
              >
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get started / Contact CTA */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get started
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Ready to get your website started? Fill out the form and we'll be in touch within 24 hours to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact?subject=web-design-packages"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity text-center"
            >
              Get free quote
            </Link>
            <a
              href="tel:07702264921"
              className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/5 transition-colors text-center"
            >
              Call 07702 264 921
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  );
};

export default WebDesignPackages;
