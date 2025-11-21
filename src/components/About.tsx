import React from 'react';
import { Code, Briefcase, Lightbulb, Heart } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Technical Excellence",
      description: "Software engineering background with a passion for clean, scalable solutions"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Business Vision",
      description: "Strategic thinking that turns problems into profitable opportunities"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Creative Innovation",
      description: "Bridging the gap between fashion, technology, and meaningful design"
    },
    {
      icon: <Heart size={24} />,
      title: "Impactful Purpose",
      description: "Building solutions for healthcare, AI advancement, and women in tech"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                About Me
              </h2>
              <div className="space-y-6 text-lg text-navy-600 leading-relaxed">
                <p>
                  I'm a software engineer who believes that every problem is a business opportunity waiting to be solved beautifully. My passion lies at the intersection of logic and creativity, where clean code meets elegant design.
                </p>
                <p>
                  With a background in software engineering and an eye for timeless style, I specialize in building digital solutions that don't just work they inspire. From healthcare systems to fashion-tech innovations, I bring both technical expertise and creative vision to every project.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the future of AI in Ethiopia, advocating for women in tech, or crafting the next breakthrough in fashion technology. I believe in building not just for today, but for the elegant tomorrow we all deserve.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-cream-50 p-6 rounded-lg hover:bg-cream-100 transition-all duration-300 hover:shadow-md"
              >
                <div className="text-vintage-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;