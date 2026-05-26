"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/services';
import { Sparkles, ArrowRight, Check, Code, Layers, Smartphone, Database, CheckCircle } from 'lucide-react';

export const InteractiveCanvas: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('web-dev');

  const selectedService = servicesData.find((s) => s.slug === activeTab) || servicesData[0];

  const categoryIcons: Record<string, React.ReactNode> = {
    'web-dev': <Code className="w-5 h-5" />,
    'branding': <Layers className="w-5 h-5" />,
    'app-dev': <Smartphone className="w-5 h-5" />,
    'crm': <Database className="w-5 h-5" />
  };

  // Only present the main 4 services on the homepage canvas to keep it highly focused and luxury
  const homepageServices = servicesData.filter((s) => ['web-dev', 'branding', 'app-dev', 'crm'].includes(s.slug));

  return (
    <section id="services" className="relative py-32 overflow-hidden bg-[#030014]">
      {/* Background radial soft light */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-primary glow-sphere opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-white/5 text-[9px] font-bold tracking-[0.25em] text-primary uppercase mb-4"
          >
            <Sparkles size={10} className="text-accent animate-pulse" />
            ELITE SERVICE CANVAS
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Bespoke Capabilities for <span className="text-gradient-purple-blue">High-Ticket Brands</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light">
            We don't build generic pages. We architect production-grade software applications and establish memorable digital footprints that position your brand at the absolute top of its market.
          </p>
        </div>

        {/* Master Canvas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Vertical Interactive Menu (Tab selectors) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {homepageServices.map((service) => {
              const isActive = service.slug === activeTab;
              return (
                <button
                  key={service.slug}
                  onClick={() => setActiveTab(service.slug)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 relative flex items-center justify-between group overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/45 shadow-lg shadow-primary/5'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                      isActive 
                        ? 'bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]' 
                        : 'bg-white/5 border-white/5 text-gray-500 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/10'
                    }`}>
                      {categoryIcons[service.slug] || <Code className="w-5 h-5" />}
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-sm font-bold transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                        {service.title.split(' ')[0]} {service.title.split(' ')[1] || ''}
                      </span>
                      <span className="text-[9px] text-gray-500 font-mono tracking-wider mt-0.5 uppercase">
                        {service.tagline.slice(0, 30)}...
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={16} className={`text-gray-500 transition-all ${isActive ? 'text-white translate-x-1' : 'group-hover:text-white group-hover:translate-x-0.5'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Specifications Frame */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full glass-panel border-white/10 rounded-3xl p-8 md:p-12 text-left relative overflow-hidden flex flex-col justify-between"
              >
                {/* Visual glow layer inside specifications */}
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-secondary glow-sphere opacity-[0.08]" />

                <div>
                  {/* Category tag & Pricing */}
                  <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">CAPABILITY ARCHITECTURE</span>
                      <h3 className="text-xl md:text-2xl font-extrabold text-white">{selectedService.title}</h3>
                    </div>
                    <div className="flex flex-col items-end shrink-0">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Standard Price</span>
                      <span className="text-2xl font-black text-white text-gradient-purple-blue">{selectedService.packages[1]?.price || '$700'}</span>
                    </div>
                  </div>

                  {/* Tagline & Specifications list */}
                  <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-6">&ldquo;{selectedService.tagline}&rdquo;</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">{selectedService.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                        <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-xs text-gray-300 leading-relaxed font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workflow timeline step */}
                <div className="border-t border-white/5 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-mono font-bold">01</div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest">Immediate Milestone</span>
                      <span className="text-xs font-bold text-white">{selectedService.process[0]?.title || 'Discovery'}</span>
                    </div>
                  </div>
                  <a href="#contact" className="relative group overflow-hidden rounded-xl bg-white/5 border border-white/10 px-5 py-3 flex items-center gap-2 hover:bg-white/10 transition-all duration-300">
                    <span className="text-xs font-bold text-white">Acquire Consultation</span>
                    <ArrowRight size={14} className="text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InteractiveCanvas;
