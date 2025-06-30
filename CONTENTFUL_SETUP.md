# Contentful CMS Setup Guide

This guide will help you set up Contentful CMS for managing your blog posts and news articles.

## Step 1: Create a Contentful Account

1. Go to [contentful.com](https://www.contentful.com/)
2. Sign up for a free account
3. Create a new space for your project

## Step 2: Get Your API Keys

1. In your Contentful space, go to **Settings** > **API keys**
2. Click **Add API key**
3. Copy the following values:
   - **Space ID**
   - **Content Delivery API - access token**
   - **Content Preview API - access token** (optional, for preview mode)

## Step 3: Set Up Environment Variables

1. Create a `.env` file in your project root
2. Add your Contentful credentials:

```env
VITE_CONTENTFUL_SPACE_ID=your_space_id_here
VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token_here
VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token_here
VITE_CONTENTFUL_ENVIRONMENT=master
```

## Step 4: Create Content Models

### Blog Post Content Model

1. Go to **Content model** in your Contentful space
2. Click **Add content type**
3. Name it "Blog Post" with API identifier "blogPost"
4. Add the following fields:

| Field Name | Field ID | Type | Required | Help Text |
|------------|----------|------|----------|-----------|
| Title | title | Short text | Yes | The blog post title |
| Slug | slug | Short text | Yes | URL-friendly version (e.g., "my-blog-post") |
| Excerpt | excerpt | Long text | Yes | Brief summary for previews |
| Content | content | Long text | Yes | Full blog post content |
| Featured Image | featuredImage | Media | No | Main image for the post |
| Author | author | Short text | Yes | Author name |
| Category | category | Short text | Yes | Post category |
| Publish Date | publishDate | Date & time | Yes | When to publish |
| Tags | tags | Short text, list | No | Comma-separated tags |
| Featured | featured | Boolean | No | Mark as featured post |

### News Article Content Model

1. Create another content type called "News Article" with API identifier "newsArticle"
2. Add the following fields:

| Field Name | Field ID | Type | Required | Help Text |
|------------|----------|------|----------|-----------|
| Title | title | Short text | Yes | The news article title |
| Slug | slug | Short text | Yes | URL-friendly version |
| Excerpt | excerpt | Long text | Yes | Brief summary |
| Content | content | Long text | Yes | Full article content |
| Featured Image | featuredImage | Media | No | Main image |
| Author | author | Short text | Yes | Author name |
| Category | category | Short text | Yes | Article category |
| Publish Date | publishDate | Date & time | Yes | Publication date |
| Location | location | Short text | No | Geographic location |
| Urgent | urgent | Boolean | No | Mark as urgent news |

## Step 5: Add Sample Content

### Sample Blog Post
- **Title**: "Bringing Hope to Remote Villages in Guatemala"
- **Slug**: "hope-guatemala-villages"
- **Excerpt**: "Our medical team spent two weeks providing essential healthcare to communities that hadn't seen a doctor in years."
- **Category**: "Medical Missions"
- **Author**: "Dr. Sarah Johnson"
- **Featured**: true

### Sample News Article
- **Title**: "Emergency Response Team Deployed to Haiti"
- **Slug**: "emergency-response-haiti"
- **Excerpt**: "Following recent natural disasters, our emergency medical team has been deployed to provide critical care."
- **Category**: "Emergency Response"
- **Author**: "Mission Coordinator"
- **Urgent**: true

## Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to `/blog` to see your blog posts
3. Navigate to `/news-events` to see your news articles
4. Check that content loads from Contentful

## Content Management Tips

### Categories to Use
- **Blog Posts**: Medical Missions, Community Health, Testimonials, Training, Emergency Response
- **News Articles**: Medical Missions, Emergency Response, Community Health, Training, Partnership, Events

### Best Practices
1. **Images**: Upload high-quality images (recommended: 1200x800px)
2. **Slugs**: Use lowercase, hyphen-separated URLs (e.g., "medical-mission-guatemala")
3. **Excerpts**: Keep to 150-200 characters for best display
4. **Content**: Use simple HTML formatting if needed
5. **Publish Dates**: Set future dates to schedule content

### Managing Content
- **Draft**: Save without publishing
- **Published**: Live on your website
- **Archived**: Hidden from public view

## Troubleshooting

### Common Issues
1. **Content not loading**: Check your API keys in `.env`
2. **Images not displaying**: Ensure image URLs include `https:`
3. **Content model errors**: Verify field IDs match exactly

### Support
- Contentful Documentation: [contentful.com/developers/docs](https://www.contentful.com/developers/docs/)
- API Reference: [contentful.com/developers/docs/references/content-delivery-api](https://www.contentful.com/developers/docs/references/content-delivery-api/)

## Next Steps

Once set up, you can:
1. Add new blog posts and news articles through Contentful's web interface
2. Schedule content for future publication
3. Manage images and media assets
4. Collaborate with team members on content creation
5. Use Contentful's preview mode to see changes before publishing

Your content will automatically appear on your website without needing to redeploy!