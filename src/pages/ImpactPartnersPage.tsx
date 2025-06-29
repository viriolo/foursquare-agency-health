import React from 'react';
import { Users, Heart, Globe, TrendingUp, Award, Handshake, Download, Mail, ArrowRight } from 'lucide-react';

export const ImpactPartnersPage: React.FC = () => {
  const impactStats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "5,000+",
      label: "Lives Transformed",
      description: "Graduates making positive impact in their communities"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: "20+",
      label: "Communities Served",
      description: "Rural communities with improved healthcare and education"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      number: "85%",
      label: "Graduate Employment",
      description: "Graduates employed or pursuing higher education"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "60%",
      label: "Female Participation",
      description: "Women empowered through education and training"
    }
  ];

  const sdgGoals = [
    {
      number: 3,
      title: "Good Health and Well-being",
      description: "Training community health workers to improve rural healthcare access and outcomes."
    },
    {
      number: 4,
      title: "Quality Education",
      description: "Providing comprehensive education from primary through higher education levels."
    },
    {
      number: 5,
      title: "Gender Equality",
      description: "Promoting equal access to education and leadership opportunities for women."
    },
    {
      number: 8,
      title: "Decent Work and Economic Growth",
      description: "Vocational training creating pathways to sustainable employment and entrepreneurship."
    },
    {
      number: 10,
      title: "Reduced Inequalities",
      description: "Breaking barriers to education and opportunity in rural communities."
    },
    {
      number: 17,
      title: "Partnerships for the Goals",
      description: "Collaborating with local and international organizations to maximize impact."
    }
  ];

  const partners = [
    {
      name: "PNG Department of Education",
      type: "Government Partner",
      description: "Official accreditation and curriculum alignment for all educational programs.",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "PNG Health Department",
      type: "Government Partner",
      description: "Certification and support for community health worker training programs.",
      logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "World Health Organization",
      type: "International Partner",
      description: "Recognition and support for innovative community health training models.",
      logo: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Association of Christian Schools PNG",
      type: "Educational Partner",
      description: "Membership and collaboration in Christian education excellence initiatives.",
      logo: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Local Community Leaders",
      type: "Community Partners",
      description: "Ensuring programs meet local needs and respect cultural values.",
      logo: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "International Christian Organizations",
      type: "Faith Partners",
      description: "Support for curriculum development and teacher training programs.",
      logo: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const partnershipOpportunities = [
    {
      title: "Educational Sponsorship",
      description: "Sponsor students' education and help break the cycle of poverty through quality learning opportunities.",
      benefits: ["Direct impact on individual lives", "Regular progress updates", "Tax-deductible contributions"],
      commitment: "From K500 per student per year"
    },
    {
      title: "Infrastructure Development",
      description: "Support the construction and improvement of educational facilities, laboratories, and learning spaces.",
      benefits: ["Lasting physical impact", "Recognition opportunities", "Community transformation"],
      commitment: "From K10,000 per project"
    },
    {
      title: "Program Development",
      description: "Partner with us to develop new programs that address emerging community needs and opportunities.",
      benefits: ["Innovation leadership", "Curriculum influence", "Long-term partnership"],
      commitment: "From K25,000 per program"
    },
    {
      title: "Teacher Training Support",
      description: "Invest in our educators through professional development, training programs, and resource provision.",
      benefits: ["Quality improvement", "Capacity building", "Sustainable impact"],
      commitment: "From K5,000 per training program"
    }
  ];

  const successStories = [
    {
      title: "Rural Healthcare Transformation",
      description: "Our CHW graduates have established 15 new health posts in remote communities, providing basic healthcare to over 10,000 people who previously had no access to medical services.",
      image: "https://images.pexels.com/photos/5863391/pexels-photo-5863391.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      impact: "10,000+ people served"
    },
    {
      title: "Educational Excellence Recognition",
      description: "Our secondary school students consistently outperform national averages, with 95% pass rates and many receiving scholarships to PNG universities and international institutions.",
      image: "https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      impact: "95% pass rate achieved"
    },
    {
      title: "Economic Empowerment Through Skills",
      description: "Vocational training graduates have started over 50 small businesses, creating employment for 200+ community members and contributing to local economic development.",
      image: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      impact: "200+ jobs created"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 to-green-700 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Impact & Partners
            </h1>
            <p className="text-xl sm:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Transforming communities through education, creating lasting partnerships for sustainable development
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two decades of dedicated service have created measurable, lasting change across Papua New Guinea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-green-700 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Stories of Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories of how our programs are creating positive change in communities across Papua New Guinea
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {story.impact}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Aligned with UN Sustainable Development Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our work directly contributes to achieving the United Nations Sustainable Development Goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdgGoals.map((goal, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {goal.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{goal.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Valued Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working together with government, international organizations, and community leaders to maximize our impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{partner.name}</h3>
                    <p className="text-sm text-blue-700 font-medium">{partner.type}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in transforming lives and communities through strategic partnerships and collaborative initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{opportunity.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{opportunity.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Partnership Benefits:</h4>
                  <ul className="space-y-2">
                    {opportunity.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-blue-700 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Investment Level:</span> {opportunity.commitment}
                  </p>
                </div>
                
                <button className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Report */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Annual Impact Report</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Download our comprehensive annual report to see detailed impact metrics, financial transparency, and future plans
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                <Download className="mr-2 h-5 w-5" />
                Download 2023 Report
              </button>
              <button className="inline-flex items-center border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                View Previous Reports
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Ready to Partner with Us?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Whether you're an individual, organization, or government entity, we'd love to explore how we can work together to create lasting positive change.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-700" />
                    <span className="text-gray-700">partnerships@foursquareeducation.pg</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Handshake className="h-5 w-5 text-blue-700" />
                    <span className="text-gray-700">Partnership Development Team</span>
                  </div>
                </div>
                
                <button className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Contact Partnership Team
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 lg:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">Partnership Inquiry Form</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Organization Name"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <input
                    type="email"
                    placeholder="Contact Email"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <select className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white">
                    <option>Partnership Interest</option>
                    <option>Educational Sponsorship</option>
                    <option>Infrastructure Development</option>
                    <option>Program Development</option>
                    <option>Teacher Training Support</option>
                    <option>Other</option>
                  </select>
                  <textarea
                    placeholder="Tell us about your partnership interests and goals..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};