"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageSquare, MapPin, Send, Check } from 'lucide-react';
import SocialsRow from './SocialsRow';

export const Contact: React.FC = () => {
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
    <section id="contact" className="relative py-28 overflow-hidden grid-bg">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary glow-sphere opacity-[0.1]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-4"
          >
            GET IN TOUCH
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Let's Create Something <span className="text-gradient-purple-blue">Exceptional</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Ready to elevate your digital footprint? Send us a message and our strategy partners will respond within one business day.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Form Panel (Left) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative w-full h-[540px] flex flex-col justify-center overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center h-full"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-green-500/20 text-green-400 flex items-center justify-center mb-6 border border-green-500/30 animate-bounce">
                      <Check size={28} strokeWidth={3} />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3">Inquiry Sent Successfully!</h3>
                    <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                      Thank you for reaching out. A senior partner from our strategy team will analyze your brand and contact you shortly.
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
                        <label htmlFor="name" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Sardar Rajab"
                          className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/5 focus:border-primary/50 text-sm text-white focus:outline-none transition-colors"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. rajab@company.com"
                          className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/5 focus:border-primary/50 text-sm text-white focus:outline-none transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="service" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Project Interest</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="px-4 py-3.5 rounded-xl bg-[#08051a] border border-white/5 focus:border-primary/50 text-sm text-white focus:outline-none transition-colors"
                      >
                        <option value="web-dev">Full Stack Website Development</option>
                        <option value="ecommerce">Ecommerce Store Setup</option>
                        <option value="ui-ux">UI/UX Designing & Branding</option>
                        <option value="branding">Company Profile & Guidelines</option>
                        <option value="app-dev">App Development (iOS/Android)</option>
                        <option value="crm">CRM Software & Dashboards</option>
                        <option value="video-editing">Video Editing & Motion Graphics</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Project Description</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your brand, requirements, goals, and timeline..."
                        className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/5 focus:border-primary/50 text-sm text-white focus:outline-none transition-colors resize-none"
                        rows={4}
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-xs font-bold uppercase tracking-widest text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all transform hover:-translate-y-0.5"
                    >
                      <span>Send Project Brief</span>
                      <Send size={12} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Business Info Panel (Right) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col gap-8 h-full"
            >
              <div className="text-left">
                <h3 className="text-lg font-bold text-white mb-2">Connect Directly</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Prefer direct correspondence? Call or email our office partners directly.
                </p>
              </div>

              {/* Direct Details list */}
              <div className="flex flex-col gap-6 text-left">
                
                {/* Email */}
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Email Our Partners</span>
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
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Call Our Office</span>
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
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Direct Support</span>
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

              {/* Map view */}
              <div className="w-full h-44 rounded-2xl overflow-hidden border border-white/10 shadow-lg relative">
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
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Follow Our Identity</span>
                <SocialsRow size={16} />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
