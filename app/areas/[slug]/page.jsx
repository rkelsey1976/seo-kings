import AreaDetail from '../../../src/views/AreaDetail';
import { AREA_SLUGS } from '../../../src/constants/sitemap';
import { AREA_META } from '../../../src/constants/areaMeta';

export function generateStaticParams() {
  return AREA_SLUGS.map((slug) => ({ slug }));
}

export const revalidate = 3600;

const GEO_META = {
  // Bath city
  bath: { 'geo.region': 'GB-BAS', 'geo.placename': 'Bath' },
  // Bath sub-areas
  'odd-down-bath': { 'geo.region': 'GB-BAS', 'geo.placename': 'Odd Down, Bath' },
  'combe-down-bath': { 'geo.region': 'GB-BAS', 'geo.placename': 'Combe Down, Bath' },
  'widcombe-bath': { 'geo.region': 'GB-BAS', 'geo.placename': 'Widcombe, Bath' },
  'larkhall-bath': { 'geo.region': 'GB-BAS', 'geo.placename': 'Larkhall, Bath' },
  'twerton-bath': { 'geo.region': 'GB-BAS', 'geo.placename': 'Twerton, Bath' },
  'weston-bath': { 'geo.region': 'GB-BAS', 'geo.placename': 'Weston, Bath' },
  'oldfield-park-bath': { 'geo.region': 'GB-BAS', 'geo.placename': 'Oldfield Park, Bath' },
  'bear-flat-bath': { 'geo.region': 'GB-BAS', 'geo.placename': 'Bear Flat, Bath' },
  'bathampton-bath': { 'geo.region': 'GB-BAS', 'geo.placename': 'Bathampton, Bath' },
  'bathwick-bath': { 'geo.region': 'GB-BAS', 'geo.placename': 'Bathwick, Bath' },
  'southdown-bath': { 'geo.region': 'GB-BAS', 'geo.placename': 'Southdown, Bath' },
  'batheaston-bath': { 'geo.region': 'GB-BAS', 'geo.placename': 'Batheaston, Bath' },
  'walcot-bath': { 'geo.region': 'GB-BAS', 'geo.placename': 'Walcot, Bath' },
  'bathford-bath': { 'geo.region': 'GB-BAS', 'geo.placename': 'Bathford, Bath' },
  // Keynsham + BS31 area
  keynsham: { 'geo.region': 'GB-BAS', 'geo.placename': 'Keynsham, Somerset' },
  saltford: { 'geo.region': 'GB-BAS', 'geo.placename': 'Saltford, Somerset' },
  'bitton-keynsham': { 'geo.region': 'GB-BAS', 'geo.placename': 'Bitton, Somerset' },
  'hanham-keynsham': { 'geo.region': 'GB-BAS', 'geo.placename': 'Hanham, Somerset' },
  'oldland-keynsham': { 'geo.region': 'GB-BAS', 'geo.placename': 'Oldland, Somerset' },
  'longwell-green-keynsham': { 'geo.region': 'GB-BAS', 'geo.placename': 'Longwell Green, Somerset' },
  'warmley-keynsham': { 'geo.region': 'GB-BAS', 'geo.placename': 'Warmley, Somerset' },
  // Midsomer Norton / Radstock / Somer Valley
  'midsomer-norton': { 'geo.region': 'GB-SOM', 'geo.placename': 'Midsomer Norton, Somerset' },
  radstock: { 'geo.region': 'GB-SOM', 'geo.placename': 'Radstock, Somerset' },
  'peasedown-st-john': { 'geo.region': 'GB-SOM', 'geo.placename': 'Peasedown St John, Somerset' },
  paulton: { 'geo.region': 'GB-SOM', 'geo.placename': 'Paulton, Somerset' },
  timsbury: { 'geo.region': 'GB-SOM', 'geo.placename': 'Timsbury, Somerset' },
  westfield: { 'geo.region': 'GB-SOM', 'geo.placename': 'Westfield, Somerset' },
  'clandon-midsomer-norton': { 'geo.region': 'GB-SOM', 'geo.placename': 'Clandown, Somerset' },
  'farrington-gurney-midsomer-norton': { 'geo.region': 'GB-SOM', 'geo.placename': 'Farrington Gurney, Somerset' },
  'writhlington-radstock': { 'geo.region': 'GB-SOM', 'geo.placename': 'Writhlington, Somerset' },
  'chilcompton-radstock': { 'geo.region': 'GB-SOM', 'geo.placename': 'Chilcompton, Somerset' },
  // Chew Valley
  'chew-magna': { 'geo.region': 'GB-SOM', 'geo.placename': 'Chew Magna, Somerset' },
  'temple-cloud': { 'geo.region': 'GB-SOM', 'geo.placename': 'Temple Cloud, Somerset' },
  clutton: { 'geo.region': 'GB-SOM', 'geo.placename': 'Clutton, Somerset' },
  'stanton-drew-chew-magna': { 'geo.region': 'GB-SOM', 'geo.placename': 'Stanton Drew, Somerset' },
  'chew-stoke-chew-magna': { 'geo.region': 'GB-SOM', 'geo.placename': 'Chew Stoke, Somerset' },
  'bishop-sutton-chew-magna': { 'geo.region': 'GB-SOM', 'geo.placename': 'Bishop Sutton, Somerset' },
  'high-littleton-paulton': { 'geo.region': 'GB-SOM', 'geo.placename': 'High Littleton, Somerset' },
  'hallatrow-paulton': { 'geo.region': 'GB-SOM', 'geo.placename': 'Hallatrow, Somerset' },
  // Bristol area
  bristol: { 'geo.region': 'GB-BST', 'geo.placename': 'Bristol' },
  'kingswood': { 'geo.region': 'GB-SGC', 'geo.placename': 'Kingswood, South Gloucestershire' },
  'brislington': { 'geo.region': 'GB-BST', 'geo.placename': 'Brislington, Bristol' },
  'whitchurch-bristol': { 'geo.region': 'GB-BST', 'geo.placename': 'Whitchurch, Bristol' },
  'knowle-bristol': { 'geo.region': 'GB-BST', 'geo.placename': 'Knowle, Bristol' },
  'stockwood-bristol': { 'geo.region': 'GB-BST', 'geo.placename': 'Stockwood, Bristol' },
  'bedminster-bristol': { 'geo.region': 'GB-BST', 'geo.placename': 'Bedminster, Bristol' },
  'southville-bristol': { 'geo.region': 'GB-BST', 'geo.placename': 'Southville, Bristol' },
  'yate-bristol': { 'geo.region': 'GB-SGC', 'geo.placename': 'Yate, South Gloucestershire' },
};

export function generateMetadata({ params }) {
  const slug = params?.slug?.toLowerCase?.();
  if (!slug) return {};
  const area = AREA_META[slug];
  const title = area?.metaTitle ?? `Website Design in ${slug} | SEO Kings`;
  return {
    title: { absolute: title },
    description: area?.metaDescription,
    alternates: { canonical: `https://seo-kings.co.uk/areas/${slug}` },
    other: GEO_META[slug] ?? { 'geo.region': 'GB-BAS', 'geo.placename': 'Bath' },
  };
}

export default function Page({ params }) {
  return <AreaDetail params={params} />;
}
