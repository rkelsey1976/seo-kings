import SectionDivider from './SectionDivider';
import FAQAccordion from './FAQAccordion';

export const homepageFAQs = [
  {
    question: 'How much does a website cost in Bath?',
    answer: '£399 for a one-page trade site with contact form, click-to-call and Google Business Profile set-up included. Multi-page sites start at £1,200. No hidden fees.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Most one-page sites are live within 2 weeks. We keep you updated throughout.',
  },
  {
    question: 'Do I need a website to appear on Google Maps?',
    answer: 'No — but having one doubles your chance of showing up in the Map Pack, where 60% of local clicks go.',
  },
  {
    question: 'What results can I expect from local SEO?',
    answer: 'Most clients see ranking improvements within 30 days. Peachy Cleans went from invisible to #1 for "cleaner Midsomer Norton" — but results vary by area and competition.',
  },
  {
    question: 'What trades do you work with?',
    answer: 'Plumbers, electricians, builders, cleaners, painters — any trade in Bath & BANES that needs local customers.',
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
