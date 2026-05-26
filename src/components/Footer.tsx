"use client";

import React from 'react';
import SocialsRow from './SocialsRow';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Background Soft Glow Blobs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary glow-sphere opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start text-left">
          
          {/* Logo & Description */}
          <div className="md:col-span-6 flex flex-col items-start gap-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary p-[1px] flex items-center justify-center text-white">
                <div className="w-full h-full bg-background rounded-[7px] flex items-center justify-center">
                  <svg viewBox="0 0 100 60" fill="none" className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 15H30M15 25H25M15 35H25" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                    <path d="M42 15V45H75V15H46" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <span className="font-extrabold text-base tracking-wider text-white">SOCIALEDGE</span>
            </a>
            <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
              We design and engineer bespoke React/Next.js architectures, software dashboards, mobile applications, and luxury brand guidelines for elite companies seeking exponential scale.
            </p>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sitemap Links</span>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-500">
              <li><a href="#home" className="hover:text-white transition-colors">Home Landing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Capabilities</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#collaboration" className="hover:text-white transition-colors">Milestones & Workflow</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Who We Are</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Connect Globally</span>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-500">
              <li><a href="mailto:14starssocaileedge@gmail.com" className="hover:text-white transition-colors">14starssocaileedge@gmail.com</a></li>
              <li><a href="tel:+923117501630" className="hover:text-white transition-colors">+92 311 7501630</a></li>
              <li className="text-gray-600 font-mono">Islamabad, Pakistan</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-600">
            &copy; {currentYear} SocialEdge (SMC-Private) Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <SocialsRow size={14} />
            <span className="text-[10px] text-gray-600 font-mono">Islamabad HQ</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
