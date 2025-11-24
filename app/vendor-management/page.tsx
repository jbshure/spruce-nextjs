import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Restaurant Vendor Management Platform — Los Angeles | Spruce',
  description: 'Vendor management platform for Los Angeles restaurants. Coordinate cleaning, PM, hood service, pest control, and all facility vendors in one system.',
};

export default function VendorManagement() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4"><Link href="/">Home</Link> / Services / <span>Vendor Management</span></div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Restaurant Vendor Management Platform — Los Angeles</h1>
          <p className="text-xl mb-8 text-white/90 max-w-4xl">Stop juggling multiple vendors. Spruce provides a single platform to manage all your restaurant facility vendors across Los Angeles — from cleaning to PM to hood service to pest control.</p>
          <div className="flex gap-4">
            <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition">See the Platform</a>
            <a href="tel:3235551234" className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition">Call (323) 555-1234</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Why Vendor Management Matters</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'One Platform', desc: 'Manage all vendors from a single dashboard' },
              { title: 'Complete Visibility', desc: 'See work orders, schedules, and invoices in real-time' },
              { title: 'Centralized Billing', desc: 'One invoice for all facility services' },
              { title: 'Emergency Dispatch', desc: '24/7 support for urgent repairs' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md text-center">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">What We Coordinate</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Cleaning Services', 'Preventive Maintenance', 'Hood & Exhaust Cleaning', 'Pest Control', 'HVAC Service', 'Plumbing Repairs', 'Equipment Repairs', 'Grease Trap Service', 'Fire Suppression'].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-primary mb-2">• {service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Get Vendor Management for Your Restaurant Chain</h2>
          <p className="text-xl mb-8">One partner. One platform. Complete facility vendor coordination.</p>
          <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition inline-block">Schedule a Platform Demo</a>
        </div>
      </section>
    </>
  );
}
