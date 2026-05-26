"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageSquare, CreditCard, GitBranch, Layout, Check, ShieldCheck, Globe, Send, User } from 'lucide-react';

export const EliteDashboardPreview: React.FC = () => {
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<'slack' | 'billing' | 'git' | 'figma'>('billing');

  const workspaceTabs = [
    { id: 'billing', label: 'Milestone Billing', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'slack', label: 'Slack Stream', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'git', label: 'Commit History', icon: <GitBranch className="w-4 h-4" /> },
    { id: 'figma', label: 'Figma Frame', icon: <Layout className="w-4 h-4" /> }
  ];

  return (
    <section id="collaboration" className="relative py-32 overflow-hidden bg-[#02000c] grid-bg">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-secondary glow-sphere opacity-[0.05] pointer-events-none" />

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
            WORKSPACE TRANSPARENCY
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            An Open Window into <span className="text-gradient-purple-blue">Your Project Execution</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light">
            We operate with absolute clarity. Track your design mockups, invoice payment timelines, Slack conversations, and server build logs in real-time through your dedicated Workspace Portal.
          </p>
        </div>

        {/* Cinematic Dashboard Interactive Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full glass-panel border-white/10 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 bg-white/[0.02] border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-gray-500 font-mono pl-4 border-l border-white/5 tracking-wider hidden sm:block">
                WORKSPACE: SKSCON-PROD-PORTAL
              </span>
            </div>
            
            {/* Dashboard Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              {workspaceTabs.map((tab) => {
                const isActive = tab.id === activeWorkspaceTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveWorkspaceTab(tab.id as any)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-primary to-secondary text-white border-primary/45 shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                        : 'bg-white/5 border-white/5 hover:border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Workspace Content Canvas */}
          <div className="p-8 md:p-12 min-h-[420px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: Milestone Billing */}
              {activeWorkspaceTab === 'billing' && (
                <motion.div
                  key="billing"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 text-left"
                >
                  {/* Left stats card */}
                  <div className="lg:col-span-1 flex flex-col justify-between p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                    <div>
                      <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-2">PROJECT BUDGET BALANCE</span>
                      <h4 className="text-3xl font-black text-white mb-2">$8,000</h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-light">Milestone invoicing verified per launch deliverables sign-off.</p>
                    </div>
                    <div className="mt-8 border-t border-white/5 pt-6 flex flex-col gap-2">
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Milestones Approved</span>
                        <span className="text-white font-bold">3 / 4</span>
                      </div>
                      <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                        <div className="w-[75%] h-full bg-primary rounded-full shadow-[0_0_10px_#8b5cf6]" />
                      </div>
                    </div>
                  </div>

                  {/* Right Milestones timeline */}
                  <div className="lg:col-span-2 flex flex-col gap-4">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-1">MILESTONE TRACKER</span>
                    <div className="flex flex-col gap-3">
                      
                      {/* Milestone 1 */}
                      <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                            <Check size={16} strokeWidth={3} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-white">01 - Technical Discovery Scoping</span>
                            <span className="text-[10px] text-green-400 font-medium">Completed on 12-May</span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-white">$4,000 (Paid)</span>
                      </div>

                      {/* Milestone 2 */}
                      <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                            <Check size={16} strokeWidth={3} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-white">02 - High-Fidelity UI Prototyping</span>
                            <span className="text-[10px] text-green-400 font-medium">Approved on 19-May</span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-white">Figma Approved</span>
                      </div>

                      {/* Milestone 3 */}
                      <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 animate-pulse">
                          <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                            <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-white">03 - Next.js/Tailwind Engineering Sandbox</span>
                            <span className="text-[10px] text-primary font-bold">Awaiting Final Testing</span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-white">$4,000 (Pending)</span>
                      </div>

                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: Slack Stream */}
              {activeWorkspaceTab === 'slack' && (
                <motion.div
                  key="slack"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col gap-6 text-left max-w-2xl mx-auto"
                >
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                    SLACK CHANNEL: #skscon-branding-hq
                  </span>
                  
                  <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto pr-2">
                    
                    {/* Msg 1 */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                        SE
                      </div>
                      <div className="flex flex-col bg-white/5 p-4 rounded-2xl rounded-tl-none max-w-[85%]">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-white">Sardar Rajab (Founder Partner)</span>
                          <span className="text-[9px] text-gray-500">10:42 AM</span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed font-light">
                          Our developers finished styling the dark luxury product showcase cards with glowing interactive outlines. Let us know if you approve the hover transition speeds!
                        </p>
                      </div>
                    </div>

                    {/* Msg 2 */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-xl bg-accent/20 text-accent flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                        CL
                      </div>
                      <div className="flex flex-col bg-white/5 p-4 rounded-2xl rounded-tl-none max-w-[85%]">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-white">Marcus Sterling (Client SKS)</span>
                          <span className="text-[9px] text-gray-500">10:48 AM</span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed font-light">
                          Wow! The transition timing is perfect, Sardar. The gold outlines match our brand guidelines flawlessly. Proceeding to sign off milestone 3.
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Send panel input */}
                  <div className="flex items-center gap-3 border-t border-white/5 pt-4 mt-2">
                    <input 
                      type="text" 
                      placeholder="Send message to lead partner..."
                      className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-xs text-white focus:outline-none focus:border-primary/50 transition-colors"
                      disabled
                    />
                    <button className="w-10 h-10 rounded-xl bg-primary/20 text-primary border border-primary/30 flex items-center justify-center shrink-0">
                      <Send size={14} />
                    </button>
                  </div>

                </motion.div>
              )}

              {/* TAB 3: Git Branches */}
              {activeWorkspaceTab === 'git' && (
                <motion.div
                  key="git"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col gap-6 text-left max-w-2xl mx-auto"
                >
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                    REPOSITORY COMPILES: COMPLETE-WEBSITE (MAIN)
                  </span>

                  <div className="flex flex-col gap-3 font-mono text-[11px]">
                    
                    {/* Log 1 */}
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-green-400 font-bold shrink-0">[SUCCESS]</span>
                        <span className="text-gray-300 tracking-wide line-clamp-1">commit: 582ba30 - Final premium redesign and build validation success</span>
                      </div>
                      <span className="text-gray-500 text-[10px] shrink-0">3 mins ago</span>
                    </div>

                    {/* Log 2 */}
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-green-400 font-bold shrink-0">[SUCCESS]</span>
                        <span className="text-gray-300 tracking-wide line-clamp-1">commit: 7cf1e58 - Configure vercel.json with framework and build command</span>
                      </div>
                      <span className="text-gray-500 text-[10px] shrink-0">43 mins ago</span>
                    </div>

                    {/* Log 3 */}
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-green-400 font-bold shrink-0">[SUCCESS]</span>
                        <span className="text-gray-300 tracking-wide line-clamp-1">commit: b149bcd - Migrate from Vite to Next.js structure and add vercel.json</span>
                      </div>
                      <span className="text-gray-500 text-[10px] shrink-0">1 hour ago</span>
                    </div>

                  </div>
                </motion.div>
              )}

              {/* TAB 4: Figma Embed */}
              {activeWorkspaceTab === 'figma' && (
                <motion.div
                  key="figma"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col gap-6 text-left max-w-2xl mx-auto"
                >
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block border-b border-white/5 pb-2">
                    LIVE FIGMA DRAWINGS: CORE WIREFRAMES V3
                  </span>

                  <div className="w-full h-56 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                      <Layout size={32} className="text-primary mb-3 group-hover:scale-105 transition-transform" />
                      <span className="text-xs font-bold text-white mb-1">Clickable Wireframe Layout Locked</span>
                      <p className="text-[10px] text-gray-500 max-w-xs leading-relaxed font-light">Figma cloud project is linked. High-fidelity layouts approved on 19-May by Sardar.</p>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default EliteDashboardPreview;
