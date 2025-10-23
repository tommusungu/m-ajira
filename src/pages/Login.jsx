import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import image from "./../assets/login.png"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl overflow-hidden flex flex-col lg:flex-row">
        <motion.div 
          className="lg:w-1/2 p-12 flex flex-col justify-start items-center relative overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
        >
          <div className="relative z-10 text-center">
            <div className="mb-8">
              <div className="relative w-full h-auto mb-6">
                <img
                  src={image}
                  alt="Team collaboration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <h2 className="text-4xl font-bold mb-4 bg-primary bg-clip-text text-transparent">
                Find Your Dream Job
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Good life begins with a good company. Upload your CV and get connected to thousands of Employers Abroad.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 p-12 my-12 lg:mt-24 flex flex-col justify-center bg-white rounded-xl shadow-2xl"
          initial="hidden"
          animate="visible"
          variants={slideInRight}
        >
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold bg-primary bg-clip-text text-transparent mb-2">
              Welcome back
            </h2>
            <p className="text-gray-600">
              Sign in to continue your job search
            </p>
          </motion.div>

          <motion.div 
            className="space-y-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all hover:border-gray-300"
                  placeholder="Enter your email"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                <motion.input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all hover:border-gray-300"
                  placeholder="Enter your password"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center justify-between"
              variants={itemVariants}
            >
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Forgot password?
              </button>
            </motion.div>

            <motion.button
              onClick={handleSubmit}
              className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>

            <motion.p 
              className="text-center text-gray-600"
              variants={itemVariants}
            >
              Don't have an account?{' '}
              <button
                onClick={() => window.location.href = '/register'}
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Sign up
              </button>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}