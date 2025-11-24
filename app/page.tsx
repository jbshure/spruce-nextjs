import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

// TODO: Replace legalName, streetAddress, postalCode with real values
// TODO: Add Google Business Profile, Yelp, LinkedIn, Instagram to sameAs when available
const spruceOrgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "name": "Spruce",
  "legalName": "Spruce Facilities Management Inc.",
  "url": "https://www.heyspruce.com",
  "logo": "https://www.heyspruce.com/images/logo.png",
  "telephone": "+18772532646",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Example St, Suite 200",
    "addressLocality": "Los Angeles",
    "addressRegion": "CA",
    "postalCode": "90001",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.heyspruce.com"
  ]
};

const spruceServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Restaurant Facilities Management & Cleaning for Multi-Location Chains",
  "description": "End-to-end facilities partner for multi-location restaurant chains in Los Angeles, including nightly cleaning, deep kitchen cleaning, preventive maintenance, light repairs, and vendor management.",
  "provider": {
    "@type": "Organization",
    "name": "Spruce",
    "url": "https://www.heyspruce.com"
  },
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
    "geoRadius": 50000
  },
  "serviceType": [
    "Restaurant cleaning",
    "Commercial kitchen cleaning",
    "Nightly cleaning",
    "Deep cleaning",
    "Preventive maintenance",
    "Light repairs",
    "Vendor management"
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://www.heyspruce.com/#quote",
    "availableLanguage": ["en"]
  }
};

