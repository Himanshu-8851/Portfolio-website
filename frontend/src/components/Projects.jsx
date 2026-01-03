import ProjectCard from "./ProjectCard";

const Projects = () => {
  const myProjects = [
    {
      title: "E-Commerce Site",
      description: "A full-stack shop built with React and Node.js with secure checkout and product management.",
      // Using professional Unsplash placeholders - replace with your own screenshots later!
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800",
      tags: ["React", "Node", "MongoDB"]
    },
    {
      title: "Task Manager",
      description: "A productivity tool featuring drag-and-drop tasks, categories, and deadline tracking.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=800",
      tags: ["React", "Tailwind", "Firebase"]
    },
    {
      title: "Portfolio Website",
      description: "A professional MERN stack portfolio featuring smooth scrolling and a functional contact system.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
      tags: ["React", "Tailwind", "Express"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent <span className="text-blue-500">Works</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            These projects demonstrate my ability to solve complex problems and build 
            scalable applications across the full stack.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {myProjects.map((project, index) => (
            <div key={index} className="transform hover:-translate-y-2 transition-all duration-300">
              <ProjectCard 
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image} // Passing the image prop here!
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;