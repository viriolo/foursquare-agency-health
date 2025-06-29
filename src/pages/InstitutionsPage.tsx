import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Calendar, MapPin, Award } from 'lucide-react';

export const InstitutionsPage: React.FC = () => {
  const institutions = [
    {
      name: "Wapenamanda International Christian School",
      level: "Prep - Grade 8",
      students: "450+ Students",
      established: "2004",
      description: "Quality primary education with Christian values, preparing students for academic excellence and character development through innovative teaching methods and comprehensive curriculum.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      slug: "wapenamanda-international",
      highlights: [
        "Bilingual education (English & Tok Pisin)",
        "STEM-focused curriculum",
        "Character development programs",
        "Community service projects"
      ]
    },
    {
      name: "Wapenamanda FourSquare Secondary School",
      level: "Grades 9-12",
      students: "380+ Students",
      established: "2008",
      description: "Comprehensive secondary education fostering critical thinking, leadership skills, and preparation for higher education with strong academic programs and extracurricular activities.",
      image: "https://images.pexels.com/photos/5212338/pexels-photo-5212338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      slug: "wapenamanda-secondary",
      highlights: [
        "College preparatory programs",
        "Leadership development",
        "Sports and arts programs",
        "Career guidance counseling"
      ]
    },
    {
      name: "Kungumanda CHW Training School",
      level: "Healthcare Training",
      students: "120+ Students",
      established: "2012",
      description: "Professional training for Community Health Workers, addressing critical healthcare needs in rural communities through practical, hands-on medical training and community health education.",
      image: "https://images.pexels.com/photos/5863391/pexels-photo-5863391.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      slug: "kungumanda-chw",
      highlights: [
        "Practical medical training",
        "Community health education",
        "Rural healthcare focus",
        "Government certified programs"
      ]
    },
    {
      name: "Kumbas Vocational Centre",
      level: "Trade Skills",
      students: "180+ Students",
      established: "2016",
      description: "Hands-on vocational training in essential trades, creating pathways to employment and entrepreneurship through modern workshops and industry-experienced instructors.",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      slug: "kumbas-vocational",
      highlights: [
        "Modern workshop facilities",
        "Industry partnerships",
        "Entrepreneurship training",
        "Job placement assistance"
      ]
    },
    {
      name: "One Way Bible College",
      level: "Ministry Training",
      students: "90+ Students",
      established: "2020",
      description: "Theological education and ministry preparation, developing servant leaders for church and community transformation through comprehensive biblical studies and practical ministry experience.",
      image: "https://images.pexels.com/photos/5212665/pexels-photo-5212665.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      slug: "one-way-bible",
      highlights: [
        "Biblical studies curriculum",
        "Practical ministry training",
        "Community outreach programs",
        "Leadership development"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Five Institutions
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive educational pathways from early childhood through higher education, vocational training, and ministry preparation
            </p>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-700 mb-2">5</div>
              <div className="text-gray-600">Institutions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-700 mb-2">1,200+</div>
              <div className="text-gray-600">Total Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-700 mb-2">20</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700 mb-2">95%</div>
              <div className="text-gray-600">Graduate Success</div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Educational Institutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each institution offers specialized programs designed to meet the unique needs of our students and community
            </p>
          </div>

          <div className="space-y-12">
            {institutions.map((institution, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } lg:flex`}>
                <div className="lg:w-1/2">
                  <img
                    src={institution.image}
                    alt={institution.name}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {institution.level}
                        </span>
                        <span className="text-gray-500 text-sm">Est. {institution.established}</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        {institution.name}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        {institution.description}
                      </p>
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{institution.students}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>Est. {institution.established}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {institution.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-gray-600">
                            <Award className="h-4 w-4 text-blue-700 flex-shrink-0" />
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to={`/institutions/${institution.slug}`}
                        className="inline-flex items-center justify-center bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                      >
                        Learn More
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                      <Link
                        to="/admissions"
                        className="inline-flex items-center justify-center border border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Find Your Path?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you're seeking primary education, secondary school, vocational training, healthcare certification, or ministry preparation - we have the right program for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Start Your Application
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us for Guidance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};