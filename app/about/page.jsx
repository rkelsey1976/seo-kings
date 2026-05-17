import About from '../../src/pages/About';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'About SEO Kings | Web Design for Trades in Bath & Somerset' },
  description: 'We build websites for trades and local businesses in Bath and North East Somerset. SEO and Google Business Profile are add-ons we provide so your site gets found.',
  alternates: { canonical: 'https://seo-kings.co.uk/about' },
};

export default function Page() {
  return <About />;
}
