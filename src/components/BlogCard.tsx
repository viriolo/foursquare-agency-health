import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag } from 'lucide-react';
import { BlogPost } from '../lib/contentful';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  const imageUrl = post.fields.featuredImage?.fields.file.url;
  const publishDate = new Date(post.fields.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group ${
      featured ? 'lg:col-span-2' : ''
    }`}>
      <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
        <img
          src={imageUrl ? `https:${imageUrl}` : 'https://images.pexels.com/photos/5863391/pexels-photo-5863391.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'}
          alt={post.fields.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {post.fields.category}
        </div>
        {featured && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{publishDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{post.fields.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>5 min read</span>
          </div>
        </div>
        
        <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors ${
          featured ? 'text-2xl' : 'text-xl'
        }`}>
          <Link to={`/blog/${post.fields.slug}`}>
            {post.fields.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {post.fields.excerpt}
        </p>
        
        {post.fields.tags && post.fields.tags.length > 0 && (
          <div className="flex items-center space-x-2 mb-4">
            <Tag className="h-4 w-4 text-gray-400" />
            <div className="flex flex-wrap gap-2">
              {post.fields.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <Link
          to={`/blog/${post.fields.slug}`}
          className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
        >
          Read More
          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};