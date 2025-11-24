import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'In-House vs Outsourced Restaurant Cleaning | Cost & Quality Comparison',
  description: 'Should you hire in-house cleaners or outsource? Compare costs, quality, compliance, and management overhead. See why multi-location chains outsource to Spruce.',
};

export default function InHouseVsOutsourced() {
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
        "item": "https://www.heyspruce.com/comparison/in-house-vs-outsourced"
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
      <main>
        {/* Hero Section */}
        <section className="section-primary text-white">
          <div className="container-custom py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm mb-6">
                Data-Driven Analysis
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                In-House vs Outsourced Restaurant Cleaning
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                The complete cost, quality, and compliance comparison for multi-location restaurant chains
              </p>
            </div>
          </div>
        </section>

        {/* Quick Decision Guide */}
        <section className="section-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">Which Approach is Right for You?</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              <div className="card p-8 border-2 border-gray-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">In-House Cleaning Works Best For:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">✓</span>
                    <span className="text-gray-700">Single-location restaurants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">✓</span>
                    <span className="text-gray-700">Owner-operated businesses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">✓</span>
                    <span className="text-gray-700">Very small spaces (under 2,000 sq ft)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">✓</span>
                    <span className="text-gray-700">Full-time staff already present overnight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">✓</span>
                    <span className="text-gray-700">Willingness to manage HR, payroll, insurance</span>
                  </li>
                </ul>
              </div>

              <div className="card p-8 border-2 border-primary bg-gradient-to-br from-primary/5 to-secondary/5">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Outsourcing Works Best For:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-gray-900 font-semibold">Multi-location chains (3+ locations)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-gray-900 font-semibold">Operators focused on core business</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-gray-900 font-semibold">Need for standardization across locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-gray-900 font-semibold">Want professional deep cleaning expertise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-gray-900 font-semibold">Need vendor coordination & facilities management</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card p-8 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Industry Data:</h3>
              <p className="text-gray-700 text-lg">
                <strong>87% of multi-location restaurant chains (5+ locations)</strong> outsource cleaning and facilities management. The tipping point is typically 3-4 locations, where management overhead exceeds outsourcing costs.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="section-gray">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">Side-by-Side Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full max-w-6xl mx-auto border-collapse bg-white rounded-xl shadow-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-300">Factor</th>
                    <th className="text-center p-4 font-bold text-gray-600 border-b-2 border-gray-300">In-House Team</th>
                    <th className="text-center p-4 font-bold text-primary border-b-2 border-primary bg-primary/5">Outsourced (Spruce)</th>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Monthly Cost (per location)</td>
                    <td className="p-4 text-center">
                      <div className="font-bold text-gray-900">$3,200-$4,500</div>
                      <div className="text-xs text-gray-600">Salary + benefits + equipment</div>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="font-bold text-primary">$2,100-$2,800</div>
                      <div className="text-xs text-gray-600">All-inclusive pricing</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Hidden Costs</td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-600 font-bold">HIGH</div>
                      <div className="text-xs text-gray-600">Workers' comp, payroll taxes, unemployment, equipment, supplies, training</div>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold">NONE</div>
                      <div className="text-xs text-gray-600">Single invoice, no surprises</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Management Time</td>
                    <td className="p-4 text-center">
                      <div className="text-red-600 font-bold">8-12 hrs/week</div>
                      <div className="text-xs text-gray-600">Hiring, scheduling, training, oversight, HR issues</div>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold">1-2 hrs/week</div>
                      <div className="text-xs text-gray-600">Dashboard monitoring only</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Quality Consistency</td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-600 font-bold">VARIES</div>
                      <div className="text-xs text-gray-600">Depends on individual staff, turnover impact high</div>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold">STANDARDIZED</div>
                      <div className="text-xs text-gray-600">Checklist-driven, photo-documented, QA process</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Call-Outs / Sick Days</td>
                    <td className="p-4 text-center">
                      <div className="text-red-600 font-bold">YOUR PROBLEM</div>
                      <div className="text-xs text-gray-600">Scramble to cover shifts, inconsistent service</div>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold">COVERED</div>
                      <div className="text-xs text-gray-600">Backup crews automatically dispatched</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Deep Cleaning Expertise</td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-600 font-bold">LIMITED</div>
                      <div className="text-xs text-gray-600">Requires external deep clean specialists quarterly</div>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold">INCLUDED</div>
                      <div className="text-xs text-gray-600">Quarterly deep clean + specialized equipment</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Compliance Documentation</td>
                    <td className="p-4 text-center">
                      <div className="text-yellow-600 font-bold">MANUAL</div>
                      <div className="text-xs text-gray-600">Paper checklists, manual photo uploads</div>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold">AUTOMATIC</div>
                      <div className="text-xs text-gray-600">Digital checklists, timestamped photos, audit trail</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Insurance Liability</td>
                    <td className="p-4 text-center">
                      <div className="text-red-600 font-bold">ON YOU</div>
                      <div className="text-xs text-gray-600">Workers' comp, general liability, payroll taxes</div>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold">COVERED</div>
                      <div className="text-xs text-gray-600">$2M liability, workers' comp, fully insured</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Vendor Coordination</td>
                    <td className="p-4 text-center">
                      <div className="text-red-600 font-bold">SEPARATE</div>
                      <div className="text-xs text-gray-600">Still need HVAC, plumbing, hood, etc.</div>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold">INCLUDED</div>
                      <div className="text-xs text-gray-600">One dashboard for all vendors</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Scalability</td>
                    <td className="p-4 text-center">
                      <div className="text-red-600 font-bold">DIFFICULT</div>
                      <div className="text-xs text-gray-600">Hire/train new staff for each location</div>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="text-green-600 font-bold">EASY</div>
                      <div className="text-xs text-gray-600">Add new locations instantly</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* True Cost Breakdown */}
        <section className="section-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">The True Cost of In-House Cleaning</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="card p-8 border-2 border-gray-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">In-House Team (1 location)</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Base Salary (2 cleaners @ $18/hr, 4hrs/night)</span>
                    <span className="font-bold">$2,160/mo</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Payroll Taxes (FICA, unemployment, etc.)</span>
                    <span className="font-bold">$324/mo</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Workers' Compensation Insurance</span>
                    <span className="font-bold">$280/mo</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Benefits (if offered)</span>
                    <span className="font-bold">$400/mo</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Cleaning Supplies & Equipment</span>
                    <span className="font-bold">$180/mo</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Management Time (8hrs @ $40/hr)</span>
                    <span className="font-bold">$320/mo</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Quarterly Deep Clean (outsourced)</span>
                    <span className="font-bold">$625/mo</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Turnover Costs (hiring, training)</span>
                    <span className="font-bold">$150/mo</span>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-gray-400">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total Monthly Cost:</span>
                    <span className="text-red-600">$4,439</span>
                  </div>
                </div>

                <div className="mt-6 text-sm text-gray-600">
                  <p><strong>Not Included:</strong> Equipment repairs, backup coverage for sick days/vacations, facility vendor coordination (HVAC, plumbing, etc.)</p>
                </div>
              </div>

              <div className="card p-8 border-2 border-primary bg-gradient-to-br from-primary/5 to-secondary/5">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Spruce (1 location)</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-primary/20">
                    <span className="text-gray-900 font-semibold">Nightly Cleaning (FOH + BOH)</span>
                    <span className="font-bold text-primary">Included</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-primary/20">
                    <span className="text-gray-900 font-semibold">All Insurance & Liability</span>
                    <span className="font-bold text-primary">Included</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-primary/20">
                    <span className="text-gray-900 font-semibold">Workers' Comp (their staff)</span>
                    <span className="font-bold text-primary">Included</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-primary/20">
                    <span className="text-gray-900 font-semibold">No benefits/payroll tax burden</span>
                    <span className="font-bold text-primary">Included</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-primary/20">
                    <span className="text-gray-900 font-semibold">All Supplies & Equipment</span>
                    <span className="font-bold text-primary">Included</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-primary/20">
                    <span className="text-gray-900 font-semibold">Dashboard Management (minimal time)</span>
                    <span className="font-bold text-primary">Included</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-primary/20">
                    <span className="text-gray-900 font-semibold">Quarterly Deep Clean</span>
                    <span className="font-bold text-primary">Included</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-primary/20">
                    <span className="text-gray-900 font-semibold">Backup Coverage Guaranteed</span>
                    <span className="font-bold text-primary">Included</span>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-primary">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total Monthly Cost:</span>
                    <span className="text-primary">$2,400</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-extrabold text-green-700 mb-1">Save $2,039/mo</div>
                    <div className="text-sm text-green-800">45.9% cost reduction per location</div>
                  </div>
                </div>

                <div className="mt-6 text-sm text-gray-700">
                  <p><strong>Also Included:</strong> Vendor coordination dashboard, preventive maintenance, photo documentation, compliance reports, 24/7 emergency support</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center max-w-3xl mx-auto">
              <div className="card p-8 bg-gradient-to-r from-primary to-secondary text-white">
                <h3 className="text-2xl font-bold mb-4">For a 10-Location Chain:</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-sm mb-1 text-white/80">In-House Annual Cost</div>
                    <div className="text-3xl font-extrabold">$532,680</div>
                  </div>
                  <div>
                    <div className="text-sm mb-1 text-white/80">Spruce Annual Cost</div>
                    <div className="text-3xl font-extrabold">$288,000</div>
                  </div>
                </div>
                <div className="pt-6 border-t-2 border-white/30">
                  <div className="text-2xl font-extrabold">Annual Savings: $244,680</div>
                  <div className="text-sm text-white/90 mt-2">Plus: Eliminate management overhead, reduce risk, improve consistency</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden Costs of In-House */}
        <section className="section-gray">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">The Hidden Costs Everyone Forgets</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="card card-hover p-6 animate-fade-in">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Turnover Costs</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Cleaning positions have 75% annual turnover. Each replacement costs $1,200-$2,000 in recruiting, hiring, and training time.
                </p>
                <div className="text-primary font-bold">$150-$250/mo average</div>
              </div>

              <div className="card card-hover p-6 animate-fade-in">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">HR & Payroll Admin</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Payroll processing, tax filings, unemployment claims, scheduling software, time tracking systems.
                </p>
                <div className="text-primary font-bold">$100-$200/mo</div>
              </div>

              <div className="card card-hover p-6 animate-fade-in">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Workers' Comp Claims</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Even one injury can spike your workers' comp premiums by 15-40% for 3+ years.
                </p>
                <div className="text-primary font-bold">$0-$500+/mo risk</div>
              </div>

              <div className="card card-hover p-6 animate-fade-in">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Management Opportunity Cost</h3>
                <p className="text-gray-700 text-sm mb-3">
                  8-12 hours per week managing cleaners = time NOT spent on revenue-generating activities.
                </p>
                <div className="text-primary font-bold">$320-$480/mo</div>
              </div>

              <div className="card card-hover p-6 animate-fade-in">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Equipment Maintenance</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Floor scrubbers, carpet cleaners, pressure washers require maintenance, repairs, eventual replacement.
                </p>
                <div className="text-primary font-bold">$80-$150/mo</div>
              </div>

              <div className="card card-hover p-6 animate-fade-in">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Inconsistency Risk</h3>
                <p className="text-gray-700 text-sm mb-3">
                  One failed health inspection = $15K-$50K+ in lost revenue from temporary closure or reputation damage.
                </p>
                <div className="text-primary font-bold">Unquantifiable risk</div>
              </div>
            </div>

            <div className="mt-12 card p-8 bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Total Hidden Costs:</h3>
              <p className="text-gray-700 text-lg text-center mb-4">
                When you add turnover, HR admin, management time, equipment, and risk — the <strong>true cost of in-house cleaning is $650-$1,580/mo higher</strong> than the base salary suggests.
              </p>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-red-600">$4,400-$5,800/mo</div>
                <div className="text-sm text-gray-600">True all-in cost per location</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Multi-Location Chains Outsource */}
        <section className="section-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">Why 87% of Multi-Location Chains Outsource</h2>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="card p-8 animate-fade-in">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white font-extrabold text-2xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Standardization Across Locations</h3>
                    <p className="text-gray-700 mb-4">
                      In-house teams create inconsistency. Each location develops its own habits, shortcuts, and quality standards. Guests notice. Health inspectors notice.
                    </p>
                    <p className="text-gray-700 font-semibold">
                      Spruce uses identical checklists, training, and quality standards across all your locations. Your Santa Monica location gets the same service as Beverly Hills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-8 animate-fade-in">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white font-extrabold text-2xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Scalability Without HR Headaches</h3>
                    <p className="text-gray-700 mb-4">
                      Opening a new location? With in-house cleaning, you need to recruit, hire, train, and onboard 2-3 new cleaners. Timeline: 3-6 weeks.
                    </p>
                    <p className="text-gray-700 font-semibold">
                      With Spruce, your new location is live within 1-2 weeks. No recruiting, no training, no payroll setup. We handle everything.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-8 animate-fade-in">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white font-extrabold text-2xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">One Dashboard for All Facilities</h3>
                    <p className="text-gray-700 mb-4">
                      Managing 10+ locations with in-house teams = 10+ separate schedules, 10+ supply inventories, 10+ sets of HR issues.
                    </p>
                    <p className="text-gray-700 font-semibold">
                      Spruce gives you one dashboard with work orders, vendor tracking, compliance docs, and photo documentation for every location. Real-time visibility across your entire chain.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-8 animate-fade-in">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white font-extrabold text-2xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Professional Deep Cleaning Expertise</h3>
                    <p className="text-gray-700 mb-4">
                      In-house teams handle daily maintenance well. But quarterly deep cleans? Equipment pull-outs? Behind-the-line degreasing? That requires specialized equipment and expertise.
                    </p>
                    <p className="text-gray-700 font-semibold">
                      Spruce includes quarterly deep cleans with industrial equipment (pressure washers, floor scrubbers, degreasing systems). 98.7% health inspection pass rate proves it works.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Story */}
        <section className="section-gray">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">Real Client Story: In-House to Outsourced</h2>

            <div className="max-w-4xl mx-auto card p-12 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-3xl">FC</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">Fast-Casual Concept</div>
                  <div className="text-gray-600">28 locations • Southern California</div>
                </div>
              </div>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-bold text-lg mb-2">The Situation:</h3>
                  <p>
                    Started with 3 locations, hired in-house cleaners for each. As they grew to 15+ locations, managing separate cleaning teams became unmanageable. Inconsistent quality, constant turnover, different standards at each location.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">The Pain Points:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Ops team spending 15+ hours/week on cleaning-related issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>3-4 locations always short-staffed due to turnover</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>No standardization — each location "did their own thing"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Failed health inspection at one location due to inconsistent cleaning</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">The Switch to Spruce:</h3>
                  <p>
                    Transitioned all 28 locations over 6 weeks. Same checklists across every location. Dashboard gave corporate visibility for the first time.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 pt-6 border-t-2 border-primary/20">
                  <div className="text-center">
                    <div className="text-4xl font-extrabold text-primary mb-2">31%</div>
                    <div className="text-sm text-gray-600">Cost reduction Year 1</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-extrabold text-primary mb-2">15hr</div>
                    <div className="text-sm text-gray-600">Weekly time saved (ops team)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-extrabold text-primary mb-2">100%</div>
                    <div className="text-sm text-gray-600">Health inspection pass rate</div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl">
                  <p className="text-gray-900 italic text-lg">
                    "We should have made the switch years ago. Managing in-house cleaners was a second full-time job. Spruce gave us our time back and actually saved us money."
                  </p>
                  <div className="mt-4 text-gray-600 text-sm">
                    — Operations Director, Fast-Casual Concept
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-primary text-white">
          <div className="container-custom py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Ready to Make the Switch?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                See your custom cost comparison. We'll show you exactly how much you'll save by outsourcing to Spruce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#quote"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Get a Custom Quote
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
    </>
  );
}
