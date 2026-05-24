import React, { useState } from 'react';
import styles from './Footer.module.css';

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
              <span className={styles.logoMain}>AURA</span>
              <span className={styles.logoSub}>DIGITAL</span>
              <span className={styles.logoDot}></span>
            </a>
            <p className={styles.brandDesc}>
              Engineering high-fidelity web solutions and custom digital systems for forward-thinking global brands.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Agency</h4>
            <ul className={styles.linksList}>
              <li><a href="#home" className={styles.link}>Home</a></li>
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
            &copy; {currentYear} Aura Digital. All rights reserved. Made for presentation.
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
