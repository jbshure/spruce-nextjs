import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nightly Restaurant Cleaning Services — Los Angeles | Spruce',
  description: 'Nightly restaurant cleaning in Los Angeles. Daily maintenance programs for kitchens, dining rooms, and restrooms. Consistent service, photo documentation.',
};

export default function NightlyCleaning() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span>Nightly Cleaning</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Nightly Restaurant Cleaning Services — Los Angeles
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-4xl">
            Daily maintenance is the foundation. Spruce provides nightly restaurant cleaning in Los Angeles that keeps your kitchen, dining room, and restrooms ready for every shift.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition text-center">Start Nightly Cleaning Program</a>
            <a href="tel:3235551234" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition text-center">Call (323) 555-1234</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-6">What "Nightly Cleaning" Includes</h2>
          <p className="text-lg text-gray-700 mb-8">Nightly cleaning is your consistent baseline. We handle:</p>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-3">
              {['Kitchen line and station cleaning', 'Equipment surface cleaning and degreasing', 'Floor mopping and spot cleaning', 'Dining room table, chair, and booth cleaning', 'Restroom cleaning and restocking', 'Trash removal and receptacle cleaning'].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary font-bold text-xl mr-3">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center text-gray-500">[Nightly Cleaning Image]</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Consistency & Accountability</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Same Team', desc: 'We assign the same crew to your location so they learn your space' },
              { title: 'Photo Documentation', desc: 'Every session is documented with photos so you know the work was done' },
              { title: 'Checklist Tracking', desc: 'Standard checklists ensure nothing is missed night after night' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md text-center">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Start a Nightly Cleaning Program in Los Angeles</h2>
          <p className="text-xl mb-8">Stop worrying about whether your restaurant got cleaned last night. We'll handle it.</p>
          <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition inline-block">Get Nightly Cleaning Quote</a>
        </div>
      </section>
    </>
  );
}
