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
    { slug: 'westfield' },
    { slug: 'chew-magna' },
    { slug: 'temple-cloud' },
    { slug: 'clutton' },
    // Sub-areas: Bath
    { slug: 'odd-down-bath' },
    { slug: 'combe-down-bath' },
    { slug: 'widcombe-bath' },
    { slug: 'larkhall-bath' },
    { slug: 'twerton-bath' },
    // Sub-areas: Keynsham
    { slug: 'bitton-keynsham' },
    { slug: 'hanham-keynsham' },
    { slug: 'oldland-keynsham' },
    // Sub-areas: Midsomer Norton
    { slug: 'clandon-midsomer-norton' },
    { slug: 'farrington-gurney-midsomer-norton' },
  ];
}

export default function Page({ params }) {
  return <AreaDetail params={params} />;
}
