import React from 'react';
import { Heart, Mail, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold mb-4">Dagmawit Moges</h3>
            <p className="text-cream-200 mb-6 max-w-md">
              Building elegant solutions at the intersection of technology, design, and meaningful impact. 
              Every problem is an opportunity to create something beautiful.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:dagmawitmoges@email.com"
                className="bg-white/10 p-3 rounded-lg text-white hover:bg-vintage-600 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-lg text-white hover:bg-vintage-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-lg text-white hover:bg-vintage-600 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-cream-200 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#skills" className="text-cream-200 hover:text-white transition-colors duration-200">Skills</a></li>
              <li><a href="#projects" className="text-cream-200 hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="#vision" className="text-cream-200 hover:text-white transition-colors duration-200">Vision</a></li>
              <li><a href="#contact" className="text-cream-200 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-cream-200">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Fashion Tech</li>
              <li>Healthcare Systems</li>
              <li>UI/UX Design</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream-200 text-sm">
              © {currentYear} Dagmawit Moges. All rights reserved.
            </p>
            <p className="text-cream-200 text-sm flex items-center gap-1">
              Made with <Heart size={16} className="text-vintage-400" /> in Addis Ababa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;