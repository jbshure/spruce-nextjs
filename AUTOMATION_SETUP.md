# Blog Automation Setup - 2 Posts Per Month

## Quick Start (Semi-Automated - Recommended)

### Every 1st and 15th of Month:

1. **Generate blog post template:**
   ```bash
   node scripts/generate-blog-post.js "topic-slug" "Article Title" "Category"
   ```

2. **Use AI to generate content:**
   - Go to Claude.ai or ChatGPT
   - Prompt: "Write a 2,500-word blog post about [topic] for a restaurant cleaning company in Los Angeles. Include SEO keywords, practical tips, checklists, and CTAs."
   - Copy content into the generated template

3. **Update blog index:**
   - Add new post to `app/blog/page.tsx` blogPosts array
   - Update `app/sitemap.ts` with new URL

4. **Commit and deploy:**
   ```bash
   git add .
   git commit -m "Add blog post: [Title]"
   git push
   ```

## Fully Automated Setup (Requires Development)

### Prerequisites:
- Anthropic or OpenAI API key
- GitHub repository
- Vercel deployment (or similar)

### Step 1: Install Dependencies

```bash
npm install @anthropic-ai/sdk dotenv
```

### Step 2: Create Environment Variables

Create `.env.local`:
```
ANTHROPIC_API_KEY=your_api_key_here
```

### Step 3: Create Automation Script

**File: `scripts/auto-generate-blog.js`**

```javascript
const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Topic from content calendar
const topics = {
  '1': [
    'Health Inspection Checklist',
    'Restaurant Equipment Cleaning Schedule',
    // ... Q1-Q2 topics for 1st of month
  ],
  '15': [
    'Kitchen Deep Cleaning Guide',
    'Grease Trap Cleaning Guide',
    // ... Q1-Q2 topics for 15th of month
  ]
};

async function generateBlogPost() {
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  // Determine which topic based on date
  const day = new Date().getDate();
  const topicList = day === 1 ? topics['1'] : topics['15'];
  const month = new Date().getMonth();
  const topic = topicList[Math.floor(month / 2)]; // 2 topics per month cycle

  const prompt = `Write a comprehensive 2,500-word SEO-optimized blog post about "${topic}" for a professional restaurant cleaning company in Los Angeles called Hey Spruce.

Include:
- Compelling title and meta description
- Multiple H2 and H3 headings with keywords
- Practical checklists and step-by-step guides
- LA-specific information (health codes, regulations)
- 2-3 CTA sections promoting Hey Spruce services
- Related article suggestions

Focus on:
- Restaurant cleaning, commercial kitchen maintenance
- Health inspection compliance
- Professional cleaning techniques
- LA County specific requirements

Format as Next.js/TypeScript React component with Tailwind CSS classes.`;

  const message = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 8000,
    messages: [{
      role: 'user',
      content: prompt
    }]
  });

  // Extract content and save
  const content = message.content[0].text;
  const slug = topic.toLowerCase().replace(/\s+/g, '-');

  // Create blog post file
  const blogDir = path.join(__dirname, '..', 'app', 'blog', slug);
  fs.mkdirSync(blogDir, { recursive: true });
  fs.writeFileSync(path.join(blogDir, 'page.tsx'), content);

  console.log(`✅ Blog post created: ${slug}`);
  return { slug, topic, content };
}

generateBlogPost().catch(console.error);
```

### Step 4: GitHub Actions Workflow

**File: `.github/workflows/auto-blog.yml`**

```yaml
name: Auto-Generate Blog Post

on:
  schedule:
    # Run on 1st of every month at 9am PST
    - cron: '0 17 1 * *'
    # Run on 15th of every month at 9am PST
    - cron: '0 17 15 * *'
  workflow_dispatch: # Manual trigger

jobs:
  generate-blog:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Generate blog post
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: node scripts/auto-generate-blog.js

      - name: Commit and push
        run: |
          git config --global user.name 'Blog Bot'
          git config --global user.email 'bot@heyspruce.com'
          git add .
          git commit -m "Auto-generate blog post for $(date +'%B %Y')"
          git push
```

### Step 5: Add GitHub Secret

1. Go to GitHub repository settings
2. Navigate to Secrets and Variables > Actions
3. Add new secret: `ANTHROPIC_API_KEY`

### Step 6: Enable Workflow

Commit the workflow file and GitHub Actions will automatically run on the 1st and 15th of each month.

## Manual Override

To manually generate a blog post at any time:

```bash
# Set API key in environment
export ANTHROPIC_API_KEY=your_key

# Run generator
node scripts/auto-generate-blog.js
```

## Content Review Process (IMPORTANT)

### Recommended: Human Review Before Publishing

Even with automation, review each post for:
- Factual accuracy (health codes, regulations)
- Brand voice consistency
- SEO optimization
- Image placement
- Internal linking
- CTA effectiveness

### Workflow with Review:

1. Auto-generate post → saves to `drafts/` folder
2. Human reviews and edits
3. Moves to `app/blog/[slug]/` when approved
4. Commits and deploys

## Cost Estimation

**Using Anthropic Claude API:**
- ~8,000 tokens per blog post
- ~$0.24 per post (Claude 3.5 Sonnet pricing)
- 24 posts/year = **~$5.76/year**

**Using OpenAI GPT-4:**
- Similar token count
- ~$0.60 per post
- 24 posts/year = **~$14.40/year**

## Best Practices

1. **Always review before publishing** - AI can make mistakes
2. **Update content calendar** - Keep track of published topics
3. **Monitor performance** - Track which topics get most traffic
4. **Update annually** - Refresh old posts with new regulations
5. **Add images** - Replace placeholder images with real photos
6. **Internal linking** - Ensure each post links to 3-5 service pages
7. **Social sharing** - Share new posts on LinkedIn, Instagram

## Backup Plan

If automation fails:
1. Use `scripts/generate-blog-post.js` to create template
2. Manually write or use ChatGPT web interface
3. Keep content calendar up to date
4. Set calendar reminders for 1st and 15th

## Analytics Tracking

Monitor monthly:
- Blog traffic (Google Analytics)
- Keyword rankings (Google Search Console)
- Conversions from blog to quotes
- Top performing posts
- Average time on page

## Support

For issues with automation:
- Check GitHub Actions logs
- Verify API key is valid
- Ensure content calendar is updated
- Test locally before deploying
