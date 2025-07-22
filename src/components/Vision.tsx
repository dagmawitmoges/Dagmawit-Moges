import React from 'react';
import { Quote, Calendar, ArrowRight } from 'lucide-react';

const Vision: React.FC = () => {
  const blogPosts = [
    {
      title: "Why Style Matters in Tech",
      excerpt: "In a world where functionality often overshadows form, I believe that beautiful design isn't just nice to have—it's essential for creating meaningful user experiences.",
      date: "Dec 2024",
      readTime: "5 min read",
      category: "Design Philosophy"
    },
    {
      title: "The Future of AI in Ethiopia",
      excerpt: "Exploring how artificial intelligence can transform healthcare, education, and economic opportunities across Ethiopia while preserving our rich cultural heritage.",
      date: "Nov 2024",
      readTime: "8 min read",
      category: "Technology & Culture"
    },
    {
      title: "Building Meaningful Digital Solutions",
      excerpt: "Every line of code should serve a purpose. Here's how I approach building solutions that don't just solve problems, but create lasting positive impact.",
      date: "Oct 2024",
      readTime: "6 min read",
      category: "Development"
    },
    {
      title: "Women in Fashion-Tech",
      excerpt: "The intersection of fashion and technology offers unprecedented opportunities for women to lead innovation. Let's explore the crossover that's changing both industries.",
      date: "Sep 2024",
      readTime: "7 min read",
      category: "Industry Insights"
    }
  ];

  return (
    <section id="vision" className="py-20 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            My Vision
          </h2>
          <p className="text-lg text-cream-200 max-w-2xl mx-auto">
            Thoughts on the future of technology, design, and meaningful innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-vintage-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <div className="flex items-center text-cream-300 text-sm">
                  <Calendar size={14} className="mr-1" />
                  {post.date}
                </div>
                <span className="text-cream-300 text-sm">{post.readTime}</span>
              </div>
              
              <h3 className="font-playfair text-xl font-bold mb-4 group-hover:text-burgundy-200 transition-colors duration-200">
                {post.title}
              </h3>
              
              <p className="text-cream-200 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <button className="flex items-center gap-2 text-vintage-300 hover:text-vintage-200 transition-colors duration-200 group">
                Read More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </article>
          ))}
        </div>

        <div className="bg-white/5 rounded-lg p-8 border border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <Quote size={32} className="text-vintage-400 flex-shrink-0 mt-2" />
            <div>
              <blockquote className="font-playfair text-2xl md:text-3xl font-medium text-white leading-relaxed mb-4">
                "Every problem is a business idea. Let's solve them beautifully."
              </blockquote>
              <p className="text-cream-200 text-lg">
                This philosophy drives everything I do. Whether it's building healthcare systems that save lives, 
                creating fashion-tech platforms that empower creativity, or developing AI solutions that preserve culture
                I believe in the power of elegant solutions to create lasting change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;