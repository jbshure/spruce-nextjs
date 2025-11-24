// app/hood-exhaust-cleaning/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/hood-exhaust-cleaning",
  },
  title:
    "Hood & Exhaust Cleaning Coordination | NFPA 96 Compliant | Spruce",
  description:
    "Hood and exhaust cleaning coordination for restaurant chains in Los Angeles. NFPA 96 compliant scheduling, documentation, and integration into your overall cleaning and PM program.",
};

export default function HoodExhaustCleaningPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / <span>Hood &amp; Exhaust Coordination</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Hood &amp; Exhaust Cleaning Coordination
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            NFPA 96 compliant hood and exhaust cleaning scheduling for
            multi-location restaurant operators. We coordinate vendors,
            documentation, and timing as part of your broader facilities program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#quote"
              className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition text-center"
            >
              Coordinate Hood Cleaning
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

      {/* Why It Matters */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4">
            Fire Risk, Health Risk, and Compliance — Not Optional
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
            Hood and exhaust cleaning isn&apos;t just about looks – it&apos;s
            about fire prevention, air quality, and staying compliant with
            insurance and local codes. We make sure the work gets scheduled,
            done, and documented.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "NFPA 96 Aware",
                desc: "We coordinate with providers that follow NFPA 96 requirements and understand what documentation you actually need.",
              },
              {
                title: "Integrated Scheduling",
                desc: "We align hood cleaning with your deep cleans and PM cycles so your kitchen isn&apos;t constantly disrupted.",
              },
              {
                title: "Proof & Documentation",
                desc: "Service reports and photos are stored and accessible for inspections, insurance, and internal audits.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Coordinate */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Scope of Coordination</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Hood surface cleaning and degreasing",
              "Duct and plenum cleaning (as provided by specialist)",
              "Fan and rooftop component cleaning",
              "Filter changes or cleaning",
              "Overspray and protection for FOH/BOH areas",
              "Before/after photos and service reports",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200"
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
            Tired of chasing hood cleaning vendors?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            We&apos;ll own the schedule, coordination, and documentation.
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
