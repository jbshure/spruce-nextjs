import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Kitchen Deep Cleaning: Complete Step-by-Step Guide (2024)',
  description: 'Complete guide to restaurant kitchen deep cleaning. Learn professional techniques for equipment cleaning, degreasing, and maintaining hygiene standards in commercial kitchens.',
  keywords: 'restaurant kitchen deep cleaning, commercial kitchen cleaning guide, deep cleaning checklist, kitchen equipment cleaning',
};

export default function RestaurantKitchenDeepCleaningPage() {
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
            <span className="text-gray-900">Restaurant Kitchen Deep Cleaning Guide</span>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
                Cleaning Guide
              </span>
              <span className="text-gray-500">January 18, 2024 • 12 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Restaurant Kitchen Deep Cleaning: Complete Step-by-Step Guide (2024)
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Master the art of commercial kitchen deep cleaning with this comprehensive guide. Learn professional techniques, equipment-specific methods, and create an effective deep cleaning schedule.
            </p>
          </header>

          {/* Featured Image */}
          <div className="h-96 bg-gray-200 rounded-2xl mb-12 flex items-center justify-center text-gray-500">
            [Restaurant Kitchen Deep Cleaning Featured Image]
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-8 mb-4">What is Restaurant Kitchen Deep Cleaning?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Restaurant kitchen deep cleaning goes far beyond daily cleaning tasks. While nightly cleaning addresses visible dirt and spills, deep cleaning tackles grease buildup, equipment interiors, hard-to-reach areas, and behind/underneath heavy equipment. This intensive process is essential for maintaining health code compliance, preventing pest infestations, and extending equipment lifespan.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Most Los Angeles restaurants should schedule comprehensive deep cleaning quarterly, with certain high-volume kitchens requiring monthly service. Areas that require deep cleaning attention include hood systems, behind cooking equipment, walk-in coolers, floor drains, tile grout, and equipment that's rarely moved.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Deep Cleaning vs. Daily Cleaning</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Daily Cleaning Tasks</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Wiping down surfaces and equipment
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Sweeping and mopping floors
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Cleaning food contact surfaces
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Washing dishes and utensils
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Taking out trash
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-primary">Deep Cleaning Tasks</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Degreasing walls, ceilings, and equipment
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Cleaning behind and underneath equipment
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Scrubbing tile grout and drain covers
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Hood and exhaust system cleaning
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Deep cleaning refrigeration units
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Equipment disassembly and cleaning
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Equipment-Specific Deep Cleaning Methods</h2>

            <h3 className="text-2xl font-bold mt-8 mb-4">Cooking Equipment</h3>
            <p className="text-gray-700 mb-6">
              Commercial cooking equipment requires specialized cleaning approaches to remove carbonized grease and maintain performance.
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-8 rounded-r-xl">
              <h4 className="text-lg font-bold mb-3">Ovens & Ranges</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">1.</span>
                  <span>Allow equipment to cool completely before cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">2.</span>
                  <span>Remove oven racks, grates, and burner covers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">3.</span>
                  <span>Apply commercial-grade degreaser to interior surfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">4.</span>
                  <span>Let degreaser dwell for 15-20 minutes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">5.</span>
                  <span>Scrub with appropriate brushes and non-abrasive pads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">6.</span>
                  <span>Rinse thoroughly and dry all surfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">7.</span>
                  <span>Clean behind equipment after pulling away from wall</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-8 rounded-r-xl">
              <h4 className="text-lg font-bold mb-3">Fryers</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">1.</span>
                  <span>Drain oil completely when cool (not cold)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">2.</span>
                  <span>Remove and clean baskets and heating elements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">3.</span>
                  <span>Use fryer cleaning solution or boil-out method</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">4.</span>
                  <span>Scrub interior walls and bottom with fryer brush</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">5.</span>
                  <span>Rinse multiple times until water runs clear</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">6.</span>
                  <span>Dry completely before refilling with fresh oil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">7.</span>
                  <span>Clean exterior and underneath fryer area</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Refrigeration Units</h3>
            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-8 rounded-r-xl">
              <h4 className="text-lg font-bold mb-3">Walk-in Coolers & Freezers</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Empty contents and organize into temporary cold storage
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Remove shelving and clean separately with sanitizer
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Clean walls, ceiling, and floor with approved cleaner
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Clean door gaskets, hinges, and handles
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Check and clean floor drains and drain pans
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Inspect evaporator coils and clean if accessible
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Sanitize all surfaces before restocking
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Professional Degreasing Techniques</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Grease buildup is the enemy of commercial kitchens. It creates fire hazards, attracts pests, and violates health codes. Professional degreasing requires the right products, techniques, and safety measures.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-yellow-900">Degreasing Best Practices</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Always use PPE: gloves, goggles, and protective clothing
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Choose degreaser strength based on grease thickness
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Apply degreaser from bottom to top, rinse top to bottom
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Allow proper dwell time (usually 10-20 minutes)
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Use hot water for rinsing when safe and effective
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Agitate with brushes or scrubbers for stubborn buildup
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Ensure complete rinsing to prevent chemical residue
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Behind Equipment Cleaning</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The areas behind and underneath kitchen equipment are critical inspection points and prime pest harborage areas. This is where health inspectors often find violations.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-red-900">Equipment Pull-Out Checklist</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">1.</span>
                  <span>Turn off and disconnect equipment (gas and electrical)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">2.</span>
                  <span>Have qualified technician present for gas equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">3.</span>
                  <span>Use equipment dollies or sliders to prevent floor damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">4.</span>
                  <span>Remove accumulated debris and grease buildup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">5.</span>
                  <span>Clean walls and floors in exposed area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">6.</span>
                  <span>Clean equipment sides, back, and bottom</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">7.</span>
                  <span>Inspect for pest activity or structural damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">8.</span>
                  <span>Return equipment and reconnect safely</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Deep Cleaning Schedule</h2>
            <p className="text-gray-700 mb-6">
              Establish a comprehensive deep cleaning schedule to maintain standards and prevent overwhelming buildup.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="py-3 px-4 text-left font-bold">Task</th>
                    <th className="py-3 px-4 text-left font-bold">Frequency</th>
                    <th className="py-3 px-4 text-left font-bold">Priority</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-4">Hood & exhaust system</td>
                    <td className="py-3 px-4">Monthly-Quarterly*</td>
                    <td className="py-3 px-4 text-red-600 font-bold">Critical</td>
                  </tr>
                  <tr className="border-b border-gray-300 bg-gray-50">
                    <td className="py-3 px-4">Behind equipment</td>
                    <td className="py-3 px-4">Quarterly</td>
                    <td className="py-3 px-4 text-red-600 font-bold">Critical</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-4">Walk-in coolers/freezers</td>
                    <td className="py-3 px-4">Quarterly</td>
                    <td className="py-3 px-4 text-orange-600 font-bold">High</td>
                  </tr>
                  <tr className="border-b border-gray-300 bg-gray-50">
                    <td className="py-3 px-4">Floor scrubbing & grout</td>
                    <td className="py-3 px-4">Monthly</td>
                    <td className="py-3 px-4 text-orange-600 font-bold">High</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-4">Oven/range deep clean</td>
                    <td className="py-3 px-4">Monthly</td>
                    <td className="py-3 px-4 text-orange-600 font-bold">High</td>
                  </tr>
                  <tr className="border-b border-gray-300 bg-gray-50">
                    <td className="py-3 px-4">Fryer boil-out</td>
                    <td className="py-3 px-4">Weekly-Monthly**</td>
                    <td className="py-3 px-4 text-orange-600 font-bold">High</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-4">Wall & ceiling degreasing</td>
                    <td className="py-3 px-4">Quarterly</td>
                    <td className="py-3 px-4 text-yellow-600 font-bold">Medium</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4">Light fixtures & vents</td>
                    <td className="py-3 px-4">Quarterly</td>
                    <td className="py-3 px-4 text-yellow-600 font-bold">Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mb-8">
              *Hood cleaning frequency depends on cooking volume per NFPA 96<br />
              **High-volume operations require weekly fryer cleaning
            </p>

            <div className="bg-primary/5 border-2 border-primary rounded-2xl p-8 my-12">
              <h3 className="text-2xl font-bold mb-4 text-primary">Professional Deep Cleaning Services</h3>
              <p className="text-gray-700 mb-6">
                Hey Spruce provides comprehensive deep cleaning services for Los Angeles restaurants. Our trained technicians handle equipment pull-outs, hood systems, and intensive degreasing that your staff can't safely or effectively perform. We work overnight to avoid disrupting your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#quote" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition text-center">
                  Schedule Deep Cleaning
                </Link>
                <a href="tel:3235551234" className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition text-center">
                  Call 1-877-CLEANING
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Safety Considerations</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-xl">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Never mix chemical cleaners - dangerous reactions can occur
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Ensure adequate ventilation when using strong degreasers
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Use slip-resistant footwear on wet floors
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Have qualified technicians handle gas equipment disconnection
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Post wet floor signs and restrict access during cleaning
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Keep SDS sheets accessible for all chemicals used
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Common Deep Cleaning Mistakes to Avoid</h2>
            <ol className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="font-bold text-primary mr-2">1.</span>
                <span><strong>Using incorrect degreaser strength:</strong> Too weak won't cut grease; too strong can damage surfaces</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary mr-2">2.</span>
                <span><strong>Insufficient dwell time:</strong> Rushing removes the product before it can work effectively</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary mr-2">3.</span>
                <span><strong>Incomplete rinsing:</strong> Chemical residue attracts more dirt and can contaminate food</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary mr-2">4.</span>
                <span><strong>Neglecting equipment interiors:</strong> Only cleaning visible surfaces misses critical areas</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary mr-2">5.</span>
                <span><strong>Improper equipment reconnection:</strong> Can create safety hazards or equipment malfunction</span>
              </li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-4">Measuring Deep Cleaning Success</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Effective deep cleaning should result in: elimination of grease buildup on surfaces, no visible residue on equipment, clean areas behind and underneath equipment, clear floor drains, bright and clean tile grout, equipment operating more efficiently, and passing health inspections with high scores.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Document your deep cleaning with before/after photos, maintain detailed logs, and conduct post-cleaning inspections to ensure quality standards are met consistently.
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'NFPA 96 Hood Cleaning Compliance', link: '/blog/nfpa-96-compliance-hood-cleaning' },
                { title: 'Restaurant Floor Cleaning & Degreasing', link: '/blog/restaurant-floor-cleaning-degreasing' },
                { title: 'LA Health Inspection Checklist', link: '/blog/health-inspection-checklist-los-angeles' }
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
