import React from 'react';
import styles from './Hero.module.css';
import Button from '../../components/Button/Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Gradients */}
      <div className={styles.glowBg}>
        <div className={`${styles.glowBlob} ${styles.blobPurple}`}></div>
        <div className={`${styles.glowBlob} ${styles.blobBlue}`}></div>
      </div>

      <div className={`${styles.heroContainer} container`}>
        {/* Split Hero Panel */}
        <div className={styles.splitPanel}>
          {/* Left Purple Column */}
          <div className={styles.leftPane}>
            <div className={styles.tagline}>
              <span className={styles.taglineDot}></span>
              NEXT-GEN DIGITAL AGENCY
            </div>
            <h1 className={styles.headline}>
              Elevate Your Brand with <span className={styles.textWhite}>Social Edge</span>
            </h1>
            <p className={styles.subheadline}>
              We craft premium web applications, bespoke digital systems, and luxury branding assets that drive corporate success.
            </p>
            <div className={styles.ctaGroup}>
              <a href="#portfolio">
                <Button variant="accent" size="lg">Explore Work</Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className={styles.btnOutlineWhite}>Start a Project</Button>
              </a>
            </div>
          </div>

          {/* Right White Column with Cards */}
          <div className={styles.rightPane}>
            <div className={styles.cardsWrapper}>
              {/* Card 1 */}
              <div className={styles.mockMiniCard}>
                <div className={styles.miniCardHeader}>Web Dev</div>
                <div className={styles.miniCardBody}>
                  <div className={styles.miniBar} style={{ width: '80%' }}></div>
                  <div className={styles.miniBar} style={{ width: '50%' }}></div>
                </div>
              </div>
              {/* Card 2 */}
              <div className={styles.mockMiniCard}>
                <div className={styles.miniCardHeader}>Branding</div>
                <div className={styles.miniCardBody}>
                  <div className={styles.miniCircle}></div>
                  <div className={styles.miniBar} style={{ width: '60%' }}></div>
                </div>
              </div>
              {/* Card 3 */}
              <div className={styles.mockMiniCard}>
                <div className={styles.miniCardHeader}>SEO/SaaS</div>
                <div className={styles.miniCardBody}>
                  <div className={styles.miniBar} style={{ width: '40%' }}></div>
                  <div className={styles.miniBar} style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Gold Accent Stripe on the far right */}
          <div className={styles.goldStripe}>
            <div className={styles.goldStripeContent}>
              <span>PREMIUM</span>
              <span>•</span>
              <span>AGENCY</span>
            </div>
          </div>
        </div>

        {/* Bottom Trust/Stats section underneath the hero banner */}
        <div className={styles.heroTrustUnder}>
          <div className={styles.trustIntro}>
            <span className={styles.trustIcon}>🏆</span>
            <p className={styles.trustText}>Trusted by industry leaders worldwide</p>
          </div>
          <div className={styles.trustStats}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>99%</span>
              <span className={styles.statLbl}>Client Satisfaction</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>150+</span>
              <span className={styles.statLbl}>Projects Delivered</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>24/7</span>
              <span className={styles.statLbl}>Dedicated Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
