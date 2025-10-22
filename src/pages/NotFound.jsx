import { motion } from 'framer-motion';
import { Home, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-purple-50/30 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="mb-8"
        >
          <h1 className="text-9xl md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-500 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </motion.button>
            </Link>

            <Link to="/jobs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-xl font-semibold shadow-lg hover:bg-primary hover:text-white transition-colors flex items-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>Find Jobs</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <div className="inline-block bg-white rounded-3xl shadow-xl p-8">
            <p className="text-gray-500 mb-4">Lost? Here are some helpful links:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/" className="text-blue-500 hover:text-blue-600 font-medium">Home</Link>
              <span className="text-gray-300">•</span>
              <Link to="/jobs" className="text-blue-500 hover:text-blue-600 font-medium">Find Jobs</Link>
              <span className="text-gray-300">•</span>
              <Link to="/about" className="text-blue-500 hover:text-blue-600 font-medium">About</Link>
              <span className="text-gray-300">•</span>
              <Link to="/contact" className="text-blue-500 hover:text-blue-600 font-medium">Contact</Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
