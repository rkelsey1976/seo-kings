import CaseStudies from '../../src/views/CaseStudies';

export const revalidate = 3600;

export const metadata = {
  title: 'Case Studies | Real Results for Bath Trades',
  description: 'See how we got Peachy Cleans to the Map Pack, New Decorating to #1 on Google, and Aurelian Massage ranking in Bath. Real clients, real keywords, real proof.',
  alternates: { canonical: 'https://seo-kings.co.uk/case-studies' },
};

export default function Page() {
  return <CaseStudies />;
}
