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
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.navContainer} container`}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={closeMobileMenu}>
          <span className={styles.logoMain}>AURA</span>
          <span className={styles.logoSub}>DIGITAL</span>
          <span className={styles.logoDot}></span>
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

        {/* Desktop CTA Button */}
        <div className={styles.navCta}>
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
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
