import React from 'react';
import Link from 'next/link';
import AnimatedBlob from './AnimatedBlob';

const Hero = () => {
  const stats = [
    { value: '150+', label: 'Local Businesses Ranked' },
    { value: '#1', label: 'BANES SEO Agency' },
    { value: '5★', label: 'Google Rating' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
      {/* Animated Blobs */}
      <AnimatedBlob 
        color="primary" 
        size="lg" 
        position="top-left" 
        delay="0" 
        blur="sm"
      />
      <AnimatedBlob 
        color="secondary" 
        size="xl" 
        position="top-right" 
        delay="2000" 
        blur="sm"
      />
      <AnimatedBlob 
        color="accent" 
        size="lg" 
        position="bottom-left" 
        delay="4000" 
        blur="sm"
      />
      <AnimatedBlob 
        color="mixed" 
        size="xl" 
        position="bottom-right" 
        delay="6000" 
        blur="sm"
      />

      {/* Additional smaller blobs for depth */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-primary/40 to-transparent rounded-full blur-xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-secondary/30 to-transparent rounded-full blur-xl animate-blob animation-delay-4000" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="animate-fade-in-down inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Local SEO Experts</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="animate-fade-in-up delay-100 block text-white">Get More Customers</span>
              <span className="animate-fade-in-up delay-300 block gradient-text">From Google</span>
            </h1>

            {/* Subheading */}
            <p className="animate-fade-in-up delay-400 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              We help tradespeople and local businesses in Bath & North East Somerset
              rank higher on Google and attract more customers — guaranteed results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10">
              <Link href="/contact" className="animate-slide-in-bounce delay-500 w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 btn-glow text-center">
                Get Your Free Audit
              </Link>
              <Link href="/contact" className="animate-slide-in-bounce delay-600 w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                Get in Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div key={index} className={`animate-fade-in-up delay-${700 + index * 100} text-center lg:text-left`}>
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative hidden lg:block">
            {/* Main Image */}
            <div className="relative animate-scale-in delay-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop&auto=format&q=80"
                srcSet="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=333&fit=crop&auto=format&q=80 400w, https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop&auto=format&q=80 600w, https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=667&fit=crop&auto=format&q=80 800w"
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="SEO analytics dashboard displaying website traffic growth charts and Google ranking improvements for local businesses in Bath"
                width={600}
                height={500}
                fetchPriority="high"
                className="relative rounded-3xl border border-white/10 shadow-2xl"
              />
              
              {/* Floating Card - Rankings */}
              <div className="absolute -left-8 top-1/4 bg-dark-card border border-white/10 rounded-xl p-4 shadow-xl animate-float-card-left delay-700" aria-hidden="true">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-300">Google Ranking</div>
                    <div className="text-lg font-bold text-white">#1 Position</div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Leads */}
              <div className="absolute -right-4 bottom-1/4 bg-dark-card border border-white/10 rounded-xl p-4 shadow-xl animate-float-card-right delay-900" aria-hidden="true">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-300">Monthly Leads</div>
                    <div className="text-lg font-bold text-white">+340%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Served */}
        <div className="animate-fade-in-up delay-1000 flex flex-wrap items-center justify-center gap-3 mt-16 text-sm text-gray-300">
          <span>Trusted by:</span>
          {['Plumbers', 'Electricians', 'Builders', 'Roofers', 'Landscapers', 'Salons', 'Restaurants'].map((trade, index) => (
            <span key={index} className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
              {trade}
            </span>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden md:block">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
