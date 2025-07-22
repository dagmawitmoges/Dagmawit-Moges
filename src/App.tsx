import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;