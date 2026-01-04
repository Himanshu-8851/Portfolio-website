import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const name = "Himanshu Bansal.";
  const bio = "Full Stack Web Developer specialized in MERN Stack.";

  // Animation for the parent container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05, // Speed of typing
        delayChildren: 0.5 
      },
    },
  };

  // Animation for each individual character
  const letterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { 
      opacity: 1, 
      display: "inline-block",
      transition: { duration: 0.01 } 
    },
  };

  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gray-900 overflow-hidden">
      
      <h2 className="text-blue-500 text-lg md:text-xl font-mono mb-4 tracking-widest">
        Hi, my name is
      </h2>

      {/* 1. Name: Character by Character with Space Handling */}
      <motion.h1 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-white text-5xl md:text-8xl font-bold mb-4 tracking-tight"
      >
        {name.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {/* If char is a space, use non-breaking space code */}
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* 2. Bio: Character by Character with Space Handling */}
      <motion.p 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-gray-400 max-w-2xl mb-12 text-lg md:text-xl leading-relaxed font-mono"
      >
        {bio.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        {/* Blinking Cursor Effect */}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-6 bg-blue-500 ml-1 align-middle"
        />
      </motion.p>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }} 
        className="flex gap-4"
      >
        <a href="#projects" className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20">
          View My Projects
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;