'use client';
import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';

/** Three specific landmarks per area for Local Authority section (SEO/local relevance). */
const LANDMARKS_BY_SLUG = {
  keynsham: ['Chocolate Quarter', 'Ashmead Industrial Estate', 'BS31 postcode'],
  bath: ['Roman Baths', 'Royal Crescent', 'Pulteney Bridge'],
  'midsomer-norton': ['Midsomer Norton High Street', 'Somer Valley', 'BA3'],
  radstock: ['Radstock Museum', 'Somer Valley', 'B3110'],
  'peasedown-st-john': ['Peasedown St John', 'A367', 'Bath & North East Somerset'],
  paulton: ['Paulton', 'Cam Valley', 'A37'],
  saltford: ['Saltford', 'Bristol & Bath Railway Path', 'BS31'],
  'bitton-keynsham': ['Bitton', 'Chocolate Quarter', 'Keynsham'],
};

/** GeoCoordinates (lat, lng) per area for LocalBusiness schema — supports "near me" and service radius. */
const AREA_GEO = {
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
  'odd-down-bath': { latitude: 51.3811, longitude: -2.3590 },
  'combe-down-bath': { latitude: 51.3811, longitude: -2.3590 },
  'widcombe-bath': { latitude: 51.3811, longitude: -2.3590 },
  'larkhall-bath': { latitude: 51.3811, longitude: -2.3590 },
  'twerton-bath': { latitude: 51.3811, longitude: -2.3590 },
  'weston-bath': { latitude: 51.3811, longitude: -2.3590 },
  'oldfield-park-bath': { latitude: 51.3811, longitude: -2.3590 },
  'bear-flat-bath': { latitude: 51.3811, longitude: -2.3590 },
  'bathampton-bath': { latitude: 51.4236, longitude: -2.3211 },
  'bathwick-bath': { latitude: 51.3811, longitude: -2.3590 },
  'southdown-bath': { latitude: 51.3811, longitude: -2.3590 },
  'batheaston-bath': { latitude: 51.4011, longitude: -2.3192 },
  'walcot-bath': { latitude: 51.3811, longitude: -2.3590 },
  'bathford-bath': { latitude: 51.4014, longitude: -2.3011 },
  'bitton-keynsham': { latitude: 51.4397, longitude: -2.4592 },
  'hanham-keynsham': { latitude: 51.4511, longitude: -2.5094 },
  'oldland-keynsham': { latitude: 51.4139, longitude: -2.4989 },
  'longwell-green-keynsham': { latitude: 51.4139, longitude: -2.4989 },
  'warmley-keynsham': { latitude: 51.4139, longitude: -2.4989 },
  'clandon-midsomer-norton': { latitude: 51.2856, longitude: -2.4858 },
  'farrington-gurney-midsomer-norton': { latitude: 51.2856, longitude: -2.4858 },
  'writhlington-radstock': { latitude: 51.2922, longitude: -2.4497 },
  'chilcompton-radstock': { latitude: 51.2922, longitude: -2.4497 },
  'stanton-drew-chew-magna': { latitude: 51.3667, longitude: -2.6167 },
  'chew-stoke-chew-magna': { latitude: 51.3667, longitude: -2.6167 },
  'bishop-sutton-chew-magna': { latitude: 51.3667, longitude: -2.6167 },
  'high-littleton-paulton': { latitude: 51.3042, longitude: -2.5011 },
  'hallatrow-paulton': { latitude: 51.3042, longitude: -2.5011 },
};

