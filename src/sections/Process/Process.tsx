import React from 'react';
import styles from './Process.module.css';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We research your market, evaluate competitors, and establish a clear strategic blueprint outlining conversion goals and technical requirements.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'UI/UX Design',
      description: 'We draft high-fidelity wireframes and interactive prototypes, refining visual aesthetics, user flows, and responsive design systems.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Elite Engineering',
      description: 'Our senior developers write clean, performance-optimized React and TypeScript code, establishing secure, accessible, and fast web products.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Rigorous Testing & Launch',
      description: 'We execute speed audits, cross-browser compatibility tests, and SEO verification checks before migrating live to secure servers.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    },
    {
      number: '05',
      title: 'Optimization & Support',
      description: 'Post-launch, we monitor user behaviors, conduct periodic updates, optimize performance metrics, and consult on growth strategies.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className={`${styles.process} section-padding`}>
      <div className="container">
        <SectionHeader
          badge="OUR PROCESS"
          title={
            <>
              How We Create <span className="text-gradient">Digital Success</span>
            </>
          }
          description="A structured, collaborative workflow designed to move projects from concepts to high-performing digital realities."
        />

        {/* Timeline container */}
        <div className={`${styles.timeline} reveal`}>
          <div className={styles.timelineLine}></div>
          
          {steps.map((step, index) => (
            <div key={index} className={`${styles.timelineItem} ${index % 2 === 1 ? styles.timelineItemReverse : ''}`}>
              {/* Central Dot */}
              <div className={styles.timelineDot}>
                <span className={styles.dotPulse}></span>
              </div>

              {/* Empty spacing panel for layout alignment */}
              <div className={styles.timelineSpacer}></div>

              {/* Process Card Content */}
              <div className={styles.processCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    {step.icon}
                  </div>
                  <span className={`${styles.stepNumber} text-gradient-gold`}>{step.number}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
export { Process as default_Process };
