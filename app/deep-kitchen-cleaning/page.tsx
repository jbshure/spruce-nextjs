import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: "/deep-kitchen-cleaning",
  },
  title: 'Deep Kitchen Cleaning Services in Los Angeles, CA | Spruce',
  description: 'Deep kitchen cleaning in Los Angeles that strips out grease, restores surfaces, and gets you inspection-ready. Equipment pull-outs, tile cleaning, quarterly programs.',
};

export default function DeepKitchenCleaning() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span>Deep Kitchen Cleaning</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Deep Kitchen Cleaning Services in Los Angeles, CA
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-4xl">
            When nightly cleaning isn't enough, you need a real deep clean. Spruce provides deep kitchen cleaning in Los Angeles that strips out grease, restores surfaces, and gets you inspection-ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition text-center">Book a Deep Clean</a>
            <a href="tel:+18772532646" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition text-center">Call 1-877-CLEANING</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-6">What "Deep Kitchen Cleaning" Actually Means</h2>
          <p className="text-lg text-gray-700 mb-8">Deep cleaning is not a slightly longer nightly service. It's a different level of work.</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg font-semibold mb-4">Our deep kitchen cleaning services include:</p>
              <ul className="space-y-3">
                {['Pulling out eligible equipment', 'Cleaning walls, floors, and connections behind the line', 'Heavy degreasing of surfaces and fixtures', 'Tile and grout cleaning in high-traffic zones', 'High dusting of overhead structures', 'Focused attention on hard-to-reach corners'].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center text-gray-500">[Deep Clean Image]</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Quarterly / Semi-Annual Deep Cleaning Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '4x', label: 'Annual Deep Cleans (High-Volume)' },
              { stat: '2x', label: 'Annual Deep Cleans (Standard)' },
              { stat: '100%', label: 'Photo Documented' }
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
          <h2 className="text-4xl font-bold mb-4">Ready for a Real Reset?</h2>
          <p className="text-xl mb-8">If your kitchen needs more than a quick mop and wipe-down, we can help.</p>
          <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition inline-block">Book a Deep Kitchen Clean</a>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Related Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Commercial Kitchen Cleaning', link: '/commercial-kitchen-cleaning' },
              { title: 'Restaurant Cleaning', link: '/restaurant-cleaning-los-angeles' },
              { title: 'Hood & Exhaust Coordination', link: '/hood-exhaust-cleaning' },
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
