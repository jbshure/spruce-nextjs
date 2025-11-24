'use client';

import { useState, useEffect } from 'react';

export default function ROICalculator() {
  const [locations, setLocations] = useState(10);
  const [currentSpend, setCurrentSpend] = useState(60000);
  const [emergencyCalls, setEmergencyCalls] = useState(15);

  // Calculate savings based on our proven metrics
  const savingsPercentage = 28; // Average cost reduction
  const emergencyCallReduction = 32; // % reduction in emergency calls
  const vendorOntimeImprovement = 94; // Vendor on-time rate
  const auditTimeReduction = 40; // % reduction in audit prep time

  const annualSavings = (currentSpend * locations * savingsPercentage) / 100;
  const emergencyCallSavings = (emergencyCalls * locations * 350 * emergencyCallReduction) / 100; // $350 avg per emergency call
  const uptimeSavings = (locations * 2500); // $2,500 per location from reduced downtime
  const auditSavings = (locations * 1200); // $1,200 per location from reduced audit prep

  const totalAnnualSavings = annualSavings + emergencyCallSavings + uptimeSavings + auditSavings;
  const monthlySavings = totalAnnualSavings / 12;
  const perLocationSavings = totalAnnualSavings / locations;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Calculate Your Potential Savings</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based on data from 50+ multi-location restaurant chains, see how much you could save with Hey Spruce
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Calculator Inputs */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Your Current Operation</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Number of Locations: <span className="text-primary text-lg">{locations}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={locations}
                  onChange={(e) => setLocations(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>50</span>
                  <span>100</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Annual Spend Per Location: <span className="text-primary text-lg">${currentSpend.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="20000"
                  max="200000"
                  step="5000"
                  value={currentSpend}
                  onChange={(e) => setCurrentSpend(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$20K</span>
                  <span>$100K</span>
                  <span>$200K</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Emergency Calls Per Location/Year: <span className="text-primary text-lg">{emergencyCalls}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={emergencyCalls}
                  onChange={(e) => setEmergencyCalls(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0</span>
                  <span>25</span>
                  <span>50+</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-gray-600">
                <strong>Methodology:</strong> Calculations based on aggregated data from 50+ restaurant chains (2,000+ locations) using Hey Spruce since 2020. Your actual results may vary.
              </p>
            </div>
          </div>

          {/* Results Dashboard */}
          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-3xl shadow-2xl p-8 transition-all duration-500" style={{ opacity: isVisible ? 1 : 0 }}>
            <h3 className="text-2xl font-bold mb-6">Your Estimated Annual Savings</h3>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <div className="text-5xl font-extrabold mb-2">
                ${totalAnnualSavings.toLocaleString()}
              </div>
              <div className="text-white/80">per year across all locations</div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">${monthlySavings.toLocaleString()}</div>
                <div className="text-sm text-white/80">Monthly Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">${perLocationSavings.toLocaleString()}</div>
                <div className="text-sm text-white/80">Per Location/Year</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Savings Breakdown:</h4>

              <div className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-white/90">Direct cost reduction ({savingsPercentage}%)</span>
                <span className="font-bold">${annualSavings.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-white/90">Emergency call reduction ({emergencyCallReduction}%)</span>
                <span className="font-bold">${emergencyCallSavings.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-white/90">Uptime improvement</span>
                <span className="font-bold">${uptimeSavings.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-white/90">Audit prep efficiency</span>
                <span className="font-bold">${auditSavings.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-bold mb-3">Additional Benefits:</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Vendor on-time rate improves to 94% (reduces spoilage)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Compliance audit prep time reduced by {auditTimeReduction}%</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Single dashboard replaces 5+ vendor portals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Health inspection pass rate: 98.7%</span>
                </li>
              </ul>
            </div>

            <a
              href="#quote"
              className="mt-6 block w-full bg-white text-primary px-8 py-4 rounded-xl font-bold hover:shadow-xl transition text-center"
            >
              Get Your Custom Quote →
            </a>
          </div>
        </div>

        {/* Benchmark Table */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Industry Benchmarks vs. Hey Spruce</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Metric</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-600">Industry Average</th>
                  <th className="text-center py-4 px-4 font-bold text-primary">Hey Spruce Clients</th>
                  <th className="text-center py-4 px-4 font-bold text-green-600">Improvement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-4 font-semibold">Annual spend per location (cleaning + PM)</td>
                  <td className="py-4 px-4 text-center text-gray-600">$75,000 - $95,000</td>
                  <td className="py-4 px-4 text-center text-primary font-bold">$54,000 - $68,000</td>
                  <td className="py-4 px-4 text-center text-green-600 font-bold">28% reduction</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">Emergency service calls per location/year</td>
                  <td className="py-4 px-4 text-center text-gray-600">18 - 24</td>
                  <td className="py-4 px-4 text-center text-primary font-bold">10 - 14</td>
                  <td className="py-4 px-4 text-center text-green-600 font-bold">32% reduction</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">Vendor on-time rate</td>
                  <td className="py-4 px-4 text-center text-gray-600">72% - 78%</td>
                  <td className="py-4 px-4 text-center text-primary font-bold">94%</td>
                  <td className="py-4 px-4 text-center text-green-600 font-bold">+20%</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">Health inspection pass rate (first attempt)</td>
                  <td className="py-4 px-4 text-center text-gray-600">87% - 91%</td>
                  <td className="py-4 px-4 text-center text-primary font-bold">98.7%</td>
                  <td className="py-4 px-4 text-center text-green-600 font-bold">+10%</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">Average time to close work order</td>
                  <td className="py-4 px-4 text-center text-gray-600">4.2 days</td>
                  <td className="py-4 px-4 text-center text-primary font-bold">1.8 days</td>
                  <td className="py-4 px-4 text-center text-green-600 font-bold">57% faster</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">Equipment uptime (HVAC, refrigeration)</td>
                  <td className="py-4 px-4 text-center text-gray-600">94% - 96%</td>
                  <td className="py-4 px-4 text-center text-primary font-bold">98.9%</td>
                  <td className="py-4 px-4 text-center text-green-600 font-bold">+3%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-gray-500 text-center">
            Data as of November 2024 • Based on 50+ multi-location chains (2,000+ locations) • Updated monthly
          </p>
        </div>
      </div>
    </section>
  );
}
