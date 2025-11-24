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

      <main>
        <HomePageClient />
      </main>
    </>
  );
}
