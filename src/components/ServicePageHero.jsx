import React from 'react';

const ServicePageHero = ({ 
  badge, 
  title, 
  highlight, 
  description, 
  features = [],
  ctaText = 'Get Your Free Quote',
  ctaSecondary = 'Call Us Today'
}) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
              {badge}
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
              <span className="gradient-text"> {highlight}</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Feature Pills */}
            {features.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-10">
                {features.map((feature, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                  >
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </span>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 btn-glow">
                {ctaText}
              </button>
              <a
                href="tel:01225123456"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {ctaSecondary}
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Decorative Card Stack */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl" />
              <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl" />
              <div className="relative bg-dark-card border border-white/10 rounded-2xl p-8">
                {/* Stats Preview */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-400">Average Results</span>
                    <span className="text-2xl font-bold text-green-400">+340%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-400">Client Satisfaction</span>
                    <span className="text-2xl font-bold text-white">98%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-400">BANES Businesses</span>
                    <span className="text-2xl font-bold gradient-text">150+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePageHero;
