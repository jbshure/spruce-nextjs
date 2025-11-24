import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial Floor Scrubbing & Degreasing — Los Angeles Restaurants',
  description: 'Commercial floor scrubbing and degreasing for Los Angeles restaurants. Machine scrubbing, chemical treatment, slip resistance.',
};

export default function FloorScrubbing() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4"><Link href="/">Home</Link> / Services / <span>Floor Scrubbing</span></div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Commercial Floor Scrubbing & Degreasing — Los Angeles</h1>
          <p className="text-xl mb-8 text-white/90 max-w-4xl">Restaurant floors take a beating. Grease, foot traffic, spills. Spruce provides commercial floor scrubbing and degreasing in Los Angeles that keeps floors clean, safe, and inspection-ready.</p>
          <div className="flex gap-4">
            <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition">Get Floor Cleaning Quote</a>
            <a href="tel:3235551234" className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition">Call 1-877-CLEANING</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Machine Scrubbing & Manual Cleaning</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">Depending on your floor type and condition, we use:</p>
              <ul className="space-y-3">
                {['Auto-scrubbers for large open areas', 'Walk-behind scrubbers for medium-sized floors', 'Manual scrubbing for tight spaces or delicate surfaces', 'Specialty equipment for tile, concrete, or epoxy floors'].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center text-gray-500">[Floor Scrubbing Image]</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Get Commercial Floor Scrubbing in Los Angeles</h2>
          <p className="text-xl mb-8">Stop mopping around the problem. Get floors that are actually clean.</p>
          <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition inline-block">Schedule Floor Scrubbing</a>
        </div>
      </section>
    </>
  );
}
