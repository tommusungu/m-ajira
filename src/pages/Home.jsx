import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase, UserPlus, CheckCircle, Star, ArrowRight, Hammer, UtensilsCrossed, Factory, Laptop, Car, Shield, FileText } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { jobs, testimonials } from '../data/jobs';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const featuredJobs = jobs.slice(0, 3);

  return (
    <div className="min-h-screen ">
      <HeroSection />
      {/* <CompaniesSection /> */}
     
      <FeaturedJobsSection jobs={featuredJobs} />
      <AboutSection/>
       <HowItWorksSection />
      <ExploreJobsSection />
      {/* <CategoriesSection /> */}
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}


function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-16 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              1000+ Jobs Available<br />
              You Can Choose Your<br />
              <span className="text-blue-500">Dream Job</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Good life begins with a good company. Let's create a better future by looking for jobs here.
              Upload your CV and get connected to thousands of Employers Abroad
            </p>

            <div className="flex  gap-3 md:gap-4 mb-8">
               <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/jobs")}
      className="px-6 md:px-8 py-3 bg-primary text-white rounded font-medium shadow-lg hover:bg-primary/90 transition-colors"
    >
      Get Started
    </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3  bg-blue-600 text-white rounded font-medium shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Watch Video</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4 h-[500px]">
              {/* Taller image on the left */}
              <div className="relative h-full">
                <img
                  src="https://images.pexels.com/photos/8487390/pexels-photo-8487390.jpeg"
                  alt="Professional"
                  className="rounded-2xl shadow-2xl w-full h-full object-cover"
                />
              </div>

              {/* Shorter image on the right, centered vertically */}
              <div className="relative flex items-center">
                <img
                  src="https://images.pexels.com/photos/8487371/pexels-photo-8487371.jpeg"
                  alt="Professional"
                  className="rounded-2xl shadow-2xl w-full h-[350px] object-cover"
                />
              </div>

           
             
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-200 rounded-full opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-16 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images on the left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
           

            <div className="z-10 grid grid-cols-2 gap-4">
  {/* Left Column */}
  <div className="space-y-4">
    {/* Shorter Image */}
    <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
      <img
        src="https://images.pexels.com/photos/8486978/pexels-photo-8486978.jpeg"
        alt="Child learning"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Taller Image */}
    <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
      <img
        src="https://images.pexels.com/photos/8486935/pexels-photo-8486935.jpeg"
        alt="Community gathering"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Right Column */}
  <div className="space-y-4 pt-8">
    {/* Taller Image */}
    <div className="relative h-72 rounded-lg overflow-hidden shadow-lg">
      <img
        src="https://images.pexels.com/photos/8486935/pexels-photo-8486935.jpeg"
        alt="Happy children"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Shorter Image */}
    <div className="relative h-40 rounded-lg overflow-hidden shadow-lg">
      <img
        src="https://images.pexels.com/photos/8486978/pexels-photo-8486978.jpeg"
        alt="Child drinking water"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

            {/* Decorative elements */}
            {/* <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-200 rounded-full opacity-50"></div> */}
          </motion.div>

          {/* Text content on the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-500 mb-2">
              About M-Ajira
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              M-Ajira Helps You <br />
              <span className="text-blue-500"> Get Your Dream Job</span><br />
               And Build Your
              Bright Career.
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              It is your number one job offering platform offering various categories of jobs from business, research, education, engineering, health, production, marketing, architecture etc. We offer both casual and corporate jobs from sales officer to photography.
            </p>

            <div className="flex gap-3 md:gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 bg-primary text-white rounded font-medium shadow-lg hover:bg-primary/90 transition-colors"
              >
                Learn More
              </motion.button>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
// function CompaniesSection() {
//   const companies = [
//     { name: 'Safaricom', icon: '📱' },
//     { name: 'KCB', icon: '🏦' },
//     { name: 'Equity', icon: '💳' },
//     { name: 'Bidco', icon: '🏭' },
//     { name: 'EABL', icon: '🍺' }
//   ];

//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <motion.div {...fadeInUp} className="text-center mb-8">
//           <p className="text-gray-500 text-sm mb-6">Trusted by leading companies in Kenya</p>
//         </motion.div>
//         <motion.div
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="whileInView"
//           className="flex flex-wrap justify-center items-center gap-12"
//         >
//           {companies.map((company, index) => (
//             <motion.div
//               key={index}
//               variants={fadeInUp}
//               className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity"
//             >
//               <span className="text-3xl">{company.icon}</span>
//               <span className="font-semibold text-gray-700">{company.name}</span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

function HowItWorksSection() {
  const steps = [
    {
      number: '01.',
      title: 'Create an Account',
      description: 'Create an account with us and immediately set up your profile to be identified by employers.',
      icon: UserPlus,
      color: 'bg-gray-100',
      iconColor: 'text-gray-600'
    },
    {
      number: '02.',
      title: 'CV/Resume',
      description: 'Upload your Resume on the site so that employers can view, reach out and shortlist you.',
      icon: FileText,
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      number: '03.',
      title: 'Find Your Job',
      description: 'Find customized Jobs of interest in the Job Postings Page based on your skills.',
      icon: Search,
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      number: '04.',
      title: 'Save & Apply',
      description: 'Save the jobs you would like to review later and apply at your own suitable time.',
      icon: Briefcase,
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16  bg-gradient-to-br from-white via-blue-50/20 to-white ">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <p className="text-gray-500 mb-2">How it works?</p>
          <h2 className="text-4xl font-bold text-gray-900">
            If you are a potential candidate looking for a job with us,{' '}
            <br/>
            <span className="text-blue-500">here are the simple steps</span> you need to follow
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-2  gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className={`${step.color} rounded-3xl p-8 relative overflow-hidden`}
            >
              <div className="mb-6 text-6xl font-bold text-primary">
                {step.number}
              </div>
              {/* <step.icon className={`w-12 h-12 ${step.iconColor} absolute top-4 right-4`} /> */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedJobsSection({ jobs }) {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find Jobs That Match Your <span className="text-primary">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through thousands of opportunities across Kenya and find the perfect role for your career growth.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </motion.div>

        <motion.div {...fadeInUp} className="text-center">
          <Link to="/jobs">
            <motion.button
             onClick={() => navigate("/jobs")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-white rounded-lg font-medium shadow-md hover:bg-primary/90 transition-colors inline-flex items-center space-x-2"
            >
              <span>View All Jobs</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function JobCard({ job }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-white" />
        </div>
        <span className="text-xs font-medium px-3 py-1 bg-green-100 text-green-700 rounded-full">
          Full-time
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2">{job.title}</h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{job.description}</p>

      <div className="flex items-center text-sm text-gray-500 mb-4">
        <MapPin className="w-4 h-4 mr-1" />
        <span>{job.location}</span>
      </div>

      <div className="flex items-center justify-between pt-4 border-t">
        {/* <div>
          <p className="text-xs text-gray-500">Salary</p>
          <p className="font-bold text-primary">{job.salary}</p>
        </div> */}
        <div/>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium  transition-colors"
        >
          View Job
        </motion.button>
      </div>
    </motion.div>
  );
}

function ExploreJobsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="flex items-center justify-between mb-12">
          <div>
            <p className="text-gray-500 mb-2">99+ Jobs uploaded per day</p>
            <h2 className="text-4xl font-bold text-gray-900">
              Explore <span className="text-primary">jobs</span> all location
            </h2>
          </div>
          <div className="hidden md:flex space-x-3">
            <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50">
              ←
            </button>
            <button className="w-12 h-12 bg-blue-500 text-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-600">
              →
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-3 gap-6"
        >
          {jobs.slice(4, 7).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// function CategoriesSection() {
//   const categories = [
//     { name: 'Construction', icon: Hammer, count: 245, color: 'from-orange-400 to-red-500' },
//     { name: 'Hospitality', icon: UtensilsCrossed, count: 180, color: 'from-pink-400 to-purple-500' },
//     { name: 'Manufacturing', icon: Factory, count: 156, color: 'from-blue-400 to-indigo-500' },
//     { name: 'Technology', icon: Laptop, count: 98, color: 'from-green-400 to-teal-500' },
//     { name: 'Drivers', icon: Car, count: 203, color: 'from-yellow-400 to-orange-500' },
//     { name: 'Security', icon: Shield, count: 167, color: 'from-red-400 to-pink-500' }
//   ];

//   return (
//     <section className="py-20 bg-white px-4">
//       <div className="max-w-7xl mx-auto">
//         <motion.div {...fadeInUp} className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Browse Jobs by <span className="text-primary">Category</span>
//           </h2>
//           <p className="text-gray-600">Find opportunities in your preferred industry</p>
//         </motion.div>

//         <motion.div
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="whileInView"
//           className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
//         >
//           {categories.map((category, index) => (
//             <motion.div
//               key={index}
//               variants={fadeInUp}
//               whileHover={{ y: -10, scale: 1.05 }}
//               className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all cursor-pointer"
//             >
//               <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center`}>
//                 <category.icon className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
//               <p className="text-sm text-gray-500">{category.count} jobs</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-white px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <p className="text-gray-500 mb-2">Our Clients</p>
          <h2 className="text-4xl font-bold text-gray-900">
            We make our <span className="text-blue-500">clients happy</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-44 px-4 bg-primary  relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in touch to see how we can help
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of Kenyans finding meaningful employment through M-Ajira
          </p>
          <Link to="/register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-primary rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Subscribe Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
