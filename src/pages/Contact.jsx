import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    message: '',
    website: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Encode form data for Netlify
    const encode = (data) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    };

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formData,
        }),
      });
      
      // Redirect to thank you page
      navigate('/thank-you');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again or call us directly.');
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '07702 264 921',
      href: 'tel:07702264921',
      description: 'Mon-Fri 9am-5pm',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Bath, Somerset',
      href: null,
      description: 'Serving all of BANES',
    },
  ];

  const services = [
    'Website Design',
    'Local SEO',
    'Google Business Profile',
    'Full Package (All Services)',
    'Not sure yet',
  ];

  return (
    <>
      <SEO
        title="Contact Us - Get Your Free SEO Audit"
        description="Contact SEO Kings for a free SEO audit. We help Bath & BANES businesses dominate Google. Call or use our contact form."
        keywords="contact SEO Kings, free SEO audit Bath, SEO consultation BANES, local SEO quote, website design quote Bath"
        canonical="/contact"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact' }
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Grow Your
              <span className="gradient-text"> Business Together</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Ready to dominate local search? Get your free SEO audit and discover 
              exactly what's holding your business back online.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="text-gray-400 mb-8">
                Prefer to chat? Give us a call. We're always happy 
                to discuss your business and how we can help.
              </p>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-white font-semibold hover:text-primary-light transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white font-semibold">{item.value}</span>
                      )}
                      <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Points */}
              <div className="bg-dark-card border border-white/5 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {[
                    'Free, no-obligation SEO audit',
                    'Plain English, no jargon',
                    'Local team who understand BANES',
                    'Proven results with 150+ businesses',
                  ].map((point, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-400 text-sm">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-dark-card border border-white/5 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Get Your Free SEO Audit
                </h2>
                <p className="text-gray-400 mb-8">
                  Fill out the form below and we'll analyse your online presence for free.
                </p>

                    <form 
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      netlify-honeypot="bot-field"
                      onSubmit={handleSubmit} 
                      className="space-y-6" 
                      aria-label="Contact form"
                    >
                      {/* Hidden fields for Netlify */}
                      <input type="hidden" name="form-name" value="contact" />
                      <p className="hidden">
                        <label>
                          Don't fill this out if you're human: 
                          <input name="bot-field" onChange={handleChange} />
                        </label>
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Your Name <span aria-hidden="true">*</span>
                            <span className="sr-only">(required)</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            aria-required="true"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-colors"
                            placeholder="John Smith"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address <span aria-hidden="true">*</span>
                            <span className="sr-only">(required)</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            aria-required="true"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Phone */}
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            autoComplete="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-colors"
                            placeholder="07702 264 921"
                          />
                        </div>

                        {/* Business Name */}
                        <div>
                          <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-2">
                            Business Name <span aria-hidden="true">*</span>
                            <span className="sr-only">(required)</span>
                          </label>
                          <input
                            type="text"
                            id="business"
                            name="business"
                            required
                            aria-required="true"
                            autoComplete="organization"
                            value={formData.business}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-colors"
                            placeholder="Smith's Plumbing"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Website */}
                        <div>
                          <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                            Current Website (if any)
                          </label>
                          <input
                            type="url"
                            id="website"
                            name="website"
                            autoComplete="url"
                            value={formData.website}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-colors"
                            placeholder="https://yourwebsite.com"
                          />
                        </div>

                        {/* Service */}
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                            Service Interested In <span aria-hidden="true">*</span>
                            <span className="sr-only">(required)</span>
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            aria-required="true"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-colors"
                          >
                            <option value="" className="bg-dark">Select a service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service} className="bg-dark">
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Tell Us About Your Business
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-colors resize-none"
                          placeholder="What are your goals? What challenges are you facing?"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 btn-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          'Get My Free Audit'
                        )}
                      </button>

                      <p className="text-center text-sm text-gray-500">
                        By submitting this form, you agree to our{' '}
                        <a href="/privacy" className="text-primary-light hover:text-white transition-colors">
                          Privacy Policy
                        </a>
                      </p>
                    </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-400">
              Got questions? We've got answers.
            </p>
          </div>

          <FAQAccordion 
            faqs={[
              {
                q: 'How long does it take to see results?',
                a: 'Most clients see significant improvements within 3-6 months. SEO is a long-term strategy, but we focus on quick wins early on while building sustainable rankings.',
              },
              {
                q: 'How much does SEO cost?',
                a: 'Our packages start from £500/month for local SEO. We\'ll provide a custom quote based on your business, competition, and goals during your free consultation.',
              },
              {
                q: 'Do I need a new website?',
                a: 'Not necessarily. We\'ll assess your current site and recommend improvements. Sometimes a few tweaks are enough, other times a rebuild makes more sense.',
              },
              {
                q: 'What areas do you cover?',
                a: 'We work exclusively with businesses in Bath and North East Somerset (BANES). This local focus means we understand your market better than any national agency.',
              },
              {
                q: 'Are there any contracts?',
                a: 'We offer flexible monthly agreements with no long-term lock-ins. We believe in earning your business every month through results, not contracts.',
              },
            ]}
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
