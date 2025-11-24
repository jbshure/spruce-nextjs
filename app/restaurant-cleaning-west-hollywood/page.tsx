import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Cleaning West Hollywood | WeHo Commercial Kitchen Cleaning | Hey Spruce',
  description: 'Restaurant cleaning West Hollywood - Serving WeHo restaurants, cafes, and nightlife establishments. Sunset Strip, Santa Monica Blvd, Melrose cleaning services. 24/7 emergency response.',
  keywords: 'restaurant cleaning west hollywood, weho restaurant cleaning, west hollywood commercial kitchen cleaning, sunset strip restaurant cleaning, melrose restaurant cleaning services',
};

export default function WestHollywoodPage() {
  const serviceAreas = [
    {
      title: 'Sunset Strip Restaurant Cleaning',
      description: 'Late-night cleaning for restaurants, clubs, and entertainment venues on the Sunset Strip.',
      landmarks: ['Sunset Blvd from La Cienega to Doheny', 'Near Chateau Marmont & Soho House']
    },
    {
      title: 'Santa Monica Blvd Cleaning',
      description: 'Restaurant and cafe cleaning along Santa Monica Boulevard. LGBTQ+ establishment specialists.',
      landmarks: ['Robertson to La Brea coverage', 'Near The Abbey & Pavilions']
    },
    {
      title: 'Melrose Avenue Cleaning',
      description: 'Trendy restaurant and brunch spot cleaning on Melrose. Instagram-worthy establishment maintenance.',
      landmarks: ['Melrose District coverage', 'Near Melrose Place']
    },
    {
      title: 'Design District Cleaning',
      description: 'High-end restaurant cleaning in the WeHo Design District.',
      landmarks: ['Robertson Blvd & Beverly Blvd', 'Near Pacific Design Center']
    }
  ];

  return (
    <main>

      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/restaurant-cleaning-los-angeles" className="hover:text-primary">Restaurant Cleaning</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">West Hollywood</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Restaurant Cleaning Services West Hollywood (WeHo)
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Professional Commercial Kitchen Cleaning for West Hollywood Restaurants & Nightlife
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">24/7 WeHo Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Late-Night Cleaning Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">300+ WeHo Locations Served</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+18772532646" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition text-center">
              Call for WeHo Service: 1-877-CLEANING
            </a>
            <Link href="/#quote" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition text-center">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">West Hollywood Restaurant Cleaning Service Areas</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Hey Spruce provides professional restaurant cleaning throughout West Hollywood, including:
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

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Why West Hollywood Restaurants Choose Hey Spruce</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Late-Night Specialists',
                description: 'Perfect for WeHo nightlife. We clean after 2am when bars and clubs close.'
              },
              {
                title: 'Entertainment Venue Experience',
                description: 'Experienced with restaurant-club hybrids, rooftop bars, and multi-level venues.'
              },
              {
                title: 'Discretion & Professionalism',
                description: 'High-profile establishment experience. Celebrity-frequented restaurant specialists.'
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

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Clean Your West Hollywood Restaurant?</h2>
          <p className="text-xl mb-8 text-white/90">Join 300+ WeHo establishments that trust Hey Spruce</p>
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
    </main>
  );
}
