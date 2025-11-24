import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Properly Clean and Degrease Restaurant Kitchen Floors',
  description: 'Complete guide to restaurant floor cleaning and degreasing. Learn professional techniques, products, and maintenance schedules for safe, compliant kitchen floors.',
  keywords: 'restaurant floor cleaning, kitchen floor degreasing, commercial floor cleaning, slip prevention restaurant',
};

export default function RestaurantFloorCleaningPage() {
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
            <span className="text-gray-900">Restaurant Floor Cleaning & Degreasing</span>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
                Cleaning Guide
              </span>
              <span className="text-gray-500">January 22, 2024 • 11 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              How to Properly Clean and Degrease Restaurant Kitchen Floors
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Restaurant kitchen floors require specialized cleaning to remove grease buildup, prevent slips, and maintain health code compliance. Learn professional floor cleaning techniques and products.
            </p>
          </header>

          {/* Featured Image */}
          <div className="h-96 bg-gray-200 rounded-2xl mb-12 flex items-center justify-center text-gray-500">
            [Restaurant Floor Cleaning Featured Image]
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-8 mb-4">Why Restaurant Floor Cleaning is Critical</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Restaurant kitchen floors face extreme conditions: constant foot traffic, grease splatter, food spills, water exposure, and temperature fluctuations. Unlike residential floors, commercial kitchen floors must meet stringent health code requirements while providing safe, slip-resistant surfaces for staff.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Grease buildup on restaurant floors is one of the most common health code violations in Los Angeles. It creates slip hazards, attracts pests, harbors bacteria, and signals poor overall sanitation to inspectors. Proper floor cleaning and degreasing is essential for safety, compliance, and professional kitchen operations.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">The Three-Step Floor Cleaning Process</h2>
            <p className="text-gray-700 mb-6">
              Professional restaurant floor cleaning follows a systematic approach for optimal results:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Step 1: Preparation and Pre-Cleaning</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Remove all floor mats, equipment on wheels, and movable items
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Sweep or vacuum to remove dry debris and food particles
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Pre-spray high-traffic and heavily soiled areas with degreaser
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Post wet floor signs and restrict access to cleaning area
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-primary">Step 2: Degreasing and Scrubbing</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Apply commercial degreaser solution at proper dilution ratio
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Allow dwell time (typically 5-10 minutes) for chemical action
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Scrub with deck brush, floor machine, or auto-scrubber
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Pay special attention to grout lines, corners, and edges
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Clean floor drains and drain covers
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-green-900">Step 3: Rinsing and Drying</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Rinse thoroughly with clean water to remove all degreaser
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Extract water using wet vacuum or squeegee to floor drain
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Ensure no chemical residue remains (slippery and attracts dirt)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Allow floor to air dry completely before reopening area
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Return mats and equipment to clean, dry floor
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Choosing the Right Floor Cleaning Products</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Restaurant floors require industrial-strength degreasers specifically formulated for food service environments. Standard household cleaners are ineffective against commercial kitchen grease buildup.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-yellow-900">Degreaser Selection Criteria</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <strong>pH Level:</strong> Alkaline degreasers (pH 10-14) for heavy grease
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <strong>NSF Certified:</strong> Approved for food service environments
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <strong>Floor Type Compatible:</strong> Safe for your specific flooring material
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <strong>Dilution Ratio:</strong> Concentrated products more cost-effective
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <strong>Rinse Requirements:</strong> Consider water usage and drain capacity
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <strong>Odor:</strong> Low-odor formulas preferred in operating kitchens
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Floor-Type Specific Cleaning Methods</h2>

            <h3 className="text-2xl font-bold mt-8 mb-4">Quarry Tile Floors</h3>
            <p className="text-gray-700 mb-4">
              Quarry tile is the most common restaurant kitchen flooring due to its durability and slip resistance. However, the porous nature and grout lines require special attention.
            </p>
            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-8 rounded-r-xl">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Use stiff-bristle deck brush or rotary floor machine
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Deep clean grout lines with concentrated degreaser
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Consider periodic acid wash for mineral deposit removal
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Seal grout annually to reduce staining and absorption
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Never use wax or sealers on tile surface (creates slip hazard)
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Sealed Concrete Floors</h3>
            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-8 rounded-r-xl">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Use pH-neutral cleaners to protect sealer integrity
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Avoid harsh acids that can etch or dull the sealer
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Reseal every 1-2 years depending on traffic and wear
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Auto-scrubbers with soft brushes work best for daily cleaning
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Epoxy or Urethane Coated Floors</h3>
            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-8 rounded-r-xl">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Use mild alkaline degreasers to avoid coating damage
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Soft to medium brushes prevent surface scratching
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Inspect regularly for coating deterioration or delamination
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  Recoat or repair damaged areas promptly to prevent moisture intrusion
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Grout Line Deep Cleaning</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Grout lines accumulate grease, bacteria, and discoloration over time. Health inspectors specifically check grout cleanliness as an indicator of overall sanitation practices.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-red-900">Grout Cleaning Procedure</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">1.</span>
                  Apply concentrated degreaser directly to grout lines
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">2.</span>
                  Allow 15-20 minutes dwell time for penetration
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">3.</span>
                  Scrub with stiff grout brush or power scrubber
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">4.</span>
                  Use grout steam cleaner for deep sanitization (monthly)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">5.</span>
                  Rinse thoroughly and extract all residue
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">6.</span>
                  Apply grout sealer after cleaning and complete drying
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 border-2 border-primary rounded-2xl p-8 my-12">
              <h3 className="text-2xl font-bold mb-4 text-primary">Professional Floor Scrubbing Services</h3>
              <p className="text-gray-700 mb-6">
                Hey Spruce provides professional floor scrubbing and degreasing for Los Angeles restaurants. We use industrial auto-scrubbers, high-powered extractors, and commercial-grade degreasers to achieve results that manual cleaning cannot match. Monthly service keeps floors compliant and safe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#quote" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition text-center">
                  Schedule Floor Cleaning
                </Link>
                <a href="tel:+18772532646" className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition text-center">
                  Call 1-877-CLEANING
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Slip Prevention Strategies</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Slips and falls are the leading cause of restaurant worker injuries. Proper floor maintenance is critical for safety and workers' compensation cost control.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Slip Prevention Best Practices</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Clean up spills immediately - don't wait for scheduled cleaning
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Use slip-resistant floor mats in high-splash areas
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Ensure complete degreaser rinsing (residue is slippery)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Maintain proper floor texture (avoid over-sealing or waxing)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Require slip-resistant footwear for all kitchen staff
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Use wet floor signs during and after cleaning
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Test floor slip resistance regularly (NFSI standards)
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Floor Cleaning Schedule</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="py-3 px-4 text-left font-bold">Task</th>
                    <th className="py-3 px-4 text-left font-bold">Frequency</th>
                    <th className="py-3 px-4 text-left font-bold">Method</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-4">Spot cleaning spills</td>
                    <td className="py-3 px-4">As needed (immediately)</td>
                    <td className="py-3 px-4">Mop or towel</td>
                  </tr>
                  <tr className="border-b border-gray-300 bg-gray-50">
                    <td className="py-3 px-4">Sweep/vacuum debris</td>
                    <td className="py-3 px-4">Multiple times daily</td>
                    <td className="py-3 px-4">Broom or vacuum</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-4">Mop with cleaner</td>
                    <td className="py-3 px-4">Nightly (end of shift)</td>
                    <td className="py-3 px-4">Mop and bucket</td>
                  </tr>
                  <tr className="border-b border-gray-300 bg-gray-50">
                    <td className="py-3 px-4">Degrease and scrub</td>
                    <td className="py-3 px-4">Weekly</td>
                    <td className="py-3 px-4">Deck brush or machine</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-4">Deep clean with auto-scrubber</td>
                    <td className="py-3 px-4">Monthly</td>
                    <td className="py-3 px-4">Auto-scrubber + extractor</td>
                  </tr>
                  <tr className="border-b border-gray-300 bg-gray-50">
                    <td className="py-3 px-4">Grout deep cleaning</td>
                    <td className="py-3 px-4">Monthly</td>
                    <td className="py-3 px-4">Grout brush + steam</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 px-4">Floor drain cleaning</td>
                    <td className="py-3 px-4">Weekly</td>
                    <td className="py-3 px-4">Remove cover, clean trap</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4">Professional deep clean</td>
                    <td className="py-3 px-4">Quarterly</td>
                    <td className="py-3 px-4">Commercial equipment</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Floor Drain Maintenance</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Floor drains are critical components of restaurant kitchen floors. Clogged or dirty drains cause water backup, odors, pest attraction, and health code violations.
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4">Weekly Drain Cleaning Procedure</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">1.</span>
                  Remove drain cover and clean thoroughly
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">2.</span>
                  Remove debris and solid matter from drain basket
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">3.</span>
                  Pour hot water and degreaser down drain
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">4.</span>
                  Use drain brush to scrub sides of drain opening
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">5.</span>
                  Check that drain flows freely without backup
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">6.</span>
                  Replace clean drain cover
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Common Floor Cleaning Mistakes</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-xl">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <strong>Using dirty mop water:</strong> Spreads grease instead of removing it
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <strong>Incorrect degreaser dilution:</strong> Ineffective or wasteful
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <strong>Insufficient dwell time:</strong> Doesn't allow chemical action
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <strong>Poor rinsing:</strong> Leaves slippery residue that attracts more dirt
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <strong>Neglecting baseboards and edges:</strong> Inspectors check these areas
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <strong>Using acidic cleaners on alkaline-sensitive floors:</strong> Damages surface
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Health Code Compliance</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Los Angeles health inspectors evaluate floor cleanliness during every inspection. Clean, well-maintained floors demonstrate overall sanitation commitment and proper food safety practices. Violations related to floors include: grease buildup, cracked or damaged flooring, dirty grout lines, clogged or dirty floor drains, and inadequate cleaning around and under equipment.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Maintain documentation of professional floor cleaning services, take before/after photos, and conduct weekly self-inspections to identify issues before official inspections occur.
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Restaurant Kitchen Deep Cleaning Guide', link: '/blog/restaurant-kitchen-deep-cleaning-guide' },
                { title: 'NFPA 96 Hood Cleaning Compliance', link: '/blog/nfpa-96-compliance-hood-cleaning' },
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
