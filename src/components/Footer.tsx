import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-700 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">FourSquare Education</h3>
                <p className="text-sm text-gray-300">Agency</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering the next generation through Christ-centered education across Papua New Guinea's Enga Province.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/institutions" className="block text-gray-300 hover:text-white transition-colors">
                Our Institutions
              </Link>
              <Link to="/programs" className="block text-gray-300 hover:text-white transition-colors">
                Programs
              </Link>
              <Link to="/admissions" className="block text-gray-300 hover:text-white transition-colors">
                Admissions
              </Link>
              <Link to="/news-events" className="block text-gray-300 hover:text-white transition-colors">
                News & Events
              </Link>
              <Link to="/impact-partners" className="block text-gray-300 hover:text-white transition-colors">
                Partnership Opportunities
              </Link>
            </nav>
          </div>

          {/* Our Institutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Institutions</h4>
            <nav className="space-y-2">
              <Link to="/institutions/wapenamanda-international" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Wapenamanda International Christian School
              </Link>
              <Link to="/institutions/wapenamanda-secondary" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Wapenamanda FourSquare Secondary
              </Link>
              <Link to="/institutions/kungumanda-chw" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Kungumanda CHW Training School
              </Link>
              <Link to="/institutions/kumbas-vocational" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Kumbas Vocational Centre
              </Link>
              <Link to="/institutions/one-way-bible" className="block text-gray-300 hover:text-white transition-colors text-sm">
                One Way Bible College
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Wapenamanda, Enga Province<br />
                  Papua New Guinea
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+675 547 1234</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@foursquareeducation.pg</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 FourSquare Education Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};