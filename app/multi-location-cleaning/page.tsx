// app/multi-location-cleaning/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Multi-Location Restaurant Cleaning Programs | Chains & Groups | Spruce",
  description:
    "Standardized restaurant cleaning programs for multi-location chains in Los Angeles. Nightly cleaning, deep cleaning, and inspections across all locations under one partner.",
};

export default function MultiLocationCleaningPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / <span>Multi-Location Cleaning</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Multi-Location Restaurant Cleaning Programs
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            One cleaning standard, rolled out across your entire footprint.
            Nightly cleaning, deep cleans, and inspection prep for restaurant
            groups and chains in Los Angeles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#quote"
              className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition text-center"
            >
              Design a Chain-Wide Program
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

      {/* Why Multi-Location Needs Different Handling */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6">
            You Don&apos;t Need 10 Different Cleaning Situations
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            When every location improvises its own cleaning vendor and routine,
            you lose control. Standards slip, costs drift, and you find out the
            real state of your stores when something goes wrong.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "One playbook for nightly cleaning across the chain",
              "Location-level adjustments where needed, but still standardized",
              "Rollup reporting for ops and leadership",
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

      {/* Program Components */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">
            What a Chain-Wide Cleaning Program Includes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Nightly cleaning scope defined by concept",
              "Quarterly deep cleaning for high-volume stores",
              "BOH, FOH, and restrooms clearly scoped",
              "Photo documentation of every visit",
              "Health inspection prep and support",
              "Integration with PM and light repairs",
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

      {/* Platform Tie-In */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6">
            Every Location, Every Night, in One Platform
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            The Spruce platform gives you real-time visibility into which stores
            are cleaned, where there are issues, and what&apos;s trending good or
            bad. No more guessing if last night&apos;s cleaning actually happened.
          </p>

          <ul className="space-y-3 text-gray-800 text-sm max-w-3xl">
            <li>• Chain-wide cleaning status dashboard</li>
            <li>• Anomalies and issues surfaced quickly</li>
            <li>• Historical logs for inspection or internal audits</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to standardize cleaning across your footprint?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let&apos;s design a chain-wide program built around your concepts and
            volumes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18772532646"
              className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition"
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
