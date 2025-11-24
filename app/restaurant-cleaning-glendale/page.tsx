import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/restaurant-cleaning-glendale',
  },
  title: 'Restaurant Cleaning Glendale | Commercial Kitchen Cleaning Services | Hey Spruce',
  description: 'Restaurant cleaning Glendale - Serving Brand Blvd, Americana at Brand, and Glendale Galleria restaurants. Armenian cuisine specialists. Professional kitchen cleaning for shopping district establishments.',
  keywords: 'restaurant cleaning glendale, glendale restaurant cleaning, brand blvd restaurant cleaning, americana at brand restaurant cleaning, commercial kitchen cleaning glendale',
  openGraph: {
    title: 'Restaurant Cleaning Glendale | Commercial Kitchen Cleaning Services',
    description: 'Professional restaurant cleaning in Glendale. Serving shopping district restaurants, Armenian cuisine establishments, and upscale dining.',
    url: 'https://www.heyspruce.com/restaurant-cleaning-glendale',
  },
};

export default function GlendalePage() {
  const serviceAreas = [
    {
      title: 'Brand Blvd Restaurant Cleaning',
      description: 'Downtown Glendale main corridor cleaning. High-traffic restaurant and cafe specialists.',
      landmarks: ['Broadway to Glenoaks coverage', 'Near downtown Glendale core']
    },
    {
      title: 'Americana at Brand Restaurant Cleaning',
      description: 'Upscale shopping center restaurant cleaning. High-end establishment and food court specialists.',
      landmarks: ['Caruso shopping center', 'Near Pacific Theatres & fountain']
    },
    {
      title: 'Glendale Galleria Area Cleaning',
      description: 'Shopping district restaurant cleaning. Food court and casual dining establishment experience.',
      landmarks: ['Central Avenue & Broadway', 'Near Glendale Galleria mall']
    },
    {
      title: 'Armenian Cuisine Specialists',
      description: 'Expert cleaning for Armenian restaurants, bakeries, and cafes. Cultural cuisine establishment experience.',
      landmarks: ['Central Glendale coverage', 'Near Glenoaks & San Fernando']
    }
  ];

  return (
    <main>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/restaurant-cleaning-los-angeles" className="hover:text-primary">Restaurant Cleaning</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Glendale</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Restaurant Cleaning Services Glendale
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Professional Commercial Kitchen Cleaning for Glendale Restaurants & Shopping District
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Serving All Glendale</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Armenian Cuisine Specialists</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">160+ Glendale Locations</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+18772532646" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition text-center">
              Call for Glendale Service: 1-877-CLEANING
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
          <h2 className="text-3xl font-bold mb-4 text-center">Glendale Restaurant Cleaning Service Areas</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Hey Spruce provides professional restaurant cleaning throughout Glendale, including:
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why Glendale Restaurants Choose Hey Spruce</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cultural Cuisine Expertise',
                description: 'Specialized in Armenian, Middle Eastern, and international cuisine establishments. Understanding of unique kitchen equipment.'
              },
              {
                title: 'Shopping District Experience',
                description: 'Perfect for high-traffic mall and shopping center restaurants. Quick turnaround cleaning expertise.'
              },
              {
                title: 'Multilingual Service',
                description: 'Staff available who speak Armenian and other languages. Cultural understanding and professional communication.'
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
          <h2 className="text-4xl font-bold mb-4">Ready to Clean Your Glendale Restaurant?</h2>
          <p className="text-xl mb-8 text-white/90">Join 160+ Glendale restaurants that trust Hey Spruce</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18772532646" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition">
              Call 1-877-CLEANING
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
          <h2 className="text-2xl font-bold mb-8 text-center">Related Services in Glendale</h2>
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
    </main>
  );
}
