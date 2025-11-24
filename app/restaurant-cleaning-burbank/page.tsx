import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Cleaning Burbank | Media District Commercial Kitchen Cleaning | Hey Spruce',
  description: 'Restaurant cleaning Burbank - Serving Magnolia Blvd, San Fernando Blvd, and Media District restaurants. Entertainment industry specialists. Professional kitchen cleaning for studio-area dining.',
  keywords: 'restaurant cleaning burbank, burbank restaurant cleaning, magnolia blvd restaurant cleaning, media district restaurant cleaning, commercial kitchen cleaning burbank',
  openGraph: {
    title: 'Restaurant Cleaning Burbank | Media District Commercial Kitchen Cleaning',
    description: 'Professional restaurant cleaning in Burbank. Serving entertainment industry, studio-area restaurants, and modern dining establishments.',
    url: 'https://www.heyspruce.com/restaurant-cleaning-burbank',
  },
};

export default function BurbankPage() {
  const serviceAreas = [
    {
      title: 'Magnolia Blvd Restaurant Cleaning',
      description: 'Main corridor restaurant and cafe cleaning. Entertainment industry lunch spot specialists.',
      landmarks: ['Hollywood Way to Buena Vista', 'Near Magnolia Park shops']
    },
    {
      title: 'San Fernando Blvd Restaurant Cleaning',
      description: 'Downtown Burbank dining establishment cleaning. High-traffic corridor experience.',
      landmarks: ['Olive to Alameda coverage', 'Near Downtown Burbank Metrolink']
    },
    {
      title: 'Media District Restaurant Cleaning',
      description: 'Studio-area restaurant cleaning. Entertainment industry client specialists.',
      landmarks: ['Near Warner Bros, Disney, NBC', 'Riverside Drive area']
    },
    {
      title: 'Airport Area Restaurant Cleaning',
      description: 'Hollywood Burbank Airport vicinity cleaning. High-volume business traveler establishment experience.',
      landmarks: ['Near Bob Hope Airport', 'Hollywood Way corridor']
    }
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/restaurant-cleaning-los-angeles" className="hover:text-primary">Restaurant Cleaning</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Burbank</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Restaurant Cleaning Services Burbank
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Professional Commercial Kitchen Cleaning for Burbank Entertainment Industry Restaurants
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Serving All Burbank</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Media Industry Specialists</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">140+ Burbank Locations</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:3235551234" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition text-center">
              Call for Burbank Service: (323) 555-1234
            </a>
            <Link href="/#quote" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition text-center">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Burbank Restaurant Cleaning Service Areas</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Hey Spruce provides professional restaurant cleaning throughout Burbank, including:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-primary">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.landmarks.map((landmark, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-gray-700">{landmark}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Burbank Restaurants Choose Hey Spruce</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Entertainment Industry Experience',
                description: 'Perfect for studio commissaries and restaurants serving entertainment professionals. Understanding of industry schedules.'
              },
              {
                title: 'Fast Lunch Service Cleaning',
                description: 'Expert at quick turnaround cleaning for busy lunch establishments. Ideal for restaurants near studios and offices.'
              },
              {
                title: 'Flexible Scheduling',
                description: 'Adaptable to production schedules and early call times. Available for breakfast service establishments.'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-custom-md">
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Clean Your Burbank Restaurant?</h2>
          <p className="text-xl mb-8 text-white/90">Join 140+ Burbank restaurants that trust Hey Spruce</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:3235551234" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition">
              Call (323) 555-1234
            </a>
            <Link href="/#quote" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Services in Burbank</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Deep Kitchen Cleaning', link: '/deep-kitchen-cleaning' },
              { title: 'Nightly Cleaning', link: '/nightly-cleaning' },
              { title: 'Hood Exhaust Cleaning', link: '/hood-exhaust-cleaning' }
            ].map((service, idx) => (
              <Link key={idx} href={service.link} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition text-center border border-gray-200">
                <h3 className="font-bold text-lg">{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
