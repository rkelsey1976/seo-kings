import HowWeAreDifferent from '../../src/pages/HowWeAreDifferent';

export const revalidate = 3600;

export const metadata = {
  title: "How We're Different – Website Designer That Gets You Calls | SEO Kings",
  description: "We're not like other website designers. We combine website design with local and hyper-local SEO so your site gets found on Google and gets you calls. Bath & North East Somerset.",
  alternates: { canonical: 'https://seo-kings.co.uk/how-we-are-different' },
};

export default function Page() {
  return <HowWeAreDifferent />;
}
