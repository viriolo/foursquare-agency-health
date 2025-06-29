import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-red-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Foursquare Mission</h3>
                <p className="text-sm text-gray-300">Health Services</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bringing hope and healing to communities worldwide through Christ-centered healthcare and medical missions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
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
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors">
                Our Services
              </Link>
              <Link to="/locations" className="block text-gray-300 hover:text-white transition-colors">
                Locations
              </Link>
              <Link to="/get-involved" className="block text-gray-300 hover:text-white transition-colors">
                Get Involved
              </Link>
              <Link to="/news-events" className="block text-gray-300 hover:text-white transition-colors">
                News & Events
              </Link>
              <Link to="/impact-partners" className="block text-gray-300 hover:text-white transition-colors">
                Partnership Opportunities
              </Link>
            </nav>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <nav className="space-y-2">
              <Link to="/services/medical-missions" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Medical Missions
              </Link>
              <Link to="/services/community-health" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Community Health Programs
              </Link>
              <Link to="/services/emergency-response" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Emergency Response
              </Link>
              <Link to="/services/health-education" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Health Education & Training
              </Link>
              <Link to="/services/mobile-clinics" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Mobile Clinics
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
                  1910 W. Sunset Blvd, Suite 200<br />
                  Los Angeles, CA 90026<br />
                  United States
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+1 (213) 989-4234</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">health@foursquaremissions.org</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Foursquare Mission Agency Health Services. All rights reserved.
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