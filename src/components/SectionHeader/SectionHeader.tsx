import React from 'react';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  badge?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const containerClass = `${styles.header} ${styles[align]} ${className}`;

  return (
    <div className={containerClass}>
      {badge && (
        <span className={styles.badge}>
          <span className={styles.badgeDot}></span>
          {badge}
        </span>
      )}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default SectionHeader;
