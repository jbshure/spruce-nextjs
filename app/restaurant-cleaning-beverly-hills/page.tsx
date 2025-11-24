import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/restaurant-cleaning-beverly-hills',
  },
  title: 'Restaurant Cleaning Beverly Hills | Luxury Commercial Kitchen Cleaning | Hey Spruce',
  description: 'Restaurant cleaning Beverly Hills - Serving Rodeo Drive, Canon Drive, and Wilshire Blvd luxury restaurants. High-end establishment specialists. Professional kitchen cleaning for celebrity dining venues.',
  keywords: 'restaurant cleaning beverly hills, beverly hills restaurant cleaning, rodeo drive restaurant cleaning, luxury restaurant cleaning beverly hills, commercial kitchen cleaning beverly hills',
  openGraph: {
    title: 'Restaurant Cleaning Beverly Hills | Luxury Commercial Kitchen Cleaning',
    description: 'Professional restaurant cleaning in Beverly Hills. Serving luxury restaurants, high-end establishments, and celebrity dining venues.',
    url: 'https://www.heyspruce.com/restaurant-cleaning-beverly-hills',
  },
};

export default function BeverlyHillsPage() {
  const serviceAreas = [
    {
      title: 'Rodeo Drive Restaurant Cleaning',
      description: 'Luxury restaurant and cafe cleaning on Rodeo Drive. White-glove service for high-end establishments.',
      landmarks: ['Wilshire to Santa Monica Blvd', 'Near luxury boutiques & hotels']
    },
    {
      title: 'Canon Drive & Beverly Drive Cleaning',
      description: 'Upscale dining establishment cleaning in the Golden Triangle. Celebrity restaurant specialists.',
      landmarks: ['Golden Triangle coverage', 'Near Beverly Wilshire Hotel']
    },
    {
      title: 'Wilshire Blvd Restaurant Cleaning',
      description: 'Fine dining and hotel restaurant cleaning along Wilshire Boulevard. Five-star establishment experience.',
      landmarks: ['La Cienega to Beverly Drive', 'Near The Peninsula & Four Seasons']
    },
    {
      title: 'South Beverly Hills Cleaning',
      description: 'Neighborhood restaurant cleaning in South Beverly Hills. Family-owned upscale establishment specialists.',
      landmarks: ['Olympic to Wilshire coverage', 'Near Beverly Hills High School area']
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
            <span className="text-gray-900 font-medium">Beverly Hills</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Restaurant Cleaning Services Beverly Hills
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Professional Commercial Kitchen Cleaning for Beverly Hills Luxury Restaurants
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Serving All Beverly Hills</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Luxury Restaurant Specialists</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">250+ Beverly Hills Locations</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+18772532646" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition text-center">
              Call for Beverly Hills Service: 1-877-CLEANING
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
          <h2 className="text-3xl font-bold mb-4 text-center">Beverly Hills Restaurant Cleaning Service Areas</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Hey Spruce provides professional restaurant cleaning throughout Beverly Hills, including:
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
          <h2 className="text-3xl font-bold mb-12 text-center">Why Beverly Hills Restaurants Choose Hey Spruce</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Luxury Standard Excellence',
                description: 'White-glove cleaning service matching Beverly Hills five-star standards. Impeccable attention to detail.'
              },
              {
                title: 'Discretion & Confidentiality',
                description: 'Professional service for celebrity-frequented establishments. NDAs available. Trusted by high-profile venues.'
              },
              {
                title: 'Fine Dining Expertise',
                description: 'Specialized in Michelin-star and AAA Five Diamond restaurant cleaning. Understanding of luxury kitchen equipment.'
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
          <h2 className="text-4xl font-bold mb-4">Ready to Clean Your Beverly Hills Restaurant?</h2>
          <p className="text-xl mb-8 text-white/90">Join 250+ Beverly Hills restaurants that trust Hey Spruce</p>
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
          <h2 className="text-2xl font-bold mb-8 text-center">Related Services in Beverly Hills</h2>
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
