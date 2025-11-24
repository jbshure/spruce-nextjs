// app/vendor-management/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/vendor-management",
  },
  title:
    "Vendor Management for Restaurant Chains | HVAC, Refrigeration, Plumbing | Spruce",
  description:
    "Vendor management for multi-location restaurant chains. We coordinate HVAC, refrigeration, plumbing, electrical, hood, pest control and more – and track everything in the Spruce platform.",
};

export default function VendorManagementPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / <span>Vendor Management</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Vendor Management for Multi-Location Restaurant Chains
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            One partner to manage all your facility vendors – HVAC, refrigeration,
            plumbing, electrical, hood, pest control, and more. We coordinate,
            track, and document everything so you don&apos;t have to chase anyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#quote"
              className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition text-center"
            >
              Consolidate Vendor Management
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

      {/* Pain / Why This Exists */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Stop Letting Every GM Run Their Own Vendor Rolodex
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
            Most restaurant groups have a mess of vendor relationships spread
            across managers and email threads. No visibility, no accountability,
            and no consolidated reporting. Spruce pulls all of that into one
            system and one team.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3">
                The Current State in Most Groups
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Each location has its own vendor list</li>
                <li>• Work orders live in email and text threads</li>
                <li>• No central record of who did what, when</li>
                <li>• No way to compare vendor performance</li>
                <li>• AP pays invoices with no operational context</li>
              </ul>
            </div>
            <div className="bg-primary/10 rounded-2xl p-6 border-2 border-primary">
              <h3 className="text-xl font-bold mb-3">
                What It Looks Like With Spruce
              </h3>
              <ul className="space-y-2 text-gray-900 text-sm">
                <li>• One partner coordinating all facility vendors</li>
                <li>• Work orders tracked through the Spruce platform</li>
                <li>• Photos and documentation for every job</li>
                <li>• Vendor performance and SLA tracking</li>
                <li>• One place for ops and finance to see the full picture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Coordinate */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Vendors We Coordinate</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "HVAC service and repairs",
              "Refrigeration and cold-side techs",
              "Plumbing and drains",
              "Electrical contractors",
              "Hood & exhaust cleaning",
              "Fire suppression inspections",
              "Pest control providers",
              "Grease trap cleaning",
              "General contractors (as scoped)",
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

      {/* Process */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6">
            How Vendor Management Works With Spruce
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Intake & Vendor Map",
                desc: "We document your existing vendors, contracts, coverage areas, and contact paths.",
              },
              {
                step: "2",
                title: "Centralized Work Orders",
                desc: "All vendor work flows through the Spruce platform – no more random calls and texts.",
              },
              {
                step: "3",
                title: "Coordination & Follow-Through",
                desc: "We schedule, follow up, and confirm completion with photos and notes.",
              },
              {
                step: "4",
                title: "Performance & Spend Visibility",
                desc: "You see vendor performance and spend by category, asset, and location.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="text-primary font-bold text-2xl mb-2">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">
            Want one partner to tame your vendor chaos?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            We manage the vendors. You run the restaurants.
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
