import React from 'react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Local SEO',
      href: '/local-seo',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=250&fit=crop&auto=format&q=80',
      imageAlt: 'Local SEO keyword research and analytics for BANES businesses',
      description: 'Get found for searches like "plumber Bath", "electrician Keynsham", "builder Midsomer Norton". Keyword research, on-page fixes, local links.',
      features: [
        'Keyword research',
        'On-page optimisation',
        'Local link building',
        'Monthly reporting',
      ],
      color: 'from-secondary to-secondary-dark',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Google Business Profile',
      href: '/google-business-profile',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=250&fit=crop&auto=format&q=80',
      imageAlt: 'Google Business Profile optimisation and map pack results in Bath area',
      description: 'Dominate the local map pack. We optimise your profile, manage reviews, post updates, and track calls.',
      features: [
        'Profile optimisation',
        'Review management',
        'Post scheduling',
        'Insights & tracking',
      ],
      color: 'from-accent to-accent-dark',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Fast Website Design',
      href: '/web-design',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop&auto=format&q=80',
      imageAlt: 'Mobile-first website design for trades in Bath and BANES',
      description: 'Mobile-first websites built for trades. Fast loading, clear calls-to-action, ready for SEO.',
      features: [
        'Mobile-first design',
        'Fast loading speeds',
        'Clear calls-to-action',
        'SEO-ready',
      ],
      color: 'from-primary to-primary-dark',
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Our
            <span className="gradient-text"> Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-dark-card border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  width={400}
                  height={250}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
                {/* Icon Badge */}
                <div className={`absolute bottom-4 left-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                  {service.icon}
                </div>
              </div>

              <div className="p-6 pt-4">
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link - descriptive text for SEO and accessibility */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-primary-light transition-colors"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn more about {service.title}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/local-seo"
            className="inline-flex items-center gap-2 text-primary-light hover:text-white transition-colors font-medium"
          >
            See All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
