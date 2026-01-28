import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ThankYou = () => {
  return (
    <>
      <SEO
        title="Thank You - Message Received"
        description="Thank you for contacting SEO Kings. We've received your message and will get back to you within 24 hours."
        canonical="/thank-you"
        noIndex={true}
      />

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 animate-bounce-slow">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Thank You!
          </h1>
          
          <p className="text-xl text-gray-300 mb-4">
            Your message has been received successfully.
          </p>
          
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            We'll review your information and get back to you within <strong className="text-white">24 hours</strong>. 
            Keep an eye on your inbox!
          </p>

          {/* What Happens Next */}
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 mb-8 text-left">
            <h2 className="text-lg font-semibold text-white mb-4 text-center">What Happens Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-light font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">We Review Your Details</h3>
                  <p className="text-sm text-gray-400">Our team will look at your business and current online presence.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-light font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">Free SEO Audit</h3>
                  <p className="text-sm text-gray-400">We'll prepare a personalised audit showing opportunities for your business.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-light font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">Personal Consultation</h3>
                  <p className="text-sm text-gray-400">We'll call you to discuss your goals and how we can help you achieve them.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 btn-glow"
            >
              Back to Homepage
            </Link>
            <Link
              to="/case-studies"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>

          {/* Contact Options */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500 mb-4">Want to chat with us directly?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://wa.me/441225123456?text=Hi%20SEO%20Kings!%20I%20just%20submitted%20a%20contact%20form%20and%20would%20like%20to%20chat%20about%20my%20SEO%20needs."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <a 
                href="tel:01225123456" 
                className="inline-flex items-center gap-2 text-primary-light hover:text-white transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call 01225 123 456
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
