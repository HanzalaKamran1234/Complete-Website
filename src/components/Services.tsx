"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/services';
import { Code, BookOpen, Smartphone, ShieldCheck, Paintbrush, Video, ArrowRight, Check } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'web-dev': <Code className="w-6 h-6" />,
  'branding': <BookOpen className="w-6 h-6" />,
  'app-dev': <Smartphone className="w-6 h-6" />,
  'crm': <ShieldCheck className="w-6 h-6" />,
  'ui-ux': <Paintbrush className="w-6 h-6" />,
  'video-editing': <Video className="w-6 h-6" />
};

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);

  return (
    <section id="services" className="relative py-28 overflow-hidden grid-bg">
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-primary glow-sphere opacity-[0.1]" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-4"
          >
            OUR EXPERTISE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Empowering Enterprises with <span className="text-gradient-purple-blue">Elite Capabilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            We combine high-end software development with target-driven digital marketing to help your business build prestige and scale exponentially.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between h-[420px] relative group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div>
                {/* Icon row */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-secondary p-[1px] flex items-center justify-center text-white mb-6 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
                  <div className="w-full h-full bg-background rounded-[15px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    {iconMap[service.slug] || <Code />}
                  </div>
                </div>

                {/* Service title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Tagline */}
                <p className="text-xs text-accent font-semibold mb-4 uppercase tracking-wider">
                  {service.tagline}
                </p>

                {/* Description snippet */}
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Bottom Row */}
              <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-6">
                <span className="text-xs text-gray-500 font-medium">Packages from {service.packages[0]?.price || 'Contact'}</span>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-primary transition-all duration-300">
                  View Details
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
            onClick={() => setSelectedService(null)}
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
                onClick={() => setSelectedService(null)}
              >
                ✕
              </button>

              {/* Service Details Header */}
              <div className="flex items-start gap-6 border-b border-white/5 pb-8 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-secondary p-[2px] flex items-center justify-center text-white shrink-0">
                  <div className="w-full h-full bg-background rounded-[14px] flex items-center justify-center">
                    {iconMap[selectedService.slug] || <Code className="w-8 h-8" />}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">{selectedService.title}</h3>
                  <p className="text-sm text-accent font-bold uppercase tracking-wider">{selectedService.tagline}</p>
                </div>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left Column: Description & Features */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Service Overview</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{selectedService.description}</p>
                  
                  <h4 className="text-lg font-bold text-white mb-4">Key Deliverables</h4>
                  <ul className="flex flex-col gap-3">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                        <Check size={16} className="text-primary mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: Dynamic Pricing Packages */}
                <div className="flex flex-col justify-center">
                  <h4 className="text-lg font-bold text-white mb-6">Service Packages</h4>
                  <div className="flex flex-col gap-6">
                    {selectedService.packages.map((pkg, idx) => (
                      <div
                        key={idx}
                        className={`p-6 rounded-2xl border transition-all ${
                          pkg.isPopular
                            ? 'bg-gradient-to-tr from-primary/10 to-secondary/10 border-primary/40 shadow-lg'
                            : 'bg-white/5 border-white/5 hover:border-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-white">{pkg.name}</span>
                            {pkg.isPopular && (
                              <span className="text-[10px] bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                                Popular
                              </span>
                            )}
                          </div>
                          <span className="text-xl font-extrabold text-white">{pkg.price}</span>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-400 border-t border-white/5 pt-4 mt-4">
                          <span>Delivery: <strong className="text-white">{pkg.delivery}</strong></span>
                          <span>Revisions: <strong className="text-white">{pkg.revisions}</strong></span>
                        </div>
                      </div>
                    ))}
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

export default Services;
