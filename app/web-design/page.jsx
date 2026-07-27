import WebDesign from '../../src/views/WebDesign';
import WebDesignServiceSchema from '../WebDesignServiceSchema';
import LocalBusinessRefSchema from '../LocalBusinessRefSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design | Bath & Bristol | From £250 | SEO Kings' },
  description: 'Websites, redesigns, hosting and Google Business Profile for trades and local businesses in Bath and Bristol. From £250, live in 2 weeks. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design' },
};

export default function Page() {
  return (
    <>
      <LocalBusinessRefSchema />
      <WebDesignServiceSchema />
      <WebDesign />
    </>
  );
}
