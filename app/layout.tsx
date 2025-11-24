import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Restaurant Cleaning Los Angeles | Multi-Location Facilities Partner | Hey Spruce",
  description: "The only facilities partner for multi-location restaurant chains in Los Angeles. Cleaning + Preventive Maintenance + Repairs + Vendor Management Platform. Trusted by restaurant brands across LA.",
  keywords: "restaurant cleaning los angeles, commercial kitchen cleaning services los angeles, restaurant cleaning services los angeles ca, kitchen deep cleaning los angeles, exhaust hood cleaning los angeles, restaurant sanitization services, multi-location restaurant cleaning",
  authors: [{ name: "Hey Spruce Restaurant Cleaning" }],
  creator: "Hey Spruce LLC",
  publisher: "Hey Spruce LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: "#1 Restaurant Cleaning Los Angeles | Commercial Kitchen Cleaning Services",
    description: "Professional restaurant cleaning in LA. Fast emergency service, health inspection support. Trusted by restaurant brands across Los Angeles.",
    url: "https://www.heyspruce.com",
    siteName: "Hey Spruce Restaurant Cleaning",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.heyspruce.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Professional restaurant kitchen cleaning services in Los Angeles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@heyspruce",
    creator: "@heyspruce",
    title: "Restaurant Cleaning Los Angeles | Commercial Kitchen Cleaning Services",
    description: "LA's #1 restaurant cleaning service. 24/7 emergency cleaning, 100% health inspection pass rate.",
    images: ["https://www.heyspruce.com/images/twitter-card.jpg"],
  },
  alternates: {
    canonical: "https://www.heyspruce.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hey Spruce Restaurant Cleaning Services",
    "image": "https://www.heyspruce.com/images/logo.png",
    "@id": "https://www.heyspruce.com",
    "url": "https://www.heyspruce.com",
    "telephone": "1-877-253-2646",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0522,
      "longitude": -118.2437
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/heyspruce",
      "https://www.instagram.com/heyspruce",
      "https://www.linkedin.com/company/heyspruce"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 34.0522,
        "longitude": -118.2437
      },
      "geoRadius": "50000"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
