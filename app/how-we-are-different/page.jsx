import HowWeAreDifferent from '../../src/views/HowWeAreDifferent';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: "Why Choose SEO Kings | Website Design + SEO" },
  description: "Website design combined with local SEO. Sites that rank on Google and get you calls. Bath & Somerset.",
  alternates: { canonical: 'https://seo-kings.co.uk/how-we-are-different' },
};

export default function Page() {
  return <HowWeAreDifferent />;
}
