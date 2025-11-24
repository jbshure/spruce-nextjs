// app/back-of-house-cleaning/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/back-of-house-cleaning",
  },
  title:
    "Back-of-House Cleaning Los Angeles | BOH Cleaning for Restaurants | Spruce",
  description:
    "Back-of-house commercial cleaning in Los Angeles. Line station cleaning, equipment degreasing, floor scrubbing, drains, and full BOH sanitation for multi-location restaurant chains.",
};

export default function BackOfHouseCleaningPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / <span>Back-of-House Cleaning</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Back-of-House Cleaning for Los Angeles Restaurants
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            The hardest cleaning happens in the kitchen. We clean cooklines, prep
            areas, floors, drains, walls, equipment surfaces, and all BOH zones
            that impact food safety and inspection scores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#quote"
              className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition"
            >
              Get BOH Cleaning Quote
            </Link>
            <a
              href="tel:+18772532646"
              className="bg-white/10 border-2 border-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition"
            >
              Call 1-877-CLEANING
            </a>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20">
        <div className="container-custom max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-center">
            BOH Is Where Inspections Are Won or Lost
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Grease buildup, floors, drains, and line areas cause most health
            code violations. We make sure your BOH is inspection-ready every
            night.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cookline Cleaning",
                desc: "Equipment surfaces, handles, knobs, and fronts degreased nightly.",
              },
              {
                title: "Prep Area Cleaning",
                desc: "Prep tables, sinks, walls, shelving, and storage zones cleaned and sanitized.",
              },
              {
                title: "Floors & Drains",
                desc: "Degreasing, scrubbing, and drain area cleaning to reduce slips and odors.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">BOH Cleaning Scope</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 text-sm">
            {[
              "Line station degreasing",
              "Equipment surface cleaning",
              "Cleaning behind and under equipment",
              "Walk-in floors and thresholds",
              "Walls, ceilings, and splash zones",
              "Mats cleaned, sanitized, and dried",
              "Floor scrubbing and degreasing",
              "Drain cleaning and sanitization",
              "Prep sink and 3-compartment sink cleaning",
            ].map((item, i) => (
              <li
                key={i}
                className="bg-white p-4 rounded-xl border border-gray-200"
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Clean Up Your BOH?
          </h2>
          <p className="text-xl mb-8">
            Let&apos;s build a kitchen cleaning program around your concepts and
            volumes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#quote"
              className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+18772532646"
              className="bg-white/10 border-2 border-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20"
            >
              Call 1-877-CLEANING
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
