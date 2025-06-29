import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Stethoscope, Wrench, Cross, GraduationCap, ArrowRight, Users, Clock, Award } from 'lucide-react';

export const ProgramsPage: React.FC = () => {
  const programCategories = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Academic Education",
      description: "Comprehensive primary and secondary education programs",
      color: "blue",
      programs: [
        {
          name: "Primary Education (Prep - Grade 8)",
          institution: "Wapenamanda International Christian School",
          duration: "9 years",
          students: "450+",
          highlights: ["Bilingual instruction", "STEM focus", "Character development"],
          pathway: "Prepares for secondary education"
        },
        {
          name: "Secondary Education (Grades 9-12)",
          institution: "Wapenamanda FourSquare Secondary School",
          duration: "4 years",
          students: "380+",
          highlights: ["College preparation", "Leadership training", "Career guidance"],
          pathway: "University entrance and professional careers"
        }
      ]
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Healthcare Training",
      description: "Professional healthcare education for rural communities",
      color: "green",
      programs: [
        {
          name: "Community Health Worker Certificate",
          institution: "Kungumanda CHW Training School",
          duration: "2 years",
          students: "120+",
          highlights: ["Practical medical training", "Community outreach", "Rural healthcare focus"],
          pathway: "Employment in rural health centers and community health programs"
        }
      ]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Vocational Training",
      description: "Hands-on trade skills for sustainable employment",
      color: "amber",
      programs: [
        {
          name: "Trade Skills Certification",
          institution: "Kumbas Vocational Centre",
          duration: "1-2 years",
          students: "180+",
          highlights: ["Modern workshops", "Industry partnerships", "Job placement"],
          pathway: "Skilled trade employment and entrepreneurship opportunities"
        }
      ]
    },
    {
      icon: <Cross className="h-8 w-8" />,
      title: "Ministry Training",
      description: "Theological education and Christian leadership development",
      color: "purple",
      programs: [
        {
          name: "Theology and Ministry Programs",
          institution: "One Way Bible College",
          duration: "1-3 years",
          students: "90+",
          highlights: ["Biblical studies", "Practical ministry", "Community development"],
          pathway: "Church leadership and community service roles"
        }
      ]
    }
  ];

  const careerPathways = [
    {
      title: "Education & Leadership",
      careers: ["Teachers", "School Administrators", "Community Leaders", "Government Officials"],
      color: "blue"
    },
    {
      title: "Healthcare & Social Services",
      careers: ["Community Health Workers", "Clinic Assistants", "Health Educators", "Social Workers"],
      color: "green"
    },
    {
      title: "Skilled Trades & Business",
      careers: ["Carpenters", "Electricians", "Mechanics", "Small Business Owners"],
      color: "amber"
    },
    {
      title: "Ministry & Community Service",
      careers: ["Church Leaders", "Chaplains", "Community Development Workers", "Missionaries"],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      green: "bg-green-100 text-green-700 border-green-200",
      amber: "bg-amber-100 text-amber-700 border-amber-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive educational pathways from primary education through professional training and ministry preparation
            </p>
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Four Pillars of Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse program offerings ensure comprehensive development opportunities for every student
            </p>
          </div>

          <div className="space-y-16">
            {programCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getColorClasses(category.color)} mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <p className="text-xl text-gray-600">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.programs.map((program, programIndex) => (
                    <div key={programIndex} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                      <div className="mb-6">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{program.name}</h4>
                        <p className="text-gray-600 font-medium">{program.institution}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">{program.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">{program.students} Students</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-900 mb-3">Program Highlights:</h5>
                        <ul className="space-y-2">
                          {program.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <Award className="h-4 w-4 text-green-600 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-900 mb-2">Career Pathway:</h5>
                        <p className="text-gray-600 text-sm">{program.pathway}</p>
                      </div>

                      <Link
                        to={`/institutions/${program.institution.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                        className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
                      >
                        Learn More About This Program
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Career Pathways for Graduates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs prepare students for diverse career opportunities that contribute to community development and national progress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerPathways.map((pathway, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{pathway.title}</h3>
                <ul className="space-y-3">
                  {pathway.careers.map((career, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        pathway.color === 'blue' ? 'bg-blue-600' :
                        pathway.color === 'green' ? 'bg-green-600' :
                        pathway.color === 'amber' ? 'bg-amber-600' :
                        'bg-purple-600'
                      }`}></div>
                      <span className="text-gray-700 text-sm">{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Program Success Outcomes
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our graduates are making meaningful contributions across Papua New Guinea and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-200">Graduate Employment Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Program Completion Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-blue-200">Female Participation</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-blue-200">Community Service Involvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Makes Our Programs Special
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unique features that set our educational programs apart from others in the region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cross className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Christ-Centered Learning</h3>
              <p className="text-gray-600">All programs integrate Christian values and biblical principles with academic and professional training.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community-Focused</h3>
              <p className="text-gray-600">Programs designed to address local needs and develop skills that benefit Papua New Guinea communities.</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">All programs meet or exceed national standards with regular assessment and continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Find Your Perfect Program
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you're starting your educational journey or advancing your career, we have a program that's right for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore Admissions
            </Link>
            <Link
              to="/institutions"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Visit Our Institutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};