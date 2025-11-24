import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  alternates: {
    canonical: "/commercial-kitchen-cleaning",
  },
  title: 'Commercial Kitchen Cleaning in Los Angeles, CA | Spruce',
  description: 'Commercial kitchen cleaning services in Los Angeles. Deep degreasing, equipment cleaning, floor scrubbing. We reset your kitchen — not just wipe around the problem.',
  keywords: 'commercial kitchen cleaning los angeles, kitchen deep cleaning, commercial kitchen degreasing, restaurant kitchen cleaning LA',
};

export default function CommercialKitchenCleaning() {
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
        "name": "Services",
        "item": "https://www.heyspruce.com/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Commercial Kitchen Cleaning",
        "item": "https://www.heyspruce.com/commercial-kitchen-cleaning"
      }
    ]
  };

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
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span>Commercial Kitchen Cleaning</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Commercial Kitchen Cleaning in Los Angeles, CA
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-4xl">
            Grease builds up. Standards slip. Health inspections don't care. Spruce delivers commercial kitchen cleaning services in Los Angeles that actually reset your kitchen — not just wipe around the problem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition text-center">
              Schedule a Kitchen Assessment
            </a>
            <a href="tel:+18772532646" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition text-center">
              Call 1-877-CLEANING
            </a>
          </div>
        </div>
      </section>

      {/* Deep Commercial Kitchen Cleaning */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Deep Commercial Kitchen Cleaning</h2>
              <p className="text-lg text-gray-700 mb-6">
                We go beyond nightly wipe-downs. Our <strong>commercial kitchen cleaning</strong> teams in Los Angeles handle the heavy degreasing and detail work your staff doesn't have time for.
              </p>
              <p className="text-lg text-gray-700 mb-6">Services typically include:</p>
              <ul className="space-y-3 mb-6">
                {[
                  'Full cookline degreasing',
                  'Cleaning behind and beneath equipment',
                  'Hood and exhaust coordination',
                  'Floor scrubbing and degreasing',
                  'Tile and grout cleaning',
                  'Stainless steel polishing (as scoped)',
                  'Detailed cleaning of prep areas and storage zones'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 bg-gray-300 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                [Commercial Kitchen Cleaning Image]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appliance and Equipment Cleaning */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 bg-gray-300 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                [Equipment Cleaning Image]
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">Appliance and Equipment Cleaning</h2>
              <p className="text-lg text-gray-700 mb-6">Dirty equipment fails early and cooks unevenly. We clean:</p>
              <ul className="space-y-3 mb-6">
                {[
                  'Ovens and ranges (exterior and specific interior scope)',
                  'Grills, griddles, and fryers (exterior and surrounding surfaces)',
                  'Refrigerators and freezers (exterior, handles, and selected interiors)',
                  'Prep tables, slicers, and small equipment (as scoped)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700">We align with your chef and maintenance schedule so we don't interrupt service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Degreasing */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4">Floor Degreasing & Drain Area Cleaning</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Kitchen floors in Los Angeles see heavy use and constant grease.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Machine Scrubbing', desc: 'Machine or manual scrubbing of kitchen floors appropriate to your surface type' },
              { title: 'Chemical Treatment', desc: 'Degreasing and chemical treatment matched to your flooring material' },
              { title: 'Mat & Drain Areas', desc: 'Thorough cleaning around and under mats, drain area cleaning and surrounding surfaces' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Get Commercial Kitchen Cleaning in Los Angeles</h2>
          <p className="text-xl mb-8">Ready to stop worrying about grease buildup and failed inspections?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition">
              Talk to Spruce Kitchen Ops
            </a>
            <a href="tel:+18772532646" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition">
              Call 1-877-CLEANING
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Related Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Restaurant Cleaning', desc: 'Complete nightly and deep cleaning services', link: '/restaurant-cleaning-los-angeles' },
              { title: 'Deep Kitchen Cleaning', desc: 'Equipment pull-outs and quarterly resets', link: '/deep-kitchen-cleaning' },
              { title: 'Floor Scrubbing & Degreasing', desc: 'Commercial floor cleaning and maintenance', link: '/floor-scrubbing' },
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
