import Link from 'next/link';

export default function TrustProof() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Industry-Leading Compliance & Certification</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full insurance coverage, vetted vendors, and documented compliance for every service
          </p>
        </div>

        {/* Compliance Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Full Insurance Coverage</h3>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• General Liability: $2M aggregate</li>
              <li>• Workers' Comp: Full coverage</li>
              <li>• Commercial Auto Insurance</li>
              <li>• Professional Liability</li>
            </ul>
            <a href="/documents/insurance-certificate.pdf" download className="text-blue-600 font-semibold hover:underline flex items-center">
              Download Certificate
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200">
            <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">NFPA 96 Compliance</h3>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• Hood cleaning certification</li>
              <li>• Fire suppression compliance</li>
              <li>• Monthly/quarterly schedules</li>
              <li>• Photo documentation</li>
            </ul>
            <a href="/documents/nfpa-96-compliance.pdf" download className="text-green-600 font-semibold hover:underline flex items-center">
              Download Compliance Doc
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200">
            <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Vetted Vendor Network</h3>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• Background-checked technicians</li>
              <li>• Licensed & insured partners</li>
              <li>• Performance tracking: 94% on-time</li>
              <li>• 24/7 emergency coverage</li>
            </ul>
            <a href="/documents/vendor-vetting-process.pdf" download className="text-purple-600 font-semibold hover:underline flex items-center">
              Download Vetting Doc
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* SLA Terms */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-12 mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Service Level Commitments</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-primary mb-2">4 hrs</div>
              <div className="text-white/80">Response time for all work orders</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-primary mb-2">48 hrs</div>
              <div className="text-white/80">Maximum resolution time (non-emergency)</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-primary mb-2">94%</div>
              <div className="text-white/80">Minimum vendor on-time target</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-primary mb-2">24/7</div>
              <div className="text-white/80">Emergency support availability</div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
            <h4 className="font-bold text-lg mb-4">What This Means for You:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No work order sits idle — every request gets immediate routing</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Faster issue resolution means less downtime, less spoilage</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Vendor performance tracking ensures accountability</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Emergency coverage prevents after-hours scrambling</span>
              </div>
            </div>
          </div>
        </div>

        {/* Client Results */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">Trusted by Leading Restaurant Brands</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl mr-4">
                  FC
                </div>
                <div>
                  <div className="font-bold text-lg">Fast Casual Chain</div>
                  <div className="text-sm text-gray-600">28 locations • SoCal</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Reduced our facility spend by 31% in the first year. The dashboard alone saved our ops team 15+ hours per week."
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-300">
                <div>
                  <div className="text-2xl font-bold text-primary">31%</div>
                  <div className="text-xs text-gray-600">Cost reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">15hr</div>
                  <div className="text-xs text-gray-600">Weekly time saved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs text-gray-600">Inspection pass</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center text-white font-bold text-2xl mr-4">
                  QS
                </div>
                <div>
                  <div className="font-bold text-lg">QSR Franchise Group</div>
                  <div className="text-sm text-gray-600">47 locations • National</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Single platform replaced 8 different vendor portals. Emergency calls down 40%. Franchisees are thrilled."
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-300">
                <div>
                  <div className="text-2xl font-bold text-secondary">40%</div>
                  <div className="text-xs text-gray-600">Fewer emergencies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">8→1</div>
                  <div className="text-xs text-gray-600">Vendor portals</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">1.4d</div>
                  <div className="text-xs text-gray-600">Avg close time</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mr-4">
                  FD
                </div>
                <div>
                  <div className="font-bold text-lg">Fine Dining Group</div>
                  <div className="text-sm text-gray-600">12 locations • LA Metro</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "White-glove service for our high-end venues. Zero health code violations in 18 months. Worth every penny."
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-300">
                <div>
                  <div className="text-2xl font-bold text-green-600">0</div>
                  <div className="text-xs text-gray-600">Code violations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">99%</div>
                  <div className="text-xs text-gray-600">Vendor on-time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">24hr</div>
                  <div className="text-xs text-gray-600">Quote delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
