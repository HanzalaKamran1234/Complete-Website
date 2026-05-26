"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, HelpCircle, ArrowRight, ShieldCheck, Flame, Compass, Target, Code, Check } from 'lucide-react';

export const CreativeProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Plan',
      price: '50% Upfront',
      icon: <Compass className="w-5 h-5" />,
      desc: 'Technical audits, architecture outlines, competitor scoping, and detailed package requirements mapping.',
      details: [
        'Complete repository technical auditing',
        'Competitor workflow evaluation studies',
        'Custom roadmap outline & scoping layout document'
      ]
    },
    {
      step: '02',
      title: 'Design Approval',
      price: 'Prototype Lock-in',
      icon: <Target className="w-5 h-5" />,
      desc: 'High-fidelity Figma layouts, interactive clickable paths, custom style guide assets, and typography definitions.',
      details: [
        'Clickable cloud preview links in Figma',
        'Palette hex codes & branding synchronization',
        'Premium spacing rhythm audit checklist'
      ]
    },
    {
      step: '03',
      title: 'Milestone Checks',
      price: 'Code Sign-off',
      icon: <Code className="w-5 h-5" />,
      desc: 'Modular React & TypeScript development sandbox, live staging build reviews, page speed audits, and security checks.',
      details: [
        'Bespoke Next.js clean code deployment',
        'Google Core Web Vitals sub-second speed optimization',
        'Rigorous component-level unit testing verification'
      ]
    },
    {
      step: '04',
      title: 'Handoff & Launch',
      price: 'Final 50%',
      icon: <ShieldCheck className="w-5 h-5" />,
      desc: 'Production server configurations, DNS domain mapping setups, automated loading speed checks, and file transfers.',
      details: [
        'DNS records pointing and secure SSL locks',
        'Vercel instant CI/CD deployment pipeline integrations',
        'Full administrative source files & credentials handoff'
      ]
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-[#030014]">
      {/* Glow spot */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary glow-sphere opacity-[0.06] pointer-events-none" />

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
            ENGINEERING TIMELINE
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Our Elite Redesign <span className="text-gradient-purple-blue">Execution Blueprint</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light">
            We operate with surgical precision. Follow our strict milestone-based timeline from technical scoping through to production server launch.
          </p>
        </div>

        {/* Interactive Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Vertical Steps Menus */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {processSteps.map((item, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 relative flex items-center justify-between group overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/45 shadow-lg'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <span className={`text-2xl font-black font-mono leading-none transition-colors ${isActive ? 'text-primary' : 'text-gray-600 group-hover:text-white'}`}>
                      {item.step}
                    </span>
                    <div className="flex flex-col">
                      <span className={`text-sm font-bold transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                        {item.title}
                      </span>
                      <span className="text-[9px] text-gray-500 font-mono tracking-wider mt-0.5">
                        {item.price}
                      </span>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${
                    isActive
                      ? 'bg-primary/20 border-primary text-white'
                      : 'bg-white/5 border-white/5 text-gray-500 group-hover:text-white'
                  }`}>
                    {item.icon}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Process Details Box */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full glass-panel border-white/10 rounded-3xl p-8 md:p-12 text-left relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">MILESTONE DETAILS</span>
                      <h3 className="text-xl md:text-2xl font-extrabold text-white">{processSteps[activeStep].title}</h3>
                    </div>
                    <span className="text-xs bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                      {processSteps[activeStep].price}
                    </span>
                  </div>

                  {/* Bullet points & Scopes */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                    {processSteps[activeStep].desc}
                  </p>
                  
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Milestone Checklist</h4>
                  <ul className="flex flex-col gap-3.5">
                    {processSteps[activeStep].details.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-gray-300 leading-relaxed">
                        <Check size={14} className="text-primary mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/5 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <Flame size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest">Immediate Impact</span>
                      <span className="text-xs font-bold text-white">Full Transparency</span>
                    </div>
                  </div>
                  <a href="#contact" className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary p-[1px] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all transform hover:-translate-y-0.5">
                    <div className="bg-[#030014] rounded-[11px] px-5 py-3 flex items-center gap-2 group-hover:bg-transparent transition-colors">
                      <span className="text-xs font-bold text-white">Initiate Scoping</span>
                      <ArrowRight size={14} className="text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                    </div>
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

export default CreativeProcess;
