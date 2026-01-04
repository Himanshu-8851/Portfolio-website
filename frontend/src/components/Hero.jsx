import React from 'react';
import { motion } from 'framer-motion'; // 1. Import Framer Motion

const Hero = () => {
  // Animation settings for the container to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each element
      },
    },
  };

  // Animation settings for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section 
      id="home" 
      className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gray-900 relative overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        {/* 1. Intro Line */}
        <motion.h2 
          variants={itemVariants}
          className="text-blue-500 text-lg md:text-xl font-mono mb-4 tracking-widest"
        >
          Hi, my name is
        </motion.h2>

        {/* 2. Main Name */}
        <motion.h1 
          variants={itemVariants}
          className="text-white text-5xl md:text-8xl font-bold mb-4 tracking-tight"
        >
          Himanshu Bansal<span className="text-blue-500">.</span>
        </motion.h1>

        {/* 3. The Tagline */}
        <motion.h3 
          variants={itemVariants}
          className="text-gray-400 text-3xl md:text-6xl font-bold mb-8 leading-tight"
        >
          Full Stack Web Developer.
        </motion.h3>

        {/* 4. The Bio */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-400 max-w-2xl mb-12 text-lg md:text-xl leading-relaxed"
        >
          I’m a software developer specializing in building (and occasionally designing) 
          exceptional digital experiences. Currently, I’m focused on building 
          full-stack applications with the <span className="text-blue-400 font-semibold">MERN Stack</span>.
        </motion.p>

        {/* 5. Call to Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-6"
        >
          <a 
            href="#projects" 
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300"
          >
            View My Projects
          </a>
          <a 
            href="#contact" 
            className="border-2 border-gray-700 text-gray-300 px-10 py-4 rounded-xl font-bold hover:bg-gray-800 hover:border-blue-500 hover:text-white transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* 6. Scroll Indicator (Visual Hint) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }} // Show after animations finish
        className="absolute bottom-10 animate-bounce"
      >
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;