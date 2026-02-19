import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';

const packages = [
  {
    name: 'Starter',
    price: '399',
    period: 'one-off',
    tagline: '1-page site with everything a trade needs',
    features: [
      'Single-page design',
      'Services, contact & area info on one page',
      'Contact form & click-to-call',
      'GBP optimisation included (one service, one location)',
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
    price: '1,200',
    period: 'one-off',
    tagline: 'For growing businesses',
    features: [
      'Up to 8 pages',
      'Full custom design',
      'Contact form + callback request',
      'Portfolio or gallery',
      'GBP optimisation included (3 services, 4 locations)',
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
    price: '1,800',
    period: 'one-off',
    tagline: 'Everything you need',
    features: [
      'Up to 10 pages',
      'Full custom design',
      'Contact form + callback + booking',
      'Portfolio/gallery',
      'Social media integration',
      'GBP optimisation included (5 services, 8 locations)',
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
        title="Website Designer Packages Bath & North East Somerset | From £399 – SEO Kings"
        description="Website designer packages for Bath & North East Somerset — we specialise in trade websites and getting local trades found on Google. From £399 for a one-page site. Plumbers, electricians, builders."
        keywords="website designer Bath, website designer Bath and North East Somerset, web design packages Bath, website design Bath, one-page website, affordable website, website for trades, website design Keynsham, website design Midsomer Norton, website packages Bath and North East Somerset"
        canonical="/web-design-packages"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Website Designer', url: '/web-design' },
          { name: 'Packages' },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
            Website designer Bath & North East Somerset
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Website Designer <span className="gradient-text">Packages</span>
          </h1>
          <p className="text-2xl text-gray-400 mb-2">
            From only <span className="text-white font-bold">£399</span>
          </p>
          <p className="text-gray-500 text-sm">Pay monthly options available — no hidden fees</p>
          <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto">
            Website design is our main service. Our one-page package (from £399) includes GBP optimisation for one service in one location. We can add local SEO and other services once you&apos;re happy with your site.
          </p>
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
                    href={pkg.href}
                    className={`block w-full text-center bg-gradient-to-r ${pkg.gradient} text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Packages & GBP — your questions answered</h3>
            <FAQAccordion
              faqs={[
                {
                  question: 'What is a service?',
                  answer: 'A service is one type of work or business offering. For example: plumbing is one service; electrical is another. If you do one main trade (e.g. plumber in Keynsham), that\'s one service. If you offer several distinct services (e.g. plumbing, heating, bathroom fitting), each can count as a service for GBP optimisation.',
                },
                {
                  question: 'What is a location?',
                  answer: 'A location is one area you serve. For example: Keynsham, Bath, or one postcode. If you cover multiple towns, each area counts as a location. We optimise your Google Business Profile so you show up when people search for your service in each location.',
                },
                {
                  question: 'What\'s included in GBP optimisation?',
                  answer: 'We set up and optimise your Google Business Profile so you appear in the map pack when people search locally. That includes: correct category and business details, description, service area, photos, and making sure your profile matches your website. The number of services and locations in each package is the scope we optimise for.',
                },
                {
                  question: 'What if I need more services or locations than my package includes?',
                  answer: 'You can add more later. Once you\'re happy with your website and initial GBP setup, we can add local SEO and expand to more services or locations as an add-on. Get in touch and we\'ll tailor a plan to your business.',
                },
                {
                  question: 'How do the packages compare?',
                  answer: 'Starter (£399): one-page site + GBP optimisation for 1 service, 1 location. Professional (£1,200): up to 8 pages + GBP for 3 services, 4 locations. Full Package (£1,800): up to 10 pages + GBP for 5 services, 8 locations. All include hosting, SSL, and support — we can add more services or locations as add-ons.',
                },
              ]}
            />
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
            What&apos;s included
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
          <div className="mt-12 p-6 bg-dark-card/50 border border-white/10 rounded-2xl text-left max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-2">Add-ons once you&apos;re happy</h3>
            <p className="text-gray-400 text-sm mb-4">
              After you&apos;re happy with your website, we can add local SEO, ongoing Google Business Profile management, review management, and more — tailored to your business and locations.
            </p>
            <Link href="/contact" className="text-primary-light hover:text-white text-sm font-medium">
              Ask about add-ons →
            </Link>
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
              href="/contact?subject=web-design-packages"
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

      <CTABanner />
    </>
  );
};

export default WebDesignPackages;
