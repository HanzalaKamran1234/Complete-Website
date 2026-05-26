"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import SocialsRow from './SocialsRow';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Invoices & Workflow', href: '#collaboration' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 px-4 md:px-8' 
            : 'py-6 px-4 md:px-12'
        }`}
      >
        <div className={`max-w-7xl mx-auto flex items-center justify-between rounded-2xl transition-all duration-500 ${
          isScrolled 
            ? 'glass-panel px-6 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/10' 
            : 'px-4 py-2 border-transparent'
        }`}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-secondary p-[2px]">
              <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center transition-all duration-300 group-hover:bg-transparent">
                <svg viewBox="0 0 100 60" fill="none" className="w-6 h-6 text-white group-hover:scale-110 transition-all duration-300" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 15H30M15 25H25M15 35H25" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  <path d="M42 15V45H75V15H46" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="50" y="25" width="12" height="10" stroke="currentColor" strokeWidth="4" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-wider text-white group-hover:text-primary transition-all duration-300">SOCIALEDGE</span>
              <span className="text-[8px] font-medium tracking-widest text-gray-400 group-hover:text-white transition-all duration-300 uppercase">SMC-Pvt Limited</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Socials */}
          <div className="hidden lg:flex items-center gap-6">
            <SocialsRow className="border-r border-white/10 pr-6" />
            <a href="#contact" className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary p-[1px] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-background rounded-[11px] px-5 py-2.5 flex items-center gap-2 group-hover:bg-transparent transition-colors duration-300">
                <span className="text-sm font-semibold text-white">Get in Touch</span>
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
            </a>
          </div>

          {/* Mobile Hamburg Toggle */}
          <button 
            className="lg:hidden p-2 rounded-xl glass-panel text-white hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/90 backdrop-blur-lg lg:hidden flex flex-col justify-center px-6 py-12"
          >
            <div className="flex flex-col gap-6 max-w-md mx-auto w-full items-center text-center">
              {navLinks.map((link, idx) => (
                <motion.a 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.label} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-gray-200 hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full pt-6 border-t border-white/10 flex flex-col items-center gap-6"
              >
                <SocialsRow size={22} />
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
                >
                  📩 Free Consultation
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
