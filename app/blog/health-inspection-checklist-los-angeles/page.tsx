import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Los Angeles Restaurant Health Inspection Checklist 2024 | Complete Guide',
  description: 'Complete health inspection checklist for Los Angeles restaurants. Everything LA County health inspectors check. Prepare your restaurant to pass inspections with flying colors.',
  keywords: 'los angeles restaurant health inspection, la county health inspection checklist, restaurant inspection preparation, health code violations los angeles',
};

export default function HealthInspectionChecklistPage() {
  return (
    <>
      <article className="py-12">
        <div className="container-custom max-w-4xl">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">Health Inspection Checklist</span>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
                Health & Compliance
              </span>
              <span className="text-gray-500">January 15, 2024 • 8 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Complete Health Inspection Checklist for Los Angeles Restaurants (2024)
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything LA County health inspectors check during restaurant inspections. Use this comprehensive checklist to prepare your establishment and pass with flying colors.
            </p>
          </header>

          {/* Featured Image */}
          <div className="h-96 bg-gray-200 rounded-2xl mb-12 flex items-center justify-center text-gray-500">
            [Health Inspection Featured Image]
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-8 mb-4">Understanding LA County Restaurant Inspections</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Los Angeles County Department of Public Health conducts routine inspections of all food facilities at least once per year, with high-risk establishments inspected 2-3 times annually. Understanding what inspectors look for is critical to maintaining compliance and avoiding costly violations.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Critical Violations Checklist</h2>
            <p className="text-gray-700 mb-6">
              Critical violations pose an immediate health hazard and can result in closure. Here's what inspectors check most carefully:
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-red-900">Food Temperature Control</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Hot foods held at 135°F or above
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Cold foods held at 41°F or below
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Proper cooling procedures (135°F to 70°F in 2 hours, then 70°F to 41°F in 4 hours)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Working thermometers in all refrigeration units
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-red-900">Food Protection & Cross Contamination</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Separate cutting boards for raw meat and produce
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Proper food storage (raw meats below ready-to-eat foods)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  All food covered and protected from contamination
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  No bare hand contact with ready-to-eat foods
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Major Violations Checklist</h2>
            <p className="text-gray-700 mb-6">
              Major violations don't require immediate closure but must be corrected within a specified timeframe:
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-yellow-900">Cleanliness & Sanitation</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Kitchen floors clean with no grease buildup
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Walls and ceilings free from grease and mold
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Equipment cleaned behind and underneath
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Proper sanitizer concentration in three-compartment sink
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Hood and exhaust system clean (NFPA 96 compliant)
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold mb-4 text-yellow-900">Pest Control</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  No evidence of rodent or insect activity
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  All doors and windows properly sealed
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Regular pest control documentation available
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Proper storage of food away from walls and off floor
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Employee Health & Hygiene</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-xl">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  All employees wash hands properly and frequently
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Hair restraints worn in food preparation areas
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  No eating, drinking, or smoking in prep areas
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Handwashing sinks stocked with soap and paper towels
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Food handler cards current and available
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Preparing for Your Inspection</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The best way to pass a Los Angeles restaurant health inspection is to maintain daily cleaning standards and conduct weekly self-inspections using this checklist. Consider scheduling a <strong>pre-inspection deep cleaning</strong> if you haven't had professional service recently.
            </p>

            <div className="bg-primary/5 border-2 border-primary rounded-2xl p-8 my-12">
              <h3 className="text-2xl font-bold mb-4 text-primary">Need Help Preparing for Your Inspection?</h3>
              <p className="text-gray-700 mb-6">
                Hey Spruce specializes in pre-inspection deep cleaning for Los Angeles restaurants. We focus on the areas health inspectors check most carefully: grease buildup, equipment cleanliness, and floor conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#quote" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition text-center">
                  Schedule Pre-Inspection Cleaning
                </Link>
                <a href="tel:+18772532646" className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition text-center">
                  Call 1-877-CLEANING
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Common Violations in LA Restaurants</h2>
            <p className="text-gray-700 mb-4">
              Based on LA County Health Department data, these are the most common violations:
            </p>
            <ol className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="font-bold text-primary mr-2">1.</span>
                <span>Improper food storage temperatures (41°F-135°F danger zone)</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary mr-2">2.</span>
                <span>Inadequate handwashing facilities or practices</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary mr-2">3.</span>
                <span>Pest infestation or evidence of vermin activity</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary mr-2">4.</span>
                <span>Improper sanitizer concentration in dishwashing</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary mr-2">5.</span>
                <span>Grease buildup on floors, walls, and equipment</span>
              </li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-4">After the Inspection</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Your inspection report will be posted publicly. Grade A (90-100 points) is ideal. Grade B (80-89) requires correction. Grade C (70-79) mandates immediate corrective action. If you receive violations, correct them immediately and request a re-inspection within 30 days.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mt-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Need help getting inspection-ready?</h3>
              <p className="text-gray-700 mb-6">
                Spruce provides comprehensive <Link href="/commercial-kitchen-cleaning" className="text-primary font-semibold hover:underline">commercial kitchen cleaning services</Link> across Los Angeles to help multi-location restaurants maintain consistent health inspection scores. Our teams are trained in LA County health code requirements.
              </p>
              <Link href="/#quote" className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition">
                Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Restaurant Kitchen Deep Cleaning Guide', link: '/blog/restaurant-kitchen-deep-cleaning-guide' },
                { title: 'NFPA 96 Hood Cleaning Compliance', link: '/blog/nfpa-96-compliance-hood-cleaning' },
                { title: 'Restaurant Floor Cleaning & Degreasing', link: '/blog/restaurant-floor-cleaning-degreasing' }
              ].map((article, idx) => (
                <Link key={idx} href={article.link} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition">
                  <h4 className="font-bold text-lg mb-2 text-primary">{article.title}</h4>
                  <span className="text-sm text-gray-600">Read more →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
