/**
 * Automated Blog Post Generator using Claude API
 *
 * Usage: node scripts/auto-generate-blog-claude.js
 *
 * This script automatically generates blog posts on the 1st and 15th of each month
 * using the Anthropic Claude API.
 */

const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Content calendar - topics for each month (1st and 15th)
const contentCalendar = {
  // Format: { month: [topic_for_1st, topic_for_15th] }
  1: ['Restaurant Equipment Cleaning Schedule', 'Restaurant Grease Trap Cleaning Guide'],
  2: ['Restaurant Opening Cleaning Checklist', 'Restaurant Pest Control Prevention'],
  3: ['Walk-in Cooler and Freezer Cleaning', 'LA Restaurant Waste Management Rules'],
  4: ['Restaurant Bar Cleaning Guide', 'Restaurant Ventilation System Maintenance'],
  5: ['Restaurant Dish Room Sanitation', 'Restaurant Patio Cleaning Guide'],
  6: ['Food Prep Area Cross-Contamination Prevention', 'Ceiling and Wall Grease Removal'],
  7: ['Restaurant Cleaning Cost Guide Los Angeles', 'Restaurant Cleaning During Renovations'],
  8: ['Holiday Restaurant Cleaning Preparation', 'Restaurant Cleaning Contracts Guide'],
  9: ['Year-End Restaurant Deep Cleaning', 'Restaurant Cleaning Safety and OSHA'],
  10: ['Restaurant Ice Machine Cleaning', 'Restaurant Grease Fire Prevention'],
  11: ['Restaurant Cleaning for Different Cuisines', 'Enhanced COVID Cleaning Protocols'],
  12: ['Restaurant Kitchen Organization Tips', 'Restaurant Cleaning Technology Guide']
};

async function generateBlogPost(topic) {
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  const prompt = `You are an expert content writer for Hey Spruce, a professional restaurant cleaning company in Los Angeles. Write a comprehensive, SEO-optimized blog post about "${topic}".

REQUIREMENTS:
- 2,500-3,000 words
- SEO-optimized for Los Angeles restaurants
- Include practical, actionable advice
- Target keywords related to restaurant cleaning, commercial kitchen cleaning, LA health codes
- Professional but approachable tone

STRUCTURE:
1. Compelling SEO title (60-70 characters)
2. Meta description (150-160 characters)
3. Introduction (2-3 paragraphs explaining importance and what readers will learn)
4. 5-7 main sections with H2 headings
5. Practical checklists and step-by-step guides
6. LA County specific information (health codes, regulations when relevant)
7. 2-3 CTA boxes promoting Hey Spruce services
8. Conclusion summarizing key takeaways

FORMAT AS NEXT.JS COMPONENT:
- TypeScript/React component
- Tailwind CSS classes for styling
- Include metadata export for SEO
- Use existing blog post structure (breadcrumbs, article header, content sections, CTA boxes, related articles)
- Follow this exact format:

\`\`\`typescript
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '[SEO Title] | Hey Spruce Blog',
  description: '[Meta description]',
  keywords: '[comma separated keywords]',
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
            <span className="text-gray-900">[Article Title]</span>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
                [Category]
              </span>
              <span className="text-gray-500">[Date] • [X] min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              [Article Title]
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              [Introduction paragraph]
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className="h-96 bg-gray-200 rounded-2xl mb-12 flex items-center justify-center text-gray-500">
            [Featured Image]
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            [ARTICLE CONTENT WITH H2/H3 SECTIONS]

            {/* Include 2-3 CTA boxes like this: */}
            <div className="bg-primary/5 border-2 border-primary rounded-2xl p-8 my-12">
              <h3 className="text-2xl font-bold mb-4 text-primary">[CTA Heading]</h3>
              <p className="text-gray-700 mb-6">
                [CTA description promoting Hey Spruce services]
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
\`\`\`

IMPORTANT:
- Use Los Angeles specific information when relevant
- Include practical checklists in colored boxes (bg-red-50, bg-yellow-50, bg-blue-50, bg-green-50)
- Reference LA County Health Department requirements
- Promote Hey Spruce services naturally throughout
- Make content genuinely helpful and informative
- Include specific examples and scenarios

Write the complete Next.js component code now.`;

  console.log(`\n🤖 Generating blog post: "${topic}"\n`);

  const message = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 8000,
    messages: [{
      role: 'user',
      content: prompt
    }]
  });

  const content = message.content[0].text;

  // Extract the code from markdown code blocks if present
  let cleanedContent = content;
  if (content.includes('```typescript') || content.includes('```tsx')) {
    const codeBlockMatch = content.match(/```(?:typescript|tsx)\n([\s\S]*?)```/);
    if (codeBlockMatch) {
      cleanedContent = codeBlockMatch[1];
    }
  }

  return cleanedContent;
}

async function main() {
  // Check if API key exists
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('❌ Error: ANTHROPIC_API_KEY not found in .env.local');
    console.log('\nPlease create a .env.local file with:');
    console.log('ANTHROPIC_API_KEY=your_api_key_here\n');
    process.exit(1);
  }

  // Determine topic based on current date
  const now = new Date();
  const month = now.getMonth() + 1; // 1-12
  const day = now.getDate();

  // Determine if we should run (1st or 15th of month)
  const topicIndex = day === 1 ? 0 : day === 15 ? 1 : null;

  if (topicIndex === null) {
    console.log('⏸️  Not scheduled to run today (only runs on 1st and 15th of month)');
    console.log('Running in manual mode...\n');
  }

  // Get topic from calendar
  const monthTopics = contentCalendar[month];
  if (!monthTopics) {
    console.error('❌ No topics defined for this month');
    process.exit(1);
  }

  const topic = topicIndex !== null ? monthTopics[topicIndex] : monthTopics[0];
  const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  console.log(`📅 Date: ${now.toLocaleDateString()}`);
  console.log(`📝 Topic: ${topic}`);
  console.log(`🔗 Slug: ${slug}\n`);

  try {
    // Generate blog post
    const content = await generateBlogPost(topic);

    // Create blog post directory and file
    const blogDir = path.join(__dirname, '..', 'app', 'blog', slug);
    const filePath = path.join(blogDir, 'page.tsx');

    // Create directory if it doesn't exist
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
      console.log(`📁 Created directory: app/blog/${slug}/`);
    }

    // Write the file
    fs.writeFileSync(filePath, content);
    console.log(`✅ Blog post created: app/blog/${slug}/page.tsx`);

    // Instructions for next steps
    console.log('\n📋 Next Steps:');
    console.log('1. Review the generated content for accuracy');
    console.log(`2. Add the post to app/blog/page.tsx blogPosts array:`);
    console.log(`   {`);
    console.log(`     slug: '${slug}',`);
    console.log(`     title: '${topic}',`);
    console.log(`     excerpt: 'Add compelling excerpt here',`);
    console.log(`     category: 'Add category',`);
    console.log(`     date: '${now.toISOString().split('T')[0]}',`);
    console.log(`     readTime: '8 min read'`);
    console.log(`   }`);
    console.log('3. Update app/sitemap.ts with new blog post URL');
    console.log('4. Test locally: npm run dev');
    console.log('5. Commit and deploy:');
    console.log('   git add .');
    console.log(`   git commit -m "Add blog post: ${topic}"`);
    console.log('   git push');
    console.log('\n✨ Done!\n');

  } catch (error) {
    console.error('❌ Error generating blog post:', error.message);
    if (error.status === 401) {
      console.log('\n⚠️  API key may be invalid. Check your ANTHROPIC_API_KEY in .env.local');
    }
    process.exit(1);
  }
}

main();
