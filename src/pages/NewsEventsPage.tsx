import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, Search, ChevronRight } from 'lucide-react';
import { NewsCard } from '../components/NewsCard';
import { useNewsArticles, useContentSearch } from '../hooks/useContentful';

export const NewsEventsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const { articles, loading: articlesLoading } = useNewsArticles(20);
  const { results: searchResults, loading: searchLoading, search } = useContentSearch();

  const categories = [
    { value: 'all', label: 'All News' },
    { value: 'Medical Missions', label: 'Medical Missions' },
    { value: 'Emergency Response', label: 'Emergency Response' },
    { value: 'Community Health', label: 'Community Health' },
    { value: 'Training', label: 'Training' },
    { value: 'Partnership', label: 'Partnerships' },
    { value: 'Events', label: 'Events' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      search(searchTerm);
    }
  };

  const filteredArticles = searchTerm 
    ? searchResults.filter(item => !('content' in item.fields)) // Filter for news articles only
    : articles.filter(article => 
        selectedCategory === 'all' || article.fields.category === selectedCategory
      );

  const isLoading = articlesLoading || searchLoading;

  // Featured story (first article or fallback)
  const featuredStory = articles.length > 0 ? articles[0] : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 to-red-700 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              News & Events
            </h1>
            <p className="text-xl sm:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest news, achievements, and upcoming events from our medical missions worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      {!searchTerm && featuredStory && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <div className="mb-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured Story
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {featuredStory.fields.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredStory.fields.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredStory.fields.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredStory.fields.author}</span>
                    </div>
                  </div>
                  
                  <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    Read Full Story
                  </button>
                </div>
                
                <div className="lg:h-full">
                  <img
                    src={featuredStory.fields.featuredImage?.fields.file.url 
                      ? `https:${featuredStory.fields.featuredImage.fields.file.url}`
                      : 'https://images.pexels.com/photos/5863391/pexels-photo-5863391.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
                    }
                    alt={featuredStory.fields.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <form onSubmit={handleSearch} className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news and events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </form>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-red-50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {searchTerm ? `Search Results for "${searchTerm}"` : 'Latest News'}
            </h2>
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Clear Search
              </button>
            )}
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-300 rounded mb-4"></div>
                    <div className="h-6 bg-gray-300 rounded mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <NewsCard key={article.sys.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {searchTerm 
                  ? 'No articles found matching your search criteria.'
                  : 'No articles available at the moment.'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive the latest news, event announcements, and updates from our medical missions
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};