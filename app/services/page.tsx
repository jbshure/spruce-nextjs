import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/services",
  },
  title: "Restaurant Facilities Services | Cleaning, PM, Repairs, Vendor Management | Spruce",
  description:
    "Full restaurant facilities services for multi-location chains in Los Angeles. Nightly cleaning, deep kitchen cleaning, preventive maintenance, light repairs, and vendor management.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Restaurant Facility Services",
  "provider": {
    "@type": "Organization",
    "name": "Spruce",
    "url": "https://www.heyspruce.com",
  },
  "serviceType": [
    "Restaurant cleaning",
    "Commercial kitchen cleaning",
    "Kitchen deep cleaning",
    "Nightly cleaning",
    "Preventive maintenance",
    "Light repairs",
    "Vendor management",
    "Hood & exhaust coordination"
  ],
  "areaServed": {
    "@type": "City",
    "name": "Los Angeles",
  }
};

export default function ServicesPage() {
  return (
    <>
      <Script
        id="spruce-services-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />

      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container-custom">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Restaurant Facilities Services for Multi-Location Chains
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Cleaning, preventive maintenance, repairs, and vendor management — all in one partner, all tracked through the Spruce platform.
            </p>
          </div>
        </section>

        {/* Core Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12">
              Complete Facilities Management
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Nightly & Deep Cleaning",
                  desc: "Restaurant cleaning services for high-volume kitchens and chains.",
                },
                {
                  title: "Preventive Maintenance",
                  desc: "Recurring PM cycles for equipment longevity and safety.",
                },
                {
                  title: "Light Repairs",
                  desc: "Minor electrical, plumbing, fixtures, drains, and quick fixes.",
                },
                {
                  title: "Vendor Management",
                  desc: "We coordinate HVAC, refrigeration, plumbing, electrical, hood, and more.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cleaning Services */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">Cleaning Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Restaurant Cleaning",
                  desc: "Nightly cleaning, FOH/BOH, and chain programs.",
                  link: "/restaurant-cleaning-los-angeles",
                },
                {
                  title: "Commercial Kitchen Cleaning",
                  desc: "Cookline cleaning, degreasing, equipment pull-outs.",
                  link: "/commercial-kitchen-cleaning",
                },
                {
                  title: "Deep Kitchen Cleaning",
                  desc: "Heavy degreasing and deep resets.",
                  link: "/deep-kitchen-cleaning",
                },
                {
                  title: "Nightly Cleaning Services",
                  desc: "Consistent nightly programs for multi-location operators.",
                  link: "/nightly-cleaning",
                },
                {
                  title: "Dining Room Cleaning",
                  desc: "Tables, bar areas, floors, windows, FOH.",
                  link: "/foh-cleaning",
                },
                {
                  title: "Restroom Cleaning",
                  desc: "Full cleaning, sanitation, and restocking.",
                  link: "/restroom-cleaning",
                },
              ].map((s, idx) => (
                <Link
                  key={idx}
                  href={s.link}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group"
                >
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Preventive Maintenance */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">Preventive Maintenance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "PM Programs",
                  desc: "Scheduled PM visits built around your menu and equipment.",
                  link: "/preventive-maintenance",
                },
                {
                  title: "Filter Changes",
                  desc: "HVAC and equipment filters replaced on cadence.",
                  link: "/preventive-maintenance",
                },
                {
                  title: "Quarterly PM",
                  desc: "Drain care, inspections, safety checks.",
                  link: "/preventive-maintenance",
                },
              ].map((s, idx) => (
                <Link
                  key={idx}
                  href={s.link}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group"
                >
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Light Repairs */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">Light Repairs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Light Electrical",
                  desc: "Outlets, fixtures, switches, small electrical.",
                  link: "/preventive-maintenance",
                },
                {
                  title: "Minor Plumbing",
                  desc: "Drain clears, leaks, hand-sinks, dishwasher areas.",
                  link: "/preventive-maintenance",
                },
                {
                  title: "Handyman Repairs",
                  desc: "Hinges, doors, drywall patches, caulking, small carpentry.",
                  link: "/preventive-maintenance",
                },
              ].map((s, idx) => (
                <Link
                  key={idx}
                  href={s.link}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group"
                >
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Vendor Management */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">Vendor Management</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Vendor Coordination",
                  desc: "HVAC, refrigeration, plumbing, electrical, hood, and more.",
                  link: "/vendor-management",
                },
                {
                  title: "Hood & Exhaust Coordination",
                  desc: "NFPA 96 compliant scheduling and documentation.",
                  link: "/hood-exhaust-cleaning",
                },
                {
                  title: "Grease Trap Coordination",
                  desc: "Vendor scheduling and compliance tracking.",
                  link: "/vendor-management",
                },
              ].map((s, idx) => (
                <Link
                  key={idx}
                  href={s.link}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group"
                >
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Spruce */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              We're not a janitorial vendor. We're your full-stack facilities partner.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cleaning, PM, repairs, vendor management — all backed by the Spruce platform.
              One partner for everything your locations need to stay clean, compliant, and running.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to unify your facilities under one partner?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Cleaning + PM + repairs + vendor management — all in one program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18772532646"
                className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition"
              >
                Call 1-877-CLEANING
              </a>
              <Link
                href="/#quote"
                className="bg-white/10 backdrop-blur-sm border-2 border-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
