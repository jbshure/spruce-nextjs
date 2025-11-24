import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: "/kitchen-line-cleaning",
  },
  title: 'Kitchen Line Cleaning Services Los Angeles | Cookline Cleaning | Spruce',
  description: 'Professional kitchen line cleaning in Los Angeles. Cookline degreasing, station cleaning, equipment surfaces, and nightly line maintenance for restaurant kitchens.',
};

export default function KitchenLineCleaning() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span>Kitchen Line Cleaning</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Kitchen Line Cleaning Services — Los Angeles
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-4xl">
            Your cookline is where health inspectors focus first. Spruce provides nightly kitchen line cleaning in Los Angeles that keeps stations degreased, surfaces sanitized, and your operation inspection-ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition text-center">Get Line Cleaning Quote</a>
            <a href="tel:+18772532646" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition text-center">Call 1-877-CLEANING</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-6">What Kitchen Line Cleaning Includes</h2>
          <p className="text-lg text-gray-700 mb-8">Line cleaning isn't just wiping down counters. We handle the full cookline:</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ul className="space-y-3">
                {['Station surface degreasing and sanitization', 'Equipment front, side, and handle cleaning', 'Knob, switch, and control panel cleaning', 'Splash zone and backsplash cleaning', 'Under-counter and shelf cleaning', 'Floor degreasing around line stations'].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center text-gray-500">[Kitchen Line Image]</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Why Nightly Line Cleaning Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Health Code Compliance', desc: 'Grease buildup and residue on line equipment are top health code violations' },
              { title: 'Fire Safety', desc: 'Grease on cookline surfaces is a fire hazard and NFPA compliance issue' },
              { title: 'Equipment Longevity', desc: 'Daily cleaning prevents corrosion and extends the life of expensive equipment' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md text-center">
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Full Cookline Cleaning Checklist</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 text-sm">
            {[
              'Flat-top grill cleaning and degreasing',
              'Fryer station surface cleaning',
              'Char-broiler and grill area cleaning',
              'Sauté and range station cleaning',
              'Prep station surface sanitization',
              'Expo and pass areas',
              'Ticket rail and order areas',
              'Hand sink and sanitizer bucket areas',
              'Walls and backsplash behind equipment'
            ].map((item, i) => (
              <li key={i} className="bg-white p-4 rounded-xl border border-gray-200">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Keep Your Cookline Inspection-Ready</h2>
          <p className="text-xl mb-8">Nightly line cleaning programs designed for high-volume restaurant kitchens in LA.</p>
          <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition inline-block">Get a Line Cleaning Quote</a>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Related Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Back-of-House Cleaning', link: '/back-of-house-cleaning' },
              { title: 'Commercial Kitchen Cleaning', link: '/commercial-kitchen-cleaning' },
              { title: 'Deep Kitchen Cleaning', link: '/deep-kitchen-cleaning' },
              { title: 'Nightly Cleaning', link: '/nightly-cleaning' }
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
