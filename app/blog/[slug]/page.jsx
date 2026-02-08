import BlogPost from '../../../src/pages/BlogPost';

export function generateStaticParams() {
  return [
    { slug: 'beautiful-websites-that-rank' },
    { slug: 'what-is-local-seo-bath' },
    { slug: 'get-more-google-reviews-bath' },
    { slug: 'local-seo-bath' },
    { slug: 'seo-for-plumbers-bath' },
    { slug: 'free-seo-audit-what-we-check' },
    { slug: 'website-design-midsomer-norton-peachy-cleans' },
    { slug: 'website-design-bath' },
    { slug: 'website-design-keynsham' },
    { slug: 'website-design-radstock' },
    { slug: 'website-design-trowbridge' },
    { slug: 'one-page-website-bath-banes' },
  ];
}

export default function Page({ params }) {
  return <BlogPost params={params} />;
}
