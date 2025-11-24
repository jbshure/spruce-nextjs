import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Multi-Location Restaurant Cleaning — Los Angeles Chains | Spruce',
  description: 'Restaurant cleaning for multi-location chains in Los Angeles. One platform, consistent standards, centralized billing. Built for growing restaurant brands.',
};

export default function MultiLocationCleaning() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span>Multi-Location Cleaning</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Multi-Location Restaurant Cleaning — Los Angeles
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-4xl">
            When you operate 5, 10, or 50+ locations, you don't need a cleaning vendor. You need a facilities partner. Spruce is built for multi-location restaurant chains across Los Angeles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition text-center">Talk to Our Multi-Location Team</a>
            <a href="tel:3235551234" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition text-center">Call 1-877-CLEANING</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Why Multi-Location Chains Choose Spruce</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'One Platform for All Locations', desc: 'Manage cleaning, maintenance, and vendors for every restaurant from a single dashboard' },
              { title: 'Consistent Standards Everywhere', desc: 'Same checklists, same processes, same quality across all your restaurants' },
              { title: 'Centralized Billing & Reporting', desc: 'One invoice, one report, complete visibility into all locations' },
              { title: 'Real-Time Performance Tracking', desc: 'See which locations were cleaned, when, and by whom — with photo proof' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Scalability for Growing Brands</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '500+', label: 'Restaurant Locations' },
              { stat: '50+', label: 'Multi-Location Brands' },
              { stat: '98%', label: 'Client Retention Rate' }
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
          <h2 className="text-4xl font-bold mb-4">Get Multi-Location Cleaning in Los Angeles</h2>
          <p className="text-xl mb-8">Stop managing dozens of local cleaning vendors. Get one partner, one platform, and complete visibility.</p>
          <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition inline-block">Request Multi-Location Proposal</a>
        </div>
      </section>
    </>
  );
}
