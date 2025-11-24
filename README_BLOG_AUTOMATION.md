# Automated Blog Generation with Claude

## Quick Setup (5 minutes)

### 1. Get Your Claude API Key

1. Go to https://console.anthropic.com/
2. Sign up or log in
3. Go to API Keys section
4. Create a new API key
5. Copy the key (starts with `sk-ant-...`)

### 2. Configure Environment

Create `.env.local` file in the project root:

```bash
ANTHROPIC_API_KEY=sk-ant-your-actual-api-key-here
```

**Important:** Never commit this file to Git. It's already in `.gitignore`.

### 3. Generate Your First Blog Post

```bash
node scripts/auto-generate-blog-claude.js
```

That's it! The script will:
- ✅ Generate a 2,500-3,000 word blog post
- ✅ Include proper Next.js/TypeScript structure
- ✅ Add SEO metadata
- ✅ Include CTAs for Hey Spruce
- ✅ Format with Tailwind CSS
- ✅ Save to `app/blog/[slug]/page.tsx`

## Monthly Automation

### Manual (Recommended)

**Every 1st and 15th of the month:**

```bash
# Generate new blog post
node scripts/auto-generate-blog-claude.js

# Review the generated content

# Update blog index (add to app/blog/page.tsx)

# Update sitemap (add to app/sitemap.ts)

# Deploy
git add .
git commit -m "Add blog post for [month]"
git push
```

### Automated with GitHub Actions

1. **Add secret to GitHub:**
   - Go to repository Settings > Secrets and variables > Actions
   - Click "New repository secret"
   - Name: `ANTHROPIC_API_KEY`
   - Value: Your Claude API key

2. **Create workflow file:** `.github/workflows/auto-blog.yml`

```yaml
name: Auto-Generate Blog Post

on:
  schedule:
    # Run on 1st of every month at 9am PST (5pm UTC)
    - cron: '0 17 1 * *'
    # Run on 15th of every month at 9am PST
    - cron: '0 17 15 * *'
  workflow_dispatch: # Allow manual trigger

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
        run: node scripts/auto-generate-blog-claude.js

      - name: Commit and push
        run: |
          git config --global user.name 'Blog Bot'
          git config --global user.email 'bot@heyspruce.com'
          git add app/blog/
          git commit -m "Auto-generate blog post for $(date +'%B %Y')" || echo "No changes"
          git push

      - name: Deploy to Vercel
        run: echo "Vercel will auto-deploy on push to main"
```

3. **Test manually:**
   - Go to Actions tab in GitHub
   - Click "Auto-Generate Blog Post"
   - Click "Run workflow"

## Content Calendar

The script follows this content calendar (defined in `auto-generate-blog-claude.js`):

| Month | 1st of Month | 15th of Month |
|-------|-------------|---------------|
| Jan | Restaurant Equipment Cleaning Schedule | Restaurant Grease Trap Cleaning |
| Feb | Restaurant Opening Cleaning Checklist | Restaurant Pest Control Prevention |
| Mar | Walk-in Cooler/Freezer Cleaning | LA Restaurant Waste Management |
| Apr | Restaurant Bar Cleaning Guide | Ventilation System Maintenance |
| May | Dish Room Sanitation | Restaurant Patio Cleaning |
| Jun | Food Prep Cross-Contamination | Ceiling and Wall Grease Removal |
| Jul | Restaurant Cleaning Cost Guide | Cleaning During Renovations |
| Aug | Holiday Cleaning Preparation | Restaurant Cleaning Contracts |
| Sep | Year-End Deep Cleaning | Restaurant Cleaning Safety (OSHA) |
| Oct | Ice Machine Cleaning | Grease Fire Prevention |
| Nov | Cleaning for Different Cuisines | Enhanced COVID Protocols |
| Dec | Kitchen Organization Tips | Restaurant Cleaning Technology |

## After Generation Checklist

Every time a blog post is generated:

- [ ] Review content for accuracy
- [ ] Check SEO title and meta description
- [ ] Verify LA-specific information is correct
- [ ] Add to `app/blog/page.tsx` blogPosts array:
  ```typescript
  {
    slug: 'your-slug-here',
    title: 'Your Title Here',
    excerpt: 'Compelling excerpt from article',
    category: 'Category Name',
    date: '2024-MM-DD',
    readTime: '8 min read'
  }
  ```
- [ ] Update `app/sitemap.ts`:
  ```typescript
  {
    url: `${baseUrl}/blog/your-slug-here`,
    lastModified: '2024-MM-DD',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }
  ```
- [ ] Test locally: `npm run dev`
- [ ] Review on http://localhost:3000/blog/your-slug-here
- [ ] Commit and deploy

## Cost

Using Claude 3.5 Sonnet:
- **Per blog post:** ~$0.24 (8,000 tokens)
- **Per month:** $0.48 (2 posts)
- **Per year:** $5.76 (24 posts)

Very affordable for high-quality, SEO-optimized content!

## Customization

To change topics or schedule, edit `contentCalendar` in `scripts/auto-generate-blog-claude.js`:

```javascript
const contentCalendar = {
  1: ['Topic for Jan 1st', 'Topic for Jan 15th'],
  2: ['Topic for Feb 1st', 'Topic for Feb 15th'],
  // ... etc
};
```

## Troubleshooting

### Error: ANTHROPIC_API_KEY not found
- Make sure `.env.local` exists with your API key
- Check the key starts with `sk-ant-`

### Error: 401 Unauthorized
- Your API key may be invalid or expired
- Generate a new key from https://console.anthropic.com/

### Script runs but generates empty content
- Check your Claude API credits
- Try running manually to see error messages

### Want to generate a specific topic?
Temporarily modify the `topic` variable in `auto-generate-blog-claude.js`:
```javascript
const topic = "Your Custom Topic Here";
```

## Support

For questions or issues:
1. Check the [AUTOMATION_SETUP.md](AUTOMATION_SETUP.md) guide
2. Review [BLOG_CONTENT_CALENDAR.md](BLOG_CONTENT_CALENDAR.md)
3. Test with: `node scripts/auto-generate-blog-claude.js`
