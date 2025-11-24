import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NFPA 96 Compliance: Hood Cleaning Requirements for LA Restaurants',
  description: 'Complete guide to NFPA 96 hood cleaning compliance for Los Angeles restaurants. Learn frequency requirements, documentation standards, and how to avoid violations.',
  keywords: 'nfpa 96 compliance, hood cleaning requirements, exhaust system cleaning, restaurant hood cleaning standards',
};

export default function NFPA96CompliancePage() {
  return (
    <>
      <article className="py-12">
        <div className="container-custom max-w-4xl">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">NFPA 96 Compliance Hood Cleaning</span>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
                Compliance & Safety
              </span>
              <span className="text-gray-500">January 20, 2024 • 10 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              NFPA 96 Compliance: Hood Cleaning Requirements for LA Restaurants
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Understanding NFPA 96 standards is critical for restaurant fire safety and legal compliance. Learn the cleaning frequency requirements, documentation standards, and inspection protocols.
            </p>
          </header>

          {/* Featured Image */}
          <div className="h-96 bg-gray-200 rounded-2xl mb-12 flex items-center justify-center text-gray-500">
            [NFPA 96 Hood Cleaning Featured Image]
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-8 mb-4">What is NFPA 96?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              NFPA 96 is the Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations, published by the National Fire Protection Association. This code establishes the minimum fire safety requirements for commercial kitchen ventilation systems, including exhaust hoods, ducts, and fans.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              In Los Angeles, NFPA 96 compliance is mandatory and enforced by both the fire department and health department. Violations can result in fines, failed inspections, insurance issues, or even temporary closure. The standard is updated every three years, with the most recent edition being NFPA 96 (2021).
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Cleaning Frequency Requirements</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              NFPA 96 mandates cleaning frequency based on your cooking volume and type of cooking. This is not a suggestion - it's a legal requirement. The standard specifies minimum frequencies, but inspections may reveal the need for more frequent cleaning.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-red-900">Monthly Cleaning Required</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Systems serving solid fuel cooking operations (wood, charcoal)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  High-volume cooking operations (24-hour restaurants, high-volume fast food)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Wok cooking with high BTU output
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-orange-900">Quarterly Cleaning Required</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Systems serving high-volume cooking (most full-service restaurants)
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Operations using charbroilers, grills, and fryers heavily
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Restaurants open for all meal periods (breakfast, lunch, dinner)
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-yellow-900">Semi-Annual Cleaning Required</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Moderate-volume cooking operations
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Limited-hour operations (lunch only, dinner only)
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Operations with primarily low-grease cooking methods
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-green-900">Annual Cleaning Required</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Low-volume cooking operations
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Seasonal operations or limited service
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Systems serving ovens, steamers, or other low-grease equipment only
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">What Must Be Cleaned?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              NFPA 96 requires cleaning of the entire exhaust system from the hood to the fan, including all areas where grease can accumulate.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Complete System Components</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">1.</span>
                  <span><strong>Hood Interior:</strong> All surfaces, grease traps, filters, and baffles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">2.</span>
                  <span><strong>Plenum:</strong> The collection area above filters where grease accumulates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">3.</span>
                  <span><strong>Ductwork:</strong> Entire length from hood to fan, including all elbows and joints</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">4.</span>
                  <span><strong>Exhaust Fan:</strong> Blades, housing, motor area, and surrounding surfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">5.</span>
                  <span><strong>Access Panels:</strong> Doors and panels for cleaning and inspection access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">6.</span>
                  <span><strong>Roof Surfaces:</strong> Area around exhaust fan and grease containment</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Documentation Requirements</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Proper documentation is essential for NFPA 96 compliance. Inspectors will ask to see your cleaning records, and lack of documentation can result in violations even if the system is clean.
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4">Required Documentation</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Service sticker on hood showing date of last cleaning
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Written report from hood cleaning company
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Certificate of cleaning or service invoice
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Company name, license number, and contact information
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Areas cleaned and method used (hand scraping, pressure washing, etc.)
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Next cleaning due date based on your operation type
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Before/after photos (recommended best practice)
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Any deficiencies or repairs needed
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Determining Your Cleaning Frequency</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              If you're unsure about your required frequency, consider these factors to determine the appropriate schedule for your operation:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="py-3 px-4 text-left font-bold">Factor</th>
                    <th className="py-3 px-4 text-left font-bold">More Frequent Cleaning</th>
                    <th className="py-3 px-4 text-left font-bold">Less Frequent Cleaning</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-4 font-bold">Operating Hours</td>
                    <td className="py-3 px-4">16+ hours/day, 7 days/week</td>
                    <td className="py-3 px-4">8-10 hours/day, 5-6 days/week</td>
                  </tr>
                  <tr className="border-b border-gray-300 bg-gray-50">
                    <td className="py-3 px-4 font-bold">Cooking Type</td>
                    <td className="py-3 px-4">Charbroiling, frying, grilling</td>
                    <td className="py-3 px-4">Baking, steaming, boiling</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-4 font-bold">Menu Style</td>
                    <td className="py-3 px-4">High-fat meats, fried foods</td>
                    <td className="py-3 px-4">Low-fat proteins, vegetables</td>
                  </tr>
                  <tr className="border-b border-gray-300 bg-gray-50">
                    <td className="py-3 px-4 font-bold">Volume</td>
                    <td className="py-3 px-4">300+ covers/day</td>
                    <td className="py-3 px-4">Less than 100 covers/day</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-bold">Fuel Type</td>
                    <td className="py-3 px-4">Solid fuel (wood, charcoal)</td>
                    <td className="py-3 px-4">Gas or electric only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary/5 border-2 border-primary rounded-2xl p-8 my-12">
              <h3 className="text-2xl font-bold mb-4 text-primary">NFPA 96 Certified Hood Cleaning</h3>
              <p className="text-gray-700 mb-6">
                Hey Spruce provides NFPA 96 compliant hood cleaning for Los Angeles restaurants. Our certified technicians clean the entire system, provide detailed documentation, and work overnight to avoid disrupting your operations. We maintain your cleaning schedule and send automatic reminders when service is due.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#quote" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition text-center">
                  Schedule Hood Cleaning
                </Link>
                <a href="tel:+18772532646" className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition text-center">
                  Call 1-877-CLEANING
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Inspection and Enforcement</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Los Angeles fire marshals and health inspectors regularly check hood cleaning compliance. During inspections, they will:
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Review your cleaning documentation and service stickers</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Visually inspect accessible areas of hood and ductwork</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Check for excessive grease buildup (more than 1/32 inch is violation)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Verify that cleaning frequency matches your operation type</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Ensure access panels are in place and functioning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Check that filters are clean and properly installed</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4">Consequences of Non-Compliance</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-red-900">Potential Penalties</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <strong>Fines:</strong> $500-$5,000+ per violation depending on severity
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <strong>Failed Inspections:</strong> Lower health and fire inspection grades
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <strong>Closure Orders:</strong> Temporary shutdown until compliance is achieved
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <strong>Insurance Issues:</strong> Claims denial if fire occurs due to non-compliance
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <strong>Legal Liability:</strong> Increased exposure in event of fire or injury
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <strong>Fire Risk:</strong> Grease fires are preventable with proper cleaning
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Choosing a Hood Cleaning Company</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Not all hood cleaning companies provide NFPA 96 compliant service. When selecting a contractor, verify:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-xl">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Company is licensed and insured for hood cleaning
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Technicians are trained in NFPA 96 standards
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  They clean the entire system (hood to fan), not just visible areas
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Proper documentation is provided after each service
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  They use appropriate cleaning methods (hand scraping and/or pressure washing)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  References from other LA restaurants available
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Clear pricing with no hidden fees
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Between Professional Cleanings</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              While professional hood cleaning is required by NFPA 96, daily maintenance helps extend the life of your system and reduce fire risk:
            </p>

            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Clean filters daily or every other day in dishwasher
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Wipe down accessible hood surfaces nightly
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Empty grease traps and cups daily
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Inspect for grease drips or excessive buildup
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Keep area under hood clean and free of grease
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4">Stay Compliant and Safe</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              NFPA 96 compliance is not optional for Los Angeles restaurants. Understanding your required cleaning frequency, maintaining proper documentation, and working with qualified hood cleaning professionals keeps your restaurant safe, legal, and operational. Don't wait for a violation or worse - a fire - to take hood cleaning seriously.
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Restaurant Kitchen Deep Cleaning Guide', link: '/blog/restaurant-kitchen-deep-cleaning-guide' },
                { title: 'LA Health Inspection Checklist', link: '/blog/health-inspection-checklist-los-angeles' },
                { title: 'Restaurant Floor Cleaning & Degreasing', link: '/blog/restaurant-floor-cleaning-degreasing' }
              ].map((article, idx) => (
                <Link key={idx} href={article.link} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition">
                  <h4 className="font-bold text-lg mb-2 text-primary">{article.title}</h4>
                  <span className="text-sm text-gray-600">Read more →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
