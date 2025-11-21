import React, { useMemo, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import image1 from '../assets/ny.jpg';
import image2 from '../assets/image2.jpg';  
import image3 from '../assets/image4.jpg';
// Types for the three categories
type DevProject = {
  id: string;
  title: string;
  description: string;
  status?: string;
  impact?: string;
  techStack: string[];
  codeUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
};

type DesignProject = {
  id: string;
  title: string;
  status?: string;
  screenshotUrl: string;
  shortDescription: string;
  tools: string[];
  designUrl?: string;
};

type BrandingProject = {
  id: string;
  title: string;
  status?: string;
  logoImageUrl: string;
  brandOverview: string;
  tools: string[];
  brandingUrl?: string;
};

const devProjects: DevProject[] = [
  {
    id: 'fs-1',
    title: 'MY Consulting Website',
    status: 'Live',
    description:
      'Professional portfolio website for MY Consulting, an engineering and architectural firm showcasing projects, services, and core expertise.',
    impact: 'Improved client outreach and brand visibility with a clean, professional online presence.',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    codeUrl: '#',
    liveUrl: 'https://my-consulting-portfolio.vercel.app/',
    imageUrl: image1
  },
   {
    id: 'brand-1',
    title: 'Duo Creations — Logo & Identity',
    status: 'Live',
    imageUrl: image2,
    description:
      'A playful, minimal identity designed to communicate collaborative creativity.',
    techStack: ['react', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    codeUrl: 'https://duo-creations-portfolio.vercel.app/'
  },
  {
    id: 'fs-2',
    title: 'Modish Co. - Fashion Tech Platform',
    status: 'In Development',
    description:
      'Revolutionary fashion-tech platform combining AI-driven style recommendations with a sustainable marketplace and virtual try-on experiences.',
    impact: 'Increased user engagement by 85% with personalized styling features',
    techStack: ['Next.js', 'Supabase', 'AI/ML', 'Framer Motion'],
    codeUrl: '#',
    liveUrl: '#',
    imageUrl:
      'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const designProjects: DesignProject[] = [
  {
    id: 'ux-1',
    title: 'Community Platform UI',
    status: 'Concept',
    screenshotUrl: image3,
    shortDescription: 'A modern community dashboard focused on discoverability and events.',
    tools: ['Figma'],
    designUrl: 'https://community-frontend-git-integration-bete77.vercel.app/'
  },
  {
    id: 'ux-2',
    title: 'Fashion Dashboard Concept',
    status: 'In Progress',
    screenshotUrl: '/assets/designs/fashion-dashboard.png',
    shortDescription: 'Dashboard for stylists to manage looks, inventory, and client appointments.',
    tools: ['Figma'],
    designUrl: '#'
  }
];

const brandingProjects: BrandingProject[] = [
  {
    id: 'brand-1',
    title: 'Duo Creations — Logo & Identity',
    status: 'Live',
    logoImageUrl: image2,
    brandOverview:
      'A playful, minimal identity designed to communicate collaborative creativity.',
    tools: ['Figma', 'Illustrator'],
    brandingUrl: 'https://duo-creations-portfolio.vercel.app/'
  },
  {
    id: 'brand-2',
    title: 'Gishmar — Logo & Variations',
    status: 'In Concept',
    logoImageUrl: '/assets/branding/gishmar.png',
    brandOverview: 'Bold and modern mark for a lifestyle brand.',
    tools: ['Figma', 'Illustrator'],
    brandingUrl: '#'
  }
];

const Tabs = ['All', 'Full-Stack', 'UI/UX', 'Branding'] as const;
type Tab = typeof Tabs[number];

const DevProjectCard: React.FC<{ p: DevProject }> = ({ p }) => (
  <article className="group bg-cream-50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500">
    <div className="relative overflow-hidden">
      {p.imageUrl && (
        <img
          src={p.imageUrl}
          alt={p.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      )}
    </div>
    <div className="p-6">
        {p.status && (
          <span className="inline-block bg-vintage-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
            {p.status}
          </span>
        )}
      <h3 className="font-playfair text-2xl font-bold text-navy-900 mb-2">{p.title}</h3>
      <p className="text-navy-600 mb-3 text-sm leading-relaxed">{p.description}</p>
      {p.impact && (
        <div className="bg-white p-3 rounded-lg mb-3">
          <p className="text-sm text-navy-700 font-medium mb-1">Impact:</p>
          <p className="text-sm text-navy-600">{p.impact}</p>
        </div>
      )}
      <div className="flex flex-wrap gap-2 mb-4">
        {p.techStack.map((t) => (
          <span key={t} className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-xs font-medium">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {p.codeUrl ? (
          <a
            href={p.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy-600 hover:text-vintage-600 transition-colors duration-200"
            aria-label={`View code for ${p.title}`}
          >
            <Github size={16} />
            <span className="text-sm font-medium">Code</span>
          </a>
        ) : (
          <button className="inline-flex items-center gap-2 text-navy-400 cursor-not-allowed" disabled>
            <Github size={16} />
            <span className="text-sm">Code</span>
          </button>
        )}

        {p.liveUrl ? (
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy-600 hover:text-vintage-600 transition-colors duration-200"
            aria-label={`View live demo for ${p.title}`}
          >
            <ExternalLink size={16} />
            <span className="text-sm font-medium">Live Demo</span>
          </a>
        ) : (
          <button className="inline-flex items-center gap-2 text-navy-400 cursor-not-allowed" disabled>
            <ExternalLink size={16} />
            <span className="text-sm">Live Demo</span>
          </button>
        )}
      </div>
    </div>
  </article>
);

const DesignProjectCard: React.FC<{ p: DesignProject }> = ({ p }) => (
  <article className="group bg-white rounded-lg overflow-hidden hover:shadow-md transition-all duration-300">
    <figure>
        {p.status && (
          <div className="p-4">
            <span className="inline-block bg-vintage-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-3">{p.status}</span>
          </div>
        )}
      <img src={p.screenshotUrl} alt={p.title} className="w-full h-56 object-cover" loading="lazy" />
      <figcaption className="p-4">
          <h3 className="font-playfair text-xl font-semibold text-navy-900 mb-2">{p.title}</h3>
        <p className="text-navy-600 text-sm mb-3">{p.shortDescription}</p>
        <div className="flex items-center gap-2 mb-3">
          {p.tools.map((t) => (
            <span key={t} className="bg-navy-100 text-navy-700 px-2 py-1 rounded-full text-xs">
              {t}
            </span>
          ))}
        </div>
        <a
          href={p.designUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-navy-600 hover:text-vintage-600 transition-colors duration-200"
          aria-label={`View design for ${p.title}`}
        >
          <ExternalLink size={16} />
          <span className="text-sm font-medium">View Design</span>
        </a>
      </figcaption>
    </figure>
  </article>
);

const BrandingProjectCard: React.FC<{ p: BrandingProject }> = ({ p }) => (
  <article className="group bg-cream-50 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col items-center text-center p-6">
    {p.status && (
      <span className="inline-block bg-vintage-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-3">{p.status}</span>
    )}
    <img src={p.logoImageUrl} alt={`${p.title} logo`} className="w-32 h-32 object-contain mb-4" loading="lazy" />
    <h3 className="font-playfair text-xl font-semibold text-navy-900 mb-2">{p.title}</h3>
    <p className="text-navy-600 text-sm mb-3">{p.brandOverview}</p>
    <div className="flex gap-2 mb-3">
      {p.tools.map((t) => (
        <span key={t} className="bg-navy-100 text-navy-700 px-2 py-1 rounded-full text-xs">
          {t}
        </span>
      ))}
    </div>
    <a
      href={p.brandingUrl || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-navy-600 hover:text-vintage-600 transition-colors duration-200"
      aria-label={`View branding for ${p.title}`}
    >
      <ExternalLink size={16} />
      <span className="text-sm font-medium">View Branding</span>
    </a>
  </article>
);

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('All');

  const items = useMemo(() => {
    switch (activeTab) {
      case 'Full-Stack':
        return { dev: devProjects, design: [], brand: [] };
      case 'UI/UX':
        return { dev: [], design: designProjects, brand: [] };
      case 'Branding':
        return { dev: [], design: [], brand: brandingProjects };
      default:
        return { dev: devProjects, design: designProjects, brand: brandingProjects };
    }
  }, [activeTab]);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-900 mb-3">Featured Projects</h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">Selected work across full-stack development, UI/UX design, and branding.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 gap-3">
          {Tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-4 py-2 rounded-full text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-vintage-600 transition-all ${
                activeTab === t ? 'bg-navy-900 text-white' : 'bg-navy-50 text-navy-700'
              }`}
              aria-pressed={activeTab === t}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.dev.map((p) => (
            <DevProjectCard key={p.id} p={p} />
          ))}

          {items.design.map((p) => (
            <DesignProjectCard key={p.id} p={p} />
          ))}

          {items.brand.map((p) => (
            <BrandingProjectCard key={p.id} p={p} />
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