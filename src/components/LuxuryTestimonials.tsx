"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const LuxuryTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "SocialEdge delivered our dashboard on time. Their engineering standards and speed optimization increased our checkout conversions by 32%.",
      author: "Marcus Sterling",
      role: "VP of Product",
      company: "Nova SaaS",
      rating: 5
    },
    {
      quote: "Our new company profile designed by SocialEdge helped us secure a $1.2M commercial construction contract. Outstanding prestige look.",
      author: "Sardar Rajab Ali Khan",
      role: "Creative Partner",
      company: "SKS Construction",
      rating: 5
    },
    {
      quote: "SocialEdge transformed our cluttered SaaS interface into an elegant, easy-to-use luxury dashboard. Our user engagement scores rose by 40%.",
      author: "Sarah Jenkins",
      role: "VP of Design",
      company: "Zenith SaaS",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[#02000c]">
      {/* Background Soft Glow Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary glow-sphere opacity-[0.05] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-white/5 text-[9px] font-bold tracking-[0.25em] text-primary uppercase mb-12"
        >
          <Sparkles size={10} className="text-accent animate-pulse" />
          PARTNER ACCREDITATIONS
        </motion.div>

        {/* Large Quote Visual */}
        <div className="relative mb-8">
          <Quote className="w-16 h-16 text-primary/10 mx-auto" />
        </div>

        {/* Testimonial Active Display */}
        <div className="min-h-[220px] flex items-center justify-center relative px-6 md:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center max-w-3xl text-center"
            >
              {/* Star Rating */}
              <div className="flex gap-1.5 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, idx) => (
                  <Star key={idx} size={14} className="text-accent fill-accent" />
                ))}
              </div>

              {/* Text Quote */}
              <blockquote className="text-xl sm:text-2xl font-light text-white leading-relaxed mb-8 tracking-wide font-sans">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </blockquote>

              {/* Client Profile details */}
              <cite className="not-italic flex flex-col items-center">
                <span className="text-sm font-bold text-white tracking-wide">
                  {testimonials[activeIndex].author}
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono mt-1">
                  {testimonials[activeIndex].role} &bull; <strong className="text-primary">{testimonials[activeIndex].company}</strong>
                </span>
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dot Selectors & Chevrons */}
        <div className="flex items-center justify-center gap-6 mt-12 border-t border-white/5 pt-8 max-w-sm mx-auto">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-all"
            aria-label="Previous Accreditation"
          >
            <ChevronLeft size={16} />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex 
                    ? 'w-6 bg-primary' 
                    : 'w-1.5 bg-white/15'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-all"
            aria-label="Next Accreditation"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default LuxuryTestimonials;
