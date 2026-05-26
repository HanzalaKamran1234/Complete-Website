"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import { ArrowUpRight, Award, Flame, ExternalLink, Filter } from 'lucide-react';

const categories = [
  { label: 'All Projects', value: 'all' },
  { label: 'Corporate', value: 'corporate' },
  { label: 'Ecommerce', value: 'ecommerce' },
  { label: 'Business Hubs', value: 'business' },
  { label: 'Travel & Tourism', value: 'travel' },
  { label: 'News & Media', value: 'news' }
];

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData;
    return projectsData.filter((proj) => proj.filter === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="relative py-28 overflow-hidden grid-bg">
      <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-secondary glow-sphere opacity-[0.1]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl text-left">
            <span className="text-xs font-bold tracking-widest text-primary uppercase mb-4 block">PORTFOLIO DEPLOYMENTS</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Showcasing Our <span className="text-gradient-purple-blue">Prestige Deployments</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We design and engineer enterprise-grade web platforms that convert visitors into active customers and scale corporate influence.
            </p>
          </div>

          {/* Categories Filters List */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none shrink-0 max-w-full">
            <Filter size={14} className="text-gray-500 mr-2 shrink-0 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shrink-0 ${
                  activeFilter === cat.value
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20'
                    : 'glass-panel border-white/5 hover:border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Masonry Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(project)}
                className="glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col justify-between h-[360px] cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  {/* Category row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                      ID: #{project.id.toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Row & Arrow CTA */}
                <div className="mt-6 border-t border-white/5 pt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] text-gray-400 font-mono px-2 py-0.5 bg-white/5 rounded border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                    <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Case Study Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
              className="w-full max-w-4xl max-h-[85vh] overflow-y-auto glass-panel border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              {/* Case Study Header */}
              <div className="border-b border-white/5 pb-8 mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3 block">
                  CASE STUDY ANALYSIS
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-lg text-accent font-semibold leading-relaxed mb-6">
                  &ldquo;{selectedProject.details.tagline}&rdquo;
                </p>
                <div className="flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="text-xs text-gray-300 font-mono px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={selectedProject.details.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all transform hover:-translate-y-0.5"
                  >
                    Launch Live Site
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Case Study Detail Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-2">
                      <Award size={16} className="text-primary" /> Project Overview
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{selectedProject.details.overview}</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-2">
                      🎯 Brand Requirements
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{selectedProject.details.requirements}</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-2">
                      🛠️ Engineering Solved
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{selectedProject.details.solved}</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-2">
                      💡 Design Strategy
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{selectedProject.details.strategy}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wider mb-3">
                      <Flame size={16} className="text-accent animate-pulse" /> Business Impact
                    </h4>
                    <p className="text-white text-base font-bold leading-relaxed mb-4">
                      {selectedProject.details.impact}
                    </p>
                    <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4 text-xs">
                      <div>
                        <span className="text-gray-500 block mb-1">Legacy State</span>
                        <span className="text-gray-300 font-medium leading-relaxed block">{selectedProject.details.beforeState}</span>
                      </div>
                      <div>
                        <span className="text-primary block mb-1">Redesigned State</span>
                        <span className="text-white font-semibold leading-relaxed block">{selectedProject.details.afterState}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
