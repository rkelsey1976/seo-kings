import AreaDetail from '../../../src/pages/AreaDetail';

export function generateStaticParams() {
  return [
    { slug: 'bath' },
    { slug: 'keynsham' },
    { slug: 'midsomer-norton' },
    { slug: 'radstock' },
    { slug: 'peasedown-st-john' },
    { slug: 'paulton' },
    { slug: 'saltford' },
    { slug: 'timsbury' },
  ];
}

export default function Page({ params }) {
  return <AreaDetail params={params} />;
}
