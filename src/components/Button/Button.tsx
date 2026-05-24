import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const buttonClass = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

  return (
    <button className={buttonClass} {...props}>
      <span className={styles.btnText}>{children}</span>
      <span className={styles.btnGlow}></span>
    </button>
  );
};

export default Button;
