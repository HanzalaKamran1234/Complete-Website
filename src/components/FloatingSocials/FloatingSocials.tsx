import React from 'react';
import styles from './FloatingSocials.module.css';

interface FloatingSocialsProps {
  preset: 'hero' | 'trusted' | 'services' | 'portfolio' | 'collaboration' | 'about' | 'contact' | 'portfolioPage' | 'caseStudy' | 'serviceDetail';
}

interface IconConfig {
  type: 'linkedin' | 'facebook' | 'instagram' | 'google';
  style: React.CSSProperties;
  rotation: number;
  delay: string;
}

const presets: Record<string, IconConfig[]> = {
  hero: [
    { type: 'linkedin', style: { top: '15%', left: '6%', transform: 'scale(1.2)' }, rotation: -12, delay: '0s' },
    { type: 'facebook', style: { top: '22%', right: '10%', transform: 'scale(1.15)' }, rotation: 15, delay: '1.5s' },
    { type: 'instagram', style: { bottom: '35%', left: '8%', transform: 'scale(1.1)' }, rotation: 8, delay: '0.7s' },
    { type: 'google', style: { bottom: '25%', right: '12%', transform: 'scale(1.2)' }, rotation: -15, delay: '2.2s' }
  ],
  trusted: [
    { type: 'linkedin', style: { top: '20%', left: '5%', opacity: 0.7 }, rotation: 8, delay: '0.5s' },
    { type: 'facebook', style: { top: '15%', right: '6%', opacity: 0.7 }, rotation: -10, delay: '1.8s' },
    { type: 'instagram', style: { bottom: '15%', left: '8%', opacity: 0.7 }, rotation: 12, delay: '1.1s' },
    { type: 'google', style: { bottom: '20%', right: '7%', opacity: 0.7 }, rotation: -8, delay: '2.5s' }
  ],
  services: [
    { type: 'linkedin', style: { top: '6%', left: '4%' }, rotation: -15, delay: '0.2s' },
    { type: 'facebook', style: { top: '10%', right: '5%' }, rotation: 10, delay: '1.2s' },
    { type: 'instagram', style: { bottom: '12%', left: '5%' }, rotation: 18, delay: '2.1s' },
    { type: 'google', style: { bottom: '6%', right: '6%' }, rotation: -12, delay: '0.9s' }
  ],
  portfolio: [
    { type: 'linkedin', style: { top: '10%', left: '3%' }, rotation: 10, delay: '0.8s' },
    { type: 'facebook', style: { top: '15%', right: '4%' }, rotation: -15, delay: '2.0s' },
    { type: 'instagram', style: { bottom: '8%', left: '4%' }, rotation: -8, delay: '1.4s' },
    { type: 'google', style: { bottom: '12%', right: '4%' }, rotation: 12, delay: '0.3s' }
  ],
  collaboration: [
    { type: 'linkedin', style: { top: '8%', left: '6%' }, rotation: -8, delay: '1.1s' },
    { type: 'facebook', style: { top: '12%', right: '8%' }, rotation: 15, delay: '0.4s' },
    { type: 'instagram', style: { bottom: '10%', left: '5%' }, rotation: 12, delay: '2.3s' },
    { type: 'google', style: { bottom: '16%', right: '6%' }, rotation: -10, delay: '1.7s' }
  ],
  about: [
    { type: 'linkedin', style: { top: '12%', left: '4%' }, rotation: 15, delay: '0.6s' },
    { type: 'facebook', style: { top: '6%', right: '6%' }, rotation: -12, delay: '1.9s' },
    { type: 'instagram', style: { bottom: '15%', left: '5%' }, rotation: -10, delay: '1.3s' },
    { type: 'google', style: { bottom: '10%', right: '4%' }, rotation: 8, delay: '2.7s' }
  ],
  contact: [
    { type: 'linkedin', style: { top: '6%', left: '6%' }, rotation: -12, delay: '0.1s' },
    { type: 'facebook', style: { top: '18%', right: '5%' }, rotation: 18, delay: '1.6s' },
    { type: 'instagram', style: { bottom: '22%', left: '8%' }, rotation: -8, delay: '0.9s' },
    { type: 'google', style: { bottom: '10%', right: '6%' }, rotation: 10, delay: '2.1s' }
  ],
  portfolioPage: [
    { type: 'linkedin', style: { top: '12%', left: '5%' }, rotation: 12, delay: '0.4s' },
    { type: 'facebook', style: { top: '10%', right: '6%' }, rotation: -15, delay: '1.7s' },
    { type: 'instagram', style: { bottom: '15%', left: '6%' }, rotation: 10, delay: '2.4s' },
    { type: 'google', style: { bottom: '12%', right: '5%' }, rotation: -8, delay: '1.0s' }
  ],
  caseStudy: [
    { type: 'linkedin', style: { top: '15%', left: '4%' }, rotation: -10, delay: '0.9s' },
    { type: 'facebook', style: { top: '12%', right: '8%' }, rotation: 12, delay: '2.1s' },
    { type: 'instagram', style: { bottom: '20%', left: '6%' }, rotation: 15, delay: '0.3s' },
    { type: 'google', style: { bottom: '16%', right: '8%' }, rotation: -15, delay: '1.6s' }
  ],
  serviceDetail: [
    { type: 'linkedin', style: { top: '10%', left: '6%' }, rotation: 15, delay: '0.7s' },
    { type: 'facebook', style: { top: '15%', right: '6%' }, rotation: -12, delay: '2.0s' },
    { type: 'instagram', style: { bottom: '12%', left: '5%' }, rotation: -10, delay: '1.3s' },
    { type: 'google', style: { bottom: '18%', right: '8%' }, rotation: 8, delay: '0.2s' }
  ]
};

export const FloatingSocials: React.FC<FloatingSocialsProps> = ({ preset }) => {
  const configs = presets[preset] || presets.hero;

  const renderIcon = (type: 'linkedin' | 'facebook' | 'instagram' | 'google') => {
    switch (type) {
      case 'linkedin':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        );
      case 'facebook':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        );
      case 'google':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Z" />
            <path d="M17.5 12H12V14.5H15A3 3 0 1 1 12 9.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getHref = (type: string) => {
    switch (type) {
      case 'instagram':
        return 'https://instagram.com/14starssocialedgepvtltd';
      case 'linkedin':
        return 'https://linkedin.com';
      case 'facebook':
        return 'https://facebook.com';
      case 'google':
      default:
        return 'https://google.com';
    }
  };

  return (
    <div className={styles.container}>
      {configs.map((config, index) => {
        const customStyle = {
          ...config.style,
          '--rot-start': `${config.rotation}deg`,
          '--rot-mid': `${config.rotation + 5}deg`,
          animationDelay: config.delay,
        } as React.CSSProperties;

        return (
          <a
            key={index}
            href={getHref(config.type)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${styles[config.type]}`}
            style={customStyle}
            aria-label={config.type}
          >
            <div className={styles.iconWrapper}>
              {renderIcon(config.type)}
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default FloatingSocials;
