"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Sparkles, MapPin, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const bioBullets = [
    { icon: '📈', text: 'Grow Your Business Digitally' },
    { icon: '🚀', text: 'Digital Marketing Experts' },
    { icon: '🎯', text: 'Ads | Branding | SEO | Social Media' },
    { icon: '💡', text: 'Website design & Engineering' }
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden grid-bg">
      <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-secondary glow-sphere opacity-[0.08]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-4"
          >
            WHO WE ARE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Empowering Enterprises Globally from <span className="text-gradient-purple-blue">Islamabad</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Learn about our team, our visionaries, and how we bring elite visual prestige and engineering standards to our partners.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Story & Writeup */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4 text-xs font-semibold text-accent uppercase tracking-widest"
            >
              <Sparkles size={12} className="animate-spin" style={{ animationDuration: '4s' }} /> 14Stars SocialEdge (SMC-Pvt) Limited
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl font-extrabold text-white mb-6"
            >
              Visionary Brand Identity & <br />
              <span className="text-gradient-purple-blue">Elite Software Architectures</span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-gray-400 leading-relaxed mb-6"
            >
              We are a premier digital solutions agency based in Islamabad, specializing in high-performance web engineering (full-stack, custom CMS, e-commerce) and target-driven digital marketing (corporate branding, SEO campaigns, targeted advertisements). Our ultimate purpose is to connect corporate brands with high-value audiences and secure digital authority.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 mb-8 text-sm text-gray-300 leading-relaxed relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-gradient-to-b from-primary to-secondary" />
              Led by visionary founders including <strong className="text-white">Sardar Rajab Ali Khan</strong>, we develop bespokeresults-driven pipelines—from drafting luxury corporate guidelines to executing advanced lead generation setups—for high-ticket fields like real estate and enterprise retail.
            </motion.div>

            {/* Bullets grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {bioBullets.map((bullet, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 + 0.3 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <span className="text-lg">{bullet.icon}</span>
                  <span className="text-xs font-bold text-gray-300 uppercase tracking-wide">{bullet.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Social Brand Card Mockup */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[380px] glass-panel border-white/10 rounded-3xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative group overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-bold text-white text-base shadow-inner shrink-0">
                  14S
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-extrabold text-sm text-white tracking-wide">14Star SocialEdge</span>
                  <span className="text-[10px] text-gray-400 font-mono">@14starssocialedgepvtltd</span>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-2 border-y border-white/5 py-4 mb-6 text-center">
                <div>
                  <div className="text-lg font-black text-white">17</div>
                  <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Posts</div>
                </div>
                <div>
                  <div className="text-lg font-black text-white text-gradient-purple-blue">37</div>
                  <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Followers</div>
                </div>
                <div>
                  <div className="text-lg font-black text-white">41</div>
                  <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Following</div>
                </div>
              </div>

              {/* Bio Details */}
              <div className="flex flex-col gap-3 text-left mb-8">
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 size={14} className="text-primary" />
                  <span>Grow Your Business Digitally</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 size={14} className="text-accent" />
                  <span>Digital Marketing Experts</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 size={14} className="text-primary" />
                  <span>Ads | Branding | SEO | Social Media</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 size={14} className="text-accent" />
                  <span>Website design & Engineering</span>
                </div>
                
                {/* Meta details */}
                <div className="flex items-center gap-2.5 text-[10px] text-gray-500 font-medium border-t border-white/5 pt-4 mt-2">
                  <MapPin size={12} />
                  <span>Islamabad, Pakistan</span>
                </div>
                <div className="flex items-center gap-2.5 text-[10px] text-primary font-bold">
                  <Globe size={12} />
                  <a href="http://14staressocialedge.steslights.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    14staressocialedge.steslights.com
                  </a>
                </div>
              </div>

              {/* Consultation CTA */}
              <a href="#contact" className="block w-full">
                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-xs font-bold uppercase tracking-widest text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all transform hover:-translate-y-0.5">
                  📩 Book Your Consultation
                </button>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
