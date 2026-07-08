import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper';
import { PROJECTS } from '../data/constants';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  // Extract unique categories, adding 'All' at the beginning
  const categories = ['All', ...new Set(PROJECTS.map(project => project.category))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === filter);

  return (
    <SectionWrapper id="projects" className="bg-[#020617] min-h-screen">
      <SectionTitle 
        title="Featured Projects" 
        subtitle="Some of my recent work" 
      />

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-inter font-medium text-sm transition-all duration-300 ${
              filter === category 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-[#0B1120] text-text-body hover:bg-white/5 border border-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden shadow-lg border border-white/5 group flex flex-col h-full bg-[#0B1120]"
            >
              {/* Image Container with Mockup Style */}
              <div className="relative aspect-video overflow-hidden bg-white/5 p-4 pb-0 flex-shrink-0">
                <div className="w-full h-full bg-white/10 rounded-t-lg shadow-inner overflow-hidden border-t-2 border-x-2 border-white/10 relative">
                    {/* Browser Mockup Header */}
                    <div className="bg-white/10 h-6 w-full flex items-center px-2 gap-1.5 absolute top-0 left-0 z-10">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    {/* Placeholder for project screenshot */}
                    <div className="w-full h-full bg-white/5 mt-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" loading="lazy" />
                      ) : (
                        <div className="text-gray-400 font-poppins font-semibold text-lg">{project.title} Preview</div>
                      )}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-500 flex items-center justify-center backdrop-blur-[0px] group-hover:backdrop-blur-sm opacity-0 group-hover:opacity-100">
                         <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                        >
                          <FiExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-xs font-inter font-semibold uppercase tracking-wider text-secondary mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-poppins font-bold text-dark group-hover:text-primary transition-colors">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</a>
                  </h3>
                </div>
                
                <div className="mt-auto pt-4 border-t border-white/5">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-inter font-medium text-primary hover:text-secondary transition-colors"
                  >
                    Visit Website <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;
