import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/restaurant-cleaning-beverly-hills',
  },
  title: 'Restaurant Cleaning Beverly Hills | Commercial Kitchen Cleaning Services',
  description: 'Professional restaurant cleaning services in Beverly Hills. Nightly cleaning, deep kitchen cleaning, hood exhaust, and facilities management for luxury restaurants. Call 1-877-CLEANING.',
  keywords: 'restaurant cleaning beverly hills, beverly hills restaurant cleaning, rodeo drive restaurant cleaning, luxury restaurant cleaning beverly hills, commercial kitchen cleaning beverly hills',
  openGraph: {
    title: 'Restaurant Cleaning Beverly Hills | Commercial Kitchen Cleaning',
    description: 'Professional restaurant cleaning in Beverly Hills. Serving luxury restaurants, high-end establishments, and celebrity dining venues.',
    url: 'https://www.heyspruce.com/restaurant-cleaning-beverly-hills',
  },
};

export default function BeverlyHillsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.heyspruce.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Restaurant Cleaning Beverly Hills",
        "item": "https://www.heyspruce.com/restaurant-cleaning-beverly-hills"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Spruce Restaurant Cleaning - Beverly Hills",
    "image": "https://www.heyspruce.com/images/logo.png",
    "telephone": "+18772532646",
    "priceRange": "$$-$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Beverly Hills",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0736,
      "longitude": -118.4004
    },
    "areaServed": {
      "@type": "City",
      "name": "Beverly Hills"
    }
  };

  const serviceAreas = [
    {
      title: 'Rodeo Drive Restaurant Cleaning',
      description: 'Luxury restaurant and cafe cleaning on Rodeo Drive. White-glove service for high-end establishments.',
      landmarks: ['Wilshire to Santa Monica Blvd', 'Near luxury boutiques & hotels']
    },
    {
      title: 'Canon Drive & Beverly Drive Cleaning',
      description: 'Upscale dining establishment cleaning in the Golden Triangle. Celebrity restaurant specialists.',
      landmarks: ['Golden Triangle coverage', 'Near Beverly Wilshire Hotel']
    },
    {
      title: 'Wilshire Blvd Restaurant Cleaning',
      description: 'Fine dining and hotel restaurant cleaning along Wilshire Boulevard. Five-star establishment experience.',
      landmarks: ['La Cienega to Beverly Drive', 'Near The Peninsula & Four Seasons']
    },
    {
      title: 'South Beverly Hills Cleaning',
      description: 'Neighborhood restaurant cleaning in South Beverly Hills. Family-owned upscale establishment specialists.',
      landmarks: ['Olympic to Wilshire coverage', 'Near Beverly Hills High School area']
    }
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/restaurant-cleaning-los-angeles" className="hover:text-primary">Restaurant Cleaning</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Beverly Hills</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Restaurant Cleaning Services Beverly Hills
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Professional Commercial Kitchen Cleaning for Beverly Hills Luxury Restaurants
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Serving All Beverly Hills</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Luxury Restaurant Specialists</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">250+ Beverly Hills Locations</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+18772532646" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition text-center">
              Call for Beverly Hills Service: 1-877-CLEANING
            </a>
            <Link href="/#quote" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition text-center">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Beverly Hills Restaurant Cleaning Service Areas</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Hey Spruce provides professional restaurant cleaning throughout Beverly Hills, including:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-primary">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.landmarks.map((landmark, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-gray-700">{landmark}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Beverly Hills Restaurants Choose Hey Spruce</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Luxury Standard Excellence',
                description: 'White-glove cleaning service matching Beverly Hills five-star standards. Impeccable attention to detail.'
              },
              {
                title: 'Discretion & Confidentiality',
                description: 'Professional service for celebrity-frequented establishments. NDAs available. Trusted by high-profile venues.'
              },
              {
                title: 'Fine Dining Expertise',
                description: 'Specialized in Michelin-star and AAA Five Diamond restaurant cleaning. Understanding of luxury kitchen equipment.'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-custom-md">
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Beverly Hills Restaurant Cleaning Pricing</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                  <div>
                    <div className="font-bold text-lg">Nightly Cleaning (FOH + BOH)</div>
                    <div className="text-sm text-gray-600">5-7 nights per week</div>
                  </div>
                  <div className="font-bold text-xl text-primary">$800-$2,200/mo</div>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                  <div>
                    <div className="font-bold text-lg">Deep Kitchen Cleaning</div>
                    <div className="text-sm text-gray-600">Quarterly service</div>
                  </div>
                  <div className="font-bold text-xl text-primary">$2,000-$5,000/visit</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-lg">Hood & Exhaust Cleaning</div>
                    <div className="text-sm text-gray-600">NFPA 96 compliant</div>
                  </div>
                  <div className="font-bold text-xl text-primary">$450-$900/visit</div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-300 text-center">
                <p className="text-gray-700 mb-4">
                  <strong>Multi-location discount:</strong> Save 20-30% when you have 3+ locations
                </p>
                <Link href="/#quote" className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition">
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-custom-sm">
              <h3 className="text-xl font-bold mb-3">How much does restaurant cleaning cost in Beverly Hills?</h3>
              <p className="text-gray-700">
                Nightly cleaning for Beverly Hills restaurants typically ranges from $800-$2,200 per month depending on size, frequency, and service scope. Deep kitchen cleaning runs $2,000-$5,000 per quarterly visit. Multi-location chains save 20-30% with volume pricing.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-custom-sm">
              <h3 className="text-xl font-bold mb-3">Do you serve fine dining restaurants in Beverly Hills?</h3>
              <p className="text-gray-700">
                Absolutely. Many of our Beverly Hills clients are upscale and fine dining establishments. We provide white-glove service with attention to detail that matches your venue's standards. Discreet, professional crews who understand high-end hospitality.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-custom-sm">
              <h3 className="text-xl font-bold mb-3">Are you available for emergency cleaning before VIP events?</h3>
              <p className="text-gray-700">
                Yes. We offer 24/7 emergency cleaning services for Beverly Hills restaurants. Last-minute private events, celebrity bookings, or unexpected situations — we can dispatch crews within hours.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-custom-sm">
              <h3 className="text-xl font-bold mb-3">How quickly can you start service?</h3>
              <p className="text-gray-700">
                For new clients, we typically start within 1-2 weeks. This includes site visit, customized checklist creation, crew assignment, and dashboard setup. Emergency cleaning can start within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Clean Your Beverly Hills Restaurant?</h2>
          <p className="text-xl mb-8 text-white/90">Premium cleaning for Beverly Hills' finest restaurants</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18772532646" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition">
              Call 1-877-CLEANING
            </a>
            <Link href="/#quote" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Services in Beverly Hills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Deep Kitchen Cleaning', link: '/deep-kitchen-cleaning' },
              { title: 'Nightly Cleaning', link: '/nightly-cleaning' },
              { title: 'Hood Exhaust Cleaning', link: '/hood-exhaust-cleaning' }
            ].map((service, idx) => (
              <Link key={idx} href={service.link} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition text-center border border-gray-200">
                <h3 className="font-bold text-lg">{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
