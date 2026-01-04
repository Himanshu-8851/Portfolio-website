import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* 1. Brand/Logo */}
        <div className="text-2xl font-bold text-blue-500 tracking-tighter mb-4">
          @Himanshu.All Rights Reserved.<span className="text-white">.</span>
        </div>

        {/* 2. Navigation Shortcuts */}
        <ul className="flex gap-8 mb-8 text-sm font-medium text-gray-400">
          <li><a href="#home" className="hover:text-white transition">Home</a></li>
          <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        </ul>

        {/* 3. Social Media Links */}
        <div className="flex gap-10 mb-10">
          {/* GitHub */}
          <a 
            href="https://github.com/your-username" 
            target="_blank" 
            rel="noreferrer"
            className="group flex flex-col items-center"
          >
            <span className="text-gray-400 group-hover:text-white transition-colors">GitHub</span>
            <div className="h-0.5 w-0 group-hover:w-full bg-blue-500 transition-all duration-300"></div>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noreferrer"
            className="group flex flex-col items-center"
          >
            <span className="text-gray-400 group-hover:text-blue-500 transition-colors">LinkedIn</span>
            <div className="h-0.5 w-0 group-hover:w-full bg-blue-500 transition-all duration-300"></div>
          </a>

          {/* Email */}
          <a 
            href="mailto:your-email@example.com" 
            className="group flex flex-col items-center"
          >
            <span className="text-gray-400 group-hover:text-red-400 transition-colors">Email</span>
            <div className="h-0.5 w-0 group-hover:w-full bg-red-400 transition-all duration-300"></div>
          </a>
        </div>

        {/* 4. Copyright & Tech Stack Info */}
        <div className="text-center border-t border-gray-800 pt-8 w-full">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Himanshu Bansal. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2 italic">
            Built with React, Tailwind CSS, and Node.js
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;