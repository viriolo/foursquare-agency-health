import { useState, useEffect } from 'react';
import { 
  getBlogPosts, 
  getFeaturedBlogPosts, 
  getNewsArticles, 
  getNewsArticlesByCategory,
  getUrgentNewsArticles,
  searchContent,
  BlogPost, 
  NewsArticle 
} from '../lib/contentful';

// Hook for fetching blog posts
export const useBlogPosts = (limit = 10) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getBlogPosts(limit);
        setPosts(data);
      } catch (err) {
        setError('Failed to fetch blog posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  return { posts, loading, error };
};

// Hook for fetching featured blog posts
export const useFeaturedBlogPosts = (limit = 3) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getFeaturedBlogPosts(limit);
        setPosts(data);
      } catch (err) {
        setError('Failed to fetch featured blog posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  return { posts, loading, error };
};

// Hook for fetching news articles
export const useNewsArticles = (limit = 10) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const data = await getNewsArticles(limit);
        setArticles(data);
      } catch (err) {
        setError('Failed to fetch news articles');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [limit]);

  return { articles, loading, error };
};

// Hook for fetching news articles by category
export const useNewsArticlesByCategory = (category: string, limit = 10) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const data = await getNewsArticlesByCategory(category, limit);
        setArticles(data);
      } catch (err) {
        setError('Failed to fetch news articles by category');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchArticles();
    }
  }, [category, limit]);

  return { articles, loading, error };
};

// Hook for searching content
export const useContentSearch = () => {
  const [results, setResults] = useState<(BlogPost | NewsArticle)[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (query: string, limit = 20) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await searchContent(query, limit);
      setResults(data);
    } catch (err) {
      setError('Failed to search content');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, search };
};