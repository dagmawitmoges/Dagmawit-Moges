import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Healthcare Management System",
      description: "Comprehensive internal healthcare system streamlining patient management, appointment scheduling, and medical records with real-time analytics.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      category: "Healthcare",
      impact: "Reduced appointment scheduling time by 60% and improved patient satisfaction scores",
      github: "#",
      demo: "#"
    },
    {
      title: "Modish Co. - Fashion Tech Platform",
      description: "Revolutionary fashion-tech platform combining AI-driven style recommendations with sustainable fashion marketplace and virtual try-on experiences.",
      image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Next.js", "Supabase", "AI/ML", "Framer Motion"],
      category: "Fashion Tech",
      impact: "Increased user engagement by 85% with personalized styling features",
      github: "#",
      demo: "#"
    },
    {
      title: "Duo Creations - Event Platform",
      description: "Art and event-based web platform featuring dynamic galleries, event management, and community engagement tools for creative professionals.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Express", "MongoDB", "GSAP"],
      category: "Creative Platform",
      impact: "Connected 500+ artists with 10,000+ event attendees in first quarter",
      github: "#",
      demo: "#"
    },
    {
      title: "Interactive Archery Game",
      description: "Gamified archery experience with realistic physics, progressive difficulty levels, and smooth GSAP animations for web and mobile.",
      image: "https://images.pexels.com/photos/6253713/pexels-photo-6253713.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["JavaScript", "GSAP", "Canvas API", "Progressive Web App"],
      category: "Interactive Media",
      impact: "Achieved 95% user retention rate with engaging gameplay mechanics",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Transforming ideas into elegant solutions that create real impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-cream-50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-vintage-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-navy-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-navy-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="bg-white p-4 rounded-lg mb-4">
                  <p className="text-sm text-navy-700 font-medium mb-2">Impact:</p>
                  <p className="text-sm text-navy-600">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-navy-600 hover:text-vintage-600 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-navy-600 hover:text-vintage-600 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-3 rounded-sm font-medium hover:bg-vintage-700 transition-all duration-300 group"
          >
            Let's Build Something Amazing
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;