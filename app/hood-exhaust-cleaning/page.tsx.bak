import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hood & Exhaust Cleaning Services in Los Angeles | Coordination & Support | Spruce',
  description: 'Hood and exhaust cleaning coordination in Los Angeles. We schedule, document, and manage your hood cleaning with proven providers.',
};

export default function HoodExhaustCleaning() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / Services / <span>Hood & Exhaust Cleaning</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Hood & Exhaust Cleaning Services in Los Angeles</h1>
          <p className="text-sm text-white/90 mb-4">(Coordination & Support)</p>
          <p className="text-xl mb-8 text-white/90 max-w-4xl">
            Your hood and exhaust system are not optional. Spruce coordinates professional hood and exhaust cleaning in Los Angeles as part of your broader kitchen cleaning and maintenance plan.
          </p>
          <div className="flex gap-4">
            <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition">Coordinate My Hood Cleaning</a>
            <a href="tel:+18772532646" className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition">Call 1-877-CLEANING</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Why Hood & Exhaust Cleaning Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Fire Risk', desc: 'Grease buildup = fire risk. Regular hood cleaning prevents dangerous kitchen fires.' },
              { title: 'Air Quality', desc: 'Poor exhaust = hot, smoky line and bad air quality for your team.' },
              { title: 'Inspector Focus', desc: 'Inspectors look closely at hoods, ducts, and fans during health department visits.' }
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
          <h2 className="text-4xl font-bold text-center mb-6">What We Coordinate</h2>
          <p className="text-center text-gray-600 mb-12">Depending on your setup and provider, we help orchestrate:</p>
          <ul className="max-w-3xl mx-auto space-y-3">
            {['Hood surface cleaning and degreasing', 'Duct and plenum cleaning', 'Fan and rooftop component cleaning', 'Filter cleaning or replacement', 'Overspray protection for FOH and BOH areas'].map((item, idx) => (
              <li key={idx} className="flex items-start bg-white p-4 rounded-xl">
                <span className="text-primary font-bold text-xl mr-3">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Get Help with Hood Cleaning in Los Angeles</h2>
          <p className="text-xl mb-8">If you're tired of chasing vendors or managing hood schedules manually, we can take it off your plate.</p>
          <a href="#quote" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition inline-block">Talk to Spruce About Hood & Exhaust</a>
        </div>
      </section>
    </>
  );
}
