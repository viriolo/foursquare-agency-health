import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { BlogCard } from '../components/BlogCard';
import { useBlogPosts, useFeaturedBlogPosts, useContentSearch } from '../hooks/useContentful';

export const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const { posts, loading: postsLoading } = useBlogPosts(20);
  const { posts: featuredPosts, loading: featuredLoading } = useFeaturedBlogPosts(2);
  const { results: searchResults, loading: searchLoading, search } = useContentSearch();

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'Medical Missions', label: 'Medical Missions' },
    { value: 'Community Health', label: 'Community Health' },
    { value: 'Emergency Response', label: 'Emergency Response' },
    { value: 'Training', label: 'Training' },
    { value: 'Testimonials', label: 'Testimonials' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      search(searchTerm);
    }
  };

  const filteredPosts = searchTerm 
    ? searchResults.filter(item => 'content' in item.fields) // Filter for blog posts only
    : posts.filter(post => 
        selectedCategory === 'all' || post.fields.category === selectedCategory
      );

  const isLoading = postsLoading || featuredLoading || searchLoading;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 to-red-700 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Mission Blog
            </h1>
            <p className="text-xl sm:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
              Stories of hope, healing, and transformation from our medical missions around the world
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <form onSubmit={handleSearch} className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </form>
            
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {!searchTerm && featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.sys.id} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {searchTerm ? `Search Results for "${searchTerm}"` : 'Latest Posts'}
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
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.sys.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {searchTerm 
                  ? 'No blog posts found matching your search criteria.'
                  : 'No blog posts available at the moment.'
                }
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};