import { Link } from 'react-router-dom';
import { Briefcase, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from "/m-ajira.png";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2 py-2">
      <div className="w-28 lg:w-44  overflow-hidden flex items-center justify-center ">
        <img
          src={logo}
          alt="M-Ajira Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </Link>
            </div>
            <p className="text-gray-600 text-sm">
               Good life begins with a good company. Let's create a better future by looking for jobs here.
              Upload your Cv and get connected to thousands of Employers Abroad

            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/register" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Create Profile
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Career Tips
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@majira.co.ke</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                <Facebook className="w-4 h-4 text-blue-600" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                <Twitter className="w-4 h-4 text-blue-600" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                <Linkedin className="w-4 h-4 text-blue-600" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                <Instagram className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © 2025 M-Ajira Kenya – All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
