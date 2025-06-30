import { useState, useEffect } from 'react';
import { contentfulClient, isContentfulConfigured, BlogPost, NewsArticle } from '../lib/contentful';

// Fallback data for when Contentful is not configured
const fallbackBlogPosts: BlogPost[] = [
  {
    sys: {
      id: 'fallback-1',
      createdAt: '2024-03-20T00:00:00Z',
      updatedAt: '2024-03-20T00:00:00Z',
    },
    fields: {
      title: 'New Healthcare Partnership Expands Training Opportunities',
      slug: 'healthcare-partnership-expansion',
      excerpt: 'FourSquare Education Agency partners with PNG Health Department to expand community health worker training programs across Enga Province.',
      content: 'This is fallback content. Please configure Contentful to see dynamic content.',
      author: 'Dr. Sarah Wambi',
      publishDate: '2024-03-15T00:00:00Z',
      category: 'Partnership',
      featured: true,
      tags: ['healthcare', 'partnership', 'training']
    }
  },
  {
    sys: {
      id: 'fallback-2',
      createdAt: '2024-03-15T00:00:00Z',
      updatedAt: '2024-03-15T00:00:00Z',
    },
    fields: {
      title: 'Outstanding Academic Results for 2023',
      slug: 'academic-results-2023',
      excerpt: 'Our students achieved exceptional results in national examinations, with 95% pass rates across all institutions.',
      content: 'This is fallback content. Please configure Contentful to see dynamic content.',
      author: 'Mary Kila',
      publishDate: '2024-03-10T00:00:00Z',
      category: 'Academic Excellence',
      tags: ['academics', 'results', 'excellence']
    }
  }
];

const fallbackNewsArticles: NewsArticle[] = [
  {
    sys: {
      id: 'news-fallback-1',
      createdAt: '2024-03-20T00:00:00Z',
      updatedAt: '2024-03-20T00:00:00Z',
    },
    fields: {
      title: 'New Vocational Training Programs Launch',
      slug: 'new-vocational-programs',
      excerpt: 'Kumbas Vocational Centre introduces new programs in renewable energy and sustainable agriculture.',
      content: 'This is fallback content. Please configure Contentful to see dynamic content.',
      author: 'Mr. John Kila',
      publishDate: '2024-03-05T00:00:00Z',
      category: 'Programs',
      location: 'Kumbas, Enga Province'
    }
  }
];

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!isContentfulConfigured() || !contentfulClient) {
        // Use fallback data when Contentful is not configured
        setPosts(fallbackBlogPosts);
        setLoading(false);
        return;
      }

      try {
        const response = await contentfulClient.getEntries({
          content_type: 'blogPost',
          order: '-fields.publishDate',
        });
        
        setPosts(response.items as BlogPost[]);
      } catch (err) {
        console.warn('Failed to fetch blog posts from Contentful, using fallback data:', err);
        setPosts(fallbackBlogPosts);
        setError('Failed to load blog posts from Contentful');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export const useNewsArticles = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      if (!isContentfulConfigured() || !contentfulClient) {
        // Use fallback data when Contentful is not configured
        setArticles(fallbackNewsArticles);
        setLoading(false);
        return;
      }

      try {
        const response = await contentfulClient.getEntries({
          content_type: 'newsArticle',
          order: '-fields.publishDate',
        });
        
        setArticles(response.items as NewsArticle[]);
      } catch (err) {
        console.warn('Failed to fetch news articles from Contentful, using fallback data:', err);
        setArticles(fallbackNewsArticles);
        setError('Failed to load news articles from Contentful');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
};

export const useBlogPost = (slug: string) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!isContentfulConfigured() || !contentfulClient) {
        // Use fallback data when Contentful is not configured
        const fallbackPost = fallbackBlogPosts.find(p => p.fields.slug === slug);
        setPost(fallbackPost || null);
        setLoading(false);
        return;
      }

      try {
        const response = await contentfulClient.getEntries({
          content_type: 'blogPost',
          'fields.slug': slug,
          limit: 1,
        });
        
        if (response.items.length > 0) {
          setPost(response.items[0] as BlogPost);
        } else {
          setPost(null);
        }
      } catch (err) {
        console.warn('Failed to fetch blog post from Contentful:', err);
        const fallbackPost = fallbackBlogPosts.find(p => p.fields.slug === slug);
        setPost(fallbackPost || null);
        setError('Failed to load blog post from Contentful');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, loading, error };
};