"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, CreditCard, Shield, Clock, HelpCircle } from 'lucide-react';

export const InvoicesCollaboration: React.FC = () => {
  const collaborationCards = [
    {
      title: 'Interactive Client Spaces',
      description: 'Access direct project Slack channels, Figma preview frames, and real-time development URLs to trace designs and code branches.',
      icon: <Users className="w-5 h-5 text-primary" />
    },
    {
      title: 'Transparent Milestone Billing',
      description: 'Structured payment milestones tied directly to approved design prototypes and tested code checkouts, with zero hidden fees.',
      icon: <CreditCard className="w-5 h-5 text-accent" />
    },
    {
      title: 'Automated Status Portal',
      description: 'Log in to trace milestone completion dates, download PDF invoices, view upcoming tasks, and review technical documentation.',
      icon: <Shield className="w-5 h-5 text-secondary" />
    },
    {
      title: '24/7 Dedicated Support',
      description: 'Enjoy direct communication lines with your senior lead engineer and designer to resolve issues or iterate plans instantly.',
      icon: <Clock className="w-5 h-5 text-white" />
    }
  ];

  const timelineSteps = [
    {
      step: '01',
      title: 'Discovery & Plan',
      price: '50% Upfront',
      description: 'Technical audits, architecture outlines, competitor scoping, and detailed package requirements mapping.'
    },
    {
      step: '02',
      title: 'Design Approval',
      price: 'Prototype Approval',
      description: 'High-fidelity Figma layouts, interactive clickable paths, and typography style guidelines lock-in.'
    },
    {
      step: '03',
      title: 'Milestone Checks',
      price: 'Code Sign-off',
      description: 'Modular React & TypeScript development sandbox, live build reviews, speed optimizations, and security audits.'
    },
    {
      step: '04',
      title: 'Handoff & Launch',
      price: 'Final 50%',
      description: 'Server configuration deployment, domain mapping setup, automated monitoring hooks, and files transfer.'
    }
  ];

  return (
    <section id="collaboration" className="relative py-28 overflow-hidden grid-bg">
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-primary glow-sphere opacity-[0.08]" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-4"
          >
            COLLABORATION WORKFLOW
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Transparent Invoicing & <span className="text-gradient-purple-blue">Seamless Execution</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            We make collaboration effortless. Follow your project progress in real-time, view invoice milestones, and communicate directly with lead engineers.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {collaborationCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-panel p-6 rounded-2xl flex flex-col items-start hover:border-white/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 shadow-sm">
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-3">{card.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Milestone Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            
            {/* Timeline Info Text */}
            <div className="max-w-md text-left shrink-0">
              <span className="flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-widest mb-4">
                <HelpCircle size={14} className="text-accent animate-pulse" /> DEVELOPMENT PROCESS
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Payment & Development Lifecycle</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Our workflow is split into clear development milestones, ensuring that your payment matches exactly with verified project deliverables.
              </p>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                Milestone-based Guarantee
              </div>
            </div>

            {/* Timeline Steps Flex */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className="relative p-6 bg-white/5 border border-white/5 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-2xl font-black text-primary/40 font-mono tracking-tight">{step.step}</span>
                    <span className="text-[10px] bg-white/5 border border-white/5 text-gray-300 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {step.price}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white mb-2">{step.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default InvoicesCollaboration;
