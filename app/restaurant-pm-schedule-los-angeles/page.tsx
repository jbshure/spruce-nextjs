import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: "/restaurant-pm-schedule-los-angeles",
  },
  title: 'Restaurant Preventive Maintenance Schedule Los Angeles | PM Calendar | Spruce',
  description: 'Complete restaurant preventive maintenance schedule for Los Angeles. PM calendar for equipment, hood cleaning, deep cleaning, and facility maintenance coordination.',
  keywords: 'restaurant preventive maintenance, pm schedule restaurant, equipment maintenance schedule, hood cleaning schedule, restaurant facility maintenance los angeles',
};

export default function RestaurantPMSchedule() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span>PM Schedule</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Restaurant Preventive Maintenance Schedule — Los Angeles
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-4xl">
            Keep your restaurant operating smoothly with a proper preventive maintenance schedule. Spruce helps Los Angeles restaurants coordinate cleaning, equipment service, and facility maintenance on a predictable calendar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#schedule" className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition text-center">View PM Calendar</a>
            <a href="tel:+18772532646" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition text-center">Call 1-877-CLEANING</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-6 text-center">Why Preventive Maintenance Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Prevent Breakdowns', desc: 'Regular maintenance catches problems before they shut you down during service' },
              { title: 'Stay Compliant', desc: 'Health code and fire code require regular cleaning and equipment service' },
              { title: 'Save Money', desc: 'Preventive maintenance costs less than emergency repairs and replacements' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 text-center">
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" id="schedule">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">Complete Restaurant PM Calendar</h2>

          {/* Monthly */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-primary">Monthly Maintenance Tasks</h3>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Task</th>
                    <th className="px-6 py-4 text-left font-bold">Frequency</th>
                    <th className="px-6 py-4 text-left font-bold">Provider</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { task: 'Hood Exhaust System Cleaning', freq: 'Monthly (high-volume)', provider: 'Licensed hood cleaning company' },
                    { task: 'Grease Trap Service', freq: 'Monthly', provider: 'Grease trap service company' },
                    { task: 'Deep Kitchen Cleaning', freq: 'Monthly or Quarterly', provider: 'Spruce or cleaning service' },
                    { task: 'HVAC Filter Replacement', freq: 'Monthly', provider: 'HVAC service or in-house' },
                    { task: 'Refrigeration System Check', freq: 'Monthly', provider: 'Refrigeration technician' },
                    { task: 'Fire Extinguisher Inspection', freq: 'Monthly (visual)', provider: 'In-house or fire safety company' }
                  ].map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-800">{item.task}</td>
                      <td className="px-6 py-4 text-gray-600">{item.freq}</td>
                      <td className="px-6 py-4 text-gray-600">{item.provider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quarterly */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-primary">Quarterly Maintenance Tasks</h3>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Task</th>
                    <th className="px-6 py-4 text-left font-bold">Frequency</th>
                    <th className="px-6 py-4 text-left font-bold">Provider</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { task: 'Hood Exhaust System Cleaning', freq: 'Quarterly (standard volume)', provider: 'Licensed hood cleaning company' },
                    { task: 'Deep Equipment Pull-Out Cleaning', freq: 'Quarterly', provider: 'Spruce or deep cleaning service' },
                    { task: 'Pest Control Service', freq: 'Monthly or Quarterly', provider: 'Licensed pest control company' },
                    { task: 'Floor Machine Scrubbing/Stripping', freq: 'Quarterly', provider: 'Floor care specialist' },
                    { task: 'Water Filter Replacement', freq: 'Quarterly (or per manufacturer)', provider: 'Water service or in-house' },
                    { task: 'Drain Line Cleaning', freq: 'Quarterly', provider: 'Plumber or drain service' }
                  ].map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-800">{item.task}</td>
                      <td className="px-6 py-4 text-gray-600">{item.freq}</td>
                      <td className="px-6 py-4 text-gray-600">{item.provider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Semi-Annual */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-primary">Semi-Annual Maintenance Tasks</h3>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Task</th>
                    <th className="px-6 py-4 text-left font-bold">Frequency</th>
                    <th className="px-6 py-4 text-left font-bold">Provider</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { task: 'Hood Exhaust System Cleaning', freq: 'Semi-Annually (low-volume)', provider: 'Licensed hood cleaning company' },
                    { task: 'Fire Suppression System Inspection', freq: 'Semi-Annually (required)', provider: 'Licensed fire suppression company' },
                    { task: 'HVAC System Service', freq: 'Semi-Annually (spring/fall)', provider: 'HVAC technician' },
                    { task: 'Refrigeration Deep Service', freq: 'Semi-Annually', provider: 'Refrigeration specialist' },
                    { task: 'Exterior Power Washing', freq: 'Semi-Annually', provider: 'Pressure washing service' },
                    { task: 'Window and Exterior Glass Cleaning', freq: 'Semi-Annually (deep)', provider: 'Window cleaning service' }
                  ].map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-800">{item.task}</td>
                      <td className="px-6 py-4 text-gray-600">{item.freq}</td>
                      <td className="px-6 py-4 text-gray-600">{item.provider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Annual */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-primary">Annual Maintenance Tasks</h3>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Task</th>
                    <th className="px-6 py-4 text-left font-bold">Frequency</th>
                    <th className="px-6 py-4 text-left font-bold">Provider</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { task: 'Fire Extinguisher Certification', freq: 'Annually (required)', provider: 'Fire safety company' },
                    { task: 'Backflow Prevention Testing', freq: 'Annually (required in CA)', provider: 'Licensed backflow tester' },
                    { task: 'Kitchen Equipment Calibration', freq: 'Annually', provider: 'Equipment service technician' },
                    { task: 'Electrical Panel Inspection', freq: 'Annually', provider: 'Licensed electrician' },
                    { task: 'Gas Line Inspection', freq: 'Annually', provider: 'Licensed gas technician' },
                    { task: 'Building/Facility Inspection', freq: 'Annually', provider: 'Facility manager or contractor' }
                  ].map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-800">{item.task}</td>
                      <td className="px-6 py-4 text-gray-600">{item.freq}</td>
                      <td className="px-6 py-4 text-gray-600">{item.provider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-8">We Coordinate Your PM Schedule</h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Spruce doesn't just clean — we help coordinate your entire preventive maintenance calendar so nothing gets missed. We track schedules, coordinate vendors, and keep you compliant.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Cleaning Programs', desc: 'Nightly, weekly, monthly, and quarterly cleaning on a predictable schedule' },
              { title: 'Vendor Coordination', desc: 'We coordinate hood cleaning, grease trap, pest control, and other vendors' },
              { title: 'Photo Documentation', desc: 'Every service is documented with photos so you have proof of completion' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Stop Missing Maintenance Deadlines</h2>
          <p className="text-xl mb-8">Let us manage your PM schedule so you can focus on running your restaurant.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition">Start PM Program</a>
            <a href="tel:+18772532646" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition">Call 1-877-CLEANING</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Related Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Preventive Maintenance', link: '/preventive-maintenance', desc: 'Full PM coordination services' },
              { title: 'Vendor Management', link: '/vendor-management', desc: 'Multi-vendor coordination' },
              { title: 'Hood Exhaust Coordination', link: '/hood-exhaust-cleaning', desc: 'Hood cleaning scheduling' },
              { title: 'Deep Kitchen Cleaning', link: '/deep-kitchen-cleaning', desc: 'Quarterly deep cleans' }
            ].map((service, idx) => (
              <Link key={idx} href={service.link} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <span className="text-primary font-bold text-2xl">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
