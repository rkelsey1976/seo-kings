import About from '../../src/views/About';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'About SEO Kings | Bath Web Design Agency' },
  description: 'SEO Kings builds fast websites and handles local SEO for trades in Bath & Bristol. 22 years experience. From £250 sites.',
  alternates: { canonical: 'https://seo-kings.co.uk/about' },
};

export default function Page() {
  return <About />;
}
