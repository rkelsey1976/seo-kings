import SEOBristolIndustry from '../../../../src/views/SEOBristolIndustry';
import BreadcrumbSchema from '../../../BreadcrumbSchema';
import { BRISTOL_INDUSTRIES, BRISTOL_INDUSTRY_SLUGS } from '../../../../src/constants/industries';

export async function generateStaticParams() {
  return BRISTOL_INDUSTRY_SLUGS.map((industry) => ({ industry }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { industry } = await params;
  const config = BRISTOL_INDUSTRIES[industry];
  if (!config) return {};

  return {
    title: { absolute: config.metaTitle },
    description: config.metaDescription,
    alternates: { canonical: `https://seo-kings.co.uk/seo/bristol/${industry}` },
  };
}

export default async function Page({ params }) {
  const { industry } = await params;
  const config = BRISTOL_INDUSTRIES[industry];
  return (
    <>
      {config && (
        <BreadcrumbSchema
          items={[
            { name: 'Home', path: '/' },
            { name: 'SEO Bristol', path: '/seo/bristol' },
            { name: `SEO for ${config.plural}`, path: `/seo/bristol/${industry}` },
          ]}
        />
      )}
      <SEOBristolIndustry industry={industry} />
    </>
  );
}
