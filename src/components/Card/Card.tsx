import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'accent' | 'lavender';
  interactive?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  interactive = true,
  className = '',
  onClick,
}) => {
  const cardClass = `
    ${styles.card} 
    ${styles[variant]} 
    ${interactive ? styles.interactive : ''} 
    ${onClick ? styles.clickable : ''} 
    ${className}
  `.trim();

  return (
    <div className={cardClass} onClick={onClick}>
      <span className={styles.borderGlow}></span>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Card;
