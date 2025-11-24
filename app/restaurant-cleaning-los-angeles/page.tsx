import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Restaurant Cleaning Los Angeles | #1 Commercial Kitchen Cleaning Services LA | Hey Spruce',
  description: 'Restaurant cleaning services Los Angeles - Serving LA restaurant chains and multi-location brands. Nightly cleaning, deep kitchen cleaning, hood cleaning coordination. Health inspection support. Fast emergency response. Call (323) 555-1234.',
  keywords: 'restaurant cleaning los angeles, restaurant cleaning services los angeles, commercial kitchen cleaning los angeles, restaurant deep cleaning los angeles, kitchen cleaning services los angeles, restaurant sanitization los angeles, commercial restaurant cleaning LA',
};

export default function RestaurantCleaningLosAngeles() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does restaurant cleaning cost in Los Angeles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Restaurant cleaning costs in Los Angeles typically range from $200-$800 per cleaning depending on square footage, service frequency, and scope of work. Nightly cleaning averages $300-500 per session for a typical 2,000-3,000 sq ft restaurant. Deep cleaning services run $800-1,500. Contact us for a free quote specific to your Los Angeles restaurant."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide emergency restaurant cleaning in Los Angeles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide emergency restaurant cleaning services throughout Los Angeles County. If you fail a health inspection or have an urgent cleaning need, we offer same-day service for most LA areas including Downtown LA, West Hollywood, Santa Monica, and the Valley. Contact us for fastest available response times."
        }
      },
      {
        "@type": "Question",
        "name": "What areas of Los Angeles do you serve for restaurant cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide restaurant cleaning services throughout Los Angeles County including Downtown LA, Hollywood, West Hollywood, Beverly Hills, Santa Monica, Venice, Culver City, Pasadena, Glendale, Burbank, the San Fernando Valley, and South Bay cities. We specialize in multi-location restaurant chains across LA."
        }
      },
      {
        "@type": "Question",
        "name": "Are your cleaning products safe for commercial kitchens?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all cleaning products we use are food-safe, EPA-registered, and approved for commercial kitchen use. We use hospital-grade disinfectants that are effective against bacteria and viruses while being safe for food contact surfaces. Our teams are trained in food safety protocols."
        }
      },
      {
        "@type": "Question",
        "name": "Can you clean my restaurant during business hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While we primarily provide after-hours restaurant cleaning in Los Angeles (typically between 11pm-6am), we can accommodate daytime cleaning for specific services like deep cleaning during your closure day. We work around your schedule to minimize disruption to your operations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer contracts or one-time cleaning for Los Angeles restaurants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer both recurring cleaning contracts (nightly, weekly, or custom schedules) and one-time deep cleaning services for Los Angeles restaurants. Most of our restaurant clients are on recurring schedules, but we also provide pre-opening cleaning, post-construction cleaning, and emergency one-time services."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hey Spruce Restaurant Cleaning Los Angeles",
    "image": "https://www.heyspruce.com/images/logo.png",
    "@id": "https://www.heyspruce.com",
    "url": "https://www.heyspruce.com",
    "telephone": "(323) 555-1234",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Los Angeles",
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
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.heyspruce.com"
    ],
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
      "geoRadius": "50000"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="#services" className="hover:text-white">Services</Link> / <span>Restaurant Cleaning Los Angeles</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Restaurant Cleaning Services in Los Angeles, CA
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-4xl">
            Professional nightly cleaning, deep kitchen cleaning, and facilities management for multi-location restaurant chains across Los Angeles County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition text-center">
              Get a Free Quote
            </a>
            <a href="tel:3235551234" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition text-center">
              Call (323) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Spruce */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4">Why LA Restaurants Choose Spruce for Restaurant Cleaning</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We're not just another restaurant cleaning service in Los Angeles. We're the only facilities partner built specifically for multi-location chains.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'One Platform for All Locations',
                desc: 'Manage cleaning, maintenance, and vendor coordination for all your LA restaurants from a single dashboard.'
              },
              {
                title: 'Photo Documentation',
                desc: 'Every cleaning session includes timestamped photos and checklists for full accountability.'
              },
              {
                title: 'Preventive Maintenance Included',
                desc: 'Not just cleaning—we handle equipment PM, light repairs, and vendor scheduling too.'
              },
              {
                title: 'Real-Time Reporting',
                desc: 'See exactly when cleanings happen, track SLAs, and get alerts for any issues across all locations.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nightly Cleaning */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Nightly Cleaning Services</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>restaurant cleaning services Los Angeles</strong> include comprehensive nightly cleaning programs designed specifically for busy commercial kitchens and dining rooms.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Floor sweeping, mopping, and degreasing',
                  'Kitchen line cleaning and sanitization',
                  'Food prep surface cleaning',
                  'Trash removal and receptacle cleaning',
                  'Dining room and FOH cleaning',
                  'Restroom deep cleaning and restocking',
                  'Photo documentation of all work'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/#quote" className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition">
                Schedule Nightly Cleaning
              </Link>
            </div>
            <div className="relative h-96 bg-gray-300 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                [Restaurant Kitchen Image]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOH / Kitchen Cleaning */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 bg-gray-300 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                [Kitchen Cleaning Image]
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">BOH / Kitchen Cleaning</h2>
              <p className="text-lg text-gray-700 mb-6">
                Back-of-house <strong>commercial restaurant cleaning</strong> is where most health code violations occur. Our specialized team handles:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Equipment surface cleaning and degreasing',
                  'Line station deep cleaning',
                  'Behind and under equipment cleaning',
                  'Walls, ceilings, and hard-to-reach areas',
                  'Grease removal from all surfaces',
                  'Floor scrubbing and degreasing',
                  'Drain cleaning and sanitization'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/commercial-kitchen-cleaning" className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition">
                Learn More About Kitchen Cleaning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Los Angeles Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4">Los Angeles Service Areas</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            We provide professional <strong>restaurant cleaning services</strong> throughout Los Angeles County and surrounding areas:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { region: 'Central LA', cities: ['Downtown Los Angeles', 'Hollywood', 'Beverly Hills', 'West Hollywood', 'Koreatown', 'Mid-Wilshire'] },
              { region: 'West LA', cities: ['Santa Monica', 'Venice', 'Marina del Rey', 'Culver City', 'Westwood', 'Brentwood'] },
              { region: 'Valley', cities: ['Burbank', 'Glendale', 'Sherman Oaks', 'Encino', 'Studio City', 'North Hollywood'] },
              { region: 'East & South', cities: ['Pasadena', 'Alhambra', 'Long Beach', 'Torrance', 'El Segundo', 'Manhattan Beach'] }
            ].map((area, idx) => (
              <div key={idx}>
                <h3 className="text-primary font-bold text-xl mb-4">{area.region}</h3>
                <ul className="space-y-2">
                  {area.cities.map((city, cidx) => (
                    <li key={cidx} className="text-gray-700 text-sm border-b border-gray-200 pb-2">{city}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Get a Fast Quote for Restaurant Cleaning in Los Angeles</h2>
          <p className="text-xl mb-8">Join restaurant brands across LA that trust Spruce for complete facilities management.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition">
              Get Free Quote
            </a>
            <a href="tel:3235551234" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition">
              Call (323) 555-1234
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span>• Photo Documentation</span>
            <span>• Real-Time Platform</span>
            <span>• Preventive Maintenance Included</span>
            <span>• Multi-Location Management</span>
          </div>
        </div>
      </section>

      {/* Health Inspection & Compliance */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4">Health Inspection Ready Restaurant Cleaning in Los Angeles</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our <strong>restaurant cleaning services Los Angeles</strong> are designed to help you pass health inspections with flying colors.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Pre-Inspection Deep Cleaning',
                description: 'Comprehensive deep cleaning before scheduled health inspections. We focus on the areas inspectors check most: grease buildup, equipment cleanliness, and floor conditions.',
                features: ['Equipment pull-outs and cleaning behind/under all units', 'Wall and ceiling degreasing', 'Complete floor scrubbing and sanitization', 'Documentation with before/after photos']
              },
              {
                title: 'Los Angeles County Health Code Compliance',
                description: 'We stay current with all LA County Department of Public Health requirements for restaurant sanitation and cleaning standards.',
                features: ['Trained cleaning teams', 'Food-safe cleaning products only', 'Proper sanitizer concentrations verified', 'Temperature logging and documentation']
              },
              {
                title: 'Emergency Cleaning for Violations',
                description: 'Failed an inspection? We provide same-day emergency restaurant cleaning services in Los Angeles to address violations immediately.',
                features: ['Fast emergency response in LA County', 'Same-day service available', 'Violation-specific cleaning protocols', 'Re-inspection preparation included']
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-custom-md border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                <p className="text-gray-700 mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start text-sm">
                      <span className="text-accent font-bold mr-2">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Complete Restaurant Cleaning Services in Los Angeles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { service: 'Kitchen Floor Cleaning & Degreasing', desc: 'High-pressure floor scrubbing, degreasing, and anti-slip treatment' },
              { service: 'Commercial Kitchen Deep Cleaning', desc: 'Equipment cleaning, wall/ceiling degreasing, exhaust cleaning' },
              { service: 'Restaurant Dining Room Cleaning', desc: 'Table cleaning, chair sanitization, window cleaning, floor care' },
              { service: 'Restroom Deep Cleaning Services', desc: 'Toilet/urinal sanitization, tile/grout cleaning, fixture polishing' },
              { service: 'Bar & Lounge Cleaning', desc: 'Bar top sanitization, glass rack cleaning, floor degreasing' },
              { service: 'Patio & Outdoor Dining Cleaning', desc: 'Table/chair cleaning, umbrella maintenance, floor sweeping' },
              { service: 'Walk-in Cooler & Freezer Cleaning', desc: 'Interior sanitization, shelf cleaning, floor degreasing' },
              { service: 'Hood & Exhaust System Coordination', desc: 'NFPA 96 compliant hood cleaning scheduling and documentation' },
              { service: 'Grease Trap Cleaning Coordination', desc: 'Regular maintenance scheduling and compliance tracking' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary transition">
                <h3 className="font-bold text-lg mb-2 text-primary">{item.service}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="tel:3235551234" className="inline-block bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-dark transition">
              Call Now for Restaurant Cleaning: (323) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Restaurant Cleaning Los Angeles - Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                question: 'How much does restaurant cleaning cost in Los Angeles?',
                answer: 'Restaurant cleaning costs in Los Angeles typically range from $200-$800 per cleaning depending on square footage, service frequency, and scope of work. Nightly cleaning averages $300-500 per session for a typical 2,000-3,000 sq ft restaurant. Deep cleaning services run $800-1,500. Contact us for a free quote specific to your Los Angeles restaurant.'
              },
              {
                question: 'Do you provide emergency restaurant cleaning in Los Angeles?',
                answer: 'Yes, we provide emergency restaurant cleaning services throughout Los Angeles County. If you fail a health inspection or have an urgent cleaning need, we offer same-day service for most LA areas including Downtown LA, West Hollywood, Santa Monica, and the Valley. Contact us for fastest available response times.'
              },
              {
                question: 'What areas of Los Angeles do you serve for restaurant cleaning?',
                answer: 'We provide restaurant cleaning services throughout Los Angeles County including Downtown LA, Hollywood, West Hollywood, Beverly Hills, Santa Monica, Venice, Culver City, Pasadena, Glendale, Burbank, the San Fernando Valley, and South Bay cities. We specialize in multi-location restaurant chains across LA.'
              },
              {
                question: 'Are your cleaning products safe for commercial kitchens?',
                answer: 'Yes, all cleaning products we use are food-safe, EPA-registered, and approved for commercial kitchen use. We use hospital-grade disinfectants that are effective against bacteria and viruses while being safe for food contact surfaces. Our teams are trained in food safety protocols.'
              },
              {
                question: 'Can you clean my restaurant during business hours?',
                answer: 'While we primarily provide after-hours restaurant cleaning in Los Angeles (typically between 11pm-6am), we can accommodate daytime cleaning for specific services like deep cleaning during your closure day. We work around your schedule to minimize disruption to your operations.'
              },
              {
                question: 'Do you offer contracts or one-time cleaning for Los Angeles restaurants?',
                answer: 'We offer both recurring cleaning contracts (nightly, weekly, or custom schedules) and one-time deep cleaning services for Los Angeles restaurants. Most of our restaurant clients are on recurring schedules, but we also provide pre-opening cleaning, post-construction cleaning, and emergency one-time services.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-8 border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Spruce Over Other LA Cleaners */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Why Los Angeles Restaurants Choose Spruce Over Traditional Cleaning Companies</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Traditional Restaurant Cleaners</h3>
              <ul className="space-y-3 text-white/80">
                <li>• No accountability - you hope they showed up</li>
                <li>• Paper checklists that may not be completed</li>
                <li>• Just cleaning - no maintenance or repairs</li>
                <li>• Different quality at each location</li>
                <li>• Separate vendors for cleaning, PM, hood service</li>
                <li>• No way to track performance across locations</li>
              </ul>
            </div>

            <div className="bg-accent/20 backdrop-blur-sm rounded-xl p-8 border-2 border-accent">
              <h3 className="text-2xl font-bold mb-4">Spruce Platform Approach</h3>
              <ul className="space-y-3">
                <li>• Photo documentation of every cleaning</li>
                <li>• Digital checklists with timestamps</li>
                <li>• Preventive maintenance included in program</li>
                <li>• Consistent standards across all LA locations</li>
                <li>• One platform for all facility vendors</li>
                <li>• Real-time dashboard shows all location status</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl mb-6">See why restaurant brands in Los Angeles trust Spruce</p>
            <Link href="/#quote" className="inline-block bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Related Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Commercial Kitchen Cleaning', desc: 'Deep kitchen cleaning and degreasing services', link: '/commercial-kitchen-cleaning' },
              { title: 'Deep Kitchen Cleaning', desc: 'Equipment pull-outs and quarterly deep cleaning', link: '/deep-kitchen-cleaning' },
              { title: 'Nightly Cleaning Services', desc: 'Daily maintenance cleaning programs', link: '/nightly-cleaning' },
              { title: 'Preventive Maintenance', desc: 'Equipment PM and light repair services', link: '/preventive-maintenance' }
            ].map((service, idx) => (
              <Link key={idx} href={service.link} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <span className="text-primary font-bold text-2xl">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
