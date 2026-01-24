import React, { useState, useEffect } from 'react';
import { initReveal } from '../utils/reveal';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Nexus AI",
      category: "Enterprise SaaS Platform",
      desc: "A production-grade AI content operating system. Features a 5-level AI failover engine.",
      stack: ["React", "Node.js", "MongoDB", "AI Agents"],
      link: "https://nexus-ai-mocha-phi.vercel.app/",
      repo: "https://github.com/Haris-Rindh/NexusAI",
      featured: true,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      theme: "blue"
    },
    {
      title: "Book Sphere",
      category: "Full-Stack Web App",
      desc: "A dynamic library management application with cloud database integration.",
      stack: ["React", "Firebase", "Async API"],
      link: "https://haris-rindh.github.io/Book-Sphere/",
      repo: "https://github.com/Haris-Rindh/Book-Sphere",
      featured: false,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800",
      theme: "indigo"
    },
    {
      title: "Umer Surveying™",
      category: "Corporate Business Site",
      desc: "Designed and deployed the corporate portal for a surveying firm.",
      stack: ["HTML5", "CSS3", "SEO Optimization"],
      link: "https://haris-rindh.github.io/Umer-Surveying/",
      repo: "https://github.com/Haris-Rindh/Umer-Surveying",
      featured: false,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      theme: "orange"
    },
    {
      title: "Prime Real Estate",
      category: "Property Platform",
      desc: "High-performance property listing template with filtering logic.",
      stack: ["React", "Tailwind", "Framer Motion"],
      link: "https://skyline-apartments-two.vercel.app/",
      repo: "https://github.com/Haris-Rindh/Skyline-apartments.git",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      theme: "emerald"
    },
    {
      title: "Dental Care",
      category: "Medical Website",
      desc: "Clean, trust-building design for a dental clinic featuring appointment scheduling.",
      stack: ["HTML5", "Bootstrap", "Responsive"],
      link: "https://zenith-dental-one.vercel.app/",
      repo: "https://github.com/Haris-Rindh/Zenith-dental.git",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      theme: "cyan"
    },
    {
      title: "Urban Restaurant",
      category: "Hospitality",
      desc: "Visual-heavy layout for a modern restaurant with menu galleries.",
      stack: ["React", "CSS Modules", "Animation"],
      link: "https://rustic-spoon-nu.vercel.app/",
      repo: "https://github.com/Haris-Rindh/rustic-spoon.git",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      theme: "rose"
    },
    {
      title: "Digital Agency",
      category: "Portfolio Template",
      desc: "Modern, dark-themed portfolio for creative agencies.",
      stack: ["React", "Tailwind", "Framer Motion"],
      link: "https://neongrowth.vercel.app/",
      repo: "https://github.com/Haris-Rindh/neongrowth.git",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      theme: "violet"
    },
    {
      title: "City Plumbing",
      category: "Local Service Site",
      desc: "Conversion-focused layout for emergency services.",
      stack: ["HTML5", "CSS3", "Lead Gen"],
      link: "https://swiftfix-plumbing.vercel.app/",
      repo: "https://github.com/Haris-Rindh/swiftfix-plumbing-landing.git",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800",
      theme: "sky"
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const getThemeClasses = (theme) => {
    const colors = {
      blue: "bg-blue-900/30 text-blue-400 border-blue-500/30",
      indigo: "bg-indigo-900/30 text-indigo-400 border-indigo-500/30",
      orange: "bg-orange-900/30 text-orange-400 border-orange-500/30",
      emerald: "bg-emerald-900/30 text-emerald-400 border-emerald-500/30",
      cyan: "bg-cyan-900/30 text-cyan-400 border-cyan-500/30",
      rose: "bg-rose-900/30 text-rose-400 border-rose-500/30",
      violet: "bg-violet-900/30 text-violet-400 border-violet-500/30",
      sky: "bg-sky-900/30 text-sky-400 border-sky-500/30",
    };
    return colors[theme] || colors.blue;
  };

  useEffect(() => {
    setTimeout(() => {
      initReveal();
    }, 100);
  }, [showAll]);

  return (
    <section id="projects" className="py-24 bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal reveal-up">
          <h2 className="text-sm font-bold text-primary tracking-wide uppercase mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white font-display">Featured Projects</h3>
          <p className="text-slate-400 max-w-lg mx-auto mt-4">
            A diverse collection of deployed applications demonstrating full-cycle development capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {visibleProjects.map((project, index) => (
            <article 
              key={index} 
              className={`reveal reveal-up project-card group bg-slate-800 rounded-2xl border border-slate-700 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-blue-500/30 flex flex-col relative ${project.featured ? 'md:col-span-2 lg:col-span-1 border-blue-500/50 shadow-blue-900/20' : ''}`}
            >
              
              {/* --- NEW: The Sliding Hover Strip --- */}
              {/* This div sits at the absolute top, full width, but scale-x is 0 by default. On group hover, it grows to 100% */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 via-primary to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

              <div className="h-48 relative overflow-hidden group-hover:opacity-100 flex-shrink-0">
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60"></div>
                
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                    <i className="fas fa-star mr-1"></i> Featured
                  </div>
                )}

                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px] z-10">
                  <a href={project.link} target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg">Live Demo</a>
                  <a href={project.repo} target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-200 transition-all transform hover:scale-105 shadow-lg"><i className="fab fa-github mr-2"></i> Code</a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow relative">
                <div className="mb-3">
                  <span className={`text-xs font-bold tracking-wider uppercase ${project.theme === 'orange' ? 'text-orange-400' : 'text-primary'}`}>
                    {project.category}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                  {project.stack.map((tech, i) => (
                    <span key={i} className={`px-2 py-1 text-[10px] font-mono rounded border ${getThemeClasses(project.theme)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="flex flex-col items-center justify-center gap-4 reveal reveal-up">
           <button onClick={() => setShowAll(!showAll)} className="px-8 py-3 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-slate-500 text-white font-medium transition-all shadow-lg hover:shadow-blue-500/10 active:scale-95 flex items-center gap-2 group">
             {showAll ? (
               <>Show Less Projects <i className="fas fa-chevron-up group-hover:-translate-y-1 transition-transform"></i></>
             ) : (
               <>Show All Projects ({projects.length}) <i className="fas fa-chevron-down group-hover:translate-y-1 transition-transform"></i></>
             )}
           </button>
           <a href="https://github.com/Haris-Rindh?tab=repositories" target="_blank" rel="noreferrer" className="text-sm text-slate-500 hover:text-primary transition-colors mt-4">View full archive on GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;