// 1. We define the Navbar "function"
import React from 'react';

const Navbar = () => {
  return (
    // 'sticky top-0' keeps the navbar visible at all times
    // 'z-50' ensures it stays on top of other elements
    <nav className="flex justify-between items-center h-20 px-10 bg-gray-900 text-white shadow-md sticky top-0 z-50">
      
      {/* Logo Area */}
      <div className="text-2xl font-bold text-blue-500 tracking-wider cursor-default">
        PORTFOLIO
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-10 font-medium">
        <li>
          <a 
            href="#home" 
            className="hover:text-blue-400 transition duration-300 ease-in-out"
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className="hover:text-blue-400 transition duration-300 ease-in-out"
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className="hover:text-blue-400 transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;