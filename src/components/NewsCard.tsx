import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, MapPin, AlertCircle } from 'lucide-react';
import { NewsArticle } from '../lib/contentful';

interface NewsCardProps {
  article: NewsArticle;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const imageUrl = article.fields.featuredImage?.fields.file.url;
  const publishDate = new Date(article.fields.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative overflow-hidden h-48">
        <img
          src={imageUrl ? `https:${imageUrl}` : 'https://images.pexels.com/photos/5863391/pexels-photo-5863391.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'}
          alt={article.fields.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {article.fields.category}
        </div>
        {article.fields.urgent && (
          <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
            <AlertCircle className="h-3 w-3 mr-1" />
            Urgent
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
            <span>{article.fields.author}</span>
          </div>
          {article.fields.location && (
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{article.fields.location}</span>
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
          <Link to={`/news/${article.fields.slug}`}>
            {article.fields.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {article.fields.excerpt}
        </p>
        
        <Link
          to={`/news/${article.fields.slug}`}
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