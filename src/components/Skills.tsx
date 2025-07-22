import React from 'react';
import { 
  Code2, 
  Server, 
  Palette, 
  Users, 
  Database, 
  Globe,
  Smartphone,
  Brain
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 size={24} />,
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "GSAP", "Framer Motion"]
    },
    {
      title: "Backend & Database",
      icon: <Server size={24} />,
      skills: ["Node.js", "Express", "Supabase", "PostgreSQL", "REST APIs", "GraphQL"]
    },
    {
      title: "Design & UX",
      icon: <Palette size={24} />,
      skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Responsive Design", "Design Systems"]
    },
    {
      title: "Business & Leadership",
      icon: <Users size={24} />,
      skills: ["Project Management", "Technical Writing", "Team Leadership", "Strategic Planning"]
    }
  ];

  const specialties = [
    { icon: <Globe size={20} />, label: "Web Development" },
    { icon: <Smartphone size={20} />, label: "Mobile-First Design" },
    { icon: <Database size={20} />, label: "Database Architecture" },
    { icon: <Brain size={20} />, label: "AI/ML Integration" }
  ];

  return (
    <section id="skills" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-vintage-600 mr-4">
                  {category.icon}
                </div>
                <h3 className="font-playfair text-xl font-bold text-navy-900">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-vintage-100 hover:text-vintage-700 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-navy-900 rounded-lg p-8">
          <h3 className="font-playfair text-2xl font-bold text-white text-center mb-8">
            Core Specialties
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-white/10 rounded-lg p-4 mb-3 group-hover:bg-vintage-600 transition-colors duration-300 mx-auto w-fit">
                  <div className="text-white group-hover:scale-110 transition-transform duration-200">
                    {specialty.icon}
                  </div>
                </div>
                <p className="text-cream-100 text-sm font-medium">{specialty.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;