import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Heart, Globe, TrendingUp, ArrowRight, Star, Stethoscope, Shield, Truck, GraduationCap, Activity } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    countries: 0,
    patients: 0,
    volunteers: 0,
    clinics: 0,
    years: 0
  });

  const testimonials = [
    {
      name: "Dr. Maria Santos",
      role: "Medical Mission Volunteer, Philippines",
      content: "Serving with Foursquare Health Services has been the most rewarding experience of my medical career. We're not just treating patients - we're bringing hope and the love of Christ to communities that need it most.",
      image: "https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Pastor James Okoye",
      role: "Community Health Coordinator, Nigeria",
      content: "The holistic approach of combining medical care with spiritual ministry has transformed our community. Families are not only physically healed but spiritually renewed through these programs.",
      image: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Sarah Chen",
      role: "Nurse Practitioner, Cambodia",
      content: "Working in remote villages through mobile clinics has shown me the incredible impact we can have when we combine professional healthcare with compassionate ministry. Lives are being saved and souls are being touched.",
      image: "https://images.pexels.com/photos/5384537/pexels-photo-5384537.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const services = [
    {
      name: "Medical Missions",
      description: "Short-term and long-term medical mission trips providing essential healthcare services to underserved communities worldwide.",
      image: "https://images.pexels.com/photos/5863391/pexels-photo-5863391.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      slug: "medical-missions",
      icon: <Stethoscope className="h-6 w-6" />
    },
    {
      name: "Community Health Programs",
      description: "Sustainable health initiatives that train local healthcare workers and establish ongoing medical care in communities.",
      image: "https://images.pexels.com/photos/5863389/pexels-photo-5863389.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      slug: "community-health",
      icon: <Users className="h-6 w-6" />
    },
    {
      name: "Emergency Response",
      description: "Rapid deployment medical teams providing critical care during natural disasters and humanitarian crises.",
      image: "https://images.pexels.com/photos/6303773/pexels-photo-6303773.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      slug: "emergency-response",
      icon: <Shield className="h-6 w-6" />
    },
    {
      name: "Mobile Clinics",
      description: "Fully equipped mobile medical units bringing healthcare directly to remote and hard-to-reach communities.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      slug: "mobile-clinics",
      icon: <Truck className="h-6 w-6" />
    },
    {
      name: "Health Education & Training",
      description: "Comprehensive training programs for local healthcare workers, community health advocates, and medical professionals.",
      image: "https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      slug: "health-education",
      icon: <GraduationCap className="h-6 w-6" />
    }
  ];

  const news = [
    {
      title: "Emergency Medical Response in Haiti",
      date: "March 15, 2024",
      excerpt: "Our emergency response team deployed to Haiti following recent natural disasters, providing critical medical care to over 2,000 affected individuals.",
      image: "https://images.pexels.com/photos/6303773/pexels-photo-6303773.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      category: "Emergency Response"
    },
    {
      title: "New Mobile Clinic Program Launches in Kenya",
      date: "March 10, 2024",
      excerpt: "Three new mobile medical units begin serving remote communities in Kenya, bringing essential healthcare to areas previously without medical access.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      category: "Mobile Clinics"
    },
    {
      title: "Community Health Worker Training Graduation",
      date: "March 5, 2024",
      excerpt: "45 new community health workers graduated from our training program in Guatemala, expanding local healthcare capacity in rural regions.",
      image: "https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      category: "Training"
    }
  ];

  // Animate statistics on mount
  useEffect(() => {
    const targetStats = {
      countries: 35,
      patients: 250000,
      volunteers: 1500,
      clinics: 85,
      years: 25
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setAnimatedStats({
        countries: Math.round(targetStats.countries * progress),
        patients: Math.round(targetStats.patients * progress),
        volunteers: Math.round(targetStats.volunteers * progress),
        clinics: Math.round(targetStats.clinics * progress),
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
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Bringing Hope and Healing to the
                  <span className="text-yellow-400"> World</span>
                </h1>
                <p className="text-xl sm:text-2xl text-red-100 leading-relaxed">
                  Christ-centered healthcare missions serving communities worldwide through medical care, training, and compassionate ministry
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/get-involved"
                  className="bg-yellow-500 hover:bg-yellow-600 text-red-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 text-center"
                >
                  Volunteer Today
                </Link>
                <Link
                  to="/impact-partners"
                  className="border-2 border-white hover:bg-white hover:text-red-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all text-center"
                >
                  Support Our Mission
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5863391/pexels-photo-5863391.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Medical mission team providing care"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2">
                  <Heart className="h-8 w-8 text-red-600" />
                  <div>
                    <p className="font-bold text-lg">250,000+</p>
                    <p className="text-sm text-gray-600">Lives Touched</p>
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
              Our Global Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over 25 years of bringing hope and healing to communities worldwide through Christ-centered healthcare missions
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-10 w-10 text-red-600" />
              </div>
              <p className="text-4xl font-bold text-red-600 mb-2">{animatedStats.countries}</p>
              <p className="text-gray-600 font-medium">Countries Served</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <p className="text-4xl font-bold text-blue-600 mb-2">{animatedStats.patients.toLocaleString()}+</p>
              <p className="text-gray-600 font-medium">Patients Served</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-green-600" />
              </div>
              <p className="text-4xl font-bold text-green-600 mb-2">{animatedStats.volunteers.toLocaleString()}+</p>
              <p className="text-gray-600 font-medium">Medical Volunteers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Activity className="h-10 w-10 text-purple-600" />
              </div>
              <p className="text-4xl font-bold text-purple-600 mb-2">{animatedStats.clinics}</p>
              <p className="text-gray-600 font-medium">Active Clinics</p>
            </div>
            
            <div className="text-center col-span-2 lg:col-span-1">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-yellow-600" />
              </div>
              <p className="text-4xl font-bold text-yellow-600 mb-2">{animatedStats.years}+</p>
              <p className="text-gray-600 font-medium">Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Healthcare Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical missions and health programs designed to bring healing and hope to communities in need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white p-2 rounded-lg">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
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
              to="/services"
              className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stories of Hope and Healing
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Hear from our medical volunteers and community partners about the transformative power of Christ-centered healthcare
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
                          <p className="text-red-200">{testimonial.role}</p>
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
                Latest Mission Updates
              </h2>
              <p className="text-xl text-gray-600">
                Stay informed about our ongoing medical missions and healthcare initiatives worldwide
              </p>
            </div>
            <Link
              to="/news-events"
              className="hidden sm:inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
            >
              View All Updates
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
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
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
              className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
            >
              View All Updates
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stay Connected with Our Mission
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to receive updates about our medical missions, volunteer opportunities, and ways to get involved
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
            Join Us in Bringing Hope and Healing
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you're a medical professional looking to serve, a supporter wanting to make a difference, or someone seeking to partner with us - there's a place for you in our mission.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Volunteer With Us
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