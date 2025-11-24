import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/restaurant-cleaning-downtown-los-angeles',
  },
  title: 'Restaurant Cleaning Downtown Los Angeles | #1 DTLA Commercial Kitchen Cleaning | Hey Spruce',
  description: 'Restaurant cleaning Downtown Los Angeles - Serving DTLA restaurants since 2015. 2-hour response. Health inspection guarantee. Professional kitchen cleaning for Spring Street, Broadway, Little Tokyo, Arts District.',
  keywords: 'restaurant cleaning downtown los angeles, dtla restaurant cleaning, downtown la commercial kitchen cleaning, restaurant cleaning services downtown los angeles, kitchen cleaning dtla',
  openGraph: {
    title: 'Restaurant Cleaning Downtown Los Angeles | DTLA Commercial Kitchen Cleaning',
    description: 'Professional restaurant cleaning in Downtown LA. 30-minute response to DTLA. Serving 500+ downtown restaurants.',
    url: 'https://www.heyspruce.com/restaurant-cleaning-downtown-los-angeles',
  },
};

export default function DowntownLAPage() {
  const serviceAreas = [
    {
      title: 'Financial District Restaurant Cleaning',
      description: 'Serving restaurants near Grand Ave, Hope Street, and Bunker Hill. Quick response to emergency cleaning needs for business lunch establishments.',
      landmarks: ['5th Street to 9th Street coverage', 'Near US Bank Tower & Wells Fargo Center']
    },
    {
      title: 'Arts District Restaurant Cleaning',
      description: 'Specialized cleaning for trendy restaurants, cafes, and food halls in the Arts District. Equipment cleaning for industrial kitchens.',
      landmarks: ['East of Alameda Street', 'Near ROW DTLA & Arts District Brewing']
    },
    {
      title: 'Little Tokyo Restaurant Cleaning',
      description: 'Expert cleaning for Japanese restaurants, ramen shops, and izakayas. Understanding of specialized kitchen equipment.',
      landmarks: ['1st Street to 3rd Street', 'Near Japanese Village Plaza']
    },
    {
      title: 'Historic Core Restaurant Cleaning',
      description: 'Cleaning services for restaurants in historic buildings. Broadway, Spring Street, and Main Street coverage.',
      landmarks: ['Broadway Theater District', 'Grand Central Market area']
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
            <span className="text-gray-900 font-medium">Downtown Los Angeles</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Restaurant Cleaning Services Downtown Los Angeles (DTLA)
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Professional Commercial Kitchen Cleaning for Downtown LA Restaurants Since 2015
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">Serving All DTLA Districts</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">30-Minute Response to Downtown</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-bold">500+ DTLA Restaurants Cleaned</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+18772532646" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition text-center">
              Call for DTLA Service: 1-877-CLEANING
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
          <h2 className="text-3xl font-bold mb-4 text-center">Downtown Los Angeles Restaurant Cleaning Service Areas</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Hey Spruce provides professional restaurant cleaning throughout Downtown Los Angeles, including:
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

      {/* Why Choose Us for DTLA */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Downtown LA Restaurants Choose Hey Spruce</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fast DTLA Response',
                description: 'Located near downtown with 30-minute emergency response times for urgent cleaning needs.'
              },
              {
                title: 'High-Rise Experience',
                description: 'Experienced with downtown high-rise building requirements, loading docks, and service elevators.'
              },
              {
                title: 'Late-Night Service',
                description: 'Perfect for downtown restaurants open late. We clean after your last customer leaves.'
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
          <h2 className="text-4xl font-bold mb-4">Ready to Clean Your Downtown LA Restaurant?</h2>
          <p className="text-xl mb-8 text-white/90">Join 500+ DTLA restaurants that trust Hey Spruce</p>
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
          <h2 className="text-2xl font-bold mb-8 text-center">Related Services in Downtown LA</h2>
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
