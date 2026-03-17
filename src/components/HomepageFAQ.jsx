import SectionDivider from './SectionDivider';
import FAQAccordion from './FAQAccordion';

export const homepageFAQs = [
  {
    question: 'How much does a website cost in Bath?',
    answer: 'Our websites start at £399 for a one-page trade site with contact form, click-to-call and Google Business Profile optimisation included. Multi-page sites start at £1,200. No hidden fees, no monthly retainer unless you choose to add Local SEO.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Most one-page trade websites are live within 2 weeks of your brief. Multi-page sites typically take 3–4 weeks. We keep you updated throughout and aim to get you online and getting found as quickly as possible.',
  },
  {
    question: 'Do I need a website to appear on Google Maps?',
    answer: 'No — you can appear on Google Maps with just a Google Business Profile. But having a website alongside it significantly improves your visibility in local search results, helps you rank for more keywords, and gives customers more reasons to choose you over a competitor.',
  },
  {
    question: 'What results can I expect from local SEO?',
    answer: 'Most clients see their Google Business Profile ranking improve within the first month. Our client Peachy Cleans went from invisible to number 1 for "cleaner Midsomer Norton" — now they have fully booked weeks and have hired new staff. Results depend on your trade and how competitive your area is, but we show you exactly where you stand and what we are doing each month.',
  },
  {
    question: 'Do you work with tradespeople in Bath and North East Somerset?',
    answer: 'Yes — that is our focus. We work with plumbers, electricians, builders, roofers, landscapers and other local trades across Bath, Keynsham, Midsomer Norton, Radstock and the surrounding area. We know the local market and what it takes to get you found by customers in your area.',
  },
];

const HomepageFAQ = () => {
  return (
    <section className="py-24 relative" aria-labelledby="homepage-faq-heading">
      <SectionDivider />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="homepage-faq-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-gray-400">
            Everything you need to know about getting a website and getting found on Google in Bath and North East Somerset.
          </p>
        </div>
        <FAQAccordion faqs={homepageFAQs} />
      </div>
    </section>
  );
};

export default HomepageFAQ;
