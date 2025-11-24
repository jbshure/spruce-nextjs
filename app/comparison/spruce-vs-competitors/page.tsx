import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Spruce vs Other Restaurant Cleaning Companies | Los Angeles Comparison',
  description: 'Compare Spruce to traditional restaurant cleaning companies. See why multi-location chains choose Spruce for cleaning, maintenance, and vendor coordination.',
};

export default function SpruceVsCompetitors() {
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
        "name": "Comparison",
        "item": "https://www.heyspruce.com/comparison/spruce-vs-competitors"
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
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-primary text-white">
          <div className="container-custom py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm mb-6">
                Honest Comparison
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Spruce vs Traditional Restaurant Cleaning Companies
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Built for multi-location chains. Not just cleaning — full facilities management.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="section-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">Side-by-Side Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full max-w-5xl mx-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-300">Feature</th>
                    <th className="text-center p-4 font-bold text-primary border-b-2 border-primary bg-primary/5">Spruce</th>
                    <th className="text-center p-4 font-bold text-gray-600 border-b-2 border-gray-300">Traditional Cleaning Companies</th>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Multi-Location Dashboard</td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold text-xl">✓</div>
                      <div className="text-xs text-gray-600">Real-time visibility</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-red-600 font-bold text-xl">✗</div>
                      <div className="text-xs text-gray-600">Email & phone only</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Vendor Coordination</td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold text-xl">✓</div>
                      <div className="text-xs text-gray-600">HVAC, plumbing, hood, etc.</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-red-600 font-bold text-xl">✗</div>
                      <div className="text-xs text-gray-600">Cleaning only</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Preventive Maintenance</td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold text-xl">✓</div>
                      <div className="text-xs text-gray-600">Filter changes, light repairs</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-red-600 font-bold text-xl">✗</div>
                      <div className="text-xs text-gray-600">Not included</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Photo Documentation</td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold text-xl">✓</div>
                      <div className="text-xs text-gray-600">Every service, timestamped</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-600 font-bold text-xl">~</div>
                      <div className="text-xs text-gray-600">On request only</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Standardized Service</td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold text-xl">✓</div>
                      <div className="text-xs text-gray-600">Same checklists across all locations</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-600 font-bold text-xl">~</div>
                      <div className="text-xs text-gray-600">Varies by location</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">24/7 Emergency Support</td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold text-xl">✓</div>
                      <div className="text-xs text-gray-600">Always available</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-600 font-bold text-xl">~</div>
                      <div className="text-xs text-gray-600">Business hours only</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Response Time SLA</td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold text-xl">✓</div>
                      <div className="text-xs text-gray-600">4 hours guaranteed</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-red-600 font-bold text-xl">✗</div>
                      <div className="text-xs text-gray-600">No SLA commitment</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Multi-Location Pricing</td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold text-xl">✓</div>
                      <div className="text-xs text-gray-600">Volume discounts 20-30%</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-red-600 font-bold text-xl">✗</div>
                      <div className="text-xs text-gray-600">Per-location pricing</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Account Manager</td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold text-xl">✓</div>
                      <div className="text-xs text-gray-600">Dedicated for your chain</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-600 font-bold text-xl">~</div>
                      <div className="text-xs text-gray-600">Shared across many clients</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Health Inspection Prep</td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold text-xl">✓</div>
                      <div className="text-xs text-gray-600">98.7% pass rate</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-600 font-bold text-xl">~</div>
                      <div className="text-xs text-gray-600">Standard cleaning only</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Differences */}
        <section className="section-gray">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">What Makes Spruce Different</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="card card-hover p-8 animate-fade-in">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Built for Multi-Location Operations</h3>
                <p className="text-gray-700 mb-4">
                  Traditional cleaning companies handle one location at a time. Spruce was built from day one for restaurant chains with 5, 10, 50+ locations.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>One dashboard for all locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Standardized checklists across your chain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Volume pricing saves 20-30%</span>
                  </li>
                </ul>
              </div>

              <div className="card card-hover p-8 animate-fade-in">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">More Than Just Cleaning</h3>
                <p className="text-gray-700 mb-4">
                  We're your full facilities partner. Cleaning is just the beginning — we handle preventive maintenance, vendor coordination, and light repairs.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 font-bold">•</span>
                    <span>Filter changes & preventive maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 font-bold">•</span>
                    <span>Coordinate HVAC, plumbing, hood cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 font-bold">•</span>
                    <span>Light repairs (door handles, fixtures, etc.)</span>
                  </li>
                </ul>
              </div>

              <div className="card card-hover p-8 animate-fade-in">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Full Documentation & Accountability</h3>
                <p className="text-gray-700 mb-4">
                  Every service is documented with photos, timestamps, and checklist completion. No more "he said, she said" — you have proof.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span>Photo documentation for every visit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span>Timestamped check-in/check-out</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span>Digital checklist completion tracking</span>
                  </li>
                </ul>
              </div>

              <div className="card card-hover p-8 animate-fade-in">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Response Time SLAs</h3>
                <p className="text-gray-700 mb-4">
                  We commit to 4-hour response times and 48-hour resolution on all work orders. Traditional companies have no SLA commitments.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 font-bold">•</span>
                    <span>4-hour response guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 font-bold">•</span>
                    <span>48-hour max resolution (non-emergency)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 font-bold">•</span>
                    <span>24/7 emergency coverage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="section-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">Cost Comparison: Traditional vs Spruce</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="card p-8 border-2 border-gray-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Traditional Cleaning Company</h3>
                  <div className="text-4xl font-extrabold text-gray-700">$2,800/mo</div>
                  <div className="text-sm text-gray-600">per location</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">✓</span>
                    <span className="text-gray-700">Nightly cleaning (FOH + BOH)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">✓</span>
                    <span className="text-gray-700">Quarterly deep clean</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span className="text-gray-500">No dashboard visibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span className="text-gray-500">No vendor coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span className="text-gray-500">No preventive maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span className="text-gray-500">No multi-location pricing</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-gray-300">
                  <div className="text-sm text-gray-600 font-semibold">+ Additional vendor costs:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• HVAC company: $400/mo</li>
                    <li>• Plumbing company: $300/mo</li>
                    <li>• Hood cleaning: $500/quarter</li>
                    <li>• Handyman service: $200/mo</li>
                  </ul>
                  <div className="text-xl font-bold text-gray-900 mt-4">
                    Total: $3,900+/mo per location
                  </div>
                </div>
              </div>

              <div className="card p-8 border-2 border-primary bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="text-center mb-6">
                  <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                    BEST VALUE
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Spruce (10+ locations)</h3>
                  <div className="text-4xl font-extrabold text-primary">$2,100/mo</div>
                  <div className="text-sm text-gray-600">per location</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-900 font-semibold">Nightly cleaning (FOH + BOH)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-900 font-semibold">Quarterly deep clean</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-900 font-semibold">Dashboard for all locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-900 font-semibold">Full vendor coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-900 font-semibold">Preventive maintenance included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-900 font-semibold">Multi-location volume pricing</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-primary">
                  <div className="text-sm text-gray-700 font-semibold mb-2">All vendors coordinated through Spruce:</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• HVAC, plumbing, hood cleaning tracked</li>
                    <li>• Filter changes & PM included</li>
                    <li>• Light repairs handled in-house</li>
                    <li>• One invoice, one dashboard</li>
                  </ul>
                  <div className="text-xl font-bold text-primary mt-4">
                    Total: $2,100/mo per location
                  </div>
                  <div className="bg-green-100 text-green-800 rounded-lg p-3 mt-4 text-center font-bold">
                    Save $1,800/mo per location (46%)
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center max-w-3xl mx-auto">
              <div className="card p-8 bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">For a 20-Location Chain:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Traditional Approach</div>
                    <div className="text-3xl font-extrabold text-gray-700">$78,000/mo</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">With Spruce</div>
                    <div className="text-3xl font-extrabold text-primary">$42,000/mo</div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t-2 border-green-300">
                  <div className="text-lg font-bold text-gray-900">Annual Savings: $432,000</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="section-gray">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">Why Chains Switch to Spruce</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="card card-hover p-8 animate-fade-in">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">AZ</span>
                  </div>
                  <div>
                    <div className="font-bold">Angela Zeimer</div>
                    <div className="text-sm text-gray-600">Jurassic Magic</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "We were juggling 5 different cleaning vendors across our locations. Spruce consolidated everything into one dashboard. The consistency is incredible."
                </p>
              </div>

              <div className="card card-hover p-8 animate-fade-in">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">AA</span>
                  </div>
                  <div>
                    <div className="font-bold">Ahmed Ameziane</div>
                    <div className="text-sm text-gray-600">h.wood Group</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "The previous company only did cleaning. Spruce handles everything — cleaning, HVAC checks, filter changes. Finally, a true facilities partner."
                </p>
              </div>

              <div className="card card-hover p-8 animate-fade-in">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">JF</span>
                  </div>
                  <div>
                    <div className="font-bold">Jonah Freedman</div>
                    <div className="text-sm text-gray-600">Mistral & Greekmans</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "We switched from a traditional cleaning company and saved 31% in the first year. The dashboard visibility alone is worth it."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-primary text-white">
          <div className="container-custom py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Ready to See the Spruce Difference?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Join 2,100+ restaurant locations across the country. Get a custom quote in 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#quote"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Get a Quote
                </Link>
                <a
                  href="tel:+18772532646"
                  className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition text-lg"
                >
                  Call 1-877-CLEANING
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
