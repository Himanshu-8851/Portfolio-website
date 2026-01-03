import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gray-900"
    >
      {/* 1. Intro Line */}
      <h2 className="text-blue-500 text-lg md:text-xl font-mono mb-4 tracking-widest">
        Hi, my name is
      </h2>

      {/* 2. Main Name - Replace 'Himanshu Bansal' with your actual name */}
      <h1 className="text-white text-5xl md:text-8xl font-bold mb-4 tracking-tight">
        Himanshu Bansal<span className="text-blue-500">.</span>
      </h1>

      {/* 3. The Tagline */}
      <h3 className="text-gray-400 text-3xl md:text-6xl font-bold mb-8 leading-tight">
        Full Stack Web Developer.
      </h3>

      {/* 4. The Bio */}
      <p className="text-gray-400 max-w-2xl mb-12 text-lg md:text-xl leading-relaxed">
        I’m a software developer specializing in building (and occasionally designing) 
        exceptional digital experiences. Currently, I’m focused on building 
        full-stack applications with the <span className="text-blue-400 font-semibold">MERN Stack</span>.
      </p>

      {/* 5. Call to Action Buttons */}
      <div className="flex flex-col md:flex-row gap-6">
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
      </div>

      {/* 6. Scroll Indicator (Visual Hint) */}
      <div className="absolute bottom-10 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;