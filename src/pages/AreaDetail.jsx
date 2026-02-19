'use client';
import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';

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
        label: 'Real Result',
        caseTitle: 'Mitchell Plumbing, Bath',
        quote: "SEO Kings helped us rank #1 for 'plumber Bath' within 4 months. We've had to hire two more staff to handle the enquiries!",
        name: 'Dave Mitchell',
        business: 'Mitchell Plumbing',
        result: '+340% enquiries',
      },
      howItWorks: [
        { title: 'Free audit', description: 'We check your rankings, site, and Google profile.' },
        { title: 'Custom plan', description: "Tailored for Bath's tourism and local market." },
        { title: 'Results', description: 'Monthly reports. Watch leads grow.' },
      ],
      localKeywords: [
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
      ctaPrimaryText: 'Get Your Free SEO Audit Today',
      ctaSecondaryText: 'Free Consultation – Get Started',
      nearbyHeading: 'Nearby Areas We Serve',
      nearbyAreas: ['keynsham', 'midsomer-norton', 'radstock', 'peasedown-st-john', 'paulton', 'saltford', 'timsbury'],
      subAreaSlugs: ['odd-down-bath', 'combe-down-bath', 'widcombe-bath', 'larkhall-bath', 'twerton-bath'],
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
      population: '16,000+',
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Keynsham_Health_Centre_-_geograph.org.uk_-_4733516.jpg/1280px-Keynsham_Health_Centre_-_geograph.org.uk_-_4733516.jpg',
      metaTitle: 'Website design Keynsham | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Keynsham from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Keynsham',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'We help tradespeople and small businesses in Keynsham rank higher on Google and win more local jobs — guaranteed results.',
      extendedDescription: 'Trusted by plumbers, electricians, builders, roofers, and more in Keynsham and Bath and North East Somerset.',
      heroStats: [
        { value: '150+', label: 'Local Businesses Ranked' },
        { value: '#1', label: 'Bath & North East Somerset SEO Agency' },
        { value: '5★', label: 'Google Rating' },
        { value: '+340%', label: 'Average Lead Increase' },
      ],
      ctaButtonText: 'Get Your Free Audit Today',
      heroSubtext: 'No obligation. No credit card required.',
      introParagraphs: [
        'Keynsham is a busy market town with thousands of local homes and businesses. Customers search Google for plumbers, electricians, builders, and other trades right here in BS31.',
        'Most trades miss out because they don\'t show up on page 1 or in the map pack. We fix that.',
        'We use local SEO to get your business found first — more calls, more jobs, more money in your pocket.',
      ],
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
        label: 'Real Results in Keynsham',
        caseTitle: 'Keynsham Electrics (BS31)',
        resultSummary: 'Not ranking → Top 3 on Google',
        result: '+52 Calls per month',
        timeframe: '3 months',
        quote: "Within 3 months I was on the first page of Google. Brilliant service. They explained everything in plain English.",
        name: 'Sarah Thompson',
        business: 'Thompson Electrical',
        businessDisplay: 'Thompson Electrical • Keynsham',
      },
      howItWorks: [
        { title: 'Free Audit', description: 'We check your Google rankings, site, and Google Business Profile. We spot what\'s holding you back in Keynsham searches.' },
        { title: 'Custom Strategy', description: 'We build a plan for your trade and your area. No cookie-cutter stuff.' },
        { title: 'Watch the Leads Roll In', description: 'We do the work. You get monthly updates and more customers.' },
      ],
      industries: ['Retail', 'Professional Services', 'Trades', 'Food & Drink', 'Healthcare'],
      landmarks: ['Keynsham High Street', 'Keynsham Memorial Park', 'Cadbury Factory Site', 'St John the Baptist Church'],
      stats: {
        businesses: '800+',
        monthlySearches: '85K+',
        competitors: 'Medium',
        avgCPC: '£1.80',
      },
      localKeywords: [
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
      ctaSecondaryText: 'Get a Free Consultation',
      ctaDisclaimer: 'No obligation. No credit card needed. Just real help for your Keynsham business.',
      nearbyAreas: ['bath', 'saltford', 'paulton'],
      subAreaSlugs: ['bitton-keynsham', 'hanham-keynsham', 'oldland-keynsham'],
      subAreasHeading: 'Areas near Keynsham we cover',
      faqs: [
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
      metaTitle: 'Website design Midsomer Norton | Website Designer & SEO Add-ons – SEO Kings',
      metaDescription: 'Website design in Midsomer Norton from £399. Our main service. We also offer Google Business Profile and local SEO as add-ons so trades get found on Google. Free check.',
      heroHeadline: 'Website design in Midsomer Norton',
      heroSubhead: 'From £399. We also offer SEO add-ons so you get found on Google.',
      description: 'Midsomer Norton is a historic market town in the Somer Valley. With around 11,000 residents and a strong community, local trades get steady work from nearby homes and villages.',
      extendedDescription: 'Customers search Google for "plumber Midsomer Norton" or "electrician Midsomer Norton". We get you to the top — fast.',
      heroStats: [
        { value: '11,000+', label: 'Residents' },
        { value: 'Low-Medium', label: 'Competition' },
        { value: 'Proven', label: 'in Bath & North East Somerset' },
        { value: '5★', label: 'Rated' },
      ],
      stats: {
        businesses: '500+',
        monthlySearches: '45K+',
        competitors: 'Low-Medium',
        avgCPC: '£1.50',
      },
      ctaButtonText: 'Get Free Audit – No Obligation',
      whyIntro: 'People in Midsomer Norton and the Somer Valley prefer local services. If you\'re not on page 1 or in the Google map pack, you miss jobs.',
      whyBullets: [
        { title: 'Busy market town', text: 'Serves surrounding villages like Radstock and Westfield.' },
        { title: 'Lower competition', text: 'Easier to dominate local searches than in big cities.' },
        { title: 'High returns', text: 'Organic rankings beat paid ads for long-term leads.' },
      ],
      services: [
        { name: 'Website Design', description: 'Fast, mobile-friendly sites from £399. Our main service in Midsomer Norton.' },
        { name: 'Google Business Profile', description: 'Add-on: get on the map and in the pack with reviews and updates.' },
        { name: 'Local SEO', description: 'Add-on: rank for Midsomer Norton + trade keywords.' },
        { name: 'Review Management', description: 'Add-on: build 5-star trust quickly.' },
      ],
      servicesHeading: 'Website design in Midsomer Norton — with SEO add-ons',
      servicesSubtext: 'Our main service is website design. We also offer Google Business Profile and local SEO as add-ons so you get found on Google.',
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We go after what Midsomer Norton customers search every day:',
      industriesHeading: 'Industries We Help',
      industries: ['Trades', 'Retail', 'Professional Services', 'Hospitality', 'Manufacturing'],
      landmarksHeading: 'Local Landmarks We Use',
      landmarksIntro: 'We include real Midsomer Norton places in your content for better local relevance:',
      landmarks: ['The Island', 'Midsomer Norton High Street', 'Welton Manor', 'Somer Valley FM', 'Somerset & Dorset Railway Heritage Trust'],
      testimonial: {
        label: 'Real Result',
        caseTitle: 'Williams Roofing, Midsomer Norton',
        quote: "Best investment we've made. We now dominate local search and our Google reviews have increased significantly.",
        name: 'Mark Williams',
        business: 'Williams Roofing',
        result: '£180K in new contracts',
      },
      howItWorks: [
        { title: 'Free audit', description: 'We review your rankings, site, and Google profile.' },
        { title: 'Custom plan', description: 'Built for your trade and Midsomer Norton area.' },
        { title: 'Results', description: 'Monthly reports. Watch leads grow.' },
      ],
      localKeywords: [
        'plumber Midsomer Norton',
        'electrician Midsomer Norton',
        'builder Midsomer Norton',
        'roofer Midsomer Norton',
        'decorator Midsomer Norton',
        'handyman Midsomer Norton',
        'emergency plumber Midsomer Norton',
        'garage services Midsomer Norton',
        'boiler repair Midsomer Norton',
      ],
      ctaHeadline: 'Ready to Dominate Midsomer Norton Search Results?',
      ctaSubhead: 'Join other local trades already ranking high.',
      ctaPrimaryText: 'Get Your Free SEO Audit Today',
      ctaSecondaryText: 'Free Consultation – Get Started',
      nearbyHeading: 'Nearby Areas We Serve',
      nearbyAreas: ['radstock', 'peasedown-st-john', 'bath', 'keynsham', 'paulton'],
      subAreaSlugs: ['clandon-midsomer-norton', 'farrington-gurney-midsomer-norton'],
      subAreasHeading: 'Areas near Midsomer Norton we cover',
      faqs: [
        {
          question: 'Is SEO worth it for a small Midsomer Norton business?',
          answer: 'Yes. Smaller towns like Midsomer Norton have lower competition. A good local setup can quickly put you at the top and bring steady jobs.',
        },
        {
          question: 'How do you target Midsomer Norton specifically?',
          answer: 'We use local keywords, optimise your Google Business Profile, build citations in Bath and North East Somerset directories, and earn links from nearby sites.',
        },
        {
          question: 'Can I target Midsomer Norton and nearby towns like Radstock?',
          answer: 'Yes. Many trades serve both. We optimise for multiple locations to cover the whole Somer Valley.',
        },
        {
          question: "What's included in your Midsomer Norton SEO package?",
          answer: 'Keyword research, on-page fixes, Google Business Profile management, local citations, review help, monthly reports, and ongoing tweaks.',
        },
      ],
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
      servicesLinkText: 'View All Services',
      keywordsHeading: 'Keywords We Target',
      keywordsIntro: 'We focus on what people in Peasedown actually search:',
      industriesHeading: 'Industries We Help',
      landmarksHeading: 'Local Landmarks We Use',
      landmarksIntro: 'We reference real places in your content to boost relevance:',
      localKeywords: [
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
      ctaPrimaryText: 'Get Your Free SEO Audit Today',
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
      ctaPrimaryText: 'Get Your Free SEO Audit Today',
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
      ctaPrimaryText: 'Get Your Free SEO Audit Today',
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
      ctaPrimaryText: 'Get Your Free SEO Audit Today',
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
      ctaPrimaryText: 'Get Your Free SEO Audit Today',
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
      ctaPrimaryText: 'Get Your Free SEO Audit Today',
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
        'plumber Temple Cloud',
        'electrician Temple Cloud',
        'builder Temple Cloud',
        'handyman Temple Cloud',
        'emergency plumber Temple Cloud',
        'boiler repair Temple Cloud',
      ],
      ctaHeadline: 'Ready to Dominate Temple Cloud Search Results?',
      ctaSubhead: 'Join local trades already ranking high.',
      ctaPrimaryText: 'Get Your Free SEO Audit Today',
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
      ctaPrimaryText: 'Get Your Free SEO Audit Today',
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
      testimonial: { label: 'Real Result', caseTitle: 'Mitchell Plumbing, Bath', quote: "SEO Kings helped us rank #1 for 'plumber Bath' within 4 months. We've had to hire two more staff to handle the enquiries!", name: 'Dave Mitchell', business: 'Mitchell Plumbing', result: '+340% enquiries' },
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
      testimonial: { label: 'Real Result', caseTitle: 'Mitchell Plumbing, Bath', quote: "SEO Kings helped us rank #1 for 'plumber Bath' within 4 months. We've had to hire two more staff to handle the enquiries!", name: 'Dave Mitchell', business: 'Mitchell Plumbing', result: '+340% enquiries' },
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
      testimonial: { label: 'Real Result', caseTitle: 'Mitchell Plumbing, Bath', quote: "SEO Kings helped us rank #1 for 'plumber Bath' within 4 months. We've had to hire two more staff to handle the enquiries!", name: 'Dave Mitchell', business: 'Mitchell Plumbing', result: '+340% enquiries' },
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
      testimonial: { label: 'Real Result', caseTitle: 'Mitchell Plumbing, Bath', quote: "SEO Kings helped us rank #1 for 'plumber Bath' within 4 months. We've had to hire two more staff to handle the enquiries!", name: 'Dave Mitchell', business: 'Mitchell Plumbing', result: '+340% enquiries' },
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
      testimonial: { label: 'Real Result', caseTitle: 'Mitchell Plumbing, Bath', quote: "SEO Kings helped us rank #1 for 'plumber Bath' within 4 months. We've had to hire two more staff to handle the enquiries!", name: 'Dave Mitchell', business: 'Mitchell Plumbing', result: '+340% enquiries' },
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
      testimonial: { label: 'Real Results in Keynsham', caseTitle: 'Keynsham Electrics (BS31)', result: '+52 Calls per month', quote: "Within 3 months I was on the first page of Google. Brilliant service. They explained everything in plain English.", name: 'Sarah Thompson', business: 'Thompson Electrical', businessDisplay: 'Thompson Electrical • Keynsham' },
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
      testimonial: { label: 'Real Results in Keynsham', caseTitle: 'Keynsham Electrics (BS31)', result: '+52 Calls per month', quote: "Within 3 months I was on the first page of Google. Brilliant service. They explained everything in plain English.", name: 'Sarah Thompson', business: 'Thompson Electrical', businessDisplay: 'Thompson Electrical • Keynsham' },
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
      testimonial: { label: 'Real Results in Keynsham', caseTitle: 'Keynsham Electrics (BS31)', result: '+52 Calls per month', quote: "Within 3 months I was on the first page of Google. Brilliant service. They explained everything in plain English.", name: 'Sarah Thompson', business: 'Thompson Electrical', businessDisplay: 'Thompson Electrical • Keynsham' },
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Local SEO Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "SEO Kings",
      "telephone": "07702 264 921"
    },
    "areaServed": {
      "@type": "City",
      "name": area.name,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Bath and North East Somerset"
      }
    },
    "description": `Professional local SEO services for businesses in ${area.name}. We help local tradespeople and businesses rank higher on Google.`,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "GBP"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": area.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

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
        schemas={[breadcrumbSchema, serviceSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={area.heroImage}
            alt={`${area.name} - Website design and SEO add-ons`}
            className="w-full h-full object-cover opacity-20"
            loading="eager"
            decoding="async"
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

            {/* Testimonial Card */}
            <div className="bg-dark-card border border-white/10 rounded-2xl p-8">
              {area.testimonial.label && (
                <div className="text-sm font-semibold text-primary-light mb-2">{area.testimonial.label}</div>
              )}
              {area.testimonial.caseTitle && (
                <div className="text-base font-semibold text-white mb-4">{area.testimonial.caseTitle}</div>
              )}
              <div className="flex items-center gap-2 mb-4" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">
                "{area.testimonial.quote}"
              </blockquote>
              {(area.testimonial.resultSummary || area.testimonial.timeframe) && (
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  {area.testimonial.resultSummary && (
                    <span className="text-green-400 font-semibold">{area.testimonial.resultSummary}</span>
                  )}
                  {area.testimonial.timeframe && (
                    <span className="text-gray-400">Timeframe: {area.testimonial.timeframe}</span>
                  )}
                </div>
              )}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{area.testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {area.testimonial.businessDisplay || `${area.testimonial.business}, ${area.name}`}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-bold">{area.testimonial.result}</div>
                  <div className="text-xs text-gray-500">Results achieved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Paragraphs (optional) */}
      {area.introParagraphs && area.introParagraphs.length > 0 && (
        <section className="py-12 bg-dark-lighter">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 text-gray-400 leading-relaxed">
              {area.introParagraphs.map((para, idx) => (
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Website designer & website design in {area.name}
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            We build fast, mobile-friendly websites for {area.name} businesses — from one-page sites to full multi-page sites. Every site we build is set up for local search so you get found on Google and in the map pack. If you need a new site or your current one is slow or outdated, we can help. Get a free quote from a professional website designer in {area.name}.
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
        </div>
      </section>

      {/* Local Keywords Section */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions About SEO in {area.name}
            </h2>
            <p className="text-gray-400">
              Common questions from {area.name} businesses about our local SEO services.
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {area.ctaHeadline || `Ready to Dominate ${area.name} Search Results?`}
          </h2>
          <p className="text-gray-400 mb-8">
            {area.ctaSubhead || `Join the ${area.name} businesses already ranking on page one of Google. Get your free SEO audit today and see exactly how we can help you grow.`}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 btn-glow"
            >
              {area.ctaPrimaryText || `Get Your Free ${area.name} SEO Audit`}
            </Link>
            <a
              href="tel:07702264921"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              aria-label="Call SEO Kings on 07702 264 921"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {area.ctaSecondaryText || '07702 264 921'}
            </a>
          </div>
          {area.ctaDisclaimer && (
            <p className="mt-6 text-sm text-gray-500 max-w-xl mx-auto">
              {area.ctaDisclaimer}
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default AreaDetail;
