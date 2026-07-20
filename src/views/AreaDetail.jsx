'use client';
import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';
import { GOOGLE_MAPS_PLACE_URL } from '../constants/business';


/** Wikipedia URLs for schema areaServed Place sameAs (semantic context for AI/search). */
const WIKIPEDIA_BY_SLUG = {
  bristol: 'https://en.wikipedia.org/wiki/Bristol',
  keynsham: 'https://en.wikipedia.org/wiki/Keynsham',
  bath: 'https://en.wikipedia.org/wiki/Bath,_Somerset',
  'midsomer-norton': 'https://en.wikipedia.org/wiki/Midsomer_Norton',
  radstock: 'https://en.wikipedia.org/wiki/Radstock',
  'peasedown-st-john': 'https://en.wikipedia.org/wiki/Peasedown_St_John',
  paulton: 'https://en.wikipedia.org/wiki/Paulton',
  saltford: 'https://en.wikipedia.org/wiki/Saltford',
  timsbury: 'https://en.wikipedia.org/wiki/Timsbury',
  westfield: 'https://en.wikipedia.org/wiki/Westfield,_Somerset',
  'chew-magna': 'https://en.wikipedia.org/wiki/Chew_Magna',
  'temple-cloud': 'https://en.wikipedia.org/wiki/Temple_Cloud',
  clutton: 'https://en.wikipedia.org/wiki/Clutton,_Somerset',
  'odd-down-bath': 'https://en.wikipedia.org/wiki/Bath,_Somerset',
  'combe-down-bath': 'https://en.wikipedia.org/wiki/Combe_Down',
  'widcombe-bath': 'https://en.wikipedia.org/wiki/Widcombe,_Bath',
  'larkhall-bath': 'https://en.wikipedia.org/wiki/Larkhall,_Bath',
  'bitton-keynsham': 'https://en.wikipedia.org/wiki/Bitton,_South_Gloucestershire',
  'hanham-keynsham': 'https://en.wikipedia.org/wiki/Hanham',
  'kingswood': 'https://en.wikipedia.org/wiki/Kingswood,_South_Gloucestershire',
  'brislington': 'https://en.wikipedia.org/wiki/Brislington',
  'whitchurch-bristol': 'https://en.wikipedia.org/wiki/Whitchurch,_Bristol',
  'knowle-bristol': 'https://en.wikipedia.org/wiki/Knowle,_Bristol',
  'stockwood-bristol': 'https://en.wikipedia.org/wiki/Stockwood,_Bristol',
  'bedminster-bristol': 'https://en.wikipedia.org/wiki/Bedminster',
  'southville-bristol': 'https://en.wikipedia.org/wiki/Southville,_Bristol',
  'yate-bristol': 'https://en.wikipedia.org/wiki/Yate',
  'clifton-bristol': 'https://en.wikipedia.org/wiki/Clifton,_Bristol',
  'horfield-bristol': 'https://en.wikipedia.org/wiki/Horfield',
  'filton-bristol': 'https://en.wikipedia.org/wiki/Filton',
  'bradley-stoke-bristol': 'https://en.wikipedia.org/wiki/Bradley_Stoke',
  'long-ashton-bristol': 'https://en.wikipedia.org/wiki/Long_Ashton',
  'city-centre-bath': 'https://en.wikipedia.org/wiki/Bath,_Somerset',
  'lansdown-bath': 'https://en.wikipedia.org/wiki/Lansdown,_Bath',
  'city-centre-bristol': 'https://en.wikipedia.org/wiki/Bristol_city_centre',
  'redcliffe-bristol': 'https://en.wikipedia.org/wiki/Redcliffe,_Bristol',
  'redland-bristol': 'https://en.wikipedia.org/wiki/Redland,_Bristol',
  'cotham-bristol': 'https://en.wikipedia.org/wiki/Cotham,_Bristol',
  'montpelier-bristol': 'https://en.wikipedia.org/wiki/Montpelier,_Bristol',
  'easton-bristol': 'https://en.wikipedia.org/wiki/Easton,_Bristol',
  'st-george-bristol': 'https://en.wikipedia.org/wiki/St_George,_Bristol',
  'totterdown-bristol': 'https://en.wikipedia.org/wiki/Totterdown',
  'bishopston-bristol': 'https://en.wikipedia.org/wiki/Bishopston,_Bristol',
};

/** GeoCoordinates (lat, lng) per area for LocalBusiness schema — supports "near me" and service radius. */
const AREA_GEO = {
  bristol: { latitude: 51.4545, longitude: -2.5879 },
  keynsham: { latitude: 51.4139, longitude: -2.4989 },
  bath: { latitude: 51.3811, longitude: -2.3590 },
  'midsomer-norton': { latitude: 51.2856, longitude: -2.4858 },
  radstock: { latitude: 51.2922, longitude: -2.4497 },
  'peasedown-st-john': { latitude: 51.3167, longitude: -2.4242 },
  paulton: { latitude: 51.3042, longitude: -2.5011 },
  saltford: { latitude: 51.4014, longitude: -2.4594 },
  timsbury: { latitude: 51.3264, longitude: -2.4792 },
  westfield: { latitude: 51.3031, longitude: -2.4592 },
  'chew-magna': { latitude: 51.3667, longitude: -2.6167 },
  'temple-cloud': { latitude: 51.3236, longitude: -2.4917 },
  clutton: { latitude: 51.3292, longitude: -2.5431 },
  'odd-down-bath': { latitude: 51.3580, longitude: -2.3730 },
  'combe-down-bath': { latitude: 51.3625, longitude: -2.3490 },
  'widcombe-bath': { latitude: 51.3765, longitude: -2.3510 },
  'larkhall-bath': { latitude: 51.3965, longitude: -2.3435 },
  'twerton-bath': { latitude: 51.3815, longitude: -2.3960 },
  'weston-bath': { latitude: 51.3990, longitude: -2.3885 },
  'oldfield-park-bath': { latitude: 51.3745, longitude: -2.3785 },
  'bear-flat-bath': { latitude: 51.3725, longitude: -2.3615 },
  'bathampton-bath': { latitude: 51.3955, longitude: -2.3244 },
  'bathwick-bath': { latitude: 51.3830, longitude: -2.3480 },
  'southdown-bath': { latitude: 51.3685, longitude: -2.3900 },
  'batheaston-bath': { latitude: 51.4079, longitude: -2.3130 },
  'walcot-bath': { latitude: 51.3880, longitude: -2.3565 },
  'bathford-bath': { latitude: 51.4014, longitude: -2.3011 },
  'bitton-keynsham': { latitude: 51.4397, longitude: -2.4592 },
  'hanham-keynsham': { latitude: 51.4511, longitude: -2.5094 },
  'kingswood': { latitude: 51.4611, longitude: -2.5031 },
  'brislington': { latitude: 51.4336, longitude: -2.5489 },
  'whitchurch-bristol': { latitude: 51.4042, longitude: -2.5783 },
  'knowle-bristol': { latitude: 51.4314, longitude: -2.5711 },
  'stockwood-bristol': { latitude: 51.4094, longitude: -2.5539 },
  'bedminster-bristol': { latitude: 51.4400, longitude: -2.5960 },
  'southville-bristol': { latitude: 51.4430, longitude: -2.6000 },
  'yate-bristol': { latitude: 51.5410, longitude: -2.4120 },
  'clifton-bristol': { latitude: 51.4580, longitude: -2.6230 },
  'horfield-bristol': { latitude: 51.4870, longitude: -2.5930 },
  'filton-bristol': { latitude: 51.5000, longitude: -2.5770 },
  'bradley-stoke-bristol': { latitude: 51.5290, longitude: -2.5550 },
  'long-ashton-bristol': { latitude: 51.4276, longitude: -2.6493 },
  'oldland-keynsham': { latitude: 51.4460, longitude: -2.4700 },
  'longwell-green-keynsham': { latitude: 51.4430, longitude: -2.4970 },
  'warmley-keynsham': { latitude: 51.4580, longitude: -2.4740 },
  'clandon-midsomer-norton': { latitude: 51.2780, longitude: -2.4650 },
  'farrington-gurney-midsomer-norton': { latitude: 51.2960, longitude: -2.5320 },
  'writhlington-radstock': { latitude: 51.2870, longitude: -2.4350 },
  'chilcompton-radstock': { latitude: 51.2650, longitude: -2.5080 },
  'stanton-drew-chew-magna': { latitude: 51.3670, longitude: -2.5780 },
  'chew-stoke-chew-magna': { latitude: 51.3480, longitude: -2.6340 },
  'bishop-sutton-chew-magna': { latitude: 51.3340, longitude: -2.5960 },
  'high-littleton-paulton': { latitude: 51.3220, longitude: -2.5000 },
  'hallatrow-paulton': { latitude: 51.3170, longitude: -2.5100 },
  'city-centre-bath': { latitude: 51.3813, longitude: -2.3590 },
  'lansdown-bath': { latitude: 51.3925, longitude: -2.3660 },
  'city-centre-bristol': { latitude: 51.4545, longitude: -2.5879 },
  'redcliffe-bristol': { latitude: 51.4489, longitude: -2.5891 },
  'redland-bristol': { latitude: 51.4680, longitude: -2.6070 },
  'cotham-bristol': { latitude: 51.4620, longitude: -2.6010 },
  'montpelier-bristol': { latitude: 51.4650, longitude: -2.5900 },
  'easton-bristol': { latitude: 51.4610, longitude: -2.5610 },
  'st-george-bristol': { latitude: 51.4560, longitude: -2.5440 },
  'totterdown-bristol': { latitude: 51.4400, longitude: -2.5750 },
  'bishopston-bristol': { latitude: 51.4760, longitude: -2.5950 },
};

/** Business address for schema: Keynsham-specific (our office). */
const BUSINESS_ADDRESS_KEYNSHAM = {
  '@type': 'PostalAddress',
  streetAddress: '16a Culvers Road',
  addressLocality: 'Keynsham',
  addressRegion: 'Bath and North East Somerset',
  postalCode: 'BS31 2DW',
  addressCountry: 'GB',
};

const AreaDetail = ({ params: staticParams }) => {
  const dynamicParams = useParams();
  const rawSlug = staticParams?.slug ?? dynamicParams?.slug;
  const slug = (rawSlug || '').toLowerCase().replace(/\/$/, '');
  const siteUrl = 'https://seo-kings.co.uk';

  const areasData = {
    'bath': {
      name: 'Bath',
      fullName: 'Bath, Somerset',
      designerHref: '/website-designer-bath',
      county: 'Somerset',
      postcodes: ['BA1', 'BA2'],
      population: '95,000+',
      heroImage: '/images/bath/royal-crescent-bath.webp',
      metaTitle: 'Web Design & SEO in Bath | Trades & Local Businesses',
      metaDescription: 'Web design, local SEO and Google Business Profile for trades and local businesses in Bath. Websites from £250, local SEO from £150/month. Free audit — no obligation.',
      heroHeadline: 'Web Design & SEO in Bath for Trades & Local Businesses',
      heroSubhead: 'Website design from £250. Local SEO from £150/month. GBP optimisation from £100.',
      heroSubtext: 'No obligation. No credit card required.',
      description: 'Bath is a historic city famous for Roman Baths and Georgian architecture. Home to around 95,000–100,000 residents plus over 6 million visitors each year.',
      extendedDescription: 'This creates huge demand for local services — from plumbers fixing tourist rentals to builders on new developments. Customers search Google for "plumber Bath" or "electrician Bath". We get you to the top.',
      introParagraphs: [
        'We help businesses across Bath get found on Google — from the city centre to every neighbourhood. Bath is a historic city with thousands of residents and millions of visitors each year searching for plumbers, electricians, builders, and other trades.',
        [
          'We cover the whole of Bath with 16 dedicated area pages: ',
          { href: '/areas/city-centre-bath', label: 'the city centre' },
          ' and ',
          { href: '/areas/lansdown-bath', label: 'Lansdown & Camden' },
          ' at its heart; ',
          { href: '/areas/walcot-bath', label: 'Walcot' },
          ', ',
          { href: '/areas/larkhall-bath', label: 'Larkhall' },
          ', ',
          { href: '/areas/bathwick-bath', label: 'Bathwick' },
          ' and ',
          { href: '/areas/widcombe-bath', label: 'Widcombe' },
          ' around the centre; ',
          { href: '/areas/bear-flat-bath', label: 'Bear Flat' },
          ', ',
          { href: '/areas/oldfield-park-bath', label: 'Oldfield Park' },
          ', ',
          { href: '/areas/southdown-bath', label: 'Southdown' },
          ', ',
          { href: '/areas/twerton-bath', label: 'Twerton' },
          ', ',
          { href: '/areas/odd-down-bath', label: 'Odd Down' },
          ' and ',
          { href: '/areas/combe-down-bath', label: 'Combe Down' },
          ' across the south; ',
          { href: '/areas/weston-bath', label: 'Weston' },
          ' to the west; and ',
          { href: '/areas/bathampton-bath', label: 'Bathampton' },
          ', ',
          { href: '/areas/batheaston-bath', label: 'Batheaston' },
          ' and ',
          { href: '/areas/bathford-bath', label: 'Bathford' },
          ' in the eastern villages — so you can rank for Bath and your own neighbourhood.',
        ],
      ],
      introImage: { src: '/images/bath/royal-crescent-bath.webp', alt: 'Royal Crescent, Bath' },
      testimonialImage: { src: '/images/keynsham/keynsham-developer.webp', alt: 'Web developer at work' },
      heroStats: [
        { value: '95,000+', label: 'Residents' },
        { value: 'High', label: 'Competition' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      stats: {
        businesses: '5,000+',
        monthlySearches: '450K+',
        competitors: 'High',
        avgCPC: '£2.50',
      },
      ctaButtonText: 'Get Free Audit – No Obligation',
      whyHeading: 'Why Choose SEO Kings in Bath',
      whyIntro: 'Bath has strong local competition and high search volume. If you\'re not on page 1 or in the map pack, tourists and residents go to competitors.',
      localTestimonials: [
        {
          quote: "Brand new business, no website, no social media. SEO Kings built everything from scratch in under a week. I'm already getting calls from people finding me on Google in Bath. Couldn't ask for more.",
          name: 'Ross',
          business: 'Aurelian Massage',
          businessDisplay: 'Aurelian Massage • Massage Therapy, Bath City Centre',
        },
        {
          quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area.",
          name: 'Jay',
          business: 'New Decorating',
          businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES',
        },
      ],
      whyBullets: [
        { title: 'Tourism & short-let demand', text: 'Bath attracts over 6 million visitors a year. A huge slice stays in short-let properties, holiday cottages, and B&Bs — all of which need regular maintenance, emergency repairs, and renovation work. If your website targets this market, you\'re accessing demand your competitors ignore.' },
        { title: 'High competition', text: 'Stand out with targeted local SEO and a Google Business Profile that appears in the map pack when customers search for your trade in BA1 and BA2.' },
        { title: 'Strong ROI', text: 'Organic rankings save money vs paid ads (often £2+ per click for trade searches in Bath). Rank once, get found for months.' },
      ],
      whySectionImage: { src: '/images/keynsham/keynsham-wireframe.webp', alt: 'Website design planning and wireframe for a Bath trade business' },
      servicesSectionImage: { src: '/images/keynsham/keynsham-webdesign-laptop.webp', alt: 'Web design on laptop for a Bath local business' },
      websiteDesignSectionImage: { src: '/images/keynsham/keynsham-coding.webp', alt: 'Website development for Bath tradespeople and local businesses' },
      costSectionImage: { src: '/images/keynsham/keynsham-code-screen.webp', alt: 'Website development screen — web design costs in Bath from £250' },
      whatToLookForSectionImage: { src: '/images/keynsham/keynsham-mockup.webp', alt: 'Website design mockup for a Bath trade business' },
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250, built to rank for your trade and location from day one.', href: '/website-designer-bath' },
        { name: 'Local SEO', description: 'Get into the map pack and onto page 1 for Bath trade searches. From £150/month.', href: '/local-seo/bath' },
        { name: 'SEO Services', description: 'Full SEO — technical, on-page, content and local authority for Bath businesses. From £150/month.', href: '/seo/bath' },
        { name: 'Google Business Profile', description: 'Optimise your GBP so you show up in Maps and the local pack when customers search in BA1 and BA2.', href: '/google-business-profile' },
      ],
      servicesHeading: 'What we do for Bath businesses',
      servicesSubtext: 'Website design, local SEO and Google Business Profile — all focused on getting Bath trades and local businesses found on Google and winning more customers.',
      servicesLinkText: 'View all Bath services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what Bath people and visitors search:',
      industriesHeading: 'Industries We Help',
      industries: ['Trades', 'Tourism & Hospitality', 'Professional Services', 'Retail', 'Health & Wellness', 'Education', 'Construction'],
      landmarksHeading: 'Local Landmarks We Use',
      landmarksIntro: 'We reference real Bath places to boost relevance:',
      landmarks: ['Roman Baths', 'Bath Abbey', 'Royal Crescent', 'Pulteney Bridge', 'Thermae Bath Spa'],
      gallery: [
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/800px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg', alt: 'Roman Baths, Bath', caption: 'Roman Baths' },
        { src: '/images/bath/royal-crescent-bath.webp', alt: 'Royal Crescent, Bath', caption: 'Royal Crescent' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Pulteney_Bridge_from_the_south.jpg/800px-Pulteney_Bridge_from_the_south.jpg', alt: 'Pulteney Bridge, Bath', caption: 'Pulteney Bridge' },
      ],
      testimonial: {
        label: 'Bath Result',
        caseTitle: 'New Decorating, Bath',
        quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.",
        name: 'Jay',
        business: 'New Decorating',
        businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES',
        result: 'Top 8 on Google Maps in a week',
      },
      extraContentSection: {
        heading: 'Why SEO Kings for Bath',
        subheading: 'Web design & SEO that actually gets you found',
        image: { src: '/images/keynsham/keynsham-website-designer-mobile-desktop.webp', alt: 'Mobile and desktop — we build websites that work on every device' },
        paragraphs: [
          "We've been helping trades and local businesses across Bath and North East Somerset get found on Google for years. We don't just build pretty sites — we optimise for the searches that actually bring customers. From day one we target phrases like 'plumber Bath', 'electrician BA1' and your specific trade terms so you show up when local customers and visitors search.",
          "Every site we build is set up for local SEO from the start. We integrate your Google Business Profile, use the right location and service schema, and structure content so Google understands exactly where you serve and what you do. That means you're in the race for the map pack and page one from launch — not months later.",
          <>Whether you need a <Link href="/website-designer-bath" className="text-primary hover:underline">new website</Link>, <Link href="/local-seo/bath" className="text-primary hover:underline">local SEO in Bath</Link>, <Link href="/seo/bath" className="text-primary hover:underline">full SEO services</Link>, or all three — we start with a free audit so you see exactly where you stand. No long contracts, no jargon. Just clear reporting and results you can measure.</>,
        ],
      },
      recentProjects: [
        { sector: 'New Decorating', outcome: 'No site, no GBP → top 8 on Google Maps in a week', snippet: 'Fast website at new-decorating.co.uk and Google Business Profile set up and optimised. Now ranking for painter and decorator searches across Bath, Keynsham, Midsomer Norton and BANES.', caseStudySlug: 'new-decorating' },
        { sector: 'Peachy Cleans', outcome: 'No website → #1 on Google & top of Maps in Midsomer Norton', snippet: 'Professional site at peachycleans.info plus local SEO and GBP. Now fully booked weeks and hiring new staff; we\'re expanding their visibility across Radstock, Bath, Frome and Somerset.', caseStudySlug: 'peachy-cleans' },
        { sector: 'Aspect Builds', outcome: 'No website, just Instagram → 40-page professional site live in 2 weeks', snippet: 'Complete website with 6 service pages, 10 area pages, FAQ, contact form, and Google Business Profile integration for a Bath builder.', caseStudySlug: 'aspect-builds' },
      ],
      howItWorks: [
        { title: 'Free audit', description: 'We check your rankings, site, and Google profile.' },
        { title: 'Custom plan', description: "Tailored for Bath's tourism and local market." },
        { title: 'Results', description: 'Monthly reports. Watch leads grow.' },
      ],
      localKeywords: [
        'website design Bath',
        'website designer Bath',
        'web design Bath',
        'plumber Bath',
        'electrician Bath',
        'builder Bath',
        'roofer Bath',
        'bathroom fitter Bath',
        'kitchen fitter Bath',
        'handyman Bath',
        'gardener Bath',
        'cleaner Bath',
        'locksmith Bath',
        'emergency plumber Bath',
        'boiler repair Bath',
      ],
      ctaHeadline: 'Ready to Dominate Bath Search Results?',
      ctaSubhead: 'Join Bath businesses already on page one.',
      ctaPrimaryText: 'Get a Free Audit',
      ctaSecondaryText: 'Free Consultation – Get Started',
      ctaImage: { src: '/images/keynsham/keynsham-coding.webp', alt: 'Website design and development — get found on Google in Bath' },
      ctaBackgroundImage: { src: '/images/keynsham/keynsham-cta-background-code.webp', alt: 'Website design and local SEO in Bath — get found on Google' },
      costSection: {
        heading: 'What it costs to get found in Bath',
        paragraphs: [
          'Website design starts at £250 for a fast, mobile-friendly site built for local search — GBP optimisation from £100. Local SEO starts from £150/month and covers GBP optimisation, on-page fixes, citations and link building. Most Bath clients start with a website and add SEO once it\'s live. Free audit to work out what you actually need and get a clear quote — no obligation.',
        ],
      },
      whatToLookForSection: {
        heading: 'What to look for in a Bath digital partner',
        bullets: [
          { title: 'Track record with local businesses', text: 'Look for real results with trades and local businesses in Bath and North East Somerset — not just a portfolio of pretty sites.' },
          { title: 'Local knowledge', text: 'A good Bath partner knows the searches people use ("plumber Bath", "electrician BA1") and how competitive each one is.' },
          { title: 'SEO and GBP built in from day one', text: 'Don\'t pay for a site and then pay again to make it rank. GBP optimisation is a £100 add-on; local SEO from £150/month. We\'re clear about costs upfront.' },
          { title: 'Clear pricing and no lock-in', text: 'You should know exactly what you\'re getting and what it costs. We\'re upfront about everything — no long contracts, no surprises.' },
          { title: 'Monthly reporting', text: 'You should be able to see what\'s working. We send monthly reports covering rankings, traffic and leads — in plain English.' },
        ],
      },
      nearbyHeading: 'Nearby Areas We Serve',
      nearbyAreas: ['keynsham', 'midsomer-norton', 'radstock', 'peasedown-st-john', 'paulton', 'saltford', 'timsbury'],
      websiteDesignBlogSlug: 'website-design-bath',
      subAreaSlugs: ['city-centre-bath', 'lansdown-bath', 'odd-down-bath', 'combe-down-bath', 'widcombe-bath', 'larkhall-bath', 'twerton-bath', 'weston-bath', 'oldfield-park-bath', 'bear-flat-bath', 'bathampton-bath', 'bathwick-bath', 'southdown-bath', 'batheaston-bath', 'walcot-bath', 'bathford-bath'],
      subAreasHeading: 'Bath neighbourhoods we cover',
      faqs: [
        {
          question: 'What services do you offer in Bath?',
          answer: 'Three core services: website design (from £250), local SEO (from £150/month), and Google Business Profile optimisation. Most Bath clients start with a website and add SEO once it\'s live. We also offer review management. Free audit to work out what you actually need.',
        },
        {
          question: 'Do I need a website AND local SEO in Bath?',
          answer: 'Usually yes — especially in Bath where competition is high. A website gets you a presence; local SEO gets you found when people search for your trade in BA1 or BA2. Many clients start with a website from us and add SEO within a few months once they see the results.',
        },
        {
          question: 'How do I get into the Google Map Pack in Bath?',
          answer: 'The map pack (the three businesses shown at the top of Google Maps results) is driven by your Google Business Profile, local relevance, and reviews. We optimise your GBP, build local citations, and support your review strategy — all included in our local SEO packages from £150/month.',
        },
        {
          question: 'How long before I see results from SEO in Bath?',
          answer: 'Google Business Profile improvements often show within 4–8 weeks. Organic rankings for competitive Bath keywords ("plumber Bath", "electrician BA1") typically take 3–6 months. We send monthly reports so you always know exactly where you stand.',
        },
        {
          question: 'How much does it cost to get found on Google in Bath?',
          answer: 'Website design starts at £250. Local SEO from £150/month. GBP optimisation available as a £100 add-on. Bath is competitive — the investment pays back quickly when you\'re getting calls instead of losing them to page-one competitors. Free audit, no obligation.',
        },
      ],
    },
    'keynsham': {
      name: 'Keynsham',
      fullName: 'Keynsham, Bristol',
      designerHref: '/website-designer-keynsham',
      county: 'Bristol',
      postcodes: ['BS31'],
      websiteDesignBlogSlug: 'website-design-keynsham',
      population: '16,000+',
      heroImage: '/images/keynsham/keynsham-hero.webp',
      metaTitle: 'Web Design & SEO in Keynsham BS31 | Trades & Local Businesses',
      metaDescription: 'Web design, local SEO and Google Business Profile for trades and local businesses in Keynsham BS31. Websites from £250, local SEO from £150/month. Free audit — no obligation.',
      heroHeadline: 'Web Design & SEO in Keynsham for Trades & Local Businesses',
      heroSubhead: 'Website design from £250. Local SEO from £150/month. GBP optimisation from £100.',
      description: 'Website designer in Keynsham — we get you found on Google. We offer web design from £250 and local SEO so trades and businesses in Keynsham BS31 show up when people search "plumber Keynsham", "electrician BS31" and more. Whether you need a professional website designer in Keynsham or help with your Google Business Profile, we help you get more calls and more jobs.',
      extendedDescription: 'Trusted by plumbers, electricians, builders, roofers, and more in Keynsham and Bath and North East Somerset. We also cover nearby villages and neighbourhoods including Longwell Green, Warmley, Pensford, Compton Dando, Corston, Kelston, Whitchurch, and the wider BS31 and BS30 area.',
      heroStats: [
        { value: '£250', label: 'Starting Price' },
        { value: '5★', label: 'Google Rating' },
        { value: '5★', label: 'Google Rating' },
        { value: '1 week', label: 'Average Time to Launch' },
      ],
      heroSubtext: 'No obligation. No credit card required.',
      testimonialImage: { src: '/images/keynsham/keynsham-developer.webp', alt: 'Web developer at work' },
      introParagraphs: [
        'Looking for a website designer in Keynsham? Keynsham is a busy market town with thousands of local homes and businesses. Customers search Google for plumbers, electricians, builders, and other trades right here in BS31. Most trades miss out because they don\'t show up on page 1 or in the map pack. We fix that.',
        'We use local SEO and web design Keynsham from £250 to get your business found first — more calls, more jobs, more money in your pocket. See our website design and local SEO pages for details, or get a free audit.',
        'Keynsham is a thriving market town with strong local business density. From the historic Cadbury factory site and the High Street to the surrounding postcodes (BS31, BS30), there\'s consistent demand for local trades and services. When customers search "website design Keynsham" or "plumber Keynsham", they\'re looking for someone local who understands the area. That\'s us.',
      ],
      introImage: { src: '/images/keynsham/keynsham-st-john-church.webp', alt: 'St John the Baptist Church, Keynsham' },
      whyHeading: 'Why Choose SEO Kings in Keynsham',
      whyIntro: "We know Keynsham. We've helped local trades here get real results.",
      whyBullets: [
        { title: 'Proven in Keynsham', text: 'We\'ve helped local trades in BS31 get found on Google — from map pack appearances to page one rankings for trade searches.' },
        { title: 'Local focus', text: 'We target searches like "plumber Keynsham", "electrician BS31", "emergency builder Keynsham".' },
        { title: 'No fluff', text: 'Plain English. No long contracts. Monthly reports show your progress.' },
        { title: 'Full service', text: 'Keyword research, on-page fixes, local links, Google Business Profile, fast website if needed.' },
      ],
      servicesHeading: 'What we do for Keynsham businesses',
      servicesSubtext: 'Website design, local SEO and Google Business Profile — all focused on getting Keynsham trades and local businesses found on Google and winning more customers.',
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Keynsham.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack. More views, calls, and wins.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Keynsham and trade keywords. Keyword research, on-page, links.' },
        { name: 'Review Management', description: 'Add-on: build trust with 5★ reviews. Monthly reporting.' },
      ],
      testimonial: {
        label: 'Keynsham & BANES Result',
        caseTitle: 'New Decorating, Bath & BANES',
        resultSummary: 'No website → Top 8 on Google Maps',
        result: 'Within a week',
        timeframe: '1 week',
        quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.",
        name: 'Jay',
        business: 'New Decorating',
        businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES',
      },
      howItWorks: [
        { title: 'Free Audit', description: 'We check your Google rankings, site, and Google Business Profile. We spot what\'s holding you back in Keynsham searches.' },
        { title: 'Custom Strategy', description: 'We build a plan for your trade and your area. No cookie-cutter stuff.' },
        { title: 'Watch the Leads Roll In', description: 'We do the work. You get monthly updates and more customers.' },
      ],
      industries: ['Retail', 'Professional Services', 'Trades', 'Food & Drink', 'Healthcare'],
      landmarks: ['Keynsham High Street', 'Keynsham Memorial Park', 'Cadbury Factory Site', 'St John the Baptist Church', 'Longwell Green', 'Warmley', 'Pensford', 'Compton Dando'],
      gallery: [
        { src: '/images/keynsham/keynsham-health-centre.webp', alt: 'Keynsham Health Centre', caption: 'Keynsham Health Centre' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/63/Keynsham_railway_station_-_geograph.org.uk_-_363741.jpg/800px-Keynsham_railway_station_-_geograph.org.uk_-_363741.jpg', alt: 'Keynsham railway station', caption: 'Keynsham railway station' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Keynsham_Abby_ruins.jpg/800px-Keynsham_Abby_ruins.jpg', alt: 'Keynsham Abbey ruins', caption: 'Keynsham Abbey ruins' },
      ],
      whySectionImage: { src: '/images/keynsham/keynsham-wireframe.webp', alt: 'Website design wireframe and planning' },
      servicesSectionImage: { src: '/images/keynsham/keynsham-webdesign-laptop.webp', alt: 'Web design on laptop' },
      websiteDesignSectionImage: { src: '/images/keynsham/keynsham-coding.webp', alt: 'Website development and coding' },
      costSectionImage: { src: '/images/keynsham/keynsham-code-screen.webp', alt: 'Web development' },
      whatToLookForSectionImage: { src: '/images/keynsham/keynsham-mockup.webp', alt: 'Website design mockup' },
      // E-E-A-T: long-form "Why us" and process for Keynsham
      extraContentSection: {
        heading: 'Why SEO Kings for Keynsham',
        subheading: 'Our approach to website design in Keynsham',
        image: { src: '/images/keynsham/keynsham-website-designer-mobile-desktop.webp', alt: 'Mobile and desktop setup — we build websites that work on every device' },
        paragraphs: [
          "We've been helping businesses across Bath, Keynsham and North East Somerset get found on Google for years. When you choose us as your website designer in Keynsham, we don't just build a pretty site — we optimise for the searches that matter. From day one we target phrases like 'website designer Keynsham', 'web design Keynsham BS31' and your trade terms so you show up when local customers search.",
          "Every site we build is set up for local SEO. We integrate your Google Business Profile from the start, use the right location and service schema, and structure content so Google understands you serve Keynsham and the surrounding area. That means you're in the race for the map pack and page one from launch, not months later.",
          <>Our process is straightforward: we start with a free audit so you see where you stand, then we design and build a mobile-friendly site that fits your business. Whether you need a new site or a <Link href="/website-designer-keynsham" className="text-primary hover:underline">website redesign in Keynsham</Link>, we're based at 16a Culvers Road, BS31 2DW and work with trades and small businesses across BS31, Bath, Bristol and Somerset. No long contracts, no jargon — just clear reporting and results you can measure.</>,
        ],
      },
      recentProjects: [
        { sector: 'Peachy Cleans', outcome: 'No website → #1 on Google & top of Maps in Midsomer Norton', snippet: 'Professional site at peachycleans.info plus local SEO and GBP. Now fully booked weeks and hiring new staff; we\'re expanding their visibility across Radstock, Bath, Frome, Paulton and Somerset.', caseStudySlug: 'peachy-cleans' },
        { sector: 'New Decorating', outcome: 'No site, no GBP → top 8 on Google Maps in a week', snippet: 'Fast website at new-decorating.co.uk and Google Business Profile set up and optimised. Now ranking for painter and decorator searches across Bath, Keynsham, Midsomer Norton and BANES.', caseStudySlug: 'new-decorating' },
        { sector: 'Aspect Builds', outcome: 'No website, just Instagram → 40-page professional site live in 2 weeks', snippet: 'Complete website with 6 service pages, 10 area pages, FAQ, contact form, and Google Business Profile integration for a Bath builder.', caseStudySlug: 'aspect-builds' },
      ],
      stats: {
        businesses: '800+',
        monthlySearches: '85K+',
        competitors: 'Medium',
        avgCPC: '£1.80',
      },
      localKeywords: [
        'website designer in Keynsham',
        'website design Keynsham',
        'web designer Keynsham',
        'web design Keynsham',
        'web design Keynsham BS31',
        'website design Keynsham BS31',
        'plumber Keynsham',
        'electrician Keynsham',
        'electrician BS31',
        'builder Keynsham',
        'emergency builder Keynsham',
        'locksmith Keynsham',
        'cleaner Keynsham',
        'gardener Keynsham',
        'decorator Keynsham',
        'roofer Keynsham',
      ],
      ctaHeadline: 'Ready to Get More Customers in Keynsham?',
      ctaSubhead: "Don't let competitors take the top spots.",
      ctaPrimaryText: 'Get Your Free Audit Today',
      ctaSecondaryText: '07702 264 921',
      ctaDisclaimer: 'No obligation. No credit card needed. Just real help for your Keynsham business.',
      ctaImage: { src: '/images/keynsham/keynsham-coding.webp', alt: 'Website design and development — get found on Google in Keynsham' },
      ctaBackgroundImage: { src: '/images/keynsham/keynsham-cta-background-code.webp', alt: 'Website design and local SEO in Keynsham — get found on Google' },
      nearbyAreas: ['bath', 'saltford', 'paulton', 'midsomer-norton', 'radstock'],
      subAreaSlugs: ['bitton-keynsham', 'hanham-keynsham', 'oldland-keynsham', 'longwell-green-keynsham', 'warmley-keynsham'],
      subAreasHeading: 'Areas near Keynsham we cover',
      costSection: {
        heading: 'Website design costs in Keynsham',
        paragraphs: [
          'Website design in Keynsham starts at £250. Each additional page is £50 — a 3-page site is £350, a 5-page site is £450, a 10-page site is £700. Add GBP optimisation for £100. We\'re clear about what\'s included so Keynsham businesses can plan. See our web design packages for full details.',
        ],
      },
      whatToLookForSection: {
        heading: 'What to look for in a Keynsham web designer',
        bullets: [
          { title: 'Portfolio and sector experience', text: 'Look for work with trades and local businesses like yours — plumbers, electricians, builders in Keynsham, Bath or Somerset.' },
          { title: 'Local knowledge', text: 'A good Keynsham web designer knows the searches people use ("plumber Keynsham", "website design Keynsham") and how to optimise for them.' },
          { title: 'GBP optimisation — £100 add-on', text: 'Your site should be built with local search in mind from day one. Add GBP optimisation for £100 — we set up your categories, keywords, description and service area.' },
          { title: 'Clear process and timeline', text: 'You should get a clear timeline and know what you\'re getting at each stage. We outline everything up front so there are no surprises.' },
          { title: 'No long contracts', text: 'Plain English, monthly reports, and no lock-in. We want you on the map and getting more calls.' },
        ],
      },
      faqs: [
        {
          question: 'What services do you offer in Keynsham?',
          answer: 'Three core services: website design (from £250), local SEO (from £150/month), and Google Business Profile optimisation. Most Keynsham clients start with a website and add SEO once it\'s live. Free audit to work out what you actually need.',
        },
        {
          question: 'Do I need a website AND local SEO in Keynsham?',
          answer: 'Usually yes. A website gives you a presence; local SEO gets you found when people search for your trade in BS31. Keynsham has less competition than Bath or Bristol — which means the right strategy can get you visible quickly. Many clients add SEO within a few months of launching their site.',
        },
        {
          question: 'How do I get into the Google Map Pack in Keynsham?',
          answer: 'The map pack is driven by your Google Business Profile, proximity, and reviews. We optimise your GBP, build local citations, and support your review strategy — all included in our local SEO packages from £150/month.',
        },
        {
          question: 'Can you help me rank in Bath and Bristol as well as Keynsham?',
          answer: 'Yes. Many Keynsham businesses serve the wider BS31, Bath and Bristol area. We can structure your site and GBP to target multiple locations — so you\'re not just found in Keynsham but across the areas you actually work in.',
        },
        {
          question: 'How much does it cost to get found on Google in Keynsham?',
          answer: 'Website design starts at £250. Local SEO from £150/month. GBP optimisation available as a £100 add-on. Keynsham is less competitive than Bath — your money goes further here. Free audit, no obligation.',
        },
      ],
    },
    'midsomer-norton': {
      name: 'Midsomer Norton',
      fullName: 'Midsomer Norton, Somerset',
      designerHref: '/website-designer-midsomer-norton',
      county: 'Somerset',
      postcodes: ['BA3'],
      population: '11,000+',
      heroImage: '/images/areas/midsomer-norton.webp',
      metaTitle: 'Website Designer in Midsomer Norton | Web Design from £250',
      metaDescription: 'Professional website designer in Midsomer Norton BA3. Mobile-friendly web design from £250 with built-in local SEO & Google Business Profile. Free audit for Somer Valley, Bath & Somerset.',
      heroHeadline: 'Website Designer in Midsomer Norton: Web Design & SEO from £250',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Website designer in Midsomer Norton — we get you found on Google. We offer web design from £250 and local SEO so trades and businesses in Midsomer Norton BA3 show up when people search "plumber Midsomer Norton", "electrician BA3", "cleaner Midsomer Norton" and more. Whether you need a professional website designer in Midsomer Norton or help with your Google Business Profile, we help you get more calls and more jobs.',
      extendedDescription: 'Trusted by plumbers, electricians, builders, cleaners, and more in Midsomer Norton and the Somer Valley. We also cover Radstock, Paulton, Peasedown St John, Westfield, and the wider Bath and North East Somerset area.',
      heroStats: [
        { value: '£250', label: 'Starting Price' },
        { value: '5★', label: 'Google Rating' },
        { value: '5★', label: 'Google Rating' },
        { value: 'Fully booked', label: 'Peachy Cleans result' },
      ],
      heroSubtext: 'No obligation. No credit card required.',
      testimonialImage: { src: '/images/keynsham/keynsham-developer.webp', alt: 'Web developer at work' },
      introParagraphs: [
        'Looking for a website designer in Midsomer Norton? Midsomer Norton is a busy market town in the Somer Valley with thousands of local homes and businesses. Customers search Google for plumbers, electricians, builders, cleaners and other trades right here in BA3. Most trades miss out because they don\'t show up on page 1 or in the map pack. We fix that.',
        'We use local SEO and web design Midsomer Norton from £250 to get your business found first — more calls, more jobs. See our website design and local SEO pages for details, or get a free audit.',
      ],
      introImage: { src: '/images/midsomer-norton/midsomer-norton-website-designer-mobile-desktop.webp', alt: 'Mobile and desktop — we build websites that work on every device' },
      whyHeading: 'Why Choose SEO Kings in Midsomer Norton',
      whyIntro: "We know Midsomer Norton. We've helped local trades here get real results — including Peachy Cleans, now #1 on Google in the Somer Valley.",
      whyBullets: [
        { title: 'Proven in Midsomer Norton', text: 'Peachy Cleans went from no website to #1 on Google and top of Maps. Fully booked weeks, hiring new staff.' },
        { title: 'Local focus', text: 'We target searches like "plumber Midsomer Norton", "electrician BA3", "cleaner Midsomer Norton", "web design Midsomer Norton".' },
        { title: 'No fluff', text: 'Plain English. No long contracts. Monthly reports show your progress.' },
        { title: 'Full service', text: 'Keyword research, on-page fixes, local links, Google Business Profile, fast website if needed.' },
      ],
      servicesHeading: 'Website design in Midsomer Norton — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Midsomer Norton.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack. More views, calls, and wins.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Midsomer Norton and trade keywords. Keyword research, on-page, links.' },
        { name: 'Review Management', description: 'Add-on: build trust with 5★ reviews. Monthly reporting.' },
      ],
      testimonial: {
        label: 'Midsomer Norton Result',
        caseTitle: 'Peachy Cleans, Midsomer Norton',
        resultSummary: 'No website → #1 on Google & top of Maps',
        result: 'Fully booked, hiring',
        timeframe: 'Ongoing',
        quote: "SEO Kings built our website and got us visible on Google. We're now having fully booked weeks and have had to hire new staff to keep up. Professional from start to finish.",
        name: 'Peachy Cleans',
        business: 'Peachy Cleans',
        businessDisplay: 'Professional Cleaning Services, Midsomer Norton',
      },
      howItWorks: [
        { title: 'Free Audit', description: 'We check your Google rankings, site, and Google Business Profile. We spot what\'s holding you back in Midsomer Norton searches.' },
        { title: 'Custom Strategy', description: 'We build a plan for your trade and your area. No cookie-cutter stuff.' },
        { title: 'Watch the Leads Roll In', description: 'We do the work. You get monthly updates and more customers.' },
      ],
      industries: ['Trades', 'Retail', 'Professional Services', 'Hospitality', 'Healthcare'],
      landmarks: ['The Island', 'Midsomer Norton High Street', 'Welton Manor', 'Somer Valley FM', 'Somerset & Dorset Railway Heritage Trust'],
      whySectionImage: { src: '/images/keynsham/keynsham-wireframe.webp', alt: 'Website design wireframe and planning' },
      servicesSectionImage: { src: '/images/keynsham/keynsham-webdesign-laptop.webp', alt: 'Web design on laptop' },
      websiteDesignSectionImage: { src: '/images/keynsham/keynsham-coding.webp', alt: 'Website development and coding' },
      costSectionImage: { src: '/images/keynsham/keynsham-code-screen.webp', alt: 'Web development' },
      whatToLookForSectionImage: { src: '/images/keynsham/keynsham-mockup.webp', alt: 'Website design mockup' },
      extraContentSection: {
        heading: 'Why SEO Kings for Midsomer Norton',
        subheading: 'Our approach to website design in Midsomer Norton',
        image: { src: '/images/midsomer-norton/midsomer-norton-website-designer-mobile-desktop.webp', alt: 'Mobile and desktop setup — we build websites that work on every device' },
        paragraphs: [
          "We've been helping businesses across Midsomer Norton, Radstock and the Somer Valley get found on Google for years. When you choose us as your website designer in Midsomer Norton, we don't just build a pretty site — we optimise for the searches that matter. From day one we target phrases like 'website designer Midsomer Norton', 'web design Midsomer Norton BA3' and your trade terms so you show up when local customers search.",
          "Every site we build is set up for local SEO. We integrate your Google Business Profile from the start, use the right location and service schema, and structure content so Google understands you serve Midsomer Norton and the Somer Valley. That means you're in the race for the map pack and page one from launch.",
          "Our process is straightforward: we start with a free audit so you see where you stand, then we design and build a mobile-friendly site that fits your business. We work with trades and small businesses across BA3, Bath, Radstock, Paulton and Somerset. No long contracts, no jargon — just clear reporting and results you can measure.",
        ],
      },
      recentProjects: [
        { sector: 'Peachy Cleans', outcome: 'No website → #1 on Google & top of Maps in Midsomer Norton', snippet: 'Professional site at peachycleans.info plus local SEO and GBP. Now fully booked weeks and hiring new staff; we\'re expanding their visibility across Radstock, Bath, Frome and Somerset.', caseStudySlug: 'peachy-cleans' },
        { sector: 'New Decorating', outcome: 'No site, no GBP → top 8 on Google Maps in a week', snippet: 'Fast website at new-decorating.co.uk and Google Business Profile set up and optimised. Now ranking for painter and decorator searches across Bath, Keynsham, Midsomer Norton and BANES.', caseStudySlug: 'new-decorating' },
        { sector: 'Aspect Builds', outcome: 'No website, just Instagram → 40-page professional site live in 2 weeks', snippet: 'Complete website with 6 service pages, 10 area pages, FAQ, contact form, and Google Business Profile integration for a Bath builder.', caseStudySlug: 'aspect-builds' },
      ],
      stats: {
        businesses: '500+',
        monthlySearches: '45K+',
        competitors: 'Low-Medium',
        avgCPC: '£1.50',
      },
      localKeywords: [
        'website designer in Midsomer Norton',
        'website design Midsomer Norton',
        'web designer Midsomer Norton',
        'web design Midsomer Norton',
        'web design Midsomer Norton BA3',
        'website design Midsomer Norton BA3',
        'plumber Midsomer Norton',
        'electrician Midsomer Norton',
        'builder Midsomer Norton',
        'cleaner Midsomer Norton',
        'roofer Midsomer Norton',
        'decorator Midsomer Norton',
        'handyman Midsomer Norton',
        'emergency plumber Midsomer Norton',
        'boiler repair Midsomer Norton',
      ],
      ctaHeadline: 'Ready to Get More Customers in Midsomer Norton?',
      ctaSubhead: "Don't let competitors take the top spots.",
      ctaPrimaryText: 'Get Your Free Audit Today',
      ctaSecondaryText: '07702 264 921',
      ctaDisclaimer: 'No obligation. No credit card needed. Just real help for your Midsomer Norton business.',
      ctaImage: { src: '/images/keynsham/keynsham-coding.webp', alt: 'Website design and development — get found on Google in Midsomer Norton' },
      ctaBackgroundImage: { src: '/images/midsomer-norton/midsomer-norton-cta-background-code.webp', alt: 'Website design and local SEO in Midsomer Norton — get found on Google' },
      costSection: {
        heading: 'Website design costs in Midsomer Norton',
        paragraphs: [
          'Website design in Midsomer Norton starts at £250. Each additional page is £50 — a 3-page site is £350, a 5-page site is £450, a 10-page site is £700. Add GBP optimisation for £100. We\'re clear about what\'s included so Midsomer Norton businesses can plan. See our web design packages for full details.',
        ],
      },
      whatToLookFor: {
        heading: 'What to look for in a Midsomer Norton web designer',
        bullets: [
          { title: 'Portfolio and sector experience', text: 'Look for work with trades and local businesses like yours — plumbers, electricians, cleaners in Midsomer Norton, Radstock or the Somer Valley.' },
          { title: 'Local knowledge', text: 'A good Midsomer Norton web designer knows the searches people use ("plumber Midsomer Norton", "website design Midsomer Norton") and how to optimise for them.' },
        ],
      },
      faqs: [
        { question: 'How much does website design cost in Midsomer Norton?', answer: 'Website design in Midsomer Norton starts at £250. Each additional page is £50 — a 3-page site is £350, a 5-page site is £450. GBP optimisation available as a £100 add-on. See our web design packages for full details.' },
        { question: 'Do you build websites optimised for local Midsomer Norton searches?', answer: 'Yes. Every site we build is optimised for local searches like "website designer Midsomer Norton", "web design Midsomer Norton BA3" and your trade keywords. We integrate Google Business Profile from day one so you get found on Google and in the map pack.' },
        { question: 'Is SEO worth it for a small Midsomer Norton business?', answer: 'Yes. Smaller towns like Midsomer Norton have lower competition. A good local setup can quickly put you at the top and bring steady jobs.' },
        { question: 'How do you target Midsomer Norton specifically?', answer: 'We use local keywords, optimise your Google Business Profile, build citations in Bath and North East Somerset directories, and earn links from nearby sites.' },
        { question: 'Can I target Midsomer Norton and nearby towns like Radstock?', answer: 'Yes. Many trades serve both. We optimise for multiple locations to cover the whole Somer Valley.' },
        { question: "What's included in your Midsomer Norton SEO package?", answer: 'Keyword research, on-page fixes, Google Business Profile management, local citations, review help, monthly reports, and ongoing tweaks.' },
      ],
      nearbyAreas: ['radstock', 'peasedown-st-john', 'bath', 'keynsham', 'paulton'],
      subAreaSlugs: ['clandon-midsomer-norton', 'farrington-gurney-midsomer-norton'],
      websiteDesignBlogSlug: 'website-design-midsomer-norton-peachy-cleans',
      subAreasHeading: 'Areas near Midsomer Norton we cover',
    },
    'radstock': {
      name: 'Radstock',
      fullName: 'Radstock, Somerset',
      designerHref: '/website-designer-radstock',
      county: 'Somerset',
      postcodes: ['BA3'],
      population: '6,000+',
      heroImage: '/images/radstock/st-nicholas-church-radstock.webp',
      metaTitle: 'Website Designer in Radstock | Web Design from £250 – SEO Kings',
      metaDescription: 'Professional website designer in Radstock BA3. Mobile-friendly web design from £250 with built-in local SEO & Google Business Profile. Free audit for Somer Valley, Bath & Somerset.',
      heroHeadline: 'Website Designer in Radstock: Web Design & SEO from £250',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      heroSubtext: 'No obligation. No credit card required.',
      description: 'Website designer in Radstock — we get you found on Google. We offer web design from £250 and local SEO so trades and businesses in Radstock BA3 show up when people search "plumber Radstock", "electrician BA3", "builder Radstock" and more. Whether you need a professional website designer in Radstock or help with your Google Business Profile, we help you get more calls and more jobs.',
      extendedDescription: 'Trusted by plumbers, electricians, builders, roofers, and more in Radstock and the Somer Valley. We also cover Midsomer Norton, Paulton, Peasedown St John, Westfield, Writhlington, Chilcompton, and the wider Bath and North East Somerset area.',
      heroStats: [
        { value: '£250', label: 'Starting Price' },
        { value: '5★', label: 'Google Rating' },
        { value: '5★', label: 'Google Rating' },
        { value: '+180%', label: 'Porter Electrical leads' },
      ],
      testimonialImage: { src: '/images/keynsham/keynsham-developer.webp', alt: 'Web developer at work' },
      introParagraphs: [
        'Looking for a website designer in Radstock? Radstock is a former mining town with a strong community and growing local economy. Customers search Google for plumbers, electricians, builders, and other trades right here in BA3. Most trades miss out because they don\'t show up on page 1 or in the map pack. We fix that.',
        'We use local SEO and web design Radstock from £250 to get your business found first — more calls, more jobs. See our website design and local SEO pages for details, or get a free audit.',
      ],
      introImage: { src: '/images/radstock/st-nicholas-church-radstock.webp', alt: 'St Nicholas Church, Radstock — local landmark in BA3' },
      whyHeading: 'Why Choose SEO Kings in Radstock',
      whyIntro: "We know Radstock and the Somer Valley. We've helped local trades here get real results.",
      whyBullets: [
        { title: 'Proven in the Somer Valley', text: 'Peachy Cleans (Midsomer Norton) went from no website to #1 on Google. Same approach for Radstock.' },
        { title: 'Local focus', text: 'We target searches like "plumber Radstock", "electrician BA3", "builder Radstock", "website design Radstock".' },
        { title: 'No fluff', text: 'Plain English. No long contracts. Monthly reports show your progress.' },
        { title: 'Full service', text: 'Keyword research, on-page fixes, local links, Google Business Profile, fast website if needed.' },
      ],
      servicesHeading: 'Website design in Radstock — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Radstock.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack. More views, calls, and wins.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Radstock and trade keywords. Keyword research, on-page, links.' },
        { name: 'Review Management', description: 'Add-on: build trust with 5★ reviews. Monthly reporting.' },
      ],
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Radstock and the Somer Valley search:',
      industries: ['Trades', 'Retail', 'Professional Services', 'Food & Drink', 'Healthcare'],
      landmarks: ['Radstock Museum', 'Victoria Hall', 'St Nicholas Church', 'Radstock Co-operative Society', 'The Island', 'Writhlington', 'Chilcompton'],
      gallery: [
        { src: '/images/areas/radstock.webp', alt: 'St Nicholas Church, Radstock', caption: 'St Nicholas Church, Radstock' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Radstock_Museum_-_geograph.org.uk_-_67839.jpg/800px-Radstock_Museum_-_geograph.org.uk_-_67839.jpg', alt: 'Radstock Museum', caption: 'Radstock Museum' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Radstock_railway_station_-_geograph.org.uk_-_67842.jpg/800px-Radstock_railway_station_-_geograph.org.uk_-_67842.jpg', alt: 'Radstock railway station', caption: 'Radstock railway station' },
      ],
      whySectionImage: { src: '/images/keynsham/keynsham-wireframe.webp', alt: 'Website design wireframe and planning' },
      servicesSectionImage: { src: '/images/keynsham/keynsham-webdesign-laptop.webp', alt: 'Web design on laptop' },
      websiteDesignSectionImage: { src: '/images/keynsham/keynsham-coding.webp', alt: 'Website development and coding' },
      costSectionImage: { src: '/images/keynsham/keynsham-code-screen.webp', alt: 'Web development' },
      whatToLookForSectionImage: { src: '/images/keynsham/keynsham-mockup.webp', alt: 'Website design mockup' },
      testimonial: {
        label: 'Radstock & Somer Valley Result',
        caseTitle: 'Porter Electrical, Radstock',
        resultSummary: '+180% leads',
        result: '+180% leads',
        timeframe: 'Ongoing',
        quote: "Being a small town, I didn't think SEO would work for us. I was wrong - we're now the go-to electrician in Radstock.",
        name: 'James Porter',
        business: 'Porter Electrical',
        businessDisplay: 'Porter Electrical • Electrician, Radstock',
      },
      howItWorks: [
        { title: 'Free Audit', description: 'We check your Google rankings, site, and Google Business Profile. We spot what\'s holding you back in Radstock searches.' },
        { title: 'Custom Strategy', description: 'We build a plan for your trade and your area. No cookie-cutter stuff.' },
        { title: 'Watch the Leads Roll In', description: 'We do the work. You get monthly updates and more customers.' },
      ],
      extraContentSection: {
        heading: 'Why SEO Kings for Radstock',
        subheading: 'Our approach to website design in Radstock',
        image: { src: '/images/midsomer-norton/midsomer-norton-website-designer-mobile-desktop.webp', alt: 'Mobile and desktop — we build websites that work on every device' },
        paragraphs: [
          "We've been helping businesses across Radstock, Midsomer Norton and the Somer Valley get found on Google for years. When you choose us as your website designer in Radstock, we don't just build a pretty site — we optimise for the searches that matter. From day one we target phrases like 'website designer Radstock', 'web design Radstock BA3' and your trade terms so you show up when local customers search.",
          "Every site we build is set up for local SEO. We integrate your Google Business Profile from the start, use the right location and service schema, and structure content so Google understands you serve Radstock and the Somer Valley. That means you're in the race for the map pack and page one from launch, not months later.",
          "Our process is straightforward: we start with a free audit so you see where you stand, then we design and build a mobile-friendly site that fits your business. We work with trades and small businesses across BA3, Midsomer Norton, Bath, Paulton and Somerset. No long contracts, no jargon — just clear reporting and results you can measure.",
        ],
      },
      recentProjects: [
        { sector: 'Peachy Cleans', outcome: 'No website → #1 on Google & top of Maps in Midsomer Norton', snippet: 'Professional site at peachycleans.info plus local SEO and GBP. Now fully booked weeks; we\'re expanding their visibility across Radstock, Bath, Frome and Somerset.', caseStudySlug: 'peachy-cleans' },
        { sector: 'New Decorating', outcome: 'No site, no GBP → top 8 on Google Maps in a week', snippet: 'Fast website and Google Business Profile set up and optimised. Now ranking for painter and decorator searches across Bath, Keynsham, Midsomer Norton and BANES.', caseStudySlug: 'new-decorating' },
        { sector: 'Aspect Builds', outcome: 'No website, just Instagram → 40-page professional site live in 2 weeks', snippet: 'Complete website with 6 service pages, 10 area pages, FAQ, contact form, and Google Business Profile integration for a Bath builder.', caseStudySlug: 'aspect-builds' },
      ],
      stats: {
        businesses: '250+',
        monthlySearches: '25K+',
        competitors: 'Low',
        avgCPC: '£1.20',
      },
      localKeywords: [
        'website designer Radstock',
        'website design Radstock',
        'web designer Radstock',
        'web design Radstock',
        'web design Radstock BA3',
        'plumber Radstock',
        'electrician Radstock',
        'electrician BA3',
        'builder Radstock',
        'handyman Radstock',
        'garage Radstock',
        'decorator Radstock',
        'roofer Radstock',
        'cleaner Radstock',
      ],
      ctaHeadline: 'Ready to Get More Customers in Radstock?',
      ctaSubhead: "Don't let competitors take the top spots in the Somer Valley.",
      ctaPrimaryText: 'Get Your Free Audit Today',
      ctaSecondaryText: '07702 264 921',
      ctaDisclaimer: 'No obligation. No credit card needed. Just real help for your Radstock business.',
      ctaImage: { src: '/images/keynsham/keynsham-coding.webp', alt: 'Website design and development — get found on Google in Radstock' },
      ctaBackgroundImage: { src: '/images/keynsham/keynsham-cta-background-code.webp', alt: 'Website design and local SEO in Radstock — get found on Google' },
      nearbyHeading: 'Nearby Areas We Serve',
      nearbyAreas: ['midsomer-norton', 'paulton', 'peasedown-st-john', 'bath', 'keynsham'],
      subAreaSlugs: ['writhlington-radstock', 'chilcompton-radstock'],
      websiteDesignBlogSlug: 'website-design-radstock',
      subAreasHeading: 'Areas near Radstock we cover',
      costSection: {
        heading: 'Website design costs in Radstock',
        paragraphs: [
          'Website design in Radstock starts at £250. Each additional page is £50 — a 3-page site is £350, a 5-page site is £450, a 10-page site is £700. Add GBP optimisation for £100. We\'re clear about what\'s included so Radstock businesses can plan. See our web design packages for full details.',
        ],
      },
      whatToLookForSection: {
        heading: 'What to look for in a Radstock web designer',
        bullets: [
          { title: 'Portfolio and sector experience', text: 'Look for work with trades and local businesses like yours — plumbers, electricians, builders in Radstock, Midsomer Norton or the Somer Valley.' },
          { title: 'Local knowledge', text: 'A good Radstock web designer knows the searches people use ("plumber Radstock", "website design Radstock") and how to optimise for them.' },
          { title: 'GBP optimisation — £100 add-on', text: 'Your site should be built with local search in mind from day one. Add GBP optimisation for £100 — we set up your categories, keywords, description and service area.' },
          { title: 'Clear process and timeline', text: 'You should get a clear timeline and know what you\'re getting at each stage. We outline everything up front so there are no surprises.' },
          { title: 'No long contracts', text: 'Plain English, monthly reports, and no lock-in. We want you on the map and getting more calls.' },
        ],
      },
      faqs: [
        {
          question: 'How much does website design cost in Radstock?',
          answer: 'Website design in Radstock starts at £250. Each additional page is £50 — a 3-page site is £350, a 5-page site is £450. GBP optimisation available as a £100 add-on. See our web design packages for full details.',
        },
        {
          question: 'Is there enough search volume in Radstock for SEO to work?',
          answer: 'Yes! While individual search volumes may be smaller, the conversion rates are typically higher as searchers have strong local intent. Combined with lower competition, Radstock offers excellent SEO opportunities.',
        },
        {
          question: 'How quickly can I rank for Radstock keywords?',
          answer: 'Due to lower competition, many Radstock businesses see first-page rankings within 2-3 months. Some less competitive terms can rank within weeks.',
        },
        {
          question: 'Should I focus on Radstock or target the wider area?',
          answer: 'We recommend starting with Radstock to establish dominance locally, then expanding to Midsomer Norton and other nearby areas. This builds a strong foundation for regional success.',
        },
        {
          question: 'Do you have experience with Radstock businesses?',
          answer: 'Yes! We\'ve helped multiple Radstock businesses dominate local search. Our local knowledge of the Somer Valley gives us an edge in creating effective local SEO strategies.',
        },
        {
          question: 'Do you build websites optimised for local Radstock searches?',
          answer: 'Yes. Every site we build is optimised for local searches like "website designer Radstock", "web design Radstock BA3" and your trade keywords. We integrate Google Business Profile from day one so you get found on Google and in the map pack.',
        },
      ],
    },
    'peasedown-st-john': {
      name: 'Peasedown St John',
      fullName: 'Peasedown St John, Somerset',
      designerHref: '/website-designer-peasedown-st-john',
      county: 'Somerset',
      postcodes: ['BA2'],
      population: '6,500+',
      heroImage: '/images/areas/peasedown-st-john.webp',
      metaTitle: 'Website design Peasedown St John | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Peasedown St John from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Peasedown St John',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Peasedown St John is a growing village just south of Bath. New homes mean more people need local trades. Plumbers, electricians, builders – customers search Google right here.',
      extendedDescription: 'We get you found first.',
      industries: ['Trades', 'Retail', 'Services', 'Childcare'],
      landmarks: ['Beacon Hall', 'St John the Baptist Church', 'Peasedown St John Primary School', 'Eckweek Lane play areas'],
      heroStats: [
        { value: '6,500+', label: 'Residents' },
        { value: 'Low', label: 'Competition' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      stats: {
        businesses: '200+',
        monthlySearches: '20K+',
        competitors: 'Low',
        avgCPC: '£1.30',
      },
      testimonial: {
        label: 'Real Result',
        quote: "We now get enquiries from Peasedown and surrounding areas. SEO Kings made it happen.",
        name: 'Tom Richards',
        business: 'Richards Landscaping',
        result: '+25 jobs per month',
      },
      whyIntro: 'Customers search "plumber Peasedown" or "electrician Peasedown St John". If you\'re not on page 1 or in the map pack, you miss jobs.',
      whyBullets: [
        { title: 'Growing area', text: 'New housing brings more families and demand for services.' },
        { title: 'Low competition', text: 'Most local trades haven\'t invested in SEO yet. Easy to win top spots.' },
        { title: 'High ROI', text: 'Organic rankings save money vs paid ads.' },
      ],
      services: [
        { name: 'Local SEO', description: 'Rank for "Peasedown St John" and trade searches.' },
        { name: 'Google Business Profile', description: 'Dominate the map pack with reviews and posts.', href: '/google-business-profile' },
        { name: 'Fast Website Design', description: 'Mobile-friendly sites that convert visitors to calls.' },
        { name: 'Review Management', description: 'Build 5-star trust fast.' },
      ],
      servicesHeading: 'Website design in Peasedown St John — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      websiteDesignBlogSlug: 'website-design-peasedown-st-john',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Peasedown actually search:',
      industriesHeading: 'Industries We Help',
      landmarksHeading: 'Local Landmarks We Use',
      landmarksIntro: 'We reference real places in your content to boost relevance:',
      localKeywords: [
        'website design Peasedown St John',
        'website designer Peasedown St John',
        'web design Peasedown St John',
        'plumber Peasedown',
        'electrician Peasedown',
        'builder Peasedown St John',
        'landscaper Peasedown',
        'handyman Peasedown',
        'cleaner Peasedown',
        'emergency plumber Peasedown',
        'roofer Peasedown',
      ],
      ctaButtonText: 'Get Free Audit – No Obligation',
      ctaHeadline: 'Ready to Get More Customers in Peasedown?',
      ctaSubhead: "Don't let competitors take the top spots.",
      ctaPrimaryText: 'Get a Free Website Quote',
      ctaSecondaryText: 'Free Consultation – Call or Email',
      nearbyHeading: 'Nearby Areas We Serve',
      nearbyAreas: ['bath', 'radstock', 'midsomer-norton', 'keynsham', 'saltford'],
      faqs: [
        {
          question: 'Can you help me rank in both Peasedown and Bath?',
          answer: 'Yes. We target both areas. Many Peasedown trades serve Bath too.',
        },
        {
          question: 'Is Peasedown too small for SEO?',
          answer: 'No. Smaller places have very ready-to-buy searchers. Low competition means fast wins.',
        },
        {
          question: 'How long until I see results?',
          answer: 'Most see big improvements in 3–6 months. We show progress every month.',
        },
      ],
    },
    'paulton': {
      name: 'Paulton',
      fullName: 'Paulton, Somerset',
      county: 'Somerset',
      postcodes: ['BS39'],
      population: '5,300+',
      heroImage: '/images/areas/paulton.webp',
      metaTitle: 'Website design Paulton | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Paulton from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Paulton',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Paulton is a friendly village in the Cam Valley with about 5,300–6,500 residents. Well-connected to Bath and nearby towns. Businesses here serve locals plus visitors to the area (including nearby Paultons Park).',
      extendedDescription: 'Customers search Google for "plumber Paulton" or "cleaner Paulton". We get you found first.',
      heroStats: [
        { value: '5,300+', label: 'Residents' },
        { value: 'Low', label: 'Competition' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      stats: {
        businesses: '180+',
        monthlySearches: '18K+',
        competitors: 'Low',
        avgCPC: '£1.25',
      },
      ctaButtonText: 'Get Free Audit – No Obligation',
      whyIntro: 'People in Paulton want local services fast. If you\'re not on page 1 or in the Google map pack, competitors take the jobs.',
      whyBullets: [
        { title: 'Strong local economy', text: 'Residents and visitors need trades and services year-round.' },
        { title: 'Low competition', text: 'Easier to reach the top spots than in bigger towns.' },
        { title: 'High returns', text: 'Organic rankings save money compared to paid ads.' },
      ],
      services: [
        { name: 'Local SEO', description: 'Rank for Paulton + trade keywords.' },
        { name: 'Google Business Profile', description: 'Dominate the map pack with reviews and posts.', href: '/google-business-profile' },
        { name: 'Fast Website Design', description: 'Mobile sites that turn visitors into customers.' },
        { name: 'Review Management', description: 'Build 5-star trust quickly.' },
      ],
      servicesHeading: 'Website design in Paulton — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      websiteDesignBlogSlug: 'website-design-somer-valley',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on real searches from Paulton people:',
      industriesHeading: 'Industries We Help',
      industries: ['Trades', 'Retail', 'Agriculture', 'Services', 'Cleaning'],
      landmarksHeading: 'Local Landmarks We Use',
      landmarksIntro: 'We reference real Paulton places to boost local relevance:',
      landmarks: ['Paulton Village Centre', 'St John the Baptist Church', 'Ham Woods', 'Paultons Park (nearby)'],
      testimonial: {
        label: 'Real Result',
        caseTitle: "Green's Cleaning Services, Paulton",
        quote: "From zero online presence to first page of Google. Our business has completely transformed.",
        name: 'Lisa Green',
        business: "Green's Cleaning Services",
        result: '+200% bookings',
      },
      howItWorks: [
        { title: 'Free audit', description: 'We check your rankings, site, and Google profile.' },
        { title: 'Custom plan', description: 'Tailored for Paulton trades and services.' },
        { title: 'Results', description: 'Monthly reports. See leads grow.' },
      ],
      localKeywords: [
        'website design Paulton',
        'website designer Paulton',
        'web design Paulton',
        'plumber Paulton',
        'electrician Paulton',
        'builder Paulton',
        'cleaner Paulton',
        'gardener Paulton',
        'decorator Paulton',
        'handyman Paulton',
        'emergency plumber Paulton',
        'boiler repair Paulton',
      ],
      ctaHeadline: 'Ready to Dominate Paulton Search Results?',
      ctaSubhead: 'Join other Paulton businesses already on page one.',
      ctaPrimaryText: 'Get a Free Website Quote',
      ctaSecondaryText: 'Free Consultation – Get Started',
      nearbyHeading: 'Nearby Areas We Serve',
      nearbyAreas: ['midsomer-norton', 'radstock', 'peasedown-st-john', 'bath'],
      subAreaSlugs: ['high-littleton-paulton', 'hallatrow-paulton'],
      subAreasHeading: 'Cam Valley areas near Paulton we cover',
      faqs: [
        {
          question: 'How can SEO help my Paulton business grow?',
          answer: 'SEO puts you in front of locals searching for services. Most people use Google first — being visible means more enquiries and customers.',
        },
        {
          question: 'Do you provide ongoing SEO support in Paulton?',
          answer: 'Yes. SEO is ongoing. We handle monthly tweaks, reports, and strategy updates to keep you ahead.',
        },
        {
          question: 'Can you help with Google reviews in Paulton?',
          answer: 'Yes. We guide review collection and professional responses to strengthen your local reputation.',
        },
        {
          question: 'What makes SEO Kings different for Paulton businesses?',
          answer: "We're local to Bath and North East Somerset. We know Paulton customers and use tailored strategies — not generic ones.",
        },
      ],
    },
    'saltford': {
      name: 'Saltford',
      fullName: 'Saltford, Bristol',
      designerHref: '/website-designer-saltford',
      county: 'Bristol',
      postcodes: ['BS31'],
      population: '5,000+',
      heroImage: '/images/saltford/saltford-hero.webp',
      metaTitle: 'Website Designer in Saltford | Web Design from £250',
      metaDescription: 'Professional website designer in Saltford BS31. Mobile-friendly web design from £250 with built-in local SEO & Google Business Profile optimisation. Free audit for Bath, Bristol & Somerset businesses.',
      heroHeadline: 'Website Designer in Saltford: Web Design & SEO from £250',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Website designer in Saltford — we get you found on Google. Saltford is a picturesque riverside village on the River Avon between Bath and Bristol. We offer web design from £250 and local SEO so trades and businesses in Saltford BS31 show up when people search "plumber Saltford", "electrician Saltford" and more.',
      extendedDescription: 'Local trades serve both villagers and visitors drawn to historic spots like Saltford Manor. Customers search Google for "plumber Saltford" or "electrician Saltford". We get you to the top spots.',
      heroStats: [
        { value: '£250', label: 'Starting Price' },
        { value: '5★', label: 'Google Rating' },
        { value: '5★', label: 'Google Rating' },
        { value: '1 week', label: 'Average Time to Launch' },
      ],
      heroSubtext: 'No obligation. No credit card required.',
      testimonialImage: { src: '/images/keynsham/keynsham-developer.webp', alt: 'Web developer at work' },
      introParagraphs: [
        'Looking for a website designer in Saltford? Saltford is a riverside village with an affluent community. Customers search Google for plumbers, electricians, builders, and other trades right here in BS31. Most trades miss out because they don\'t show up on page 1 or in the map pack. We fix that.',
        'We use local SEO and web design Saltford from £250 to get your business found first — more calls, more jobs. See our website design and local SEO pages for details, or get a free audit.',
      ],
      introImage: { src: '/images/saltford/saltford-hero.webp', alt: 'Saltford Marina, River Avon' },
      whyHeading: 'Why Choose SEO Kings in Saltford',
      whyIntro: "We know Saltford. We've helped local trades here get real results.",
      whyBullets: [
        { title: 'Proven in Saltford', text: 'Saltford residents value quality and search online first. We get you in the map pack and on page 1.' },
        { title: 'Local focus', text: 'We target searches like "plumber Saltford", "electrician Saltford", "website design Saltford BS31".' },
        { title: 'No fluff', text: 'Plain English. No long contracts. Monthly reports show your progress.' },
        { title: 'Full service', text: 'Keyword research, on-page fixes, local links, Google Business Profile, fast website if needed.' },
      ],
      servicesHeading: 'Website design in Saltford — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Saltford.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack. More views, calls, and wins.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Saltford and trade keywords. Keyword research, on-page, links.' },
        { name: 'Review Management', description: 'Add-on: build trust with 5★ reviews. Monthly reporting.' },
      ],
      testimonial: {
        label: 'Saltford & BANES Result',
        caseTitle: 'Saltford Garden Centre',
        resultSummary: 'Professional site and local visibility',
        result: 'More enquiries',
        timeframe: 'Ongoing',
        quote: "Saltford residents now find us first on Google. We've become the trusted local choice. Professional from start to finish.",
        name: 'Saltford Garden Centre',
        business: 'Saltford Garden Centre',
        businessDisplay: 'Saltford Garden Centre • Saltford',
      },
      howItWorks: [
        { title: 'Free Audit', description: 'We check your Google rankings, site, and Google Business Profile. We spot what\'s holding you back in Saltford searches.' },
        { title: 'Custom Strategy', description: 'We build a plan for your trade and your area. No cookie-cutter stuff.' },
        { title: 'Watch the Leads Roll In', description: 'We do the work. You get monthly updates and more customers.' },
      ],
      industries: ['Trades', 'Professional Services', 'Hospitality', 'Retail'],
      landmarks: ['Saltford Manor', 'The Bird in Hand pub', 'River Avon', 'Saltford Brass Mill', "St Mary's Church", 'Bristol & Bath Railway Path'],
      gallery: [
        { src: '/images/saltford/saltford-hero.webp', alt: 'Saltford Marina', caption: 'Saltford Marina, River Avon' },
        { src: '/images/areas/saltford-marina.webp', alt: 'Saltford Marina', caption: 'Saltford Marina' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Saltford_Manor_House_-_geograph.org.uk_-_547658.jpg/800px-Saltford_Manor_House_-_geograph.org.uk_-_547658.jpg', alt: 'Saltford Manor', caption: 'Saltford Manor' },
      ],
      whySectionImage: { src: '/images/keynsham/keynsham-wireframe.webp', alt: 'Website design wireframe and planning' },
      servicesSectionImage: { src: '/images/keynsham/keynsham-webdesign-laptop.webp', alt: 'Web design on laptop' },
      websiteDesignSectionImage: { src: '/images/keynsham/keynsham-coding.webp', alt: 'Website development and coding' },
      costSectionImage: { src: '/images/keynsham/keynsham-code-screen.webp', alt: 'Web development' },
      whatToLookForSectionImage: { src: '/images/keynsham/keynsham-mockup.webp', alt: 'Website design mockup' },
      extraContentSection: {
        heading: 'Why SEO Kings for Saltford',
        subheading: 'Our approach to website design in Saltford',
        image: { src: '/images/keynsham/keynsham-website-designer-mobile-desktop.webp', alt: 'Mobile and desktop setup — we build websites that work on every device' },
        paragraphs: [
          "We've been helping businesses across Bath, Saltford and North East Somerset get found on Google for years. When you choose us as your website designer in Saltford, we don't just build a pretty site — we optimise for the searches that matter. From day one we target phrases like 'website designer Saltford', 'web design Saltford BS31' and your trade terms so you show up when local customers search.",
          "Every site we build is set up for local SEO. We integrate your Google Business Profile from the start, use the right location and service schema, and structure content so Google understands you serve Saltford and the surrounding area. That means you're in the race for the map pack and page one from launch.",
          "Our process is straightforward: we start with a free audit so you see where you stand, then we design and build a mobile-friendly site that fits your business. We work with trades and small businesses across BS31, Bath, Bristol and Somerset. No long contracts, no jargon — just clear reporting and results you can measure.",
        ],
      },
      recentProjects: [
        { sector: 'New Decorating', outcome: 'No site, no GBP → top 8 on Google Maps in a week', snippet: 'Fast website and Google Business Profile set up and optimised. Now ranking for painter and decorator searches across Bath, Keynsham, Saltford and BANES.', caseStudySlug: 'new-decorating' },
        { sector: 'Aspect Builds', outcome: 'No website, just Instagram → 40-page professional site live in 2 weeks', snippet: 'Complete website with 6 service pages, 10 area pages, FAQ, contact form, and Google Business Profile integration for a Bath builder.', caseStudySlug: 'aspect-builds' },
      ],
      stats: {
        businesses: '150+',
        monthlySearches: '15K+',
        competitors: 'Low',
        avgCPC: '£1.40',
      },
      localKeywords: [
        'website designer in Saltford',
        'website design Saltford',
        'web designer Saltford',
        'web design Saltford',
        'web design Saltford BS31',
        'plumber Saltford',
        'electrician Saltford',
        'builder Saltford',
        'decorator Saltford',
        'gardener Saltford',
        'cleaner Saltford',
        'handyman Saltford',
        'emergency plumber Saltford',
        'boiler repair Saltford',
      ],
      ctaHeadline: 'Ready to Get More Customers in Saltford?',
      ctaSubhead: "Don't let competitors take the top spots.",
      ctaPrimaryText: 'Get Your Free Audit Today',
      ctaSecondaryText: '07702 264 921',
      ctaDisclaimer: 'No obligation. No credit card needed. Just real help for your Saltford business.',
      ctaImage: { src: '/images/keynsham/keynsham-coding.webp', alt: 'Website design and development — get found on Google in Saltford' },
      ctaBackgroundImage: { src: '/images/keynsham/keynsham-cta-background-code.webp', alt: 'Website design and local SEO in Saltford — get found on Google' },
      nearbyAreas: ['bath', 'keynsham', 'paulton', 'midsomer-norton', 'radstock'],
      nearbyHeading: 'Nearby Areas We Serve',
      subAreasHeading: 'Areas near Saltford we cover',
      costSection: {
        heading: 'Website design costs in Saltford',
        paragraphs: [
          'Website design in Saltford starts at £250. Each additional page is £50 — a 3-page site is £350, a 5-page site is £450, a 10-page site is £700. Add GBP optimisation for £100. We\'re clear about what\'s included so Saltford businesses can plan. See our web design packages for full details.',
        ],
      },
      whatToLookForSection: {
        heading: 'What to look for in a Saltford web designer',
        bullets: [
          { title: 'Portfolio and sector experience', text: 'Look for work with trades and local businesses like yours — plumbers, electricians, builders in Saltford, Bath or Somerset.' },
          { title: 'Local knowledge', text: 'A good Saltford web designer knows the searches people use ("plumber Saltford", "website design Saltford") and how to optimise for them.' },
          { title: 'GBP optimisation — £100 add-on', text: 'Your site should be built with local search in mind from day one. Add GBP optimisation for £100 — we set up your categories, keywords, description and service area.' },
          { title: 'Clear process and timeline', text: 'You should get a clear timeline and know what you\'re getting at each stage. We outline everything up front so there are no surprises.' },
          { title: 'No long contracts', text: 'Plain English, monthly reports, and no lock-in. We want you on the map and getting more calls.' },
        ],
      },
      faqs: [
        {
          question: 'How much does website design cost in Saltford?',
          answer: 'Website design in Saltford starts at £250. Each additional page is £50 — a 3-page site is £350, a 5-page site is £450. GBP optimisation available as a £100 add-on. See our web design packages for full details.',
        },
        {
          question: 'Do you build websites optimised for local Saltford searches?',
          answer: 'Yes. Every site we build is optimised for local searches like "website designer Saltford", "web design Saltford BS31" and your trade keywords. We integrate Google Business Profile from day one so you get found on Google and in the map pack.',
        },
        {
          question: 'Can you help my Saltford business rank in Bath and Keynsham too?',
          answer: "Yes. Saltford's location between Bath and Keynsham is perfect for multi-area targeting. We build strategies that cover all so you capture customers from the wider area.",
        },
        {
          question: 'Is SEO effective for a small village like Saltford?',
          answer: 'Yes. Saltford residents search online for local services. With low competition, the right strategy makes you the go-to choice quickly. We\'ve helped Saltford businesses get real results.',
        },
        {
          question: 'Do you offer Google Business Profile management in Saltford?',
          answer: 'Yes, Google Business Profile optimisation is a key part of our Saltford service. We\'ll optimise your profile, manage reviews, post updates, and ensure you appear in the local map pack.',
        },
        {
          question: 'What results can I expect from SEO in Saltford?',
          answer: 'Our Saltford clients typically see strong increases in website traffic and phone enquiries. With lower competition than Bath or Bristol, many achieve first-page rankings within a few months.',
        },
      ],
    },
    'timsbury': {
      name: 'Timsbury',
      fullName: 'Timsbury, Somerset',
      county: 'Somerset',
      postcodes: ['BA2'],
      population: '2,600+',
      heroImage: '/images/areas/timsbury.webp',
      metaTitle: 'Website design Timsbury | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Timsbury from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Timsbury',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Timsbury is a former coal-mining village with deep roots in the Somer Valley — its community hall at Conygre was built on the site of a colliery, and St Mary\'s Church has stood at its heart since the 12th century. Today it\'s a quiet residential village of around 2,600 residents, mainly families and retirees, with a strong community spirit and a mix of older stone houses and more recent estate development. The housing stock — a blend of former mining cottages, 1960s council housing, and newer private builds — generates consistent demand for builders, plumbers, electricians, and heating engineers. Timsbury also borders Paulton, High Littleton, and Farmborough, so a trade visible here naturally covers the wider Cam Valley and Chew Valley fringe.',
      extendedDescription: 'Word of mouth is strong in Timsbury but doesn\'t reach the customers who moved to the area recently. Those people search Google — and the trades who show up there pick up all that work.',
      heroStats: [
        { value: '2,600+', label: 'Residents' },
        { value: 'Very Low', label: 'Competition' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      stats: {
        businesses: '80+',
        monthlySearches: '8K+',
        competitors: 'Very Low',
        avgCPC: '£1.00',
      },
      ctaButtonText: 'Get Free Audit – No Obligation',
      whyIntro: 'Timsbury\'s community is tight-knit, but new residents search Google rather than asking neighbours. A well-built website and optimised Google Business Profile picks up all that online demand — which your local competitors are currently missing.',
      whyBullets: [
        { title: 'Mixed housing stock needs trades', text: 'Former mining cottages, 1960s housing, and newer builds all need different types of work — plumbers, electricians, builders, and insulation specialists all find consistent demand here.' },
        { title: 'Very low competition, quick rankings', text: 'Very few trades in Timsbury have a proper web presence. Get in first and you\'re the local name in Google for your trade.' },
        { title: 'Covers the Cam Valley fringe', text: 'Target Timsbury and we also cover Paulton, High Littleton, and Farmborough — the whole south-west BA2 patch with one campaign.' },
      ],
      services: [
        { name: 'Local SEO', description: 'Rank for Timsbury + trade keywords.' },
        { name: 'Google Business Profile', description: 'Dominate the map pack with reviews and posts.', href: '/google-business-profile' },
        { name: 'Fast Website Design', description: 'Mobile sites that convert visitors into customers.' },
        { name: 'Review Management', description: 'Build 5-star trust quickly.' },
      ],
      servicesHeading: 'Website design in Timsbury — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on real searches from Timsbury people:',
      industriesHeading: 'Industries We Help',
      industries: ['Trades', 'Agriculture', 'Services'],
      landmarksHeading: 'Local Landmarks We Use',
      landmarksIntro: 'We reference real Timsbury places to boost local relevance:',
      landmarks: ['St Mary\'s Church, Timsbury', 'Conygre Hall (former colliery site)', 'Timsbury Playing Fields', 'Farmborough Road', 'High Littleton Road'],
      testimonial: {
        label: 'Real Result',
        caseTitle: 'Andrews Building Services, Timsbury',
        quote: "Even in a small village, people search Google first. Now they find us.",
        name: 'Phil Andrews',
        business: 'Andrews Building Services',
        result: '+120% enquiries',
      },
      howItWorks: [
        { title: 'Free audit', description: 'We check your rankings, site, and Google profile.' },
        { title: 'Custom plan', description: 'Tailored for Timsbury trades and rural searches.' },
        { title: 'Results', description: 'Monthly reports. See leads grow.' },
      ],
      localKeywords: [
        'website design Timsbury',
        'website designer Timsbury',
        'web design Timsbury',
        'plumber Timsbury',
        'electrician Timsbury',
        'builder Timsbury',
        'handyman Timsbury',
        'gardener Timsbury',
        'decorator Timsbury',
        'emergency plumber Timsbury',
        'boiler repair Timsbury',
      ],
      ctaHeadline: 'Ready to Dominate Timsbury Search Results?',
      ctaSubhead: 'Join Timsbury trades already ranking high.',
      ctaPrimaryText: 'Get a Free Website Quote',
      ctaSecondaryText: 'Free Consultation – Get Started',
      nearbyHeading: 'Nearby Areas We Serve',
      nearbyAreas: ['paulton', 'midsomer-norton', 'radstock', 'peasedown-st-john'],
      faqs: [
        {
          question: 'Is Timsbury too small for a proper website?',
          answer: 'No — and the smaller the area, the less competition there is. We target Timsbury and combine it with Paulton, High Littleton, and the wider Cam Valley patch so you\'re visible across a meaningful service area. From £250.',
        },
        {
          question: 'What types of trades work well in Timsbury?',
          answer: 'Plumbers, electricians, builders, decorators, and heating engineers all find consistent demand. The housing stock is mixed — former mining cottages through to newer estates — which means a range of jobs. Insulation and energy efficiency work is also growing as older properties are upgraded.',
        },
        {
          question: 'How do you approach SEO for a village like Timsbury?',
          answer: 'We combine hyperlocal targeting ("builder Timsbury", "plumber BA2") with broader coverage of Paulton, Midsomer Norton, and the Somer Valley. This captures village-specific searches without missing the wider area where most of the volume sits.',
        },
        {
          question: 'How much for a website in Timsbury?',
          answer: 'From £250 for a one-page site, £350 for three pages. Add the Google Business Profile optimisation for £100 and you\'re set up to appear in local map pack results for the whole BA2/Somer Valley area.',
        },
      ],
    },
    'westfield': {
      name: 'Westfield',
      fullName: 'Westfield, Somerset',
      county: 'Somerset',
      postcodes: ['BA3'],
      population: '2,000+',
      heroImage: '/images/areas/westfield.webp',
      metaTitle: 'Website design Westfield | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Westfield from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Westfield',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Westfield is a residential suburb of Midsomer Norton in the Somer Valley — so closely connected to its neighbour that the boundary between the two is almost invisible on the ground. It\'s a predominantly 20th-century residential area with a mix of 1950s–1980s housing, some newer developments, and a strong local character shaped by the area\'s coalfield heritage. Westfield is home to Somer Valley FM, the community radio station, which reflects how community-focused life is here. Demand for trades is solid across the board — plumbers, electricians, builders, decorators, and heating engineers all serve a high density of residential housing with a mix of older and newer properties.',
      extendedDescription: 'Westfield sits between Midsomer Norton and Radstock, so trades visible here naturally pick up searches from both towns and the surrounding BA3 postcode — a significant coverage area from one targeted campaign.',
      heroStats: [
        { value: '2,000+', label: 'Residents' },
        { value: 'Very Low', label: 'Competition' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      stats: { businesses: '50+', monthlySearches: '5K+', competitors: 'Very Low', avgCPC: '£0.80' },
      ctaButtonText: 'Get Free Audit – No Obligation',
      whyIntro: 'Westfield is effectively part of Midsomer Norton — which means you get a dense residential patch of work without the extra competition from city-centre-focused tradespeople targeting Bath.',
      whyBullets: [
        { title: 'High residential density', text: 'Westfield\'s 20th-century housing is densely packed — high volume of plumbing, electrical, and building enquiries per square mile.' },
        { title: 'Gateway to BA3 coverage', text: 'Rank in Westfield and you naturally pick up Midsomer Norton and Radstock searches too — the combined BA3 patch is substantial.' },
        { title: 'Underserved digitally', text: 'Most Westfield trades rely on word of mouth. A website and GBP gets you in front of all the enquiries they\'re currently missing.' },
      ],
      services: [
        { name: 'Local SEO', description: 'Rank for Westfield + trade keywords.' },
        { name: 'Google Business Profile', description: 'Dominate the map pack with reviews and posts.', href: '/google-business-profile' },
        { name: 'Fast Website Design', description: 'Mobile sites that convert visitors into customers.' },
        { name: 'Review Management', description: 'Build 5-star trust quickly.' },
      ],
      servicesHeading: 'Website design in Westfield — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on real searches from Westfield and the Somer Valley:',
      industriesHeading: 'Industries We Help',
      industries: ['Trades', 'Services', 'Agriculture'],
      landmarksHeading: 'Local Landmarks We Use',
      landmarksIntro: 'We reference real local places to boost relevance:',
      landmarks: ['Somer Valley FM (community radio)', 'Westfield Sports Centre', 'Midsomer Norton High Street (adjacent)', 'Radstock (nearby)', 'Fosseway area'],
      testimonial: {
        label: 'Real Result',
        caseTitle: 'Client Spotlight',
        quote: 'See how we got a Midsomer Norton business to number one on Google and the map pack. We use the same approach for Westfield and the Somer Valley.',
        name: 'Peachy Cleans',
        business: 'Midsomer Norton',
        result: '#1 on Google',
      },
      howItWorks: [
        { title: 'Free audit', description: 'We check your rankings, site, and Google profile.' },
        { title: 'Custom plan', description: 'Tailored for Westfield and the Somer Valley.' },
        { title: 'Results', description: 'Monthly reports. See leads grow.' },
      ],
      localKeywords: [
        'website design Westfield',
        'website designer Westfield',
        'web design Westfield',
        'plumber Westfield',
        'electrician Westfield',
        'builder Westfield',
        'handyman Westfield',
        'gardener Westfield',
        'emergency plumber Westfield',
        'boiler repair Westfield',
      ],
      ctaHeadline: 'Ready to Dominate Westfield Search Results?',
      ctaSubhead: 'Join local trades already ranking high.',
      ctaPrimaryText: 'Get a Free Website Quote',
      ctaSecondaryText: 'Free Consultation – Get Started',
      nearbyHeading: 'Nearby Areas We Serve',
      nearbyAreas: ['radstock', 'midsomer-norton', 'paulton', 'peasedown-st-john'],
      faqs: [
        { question: 'Is Westfield too small for a website and SEO?', answer: 'No — because Westfield is so close to Midsomer Norton and Radstock, we target all three together. You get BA3 coverage across a significant area from one campaign. From £250 for a website.' },
        { question: 'What trades do well in Westfield?', answer: 'Plumbers, electricians, builders, decorators, and heating engineers all find consistent demand. The dense residential housing means steady bread-and-butter work — boiler replacements, rewires, bathroom refits — as well as extension and renovation work.' },
        { question: 'How much for a website in Westfield?', answer: 'From £250 for a one-page site, £350 for three pages. We structure it to also cover Midsomer Norton and Radstock so you get maximum reach across the BA3 postcode.' },
      ],
    },
    'chew-magna': {
      name: 'Chew Magna',
      fullName: 'Chew Magna, Somerset',
      county: 'Somerset',
      postcodes: ['BS40'],
      population: '1,200+',
      heroImage: '/images/areas/chew-magna.webp',
      metaTitle: 'Website design Chew Magna | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Chew Magna from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Chew Magna',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Chew Magna is one of the most sought-after villages in North Somerset — a handsome stone village at the heart of the Chew Valley, dominated by the magnificent Church of St Andrew and surrounded by the rolling countryside that frames Chew Valley Lake. It attracts affluent commuters from Bristol and Bath, second-home buyers, and established families who value the combination of village character and good schools. The Pelican Inn and the Bear and Swan pub anchor the village social life. The housing stock is predominantly stone houses, period cottages, and some substantial detached properties — all of which require quality trades: builders for extensions and renovations, stonemasons and decorators for period work, landscapers for the generous rural gardens.',
      extendedDescription: 'Chew Magna\'s affluent demographic means customers are paying for quality. Trades who present themselves professionally online — with a clean website, good reviews, and a complete Google Business Profile — win the best jobs here.',
      heroStats: [
        { value: '1,200+', label: 'Residents' },
        { value: 'Very Low', label: 'Competition' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      stats: { businesses: '40+', monthlySearches: '4K+', competitors: 'Very Low', avgCPC: '£0.90' },
      ctaButtonText: 'Get Free Audit – No Obligation',
      whyIntro: 'Chew Magna customers have money to spend on their properties — and they\'re looking for quality trades who present themselves professionally. A well-built website and strong reviews win the best jobs here.',
      whyBullets: [
        { title: 'High-value property work', text: 'Stone houses, large gardens, and period features mean builders, landscapers, and decorators find higher-than-average job values in Chew Magna and the Chew Valley.' },
        { title: 'Covers the whole Chew Valley', text: 'Target Chew Magna and we also cover Chew Stoke, Bishop Sutton, Stanton Drew, and the surrounding villages — the full BS40 Chew Valley patch.' },
        { title: 'Very low digital competition', text: 'Almost no local trades specifically target Chew Magna online. A website here gets you to the top of local searches quickly.' },
      ],
      services: [
        { name: 'Local SEO', description: 'Rank for Chew Magna + trade keywords.' },
        { name: 'Google Business Profile', description: 'Dominate the map pack with reviews and posts.', href: '/google-business-profile' },
        { name: 'Fast Website Design', description: 'Mobile sites that convert visitors into customers.' },
        { name: 'Review Management', description: 'Build 5-star trust quickly.' },
      ],
      servicesHeading: 'Website design in Chew Magna — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what Chew Magna and Chew Valley people search:',
      industriesHeading: 'Industries We Help',
      industries: ['Trades', 'Hospitality', 'Retail', 'Services'],
      landmarksHeading: 'Local Landmarks We Use',
      landmarksIntro: 'We reference real Chew Magna places to boost relevance:',
      landmarks: ['Church of St Andrew, Chew Magna', 'Chew Valley Lake', 'The Pelican Inn', 'Bear and Swan', 'Chew Magna village green'],
      testimonial: {
        label: 'Real Result',
        caseTitle: 'Client Spotlight',
        quote: 'See how we got a Midsomer Norton business to number one on Google and the map pack. We use the same approach for Chew Magna and the Chew Valley.',
        name: 'Peachy Cleans',
        business: 'Midsomer Norton',
        result: '#1 on Google',
      },
      howItWorks: [
        { title: 'Free audit', description: 'We check your rankings, site, and Google profile.' },
        { title: 'Custom plan', description: 'Tailored for Chew Magna and the Chew Valley.' },
        { title: 'Results', description: 'Monthly reports. Watch leads grow.' },
      ],
      localKeywords: [
        'website design Chew Magna',
        'website designer Chew Magna',
        'web design Chew Magna',
        'plumber Chew Magna',
        'electrician Chew Magna',
        'builder Chew Magna',
        'handyman Chew Magna',
        'gardener Chew Magna',
        'cleaner Chew Magna',
        'emergency plumber Chew Magna',
        'boiler repair Chew Magna',
      ],
      ctaHeadline: 'Ready to Dominate Chew Magna Search Results?',
      ctaSubhead: 'Join Chew Valley trades already ranking high.',
      ctaPrimaryText: 'Get a Free Website Quote',
      ctaSecondaryText: 'Free Consultation – Get Started',
      nearbyHeading: 'Nearby Areas We Serve',
      nearbyAreas: ['keynsham', 'bath', 'paulton', 'temple-cloud'],
      subAreaSlugs: ['stanton-drew-chew-magna', 'chew-stoke-chew-magna', 'bishop-sutton-chew-magna'],
      subAreasHeading: 'Chew Valley areas we cover',
      faqs: [
        { question: 'Is Chew Magna worth targeting for a trade website?', answer: 'Yes — and it\'s one of the best-value places to target. Very few trades specifically target the Chew Valley digitally, so a well-built website and GBP gets you to the top of local searches quickly, in front of some of the most property-invested customers in North Somerset.' },
        { question: 'What trades do best in Chew Magna?', answer: 'Builders and landscapers do particularly well — the stone houses, large gardens, and rural setting generate extensions, garden projects, and outbuilding work. Decorators experienced with period properties, heating engineers, and plumbers also find consistent demand.' },
        { question: 'How much for a website in Chew Magna?', answer: 'From £250 for a one-page site, £350 for three pages. We structure the targeting to cover the full Chew Valley — Chew Stoke, Bishop Sutton, Stanton Drew — so you get maximum reach across the BS40 postcode.' },
      ],
    },
    'temple-cloud': {
      name: 'Temple Cloud',
      fullName: 'Temple Cloud, Somerset',
      county: 'Somerset',
      postcodes: ['BS39'],
      population: '1,500+',
      heroImage: '/images/areas/temple-cloud.webp',
      metaTitle: 'Website design Temple Cloud | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Temple Cloud from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Temple Cloud',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Temple Cloud is a small village strung along the A37 between Bristol and Shepton Mallet, in the gentle Cam Valley between Clutton and Paulton. It\'s a quiet, largely residential village — stone houses, a handful of farms, and a community that knows its neighbours. The Ring O\' Bells pub is the social hub. The area has historically been agricultural and working-class, with the usual mix of older stone cottages and some 20th-century infill housing. Demand for trades is modest by volume but very low on competition — plumbers, electricians, builders, and heating engineers can establish themselves as the obvious local name with very little effort compared to urban areas.',
      extendedDescription: 'Temple Cloud sits at a crossroads of several small Cam Valley villages — Clutton, Paulton, and Hallatrow are all within a couple of miles. A trade targeting Temple Cloud naturally covers the whole north Cam Valley cluster.',
      heroStats: [
        { value: '1,500+', label: 'Residents' },
        { value: 'Very Low', label: 'Competition' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      stats: { businesses: '45+', monthlySearches: '5K+', competitors: 'Very Low', avgCPC: '£0.85' },
      ctaButtonText: 'Get Free Audit – No Obligation',
      whyIntro: 'Temple Cloud is genuinely underserved digitally. There is almost no trade with a proper web presence here. The first plumber, electrician, or builder to get a solid website and GBP becomes the go-to for the whole Cam Valley cluster.',
      whyBullets: [
        { title: 'Essentially zero digital competition', text: 'No local trades in Temple Cloud specifically target online — a simple website and GBP makes you the default first result for every local trade search.' },
        { title: 'A37 corridor cluster', text: 'Temple Cloud is on the A37, connecting Clutton, Paulton, and Hallatrow. One campaign covers all four villages along the route.' },
        { title: 'Rural agricultural demand', text: 'Farms, outbuildings, and rural properties around Temple Cloud need plumbers, electricians, and builders who are comfortable with rural work — a niche worth marketing.' },
      ],
      services: [
        { name: 'Local SEO', description: 'Rank for Temple Cloud + trade keywords.' },
        { name: 'Google Business Profile', description: 'Dominate the map pack with reviews and posts.', href: '/google-business-profile' },
        { name: 'Fast Website Design', description: 'Mobile sites that convert visitors into customers.' },
        { name: 'Review Management', description: 'Build 5-star trust quickly.' },
      ],
      servicesHeading: 'Website design in Temple Cloud — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on real searches from Temple Cloud and the Cam Valley:',
      industriesHeading: 'Industries We Help',
      industries: ['Trades', 'Services'],
      landmarksHeading: 'Local Landmarks We Use',
      landmarksIntro: 'We reference real local places to boost relevance:',
      landmarks: ['Ring O\' Bells pub', 'A37 (Bristol–Shepton Mallet road)', 'Cam Valley', 'Temple Cloud village hall', 'Clutton (adjacent village)'],
      testimonial: {
        label: 'Real Result',
        caseTitle: 'Client Spotlight',
        quote: 'See how we got a Midsomer Norton business to number one on Google and the map pack. We use the same approach for Temple Cloud and the Cam Valley.',
        name: 'Peachy Cleans',
        business: 'Midsomer Norton',
        result: '#1 on Google',
      },
      howItWorks: [
        { title: 'Free audit', description: 'We check your rankings, site, and Google profile.' },
        { title: 'Custom plan', description: 'Tailored for Temple Cloud and the Cam Valley.' },
        { title: 'Results', description: 'Monthly reports. See leads grow.' },
      ],
      localKeywords: [
        'website design Temple Cloud',
        'website designer Temple Cloud',
        'web design Temple Cloud',
        'plumber Temple Cloud',
        'electrician Temple Cloud',
        'builder Temple Cloud',
        'handyman Temple Cloud',
        'emergency plumber Temple Cloud',
        'boiler repair Temple Cloud',
      ],
      ctaHeadline: 'Ready to Dominate Temple Cloud Search Results?',
      ctaSubhead: 'Join local trades already ranking high.',
      ctaPrimaryText: 'Get a Free Website Quote',
      ctaSecondaryText: 'Free Consultation – Get Started',
      nearbyHeading: 'Nearby Areas We Serve',
      nearbyAreas: ['clutton', 'paulton', 'midsomer-norton', 'keynsham'],
      faqs: [
        { question: 'Is Temple Cloud too small for a website to be worth it?', answer: 'No — because Temple Cloud sits between Clutton, Paulton, and Hallatrow, we target the whole Cam Valley cluster together. You\'re not just targeting a single small village but a connected group that adds up to a worthwhile service area.' },
        { question: 'What types of businesses work well in Temple Cloud?', answer: 'Plumbers, electricians, builders, and heating engineers serving the Cam Valley villages. Agricultural and rural property work is also a niche worth mentioning — farms and outbuildings around Temple Cloud generate specialist work that urban trades aren\'t set up to handle.' },
        { question: 'How much for a website covering Temple Cloud?', answer: 'From £250 for a one-page site. We structure the targeting to cover the Cam Valley cluster — Clutton, Paulton, Hallatrow — so you get a meaningful service area from the outset.' },
      ],
    },
    'clutton': {
      name: 'Clutton',
      fullName: 'Clutton, Somerset',
      county: 'Somerset',
      postcodes: ['BS39'],
      population: '1,800+',
      heroImage: '/images/areas/clutton.webp',
      metaTitle: 'Website design Clutton | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Clutton from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Clutton',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Clutton is a stone village on the A37 between Bristol and Shepton Mallet, in the Cam Valley south of Chew Magna. It\'s a working Somerset village with a real community feel — St Augustine\'s Church, the Pelican Inn, a primary school, and a mix of older stone cottages and more modern housing along the main road. The village is part of a cluster with Temple Cloud and Hallatrow, and residents here tend to travel to Midsomer Norton, Bristol, or Bath for work. Demand for trades comes from the usual mix of residential maintenance work — plumbers, electricians, builders, heating engineers — with some agricultural and rural property work from the farms and smallholdings in the surrounding countryside.',
      extendedDescription: 'Clutton is on the BS39 postcode, shared with Temple Cloud, Hallatrow, and Paulton. A trade visible in Clutton picks up searches from across this cluster — a meaningful patch of Somerset work with very low digital competition.',
      heroStats: [
        { value: '1,800+', label: 'Residents' },
        { value: 'Very Low', label: 'Competition' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      stats: { businesses: '50+', monthlySearches: '5K+', competitors: 'Very Low', avgCPC: '£0.85' },
      ctaButtonText: 'Get Free Audit – No Obligation',
      whyIntro: 'Clutton is one of those Somerset villages where the trades who win work here do so almost entirely by word of mouth. That means the first tradesperson to appear properly on Google becomes the automatic first call for anyone new to the area.',
      whyBullets: [
        { title: 'Low competition, fast wins', text: 'No trades specifically target Clutton online. A website and GBP gets you to the top of local searches almost immediately.' },
        { title: 'Cam Valley and BS39 cluster', text: 'Clutton sits at the centre of a cluster with Temple Cloud, Hallatrow, and Paulton — one campaign covers all of them.' },
        { title: 'Rural and agricultural demand', text: 'Farms and rural properties around Clutton need plumbers, electricians, and builders comfortable with rural jobs — a niche worth highlighting on your site.' },
      ],
      services: [
        { name: 'Local SEO', description: 'Rank for Clutton + trade keywords.' },
        { name: 'Google Business Profile', description: 'Dominate the map pack with reviews and posts.', href: '/google-business-profile' },
        { name: 'Fast Website Design', description: 'Mobile sites that convert visitors into customers.' },
        { name: 'Review Management', description: 'Build 5-star trust quickly.' },
      ],
      servicesHeading: 'Website design in Clutton — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on real searches from Clutton and the Cam Valley:',
      industriesHeading: 'Industries We Help',
      industries: ['Trades', 'Services'],
      landmarksHeading: 'Local Landmarks We Use',
      landmarksIntro: 'We reference real local places to boost relevance:',
      landmarks: ['St Augustine\'s Church, Clutton', 'The Pelican Inn', 'Clutton Primary School', 'A37 main road', 'Temple Cloud (adjacent)'],
      testimonial: {
        label: 'Real Result',
        caseTitle: 'Client Spotlight',
        quote: 'See how we got a Midsomer Norton business to number one on Google and the map pack. We use the same approach for Clutton and the Cam Valley.',
        name: 'Peachy Cleans',
        business: 'Midsomer Norton',
        result: '#1 on Google',
      },
      howItWorks: [
        { title: 'Free audit', description: 'We check your rankings, site, and Google profile.' },
        { title: 'Custom plan', description: 'Tailored for Clutton and the Cam Valley.' },
        { title: 'Results', description: 'Monthly reports. See leads grow.' },
      ],
      localKeywords: [
        'website design Clutton',
        'website designer Clutton',
        'web design Clutton',
        'plumber Clutton',
        'electrician Clutton',
        'builder Clutton',
        'handyman Clutton',
        'gardener Clutton',
        'emergency plumber Clutton',
        'boiler repair Clutton',
      ],
      ctaHeadline: 'Ready to Dominate Clutton Search Results?',
      ctaSubhead: 'Join local trades already ranking high.',
      ctaPrimaryText: 'Get a Free Website Quote',
      ctaSecondaryText: 'Free Consultation – Get Started',
      nearbyHeading: 'Nearby Areas We Serve',
      nearbyAreas: ['temple-cloud', 'paulton', 'midsomer-norton', 'keynsham'],
      faqs: [
        { question: 'Is Clutton too small for a website to make a difference?', answer: 'No — and in fact the smaller the village, the easier it is to rank. We target Clutton and the surrounding BS39 cluster (Temple Cloud, Hallatrow, Paulton) so you have a meaningful service area from day one. From £250.' },
        { question: 'What trades do well in the Clutton area?', answer: 'Plumbers, electricians, builders, and heating engineers for residential work. Agricultural trades — drainage, rural plumbing, outbuilding electrics — also find good demand from the farms and smallholdings around the village.' },
        { question: 'How much for a website covering Clutton?', answer: 'From £250 for a one-page site, £350 for three pages. We combine the targeting with Temple Cloud, Hallatrow, and Paulton so you cover the full Cam Valley cluster with one investment.' },
      ],
    },

    // Sub-areas: Bath
    'odd-down-bath': {
      name: 'Odd Down',
      fullName: 'Odd Down, Bath',
      parentSlug: 'bath',
      designerHref: '/website-designer-bath',
      county: 'Somerset',
      postcodes: ['BA2'],
      population: null,
      heroImage: '/images/areas/bath-roman-baths.webp',
      metaTitle: 'Website design Odd Down Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Odd Down, Bath from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Odd Down, Bath',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Odd Down is a large residential area in south Bath covering the Entry Hill and Bloomfield Road corridors. It\'s a predominantly family neighbourhood — a mix of older housing stock and more recent estates — with consistent demand for plumbers, electricians, heating engineers, builders, and decorators. A lot of the properties here are mid-20th century and older, which means boiler replacements, rewires, and renovation work come up regularly. Businesses serving Odd Down also naturally pick up work across nearby Combe Down, Bear Flat, and Peasedown St John.',
      extendedDescription: 'Competition for trade searches in Odd Down is lower than central Bath. A solid website and an optimised Google Business Profile are often enough to dominate the local map pack for plumbing, building, and electrical searches in the BA2 south postcode.',
      introParagraphs: [
        'Odd Down sits on Bath\'s southern plateau along the A367 — a big residential neighbourhood of post-war family homes, with the Park & Ride and playing fields marking its edge. For trades it\'s steady territory: family homeowners who need reliable plumbers, electricians and decorators, and far less competition for their searches than the city centre.',
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Odd Down\'s housing stock generates consistent trade demand — boilers, rewires, extensions, and renovations. Most local trades here win work purely through recommendations, which means the ones with a Google presence are picking up all the online jobs.',
      whyBullets: [
        { title: 'Lower competition than central Bath', text: 'Odd Down has fewer well-optimised trade websites than the city centre — quicker to get into the map pack.' },
        { title: 'Website & Google Profile combined', text: 'We build a fast website and optimise your Google Business Profile so both work together from day one.' },
        { title: 'Covers the wider BA2 south patch', text: 'Rank for Odd Down, Combe Down, Bear Flat, and Peasedown St John with one targeted campaign.' },
        { title: 'A big southern customer base', text: 'Odd Down\'s family housing generates constant maintenance and improvement work — and most trades serving it still have no real web presence.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Odd Down, Bath.', href: '/website-designer-bath' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack with reviews and posts.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Odd Down and Bath + trade keywords.', href: '/local-seo/bath' },
      ],
      servicesHeading: 'Website design in Odd Down, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Odd Down and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Entry Hill Golf Course', 'Odd Down Sports Ground', 'Bloomfield Road', 'Bear Flat', 'Combe Down'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Odd Down and Bath places to boost relevance.',
      stats: { businesses: '500+', monthlySearches: '25K+', competitors: 'Medium', avgCPC: '£2.00' },
      localKeywords: [
        'web designer odd down bath',
        'website design odd down bath',
        'web design ba2',
        'plumber Odd Down Bath',
        'electrician Odd Down Bath',
        'builder Odd Down Bath',
        'plumber Bath',
        'electrician Bath',
        'handyman Odd Down',
        'decorator Bath',
      ],
      ctaHeadline: 'Ready to Get More Customers in Odd Down, Bath?',
      ctaSubhead: 'Join Bath businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Bath Areas We Serve',
      nearbyAreas: ['bath', 'combe-down-bath', 'widcombe-bath', 'larkhall-bath', 'twerton-bath', 'keynsham', 'peasedown-st-john'],
      faqs: [
        { question: 'Do you cover Odd Down specifically?', answer: 'Yes. We target Odd Down and the wider BA2 south area — Combe Down, Bear Flat, Peasedown St John — so you show up for local customers wherever they\'re searching from.' },
        { question: 'What types of businesses do you help in Odd Down?', answer: 'Mainly trades: plumbers, electricians, heating engineers, builders, decorators, and roofers. Odd Down\'s housing stock is older, which means steady demand for boiler work, rewires, and renovation jobs.' },
        { question: 'How much for a website in Odd Down?', answer: 'From £250 for a one-page starter site. A three-page professional site is from £350. We also offer a Google Business Profile optimisation add-on for £100 — combined with the website this is usually what gets you into the map pack.' },
        { question: 'How much does website design cost in Odd Down?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on, and hosting is free for 6 months, then £50/year.' },
        { question: 'Can you get my business into the Google map pack in Odd Down?', answer: 'Yes. Google Business Profile optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Odd Down and Bath searches to help you rank in the map pack.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Odd Down and Bath.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bath Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'combe-down-bath': {
      name: 'Combe Down',
      fullName: 'Combe Down, Bath',
      parentSlug: 'bath',
      designerHref: '/website-designer-bath',
      county: 'Somerset',
      postcodes: ['BA2'],
      heroImage: '/images/areas/bath-roman-baths.webp',
      metaTitle: 'Website design Combe Down Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Combe Down, Bath from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Combe Down, Bath',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Combe Down is a distinct village on the southern ridge of Bath — different in character from the estates below. It\'s a predominantly stone-built, middle-class community centred around The Avenue and The Firs, with Prior Park landscape garden on its doorstep and a direct connection to the UNESCO World Heritage Combe Down Stone Mines project. The housing stock is mostly Victorian and Edwardian stone houses, which means regular demand for stonemasons, heritage builders, plasterers, and decorators who understand period properties. Residents here expect quality work and are willing to pay for it.',
      extendedDescription: 'Trades serving Combe Down also pick up work from Odd Down, Bear Flat, and Peasedown St John. The search volume isn\'t huge but competition is low, and a well-built website with GBP optimisation gets into the local map pack quickly.',
      introParagraphs: [
        'Combe Down village sits on the southern hills above Bath, built from the very stone its mines once supplied. Period cottages and family homes mean regular work for builders, roofers and decorators who understand Bath stone — and villagers who prefer to hire someone local.',
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Combe Down\'s stone houses and period properties mean steady demand for trades who understand heritage work. Residents search Google first — and the traders who show up get the jobs.',
      whyBullets: [
        { title: 'Heritage property demand', text: 'Combe Down\'s Victorian and Edwardian stone houses generate regular work for builders, plasterers, and decorators who handle period properties.' },
        { title: 'Low competition, quick wins', text: 'Very few local trades in Combe Down have a well-optimised web presence — it\'s one of the easier Bath postcodes to rank in.' },
        { title: 'Covers the BA2 south ridge', text: 'Target Combe Down, Odd Down, and Bear Flat with one campaign and pick up work across all three.' },
        { title: 'Stone village, specialist work', text: 'Bath stone cottages need trades who know lime mortar and period materials — a targeted website puts you in front of exactly those customers.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Combe Down, Bath.', href: '/website-designer-bath' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Combe Down and Bath + trade keywords.', href: '/local-seo/bath' },
      ],
      servicesHeading: 'Website design in Combe Down, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Combe Down and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Prior Park Landscape Garden', 'Combe Down Stone Mines (UNESCO Heritage)', 'Ralph Allen School', 'The Avenue', 'Hadley Arms'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Combe Down and Bath places.',
      stats: { businesses: '400+', monthlySearches: '20K+', competitors: 'Medium', avgCPC: '£1.80' },
      localKeywords: [
        'web designer combe down bath',
        'website design combe down bath',
        'web design ba2',
        'plumber Combe Down Bath',
        'electrician Combe Down Bath',
        'builder Combe Down Bath',
        'plumber Bath',
        'electrician Bath',
        'handyman Combe Down',
      ],
      ctaHeadline: 'Ready to Get More Customers in Combe Down, Bath?',
      ctaSubhead: 'Join Bath businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Bath Areas We Serve',
      nearbyAreas: ['bath', 'odd-down-bath', 'widcombe-bath', 'larkhall-bath', 'twerton-bath', 'peasedown-st-john'],
      faqs: [
        { question: 'Do you cover Combe Down?', answer: 'Yes. We target Combe Down specifically and the wider BA2 south area including Odd Down and Bear Flat, so you\'re visible for customers across the ridge.' },
        { question: 'Can you help with heritage property work in Combe Down?', answer: 'Yes — we work with builders, plasterers, stonemasons, and decorators who specialise in period and heritage properties. Combe Down\'s stone houses are exactly the kind of job that benefits from a targeted local web presence.' },
        { question: 'How much for a website in Combe Down?', answer: 'From £250 for a one-page site, £350 for three pages. Add the Google Business Profile optimisation for £100 and you have everything you need to appear in local searches and the map pack.' },
        { question: 'How much does website design cost in Combe Down?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on, and hosting is free for 6 months, then £50/year.' },
        { question: 'Can you get my business into the Google map pack in Combe Down?', answer: 'Yes. Google Business Profile optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Combe Down and Bath searches to help you rank in the map pack.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Combe Down and Bath.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bath Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'widcombe-bath': {
      name: 'Widcombe',
      fullName: 'Widcombe, Bath',
      parentSlug: 'bath',
      designerHref: '/website-designer-bath',
      county: 'Somerset',
      postcodes: ['BA2'],
      heroImage: '/images/areas/bath-roman-baths.webp',
      metaTitle: 'Website design Widcombe Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Widcombe, Bath from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Widcombe, Bath',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Widcombe is a characterful neighbourhood between Bath Spa station and Combe Down — one of Bath\'s most sought-after spots for those who want to be close to the city without living in the middle of it. Widcombe Hill, the steep lane connecting the area to Combe Down, is lined with Georgian and Victorian stone houses. Widcombe High Street has independent cafes, a handful of local businesses, and a village feel that sets it apart from the city centre. The mix of period properties, rental conversions, and family homes generates strong and consistent demand for plumbers, electricians, builders, and decorators who know Bath stone.',
      extendedDescription: 'Widcombe sits right on the doorstep of Bath Spa station, which brings in a mix of commuters and city workers who own or rent period properties — plenty of boiler call-outs, bathroom renovations, and kitchen upgrades to be won by the right trade.',
      introParagraphs: [
        'Widcombe is the village-in-the-city just south of Bath Spa station — independent shops on Widcombe Parade, Georgian terraces up the hill, and the Kennet & Avon canal running through. Affluent homeowners and independent businesses both need trades, and both search on Google first.',
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Widcombe\'s period properties and mix of owner-occupiers and renters mean trades who show up on Google here pick up work consistently. Few local tradespeople have a proper web presence in Widcombe specifically.',
      whyBullets: [
        { title: 'Period property demand', text: 'Georgian and Victorian houses along Widcombe Hill need trades who understand lime mortar, Bath stone, and period interiors — if you specialise in this, a targeted website brings in the right jobs.' },
        { title: 'Close to Bath city centre', text: 'Widcombe searches often blend with central Bath searches — we target both so you pick up enquiries from both areas.' },
        { title: 'Renters and landlords', text: 'The Widcombe area has a strong rental market. Landlords and letting agents need reliable trades on call — get visible on Google and you become their go-to.' },
        { title: 'Independent parade, affluent hills', text: 'Widcombe Parade businesses need websites and fit-outs; the Georgian terraces above need period-property trades. One campaign reaches both.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Widcombe, Bath.', href: '/website-designer-bath' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Widcombe and Bath + trade keywords.', href: '/local-seo/bath' },
      ],
      servicesHeading: 'Website design in Widcombe, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Widcombe and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Widcombe Hill', 'Widcombe High Street', 'Bath Spa Station', 'Widcombe Manor', 'Kennet & Avon Canal towpath'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Widcombe and Bath places.',
      stats: { businesses: '350+', monthlySearches: '18K+', competitors: 'Medium', avgCPC: '£2.00' },
      localKeywords: [
        'web designer widcombe bath',
        'website design widcombe bath',
        'web design ba2',
        'plumber Widcombe Bath',
        'electrician Widcombe Bath',
        'builder Widcombe Bath',
        'plumber Bath',
        'electrician Bath',
        'decorator Widcombe',
      ],
      ctaHeadline: 'Ready to Get More Customers in Widcombe, Bath?',
      ctaSubhead: 'Join Bath businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Bath Areas We Serve',
      nearbyAreas: ['bath', 'odd-down-bath', 'combe-down-bath', 'larkhall-bath', 'twerton-bath', 'keynsham'],
      faqs: [
        { question: 'Do you cover Widcombe?', answer: 'Yes. We target Widcombe specifically — including Widcombe Hill, Widcombe High Street, and the station area — and combine it with broader Bath targeting so you pick up enquiries from across the city.' },
        { question: 'Can you help me target landlords and letting agents in Widcombe?', answer: 'Yes. Widcombe has a strong rental market. We can structure your website and GBP to appeal to both homeowners and landlords looking for reliable trades in Bath BA2.' },
        { question: 'How much for a website in Widcombe?', answer: 'From £250 for a one-page site. We also offer a GBP optimisation add-on for £100 which, combined with the website, gives you the best chance of appearing in the local map pack.' },
        { question: 'How much does website design cost in Widcombe?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on, and hosting is free for 6 months, then £50/year.' },
        { question: 'Can you get my business into the Google map pack in Widcombe?', answer: 'Yes. Google Business Profile optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Widcombe and Bath searches to help you rank in the map pack.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Widcombe and Bath.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bath Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'larkhall-bath': {
      name: 'Larkhall',
      fullName: 'Larkhall, Bath',
      parentSlug: 'bath',
      designerHref: '/website-designer-bath',
      county: 'Somerset',
      postcodes: ['BA1', 'BA2'],
      heroImage: '/images/areas/bath-roman-baths.webp',
      metaTitle: 'Website design Larkhall Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Larkhall, Bath from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Larkhall, Bath',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Larkhall is one of Bath\'s most characterful neighbourhoods — a north-city enclave with a proper village feel, built around St Saviour\'s Road and its cluster of independent shops, cafes, and a popular street market on Saturday mornings. It\'s predominantly Victorian terraces and family homes, with a mix of owner-occupiers and renters who need reliable local trades. Plumbers, electricians, builders, and gardeners all do well here — word of mouth is strong, but the trades who also have a Google presence win the enquiries that come from outside the local network.',
      extendedDescription: 'Larkhall\'s proximity to central Bath means residents searching "electrician Larkhall" or "plumber Bath" are often looking for the same service. We target both so you cover the full patch.',
      introParagraphs: [
        'Larkhall has its own village feel — a square with independent shops, the Rondo Theatre, and streets of Victorian terraces that generate steady renovation work. It\'s a loyal, local-first community: rank for Larkhall searches and word of mouth does the rest.',
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BA1, BA2', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Larkhall\'s community is tight-knit but word of mouth only goes so far. The trades who show up on Google here pick up all the enquiries from people who moved to the area recently or who want a second opinion.',
      whyBullets: [
        { title: 'Village feel, city demand', text: 'Larkhall feels like a village but is part of Bath — you get community-level trust combined with city-level search volume for local trades.' },
        { title: 'Victorian housing stock', text: 'The terraced streets around St Saviour\'s Road generate steady work for plumbers, electricians, decorators, and builders doing Victorian property work.' },
        { title: 'Covers BA1 north Bath', text: 'Rank for Larkhall and we target Weston, Walcot, and north Bath too — one campaign covering the full upper city patch.' },
        { title: 'A village that hires local', text: 'Larkhall residents prefer local trades — showing up for "builder Larkhall" or "decorator BA1" makes you the default choice.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Larkhall, Bath.', href: '/website-designer-bath' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Larkhall and Bath + trade keywords.', href: '/local-seo/bath' },
      ],
      servicesHeading: 'Website design in Larkhall, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Larkhall and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['St Saviour\'s Road', 'Larkhall Market', 'St Saviour\'s Church', 'London Road', 'Lark Place'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Larkhall and Bath places.',
      stats: { businesses: '400+', monthlySearches: '22K+', competitors: 'Medium', avgCPC: '£2.00' },
      localKeywords: [
        'web designer larkhall bath',
        'website design larkhall bath',
        'web design ba1',
        'plumber Larkhall Bath',
        'electrician Larkhall Bath',
        'builder Larkhall Bath',
        'plumber Bath',
        'electrician Bath',
        'handyman Larkhall',
      ],
      ctaHeadline: 'Ready to Get More Customers in Larkhall, Bath?',
      ctaSubhead: 'Join Bath businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Bath Areas We Serve',
      nearbyAreas: ['bath', 'odd-down-bath', 'combe-down-bath', 'widcombe-bath', 'twerton-bath', 'keynsham'],
      faqs: [
        { question: 'Do you cover Larkhall?', answer: 'Yes. We target Larkhall specifically and combine it with broader Bath targeting so you pick up searches from across north Bath — including Weston, Walcot, and the London Road corridor.' },
        { question: 'What trades do well in Larkhall?', answer: 'Plumbers, electricians, builders, and decorators all do well here. The area\'s Victorian terraces mean steady demand for maintenance work, bathroom refits, and period property decorating. Gardeners also do well given the mix of garden properties.' },
        { question: 'How much for a website in Larkhall?', answer: 'From £250 for a one-page site, £350 for three pages. Add the GBP optimisation for £100 and you\'re set up to appear in local map pack results for trade searches in Larkhall and north Bath.' },
        { question: 'How much does website design cost in Larkhall?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on, and hosting is free for 6 months, then £50/year.' },
        { question: 'Can you get my business into the Google map pack in Larkhall?', answer: 'Yes. Google Business Profile optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Larkhall and Bath searches to help you rank in the map pack.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Larkhall and Bath.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bath Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'twerton-bath': {
      name: 'Twerton',
      fullName: 'Twerton, Bath',
      parentSlug: 'bath',
      designerHref: '/website-designer-bath',
      county: 'Somerset',
      postcodes: ['BA2'],
      heroImage: '/images/areas/bath-roman-baths.webp',
      metaTitle: 'Website design Twerton Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Twerton, Bath from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Twerton, Bath',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Twerton is a working-class neighbourhood on the western edge of Bath — home to Bath City FC at Twerton Park, a stretch of the River Avon, and the Western Riverside development that\'s brought new housing to the area. It\'s a dense residential community with a mix of social housing and private homes, and one of Bath\'s more affordable neighbourhoods. Demand for trades is strong and price-conscious: plumbers dealing with older properties, electricians rewiring pre-war housing, builders working on the newer Western Riverside builds, and decorators covering the lot.',
      extendedDescription: 'Twerton is underserved digitally — most trades here rely on word of mouth. A website with an optimised GBP gets into the local map pack fast, and picks up enquiries from customers across west Bath and Saltford too.',
      introParagraphs: [
        'Twerton, on Bath\'s western edge, mixes long-established streets with the new Western Riverside development — hundreds of new homes needing fit-outs and maintenance alongside pre-war housing needing rewires and repairs. Hardly any trades target it online, which is the opportunity.',
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Twerton is one of Bath\'s least digitally competitive areas — most trades here work purely by referral, which means there\'s a clear gap for the first one to get a proper web presence.',
      whyBullets: [
        { title: 'Western Riverside is growing', text: 'The Western Riverside development has brought hundreds of new homes to Twerton — all needing trades as they\'re fitted out and maintained.' },
        { title: 'Older housing stock needs work', text: 'Pre-war housing in Twerton generates consistent demand for rewires, boiler replacements, and structural repairs. Be visible and you get the calls.' },
        { title: 'Covers west Bath and Saltford', text: 'A Twerton-targeted campaign naturally picks up Oldfield Park, Weston, and Saltford too — you\'re covering the full west Bath patch.' },
        { title: 'First-mover advantage', text: 'Most Twerton trades still run on word of mouth — the first in each trade with a proper website takes the map pack.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Twerton, Bath.', href: '/website-designer-bath' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Twerton and Bath + trade keywords.', href: '/local-seo/bath' },
      ],
      servicesHeading: 'Website design in Twerton, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Twerton and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Twerton Park (Bath City FC)', 'Western Riverside development', 'Twerton High Street', 'River Avon', 'Lower Bristol Road'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Twerton and Bath places.',
      stats: { businesses: '350+', monthlySearches: '18K+', competitors: 'Medium', avgCPC: '£1.80' },
      localKeywords: [
        'web designer twerton bath',
        'website design twerton bath',
        'web design ba2',
        'plumber Twerton Bath',
        'electrician Twerton Bath',
        'builder Twerton Bath',
        'plumber Bath',
        'electrician Bath',
        'handyman Twerton',
      ],
      ctaHeadline: 'Ready to Get More Customers in Twerton, Bath?',
      ctaSubhead: 'Join Bath businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Bath Areas We Serve',
      nearbyAreas: ['bath', 'odd-down-bath', 'combe-down-bath', 'widcombe-bath', 'larkhall-bath', 'keynsham', 'saltford'],
      faqs: [
        { question: 'Do you cover Twerton?', answer: 'Yes. We target Twerton, the Western Riverside area, and west Bath generally — combining it with broader Bath targeting so you pick up enquiries from across the city.' },
        { question: 'Is Twerton competitive for local SEO?', answer: 'Very low competition. Most trades in Twerton have no website and rely on word of mouth, so a well-built site with an optimised GBP can get into the local map pack quickly.' },
        { question: 'How much for a website in Twerton?', answer: 'From £250 for a one-page site. The GBP optimisation add-on (£100) is worth combining with it — together they give you the best shot at appearing in map pack results for trade searches in Twerton and west Bath.' },
        { question: 'How much does website design cost in Twerton?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on, and hosting is free for 6 months, then £50/year.' },
        { question: 'Can you get my business into the Google map pack in Twerton?', answer: 'Yes. Google Business Profile optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Twerton and Bath searches to help you rank in the map pack.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Twerton and Bath.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bath Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'weston-bath': {
      name: 'Weston',
      fullName: 'Weston, Bath',
      parentSlug: 'bath',
      designerHref: '/website-designer-bath',
      county: 'Somerset',
      postcodes: ['BA1'],
      heroImage: '/images/areas/bath-roman-baths.webp',
      metaTitle: 'Website design Weston Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Weston, Bath from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Weston, Bath',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Weston is a historic village that\'s been absorbed into the north-west edge of Bath — it still feels distinct, with its own high street, St John\'s Church, and a mix of detached houses and Victorian semis on the slopes above the city. The area is largely owner-occupied and relatively affluent, attracting families who commute to Bristol or work in Bath. Demand for trades here tends to be for quality work: builders and landscapers handling well-established gardens and extensions, plumbers dealing with older plumbing, heating engineers replacing ageing boiler systems.',
      extendedDescription: 'Weston sits on the BA1 postcode and residents often search across Weston and central Bath. We target both so you cover the full north-west Bath patch and don\'t miss enquiries from adjacent Newbridge or Kelston Road.',
      introParagraphs: [
        'Weston village, in Bath\'s north-west corner, keeps its own high street and identity — surrounded by some of the city\'s most desirable family housing up towards Lansdown. Homeowners here invest in their properties and research trades before they call.',
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BA1', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Weston is a settled, owner-occupied community — trades who show up on Google here tend to get quality, well-paying jobs. Most of the demand is for planned work rather than emergencies, so a professional website makes a difference.',
      whyBullets: [
        { title: 'Quality jobs from homeowners', text: 'Weston\'s owner-occupied housing means customers are looking for reliable, quality trades for planned extensions, kitchen refits, and garden projects.' },
        { title: 'Village character, city postcode', text: 'Weston\'s BA1 postcode keeps it within Bath search results — you rank for both the village and the city.' },
        { title: 'Gardens and landscaping demand', text: 'Weston properties tend to have gardens. Landscapers and garden maintenance businesses do particularly well here.' },
        { title: 'Family homes that invest', text: 'Weston\'s housing stock generates repeat, high-value work — extensions, kitchens, redecoration — for trades visible on Google.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Weston, Bath.', href: '/website-designer-bath' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Weston and Bath + trade keywords.', href: '/local-seo/bath' },
      ],
      servicesHeading: 'Website design in Weston, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Weston and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Weston High Street', 'St John\'s Church Weston', 'Royal Victoria Park', 'Newbridge Road', 'Kelston Road'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Weston and Bath places.',
      stats: { businesses: '400+', monthlySearches: '20K+', competitors: 'Medium', avgCPC: '£2.00' },
      localKeywords: [
        'web designer weston bath',
        'website design weston bath',
        'web design ba1',
        'plumber Weston Bath',
        'electrician Weston Bath',
        'builder Weston Bath',
        'plumber Bath',
        'electrician Bath',
        'handyman Weston',
      ],
      ctaHeadline: 'Ready to Get More Customers in Weston, Bath?',
      ctaSubhead: 'Join Bath businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Bath Areas We Serve',
      nearbyAreas: ['bath', 'odd-down-bath', 'widcombe-bath', 'larkhall-bath', 'twerton-bath', 'keynsham', 'saltford'],
      faqs: [
        { question: 'Do you cover Weston, Bath?', answer: 'Yes — Weston specifically, plus the broader BA1 north Bath area including Newbridge and Kelston Road, so you pick up all the relevant searches.' },
        { question: 'What trades do well in Weston?', answer: 'Builders doing extensions and loft conversions, landscapers, heating engineers, and decorators do particularly well. Weston\'s owner-occupied housing generates planned, quality work rather than just call-outs.' },
        { question: 'How much for a website in Weston?', answer: 'From £250 for a one-page site, £350 for three pages. Adding GBP optimisation (£100) gives you the best shot at appearing in the map pack when customers search for trades in Weston and north Bath.' },
        { question: 'How much does website design cost in Weston?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on, and hosting is free for 6 months, then £50/year.' },
        { question: 'Can you get my business into the Google map pack in Weston?', answer: 'Yes. Google Business Profile optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Weston and Bath searches to help you rank in the map pack.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Weston and Bath.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bath Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'oldfield-park-bath': {
      name: 'Oldfield Park',
      fullName: 'Oldfield Park, Bath',
      parentSlug: 'bath',
      designerHref: '/website-designer-bath',
      county: 'Somerset',
      postcodes: ['BA2'],
      heroImage: '/images/areas/bath-roman-baths.webp',
      metaTitle: 'Website design Oldfield Park Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Oldfield Park, Bath from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Oldfield Park, Bath',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Oldfield Park is a dense Victorian neighbourhood south of the River Avon, close to Bath Spa station and Green Park. It\'s one of Bath\'s most populated residential areas — packed with terraced housing, a significant student and young professional community, and a mix of owner-occupiers and rental properties. The high density of rental housing means consistent demand for tradespeople: landlords needing EICRs and Gas Safe certificates, letting agents looking for reliable plumbers and electricians, and homeowners tackling the kind of Victorian property maintenance that never fully goes away.',
      extendedDescription: 'Oldfield Park is also home to a mix of independent shops and businesses along Moorland Road, so digital visibility here helps both consumer trades and service businesses pick up local work.',
      introParagraphs: [
        'Oldfield Park is one of Bath\'s busiest residential neighbourhoods — Victorian terraces shared between families, professionals and students, with the Moorland Road shops at its heart. The rental stock means landlords constantly need reliable trades at short notice.',
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Oldfield Park\'s dense rental market means letting agents and landlords are constantly looking for trades. If you\'re an electrician, plumber, or heating engineer in Bath, this is one of the most consistent sources of work in the city.',
      whyBullets: [
        { title: 'Rental market demand', text: 'High rental density means landlords need compliant electrical, gas, and plumbing work regularly. Getting visible here means becoming the go-to trade for letting agents across Bath.' },
        { title: 'Student and young professional mix', text: 'HMO properties need frequent maintenance — a visible online presence gets you the landlord relationship before competitors do.' },
        { title: 'Moorland Road commercial strip', text: 'Independent businesses along Moorland Road also need trades for their premises — retail fit-outs, electrical upgrades, and commercial plumbing jobs.' },
        { title: 'Landlord and letting demand', text: 'Student and professional rentals around Moorland Road mean landlords who need plumbers, electricians and decorators they can call again and again.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Oldfield Park, Bath.', href: '/website-designer-bath' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Oldfield Park and Bath + trade keywords.', href: '/local-seo/bath' },
      ],
      servicesHeading: 'Website design in Oldfield Park, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Oldfield Park and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Moorland Road', 'Green Park Station', 'Bath Spa Station (nearby)', 'River Avon', 'Oldfield Park train station'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Oldfield Park and Bath places.',
      stats: { businesses: '450+', monthlySearches: '22K+', competitors: 'Medium', avgCPC: '£2.00' },
      localKeywords: [
        'web designer oldfield park bath',
        'website design oldfield park bath',
        'web design ba2',
        'plumber Oldfield Park Bath',
        'electrician Oldfield Park Bath',
        'builder Oldfield Park Bath',
        'plumber Bath',
        'electrician Bath',
        'decorator Oldfield Park',
      ],
      ctaHeadline: 'Ready to Get More Customers in Oldfield Park, Bath?',
      ctaSubhead: 'Join Bath businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Bath Areas We Serve',
      nearbyAreas: ['bath', 'widcombe-bath', 'bear-flat-bath', 'odd-down-bath', 'twerton-bath', 'keynsham'],
      faqs: [
        { question: 'Do you cover Oldfield Park?', answer: 'Yes. We target Oldfield Park and the wider BA2 south city area including Twerton, Bear Flat, and Widcombe so you pick up enquiries across south Bath.' },
        { question: 'Can you help me target landlords in Oldfield Park?', answer: 'Absolutely. Oldfield Park has a high density of rental properties — we can structure your website and GBP to appeal to landlords and letting agents searching for certified trades in Bath.' },
        { question: 'How much for a website covering Oldfield Park?', answer: 'From £250. Add the GBP optimisation for £100 and you\'re set up to appear when landlords, letting agents, and homeowners search for trades in Oldfield Park and south Bath.' },
        { question: 'How much does website design cost in Oldfield Park?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on, and hosting is free for 6 months, then £50/year.' },
        { question: 'Can you get my business into the Google map pack in Oldfield Park?', answer: 'Yes. Google Business Profile optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Oldfield Park and Bath searches to help you rank in the map pack.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Oldfield Park and Bath.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bath Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'bear-flat-bath': {
      name: 'Bear Flat',
      fullName: 'Bear Flat, Bath',
      parentSlug: 'bath',
      designerHref: '/website-designer-bath',
      county: 'Somerset',
      postcodes: ['BA2'],
      heroImage: '/images/areas/bath-roman-baths.webp',
      metaTitle: 'Website design Bear Flat Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Bear Flat, Bath from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Bear Flat, Bath',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Bear Flat is one of Bath\'s most desirable south-city neighbourhoods — a hilltop community with its own distinct high street along Bear Flat Road, a mix of independent cafes, delis, and local shops, and predominantly stone Victorian and Edwardian houses. It sits on the ridge between Oldfield Park and Combe Down, and residents tend to be professional families and established owner-occupiers. Demand for quality trades is strong: builders and decorators working on period homes, heating engineers replacing ageing systems, and landscapers tackling the area\'s generous stone-walled gardens.',
      extendedDescription: 'Bear Flat\'s affluent demographic means customers are looking for quality work and are prepared to pay for it. Trades who show up professionally on Google and have good reviews win the best jobs here.',
      introParagraphs: [
        'Bear Flat sits just above the city centre on the Wellsway, its Poets\' Corner streets of Edwardian villas among Bath\'s most sought-after family addresses. Owners here maintain their homes properly and choose trades carefully — usually starting with a Google search.',
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Bear Flat customers have higher than average spending power and expect professional, quality trades. A well-built website with good reviews gets you in front of the right customers here.',
      whyBullets: [
        { title: 'Quality work from quality customers', text: 'Bear Flat\'s professional families and homeowners invest in their properties — extensions, refurbishments, landscaping, and quality finishes.' },
        { title: 'Stone houses need specialist trades', text: 'Period stone houses along the Bear Flat ridge need builders and decorators who understand lime mortar and period materials — market your specialism and stand out.' },
        { title: 'Google reviews carry weight here', text: 'In an area where word of mouth is strong, positive Google reviews tip undecided customers your way. We set up your profile so reviews are easy to collect.' },
        { title: 'Poets\' Corner property work', text: 'Edwardian villas mean lofts, extensions, sash windows and redecoration — quality work for trades who show up when Bear Flat searches.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Bear Flat, Bath.', href: '/website-designer-bath' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Bear Flat and Bath + trade keywords.', href: '/local-seo/bath' },
      ],
      servicesHeading: 'Website design in Bear Flat, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Bear Flat and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Bear Flat Road', 'Bloomfield Road', 'Bear Pub', 'Perrymead', 'Wells Road'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Bear Flat and Bath places.',
      stats: { businesses: '380+', monthlySearches: '19K+', competitors: 'Medium', avgCPC: '£1.90' },
      localKeywords: [
        'web designer bear flat bath',
        'website design bear flat bath',
        'web design ba2',
        'plumber Bear Flat Bath',
        'electrician Bear Flat Bath',
        'builder Bear Flat Bath',
        'plumber Bath',
        'electrician Bath',
        'handyman Bear Flat',
      ],
      ctaHeadline: 'Ready to Get More Customers in Bear Flat, Bath?',
      ctaSubhead: 'Join Bath businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Bath Areas We Serve',
      nearbyAreas: ['bath', 'odd-down-bath', 'oldfield-park-bath', 'combe-down-bath', 'widcombe-bath', 'keynsham'],
      faqs: [
        { question: 'Do you cover Bear Flat?', answer: 'Yes. We target Bear Flat and the wider south Bath area including Combe Down, Odd Down, and Southdown — so you pick up enquiries across the BA2 ridge.' },
        { question: 'What type of customers can I reach in Bear Flat?', answer: 'Predominantly professional families and homeowners in period stone properties. The area generates quality planned work — extensions, refurbishments, landscaping, and heritage decorating — rather than just emergency call-outs.' },
        { question: 'How much for a website in Bear Flat?', answer: 'From £250 for a one-page site, £350 for three pages. Bear Flat customers value quality, so a professionally designed site gives you a clear advantage over trades with no web presence.' },
        { question: 'How much does website design cost in Bear Flat?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on, and hosting is free for 6 months, then £50/year.' },
        { question: 'Can you get my business into the Google map pack in Bear Flat?', answer: 'Yes. Google Business Profile optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Bear Flat and Bath searches to help you rank in the map pack.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Bear Flat and Bath.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bath Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'bathampton-bath': {
      name: 'Bathampton',
      fullName: 'Bathampton, Bath',
      parentSlug: 'bath',
      designerHref: '/website-designer-bath',
      county: 'Somerset',
      postcodes: ['BA2'],
      heroImage: '/images/areas/bath-roman-baths.webp',
      metaTitle: 'Website design Bathampton Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Bathampton, near Bath from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Bathampton, near Bath',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Bathampton is a quiet village on the eastern edge of Bath, strung along the Kennet & Avon Canal between Bathwick and Batheaston. It\'s a well-established, largely owner-occupied community — stone houses, riverside cottages, and a handful of larger properties on the hillside. The George Inn is a local landmark. Residents tend to be professional families and retirees who prefer village life with easy access to Bath. Demand for trades runs to builders handling extensions and renovations, plumbers dealing with older plumbing, and landscapers working on the area\'s sizeable gardens.',
      extendedDescription: 'Bathampton is small in population but sits in a cluster of similar villages — Bathwick, Batheaston, and Bathford — so a trade serving Bathampton naturally picks up work across the whole east Bath corridor.',
      introParagraphs: [
        'Bathampton village sits on the canal two miles east of Bath, its stone houses and waterside setting making it one of the city\'s most desirable fringes. Combined with Bathwick and the eastern villages, it\'s a quality patch for trades who target it directly.',
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Bathampton is small but sits within a cluster of affluent east Bath villages where quality trades are in consistent demand. One website and GBP covers Bathampton, Bathwick, Batheaston, and Bathford in one go.',
      whyBullets: [
        { title: 'East Bath corridor coverage', text: 'Target Bathampton and you naturally cover Bathwick, Batheaston, and Bathford — a single campaign serving a connected cluster of well-off villages.' },
        { title: 'Canal-side and hillside properties', text: 'Bathampton\'s mix of canal-side cottages and hill properties generates landscaping, drainage, and structural work that\'s harder to win without a web presence.' },
        { title: 'Low competition, quality customers', text: 'Very few trades specifically target Bathampton — get in first and you\'re the go-to for the whole east Bath village cluster.' },
        { title: 'Canal-side village demand', text: 'Stone properties and mature gardens mean steady work for builders, decorators and landscapers — with almost no local online competition.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Bathampton, near Bath.', href: '/website-designer-bath' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Bathampton and Bath + trade keywords.', href: '/local-seo/bath' },
      ],
      servicesHeading: 'Website design in Bathampton, near Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Bathampton and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['George Inn, Bathampton', 'Kennet & Avon Canal', 'Bathampton Mill', 'St Nicholas Church', 'Warminster Road'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Bathampton and Bath places.',
      stats: { businesses: '280+', monthlySearches: '14K+', competitors: 'Low-Medium', avgCPC: '£1.70' },
      localKeywords: [
        'web designer bathampton',
        'website design bathampton',
        'web design ba2',
        'plumber Bathampton Bath',
        'electrician Bathampton Bath',
        'builder Bathampton Bath',
        'plumber Bath',
        'electrician Bath',
        'handyman Bathampton',
      ],
      ctaHeadline: 'Ready to Get More Customers in Bathampton, near Bath?',
      ctaSubhead: 'Join Bath area businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Bath Areas We Serve',
      nearbyAreas: ['bath', 'widcombe-bath', 'larkhall-bath', 'keynsham', 'saltford'],
      faqs: [
        { question: 'Do you cover Bathampton?', answer: 'Yes. We target Bathampton and the east Bath village cluster — Bathwick, Batheaston, and Bathford — so you\'re visible across the whole corridor.' },
        { question: 'Is Bathampton worth targeting as a trade?', answer: 'Yes. The village is small but the surrounding cluster of east Bath villages gives you a good-sized patch of quality, owner-occupied properties. Landscapers, builders, plumbers, and electricians all do well here.' },
        { question: 'How much for a website covering Bathampton?', answer: 'From £250. Because Bathampton sits within a cluster of villages, we structure the targeting to cover Bathwick, Batheaston, and Bathford too — so you get maximum reach from one site.' },
        { question: 'How much does website design cost in Bathampton?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on, and hosting is free for 6 months, then £50/year.' },
        { question: 'Can you get my business into the Google map pack in Bathampton?', answer: 'Yes. Google Business Profile optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Bathampton and Bath searches to help you rank in the map pack.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Bathampton and Bath.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bath Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'bathwick-bath': {
      name: 'Bathwick',
      fullName: 'Bathwick, Bath',
      parentSlug: 'bath',
      designerHref: '/website-designer-bath',
      county: 'Somerset',
      postcodes: ['BA2'],
      heroImage: '/images/areas/bath-roman-baths.webp',
      metaTitle: 'Website design Bathwick Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Bathwick, Bath from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Bathwick, Bath',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Bathwick is an elegant area on the eastern edge of Bath city centre — home to Sydney Gardens (Bath\'s only surviving 18th-century pleasure garden), the Kennet & Avon Canal, and the eastern end of Great Pulteney Street. It\'s a mix of Georgian and Victorian townhouses, many divided into flats, and a significant student population due to proximity to the University of Bath\'s Claverton Down campus. The combination of period properties, rental conversions, and student HMOs creates consistent demand for electricians, plumbers, and decorators — with an additional layer of quality homeowner work from the Georgian terraces on the canal side.',
      extendedDescription: 'Bathwick\'s central location means trade searches here often overlap with central Bath. We target Bathwick alongside Bath city to ensure you don\'t miss any enquiries from the eastern city centre.',
      introParagraphs: [
        'Bathwick is Bath\'s grand east side — Great Pulteney Street, Sydney Gardens and the Holburne Museum, with some of the city\'s most valuable Georgian property. Owners and managing agents here expect polished, professional trades and check credentials online first.',
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Bathwick sits between the city centre and the university — two different types of demand. Landlords managing student HMOs need certified trades fast; Georgian townhouse owners need quality craftspeople for period work.',
      whyBullets: [
        { title: 'HMO and rental property demand', text: 'The student population in Bathwick means landlords regularly need electrical certificates, gas inspections, and plumbing call-outs.' },
        { title: 'Georgian property work', text: 'The Georgian and Victorian townhouses on the canal side need specialist trades for lime plaster, sash window repairs, and period decorating.' },
        { title: 'Close to city centre', text: 'Bathwick searches blend with central Bath searches — we target both so you pick up enquiries from across the east city.' },
        { title: 'Georgian property, premium work', text: 'Listed terraces off Great Pulteney Street need specialist trades — the work pays well and a credible website wins it.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Bathwick, Bath.', href: '/website-designer-bath' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Bathwick and Bath + trade keywords.', href: '/local-seo/bath' },
      ],
      servicesHeading: 'Website design in Bathwick, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Bathwick and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Pulteney Bridge', 'Sydney Gardens', 'Kennet & Avon Canal', 'University of Bath'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Bathwick and Bath places.',
      stats: { businesses: '400+', monthlySearches: '20K+', competitors: 'Medium', avgCPC: '£2.00' },
      localKeywords: [
        'web designer bathwick bath',
        'website design bathwick bath',
        'web design ba2',
        'plumber Bathwick Bath',
        'electrician Bathwick Bath',
        'builder Bathwick Bath',
        'plumber Bath',
        'electrician Bath',
        'handyman Bathwick',
      ],
      ctaHeadline: 'Ready to Get More Customers in Bathwick, Bath?',
      ctaSubhead: 'Join Bath businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Bath Areas We Serve',
      nearbyAreas: ['bath', 'widcombe-bath', 'bathampton-bath', 'larkhall-bath', 'keynsham'],
      faqs: [
        { question: 'Do you cover Bathwick?', answer: 'Yes. We target Bathwick and combine it with central Bath targeting so you\'re visible for searches from both the eastern city and the canal-side areas.' },
        { question: 'Can you help me target landlords and letting agents in Bathwick?', answer: 'Yes. Bathwick has a significant rental and student HMO market. We structure your website and GBP to appear for landlord-relevant searches — EICRs, gas safety certificates, emergency plumbers in Bath.' },
        { question: 'How much for a website covering Bathwick?', answer: 'From £250 for a one-page site. The GBP optimisation add-on (£100) is particularly valuable here — it gets you into map pack results for electrician and plumber searches in Bathwick and east Bath.' },
        { question: 'How much does website design cost in Bathwick?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on, and hosting is free for 6 months, then £50/year.' },
        { question: 'Can you get my business into the Google map pack in Bathwick?', answer: 'Yes. Google Business Profile optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Bathwick and Bath searches to help you rank in the map pack.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Bathwick and Bath.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bath Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'southdown-bath': {
      name: 'Southdown',
      fullName: 'Southdown, Bath',
      parentSlug: 'bath',
      designerHref: '/website-designer-bath',
      county: 'Somerset',
      postcodes: ['BA2'],
      heroImage: '/images/areas/bath-roman-baths.webp',
      metaTitle: 'Website design Southdown Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Southdown, Bath from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Southdown, Bath',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Southdown is a settled residential neighbourhood in south Bath, bounded by Bear Flat to the north and Odd Down to the south. It\'s a largely family area — a mix of 1930s semis and some earlier terraces, sitting along the Bloomfield Road and Southdown Road corridors. It\'s not as well-known as Bear Flat, which means less digital competition and easier rankings for trades. Southdown residents search for the same services as the rest of south Bath — plumbers, electricians, builders, decorators, heating engineers — and often use Bath as a catch-all location rather than the neighbourhood name.',
      extendedDescription: 'Trades covering Southdown naturally serve Bear Flat, Odd Down, and Combe Down too — one website targeting the BA2 south ridge covers the whole patch.',
      introParagraphs: [
        'Southdown, on the south-western slopes, is one of Bath\'s biggest family neighbourhoods — streets of solid inter-war semis with long-term residents who look after their homes. Steady, repeat trade work with far less competition than central Bath.',
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Southdown is sandwiched between Bear Flat and Odd Down — a steady family neighbourhood with less digital competition than the better-known areas nearby. Easier to rank, same quality of customer.',
      whyBullets: [
        { title: 'Lower competition than Bear Flat', text: 'Fewer trades specifically target Southdown compared to Bear Flat or Odd Down — easier to get into the map pack here.' },
        { title: '1930s housing stock needs maintenance', text: 'Semi-detached properties from the 1930s need regular boiler upgrades, rewires, and damp treatment — steady bread-and-butter work for the right trades.' },
        { title: 'Covers the BA2 south corridor', text: 'Target Southdown and we also cover Bear Flat, Odd Down, and Combe Down so you\'re visible across the full south ridge.' },
        { title: 'Solid, repeat family work', text: 'Southdown\'s semis need kitchens, bathrooms, rewires and decorating on a steady cycle — be visible and the repeat work follows.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Southdown, Bath.', href: '/website-designer-bath' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Southdown and Bath + trade keywords.', href: '/local-seo/bath' },
      ],
      servicesHeading: 'Website design in Southdown, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Southdown and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Southdown Road', 'Bloomfield Road', 'Bear Flat (nearby)', 'Odd Down (nearby)', 'Wells Road'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Southdown and Bath places.',
      stats: { businesses: '380+', monthlySearches: '18K+', competitors: 'Medium', avgCPC: '£1.90' },
      localKeywords: [
        'web designer southdown bath',
        'website design southdown bath',
        'web design ba2',
        'plumber Southdown Bath',
        'electrician Southdown Bath',
        'builder Southdown Bath',
        'plumber Bath',
        'electrician Bath',
        'handyman Southdown',
      ],
      ctaHeadline: 'Ready to Get More Customers in Southdown, Bath?',
      ctaSubhead: 'Join Bath businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Bath Areas We Serve',
      nearbyAreas: ['bath', 'bear-flat-bath', 'odd-down-bath', 'combe-down-bath', 'widcombe-bath', 'keynsham'],
      faqs: [
        { question: 'Do you cover Southdown?', answer: 'Yes. We target Southdown and the wider BA2 south Bath area — Bear Flat, Odd Down, and Combe Down — so you pick up enquiries across the ridge.' },
        { question: 'Is Southdown worth targeting for a trade website?', answer: 'Yes — and the competition is lower than better-known areas like Bear Flat. If you cover south Bath generally, having Southdown in your targeting means you pick up enquiries that more centralised competitors miss.' },
        { question: 'How much for a website covering Southdown?', answer: 'From £250. We structure the site to cover Southdown, Bear Flat, and Odd Down in one campaign so you get maximum reach across south Bath.' },
        { question: 'How much does website design cost in Southdown?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on, and hosting is free for 6 months, then £50/year.' },
        { question: 'Can you get my business into the Google map pack in Southdown?', answer: 'Yes. Google Business Profile optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Southdown and Bath searches to help you rank in the map pack.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Southdown and Bath.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bath Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'batheaston-bath': {
      name: 'Batheaston',
      fullName: 'Batheaston, near Bath',
      parentSlug: 'bath',
      designerHref: '/website-designer-bath',
      county: 'Somerset',
      postcodes: ['BA1'],
      heroImage: '/images/areas/bath-roman-baths.webp',
      metaTitle: 'Website design Batheaston Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Batheaston, near Bath from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Batheaston, near Bath',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Batheaston is a sizeable village east of Bath along the A4 — it\'s grown considerably with modern housing development and now has a population large enough to sustain local trade demand in its own right. The village has a primary school, a Co-op, a village hall, and a mix of older stone houses alongside newer private estates. Residents here tend to be families and working professionals who have chosen a village setting within easy commuting distance of Bath and Bristol. Demand for trades covers all the usual: plumbers, electricians, builders doing extensions, decorators, and heating engineers.',
      extendedDescription: 'Batheaston sits on the A4 corridor to Box and Corsham, so a trade visible in Batheaston also picks up searches from Bathampton, Bathford, and the surrounding villages along the route.',
      introParagraphs: [
        'Batheaston runs along the Avon valley east of Bath, a proper village with its own shops and school. With Bathford and Bathampton alongside, the eastern villages form a quality cluster for trades covering the A4 corridor.',
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BA1', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Batheaston is bigger than it looks — significant housing development over recent decades has given it a real residential density that generates consistent trade demand. And because it\'s east of Bath, it\'s underserved by city-centre-focused tradespeople.',
      whyBullets: [
        { title: 'New housing needs new services', text: 'Modern estates around Batheaston need plumbers, electricians, and builders for snag lists, extensions, and upgrades as properties age.' },
        { title: 'A4 corridor reach', text: 'Rank in Batheaston and you pick up searches from Bathampton, Bathford, and Box too — a natural east Bath cluster for one campaign.' },
        { title: 'Families and commuters', text: 'The demographic is working families and commuters — reliable, planned work rather than emergency-only call-outs, with good average job values.' },
        { title: 'The A4 village corridor', text: 'Target Batheaston with Bathford and Bathampton and one campaign covers the whole eastern approach to Bath.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Batheaston, near Bath.', href: '/website-designer-bath' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Batheaston and Bath + trade keywords.', href: '/local-seo/bath' },
      ],
      servicesHeading: 'Website design in Batheaston, near Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Batheaston and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Batheaston Village Hall', 'St John the Baptist Church', 'A4 corridor', 'American Museum in Britain (Claverton)', 'Batheaston bypass'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Batheaston and Bath places.',
      stats: { businesses: '300+', monthlySearches: '15K+', competitors: 'Low-Medium', avgCPC: '£1.70' },
      localKeywords: [
        'web designer batheaston',
        'website design batheaston',
        'web design ba1',
        'plumber Batheaston Bath',
        'electrician Batheaston Bath',
        'builder Batheaston Bath',
        'plumber Bath',
        'electrician Bath',
        'handyman Batheaston',
      ],
      ctaHeadline: 'Ready to Get More Customers in Batheaston, near Bath?',
      ctaSubhead: 'Join Bath area businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Bath Areas We Serve',
      nearbyAreas: ['bath', 'bathford-bath', 'bathampton-bath', 'bathwick-bath', 'keynsham', 'saltford'],
      faqs: [
        { question: 'Do you cover Batheaston?', answer: 'Yes. We target Batheaston specifically and the A4 east Bath corridor — Bathampton, Bathford, and Box — so you\'re visible across the full eastern patch.' },
        { question: 'Is Batheaston worth targeting as a trade?', answer: 'Yes. The village has grown significantly and has real residential density. Combined with the adjacent villages along the A4, there\'s a good patch of work to be won — and competition from Bath-based trades is low for the specifically village-area searches.' },
        { question: 'How much for a website covering Batheaston?', answer: 'From £250 for a one-page site. We structure the targeting to cover Batheaston and the surrounding A4 villages so you get maximum reach from one campaign.' },
        { question: 'How much does website design cost in Batheaston?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on, and hosting is free for 6 months, then £50/year.' },
        { question: 'Can you get my business into the Google map pack in Batheaston?', answer: 'Yes. Google Business Profile optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Batheaston and Bath searches to help you rank in the map pack.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Batheaston and Bath.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bath Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'walcot-bath': {
      name: 'Walcot',
      fullName: 'Walcot, Bath',
      parentSlug: 'bath',
      designerHref: '/website-designer-bath',
      county: 'Somerset',
      postcodes: ['BA1'],
      heroImage: '/images/areas/bath-roman-baths.webp',
      metaTitle: 'Website design Walcot Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Walcot, Bath from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Walcot, Bath',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Walcot is a distinct neighbourhood at the northern edge of Bath city centre, best known for Walcot Street — Bath\'s most bohemian strip, lined with antique dealers, independent retailers, craft businesses, and the occasional gallery. Beyond the street, the area transitions into a mix of period flats and terraced housing spread up the slopes towards Larkhall. It\'s a creative, mixed community — independent business owners, artists, young professionals, and long-established residents — all of whom need local trades when things go wrong or when they\'re improving their period properties.',
      extendedDescription: 'Walcot\'s proximity to the city centre means trade searches here overlap heavily with central Bath. We target both together so you don\'t lose enquiries from either.',
      introParagraphs: [
        'Walcot Street calls itself Bath\'s artisan quarter — antiques, independents and craft businesses on the street, with period flats and terraces climbing towards Larkhall behind. Independent businesses and period-property owners both find their trades on Google.',
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BA1', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Walcot is right on the edge of the city centre — trade searches from Walcot blend into Bath city searches. We target both so you pick up all of it, from emergency call-outs to planned renovation work on period properties.',
      whyBullets: [
        { title: 'Independent business and residential mix', text: 'Walcot Street businesses need trades for fit-outs and maintenance. The surrounding residential areas need the same trades for their period homes.' },
        { title: 'Period property demand', text: 'The terraces and period flats in Walcot generate steady demand for decorators, plasterers, and builders who understand older properties.' },
        { title: 'Close enough to target central Bath', text: 'A Walcot campaign also captures city centre searches — one targeted site covers the upper city from Walcot to Larkhall and across to the London Road.' },
        { title: 'Artisan quarter fit-outs', text: 'Walcot Street shops and studios need fit-outs and maintenance; the terraces behind need period-property trades. Both search locally.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Walcot, Bath.', href: '/website-designer-bath' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Walcot and Bath + trade keywords.', href: '/local-seo/bath' },
      ],
      servicesHeading: 'Website design in Walcot, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Walcot and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Walcot Street', 'London Road', 'Bell Inn', 'St Michael\'s Without Church', 'Paragon'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Walcot and Bath places.',
      stats: { businesses: '420+', monthlySearches: '21K+', competitors: 'Medium', avgCPC: '£2.00' },
      localKeywords: [
        'web designer walcot bath',
        'website design walcot bath',
        'web design ba1',
        'plumber Walcot Bath',
        'electrician Walcot Bath',
        'builder Walcot Bath',
        'plumber Bath',
        'electrician Bath',
        'decorator Walcot',
      ],
      ctaHeadline: 'Ready to Get More Customers in Walcot, Bath?',
      ctaSubhead: 'Join Bath businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Bath Areas We Serve',
      nearbyAreas: ['bath', 'weston-bath', 'larkhall-bath', 'widcombe-bath', 'keynsham'],
      faqs: [
        { question: 'Do you cover Walcot?', answer: 'Yes. We target Walcot and combine it with Bath city centre and Larkhall targeting, so you\'re visible for the full upper city north corridor.' },
        { question: 'Can you help independent businesses on Walcot Street?', answer: 'Yes. We work with both trades and independent businesses. If you run a shop, studio, or service business along Walcot Street and need a website and local visibility, we can help from £250.' },
        { question: 'How much for a website covering Walcot?', answer: 'From £250 for a one-page site. Because Walcot is close to the city centre, the site and GBP naturally picks up Bath-wide searches too — good value for the targeting you get.' },
        { question: 'How much does website design cost in Walcot?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on, and hosting is free for 6 months, then £50/year.' },
        { question: 'Can you get my business into the Google map pack in Walcot?', answer: 'Yes. Google Business Profile optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Walcot and Bath searches to help you rank in the map pack.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Walcot and Bath.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bath Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'bathford-bath': {
      name: 'Bathford',
      fullName: 'Bathford, near Bath',
      parentSlug: 'bath',
      designerHref: '/website-designer-bath',
      county: 'Somerset',
      postcodes: ['BA1'],
      heroImage: '/images/areas/bath-roman-baths.webp',
      metaTitle: 'Website design Bathford Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Bathford, near Bath from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Bathford, near Bath',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Bathford is a small and thoroughly pleasant village on the eastern edge of Bath, tucked into the valley of the By Brook where it meets the Avon. It\'s a village of stone houses and country lanes, with St Swithin\'s Church as its centrepiece and a strong sense of quiet rural community that\'s rare this close to a city. Residents are predominantly affluent homeowners — many with sizeable stone properties that need specialist trades for maintenance and renovation. Builders experienced in Bath stone and lime mortar, decorators who understand period interiors, landscapers working with dry-stone walls and mature gardens — these are the trades that do well in Bathford.',
      extendedDescription: 'Bathford\'s small population means hyperlocal search volume is low, but combined with Batheaston, Box, and Bathampton, a trade visible across the east Bath A4 corridor picks up a worthwhile cluster of quality jobs.',
      introParagraphs: [
        'Bathford climbs the hillside where the By Brook meets the Avon east of Bath — a quiet, affluent stone village whose properties need specialist care. Very few trades target it directly online, so the first to do so becomes the village default.',
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BA1', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Bathford is small but its affluent homeowners invest in their properties. Combined with neighbouring villages, there\'s a quality cluster of east Bath work to be won — and very few trades specifically target it.',
      whyBullets: [
        { title: 'Specialist stone property work', text: 'Bathford\'s stone houses need builders and decorators who understand Bath stone, lime mortar, and period materials. If that\'s your specialism, a targeted website gets you in front of exactly the right customers.' },
        { title: 'Low competition, quality customers', text: 'Almost no trades specifically target Bathford online — the first to do so becomes the default choice for the whole village.' },
        { title: 'Covers the east Bath village cluster', text: 'We target Bathford alongside Batheaston, Bathampton, and Box so you cover the full A36/A4 eastern corridor with one campaign.' },
        { title: 'Affluent village, no competition', text: 'Bathford homeowners pay for quality work on stone properties — and almost nobody targets their searches specifically.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Bathford, near Bath.', href: '/website-designer-bath' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Bathford and Bath + trade keywords.', href: '/local-seo/bath' },
      ],
      servicesHeading: 'Website design in Bathford, near Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Bathford and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['St Swithin\'s Church, Bathford', 'Bathford Hill', 'By Brook valley', 'A36 Bradford Road', 'Crown Inn'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Bathford and Bath places.',
      stats: { businesses: '280+', monthlySearches: '14K+', competitors: 'Low-Medium', avgCPC: '£1.70' },
      localKeywords: [
        'web designer bathford',
        'website design bathford',
        'web design ba1',
        'plumber Bathford Bath',
        'electrician Bathford Bath',
        'builder Bathford Bath',
        'plumber Bath',
        'electrician Bath',
        'handyman Bathford',
      ],
      ctaHeadline: 'Ready to Get More Customers in Bathford, near Bath?',
      ctaSubhead: 'Join Bath area businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Bath Areas We Serve',
      nearbyAreas: ['bath', 'batheaston-bath', 'bathampton-bath', 'bathwick-bath', 'keynsham', 'saltford'],
      faqs: [
        { question: 'Do you cover Bathford?', answer: 'Yes. We target Bathford and the east Bath village cluster — Batheaston, Bathampton, and Box — so you pick up searches across the whole eastern corridor.' },
        { question: 'What trades do well in Bathford?', answer: 'Builders experienced in Bath stone and lime mortar, decorators doing period interiors, landscapers working with dry-stone walls and established gardens. The village has affluent homeowners who invest in quality work.' },
        { question: 'How much for a website covering Bathford?', answer: 'From £250. Because Bathford sits in a cluster of east Bath villages, we combine the targeting so one campaign covers the full patch — better return on the investment.' },
        { question: 'How much does website design cost in Bathford?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on, and hosting is free for 6 months, then £50/year.' },
        { question: 'Can you get my business into the Google map pack in Bathford?', answer: 'Yes. Google Business Profile optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Bathford and Bath searches to help you rank in the map pack.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Bathford and Bath.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bath Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },

    'city-centre-bath': {
      name: 'Bath City Centre',
      fullName: 'Bath City Centre',
      parentSlug: 'bath',
      designerHref: '/website-designer-bath',
      county: 'Somerset',
      postcodes: ['BA1'],
      heroImage: '/images/areas/bath-roman-baths.webp',
      metaTitle: 'Website design Bath City Centre | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Bath city centre from £250. We also offer Google Business Profile and local SEO as add-ons so BA1 businesses get found on Google. Free check.',
      heroHeadline: 'Website design in Bath city centre',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Bath city centre packs an enormous amount of commerce into a small footprint — the Abbey Quarter around the Roman Baths, the smart retailers of Milsom Street, the restaurants and bars around Kingsmead Square, and the Theatre Royal at Saw Close. Behind the visitor economy sits a dense working city: independent shops, cafés and restaurants, professional services firms, clinics, studios and salons, all trading from Georgian buildings that need constant maintenance. The BA1 1 and BA1 2 postcodes generate two kinds of search demand — customers looking for city centre businesses, and city centre businesses looking for trades.',
      extendedDescription: 'The centre is where Bath\'s search volume is densest and where a poor website costs you most — customers here compare several businesses before making contact. A fast site and a properly set up Google Business Profile are what separate the businesses that get found from the ones that don\'t.',
      heroStats: [
        { value: 'Heart of', label: 'Bath' },
        { value: 'BA1', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'City centre searches carry the highest intent and the highest competition in Bath. Whether you trade from the centre or serve it, being in the Map Pack for central BA1 searches is worth real money.',
      whyBullets: [
        { title: 'Dense commercial demand', text: 'Hundreds of independent businesses between the Abbey, Milsom Street, Kingsmead Square and Saw Close — all needing websites, and all needing trades for fit-outs, maintenance and repairs.' },
        { title: 'Listed building expertise sells', text: 'Almost every building in central Bath is listed. Trades who can show experience with Georgian properties, lime plaster and heritage compliance win the premium work — your website is where you prove it.' },
        { title: 'One page covers the quarters', text: 'Abbey Quarter, Milsom Street, Kingsmead and Saw Close are one search market. We target the centre as a whole so you pick up all of it, plus the surrounding BA1 neighbourhoods.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Bath city centre.', href: '/website-designer-bath' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Bath city centre + trade keywords.', href: '/local-seo/bath' },
      ],
      servicesHeading: 'Website design in Bath city centre — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in central Bath search:',
      industries: ['Retail', 'Hospitality', 'Professional Services', 'Trades'],
      landmarks: ['Bath Abbey', 'Roman Baths', 'Milsom Street', 'Kingsmead Square', 'Theatre Royal, Saw Close'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference central Bath places.',
      stats: { businesses: '900+', monthlySearches: '30K+', competitors: 'High', avgCPC: '£2.40' },
      localKeywords: [
        'web designer bath city centre',
        'website design bath',
        'plumber bath city centre',
        'electrician bath BA1',
        'shopfitter bath',
        'restaurant website bath',
      ],
      ctaHeadline: 'Ready to Get More Customers in Bath City Centre?',
      ctaSubhead: 'Join Bath businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Bath Areas We Serve',
      nearbyAreas: ['bath', 'walcot-bath', 'bathwick-bath', 'widcombe-bath', 'lansdown-bath'],
      faqs: [
        { question: 'Do you cover Bath city centre?', answer: 'Yes. We target the whole central area — the Abbey Quarter, Milsom Street, Kingsmead Square and Saw Close — as one campaign, so you\'re visible across BA1 1 and BA1 2.' },
        { question: 'I run a shop or restaurant in the centre — can you help?', answer: 'Yes. We build sites for independent retailers, cafés, restaurants and service businesses as well as trades. From £250 for a fast one-page site, with Google Business Profile optimisation at £100 so you show up on Maps.' },
        { question: 'Is the city centre harder to rank in than the rest of Bath?', answer: 'It\'s the most competitive part of Bath, but most central businesses still have slow or dated websites. A fast site plus a properly optimised Google listing beats most of the competition — we\'ve done it for Bath businesses already.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for central Bath.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bath Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'lansdown-bath': {
      name: 'Lansdown',
      fullName: 'Lansdown & Camden, Bath',
      parentSlug: 'bath',
      designerHref: '/website-designer-bath',
      county: 'Somerset',
      postcodes: ['BA1'],
      heroImage: '/images/areas/bath-roman-baths.webp',
      metaTitle: 'Website design Lansdown Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Lansdown and Camden, Bath from £250. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Lansdown & Camden, Bath',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Lansdown climbs the hill directly north of Bath city centre, from Camden Crescent and Lansdown Crescent up towards Beckford\'s Tower and the racecourse. It\'s one of Bath\'s most affluent residential areas — grand Georgian crescents, large detached villas and substantial family homes, most of them listed and all of them needing regular, high-quality maintenance. The Camden side, around Camden Road, adds a strip of independent shops and a dense pocket of period terraces with the same appetite for good trades.',
      extendedDescription: 'Lansdown homeowners spend properly on their properties and choose trades carefully — they research online before they call. There\'s very little hyperlocal competition for Lansdown searches, so a trade who targets the area directly becomes the obvious choice.',
      heroStats: [
        { value: 'Part of', label: 'Bath' },
        { value: 'BA1', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Lansdown is quality-of-work territory — big listed properties, owners who invest in them, and hardly any trades targeting the area specifically online.',
      whyBullets: [
        { title: 'High-value period property work', text: 'The crescents and villas of Lansdown need builders, decorators and roofers who understand Bath stone, lime mortar and listed building consent. That work pays well and repeats.' },
        { title: 'Customers who research first', text: 'Lansdown homeowners compare trades online before calling. A professional website with real local proof is what wins the enquiry.' },
        { title: 'Covers the north Bath corridor', text: 'We target Lansdown and Camden together with the city centre and Larkhall, so one campaign covers the whole northern slope of the city.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Lansdown, Bath.', href: '/website-designer-bath' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Lansdown and Bath + trade keywords.', href: '/local-seo/bath' },
      ],
      servicesHeading: 'Website design in Lansdown, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Lansdown and Bath search:',
      industries: ['Trades', 'Professional Services', 'Construction', 'Retail'],
      landmarks: ['Lansdown Crescent', 'Camden Crescent', 'Beckford\'s Tower', 'Bath Racecourse', 'Camden Road'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Lansdown and Bath places.',
      stats: { businesses: '350+', monthlySearches: '18K+', competitors: 'Low-Medium', avgCPC: '£1.90' },
      localKeywords: [
        'plumber Lansdown Bath',
        'electrician Lansdown Bath',
        'builder Lansdown Bath',
        'decorator Camden Bath',
        'plumber Bath',
        'roofer Lansdown',
      ],
      ctaHeadline: 'Ready to Get More Customers in Lansdown, Bath?',
      ctaSubhead: 'Join Bath businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Bath Areas We Serve',
      nearbyAreas: ['bath', 'city-centre-bath', 'walcot-bath', 'larkhall-bath', 'weston-bath'],
      faqs: [
        { question: 'Do you cover Lansdown and Camden?', answer: 'Yes. We target Lansdown and Camden together with the city centre and Larkhall, so you\'re visible across the whole north Bath corridor from the crescents up to the racecourse.' },
        { question: 'What trades do well in Lansdown?', answer: 'Builders, decorators, roofers and landscapers who can handle listed Georgian properties. Lansdown homeowners pay for quality and stay loyal to trades who deliver it — one good job often becomes a street\'s worth of work.' },
        { question: 'How much for a website covering Lansdown?', answer: 'From £250 for a one-page site. Because Lansdown borders the city centre, the site and your Google profile naturally pick up central Bath searches too.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Lansdown and Bath.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bath Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },

    // Sub-areas: Keynsham
    'bitton-keynsham': {
      name: 'Bitton',
      fullName: 'Bitton, near Keynsham',
      parentSlug: 'keynsham',
      county: 'Bristol',
      postcodes: ['BS30', 'BS31'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website design Bitton Keynsham | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Bitton, near Keynsham from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Bitton, near Keynsham',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Bitton is a village between Keynsham and Bristol. Part of the BS30/BS31 area, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Bitton" or "electrician Keynsham". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Keynsham' },
        { value: 'BS30, BS31', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Bitton and the Keynsham area have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Near Keynsham', text: 'We target Bitton and Keynsham searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Bitton, near Keynsham.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Bitton and Keynsham + trade keywords.' },
      ],
      servicesHeading: 'Website design in Bitton, near Keynsham — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Bitton and Keynsham search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Bitton Station', 'River Avon Trail', 'Keynsham Road'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Bitton and Keynsham places.',
      stats: { businesses: '300+', monthlySearches: '15K+', competitors: 'Low-Medium', avgCPC: '£1.50' },
      localKeywords: [
        'plumber Bitton Keynsham',
        'electrician Bitton Keynsham',
        'builder Bitton',
        'plumber Keynsham',
        'electrician Keynsham',
        'electrician BS31',
      ],
      ctaHeadline: 'Ready to Get More Customers in Bitton, near Keynsham?',
      ctaSubhead: 'Join Keynsham area businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['keynsham', 'hanham-keynsham', 'oldland-keynsham', 'bath', 'saltford', 'paulton'],
      faqs: [
        { question: 'Do you cover Bitton?', answer: 'Yes. We target Bitton and Keynsham so you show up when local customers search.' },
        { question: 'Website design in Bitton?', answer: 'Yes. We build fast websites for Keynsham and Bath and North East Somerset businesses. From £250.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Bitton and Keynsham.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Keynsham & BANES Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'hanham-keynsham': {
      name: 'Hanham',
      fullName: 'Hanham, near Keynsham',
      parentSlug: 'keynsham',
      county: 'Bristol',
      postcodes: ['BS15', 'BS30'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website design Hanham Keynsham | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Hanham, near Keynsham from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Hanham, near Keynsham',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Hanham is a village between Keynsham and Bristol. Part of the BS15/BS30 area, it has strong demand for local trades and services.',
      extendedDescription: 'Customers search "plumber Hanham" or "electrician Keynsham". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Keynsham' },
        { value: 'BS15, BS30', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Hanham and the Keynsham area have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Near Keynsham', text: 'We target Hanham and Keynsham searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Hanham, near Keynsham.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Hanham and Keynsham + trade keywords.' },
      ],
      servicesHeading: 'Website design in Hanham, near Keynsham — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Hanham and Keynsham search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Hanham High Street', 'River Avon', 'Keynsham Road'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Hanham and Keynsham places.',
      stats: { businesses: '350+', monthlySearches: '18K+', competitors: 'Low-Medium', avgCPC: '£1.60' },
      localKeywords: [
        'plumber Hanham Keynsham',
        'electrician Hanham Keynsham',
        'builder Hanham',
        'plumber Keynsham',
        'electrician Keynsham',
        'electrician BS15',
      ],
      ctaHeadline: 'Ready to Get More Customers in Hanham, near Keynsham?',
      ctaSubhead: 'Join Keynsham area businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['keynsham', 'bitton-keynsham', 'bath', 'saltford', 'oldland-keynsham'],
      faqs: [
        { question: 'Do you cover Hanham?', answer: 'Yes. We target Hanham and Keynsham so you show up when local customers search.' },
        { question: 'Website design in Hanham?', answer: 'Yes. We build fast websites for Keynsham and Bath and North East Somerset businesses. From £250.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Hanham and Keynsham.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Keynsham & BANES Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'oldland-keynsham': {
      name: 'Oldland',
      fullName: 'Oldland, near Keynsham',
      parentSlug: 'keynsham',
      county: 'Bristol',
      postcodes: ['BS30'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website design Oldland Keynsham | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Oldland, near Keynsham from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Oldland, near Keynsham',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Oldland is a village near Keynsham and Bitton in the BS30 area. Part of the Keynsham catchment, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Oldland" or "electrician Keynsham". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Keynsham' },
        { value: 'BS30', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Oldland and the Keynsham area have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Near Keynsham', text: 'We target Oldland and Keynsham searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Oldland, near Keynsham.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Oldland and Keynsham + trade keywords.' },
      ],
      servicesHeading: 'Website design in Oldland, near Keynsham — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Oldland and Keynsham search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Oldland Common', 'Bitton Road', 'River Avon'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Oldland and Keynsham places.',
      stats: { businesses: '280+', monthlySearches: '14K+', competitors: 'Low-Medium', avgCPC: '£1.40' },
      localKeywords: [
        'plumber Oldland Keynsham',
        'electrician Oldland Keynsham',
        'builder Oldland',
        'plumber Keynsham',
        'electrician Keynsham',
        'electrician BS30',
      ],
      ctaHeadline: 'Ready to Get More Customers in Oldland, near Keynsham?',
      ctaSubhead: 'Join Keynsham area businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['keynsham', 'bitton-keynsham', 'hanham-keynsham', 'bath', 'saltford'],
      faqs: [
        { question: 'Do you cover Oldland?', answer: 'Yes. We target Oldland and Keynsham so you show up when local customers search.' },
        { question: 'Website design in Oldland?', answer: 'Yes. We build fast websites for Keynsham and Bath and North East Somerset businesses. From £250.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Oldland and Keynsham.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Keynsham & BANES Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'longwell-green-keynsham': {
      name: 'Longwell Green',
      fullName: 'Longwell Green, near Keynsham',
      parentSlug: 'keynsham',
      county: 'Bristol',
      postcodes: ['BS30'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website design Longwell Green Keynsham | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Longwell Green, near Keynsham from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Longwell Green, near Keynsham',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Longwell Green is a village near Keynsham and Hanham in the BS30 area. Part of the Keynsham catchment, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Longwell Green" or "electrician Keynsham". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Keynsham' },
        { value: 'BS30', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Longwell Green and the Keynsham area have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Near Keynsham', text: 'We target Longwell Green and Keynsham searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Longwell Green, near Keynsham.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Longwell Green and Keynsham + trade keywords.' },
      ],
      servicesHeading: 'Website design in Longwell Green, near Keynsham — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Longwell Green and Keynsham search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Longwell Green', 'Keynsham Road', 'River Avon'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Longwell Green and Keynsham places.',
      stats: { businesses: '300+', monthlySearches: '16K+', competitors: 'Low-Medium', avgCPC: '£1.40' },
      localKeywords: [
        'plumber Longwell Green Keynsham',
        'electrician Longwell Green Keynsham',
        'builder Longwell Green',
        'plumber Keynsham',
        'electrician Keynsham',
        'electrician BS30',
      ],
      ctaHeadline: 'Ready to Get More Customers in Longwell Green, near Keynsham?',
      ctaSubhead: 'Join Keynsham area businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['keynsham', 'hanham-keynsham', 'bitton-keynsham', 'bath', 'saltford'],
      faqs: [
        { question: 'Do you cover Longwell Green?', answer: 'Yes. We target Longwell Green and Keynsham so you show up when local customers search.' },
        { question: 'Website design in Longwell Green?', answer: 'Yes. We build fast websites for Keynsham and Bath and North East Somerset businesses. From £250.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Longwell Green and Keynsham.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Keynsham & BANES Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },
    'warmley-keynsham': {
      name: 'Warmley',
      fullName: 'Warmley, near Keynsham',
      parentSlug: 'keynsham',
      county: 'Bristol',
      postcodes: ['BS30'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website design Warmley Keynsham | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Warmley, near Keynsham from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Warmley, near Keynsham',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Warmley is an area near Keynsham and Hanham in the BS30 area. Part of the Keynsham catchment, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Warmley" or "electrician Keynsham". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Keynsham' },
        { value: 'BS30', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Warmley and the Keynsham area have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Near Keynsham', text: 'We target Warmley and Keynsham searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Warmley, near Keynsham.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Warmley and Keynsham + trade keywords.' },
      ],
      servicesHeading: 'Website design in Warmley, near Keynsham — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Warmley and Keynsham search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Warmley', 'Warmley Hill', 'River Avon'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Warmley and Keynsham places.',
      stats: { businesses: '280+', monthlySearches: '14K+', competitors: 'Low-Medium', avgCPC: '£1.40' },
      localKeywords: [
        'plumber Warmley Keynsham',
        'electrician Warmley Keynsham',
        'builder Warmley',
        'plumber Keynsham',
        'electrician Keynsham',
        'electrician BS30',
      ],
      ctaHeadline: 'Ready to Get More Customers in Warmley, near Keynsham?',
      ctaSubhead: 'Join Keynsham area businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['keynsham', 'hanham-keynsham', 'longwell-green-keynsham', 'bath', 'saltford'],
      faqs: [
        { question: 'Do you cover Warmley?', answer: 'Yes. We target Warmley and Keynsham so you show up when local customers search.' },
        { question: 'Website design in Warmley?', answer: 'Yes. We build fast websites for Keynsham and Bath and North East Somerset businesses. From £250.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Warmley and Keynsham.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Keynsham & BANES Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES' },
    },

    // Sub-areas: Midsomer Norton
    'clandon-midsomer-norton': {
      name: 'Clandown',
      fullName: 'Clandown, near Midsomer Norton',
      parentSlug: 'midsomer-norton',
      county: 'Somerset',
      postcodes: ['BA3'],
      heroImage: '/images/areas/midsomer-norton.webp',
      metaTitle: 'Website design Clandown Midsomer Norton | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Clandown, near Midsomer Norton from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Clandown, near Midsomer Norton',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Clandown is an area near Midsomer Norton in the Somer Valley. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Clandown" or "electrician Midsomer Norton". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Midsomer Norton' },
        { value: 'BA3', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Clandown and the Somer Valley have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Near Midsomer Norton', text: 'We target Clandown and Midsomer Norton searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Clandown, near Midsomer Norton.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Clandown and Midsomer Norton + trade keywords.' },
      ],
      servicesHeading: 'Website design in Clandown, near Midsomer Norton — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Clandown and Midsomer Norton search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Somer Valley', 'Clandown Road', 'Radstock Road'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Clandown and Somer Valley places.',
      stats: { businesses: '250+', monthlySearches: '12K+', competitors: 'Low', avgCPC: '£1.20' },
      localKeywords: [
        'plumber Clandown Midsomer Norton',
        'electrician Clandown',
        'builder Clandown',
        'plumber Midsomer Norton',
        'electrician Midsomer Norton',
        'roofer Midsomer Norton',
      ],
      ctaHeadline: 'Ready to Get More Customers in Clandown, near Midsomer Norton?',
      ctaSubhead: 'Join Somer Valley businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['midsomer-norton', 'radstock', 'westfield', 'paulton', 'bath'],
      faqs: [
        { question: 'Do you cover Clandown?', answer: 'Yes. We target Clandown and Midsomer Norton so you show up when local customers search.' },
        { question: 'Website design in Clandown?', answer: 'Yes. We build fast websites for Somer Valley and Bath and North East Somerset businesses. From £250.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Clandown and Midsomer Norton.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Somer Valley Result', caseTitle: 'Peachy Cleans, Midsomer Norton', result: '#1 for cleaner Midsomer Norton', quote: "We went from not ranking to number one. The website and Google listing work together.", name: 'Peachy Cleans', business: 'Peachy Cleans', businessDisplay: 'Peachy Cleans • Midsomer Norton' },
    },
    'farrington-gurney-midsomer-norton': {
      name: 'Farrington Gurney',
      fullName: 'Farrington Gurney, near Midsomer Norton',
      parentSlug: 'midsomer-norton',
      county: 'Somerset',
      postcodes: ['BA3', 'BS39'],
      heroImage: '/images/areas/midsomer-norton.webp',
      metaTitle: 'Website design Farrington Gurney Midsomer Norton | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Farrington Gurney, near Midsomer Norton from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Farrington Gurney, near Midsomer Norton',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Farrington Gurney is a village in the Somer Valley, near Midsomer Norton and Paulton. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Farrington Gurney" or "electrician Midsomer Norton". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Midsomer Norton' },
        { value: 'BA3, BS39', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Farrington Gurney and the Somer Valley have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Near Midsomer Norton', text: 'We target Farrington Gurney and Midsomer Norton searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Farrington Gurney, near Midsomer Norton.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Farrington Gurney and Midsomer Norton + trade keywords.' },
      ],
      servicesHeading: 'Website design in Farrington Gurney, near Midsomer Norton — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Farrington Gurney and Midsomer Norton search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Farrington Gurney Village', 'A37', 'Somer Valley'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Farrington Gurney and Somer Valley places.',
      stats: { businesses: '200+', monthlySearches: '10K+', competitors: 'Low', avgCPC: '£1.00' },
      localKeywords: [
        'plumber Farrington Gurney',
        'electrician Farrington Gurney',
        'builder Farrington Gurney',
        'plumber Midsomer Norton',
        'electrician Midsomer Norton',
      ],
      ctaHeadline: 'Ready to Get More Customers in Farrington Gurney?',
      ctaSubhead: 'Join Somer Valley businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['midsomer-norton', 'clandon-midsomer-norton', 'paulton', 'radstock', 'bath'],
      faqs: [
        { question: 'Do you cover Farrington Gurney?', answer: 'Yes. We target Farrington Gurney and Midsomer Norton so you show up when local customers search.' },
        { question: 'Website design in Farrington Gurney?', answer: 'Yes. We build fast websites for Somer Valley and Bath and North East Somerset businesses. From £250.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Farrington Gurney and Midsomer Norton.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Somer Valley Result', caseTitle: 'Peachy Cleans, Midsomer Norton', result: '#1 for cleaner Midsomer Norton', quote: "We went from not ranking to number one. The website and Google listing work together.", name: 'Peachy Cleans', business: 'Peachy Cleans', businessDisplay: 'Peachy Cleans • Midsomer Norton' },
    },

    // Sub-areas: Radstock
    'writhlington-radstock': {
      name: 'Writhlington',
      fullName: 'Writhlington, near Radstock',
      parentSlug: 'radstock',
      county: 'Somerset',
      postcodes: ['BA3'],
      heroImage: '/images/areas/radstock.webp',
      metaTitle: 'Website design Writhlington Radstock | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Writhlington, near Radstock from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Writhlington, near Radstock',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Writhlington is a village near Radstock in the Somer Valley. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Writhlington" or "electrician Radstock". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Radstock' },
        { value: 'BA3', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Writhlington and the Somer Valley have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Near Radstock', text: 'We target Writhlington and Radstock searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Writhlington, near Radstock.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Writhlington and Radstock + trade keywords.' },
      ],
      servicesHeading: 'Website design in Writhlington, near Radstock — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Writhlington and Radstock search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Somer Valley', 'Writhlington School', 'Radstock Museum'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Writhlington and Somer Valley places.',
      stats: { businesses: '150+', monthlySearches: '8K+', competitors: 'Low', avgCPC: '£1.00' },
      localKeywords: [
        'plumber Writhlington Radstock',
        'electrician Writhlington',
        'builder Writhlington',
        'plumber Radstock',
        'electrician Radstock',
      ],
      ctaHeadline: 'Ready to Get More Customers in Writhlington, near Radstock?',
      ctaSubhead: 'Join Somer Valley businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['radstock', 'chilcompton-radstock', 'midsomer-norton', 'paulton', 'bath'],
      faqs: [
        { question: 'Do you cover Writhlington?', answer: 'Yes. We target Writhlington and Radstock so you show up when local customers search.' },
        { question: 'Website design in Writhlington?', answer: 'Yes. We build fast websites for Somer Valley and Bath and North East Somerset businesses. From £250.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Writhlington and Radstock.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Somer Valley Result', caseTitle: 'Porter Electrical, Radstock', result: '+180% leads', quote: "Being a small town, I didn't think SEO would work for us. I was wrong - we're now the go-to electrician in Radstock.", name: 'James Porter', business: 'Porter Electrical', businessDisplay: 'Porter Electrical • Radstock' },
    },
    'chilcompton-radstock': {
      name: 'Chilcompton',
      fullName: 'Chilcompton, near Radstock',
      parentSlug: 'radstock',
      county: 'Somerset',
      postcodes: ['BA3'],
      heroImage: '/images/areas/radstock.webp',
      metaTitle: 'Website design Chilcompton Radstock | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Chilcompton, near Radstock from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Chilcompton, near Radstock',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Chilcompton is a village near Radstock in the Somer Valley. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Chilcompton" or "electrician Radstock". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Radstock' },
        { value: 'BA3', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Chilcompton and the Somer Valley have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Near Radstock', text: 'We target Chilcompton and Radstock searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Chilcompton, near Radstock.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Chilcompton and Radstock + trade keywords.' },
      ],
      servicesHeading: 'Website design in Chilcompton, near Radstock — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Chilcompton and Radstock search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Somer Valley', 'Chilcompton Village', 'A367'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Chilcompton and Somer Valley places.',
      stats: { businesses: '120+', monthlySearches: '6K+', competitors: 'Low', avgCPC: '£0.90' },
      localKeywords: [
        'plumber Chilcompton Radstock',
        'electrician Chilcompton',
        'builder Chilcompton',
        'plumber Radstock',
        'electrician Radstock',
      ],
      ctaHeadline: 'Ready to Get More Customers in Chilcompton, near Radstock?',
      ctaSubhead: 'Join Somer Valley businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['radstock', 'writhlington-radstock', 'midsomer-norton', 'paulton', 'bath'],
      faqs: [
        { question: 'Do you cover Chilcompton?', answer: 'Yes. We target Chilcompton and Radstock so you show up when local customers search.' },
        { question: 'Website design in Chilcompton?', answer: 'Yes. We build fast websites for Somer Valley and Bath and North East Somerset businesses. From £250.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Chilcompton and Radstock.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Somer Valley Result', caseTitle: 'Porter Electrical, Radstock', result: '+180% leads', quote: "Being a small town, I didn't think SEO would work for us. I was wrong - we're now the go-to electrician in Radstock.", name: 'James Porter', business: 'Porter Electrical', businessDisplay: 'Porter Electrical • Radstock' },
    },

    // Sub-areas: Chew Magna / Chew Valley
    'stanton-drew-chew-magna': {
      name: 'Stanton Drew',
      fullName: 'Stanton Drew, Chew Valley',
      parentSlug: 'chew-magna',
      county: 'Somerset',
      postcodes: ['BS39'],
      heroImage: '/images/areas/chew-magna.webp',
      metaTitle: 'Website design Stanton Drew Chew Valley | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Stanton Drew, Chew Valley from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Stanton Drew, Chew Valley',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Stanton Drew is a village in the Chew Valley, known for its stone circle. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Stanton Drew" or "electrician Chew Valley". We get you on the map and on page one.',
      heroStats: [
        { value: 'Chew Valley', label: 'Near Chew Magna' },
        { value: 'BS39', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Stanton Drew and the Chew Valley have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Chew Valley', text: 'We target Stanton Drew and Chew Magna searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Stanton Drew, Chew Valley.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Stanton Drew and Chew Valley + trade keywords.' },
      ],
      servicesHeading: 'Website design in Stanton Drew, Chew Valley — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Stanton Drew and Chew Valley search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Hospitality'],
      landmarks: ['Stanton Drew Stone Circles', 'Chew Valley', 'St Mary\'s Church'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Stanton Drew and Chew Valley places.',
      stats: { businesses: '80+', monthlySearches: '4K+', competitors: 'Very Low', avgCPC: '£0.80' },
      localKeywords: [
        'plumber Stanton Drew',
        'electrician Stanton Drew',
        'builder Stanton Drew Chew Valley',
        'plumber Chew Magna',
        'electrician Chew Valley',
      ],
      ctaHeadline: 'Ready to Get More Customers in Stanton Drew, Chew Valley?',
      ctaSubhead: 'Join Chew Valley businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Chew Valley Areas We Serve',
      nearbyAreas: ['chew-magna', 'chew-stoke-chew-magna', 'bishop-sutton-chew-magna', 'keynsham', 'bath'],
      faqs: [
        { question: 'Do you cover Stanton Drew?', answer: 'Yes. We target Stanton Drew and Chew Valley so you show up when local customers search.' },
        { question: 'Website design in Stanton Drew?', answer: 'Yes. We build fast websites for Chew Valley and Bath and North East Somerset businesses. From £250.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Stanton Drew and Chew Valley.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Chew Valley Result', caseTitle: 'Peachy Cleans, Midsomer Norton', result: '#1 on Google', quote: 'See how we got a Midsomer Norton business to number one on Google. We use the same approach for Chew Valley.', name: 'Peachy Cleans', business: 'Peachy Cleans', businessDisplay: 'Peachy Cleans • Midsomer Norton' },
    },
    'chew-stoke-chew-magna': {
      name: 'Chew Stoke',
      fullName: 'Chew Stoke, Chew Valley',
      parentSlug: 'chew-magna',
      county: 'Somerset',
      postcodes: ['BS40'],
      heroImage: '/images/areas/chew-magna.webp',
      metaTitle: 'Website design Chew Stoke Chew Valley | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Chew Stoke, Chew Valley from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Chew Stoke, Chew Valley',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Chew Stoke is a village in the Chew Valley, near Chew Magna and Chew Valley Lake. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Chew Stoke" or "electrician Chew Valley". We get you on the map and on page one.',
      heroStats: [
        { value: 'Chew Valley', label: 'Near Chew Magna' },
        { value: 'BS40', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Chew Stoke and the Chew Valley have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Chew Valley', text: 'We target Chew Stoke and Chew Magna searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Chew Stoke, Chew Valley.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Chew Stoke and Chew Valley + trade keywords.' },
      ],
      servicesHeading: 'Website design in Chew Stoke, Chew Valley — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Chew Stoke and Chew Valley search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Hospitality'],
      landmarks: ['Chew Valley Lake', 'Chew Magna', 'St Andrew\'s Church Chew Stoke'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Chew Stoke and Chew Valley places.',
      stats: { businesses: '60+', monthlySearches: '3K+', competitors: 'Very Low', avgCPC: '£0.75' },
      localKeywords: [
        'plumber Chew Stoke',
        'electrician Chew Stoke',
        'builder Chew Stoke Chew Valley',
        'plumber Chew Magna',
        'electrician Chew Valley',
      ],
      ctaHeadline: 'Ready to Get More Customers in Chew Stoke, Chew Valley?',
      ctaSubhead: 'Join Chew Valley businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Chew Valley Areas We Serve',
      nearbyAreas: ['chew-magna', 'stanton-drew-chew-magna', 'bishop-sutton-chew-magna', 'keynsham', 'bath'],
      faqs: [
        { question: 'Do you cover Chew Stoke?', answer: 'Yes. We target Chew Stoke and Chew Valley so you show up when local customers search.' },
        { question: 'Website design in Chew Stoke?', answer: 'Yes. We build fast websites for Chew Valley and Bath and North East Somerset businesses. From £250.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Chew Stoke and Chew Valley.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Chew Valley Result', caseTitle: 'Peachy Cleans, Midsomer Norton', result: '#1 on Google', quote: 'See how we got a Midsomer Norton business to number one on Google. We use the same approach for Chew Valley.', name: 'Peachy Cleans', business: 'Peachy Cleans', businessDisplay: 'Peachy Cleans • Midsomer Norton' },
    },
    'bishop-sutton-chew-magna': {
      name: 'Bishop Sutton',
      fullName: 'Bishop Sutton, Chew Valley',
      parentSlug: 'chew-magna',
      county: 'Somerset',
      postcodes: ['BS39'],
      heroImage: '/images/areas/chew-magna.webp',
      metaTitle: 'Website design Bishop Sutton Chew Valley | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Bishop Sutton, Chew Valley from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Bishop Sutton, Chew Valley',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Bishop Sutton is a village in the Chew Valley, near Chew Magna. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Bishop Sutton" or "electrician Chew Valley". We get you on the map and on page one.',
      heroStats: [
        { value: 'Chew Valley', label: 'Near Chew Magna' },
        { value: 'BS39', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Bishop Sutton and the Chew Valley have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Chew Valley', text: 'We target Bishop Sutton and Chew Magna searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Bishop Sutton, Chew Valley.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Bishop Sutton and Chew Valley + trade keywords.' },
      ],
      servicesHeading: 'Website design in Bishop Sutton, Chew Valley — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Bishop Sutton and Chew Valley search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Hospitality'],
      landmarks: ['Chew Valley', 'Bishop Sutton Village', 'A368'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Bishop Sutton and Chew Valley places.',
      stats: { businesses: '70+', monthlySearches: '3.5K+', competitors: 'Very Low', avgCPC: '£0.80' },
      localKeywords: [
        'plumber Bishop Sutton',
        'electrician Bishop Sutton',
        'builder Bishop Sutton Chew Valley',
        'plumber Chew Magna',
        'electrician Chew Valley',
      ],
      ctaHeadline: 'Ready to Get More Customers in Bishop Sutton, Chew Valley?',
      ctaSubhead: 'Join Chew Valley businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Chew Valley Areas We Serve',
      nearbyAreas: ['chew-magna', 'stanton-drew-chew-magna', 'chew-stoke-chew-magna', 'keynsham', 'paulton'],
      faqs: [
        { question: 'Do you cover Bishop Sutton?', answer: 'Yes. We target Bishop Sutton and Chew Valley so you show up when local customers search.' },
        { question: 'Website design in Bishop Sutton?', answer: 'Yes. We build fast websites for Chew Valley and Bath and North East Somerset businesses. From £250.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Bishop Sutton and Chew Valley.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Chew Valley Result', caseTitle: 'Peachy Cleans, Midsomer Norton', result: '#1 on Google', quote: 'See how we got a Midsomer Norton business to number one on Google. We use the same approach for Chew Valley.', name: 'Peachy Cleans', business: 'Peachy Cleans', businessDisplay: 'Peachy Cleans • Midsomer Norton' },
    },

    // Sub-areas: Paulton / Cam Valley
    'high-littleton-paulton': {
      name: 'High Littleton',
      fullName: 'High Littleton, near Paulton',
      parentSlug: 'paulton',
      county: 'Somerset',
      postcodes: ['BS39'],
      heroImage: '/images/areas/paulton.webp',
      metaTitle: 'Website design High Littleton Paulton | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in High Littleton, near Paulton from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in High Littleton, near Paulton',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'High Littleton is a village in the Cam Valley, near Paulton. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber High Littleton" or "electrician Paulton". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Paulton' },
        { value: 'BS39', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'High Littleton and the Cam Valley have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Near Paulton', text: 'We target High Littleton and Paulton searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in High Littleton, near Paulton.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for High Littleton and Paulton + trade keywords.' },
      ],
      servicesHeading: 'Website design in High Littleton, near Paulton — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in High Littleton and Paulton search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Cam Valley', 'High Littleton Village', 'A39'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local High Littleton and Cam Valley places.',
      stats: { businesses: '100+', monthlySearches: '5K+', competitors: 'Low', avgCPC: '£0.95' },
      localKeywords: [
        'plumber High Littleton Paulton',
        'electrician High Littleton',
        'builder High Littleton',
        'plumber Paulton',
        'electrician Paulton',
      ],
      ctaHeadline: 'Ready to Get More Customers in High Littleton, near Paulton?',
      ctaSubhead: 'Join Cam Valley businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Cam Valley Areas We Serve',
      nearbyAreas: ['paulton', 'hallatrow-paulton', 'midsomer-norton', 'radstock', 'bath'],
      faqs: [
        { question: 'Do you cover High Littleton?', answer: 'Yes. We target High Littleton and Paulton so you show up when local customers search.' },
        { question: 'Website design in High Littleton?', answer: 'Yes. We build fast websites for Cam Valley and Bath and North East Somerset businesses. From £250.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for High Littleton and Paulton.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Cam Valley Result', caseTitle: "Green's Cleaning Services, Paulton", result: '+200% bookings', quote: "From zero online presence to first page of Google. Our business has completely transformed.", name: 'Lisa Green', business: "Green's Cleaning Services", businessDisplay: "Green's Cleaning Services • Paulton" },
    },
    'hallatrow-paulton': {
      name: 'Hallatrow',
      fullName: 'Hallatrow, near Paulton',
      parentSlug: 'paulton',
      county: 'Somerset',
      postcodes: ['BS39'],
      heroImage: '/images/areas/paulton.webp',
      metaTitle: 'Website design Hallatrow Paulton | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Hallatrow, near Paulton from £250. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Hallatrow, near Paulton',
      heroSubhead: 'From £250. We also offer SEO add-ons so you get found on Google.',
      description: 'Hallatrow is a village in the Cam Valley, near Paulton. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Hallatrow" or "electrician Paulton". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Paulton' },
        { value: 'BS39', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Hallatrow and the Cam Valley have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Near Paulton', text: 'We target Hallatrow and Paulton searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250. Our main service in Hallatrow, near Paulton.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Hallatrow and Paulton + trade keywords.' },
      ],
      servicesHeading: 'Website design in Hallatrow, near Paulton — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Hallatrow and Paulton search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Cam Valley', 'Hallatrow Village', 'Paulton Road'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Hallatrow and Cam Valley places.',
      stats: { businesses: '90+', monthlySearches: '4.5K+', competitors: 'Low', avgCPC: '£0.90' },
      localKeywords: [
        'plumber Hallatrow Paulton',
        'electrician Hallatrow',
        'builder Hallatrow',
        'plumber Paulton',
        'electrician Paulton',
      ],
      ctaHeadline: 'Ready to Get More Customers in Hallatrow, near Paulton?',
      ctaSubhead: 'Join Cam Valley businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Cam Valley Areas We Serve',
      nearbyAreas: ['paulton', 'high-littleton-paulton', 'midsomer-norton', 'radstock', 'temple-cloud'],
      faqs: [
        { question: 'Do you cover Hallatrow?', answer: 'Yes. We target Hallatrow and Paulton so you show up when local customers search.' },
        { question: 'Website design in Hallatrow?', answer: 'Yes. We build fast websites for Cam Valley and Bath and North East Somerset businesses. From £250.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Hallatrow and Paulton.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Cam Valley Result', caseTitle: "Green's Cleaning Services, Paulton", result: '+200% bookings', quote: "From zero online presence to first page of Google. Our business has completely transformed.", name: 'Lisa Green', business: "Green's Cleaning Services", businessDisplay: "Green's Cleaning Services • Paulton" },
    },

    'kingswood': {
      name: 'Kingswood',
      fullName: 'Kingswood, Bristol',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'South Gloucestershire',
      postcodes: ['BS15'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Kingswood Bristol | Web Design from £250 | SEO Kings',
      metaDescription: 'Website design for trades and local businesses in Kingswood, Bristol BS15 from £250. Google Business Profile and local SEO add-ons. Free audit — no obligation.',
      heroHeadline: 'Website design in Kingswood, Bristol',
      heroSubhead: 'From £250. SEO and Google Business Profile add-ons so you get found on Google.',
      description: 'Kingswood is a large suburb in South Gloucestershire, just east of Bristol. With a strong trades and small business community across BS15, demand for local search visibility is high.',
      extendedDescription: 'Customers search "plumber Kingswood" or "electrician Bristol BS15". We get you into the map pack and onto page one.',
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS15', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Kingswood has a competitive local market. Get your website and Google listing working harder.',
      whyBullets: [
        { title: 'Kingswood-specific', text: 'We target BS15 trade searches directly.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Clear ROI', text: 'Organic rankings deliver long-term value.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for Kingswood businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the Kingswood map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Kingswood and Bristol BS15 trade keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Kingswood, Bristol — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what local customers in Kingswood search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Kingswood High Street', 'Staple Hill Road', 'Rodway Hill'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Kingswood locations in your content and listings.',
      stats: { businesses: '1,200+', monthlySearches: '45K+', competitors: 'Medium', avgCPC: '£2.10' },
      localKeywords: [
        'plumber Kingswood Bristol',
        'electrician Kingswood Bristol',
        'builder Kingswood',
        'website design Kingswood',
        'web designer Bristol BS15',
        'local SEO Kingswood',
      ],
      ctaHeadline: 'Ready to Get More Customers in Kingswood?',
      ctaSubhead: 'Join Bristol area businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['hanham-keynsham', 'warmley-keynsham', 'brislington', 'keynsham', 'bath'],
      faqs: [
        { question: 'Do you cover Kingswood, Bristol?', answer: 'Yes. We serve businesses in Kingswood BS15 and surrounding Bristol suburbs. Get in touch for a free check.' },
        { question: 'How much does website design cost in Kingswood?', answer: 'Websites start from £250 for a single-page site. Multi-page from £350. We also offer Google Business Profile optimisation and local SEO as add-ons.' },
        { question: 'Can you get my business into the Google map pack in Kingswood?', answer: 'Yes. GBP optimisation is a £100 add-on to any website package, and local SEO from £150/month helps you rank in the map pack for Kingswood trade searches.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Kingswood and Bristol.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & BANES', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol area' },
    },

    'brislington': {
      name: 'Brislington',
      fullName: 'Brislington, Bristol',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS4'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Brislington Bristol | Web Design from £250 | SEO Kings',
      metaDescription: 'Website design for trades and businesses in Brislington, Bristol BS4 from £250. Google Business Profile and local SEO add-ons. Free audit — no obligation.',
      heroHeadline: 'Website design in Brislington, Bristol',
      heroSubhead: 'From £250. Google Business Profile and local SEO add-ons so you rank locally.',
      description: 'Brislington is a suburb in south Bristol, sitting between the city centre and Keynsham in the BS4 postcode. A busy residential and commercial area with strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Brislington" or "electrician BS4". We put you in front of them.',
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS4', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Brislington sits between Keynsham and Bristol — a well-connected area with active local search demand.',
      whyBullets: [
        { title: 'Local focus', text: 'We target BS4 and Brislington trade searches.' },
        { title: 'Website & Google', text: 'Fast website plus Google Business Profile optimisation.' },
        { title: 'Proven results', text: 'Real clients, real rankings across the Bristol area.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-first websites from £250 for Brislington businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: appear in the Brislington map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Brislington and Bristol BS4 trade keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Brislington, Bristol — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'What local customers search in Brislington:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Bath Road', 'Brislington Trading Estate', 'St Anne\'s Park'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Brislington and Bristol locations in your content.',
      stats: { businesses: '900+', monthlySearches: '38K+', competitors: 'Medium', avgCPC: '£2.00' },
      localKeywords: [
        'plumber Brislington Bristol',
        'electrician Brislington',
        'builder Brislington Bristol',
        'website design Brislington',
        'web designer Bristol BS4',
        'local SEO Brislington',
      ],
      ctaHeadline: 'Ready to Get More Customers in Brislington?',
      ctaSubhead: 'Join Bristol area businesses already on page one.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['keynsham', 'kingswood', 'knowle-bristol', 'bath', 'hanham-keynsham'],
      faqs: [
        { question: 'Do you cover Brislington?', answer: 'Yes. We cover Brislington and all of Bristol BS4. Contact us for a free check on your website and Google listing.' },
        { question: 'How much is a website in Brislington?', answer: 'From £250 for a single-page site. Multi-page from £350. GBP optimisation is a £100 add-on.' },
        { question: 'Can you help me rank on Google in Brislington?', answer: 'Yes. Local SEO from £150/month targets your specific trade and postcode. GBP optimisation at £100 gets you into the map pack faster.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your site and Google listing.' },
        { title: 'Custom plan', description: 'Built around Brislington and Bristol.' },
        { title: 'Results', description: 'Monthly reports. More local leads.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps. Professional, fast, and it works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol' },
    },

    'whitchurch-bristol': {
      name: 'Whitchurch',
      fullName: 'Whitchurch, Bristol',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS14'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Whitchurch Bristol | Web Design from £250 | SEO Kings',
      metaDescription: 'Website design for trades and businesses in Whitchurch, Bristol BS14 from £250. Google Business Profile and local SEO add-ons. Free audit — no obligation.',
      heroHeadline: 'Website design in Whitchurch, Bristol',
      heroSubhead: 'From £250. SEO add-ons so you appear in local search results.',
      description: 'Whitchurch is a suburb in south Bristol, in the BS14 postcode. A growing residential area with strong demand for local trades and services.',
      extendedDescription: 'Customers search "electrician Whitchurch Bristol" or "plumber BS14". We get you found.',
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS14', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Whitchurch is south Bristol — active local search market with room to rank.',
      whyBullets: [
        { title: 'BS14 focus', text: 'We target Whitchurch and south Bristol trade searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised GBP.' },
        { title: 'Transparent pricing', text: 'From £250. No hidden fees.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for Whitchurch businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get into the Whitchurch and south Bristol map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Whitchurch BS14 trade searches.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Whitchurch, Bristol — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer GBP and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'What local customers search in Whitchurch, Bristol:',
      industries: ['Trades', 'Professional Services', 'Construction', 'Retail'],
      landmarks: ['Whitchurch Village', 'Hengrove Park', 'Airport Road'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Whitchurch and south Bristol locations.',
      stats: { businesses: '600+', monthlySearches: '28K+', competitors: 'Low-Medium', avgCPC: '£1.80' },
      localKeywords: [
        'plumber Whitchurch Bristol',
        'electrician Whitchurch Bristol',
        'builder Whitchurch BS14',
        'website design Whitchurch Bristol',
        'web designer BS14',
        'local SEO Whitchurch',
      ],
      ctaHeadline: 'Ready to Get More Customers in Whitchurch?',
      ctaSubhead: 'Join south Bristol businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['knowle-bristol', 'stockwood-bristol', 'brislington', 'keynsham', 'bath'],
      faqs: [
        { question: 'Do you cover Whitchurch, Bristol?', answer: 'Yes. We cover Whitchurch and BS14. Get a free check on your website and Google listing.' },
        { question: 'How much does a website cost in Whitchurch?', answer: 'From £250 for a one-page site. Multi-page from £350. GBP optimisation is a £100 add-on.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Whitchurch and south Bristol.' },
        { title: 'Results', description: 'Monthly updates. More enquiries.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps. Professional, fast, works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol' },
    },

    'knowle-bristol': {
      name: 'Knowle',
      fullName: 'Knowle, Bristol',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS4'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Knowle Bristol | Web Design from £250 | SEO Kings',
      metaDescription: 'Website design for trades and businesses in Knowle, Bristol BS4 from £250. Google Business Profile and local SEO add-ons. Free audit — no obligation.',
      heroHeadline: 'Website design in Knowle, Bristol',
      heroSubhead: 'From £250. SEO and Google Business Profile add-ons to get you found locally.',
      description: 'Knowle is a suburb in south Bristol in the BS4 postcode, with a strong residential community and active demand for local trades and services.',
      extendedDescription: 'Customers search "plumber Knowle Bristol" or "builder BS4". We make sure they find you.',
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS4', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Knowle is a competitive south Bristol area. The right website and GBP setup makes the difference.',
      whyBullets: [
        { title: 'Knowle-targeted', text: 'We focus on BS4 and Knowle searches specifically.' },
        { title: 'Website & Google', text: 'Fast website and GBP optimisation.' },
        { title: 'Results you see', text: 'Monthly ranking reports — no guesswork.' },
      ],
      services: [
        { name: 'Website Design', description: 'Mobile-first websites from £250 for Knowle businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: appear in the Knowle and south Bristol map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Knowle BS4 trade searches.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Knowle, Bristol — with SEO add-ons',
      servicesSubtext: 'Website design is our core service. GBP and SEO are powerful add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'What people search in Knowle, Bristol:',
      industries: ['Trades', 'Professional Services', 'Construction', 'Retail'],
      landmarks: ['Knowle West', 'Broad Walk', 'Wells Road'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We use Knowle and south Bristol references in your content.',
      stats: { businesses: '700+', monthlySearches: '32K+', competitors: 'Medium', avgCPC: '£1.90' },
      localKeywords: [
        'plumber Knowle Bristol',
        'electrician Knowle Bristol',
        'builder Knowle BS4',
        'website design Knowle Bristol',
        'web designer BS4',
        'local SEO Knowle Bristol',
      ],
      ctaHeadline: 'Ready to Get More Customers in Knowle?',
      ctaSubhead: 'Join south Bristol businesses already on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['brislington', 'whitchurch-bristol', 'stockwood-bristol', 'keynsham', 'bath'],
      faqs: [
        { question: 'Do you cover Knowle, Bristol?', answer: 'Yes. We cover Knowle and BS4. Contact us for a free check.' },
        { question: 'How much is website design in Knowle?', answer: 'From £250 for a one-page site. Multi-page from £350. GBP optimisation add-on from £100.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Built for Knowle and Bristol.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps. Professional, fast, works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol' },
    },

    'stockwood-bristol': {
      name: 'Stockwood',
      fullName: 'Stockwood, Bristol',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS14'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Stockwood Bristol | Web Design from £250 | SEO Kings',
      metaDescription: 'Website design for trades and businesses in Stockwood, Bristol BS14 from £250. Google Business Profile and local SEO add-ons. Free audit — no obligation.',
      heroHeadline: 'Website design in Stockwood, Bristol',
      heroSubhead: 'From £250. SEO add-ons so you rank for local searches.',
      description: 'Stockwood is a suburb in south Bristol in the BS14 postcode, between Whitchurch and Keynsham. A residential area with steady local search demand for trades and services.',
      extendedDescription: 'Customers search "electrician Stockwood" or "builder Bristol BS14". We get you to the top.',
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS14', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Stockwood is close to Keynsham and south Bristol — our sweet spot for local SEO.',
      whyBullets: [
        { title: 'BS14 targeted', text: 'We focus on Stockwood and south Bristol trade searches.' },
        { title: 'Website & Google', text: 'Fast site plus optimised GBP.' },
        { title: 'Close to base', text: 'We know this area well — it borders our Keynsham base.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly websites from £250 for Stockwood businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: get into the Stockwood and south Bristol map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Stockwood BS14 trade keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Stockwood, Bristol — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. GBP and SEO are add-ons that compound results.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'What local customers search in Stockwood:',
      industries: ['Trades', 'Professional Services', 'Construction', 'Retail'],
      landmarks: ['Stockwood Park', 'Bonville Road', 'Whitchurch Lane'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Stockwood and south Bristol locations in your content.',
      stats: { businesses: '400+', monthlySearches: '20K+', competitors: 'Low-Medium', avgCPC: '£1.70' },
      localKeywords: [
        'plumber Stockwood Bristol',
        'electrician Stockwood Bristol',
        'builder Stockwood BS14',
        'website design Stockwood',
        'web designer Bristol BS14',
        'local SEO Stockwood',
      ],
      ctaHeadline: 'Ready to Get More Customers in Stockwood?',
      ctaSubhead: 'Join south Bristol businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['whitchurch-bristol', 'knowle-bristol', 'keynsham', 'brislington', 'bath'],
      faqs: [
        { question: 'Do you cover Stockwood, Bristol?', answer: 'Yes. We cover Stockwood and BS14. Get a free check on your website and Google listing.' },
        { question: 'How much is a website in Stockwood?', answer: 'From £250 for a single-page site. Multi-page from £350. GBP optimisation is a £100 add-on.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Stockwood and south Bristol.' },
        { title: 'Results', description: 'Monthly updates. More local enquiries.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps. Fast and professional.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol' },
    },

    'bedminster-bristol': {
      name: 'Bedminster',
      fullName: 'Bedminster, Bristol',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS3', 'BS13'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Bedminster Bristol | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for trades and businesses in Bedminster, Bristol BS3. Websites from £250. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in Bedminster, Bristol',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so Bedminster customers find you first.',
      description: "Bedminster is an inner-city suburb of Bristol on the south bank of the River Avon, covering the BS3 postcode with BS13 taking in the wider Bishopsworth and Withywood side. It's one of the city's best-known trade and business areas, home to North Street's run of independent shops, cafes and bars and the historic East Street market a few minutes further north.",
      extendedDescription: "Bedminster sits just across the river from Bristol city centre, so competition for terms like \"web designer Bedminster\" and \"website design BS3\" is real — but most local trades and independent businesses are still relying on an out-of-date site, a Facebook page, or no website at all. We build fast, mobile-friendly sites from £250 and add Google Business Profile and local SEO so you show up when Bedminster customers search for your trade.",
      introParagraphs: [
        "North Street and East Street have seen a wave of independent retail, food and drink businesses open in recent years, and that growth is spilling into the surrounding streets. Whether you're a trade working the BS3/BS13 area or an independent business near North Street, a website that loads fast and ranks locally is how customers decide who to call first — not an afterthought.",
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS3', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Bedminster is a competitive, fast-growing part of Bristol. Get your website and Google listing working as hard as North Street does.',
      whyBullets: [
        { title: 'BS3 & BS13 focus', text: 'We target Bedminster and Bishopsworth trade searches directly, not generic Bristol-wide keywords.' },
        { title: 'Built for a fast-moving area', text: "Bedminster's independent scene moves quickly — your site needs to load fast and rank fast to keep up." },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Minutes from the city centre', text: 'Bedminster sits right across the river from central Bristol — we help you compete for both local and city-wide searches.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for Bedminster businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the Bedminster map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Bedminster and Bristol BS3 trade keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Bedminster, Bristol — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what local customers in Bedminster search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['North Street', 'East Street Market', 'Bedminster Bridge'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Bedminster locations in your content and listings.',
      stats: { businesses: '800+', monthlySearches: '35K+', competitors: 'Medium', avgCPC: '£2.00' },
      localKeywords: [
        'web designer bedminster',
        'website design bedminster bristol',
        'web design bs3',
        'plumber Bedminster Bristol',
        'electrician Bedminster',
        'builder Bedminster BS3',
        'web designer Bristol BS13',
        'local SEO Bedminster',
      ],
      ctaHeadline: 'Ready to Get More Customers in Bedminster?',
      ctaSubhead: 'Join Bristol businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['southville-bristol', 'long-ashton-bristol', 'knowle-bristol', 'whitchurch-bristol', 'brislington'],
      faqs: [
        { question: 'Do you cover Bedminster, Bristol?', answer: 'Yes. We cover Bedminster BS3 and the wider BS13 area, plus the rest of Bristol. Get in touch for a free check on your website and Google listing.' },
        { question: 'How much does website design cost in Bedminster?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on.' },
        { question: 'Can you get my business into the Google map pack in Bedminster?', answer: "Yes. GBP optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Bedminster trade searches to help you rank in the map pack." },
        { question: 'Do you work with the independent businesses around North Street?', answer: "Yes — we've built sites for trades and independent businesses across Bedminster. If you need something that matches your brand and loads fast, we can help." },
        { question: 'Is Bedminster more competitive than other Bristol suburbs?', answer: "It's one of the busier ones — being so close to the city centre means more competition than somewhere like Stockwood or Whitchurch. That's why we build pages specifically targeted at BS3 and BS13 searches rather than generic Bristol keywords." },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Bedminster and Bristol.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol area' },
    },

    'southville-bristol': {
      name: 'Southville',
      fullName: 'Southville, Bristol',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS3'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Southville Bristol | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for trades and businesses in Southville, Bristol BS3. Websites from £250. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in Southville, Bristol',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so Southville customers find you first.',
      description: "Southville is a residential neighbourhood in Bristol's BS3 postcode, just south of the river and a short walk from the city centre. Known for its Victorian terraces, independent cafes, and the Tobacco Factory arts venue, it's one of Bristol's most tightly-knit, well-connected communities.",
      extendedDescription: 'Southville sits alongside Bedminster and backs onto Ashton Gate Stadium, home to Bristol City and Bristol Bears — match days bring extra footfall and extra demand for trades and local services. Customers search "plumber Southville" or "electrician BS3" every week. We build the website and Google Business Profile that get you found first.',
      introParagraphs: [
        "Southville is also home to a growing pocket of independent tech and creative businesses — firms like BrisTechTonic sit alongside the trades and shopkeepers who've kept this neighbourhood running for decades. Whichever kind of business you run, you deserve a web designer with genuine local knowledge and real, measurable results — not a generic agency working from a template three postcodes away.",
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS3', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: "Southville is a close-knit, well-connected part of Bristol. A generic website won't cut it here — you need one built for how local people actually search.",
      whyBullets: [
        { title: 'BS3-specific targeting', text: 'We target Southville and Bedminster BS3 trade searches directly.' },
        { title: 'Built for a creative, independent area', text: "Southville's independent business scene expects a site that looks as good as it works — fast, modern, mobile-first." },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you show up in search and the map pack.' },
        { title: 'Match-day demand', text: 'Ashton Gate match days bring extra footfall to Southville — make sure your business is easy to find online when it matters.' },
        { title: 'Genuine local knowledge', text: "We're based just across the city in Keynsham — close enough to know Southville's streets, without city-centre agency overheads." },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for Southville businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the Southville map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Southville and Bristol BS3 trade keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Southville, Bristol — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what local customers in Southville search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Tobacco Factory', 'Ashton Gate Stadium', 'North Street'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Southville locations in your content and listings.',
      stats: { businesses: '400+', monthlySearches: '18K+', competitors: 'Medium', avgCPC: '£1.90' },
      localKeywords: [
        'web designer southville',
        'website design southville bristol',
        'web design southville',
        'plumber Southville Bristol',
        'electrician Southville',
        'builder Southville BS3',
        'web designer Bristol BS3',
        'local SEO Southville',
      ],
      ctaHeadline: 'Ready to Get More Customers in Southville?',
      ctaSubhead: 'Join Bristol businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['bedminster-bristol', 'long-ashton-bristol', 'knowle-bristol', 'brislington'],
      faqs: [
        { question: 'Do you cover Southville, Bristol?', answer: 'Yes. We cover Southville BS3 and the rest of Bristol. Get in touch for a free check on your website and Google listing.' },
        { question: 'How much does website design cost in Southville?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on.' },
        { question: 'Can you get my business into the Google map pack in Southville?', answer: 'Yes. GBP optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Southville trade searches to help you rank in the map pack.' },
        { question: 'Do you work with businesses near the Tobacco Factory?', answer: "Yes — we've built sites for trades and independent businesses across Southville and the wider Bedminster area. Get in touch for a free check." },
        { question: "What's the difference between your Southville and Bedminster pages?", answer: 'Southville and Bedminster are neighbouring BS3 areas with slightly different search habits — we build dedicated, locally-targeted pages for each so you rank for the exact area your customers search, rather than one generic BS3 page trying to cover both.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Southville and Bristol.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol area' },
    },

    'long-ashton-bristol': {
      name: 'Long Ashton',
      fullName: 'Long Ashton, North Somerset',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'North Somerset',
      postcodes: ['BS41'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Long Ashton | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for trades and businesses in Long Ashton, Bristol BS41. Websites from £250. Google Business Profile add-ons. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in Long Ashton',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so Long Ashton customers find you first.',
      description: "Long Ashton is a large village in North Somerset, just southwest of Bristol on the BS41 postcode, sitting right beside Ashton Court Estate and the A370. A mix of long-established families and Bristol commuters, with steady demand for trades and local services.",
      extendedDescription: 'Customers search "plumber Long Ashton" or "electrician BS41" when something needs doing — and with Ashton Court Estate and the University of Bristol\'s Long Ashton campus close by, footfall and search volume are both healthy. We build the website and Google Business Profile that get you found first, not buried under Bristol-wide competition three postcodes away.',
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS41', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: "Long Ashton sits right on Bristol's doorstep but searches differently to the city — a generic Bristol-wide page won't get you found here.",
      whyBullets: [
        { title: 'BS41-specific targeting', text: 'We target Long Ashton and the surrounding North Somerset villages directly, not generic Bristol keywords.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you show up in search and the map pack.' },
        { title: 'Genuine local knowledge', text: "We're based in Keynsham, a short drive away — close enough to know Long Ashton and Ashton Court, without city-centre agency overheads." },
        { title: 'Transparent pricing', text: 'From £250. No hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for Long Ashton businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the Long Ashton map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Long Ashton and BS41 trade keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Long Ashton — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google, not just online.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what local customers in Long Ashton search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Ashton Court Estate', 'Long Ashton Bypass', 'Providence Lane'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Long Ashton locations in your content and listings.',
      stats: { businesses: '250+', monthlySearches: '9K+', competitors: 'Low-Medium', avgCPC: '£1.70' },
      localKeywords: [
        'web designer Long Ashton',
        'website design Long Ashton',
        'web design Long Ashton',
        'plumber Long Ashton',
        'electrician Long Ashton',
        'builder Long Ashton BS41',
        'web designer Bristol BS41',
        'local SEO Long Ashton',
      ],
      ctaHeadline: 'Ready to Get More Customers in Long Ashton?',
      ctaSubhead: 'Join North Somerset businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['bedminster-bristol', 'southville-bristol', 'bristol', 'keynsham'],
      faqs: [
        { question: 'Do you cover Long Ashton?', answer: 'Yes. We cover Long Ashton BS41 and the surrounding North Somerset villages, plus the rest of Bristol. Get in touch for a free check on your website and Google listing.' },
        { question: 'How much does website design cost in Long Ashton?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on.' },
        { question: 'Can you get my business into the Google map pack in Long Ashton?', answer: 'Yes. GBP optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Long Ashton trade searches to help you rank in the map pack.' },
        { question: 'Is Long Ashton less competitive than Bristol city centre for SEO?', answer: "Generally, yes — Long Ashton and the surrounding BS41 villages have far fewer well-optimised competitors than central Bristol, so it's realistic to reach map pack positions quickly with the right setup." },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Long Ashton and North Somerset.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol area' },
    },

    'yate-bristol': {
      name: 'Yate',
      fullName: 'Yate, South Gloucestershire',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'South Gloucestershire',
      postcodes: ['BS37'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Yate | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for trades and businesses in Yate, South Gloucestershire BS37. Websites from £250. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in Yate, South Gloucestershire',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so Yate customers find you first.',
      description: "Yate is a town in South Gloucestershire, around 12 miles northeast of Bristol city centre, in the BS37 postcode. It's grown substantially since the 1960s, from a village into one of the largest towns in the district, with Yate Shopping Centre as its commercial hub.",
      extendedDescription: "That growth means a large, established trades market — builders, roofers, electricians and plumbers serving new-build estates and older housing stock alike. Customers search Google for \"plumber Yate\" or \"electrician BS37\" every day. Most Bristol-focused agencies barely touch Yate — which means there's real opportunity to rank quickly for the businesses that get their website and Google listing right first.",
      introParagraphs: [
        'Yate has good transport links to Bristol and to Chipping Sodbury just down the road, so trades here often work across both towns. We build fast, mobile-friendly websites from £250 and add Google Business Profile and local SEO so you\'re the business that shows up first — whether the search is "builder Yate" or "roofer BS37".',
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS37', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Yate is underserved by digital marketing — most agencies focus their attention on Bristol city centre. That\'s an opportunity for the businesses that move first.',
      whyBullets: [
        { title: 'BS37 focus', text: 'We target Yate and South Gloucestershire trade searches directly — not generic Bristol keywords.' },
        { title: 'Underserved market', text: 'Most agencies focus on Bristol city centre. Yate businesses that rank well locally have far less competition to beat.' },
        { title: 'Built for new-build estates', text: "Yate's ongoing new-build development means steady demand for builders, roofers and electricians — we make sure you're visible to it." },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Good transport links, good reach', text: "Yate's location makes it easy to serve Chipping Sodbury and the wider South Gloucestershire area too — we build that into your keyword targeting." },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for Yate businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the Yate map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Yate and South Gloucestershire BS37 trade keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Yate — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what local customers in Yate search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Yate Shopping Centre', 'Yate Outdoor Sports Complex', 'Church Road'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Yate locations in your content and listings.',
      stats: { businesses: '500+', monthlySearches: '15K+', competitors: 'Low', avgCPC: '£1.60' },
      localKeywords: [
        'web designer yate',
        'website design yate',
        'local seo yate',
        'plumber Yate',
        'electrician Yate BS37',
        'builder Yate',
        'roofer Yate',
        'web designer South Gloucestershire',
      ],
      ctaHeadline: 'Ready to Get More Customers in Yate?',
      ctaSubhead: 'Join South Gloucestershire businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['kingswood', 'bristol', 'warmley-keynsham'],
      faqs: [
        { question: 'Do you cover Yate?', answer: 'Yes. We cover Yate BS37 and the wider South Gloucestershire area. Get in touch for a free check on your website and Google listing.' },
        { question: 'How much does website design cost in Yate?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on.' },
        { question: 'Can you get my business into the Google map pack in Yate?', answer: 'Yes. GBP optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Yate trade searches to help you rank in the map pack.' },
        { question: "Do you work with builders serving Yate's new housing estates?", answer: "Yes — Yate's ongoing new-build development means steady work for builders, roofers and electricians, and we build websites and local SEO campaigns to help you win that work." },
        { question: 'Do you cover areas near Yate, like Chipping Sodbury?', answer: 'Yes — Yate is well placed to serve Chipping Sodbury and the wider South Gloucestershire area, and we build that into your local SEO targeting alongside core Yate BS37 searches.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Yate and South Gloucestershire.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'South Gloucestershire Result', caseTitle: 'New Decorating, Bath & South Gloucestershire', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & South Gloucestershire' },
    },

    'clifton-bristol': {
      name: 'Clifton',
      fullName: 'Clifton, Bristol',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS8'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Clifton Bristol | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for trades and businesses in Clifton, Bristol BS8. Websites from £250. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in Clifton, Bristol',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so Clifton customers find you first.',
      description: "Clifton is one of Bristol's most affluent and recognisable suburbs, sitting on a hillside above the Avon Gorge in the BS8 postcode. It's home to the iconic Clifton Suspension Bridge, the Georgian terraces of Clifton Village, and the wide open space of the Downs — and it attracts a clientele who expect the businesses they use to look as polished as the area itself.",
      extendedDescription: "Clifton Village's boutique shops, independent retailers and professional services firms compete for a customer base that judges quality fast — and a dated or amateur website is one of the quickest ways to lose that trust. We build fast, professional sites from £250 and add Google Business Profile and local SEO so architects, interior designers, and bespoke tradespeople serving Clifton show up first when BS8 customers search.",
      introParagraphs: [
        "Clifton has a different rhythm to somewhere like Bedminster or Southville — customers here are often researching before they buy, comparing several businesses online before making contact. That means your website isn't just a contact page, it's doing the work of convincing someone you're the right choice. We build sites that hold up to that scrutiny, and pair them with local SEO so you're found for \"web designer Clifton\" and BS8 trade searches in the first place.",
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS8', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: "Clifton is a premium, discerning part of Bristol. A generic website won't cut it here — you need one built to match the standard your customers expect.",
      whyBullets: [
        { title: 'BS8-specific targeting', text: 'We target Clifton and BS8 searches directly, not generic Bristol-wide keywords.' },
        { title: 'Built for a premium market', text: "Clifton's independent retailers, architects and professional services expect a polished, professional site — we build to that standard as standard." },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Trusted by discerning customers', text: 'Clifton customers research before they buy — a fast, credible website is often what gets you the enquiry over a competitor.' },
        { title: "Minutes from the Suspension Bridge and the Downs", text: "We know Clifton's streets and its customer base — not just the Bristol postcode on a map." },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for Clifton businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the Clifton map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Clifton and Bristol BS8 trade keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Clifton, Bristol — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what local customers in Clifton search:',
      industries: ['Professional Services', 'Retail', 'Trades', 'Hospitality'],
      landmarks: ['Clifton Suspension Bridge', 'Clifton Village', 'The Downs'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Clifton locations in your content and listings.',
      stats: { businesses: '600+', monthlySearches: '25K+', competitors: 'Medium', avgCPC: '£2.20' },
      localKeywords: [
        'web designer clifton bristol',
        'website design clifton',
        'web design bs8',
        'architect website clifton bristol',
        'interior designer website clifton',
        'web designer bristol bs8',
        'local seo clifton',
        'website designer clifton village',
      ],
      ctaHeadline: 'Ready to Get More Customers in Clifton?',
      ctaSubhead: 'Join Bristol businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['southville-bristol', 'bedminster-bristol', 'bristol'],
      faqs: [
        { question: 'Do you cover Clifton, Bristol?', answer: 'Yes. We cover Clifton BS8 and the rest of Bristol. Get in touch for a free check on your website and Google listing.' },
        { question: 'How much does website design cost in Clifton?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on.' },
        { question: 'Can you get my business into the Google map pack in Clifton?', answer: 'Yes. GBP optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Clifton trade searches to help you rank in the map pack.' },
        { question: 'Do you work with independent shops and professional services around Clifton Village?', answer: "Yes — we've built sites for architects, interior designers, boutique retailers and trades across Clifton. If you need a site that matches a premium brand, we can help." },
        { question: 'Is Clifton more competitive than other Bristol suburbs?', answer: 'Clifton has fewer businesses than somewhere like Bedminster, but customers here are more likely to compare websites carefully before making contact — so we focus on making your site look and load as good as it needs to, not just rank.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Clifton and Bristol.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol area' },
    },

    'horfield-bristol': {
      name: 'Horfield',
      fullName: 'Horfield, Bristol',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS7'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Horfield Bristol | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for trades and businesses in Horfield, Bristol BS7. Websites from £250. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in Horfield, Bristol',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so Horfield customers find you first.',
      description: "Horfield is a large residential suburb in Bristol's BS7 postcode, stretching from Gloucester Road up towards Southmead. It's home to Bristol Rovers' Memorial Stadium and a dense mix of Victorian and Edwardian terraces, making it one of the city's biggest residential trade markets.",
      extendedDescription: 'With so many period terraces in one area, Horfield generates steady, ongoing demand for builders, electricians, plumbers and decorators — customers searching "plumber Horfield" or "electrician BS7" every week. We build fast, mobile-friendly websites from £250 and add Google Business Profile and local SEO so you\'re the trade that shows up first.',
      introParagraphs: [
        "Horfield sits just off the busy Gloucester Road corridor, giving trades and local businesses here a strong base of regular custom as well as passing trade. Whether you're working the BS7 terraces or serving the wider match-day crowd at Memorial Stadium, a website built to rank locally is what gets the phone ringing — not a generic template that looks the same as everyone else's.",
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS7', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: "Horfield is one of Bristol's largest residential areas. Get your website and Google listing working as hard as its trades do.",
      whyBullets: [
        { title: 'BS7-specific targeting', text: 'We target Horfield and Bristol BS7 trade searches directly, not generic Bristol-wide keywords.' },
        { title: 'Built for a big residential market', text: "Horfield's Victorian and Edwardian terraces mean steady, ongoing work for builders, electricians and decorators — we make sure you're visible to it." },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Match-day and community demand', text: 'Memorial Stadium and the busy Gloucester Road scene bring extra footfall — make sure your business is easy to find online when it matters.' },
        { title: 'Genuine local knowledge', text: "We're based just outside the city in Keynsham — close enough to know Horfield's streets, without city-centre agency overheads." },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for Horfield businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the Horfield map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Horfield and Bristol BS7 trade keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Horfield, Bristol — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what local customers in Horfield search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Memorial Stadium', 'Gloucester Road', 'Horfield Common'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Horfield locations in your content and listings.',
      stats: { businesses: '700+', monthlySearches: '22K+', competitors: 'Medium', avgCPC: '£1.90' },
      localKeywords: [
        'web designer horfield',
        'website design horfield bristol',
        'web design bs7',
        'plumber horfield bristol',
        'electrician horfield',
        'builder horfield bs7',
        'web designer bristol bs7',
        'local seo horfield',
      ],
      ctaHeadline: 'Ready to Get More Customers in Horfield?',
      ctaSubhead: 'Join Bristol businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['filton-bristol', 'bristol', 'kingswood'],
      faqs: [
        { question: 'Do you cover Horfield, Bristol?', answer: 'Yes. We cover Horfield BS7 and the rest of Bristol. Get in touch for a free check on your website and Google listing.' },
        { question: 'How much does website design cost in Horfield?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on.' },
        { question: 'Can you get my business into the Google map pack in Horfield?', answer: 'Yes. GBP optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Horfield trade searches to help you rank in the map pack.' },
        { question: 'Do you work with trades serving the Horfield terraces?', answer: "Yes — Horfield's mix of Victorian and Edwardian housing means steady work for builders, electricians, plumbers and decorators, and we build websites and local SEO campaigns to help you win that work." },
        { question: 'Do you cover areas near Horfield, like Gloucester Road and Filton?', answer: 'Yes — we also have a dedicated page for Filton, and cover the wider Gloucester Road and BS7 area as part of your local SEO targeting.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Horfield and Bristol.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol area' },
    },

    'filton-bristol': {
      name: 'Filton',
      fullName: 'Filton, South Gloucestershire',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'South Gloucestershire',
      postcodes: ['BS34'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Filton | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for trades and businesses in Filton, South Gloucestershire BS34. Websites from £250. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in Filton, South Gloucestershire',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so Filton customers find you first.',
      description: "Filton is a town in South Gloucestershire, in the BS34 postcode, best known as the birthplace of Concorde and the historic home of Bristol's aerospace industry. It remains a major employment hub today, with Airbus, BAE Systems and Rolls-Royce all maintaining a significant presence.",
      extendedDescription: 'That large workforce means steady demand for trades and local services well beyond the aerospace sector itself — plumbers, electricians and builders serving both the businesses and the surrounding residential streets. We build fast, mobile-friendly websites from £250 and add Google Business Profile and local SEO so you\'re the business that shows up first when Filton customers search.',
      introParagraphs: [
        "Filton sits between Bristol and South Gloucestershire's northern towns, with good transport links that make it a natural base for trades serving a wider area. Whether you're targeting the BS34 postcode directly or the businesses and staff working at the aerospace sites nearby, a website built to rank locally — not a generic Bristol-wide page — is what gets you found first.",
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS34', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: "Filton is a distinct South Gloucestershire hub with its own workforce and identity. That's an opportunity for the businesses that target it directly.",
      whyBullets: [
        { title: 'BS34-specific targeting', text: 'We target Filton and South Gloucestershire BS34 searches directly, not generic Bristol-wide keywords.' },
        { title: 'A distinct South Gloucestershire hub', text: 'Filton has its own identity and workforce, separate from central Bristol — we build your local SEO around that, not a generic Bristol page.' },
        { title: 'Large local workforce', text: 'Airbus, BAE Systems and the wider aerospace industry bring a large workforce to Filton — real, ongoing demand for local trades and services.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Good transport links, good reach', text: "Filton's location makes it easy to serve the wider South Gloucestershire area too — we build that into your keyword targeting." },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for Filton businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the Filton map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Filton and South Gloucestershire BS34 trade keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Filton — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what local customers in Filton search:',
      industries: ['Trades', 'Professional Services', 'Construction', 'Engineering'],
      landmarks: ['Aerospace Bristol', 'Filton Airfield', 'Cribbs Causeway'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Filton locations in your content and listings.',
      stats: { businesses: '450+', monthlySearches: '14K+', competitors: 'Low', avgCPC: '£1.70' },
      localKeywords: [
        'web designer filton',
        'website design filton bristol',
        'web design bs34',
        'plumber filton',
        'electrician filton bs34',
        'builder filton',
        'web designer south gloucestershire',
        'local seo filton',
      ],
      ctaHeadline: 'Ready to Get More Customers in Filton?',
      ctaSubhead: 'Join South Gloucestershire businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['bradley-stoke-bristol', 'horfield-bristol', 'bristol', 'yate-bristol'],
      faqs: [
        { question: 'Do you cover Filton?', answer: 'Yes. We cover Filton BS34 and the wider South Gloucestershire area. Get in touch for a free check on your website and Google listing.' },
        { question: 'How much does website design cost in Filton?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on.' },
        { question: 'Can you get my business into the Google map pack in Filton?', answer: 'Yes. GBP optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Filton trade searches to help you rank in the map pack.' },
        { question: 'Do you work with businesses connected to the Filton aerospace industry?', answer: "Yes — Filton's large workforce at Airbus, BAE Systems and the wider aerospace sector creates steady demand for local trades and services, and we build websites and local SEO campaigns to help you reach it." },
        { question: 'Do you cover areas near Filton, like Bradley Stoke and Cribbs Causeway?', answer: 'Yes — we also have a dedicated page for Bradley Stoke, and cover the wider South Gloucestershire area including Cribbs Causeway as part of your local SEO targeting.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Filton and South Gloucestershire.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'South Gloucestershire Result', caseTitle: 'New Decorating, Bath & South Gloucestershire', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & South Gloucestershire' },
    },

    'bradley-stoke-bristol': {
      name: 'Bradley Stoke',
      fullName: 'Bradley Stoke, South Gloucestershire',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'South Gloucestershire',
      postcodes: ['BS32'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Bradley Stoke | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for trades and businesses in Bradley Stoke, South Gloucestershire BS32. Websites from £250. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in Bradley Stoke, South Gloucestershire',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so Bradley Stoke customers find you first.',
      description: 'Bradley Stoke is a town in South Gloucestershire, in the BS32 postcode, developed from the 1980s onwards into one of the largest new settlements built in England. It has a large, predominantly younger residential population, several retail parks including the Willow Brook Centre, and easy access to the M4 and M5.',
      extendedDescription: 'That scale of new-build housing means constant demand for trades — builders, decorators, landscapers and electricians serving homeowners who search Google first rather than asking around. Most Bristol-focused agencies barely touch Bradley Stoke, which means there\'s a real opportunity for the businesses that get their website and Google listing right first.',
      introParagraphs: [
        'Bradley Stoke\'s younger homeowners are used to finding everything online, from furniture to trades — if you\'re not showing up when they search "builder Bradley Stoke" or "electrician BS32", a competitor is getting the call instead. We build fast, mobile-friendly websites from £250 and add Google Business Profile and local SEO so you\'re the business they find first.',
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS32', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Bradley Stoke is underserved by digital marketing — most agencies focus their attention on Bristol city centre. That\'s an opportunity for the businesses that move first.',
      whyBullets: [
        { title: 'BS32-specific targeting', text: 'We target Bradley Stoke and South Gloucestershire BS32 searches directly, not generic Bristol-wide keywords.' },
        { title: 'Underserved market', text: 'Most agencies focus on Bristol city centre. Bradley Stoke businesses that rank well locally have far less competition to beat.' },
        { title: 'Built for new-build estates', text: "Bradley Stoke's ongoing new-build development means steady demand for builders, decorators and landscapers — we make sure you're visible to it." },
        { title: 'A younger, online-first customer base', text: 'Bradley Stoke homeowners search online before they call — a fast, well-ranked website is how you get found first.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Good motorway links, good reach', text: "Bradley Stoke's M4/M5 links make it easy to serve the wider South Gloucestershire area too — we build that into your keyword targeting." },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for Bradley Stoke businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the Bradley Stoke map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Bradley Stoke and South Gloucestershire BS32 trade keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Bradley Stoke — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what local customers in Bradley Stoke search:',
      industries: ['Trades', 'Retail', 'Construction', 'Professional Services'],
      landmarks: ['Willow Brook Centre', 'Three Brooks Lake', 'M4/M5 Junction'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Bradley Stoke locations in your content and listings.',
      stats: { businesses: '550+', monthlySearches: '16K+', competitors: 'Low', avgCPC: '£1.65' },
      localKeywords: [
        'web designer bradley stoke',
        'website design bradley stoke',
        'web design bs32',
        'builder bradley stoke',
        'electrician bradley stoke bs32',
        'landscaper bradley stoke',
        'web designer south gloucestershire',
        'local seo bradley stoke',
      ],
      ctaHeadline: 'Ready to Get More Customers in Bradley Stoke?',
      ctaSubhead: 'Join South Gloucestershire businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['filton-bristol', 'yate-bristol', 'bristol', 'horfield-bristol'],
      faqs: [
        { question: 'Do you cover Bradley Stoke?', answer: 'Yes. We cover Bradley Stoke BS32 and the wider South Gloucestershire area. Get in touch for a free check on your website and Google listing.' },
        { question: 'How much does website design cost in Bradley Stoke?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on.' },
        { question: 'Can you get my business into the Google map pack in Bradley Stoke?', answer: 'Yes. GBP optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Bradley Stoke trade searches to help you rank in the map pack.' },
        { question: "Do you work with builders serving Bradley Stoke's new housing estates?", answer: "Yes — Bradley Stoke's ongoing new-build development means steady work for builders, decorators, landscapers and electricians, and we build websites and local SEO campaigns to help you win that work." },
        { question: 'Do you cover areas near Bradley Stoke, like Filton and Patchway?', answer: 'Yes — we also have a dedicated page for Filton, and cover the wider South Gloucestershire area including Patchway as part of your local SEO targeting.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Bradley Stoke and South Gloucestershire.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'South Gloucestershire Result', caseTitle: 'New Decorating, Bath & South Gloucestershire', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & South Gloucestershire' },
    },

    'city-centre-bristol': {
      name: 'Bristol City Centre',
      fullName: 'Bristol City Centre',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS1'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Bristol City Centre | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for businesses in Bristol city centre BS1 — Broadmead, Harbourside, Old City and Castle Park. Websites from £250. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in Bristol City Centre',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so BS1 customers find you first.',
      description: "Bristol city centre is the commercial heart of the South West, packed into the BS1 postcode: the shops of Broadmead and Cabot Circus, the bars and venues of the Harbourside around Millennium Square, the independent traders of the Old City and St Nicholas Market, and the offices rising around Castle Park and the Floating Harbour. It's the densest concentration of businesses — and business searches — anywhere in our patch.",
      extendedDescription: "Central Bristol works two ways for our clients. Businesses trading in BS1 — cafés, bars, shops, studios, professional firms — need websites and Google listings that stand out in the city's most competitive search market. And trades serving the centre — shopfitters, electricians, commercial decorators, refrigeration and catering engineers — need to show up when those businesses search for help. We build for both.",
      introParagraphs: [
        "The centre's quarters each have their own character — Broadmead and Cabot Circus for retail, the Harbourside for hospitality and events, the Old City for independents and street food around St Nicholas Market, Castle Park for offices — but Google treats them as one market: BS1. We target the centre as a whole so you're visible across all of it, rather than chasing one street at a time.",
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS1', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: "City centre searches are the most valuable and most contested in Bristol. Most central businesses still run slow, dated websites — that's the opening.",
      whyBullets: [
        { title: 'BS1-specific targeting', text: 'We target Bristol city centre and BS1 searches directly — Broadmead, Harbourside, Old City and Castle Park — not vague Bristol-wide keywords.' },
        { title: 'Built for a competitive market', text: 'Central Bristol customers compare several businesses before making contact. A fast, credible site is what wins the enquiry.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Hospitality and retail experience', text: 'Cafés, bars, restaurants, shops and studios — businesses where the website has to sell the visit, not just list a phone number.' },
        { title: 'Commercial trade demand', text: 'Hundreds of BS1 businesses need shopfitters, electricians and commercial decorators. If you serve the centre, we make sure they find you.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for central Bristol businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the BS1 map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Bristol city centre and BS1 keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Bristol city centre — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what customers in central Bristol search:',
      industries: ['Hospitality', 'Retail', 'Professional Services', 'Trades'],
      landmarks: ['Cabot Circus', 'St Nicholas Market', 'Millennium Square', 'Castle Park', 'Corn Street'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference central Bristol locations in your content and listings.',
      stats: { businesses: '2,000+', monthlySearches: '60K+', competitors: 'High', avgCPC: '£2.60' },
      localKeywords: [
        'web designer bristol city centre',
        'website design bristol',
        'web design bs1',
        'restaurant website bristol',
        'shopfitter bristol city centre',
        'electrician bs1',
        'local seo bristol',
        'web designer harbourside bristol',
      ],
      ctaHeadline: 'Ready to Get More Customers in Central Bristol?',
      ctaSubhead: 'Join Bristol businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['redcliffe-bristol', 'montpelier-bristol', 'bristol'],
      faqs: [
        { question: 'Do you cover Bristol city centre?', answer: 'Yes. We cover the whole of BS1 — Broadmead, Cabot Circus, the Harbourside, the Old City around St Nicholas Market, and Castle Park — plus the rest of Bristol. Get in touch for a free check.' },
        { question: 'How much does website design cost in central Bristol?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on.' },
        { question: 'Can you get my business into the Google map pack in the city centre?', answer: 'Yes. GBP optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets central Bristol searches to help you rank in the map pack — the most contested map pack in the region.' },
        { question: 'Do you work with bars, cafés and restaurants?', answer: "Yes. Hospitality is a big part of the BS1 market and the website has to do more than list opening hours — it has to sell the visit. We build fast sites that do that, from £250." },
        { question: 'I\'m a trade serving city centre businesses — is this page for me?', answer: 'Yes. Shopfitters, commercial electricians, decorators and catering engineers all win work from BS1 businesses searching for help. We target those commercial searches alongside consumer ones.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for central Bristol.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol area' },
    },

    'redcliffe-bristol': {
      name: 'Redcliffe',
      fullName: 'Redcliffe, Bristol',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS1'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Redcliffe Bristol | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for trades and businesses in Redcliffe, Bristol BS1 6. Websites from £250. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in Redcliffe, Bristol',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so Redcliffe customers find you first.',
      description: "Redcliffe sits between the Floating Harbour and Temple Meads station in the BS1 6 postcode, anchored by the soaring spire of St Mary Redcliffe. It's one of central Bristol's fastest-changing districts — office buildings and hotels along Redcliffe Way, new apartment developments around Redcliffe Wharf, and a steady flow of commuters and visitors passing through from Temple Meads.",
      extendedDescription: "The mix of offices, hotels, new-build apartments and harbourside hospitality gives Redcliffe a distinctive business market. Fit-out contractors, maintenance trades, cleaners and facilities services all win regular work here, and the area's hospitality and service businesses compete for trade from Temple Meads foot traffic. We build the fast websites and optimised Google listings that put you in front of both.",
      introParagraphs: [
        "Redcliffe's redevelopment means constant demand for trades — from snagging and maintenance in the new apartment blocks to office fit-outs and hotel refurbishments. Customers and contractors alike find those services on Google, and BS1 6 searches are noticeably less contested than the retail core across the water.",
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS1 6', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: "Redcliffe is central Bristol without the retail-core competition — a growing district where a well-targeted website still stands out.",
      whyBullets: [
        { title: 'BS1 6-specific targeting', text: 'We target Redcliffe and BS1 6 searches directly, not generic Bristol-wide keywords.' },
        { title: 'New development, new demand', text: 'Apartment blocks and offices going up around Redcliffe Wharf mean ongoing work for trades, cleaners and facilities services.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Temple Meads footfall', text: 'Thousands pass through Temple Meads daily — hospitality and service businesses in Redcliffe can capture that trade with the right online presence.' },
        { title: 'Commercial and residential mix', text: 'Offices, hotels, new flats and period streets around St Mary Redcliffe — several customer types, one targeted campaign.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for Redcliffe businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the Redcliffe map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Redcliffe and Bristol BS1 keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Redcliffe, Bristol — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what local customers in Redcliffe search:',
      industries: ['Professional Services', 'Hospitality', 'Trades', 'Construction'],
      landmarks: ['St Mary Redcliffe', 'Redcliffe Wharf', 'Temple Meads', 'Floating Harbour'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Redcliffe locations in your content and listings.',
      stats: { businesses: '400+', monthlySearches: '18K+', competitors: 'Medium', avgCPC: '£2.20' },
      localKeywords: [
        'web designer redcliffe bristol',
        'website design redcliffe',
        'web design bs1 6',
        'office fit out bristol',
        'cleaner redcliffe bristol',
        'electrician bs1',
        'local seo redcliffe',
        'web designer temple meads',
      ],
      ctaHeadline: 'Ready to Get More Customers in Redcliffe?',
      ctaSubhead: 'Join Bristol businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['city-centre-bristol', 'totterdown-bristol', 'bristol'],
      faqs: [
        { question: 'Do you cover Redcliffe, Bristol?', answer: 'Yes. We cover Redcliffe BS1 6 and the rest of central Bristol. Get in touch for a free check on your website and Google listing.' },
        { question: 'How much does website design cost in Redcliffe?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on.' },
        { question: 'Can you get my business into the Google map pack in Redcliffe?', answer: 'Yes. GBP optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Redcliffe and central Bristol searches to help you rank in the map pack.' },
        { question: 'Do you work with trades on the new Redcliffe developments?', answer: 'Yes — the apartment and office developments around Redcliffe Wharf generate steady work for trades, and we build websites and local SEO campaigns that put you in front of it.' },
        { question: 'Is Redcliffe easier to rank in than the city centre core?', answer: 'Generally yes. BS1 6 searches are less contested than Broadmead or the Harbourside, so a well-optimised site and Google listing can reach the map pack faster.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Redcliffe and Bristol.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol area' },
    },

    'redland-bristol': {
      name: 'Redland',
      fullName: 'Redland, Bristol',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS6'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Redland Bristol | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for trades and businesses in Redland, Bristol BS6. Websites from £250. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in Redland, Bristol',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so Redland customers find you first.',
      description: "Redland is one of north Bristol's most sought-after suburbs, spread across the BS6 postcode between Whiteladies Road and Redland Green. It's a neighbourhood of substantial Victorian villas and terraces, tree-lined streets, and families who invest heavily in their homes — which makes it one of the city's best markets for quality trades.",
      extendedDescription: "Redland's housing stock is big, old and expensive to maintain — loft conversions, extensions, sash window restoration, rewires and redecoration are constant. Homeowners here research trades carefully online before making contact, so a professional website with genuine local proof is what wins the work. We build those sites from £250 and add local SEO so you show up for Redland and BS6 searches first.",
      introParagraphs: [
        "Between Redland, Cotham and Clifton, north-west Bristol has thousands of period properties in a tight cluster — a trade who ranks across those neighbouring suburbs picks up some of the best-paying domestic work in the city. We target Redland alongside its neighbours so one campaign covers the whole patch.",
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS6', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: "Redland has some of Bristol's best domestic trade work — big Victorian houses, owners who invest, and customers who choose from Google.",
      whyBullets: [
        { title: 'BS6-specific targeting', text: 'We target Redland and BS6 trade searches directly, not generic Bristol-wide keywords.' },
        { title: 'Premium period property work', text: 'Victorian villas mean loft conversions, extensions, sash windows and full redecorations — high-value jobs that repeat and refer.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Customers who research first', text: 'Redland homeowners compare trades online before calling. A credible, fast website is what gets you the enquiry.' },
        { title: 'Covers the north-west cluster', text: 'Redland, Cotham, Bishopston and Clifton form one market of period homes — we target them together so you win across all of it.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for Redland businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the Redland map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Redland and Bristol BS6 trade keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Redland, Bristol — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what local customers in Redland search:',
      industries: ['Trades', 'Construction', 'Professional Services', 'Retail'],
      landmarks: ['Redland Green', 'Whiteladies Road', 'Redland railway station'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Redland locations in your content and listings.',
      stats: { businesses: '450+', monthlySearches: '20K+', competitors: 'Medium', avgCPC: '£2.10' },
      localKeywords: [
        'web designer redland bristol',
        'website design redland',
        'web design bs6',
        'builder redland bristol',
        'loft conversion redland',
        'decorator bs6',
        'plumber redland bristol',
        'local seo redland',
      ],
      ctaHeadline: 'Ready to Get More Customers in Redland?',
      ctaSubhead: 'Join Bristol businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['cotham-bristol', 'bishopston-bristol', 'clifton-bristol'],
      faqs: [
        { question: 'Do you cover Redland, Bristol?', answer: 'Yes. We cover Redland BS6 and the rest of north-west Bristol. Get in touch for a free check on your website and Google listing.' },
        { question: 'How much does website design cost in Redland?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on.' },
        { question: 'Can you get my business into the Google map pack in Redland?', answer: 'Yes. GBP optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Redland trade searches to help you rank in the map pack.' },
        { question: 'What trades do well in Redland?', answer: 'Builders doing lofts and extensions, sash window specialists, decorators, plumbers and electricians. The Victorian housing stock generates constant high-value work, and homeowners here pay for quality.' },
        { question: 'Do you cover Cotham and Clifton too?', answer: 'Yes — we have dedicated pages for Cotham and Clifton, and we usually target the whole north-west Bristol cluster together so one campaign covers all of it.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Redland and Bristol.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol area' },
    },

    'cotham-bristol': {
      name: 'Cotham',
      fullName: 'Cotham, Bristol',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS6'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Cotham Bristol | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for trades and businesses in Cotham, Bristol BS6. Websites from £250. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in Cotham, Bristol',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so Cotham customers find you first.',
      description: "Cotham sits on the hill between the city centre and Redland in the BS6 postcode — a dense, leafy neighbourhood of Victorian terraces and villas, with the independent cafés and restaurants of Cotham Hill at its heart. Its position next to the university gives it a mix of long-term family homes, professional households and rental property, all of which keep local trades busy.",
      extendedDescription: "Cotham's period housing needs the same steady stream of work as neighbouring Redland — rewires, boiler replacements, redecoration, roof repairs — plus a strong rental market that gives landlords and letting agents a constant need for reliable trades. We build fast websites from £250 and add local SEO so you're the one they find.",
      introParagraphs: [
        "Cotham Hill has become one of Bristol's best independent food streets, and its small businesses compete hard for attention online. Whether you're a restaurant on the Hill or a trade serving the BS6 terraces, showing up first on Google is what fills the diary.",
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS6', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: "Cotham combines premium period homes, a busy rental market and a thriving independent food scene — three sources of steady demand for one targeted campaign.",
      whyBullets: [
        { title: 'BS6-specific targeting', text: 'We target Cotham and BS6 searches directly, not generic Bristol-wide keywords.' },
        { title: 'Landlord and letting demand', text: 'The rental stock around the university means landlords and agents constantly need plumbers, electricians and decorators they can rely on.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Cotham Hill independents', text: 'Restaurants, cafés and salons on Cotham Hill live and die by their online presence — we build sites that sell the visit.' },
        { title: 'Covers the north-west cluster', text: 'Cotham, Redland and Clifton form one tight market — we target them together so you pick up work across all three.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for Cotham businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the Cotham map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Cotham and Bristol BS6 trade keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Cotham, Bristol — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what local customers in Cotham search:',
      industries: ['Trades', 'Hospitality', 'Professional Services', 'Retail'],
      landmarks: ['Cotham Hill', 'Cotham Gardens', 'St Michael\'s Hill'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Cotham locations in your content and listings.',
      stats: { businesses: '350+', monthlySearches: '16K+', competitors: 'Medium', avgCPC: '£2.00' },
      localKeywords: [
        'web designer cotham bristol',
        'website design cotham',
        'web design bs6',
        'plumber cotham bristol',
        'electrician cotham',
        'restaurant website bristol',
        'decorator bs6',
        'local seo cotham',
      ],
      ctaHeadline: 'Ready to Get More Customers in Cotham?',
      ctaSubhead: 'Join Bristol businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['redland-bristol', 'montpelier-bristol', 'clifton-bristol'],
      faqs: [
        { question: 'Do you cover Cotham, Bristol?', answer: 'Yes. We cover Cotham BS6 and the rest of north-west Bristol. Get in touch for a free check on your website and Google listing.' },
        { question: 'How much does website design cost in Cotham?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on.' },
        { question: 'Can you get my business into the Google map pack in Cotham?', answer: 'Yes. GBP optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Cotham searches to help you rank in the map pack.' },
        { question: 'Do you work with restaurants and cafés on Cotham Hill?', answer: 'Yes — hospitality businesses are a big part of Cotham, and we build fast sites that showcase the menu, take bookings and rank for local food searches.' },
        { question: 'Do you work with landlords and letting agents?', answer: 'We work with the trades they hire — if you serve Cotham\'s rental stock, a site that ranks for BS6 trade searches puts you in front of landlords who need reliable help fast.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Cotham and Bristol.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol area' },
    },

    'montpelier-bristol': {
      name: 'Stokes Croft & Montpelier',
      fullName: 'Stokes Croft & Montpelier, Bristol',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS6', 'BS1'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Stokes Croft & Montpelier | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for businesses in Stokes Croft and Montpelier, Bristol BS1 3 & BS6 5. Websites from £250. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in Stokes Croft & Montpelier',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so local customers find you first.',
      description: "Stokes Croft is Bristol's independent quarter — street art, venues, bars and one-of-a-kind shops running north from the city centre in BS1 3 — and it flows straight into Montpelier's steep Victorian terraces in BS6 5. Together they're one of the city's most distinctive neighbourhoods: fiercely independent businesses on the main strip, and a dense residential hinterland of period homes behind it.",
      extendedDescription: "Independent doesn't mean invisible — Stokes Croft businesses still get found through Google, and a slow or missing website costs real trade. Meanwhile Montpelier's terraces generate the same steady demand for plumbers, electricians, roofers and decorators as any period neighbourhood in Bristol. We build fast, characterful sites from £250 that fit the area's identity without sacrificing the rankings.",
      introParagraphs: [
        "Businesses here often resist looking corporate — fair enough. But a website can carry plenty of personality and still load in under a second, rank for local searches and turn visitors into customers. That's the kind we build.",
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS6 5', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: "Stokes Croft and Montpelier run on independent business — and independent businesses win or lose on whether locals can find them.",
      whyBullets: [
        { title: 'Targeting BS1 3 and BS6 5', text: 'We target Stokes Croft and Montpelier searches directly, not generic Bristol-wide keywords.' },
        { title: 'Sites with character that still rank', text: 'A website can look like Stokes Croft and still hit green Core Web Vitals — personality and performance aren\'t a trade-off.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Hospitality and venue experience', text: 'Bars, cafés, venues and studios — businesses where the website sells the visit and the Google listing fills the tables.' },
        { title: 'Montpelier\'s period terraces', text: 'The steep streets behind the Croft need the same trades as anywhere — plumbers, roofers and decorators who target the area win it.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for Stokes Croft and Montpelier businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the local map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Stokes Croft, Montpelier and BS6 keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Stokes Croft & Montpelier — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what local customers around Stokes Croft search:',
      industries: ['Hospitality', 'Retail', 'Creative', 'Trades'],
      landmarks: ['Stokes Croft', 'Picton Street', 'Montpelier railway station', 'St Andrew\'s Park'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Stokes Croft and Montpelier locations in your content and listings.',
      stats: { businesses: '400+', monthlySearches: '17K+', competitors: 'Medium', avgCPC: '£1.90' },
      localKeywords: [
        'web designer stokes croft',
        'website design montpelier bristol',
        'web design bs6',
        'bar website bristol',
        'cafe website stokes croft',
        'plumber montpelier bristol',
        'electrician bs6',
        'local seo stokes croft',
      ],
      ctaHeadline: 'Ready to Get More Customers in Stokes Croft & Montpelier?',
      ctaSubhead: 'Join Bristol businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['city-centre-bristol', 'cotham-bristol', 'bishopston-bristol'],
      faqs: [
        { question: 'Do you cover Stokes Croft and Montpelier?', answer: 'Yes. We cover the whole strip from the Bearpit up Stokes Croft into Montpelier and St Paul\'s edges — BS1 3 and BS6 5 — plus the rest of Bristol.' },
        { question: 'How much does website design cost in Stokes Croft?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on.' },
        { question: 'Can my site look independent rather than corporate?', answer: 'Yes — that\'s the point. We build to your brand and the area\'s character. What we don\'t compromise on is speed, mobile usability and the local SEO that gets you found.' },
        { question: 'Can you get my business into the Google map pack here?', answer: 'Yes. GBP optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Stokes Croft and Montpelier searches to help you rank in the map pack.' },
        { question: 'Do you work with venues, bars and studios?', answer: 'Yes — hospitality and creative businesses are the heart of this area. We build sites that sell the visit, list what\'s on and rank for the searches that matter.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Stokes Croft and Montpelier.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol area' },
    },

    'easton-bristol': {
      name: 'Easton',
      fullName: 'Easton, Bristol',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS5'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Easton Bristol | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for trades and businesses in Easton, Bristol BS5. Websites from £250. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in Easton, Bristol',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so Easton customers find you first.',
      description: "Easton is one of east Bristol's liveliest neighbourhoods, in the BS5 0 postcode either side of St Marks Road — regularly named among the best streets in Britain for its independent shops, cafés and international food businesses. Around it sits a dense grid of Victorian terraces that's been steadily renovated street by street over the last decade.",
      extendedDescription: "That renovation wave is the story for trades in Easton: kitchen refits, bathroom replacements, rewires, loft conversions and full refurbishments, house after house. Meanwhile the St Marks Road and Stapleton Road independents compete for customers who find them on Google. We build fast websites from £250 and add local SEO so both kinds of business get found first.",
      introParagraphs: [
        "Easton's mix — young families renovating, long-established communities, and one of Bristol's best independent food scenes — creates steady, varied demand. BS5 searches are far less contested than the city centre or the north-west suburbs, so a well-targeted site can reach the map pack quickly.",
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS5', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: "Easton is renovating street by street — and the trades winning that work are the ones who show up when BS5 homeowners search.",
      whyBullets: [
        { title: 'BS5-specific targeting', text: 'We target Easton and BS5 trade searches directly, not generic Bristol-wide keywords.' },
        { title: 'A renovation hotspot', text: 'Victorian terraces being refurbished across the neighbourhood mean constant demand for builders, plumbers, electricians and decorators.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'St Marks Road independents', text: 'One of Britain\'s best independent streets — cafés, restaurants and shops that live on local reputation and local search.' },
        { title: 'Less competition than the centre', text: 'BS5 trade searches are noticeably less contested — the map pack is winnable faster here than in most of Bristol.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for Easton businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the Easton map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Easton and Bristol BS5 trade keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Easton, Bristol — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what local customers in Easton search:',
      industries: ['Trades', 'Hospitality', 'Retail', 'Construction'],
      landmarks: ['St Marks Road', 'Stapleton Road', 'Greenbank', 'Easton Community Centre'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Easton locations in your content and listings.',
      stats: { businesses: '500+', monthlySearches: '18K+', competitors: 'Low-Medium', avgCPC: '£1.70' },
      localKeywords: [
        'web designer easton bristol',
        'website design easton',
        'web design bs5',
        'builder easton bristol',
        'plumber easton bs5',
        'electrician easton',
        'kitchen fitter bs5',
        'local seo easton',
      ],
      ctaHeadline: 'Ready to Get More Customers in Easton?',
      ctaSubhead: 'Join Bristol businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['st-george-bristol', 'montpelier-bristol', 'bristol'],
      faqs: [
        { question: 'Do you cover Easton, Bristol?', answer: 'Yes. We cover Easton BS5, Greenbank and the surrounding east Bristol area. Get in touch for a free check on your website and Google listing.' },
        { question: 'How much does website design cost in Easton?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on.' },
        { question: 'Can you get my business into the Google map pack in Easton?', answer: 'Yes. GBP optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Easton searches to help you rank in the map pack — and BS5 is one of the less contested parts of Bristol.' },
        { question: 'What trades do well in Easton?', answer: 'Builders, kitchen and bathroom fitters, electricians and decorators — the terrace renovation wave means steady refurbishment work across the neighbourhood.' },
        { question: 'Do you work with the independents on St Marks Road?', answer: 'Yes — cafés, restaurants and shops with strong local reputations still need to be findable on Google. We make sure the online presence matches the word of mouth.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Easton and Bristol.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol area' },
    },

    'st-george-bristol': {
      name: 'St George',
      fullName: 'St George, Bristol',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS5'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer St George Bristol | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for trades and businesses in St George, Bristol BS5. Websites from £250. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in St George, Bristol',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so St George customers find you first.',
      description: "St George stretches along Church Road in east Bristol's BS5 postcode, centred on the lake and green space of St George Park. It's a big, family-oriented neighbourhood of Victorian and Edwardian terraces that has quietly become one of Bristol's most popular places to buy a first family home — with all the renovation work that follows.",
      extendedDescription: "Church Road's independent shops, cafés and services are thriving on the back of that growth, and the housing stock generates constant work for trades — extensions, lofts, bathrooms, rewires and redecoration. We build fast websites from £250 and add Google Business Profile and local SEO so you're the business St George finds first.",
      introParagraphs: [
        "St George sits between Easton and Kingswood on our east Bristol patch, an easy run from our Keynsham base. Like the rest of BS5 it's far less contested online than central Bristol — most trades working the area still have no real web presence, which is exactly the opportunity.",
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS5', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: "St George is young families, terraces being done up, and a high street on the rise — steady demand that mostly still gets won on Google.",
      whyBullets: [
        { title: 'BS5-specific targeting', text: 'We target St George and BS5 trade searches directly, not generic Bristol-wide keywords.' },
        { title: 'Family renovation demand', text: 'First-time family buyers mean lofts, extensions, kitchens and bathrooms — repeat, high-value work across the terraces.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Church Road growth', text: 'The high street\'s independents are multiplying — new businesses that need websites, and footfall that rewards being findable.' },
        { title: 'Close to our base', text: 'St George is minutes from Keynsham — we know the area, not just the postcode.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for St George businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the St George map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for St George and Bristol BS5 trade keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in St George, Bristol — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what local customers in St George search:',
      industries: ['Trades', 'Construction', 'Retail', 'Professional Services'],
      landmarks: ['St George Park', 'Church Road', 'Troopers Hill'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference St George locations in your content and listings.',
      stats: { businesses: '450+', monthlySearches: '16K+', competitors: 'Low-Medium', avgCPC: '£1.60' },
      localKeywords: [
        'web designer st george bristol',
        'website design st george',
        'web design bs5',
        'builder st george bristol',
        'plumber st george bs5',
        'electrician church road bristol',
        'decorator st george',
        'local seo st george',
      ],
      ctaHeadline: 'Ready to Get More Customers in St George?',
      ctaSubhead: 'Join Bristol businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['easton-bristol', 'kingswood', 'brislington'],
      faqs: [
        { question: 'Do you cover St George, Bristol?', answer: 'Yes. We cover St George BS5, Church Road and the surrounding east Bristol area — minutes from our Keynsham base.' },
        { question: 'How much does website design cost in St George?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on.' },
        { question: 'Can you get my business into the Google map pack in St George?', answer: 'Yes. GBP optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets St George searches to help you rank in the map pack.' },
        { question: 'What trades do well in St George?', answer: 'Builders, loft and extension specialists, kitchen and bathroom fitters, electricians and decorators — young families renovating terraces keep the work coming.' },
        { question: 'Do you cover Kingswood and Easton too?', answer: 'Yes — we have dedicated pages for both, and we usually target east Bristol as one patch so a single campaign covers St George and its neighbours.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for St George and Bristol.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol area' },
    },

    'totterdown-bristol': {
      name: 'Totterdown',
      fullName: 'Totterdown, Bristol',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS4'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Totterdown Bristol | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for trades and businesses in Totterdown, Bristol BS4. Websites from £250. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in Totterdown, Bristol',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so Totterdown customers find you first.',
      description: "Totterdown is instantly recognisable — the brightly painted terraces stacked up the hillside above Temple Meads are one of Bristol's most photographed views. Sitting in the BS4 postcode around the Wells Road, it's a tight-knit, creative neighbourhood with a strong independent scene and some of the steepest residential streets in the country.",
      extendedDescription: "Those famous Victorian terraces need constant care — roofs, render, sash windows, damp-proofing and full redecoration — and the neighbourhood's popularity with young professionals and families keeps renovation demand high. We build fast websites from £250 and add Google Business Profile and local SEO so Totterdown and BS4 customers find you first.",
      introParagraphs: [
        "Totterdown borders Knowle and Brislington on our south-east Bristol patch — an easy run from Keynsham. Like most of BS4, it's far less competitive online than central Bristol, so trades who target it directly can reach the map pack quickly.",
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS4', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: "Totterdown's painted terraces are high-maintenance and much-loved — the trades who look after them get found on Google first.",
      whyBullets: [
        { title: 'BS4-specific targeting', text: 'We target Totterdown and BS4 trade searches directly, not generic Bristol-wide keywords.' },
        { title: 'Hillside terraces, constant upkeep', text: 'Exposed render, old roofs and steep-street access make Totterdown steady work for roofers, painters and builders who know what they\'re doing.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'A creative, independent scene', text: 'The Wells Road independents and the Front Room arts trail crowd support local businesses — if they can find you.' },
        { title: 'Close to our base', text: 'Totterdown is a short run from Keynsham — we cover it as part of our core south-east Bristol patch.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for Totterdown businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the Totterdown map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Totterdown and Bristol BS4 trade keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Totterdown, Bristol — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what local customers in Totterdown search:',
      industries: ['Trades', 'Construction', 'Creative', 'Retail'],
      landmarks: ['Wells Road', 'The painted terraces', 'Victoria Park', 'Temple Meads'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Totterdown locations in your content and listings.',
      stats: { businesses: '300+', monthlySearches: '14K+', competitors: 'Low-Medium', avgCPC: '£1.70' },
      localKeywords: [
        'web designer totterdown bristol',
        'website design totterdown',
        'web design bs4',
        'roofer totterdown bristol',
        'painter totterdown',
        'builder bs4',
        'plumber totterdown bristol',
        'local seo totterdown',
      ],
      ctaHeadline: 'Ready to Get More Customers in Totterdown?',
      ctaSubhead: 'Join Bristol businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['knowle-bristol', 'redcliffe-bristol', 'brislington'],
      faqs: [
        { question: 'Do you cover Totterdown, Bristol?', answer: 'Yes. We cover Totterdown BS4 and the surrounding south Bristol area — Knowle, Brislington and Windmill Hill — from our Keynsham base.' },
        { question: 'How much does website design cost in Totterdown?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on.' },
        { question: 'Can you get my business into the Google map pack in Totterdown?', answer: 'Yes. GBP optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Totterdown and BS4 searches to help you rank in the map pack.' },
        { question: 'What trades do well in Totterdown?', answer: 'Roofers, exterior painters, renderers and builders — the painted hillside terraces take a battering from the weather and need regular, visible upkeep. Decorators and sash window specialists do well too.' },
        { question: 'Is Totterdown\'s postcode BS3 or BS4?', answer: 'BS4 — Totterdown sits in BS4 3 around the Wells Road. Neighbouring Windmill Hill and Victoria Park are BS3, and we cover those too.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Totterdown and Bristol.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol area' },
    },

    'bishopston-bristol': {
      name: 'Bishopston',
      fullName: 'Bishopston, Bristol',
      parentSlug: 'bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS7'],
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Bishopston Bristol | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for trades and businesses in Bishopston, Bristol BS7. Websites from £250. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in Bishopston, Bristol',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so Bishopston customers find you first.',
      description: "Bishopston runs along the Gloucester Road in Bristol's BS7 8 postcode — the longest street of independent shops in Europe, by local reckoning. Cafés, butchers, bakers, bookshops and specialist retailers line the road, with streets of well-kept Victorian terraces on either side and the Gloucestershire County Ground giving it a landmark of its own.",
      extendedDescription: "Gloucester Road's independents trade on local loyalty, but that loyalty starts with being findable — new arrivals search Google before they ever walk the street. And the Victorian terraces on both sides generate the same steady renovation demand as neighbouring Redland and St Andrew's. We build fast websites from £250 and add local SEO so both get found first.",
      introParagraphs: [
        "Bishopston customers are exactly the type who prefer to hire and shop local — but they still find local through Google. Ranking for \"builder Bishopston\" or \"café Gloucester Road\" is what turns that preference into your enquiry.",
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: 'BS7 8', label: 'Postcode' },
        { value: 'Top 3', label: 'Map Pack Positions Achieved' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: "Bishopston runs on independent business and local loyalty — and both are won online before they're won on the street.",
      whyBullets: [
        { title: 'BS7 8-specific targeting', text: 'We target Bishopston and Gloucester Road searches directly, not generic Bristol-wide keywords.' },
        { title: 'Europe\'s longest independent street', text: 'Gloucester Road\'s traders compete for the same local customers — a fast site and strong Google listing is the difference.' },
        { title: 'Website & Google, together', text: 'A fast website plus an optimised Google Business Profile so you appear in search and the map pack.' },
        { title: 'Victorian terrace demand', text: 'The streets off Gloucester Road need builders, decorators, plumbers and electricians constantly — steady, repeat domestic work.' },
        { title: 'Covers the BS7 corridor', text: 'We target Bishopston together with Horfield and St Andrew\'s so one campaign covers the whole Gloucester Road corridor.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £250 for Bishopston businesses.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing and appear in the Bishopston map pack.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Bishopston and Bristol BS7 trade keywords.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Bishopston, Bristol — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what local customers in Bishopston search:',
      industries: ['Retail', 'Hospitality', 'Trades', 'Professional Services'],
      landmarks: ['Gloucester Road', 'St Andrew\'s Park', 'Gloucestershire County Ground'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference Bishopston locations in your content and listings.',
      stats: { businesses: '500+', monthlySearches: '19K+', competitors: 'Medium', avgCPC: '£1.90' },
      localKeywords: [
        'web designer bishopston bristol',
        'website design bishopston',
        'web design bs7',
        'cafe website gloucester road',
        'builder bishopston bristol',
        'plumber bs7',
        'decorator bishopston',
        'local seo bishopston',
      ],
      ctaHeadline: 'Ready to Get More Customers in Bishopston?',
      ctaSubhead: 'Join Bristol businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Check Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Other Areas We Serve',
      nearbyAreas: ['horfield-bristol', 'redland-bristol', 'montpelier-bristol'],
      faqs: [
        { question: 'Do you cover Bishopston, Bristol?', answer: 'Yes. We cover Bishopston BS7 8, the Gloucester Road corridor and the rest of north Bristol. Get in touch for a free check on your website and Google listing.' },
        { question: 'How much does website design cost in Bishopston?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on.' },
        { question: 'Can you get my business into the Google map pack in Bishopston?', answer: 'Yes. GBP optimisation at £100 gets your listing set up correctly, and local SEO from £150/month targets Bishopston and Gloucester Road searches to help you rank in the map pack.' },
        { question: 'Do you work with Gloucester Road independents?', answer: 'Yes — shops, cafés and service businesses on the road are exactly who we build for. A fast site that sells what makes you different, plus a Google listing that captures the local searches.' },
        { question: 'Do you cover Horfield and St Andrew\'s too?', answer: 'Yes — we have a dedicated Horfield page and cover the whole BS7 corridor as one patch, so a single campaign picks up searches along the full length of Gloucester Road.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Bishopston and Bristol.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Bristol Area Result', caseTitle: 'New Decorating, Bath & Bristol', result: 'Within a week', quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found. Professional, fast, and it actually works.", name: 'Jay', business: 'New Decorating', businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol area' },
    },

    'bristol': {
      name: 'Bristol',
      fullName: 'Bristol',
      designerHref: '/website-designer-bristol',
      county: 'Bristol',
      postcodes: ['BS1', 'BS2', 'BS3', 'BS4', 'BS5', 'BS6', 'BS7', 'BS8', 'BS14', 'BS15'],
      population: '470,000+',
      heroImage: '/images/areas/keynsham-health-centre.webp',
      metaTitle: 'Website Designer Bristol | Web Design from £250 | SEO Kings',
      metaDescription: 'Web design and local SEO for trades and businesses in Bristol. Websites from £250. Google Business Profile optimisation. Free audit — no obligation.',
      heroHeadline: 'Web Design & Local SEO in Bristol',
      heroSubhead: 'From £250. Local SEO and Google Business Profile add-ons so Bristol customers find you first.',
      heroSubtext: 'No obligation. No credit card required.',
      description: 'Bristol is the largest city in the South West, with a huge and varied trades and small business market spread across BS1 to BS16 and beyond. From the harbourside to the outer suburbs, competition for "web designer Bristol" and local trade searches is fierce — and most small businesses are still relying on an outdated site or no website at all.',
      extendedDescription: 'We work across the whole city, with 22 dedicated area pages — from the city centre, Redcliffe and Clifton through Redland, Bishopston, Easton and Totterdown to Kingswood, Brislington and Whitchurch near our Keynsham base. Customers search Google for "plumber Bristol", "electrician BS postcode" or "web designer Bristol" every day. We build the website and the Google Business Profile that get you found first.',
      introParagraphs: [
        'Bristol is a big city with a lot of noise — hundreds of trades and local businesses competing for the same searches. Standing out means having a fast, mobile-friendly website built specifically to rank, not a generic template site that looks the same as everyone else\'s. We build sites from £250 that load in under a second and are structured from day one to target the trade and postcode searches that actually bring in work.',
        [
          'Because we\'re based just outside the city in Keynsham, we know Bristol\'s suburbs individually — not just as one big blob on a map. We cover the whole city with 22 dedicated area pages: ',
          { href: '/areas/city-centre-bristol', label: 'the city centre' },
          ' and ',
          { href: '/areas/redcliffe-bristol', label: 'Redcliffe' },
          ' in the middle; ',
          { href: '/areas/clifton-bristol', label: 'Clifton' },
          ', ',
          { href: '/areas/redland-bristol', label: 'Redland' },
          ', ',
          { href: '/areas/cotham-bristol', label: 'Cotham' },
          ' and ',
          { href: '/areas/bishopston-bristol', label: 'Bishopston' },
          ' in the north-west; ',
          { href: '/areas/montpelier-bristol', label: 'Stokes Croft & Montpelier' },
          ', ',
          { href: '/areas/easton-bristol', label: 'Easton' },
          ' and ',
          { href: '/areas/st-george-bristol', label: 'St George' },
          ' in the east; ',
          { href: '/areas/bedminster-bristol', label: 'Bedminster' },
          ', ',
          { href: '/areas/southville-bristol', label: 'Southville' },
          ', ',
          { href: '/areas/totterdown-bristol', label: 'Totterdown' },
          ' and ',
          { href: '/areas/knowle-bristol', label: 'Knowle' },
          ' south of the river; and ',
          { href: '/areas/kingswood', label: 'Kingswood' },
          ' and ',
          { href: '/areas/brislington', label: 'Brislington' },
          ' out towards our Keynsham base. Suburb pages and the Bristol-wide campaign work together rather than against each other.',
        ],
      ],
      heroStats: [
        { value: '£250', label: 'Websites From' },
        { value: '470,000+', label: 'Bristol Population' },
        { value: 'High', label: 'Competition' },
        { value: '5★', label: 'Rated' },
      ],
      stats: { businesses: '15,000+', monthlySearches: '900K+', competitors: 'High', avgCPC: '£2.60' },
      ctaButtonText: 'Get Free Audit – No Obligation',
      whyHeading: 'Why Choose SEO Kings in Bristol',
      whyIntro: 'Bristol is a big, competitive market. Generic websites and empty Google Business Profiles get buried — here\'s how we get you seen.',
      whyBullets: [
        { title: 'City-wide reach, suburb-level precision', text: 'One Bristol strategy, backed by 22 dedicated local pages — from the city centre and Redcliffe through Clifton, Redland and Bishopston to Easton, Totterdown, Kingswood and Brislington — so you rank for both "web designer Bristol" and the specific suburb searches your customers actually use.' },
        { title: 'Fast, mobile-first sites', text: 'Bristol is a mobile-heavy market — most local searches happen on a phone. Our sites load in under a second and are built to convert on mobile first.' },
        { title: 'Google Business Profile that gets into the map pack', text: 'GBP optimisation is a £100 add-on that gets you appearing in the local 3-pack when Bristol customers search for your trade.' },
        { title: 'Local SEO built for a big city', text: 'Bristol has far more search volume than the smaller towns we serve — and far more competition. Our local SEO packages are built to compete at that scale.' },
        { title: 'Based just outside the city', text: 'We\'re in Keynsham, minutes from south Bristol — close enough to understand the area, without the overheads of a city-centre agency.' },
        { title: 'Clear, honest pricing', text: 'Websites from £250, no hidden fees, no long contracts. You know exactly what you\'re paying for.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-first websites from £250, built to rank for your trade and location across Bristol from day one.', href: '/website-designer-bristol' },
        { name: 'Google Business Profile', description: 'Add-on: optimise your listing so you appear in the Bristol map pack when customers search for your trade.', href: '/google-business-profile' },
        { name: 'Local SEO', description: 'Add-on: rank for Bristol-wide and suburb-specific trade keywords across BS1–BS16.', href: '/local-seo/bristol' },
      ],
      servicesHeading: 'Web design in Bristol — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google, not just online.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what Bristol customers actually search:',
      industriesHeading: 'Industries We Help',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction', 'Hospitality'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference real Bristol locations in your content and listings:',
      landmarks: ['Clifton Suspension Bridge', 'Bristol Harbourside', 'Cabot Circus', 'Temple Meads', 'St Nicholas Market'],
      localKeywords: [
        'web designer Bristol',
        'website design Bristol',
        'web design Bristol',
        'local SEO Bristol',
        'website designer Bristol',
        'plumber Bristol',
        'electrician Bristol',
        'builder Bristol',
        'web designer Bristol BS4',
        'web designer Bristol BS15',
      ],
      ctaHeadline: 'Ready to Get More Customers in Bristol?',
      ctaSubhead: 'Join Bristol area businesses already ranking on Google.',
      ctaPrimaryText: 'Get Your Free Audit Today',
      ctaSecondaryText: '07702 264 921',
      nearbyHeading: 'Bristol Areas We Serve',
      nearbyAreas: ['keynsham', 'bath', 'saltford', 'midsomer-norton'],
      subAreaSlugs: ['city-centre-bristol', 'redcliffe-bristol', 'redland-bristol', 'cotham-bristol', 'montpelier-bristol', 'easton-bristol', 'st-george-bristol', 'totterdown-bristol', 'bishopston-bristol', 'kingswood', 'brislington', 'whitchurch-bristol', 'knowle-bristol', 'stockwood-bristol', 'bedminster-bristol', 'southville-bristol', 'long-ashton-bristol', 'yate-bristol', 'clifton-bristol', 'horfield-bristol', 'filton-bristol', 'bradley-stoke-bristol'],
      subAreasHeading: 'Bristol suburbs we cover',
      aiSearch: {
        heading: 'When someone asks ChatGPT for a plumber in Bristol — can it recommend you?',
        paragraphs: [
          "More Bristol customers are asking AI tools instead of typing searches — ChatGPT for a recommendation, or reading Google's AI Overview at the top of the results page. Those answers aren't magic. The AI reads the same local pages Google indexes: your website, your Google Business Profile, your reviews. If your pages don't give it anything clear to quote, it recommends someone else.",
          "Every site we build is structured so AI assistants can quote it. LocalBusiness, FAQ and review schema on every page. Direct, factual answers to the questions Bristol customers actually ask. Consistent business details across the web. That's not a separate service with a separate invoice — it's how we've built every site since day one, and it's why the same work that ranks you on Google makes you quotable in AI answers.",
        ],
        cards: [
          { title: 'AI reads what Google reads', desc: 'ChatGPT and AI Overviews draw on indexed local pages, business profiles and reviews. Rank well and be quotable, and you appear in both.' },
          { title: 'Schema on every page', desc: 'LocalBusiness, FAQ and review markup tells AI exactly who you are, what you do and where you work — machine-readable, no guesswork.' },
          { title: 'Answers, not filler', desc: 'AI quotes pages that answer questions directly. Our pages state your services, prices and areas in plain sentences it can lift word for word.' },
          { title: 'Already happening in Bristol', desc: 'AI Overviews already appear on many Bristol service searches. In a market this size, the businesses with structured, quotable pages are the ones getting named.' },
        ],
      },
      faqs: [
        { question: 'Do you cover the whole of Bristol?', answer: 'Yes. We build websites and run local SEO for trades and businesses right across Bristol — 22 areas each have their own dedicated page: the city centre, Redcliffe, Clifton, Redland, Cotham, Stokes Croft & Montpelier, Bishopston, Horfield, Easton, St George, Totterdown, Bedminster, Southville, Knowle, Whitchurch, Stockwood, Brislington, Kingswood, Filton, Bradley Stoke, Yate and Long Ashton.' },
        { question: 'Can ChatGPT and Google AI recommend my Bristol business?', answer: "Yes — if your web presence gives them something to work with. AI assistants answer questions like \"who's a good electrician in Bristol?\" by reading the same local pages Google indexes: your website, your Google Business Profile and your reviews. They favour pages with clear structured data and direct, factual answers. Every site we build includes LocalBusiness, FAQ and review schema and plain-English content AI tools can quote — so you're findable whether your customer asks Google or ChatGPT." },
        { question: 'How much does a website cost for a Bristol business?', answer: 'From £250 for a single-page site, £350 for a 3-page professional site, and £450 for a 5+ page full site. Google Business Profile optimisation is a £100 add-on, and hosting is free for the first 6 months, then £50/year.' },
        { question: 'Can you get my business into the Google map pack in Bristol?', answer: 'Yes. GBP optimisation is a £100 add-on to any website package, and our local SEO service targets the specific trade and suburb searches that get you into Bristol\'s local 3-pack.' },
        { question: 'Is Bristol more competitive than Bath or Somerset for SEO?', answer: 'Generally, yes — Bristol has a much larger population and far more businesses competing for the same searches. That\'s why we combine a Bristol-wide strategy with suburb-specific pages, so you\'re not just fighting for one generic keyword against every trade in the city.' },
        { question: 'Do you only work with trades in Bristol, or other businesses too?', answer: 'Mostly trades — plumbers, electricians, builders, roofers and similar — but we also build sites and run local SEO for professional services, retail and hospitality businesses across Bristol.' },
      ],
      howItWorks: [
        { title: 'Free audit', description: 'We check your current website and Google Business Profile.' },
        { title: 'Custom plan', description: 'Built for Bristol-wide reach and your specific suburb.' },
        { title: 'Results', description: 'Monthly reports. More calls and enquiries.' },
      ],
      testimonial: {
        label: 'Bristol Area Result',
        caseTitle: 'New Decorating, Bath & Bristol',
        result: 'Top 8 on Google Maps in a week',
        quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches across Bath and the Bristol area. Professional, fast, and it actually works.",
        name: 'Jay',
        business: 'New Decorating',
        businessDisplay: 'New Decorating • Painter & Decorator, Bath & Bristol area',
      },
    },
  };

  const router = useRouter();
  const area = areasData[slug];


  useEffect(() => {
    if (!area) router.replace('/areas');
    else if (rawSlug !== slug) router.replace(`/areas/${slug}`);
  }, [area, rawSlug, slug, router]);

  if (!area) return null;
  if (rawSlug !== slug) return null;

  const parentArea = area.parentSlug ? areasData[area.parentSlug] : null;

  // Default service-card links per city — used to fill any card that doesn't set its own href.
  // Only includes pages that actually exist; a missing key leaves that card unlinked.
  const CITY_SERVICE_LINKS = {
    bath: { designer: '/website-designer-bath', localSeo: '/local-seo/bath', seo: '/seo/bath' },
    bristol: { designer: '/website-designer-bristol', localSeo: '/local-seo/bristol', seo: '/seo/bristol' },
    keynsham: { designer: '/website-designer-keynsham', localSeo: '/local-seo/keynsham' },
    'midsomer-norton': { designer: '/website-designer-midsomer-norton', localSeo: '/local-seo/midsomer-norton' },
    radstock: { designer: '/website-designer-radstock', localSeo: '/local-seo/radstock' },
    'peasedown-st-john': { designer: '/website-designer-peasedown-st-john', localSeo: '/local-seo/peasedown-st-john' },
    saltford: { designer: '/website-designer-saltford', localSeo: '/local-seo/saltford' },
    paulton: { localSeo: '/local-seo/paulton' },
    frome: { designer: '/website-designer-frome', localSeo: '/local-seo/frome' },
    corsham: { designer: '/website-designer-corsham', localSeo: '/local-seo/corsham' },
    melksham: { designer: '/website-designer-melksham', localSeo: '/local-seo/melksham' },
    'bradford-on-avon': { designer: '/website-designer-bradford-on-avon', localSeo: '/local-seo/bradford-on-avon' },
    'shepton-mallet': { designer: '/website-designer-shepton-mallet', localSeo: '/local-seo/shepton-mallet' },
  };
  // Resolve this area to its city key: sub-areas via parentSlug, Bristol neighbourhoods via slug suffix, otherwise the slug itself.
  const cityKey = area.parentSlug
    || (slug === 'kingswood' || slug.endsWith('-bristol') ? 'bristol' : slug);
  const cityLinks = CITY_SERVICE_LINKS[cityKey] || {};
  // Pick the default href for a service card from its name (GBP is one shared page for every area).
  const defaultServiceHref = (name = '') => {
    if (/google business profile/i.test(name)) return '/google-business-profile';
    if (/website|web design/i.test(name)) return cityLinks.designer;
    if (/local seo/i.test(name)) return cityLinks.localSeo;
    if (/seo services|full seo/i.test(name)) return cityLinks.seo;
    return undefined;
  };

  // Generate Schema Markup
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": { "@id": siteUrl } },
      { "@type": "ListItem", "position": 2, "name": "Areas We Serve", "item": { "@id": `${siteUrl}/areas` } },
      ...(parentArea
        ? [
            { "@type": "ListItem", "position": 3, "name": parentArea.name, "item": { "@id": `${siteUrl}/areas/${area.parentSlug}` } },
            { "@type": "ListItem", "position": 4, "name": area.name, "item": { "@id": `${siteUrl}/areas/${slug}` } },
          ]
        : [{ "@type": "ListItem", "position": 3, "name": area.name, "item": { "@id": `${siteUrl}/areas/${slug}` } }]),
    ]
  };

  // areaServed for this area: place (with Wikipedia sameAs when available) + postcodes + nearby places for richer local signal
  // Unitary authority for containedInPlace — county 'Bristol' means the city, not B&NES
  const authorityFor = (county) =>
    county === "Bristol" ? "City of Bristol" : (county || "Bath and North East Somerset");
  const placeForSlug = (s) => {
    const a = areasData[s];
    if (!a?.name) return null;
    const sameAs = WIKIPEDIA_BY_SLUG[s] || (a.parentSlug && WIKIPEDIA_BY_SLUG[a.parentSlug]);
    return {
      "@type": "Place",
      "name": a.name,
      ...(sameAs ? { "sameAs": sameAs } : {}),
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": authorityFor(a.county)
      }
    };
  };
  const placeWikipedia = WIKIPEDIA_BY_SLUG[slug] || (area.parentSlug && WIKIPEDIA_BY_SLUG[area.parentSlug]);
  const nearbySlugs = Array.isArray(area.nearbyAreas) ? area.nearbyAreas.slice(0, 4) : [];
  const nearbyPlaces = nearbySlugs.map(placeForSlug).filter(Boolean);
  // Hub pages (e.g. Bristol) list their suburbs on the page, so the schema should claim them too
  const subAreaSlugs = Array.isArray(area.subAreaSlugs) ? area.subAreaSlugs : [];
  const subAreaPlaces = subAreaSlugs
    .filter((s) => !nearbySlugs.includes(s))
    .map(placeForSlug)
    .filter(Boolean);
  const areaServed = [
    {
      "@type": "Place",
      "name": area.name,
      ...(placeWikipedia ? { "sameAs": placeWikipedia } : {}),
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": authorityFor(area.county)
      }
    },
    ...nearbyPlaces,
    ...subAreaPlaces,
  ].filter(Boolean);

  // LocalBusiness description: current area + 2–3 nearby area names so JSON-LD matches the town in the URL
  const regionName = area.county === "Bristol" ? "the wider Bristol area" : (area.county || "Bath and North East Somerset");
  const nearbyNames = nearbySlugs
    .map((s) => areasData[s]?.name)
    .filter(Boolean)
    .slice(0, 3);
  const areasPhrase = nearbyNames.length > 0
    ? `${area.name}, ${nearbyNames.join(', ')} and ${regionName}`
    : `${area.name} and ${regionName}`;
  const localBusinessDescription = `We work in ${area.name}. Website design and local SEO in ${area.name}. We help trades and small businesses in ${areasPhrase} get found on Google.`;

  // Area-specific LocalBusiness (ProfessionalService) with address, serviceArea, and geo for "near me" visibility
  const areaGeo = AREA_GEO[slug] || (area.parentSlug && AREA_GEO[area.parentSlug]) || AREA_GEO.keynsham;
  const areaLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteUrl}/#localbusiness-${slug}`,
    "name": "SEO Kings",
    "description": localBusinessDescription,
    "url": `${siteUrl}/areas/${slug}`,
    "telephone": "+447702264921",
    "address": BUSINESS_ADDRESS_KEYNSHAM,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": areaGeo.latitude,
      "longitude": areaGeo.longitude
    },
    "serviceArea": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": areaGeo.latitude,
          "longitude": areaGeo.longitude
        },
        "geoRadius": "15000"
      },
      {
        "@type": "Place",
        "name": area.name,
        "containedInPlace": { "@type": "AdministrativeArea", "name": authorityFor(area.county) }
      }
    ],
    "areaServed": areaServed,
    "parentOrganization": { "@type": "Organization", "@id": `${siteUrl}/#organization` },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${siteUrl}/areas/${slug}` },
    "sameAs": GOOGLE_MAPS_PLACE_URL
  };
  // Note: We do not add aggregateRating/review to LocalBusiness here. Google does not show
  // review rich results from first-party markup for your own business; it can trigger
  // "Invalid object type" or other validation issues. Use Google Business Profile for stars.

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (area.faqs || []).map(faq => {
      const q = faq.question ?? faq.q;
      const a = faq.answer ?? faq.a;
      return {
        "@type": "Question",
        "name": q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": a
        }
      };
    }).filter(item => item.name && item.acceptedAnswer?.text)
  };

  const schemasForPage = [breadcrumbSchema, areaLocalBusinessSchema];
  if (faqSchema.mainEntity.length > 0) schemasForPage.push(faqSchema);

  const defaultServices = [
    { name: 'Website Design', description: `Fast, mobile-friendly sites from £250. Our main service in ${area.name}.`, icon: 'desktop' },
    { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack so you get found on Google.', icon: 'map' },
    { name: 'Local SEO', description: `Add-on: rank for "${area.name}" and trade searches.`, icon: 'search' },
    { name: 'Review Management', description: 'Add-on: build trust and credibility with 5★ reviews.', icon: 'star' },
  ];
  const rawServices = (area.services || defaultServices).map((s, i) => ({
    ...s,
    icon: s.icon || defaultServices[i]?.icon || 'search',
    href: s.href || defaultServiceHref(s.name),
  }));
  // Put Website Design first on all area pages; SEO/GBP as add-ons
  const services = [...rawServices].sort((a, b) => {
    const aWebsite = /website|web design/i.test(a.name);
    const bWebsite = /website|web design/i.test(b.name);
    if (aWebsite && !bWebsite) return -1;
    if (!aWebsite && bWebsite) return 1;
    return 0;
  });

  return (
    <>
      <SEO schemas={schemasForPage} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={area.heroImage}
            alt={`Website design and local SEO in ${area.name} — professional websites for trades and businesses`}
            width={1280}
            height={720}
            priority
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb — JSON-LD is output via schemasForPage; no microdata here to avoid duplicate */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-600" aria-hidden="true">/</li>
              <li>
                <Link href="/areas" className="text-gray-400 hover:text-white transition-colors">
                  Areas
                </Link>
              </li>
              {parentArea && (
                <>
                  <li className="text-gray-600" aria-hidden="true">/</li>
                  <li>
                    <Link href={`/areas/${area.parentSlug}`} className="text-gray-400 hover:text-white transition-colors">
                      {parentArea.name}
                    </Link>
                  </li>
                </>
              )}
              <li className="text-gray-600" aria-hidden="true">/</li>
              <li>
                <span className="text-primary-light">{area.name}</span>
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <svg className="w-4 h-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-sm text-primary-light font-medium">
                  {area.parentSlug && parentArea ? `Part of ${parentArea.name} • ` : ''}{Array.isArray(area.postcodes) ? area.postcodes.join(', ') : area.postcodes} • {area.county}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                {area.heroHeadline ? (
                  (() => {
                    const i = area.heroHeadline.indexOf(area.name);
                    if (i === -1) return area.heroHeadline;
                    const before = area.heroHeadline.slice(0, i);
                    const after = area.heroHeadline.slice(i + area.name.length);
                    return <>{before}<span className="gradient-text">{area.name}</span>{after}</>;
                  })()
                ) : (
                  <>
                    Website design in<br />
                    <span className="gradient-text">{area.name}</span>
                  </>
                )}
              </h1>

              {area.heroSubhead && (
                <p className="text-xl text-primary-light font-semibold mb-4">
                  {area.heroSubhead}
                </p>
              )}

              <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                {area.description}
              </p>
              
              {area.extendedDescription && (
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {area.extendedDescription}
                </p>
              )}

              <div className="flex flex-wrap gap-4 mb-4">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary-light text-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300 btn-glow"
                >
                  {area.ctaButtonText || `Get Free ${area.name} SEO Audit`}
                </Link>
                <a
                  href="tel:07702264921"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                  aria-label="Call SEO Kings on 07702 264 921"
                >
                  07702 264 921
                </a>
              </div>
              {area.heroSubtext && (
                <p className="text-sm text-gray-500 mb-8">{area.heroSubtext}</p>
              )}

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {area.heroStats ? (
                  area.heroStats.map((stat, idx) => (
                    <div key={idx} className="bg-dark-card/50 border border-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="bg-dark-card/50 border border-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold gradient-text">{area.stats.businesses}</div>
                      <div className="text-xs text-gray-400">Local Businesses</div>
                    </div>
                    <div className="bg-dark-card/50 border border-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold gradient-text">{area.stats.monthlySearches}</div>
                      <div className="text-xs text-gray-400">Monthly Searches</div>
                    </div>
                    <div className="bg-dark-card/50 border border-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold gradient-text">{area.stats.competitors}</div>
                      <div className="text-xs text-gray-400">Competition</div>
                    </div>
                    <div className="bg-dark-card/50 border border-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold gradient-text">{area.stats.avgCPC}</div>
                      <div className="text-xs text-gray-400">Avg. CPC</div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right column: testimonial only */}
            {(area.testimonials && area.testimonials.length > 0 ? area.testimonials : (area.testimonial ? [area.testimonial] : [])).map((t, idx) => (
              <div key={idx} className="bg-dark-card border border-white/10 rounded-2xl overflow-hidden">
                {area.testimonialImage && (
                  <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] min-h-[220px]">
                    <Image
                      src={area.testimonialImage.src}
                      alt={area.testimonialImage.alt}
                      width={600}
                      height={400}
                      priority
                      className="absolute inset-0 w-full h-full object-contain object-top bg-dark-lighter/50"
                    />
                  </div>
                )}
                <div className="p-8">
                {t.label && (
                  <div className="text-sm font-semibold text-primary-light mb-2">{t.label}</div>
                )}
                {t.caseTitle && (
                  <div className="text-base font-semibold text-white mb-4">{t.caseTitle}</div>
                )}
                <div className="flex items-center gap-2 mb-4" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">
                  &quot;{t.quote}&quot;
                </blockquote>
                {(t.resultSummary || t.timeframe) && (
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    {t.resultSummary && (
                      <span className="text-green-400 font-semibold">{t.resultSummary}</span>
                    )}
                    {t.timeframe && (
                      <span className="text-gray-400">Timeframe: {t.timeframe}</span>
                    )}
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-gray-400">
                      {t.businessDisplay || `${t.business}, ${area.name}`}
                    </div>
                  </div>
                  {t.result && (
                    <div className="text-right">
                      <div className="text-green-400 font-bold">{t.result}</div>
                      <div className="text-xs text-gray-500">Results achieved</div>
                    </div>
                  )}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Paragraphs (optional); Keynsham & Bath: merged with Local Authority in same section */}
      {area.introParagraphs && area.introParagraphs.length > 0 && (
        <section className="py-12 bg-dark-lighter">
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${area.introImage ? 'grid lg:grid-cols-2 gap-10 items-center' : 'max-w-4xl'}`}>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              {area.introParagraphs.map((para, idx) => (
                <p key={idx}>
                  {Array.isArray(para)
                    ? para.map((part, i) =>
                        typeof part === 'string' ? part : <Link key={i} href={part.href} className="text-primary hover:underline">{part.label}</Link>
                      )
                    : para}
                </p>
              ))}
            </div>
            {area.introImage && (
              <div>
                <Image src={area.introImage.src} alt={area.introImage.alt} width={800} height={450} loading="lazy" className="rounded-xl border border-white/10 object-cover w-full h-64 sm:h-72" />
              </div>
            )}
          </div>
        </section>
      )}


      {/* Why SEO in [Area] Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
              {area.whyHeading || (area.whyIntro ? `Why ${area.name} Businesses Need Local SEO` : `Why Your ${area.name} Business Needs SEO`)}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {area.whyIntro || `With ${area.stats.monthlySearches} monthly searches and ${area.stats.businesses} local businesses competing for attention, standing out on Google is essential for ${area.name} businesses.`}
            </p>
          </div>

          {area.whySectionImage && (
            <div className="flex justify-center mb-12">
              <Image src={area.whySectionImage.src} alt={area.whySectionImage.alt} width={672} height={288} loading="lazy" className="rounded-xl border border-white/10 object-cover max-w-2xl w-full h-64 sm:h-72" />
            </div>
          )}

          <div className={`grid gap-8 ${(area.whyBullets?.length || 0) === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
            {(area.whyBullets || [
              { title: 'Local Competition', text: `${area.stats.businesses} businesses in ${area.name} are competing for customers. ${area.stats.competitors === 'High' ? 'With high competition, SEO is essential to stand out.' : 'With lower competition, now is the perfect time to establish dominance.'}` },
              { title: 'Search Demand', text: `${area.stats.monthlySearches} people search for local services in ${area.name} every month. Are you visible when they search for "${area.localKeywords[0]}"?` },
              { title: 'Cost-Effective', text: `Organic rankings in ${area.name} cost less than paid ads and keep working 24/7. Invest once, get found for years.` },
            ].slice(0, area.whyBullets?.length || 3)).map((bullet, idx) => (
            <div key={idx} className="bg-dark-card border border-white/5 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{bullet.title}</h3>
              <p className="text-gray-400">
                {bullet.text}
              </p>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-E-A-T: Local client testimonials (placeholder per area for trust signals) */}
      <section className="py-20 bg-dark-lighter" aria-labelledby="local-testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="local-testimonials-heading" className="text-3xl font-bold text-white mb-2 text-center leading-tight tracking-tight">
            What {area.name} clients say
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            Local businesses and trades in {area.name} trust us to get them found on Google.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {area.localTestimonials && area.localTestimonials.length > 0 ? (
              area.localTestimonials.map((t, idx) => (
                <div key={idx} className="bg-dark-card border border-white/10 rounded-xl p-6">
                  <div className="flex gap-2 mb-4" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.businessDisplay || t.business}</div>
                </div>
              ))
            ) : (
              <div className="bg-dark-card border border-white/10 rounded-xl p-6 md:col-span-2 lg:col-span-3">
                <p className="text-gray-400 leading-relaxed">
                  We&apos;ve helped trades and businesses across {area.name}{Array.isArray(area.postcodes) && area.postcodes.length ? ` (${area.postcodes.join(', ')} and nearby)` : ''} get found on Google with website design and local SEO. Want to be the next success story? Get in touch for a free audit.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 mt-4 text-primary-light font-medium hover:text-white transition-colors">
                  Get a free audit
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Optional: Why SEO Kings for [Area] + Recent projects (E-E-A-T) */}
      {area.extraContentSection && (
        <section className="py-20" aria-labelledby="extra-content-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={area.extraContentSection.image ? 'grid lg:grid-cols-2 gap-10 lg:gap-12 items-start mb-10' : 'max-w-3xl mb-10'}>
              <div>
                <h2 id="extra-content-heading" className="text-3xl font-bold text-white mb-2 leading-tight tracking-tight">
                  {area.extraContentSection.heading}
                </h2>
                {area.extraContentSection.subheading && (
                  <p className="text-lg text-primary-light font-medium mb-6">{area.extraContentSection.subheading}</p>
                )}
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  {area.extraContentSection.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
              {area.extraContentSection.image && (
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg">
                  <Image
                    src={area.extraContentSection.image.src}
                    alt={area.extraContentSection.image.alt}
                    width={800}
                    height={450}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
            {area.recentProjects && area.recentProjects.length > 0 && (
              <div className="mt-12">
                <h3 className="text-xl font-bold text-white mb-6">Our recent website design projects in {area.name}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {area.recentProjects.map((project, idx) => (
                    <div key={idx} className="bg-dark-card border border-white/5 rounded-xl p-6 flex flex-col">
                      <div className="text-sm font-semibold text-primary-light mb-1">{project.sector}</div>
                      <div className="text-white font-semibold mb-2">{project.outcome}</div>
                      <p className="text-gray-400 text-sm leading-relaxed flex-grow">{project.snippet}</p>
                      {project.caseStudySlug && (
                        <Link
                          href={`/case-studies/${project.caseStudySlug}`}
                          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-light hover:text-white transition-colors"
                        >
                          Read case study
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
              {area.servicesHeading || `Website design in ${area.name} — with SEO add-ons`}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {area.servicesSubtext || `Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.`}
            </p>
          </div>

          {area.servicesSectionImage && (
            <div className="flex justify-center mb-12">
              <Image src={area.servicesSectionImage.src} alt={area.servicesSectionImage.alt} width={672} height={376} loading="lazy" className="rounded-xl border border-white/10 object-cover max-w-xl w-full h-56" />
            </div>
          )}

          <div className={`grid md:grid-cols-2 gap-6 ${services.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
            {services.map((service, index) => {
              const inner = (
                <>
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                  {service.href && <span className="mt-4 inline-block text-xs font-medium text-primary-light">Learn more →</span>}
                </>
              );
              return service.href ? (
                <Link key={index} href={service.href} className="bg-dark-card border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 block">
                  {inner}
                </Link>
              ) : (
                <div key={index} className="bg-dark-card border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary-light hover:text-white transition-colors font-medium"
            >
              {area.servicesLinkText || 'View all our services'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Website design in [Area] – SEO for website design + location */}
      <section className="py-20 bg-dark-lighter">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${area.websiteDesignSectionImage ? 'grid lg:grid-cols-2 gap-12 items-center' : 'max-w-4xl'}`}>
          {area.websiteDesignSectionImage && (
            <div className="order-2 lg:order-1">
              <Image src={area.websiteDesignSectionImage.src} alt={area.websiteDesignSectionImage.alt} width={800} height={356} loading="lazy" className="rounded-xl border border-white/10 object-cover w-full h-72 lg:h-80" />
            </div>
          )}
          <div className={area.websiteDesignSectionImage ? 'order-1 lg:order-2' : ''}>
          <h2 className="text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
            Website designer & website design in {area.name}
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            We build fast, mobile-friendly websites for {area.name} businesses — from one-page sites to full multi-page sites. Every site we build is set up for local search so you get found on Google and in the map pack. If you need a new site or your current one is slow or outdated, we can help. Get a free quote from a professional website designer in {area.name}. We also offer <Link href="/google-business-profile" className="text-primary-light hover:text-white underline">Google Business Profile</Link> and <Link href="/local-seo" className="text-primary-light hover:text-white underline">Local SEO</Link> as add-ons.
          </p>
          <Link
            href={area.designerHref || '/web-design'}
            className="inline-flex items-center gap-2 text-primary-light hover:text-white font-semibold transition-colors"
          >
            Website designer in {area.name}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          {area.websiteDesignBlogSlug && (
            <p className="mt-4">
              <Link
                href={`/blog/${area.websiteDesignBlogSlug}`}
                className="text-sm text-gray-400 hover:text-primary-light transition-colors"
              >
                Read more: Website design in {area.name} →
              </Link>
            </p>
          )}
          <p className="mt-4 text-sm text-gray-400">
            <Link href="/contact" className="text-primary-light hover:text-white transition-colors">Get your free audit</Link>
            {slug === 'keynsham' && (
              <> · See also <Link href="/spotlight/peachy-cleans" className="text-primary-light hover:text-white transition-colors">Peachy Cleans spotlight</Link></>
            )}
          </p>
          </div>
        </div>
      </section>

      {/* Optional: Website design costs (e.g. Keynsham) */}
      {area.costSection && (
        <section className="py-20">
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${area.costSectionImage ? 'grid lg:grid-cols-2 gap-12 items-start' : 'max-w-4xl'}`}>
            {area.costSectionImage && (
              <div>
                <Image src={area.costSectionImage.src} alt={area.costSectionImage.alt} width={600} height={384} loading="lazy" className="rounded-xl border border-white/10 object-cover w-full h-64 lg:sticky lg:top-24" />
              </div>
            )}
            <div>
            <h2 className="text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
              {area.costSection.heading}
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              {area.costSection.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            <p className="mt-4">
              <Link href="/web-design-packages" className="inline-flex items-center gap-2 text-primary-light hover:text-white font-medium transition-colors">
                View web design packages
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </p>
            </div>
          </div>
        </section>
      )}

      {/* Optional: What to look for in a web designer (e.g. Keynsham) */}
      {area.whatToLookForSection && (
        <section className="py-20 bg-dark-lighter">
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${area.whatToLookForSectionImage ? 'grid lg:grid-cols-2 gap-10 items-start' : 'max-w-4xl'}`}>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">
                {area.whatToLookForSection.heading}
              </h2>
              <ul className="space-y-4">
                {area.whatToLookForSection.bullets.map((bullet, idx) => (
                  <li key={idx} className="bg-dark-card border border-white/5 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-white mb-2">{bullet.title}</h3>
                    <p className="text-gray-400">{bullet.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            {area.whatToLookForSectionImage && (
              <div className="lg:sticky lg:top-24">
                <Image src={area.whatToLookForSectionImage.src} alt={area.whatToLookForSectionImage.alt} width={600} height={336} loading="lazy" className="rounded-xl border border-white/10 object-cover w-full h-64 sm:h-72" />
              </div>
            )}
          </div>
        </section>
      )}

      {/* What We Target Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
                How we get {area.name} businesses found on Google
              </h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                We research the exact searches your customers use — whether that's "{area.localKeywords[0]}", "{area.localKeywords[2] || area.localKeywords[1]}", or emergency calls at short notice. Every site we build targets those specific terms from day one.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We combine on-page optimisation with a well-structured Google Business Profile so you show up in both the map pack and standard search results — doubling your visibility for the same effort.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-dark-card border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">{area.industriesHeading || `Industries We Serve in ${area.name}`}</h3>
                <ul className="space-y-3">
                  {area.industries.map((industry, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {industry}
                    </li>
                  ))}
                </ul>
              </div>

              {area.landmarks && area.landmarks.length > 0 && (
                <div className="bg-dark-card border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{area.landmarksHeading || `Local Landmarks in ${area.name}`}</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    {area.landmarksIntro || `We understand ${area.name}'s geography and reference local landmarks in your SEO strategy.`}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.landmarks.map((landmark, index) => (
                      <span key={index} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* AI search section (optional — hubs opt in via area.aiSearch) */}
      {area.aiSearch && (
        <section className="py-20 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-4">AI search</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                {area.aiSearch.heading}
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                {area.aiSearch.paragraphs.map((para, idx) => (
                  <p key={idx} className="text-gray-400 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {area.aiSearch.cards.map((card) => (
                <div key={card.title} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                  <h3 className="text-white font-semibold text-sm mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section — FAQPage schema for People Also Ask rich results */}
      <section id="faq" className="py-20" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
              Frequently Asked Questions About Website Design & SEO in {area.name}
            </h2>
            <p className="text-gray-400">
              Common questions from {area.name} businesses about our website design and local SEO services.
            </p>
          </div>

          <FAQAccordion faqs={area.faqs} />
        </div>
      </section>

      {/* How It Works (optional) */}
      {area.howItWorks && area.howItWorks.length > 0 && (
        <section className="py-20 bg-dark-lighter">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
                How It Works in {area.name}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Three simple steps:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {area.howItWorks.map((step, idx) => (
                <div key={idx} className="bg-dark-card border border-white/5 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sub-areas / Neighbourhoods (when parent area has subAreaSlugs) */}
      {area.subAreaSlugs && area.subAreaSlugs.length > 0 && (
        <section className="py-20 bg-dark-lighter">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              {area.subAreasHeading || 'Neighbourhoods we cover'}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {area.subAreaSlugs.map((subSlug) => {
                const subArea = areasData[subSlug];
                return subArea ? (
                  <Link
                    key={subSlug}
                    href={`/areas/${subSlug}`}
                    className="px-6 py-3 bg-dark-card border border-white/10 rounded-xl text-white font-medium hover:border-primary/30 hover:bg-white/5 transition-all duration-300"
                  >
                    {subArea.name}
                  </Link>
                ) : null;
              })}
            </div>
          </div>
        </section>
      )}

      {/* Nearby Areas */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            {area.nearbyHeading || 'We Also Serve Nearby Areas'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {area.nearbyAreas.map((nearbySlug) => {
              const nearby = areasData[nearbySlug];
              return (
                <Link
                  key={nearbySlug}
                  href={`/areas/${nearbySlug}`}
                  className="px-6 py-3 bg-dark-card border border-white/10 rounded-xl text-white font-medium hover:border-primary/30 hover:bg-white/5 transition-all duration-300"
                >
                  {nearby?.name || nearbySlug}
                </Link>
              );
            })}
            <Link
              href="/areas"
              className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-xl text-primary-light font-medium hover:bg-primary/20 transition-all duration-300"
            >
              View All Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 relative overflow-hidden ${area.ctaBackgroundImage ? 'min-h-[28rem] flex items-center' : ''} ${area.ctaImage ? '' : ''}`}>
        {area.ctaBackgroundImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${area.ctaBackgroundImage.src})` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-purple-800/85 to-indigo-900/80 pointer-events-none" aria-hidden="true" />
            <div className="absolute inset-0 bg-black/50 pointer-events-none" aria-hidden="true" />
          </>
        )}
        {!area.ctaBackgroundImage && area.ctaImage && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" aria-hidden="true" />
        )}
        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${area.ctaImage && !area.ctaBackgroundImage ? 'grid lg:grid-cols-2 gap-10 lg:gap-12 items-center' : ''} ${area.ctaBackgroundImage ? 'max-w-4xl text-center' : ''}`}>
          {area.ctaImage && !area.ctaBackgroundImage && (
            <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary/20 max-w-md w-full">
                <Image
                  src={area.ctaImage.src}
                  alt={area.ctaImage.alt}
                  width={448}
                  height={300}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}
          <div className={`${area.ctaBackgroundImage ? 'text-center' : ''} ${area.ctaImage && !area.ctaBackgroundImage ? 'order-1 lg:order-1 text-center lg:text-left' : 'max-w-4xl mx-auto text-center'}`}>
            <h2 className={`font-bold text-white mb-4 ${area.ctaImage || area.ctaBackgroundImage ? 'text-3xl sm:text-4xl lg:text-4xl' : 'text-3xl'} ${area.ctaBackgroundImage ? 'drop-shadow-2xl [text-shadow:0_2px_8px_rgba(0,0,0,0.9)]' : ''}`}>
              {area.ctaHeadline || `Ready to Dominate ${area.name} Search Results?`}
            </h2>
            <p className={`mb-8 text-lg ${area.ctaBackgroundImage ? 'text-gray-200 drop-shadow-lg [text-shadow:0_1px_4px_rgba(0,0,0,0.8)]' : 'text-gray-400'}`}>
              {area.ctaSubhead || `Join the ${area.name} businesses already ranking on page one of Google. Get your free SEO audit today and see exactly how we can help you grow.`}
            </p>
            <div className={`flex flex-col sm:flex-row items-center gap-4 ${area.ctaImage && !area.ctaBackgroundImage ? 'justify-center lg:justify-start' : 'justify-center'}`}>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-primary hover:bg-primary-light text-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300 btn-glow text-center shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
              >
                {area.ctaPrimaryText || `Get Your Free ${area.name} SEO Audit`}
              </Link>
              <a
                href="tel:07702264921"
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:border-primary/30"
                aria-label="Call SEO Kings on 07702 264 921"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {area.ctaSecondaryText || '07702 264 921'}
              </a>
            </div>
            {area.ctaDisclaimer && (
              <p className={`mt-6 text-sm max-w-xl ${area.ctaImage && !area.ctaBackgroundImage ? 'lg:max-w-md text-gray-500' : 'mx-auto'} ${area.ctaBackgroundImage ? 'text-gray-300 drop-shadow-md [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]' : ''}`}>
                {area.ctaDisclaimer}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AreaDetail;
