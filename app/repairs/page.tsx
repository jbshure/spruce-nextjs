// app/repairs/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/repairs",
  },
  title: "Light Repairs for Restaurant Chains | Spruce",
  description:
    "Light repairs for multi-location restaurant chains. Minor electrical, plumbing, fixtures, doors, drains, and small handyman work as part of your facilities program.",
};

export default function RepairsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / <span>Light Repairs</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Light Repairs for Multi-Location Restaurants
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Small issues shouldn&apos;t become major projects. We handle light
            repairs as part of your facilities program – so doors, drains, and
            fixtures don&apos;t keep dragging on forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#quote"
              className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition text-center"
            >
              Add Repairs to My Program
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

      {/* Scope */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6">What We Handle In-House</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            We&apos;re not trying to replace licensed trades. We&apos;re here to
            knock out the constant small issues that bog down your stores and
            distract your managers.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Light Electrical",
                items: [
                  "Outlet and switch replacements (where allowed)",
                  "Fixture swaps and small lighting issues",
                  "Cover plates and minor electrical cosmetic fixes",
                ],
              },
              {
                title: "Minor Plumbing",
                items: [
                  "Slow drain clears (non-invasive methods)",
                  "Small leaks at fixtures (as scoped)",
                  "Caulking and sealing around sinks",
                ],
              },
              {
                title: "Handyman Work",
                items: [
                  "Door and hinge adjustments",
                  "Patch and paint small wall damage",
                  "Shelving, hooks, small hardware",
                ],
              },
            ].map((block, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <h3 className="font-bold text-lg mb-3 text-primary">
                  {block.title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {block.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coordination with Vendors */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6">
            When It&apos;s Bigger Than a Light Repair
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            When a job belongs with a licensed trade – we don&apos;t fake it. We
            route it to the right vendor and manage the work through the Spruce
            platform, so you still get visibility and documentation.
          </p>

          <ul className="space-y-3 text-gray-800 text-sm max-w-3xl">
            <li>• Clear rules on what counts as a light repair vs trade work</li>
            <li>• Simple handoff to your existing vendors or ours</li>
            <li>• One record of all work, regardless of who performed it</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">
            Tired of staring at the same small issues every week?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Fold light repairs into your Spruce facilities program and get them
            handled.
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
