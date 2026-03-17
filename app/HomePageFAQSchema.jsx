/**
 * FAQPage schema for the homepage.
 * Questions match real search intent — what local tradespeople and small businesses
 * actually type into Google when looking for a website designer or SEO help.
 * The question/answer data is shared with the visible HomepageFAQ component so
 * on-page content and schema stay in sync.
 */
import { homepageFAQs } from '../src/components/HomepageFAQ';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homepageFAQs.map((faq) => ({
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
