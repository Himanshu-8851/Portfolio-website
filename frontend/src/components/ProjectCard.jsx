import React from 'react';

// We add 'image' to the props we are receiving
const ProjectCard = ({ title, description, tags, image }) => {
  return (
    <div className="bg-gray-800/40 border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group shadow-lg">
      
      {/* 1. Project Image Container */}
      <div className="h-52 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        {/* Dark overlay that appears on hover */}
        <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* 2. Project Info Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {description}
        </p>

        {/* 3. Tech Tags (Badges) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 bg-gray-900 text-blue-400 text-xs font-medium rounded-md border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* 4. Footer Link */}
        <div className="flex items-center text-blue-500 text-sm font-bold cursor-pointer hover:underline">
          Live Demo <span className="ml-2">→</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;