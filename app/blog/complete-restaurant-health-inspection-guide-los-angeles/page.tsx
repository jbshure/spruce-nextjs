import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: "/blog/complete-restaurant-health-inspection-guide-los-angeles",
  },
  title: 'Complete Restaurant Health Inspection Guide Los Angeles 2025 | LA County Health Code',
  description: 'Comprehensive guide to passing LA County restaurant health inspections. Complete checklist, common violations, inspection scoring, and how to prepare for LACDPH inspections in Los Angeles.',
  keywords: 'la county health inspection, restaurant health inspection los angeles, lacdph inspection, los angeles county health code, restaurant inspection checklist la, health inspection violations california',
};

export default function HealthInspectionGuideLAPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/blog" className="hover:text-white">Blog</Link> / <span>Health Inspection Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight max-w-4xl">
            Complete Restaurant Health Inspection Guide for Los Angeles County (2025)
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-4">
            Everything you need to know to pass LA County Department of Public Health restaurant inspections with flying colors.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span>Updated January 2025</span>
            <span>•</span>
            <span>15 min read</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: '1. Understanding LA County Health Inspections', href: '#understanding' },
              { title: '2. Inspection Frequency & Scheduling', href: '#frequency' },
              { title: '3. The Inspection Process', href: '#process' },
              { title: '4. Grading System & Scores', href: '#grading' },
              { title: '5. Most Common Violations', href: '#violations' },
              { title: '6. Food Storage & Temperature', href: '#food-storage' },
              { title: '7. Kitchen Cleaning & Sanitation', href: '#cleaning' },
              { title: '8. Pest Control Requirements', href: '#pest-control' },
              { title: '9. Employee Health & Hygiene', href: '#employee-health' },
              { title: '10. How to Prepare for Inspection', href: '#preparation' },
              { title: '11. What to Do After a Failed Inspection', href: '#failed' },
              { title: '12. Resources & Next Steps', href: '#resources' },
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
          <section id="understanding" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Understanding LA County Health Inspections</h2>

            <p className="text-lg text-gray-700 mb-6">
              The Los Angeles County Department of Public Health (LACDPH) conducts routine health inspections of all food facilities to ensure compliance with the <a href="https://www.cdph.ca.gov/Programs/CEH/DFDCS/Pages/FDBPrograms/FoodSafetyProgram/RetailFoodCode.aspx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">California Retail Food Code</a> and <a href="http://publichealth.lacounty.gov/eh/docs/LACountyCodeTitle8.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Los Angeles County Health Code</a>. If you operate a restaurant, café, food truck, or any food service establishment in LA County, you will be inspected at least once per year—often more frequently.
            </p>

            <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6">
              <h3 className="font-bold text-lg mb-2">Key Facts:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• All LA County restaurants are inspected 1-3 times per year</li>
                <li>• Inspections are typically unannounced</li>
                <li>• Scores must be posted in a visible location</li>
                <li>• Inspection reports are public record</li>
                <li>• Serious violations can result in immediate closure</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Who Conducts Inspections?</h3>
            <p className="text-gray-700 mb-6">
              Environmental Health Specialists (EHS) from LACDPH are trained professionals who inspect food facilities. They evaluate food handling practices, equipment maintenance, employee hygiene, facility cleanliness, and pest control measures.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">What Laws Apply?</h3>
            <p className="text-gray-700 mb-4">
              LA County restaurants must comply with:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6 ml-6">
              <li>• <strong><a href="https://www.cdph.ca.gov/Programs/CEH/DFDCS/Pages/FDBPrograms/FoodSafetyProgram/RetailFoodCode.aspx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">California Retail Food Code (CalCode)</a></strong> - State-level food safety regulations</li>
              <li>• <strong><a href="http://publichealth.lacounty.gov/eh/docs/LACountyCodeTitle8.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LA County Health Code Chapter 8</a></strong> - Local health regulations</li>
              <li>• <strong><a href="https://www.cdph.ca.gov/Programs/CEH/DFDCS/Pages/FDBPrograms/FoodSafetyProgram/FoodHandlerCardFAQ.aspx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Food Handler Card Requirements</a></strong> - All food workers must have valid certification</li>
              <li>• <strong><a href="https://www.fda.gov/food/hazard-analysis-critical-control-point-haccp/haccp-principles-application-guidelines" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">HACCP Requirements</a></strong> - For certain high-risk operations</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section id="frequency" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Inspection Frequency & Scheduling</h2>

            <h3 className="text-2xl font-bold mb-4">How Often Will You Be Inspected?</h3>
            <p className="text-gray-700 mb-6">
              LACDPH uses a risk-based inspection frequency model. Higher-risk facilities (full-service restaurants, large volume kitchens) are inspected more frequently than lower-risk facilities (prepackaged food only).
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Facility Type</th>
                    <th className="px-6 py-4 text-left font-bold">Risk Level</th>
                    <th className="px-6 py-4 text-left font-bold">Inspection Frequency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Full-Service Restaurant</td>
                    <td className="px-6 py-4"><span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">High</span></td>
                    <td className="px-6 py-4">2-3 times/year</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Fast Food / Quick Service</td>
                    <td className="px-6 py-4"><span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">High</span></td>
                    <td className="px-6 py-4">2-3 times/year</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Café / Coffee Shop (with food prep)</td>
                    <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">Medium</span></td>
                    <td className="px-6 py-4">1-2 times/year</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Retail (prepackaged only)</td>
                    <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Low</span></td>
                    <td className="px-6 py-4">1 time/year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Are Inspections Announced?</h3>
            <p className="text-gray-700 mb-6">
              <strong>No.</strong> Routine inspections are unannounced. Inspectors arrive during normal business hours without prior notice. This ensures they observe actual operating conditions, not a temporarily cleaned facility.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <p className="font-bold mb-2">⚠️ Important:</p>
              <p className="text-gray-700">
                You cannot refuse an inspection. Refusing entry to a health inspector can result in permit suspension or closure. Inspectors have legal authority to enter and inspect during business hours.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="process" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">The Inspection Process</h2>

            <h3 className="text-2xl font-bold mb-4">What Happens During an Inspection?</h3>
            <p className="text-gray-700 mb-6">
              A typical LA County health inspection takes 1-3 hours, depending on facility size and complexity. Here's what the inspector will do:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3">1. Arrival & Introduction (5-10 minutes)</h4>
                <p className="text-gray-700">
                  The inspector will identify themselves, ask to speak with the manager or person in charge, and explain the inspection process. They may ask to see permits, food handler cards, and recent temperature logs.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3">2. Walk-Through Inspection (60-120 minutes)</h4>
                <p className="text-gray-700 mb-3">
                  The inspector will systematically evaluate your entire facility:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Food storage areas (walk-ins, dry storage, freezers)</li>
                  <li>• Food preparation areas (cookline, prep tables)</li>
                  <li>• Cooking and holding equipment</li>
                  <li>• Dishwashing and sanitation stations</li>
                  <li>• Handwashing sinks and restrooms</li>
                  <li>• Garbage and waste disposal areas</li>
                  <li>• Exterior areas (dumpsters, grease storage)</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3">3. Temperature Checks</h4>
                <p className="text-gray-700">
                  Inspectors will take multiple food temperatures using calibrated thermometers. They check refrigeration units, hot holding equipment, and verify proper cooling procedures.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3">4. Closing Conference (10-20 minutes)</h4>
                <p className="text-gray-700">
                  The inspector will review findings with management, explain violations, assign point deductions, and provide a copy of the official inspection report. You will receive a letter grade based on total points.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="grading" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Grading System & Scores</h2>

            <p className="text-gray-700 mb-6">
              LA County uses a points-based grading system. Inspectors start at 100 points and deduct points for violations. Your final score determines your letter grade.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">A</div>
                <div className="text-2xl font-bold mb-2">90-100 Points</div>
                <p className="text-gray-700">Good compliance with health and safety standards</p>
              </div>

              <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">B</div>
                <div className="text-2xl font-bold mb-2">80-89 Points</div>
                <p className="text-gray-700">Adequate compliance, some violations noted</p>
              </div>

              <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">C</div>
                <div className="text-2xl font-bold mb-2">70-79 Points</div>
                <p className="text-gray-700">Poor compliance, major violations present</p>
              </div>
            </div>

            <div className="bg-red-100 border-l-4 border-red-600 p-6 mb-6">
              <p className="font-bold mb-2">🚨 Scores Below 70:</p>
              <p className="text-gray-700">
                Facilities scoring below 70 points receive a failing grade and may be closed immediately or given a short period to correct violations before re-inspection. Failure to correct violations can result in permit suspension or revocation.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">How Violations Are Scored</h3>
            <p className="text-gray-700 mb-4">Violations are categorized by risk level:</p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Violation Type</th>
                    <th className="px-6 py-4 text-left font-bold">Point Deduction</th>
                    <th className="px-6 py-4 text-left font-bold">Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4"><span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">Major</span></td>
                    <td className="px-6 py-4 font-bold">4 points each</td>
                    <td className="px-6 py-4">Improper food temperatures, contamination risk, rodent/pest activity</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">Moderate</span></td>
                    <td className="px-6 py-4 font-bold">2 points each</td>
                    <td className="px-6 py-4">Inadequate handwashing facilities, improper storage, equipment issues</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4"><span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Minor</span></td>
                    <td className="px-6 py-4 font-bold">1 point each</td>
                    <td className="px-6 py-4">Poor floor/wall conditions, missing labels, light maintenance issues</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section id="violations" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Most Common Violations in LA County Restaurants</h2>

            <p className="text-gray-700 mb-6">
              Based on LACDPH data, these are the top violations found during restaurant inspections in Los Angeles County:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border-l-4 border-red-500 p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-red-500">1</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Improper Food Temperatures</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Violation:</strong> Cold food held above 41°F or hot food held below 135°F.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Point Deduction:</strong> 4 points (major violation)
                    </p>
                    <p className="text-gray-700">
                      <strong>How to Avoid:</strong> Calibrate thermometers daily, check temperatures every 2-4 hours, maintain temperature logs, repair faulty equipment immediately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-red-500 p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-red-500">2</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Inadequate Handwashing Facilities</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Violation:</strong> No hot water, no soap/towels, handwashing sink blocked or used for other purposes.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Point Deduction:</strong> 2-4 points
                    </p>
                    <p className="text-gray-700">
                      <strong>How to Avoid:</strong> Keep all handwashing sinks accessible, stocked with soap and paper towels, and ensure hot water (100°F minimum).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-orange-500 p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-orange-500">3</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Poor Personal Hygiene / Food Handler Violations</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Violation:</strong> Employees not wearing gloves, touching ready-to-eat food with bare hands, expired food handler cards.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Point Deduction:</strong> 2-4 points
                    </p>
                    <p className="text-gray-700">
                      <strong>How to Avoid:</strong> All employees must have valid food handler cards, enforce glove use for ready-to-eat food, train staff on proper handwashing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-orange-500 p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-orange-500">4</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Food Contact Surfaces Not Clean</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Violation:</strong> Cutting boards, prep tables, utensils, or equipment with food residue or grease buildup.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Point Deduction:</strong> 2-4 points
                    </p>
                    <p className="text-gray-700">
                      <strong>How to Avoid:</strong> Implement regular <Link href="/commercial-kitchen-cleaning" className="text-primary hover:underline font-semibold">commercial kitchen cleaning</Link> schedules, sanitize food contact surfaces between tasks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-yellow-500 p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-yellow-500">5</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Rodent, Insect, or Bird Activity</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Violation:</strong> Evidence of rodent droppings, cockroaches, flies, or other pest activity.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Point Deduction:</strong> 4 points (major violation) - can result in immediate closure
                    </p>
                    <p className="text-gray-700">
                      <strong>How to Avoid:</strong> Monthly pest control service, seal all entry points, proper waste management, keep doors/windows screened.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-yellow-500 p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-yellow-500">6</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Improper Food Storage</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Violation:</strong> Raw meat stored above ready-to-eat food, food stored on the floor, uncovered food.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Point Deduction:</strong> 2-4 points
                    </p>
                    <p className="text-gray-700">
                      <strong>How to Avoid:</strong> Store raw proteins on bottom shelves, use proper FIFO rotation, cover and label all food, keep items 6" off floor.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-500 p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-blue-500">7</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Inadequate or Improper Sanitizing</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Violation:</strong> Sanitizer concentration too low/high, no test strips available, improper 3-compartment sink setup.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Point Deduction:</strong> 2 points
                    </p>
                    <p className="text-gray-700">
                      <strong>How to Avoid:</strong> Test sanitizer concentration hourly with test strips, maintain proper concentrations (chlorine: 50-100ppm, quat: 200ppm).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-500 p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-blue-500">8</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Floors, Walls, Ceilings Not Clean</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Violation:</strong> Grease buildup on walls, dirty floors, food debris in corners, moldy ceilings.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Point Deduction:</strong> 1-2 points
                    </p>
                    <p className="text-gray-700">
                      <strong>How to Avoid:</strong> Daily <Link href="/nightly-cleaning" className="text-primary hover:underline font-semibold">nightly cleaning</Link>, weekly <Link href="/deep-kitchen-cleaning" className="text-primary hover:underline font-semibold">deep kitchen cleaning</Link>, quarterly degreasing of walls and ceilings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="food-storage" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Food Storage & Temperature Requirements</h2>

            <h3 className="text-2xl font-bold mb-4">Safe Temperature Zones</h3>
            <p className="text-gray-700 mb-6">
              The "danger zone" for bacterial growth is 41°F - 135°F. Food should spend minimal time in this range.
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-lg mb-4">Required Food Temperatures:</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold">Cold food storage</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-bold">≤ 41°F</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold">Frozen food storage</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-bold">≤ 0°F</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold">Hot food holding</span>
                  <span className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-bold">≥ 135°F</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold">Poultry (internal temp)</span>
                  <span className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-bold">165°F</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold">Ground meats (internal temp)</span>
                  <span className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-bold">155°F</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Whole cuts beef/pork (internal temp)</span>
                  <span className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-bold">145°F</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Proper Food Storage Order</h3>
            <p className="text-gray-700 mb-4">
              Store food in refrigerators/freezers from top to bottom in this order to prevent cross-contamination:
            </p>
            <ol className="space-y-3 text-gray-700 ml-6 mb-6">
              <li><strong>Top Shelf:</strong> Ready-to-eat foods (salads, cooked items, prepped ingredients)</li>
              <li><strong>Second Shelf:</strong> Seafood (145°F cooking temp)</li>
              <li><strong>Third Shelf:</strong> Whole cuts of beef and pork (145°F)</li>
              <li><strong>Fourth Shelf:</strong> Ground meats (155°F)</li>
              <li><strong>Bottom Shelf:</strong> Poultry (165°F)</li>
            </ol>

            <div className="bg-blue-50 border-l-4 border-primary p-6">
              <p className="font-bold mb-2">💡 Pro Tip:</p>
              <p className="text-gray-700">
                Use clear labeling with dates on all stored food. Implement FIFO (First In, First Out) rotation to minimize waste and ensure freshness. Label items with prep date and discard date.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="cleaning" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Kitchen Cleaning & Sanitation Standards</h2>

            <p className="text-gray-700 mb-6">
              Cleaning and sanitizing are two different processes. Cleaning removes visible dirt and food residue. Sanitizing kills bacteria and pathogens. Both are required.
            </p>

            <h3 className="text-2xl font-bold mb-4">3-Compartment Sink Requirements</h3>
            <p className="text-gray-700 mb-4">
              All restaurants must have a properly set up 3-compartment sink for manual dishwashing:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">Compartment 1</div>
                <h4 className="font-bold mb-2">Wash</h4>
                <p className="text-gray-700 text-sm">Hot soapy water, scrub to remove food residue and grease</p>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">Compartment 2</div>
                <h4 className="font-bold mb-2">Rinse</h4>
                <p className="text-gray-700 text-sm">Clean hot water to remove soap and remaining debris</p>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">Compartment 3</div>
                <h4 className="font-bold mb-2">Sanitize</h4>
                <p className="text-gray-700 text-sm">Chemical sanitizer at proper concentration, tested with strips</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Sanitizer Concentrations</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Sanitizer Type</th>
                    <th className="px-6 py-4 text-left font-bold">Required Concentration</th>
                    <th className="px-6 py-4 text-left font-bold">Water Temperature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Chlorine (bleach)</td>
                    <td className="px-6 py-4 font-bold">50-100 ppm</td>
                    <td className="px-6 py-4">75°F - 120°F</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Quaternary Ammonia (quat)</td>
                    <td className="px-6 py-4 font-bold">200 ppm</td>
                    <td className="px-6 py-4">75°F minimum</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Iodine</td>
                    <td className="px-6 py-4 font-bold">12.5-25 ppm</td>
                    <td className="px-6 py-4">68°F - 120°F</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <p className="font-bold mb-2">⚠️ Must Have:</p>
              <p className="text-gray-700">
                Test strips for your sanitizer type must be available and used to verify proper concentration. Inspectors will check this. Replace sanitizer solution when it becomes dirty or concentration drops.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Cleaning Frequency Requirements</h3>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">Food Contact Surfaces</h4>
                <p className="text-gray-700">Clean and sanitize between tasks, every 4 hours during continuous use, and after any contamination</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">Floors</h4>
                <p className="text-gray-700">Sweep and mop nightly, <Link href="/floor-scrubbing" className="text-primary hover:underline font-semibold">deep scrub and degrease</Link> weekly</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">Walls & Ceilings</h4>
                <p className="text-gray-700">Spot clean daily, degrease monthly, deep clean quarterly</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">Equipment</h4>
                <p className="text-gray-700">Daily exterior cleaning, weekly interior deep cleaning, quarterly equipment pull-outs and behind/under cleaning</p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="pest-control" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Pest Control Requirements</h2>

            <p className="text-gray-700 mb-6">
              Evidence of pest activity is one of the most serious violations. LA County requires active pest management programs for all food facilities.
            </p>

            <h3 className="text-2xl font-bold mb-4">Required Pest Control Measures</h3>
            <ul className="space-y-3 text-gray-700 mb-6 ml-6">
              <li>• <strong>Professional pest control service:</strong> Monthly service minimum (documentation required)</li>
              <li>• <strong>Door sweeps and screens:</strong> All exterior doors must have working door sweeps; windows must be screened</li>
              <li>• <strong>Sealed entry points:</strong> All holes, cracks, and gaps sealed to prevent pest entry</li>
              <li>• <strong>Proper waste management:</strong> Dumpsters with lids, regular pickup schedule, clean areas around waste bins</li>
              <li>• <strong>No standing water:</strong> Fix leaks immediately, ensure proper drainage</li>
            </ul>

            <div className="bg-red-100 border-l-4 border-red-600 p-6 mb-6">
              <p className="font-bold mb-2">🚨 Immediate Closure Risk:</p>
              <p className="text-gray-700">
                Active rodent or cockroach infestation can result in immediate facility closure. If an inspector sees live rodents, excessive droppings, or significant cockroach activity, they may close you on the spot until the issue is resolved.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Common Pest Violations</h3>
            <div className="space-y-4">
              <div className="bg-white border-l-4 border-red-500 p-4">
                <h4 className="font-bold mb-2">Rodent Droppings</h4>
                <p className="text-gray-700">Found in storage areas, behind equipment, in dry goods storage</p>
              </div>

              <div className="bg-white border-l-4 border-red-500 p-4">
                <h4 className="font-bold mb-2">Cockroaches</h4>
                <p className="text-gray-700">Live roaches or excessive dead roaches in kitchen, storage, or dining areas</p>
              </div>

              <div className="bg-white border-l-4 border-orange-500 p-4">
                <h4 className="font-bold mb-2">Flies</h4>
                <p className="text-gray-700">Excessive fly activity, especially in food prep or dining areas</p>
              </div>

              <div className="bg-white border-l-4 border-orange-500 p-4">
                <h4 className="font-bold mb-2">Gnawed Food Packaging</h4>
                <p className="text-gray-700">Evidence of rodent activity on stored food items</p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section id="employee-health" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Employee Health & Hygiene Requirements</h2>

            <h3 className="text-2xl font-bold mb-4">Food Handler Card Requirements</h3>
            <p className="text-gray-700 mb-6">
              <a href="https://www.cdph.ca.gov/Programs/CEH/DFDCS/Pages/FDBPrograms/FoodSafetyProgram/FoodHandlerCardFAQ.aspx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">California law</a> requires all food employees to obtain a food handler card within 30 days of hire. Cards are valid for 3 years.
            </p>

            <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8">
              <h4 className="font-bold mb-2">Key Requirements:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• All employees who handle food, prep surfaces, or utensils must have a valid card</li>
                <li>• Cards must be obtained from an ANSI-accredited provider</li>
                <li>• Original or copy of card must be available on-site</li>
                <li>• Manager or person in charge must have Food Manager Certification (higher level from <a href="https://www.servsafe.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ServSafe</a> or similar)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Handwashing Requirements</h3>
            <p className="text-gray-700 mb-4">
              Employees must wash hands:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6 ml-6">
              <li>• Before starting work</li>
              <li>• After using the restroom</li>
              <li>• After touching hair, face, or body</li>
              <li>• After handling raw meat, poultry, or seafood</li>
              <li>• After handling dirty dishes or taking out trash</li>
              <li>• After eating, drinking, or smoking</li>
              <li>• After any activity that may contaminate hands</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8">Glove Use Requirements</h3>
            <p className="text-gray-700 mb-6">
              <a href="https://www.cdph.ca.gov/Programs/CEH/DFDCS/CDPH%20Document%20Library/FDB/FoodSafetyProgram/NoBarHandContact/BareHandContactFAQ.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">California Health Code</a> requires gloves or utensils for handling ready-to-eat food. Bare hand contact is prohibited for foods that will not be cooked further (salads, sandwiches, garnishes, etc.).
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <p className="font-bold mb-2">⚠️ Common Mistake:</p>
              <p className="text-gray-700">
                Gloves are not a substitute for handwashing. Employees must wash hands before putting on gloves and change gloves between tasks or when contaminated.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="preparation" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">How to Prepare for a Health Inspection</h2>

            <p className="text-gray-700 mb-6">
              Since inspections are unannounced, your facility should always be inspection-ready. However, implementing these systems will keep you prepared:
            </p>

            <h3 className="text-2xl font-bold mb-4">Daily Inspection Readiness Checklist</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">All food properly labeled with dates and stored at correct temperatures</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Temperature logs completed and up to date</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Handwashing sinks stocked with soap, towels, and hot water</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Sanitizer tested and at proper concentration with test strips available</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">All food handler cards current and available on-site</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Floors swept, mopped, and free of debris</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">No evidence of pests (droppings, gnaw marks, live activity)</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Equipment clean with no visible grease buildup</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Trash bins emptied and areas clean</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Previous inspection report and corrections documented</span>
                </label>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">What to Do When the Inspector Arrives</h3>
            <ol className="space-y-4 text-gray-700 ml-6 mb-8">
              <li><strong>1. Greet professionally</strong> - Be courteous and cooperative. Assign a manager or knowledgeable employee to accompany the inspector.</li>
              <li><strong>2. Have documents ready</strong> - Health permit, food handler cards, temperature logs, pest control service records.</li>
              <li><strong>3. Don't interfere</strong> - Let the inspector do their job. Answer questions honestly and don't volunteer excuses.</li>
              <li><strong>4. Take notes</strong> - Document what areas the inspector focuses on and what they point out.</li>
              <li><strong>5. Ask questions</strong> - If you don't understand a violation, ask for clarification during the closing conference.</li>
              <li><strong>6. Review findings</strong> - Carefully review the inspection report before signing. Signing doesn't mean you agree, it just acknowledges you received it.</li>
            </ol>

            <div className="bg-blue-50 border-l-4 border-primary p-6">
              <p className="font-bold mb-2">💡 Pro Tip:</p>
              <p className="text-gray-700">
                Consider scheduling a professional <Link href="/restaurant-cleaning-los-angeles" className="text-primary hover:underline font-semibold">restaurant cleaning service</Link> to conduct pre-inspection deep cleans. Many facilities benefit from monthly or quarterly deep cleaning to stay ahead of grease buildup and sanitation issues.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="failed" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">What to Do After a Failed Inspection</h2>

            <p className="text-gray-700 mb-6">
              If you score below 70 or have critical violations, don't panic. Here's what to do:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border-l-4 border-red-500 p-6 shadow-md">
                <h4 className="font-bold text-lg mb-3">Step 1: Address Critical Violations Immediately</h4>
                <p className="text-gray-700">
                  Critical violations like improper temperatures, pest activity, or major sanitation issues must be corrected immediately. If given a closure notice, you cannot operate until violations are fixed and a re-inspection is passed.
                </p>
              </div>

              <div className="bg-white border-l-4 border-orange-500 p-6 shadow-md">
                <h4 className="font-bold text-lg mb-3">Step 2: Create a Correction Plan</h4>
                <p className="text-gray-700">
                  For each violation, document: (1) What was wrong, (2) What you did to fix it, (3) How you'll prevent it in the future. Take photos if possible.
                </p>
              </div>

              <div className="bg-white border-l-4 border-yellow-500 p-6 shadow-md">
                <h4 className="font-bold text-lg mb-3">Step 3: Request Re-Inspection</h4>
                <p className="text-gray-700">
                  Once violations are corrected, request a re-inspection. There may be a fee for re-inspection ($161 in LA County as of 2025). The inspector will verify corrections.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-500 p-6 shadow-md">
                <h4 className="font-bold text-lg mb-3">Step 4: Implement Ongoing Systems</h4>
                <p className="text-gray-700">
                  Don't just fix issues for the re-inspection. Implement daily checklists, staff training, and regular <Link href="/preventive-maintenance" className="text-primary hover:underline font-semibold">preventive maintenance</Link> to prevent future violations.
                </p>
              </div>
            </div>

            <div className="bg-red-100 border-l-4 border-red-600 p-6">
              <p className="font-bold mb-2">🚨 Emergency Cleaning Services:</p>
              <p className="text-gray-700">
                If you failed due to cleanliness violations, consider emergency professional cleaning to address grease buildup, deep sanitation, and facility restoration before re-inspection. <Link href="/contact" className="text-primary hover:underline font-semibold">Contact Spruce</Link> for same-day emergency cleaning in Los Angeles County.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section id="resources" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Resources & Next Steps</h2>

            <h3 className="text-2xl font-bold mb-4">Official Government & Health Agency Resources</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">LA County Department of Public Health - Environmental Health</h4>
                <p className="text-gray-700 mb-2">Main resource for restaurant health regulations, permits, and inspection information</p>
                <a href="http://publichealth.lacounty.gov/eh/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">publichealth.lacounty.gov/eh/</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">California Retail Food Code</h4>
                <p className="text-gray-700 mb-2">Full text of California's food safety regulations</p>
                <a href="https://www.cdph.ca.gov/Programs/CEH/DFDCS/Pages/FDBPrograms/FoodSafetyProgram/RetailFoodCode.aspx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CDPH Retail Food Code</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">LA County Health Code Chapter 8</h4>
                <p className="text-gray-700 mb-2">Local health regulations specific to Los Angeles County</p>
                <a href="http://publichealth.lacounty.gov/eh/docs/LACountyCodeTitle8.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LA County Code Title 8</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">Food Handler Card Information</h4>
                <p className="text-gray-700 mb-2">California Department of Public Health food handler card requirements and FAQs</p>
                <a href="https://www.cdph.ca.gov/Programs/CEH/DFDCS/Pages/FDBPrograms/FoodSafetyProgram/FoodHandlerCardFAQ.aspx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CA Food Handler Card FAQ</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">California Bare Hand Contact Policy</h4>
                <p className="text-gray-700 mb-2">Official guidance on glove use and bare hand contact with ready-to-eat foods</p>
                <a href="https://www.cdph.ca.gov/Programs/CEH/DFDCS/CDPH%20Document%20Library/FDB/FoodSafetyProgram/NoBarHandContact/BareHandContactFAQ.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bare Hand Contact FAQ (PDF)</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">FDA Food Code</h4>
                <p className="text-gray-700 mb-2">Federal food safety guidelines that inform state and local regulations</p>
                <a href="https://www.fda.gov/food/retail-food-protection/fda-food-code" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FDA Food Code</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">FDA HACCP Guidelines</h4>
                <p className="text-gray-700 mb-2">Hazard Analysis and Critical Control Point principles and application guidelines</p>
                <a href="https://www.fda.gov/food/hazard-analysis-critical-control-point-haccp/haccp-principles-application-guidelines" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">HACCP Principles & Guidelines</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">NFPA 96 - Hood Cleaning Standards</h4>
                <p className="text-gray-700 mb-2">National Fire Protection Association standard for ventilation control and fire protection</p>
                <a href="https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=96" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NFPA 96 Standard</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">CalOSHA - Workplace Safety</h4>
                <p className="text-gray-700 mb-2">California Division of Occupational Safety and Health for chemical safety and workplace standards</p>
                <a href="https://www.dir.ca.gov/dosh/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cal/OSHA</a>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Industry Training & Education Resources</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">ServSafe Food Safety Training</h4>
                <p className="text-gray-700 mb-2">Industry-leading food safety training and certification programs</p>
                <a href="https://www.servsafe.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">servsafe.com</a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold mb-2">National Restaurant Association - Food Safety Resources</h4>
                <p className="text-gray-700 mb-2">Comprehensive food safety education and best practices for restaurant operators</p>
                <a href="https://restaurant.org/education-and-resources/resource-library/food-safety" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NRA Food Safety Library</a>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Professional Cleaning & Maintenance Services</h3>
            <p className="text-gray-700 mb-6">
              Many LA County restaurants work with professional cleaning services to maintain health code compliance and pass inspections consistently.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Link href="/restaurant-cleaning-los-angeles" className="bg-white border-2 border-primary rounded-xl p-6 hover:shadow-xl transition group">
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary">Restaurant Cleaning Services</h4>
                <p className="text-gray-600 text-sm">Nightly cleaning, deep cleaning, and health inspection preparation</p>
              </Link>

              <Link href="/commercial-kitchen-cleaning" className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition group">
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary">Commercial Kitchen Cleaning</h4>
                <p className="text-gray-600 text-sm">Deep degreasing, equipment cleaning, floor scrubbing</p>
              </Link>

              <Link href="/preventive-maintenance" className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition group">
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary">Preventive Maintenance</h4>
                <p className="text-gray-600 text-sm">Equipment PM, filter changes, facility inspections</p>
              </Link>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-3xl font-bold mb-6">Final Thoughts</h2>
            <p className="text-lg text-gray-700 mb-4">
              Passing LA County health inspections isn't about getting lucky or cramming before an inspector arrives. It's about building systems that maintain food safety and cleanliness every single day.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The restaurants that consistently score "A" grades treat health compliance as part of their operational culture—not a separate checklist. Staff training, daily maintenance, professional cleaning services, and preventive equipment care all work together to keep your facility inspection-ready 365 days a year.
            </p>
            <p className="text-lg text-gray-700">
              If you need help maintaining health code compliance or preparing for inspections, <Link href="/contact" className="text-primary hover:underline font-semibold">contact Spruce</Link> for professional restaurant cleaning and facilities management services across Los Angeles County.
            </p>
          </section>

        </div>
      </article>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Need Help Passing Your Next Health Inspection?</h2>
          <p className="text-xl mb-8 text-white/90">
            Professional restaurant cleaning and facilities management for LA County restaurants.
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
