import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const name = "Himanshu Bansal.";
  const bio = "I’m a software developer specializing in building exceptional digital experiences. Currently, I’m focused on building full-stack applications with the MERN Stack.";

  // Split text into arrays of words
  const nameArray = name.split(" ");
  const bioArray = bio.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gray-900">
      
      {/* 1. Intro Line */}
      <motion.h2 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="text-blue-500 text-lg md:text-xl font-mono mb-4 tracking-widest"
      >
        Hi, my name is
      </motion.h2>

      {/* 2. Main Name - Animated word by word */}
      <motion.h1 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-white text-5xl md:text-8xl font-bold mb-4 tracking-tight flex flex-wrap justify-center gap-x-4"
      >
        {nameArray.map((word, i) => (
          <motion.span key={i} variants={childVariants}>
            {word}
            {i === 0 && <span className="text-blue-500">.</span>}
          </motion.span>
        ))}
      </motion.h1>

      {/* 3. The Bio - Animated word by word */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-gray-400 max-w-2xl mb-12 text-lg md:text-xl leading-relaxed flex flex-wrap justify-center gap-x-2"
      >
        {bioArray.map((word, i) => (
          <motion.span key={i} variants={childVariants}>
            {word}
          </motion.span>
        ))}
      </motion.div>

      {/* 4. Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }} // Shows up after text finishes
        className="flex flex-col md:flex-row gap-6"
      >
        <a href="#projects" className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
          View My Projects
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;