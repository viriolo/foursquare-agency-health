import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInstitutionsOpen, setIsInstitutionsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const institutions = [
    { name: 'Wapenamanda International Christian School', slug: 'wapenamanda-international' },
    { name: 'Wapenamanda FourSquare Secondary School', slug: 'wapenamanda-secondary' },
    { name: 'Kungumanda CHW Training School', slug: 'kungumanda-chw' },
    { name: 'Kumbas Vocational Centre', slug: 'kumbas-vocational' },
    { name: 'One Way Bible College', slug: 'one-way-bible' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-blue-700 p-2 rounded-lg">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">FourSquare Education</h1>
              <p className="text-sm text-gray-600">Agency</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              About Us
            </Link>
            
            {/* Institutions Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsInstitutionsOpen(true)}
                onMouseLeave={() => setIsInstitutionsOpen(false)}
                className={`flex items-center text-sm font-medium transition-colors ${
                  location.pathname.startsWith('/institutions') ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                Institutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isInstitutionsOpen && (
                <div
                  onMouseEnter={() => setIsInstitutionsOpen(true)}
                  onMouseLeave={() => setIsInstitutionsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border py-2 z-50"
                >
                  <Link
                    to="/institutions"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  >
                    All Institutions
                  </Link>
                  <hr className="my-2" />
                  {institutions.map((institution) => (
                    <Link
                      key={institution.slug}
                      to={`/institutions/${institution.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {institution.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/programs"
              className={`text-sm font-medium transition-colors ${
                isActive('/programs') ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Programs
            </Link>
            <Link
              to="/admissions"
              className={`text-sm font-medium transition-colors ${
                isActive('/admissions') ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Admissions
            </Link>
            <Link
              to="/news-events"
              className={`text-sm font-medium transition-colors ${
                isActive('/news-events') ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              News & Events
            </Link>
            <Link
              to="/impact-partners"
              className={`text-sm font-medium transition-colors ${
                isActive('/impact-partners') ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Impact & Partners
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Contact
            </Link>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-4 ml-6">
              <Link
                to="/admissions"
                className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                to="/impact-partners"
                className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors"
              >
                Partner With Us
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
                  isActive('/') ? 'text-blue-700' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-base font-medium ${
                  isActive('/about') ? 'text-blue-700' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/institutions"
                className={`text-base font-medium ${
                  location.pathname.startsWith('/institutions') ? 'text-blue-700' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Institutions
              </Link>
              <Link
                to="/programs"
                className={`text-base font-medium ${
                  isActive('/programs') ? 'text-blue-700' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Programs
              </Link>
              <Link
                to="/admissions"
                className={`text-base font-medium ${
                  isActive('/admissions') ? 'text-blue-700' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Admissions
              </Link>
              <Link
                to="/news-events"
                className={`text-base font-medium ${
                  isActive('/news-events') ? 'text-blue-700' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News & Events
              </Link>
              <Link
                to="/impact-partners"
                className={`text-base font-medium ${
                  isActive('/impact-partners') ? 'text-blue-700' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Impact & Partners
              </Link>
              <Link
                to="/contact"
                className={`text-base font-medium ${
                  isActive('/contact') ? 'text-blue-700' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4 space-y-3">
                <Link
                  to="/admissions"
                  className="block bg-blue-700 text-white px-4 py-2 rounded-lg text-center font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Apply Now
                </Link>
                <Link
                  to="/impact-partners"
                  className="block bg-amber-600 text-white px-4 py-2 rounded-lg text-center font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Partner With Us
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};