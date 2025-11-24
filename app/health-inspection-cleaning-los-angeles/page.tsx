import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: "/health-inspection-cleaning-los-angeles",
  },
  title: 'Health Inspection Cleaning Los Angeles | Emergency Pre-Inspection Cleaning | Spruce',
  description: 'Emergency health inspection cleaning in Los Angeles. Same-day deep cleaning, re-inspection prep, violation cleanup. Get inspection-ready fast with LA County-focused cleaning.',
  keywords: 'health inspection cleaning los angeles, pre-inspection cleaning la, emergency restaurant cleaning, reinspection cleaning los angeles, health code violation cleanup',
};

export default function HealthInspectionCleaning() {
  return (
    <>
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span>Health Inspection Cleaning</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Emergency Health Inspection Cleaning — Los Angeles
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-4xl">
            Got an inspection notice? Failed a re-inspection? Need emergency cleanup before LACDPH arrives? Spruce provides same-day health inspection cleaning in Los Angeles that gets you ready fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+18772532646" className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition text-center">Call Now: 1-877-CLEANING</a>
            <a href="#quote" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition text-center">Emergency Cleaning Quote</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-6 text-center">When You Need Inspection Cleaning</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Pre-Inspection Prep', desc: 'You got your inspection notice and need a deep clean before LACDPH arrives' },
              { title: 'Re-Inspection Cleanup', desc: 'You failed and need to fix violations before the re-inspection deadline' },
              { title: 'Emergency Situations', desc: 'Same-day or next-day emergency cleaning to address urgent health code issues' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border-2 border-red-100">
                <h3 className="text-xl font-bold mb-3 text-red-600">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8">What We Clean for Health Inspections</h2>
          <p className="text-lg text-gray-700 mb-8">We focus on the areas LA County health inspectors check most:</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Kitchen & BOH</h3>
              <ul className="space-y-3">
                {[
                  'Line station degreasing and sanitization',
                  'Equipment surfaces, handles, knobs',
                  'Floors, drains, and floor sink areas',
                  'Walk-in cooler/freezer floors and thresholds',
                  'Walls, ceilings, and overhead structures',
                  'Behind and under equipment',
                  'Prep areas and 3-compartment sinks',
                  'Hand sinks and sanitizer stations'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Restrooms & FOH</h3>
              <ul className="space-y-3">
                {[
                  'Restroom deep cleaning and sanitization',
                  'Hand sink compliance and stocking',
                  'Dining room and service areas',
                  'Trash and waste storage areas',
                  'Mop sink and janitorial areas',
                  'Exterior waste enclosures'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Common Violations We Address</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Grease buildup on equipment and surfaces',
              'Dirty floors, walls, and ceilings',
              'Unclean food contact surfaces',
              'Inadequate cleaning of utensils',
              'Dirty or clogged floor drains',
              'Unclean food prep areas',
              'Grease accumulation in hoods (coordination)',
              'Unsanitary storage areas'
            ].map((item, idx) => (
              <div key={idx} className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-center">
                <p className="text-gray-800 font-semibold text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-8">Same-Day & Emergency Service Available</h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We understand inspections don't wait. Call us and we'll mobilize a crew to get your restaurant inspection-ready as fast as possible.
          </p>
          <div className="text-center">
            <a href="tel:+18772532646" className="bg-red-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-red-700 transition text-xl inline-block">
              Call Now: 1-877-CLEANING
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Don't Let an Inspection Shut You Down</h2>
          <p className="text-xl mb-8">Emergency health inspection cleaning in Los Angeles. We'll get you ready.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18772532646" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition">Call 1-877-CLEANING</a>
            <a href="#quote" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition">Get Emergency Quote</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'LA Health Inspection Guide', link: '/blog/complete-restaurant-health-inspection-guide-los-angeles', desc: 'Complete guide to passing LA County inspections' },
              { title: 'Kitchen Cleaning Standards', link: '/blog/restaurant-kitchen-cleaning-standards-los-angeles', desc: 'Professional cleaning protocols for LA restaurants' },
              { title: 'Deep Kitchen Cleaning', link: '/deep-kitchen-cleaning', desc: 'Quarterly deep cleaning programs' }
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
