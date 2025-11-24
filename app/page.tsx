import Script from 'next/script';
import HomePageClient from '@/components/HomePageClient';

// TODO: Replace legalName, streetAddress, postalCode with real values
// TODO: Add Google Business Profile, Yelp, LinkedIn, Instagram to sameAs when available
const spruceOrgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "name": "Spruce",
  "legalName": "Spruce Facilities Management Inc.",
  "url": "https://www.heyspruce.com",
  "logo": "https://www.heyspruce.com/images/logo.png",
  "telephone": "+18772532646",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Example St, Suite 200",
    "addressLocality": "Los Angeles",
    "addressRegion": "CA",
    "postalCode": "90001",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.heyspruce.com"
  ]
};

const spruceServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Restaurant Cleaning & Facilities Management for Multi-Location Chains Los Angeles",
  "description": "Professional restaurant cleaning services and full facilities management for multi-location restaurant chains in Los Angeles. Nightly cleaning, deep kitchen cleaning, preventive maintenance, light repairs, and vendor coordination.",
  "provider": {
    "@type": "Organization",
    "name": "Spruce",
    "url": "https://www.heyspruce.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Los Angeles"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 34.0522,
      "longitude": -118.2437
    },
    "geoRadius": 50000
  },
  "serviceType": [
    "Restaurant cleaning",
    "Commercial kitchen cleaning",
    "Nightly cleaning",
    "Deep cleaning",
    "Preventive maintenance",
    "Light repairs",
    "Vendor management"
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://www.heyspruce.com/#quote",
    "availableLanguage": ["en"]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does restaurant cleaning cost in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Restaurant cleaning costs vary based on location size, frequency, and services needed. Nightly cleaning typically ranges from $500-$2,000 per location per month. Deep kitchen cleaning runs $1,500-$5,000 per visit. Multi-location chains save 20-30% by consolidating with one partner like Spruce."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in nightly restaurant cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nightly cleaning includes FOH (dining room, restrooms, entrance) and BOH (kitchen line, equipment surfaces, floors). We handle mopping, degreasing, trash removal, surface sanitization, and restroom restocking. All visits are checklist-driven with photo documentation."
      }
    },
    {
      "@type": "Question",
      "name": "How often should restaurants get deep kitchen cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most restaurants need deep kitchen cleaning quarterly (every 3 months). High-volume kitchens may need it monthly or bi-monthly. Deep cleaning includes equipment pull-outs, behind-the-line degreasing, wall and ceiling cleaning, and floor scrubbing."
      }
    },
    {
      "@type": "Question",
      "name": "Do you service restaurants outside Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We primarily serve LA Metro, Orange County, Inland Empire, and Greater Southern California. For select multi-location groups, we can expand to other California markets and coordinate services in additional states."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Spruce different from other restaurant cleaning companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spruce is built specifically for multi-location restaurant chains. We provide one dashboard for all locations, standardized service across your chain, and handle cleaning + preventive maintenance + vendor coordination. Most cleaning companies only do cleaning."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you start service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For new clients, we typically start within 1-2 weeks. This includes site visits, customized checklist creation, crew assignment, and dashboard setup. Emergency cleaning can often start within 24-48 hours."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle health inspection preparation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide pre-inspection deep cleaning and know exactly what health inspectors look for in Los Angeles County. Our clients maintain a 98.7% inspection pass rate, 10% higher than the industry average."
      }
    },
    {
      "@type": "Question",
      "name": "Can you coordinate with our other vendors (HVAC, plumbing, etc.)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our dashboard tracks all vendors including HVAC, refrigeration, plumbing, and hood cleaning companies. We can create work orders, schedule service, and give you visibility into all facilities activity."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <Script
        id="spruce-org-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(spruceOrgSchema)
        }}
      />
      <Script
        id="spruce-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(spruceServiceSchema)
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <main>
        <HomePageClient />
      </main>
    </>
  );
}
