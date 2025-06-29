import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Award, BookOpen, Heart, ArrowRight, Star, Play } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    institutions: 0,
    students: 0,
    employment: 0,
    female: 0,
    years: 0
  });

  const testimonials = [
    {
      name: "Sarah Mendani",
      role: "Graduate, Kungumanda CHW Training",
      content: "The training I received prepared me to serve my community with both professional skills and Christian compassion. I now work as a Community Health Worker, making a real difference in rural health outcomes.",
      image: "https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "James Kila",
      role: "Parent & Community Leader",
      content: "Sending my children to FourSquare schools was the best decision. They received quality education grounded in Christian values, and now they're leaders in their respective fields.",
      image: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Mary Pukeni",
      role: "Graduate, One Way Bible College",
      content: "The theological training equipped me for ministry while the practical skills helped me start community development projects. This holistic approach transforms lives and communities.",
      image: "https://images.pexels.com/photos/5384537/pexels-photo-5384537.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const institutions = [
    {
      name: "Wapenamanda International Christian School",
      level: "Prep - Grade 8",
      description: "Quality primary education with Christian values, preparing students for academic excellence and character development.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      slug: "wapenamanda-international"
    },
    {
      name: "Wapenamanda FourSquare Secondary School",
      level: "Grades 9-12",
      description: "Comprehensive secondary education fostering critical thinking, leadership skills, and preparation for higher education.",
      image: "https://images.pexels.com/photos/5212338/pexels-photo-5212338.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      slug: "wapenamanda-secondary"
    },
    {
      name: "Kungumanda CHW Training School",
      level: "Healthcare Training",
      description: "Professional training for Community Health Workers, addressing critical healthcare needs in rural communities.",
      image: "https://images.pexels.com/photos/5863391/pexels-photo-5863391.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      slug: "kungumanda-chw"
    },
    {
      name: "Kumbas Vocational Centre",
      level: "Trade Skills",
      description: "Hands-on vocational training in essential trades, creating pathways to employment and entrepreneurship.",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      slug: "kumbas-vocational"
    },
    {
      name: "One Way Bible College",
      level: "Ministry Training",
      description: "Theological education and ministry preparation, developing servant leaders for church and community transformation.",
      image: "https://images.pexels.com/photos/5212665/pexels-photo-5212665.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      slug: "one-way-bible"
    }
  ];

  const news = [
    {
      title: "New Healthcare Partnership Announced",
      date: "March 15, 2024",
      excerpt: "FourSquare Education Agency partners with PNG Health Department to expand community health worker training programs across Enga Province.",
      image: "https://images.pexels.com/photos/5863389/pexels-photo-5863389.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      category: "Partnership"
    },
    {
      title: "Outstanding Academic Results for 2023",
      date: "March 10, 2024",
      excerpt: "Our students achieved exceptional results in national examinations, with 95% pass rates across all institutions, well above national averages.",
      image: "https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      category: "Academic Excellence"
    },
    {
      title: "New Vocational Training Programs Launch",
      date: "March 5, 2024",
      excerpt: "Kumbas Vocational Centre introduces new programs in renewable energy and sustainable agriculture, responding to community needs.",
      image: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      category: "Programs"
    }
  ];

  // Animate statistics on mount
  useEffect(() => {
    const targetStats = {
      institutions: 5,
      students: 1200,
      employment: 85,
      female: 60,
      years: 20
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setAnimatedStats({
        institutions: Math.round(targetStats.institutions * progress),
        students: Math.round(targetStats.students * progress),
        employment: Math.round(targetStats.employment * progress),
        female: Math.round(targetStats.female * progress),
        years: Math.round(targetStats.years * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedStats(targetStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Empowering the Next Generation Through
                  <span className="text-amber-400"> Christ-Centered Education</span>
                </h1>
                <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed">
                  Discover our five transformative institutions shaping the future of Enga Province and beyond
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 text-center"
                >
                  Apply Now
                </Link>
                <Link
                  to="/impact-partners"
                  className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all text-center"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Students in classroom"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2">
                  <Award className="h-8 w-8 text-amber-600" />
                  <div>
                    <p className="font-bold text-lg">95%</p>
                    <p className="text-sm text-gray-600">Graduate Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Impact Across Papua New Guinea
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two decades of transforming lives through quality education, healthcare training, and community development
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-10 w-10 text-blue-700" />
              </div>
              <p className="text-4xl font-bold text-blue-700 mb-2">{animatedStats.institutions}</p>
              <p className="text-gray-600 font-medium">Institutions Across Education, Health & Theology</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-green-700" />
              </div>
              <p className="text-4xl font-bold text-green-700 mb-2">{animatedStats.students.toLocaleString()}+</p>
              <p className="text-gray-600 font-medium">Students Enrolled</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-amber-700" />
              </div>
              <p className="text-4xl font-bold text-amber-700 mb-2">{animatedStats.employment}%</p>
              <p className="text-gray-600 font-medium">Graduate Employment Rate</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-pink-700" />
              </div>
              <p className="text-4xl font-bold text-pink-700 mb-2">{animatedStats.female}%</p>
              <p className="text-gray-600 font-medium">Female Student Participation</p>
            </div>
            
            <div className="text-center col-span-2 lg:col-span-1">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-purple-700" />
              </div>
              <p className="text-4xl font-bold text-purple-700 mb-2">{animatedStats.years}+</p>
              <p className="text-gray-600 font-medium">Years of Impact in Enga Province</p>
            </div>
          </div>
        </div>
      </section>

      {/* Institutions Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Five Transformative Institutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From early childhood to higher education, vocational training to ministry preparation - we provide comprehensive pathways for personal and professional growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {institutions.map((institution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={institution.image}
                    alt={institution.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {institution.level}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {institution.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {institution.description}
                  </p>
                  <Link
                    to={`/institutions/${institution.slug}`}
                    className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/institutions"
              className="inline-flex items-center bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Explore All Institutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Transforming Lives, Building Futures
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Hear from our graduates, parents, and community members about the impact of FourSquare Education
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="max-w-4xl mx-auto text-center">
                      <div className="mb-8">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-white"
                        />
                        <blockquote className="text-xl sm:text-2xl leading-relaxed mb-6 font-light">
                          "{testimonial.content}"
                        </blockquote>
                        <div>
                          <p className="font-semibold text-lg">{testimonial.name}</p>
                          <p className="text-blue-200">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Latest News & Updates
              </h2>
              <p className="text-xl text-gray-600">
                Stay informed about our latest achievements, partnerships, and community impact
              </p>
            </div>
            <Link
              to="/news-events"
              className="hidden sm:inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
            >
              View All News
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              to="/news-events"
              className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
            >
              View All News
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stay Connected with Our Mission
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Subscribe to receive updates about our programs, student achievements, and opportunities to get involved
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Be Part of Our Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you're seeking quality education for your child, looking to develop professional skills, or wanting to partner with us in transforming communities - we're here to help you take the next step.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Start Your Application
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};