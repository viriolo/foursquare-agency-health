import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Calendar, MapPin, Download, Mail, Phone, Award, BookOpen, Clock } from 'lucide-react';

export const InstitutionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const institutionsData: Record<string, any> = {
    'wapenamanda-international': {
      name: "Wapenamanda International Christian School",
      level: "Prep - Grade 8",
      established: "2004",
      students: "450+ Students",
      principal: "Mrs. Rebecca Kila",
      location: "Wapenamanda, Enga Province",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      description: "As our flagship primary institution, Wapenamanda International Christian School provides a strong foundation for lifelong learning. We combine rigorous academics with Christian values, preparing students for secondary education and beyond.",
      programs: [
        "Preparatory Program (Age 3-5)",
        "Elementary Program (Grades 1-3)",
        "Elementary Program (Grades 4-6)",
        "Upper Elementary (Grades 7-8)",
        "English as Second Language Support",
        "Special Needs Integration Program"
      ],
      facilities: [
        "Modern classrooms with smart boards",
        "Science and computer laboratories",
        "Well-stocked library and reading center",
        "Playground and sports facilities",
        "Chapel for daily devotions",
        "Cafeteria serving nutritious meals"
      ],
      admissions: {
        requirements: [
          "Birth certificate",
          "Immunization records",
          "Previous school records (if applicable)",
          "Parent/guardian identification",
          "Application fee: K150"
        ],
        process: [
          "Submit completed application form",
          "Attend parent-student interview",
          "Complete assessment (for Grades 2+)",
          "Submit required documents",
          "Receive acceptance notification"
        ]
      },
      contact: {
        phone: "+675 547 1234",
        email: "wics@foursquareeducation.pg"
      }
    },
    'wapenamanda-secondary': {
      name: "Wapenamanda FourSquare Secondary School",
      level: "Grades 9-12",
      established: "2008",
      students: "380+ Students",
      principal: "Mr. David Mendani",
      location: "Wapenamanda, Enga Province",
      image: "https://images.pexels.com/photos/5212338/pexels-photo-5212338.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      description: "Our secondary school prepares students for higher education and career success through comprehensive academic programs, leadership development, and character formation rooted in Christian principles.",
      programs: [
        "Grade 9-10 Foundation Program",
        "Grade 11-12 Senior Secondary",
        "Science and Mathematics Stream",
        "Arts and Humanities Stream",
        "Business Studies Program",
        "Leadership Development Program"
      ],
      facilities: [
        "Advanced science laboratories",
        "Computer center with internet access",
        "Comprehensive library",
        "Sports complex and gymnasium",
        "Arts and music studios",
        "Student dormitory facilities"
      ],
      admissions: {
        requirements: [
          "Grade 8 certificate with minimum C+ average",
          "Good conduct certificate from previous school",
          "Medical clearance certificate",
          "Birth certificate and passport photos",
          "Application fee: K300"
        ],
        process: [
          "Submit application with Grade 8 results",
          "Pass entrance examination",
          "Attend student and parent interview",
          "Complete enrollment documentation",
          "Orientation program attendance"
        ]
      },
      contact: {
        phone: "+675 547 1235",
        email: "wfss@foursquareeducation.pg"
      }
    },
    'kungumanda-chw': {
      name: "Kungumanda CHW Training School",
      level: "Healthcare Training",
      established: "2012",
      students: "120+ Students",
      principal: "Dr. Sarah Wambi",
      location: "Kungumanda, Enga Province",
      image: "https://images.pexels.com/photos/5863391/pexels-photo-5863391.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      description: "Addressing the critical shortage of healthcare workers in rural PNG, our CHW Training School provides comprehensive training for Community Health Workers who serve as the backbone of rural healthcare delivery.",
      programs: [
        "Community Health Worker Certificate (2 years)",
        "Maternal and Child Health Specialization",
        "Communicable Disease Management",
        "Health Education and Promotion",
        "Emergency First Aid Training",
        "Traditional Medicine Integration"
      ],
      facilities: [
        "Medical training laboratories",
        "Simulated clinic environment",
        "Medical equipment and supplies",
        "Health education resource center",
        "Community outreach vehicles",
        "Student accommodation"
      ],
      admissions: {
        requirements: [
          "Grade 10 certificate minimum",
          "Medical fitness certificate",
          "Community recommendation letter",
          "English proficiency demonstration",
          "Application fee: K200"
        ],
        process: [
          "Complete application form",
          "Pass medical and fitness examination",
          "Attend interview with panel",
          "Community service commitment agreement",
          "Begin preparatory orientation"
        ]
      },
      contact: {
        phone: "+675 547 1236",
        email: "kchs@foursquareeducation.pg"
      }
    },
    'kumbas-vocational': {
      name: "Kumbas Vocational Centre",
      level: "Trade Skills",
      established: "2016",
      students: "180+ Students",
      principal: "Mr. John Kila",
      location: "Kumbas, Enga Province",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      description: "Providing practical skills training for sustainable livelihoods, our vocational center offers hands-on programs in essential trades that meet local and national employment demands.",
      programs: [
        "Carpentry and Construction",
        "Electrical Installation and Repair",
        "Plumbing and Water Systems",
        "Automotive Mechanics",
        "Welding and Metal Work",
        "Computer Literacy and IT Support"
      ],
      facilities: [
        "Fully equipped workshops for each trade",
        "Modern tools and equipment",
        "Practice construction sites",
        "Computer laboratory",
        "Material storage and supply room",
        "Student project showcase area"
      ],
      admissions: {
        requirements: [
          "Grade 8 certificate minimum",
          "Physical fitness for trade work",
          "Basic mathematics competency",
          "Safety orientation completion",
          "Application fee: K250"
        ],
        process: [
          "Submit application with preferences",
          "Complete aptitude assessment",
          "Safety and workshop orientation",
          "Tool and equipment familiarization",
          "Begin foundational training"
        ]
      },
      contact: {
        phone: "+675 547 1237",
        email: "kvc@foursquareeducation.pg"
      }
    },
    'one-way-bible': {
      name: "One Way Bible College",
      level: "Ministry Training",
      established: "2020",
      students: "90+ Students",
      principal: "Rev. Peter Wambi",
      location: "Wapenamanda, Enga Province",
      image: "https://images.pexels.com/photos/5212665/pexels-photo-5212665.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      description: "Preparing servant leaders for church and community transformation, our Bible college combines theological education with practical ministry training and community development skills.",
      programs: [
        "Diploma in Theology (3 years)",
        "Certificate in Christian Ministry (1 year)",
        "Church Leadership Development",
        "Community Development Studies",
        "Christian Counseling Program",
        "Missions and Evangelism Training"
      ],
      facilities: [
        "Theological library and research center",
        "Chapel for worship and prayer",
        "Seminar rooms and lecture halls",
        "Student accommodation",
        "Community service center",
        "Distance learning facilities"
      ],
      admissions: {
        requirements: [
          "Grade 10 certificate or equivalent",
          "Christian testimony and calling",
          "Church leader recommendation",
          "Basic English proficiency",
          "Application fee: K100"
        ],
        process: [
          "Submit application with testimony",
          "Provide church recommendation letters",
          "Attend interview with faculty",
          "Complete spiritual formation assessment",
          "Begin foundational studies"
        ]
      },
      contact: {
        phone: "+675 547 1238",
        email: "owbc@foursquareeducation.pg"
      }
    }
  };

  const institution = institutionsData[slug || ''];

  if (!institution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Institution Not Found</h1>
          <Link to="/institutions" className="text-blue-700 hover:text-blue-800">
            Return to Institutions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/institutions"
            className="inline-flex items-center text-blue-700 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Institutions
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {institution.level}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                {institution.name}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {institution.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{institution.students}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Est. {institution.established}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{institution.location}</span>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src={institution.image}
                alt={institution.name}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principal Welcome */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://images.pexels.com/photos/5384537/pexels-photo-5384537.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt={institution.principal}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome from {institution.principal}
                </h2>
                <p className="text-blue-700 font-medium mb-4">Principal</p>
                <p className="text-gray-600 leading-relaxed">
                  "We are committed to providing exceptional education that develops both mind and character. Our dedicated faculty and staff work tirelessly to ensure each student reaches their full potential while growing in their faith and service to others. We invite you to become part of our learning community."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Programs Offered</h2>
              <div className="space-y-4">
                {institution.programs.map((program: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <BookOpen className="h-5 w-5 text-blue-700 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{program}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Facilities</h2>
              <div className="space-y-4">
                {institution.facilities.map((facility: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-green-700 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Admissions Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to join our learning community? Here's everything you need to know about our application process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h3>
              <ul className="space-y-3">
                {institution.admissions.requirements.map((requirement: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h3>
              <ol className="space-y-3">
                {institution.admissions.process.map((step: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-blue-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Apply?</h3>
            <p className="text-gray-600 mb-6">Download our application forms or contact us for more information.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                <Download className="mr-2 h-4 w-4" />
                Download Application
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center border border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact This Institution</h2>
              <p className="text-gray-300 mb-6">
                Have specific questions about {institution.name}? Get in touch with us directly.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>{institution.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>{institution.contact.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>{institution.location}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Quick Contact Form</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};