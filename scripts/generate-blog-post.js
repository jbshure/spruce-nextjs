/**
 * Blog Post Generator Script
 *
 * Usage: node scripts/generate-blog-post.js <topic-slug> <title> <category>
 * Example: node scripts/generate-blog-post.js "grease-trap-cleaning" "Restaurant Grease Trap Cleaning Guide" "Maintenance"
 *
 * This script creates a new blog post template that you can then fill with content.
 * For AI-assisted content generation, use Claude or ChatGPT to draft the article body.
 */

const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);
const slug = args[0];
const title = args[1] || 'New Blog Post';
const category = args[2] || 'Guides';

if (!slug) {
  console.error('Error: Please provide a blog post slug');
  console.log('Usage: node scripts/generate-blog-post.js <slug> <title> <category>');
  process.exit(1);
}

// Generate current date
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
const isoDate = currentDate.toISOString().split('T')[0];

// Blog post template
const template = `import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${title} | Hey Spruce Blog',
  description: 'TODO: Add compelling meta description (150-160 characters)',
  keywords: 'TODO: Add relevant keywords separated by commas',
};

export default function BlogPost() {
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
            <span className="text-gray-900">${title}</span>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
                ${category}
              </span>
              <span className="text-gray-500">${formattedDate} • 8 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              ${title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              TODO: Add compelling article introduction (2-3 sentences)
            </p>
          </header>

          {/* Featured Image */}
          <div className="h-96 bg-gray-200 rounded-2xl mb-12 flex items-center justify-center text-gray-500">
            [Featured Image]
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-8 mb-4">TODO: First Section Heading</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              TODO: Add content here. Aim for 2,000-3,000 words total.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">TODO: Second Section Heading</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              TODO: Add more content.
            </p>

            {/* CTA Box */}
            <div className="bg-primary/5 border-2 border-primary rounded-2xl p-8 my-12">
              <h3 className="text-2xl font-bold mb-4 text-primary">Need Professional Help?</h3>
              <p className="text-gray-700 mb-6">
                Hey Spruce provides professional restaurant cleaning services throughout Los Angeles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#quote" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition text-center">
                  Get Free Quote
                </Link>
                <a href="tel:3235551234" className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition text-center">
                  Call (323) 555-1234
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">TODO: Third Section Heading</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              TODO: Continue content.
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Health Inspection Checklist', link: '/blog/health-inspection-checklist-los-angeles' },
                { title: 'Kitchen Deep Cleaning Guide', link: '/blog/restaurant-kitchen-deep-cleaning-guide' },
                { title: 'Floor Cleaning & Degreasing', link: '/blog/restaurant-floor-cleaning-degreasing' }
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
`;

// Create blog post directory and file
const blogDir = path.join(__dirname, '..', 'app', 'blog', slug);
const filePath = path.join(blogDir, 'page.tsx');

// Create directory if it doesn't exist
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}

// Write the file
fs.writeFileSync(filePath, template);

console.log('✅ Blog post template created successfully!');
console.log(`📁 Location: app/blog/${slug}/page.tsx`);
console.log(`📝 Title: ${title}`);
console.log(`🏷️  Category: ${category}`);
console.log(`📅 Date: ${formattedDate}`);
console.log('');
console.log('Next steps:');
console.log('1. Edit the file and replace TODO sections with content');
console.log('2. Use Claude/ChatGPT to generate article body (2,000-3,000 words)');
console.log(`3. Add the post to app/blog/page.tsx blogPosts array:`);
console.log(`   {
     slug: '${slug}',
     title: '${title}',
     excerpt: 'TODO: Add excerpt',
     category: '${category}',
     date: '${isoDate}',
     readTime: '8 min read'
   }`);
console.log('4. Update app/sitemap.ts with new blog post URL');
console.log('5. Test locally, then commit and deploy');
