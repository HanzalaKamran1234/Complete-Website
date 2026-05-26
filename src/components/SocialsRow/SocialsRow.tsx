import React from 'react';
import styles from './SocialsRow.module.css';

interface SocialsRowProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export const SocialsRow: React.FC<SocialsRowProps> = ({
  size = 14,
  className = '',
  strokeWidth = 2
}) => {
  const socials = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      label: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com/14starssocialedgepvtltd',
      icon: (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      label: 'Google',
      href: 'https://google.com',
      icon: (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Z" />
          <path d="M17.5 12H12V14.5H15A3 3 0 1 1 12 9.5" />
        </svg>
      )
    }
  ];

  return (
    <div className={`${styles.socialsRow} ${className}`}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialsRow;
