import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from "/m-ajira.png"; // adjust the path based on your folder structure

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-50 backdrop-blur-md z-50 ">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          <Link to="/" className="flex items-center space-x-2 py-2">
      <div className="w-36 lg:w-44   overflow-hidden flex items-center justify-center ">
        <img
          src={logo}
          alt="M-Ajira Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </Link>

          <div className="hidden md:flex items-center space-x-12 ">
            <Link
              to="/"
              className={`text-base font-medium transition-colors ${
                isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/jobs"
              className={`text-base font-medium transition-colors ${
                isActive('/jobs') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Find a Job
            </Link>
            <Link
              to="/about"
              className={`text-base font-medium transition-colors ${
                isActive('/about') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-base font-medium transition-colors ${
                isActive('/contact') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Sign In
            </Link>
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-white rounded text-sm font-medium shadow-md transition-colors"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className={`block px-4 py-2 rounded-lg ${
                isActive('/') ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/jobs"
              className={`block px-4 py-2 rounded-lg ${
                isActive('/jobs') ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Find a Job
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-2 rounded-lg ${
                isActive('/about') ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`block px-4 py-2 rounded-lg ${
                isActive('/contact') ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="block px-4 py-2 bg-primary text-white rounded-lg text-center "
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
