import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Cleaning Blog | Tips, Guides & Industry News | Hey Spruce',
  description: 'Expert restaurant cleaning tips, commercial kitchen maintenance guides, and industry insights from Hey Spruce. Learn best practices for keeping your LA restaurant clean and compliant.',
  keywords: 'restaurant cleaning tips, commercial kitchen cleaning guide, restaurant maintenance, health inspection tips',
};

const blogPosts = [
  {
    slug: 'health-inspection-checklist-los-angeles',
    title: 'Complete Health Inspection Checklist for Los Angeles Restaurants',
    excerpt: 'Everything LA County health inspectors check during restaurant inspections. Use this checklist to prepare and pass with flying colors.',
    category: 'Health & Compliance',
    date: '2024-01-15',
    readTime: '8 min read'
  },
  {
    slug: 'restaurant-kitchen-deep-cleaning-guide',
    title: 'Restaurant Kitchen Deep Cleaning: Complete Step-by-Step Guide',
    excerpt: 'Professional guide to deep cleaning your commercial kitchen. Equipment cleaning, degreasing techniques, and maintenance schedules.',
    category: 'Cleaning Guides',
    date: '2024-01-12',
    readTime: '12 min read'
  },
  {
    slug: 'nfpa-96-compliance-hood-cleaning',
    title: 'NFPA 96 Compliance: Hood Cleaning Requirements for LA Restaurants',
    excerpt: 'Understanding NFPA 96 standards for exhaust hood cleaning. Frequency requirements, documentation, and avoiding violations.',
    category: 'Compliance',
    date: '2024-01-10',
    readTime: '6 min read'
  },
  {
    slug: 'restaurant-floor-cleaning-degreasing',
    title: 'How to Properly Clean and Degrease Restaurant Kitchen Floors',
    excerpt: 'Professional floor cleaning techniques for commercial kitchens. Products, methods, and preventing slip hazards.',
    category: 'Cleaning Guides',
    date: '2024-01-08',
    readTime: '7 min read'
  },
  {
    slug: 'multi-location-restaurant-cleaning-management',
    title: 'Managing Cleaning Across Multiple Restaurant Locations',
    excerpt: 'Best practices for maintaining consistent cleaning standards across restaurant chains. Technology, accountability, and vendor management.',
    category: 'Multi-Location',
    date: '2024-01-05',
    readTime: '10 min read'
  },
  {
    slug: 'restaurant-restroom-cleaning-standards',
    title: 'Restaurant Restroom Cleaning: Standards and Best Practices',
    excerpt: 'Complete guide to restaurant restroom cleaning and maintenance. Health code requirements and customer expectations.',
    category: 'Cleaning Guides',
    date: '2024-01-03',
    readTime: '5 min read'
  }
];

export default function BlogPage() {
  const categories = ['All', 'Health & Compliance', 'Cleaning Guides', 'Multi-Location', 'Equipment'];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="container-custom">
          <h1 className="text-5xl font-extrabold mb-4">Restaurant Cleaning Blog</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Expert tips, guides, and industry insights for restaurant cleaning and maintenance in Los Angeles.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container-custom py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-6 py-2 rounded-xl font-semibold transition ${
                  idx === 0
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <Link
                key={idx}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-custom-md hover:shadow-custom-xl transition-all duration-300 group"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  [Blog Image]
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-primary uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{post.date}</span>
                    <span className="text-primary font-semibold">Read more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get Restaurant Cleaning Tips Delivered</h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to receive expert cleaning guides, compliance updates, and industry insights.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Topic</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Health & Compliance', count: '12 articles', icon: '📋' },
              { name: 'Cleaning Guides', count: '18 articles', icon: '🧽' },
              { name: 'Equipment Care', count: '8 articles', icon: '🔧' },
              { name: 'Multi-Location', count: '6 articles', icon: '🏢' }
            ].map((cat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center hover:shadow-custom-md transition">
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="text-lg font-bold mb-2">{cat.name}</h3>
                <p className="text-gray-600 text-sm">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
