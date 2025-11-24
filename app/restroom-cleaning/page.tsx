import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Restaurant Restroom Cleaning Services — Los Angeles | Spruce',
  description: 'Professional restroom cleaning for Los Angeles restaurants. Deep sanitization, restocking, floor care. Keep your restrooms guest-ready every service.',
};

export default function RestroomCleaning() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4"><Link href="/">Home</Link> / Services / <span>Restroom Cleaning</span></div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Restaurant Restroom Cleaning Services — Los Angeles</h1>
          <p className="text-xl mb-8 text-white/90 max-w-4xl">Your restrooms say a lot about your restaurant. Spruce provides professional restroom cleaning in Los Angeles that keeps guest and staff restrooms fresh, stocked, and sanitary.</p>
          <div className="flex gap-4">
            <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition">Get Restroom Cleaning Quote</a>
            <a href="tel:3235551234" className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition">Call 1-877-CLEANING</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-6">Deep Restroom Cleaning & Sanitization</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">We don't just wipe surfaces. Our restroom cleaning includes:</p>
              <ul className="space-y-3">
                {['Toilets and urinals thoroughly cleaned and sanitized', 'Sinks, faucets, and countertops', 'Mirrors and glass surfaces', 'Partition walls and doors', 'Soap and paper towel dispensers', 'Trash receptacle cleaning and liner replacement'].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center text-gray-500">[Restroom Cleaning Image]</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Get Professional Restroom Cleaning in Los Angeles</h2>
          <p className="text-xl mb-8">Don't let restrooms hurt your reputation. Keep them clean, stocked, and guest-ready.</p>
          <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition inline-block">Schedule Restroom Cleaning</a>
        </div>
      </section>
    </>
  );
}
