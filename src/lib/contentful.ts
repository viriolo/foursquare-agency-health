import { createClient } from 'contentful';

// Get environment variables with fallbacks
const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Check if Contentful is properly configured
export const isContentfulConfigured = () => {
  return spaceId && 
         accessToken && 
         spaceId !== 'your_space_id_here' && 
         accessToken !== 'your_access_token_here';
};

// Create client only if properly configured
export const contentfulClient = isContentfulConfigured() 
  ? createClient({
      space: spaceId,
      accessToken: accessToken,
    })
  : null;

// Types for our content models
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
      };
    };
    author: string;
    publishDate: string;
    tags?: string[];
    category: string;
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
      };
    };
    author: string;
    publishDate: string;
    category: string;
    urgent?: boolean;
    location?: string;
  };
}