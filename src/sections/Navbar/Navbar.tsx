import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Button from '../../components/Button/Button';
import SocialsRow from '../../components/SocialsRow/SocialsRow';

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
            <SocialsRow size={14} />
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
            <SocialsRow size={14} />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
