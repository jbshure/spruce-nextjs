import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Cleaning Santa Monica | Beach-Side Commercial Kitchen Cleaning | Hey Spruce',
  description: 'Restaurant cleaning Santa Monica - Serving Third Street Promenade, Main Street, Ocean Avenue restaurants. Beach-side dining specialists. Professional kitchen cleaning for Santa Monica pier establishments.',
  keywords: 'restaurant cleaning santa monica, santa monica restaurant cleaning, third street promenade restaurant cleaning, beach restaurant cleaning santa monica, commercial kitchen cleaning santa monica',
  openGraph: {
    title: 'Restaurant Cleaning Santa Monica | Beach-Side Commercial Kitchen Cleaning',
    description: 'Professional restaurant cleaning in Santa Monica. Serving beach-side restaurants, pier establishments, and upscale dining venues.',
    url: 'https://www.heyspruce.com/restaurant-cleaning-santa-monica',
  },
};

export default function SantaMonicaPage() {
  const serviceAreas = [
    {
      title: 'Third Street Promenade Restaurant Cleaning',
      description: 'High-traffic restaurant cleaning on Third Street Promenade. Quick turnaround for busy dining establishments.',
      landmarks: ['Broadway to Wilshire coverage', 'Near Santa Monica Place']
    },
    {
      title: 'Main Street Restaurant Cleaning',
      description: 'Boutique restaurant and cafe cleaning along Main Street. Perfect for trendy brunch spots and upscale dining.',
      landmarks: ['Ocean Park to Pico Blvd', 'Near Main Street shops']
    },
    {
      title: 'Ocean Avenue & Pier Restaurant Cleaning',
      description: 'Beach-side restaurant specialists. Salt air and high-volume tourist restaurant experience.',
      landmarks: ['Pacific Coast Highway coverage', 'Near Santa Monica Pier & Carousel']
    },
    {
      title: 'Montana Avenue Restaurant Cleaning',
      description: 'High-end restaurant cleaning for Montana Avenue establishments. White-tablecloth dining specialists.',
      landmarks: ['7th to 17th Street', 'Near upscale boutiques']
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
            <span className="text-gray-900 font-medium">Santa Monica</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Restaurant Cleaning Services Santa Monica
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Professional Commercial Kitchen Cleaning for Santa Monica Beach-Side Restaurants
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Serving All Santa Monica</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Beach Restaurant Specialists</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">200+ Santa Monica Locations</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:3235551234" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition text-center">
              Call for Santa Monica Service: (323) 555-1234
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
          <h2 className="text-3xl font-bold mb-4 text-center">Santa Monica Restaurant Cleaning Service Areas</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Hey Spruce provides professional restaurant cleaning throughout Santa Monica, including:
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why Santa Monica Restaurants Choose Hey Spruce</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Beach Environment Experts',
                description: 'Specialized cleaning for coastal restaurants dealing with salt air, sand, and ocean moisture.'
              },
              {
                title: 'High-Volume Experience',
                description: 'Perfect for busy tourist areas. We handle high-traffic restaurants and quick turnaround cleaning.'
              },
              {
                title: 'Outdoor Dining Specialists',
                description: 'Expert cleaning for patios, sidewalk cafes, and beach-front dining areas unique to Santa Monica.'
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
          <h2 className="text-4xl font-bold mb-4">Ready to Clean Your Santa Monica Restaurant?</h2>
          <p className="text-xl mb-8 text-white/90">Join 200+ Santa Monica restaurants that trust Hey Spruce</p>
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
          <h2 className="text-2xl font-bold mb-8 text-center">Related Services in Santa Monica</h2>
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
