import React from 'react';
import SectionDivider from './SectionDivider';
import { GOOGLE_MAPS_PLACE_URL } from '../constants/business';
import { REVIEWS } from '../constants/reviews';

const StarRating = ({ stars = 5 }) => (
  <div className="flex gap-0.5" aria-hidden="true">
    {Array.from({ length: stars }, (_, i) => (
      <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Reviews = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="reviews">
      <SectionDivider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients
            <span className="gradient-text"> Say</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Real reviews from Bath, Keynsham, Midsomer Norton and across Bath and North East Somerset. See more on Google.
          </p>
        </div>

        {REVIEWS.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {REVIEWS.map((review, index) => (
              <article
                key={index}
                className="bg-dark-card border border-white/5 rounded-2xl p-6 lg:p-8 flex flex-col h-full"
              >
                <StarRating stars={review.stars} />
                <blockquote className="mt-4 text-gray-300 leading-relaxed flex-1">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 pt-4 border-t border-white/5">
                  <div className="font-semibold text-white">{review.name}</div>
                  <div className="text-sm text-gray-400">
                    {review.business}
                    {review.location && ` • ${review.location}`}
                  </div>
                </footer>
              </article>
            ))}
          </div>
        )}

        <div className="text-center">
          <a
            href={GOOGLE_MAPS_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 text-white px-6 py-3 rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark"
            aria-label="See all reviews for SEO Kings on Google"
          >
            <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            See all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
