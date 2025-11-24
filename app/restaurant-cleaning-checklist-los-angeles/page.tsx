import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: "/restaurant-cleaning-checklist-los-angeles",
  },
  title: 'Restaurant Cleaning Checklist Los Angeles | Daily, Weekly, Monthly Checklist | Spruce',
  description: 'Free downloadable restaurant cleaning checklist for Los Angeles restaurants. Daily, weekly, monthly cleaning tasks. LA County health code compliant checklist templates.',
  keywords: 'restaurant cleaning checklist, daily cleaning checklist restaurant, kitchen cleaning checklist, restaurant cleaning schedule, health code cleaning checklist los angeles',
};

export default function RestaurantCleaningChecklist() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span>Cleaning Checklist</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Restaurant Cleaning Checklist — Los Angeles
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-4xl">
            Never miss a cleaning task again. Spruce provides a complete restaurant cleaning checklist built specifically for Los Angeles restaurants and LA County health code compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#checklist" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition text-center">View Full Checklist</a>
            <a href="tel:+18772532646" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition text-center">Call 1-877-CLEANING</a>
          </div>
        </div>
      </section>

      <section className="py-20" id="checklist">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-6 text-center">Complete Restaurant Cleaning Checklist</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Use this checklist to maintain health code compliance and keep your restaurant inspection-ready every day.
          </p>

          {/* Daily Checklist */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-primary">Daily Cleaning Tasks</h3>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h4 className="text-xl font-bold mb-4">Kitchen / Back-of-House</h4>
              <ul className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  'Clean and degrease all cookline stations',
                  'Clean equipment surfaces, handles, knobs',
                  'Sanitize all food contact surfaces',
                  'Clean and sanitize prep tables and cutting boards',
                  'Clean 3-compartment sink and hand sinks',
                  'Sweep and mop all kitchen floors',
                  'Clean floor drains and surrounding areas',
                  'Empty and clean trash receptacles',
                  'Clean mats and place in drying rack',
                  'Wipe down walls and splash zones',
                  'Clean walk-in cooler/freezer floors',
                  'Sanitize door handles and light switches'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-bold mb-4">Dining Room / Front-of-House</h4>
              <ul className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  'Sanitize all tables and chairs',
                  'Clean and sanitize booths and highchairs',
                  'Clean host stand and POS areas',
                  'Sweep and mop all FOH floors',
                  'Clean entrance doors and glass',
                  'Clean bar tops and service stations',
                  'Empty and clean trash receptacles',
                  'Spot clean walls, doors, and railings'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-bold mb-4">Restrooms</h4>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Clean and sanitize toilets and urinals',
                  'Clean and sanitize sinks and counters',
                  'Clean mirrors and glass',
                  'Sweep and mop floors',
                  'Empty trash and replace liners',
                  'Restock soap, paper towels, toilet paper',
                  'Clean doors and handles',
                  'Check and clean hand dryers/dispensers'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Weekly Checklist */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-primary">Weekly Cleaning Tasks</h3>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Deep clean behind and under equipment',
                  'Clean walls, ceilings, and overhead structures',
                  'Scrub and degrease floors',
                  'Clean shelving and storage racks',
                  'Deep clean walk-in coolers and freezers',
                  'Clean exhaust hoods (interior accessible areas)',
                  'Clean windows and glass surfaces',
                  'Deep clean bar area and underbar',
                  'Clean light fixtures and vents',
                  'Organize and clean dry storage areas',
                  'Deep clean employee areas',
                  'Clean exterior entrances and sidewalks'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Monthly Checklist */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-primary">Monthly Cleaning Tasks</h3>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Deep clean all equipment (pull-outs where possible)',
                  'Clean tile and grout in kitchen',
                  'High dusting of all overhead areas',
                  'Deep clean hood exhaust system (coordinate with hood cleaning vendor)',
                  'Clean and degrease hard-to-reach corners',
                  'Clean exterior waste enclosure',
                  'Deep clean floor drains and grease traps (coordinate with service)',
                  'Clean HVAC vents and filters',
                  'Deep clean dining room upholstery',
                  'Clean outdoor seating areas thoroughly',
                  'Pressure wash exterior areas (as needed)',
                  'Inspect and clean all signage'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3 w-5 h-5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Overwhelmed by the Checklist?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            You don't have to do it all yourself. Spruce handles daily, weekly, and monthly cleaning so you can focus on running your restaurant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#quote" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-dark transition">Get Cleaning Quote</a>
            <a href="tel:+18772532646" className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition">Call 1-877-CLEANING</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Related Resources</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Nightly Cleaning', link: '/nightly-cleaning', desc: 'Daily cleaning programs' },
              { title: 'Deep Kitchen Cleaning', link: '/deep-kitchen-cleaning', desc: 'Monthly/quarterly deep cleans' },
              { title: 'PM Schedule Guide', link: '/restaurant-pm-schedule-los-angeles', desc: 'Preventive maintenance calendar' },
              { title: 'Health Inspection Guide', link: '/blog/complete-restaurant-health-inspection-guide-los-angeles', desc: 'Complete LA inspection guide' }
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
