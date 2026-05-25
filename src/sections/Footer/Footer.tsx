import React, { useState } from 'react';
import styles from './Footer.module.css';
import SocialsRow from '../../components/SocialsRow/SocialsRow';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {/* Brand Panel */}
          <div className={styles.brandCol}>
            <a href="#home" className={styles.logo}>
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
            <p className={styles.brandDesc}>
              Elevate Your Brand with Social Edge. We craft premium web applications, bespoke digital systems, and luxury branding assets.
            </p>
            <div className={styles.socials}>
              <SocialsRow size={14} />
            </div>
          </div>

          {/* Quick Links Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Agency</h4>
            <ul className={styles.linksList}>
              <li><a href="#home" className={styles.link}>Home</a></li>
              <li><a href="#about" className={styles.link}>About</a></li>
              <li><a href="#services" className={styles.link}>Services</a></li>
              <li><a href="#portfolio" className={styles.link}>Our Work</a></li>
              <li><a href="#why-us" className={styles.link}>Why Choose Us</a></li>
              <li><a href="#process" className={styles.link}>Our Process</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Solutions</h4>
            <ul className={styles.linksList}>
              <li><a href="#services" className={styles.link}>Web Development</a></li>
              <li><a href="#services" className={styles.link}>Ecommerce Platforms</a></li>
              <li><a href="#services" className={styles.link}>UI/UX Design</a></li>
              <li><a href="#services" className={styles.link}>Search Engine Optimization</a></li>
              <li><a href="#services" className={styles.link}>Branding & Identity</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className={styles.newsletterCol}>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <p className={styles.newsletterDesc}>Subscribe to get updates on web design trends and tech strategies.</p>
            
            {subscribed ? (
              <span className={styles.subscribeSuccess}>Subscribed successfully!</span>
            ) : (
              <form onSubmit={handleSubscribe} className={styles.form}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your professional email"
                  className={styles.input}
                  required
                />
                <button type="submit" className={styles.submitBtn} aria-label="Subscribe">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom copyright row */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {currentYear} SocialEdge (SMC-Private) Limited. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Privacy Policy</a>
            <span className={styles.divider}>|</span>
            <a href="#" className={styles.bottomLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export { Footer as default_Footer };
