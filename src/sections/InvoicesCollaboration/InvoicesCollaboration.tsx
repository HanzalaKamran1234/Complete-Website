import React from 'react';
import styles from './InvoicesCollaboration.module.css';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import FloatingSocials from '../../components/FloatingSocials/FloatingSocials';

export const InvoicesCollaboration: React.FC = () => {
  const collaborationCards = [
    {
      title: 'Interactive Client Spaces',
      description: 'Access direct project Slack channels, Figma preview frames, and real-time development URLs to trace designs and code branches.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'Transparent Milestone Billing',
      description: 'Structured payment milestones tied directly to approved design prototypes and tested code checkouts, with zero hidden fees.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: 'Automated Status Portal',
      description: 'Log in to trace milestone completion dates, download PDF invoices, view upcoming tasks, and review technical documentation.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="9" y1="9" x2="21" y2="9" />
          <line x1="9" y1="15" x2="21" y2="15" />
        </svg>
      )
    },
    {
      title: '24/7 Dedicated Support',
      description: 'Enjoy direct communication lines with your senior lead engineer and designer to resolve issues or iterate plans instantly.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
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
    <section id="collaboration" className={`${styles.collaboration} section-padding`}>
      <FloatingSocials preset="collaboration" />
      <div className={styles.colGlow}></div>
      <div className="container">
        <SectionHeader
          badge="COLLABORATION WORKFLOW"
          title={
            <>
              Transparent Invoicing & <span className="text-gradient">Seamless Execution</span>
            </>
          }
          description="We make collaboration effortless. Follow your project progress in real-time, view invoice milestones, and communicate directly with lead engineers."
        />

        {/* 4 Cards Grid */}
        <div className={`${styles.grid} reveal`}>
          {collaborationCards.map((card, idx) => (
            <div key={idx} className={styles.colCard}>
              <div className={styles.cardIcon}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
            </div>
          ))}
        </div>

        {/* Milestone Timeline */}
        <div className={`${styles.timelineSection} reveal`}>
          <h3 className={styles.timelineTitle}>Payment & Development Lifecycle</h3>
          <div className={styles.timelineGrid}>
            <div className={styles.timelineLine}></div>
            {timelineSteps.map((step, idx) => (
              <div key={idx} className={styles.timelineStep}>
                <div className={styles.stepBadge}>{step.step}</div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <span className={styles.stepPrice}>{step.price}</span>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoicesCollaboration;
