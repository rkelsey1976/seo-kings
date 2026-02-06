import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Best investment we've made. We now dominate local search and our Google reviews have increased significantly.",
      name: 'Mark Williams',
      business: 'Williams Roofing',
      location: 'Midsomer Norton',
      trade: 'Roofer',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    },
    {
      quote: "From zero online presence to first page of Google. Our business has completely transformed.",
      name: 'Lisa Green',
      business: "Green's Cleaning Services",
      location: 'Paulton',
      trade: 'Cleaning',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    },
    {
      quote: "We now get enquiries from Peasedown and surrounding areas. SEO Kings made it happen.",
      name: 'Tom Richards',
      business: 'Richards Landscaping',
      location: 'Peasedown St John',
      trade: 'Landscaping',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    },
    {
      quote: "Within 3 months I was on the first page of Google. Brilliant service.",
      name: 'Sarah Thompson',
      business: 'Thompson Electrical',
      location: 'Keynsham',
      trade: 'Electrician',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
    },
  ];

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-24 bg-dark-lighter relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='https://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-4">
            What Clients Say
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            What Clients
            <span className="gradient-text"> Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark border border-white/5 rounded-2xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-4 pt-2">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                {/* Avatar */}
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}, ${testimonial.trade} from ${testimonial.location} - SEO Kings client testimonial`}
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-300">
                    {testimonial.business} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
