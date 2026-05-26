"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const TrustedBy: React.FC = () => {
  const logos = [
    {
      name: 'TECHCORP',
      svg: (
        <svg viewBox="0 0 120 40" fill="none" className="h-6 opacity-40 hover:opacity-100 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="10" width="20" height="20" rx="4" fill="currentColor" />
          <circle cx="25" cy="20" r="6" fill="#8b5cf6" />
          <text x="45" y="26" fontFamily="sans-serif" fontWeight="700" fontSize="12" fill="currentColor" letterSpacing="1">TECHCORP</text>
        </svg>
      )
    },
    {
      name: 'ALPHA',
      svg: (
        <svg viewBox="0 0 130 40" fill="none" className="h-6 opacity-40 hover:opacity-100 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 30L25 10L40 30H10Z" fill="currentColor" />
          <path d="M20 22H30" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
          <text x="48" y="26" fontFamily="sans-serif" fontWeight="700" fontSize="12" fill="currentColor" letterSpacing="1">ALPHA</text>
        </svg>
      )
    },
    {
      name: 'ZENITH',
      svg: (
        <svg viewBox="0 0 110 40" fill="none" className="h-6 opacity-40 hover:opacity-100 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10H30L15 26H30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="33" cy="12" r="4" fill="#8b5cf6" />
          <text x="45" y="26" fontFamily="sans-serif" fontWeight="700" fontSize="12" fill="currentColor" letterSpacing="1">ZENITH</text>
        </svg>
      )
    },
    {
      name: 'FUTURELAB',
      svg: (
        <svg viewBox="0 0 120 40" fill="none" className="h-6 opacity-40 hover:opacity-100 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="3" />
          <circle cx="20" cy="20" r="4" fill="#f59e0b" />
          <text x="40" y="26" fontFamily="sans-serif" fontWeight="700" fontSize="12" fill="currentColor" letterSpacing="1">FUTURELAB</text>
        </svg>
      )
    },
    {
      name: 'APEX',
      svg: (
        <svg viewBox="0 0 115 40" fill="none" className="h-6 opacity-40 hover:opacity-100 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 30V10L20 20L30 10V30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 28V32" stroke="#8b5cf6" strokeWidth="3" />
          <text x="40" y="26" fontFamily="sans-serif" fontWeight="700" fontSize="12" fill="currentColor" letterSpacing="1">APEX</text>
        </svg>
      )
    },
    {
      name: 'VERTEX',
      svg: (
        <svg viewBox="0 0 110 40" fill="none" className="h-6 opacity-40 hover:opacity-100 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10L20 30L30 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <circle cx="20" cy="30" r="3" fill="#f59e0b" />
          <text x="40" y="26" fontFamily="sans-serif" fontWeight="700" fontSize="12" fill="currentColor" letterSpacing="1">VERTEX</text>
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-12 border-y border-white/5 bg-background/50 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mb-8">
          Empowering Leading Brands Worldwide
        </span>
        
        {/* Logos container */}
        <div className="w-full overflow-hidden relative">
          {/* Subtle gradient fades on edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Double content row for infinite scroll effect */}
          <div className="flex gap-16 items-center justify-around flex-wrap md:flex-nowrap">
            {logos.map((logo, idx) => (
              <div key={idx} className="text-gray-400 flex items-center justify-center min-w-[120px] transition-transform hover:scale-105 duration-300">
                {logo.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
