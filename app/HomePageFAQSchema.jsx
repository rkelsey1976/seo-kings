/**
 * FAQPage schema for the homepage "Our Design Process" section.
 * Mirrors Discovery, Mobile-First Build, SEO Injection, Launch for rich snippets.
 */
const designProcessFAQs = [
  {
    question: 'What is the first step in the SEO Kings design process?',
    answer: 'Discovery. We dig into your business, your customers, and what makes you stand out. Clear goals and a simple brief mean a site that speaks to the right people and turns visitors into leads.',
  },
  {
    question: 'How do you build websites?',
    answer: 'We design for phones first, then scale up. Mobile-first build means fast load times and thumb-friendly layouts that keep users on the page and reduce bounce — so more of them click to call or fill the form.',
  },
  {
    question: 'Do you include SEO from the start?',
    answer: 'Yes. SEO injection is step three: keywords, structure, and local SEO are built in from day one. Clean code, schema markup, and content that answers what people search for — so Google ranks you and your phone keeps ringing.',
  },
  {
    question: 'What happens when you launch my website?',
    answer: 'We go live, connect your Google Business Profile, and hand you the keys. You get a clear handover and simple next steps so you can start getting found and winning work straight away.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: designProcessFAQs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function HomePageFAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      suppressHydrationWarning
    />
  );
}
