import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Back-of-House Cleaning Services — Los Angeles | Kitchen Line & Station Cleaning',
  description: 'BOH and kitchen line cleaning in Los Angeles. Station cleaning, equipment surfaces, grease removal, floors, walls. Keep your line clean and inspection-ready.',
};

export default function BOHCleaning() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/">Home</Link> / Services / <span>BOH Cleaning</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Back-of-House Cleaning Services — Los Angeles</h1>
          <p className="text-xl mb-8 text-white/90 max-w-4xl">
            Your line crew cleans between tickets. We clean after service. Spruce provides back-of-house cleaning in Los Angeles that keeps your kitchen line ready for every shift.
          </p>
          <div className="flex gap-4">
            <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition">Schedule BOH Cleaning</a>
            <a href="tel:+18772532646" className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition">Call 1-877-CLEANING</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-6">Line Cleaning & Station Cleaning</h2>
          <p className="text-lg text-gray-700 mb-8">We focus on the areas your team touches constantly during service:</p>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-3">
              {['Cookline surfaces and stations', 'Sauté, grill, and fry station cleaning', 'Prep station surfaces and cutting boards (as scoped)', 'Expediting area and pass window', 'Dish pit and warewashing areas'].map((item, idx) => (
                <li key={idx} className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                  <span className="text-primary font-bold text-xl mr-3">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center text-gray-500">[BOH Cleaning Image]</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Photo Documentation of All Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '100%', label: 'Photo Documented' },
              { stat: '24/7', label: 'Platform Access' },
              { stat: '500+', label: 'Locations Served' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-md text-center">
                <div className="text-5xl font-bold text-primary mb-2">{item.stat}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Get Back-of-House Cleaning in Los Angeles</h2>
          <p className="text-xl mb-8">Keep your line clean, your staff safe, and your inspectors happy.</p>
          <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition inline-block">Schedule BOH Cleaning</a>
        </div>
      </section>
    </>
  );
}
