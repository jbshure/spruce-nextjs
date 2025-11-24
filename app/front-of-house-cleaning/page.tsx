// app/front-of-house-cleaning/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/front-of-house-cleaning",
  },
  title:
    "Front-of-House Cleaning Los Angeles | Dining Room & FOH Cleaning | Spruce",
  description:
    "Front-of-house restaurant cleaning services in Los Angeles. Dining room cleaning, bar cleaning, floors, windows, guest areas, and nightly FOH programs for multi-location chains.",
};

export default function FrontOfHouseCleaningPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            / <span>Front-of-House Cleaning</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Front-of-House Cleaning Services in Los Angeles
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            FOH is where guests form their first and last impression. We deliver
            consistent dining room, bar, floor, and window cleaning for
            multi-location restaurant chains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#quote"
              className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition"
            >
              Get FOH Cleaning Quote
            </Link>
            <a
              href="tel:+18772532646"
              className="bg-white/10 backdrop-blur-sm border-2 border-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition"
            >
              Call 1-877-CLEANING
            </a>
          </div>
        </div>
      </section>

      {/* Why FOH */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4">
            Set the Standard for Your Guest Experience
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Great food can&apos;t fix a dirty dining room. We keep FOH spotless
            every night across every location, so your brand feels consistent
            and intentional.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Dining Room Cleaning",
                desc: "Tables, chairs, booths, POS areas, service stations and guest paths cleaned nightly.",
              },
              {
                title: "Bars & Counters",
                desc: "Bar tops, rails, underbars, mats, and surrounding floors cleaned and sanitized.",
              },
              {
                title: "Windows & Glass",
                desc: "Fingerprints removed, glass polished, and entrance doors cleaned every night.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
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
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">FOH Cleaning Scope</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 text-sm">
            {[
              "Sanitizing tables, chairs, booths, highchairs",
              "Host stand and waiting area cleaning",
              "Sweeping, mopping, and scrubbing all FOH floors",
              "Spot cleaning walls, doors, railings, trim",
              "Cleaning service stations and POS counters",
              "Window, mirror, and entrance glass cleaning",
              "Bar top sanitizing and floor degreasing",
              "Trash removal and liner replacement",
              "Dusting shelves, décor, ledges, and lighting",
            ].map((item, i) => (
              <li
                key={i}
                className="bg-white rounded-xl p-4 border border-gray-200"
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Upgrade Your FOH Standards?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Let&apos;s build a guest-ready FOH cleaning program for your entire
            chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#quote"
              className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+18772532646"
              className="bg-white/10 backdrop-blur-sm border-2 border-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition"
            >
              Call 1-877-CLEANING
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
