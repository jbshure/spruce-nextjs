import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Front-of-House & Dining Room Cleaning Los Angeles | Spruce',
  description: 'Professional FOH and dining room cleaning in Los Angeles. Tables, chairs, windows, bars, floors. Make the right first impression every service.',
};

export default function FOHCleaning() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/">Home</Link> / Services / <span>FOH Cleaning</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Dining Room & Front-of-House Cleaning — Los Angeles</h1>
          <p className="text-xl mb-8 text-white/90 max-w-4xl">
            Your guests never see the kitchen. They see the dining room, the bar, the restrooms. Spruce handles front-of-house cleaning in Los Angeles that makes the right first impression every service.
          </p>
          <div className="flex gap-4">
            <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition">Get FOH Cleaning Quote</a>
            <a href="tel:3235551234" className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition">Call 1-877-CLEANING</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-6">Full FOH Cleaning Services</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">Front-of-house cleaning is more than a quick vacuum. We handle:</p>
              <ul className="space-y-3">
                {['Table and chair cleaning and sanitization', 'Booth and banquette cleaning', 'Host stand and waiting area maintenance', 'Entryway and vestibule cleaning', 'Patio and outdoor seating areas (as scoped)'].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center text-gray-500">[Dining Room Image]</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Nightly or Weekly FOH Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Nightly After Service', desc: 'Daily FOH cleaning as part of your closing routine' },
              { title: 'Weekly Deep Cleaning', desc: 'More intensive weekly cleaning for lower-traffic concepts' },
              { title: 'Combined BOH + FOH', desc: 'Comprehensive cleaning programs covering both kitchen and dining areas' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Keep Your Dining Room Guest-Ready</h2>
          <p className="text-xl mb-8">Let us handle the FOH so your team can focus on hospitality, not sweeping.</p>
          <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition inline-block">Get a FOH Cleaning Quote</a>
        </div>
      </section>
    </>
  );
}
