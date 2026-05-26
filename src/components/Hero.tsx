"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Sparkles, Shield, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden grid-bg">
      {/* Background Soft Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary glow-sphere opacity-[0.2]" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-secondary glow-sphere opacity-[0.15]" />
      <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-accent glow-sphere opacity-[0.1]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-white/10 text-xs font-semibold tracking-widest text-primary uppercase mb-6"
            >
              <Sparkles size={12} className="text-accent animate-pulse" />
              ELITE DIGITAL PARTNER
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
            >
              Engineering <span className="text-gradient-purple-blue">Premium</span> Digital Solutions for High-End Brands
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed"
            >
              We deliver bespoke web architectures, custom digital platforms, and luxury brand design assets tailored to scale enterprise influence and grow online credibility.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12 w-full sm:w-auto"
            >
              <a href="#portfolio" className="flex-1 sm:flex-none">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:-translate-y-0.5">
                  Explore Portfolio
                  <ArrowRight size={18} />
                </button>
              </a>
              <a href="#contact" className="flex-1 sm:flex-none">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 glass-panel border-white/10 hover:border-primary/50 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  Start Consultation
                </button>
              </a>
            </motion.div>

            {/* Trust and Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 border-t border-white/5 pt-8 w-full"
            >
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Trusted Globally</span>
                <span className="text-sm font-medium text-gray-300">Empowering Industry Leaders</span>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-white text-gradient-purple-blue">99%</span>
                  <span className="text-xs text-gray-400">Retention Rate</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-white text-gradient-gold">150+</span>
                  <span className="text-xs text-gray-400">Deployments</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-square max-w-[450px]"
            >
              {/* Gold Luxury Lantern SVG element */}
              <div className="absolute -top-10 -left-10 w-24 h-24 text-accent/20 animate-bounce" style={{ animationDuration: '6s' }}>
                <svg viewBox="0 0 100 120" fill="none" className="w-full h-full text-accent" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 20C45 38 30 48 30 65C30 80 38 90 50 90C62 90 70 80 70 65C70 48 55 38 50 20Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M50 35C47 48 38 55 38 65C38 75 43 80 50 80C57 80 62 75 62 65C62 55 53 48 50 35Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                  <line x1="50" y1="20" x2="50" y2="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
              </div>

              {/* Central Premium Glassmorphic Portal Mockup */}
              <div className="w-full h-full rounded-3xl glass-panel p-6 shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-white/10 flex flex-col relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Browser bar */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="px-4 py-1 rounded-lg bg-white/5 text-[10px] text-gray-500 font-mono tracking-wide">
                    socialedge.agency/workspace
                  </div>
                </div>

                {/* Simulated Content */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="h-6 w-2/3 bg-white/5 rounded-lg" />
                  <div className="h-24 bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/5 rounded-xl p-4 flex flex-col justify-between">
                    <div className="h-4 w-1/3 bg-white/10 rounded-lg" />
                    <div className="flex items-center justify-between">
                      <div className="h-6 w-1/2 bg-white/10 rounded-lg" />
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-bold">SE</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-white/5 rounded-xl border border-white/5 p-3 flex flex-col justify-between">
                      <div className="h-3 w-1/2 bg-white/10 rounded-lg" />
                      <div className="h-4 w-3/4 bg-primary/20 rounded-lg" />
                    </div>
                    <div className="h-20 bg-white/5 rounded-xl border border-white/5 p-3 flex flex-col justify-between">
                      <div className="h-3 w-1/2 bg-white/10 rounded-lg" />
                      <div className="h-4 w-3/4 bg-secondary/20 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              {/* Card 1: Top-Left */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 glass-panel px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border-white/15"
              >
                <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <Star size={16} fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-medium">Retention</span>
                  <span className="text-sm font-bold text-white">99% Elite</span>
                </div>
              </motion.div>

              {/* Card 2: Bottom-Right */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -right-6 glass-panel px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border-white/15"
              >
                <div className="w-8 h-8 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                  <TrendingUp size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-medium">Bespoke Builds</span>
                  <span className="text-sm font-bold text-white">150+ Audits</span>
                </div>
              </motion.div>

              {/* Card 3: Top-Right */}
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-1/2 -right-8 -translate-y-1/2 glass-panel px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border-white/15 hidden sm:flex"
              >
                <div className="w-8 h-8 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                  <Shield size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-medium">Security</span>
                  <span className="text-sm font-bold text-white">Verified</span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
