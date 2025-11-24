import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Restaurant Preventive Maintenance — Los Angeles | Equipment PM & Repairs | Spruce',
  description: 'Preventive maintenance for Los Angeles restaurants. Equipment PM, filter changes, light repairs. Keep equipment running and avoid costly breakdowns.',
};

export default function PreventiveMaintenance() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span>Preventive Maintenance</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Restaurant Preventive Maintenance — Los Angeles
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-4xl">
            Clean kitchens are important. Working equipment is critical. Spruce provides preventive maintenance programs for Los Angeles restaurants that keep equipment running and minimize costly breakdowns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition text-center">Start a PM Program</a>
            <a href="tel:3235551234" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition text-center">Call (323) 555-1234</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Why Preventive Maintenance Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Lower Repair Costs', desc: 'Catch small issues before they become expensive emergency repairs' },
              { title: 'Minimize Downtime', desc: 'Scheduled PM is planned; breakdowns happen during peak service' },
              { title: 'Extend Equipment Life', desc: 'Well-maintained equipment lasts longer and runs more efficiently' }
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
          <h2 className="text-4xl font-bold mb-6">What's Included in PM Programs</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">Our preventive maintenance programs cover:</p>
              <ul className="space-y-3">
                {[
                  'Equipment filter changes (HVAC, refrigeration, hood filters)',
                  'Gasket inspections and replacements',
                  'Door hinge adjustments and minor repairs',
                  'Cleaning of condenser coils and airflow components',
                  'Basic equipment calibration checks',
                  'Light plumbing maintenance (faucet aerators, drain cleaning)',
                  'Light fixture and bulb replacements'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center text-gray-500">[PM Service Image]</div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Asset Tracking & Service History</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '10K+', label: 'Equipment Assets Tracked' },
              { stat: '4x', label: 'Annual PM Visits' },
              { stat: '24/7', label: 'Emergency Support' }
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
          <h2 className="text-4xl font-bold mb-4">Start a Preventive Maintenance Program</h2>
          <p className="text-xl mb-8">Stop reacting to breakdowns. Get ahead of problems with scheduled PM.</p>
          <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition inline-block">Request PM Program Quote</a>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Related Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Vendor Management', link: '/vendor-management' },
              { title: 'Commercial Kitchen Cleaning', link: '/commercial-kitchen-cleaning' },
              { title: 'Multi-Location Programs', link: '/multi-location-cleaning' },
              { title: 'Platform', link: '/#platform' }
            ].map((service, idx) => (
              <Link key={idx} href={service.link} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition">{service.title}</h3>
                <span className="text-primary font-bold text-2xl">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
