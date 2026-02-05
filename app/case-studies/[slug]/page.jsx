import CaseStudyDetail from '../../../src/pages/CaseStudyDetail';

export function generateStaticParams() {
  return [
    { slug: 'mitchell-plumbing' },
    { slug: 'keynsham-electrics' },
    { slug: 'norton-roofing' },
    { slug: 'the-bath-kitchen' },
    { slug: 'radstock-dental' },
    { slug: 'saltford-garden-centre' },
    { slug: 'peachy-cleans' },
  ];
}

export default function Page({ params }) {
  return <CaseStudyDetail params={params} />;
}
