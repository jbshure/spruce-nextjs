// app/preventive-maintenance/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  alternates: {
    canonical: "/preventive-maintenance",
  },
  title:
    "Restaurant Preventive Maintenance Programs | Multi-Location Chains | Spruce",
  description:
    "Preventive maintenance services for restaurant groups and multi-location chains in Los Angeles. PM programs, filter changes, equipment checks, drain care, and safety compliance.",
};

export default function PreventiveMaintenancePage() {
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
        "name": "Preventive Maintenance",
        "item": "https://www.heyspruce.com/preventive-maintenance"
      }
    ]
  };

  return (
    <main>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / <span>Preventive Maintenance</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Preventive Maintenance for Multi-Location Restaurant Chains
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            PM programs built for restaurant groups and commissaries in Los
            Angeles. Fewer breakdowns, fewer emergency calls, more predictable
            equipment performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#quote"
              className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition text-center"
            >
              Talk About PM Programs
            </Link>
            <a
              href="tel:+18772532646"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition text-center"
            >
              Call 1-877-CLEANING
            </a>
          </div>
        </div>
      </section>

      {/* Why PM Matters */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Stop Running Your Equipment Until It Fails
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
            Most restaurant equipment failures aren&apos;t surprises; they&apos;re
            ignored PM. We build preventive maintenance programs that match your
            menu, volumes, and hours so your stores don&apos;t go down on a
            Saturday night.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fewer Emergency Calls",
                desc: "Catching problems before failure means less downtime and fewer 2am repair calls.",
              },
              {
                title: "Longer Equipment Life",
                desc: "Regular filter changes, cleaning, and checks keep your equipment running longer.",
              },
              {
                title: "Standardization Across Locations",
                desc: "The same PM schedule and documentation at every store, not a different story at each location.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PM Program Details */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                PM Programs Built Around Your Operation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We don&apos;t shove a generic PM checklist onto your business.
                We design preventive maintenance schedules based on your store
                formats, equipment mix, ticket volume, and hours.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Quarterly or monthly PM cycles per location",
                  "Equipment-specific checklists and documentation",
                  "Filter changes (HVAC, make-up air, refrigeration as scoped)",
                  "Drain care and high-risk area checks",
                  "Safety and compliance checks where required",
                  "Photo documentation and digital sign-off",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/#quote"
                className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition"
              >
                Build a PM Program
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">
                Example PM Visit Checklist
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Verify and replace filters where needed</li>
                <li>• Inspect key kitchen equipment and note wear</li>
                <li>• Check drains and high-risk leak areas</li>
                <li>• Inspect safety devices (as scoped)</li>
                <li>• Document issues and create work orders in Spruce</li>
                <li>• Capture photos and notes for your ops team</li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                Exact PM checklist is customized by concept and equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Location Focus */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6">Built for Multi-Location Ops</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            You don&apos;t need 20 different PM approaches across 20 stores. We
            give you one program that can flex by location, but still rolls up
            clean at the top. You see what&apos;s done, what&apos;s overdue, and
            where the risk is.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "PM status dashboards by location",
              "Overdue PM alerts and escalation",
              "Integration with cleaning and repairs in one program",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-gray-200"
              >
                <p className="text-gray-800 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to stop running your equipment to failure?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let&apos;s build a preventive maintenance program for your entire
            footprint.
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
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
