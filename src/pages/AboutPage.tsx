import React from 'react';
import { Heart, Target, Users, Award, Globe, BookOpen } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Christ-Centered",
      description: "All our programs are grounded in Christian values, fostering spiritual growth alongside academic excellence."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in education, training, and character development."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Focus",
      description: "We're committed to serving and transforming communities throughout Papua New Guinea."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Cultural Sensitivity",
      description: "We honor and integrate local cultures while preparing students for global opportunities."
    }
  ];

  const leadership = [
    {
      name: "Dr. John Mendani",
      role: "Executive Director",
      bio: "With over 25 years in education and community development, Dr. Mendani has led FourSquare Education's growth from a single school to five comprehensive institutions.",
      image: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Mary Kila",
      role: "Academic Director",
      bio: "A former teacher and curriculum specialist, Mary oversees academic standards across all institutions, ensuring quality education aligned with PNG national standards.",
      image: "https://images.pexels.com/photos/5384537/pexels-photo-5384537.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Rev. Peter Wambi",
      role: "Spiritual Life Director",
      bio: "Rev. Wambi leads our spiritual formation programs, chapel services, and community outreach initiatives across all institutions.",
      image: "https://images.pexels.com/photos/3791136/pexels-photo-3791136.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const timeline = [
    {
      year: "2004",
      title: "Foundation",
      description: "FourSquare Education Agency established with the opening of Wapenamanda International Christian School."
    },
    {
      year: "2008",
      title: "Secondary Education",
      description: "Wapenamanda FourSquare Secondary School launched, extending our educational pathway through Grade 12."
    },
    {
      year: "2012",
      title: "Healthcare Training",
      description: "Kungumanda CHW Training School opened to address critical healthcare workforce needs in rural communities."
    },
    {
      year: "2016",
      title: "Vocational Education",
      description: "Kumbas Vocational Centre established, providing essential trade skills training."
    },
    {
      year: "2020",
      title: "Ministry Training",
      description: "One Way Bible College founded to prepare Christian leaders for church and community service."
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Over 1,200 students enrolled across five institutions, with partnerships expanding throughout PNG."
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
              About FourSquare Education Agency
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Two decades of transforming lives through Christ-centered education, healthcare training, and community development in Papua New Guinea
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Students in classroom"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide quality, Christ-centered education and training that empowers individuals to become transformational leaders in their communities, churches, and nations. We are committed to developing the whole person - intellectually, spiritually, socially, and physically.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the leading provider of holistic, Christ-centered education in Papua New Guinea, known for academic excellence, character development, and graduates who positively impact their communities and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the character of our institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-700">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced educators and leaders committed to excellence in Christian education and community development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-700 font-medium mb-4">{leader.role}</p>
                  <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Journey of Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a single school to five comprehensive institutions - see how we've grown to serve our community
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg ml-12 md:ml-0">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {item.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-700 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation & Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Accreditation & Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards through official accreditation and strategic partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Official Accreditation</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">PNG Department of Education</p>
                    <p className="text-gray-600">All educational programs fully accredited and recognized</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">PNG Health Department</p>
                    <p className="text-gray-600">Community Health Worker training programs certified</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Association of Christian Schools PNG</p>
                    <p className="text-gray-600">Member institution with full standing</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Partnerships</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-green-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">International Christian Organizations</p>
                    <p className="text-gray-600">Curriculum development and teacher training support</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-green-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Local Community Leaders</p>
                    <p className="text-gray-600">Ensuring programs meet local needs and cultural values</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-green-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">PNG Universities</p>
                    <p className="text-gray-600">Pathway programs and credit transfer agreements</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Community Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Beyond education, we're actively involved in community development and social transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-800 rounded-lg p-6 mb-4">
                <BookOpen className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Educational Excellence</h3>
                <p className="text-blue-100">Consistently achieving above-national-average results in standardized testing</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-800 rounded-lg p-6 mb-4">
                <Heart className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Healthcare Impact</h3>
                <p className="text-blue-100">Training community health workers serving over 20 rural communities</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-800 rounded-lg p-6 mb-4">
                <Users className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Economic Development</h3>
                <p className="text-blue-100">Graduates contributing to local economy through entrepreneurship and employment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};