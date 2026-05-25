import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Button from '../../components/Button/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Invoices & Collaboration', href: '#collaboration' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com/14starssocialedgepvtltd',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Z" />
          <path d="M17.5 12H12V14.5H15A3 3 0 1 1 12 9.5" />
        </svg>
      )
    }
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.navContainer} container`}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={closeMobileMenu}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 15H30M15 25H25M15 35H25" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" />
              <path d="M38 15V45H75V15H46" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M50 25H62V35H50V25Z" stroke="var(--color-primary)" strokeWidth="3" strokeLinejoin="round" />
              <path d="M32 45H16M16 45L22 39M16 45L22 51" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="24" y="42" width="6" height="6" rx="1.5" fill="var(--color-accent)" />
              <rect x="74" y="8" width="4" height="4" fill="var(--color-accent-light)" />
              <rect x="80" y="5" width="5" height="5" fill="var(--color-accent)" />
              <rect x="83" y="12" width="3" height="3" fill="var(--color-accent-light)" />
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>SOCIALEDGE</span>
            <span className={styles.logoSub}>(SMC-PRIVATE) LIMITED</span>
          </div>
        </a>


        {/* Desktop Nav Links */}
        <nav className={styles.navMenu}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.label} className={styles.navItem}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA Button & Socials */}
        <div className={styles.navCta}>
          <div className={styles.navSocials}>
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>
          <a href="#contact">
            <Button variant="accent" size="sm">Get in Touch</Button>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerActive : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay/Drawer */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavList}>
          {navLinks.map((link) => (
            <li key={link.label} className={styles.mobileNavItem}>
              <a href={link.href} className={styles.mobileNavLink} onClick={closeMobileMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles.mobileNavItem}>
            <a href="#contact" onClick={closeMobileMenu} className={styles.mobileCtaLink}>
              <Button variant="accent" size="md">Get in Touch</Button>
            </a>
          </li>
          {/* Mobile Socials */}
          <li className={styles.mobileSocialsRow}>
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink} onClick={closeMobileMenu} aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
