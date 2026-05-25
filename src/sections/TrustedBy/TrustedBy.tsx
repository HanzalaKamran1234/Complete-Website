import React from 'react';
import styles from './TrustedBy.module.css';
import SocialsRow from '../../components/SocialsRow/SocialsRow';

export const TrustedBy: React.FC = () => {
  const logos = [
    {
      name: 'TechCorp',
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="10" width="20" height="20" rx="4" fill="currentColor" opacity="0.8" />
          <circle cx="25" cy="20" r="6" fill="var(--color-accent)" />
          <text x="45" y="26" fontFamily="var(--font-headings)" fontWeight="700" fontSize="14" fill="currentColor">TECHCORP</text>
        </svg>
      )
    },
    {
      name: 'AlphaMedia',
      svg: (
        <svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 30L25 10L40 30H10Z" fill="currentColor" opacity="0.8" />
          <path d="M20 22H30" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" />
          <text x="48" y="26" fontFamily="var(--font-headings)" fontWeight="700" fontSize="14" fill="currentColor">ALPHA</text>
        </svg>
      )
    },
    {
      name: 'Zenith',
      svg: (
        <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10H30L15 26H30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="33" cy="12" r="4" fill="var(--color-accent)" />
          <text x="45" y="26" fontFamily="var(--font-headings)" fontWeight="700" fontSize="14" fill="currentColor">ZENITH</text>
        </svg>
      )
    },
    {
      name: 'FutureLab',
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="3" />
          <circle cx="20" cy="20" r="4" fill="var(--color-accent)" />
          <text x="40" y="26" fontFamily="var(--font-headings)" fontWeight="700" fontSize="14" fill="currentColor">FUTURELAB</text>
        </svg>
      )
    },
    {
      name: 'ApexSoft',
      svg: (
        <svg viewBox="0 0 115 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 30V10L20 20L30 10V30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 28V32" stroke="var(--color-accent)" strokeWidth="3" />
          <text x="40" y="26" fontFamily="var(--font-headings)" fontWeight="700" fontSize="14" fill="currentColor">APEX</text>
        </svg>
      )
    },
    {
      name: 'Vertex',
      svg: (
        <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10L20 30L30 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <circle cx="20" cy="30" r="3" fill="var(--color-accent)" />
          <text x="40" y="26" fontFamily="var(--font-headings)" fontWeight="700" fontSize="14" fill="currentColor">VERTEX</text>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.trusted}>
      <div className={`${styles.container} container`}>
        <p className={styles.title}>EMPOWERING LEADING BRANDS WORLDWIDE</p>
        <div className={styles.logoRow}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoItem} title={logo.name}>
              {logo.svg}
            </div>
          ))}
        </div>
        <div className={styles.trustedSocialsContainer}>
          <span className={styles.trustedSocialsLabel}>Connect with SocialEdge:</span>
          <SocialsRow size={14} />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
