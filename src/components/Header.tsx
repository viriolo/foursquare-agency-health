import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: 'Medical Missions', slug: 'medical-missions' },
    { name: 'Community Health Programs', slug: 'community-health' },
    { name: 'Emergency Response', slug: 'emergency-response' },
    { name: 'Health Education & Training', slug: 'health-education' },
    { name: 'Mobile Clinics', slug: 'mobile-clinics' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-red-600 p-2 rounded-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Foursquare Mission Agency</h1>
              <p className="text-sm text-gray-600">Health Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`flex items-center text-sm font-medium transition-colors ${
                  location.pathname.startsWith('/services') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                }`}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border py-2 z-50"
                >
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                  >
                    All Services
                  </Link>
                  <hr className="my-2" />
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/locations"
              className={`text-sm font-medium transition-colors ${
                isActive('/locations') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Locations
            </Link>
            <Link
              to="/get-involved"
              className={`text-sm font-medium transition-colors ${
                isActive('/get-involved') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Get Involved
            </Link>
            <Link
              to="/news-events"
              className={`text-sm font-medium transition-colors ${
                isActive('/news-events') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              News & Events
            </Link>
            <Link
              to="/impact-partners"
              className={`text-sm font-medium transition-colors ${
                isActive('/impact-partners') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Impact & Partners
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Contact
            </Link>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-4 ml-6">
              <Link
                to="/get-involved"
                className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
              >
                Volunteer
              </Link>
              <Link
                to="/impact-partners"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Donate
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-base font-medium ${
                  isActive('/') ? 'text-red-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-base font-medium ${
                  isActive('/about') ? 'text-red-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={`text-base font-medium ${
                  location.pathname.startsWith('/services') ? 'text-red-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/locations"
                className={`text-base font-medium ${
                  isActive('/locations') ? 'text-red-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Locations
              </Link>
              <Link
                to="/get-involved"
                className={`text-base font-medium ${
                  isActive('/get-involved') ? 'text-red-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Involved
              </Link>
              <Link
                to="/news-events"
                className={`text-base font-medium ${
                  isActive('/news-events') ? 'text-red-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News & Events
              </Link>
              <Link
                to="/impact-partners"
                className={`text-base font-medium ${
                  isActive('/impact-partners') ? 'text-red-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Impact & Partners
              </Link>
              <Link
                to="/contact"
                className={`text-base font-medium ${
                  isActive('/contact') ? 'text-red-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4 space-y-3">
                <Link
                  to="/get-involved"
                  className="block bg-red-600 text-white px-4 py-2 rounded-lg text-center font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Volunteer
                </Link>
                <Link
                  to="/impact-partners"
                  className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Donate
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};