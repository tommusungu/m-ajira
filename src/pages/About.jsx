import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen pt-44 px-4 bg-gradient-to-br from-blue-50 via-purple-50/30 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Coming Soon
          </h1>

          

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600"
          >
            <p className="mb-2">In the meantime, feel free to explore:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/" className="text-blue-500 hover:text-blue-600 font-medium">Home</a>
              <span className="text-gray-300">|</span>
              <a href="/jobs" className="text-blue-500 hover:text-blue-600 font-medium">Find Jobs</a>
              <span className="text-gray-300">|</span>
              <a href="/contact" className="text-blue-500 hover:text-blue-600 font-medium">Contact</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
