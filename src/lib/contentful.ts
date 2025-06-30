import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || '',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '',
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master',
});

export interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    author: string;
    category: string;
    publishDate: string;
    tags?: string[];
    featured?: boolean;
  };
}

export interface NewsArticle {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    author: string;
    category: string;
    publishDate: string;
    location?: string;
    urgent?: boolean;
  };
}

// Fetch all blog posts
export const getBlogPosts = async (limit = 10): Promise<BlogPost[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      limit,
      order: '-fields.publishDate',
    });
    return response.items as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// Fetch featured blog posts
export const getFeaturedBlogPosts = async (limit = 3): Promise<BlogPost[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.featured': true,
      limit,
      order: '-fields.publishDate',
    });
    return response.items as BlogPost[];
  } catch (error) {
    console.error('Error fetching featured blog posts:', error);
    return [];
  }
};

// Fetch blog post by slug
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });
    return response.items[0] as BlogPost || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

// Fetch all news articles
export const getNewsArticles = async (limit = 10): Promise<NewsArticle[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'newsArticle',
      limit,
      order: '-fields.publishDate',
    });
    return response.items as NewsArticle[];
  } catch (error) {
    console.error('Error fetching news articles:', error);
    return [];
  }
};

// Fetch news articles by category
export const getNewsArticlesByCategory = async (category: string, limit = 10): Promise<NewsArticle[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'newsArticle',
      'fields.category': category,
      limit,
      order: '-fields.publishDate',
    });
    return response.items as NewsArticle[];
  } catch (error) {
    console.error('Error fetching news articles by category:', error);
    return [];
  }
};

// Fetch urgent news articles
export const getUrgentNewsArticles = async (limit = 5): Promise<NewsArticle[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'newsArticle',
      'fields.urgent': true,
      limit,
      order: '-fields.publishDate',
    });
    return response.items as NewsArticle[];
  } catch (error) {
    console.error('Error fetching urgent news articles:', error);
    return [];
  }
};

// Search blog posts and news articles
export const searchContent = async (query: string, limit = 20): Promise<(BlogPost | NewsArticle)[]> => {
  try {
    const [blogResponse, newsResponse] = await Promise.all([
      client.getEntries({
        content_type: 'blogPost',
        query,
        limit: limit / 2,
        order: '-fields.publishDate',
      }),
      client.getEntries({
        content_type: 'newsArticle',
        query,
        limit: limit / 2,
        order: '-fields.publishDate',
      }),
    ]);

    const allResults = [...blogResponse.items, ...newsResponse.items] as (BlogPost | NewsArticle)[];
    return allResults.sort((a, b) => 
      new Date(b.fields.publishDate).getTime() - new Date(a.fields.publishDate).getTime()
    );
  } catch (error) {
    console.error('Error searching content:', error);
    return [];
  }
};

export default client;