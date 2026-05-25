import React from 'react';
import styles from './Hero.module.css';
import Button from '../../components/Button/Button';
import SocialsRow from '../../components/SocialsRow/SocialsRow';

export const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Gradients & Glow Effects */}
      <div className={styles.glowBg}>
        <div className={`${styles.glowBlob} ${styles.blobPurple}`}></div>
        <div className={`${styles.glowBlob} ${styles.blobBlue}`}></div>
        <div className={`${styles.glowBlob} ${styles.blobGold}`}></div>
      </div>

      <div className={`${styles.heroContainer} container`}>
        <div className={styles.grid}>
          {/* Hero Content (Left Column) */}
          <div className={styles.heroContent}>
            <div className={styles.tagline}>
              <span className={styles.taglineDot}></span>
              ELITE DIGITAL PARTNER
            </div>
            <h1 className={styles.headline}>
              Engineering <span className="text-gradient">Premium</span> Digital Solutions for High-End Brands
            </h1>
            <p className={styles.subheadline}>
              We deliver bespoke web architectures, custom digital platforms, and luxury brand design assets tailored to scale enterprise influence.
            </p>
            <div className={styles.ctaGroup}>
              <a href="#portfolio">
                <Button variant="primary" size="lg">Explore Portfolio</Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg">Start Consultation</Button>
              </a>
            </div>

            {/* Inline Social Icons */}
            <div className={styles.heroSocials}>
              <span className={styles.socialsLabel}>Follow SocialEdge:</span>
              <SocialsRow size={14} />
            </div>

            <div className={styles.heroTrust}>
              <p className={styles.trustText}>Trusted by industry leaders worldwide</p>
              <div className={styles.trustStats}>
                <div className={styles.statItem}>
                  <span className={styles.statVal}>99%</span>
                  <span className={styles.statLbl}>Client Retention</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statVal}>150+</span>
                  <span className={styles.statLbl}>Enterprise Deployments</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Composition (Right Column) */}
          <div className={styles.heroVisual}>
            <div className={styles.visualWrapper}>
              
              {/* Gold Luxury Lantern/Dome Ornament (Left side of laptop) */}
              <div className={styles.luxuryLantern}>
                <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.lanternSvg}>
                  <path d="M50 15C42 35 25 45 25 65C25 85 35 95 50 95C65 95 75 85 75 65C75 45 58 35 50 15Z" fill="url(#lanternGlow)" opacity="0.25" />
                  <path d="M50 20C45 38 30 48 30 65C30 80 38 90 50 90C62 90 70 80 70 65C70 48 55 38 50 20Z" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M50 35C47 48 38 55 38 65C38 75 43 80 50 80C57 80 62 75 62 65C62 55 53 48 50 35Z" stroke="var(--color-accent-light)" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="50" y1="20" x2="50" y2="90" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M50 5V20M45 10H55" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M50 90V105M47 105H53" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="50" cy="110" r="2.5" fill="var(--color-accent-light)" />
                  <defs>
                    <radialGradient id="lanternGlow" cx="50%" cy="60%" r="50%">
                      <stop offset="0%" stopColor="var(--color-accent)" />
                      <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              {/* Central Laptop Mockup Container */}
              <div className={styles.laptopMockup}>
                {/* Screen */}
                <div className={styles.laptopScreen}>
                  <div className={styles.browserHeader}>
                    <div className={styles.windowControls}>
                      <span className={styles.controlDot}></span>
                      <span className={styles.controlDot}></span>
                      <span className={styles.controlDot}></span>
                    </div>
                    <div className={styles.browserUrl}>https://socialedge.agency/workspace</div>
                  </div>
                  
                  {/* Laptop screen body - mockup of split banner */}
                  <div className={styles.mockupWebPage}>
                    {/* Mock header */}
                    <div className={styles.mockWebHeader}>
                      <div className={styles.mockWebLogo}></div>
                      <div className={styles.mockWebNav}>
                        <span></span><span></span><span></span>
                      </div>
                    </div>
                    {/* Mock hero split container */}
                    <div className={styles.mockWebHero}>
                      {/* Left purple block */}
                      <div className={styles.mockWebLeft}>
                        <div className={styles.mockWebHeadline}></div>
                        <div className={styles.mockWebSubline}></div>
                        <div className={styles.mockWebBtn}></div>
                      </div>
                      {/* Right white block with cards */}
                      <div className={styles.mockWebRight}>
                        <div className={styles.mockWebCard}></div>
                        <div className={styles.mockWebCard}></div>
                      </div>
                      {/* Far-right gold stripe */}
                      <div className={styles.mockWebGold}></div>
                    </div>
                  </div>
                </div>

                {/* Keyboard Base */}
                <div className={styles.laptopBase}>
                  <div className={styles.laptopNotch}></div>
                </div>
              </div>

              {/* Floating UI Cards */}
              {/* Card 1: Top-Left */}
              <div className={`${styles.floatingCard} ${styles.cardTopLeft}`}>
                <div className={styles.cardHeaderRow}>
                  <span className={styles.cardIcon}>⭐️</span>
                  <span className={styles.cardBadge}>99%</span>
                </div>
                <div className={styles.cardTitle}>Client Retention</div>
              </div>

              {/* Card 2: Top-Right */}
              <div className={`${styles.floatingCard} ${styles.cardTopRight}`}>
                <div className={styles.cardHeaderRow}>
                  <span className={styles.cardIcon}>💎</span>
                  <span className={styles.cardBadge}>LUXE</span>
                </div>
                <div className={styles.cardTitle}>Bespoke UI Design</div>
              </div>

              {/* Card 3: Bottom-Right */}
              <div className={`${styles.floatingCard} ${styles.cardBottomRight}`}>
                <div className={styles.cardHeaderRow}>
                  <span className={styles.cardIcon}>📈</span>
                  <span className={styles.cardBadge}>150+</span>
                </div>
                <div className={styles.cardTitle}>Successful Audits</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
