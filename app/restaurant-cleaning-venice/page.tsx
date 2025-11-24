import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Cleaning Venice | Beach-Side Commercial Kitchen Cleaning | Hey Spruce',
  description: 'Restaurant cleaning Venice - Serving Abbot Kinney, Venice Beach Boardwalk, and Rose Avenue restaurants. Beach dining, health-conscious cafes, and eclectic establishment specialists.',
  keywords: 'restaurant cleaning venice, venice beach restaurant cleaning, abbot kinney restaurant cleaning, venice boardwalk restaurant cleaning, commercial kitchen cleaning venice',
  openGraph: {
    title: 'Restaurant Cleaning Venice | Beach-Side Commercial Kitchen Cleaning',
    description: 'Professional restaurant cleaning in Venice. Serving beach restaurants, health-conscious cafes, and eclectic dining establishments.',
    url: 'https://www.heyspruce.com/restaurant-cleaning-venice',
  },
};

export default function VenicePage() {
  const serviceAreas = [
    {
      title: 'Abbot Kinney Restaurant Cleaning',
      description: 'Trendy restaurant and cafe cleaning on Abbot Kinney. Perfect for health-conscious and artisanal establishments.',
      landmarks: ['Venice Blvd to Westminster Ave', 'Near boutique shops & galleries']
    },
    {
      title: 'Venice Beach Boardwalk Cleaning',
      description: 'High-volume beach-side restaurant cleaning. Tourist dining and outdoor establishment specialists.',
      landmarks: ['Ocean Front Walk coverage', 'Near Venice Pier & Muscle Beach']
    },
    {
      title: 'Rose Avenue Restaurant Cleaning',
      description: 'Modern cafe and brunch spot cleaning. Instagram-worthy establishment maintenance.',
      landmarks: ['Main Street to Lincoln Blvd', 'Near Rose Avenue shops']
    },
    {
      title: 'Venice Canals Area Cleaning',
      description: 'Boutique restaurant cleaning in the historic canals area. Upscale waterfront dining specialists.',
      landmarks: ['Dell Avenue & Grand Canal', 'Near Venice Canals walkways']
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
            <span className="text-gray-900 font-medium">Venice</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Restaurant Cleaning Services Venice Beach
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Professional Commercial Kitchen Cleaning for Venice Beach Restaurants & Cafes
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Serving All Venice</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Beach Restaurant Specialists</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">175+ Venice Locations Served</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:3235551234" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition text-center">
              Call for Venice Service: (323) 555-1234
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
          <h2 className="text-3xl font-bold mb-4 text-center">Venice Restaurant Cleaning Service Areas</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Hey Spruce provides professional restaurant cleaning throughout Venice, including:
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why Venice Restaurants Choose Hey Spruce</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Health-Conscious Specialists',
                description: 'Expert cleaning for juice bars, vegan restaurants, and organic cafes. Understanding of specialized dietary establishments.'
              },
              {
                title: 'Beach Environment Experts',
                description: 'Experienced with coastal restaurant challenges including salt air, sand, and outdoor dining maintenance.'
              },
              {
                title: 'Eclectic Concept Experience',
                description: 'Perfect for unique Venice establishments. From bohemian cafes to modern fusion restaurants.'
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
          <h2 className="text-4xl font-bold mb-4">Ready to Clean Your Venice Restaurant?</h2>
          <p className="text-xl mb-8 text-white/90">Join 175+ Venice restaurants that trust Hey Spruce</p>
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
          <h2 className="text-2xl font-bold mb-8 text-center">Related Services in Venice</h2>
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
