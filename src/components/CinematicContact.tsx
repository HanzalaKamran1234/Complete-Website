"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Mail, Phone, MessageSquare, MapPin, Send, Check } from 'lucide-react';
import SocialsRow from './SocialsRow';

export const CinematicContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'web-dev',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', service: 'web-dev', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-[#030014] grid-bg">
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-primary glow-sphere opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-white/5 text-[9px] font-bold tracking-[0.25em] text-primary uppercase mb-4"
          >
            <Sparkles size={10} className="text-accent animate-pulse" />
            CONNECT
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Initiate Your Brand <span className="text-gradient-purple-blue">Transformation</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light">
            Ready to secure digital prestige? Send us your brief, and a senior strategist will analyze your brand and outline a technical scope report.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Premium Contact Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative w-full h-[540px] flex flex-col justify-center overflow-hidden text-left"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center h-full"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-green-500/20 text-green-400 flex items-center justify-center mb-6 border border-green-500/30 animate-bounce">
                      <Check size={28} strokeWidth={3} />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3">Inquiry Sent!</h3>
                    <p className="text-xs text-gray-400 max-w-xs leading-relaxed font-light">
                      Thank you. A senior strategy partner from our Islamabad office will evaluate your digital goals and contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Sardar Rajab"
                          className="px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/5 focus:border-primary/50 text-xs text-white focus:outline-none transition-all"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="rajab@company.com"
                          className="px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/5 focus:border-primary/50 text-xs text-white focus:outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="service" className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Project Interest</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="px-4 py-3.5 rounded-xl bg-[#030014] border border-white/5 focus:border-primary/50 text-xs text-white focus:outline-none transition-all"
                      >
                        <option value="web-dev">Full Stack Website Development</option>
                        <option value="ecommerce">Ecommerce Store Solution</option>
                        <option value="ui-ux">UI/UX Designing & Branding</option>
                        <option value="crm">CRM Software & Dashboards</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Project Brief Description</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your brand scope, specifications, targets, and timeline..."
                        className="px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/5 focus:border-primary/50 text-xs text-white focus:outline-none transition-all resize-none"
                        rows={4}
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-xs font-bold uppercase tracking-widest text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>Send Project Brief</span>
                      <Send size={12} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Column: direct connect details & interactive map */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col gap-8 h-full text-left"
            >
              <div className="flex flex-col gap-6">
                
                {/* Email */}
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Email Partners</span>
                    <a href="mailto:14starssocaileedge@gmail.com" className="text-sm font-bold text-white hover:text-primary transition-colors">
                      14starssocaileedge@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Office Hotline</span>
                    <a href="tel:+923117501630" className="text-sm font-bold text-white hover:text-accent transition-colors">
                      +92 311 7501630
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                    <MessageSquare size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">WhatsApp Direct</span>
                    <a href="https://wa.me/923117501630" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-green-400 hover:underline">
                      Message on WhatsApp &rarr;
                    </a>
                  </div>
                </div>

                {/* HQ Address */}
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Headquarters</span>
                    <span className="text-sm font-bold text-white leading-relaxed">
                      Islamabad, Pakistan
                    </span>
                  </div>
                </div>

              </div>

              {/* Map panel */}
              <div className="w-full h-44 rounded-2xl overflow-hidden border border-white/10 shadow-lg relative shrink-0">
                <iframe
                  title="SocialEdge Islamabad Headquarters Map"
                  src="https://maps.google.com/maps?q=Islamabad,%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="border-t border-white/5 pt-6 flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">Islamabad HQ</span>
                <SocialsRow size={16} />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CinematicContact;
