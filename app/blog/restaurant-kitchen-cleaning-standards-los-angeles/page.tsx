import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: "/blog/restaurant-kitchen-cleaning-standards-los-angeles",
  },
  title: 'Restaurant Kitchen Cleaning Standards Los Angeles 2025 | Commercial Kitchen Sanitation Guide',
  description: 'Complete guide to restaurant kitchen cleaning standards for Los Angeles. Daily, weekly, and monthly cleaning protocols, equipment cleaning, sanitation requirements, and health code compliance.',
  keywords: 'restaurant kitchen cleaning standards, commercial kitchen sanitation, kitchen cleaning checklist, restaurant cleaning protocols los angeles, health code cleaning requirements, professional kitchen cleaning',
};

export default function KitchenCleaningStandardsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/blog" className="hover:text-white">Blog</Link> / <span>Kitchen Cleaning Standards</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight max-w-4xl">
            Restaurant Kitchen Cleaning Standards for Los Angeles (2025)
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-4">
            Professional guide to commercial kitchen cleaning protocols, sanitation standards, and daily/weekly/monthly cleaning schedules for LA County restaurants.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span>Updated January 2025</span>
            <span>•</span>
            <span>18 min read</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: '1. Why Kitchen Cleaning Standards Matter', href: '#why-standards' },
              { title: '2. Daily Cleaning Requirements', href: '#daily-cleaning' },
              { title: '3. Weekly Deep Cleaning Tasks', href: '#weekly-cleaning' },
              { title: '4. Monthly & Quarterly Maintenance', href: '#monthly-cleaning' },
              { title: '5. Equipment-Specific Cleaning Protocols', href: '#equipment' },
              { title: '6. Floor Cleaning & Degreasing Standards', href: '#floors' },
              { title: '7. Wall & Ceiling Maintenance', href: '#walls-ceilings' },
              { title: '8. Food Contact Surfaces', href: '#food-surfaces' },
              { title: '9. Sanitation vs. Cleaning', href: '#sanitation' },
              { title: '10. Chemical Safety & Product Selection', href: '#chemicals' },
              { title: '11. Staff Training & Accountability', href: '#training' },
              { title: '12. Professional Cleaning Services', href: '#professional' },
            ].map((item, idx) => (
              <a key={idx} href={item.href} className="text-primary hover:underline font-medium">
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="container-custom max-w-4xl">

          {/* Section 1 */}
          <section id="why-standards" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Why Kitchen Cleaning Standards Matter</h2>

            <p className="text-lg text-gray-700 mb-6">
              A commercial restaurant kitchen is one of the most challenging environments to keep clean. Between high heat, grease splatter, heavy foot traffic, constant food preparation, and tight timelines, maintaining proper sanitation isn't just about appearances—it's about food safety, <a href="https://www.cdph.ca.gov/Programs/CEH/DFDCS/Pages/FDBPrograms/FoodSafetyProgram/RetailFoodCode.aspx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">health code compliance</a>, employee safety, and your restaurant's reputation.
            </p>

            <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8">
              <h3 className="font-bold text-lg mb-3">The Cost of Poor Kitchen Cleaning:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Health code violations</strong> - Can result in fines, lower inspection scores, or closure</li>
                <li>• <strong>Foodborne illness outbreaks</strong> - Legal liability and permanent reputation damage</li>
                <li>• <strong>Pest infestations</strong> - Roaches, rodents thrive in dirty kitchens</li>
                <li>• <strong>Equipment failure</strong> - Grease buildup causes breakdowns and fire hazards</li>
                <li>• <strong>Employee injuries</strong> - Slippery floors lead to workplace accidents</li>
                <li>• <strong>Lost customers</strong> - Word spreads fast about dirty restaurants</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6">
              This guide provides professional-grade cleaning standards used by successful multi-location restaurant chains in Los Angeles. Whether you're a single-location owner or managing facilities across multiple sites, these protocols will help you maintain consistent cleanliness and pass health inspections.
            </p>
          </section>

          {/* Section 2 */}
          <section id="daily-cleaning" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Daily Cleaning Requirements</h2>

            <p className="text-gray-700 mb-6">
              Daily cleaning is your foundation. These tasks must be completed every single day your kitchen operates—no exceptions.
            </p>

            <h3 className="text-2xl font-bold mb-4">End-of-Shift Kitchen Cleaning Checklist</h3>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                  Food Preparation Surfaces
                </h4>
                <p className="text-gray-700 mb-3"><strong>Frequency:</strong> After each use, minimum every 4 hours</p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Clear all food and debris</li>
                  <li>• Wash with hot soapy water</li>
                  <li>• Rinse thoroughly</li>
                  <li>• Sanitize with approved chemical (test strips required)</li>
                  <li>• Air dry or wipe with clean towel</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                  Cooking Equipment Surfaces
                </h4>
                <p className="text-gray-700 mb-3"><strong>Frequency:</strong> After final use each day</p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Allow equipment to cool to safe temperature</li>
                  <li>• Remove food debris and grease</li>
                  <li>• Clean exterior surfaces of ranges, ovens, fryers, griddles</li>
                  <li>• Degrease areas around burners and heat sources</li>
                  <li>• Wipe down control panels and handles</li>
                  <li>• Clean drip pans and catch trays</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                  Floors
                </h4>
                <p className="text-gray-700 mb-3"><strong>Frequency:</strong> End of each shift</p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Sweep entire kitchen area</li>
                  <li>• Remove and clean floor mats</li>
                  <li>• Mop with degreasing solution</li>
                  <li>• Pay special attention to areas around fryers and grills</li>
                  <li>• Clean around and under equipment (accessible areas)</li>
                  <li>• Squeegee excess water toward drains</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                  Sinks & Dishwashing Area
                </h4>
                <p className="text-gray-700 mb-3"><strong>Frequency:</strong> After final use</p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Empty and clean all sinks (prep, hand, 3-compartment)</li>
                  <li>• Remove food from drain screens and garbage disposals</li>
                  <li>• Clean and sanitize dish machine (if applicable)</li>
                  <li>• Refill sanitizer solution and test concentration</li>
                  <li>• Wipe down surrounding counters and walls</li>
                  <li>• Clean and sanitize drying racks</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
                  Waste Removal
                </h4>
                <p className="text-gray-700 mb-3"><strong>Frequency:</strong> End of shift or when full</p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Empty all trash and recycling bins</li>
                  <li>• Replace liners</li>
                  <li>• Clean exterior of trash receptacles</li>
                  <li>• Take waste to dumpster/compactor</li>
                  <li>• Clean area around waste bins</li>
                  <li>• Ensure dumpster lids are closed</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
                  Storage Areas
                </h4>
                <p className="text-gray-700 mb-3"><strong>Frequency:</strong> Daily inspection and spot cleaning</p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Check refrigeration units for spills, wipe as needed</li>
                  <li>• Organize and rotate stock (FIFO method)</li>
                  <li>• Remove expired or spoiled items</li>
                  <li>• Wipe down shelving units</li>
                  <li>• Sweep and spot-mop dry storage floors</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <p className="font-bold mb-2">⏰ Time Management Tip:</p>
              <p className="text-gray-700">
                Daily cleaning should take 45-90 minutes depending on kitchen size. Build this into your closing procedures. Staff should never leave until daily cleaning is complete and verified by a manager.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="weekly-cleaning" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Weekly Deep Cleaning Tasks</h2>

            <p className="text-gray-700 mb-6">
              Weekly deep cleaning addresses areas that daily cleaning doesn't reach. Schedule these tasks on slower days or during closure periods.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border-l-4 border-primary p-6 shadow-md">
                <h4 className="font-bold text-lg mb-3">Walls & Splash Zones</h4>
                <p className="text-gray-700 mb-3">
                  Walls around cooking equipment accumulate grease faster than you realize. Weekly wall cleaning prevents buildup that becomes a fire hazard and health violation.
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Degrease walls behind and around cooking equipment</li>
                  <li>• Clean tile backsplashes with degreasing agent</li>
                  <li>• Wipe down all wall-mounted equipment (shelves, racks, fire suppression)</li>
                  <li>• Clean light fixtures and switches</li>
                  <li>• Address any visible grease splatter immediately</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-primary p-6 shadow-md">
                <h4 className="font-bold text-lg mb-3">Equipment Deep Clean</h4>
                <p className="text-gray-700 mb-3">
                  Move beyond daily surface cleaning to deep clean equipment interiors and hard-to-reach areas.
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• <strong>Ovens:</strong> Remove racks, clean interior, degrease door and seals</li>
                  <li>• <strong>Fryers:</strong> Boil out or filter oil, clean heating elements and exterior</li>
                  <li>• <strong>Griddles/Grills:</strong> Deep clean surface, scrape grease traps, clean burners</li>
                  <li>• <strong>Refrigeration:</strong> Empty, defrost if needed, clean interior and gaskets</li>
                  <li>• <strong>Reach-ins:</strong> Wipe all shelves, clean door handles and exterior</li>
                  <li>• <strong>Ice machines:</strong> Clean interior, check for mold/slime</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-primary p-6 shadow-md">
                <h4 className="font-bold text-lg mb-3">Floor Scrubbing & Degreasing</h4>
                <p className="text-gray-700 mb-3">
                  Daily mopping isn't enough. Weekly <Link href="/floor-scrubbing" className="text-primary hover:underline font-semibold">floor scrubbing</Link> removes embedded grease and prevents slip hazards.
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Use auto-scrubber or walk-behind scrubber (if available)</li>
                  <li>• Apply heavy-duty degreaser to kitchen floors</li>
                  <li>• Scrub with stiff brush or machine</li>
                  <li>• Rinse thoroughly and extract water</li>
                  <li>• Clean floor drains and surrounding areas</li>
                  <li>• Address grout lines in tile floors</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-primary p-6 shadow-md">
                <h4 className="font-bold text-lg mb-3">Dry Storage Deep Clean</h4>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Empty one section of shelving completely</li>
                  <li>• Wipe down shelves with sanitizer</li>
                  <li>• Vacuum or sweep behind/under shelving units</li>
                  <li>• Check for pest activity (droppings, gnaw marks)</li>
                  <li>• Reorganize and label inventory</li>
                  <li>• Rotate through entire dry storage over 4-week period</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-primary p-6 shadow-md">
                <h4 className="font-bold text-lg mb-3">Ventilation & Filters</h4>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Remove and clean hood filters (run through dish machine or soak in degreaser)</li>
                  <li>• Wipe down hood interior and exterior</li>
                  <li>• Clean grease traps and collection cups</li>
                  <li>• Check HVAC filters and replace if needed</li>
                  <li>• Clean ceiling vents and returns</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-primary p-6 shadow-md">
                <h4 className="font-bold text-lg mb-3">Front-of-House Kitchen Interface</h4>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Deep clean expo line/pass station</li>
                  <li>• Clean and polish all stainless steel facing FOH</li>
                  <li>• Organize and clean ticket printer area</li>
                  <li>• Wipe down any glass or windows between kitchen and dining</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-primary p-6">
              <p className="font-bold mb-2">💡 Pro Tip:</p>
              <p className="text-gray-700">
                Many LA restaurants schedule weekly deep cleaning on Monday (slowest day) or hire professional <Link href="/nightly-cleaning" className="text-primary hover:underline font-semibold">nightly cleaning services</Link> to handle weekly tasks consistently without pulling kitchen staff from prep.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="monthly-cleaning" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Monthly & Quarterly Maintenance</h2>

            <p className="text-gray-700 mb-6">
              Monthly and quarterly cleaning addresses long-term buildup and hard-to-access areas. These are often the difference between passing and failing health inspections.
            </p>

            <h3 className="text-2xl font-bold mb-4">Monthly Tasks</h3>

            <div className="space-y-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-2">Equipment Pull-Outs</h4>
                <p className="text-gray-700">
                  Move all movable equipment away from walls to clean behind and underneath. This includes prep tables, refrigeration units, and smaller cooking equipment. Address grease buildup, food debris, and dust.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-2">Ceiling Deep Clean</h4>
                <p className="text-gray-700">
                  Degrease kitchen ceilings, especially areas above cooking equipment. Remove dust and cobwebs. Inspect for moisture damage or mold.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-2">Walk-In Refrigeration/Freezers</h4>
                <p className="text-gray-700">
                  Schedule during slower periods to fully empty, defrost (if needed), and deep clean walk-ins. Clean walls, ceilings, floors, shelving, and door gaskets. Reorganize to improve airflow.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-2">Drain Cleaning & Maintenance</h4>
                <p className="text-gray-700">
                  Professional drain cleaning prevents backups and odors. Clean floor drains, prep sink drains, and grease traps. Inspect for slow drainage issues.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-2">Small Wares Organization</h4>
                <p className="text-gray-700">
                  Deep clean storage areas for pots, pans, utensils, and small equipment. Discard damaged items. Reorganize for efficiency.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Quarterly Tasks</h3>

            <div className="space-y-4 mb-8">
              <div className="bg-white border-l-4 border-secondary p-5 shadow-md">
                <h4 className="font-bold mb-2">Comprehensive <Link href="/deep-kitchen-cleaning" className="text-primary hover:underline">Deep Kitchen Cleaning</Link></h4>
                <p className="text-gray-700 mb-3">
                  Professional-level deep clean that addresses every surface and area:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Pull and clean behind ALL equipment (including anchored pieces if possible)</li>
                  <li>• Strip and re-finish floors if applicable</li>
                  <li>• Degrease entire ceiling including rafters and ductwork (visible portions)</li>
                  <li>• Deep clean all walls from floor to ceiling</li>
                  <li>• Clean all light fixtures, replace burned bulbs</li>
                  <li>• Inspect and clean all door tracks, hinges, seals</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-secondary p-5 shadow-md">
                <h4 className="font-bold mb-2">Hood & Exhaust System Professional Cleaning</h4>
                <p className="text-gray-700">
                  <a href="https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=96" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NFPA 96</a> requires professional <Link href="/hood-exhaust-cleaning" className="text-primary hover:underline font-semibold">hood and exhaust cleaning</Link> every 3-6 months depending on cooking volume. This is not a DIY task—hire certified professionals. Keep documentation for inspectors.
                </p>
              </div>

              <div className="bg-white border-l-4 border-secondary p-5 shadow-md">
                <h4 className="font-bold mb-2">Equipment Preventive Maintenance</h4>
                <p className="text-gray-700">
                  Schedule <Link href="/preventive-maintenance" className="text-primary hover:underline font-semibold">preventive maintenance</Link> for all cooking equipment, refrigeration, dishwashers, and HVAC. Clean coils, replace filters, calibrate thermostats, inspect electrical connections.
                </p>
              </div>

              <div className="bg-white border-l-4 border-secondary p-5 shadow-md">
                <h4 className="font-bold mb-2">Tile & Grout Deep Clean/Seal</h4>
                <p className="text-gray-700">
                  If you have tile floors or walls, quarterly deep cleaning and re-sealing of grout prevents staining and bacterial growth. Consider professional tile cleaning services.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary rounded-xl p-6">
              <h4 className="font-bold text-lg mb-3">Recommended: Professional Quarterly Deep Clean</h4>
              <p className="text-gray-700 mb-3">
                Most successful multi-location restaurant chains in Los Angeles contract professional <Link href="/commercial-kitchen-cleaning" className="text-primary hover:underline font-semibold">commercial kitchen cleaning services</Link> for quarterly deep cleans. Professional teams have:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• Industrial degreasing equipment and chemicals</li>
                <li>• Experience meeting LA County health code standards</li>
                <li>• Ability to move and clean around heavy equipment safely</li>
                <li>• Documentation and photo evidence for compliance records</li>
              </ul>
            </div>
          </section>

          {/* Section 5 - Equipment */}
          <section id="equipment" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Equipment-Specific Cleaning Protocols</h2>

            <p className="text-gray-700 mb-6">
              Different equipment requires different cleaning methods. Here are detailed protocols for common commercial kitchen equipment:
            </p>

            <div className="space-y-8">

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Ranges & Ovens</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Daily:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm ml-4">
                      <li>• Wipe down exterior surfaces</li>
                      <li>• Clean cooktop/range surface</li>
                      <li>• Empty and clean drip pans</li>
                      <li>• Clean oven door and window</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Weekly:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm ml-4">
                      <li>• Remove oven racks, soak and scrub</li>
                      <li>• Clean oven interior with degreaser</li>
                      <li>• Degrease burners and grates</li>
                      <li>• Clean controls and knobs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Commercial Fryers</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Daily:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm ml-4">
                      <li>• Filter oil or full oil change (based on volume)</li>
                      <li>• Wipe exterior surfaces</li>
                      <li>• Clean basket holders</li>
                      <li>• Empty and clean crumb trays</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Weekly:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm ml-4">
                      <li>• Boil out fryer (deep clean interior)</li>
                      <li>• Clean heating elements</li>
                      <li>• Degrease exterior and sides</li>
                      <li>• Clean area around and under fryer</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Griddles & Flat Tops</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">After Each Use:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm ml-4">
                      <li>• Scrape while still warm</li>
                      <li>• Clean with griddle brick or screen</li>
                      <li>• Wipe with damp cloth</li>
                      <li>• Re-season if needed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Weekly:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm ml-4">
                      <li>• Deep clean with degreaser</li>
                      <li>• Remove and clean grease traps</li>
                      <li>• Clean burners underneath</li>
                      <li>• Polish exterior stainless</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Walk-In Refrigeration/Freezers</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Daily:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm ml-4">
                      <li>• Spot clean spills immediately</li>
                      <li>• Check and record temperatures</li>
                      <li>• Remove expired items</li>
                      <li>• Sweep floors</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Monthly:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm ml-4">
                      <li>• Empty completely (schedule during slow period)</li>
                      <li>• Defrost if ice buildup present</li>
                      <li>• Clean walls, ceiling, floors, shelves</li>
                      <li>• Clean door gaskets and handles</li>
                      <li>• Clean condensation coils</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Dish Machines</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Daily:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm ml-4">
                      <li>• Remove and clean all screens/scrap trays</li>
                      <li>• Wipe down exterior</li>
                      <li>• Clean spray arms (remove debris)</li>
                      <li>• Run deliming cycle (if available)</li>
                      <li>• Leave door open to air dry</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Weekly:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm ml-4">
                      <li>• Deep clean interior chamber</li>
                      <li>• Inspect and clean spray nozzles</li>
                      <li>• Check chemical levels and pumps</li>
                      <li>• Clean/replace curtains if torn</li>
                      <li>• Verify temperatures with thermometer</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Section 6 - Floors */}
          <section id="floors" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Floor Cleaning & Degreasing Standards</h2>

            <p className="text-gray-700 mb-6">
              Restaurant kitchen floors endure constant abuse: foot traffic, grease, water, dropped food, and harsh chemicals. Proper floor maintenance is critical for safety, sanitation, and passing health inspections.
            </p>

            <h3 className="text-2xl font-bold mb-4">Floor Types & Cleaning Methods</h3>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Floor Type</th>
                    <th className="px-6 py-4 text-left font-bold">Daily Cleaning</th>
                    <th className="px-6 py-4 text-left font-bold">Weekly Deep Clean</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Quarry Tile</td>
                    <td className="px-6 py-4">Sweep, mop with degreaser</td>
                    <td className="px-6 py-4">Machine scrub, grout clean, seal quarterly</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Ceramic Tile</td>
                    <td className="px-6 py-4">Sweep, mop with neutral cleaner</td>
                    <td className="px-6 py-4">Scrub with brush, steam clean grout</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Concrete (Sealed)</td>
                    <td className="px-6 py-4">Sweep, damp mop</td>
                    <td className="px-6 py-4">Power scrub, re-seal annually</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Epoxy Coated</td>
                    <td className="px-6 py-4">Sweep, mop with mild degreaser</td>
                    <td className="px-6 py-4">Machine scrub, avoid harsh chemicals</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Vinyl/LVT</td>
                    <td className="px-6 py-4">Sweep, damp mop (no excessive water)</td>
                    <td className="px-6 py-4">Strip and wax quarterly (not in cook areas)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Professional Floor Scrubbing Protocol</h3>
            <p className="text-gray-700 mb-4">
              Weekly floor scrubbing should follow this process:
            </p>

            <ol className="space-y-4 ml-6 mb-8">
              <li className="text-gray-700">
                <strong>1. Clear the area:</strong> Move any portable equipment, mats, trash cans
              </li>
              <li className="text-gray-700">
                <strong>2. Sweep thoroughly:</strong> Remove all loose debris
              </li>
              <li className="text-gray-700">
                <strong>3. Apply degreaser:</strong> Use commercial kitchen degreaser at proper dilution, allow 5-10 min dwell time
              </li>
              <li className="text-gray-700">
                <strong>4. Scrub:</strong> Use auto-scrubber, walk-behind scrubber, or stiff deck brush with rotary machine
              </li>
              <li className="text-gray-700">
                <strong>5. Extract:</strong> Remove dirty water with wet vacuum or squeegee to drains
              </li>
              <li className="text-gray-700">
                <strong>6. Rinse:</strong> Mop with clean water to remove chemical residue
              </li>
              <li className="text-gray-700">
                <strong>7. Dry:</strong> Use fans or allow to air dry completely before replacing mats/equipment
              </li>
            </ol>

            <div className="bg-red-100 border-l-4 border-red-600 p-6">
              <p className="font-bold mb-2">⚠️ Safety Alert:</p>
              <p className="text-gray-700">
                Wet floors are the #1 cause of kitchen workplace injuries. Always use "Wet Floor" signs, ensure proper drainage, and never allow standing water. Require slip-resistant footwear for all kitchen staff.
              </p>
            </div>
          </section>

          {/* Section 7 - Walls & Ceilings */}
          <section id="walls-ceilings" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Wall & Ceiling Maintenance</h2>

            <p className="text-gray-700 mb-6">
              Grease doesn't just accumulate on floors and equipment—it travels upward via steam and splatter. Walls and ceilings require regular degreasing to prevent fire hazards and health violations.
            </p>

            <h3 className="text-2xl font-bold mb-4">Wall Cleaning Schedule</h3>

            <div className="space-y-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">DAILY</span>
                  Splash Zones
                </h4>
                <p className="text-gray-700">
                  Walls directly behind fryers, grills, and ranges should be wiped daily to remove grease splatter. Use degreasing cleaner and clean cloth.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">WEEKLY</span>
                  Cook Line Walls
                </h4>
                <p className="text-gray-700">
                  All walls in cooking areas should be degreased weekly from floor to 6-7 feet high. Pay special attention to tile backsplashes and FRP (fiberglass reinforced panels).
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs">MONTHLY</span>
                  Full Kitchen Walls
                </h4>
                <p className="text-gray-700">
                  Degrease all kitchen walls floor-to-ceiling, including prep areas, dish areas, and storage. Clean wall-mounted equipment (shelves, paper towel holders, thermometers).
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs">QUARTERLY</span>
                  Ceiling Deep Clean
                </h4>
                <p className="text-gray-700">
                  Ceilings accumulate grease, dust, and moisture. Quarterly cleaning prevents dripping, discoloration, and mold. Use extension poles with degreasing solution. Inspect for damage or water leaks.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <p className="font-bold mb-2">🔥 Fire Hazard Warning:</p>
              <p className="text-gray-700">
                Grease buildup on walls and ceilings is a serious fire hazard. LACDPH inspectors specifically look for this. Heavy grease accumulation can result in major violation points and required immediate correction.
              </p>
            </div>
          </section>

          {/* Section 8 - Food Surfaces */}
          <section id="food-surfaces" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Food Contact Surfaces</h2>

            <p className="text-gray-700 mb-6">
              Food contact surfaces require the highest level of sanitation. These are any surfaces that touch food, or that food could drip onto.
            </p>

            <h3 className="text-2xl font-bold mb-4">What Qualifies as a Food Contact Surface?</h3>
            <ul className="space-y-2 text-gray-700 mb-6 ml-6">
              <li>• Cutting boards and prep tables</li>
              <li>• Knives, utensils, tongs, spatulas</li>
              <li>• Mixing bowls, pans, serving dishes</li>
              <li>• Slicer blades and food processor components</li>
              <li>• Interior of food containers and storage bins</li>
              <li>• Scales and measuring equipment</li>
              <li>• Microwave and warming cabinet interiors</li>
              <li>• Ice bins and scoops</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">Required Cleaning & Sanitizing Process</h3>

            <div className="bg-white border-2 border-primary rounded-xl p-6 mb-6">
              <h4 className="font-bold text-lg mb-4">4-Step Process (Every 4 Hours or Between Tasks):</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h5 className="font-bold mb-1">Scrape</h5>
                    <p className="text-gray-700 text-sm">Remove all visible food particles and debris</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h5 className="font-bold mb-1">Wash</h5>
                    <p className="text-gray-700 text-sm">Clean with hot soapy water (110°F minimum), scrub thoroughly</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h5 className="font-bold mb-1">Rinse</h5>
                    <p className="text-gray-700 text-sm">Rinse with clean water to remove all soap residue</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h5 className="font-bold mb-1">Sanitize</h5>
                    <p className="text-gray-700 text-sm">Immerse in or spray with approved sanitizer at proper concentration, allow required contact time (typically 30-60 seconds), air dry</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-100 border-l-4 border-red-600 p-6">
              <p className="font-bold mb-2">🚨 Critical Violation:</p>
              <p className="text-gray-700">
                Using the same cutting board for raw chicken and then vegetables without proper washing and sanitizing in between is a major health code violation and cross-contamination risk. Always maintain separate color-coded boards or properly sanitize between uses.
              </p>
            </div>
          </section>

          {/* Section 9 - Sanitation */}
          <section id="sanitation" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Sanitation vs. Cleaning: Understanding the Difference</h2>

            <p className="text-gray-700 mb-6">
              Many restaurant operators don't realize that <strong>cleaning</strong> and <strong>sanitizing</strong> are two completely different processes—both are required.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">Cleaning</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Purpose:</strong> Remove visible dirt, food, grease, and debris
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Method:</strong> Detergent or degreaser + hot water + scrubbing
                </p>
                <p className="text-gray-700">
                  <strong>Result:</strong> Surface looks clean but may still have bacteria
                </p>
              </div>

              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-green-700">Sanitizing</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Purpose:</strong> Kill bacteria, viruses, and pathogens to safe levels
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Method:</strong> Chemical sanitizer at proper concentration + contact time
                </p>
                <p className="text-gray-700">
                  <strong>Result:</strong> Surface is microbiologically safe for food contact
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <p className="font-bold mb-2">⚠️ Common Mistake:</p>
              <p className="text-gray-700">
                You must clean BEFORE sanitizing. Sanitizer doesn't work on dirty surfaces. Food residue, grease, and debris block sanitizer from reaching bacteria. Always clean first, then sanitize.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Approved Sanitizers for Food Service</h3>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Sanitizer</th>
                    <th className="px-6 py-4 text-left font-bold">Concentration</th>
                    <th className="px-6 py-4 text-left font-bold">Water Temp</th>
                    <th className="px-6 py-4 text-left font-bold">Contact Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Chlorine (Bleach)</td>
                    <td className="px-6 py-4">50-100 ppm</td>
                    <td className="px-6 py-4">75°F - 120°F</td>
                    <td className="px-6 py-4">7 seconds</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Quaternary Ammonia</td>
                    <td className="px-6 py-4">200 ppm</td>
                    <td className="px-6 py-4">75°F min</td>
                    <td className="px-6 py-4">30 seconds</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Iodine</td>
                    <td className="px-6 py-4">12.5-25 ppm</td>
                    <td className="px-6 py-4">68°F - 120°F</td>
                    <td className="px-6 py-4">30 seconds</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-primary p-6">
              <p className="font-bold mb-2">💡 Testing Required:</p>
              <p className="text-gray-700">
                LA County health code requires test strips for your sanitizer type. Test concentration at the start of each shift and throughout the day. Replace sanitizer solution when concentration drops or water becomes visibly dirty.
              </p>
            </div>
          </section>

          {/* Section 10 - Chemicals */}
          <section id="chemicals" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Chemical Safety & Product Selection</h2>

            <p className="text-gray-700 mb-6">
              Using the right cleaning chemicals correctly is essential for safety, effectiveness, and health code compliance.
            </p>

            <h3 className="text-2xl font-bold mb-4">Essential Chemicals for Restaurant Kitchens</h3>

            <div className="space-y-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-2">Heavy-Duty Degreaser</h4>
                <p className="text-gray-700 text-sm mb-2"><strong>Use:</strong> Cooking equipment, walls, hoods, floors</p>
                <p className="text-gray-700 text-sm"><strong>Key Info:</strong> Follow manufacturer dilution ratios. Allow dwell time for grease breakdown. Always rinse thoroughly.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-2">All-Purpose Cleaner/Degreaser</h4>
                <p className="text-gray-700 text-sm mb-2"><strong>Use:</strong> Daily surface cleaning, prep tables, counters</p>
                <p className="text-gray-700 text-sm"><strong>Key Info:</strong> Less aggressive than heavy-duty, safe for daily use on most surfaces.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-2">Sanitizer (Quat, Chlorine, or Iodine)</h4>
                <p className="text-gray-700 text-sm mb-2"><strong>Use:</strong> Food contact surfaces after cleaning</p>
                <p className="text-gray-700 text-sm"><strong>Key Info:</strong> Must have test strips. Mix fresh daily. Follow proper concentrations.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-2">Dish Machine Detergent & Rinse Aid</h4>
                <p className="text-gray-700 text-sm mb-2"><strong>Use:</strong> Automated dishwashing</p>
                <p className="text-gray-700 text-sm"><strong>Key Info:</strong> Use machine-specific products. Never substitute hand dish soap.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-2">Floor Cleaner/Degreaser</h4>
                <p className="text-gray-700 text-sm mb-2"><strong>Use:</strong> Daily floor mopping, weekly scrubbing</p>
                <p className="text-gray-700 text-sm"><strong>Key Info:</strong> Choose product appropriate for your floor type. Avoid products that leave residue.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-2">Delimer/Descaler</h4>
                <p className="text-gray-700 text-sm mb-2"><strong>Use:</strong> Dish machines, coffee equipment, ice machines</p>
                <p className="text-gray-700 text-sm"><strong>Key Info:</strong> Removes mineral deposits. Use weekly or per manufacturer schedule.</p>
              </div>
            </div>

            <div className="bg-red-100 border-l-4 border-red-600 p-6 mb-8">
              <p className="font-bold mb-2">☠️ Chemical Safety Rules (<a href="https://www.dir.ca.gov/dosh/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CalOSHA Requirements</a>):</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Never mix chemicals (especially bleach with anything)</li>
                <li>• Always label spray bottles and containers</li>
                <li>• Store chemicals away from food and food prep areas</li>
                <li>• Keep Safety Data Sheets (SDS) accessible</li>
                <li>• Provide gloves and eye protection when required</li>
                <li>• Train all staff on proper chemical use</li>
                <li>• Use only food-safe, EPA-registered products</li>
              </ul>
            </div>
          </section>

          {/* Section 11 - Training */}
          <section id="training" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Staff Training & Accountability</h2>

            <p className="text-gray-700 mb-6">
              Even with perfect cleaning protocols, execution fails without proper training and accountability systems.
            </p>

            <h3 className="text-2xl font-bold mb-4">Training Requirements</h3>

            <div className="bg-white border-2 border-primary rounded-xl p-6 mb-8">
              <h4 className="font-bold text-lg mb-4">Every Kitchen Employee Should Be Trained On (<a href="https://www.servsafe.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ServSafe</a> or equivalent):</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-gray-700">
                  <li>• Proper handwashing procedure</li>
                  <li>• When to wash hands (specific scenarios)</li>
                  <li>• <a href="https://www.cdph.ca.gov/Programs/CEH/DFDCS/CDPH%20Document%20Library/FDB/FoodSafetyProgram/NoBarHandContact/BareHandContactFAQ.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Glove use</a> for ready-to-eat foods</li>
                  <li>• Food storage hierarchy</li>
                  <li>• Temperature danger zone (41°F-135°F)</li>
                  <li>• Cross-contamination prevention</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cleaning vs sanitizing difference</li>
                  <li>• How to test sanitizer concentration</li>
                  <li>• Proper chemical handling (<a href="https://www.dir.ca.gov/dosh/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CalOSHA</a>)</li>
                  <li>• Equipment-specific cleaning procedures</li>
                  <li>• Daily closing checklist responsibilities</li>
                  <li>• When to report equipment issues</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Accountability Systems That Work</h3>

            <div className="space-y-4 mb-8">
              <div className="bg-white border-l-4 border-green-500 p-5 shadow-md">
                <h4 className="font-bold mb-2">1. Daily Cleaning Checklists</h4>
                <p className="text-gray-700">
                  Physical checklists that must be initialed and dated. Manager reviews and signs off each night. Keep for 90 days minimum.
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-500 p-5 shadow-md">
                <h4 className="font-bold mb-2">2. Photo Documentation</h4>
                <p className="text-gray-700">
                  Many restaurants require closing staff to take photos of key areas (dish area, floors, equipment) before leaving. Photos timestamp automatically and provide proof of completion.
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-500 p-5 shadow-md">
                <h4 className="font-bold mb-2">3. Weekly Manager Walk-Throughs</h4>
                <p className="text-gray-700">
                  Managers conduct formal walk-through inspections weekly using same criteria as health inspectors. Document findings and assign corrective actions.
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-500 p-5 shadow-md">
                <h4 className="font-bold mb-2">4. Performance Tied to Cleanliness</h4>
                <p className="text-gray-700">
                  Successful chains tie bonuses or reviews to cleanliness scores. When managers and staff have skin in the game, standards improve.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-primary p-6">
              <p className="font-bold mb-2">💡 Multi-Location Tip:</p>
              <p className="text-gray-700">
                Restaurant groups should maintain standardized cleaning protocols across all locations. Use the same checklists, same chemicals, same training materials. This ensures consistent quality and makes multi-unit management easier. Consider professional <Link href="/multi-location-cleaning" className="text-primary hover:underline font-semibold">multi-location cleaning services</Link> for standardization.
              </p>
            </div>
          </section>

          {/* Section 12 - Professional Services */}
          <section id="professional" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Professional Cleaning Services</h2>

            <p className="text-gray-700 mb-6">
              Many successful restaurants in Los Angeles supplement in-house cleaning with professional services for tasks that require specialized equipment, expertise, or time that kitchen staff don't have. Professional services help maintain compliance with <a href="https://www.cdph.ca.gov/Programs/CEH/DFDCS/Pages/FDBPrograms/FoodSafetyProgram/RetailFoodCode.aspx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">California health regulations</a> and <a href="https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=96" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">fire safety standards</a>.
            </p>

            <h3 className="text-2xl font-bold mb-4">When to Consider Professional Cleaning</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-bold mb-3">Nightly Cleaning Services</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Best for:</strong> High-volume kitchens, 24-hour operations, chains
                </p>
                <p className="text-gray-700 text-sm">
                  Professional crews handle all daily cleaning after close (floors, equipment surfaces, dish area) allowing your staff to focus on food prep and service.
                </p>
                <Link href="/nightly-cleaning" className="text-primary hover:underline font-semibold text-sm">Learn more →</Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-bold mb-3">Weekly/Monthly Deep Cleaning</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Best for:</strong> Supplementing in-house daily cleaning
                </p>
                <p className="text-gray-700 text-sm">
                  Professional teams tackle weekly/monthly tasks like wall degreasing, equipment pull-outs, floor scrubbing with industrial machines.
                </p>
                <Link href="/commercial-kitchen-cleaning" className="text-primary hover:underline font-semibold text-sm">Learn more →</Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-bold mb-3">Quarterly Deep Resets</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Best for:</strong> Pre-inspection, seasonal deep cleans
                </p>
                <p className="text-gray-700 text-sm">
                  Comprehensive top-to-bottom cleaning that addresses every surface, behind all equipment, ceilings, walls, floors. Often scheduled before health inspections.
                </p>
                <Link href="/deep-kitchen-cleaning" className="text-primary hover:underline font-semibold text-sm">Learn more →</Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-bold mb-3">Emergency/Post-Violation Cleaning</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Best for:</strong> Failed inspections, emergency situations
                </p>
                <p className="text-gray-700 text-sm">
                  Same-day or next-day service to address health code violations before re-inspection. Intensive cleaning to correct specific issues.
                </p>
                <Link href="/contact" className="text-primary hover:underline font-semibold text-sm">Get emergency service →</Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why LA Restaurant Chains Use Professional Cleaning</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span><strong>Consistency:</strong> Same standards every location, every shift</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span><strong>Better Results:</strong> Industrial equipment and expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span><strong>Labor Savings:</strong> Kitchen staff focuses on food, not floors</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span><strong>Documentation:</strong> Photo proof of cleaning for compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span><strong>Health Code Expertise:</strong> Pros know what inspectors look for</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span><strong>Accountability:</strong> Professional SLAs and quality guarantees</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Additional Resources */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>

            <h3 className="text-2xl font-bold mb-4">Government & Health Agency Resources</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">FDA Food Code</h4>
                <p className="text-gray-700 mb-2">Comprehensive federal guidance on food safety that serves as the model for state and local regulations</p>
                <a href="https://www.fda.gov/food/retail-food-protection/fda-food-code" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FDA Food Code</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">California Retail Food Code</h4>
                <p className="text-gray-700 mb-2">State-level food safety regulations that all California restaurants must follow</p>
                <a href="https://www.cdph.ca.gov/Programs/CEH/DFDCS/Pages/FDBPrograms/FoodSafetyProgram/RetailFoodCode.aspx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CA Retail Food Code</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">LA County Health Code Chapter 8</h4>
                <p className="text-gray-700 mb-2">Local health regulations specific to Los Angeles County food facilities</p>
                <a href="http://publichealth.lacounty.gov/eh/docs/LACountyCodeTitle8.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LA County Code Title 8 (PDF)</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">NFPA 96 - Ventilation Control & Fire Protection</h4>
                <p className="text-gray-700 mb-2">National standard for commercial cooking operations including hood and exhaust system cleaning requirements</p>
                <a href="https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=96" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NFPA 96 Standard</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">CalOSHA - Chemical & Workplace Safety</h4>
                <p className="text-gray-700 mb-2">California workplace safety requirements including chemical handling, SDS, and employee protection</p>
                <a href="https://www.dir.ca.gov/dosh/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cal/OSHA</a>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Industry Training & Education</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">ServSafe Food Safety Training</h4>
                <p className="text-gray-700 mb-2">Leading food safety certification and training programs for restaurant staff and managers</p>
                <a href="https://www.servsafe.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">servsafe.com</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">National Restaurant Association - Food Safety Library</h4>
                <p className="text-gray-700 mb-2">Comprehensive resources on food safety, sanitation, and best practices</p>
                <a href="https://restaurant.org/education-and-resources/resource-library/food-safety" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NRA Food Safety Resources</a>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-3xl font-bold mb-6">Final Thoughts on Kitchen Cleaning Standards</h2>
            <p className="text-lg text-gray-700 mb-4">
              Restaurant kitchen cleaning isn't glamorous, but it's absolutely critical to your success. The difference between an "A" restaurant and a "C" restaurant often isn't the food—it's the systems, standards, and accountability around cleanliness.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Build cleaning into your operational culture from day one. Train every employee. Hold everyone accountable. Invest in the right chemicals, equipment, and professional services when needed. The restaurants that treat cleaning as a core competency—not an afterthought—are the ones that thrive in competitive markets like Los Angeles.
            </p>
            <p className="text-lg text-gray-700">
              Need help establishing or maintaining professional cleaning standards? <Link href="/contact" className="text-primary hover:underline font-semibold">Contact Spruce</Link> for restaurant cleaning and facilities management services designed for multi-location operators in Los Angeles County.
            </p>
          </section>

        </div>
      </article>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Maintain Professional Kitchen Cleaning Standards</h2>
          <p className="text-xl mb-8 text-white/90">
            Nightly cleaning, deep cleaning, and facilities management for LA County restaurants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18772532646"
              className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition"
            >
              Call 1-877-CLEANING
            </a>
            <Link
              href="/contact"
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
