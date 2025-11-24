import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Cleaning Pasadena | Commercial Kitchen Cleaning Services | Hey Spruce',
  description: 'Restaurant cleaning Pasadena - Serving Old Pasadena, Colorado Blvd, and Lake Avenue restaurants. Historic establishment specialists. Professional kitchen cleaning for Rose Bowl area dining.',
  keywords: 'restaurant cleaning pasadena, pasadena restaurant cleaning, old pasadena restaurant cleaning, colorado blvd restaurant cleaning, commercial kitchen cleaning pasadena',
  openGraph: {
    title: 'Restaurant Cleaning Pasadena | Commercial Kitchen Cleaning Services',
    description: 'Professional restaurant cleaning in Pasadena. Serving historic restaurants, upscale dining, and Rose Bowl area establishments.',
    url: 'https://www.heyspruce.com/restaurant-cleaning-pasadena',
  },
};

export default function PasadenaPage() {
  const serviceAreas = [
    {
      title: 'Old Pasadena Restaurant Cleaning',
      description: 'Historic district restaurant cleaning. Experienced with vintage buildings and modern dining concepts.',
      landmarks: ['Colorado Blvd to Green Street', 'Near Pasadena Playhouse & Castle Green']
    },
    {
      title: 'Colorado Blvd Restaurant Cleaning',
      description: 'Main corridor restaurant and cafe cleaning. Tournament of Roses Parade route establishments.',
      landmarks: ['Orange Grove to Lake Avenue', 'Near Paseo Colorado']
    },
    {
      title: 'Lake Avenue Restaurant Cleaning',
      description: 'Upscale dining and shopping district cleaning. High-end establishment specialists.',
      landmarks: ['Walnut to Del Mar coverage', 'Near Lake Avenue shopping district']
    },
    {
      title: 'South Lake & Rose Bowl Area Cleaning',
      description: 'Family dining and sports venue restaurant cleaning. High-volume event day experience.',
      landmarks: ['South Lake Avenue', 'Near Rose Bowl & Brookside Golf Course']
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
            <span className="text-gray-900 font-medium">Pasadena</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Restaurant Cleaning Services Pasadena
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Professional Commercial Kitchen Cleaning for Pasadena Historic & Upscale Restaurants
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Serving All Pasadena</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Historic Building Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">180+ Pasadena Locations</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:3235551234" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition text-center">
              Call for Pasadena Service: (323) 555-1234
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
          <h2 className="text-3xl font-bold mb-4 text-center">Pasadena Restaurant Cleaning Service Areas</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Hey Spruce provides professional restaurant cleaning throughout Pasadena, including:
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why Pasadena Restaurants Choose Hey Spruce</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Historic Building Specialists',
                description: 'Experienced with Old Pasadena vintage buildings. Understanding of historic preservation requirements.'
              },
              {
                title: 'Event-Ready Cleaning',
                description: 'Perfect for Rose Bowl game days, Tournament of Roses, and high-traffic event periods.'
              },
              {
                title: 'Upscale Dining Experience',
                description: 'Specialized in fine dining and Pasadena high-end establishment cleaning. White-tablecloth restaurant expertise.'
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
          <h2 className="text-4xl font-bold mb-4">Ready to Clean Your Pasadena Restaurant?</h2>
          <p className="text-xl mb-8 text-white/90">Join 180+ Pasadena restaurants that trust Hey Spruce</p>
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
          <h2 className="text-2xl font-bold mb-8 text-center">Related Services in Pasadena</h2>
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
