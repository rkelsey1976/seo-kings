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
      heroImage: 'https://images.unsplash.com/photo-1589996448606-27d38d70f566?w=1200&h=600&fit=crop&auto=format&q=80',
      metaTitle: 'Local SEO Bath | Trades & Businesses in Bath & BANES – SEO Kings',
      metaDescription: 'Get more customers in Bath. We help plumbers, electricians, builders, roofers, hospitality, and trades rank higher on Google. We also offer website design in Bath. Free SEO audit today.',
      heroHeadline: 'Local SEO in Bath',
      heroSubhead: 'More Calls. More Jobs. From Google.',
      description: 'Bath is a historic city famous for Roman Baths and Georgian architecture. Home to around 95,000–100,000 residents plus over 6 million visitors each year.',
      extendedDescription: 'This creates huge demand for local services — from plumbers fixing tourist rentals to builders on new developments. Customers search Google for "plumber Bath" or "electrician Bath". We get you to the top.',
      heroStats: [
        { value: '95,000+', label: 'Residents' },
        { value: 'High', label: 'Competition' },
        { value: 'Proven', label: 'in BANES' },
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
        { name: 'Local SEO', description: 'Rank for Bath + trade keywords.' },
        { name: 'Google Business Profile', description: 'Dominate the map pack with reviews and posts.' },
        { name: 'Fast Website Design', description: 'Mobile sites that convert visitors into customers.' },
        { name: 'Review Management', description: 'Build 5-star trust quickly.' },
      ],
      servicesHeading: 'Our Services in Bath',
      servicesSubtext: 'We handle everything to win Bath searches.',
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
          answer: 'Packages start from £500/month. Depends on competition and goals. Free audit for custom quote.',
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
      heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop&auto=format&q=80',
      metaTitle: 'Local SEO Keynsham | More Customers for Trades in Keynsham – SEO Kings',
      metaDescription: 'Get more Google calls in Keynsham. We help plumbers, electricians, builders and local trades rank higher. We also offer website design in Keynsham. Free audit. No obligation.',
      heroHeadline: 'Local SEO Keynsham',
      heroSubhead: 'Get More Customers From Google in Keynsham',
      description: 'We help tradespeople and small businesses in Keynsham rank higher on Google and win more local jobs — guaranteed results.',
      extendedDescription: 'Trusted by plumbers, electricians, builders, roofers, and more in Keynsham and BANES.',
      heroStats: [
        { value: '150+', label: 'Local Businesses Ranked' },
        { value: '#1', label: 'BANES SEO Agency' },
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
      servicesHeading: 'Our Local SEO Services for Keynsham Trades',
      servicesSubtext: 'We get you found when customers search in Keynsham.',
      services: [
        { name: 'Keyword research', description: 'Find the exact terms Keynsham people use (e.g. "local plumber Keynsham emergency").' },
        { name: 'On-page optimisation', description: 'Make your site fast, mobile-friendly, and Google-ready.' },
        { name: 'Local link building', description: 'Get trusted mentions from Keynsham and BANES sites.' },
        { name: 'Google Business Profile domination', description: 'More views, calls, and map pack wins.' },
        { name: 'Monthly reporting', description: 'Clear numbers. See your leads grow.' },
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
      heroImage: 'https://images.unsplash.com/photo-1517030330234-94c4fb948ebc?w=1200&h=600&fit=crop&auto=format&q=80',
      metaTitle: 'Local SEO Midsomer Norton | Trades & Businesses – SEO Kings',
      metaDescription: 'Get more local jobs in Midsomer Norton. We help plumbers, electricians, roofers, builders and trades rank higher on Google. We also offer website design in Midsomer Norton. Free SEO audit today.',
      heroHeadline: 'Local SEO in Midsomer Norton',
      heroSubhead: 'More Customers. More Calls. From Google.',
      description: 'Midsomer Norton is a historic market town in the Somer Valley. With around 11,000 residents and a strong community, local trades get steady work from nearby homes and villages.',
      extendedDescription: 'Customers search Google for "plumber Midsomer Norton" or "electrician Midsomer Norton". We get you to the top — fast.',
      heroStats: [
        { value: '11,000+', label: 'Residents' },
        { value: 'Low-Medium', label: 'Competition' },
        { value: 'Proven', label: 'in BANES' },
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
        { name: 'Local SEO', description: 'Rank for Midsomer Norton + trade keywords.' },
        { name: 'Google Business Profile', description: 'Dominate the map pack with reviews and updates.' },
        { name: 'Fast Website Design', description: 'Mobile sites that turn visitors into customers.' },
        { name: 'Review Management', description: 'Build 5-star trust quickly.' },
      ],
      servicesHeading: 'Our Services in Midsomer Norton',
      servicesSubtext: 'We handle everything to win local searches.',
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
      faqs: [
        {
          question: 'Is SEO worth it for a small Midsomer Norton business?',
          answer: 'Yes. Smaller towns like Midsomer Norton have lower competition. A good local setup can quickly put you at the top and bring steady jobs.',
        },
        {
          question: 'How do you target Midsomer Norton specifically?',
          answer: 'We use local keywords, optimise your Google Business Profile, build citations in BANES directories, and earn links from nearby sites.',
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
      heroImage: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&h=600&fit=crop&auto=format&q=80',
      metaTitle: 'Local SEO Radstock | Trades & Businesses – SEO Kings',
      metaDescription: 'Get more local customers in Radstock. We help plumbers, electricians, builders and trades rank higher on Google. We also offer website design in Radstock. Free SEO audit today.',
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
      nearbyAreas: ['midsomer-norton', 'paulton', 'peasedown-st-john'],
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
    },
    'peasedown-st-john': {
      name: 'Peasedown St John',
      fullName: 'Peasedown St John, Somerset',
      county: 'Somerset',
      postcodes: ['BA2'],
      population: '6,500+',
      heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop&auto=format&q=80',
      metaTitle: 'Local SEO Peasedown St John | Trades & Businesses – SEO Kings',
      metaDescription: 'Get more local customers in Peasedown St John. We help plumbers, electricians, builders and trades rank higher on Google. We also offer website design in Peasedown St John. Free SEO audit today.',
      heroHeadline: 'Local SEO in Peasedown St John',
      heroSubhead: 'More Calls. More Jobs. From Google.',
      description: 'Peasedown St John is a growing village just south of Bath. New homes mean more people need local trades. Plumbers, electricians, builders – customers search Google right here.',
      extendedDescription: 'We get you found first.',
      industries: ['Trades', 'Retail', 'Services', 'Childcare'],
      landmarks: ['Beacon Hall', 'St John the Baptist Church', 'Peasedown St John Primary School', 'Eckweek Lane play areas'],
      heroStats: [
        { value: '6,500+', label: 'Residents' },
        { value: 'Low', label: 'Competition' },
        { value: 'Proven Results', label: 'in BANES' },
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
      servicesHeading: 'Our Services in Peasedown St John',
      servicesSubtext: 'We cover everything to dominate local search.',
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
      heroImage: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1200&h=600&fit=crop&auto=format&q=80',
      metaTitle: 'Local SEO Paulton | Trades & Small Businesses – SEO Kings',
      metaDescription: 'More local customers in Paulton. We help plumbers, electricians, cleaners, builders and trades rank higher on Google. We also offer website design in Paulton. Free SEO audit today.',
      heroHeadline: 'Local SEO in Paulton',
      heroSubhead: 'More Calls. More Jobs. From Google.',
      description: 'Paulton is a friendly village in the Cam Valley with about 5,300–6,500 residents. Well-connected to Bath and nearby towns. Businesses here serve locals plus visitors to the area (including nearby Paultons Park).',
      extendedDescription: 'Customers search Google for "plumber Paulton" or "cleaner Paulton". We get you found first.',
      heroStats: [
        { value: '5,300+', label: 'Residents' },
        { value: 'Low', label: 'Competition' },
        { value: 'Proven', label: 'in BANES' },
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
      servicesHeading: 'Our Services in Paulton',
      servicesSubtext: 'We cover what you need to win local searches.',
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
          answer: "We're local to BANES. We know Paulton customers and use tailored strategies — not generic ones.",
        },
      ],
    },
    'saltford': {
      name: 'Saltford',
      fullName: 'Saltford, Bristol',
      county: 'Bristol',
      postcodes: ['BS31'],
      population: '5,000+',
      heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&auto=format&q=80',
      metaTitle: 'Local SEO Saltford | Trades & Businesses – SEO Kings',
      metaDescription: 'Get more local customers in Saltford. We help plumbers, electricians, builders, decorators, and trades rank higher on Google. We also offer website design in Saltford. Free SEO audit today.',
      heroHeadline: 'Local SEO in Saltford',
      heroSubhead: 'More Calls. More Jobs. From Google.',
      description: 'Saltford is a picturesque riverside village on the River Avon, between Bath and Bristol. About 5,000–6,000 residents enjoy an affluent community and scenic setting.',
      extendedDescription: 'Local trades serve both villagers and visitors drawn to historic spots like Saltford Manor (England\'s oldest continuously inhabited house). Customers search Google for "plumber Saltford" or "electrician Saltford". We get you to the top spots.',
      heroStats: [
        { value: '5,000+', label: 'Residents' },
        { value: 'Low', label: 'Competition' },
        { value: 'Proven', label: 'in BANES' },
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
      servicesHeading: 'Our Services in Saltford',
      servicesSubtext: 'We handle everything to win local searches.',
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
      heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=600&fit=crop&auto=format&q=80',
      metaTitle: 'Local SEO Timsbury | Trades & Small Businesses – SEO Kings',
      metaDescription: 'Get more local jobs in Timsbury. We help builders, plumbers, electricians, gardeners, and trades rank higher on Google. We also offer website design in Timsbury. Free SEO audit today.',
      heroHeadline: 'Local SEO in Timsbury',
      heroSubhead: 'More Calls. More Jobs. From Google.',
      description: 'Timsbury is a charming rural village near Paulton and Midsomer Norton. Around 2,600 residents enjoy a close-knit community and peaceful setting.',
      extendedDescription: 'Local trades benefit from strong word-of-mouth plus growing online searches. Customers search Google for "builder Timsbury" or "plumber Timsbury". We get you found first.',
      heroStats: [
        { value: '2,600+', label: 'Residents' },
        { value: 'Very Low', label: 'Competition' },
        { value: 'Proven', label: 'in BANES' },
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
      servicesHeading: 'Our Services in Timsbury',
      servicesSubtext: 'We cover everything to dominate local searches.',
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
  };

  const router = useRouter();
  const area = areasData[slug];

  useEffect(() => {
    if (!area) router.replace('/areas');
    else if (rawSlug !== slug) router.replace(`/areas/${slug}`);
  }, [area, rawSlug, slug, router]);

  if (!area) return null;
  if (rawSlug !== slug) return null;

  // Generate Schema Markup
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Areas We Serve",
        "item": `${siteUrl}/areas`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": area.name,
        "item": `${siteUrl}/areas/${slug}`
      }
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
    { name: 'Local SEO', description: `Rank higher for "${area.name}" searches`, icon: 'search' },
    { name: 'Google Business Profile', description: 'Dominate the local map pack', icon: 'map' },
    { name: 'Website Design', description: 'Convert visitors into customers', icon: 'desktop' },
    { name: 'Review Management', description: 'Build trust and credibility', icon: 'star' },
  ];
  const services = area.services
    ? area.services.map((s, i) => ({ ...s, icon: defaultServices[i]?.icon || 'search' }))
    : defaultServices;

  return (
    <>
      <SEO
        title={area.metaTitle || `Local SEO in ${area.name} | SEO Kings`}
        description={area.metaDescription || `Local SEO in ${area.name}. We help ${area.name} businesses rank higher on Google and get more customers. Free audit.`}
        keywords={`SEO ${area.name}, local SEO ${area.name}, website design ${area.name}, web design ${area.name}, Google ranking ${area.name}, ${area.localKeywords.slice(0, 5).join(', ')}, digital marketing ${area.name}, SEO agency ${area.name}`}
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
            alt={`${area.name} - Local SEO services`}
            className="w-full h-full object-cover opacity-20"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
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
              <li className="text-gray-600" aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="text-primary-light" itemProp="name">{area.name}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <svg className="w-4 h-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-sm text-primary-light font-medium">{area.postcodes.join(', ')} • {area.county}</span>
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
                    SEO Services in<br />
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
              {area.servicesHeading || `Our SEO Services in ${area.name}`}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {area.servicesSubtext || `Everything you need to dominate local search results and attract more customers in ${area.name}.`}
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
            Website design in {area.name}
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            We build fast, mobile-friendly websites for {area.name} businesses — from one-page sites to full multi-page sites. Every site we build is set up for local search so you get found on Google and in the map pack. If you need a new site or your current one is slow or outdated, we can help. Get a free quote for web design in {area.name}.
          </p>
          <Link
            href="/web-design"
            className="inline-flex items-center gap-2 text-primary-light hover:text-white font-semibold transition-colors"
          >
            Website design {area.name}
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