export default function Home() {
  return (
    <>
      <Script
        id="spruce-org-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(spruceOrgSchema)
        }}
      />
      <Script
        id="spruce-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(spruceServiceSchema)
        }}
      />

      <main>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-primary via-primary-dark to-secondary flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-1.webp"
            alt="Professional restaurant kitchen cleaning services"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              The Only Facilities Partner for Multi-Location Restaurant Chains
            </h1>
            <p className="text-xl text-white/90 mb-4">
              One platform. One partner. Complete facilities management for growing restaurant brands across Los Angeles.
            </p>
            <p className="text-2xl text-white font-medium mb-8">
              Cleaning + Preventive Maintenance + Repairs + Vendor Management
            </p>

            {/* Service Pillars */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { text: 'Nightly Cleaning' },
                { text: 'Preventive Maintenance' },
                { text: 'Emergency Repairs' },
                { text: 'Vendor Platform' }
              ].map((pillar, idx) => (
                <div key={idx} className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl p-4 hover:bg-white/25 transition">
                  <div className="text-white font-semibold text-sm">{pillar.text}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition text-center">
                Get Instant Quote
              </Link>
              <Link href="#services" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition text-center">
                View Services
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/20">
              {[
                { label: 'Fully', sub: 'Insured' },
                { label: 'NFPA 96', sub: 'Compliant' },
                { label: 'LA County', sub: 'Licensed' },
                { label: 'Multi-Location', sub: 'Specialists' }
              ].map((badge, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 hover:bg-white/20 transition">
                  <div className="text-white font-bold text-sm">{badge.label}</div>
                  <div className="text-white/80 text-xs">{badge.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete Facilities Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your multi-location restaurant chain needs in one partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Restaurant Cleaning',
                description: 'Nightly cleaning, deep kitchen cleaning, BOH/FOH services',
                link: '/restaurant-cleaning-los-angeles'
              },
              {
                title: 'Kitchen Deep Cleaning',
                description: 'Equipment pull-outs, degreasing, quarterly programs',
                link: '/commercial-kitchen-cleaning'
              },
              {
                title: 'Preventive Maintenance',
                description: 'Equipment PM, filter changes, light repairs',
                link: '/preventive-maintenance'
              },
              {
                title: 'Vendor Management',
                description: 'Coordinate all vendors through one platform',
                link: '/vendor-management'
              },
              {
                title: 'Hood & Exhaust Coordination',
                description: 'NFPA 96 compliant hood cleaning scheduling',
                link: '/hood-exhaust-cleaning'
              },
              {
                title: 'Multi-Location Programs',
                description: 'Built for restaurant chains across LA',
                link: '/multi-location-cleaning'
              }
            ].map((service, idx) => (
              <Link key={idx} href={service.link} className="bg-white rounded-2xl p-6 shadow-custom-md hover:shadow-custom-xl transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4 text-primary font-semibold">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="scroll-mt-24 py-16 md:py-24 bg-slate-50">
        <div className="container-custom max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-gray-900">
                The Spruce Platform
              </h2>
              <p className="mt-4 text-slate-700">
                One dashboard for every location, work order, and vendor. Spruce isn&apos;t just a cleaning crew – behind every visit is a platform that shows you exactly what&apos;s getting done across your chain.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>
                  <span className="font-medium">Work orders –</span> create, assign, and track issues across every store.
                </li>
                <li>
                  <span className="font-medium">Asset tracking –</span> log equipment, serials, warranty info, and history.
                </li>
                <li>
                  <span className="font-medium">Checklists &amp; photos –</span> every cleaning and PM visit is checklist-driven with photo proof.
                </li>
                <li>
                  <span className="font-medium">Vendor management –</span> track HVAC, refrigeration, plumbing and other vendors in one place.
                </li>
                <li>
                  <span className="font-medium">Multi-location dashboards –</span> see open issues, completed work, and spend by location.
                </li>
              </ul>

              <div className="mt-8">
                <a href="#quote" className="inline-flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
                  See how the platform works
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900">
                  Sample multi-location dashboard
                </h3>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  Live status
                </span>
              </div>
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-center justify-between">
                  <span>Open work orders</span>
                  <span className="font-semibold">27</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Locations with issues</span>
                  <span className="font-semibold">6 / 18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Avg. time to close</span>
                  <span className="font-semibold">1.8 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Vendor on-time rate</span>
                  <span className="font-semibold text-emerald-600">94%</span>
                </div>
              </div>

              {/* Platform visualization mockup */}
              <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-medium text-slate-600">Recent Work Orders</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded bg-white p-2 text-xs border border-slate-100">
                    <div>
                      <div className="font-semibold text-slate-800">Santa Monica #4</div>
                      <div className="text-slate-500">Walk-in cooler temp alert</div>
                    </div>
                    <span className="rounded-full px-2 py-1 text-xs font-medium bg-yellow-50 text-yellow-700">
                      In Progress
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded bg-white p-2 text-xs border border-slate-100">
                    <div>
                      <div className="font-semibold text-slate-800">Downtown #1</div>
                      <div className="text-slate-500">Nightly cleaning complete</div>
                    </div>
                    <span className="rounded-full px-2 py-1 text-xs font-medium bg-emerald-50 text-emerald-700">
                      Complete
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded bg-white p-2 text-xs border border-slate-100">
                    <div>
                      <div className="font-semibold text-slate-800">Pasadena #2</div>
                      <div className="text-slate-500">Hood cleaning scheduled</div>
                    </div>
                    <span className="rounded-full px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700">
                      Scheduled
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="scroll-mt-24 py-16 md:py-24">
        <div className="container-custom max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-gray-900">
                Results for multi-location operators
              </h2>
              <p className="mt-3 max-w-xl text-slate-700">
                We standardize cleaning, maintenance, and vendor management across your whole footprint – so every location hits the same standard, every night.
              </p>
            </div>
            <p className="text-sm text-slate-500">
              Names redacted here – real references available on request.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                8-location restaurant group – Los Angeles
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Spruce took over nightly cleaning, deep cleans, and light repairs across all stores.
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                <li>• 32% fewer emergency maintenance calls</li>
                <li>• Standardized nightly checklists in 30 days</li>
              </ul>
            </article>

            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                12-location coffee chain – Southern California
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Cleaning, PM, and vendor coordination rolled into one program.
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                <li>• 40% drop in cleanliness-related complaints</li>
                <li>• Full rollout in under two weeks</li>
              </ul>
            </article>

            <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Commissary + 5 satellite kitchens
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Centralized work orders, assets, and vendors into the Spruce platform.
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                <li>• One view of all open work</li>
                <li>• Clear spend by asset category and vendor</li>
              </ul>
            </article>
          </div>

          <div className="mt-10">
            <a href="#quote" className="inline-flex items-center text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
              Talk through a program for your locations
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="scroll-mt-24 py-16 md:py-24 bg-slate-50">
        <div className="container-custom max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-gray-900">
              Simple pricing. No games.
            </h2>
            <p className="mt-3 text-slate-700">
              Software pricing is public. Service pricing is tailored to your footprint and scope. Either way, you get a clean monthly number per location.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Free tier */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Spruce Platform – Free
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Get basic visibility without changing vendors or contracts.
              </p>
              <p className="mt-4 text-2xl font-semibold">$0</p>
              <p className="text-xs text-slate-500">per location, per month</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                <li>• Work orders</li>
                <li>• Vendor tracking</li>
                <li>• Cleaning &amp; PM checklists</li>
                <li>• Photos &amp; history</li>
              </ul>
              <div className="mt-6">
                <a href="#quote" className="inline-flex w-full items-center justify-center rounded-md border border-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white">
                  Start on Free
                </a>
              </div>
            </div>

            {/* Pro tier */}
            <div className="flex flex-col rounded-2xl border border-slate-900 bg-slate-900 p-6 text-white shadow-sm">
              <h3 className="text-sm font-semibold">
                Spruce Platform – Pro
              </h3>
              <p className="mt-2 text-sm text-slate-100">
                Full visibility and automation for serious multi-location ops.
              </p>
              <p className="mt-4 text-2xl font-semibold">$49–$99</p>
              <p className="text-xs text-slate-300">per location, per month</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-100">
                <li>• Everything in Free</li>
                <li>• Multi-location reporting</li>
                <li>• PM automation &amp; reminders</li>
                <li>• SLA alerts &amp; vendor scorecards</li>
                <li>• Priority support</li>
              </ul>
              <div className="mt-6">
                <a href="#quote" className="inline-flex w-full items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100">
                  Talk about Pro
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Facilities Services
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Cleaning, preventive maintenance, and light repairs – with vendor management included.
              </p>
              <p className="mt-4 text-2xl font-semibold">Custom</p>
              <p className="text-xs text-slate-500">per location, per month</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                <li>• Nightly and deep cleaning</li>
                <li>• Preventive maintenance</li>
                <li>• Light repairs</li>
                <li>• Vendor coordination</li>
              </ul>
              <div className="mt-6">
                <a href="#quote" className="inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
                  Request a services quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24 py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-gray-900">
            Built by operators, not software tourists
          </h2>
          <p className="mt-4 text-slate-700">
            Spruce was built by people who&apos;ve actually run restaurants, commissaries, and multi-location operations – not by a product team guessing from a conference room.
          </p>
          <p className="mt-4 text-slate-700">
            We were tired of cleaning vendors doing the bare minimum, maintenance issues falling through the cracks, and every GM improvising their own system. The &quot;platforms&quot; on the market didn&apos;t fix that – they just moved the chaos into a dashboard.
          </p>
          <p className="mt-4 text-slate-700">
            So we built the partner we wanted: a team that does the work, manages the vendors, and gives you the visibility to hold everyone accountable – including us.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
              Cleaning + PM + light repairs, in-house.
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
              Vendor management for everything outside our scope.
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
              Platform to see it all in one place.
            </div>
          </div>
        </div>
      </section>

      {/* Resources / Blog Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-gray-900">
              Resources for Restaurant Operators
            </h2>
            <p className="mt-3 text-slate-700">
              Guides, checklists, and best practices from our team to yours.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/blog/health-inspection-checklist-los-angeles" className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">Health & Compliance</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-primary transition">
                Complete Health Inspection Checklist for LA Restaurants
              </h3>
              <p className="mt-2 text-sm text-slate-600 flex-grow">
                Everything LA County health inspectors check. Use this checklist to prepare and pass with flying colors.
              </p>
              <div className="mt-4 text-sm text-slate-500">8 min read</div>
            </Link>

            <Link href="/blog/multi-location-restaurant-cleaning-management" className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">Multi-Location</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-primary transition">
                Managing Cleaning Across Multiple Restaurant Locations
              </h3>
              <p className="mt-2 text-sm text-slate-600 flex-grow">
                Best practices for maintaining consistent cleaning standards across restaurant chains.
              </p>
              <div className="mt-4 text-sm text-slate-500">10 min read</div>
            </Link>

            <Link href="/blog/restaurant-kitchen-deep-cleaning-guide" className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">Cleaning Guides</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-primary transition">
                Restaurant Kitchen Deep Cleaning: Complete Step-by-Step Guide
              </h3>
              <p className="mt-2 text-sm text-slate-600 flex-grow">
                Professional guide to deep cleaning your commercial kitchen. Equipment, degreasing, and schedules.
              </p>
              <div className="mt-4 text-sm text-slate-500">12 min read</div>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
              View all articles →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="quote" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Simplify Your Facilities Management?</h2>
          <p className="text-xl mb-8 text-white/90">Join restaurant brands across LA that trust Spruce</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18772532646" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition">
              Call 1-877-CLEANING
            </a>
            <Link href="/contact" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition">
              Fill Out Quote Form
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
