import React, { useState } from 'react';
import { Download, Calendar, FileText, User, Phone, Mail, CheckCircle } from 'lucide-react';

export const AdmissionsPage: React.FC = () => {
  const [selectedInstitution, setSelectedInstitution] = useState('all');

  const institutions = [
    { value: 'all', label: 'All Institutions' },
    { value: 'wics', label: 'Wapenamanda International Christian School' },
    { value: 'wfss', label: 'Wapenamanda FourSquare Secondary School' },
    { value: 'kchs', label: 'Kungumanda CHW Training School' },
    { value: 'kvc', label: 'Kumbas Vocational Centre' },
    { value: 'owbc', label: 'One Way Bible College' }
  ];

  const admissionSteps = [
    {
      step: 1,
      title: "Research Programs",
      description: "Explore our institutions and programs to find the best fit for your educational goals.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Prepare Documents",
      description: "Gather all required documents including certificates, records, and identification.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Submit Application",
      description: "Complete and submit your application form along with required documents and fees.",
      icon: <User className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Assessment & Interview",
      description: "Attend scheduled assessments and interviews as required by your chosen program.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: 5,
      title: "Receive Decision",
      description: "Get your admission decision and enrollment instructions within 2-3 weeks.",
      icon: <Mail className="h-6 w-6" />
    },
    {
      step: 6,
      title: "Complete Enrollment",
      description: "Accept your offer, pay enrollment fees, and prepare for orientation.",
      icon: <Calendar className="h-6 w-6" />
    }
  ];

  const importantDates = [
    {
      title: "Early Application Deadline",
      date: "October 31, 2024",
      description: "Priority consideration and scholarship eligibility"
    },
    {
      title: "Regular Application Deadline",
      date: "December 15, 2024",
      description: "Final deadline for 2025 academic year applications"
    },
    {
      title: "Admission Decisions Released",
      date: "January 15, 2025",
      description: "Notification of acceptance and enrollment instructions"
    },
    {
      title: "Enrollment Confirmation",
      date: "February 1, 2025",
      description: "Final deadline to confirm enrollment and pay fees"
    },
    {
      title: "Orientation Week",
      date: "February 15-19, 2025",
      description: "New student orientation and registration"
    },
    {
      title: "Classes Begin",
      date: "February 22, 2025",
      description: "First day of classes for 2025 academic year"
    }
  ];

  const scholarships = [
    {
      name: "Academic Excellence Scholarship",
      amount: "Up to 50% tuition reduction",
      criteria: "Outstanding academic performance in previous studies",
      deadline: "October 31, 2024"
    },
    {
      name: "Community Service Scholarship",
      amount: "Up to 30% tuition reduction",
      criteria: "Demonstrated commitment to community service and leadership",
      deadline: "November 30, 2024"
    },
    {
      name: "Financial Need Grant",
      amount: "Varies based on need",
      criteria: "Demonstrated financial need with strong academic potential",
      deadline: "December 15, 2024"
    },
    {
      name: "Rural Student Support",
      amount: "Transportation and accommodation assistance",
      criteria: "Students from remote rural communities",
      deadline: "January 15, 2025"
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
              Admissions
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Take the first step toward your educational journey at FourSquare Education Agency
            </p>
          </div>
        </div>
      </section>

      {/* Quick Application CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Start your application today and join over 1,200 students already pursuing their dreams with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Start Application
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Download Forms
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to complete your application and join our learning community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                    {step.step}
                  </div>
                  <div className="text-blue-700">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements by Institution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Admission Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Requirements vary by institution and program level. Select an institution to see specific requirements.
            </p>
          </div>

          <div className="mb-8">
            <select
              value={selectedInstitution}
              onChange={(e) => setSelectedInstitution(e.target.value)}
              className="w-full md:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {institutions.map((institution) => (
                <option key={institution.value} value={institution.value}>
                  {institution.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">General Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Academic Records</p>
                    <p className="text-gray-600 text-sm">Official transcripts from previous educational institutions</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Identification Documents</p>
                    <p className="text-gray-600 text-sm">Birth certificate, passport, or national ID</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Medical Clearance</p>
                    <p className="text-gray-600 text-sm">Health certificate and vaccination records</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Character References</p>
                    <p className="text-gray-600 text-sm">Letters from teachers, community leaders, or employers</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Application Fee</p>
                    <p className="text-gray-600 text-sm">Non-refundable processing fee (varies by program)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Requirements</h3>
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Primary & Secondary Schools</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Age-appropriate grade placement assessment</li>
                    <li>• Parent/guardian interview</li>
                    <li>• English language proficiency evaluation</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Healthcare Training</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Grade 10 certificate minimum</li>
                    <li>• Physical fitness assessment</li>
                    <li>• Community service commitment</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">Vocational Training</h4>
                  <ul className="text-sm text-amber-800 space-y-1">
                    <li>• Grade 8 certificate minimum</li>
                    <li>• Aptitude assessment for chosen trade</li>
                    <li>• Safety orientation completion</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Bible College</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Christian testimony and calling statement</li>
                    <li>• Church leader recommendation</li>
                    <li>• Ministry experience (preferred)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Important Dates & Deadlines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendar with these key dates for the 2025 academic year
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates.map((date, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                    {date.date}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{date.title}</h3>
                  <p className="text-gray-600 text-sm">{date.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Scholarships & Financial Aid
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe quality education should be accessible. Explore our scholarship opportunities to help fund your education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{scholarship.name}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-600">Award Amount:</span>
                    <p className="text-lg font-semibold text-blue-700">{scholarship.amount}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Eligibility:</span>
                    <p className="text-gray-700">{scholarship.criteria}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Application Deadline:</span>
                    <p className="text-gray-700 font-medium">{scholarship.deadline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              Apply for Scholarships
            </button>
          </div>
        </div>
      </section>

      {/* Contact Admissions */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Need Help with Your Application?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our admissions team is here to guide you through every step of the process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-200" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-blue-200 mb-2">+675 547 1234</p>
              <p className="text-blue-300 text-sm">Monday - Friday, 8:00 AM - 5:00 PM</p>
            </div>

            <div>
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-200" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-blue-200 mb-2">admissions@foursquareeducation.pg</p>
              <p className="text-blue-300 text-sm">We respond within 24 hours</p>
            </div>

            <div>
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-blue-200" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-blue-200 mb-2">Wapenamanda, Enga Province</p>
              <p className="text-blue-300 text-sm">Schedule an appointment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};