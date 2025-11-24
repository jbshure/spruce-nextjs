import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Cleaning Culver City | Commercial Kitchen Cleaning Services | Hey Spruce',
  description: 'Restaurant cleaning Culver City - Serving Washington Blvd, Downtown Culver City, and Culver Blvd restaurants. Film industry and tech company dining specialists. Professional kitchen cleaning services.',
  keywords: 'restaurant cleaning culver city, culver city restaurant cleaning, downtown culver city restaurant cleaning, washington blvd restaurant cleaning, commercial kitchen cleaning culver city',
  openGraph: {
    title: 'Restaurant Cleaning Culver City | Commercial Kitchen Cleaning Services',
    description: 'Professional restaurant cleaning in Culver City. Serving modern restaurants, film industry establishments, and tech company dining venues.',
    url: 'https://www.heyspruce.com/restaurant-cleaning-culver-city',
  },
};

export default function CulverCityPage() {
  const serviceAreas = [
    {
      title: 'Downtown Culver City Restaurant Cleaning',
      description: 'Modern restaurant cleaning in the heart of Culver City. Perfect for trendy eateries and entertainment venues.',
      landmarks: ['Main Street & Washington Blvd', 'Near Culver Hotel & ArcLight Cinemas']
    },
    {
      title: 'Washington Blvd Restaurant Cleaning',
      description: 'High-traffic corridor cleaning. Experienced with lunch rush establishments and corporate dining.',
      landmarks: ['Overland to La Cienega coverage', 'Near Sony Pictures Studios']
    },
    {
      title: 'Culver Blvd Restaurant Cleaning',
      description: 'Neighborhood restaurant and cafe cleaning. Family dining and casual establishment specialists.',
      landmarks: ['Venice Blvd to Jefferson Blvd', 'Near Culver City Park']
    },
    {
      title: 'Platform & Arts District Cleaning',
      description: 'Upscale dining and food hall cleaning. Modern restaurant concepts and chef-driven establishments.',
      landmarks: ['Platform shopping center', 'Culver City Arts District']
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
            <span className="text-gray-900 font-medium">Culver City</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Restaurant Cleaning Services Culver City
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Professional Commercial Kitchen Cleaning for Culver City Modern Restaurants
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Serving All Culver City</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Film Industry Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">150+ Culver City Locations</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:3235551234" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition text-center">
              Call for Culver City Service: (323) 555-1234
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
          <h2 className="text-3xl font-bold mb-4 text-center">Culver City Restaurant Cleaning Service Areas</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Hey Spruce provides professional restaurant cleaning throughout Culver City, including:
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why Culver City Restaurants Choose Hey Spruce</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Corporate Dining Experience',
                description: 'Perfect for restaurants serving tech and film industry professionals. Quick lunch service cleaning expertise.'
              },
              {
                title: 'Modern Restaurant Specialists',
                description: 'Experienced with contemporary kitchen equipment, open kitchens, and chef-driven concepts.'
              },
              {
                title: 'Flexible Scheduling',
                description: 'Adaptable to film industry schedules and production company dining needs. Early morning availability.'
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
          <h2 className="text-4xl font-bold mb-4">Ready to Clean Your Culver City Restaurant?</h2>
          <p className="text-xl mb-8 text-white/90">Join 150+ Culver City restaurants that trust Hey Spruce</p>
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
          <h2 className="text-2xl font-bold mb-8 text-center">Related Services in Culver City</h2>
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
