"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, Sparkles, Play, Globe, Shield, Target, Cpu } from 'lucide-react';

export const CinematicHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Scroll parallax effects for layered depth
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const yVisual = useTransform(scrollY, [0, 500], [0, -50]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  // Spring animations for magnetic card effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.15);
    mouseY.set(y * 0.15);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredIndex(null);
  };

  const featureCards = [
    {
      title: "Generative AI Systems",
      desc: "Custom intelligent models, automated cognitive agent pipelines, and secure LLM data integrations.",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      tag: "INTELLIGENT"
    },
    {
      title: "Obsidian Architectures",
      desc: "Sub-second Next.js layouts, secure serverless functions, and robust databases configured to scale.",
      icon: <Target className="w-5 h-5 text-accent" />,
      tag: "PERFORMANCE"
    },
    {
      title: "Cinematic Visuals",
      desc: "Awwwards-standard luxury UI design systems, branding guides, and high-fidelity graphics.",
      icon: <Sparkles className="w-5 h-5 text-secondary" />,
      tag: "LUXURY"
    }
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-[#02000d]"
    >
      {/* Cinematic Glowing Background Beams */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[300px] bg-gradient-to-r from-primary/10 to-transparent blur-[140px] rotate-12" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[400px] bg-gradient-to-l from-secondary/10 to-transparent blur-[160px] -rotate-12" />
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      {/* Grid Pattern with Glow spots */}
      <div className="absolute inset-0 z-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Big typography */}
          <motion.div 
            style={{ y: yText, opacity: opacityText }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            
            {/* Pill Accent */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-white/5 text-[9px] font-bold tracking-[0.25em] text-primary uppercase mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              THE FUTURE OF LUXURY ENGINEERING
            </motion.div>

            {/* Cinematic Large Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8"
            >
              We Architect <br />
              <span className="text-gradient-purple-blue">Prestige Digital</span> <br />
              Experiences.
            </motion.h1>

            {/* Cinematic Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed font-light"
            >
              SocialEdge is an elite digital engineering studio. We build custom Next.js architectures, secure analytical software, and luxury brand design assets for global enterprises that settle for nothing less than excellence.
            </motion.p>

            {/* Interactive Call-to-actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-5 w-full sm:w-auto mb-16"
            >
              <a href="#portfolio" className="relative group overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-secondary p-[1px] hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-500">
                <div className="bg-[#040114] rounded-[15px] px-8 py-4.5 flex items-center gap-3 group-hover:bg-transparent transition-colors duration-500">
                  <span className="text-sm font-bold tracking-wide text-white">Explore Prestige Portfolio</span>
                  <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
              <a href="#contact" className="relative group overflow-hidden rounded-2xl p-[1px]">
                <div className="glass-panel border-white/5 hover:border-white/10 rounded-[15px] px-8 py-4.5 flex items-center gap-3 hover:bg-white/5 transition-all">
                  <Play size={12} className="text-accent fill-accent" />
                  <span className="text-sm font-bold tracking-wide text-white">Book Strategy Call</span>
                </div>
              </a>
            </motion.div>

            {/* Mini Accolade Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex items-center gap-8 border-t border-white/5 pt-8 w-full"
            >
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-sm">★</span>
                ))}
              </div>
              <span className="text-xs text-gray-500 tracking-wider font-mono">AWWWARDS-NOMINATED UX STANDARDS</span>
            </motion.div>

          </motion.div>

          {/* Right Column: Masterpiece Visual Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* visual grid background */}
            <motion.div 
              style={{ x: springX, y: springY }}
              className="relative w-full aspect-square max-w-[480px] flex flex-col gap-6"
            >
              {/* Subtle visual orbit */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none z-0" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-white/5 border-dashed rounded-full pointer-events-none z-0" />

              {featureCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.15 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className={`glass-panel p-6 rounded-2xl flex flex-col items-start border-white/5 text-left relative overflow-hidden transition-all duration-500 cursor-pointer ${
                    hoveredIndex === idx 
                      ? 'border-primary/45 shadow-[0_20px_50px_rgba(139,92,246,0.15)] translate-x-4 bg-gradient-to-r from-primary/5 via-transparent to-transparent' 
                      : 'hover:border-white/10'
                  }`}
                >
                  {/* Decorative glowing gradient inside card */}
                  {hoveredIndex === idx && (
                    <motion.div 
                      layoutId="glow"
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" 
                    />
                  )}

                  <div className="relative z-10 w-full flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <span className="text-[8px] font-bold text-gray-500 font-mono tracking-widest bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="relative z-10 text-base font-bold text-white mb-2">{card.title}</h3>
                  <p className="relative z-10 text-xs text-gray-400 leading-relaxed font-light">{card.desc}</p>
                </motion.div>
              ))}

              {/* Floating Orbit Stat Widget */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-6 glass-panel px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border-white/15 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                  <Globe size={14} className="animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest font-mono">Headquarters</span>
                  <span className="text-xs font-black text-white">Islamabad HQ</span>
                </div>
              </motion.div>

              {/* Floating Orbit Stat Widget 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 glass-panel px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border-white/15 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <Shield size={14} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest font-mono">Compliance</span>
                  <span className="text-xs font-black text-white">Secure Audited</span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CinematicHero;