/** Business address for schema: Keynsham-specific (our office). */
const BUSINESS_ADDRESS_KEYNSHAM = {
  '@type': 'PostalAddress',
  streetAddress: '16a Culvers Road',
  addressLocality: 'Keynsham',
  addressRegion: 'Somerset',
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
      county: 'Somerset',
      postcodes: ['BA1', 'BA2'],
      population: '95,000+',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/1280px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg',
      metaTitle: 'Website design Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Bath from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so plumbers, electricians, builders and trades get found on Google. Free check.',
      heroHeadline: 'Website design in Bath',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Bath is a historic city famous for Roman Baths and Georgian architecture. Home to around 95,000–100,000 residents plus over 6 million visitors each year.',
      extendedDescription: 'This creates huge demand for local services — from plumbers fixing tourist rentals to builders on new developments. Customers search Google for "plumber Bath" or "electrician Bath". We get you to the top.',
      introParagraphs: [
        'We help businesses across Bath get found on Google — from the city centre to every neighbourhood. Bath is a historic city with thousands of residents and millions of visitors each year searching for plumbers, electricians, builders, and other trades.',
        'We cover the whole of Bath including Odd Down, Widcombe, Walcot, Bathwick, Larkhall, Weston, Bear Flat, Bathampton, Southdown, Batheaston, Bathford, and more — so you can rank for Bath and your local area.',
      ],
      heroStats: [
        { value: '95,000+', label: 'Residents' },
        { value: 'High', label: 'Competition' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      stats: {
        businesses: '5,000+',
        monthlySearches: '450K+',
        competitors: 'High',
        avgCPC: '£2.50',
      },
      ctaButtonText: 'Get Free Audit – No Obligation',
      whyIntro: 'Bath has strong local competition and high search volume. If you\'re not on page 1 or in the map pack, tourists and residents go to competitors.',
      whyBullets: [
        { title: 'Tourism boost', text: 'Millions of visitors search for services near landmarks.' },
        { title: 'High competition', text: 'Stand out with targeted local SEO.' },
        { title: 'Strong ROI', text: 'Organic rankings save money vs paid ads (often £2+ per click).' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Bath.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack with reviews and posts.' },
        { name: 'Local SEO', description: 'Add-on: rank for Bath + trade keywords.' },
        { name: 'Review Management', description: 'Add-on: build 5-star trust quickly.' },
      ],
      servicesHeading: 'Website design in Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what Bath people and visitors search:',
      industriesHeading: 'Industries We Help',
      industries: ['Trades', 'Tourism & Hospitality', 'Professional Services', 'Retail', 'Health & Wellness', 'Education', 'Construction'],
      landmarksHeading: 'Local Landmarks We Use',
      landmarksIntro: 'We reference real Bath places to boost relevance:',
      landmarks: ['Roman Baths', 'Bath Abbey', 'Royal Crescent', 'Pulteney Bridge', 'Thermae Bath Spa'],
      testimonial: {
        label: 'Bath Result',
        caseTitle: 'New Decorating, Bath',
        quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend.",
        name: 'Jay',
        business: 'New Decorating',
        businessDisplay: 'New Decorating • Painter & Decorator, Bath & BANES',
        result: 'Top 8 on Google Maps in a week',
      },
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
      ctaPrimaryText: 'Get a Free Website Quote',
      ctaSecondaryText: 'Free Consultation – Get Started',
      nearbyHeading: 'Nearby Areas We Serve',
      nearbyAreas: ['keynsham', 'midsomer-norton', 'radstock', 'peasedown-st-john', 'paulton', 'saltford', 'timsbury'],
      websiteDesignBlogSlug: 'website-design-bath',
      subAreaSlugs: ['odd-down-bath', 'combe-down-bath', 'widcombe-bath', 'larkhall-bath', 'twerton-bath', 'weston-bath', 'oldfield-park-bath', 'bear-flat-bath', 'bathampton-bath', 'bathwick-bath', 'southdown-bath', 'batheaston-bath', 'walcot-bath', 'bathford-bath'],
      subAreasHeading: 'Bath neighbourhoods we cover',
      faqs: [
        {
          question: 'How long to rank in Bath?',
          answer: 'Typically 3–6 months for good improvements. High competition means some keywords take longer. We give monthly reports to track progress.',
        },
        {
          question: 'What SEO services for Bath?',
          answer: 'Full local SEO: Google Business Profile optimisation, on-page fixes, citations, reviews, and content for Bath searches.',
        },
        {
          question: 'How much for Bath businesses?',
          answer: 'Local SEO starts from £150/month (1 service, 1 location). Depends on competition and goals. Free audit for custom quote.',
        },
        {
          question: 'Do you specialise in Bath industries?',
          answer: "Yes — trades (plumbers, builders), hospitality, retail, and more. We know Bath's market.",
        },
      ],
    },
    'keynsham': {
      name: 'Keynsham',
      fullName: 'Keynsham, Bristol',
      county: 'Bristol',
      postcodes: ['BS31'],
      websiteDesignBlogSlug: 'website-design-keynsham',
      population: '16,000+',
      heroImage: '/images/keynsham/keynsham-hero.jpg',
      metaTitle: 'Website Designer in Keynsham | Web Design from £399',
      metaDescription: 'Professional website designer in Keynsham BS31. Mobile-friendly web design from £399 with built-in local SEO & Google Business Profile optimisation. Free audit for Bath, Bristol & Somerset businesses.',
      heroHeadline: 'Website Designer in Keynsham: Web Design & SEO from £399',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Website designer in Keynsham — we get you found on Google. We offer web design from £399 and local SEO so trades and businesses in Keynsham BS31 show up when people search "plumber Keynsham", "electrician BS31" and more. Whether you need a professional website designer in Keynsham or help with your Google Business Profile, we help you get more calls and more jobs.',
      extendedDescription: 'Trusted by plumbers, electricians, builders, roofers, and more in Keynsham and Bath and North East Somerset. We also cover nearby villages and neighbourhoods including Longwell Green, Warmley, Pensford, Compton Dando, Corston, Kelston, Whitchurch, and the wider BS31 and BS30 area.',
      heroStats: [
        { value: '150+', label: 'Local Businesses Ranked' },
        { value: '#1', label: 'Bath & North East Somerset SEO Agency' },
        { value: '5★', label: 'Google Rating' },
        { value: '+340%', label: 'Average Lead Increase' },
      ],
      heroSubtext: 'No obligation. No credit card required.',
      testimonialImage: { src: '/images/keynsham/keynsham-developer.png', alt: 'Web developer at work' },
      introParagraphs: [
        'Looking for a website designer in Keynsham? Keynsham is a busy market town with thousands of local homes and businesses. Customers search Google for plumbers, electricians, builders, and other trades right here in BS31. Most trades miss out because they don\'t show up on page 1 or in the map pack. We fix that.',
        'We use local SEO and web design Keynsham from £399 to get your business found first — more calls, more jobs, more money in your pocket. See our website design and local SEO pages for details, or get a free audit.',
      ],
      introImage: { src: '/images/keynsham/keynsham-st-john-church.png', alt: 'St John the Baptist Church, Keynsham' },
      whyHeading: 'Why Choose SEO Kings in Keynsham',
      whyIntro: "We know Keynsham. We've helped local trades here get real results.",
      whyBullets: [
        { title: 'Proven in Keynsham', text: 'See Keynsham Electrics go from not ranking to top 3, +52 calls per month in just 3 months.' },
        { title: 'Local focus', text: 'We target searches like "plumber Keynsham", "electrician BS31", "emergency builder Keynsham".' },
        { title: 'No fluff', text: 'Plain English. No long contracts. Monthly reports show your progress.' },
        { title: 'Full service', text: 'Keyword research, on-page fixes, local links, Google Business Profile, fast website if needed.' },
      ],
      servicesHeading: 'Website design in Keynsham — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Keynsham.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack. More views, calls, and wins.' },
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
        { src: '/images/keynsham/keynsham-health-centre.jpg', alt: 'Keynsham Health Centre', caption: 'Keynsham Health Centre' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/63/Keynsham_railway_station_-_geograph.org.uk_-_363741.jpg/800px-Keynsham_railway_station_-_geograph.org.uk_-_363741.jpg', alt: 'Keynsham railway station', caption: 'Keynsham railway station' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Keynsham_Abby_ruins.jpg/800px-Keynsham_Abby_ruins.jpg', alt: 'Keynsham Abbey ruins', caption: 'Keynsham Abbey ruins' },
      ],
      whySectionImage: { src: '/images/keynsham/keynsham-wireframe.png', alt: 'Website design wireframe and planning' },
      servicesSectionImage: { src: '/images/keynsham/keynsham-webdesign-laptop.png', alt: 'Web design on laptop' },
      websiteDesignSectionImage: { src: '/images/keynsham/keynsham-coding.png', alt: 'Website development and coding' },
      costSectionImage: { src: '/images/keynsham/keynsham-code-screen.png', alt: 'Web development' },
      whatToLookForSectionImage: { src: '/images/keynsham/keynsham-mockup.png', alt: 'Website design mockup' },
      // E-E-A-T: long-form "Why us" and process for Keynsham
      extraContentSection: {
        heading: 'Why SEO Kings for Keynsham',
        subheading: 'Our approach to website design in Keynsham',
        image: { src: '/images/keynsham/keynsham-website-designer-mobile-desktop.png', alt: 'Mobile and desktop setup — we build websites that work on every device' },
        paragraphs: [
          "We've been helping businesses across Bath, Keynsham and North East Somerset get found on Google for years. When you choose us as your website designer in Keynsham, we don't just build a pretty site — we optimise for the searches that matter. From day one we target phrases like 'website designer Keynsham', 'web design Keynsham BS31' and your trade terms so you show up when local customers search.",
          "Every site we build is set up for local SEO. We integrate your Google Business Profile from the start, use the right location and service schema, and structure content so Google understands you serve Keynsham and the surrounding area. That means you're in the race for the map pack and page one from launch, not months later.",
          "Our process is straightforward: we start with a free audit so you see where you stand, then we design and build a mobile-friendly site that fits your business. We're based in Keynsham (16a Culvers Road, BS31 2DW) and work with trades and small businesses across BS31, Bath, Bristol and Somerset. No long contracts, no jargon — just clear reporting and results you can measure.",
        ],
      },
      recentProjects: [
        { sector: 'Peachy Cleans', outcome: 'No website → #1 on Google & top of Maps in Midsomer Norton', snippet: 'Professional site at peachycleans.info plus local SEO and GBP. Now fully booked weeks and hiring new staff; we\'re expanding their visibility across Radstock, Bath, Frome, Paulton and Somerset.', caseStudySlug: 'peachy-cleans' },
        { sector: 'New Decorating', outcome: 'No site, no GBP → top 8 on Google Maps in a week', snippet: 'Fast website at new-decorating.co.uk and Google Business Profile set up and optimised. Now ranking for painter and decorator searches across Bath, Keynsham, Midsomer Norton and BANES.', caseStudySlug: 'new-decorating' },
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
      ctaImage: { src: '/images/keynsham/keynsham-coding.png', alt: 'Website design and development — get found on Google in Keynsham' },
      ctaBackgroundImage: { src: '/images/keynsham/keynsham-cta-background-code.png', alt: '' },
      nearbyAreas: ['bath', 'saltford', 'paulton', 'midsomer-norton', 'radstock'],
      subAreaSlugs: ['bitton-keynsham', 'hanham-keynsham', 'oldland-keynsham', 'longwell-green-keynsham', 'warmley-keynsham'],
      subAreasHeading: 'Areas near Keynsham we cover',
      costSection: {
        heading: 'Website design costs in Keynsham',
        paragraphs: [
          'Website design in Keynsham starts at £399 for a one-page or multi-page site built to get you found on Google. That includes a mobile-friendly site and Google Business Profile optimisation for one service in one location. Multi-page small business sites typically run from around £800–£2,500 depending on pages and content. We\'re clear about what\'s included so Keynsham businesses can plan. See our web design packages for full details.',
        ],
      },
      whatToLookForSection: {
        heading: 'What to look for in a Keynsham web designer',
        bullets: [
          { title: 'Portfolio and sector experience', text: 'Look for work with trades and local businesses like yours — plumbers, electricians, builders in Keynsham, Bath or Somerset.' },
          { title: 'Local knowledge', text: 'A good Keynsham web designer knows the searches people use ("plumber Keynsham", "website design Keynsham") and how to optimise for them.' },
          { title: 'SEO and Google Business Profile included', text: 'Your site should be built with local search in mind from day one. Ask if GBP setup or optimisation is included — we include it in our packages.' },
          { title: 'Clear process and timeline', text: 'You should get a clear timeline and know what you\'re getting at each stage. We outline everything up front so there are no surprises.' },
          { title: 'No long contracts', text: 'Plain English, monthly reports, and no lock-in. We want you on the map and getting more calls.' },
        ],
      },
      faqs: [
        {
          question: 'How much does website design cost in Keynsham?',
          answer: 'Website design in Keynsham starts at £399 for a one-page site with Google Business Profile optimisation included for one service in one location. Multi-page sites typically run from around £800–£2,500 depending on pages and content. We\'re clear about what\'s included — see our web design packages for full details.',
        },
        {
          question: 'Do you build websites optimised for local Keynsham searches?',
          answer: 'Yes. Every site we build is optimised for local searches like "website designer Keynsham", "web design Keynsham BS31" and your trade keywords. We integrate Google Business Profile from day one so you get found on Google and in the map pack.',
        },
        {
          question: 'Can you help my Keynsham business rank in Bath and Bristol too?',
          answer: 'Absolutely! Many Keynsham businesses serve customers across Bath and Bristol. We can optimise your presence for multiple locations, helping you capture customers from the wider area while dominating local Keynsham searches.',
        },
        {
          question: 'How competitive is SEO in Keynsham?',
          answer: 'Keynsham has medium competition compared to Bath or Bristol, making it an excellent opportunity. With the right strategy, most businesses can achieve first-page rankings within 3-4 months.',
        },
        {
          question: 'Do you offer Google Business Profile management in Keynsham?',
          answer: 'Yes, Google Business Profile optimisation is a key part of our Keynsham SEO service. We\'ll optimise your profile, manage reviews, post updates, and ensure you appear in the local map pack.',
        },
        {
          question: 'What results can I expect from SEO in Keynsham?',
          answer: 'Our Keynsham clients typically see 50-200% increases in website traffic and phone enquiries within 6 months. Results vary by industry, but we guarantee measurable improvements or you don\'t pay.',
        },
      ],
    },
    'midsomer-norton': {
      name: 'Midsomer Norton',
      fullName: 'Midsomer Norton, Somerset',
      county: 'Somerset',
      postcodes: ['BA3'],
      population: '11,000+',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Midsomer_Norton%2C_the_River_Somer_alongside_the_High_Street_-_geograph.org.uk_-_1987837.jpg',
      metaTitle: 'Website Designer in Midsomer Norton | Web Design from £399',
      metaDescription: 'Professional website designer in Midsomer Norton BA3. Mobile-friendly web design from £399 with built-in local SEO & Google Business Profile. Free audit for Somer Valley, Bath & Somerset.',
      heroHeadline: 'Website Designer in Midsomer Norton: Web Design & SEO from £399',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Website designer in Midsomer Norton — we get you found on Google. We offer web design from £399 and local SEO so trades and businesses in Midsomer Norton BA3 show up when people search "plumber Midsomer Norton", "electrician BA3", "cleaner Midsomer Norton" and more. Whether you need a professional website designer in Midsomer Norton or help with your Google Business Profile, we help you get more calls and more jobs.',
      extendedDescription: 'Trusted by plumbers, electricians, builders, cleaners, and more in Midsomer Norton and the Somer Valley. We also cover Radstock, Paulton, Peasedown St John, Westfield, and the wider Bath and North East Somerset area.',
      heroStats: [
        { value: '150+', label: 'Local Businesses Ranked' },
        { value: '#1', label: 'Somer Valley SEO Agency' },
        { value: '5★', label: 'Google Rating' },
        { value: 'Fully booked', label: 'Peachy Cleans result' },
      ],
      heroSubtext: 'No obligation. No credit card required.',
      testimonialImage: { src: '/images/keynsham/keynsham-developer.png', alt: 'Web developer at work' },
      introParagraphs: [
        'Looking for a website designer in Midsomer Norton? Midsomer Norton is a busy market town in the Somer Valley with thousands of local homes and businesses. Customers search Google for plumbers, electricians, builders, cleaners and other trades right here in BA3. Most trades miss out because they don\'t show up on page 1 or in the map pack. We fix that.',
        'We use local SEO and web design Midsomer Norton from £399 to get your business found first — more calls, more jobs. See our website design and local SEO pages for details, or get a free audit.',
      ],
      introImage: { src: '/images/midsomer-norton/midsomer-norton-website-designer-mobile-desktop.png', alt: 'Mobile and desktop — we build websites that work on every device' },
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
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Midsomer Norton.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack. More views, calls, and wins.' },
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
      whySectionImage: { src: '/images/keynsham/keynsham-wireframe.png', alt: 'Website design wireframe and planning' },
      servicesSectionImage: { src: '/images/keynsham/keynsham-webdesign-laptop.png', alt: 'Web design on laptop' },
      websiteDesignSectionImage: { src: '/images/keynsham/keynsham-coding.png', alt: 'Website development and coding' },
      costSectionImage: { src: '/images/keynsham/keynsham-code-screen.png', alt: 'Web development' },
      whatToLookForSectionImage: { src: '/images/keynsham/keynsham-mockup.png', alt: 'Website design mockup' },
      extraContentSection: {
        heading: 'Why SEO Kings for Midsomer Norton',
        subheading: 'Our approach to website design in Midsomer Norton',
        image: { src: '/images/midsomer-norton/midsomer-norton-website-designer-mobile-desktop.png', alt: 'Mobile and desktop setup — we build websites that work on every device' },
        paragraphs: [
          "We've been helping businesses across Midsomer Norton, Radstock and the Somer Valley get found on Google for years. When you choose us as your website designer in Midsomer Norton, we don't just build a pretty site — we optimise for the searches that matter. From day one we target phrases like 'website designer Midsomer Norton', 'web design Midsomer Norton BA3' and your trade terms so you show up when local customers search.",
          "Every site we build is set up for local SEO. We integrate your Google Business Profile from the start, use the right location and service schema, and structure content so Google understands you serve Midsomer Norton and the Somer Valley. That means you're in the race for the map pack and page one from launch.",
          "Our process is straightforward: we start with a free audit so you see where you stand, then we design and build a mobile-friendly site that fits your business. We work with trades and small businesses across BA3, Bath, Radstock, Paulton and Somerset. No long contracts, no jargon — just clear reporting and results you can measure.",
        ],
      },
      recentProjects: [
        { sector: 'Peachy Cleans', outcome: 'No website → #1 on Google & top of Maps in Midsomer Norton', snippet: 'Professional site at peachycleans.info plus local SEO and GBP. Now fully booked weeks and hiring new staff; we\'re expanding their visibility across Radstock, Bath, Frome and Somerset.', caseStudySlug: 'peachy-cleans' },
        { sector: 'New Decorating', outcome: 'No site, no GBP → top 8 on Google Maps in a week', snippet: 'Fast website at new-decorating.co.uk and Google Business Profile set up and optimised. Now ranking for painter and decorator searches across Bath, Keynsham, Midsomer Norton and BANES.', caseStudySlug: 'new-decorating' },
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
      ctaImage: { src: '/images/keynsham/keynsham-coding.png', alt: 'Website design and development — get found on Google in Midsomer Norton' },
      ctaBackgroundImage: { src: '/images/midsomer-norton/midsomer-norton-cta-background-code.png', alt: '' },
      costSection: {
        heading: 'Website design costs in Midsomer Norton',
        paragraphs: [
          'Website design in Midsomer Norton starts at £399 for a one-page or multi-page site built to get you found on Google. That includes a mobile-friendly site and Google Business Profile optimisation for one service in one location. Multi-page small business sites typically run from around £800–£2,500 depending on pages and content. We\'re clear about what\'s included so Midsomer Norton businesses can plan. See our web design packages for full details.',
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
        { question: 'How much does website design cost in Midsomer Norton?', answer: 'Website design in Midsomer Norton starts at £399 for a one-page site with Google Business Profile optimisation included for one service in one location. Multi-page sites typically run from around £800–£2,500 depending on pages and content. See our web design packages for full details.' },
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
      county: 'Somerset',
      postcodes: ['BA3'],
      population: '6,000+',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Radstock_%28Somerset%29_St_Nicholas_Church_-_geograph.org.uk_-_67841.jpg',
      metaTitle: 'Website design Radstock | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Radstock from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Radstock',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Radstock is a former mining town with a rich heritage and strong community spirit. Local businesses here serve both Radstock residents and the wider Somer Valley area.',
      extendedDescription: 'Radstock\'s close-knit community means word-of-mouth is powerful, but increasingly locals turn to Google first. Businesses that combine great service with strong online visibility thrive in Radstock.',
      industries: ['Trades', 'Retail', 'Services', 'Food & Drink'],
      landmarks: ['Radstock Museum', 'Radstock Co-operative Society', 'Victoria Hall', 'St Nicholas Church'],
      stats: {
        businesses: '250+',
        monthlySearches: '25K+',
        competitors: 'Low',
        avgCPC: '£1.20',
      },
      testimonial: {
        quote: "Being a small town, I didn't think SEO would work for us. I was wrong - we're now the go-to electrician in Radstock.",
        name: 'James Porter',
        business: 'Porter Electrical',
        result: '+180% leads',
      },
      localKeywords: [
        'website design Radstock',
        'website designer Radstock',
        'web design Radstock',
        'plumber Radstock',
        'electrician Radstock',
        'builder Radstock',
        'handyman Radstock',
        'garage Radstock',
        'decorator Radstock',
      ],
      nearbyHeading: 'Nearby Areas We Serve',
      nearbyAreas: ['midsomer-norton', 'paulton', 'peasedown-st-john'],
      subAreaSlugs: ['writhlington-radstock', 'chilcompton-radstock'],
      websiteDesignBlogSlug: 'website-design-radstock',
      subAreasHeading: 'Areas near Radstock we cover',
      faqs: [
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
      ],
      servicesHeading: 'Website design in Radstock — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
    },
    'peasedown-st-john': {
      name: 'Peasedown St John',
      fullName: 'Peasedown St John, Somerset',
      county: 'Somerset',
      postcodes: ['BA2'],
      population: '6,500+',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Prince_of_Wales%2C_Peasedown_St_John_-_geograph.org.uk_-_1827688.jpg/1280px-Prince_of_Wales%2C_Peasedown_St_John_-_geograph.org.uk_-_1827688.jpg',
      metaTitle: 'Website design Peasedown St John | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Peasedown St John from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Peasedown St John',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Peasedown St John is a growing village just south of Bath. New homes mean more people need local trades. Plumbers, electricians, builders – customers search Google right here.',
      extendedDescription: 'We get you found first.',
      industries: ['Trades', 'Retail', 'Services', 'Childcare'],
      landmarks: ['Beacon Hall', 'St John the Baptist Church', 'Peasedown St John Primary School', 'Eckweek Lane play areas'],
      heroStats: [
        { value: '6,500+', label: 'Residents' },
        { value: 'Low', label: 'Competition' },
        { value: 'Proven Results', label: 'in Bath & North East Somerset' },
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
        { name: 'Google Business Profile', description: 'Dominate the map pack with reviews and posts.' },
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
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Paulton_Memorial_Park_-_geograph.org.uk_-_5152197.jpg/1280px-Paulton_Memorial_Park_-_geograph.org.uk_-_5152197.jpg',
      metaTitle: 'Website design Paulton | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Paulton from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Paulton',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Paulton is a friendly village in the Cam Valley with about 5,300–6,500 residents. Well-connected to Bath and nearby towns. Businesses here serve locals plus visitors to the area (including nearby Paultons Park).',
      extendedDescription: 'Customers search Google for "plumber Paulton" or "cleaner Paulton". We get you found first.',
      heroStats: [
        { value: '5,300+', label: 'Residents' },
        { value: 'Low', label: 'Competition' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
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
        { name: 'Google Business Profile', description: 'Dominate the map pack with reviews and posts.' },
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
      county: 'Bristol',
      postcodes: ['BS31'],
      population: '5,000+',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Saltford_Marina_-_geograph.org.uk_-_547659.jpg',
      metaTitle: 'Website design Saltford | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Saltford from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Saltford',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Saltford is a picturesque riverside village on the River Avon, between Bath and Bristol. About 5,000–6,000 residents enjoy an affluent community and scenic setting.',
      extendedDescription: 'Local trades serve both villagers and visitors drawn to historic spots like Saltford Manor (England\'s oldest continuously inhabited house). Customers search Google for "plumber Saltford" or "electrician Saltford". We get you to the top spots.',
      heroStats: [
        { value: '5,000+', label: 'Residents' },
        { value: 'Low', label: 'Competition' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      stats: {
        businesses: '150+',
        monthlySearches: '15K+',
        competitors: 'Low',
        avgCPC: '£1.40',
      },
      ctaButtonText: 'Get Free Audit – No Obligation',
      whyIntro: 'Saltford locals value quality services and search online first. If you\'re not visible on Google or in the map pack, you lose jobs to competitors.',
      whyBullets: [
        { title: 'Affluent area', text: 'Residents often choose premium trades and are willing to pay for excellence.' },
        { title: 'Low competition', text: 'Easier to dominate searches in a village than in big cities.' },
        { title: 'High ROI', text: 'Organic rankings save money vs paid ads long-term.' },
      ],
      services: [
        { name: 'Local SEO', description: 'Rank for Saltford + trade keywords.' },
        { name: 'Google Business Profile', description: 'Dominate the map pack with reviews and posts.' },
        { name: 'Fast Website Design', description: 'Mobile sites that convert visitors into customers.' },
        { name: 'Review Management', description: 'Build 5-star trust quickly.' },
      ],
      servicesHeading: 'Website design in Saltford — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what Saltford people actually search:',
      industriesHeading: 'Industries We Help',
      industries: ['Trades', 'Professional Services', 'Hospitality', 'Retail'],
      landmarksHeading: 'Local Landmarks We Use',
      landmarksIntro: 'We reference real Saltford places to improve local relevance:',
      landmarks: ['Saltford Manor', 'The Bird in Hand pub', 'River Avon', 'Saltford Brass Mill', "St Mary's Church"],
      testimonial: {
        label: 'Real Result',
        caseTitle: 'Cooper Plumbing & Heating, Saltford',
        quote: "Saltford residents now find us first on Google. We've become the trusted local choice.",
        name: 'Andy Cooper',
        business: 'Cooper Plumbing & Heating',
        result: '+150% revenue',
      },
      howItWorks: [
        { title: 'Free audit', description: 'We check your rankings, site, and Google profile.' },
        { title: 'Custom plan', description: 'Tailored for Saltford trades and affluent customers.' },
        { title: 'Results', description: 'Monthly reports. Watch leads grow.' },
      ],
      localKeywords: [
        'website design Saltford',
        'website designer Saltford',
        'web design Saltford',
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
      ctaHeadline: 'Ready to Dominate Saltford Search Results?',
      ctaSubhead: 'Join Saltford trades already ranking high.',
      ctaPrimaryText: 'Get a Free Website Quote',
      ctaSecondaryText: 'Free Consultation – Get Started',
      nearbyHeading: 'Nearby Areas We Serve',
      nearbyAreas: ['bath', 'keynsham'],
      faqs: [
        {
          question: 'Is SEO effective for a small village like Saltford?',
          answer: 'Yes. Saltford residents search online for local services. With low competition, the right strategy makes you the go-to choice quickly.',
        },
        {
          question: 'Can I rank for Saltford, Bath, and Keynsham?',
          answer: "Yes. Saltford's location between Bath and Keynsham is perfect for multi-area targeting. We build strategies that cover all.",
        },
        {
          question: "How does Saltford's affluent community affect SEO?",
          answer: 'Customers search for premium, quality services. We tailor keywords and content to attract those willing to pay for top work.',
        },
        {
          question: 'What ROI can I expect in Saltford?',
          answer: 'Clients often see 5–10x returns in the first year. Higher order values in affluent areas mean fewer leads deliver strong profits.',
        },
      ],
    },
    'timsbury': {
      name: 'Timsbury',
      fullName: 'Timsbury, Somerset',
      county: 'Somerset',
      postcodes: ['BA2'],
      population: '2,600+',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/St_Mary%27s%2C_Timsbury_-_geograph.org.uk_-_4344316.jpg/1280px-St_Mary%27s%2C_Timsbury_-_geograph.org.uk_-_4344316.jpg',
      metaTitle: 'Website design Timsbury | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Timsbury from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Timsbury',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Timsbury is a charming rural village near Paulton and Midsomer Norton. Around 2,600 residents enjoy a close-knit community and peaceful setting.',
      extendedDescription: 'Local trades benefit from strong word-of-mouth plus growing online searches. Customers search Google for "builder Timsbury" or "plumber Timsbury". We get you found first.',
      heroStats: [
        { value: '2,600+', label: 'Residents' },
        { value: 'Very Low', label: 'Competition' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      stats: {
        businesses: '80+',
        monthlySearches: '8K+',
        competitors: 'Very Low',
        avgCPC: '£1.00',
      },
      ctaButtonText: 'Get Free Audit – No Obligation',
      whyIntro: 'In a small village like Timsbury, people search online for local services first. If you\'re not visible on Google or in the map pack, you miss enquiries.',
      whyBullets: [
        { title: 'Strong community', text: 'Residents prefer local trades; online visibility turns word-of-mouth into direct leads.' },
        { title: 'Very low competition', text: 'Quick to reach top spots compared to bigger towns.' },
        { title: 'High ROI', text: 'Organic rankings save money vs paid ads.' },
      ],
      services: [
        { name: 'Local SEO', description: 'Rank for Timsbury + trade keywords.' },
        { name: 'Google Business Profile', description: 'Dominate the map pack with reviews and posts.' },
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
      landmarks: ["St Mary's Church", 'Timsbury Playing Fields', 'Conygre Hall', 'Willow Farm (nearby)'],
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
          question: 'Is Timsbury too small for professional SEO services?',
          answer: 'No village is too small! We target Timsbury specifically and optimise for nearby areas to maximise reach. Many Timsbury businesses serve Paulton, Midsomer Norton, and beyond.',
        },
        {
          question: 'How do you approach SEO for rural villages?',
          answer: 'We combine hyper-local targeting (e.g., "builder Timsbury") with broader coverage. This captures all relevant searches without wasting effort.',
        },
        {
          question: "What's the minimum investment for Timsbury SEO?",
          answer: 'Packages start from £300/month for smaller villages with low competition. We keep it flexible and results-driven.',
        },
        {
          question: 'How do you measure success for Timsbury businesses?',
          answer: 'We track rankings, traffic, calls, form submissions, and new customers. Monthly reports show clear progress.',
        },
      ],
    },
    'westfield': {
      name: 'Westfield',
      fullName: 'Westfield, Somerset',
      county: 'Somerset',
      postcodes: ['BA3'],
      population: '2,000+',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Waterside_Valley%2C_Westfield%2C_Somerset.jpg',
      metaTitle: 'Website design Westfield | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Westfield from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Westfield',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Westfield is a village in the Somer Valley, near Radstock and Midsomer Norton. Local trades serve residents and the wider area.',
      extendedDescription: 'People in Westfield and nearby search Google for local services. We get your business to the top of local search and the map pack.',
      heroStats: [
        { value: '2,000+', label: 'Residents' },
        { value: 'Very Low', label: 'Competition' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      stats: { businesses: '50+', monthlySearches: '5K+', competitors: 'Very Low', avgCPC: '£0.80' },
      ctaButtonText: 'Get Free Audit – No Obligation',
      whyIntro: 'In Westfield and the Somer Valley, local searches matter. If you\'re not on Google or in the map pack, you miss enquiries.',
      whyBullets: [
        { title: 'Village reach', text: 'Residents and nearby villages search for local trades.' },
        { title: 'Very low competition', text: 'Quick to reach top spots compared to bigger towns.' },
        { title: 'High ROI', text: 'Organic rankings save money vs paid ads.' },
      ],
      services: [
        { name: 'Local SEO', description: 'Rank for Westfield + trade keywords.' },
        { name: 'Google Business Profile', description: 'Dominate the map pack with reviews and posts.' },
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
      landmarks: ['Somer Valley', 'Westfield village', 'Near Radstock & Midsomer Norton'],
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
        { question: 'Is Westfield too small for SEO?', answer: 'No. We target Westfield and nearby areas so you capture local searches. Many Westfield businesses also serve Radstock and Midsomer Norton.' },
        { question: 'How much for Westfield SEO?', answer: 'Packages start from £300/month for smaller villages. We give a custom quote after a free audit.' },
        { question: 'Do you do website design in Westfield?', answer: 'Yes. We build fast, mobile-friendly websites for local businesses. See our web design page and packages.' },
      ],
    },
    'chew-magna': {
      name: 'Chew Magna',
      fullName: 'Chew Magna, Somerset',
      county: 'Somerset',
      postcodes: ['BS40'],
      population: '1,200+',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bath_And_North_East_Somerset_-_Chew_Magna_Scenery_%28geograph_5442137%29.jpg/1280px-Bath_And_North_East_Somerset_-_Chew_Magna_Scenery_%28geograph_5442137%29.jpg',
      metaTitle: 'Website design Chew Magna | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Chew Magna from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Chew Magna',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Chew Magna is a village in the Chew Valley, between Bristol and Bath. A strong community and scenic setting attract residents and visitors.',
      extendedDescription: 'Local trades serve Chew Magna and the wider Chew Valley. Customers search Google for "plumber Chew Magna" or "electrician Chew Valley". We get you found first.',
      heroStats: [
        { value: '1,200+', label: 'Residents' },
        { value: 'Very Low', label: 'Competition' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      stats: { businesses: '40+', monthlySearches: '4K+', competitors: 'Very Low', avgCPC: '£0.90' },
      ctaButtonText: 'Get Free Audit – No Obligation',
      whyIntro: 'Chew Magna and the Chew Valley have strong local demand. If you\'re not visible on Google or in the map pack, you miss jobs.',
      whyBullets: [
        { title: 'Chew Valley reach', text: 'Residents and nearby villages search for local trades.' },
        { title: 'Very low competition', text: 'Easier to dominate local searches.' },
        { title: 'High ROI', text: 'Organic rankings save money vs paid ads.' },
      ],
      services: [
        { name: 'Local SEO', description: 'Rank for Chew Magna + trade keywords.' },
        { name: 'Google Business Profile', description: 'Dominate the map pack with reviews and posts.' },
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
      landmarks: ['Chew Valley', 'Chew Magna village', 'Chew Valley Lake', 'St Andrew\'s Church'],
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
        { question: 'Is Chew Magna too small for SEO?', answer: 'No. We target Chew Magna and the Chew Valley. Many businesses also serve Keynsham and Bath.' },
        { question: 'How much for Chew Magna SEO?', answer: 'Packages start from £300/month for smaller villages. We give a custom quote after a free audit.' },
        { question: 'Do you do website design in Chew Magna?', answer: 'Yes. We build fast, mobile-friendly websites for local businesses. See our web design page and packages.' },
      ],
    },
    'temple-cloud': {
      name: 'Temple Cloud',
      fullName: 'Temple Cloud, Somerset',
      county: 'Somerset',
      postcodes: ['BS39'],
      population: '1,500+',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/3/36/The_A37_at_Temple_Cloud_-_geograph.org.uk_-_1084282.jpg',
      metaTitle: 'Website design Temple Cloud | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Temple Cloud from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Temple Cloud',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Temple Cloud is a village in the Cam Valley, near Paulton and Clutton. Local trades serve the village and surrounding areas.',
      extendedDescription: 'People in Temple Cloud and nearby search Google for local services. We get your business to the top of local search and the map pack.',
      heroStats: [
        { value: '1,500+', label: 'Residents' },
        { value: 'Very Low', label: 'Competition' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      stats: { businesses: '45+', monthlySearches: '5K+', competitors: 'Very Low', avgCPC: '£0.85' },
      ctaButtonText: 'Get Free Audit – No Obligation',
      whyIntro: 'Temple Cloud and the Cam Valley have steady local demand. If you\'re not on Google or in the map pack, you miss enquiries.',
      whyBullets: [
        { title: 'Cam Valley reach', text: 'Residents and nearby villages search for local trades.' },
        { title: 'Very low competition', text: 'Quick to reach top spots.' },
        { title: 'High ROI', text: 'Organic rankings save money vs paid ads.' },
      ],
      services: [
        { name: 'Local SEO', description: 'Rank for Temple Cloud + trade keywords.' },
        { name: 'Google Business Profile', description: 'Dominate the map pack with reviews and posts.' },
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
      landmarks: ['Temple Cloud village', 'Cam Valley', 'Near Paulton & Clutton'],
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
        { question: 'Is Temple Cloud too small for SEO?', answer: 'No. We target Temple Cloud and nearby areas. Many businesses also serve Paulton, Clutton, and Midsomer Norton.' },
        { question: 'How much for Temple Cloud SEO?', answer: 'Packages start from £300/month for smaller villages. We give a custom quote after a free audit.' },
        { question: 'Do you do website design in Temple Cloud?', answer: 'Yes. We build fast, mobile-friendly websites for local businesses. See our web design page and packages.' },
      ],
    },
    'clutton': {
      name: 'Clutton',
      fullName: 'Clutton, Somerset',
      county: 'Somerset',
      postcodes: ['BS39'],
      population: '1,800+',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Clutton_Hill%2C_at_the_top_of_Clutton_Hill_-_geograph.org.uk_-_1162747.jpg',
      metaTitle: 'Website design Clutton | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Clutton from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Clutton',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Clutton is a village in the Cam Valley, near Temple Cloud and Paulton. Local trades serve the village and the wider area.',
      extendedDescription: 'People in Clutton and nearby search Google for local services. We get your business to the top of local search and the map pack.',
      heroStats: [
        { value: '1,800+', label: 'Residents' },
        { value: 'Very Low', label: 'Competition' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      stats: { businesses: '50+', monthlySearches: '5K+', competitors: 'Very Low', avgCPC: '£0.85' },
      ctaButtonText: 'Get Free Audit – No Obligation',
      whyIntro: 'Clutton and the Cam Valley have steady local demand. If you\'re not visible on Google or in the map pack, you miss jobs.',
      whyBullets: [
        { title: 'Cam Valley reach', text: 'Residents and nearby villages search for local trades.' },
        { title: 'Very low competition', text: 'Easier to dominate local searches.' },
        { title: 'High ROI', text: 'Organic rankings save money vs paid ads.' },
      ],
      services: [
        { name: 'Local SEO', description: 'Rank for Clutton + trade keywords.' },
        { name: 'Google Business Profile', description: 'Dominate the map pack with reviews and posts.' },
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
      landmarks: ['Clutton village', 'Cam Valley', 'Near Temple Cloud & Paulton'],
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
        { question: 'Is Clutton too small for SEO?', answer: 'No. We target Clutton and nearby areas. Many businesses also serve Temple Cloud, Paulton, and Midsomer Norton.' },
        { question: 'How much for Clutton SEO?', answer: 'Packages start from £300/month for smaller villages. We give a custom quote after a free audit.' },
        { question: 'Do you do website design in Clutton?', answer: 'Yes. We build fast, mobile-friendly websites for local businesses. See our web design page and packages.' },
      ],
    },

    // Sub-areas: Bath
    'odd-down-bath': {
      name: 'Odd Down',
      fullName: 'Odd Down, Bath',
      parentSlug: 'bath',
      county: 'Somerset',
      postcodes: ['BA2'],
      population: null,
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/1280px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg',
      metaTitle: 'Website design Odd Down Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Odd Down, Bath from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Odd Down, Bath',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Odd Down is a residential area in the south of Bath. Part of Bath and North East Somerset, it has strong demand for local trades — plumbers, electricians, builders, decorators.',
      extendedDescription: 'Customers search "plumber Odd Down" or "electrician Bath". We get you found on Google and in the map pack.',
      heroStats: [
        { value: 'Part of', label: 'Bath' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Odd Down and south Bath have steady demand for local services. If you\'re not on page 1 or in the map pack, you miss jobs.',
      whyBullets: [
        { title: 'Part of Bath', text: 'We target Odd Down and Bath searches so you get found locally.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads for long-term leads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Odd Down, Bath.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack with reviews and posts.' },
        { name: 'Local SEO', description: 'Add-on: rank for Odd Down and Bath + trade keywords.' },
      ],
      servicesHeading: 'Website design in Odd Down, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Odd Down and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Odd Down Park', 'Southgate', 'Bear Flat'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Odd Down and Bath places to boost relevance.',
      stats: { businesses: '500+', monthlySearches: '25K+', competitors: 'Medium', avgCPC: '£2.00' },
      localKeywords: [
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
        { question: 'Do you cover Odd Down specifically?', answer: 'Yes. We target Odd Down and Bath so you show up when local customers search.' },
        { question: 'Website design in Odd Down?', answer: 'Yes. We build fast, mobile-friendly websites for Bath and North East Somerset businesses. From £399 for a one-page site.' },
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
      county: 'Somerset',
      postcodes: ['BA2'],
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/1280px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg',
      metaTitle: 'Website design Combe Down Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Combe Down, Bath from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Combe Down, Bath',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Combe Down is a village and area on the southern edge of Bath. Part of Bath and North East Somerset, it has strong demand for local trades and services.',
      extendedDescription: 'Customers search "plumber Combe Down" or "electrician Bath". We get you on the map and on page one.',
      heroStats: [
        { value: 'Part of', label: 'Bath' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Combe Down and south Bath have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Part of Bath', text: 'We target Combe Down and Bath searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Combe Down, Bath.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
        { name: 'Local SEO', description: 'Add-on: rank for Combe Down and Bath + trade keywords.' },
      ],
      servicesHeading: 'Website design in Combe Down, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Combe Down and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Combe Down Stone Mines', 'Prior Park', 'Ralph Allen School'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Combe Down and Bath places.',
      stats: { businesses: '400+', monthlySearches: '20K+', competitors: 'Medium', avgCPC: '£1.80' },
      localKeywords: [
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
        { question: 'Do you cover Combe Down?', answer: 'Yes. We target Combe Down and Bath so you show up when local customers search.' },
        { question: 'Website design in Combe Down?', answer: 'Yes. We build fast websites for Bath and North East Somerset businesses. From £399.' },
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
      county: 'Somerset',
      postcodes: ['BA2'],
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/1280px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg',
      metaTitle: 'Website design Widcombe Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Widcombe, Bath from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Widcombe, Bath',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Widcombe is a sought-after area of Bath with Georgian terraces and period homes. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Widcombe" or "electrician Bath". We get you on the map and on page one.',
      heroStats: [
        { value: 'Part of', label: 'Bath' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Widcombe and Bath have strong demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Part of Bath', text: 'We target Widcombe and Bath searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Widcombe, Bath.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
        { name: 'Local SEO', description: 'Add-on: rank for Widcombe and Bath + trade keywords.' },
      ],
      servicesHeading: 'Website design in Widcombe, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Widcombe and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Widcombe Hill', 'Widcombe Manor', 'Bath Spa Station'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Widcombe and Bath places.',
      stats: { businesses: '350+', monthlySearches: '18K+', competitors: 'Medium', avgCPC: '£2.00' },
      localKeywords: [
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
        { question: 'Do you cover Widcombe?', answer: 'Yes. We target Widcombe and Bath so you show up when local customers search.' },
        { question: 'Website design in Widcombe?', answer: 'Yes. We build fast websites for Bath and North East Somerset businesses. From £399.' },
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
      county: 'Somerset',
      postcodes: ['BA1', 'BA2'],
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/1280px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg',
      metaTitle: 'Website design Larkhall Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Larkhall, Bath from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Larkhall, Bath',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Larkhall is a vibrant area of Bath with independent shops and local businesses. Part of Bath and North East Somerset, it has strong demand for trades and services.',
      extendedDescription: 'Customers search "plumber Larkhall" or "electrician Bath". We get you on the map and on page one.',
      heroStats: [
        { value: 'Part of', label: 'Bath' },
        { value: 'BA1, BA2', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Larkhall and Bath have strong demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Part of Bath', text: 'We target Larkhall and Bath searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Larkhall, Bath.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
        { name: 'Local SEO', description: 'Add-on: rank for Larkhall and Bath + trade keywords.' },
      ],
      servicesHeading: 'Website design in Larkhall, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Larkhall and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Larkhall Square', 'St Saviour\'s Road', 'London Road'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Larkhall and Bath places.',
      stats: { businesses: '400+', monthlySearches: '22K+', competitors: 'Medium', avgCPC: '£2.00' },
      localKeywords: [
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
        { question: 'Do you cover Larkhall?', answer: 'Yes. We target Larkhall and Bath so you show up when local customers search.' },
        { question: 'Website design in Larkhall?', answer: 'Yes. We build fast websites for Bath and North East Somerset businesses. From £399.' },
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
      county: 'Somerset',
      postcodes: ['BA2'],
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/1280px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg',
      metaTitle: 'Website design Twerton Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Twerton, Bath from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Twerton, Bath',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Twerton is an area in the west of Bath. Part of Bath and North East Somerset, it has strong demand for local trades — plumbers, electricians, builders, decorators.',
      extendedDescription: 'Customers search "plumber Twerton" or "electrician Bath". We get you on the map and on page one.',
      heroStats: [
        { value: 'Part of', label: 'Bath' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Twerton and west Bath have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Part of Bath', text: 'We target Twerton and Bath searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Twerton, Bath.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
        { name: 'Local SEO', description: 'Add-on: rank for Twerton and Bath + trade keywords.' },
      ],
      servicesHeading: 'Website design in Twerton, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Twerton and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Twerton High Street', 'River Avon', 'Western Riverside'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Twerton and Bath places.',
      stats: { businesses: '350+', monthlySearches: '18K+', competitors: 'Medium', avgCPC: '£1.80' },
      localKeywords: [
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
        { question: 'Do you cover Twerton?', answer: 'Yes. We target Twerton and Bath so you show up when local customers search.' },
        { question: 'Website design in Twerton?', answer: 'Yes. We build fast websites for Bath and North East Somerset businesses. From £399.' },
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
      county: 'Somerset',
      postcodes: ['BA1'],
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/1280px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg',
      metaTitle: 'Website design Weston Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Weston, Bath from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Weston, Bath',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Weston is a residential area in the north of Bath. Part of Bath and North East Somerset, it has strong demand for local trades — plumbers, electricians, builders, decorators.',
      extendedDescription: 'Customers search "plumber Weston Bath" or "electrician Bath". We get you on the map and on page one.',
      heroStats: [
        { value: 'Part of', label: 'Bath' },
        { value: 'BA1', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Weston and north Bath have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Part of Bath', text: 'We target Weston and Bath searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Weston, Bath.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
        { name: 'Local SEO', description: 'Add-on: rank for Weston and Bath + trade keywords.' },
      ],
      servicesHeading: 'Website design in Weston, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Weston and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Weston High Street', 'Weston Park', 'Royal Victoria Park'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Weston and Bath places.',
      stats: { businesses: '400+', monthlySearches: '20K+', competitors: 'Medium', avgCPC: '£2.00' },
      localKeywords: [
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
        { question: 'Do you cover Weston?', answer: 'Yes. We target Weston and Bath so you show up when local customers search.' },
        { question: 'Website design in Weston?', answer: 'Yes. We build fast websites for Bath and North East Somerset businesses. From £399.' },
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
      county: 'Somerset',
      postcodes: ['BA2'],
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/1280px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg',
      metaTitle: 'Website design Oldfield Park Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Oldfield Park, Bath from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Oldfield Park, Bath',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Oldfield Park is a popular residential area south of the river in Bath. Part of Bath and North East Somerset, it has strong demand for local trades and services.',
      extendedDescription: 'Customers search "plumber Oldfield Park" or "electrician Bath". We get you on the map and on page one.',
      heroStats: [
        { value: 'Part of', label: 'Bath' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Oldfield Park and Bath have strong demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Part of Bath', text: 'We target Oldfield Park and Bath searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Oldfield Park, Bath.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
        { name: 'Local SEO', description: 'Add-on: rank for Oldfield Park and Bath + trade keywords.' },
      ],
      servicesHeading: 'Website design in Oldfield Park, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Oldfield Park and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Oldfield Park', 'Green Park Station', 'River Avon'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Oldfield Park and Bath places.',
      stats: { businesses: '450+', monthlySearches: '22K+', competitors: 'Medium', avgCPC: '£2.00' },
      localKeywords: [
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
        { question: 'Do you cover Oldfield Park?', answer: 'Yes. We target Oldfield Park and Bath so you show up when local customers search.' },
        { question: 'Website design in Oldfield Park?', answer: 'Yes. We build fast websites for Bath and North East Somerset businesses. From £399.' },
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
      county: 'Somerset',
      postcodes: ['BA2'],
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/1280px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg',
      metaTitle: 'Website design Bear Flat Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Bear Flat, Bath from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Bear Flat, Bath',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Bear Flat is a well-known area in south Bath with a strong local high street. Part of Bath and North East Somerset, it has strong demand for trades and services.',
      extendedDescription: 'Customers search "plumber Bear Flat" or "electrician Bath". We get you on the map and on page one.',
      heroStats: [
        { value: 'Part of', label: 'Bath' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Bear Flat and south Bath have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Part of Bath', text: 'We target Bear Flat and Bath searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Bear Flat, Bath.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
        { name: 'Local SEO', description: 'Add-on: rank for Bear Flat and Bath + trade keywords.' },
      ],
      servicesHeading: 'Website design in Bear Flat, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Bear Flat and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Bear Flat', 'Bloomfield Road', 'Odd Down Park'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Bear Flat and Bath places.',
      stats: { businesses: '380+', monthlySearches: '19K+', competitors: 'Medium', avgCPC: '£1.90' },
      localKeywords: [
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
        { question: 'Do you cover Bear Flat?', answer: 'Yes. We target Bear Flat and Bath so you show up when local customers search.' },
        { question: 'Website design in Bear Flat?', answer: 'Yes. We build fast websites for Bath and North East Somerset businesses. From £399.' },
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
      county: 'Somerset',
      postcodes: ['BA2'],
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/1280px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg',
      metaTitle: 'Website design Bathampton Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Bathampton, near Bath from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Bathampton, near Bath',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Bathampton is a village on the eastern edge of Bath, on the Kennet & Avon Canal. Part of Bath and North East Somerset, it has strong demand for local trades and services.',
      extendedDescription: 'Customers search "plumber Bathampton" or "electrician Bath". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Bath' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Bathampton and east Bath have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Near Bath', text: 'We target Bathampton and Bath searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Bathampton, near Bath.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
        { name: 'Local SEO', description: 'Add-on: rank for Bathampton and Bath + trade keywords.' },
      ],
      servicesHeading: 'Website design in Bathampton, near Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Bathampton and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Kennet & Avon Canal', 'Bathampton Mill', 'George Inn'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Bathampton and Bath places.',
      stats: { businesses: '280+', monthlySearches: '14K+', competitors: 'Low-Medium', avgCPC: '£1.70' },
      localKeywords: [
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
        { question: 'Do you cover Bathampton?', answer: 'Yes. We target Bathampton and Bath so you show up when local customers search.' },
        { question: 'Website design in Bathampton?', answer: 'Yes. We build fast websites for Bath and North East Somerset businesses. From £399.' },
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
      county: 'Somerset',
      postcodes: ['BA2'],
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/1280px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg',
      metaTitle: 'Website design Bathwick Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Bathwick, Bath from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Bathwick, Bath',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Bathwick is an area east of Bath city centre, home to the university and the Kennet & Avon Canal. Part of Bath and North East Somerset, it has strong demand for local trades and services.',
      extendedDescription: 'Customers search "plumber Bathwick" or "electrician Bath". We get you on the map and on page one.',
      heroStats: [
        { value: 'Part of', label: 'Bath' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Bathwick and east Bath have strong demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Part of Bath', text: 'We target Bathwick and Bath searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Bathwick, Bath.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
        { name: 'Local SEO', description: 'Add-on: rank for Bathwick and Bath + trade keywords.' },
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
        { question: 'Do you cover Bathwick?', answer: 'Yes. We target Bathwick and Bath so you show up when local customers search.' },
        { question: 'Website design in Bathwick?', answer: 'Yes. We build fast websites for Bath and North East Somerset businesses. From £399.' },
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
      county: 'Somerset',
      postcodes: ['BA2'],
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/1280px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg',
      metaTitle: 'Website design Southdown Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Southdown, Bath from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Southdown, Bath',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Southdown is a residential area in south Bath with a busy local high street. Part of Bath and North East Somerset, it has strong demand for plumbers, electricians, builders, and decorators.',
      extendedDescription: 'Customers search "plumber Southdown" or "electrician Bath". We get you on the map and on page one.',
      heroStats: [
        { value: 'Part of', label: 'Bath' },
        { value: 'BA2', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Southdown and south Bath have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Part of Bath', text: 'We target Southdown and Bath searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Southdown, Bath.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
        { name: 'Local SEO', description: 'Add-on: rank for Southdown and Bath + trade keywords.' },
      ],
      servicesHeading: 'Website design in Southdown, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Southdown and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Southdown Road', 'Bear Flat', 'Odd Down'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Southdown and Bath places.',
      stats: { businesses: '380+', monthlySearches: '18K+', competitors: 'Medium', avgCPC: '£1.90' },
      localKeywords: [
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
        { question: 'Do you cover Southdown?', answer: 'Yes. We target Southdown and Bath so you show up when local customers search.' },
        { question: 'Website design in Southdown?', answer: 'Yes. We build fast websites for Bath and North East Somerset businesses. From £399.' },
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
      county: 'Somerset',
      postcodes: ['BA1'],
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/1280px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg',
      metaTitle: 'Website design Batheaston Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Batheaston, near Bath from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Batheaston, near Bath',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Batheaston is a village on the eastern edge of Bath, on the A4. Part of Bath and North East Somerset, it has strong demand for local trades and services.',
      extendedDescription: 'Customers search "plumber Batheaston" or "electrician Bath". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Bath' },
        { value: 'BA1', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Batheaston and east Bath have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Near Bath', text: 'We target Batheaston and Bath searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Batheaston, near Bath.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
        { name: 'Local SEO', description: 'Add-on: rank for Batheaston and Bath + trade keywords.' },
      ],
      servicesHeading: 'Website design in Batheaston, near Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Batheaston and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Batheaston Village', 'American Museum', 'A4'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Batheaston and Bath places.',
      stats: { businesses: '300+', monthlySearches: '15K+', competitors: 'Low-Medium', avgCPC: '£1.70' },
      localKeywords: [
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
        { question: 'Do you cover Batheaston?', answer: 'Yes. We target Batheaston and Bath so you show up when local customers search.' },
        { question: 'Website design in Batheaston?', answer: 'Yes. We build fast websites for Bath and North East Somerset businesses. From £399.' },
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
      county: 'Somerset',
      postcodes: ['BA1'],
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/1280px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg',
      metaTitle: 'Website design Walcot Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Walcot, Bath from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Walcot, Bath',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Walcot is an area north of Bath city centre, known for Walcot Street and independent shops. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Walcot" or "electrician Bath". We get you on the map and on page one.',
      heroStats: [
        { value: 'Part of', label: 'Bath' },
        { value: 'BA1', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Walcot and north Bath have strong demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Part of Bath', text: 'We target Walcot and Bath searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Walcot, Bath.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
        { name: 'Local SEO', description: 'Add-on: rank for Walcot and Bath + trade keywords.' },
      ],
      servicesHeading: 'Website design in Walcot, Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Walcot and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Walcot Street', 'London Road', 'Royal Victoria Park'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Walcot and Bath places.',
      stats: { businesses: '420+', monthlySearches: '21K+', competitors: 'Medium', avgCPC: '£2.00' },
      localKeywords: [
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
        { question: 'Do you cover Walcot?', answer: 'Yes. We target Walcot and Bath so you show up when local customers search.' },
        { question: 'Website design in Walcot?', answer: 'Yes. We build fast websites for Bath and North East Somerset businesses. From £399.' },
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
      county: 'Somerset',
      postcodes: ['BA1'],
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg/1280px-Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg',
      metaTitle: 'Website design Bathford Bath | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Bathford, near Bath from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Bathford, near Bath',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Bathford is a village east of Bath on the A36. Part of Bath and North East Somerset, it has strong demand for local trades and services.',
      extendedDescription: 'Customers search "plumber Bathford" or "electrician Bath". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Bath' },
        { value: 'BA1', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      ctaButtonText: 'Get Free Check – No Obligation',
      whyIntro: 'Bathford and east Bath have steady demand for local services. Get found on Google and in the map pack.',
      whyBullets: [
        { title: 'Near Bath', text: 'We target Bathford and Bath searches.' },
        { title: 'Website & Google', text: 'Fast website and optimised Google Business Profile.' },
        { title: 'Strong ROI', text: 'Organic rankings beat paid ads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Bathford, near Bath.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
        { name: 'Local SEO', description: 'Add-on: rank for Bathford and Bath + trade keywords.' },
      ],
      servicesHeading: 'Website design in Bathford, near Bath — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Bathford and Bath search:',
      industries: ['Trades', 'Professional Services', 'Retail', 'Construction'],
      landmarks: ['Bathford Hill', 'St Swithin\'s Church', 'Kennet & Avon Canal'],
      landmarksHeading: 'Local Landmarks',
      landmarksIntro: 'We reference local Bathford and Bath places.',
      stats: { businesses: '280+', monthlySearches: '14K+', competitors: 'Low-Medium', avgCPC: '£1.70' },
      localKeywords: [
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
        { question: 'Do you cover Bathford?', answer: 'Yes. We target Bathford and Bath so you show up when local customers search.' },
        { question: 'Website design in Bathford?', answer: 'Yes. We build fast websites for Bath and North East Somerset businesses. From £399.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Bathford and Bath.' },
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
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Keynsham_Health_Centre_-_geograph.org.uk_-_4733516.jpg/1280px-Keynsham_Health_Centre_-_geograph.org.uk_-_4733516.jpg',
      metaTitle: 'Website design Bitton Keynsham | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Bitton, near Keynsham from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Bitton, near Keynsham',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Bitton is a village between Keynsham and Bristol. Part of the BS30/BS31 area, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Bitton" or "electrician Keynsham". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Keynsham' },
        { value: 'BS30, BS31', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
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
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Bitton, near Keynsham.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
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
        { question: 'Website design in Bitton?', answer: 'Yes. We build fast websites for Keynsham and Bath and North East Somerset businesses. From £399.' },
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
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Keynsham_Health_Centre_-_geograph.org.uk_-_4733516.jpg/1280px-Keynsham_Health_Centre_-_geograph.org.uk_-_4733516.jpg',
      metaTitle: 'Website design Hanham Keynsham | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Hanham, near Keynsham from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Hanham, near Keynsham',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Hanham is a village between Keynsham and Bristol. Part of the BS15/BS30 area, it has strong demand for local trades and services.',
      extendedDescription: 'Customers search "plumber Hanham" or "electrician Keynsham". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Keynsham' },
        { value: 'BS15, BS30', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
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
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Hanham, near Keynsham.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
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
        { question: 'Website design in Hanham?', answer: 'Yes. We build fast websites for Keynsham and Bath and North East Somerset businesses. From £399.' },
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
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Keynsham_Health_Centre_-_geograph.org.uk_-_4733516.jpg/1280px-Keynsham_Health_Centre_-_geograph.org.uk_-_4733516.jpg',
      metaTitle: 'Website design Oldland Keynsham | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Oldland, near Keynsham from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Oldland, near Keynsham',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Oldland is a village near Keynsham and Bitton in the BS30 area. Part of the Keynsham catchment, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Oldland" or "electrician Keynsham". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Keynsham' },
        { value: 'BS30', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
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
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Oldland, near Keynsham.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
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
        { question: 'Website design in Oldland?', answer: 'Yes. We build fast websites for Keynsham and Bath and North East Somerset businesses. From £399.' },
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
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Keynsham_Health_Centre_-_geograph.org.uk_-_4733516.jpg/1280px-Keynsham_Health_Centre_-_geograph.org.uk_-_4733516.jpg',
      metaTitle: 'Website design Longwell Green Keynsham | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Longwell Green, near Keynsham from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Longwell Green, near Keynsham',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Longwell Green is a village near Keynsham and Hanham in the BS30 area. Part of the Keynsham catchment, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Longwell Green" or "electrician Keynsham". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Keynsham' },
        { value: 'BS30', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
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
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Longwell Green, near Keynsham.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
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
        { question: 'Website design in Longwell Green?', answer: 'Yes. We build fast websites for Keynsham and Bath and North East Somerset businesses. From £399.' },
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
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Keynsham_Health_Centre_-_geograph.org.uk_-_4733516.jpg/1280px-Keynsham_Health_Centre_-_geograph.org.uk_-_4733516.jpg',
      metaTitle: 'Website design Warmley Keynsham | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Warmley, near Keynsham from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Warmley, near Keynsham',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Warmley is an area near Keynsham and Hanham in the BS30 area. Part of the Keynsham catchment, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Warmley" or "electrician Keynsham". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Keynsham' },
        { value: 'BS30', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
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
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Warmley, near Keynsham.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
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
        { question: 'Website design in Warmley?', answer: 'Yes. We build fast websites for Keynsham and Bath and North East Somerset businesses. From £399.' },
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
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Midsomer_Norton%2C_the_River_Somer_alongside_the_High_Street_-_geograph.org.uk_-_1987837.jpg',
      metaTitle: 'Website design Clandown Midsomer Norton | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Clandown, near Midsomer Norton from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Clandown, near Midsomer Norton',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Clandown is an area near Midsomer Norton in the Somer Valley. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Clandown" or "electrician Midsomer Norton". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Midsomer Norton' },
        { value: 'BA3', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
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
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Clandown, near Midsomer Norton.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
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
        { question: 'Website design in Clandown?', answer: 'Yes. We build fast websites for Somer Valley and Bath and North East Somerset businesses. From £399.' },
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
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Midsomer_Norton%2C_the_River_Somer_alongside_the_High_Street_-_geograph.org.uk_-_1987837.jpg',
      metaTitle: 'Website design Farrington Gurney Midsomer Norton | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Farrington Gurney, near Midsomer Norton from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Farrington Gurney, near Midsomer Norton',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Farrington Gurney is a village in the Somer Valley, near Midsomer Norton and Paulton. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Farrington Gurney" or "electrician Midsomer Norton". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Midsomer Norton' },
        { value: 'BA3, BS39', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
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
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Farrington Gurney, near Midsomer Norton.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
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
        { question: 'Website design in Farrington Gurney?', answer: 'Yes. We build fast websites for Somer Valley and Bath and North East Somerset businesses. From £399.' },
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
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Radstock_%28Somerset%29_St_Nicholas_Church_-_geograph.org.uk_-_67841.jpg',
      metaTitle: 'Website design Writhlington Radstock | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Writhlington, near Radstock from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Writhlington, near Radstock',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Writhlington is a village near Radstock in the Somer Valley. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Writhlington" or "electrician Radstock". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Radstock' },
        { value: 'BA3', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
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
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Writhlington, near Radstock.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
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
        { question: 'Website design in Writhlington?', answer: 'Yes. We build fast websites for Somer Valley and Bath and North East Somerset businesses. From £399.' },
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
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Radstock_%28Somerset%29_St_Nicholas_Church_-_geograph.org.uk_-_67841.jpg',
      metaTitle: 'Website design Chilcompton Radstock | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Chilcompton, near Radstock from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Chilcompton, near Radstock',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Chilcompton is a village near Radstock in the Somer Valley. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Chilcompton" or "electrician Radstock". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Radstock' },
        { value: 'BA3', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
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
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Chilcompton, near Radstock.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
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
        { question: 'Website design in Chilcompton?', answer: 'Yes. We build fast websites for Somer Valley and Bath and North East Somerset businesses. From £399.' },
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
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bath_And_North_East_Somerset_-_Chew_Magna_Scenery_%28geograph_5442137%29.jpg/1280px-Bath_And_North_East_Somerset_-_Chew_Magna_Scenery_%28geograph_5442137%29.jpg',
      metaTitle: 'Website design Stanton Drew Chew Valley | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Stanton Drew, Chew Valley from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Stanton Drew, Chew Valley',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Stanton Drew is a village in the Chew Valley, known for its stone circle. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Stanton Drew" or "electrician Chew Valley". We get you on the map and on page one.',
      heroStats: [
        { value: 'Chew Valley', label: 'Near Chew Magna' },
        { value: 'BS39', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
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
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Stanton Drew, Chew Valley.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
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
        { question: 'Website design in Stanton Drew?', answer: 'Yes. We build fast websites for Chew Valley and Bath and North East Somerset businesses. From £399.' },
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
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bath_And_North_East_Somerset_-_Chew_Magna_Scenery_%28geograph_5442137%29.jpg/1280px-Bath_And_North_East_Somerset_-_Chew_Magna_Scenery_%28geograph_5442137%29.jpg',
      metaTitle: 'Website design Chew Stoke Chew Valley | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Chew Stoke, Chew Valley from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Chew Stoke, Chew Valley',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Chew Stoke is a village in the Chew Valley, near Chew Magna and Chew Valley Lake. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Chew Stoke" or "electrician Chew Valley". We get you on the map and on page one.',
      heroStats: [
        { value: 'Chew Valley', label: 'Near Chew Magna' },
        { value: 'BS40', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
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
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Chew Stoke, Chew Valley.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
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
        { question: 'Website design in Chew Stoke?', answer: 'Yes. We build fast websites for Chew Valley and Bath and North East Somerset businesses. From £399.' },
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
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bath_And_North_East_Somerset_-_Chew_Magna_Scenery_%28geograph_5442137%29.jpg/1280px-Bath_And_North_East_Somerset_-_Chew_Magna_Scenery_%28geograph_5442137%29.jpg',
      metaTitle: 'Website design Bishop Sutton Chew Valley | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Bishop Sutton, Chew Valley from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Bishop Sutton, Chew Valley',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Bishop Sutton is a village in the Chew Valley, near Chew Magna. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Bishop Sutton" or "electrician Chew Valley". We get you on the map and on page one.',
      heroStats: [
        { value: 'Chew Valley', label: 'Near Chew Magna' },
        { value: 'BS39', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
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
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Bishop Sutton, Chew Valley.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
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
        { question: 'Website design in Bishop Sutton?', answer: 'Yes. We build fast websites for Chew Valley and Bath and North East Somerset businesses. From £399.' },
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
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Paulton_Memorial_Park_-_geograph.org.uk_-_5152197.jpg/1280px-Paulton_Memorial_Park_-_geograph.org.uk_-_5152197.jpg',
      metaTitle: 'Website design High Littleton Paulton | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in High Littleton, near Paulton from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in High Littleton, near Paulton',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'High Littleton is a village in the Cam Valley, near Paulton. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber High Littleton" or "electrician Paulton". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Paulton' },
        { value: 'BS39', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
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
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in High Littleton, near Paulton.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
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
        { question: 'Website design in High Littleton?', answer: 'Yes. We build fast websites for Cam Valley and Bath and North East Somerset businesses. From £399.' },
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
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Paulton_Memorial_Park_-_geograph.org.uk_-_5152197.jpg/1280px-Paulton_Memorial_Park_-_geograph.org.uk_-_5152197.jpg',
      metaTitle: 'Website design Hallatrow Paulton | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Hallatrow, near Paulton from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.',
      heroHeadline: 'Website design in Hallatrow, near Paulton',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Hallatrow is a village in the Cam Valley, near Paulton. Part of Bath and North East Somerset, it has strong demand for local trades.',
      extendedDescription: 'Customers search "plumber Hallatrow" or "electrician Paulton". We get you on the map and on page one.',
      heroStats: [
        { value: 'Near', label: 'Paulton' },
        { value: 'BS39', label: 'Postcode' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
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
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Hallatrow, near Paulton.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack.' },
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
        { question: 'Website design in Hallatrow?', answer: 'Yes. We build fast websites for Cam Valley and Bath and North East Somerset businesses. From £399.' },
      ],
      howItWorks: [
        { title: 'Free check', description: 'We review your website and Google listing.' },
        { title: 'Custom plan', description: 'Tailored for Hallatrow and Paulton.' },
        { title: 'Results', description: 'Monthly updates. More leads.' },
      ],
      testimonial: { label: 'Cam Valley Result', caseTitle: "Green's Cleaning Services, Paulton", result: '+200% bookings', quote: "From zero online presence to first page of Google. Our business has completely transformed.", name: 'Lisa Green', business: "Green's Cleaning Services", businessDisplay: "Green's Cleaning Services • Paulton" },
    },
  };

  const router = useRouter();
  const area = areasData[slug];

  // Local Authority section content (dynamic by slug; uses LANDMARKS_BY_SLUG for 3 landmarks)
  const getLocalAuthorityContent = () => {
    const landmarks = LANDMARKS_BY_SLUG[slug];
    if (slug === 'keynsham') {
      return {
        heading: 'Local Authority & Key Areas',
        paragraphs: [
          'Keynsham sits in Bath and North East Somerset. We help businesses across Keynsham get found on Google — including those in the Chocolate Quarter, on Ashmead Industrial Estate, and across the BS31 postcode.',
          'A professional website and an optimised Google Business Profile help you reach customers searching for your trade or service in these areas.',
        ],
        landmarks: landmarks || ['Chocolate Quarter', 'Ashmead Industrial Estate', 'BS31 postcode'],
      };
    }
    const county = area?.county || 'Bath and North East Somerset';
    const name = area?.name || slug;
    const intro = `${name} is in ${county}. We help businesses in ${name} and the surrounding area get found on Google with website design and local SEO.`;
    return {
      heading: `Local Authority & ${name}`,
      paragraphs: landmarks?.length
        ? [intro, `Key landmarks we reference for local SEO: ${landmarks[0]}, ${landmarks[1]}, and ${landmarks[2]}.`]
        : [intro],
      landmarks: landmarks || [],
    };
  };
  const localAuthority = area ? getLocalAuthorityContent() : null;

  useEffect(() => {
    if (!area) router.replace('/areas');
    else if (rawSlug !== slug) router.replace(`/areas/${slug}`);
  }, [area, rawSlug, slug, router]);

  if (!area) return null;
  if (rawSlug !== slug) return null;

  const parentArea = area.parentSlug ? areasData[area.parentSlug] : null;

  // Generate Schema Markup
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Areas We Serve", "item": `${siteUrl}/areas` },
      ...(parentArea
        ? [
            { "@type": "ListItem", "position": 3, "name": parentArea.name, "item": `${siteUrl}/areas/${area.parentSlug}` },
            { "@type": "ListItem", "position": 4, "name": area.name, "item": `${siteUrl}/areas/${slug}` },
          ]
        : [{ "@type": "ListItem", "position": 3, "name": area.name, "item": `${siteUrl}/areas/${slug}` }]),
    ]
  };

  // areaServed for this area: place + optional postcodes
  const areaServed = [
    {
      "@type": "Place",
      "name": area.name,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": area.county === "Bristol" ? "Bath and North East Somerset" : (area.county || "Bath and North East Somerset")
      }
    },
    ...(Array.isArray(area.postcodes) ? area.postcodes.map((pc) => ({ "@type": "PostalCode", "name": pc, "addressCountry": "GB" })) : [])
  ].filter(Boolean);

  const serviceWebsiteDesignSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/#service-website-design-${slug}`,
    "name": `Website Design in ${area.name}`,
    "description": `Professional website design for businesses in ${area.name}. Fast, mobile-friendly sites from £399 with SEO and Google Business Profile optimisation. Get found on Google in ${area.name}.`,
    "serviceType": "Website Design",
    "provider": { "@id": `${siteUrl}/#localbusiness` },
    "areaServed": areaServed,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Website Design Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "GBP",
            "minPrice": 399,
            "valueAddedTaxIncluded": true
          },
          "url": `${siteUrl}/web-design`
        }
      ]
    }
  };

  const serviceLocalSEOSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/#service-local-seo-${slug}`,
    "name": `Local SEO in ${area.name}`,
    "description": `Local SEO for ${area.name} businesses. Rank higher in Google for local searches: on-page optimisation, Google Business Profile, local links and monthly reporting. Get found when customers search in ${area.name}.`,
    "serviceType": "Local SEO",
    "provider": { "@id": `${siteUrl}/#localbusiness` },
    "areaServed": areaServed,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Local SEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "GBP",
            "price": "From monthly packages",
            "valueAddedTaxIncluded": true
          },
          "url": `${siteUrl}/local-seo`
        }
      ]
    }
  };

  // Area-specific LocalBusiness (ProfessionalService) with address, serviceArea, and geo for "near me" visibility
  const areaGeo = AREA_GEO[slug] || (area.parentSlug && AREA_GEO[area.parentSlug]) || AREA_GEO.keynsham;
  const areaLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteUrl}/#localbusiness-${slug}`,
    "name": "SEO Kings",
    "description": `Website design and local SEO in ${area.name}. We help trades and small businesses in ${area.name} and ${area.county === "Bristol" ? "Bath and North East Somerset" : (area.county || "Bath and North East Somerset")} get found on Google.`,
    "url": siteUrl,
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
        "containedInPlace": { "@type": "AdministrativeArea", "name": area.county === "Bristol" ? "Bath and North East Somerset" : (area.county || "Bath and North East Somerset") }
      }
    ],
    "areaServed": areaServed
  };
  if (slug === 'keynsham' || slug === 'midsomer-norton') {
    areaLocalBusinessSchema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "2",
      "bestRating": "5",
      "worstRating": "1"
    };
    areaLocalBusinessSchema.review = [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Jay" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area. Professional, fast, and it actually works. Would recommend."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Peachy Cleans" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "SEO Kings built our website and got us found across Midsomer Norton, Radstock and Bath. We're now getting regular enquiries from our service areas — couldn't ask for more."
      }
    ];
  }

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

  const schemasForPage = [breadcrumbSchema, serviceWebsiteDesignSchema, serviceLocalSEOSchema, areaLocalBusinessSchema];
  if (faqSchema.mainEntity.length > 0) schemasForPage.push(faqSchema);

  const defaultServices = [
    { name: 'Website Design', description: `Fast, mobile-friendly sites from £399. Our main service in ${area.name}.`, icon: 'desktop' },
    { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack so you get found on Google.', icon: 'map' },
    { name: 'Local SEO', description: `Add-on: rank for "${area.name}" and trade searches.`, icon: 'search' },
    { name: 'Review Management', description: 'Add-on: build trust and credibility with 5★ reviews.', icon: 'star' },
  ];
  const rawServices = area.services
    ? area.services.map((s, i) => ({ ...s, icon: defaultServices[i]?.icon || 'search' }))
    : defaultServices;
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
      <SEO
        title={area.metaTitle || `Website design ${area.name} | Website Designer & SEO Add-ons – SEO Kings`}
        description={area.metaDescription || `Website design in ${area.name}. Our main service from £399. We also offer Google Business Profile and local SEO as add-ons so you get found on Google. Free check.`}
        keywords={`website design ${area.name}, website designer ${area.name}, web design ${area.name}, SEO ${area.name}, local SEO ${area.name}, Google Business Profile ${area.name}, ${area.localKeywords.slice(0, 5).join(', ')}, SEO add-ons ${area.name}`}
        canonical={`/areas/${slug}`}
        geoPlacename={area.name}
        schemas={schemasForPage}
      />

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
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="text-gray-400 hover:text-white transition-colors" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-600" aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/areas" className="text-gray-400 hover:text-white transition-colors" itemProp="item">
                  <span itemProp="name">Areas</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              {parentArea && (
                <>
                  <li className="text-gray-600" aria-hidden="true">/</li>
                  <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <Link href={`/areas/${area.parentSlug}`} className="text-gray-400 hover:text-white transition-colors" itemProp="item">
                      <span itemProp="name">{parentArea.name}</span>
                    </Link>
                    <meta itemProp="position" content="3" />
                  </li>
                </>
              )}
              <li className="text-gray-600" aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="text-primary-light" itemProp="name">{area.name}</span>
                <meta itemProp="position" content={parentArea ? "4" : "3"} />
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
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 btn-glow"
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
                  "{t.quote}"
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

      {/* Intro Paragraphs (optional); Keynsham: merged with Local Authority & Key Areas in same section */}
      {area.introParagraphs && area.introParagraphs.length > 0 && (
        <section className="py-12 bg-dark-lighter">
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${area.introImage ? 'grid lg:grid-cols-2 gap-10 items-center' : 'max-w-4xl'}`}>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              {area.introParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
              {/* Keynsham: merge Local Authority & Key Areas (Chocolate Quarter, Ashmead, BS31) into this section */}
              {slug === 'keynsham' && localAuthority && (
                <>
                  <h2 id="local-authority-heading" className="text-2xl font-bold text-white mt-8 mb-4 pt-6 border-t border-white/10">
                    {localAuthority.heading}
                  </h2>
                  {localAuthority.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </>
              )}
            </div>
            {area.introImage && (
              <div>
                <Image src={area.introImage.src} alt={area.introImage.alt} width={800} height={450} loading="lazy" className="rounded-xl border border-white/10 object-cover w-full h-64 sm:h-72" />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Local Authority section — for non-Keynsham areas; Keynsham content is merged above */}
      {localAuthority && slug !== 'keynsham' && (
        <section className="py-12 bg-dark-lighter" aria-labelledby="local-authority-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="local-authority-heading" className="text-2xl font-bold text-white mb-6">
              {localAuthority.heading}
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              {localAuthority.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why SEO in [Area] Section */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
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
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
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

      {/* Optional: Why SEO Kings for [Area] + Recent projects (E-E-A-T) */}
      {area.extraContentSection && (
        <section className="py-16" aria-labelledby="extra-content-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={area.extraContentSection.image ? 'grid lg:grid-cols-2 gap-10 lg:gap-12 items-start mb-10' : 'max-w-3xl mb-10'}>
              <div>
                <h2 id="extra-content-heading" className="text-3xl font-bold text-white mb-2">
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-dark-card border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
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
      <section className="py-16 bg-dark-lighter">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${area.websiteDesignSectionImage ? 'grid lg:grid-cols-2 gap-12 items-center' : 'max-w-4xl'}`}>
          {area.websiteDesignSectionImage && (
            <div className="order-2 lg:order-1">
              <Image src={area.websiteDesignSectionImage.src} alt={area.websiteDesignSectionImage.alt} width={800} height={356} loading="lazy" className="rounded-xl border border-white/10 object-cover w-full h-72 lg:h-80" />
            </div>
          )}
          <div className={area.websiteDesignSectionImage ? 'order-1 lg:order-2' : ''}>
          <h2 className="text-3xl font-bold text-white mb-4">
            Website designer & website design in {area.name}
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            We build fast, mobile-friendly websites for {area.name} businesses — from one-page sites to full multi-page sites. Every site we build is set up for local search so you get found on Google and in the map pack. If you need a new site or your current one is slow or outdated, we can help. Get a free quote from a professional website designer in {area.name}. We also offer <Link href="/google-business-profile" className="text-primary-light hover:text-white underline">Google Business Profile</Link> and <Link href="/local-seo" className="text-primary-light hover:text-white underline">Local SEO</Link> as add-ons.
          </p>
          <Link
            href="/web-design"
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
        <section className="py-16">
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${area.costSectionImage ? 'grid lg:grid-cols-2 gap-12 items-start' : 'max-w-4xl'}`}>
            {area.costSectionImage && (
              <div>
                <Image src={area.costSectionImage.src} alt={area.costSectionImage.alt} width={600} height={384} loading="lazy" className="rounded-xl border border-white/10 object-cover w-full h-64 lg:sticky lg:top-24" />
              </div>
            )}
            <div>
            <h2 className="text-3xl font-bold text-white mb-4">
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
        <section className="py-16 bg-dark-lighter">
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${area.whatToLookForSectionImage ? 'grid lg:grid-cols-2 gap-10 items-start' : 'max-w-4xl'}`}>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
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

      {/* Local Keywords Section */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-12 items-center ${area.keywordsSectionImage ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {area.keywordsHeading || `Keywords We Target in ${area.name}`}
              </h2>
              <p className="text-gray-400 mb-6">
                {area.keywordsIntro || `We help you rank for the search terms your potential customers are actually using to find services in ${area.name}. These high-intent local keywords drive qualified leads directly to your business.`}
              </p>
              <div className="flex flex-wrap gap-3">
                {area.localKeywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-primary/30 transition-all"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {area.keywordsSectionImage && (
              <div className="hidden lg:block">
                <Image src={area.keywordsSectionImage.src} alt={area.keywordsSectionImage.alt} width={600} height={384} loading="lazy" className="rounded-xl border border-white/10 object-cover w-full h-64" />
              </div>
            )}

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

      {/* FAQ Section — FAQPage schema for People Also Ask rich results */}
      <section id="faq" className="py-16" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl font-bold text-white mb-4">
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
        <section className="py-16 bg-dark-lighter">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                How It Works in {area.name}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Three simple steps:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {area.howItWorks.map((step, idx) => (
                <div key={idx} className="bg-dark-card border border-white/5 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 text-white font-bold">
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
        <section className="py-16 bg-dark-lighter">
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
      <section className="py-16 bg-dark-lighter">
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
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 btn-glow text-center shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
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
