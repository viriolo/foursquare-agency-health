import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, Search, ChevronRight } from 'lucide-react';

export const NewsEventsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { value: 'all', label: 'All News' },
    { value: 'academic', label: 'Academic Excellence' },
    { value: 'partnership', label: 'Partnerships' },
    { value: 'programs', label: 'New Programs' },
    { value: 'community', label: 'Community Impact' },
    { value: 'events', label: 'Events' }
  ];

  const featuredStory = {
    title: "FourSquare Education Agency Celebrates 20 Years of Transforming Lives",
    excerpt: "Two decades of Christ-centered education have produced over 5,000 graduates who are now leaders in their communities, churches, and professions across Papua New Guinea and beyond.",
    image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    date: "March 20, 2024",
    author: "Dr. John Mendani",
    category: "Community Impact",
    readTime: "5 min read"
  };

  const newsArticles = [
    {
      title: "New Healthcare Partnership Expands Training Opportunities",
      excerpt: "FourSquare Education Agency partners with PNG Health Department to expand community health worker training programs across Enga Province, addressing critical healthcare workforce needs.",
      image: "https://images.pexels.com/photos/5863389/pexels-photo-5863389.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "March 15, 2024",
      author: "Dr. Sarah Wambi",
      category: "Partnership",
      readTime: "3 min read"
    },
    {
      title: "Outstanding Academic Results for 2023",
      excerpt: "Our students achieved exceptional results in national examinations, with 95% pass rates across all institutions, well above national averages, demonstrating our commitment to academic excellence.",
      image: "https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "March 10, 2024",
      author: "Mary Kila",
      category: "Academic Excellence",
      readTime: "4 min read"
    },
    {
      title: "New Vocational Training Programs Launch",
      excerpt: "Kumbas Vocational Centre introduces new programs in renewable energy and sustainable agriculture, responding to community needs and emerging job market demands.",
      image: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "March 5, 2024",
      author: "Mr. John Kila",
      category: "New Programs",
      readTime: "3 min read"
    },
    {
      title: "Student Leadership Conference 2024",
      excerpt: "Over 200 students from all five institutions gathered for our annual leadership conference, focusing on servant leadership and community development skills.",
      image: "https://images.pexels.com/photos/5212665/pexels-photo-5212665.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "February 28, 2024",
      author: "Rev. Peter Wambi",
      category: "Events",
      readTime: "4 min read"
    },
    {
      title: "International Recognition for Community Health Program",
      excerpt: "Kungumanda CHW Training School receives recognition from WHO for innovative community health worker training model that's being studied for replication across the Pacific.",
      image: "https://images.pexels.com/photos/5863391/pexels-photo-5863391.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "February 20, 2024",
      author: "Dr. Sarah Wambi",
      category: "Partnership",
      readTime: "5 min read"
    },
    {
      title: "Alumni Success Stories: Making a Difference",
      excerpt: "Meet five graduates who are making significant impacts in their communities - from healthcare workers saving lives to teachers inspiring the next generation.",
      image: "https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "February 15, 2024",
      author: "Rebecca Kila",
      category: "Community Impact",
      readTime: "6 min read"
    }
  ];

  const upcomingEvents = [
    {
      title: "Annual Graduation Ceremony",
      date: "April 15, 2024",
      time: "10:00 AM",
      location: "Wapenamanda Campus",
      description: "Celebrating the achievements of our 2024 graduates across all five institutions."
    },
    {
      title: "Community Health Fair",
      date: "April 22, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Kungumanda Health Center",
      description: "Free health screenings and education provided by our CHW training students."
    },
    {
      title: "Vocational Skills Exhibition",
      date: "May 5, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Kumbas Vocational Centre",
      description: "Showcase of student projects and skills demonstrations across all trade programs."
    },
    {
      title: "Parent-Teacher Conference Week",
      date: "May 12-16, 2024",
      time: "Various Times",
      location: "All Campuses",
      description: "Individual meetings to discuss student progress and development plans."
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category.toLowerCase().includes(selectedCategory);
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              News & Events
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest news, achievements, and upcoming events from FourSquare Education Agency
            </p>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="mb-4">
                  <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured Story
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {featuredStory.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredStory.excerpt}
                </p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredStory.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{featuredStory.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredStory.readTime}</span>
                  </div>
                </div>
                
                <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Read Full Story
                </button>
              </div>
              
              <div className="lg:h-full">
                <img
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news and events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-blue-700 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    
                    <button className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors">
                      Read More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for these exciting upcoming events and activities across our institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Calendar className="h-6 w-6 text-blue-700" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Tag className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive the latest news, event announcements, and updates from FourSquare Education Agency
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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