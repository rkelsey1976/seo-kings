import BlogPost from '../../../src/pages/BlogPost';

const BLOG_SLUGS = [
  'beautiful-websites-that-rank',
  'what-is-local-seo-bath',
  'get-more-google-reviews-bath',
  'local-seo-bath',
  'seo-for-plumbers-bath',
  'free-seo-audit-what-we-check',
  'website-design-midsomer-norton-peachy-cleans',
  'new-decorating-website-bath',
  'website-design-bath',
  'website-designer-bath-banes',
  'website-design-keynsham',
  'website-design-bitton-keynsham',
  'get-found-on-google-keynsham',
  'website-design-radstock',
  'website-design-trowbridge',
  'one-page-website-bath-banes',
  'why-speed-matters-for-seo',
  'how-we-get-you-number-one-google-maps',
];

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export default function Page({ params }) {
  return <BlogPost params={params} />;
}
