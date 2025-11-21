import React from 'react';
import { ArrowDown, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-cream-50 to-cream-100">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-navy-900 leading-tight">
            Dagmawit Moges
          </h1>
          
          <p className="text-xl md:text-2xl text-navy-700 font-light max-w-2xl mx-auto leading-relaxed">
            Creative Thinker. Problem Solver. Project Builder.
          </p>
          
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            Building bold ideas with logic, creativity, and style. Where technology meets elegance and innovation drives impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#contact"
             className="group bg-navy-900 text-white px-8 py-3 rounded-sm font-medium hover:bg-vintage-700 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              Get in Touch
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            
            <a
              href="https://drive.google.com/file/d/1hyGskS-AUZMWr_JjePPOUH7bZhq2BcmP/view?usp=drive_link"
              download="Dagmawit_Moges_CV.pdf"
              className="text-navy-700 hover:text-vintage-600 font-medium border border-navy-200 px-8 py-3 rounded-sm hover:border-vintage-300 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-navy-400" size={24} />
      </div>
    </section>
  );
};

export default Hero;