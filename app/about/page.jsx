import About from '../../src/views/About';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'About SEO Kings | Website Design & SEO Agency for Trades' },
  description: 'SEO agency and web design company for trades and local businesses in Bath, Bristol and North East Somerset. We build fast websites with SEO and Google Business Profile support so your site gets found.',
  alternates: { canonical: 'https://seo-kings.co.uk/about' },
};

export default function Page() {
  return <About />;
}
