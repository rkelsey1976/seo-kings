import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';

const AreaDetail = () => {
  const { slug } = useParams();
  const siteUrl = 'https://seokings.co.uk';

  const areasData = {
    'bath': {
      name: 'Bath',
      fullName: 'Bath, Somerset',
      county: 'Somerset',
      postcodes: ['BA1', 'BA2'],
      population: '90,000+',
      heroImage: 'https://images.unsplash.com/photo-1589996448606-27d38d70f566?w=1200&h=600&fit=crop&auto=format&q=80',
      description: 'Bath is a historic city known for its Roman-built baths and stunning Georgian architecture. As the largest city in BANES, it\'s home to thousands of local businesses competing for visibility on Google.',
      extendedDescription: 'As one of the UK\'s most visited cities, Bath presents unique opportunities for local businesses to capture search traffic from both residents and tourists. With over 6 million visitors annually and a thriving local economy, ranking on Google in Bath can transform your business.',
      industries: ['Tourism & Hospitality', 'Professional Services', 'Retail', 'Health & Wellness', 'Education', 'Construction'],
      landmarks: ['Roman Baths', 'Bath Abbey', 'Royal Crescent', 'Pulteney Bridge', 'Thermae Bath Spa'],
      stats: {
        businesses: '5,000+',
        monthlySearches: '450K+',
        competitors: 'High',
        avgCPC: '£2.50',
      },
      testimonial: {
        quote: "SEO Kings helped us rank #1 for 'plumber Bath' within 4 months. We've had to hire two more staff to handle the enquiries!",
        name: 'Dave Mitchell',
        business: 'Mitchell Plumbing',
        result: '+340% enquiries',
      },
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
      ],
      nearbyAreas: ['keynsham', 'saltford', 'peasedown-st-john'],
      faqs: [
        {
          question: 'How long does it take to rank on Google in Bath?',
          answer: 'Typically, we see significant ranking improvements within 3-6 months for Bath businesses. Due to higher competition in Bath compared to surrounding areas, some highly competitive keywords may take longer. We provide monthly progress reports so you can track your improvement.',
        },
        {
          question: 'What SEO services do you offer in Bath?',
          answer: 'We offer comprehensive local SEO services including Google Business Profile optimisation, website SEO, local citation building, review management, and content creation specifically targeted at Bath and surrounding areas.',
        },
        {
          question: 'How much does SEO cost for a Bath business?',
          answer: 'Our SEO packages for Bath businesses start from £500/month. The exact cost depends on your industry competition, current online presence, and goals. We offer a free audit to provide a custom quote.',
        },
        {
          question: 'Do you work with businesses in specific industries in Bath?',
          answer: 'Yes! We specialise in helping tradespeople (plumbers, electricians, builders), hospitality businesses, professional services, and retail businesses in Bath. Our local knowledge means we understand your target market.',
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
      description: 'Keynsham is a thriving market town situated between Bath and Bristol. With excellent transport links and a growing population, it\'s an ideal location for local businesses looking to expand their customer base.',
      extendedDescription: 'Located perfectly between two major cities, Keynsham businesses can capture customers from both Bath and Bristol. The town has seen significant regeneration and population growth, making it an increasingly competitive but rewarding market for local SEO.',
      industries: ['Retail', 'Professional Services', 'Trades', 'Food & Drink', 'Healthcare'],
      landmarks: ['Keynsham High Street', 'Keynsham Memorial Park', 'Cadbury Factory Site', 'St John the Baptist Church'],
      stats: {
        businesses: '800+',
        monthlySearches: '85K+',
        competitors: 'Medium',
        avgCPC: '£1.80',
      },
      testimonial: {
        quote: "We went from invisible on Google to the top 3 for all our key search terms. The phone hasn't stopped ringing.",
        name: 'Sarah Thompson',
        business: 'Thompson Electrical',
        result: '+52 calls/month',
      },
      localKeywords: [
        'plumber Keynsham',
        'electrician Keynsham',
        'builder Keynsham',
        'locksmith Keynsham',
        'cleaner Keynsham',
        'gardener Keynsham',
        'decorator Keynsham',
        'roofer Keynsham',
      ],
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
      population: '12,000+',
      heroImage: 'https://images.unsplash.com/photo-1517030330234-94c4fb948ebc?w=1200&h=600&fit=crop&auto=format&q=80',
      description: 'Midsomer Norton is a historic market town in the Somer Valley. With a strong sense of community and growing local economy, businesses here benefit from loyal local customers searching for services online.',
      extendedDescription: 'As the largest town in the Somer Valley, Midsomer Norton serves as a commercial hub for surrounding villages. Local businesses have a strong advantage when properly optimised for local search, as residents prefer to support local traders.',
      industries: ['Retail', 'Trades', 'Professional Services', 'Manufacturing', 'Hospitality'],
      landmarks: ['The Island', 'Midsomer Norton High Street', 'Somer Valley FM', 'Welton Manor'],
      stats: {
        businesses: '500+',
        monthlySearches: '45K+',
        competitors: 'Low-Medium',
        avgCPC: '£1.50',
      },
      testimonial: {
        quote: "Best investment we've made. We now dominate local search and our Google reviews have increased by 47.",
        name: 'Mark Williams',
        business: 'Williams Roofing',
        result: '£180K new contracts',
      },
      localKeywords: [
        'plumber Midsomer Norton',
        'electrician Midsomer Norton',
        'builder Midsomer Norton',
        'roofer Midsomer Norton',
        'decorator Midsomer Norton',
        'handyman Midsomer Norton',
        'garage Midsomer Norton',
      ],
      nearbyAreas: ['radstock', 'paulton', 'peasedown-st-john'],
      faqs: [
        {
          question: 'Is SEO worth it for a small Midsomer Norton business?',
          answer: 'Absolutely! In fact, smaller towns like Midsomer Norton often see the best ROI from SEO because competition is lower. A well-optimised local business can quickly dominate search results.',
        },
        {
          question: 'How do you target Midsomer Norton specifically?',
          answer: 'We use location-specific keywords, create locally relevant content, build citations on local directories, optimise your Google Business Profile with accurate location data, and earn backlinks from local organisations.',
        },
        {
          question: 'Can I target both Midsomer Norton and Radstock?',
          answer: 'Yes! Since these towns are adjacent, many businesses serve both areas. We can optimise for multiple nearby locations to maximise your reach across the Somer Valley.',
        },
        {
          question: 'What\'s included in your Midsomer Norton SEO package?',
          answer: 'Our packages include keyword research, on-page SEO, Google Business Profile management, local citation building, review strategy, monthly reporting, and ongoing optimisation. Everything you need to rank locally.',
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
      description: 'Peasedown St John is a growing village south of Bath with a thriving community. Its proximity to Bath means local businesses can attract customers from both the village and the city.',
      extendedDescription: 'Peasedown St John has seen significant growth in recent years, with new housing developments bringing more residents. This growing population presents opportunities for local businesses who can be found online.',
      industries: ['Trades', 'Retail', 'Services', 'Childcare'],
      landmarks: ['Beacon Hall', 'St John the Baptist Church', 'Peasedown St John Primary School'],
      stats: {
        businesses: '200+',
        monthlySearches: '20K+',
        competitors: 'Low',
        avgCPC: '£1.30',
      },
      testimonial: {
        quote: "We now get enquiries from Peasedown and surrounding areas. SEO Kings made it happen.",
        name: 'Tom Richards',
        business: 'Richards Landscaping',
        result: '+25 jobs/month',
      },
      localKeywords: [
        'plumber Peasedown',
        'electrician Peasedown',
        'builder Peasedown',
        'landscaper Peasedown',
        'cleaner Peasedown',
        'handyman Peasedown',
      ],
      nearbyAreas: ['bath', 'radstock', 'midsomer-norton'],
      faqs: [
        {
          question: 'Can you help me rank in both Peasedown and Bath?',
          answer: 'Absolutely! Many Peasedown businesses serve Bath customers too. We can create a multi-location strategy that helps you rank for both areas, maximising your reach.',
        },
        {
          question: 'Is Peasedown St John too small for SEO?',
          answer: 'Not at all! Smaller communities often have highly engaged local searchers. When someone in Peasedown searches for a service, they\'re ready to buy. We help you be there when they search.',
        },
        {
          question: 'How do you handle the village vs city keyword difference?',
          answer: 'We target both "Peasedown St John" and the shortened "Peasedown" in our strategy, as locals use both. We also include nearby area terms to capture all relevant searches.',
        },
        {
          question: 'What\'s the competition like in Peasedown?',
          answer: 'Competition is low, making it relatively easy to achieve top rankings. Most local businesses haven\'t invested in SEO yet, giving early adopters a significant advantage.',
        },
      ],
    },
    'paulton': {
      name: 'Paulton',
      fullName: 'Paulton, Somerset',
      county: 'Somerset',
      postcodes: ['BS39'],
      population: '5,500+',
      heroImage: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1200&h=600&fit=crop&auto=format&q=80',
      description: 'Paulton is a village in the Cam Valley with a strong local economy. The village is well-connected and businesses here serve customers across North East Somerset.',
      extendedDescription: 'Home to the popular Paultons Park (nearby), the area sees significant visitor traffic. Local businesses in Paulton benefit from both resident customers and visitors to the wider region.',
      industries: ['Trades', 'Retail', 'Agriculture', 'Services'],
      landmarks: ['Paulton Village Centre', 'St John the Baptist Church', 'Ham Woods'],
      stats: {
        businesses: '180+',
        monthlySearches: '18K+',
        competitors: 'Low',
        avgCPC: '£1.25',
      },
      testimonial: {
        quote: "From zero online presence to first page of Google. Our business has completely transformed.",
        name: 'Lisa Green',
        business: 'Green\'s Cleaning Services',
        result: '+200% bookings',
      },
      localKeywords: [
        'plumber Paulton',
        'electrician Paulton',
        'builder Paulton',
        'cleaner Paulton',
        'gardener Paulton',
        'decorator Paulton',
      ],
      nearbyAreas: ['midsomer-norton', 'keynsham', 'timsbury'],
      faqs: [
        {
          question: 'How can SEO help my Paulton business grow?',
          answer: 'SEO helps Paulton businesses appear when locals search for services online. With most people now using Google to find tradespeople and services, being visible online directly translates to more enquiries and customers.',
        },
        {
          question: 'Do you provide ongoing SEO support in Paulton?',
          answer: 'Yes! SEO is an ongoing process. We provide monthly optimisation, reporting, and strategy adjustments to ensure your rankings continue to improve and you stay ahead of competitors.',
        },
        {
          question: 'Can you help with my Google reviews in Paulton?',
          answer: 'Absolutely! Review management is a key part of our service. We\'ll help you generate more positive reviews and respond professionally to all feedback, boosting your local reputation.',
        },
        {
          question: 'What makes SEO Kings different for Paulton businesses?',
          answer: 'We\'re local! Our knowledge of Paulton and the surrounding area means we understand your customers. We don\'t use generic strategies - everything is tailored to your specific location and industry.',
        },
      ],
    },
    'saltford': {
      name: 'Saltford',
      fullName: 'Saltford, Bristol',
      county: 'Bristol',
      postcodes: ['BS31'],
      population: '4,500+',
      heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&auto=format&q=80',
      description: 'Saltford is a picturesque riverside village on the River Avon between Bath and Bristol. Its affluent community and scenic location make it an excellent market for local service businesses.',
      extendedDescription: 'Known for having the oldest continuously inhabited house in England, Saltford attracts visitors while maintaining a strong community feel. Local businesses benefit from an affluent population who value quality service.',
      industries: ['Trades', 'Professional Services', 'Hospitality', 'Retail'],
      landmarks: ['Saltford Manor', 'The Bird in Hand', 'River Avon', 'Saltford Brass Mill'],
      stats: {
        businesses: '150+',
        monthlySearches: '15K+',
        competitors: 'Low',
        avgCPC: '£1.40',
      },
      testimonial: {
        quote: "Saltford residents now find us first on Google. We've become the trusted local choice.",
        name: 'Andy Cooper',
        business: 'Cooper Plumbing & Heating',
        result: '+150% revenue',
      },
      localKeywords: [
        'plumber Saltford',
        'electrician Saltford',
        'builder Saltford',
        'decorator Saltford',
        'gardener Saltford',
        'cleaner Saltford',
      ],
      nearbyAreas: ['bath', 'keynsham'],
      faqs: [
        {
          question: 'Is SEO effective for a small village like Saltford?',
          answer: 'Very effective! Saltford residents actively search online for local services. Being a smaller community, you can quickly become the go-to choice for your service with the right SEO strategy.',
        },
        {
          question: 'Can I rank for Saltford, Bath, and Keynsham?',
          answer: 'Yes! Saltford\'s location between Bath and Keynsham makes it ideal for targeting multiple areas. We can create a strategy that helps you dominate all three locations.',
        },
        {
          question: 'How do affluent areas like Saltford affect SEO strategy?',
          answer: 'Saltford\'s demographics mean customers often search for premium services. We tailor your content and keywords to attract quality-focused customers who are willing to pay for excellent service.',
        },
        {
          question: 'What ROI can I expect from SEO in Saltford?',
          answer: 'Our Saltford clients typically see ROI of 5-10x their investment within the first year. Higher average order values in affluent areas mean fewer leads are needed for excellent returns.',
        },
      ],
    },
    'timsbury': {
      name: 'Timsbury',
      fullName: 'Timsbury, Somerset',
      county: 'Somerset',
      postcodes: ['BA2'],
      population: '3,000+',
      heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=600&fit=crop&auto=format&q=80',
      description: 'Timsbury is a charming rural village near Paulton with a close-knit community. Local businesses here benefit from strong word-of-mouth and increasing online searches.',
      extendedDescription: 'Timsbury maintains its rural character while being well-connected to larger towns. Local businesses enjoy strong community support, and those with good online visibility capture searches from residents who increasingly turn to Google first.',
      industries: ['Trades', 'Agriculture', 'Services'],
      landmarks: ['St Mary\'s Church', 'Timsbury Playing Fields', 'Conygre Hall'],
      stats: {
        businesses: '80+',
        monthlySearches: '8K+',
        competitors: 'Very Low',
        avgCPC: '£1.00',
      },
      testimonial: {
        quote: "Even in a small village, people search Google first. Now they find us.",
        name: 'Phil Andrews',
        business: 'Andrews Building Services',
        result: '+120% enquiries',
      },
      localKeywords: [
        'plumber Timsbury',
        'electrician Timsbury',
        'builder Timsbury',
        'handyman Timsbury',
        'gardener Timsbury',
      ],
      nearbyAreas: ['paulton', 'midsomer-norton', 'peasedown-st-john'],
      faqs: [
        {
          question: 'Is Timsbury too small for professional SEO services?',
          answer: 'No village is too small! While we target Timsbury specifically, we also optimise for surrounding areas to maximise your reach. Many Timsbury businesses serve customers from Paulton, Midsomer Norton, and beyond.',
        },
        {
          question: 'How do you approach SEO for rural villages?',
          answer: 'For villages like Timsbury, we combine hyper-local targeting with broader area coverage. This ensures you capture all relevant searches, from "builder Timsbury" to "builder near Paulton".',
        },
        {
          question: 'What\'s the minimum investment for Timsbury SEO?',
          answer: 'Our packages start from £300/month for smaller villages with lower competition. We offer flexible options that deliver results without requiring a massive budget.',
        },
        {
          question: 'How do you measure success for Timsbury businesses?',
          answer: 'We track keyword rankings, website traffic, phone calls, contact form submissions, and most importantly - new customers. You\'ll receive monthly reports showing exactly how your investment is performing.',
        },
      ],
    },
  };

  const area = areasData[slug];

  if (!area) {
    return <Navigate to="/areas" replace />;
  }

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

  const services = [
    { name: 'Local SEO', description: `Rank higher for "${area.name}" searches`, icon: 'search' },
    { name: 'Google Business Profile', description: 'Dominate the local map pack', icon: 'map' },
    { name: 'Website Design', description: 'Convert visitors into customers', icon: 'desktop' },
    { name: 'Review Management', description: 'Build trust and credibility', icon: 'star' },
  ];

  return (
    <>
      <SEO
        title={`SEO Services in ${area.name} | Local SEO Expert ${area.fullName}`}
        description={`Expert local SEO services in ${area.name}. Helping ${area.name} businesses rank higher on Google, get more customers & grow. ${area.stats.businesses} local businesses, ${area.stats.competitors} competition. Free SEO audit available.`}
        keywords={`SEO ${area.name}, local SEO ${area.name}, Google ranking ${area.name}, ${area.localKeywords.slice(0, 5).join(', ')}, digital marketing ${area.name}, SEO agency ${area.name}`}
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
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/" className="text-gray-400 hover:text-white transition-colors" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-600" aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/areas" className="text-gray-400 hover:text-white transition-colors" itemProp="item">
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
                SEO Services in<br />
                <span className="gradient-text">{area.name}</span>
              </h1>

              <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                {area.description}
              </p>
              
              <p className="text-gray-400 mb-8 leading-relaxed">
                {area.extendedDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 btn-glow"
                >
                  Get Free {area.name} SEO Audit
                </Link>
                <a
                  href="tel:07702264921"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                  aria-label="Call SEO Kings on 07702 264 921"
                >
                  07702 264 921
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-dark-card border border-white/10 rounded-2xl p-8">
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
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{area.testimonial.name}</div>
                  <div className="text-sm text-gray-400">{area.testimonial.business}, {area.name}</div>
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

      {/* Why SEO in [Area] Section */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Your {area.name} Business Needs SEO
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              With {area.stats.monthlySearches} monthly searches and {area.stats.businesses} local businesses competing for attention, 
              standing out on Google is essential for {area.name} businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-card border border-white/5 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Local Competition</h3>
              <p className="text-gray-400">
                {area.stats.businesses} businesses in {area.name} are competing for customers. 
                {area.stats.competitors === 'High' ? ' With high competition, SEO is essential to stand out.' : ' With lower competition, now is the perfect time to establish dominance.'}
              </p>
            </div>

            <div className="bg-dark-card border border-white/5 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Search Demand</h3>
              <p className="text-gray-400">
                {area.stats.monthlySearches} people search for local services in {area.name} every month. 
                Are you visible when they search for "{area.localKeywords[0]}"?
              </p>
            </div>

            <div className="bg-dark-card border border-white/5 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">ROI Potential</h3>
              <p className="text-gray-400">
                With average cost-per-click of {area.stats.avgCPC} in {area.name}, organic rankings deliver 
                significant savings compared to paid advertising.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our SEO Services in {area.name}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to dominate local search results and attract more customers in {area.name}.
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
              to="/contact"
              className="inline-flex items-center gap-2 text-primary-light hover:text-white transition-colors font-medium"
            >
              View all our services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Local Keywords Section */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Keywords We Target in {area.name}
              </h2>
              <p className="text-gray-400 mb-6">
                We help you rank for the search terms your potential customers are actually using to find services in {area.name}.
                These high-intent local keywords drive qualified leads directly to your business.
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
                <h3 className="text-xl font-bold text-white mb-4">Industries We Serve in {area.name}</h3>
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
                  <h3 className="text-xl font-bold text-white mb-4">Local Landmarks in {area.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    We understand {area.name}'s geography and reference local landmarks in your SEO strategy.
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

      {/* Nearby Areas */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            We Also Serve Nearby Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {area.nearbyAreas.map((nearbySlug) => {
              const nearby = areasData[nearbySlug];
              return (
                <Link
                  key={nearbySlug}
                  to={`/areas/${nearbySlug}`}
                  className="px-6 py-3 bg-dark-card border border-white/10 rounded-xl text-white font-medium hover:border-primary/30 hover:bg-white/5 transition-all duration-300"
                >
                  {nearby?.name || nearbySlug}
                </Link>
              );
            })}
            <Link
              to="/areas"
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
            Ready to Dominate {area.name} Search Results?
          </h2>
          <p className="text-gray-400 mb-8">
            Join the {area.name} businesses already ranking on page one of Google. 
            Get your free SEO audit today and see exactly how we can help you grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 btn-glow"
            >
              Get Your Free {area.name} SEO Audit
            </Link>
            <a
              href="tel:07702264921"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              aria-label="Call SEO Kings on 07702 264 921"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              07702 264 921
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AreaDetail;
