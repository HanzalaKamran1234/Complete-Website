import React from 'react';
import styles from './Hero.module.css';
import Button from '../../components/Button/Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Gradients */}
      <div className={styles.glowBg}>
        <div className={`${styles.glowBlob} ${styles.blobPurple}`}></div>
        <div className={`${styles.glowBlob} ${styles.blobGold}`}></div>
      </div>

      <div className={`${styles.heroContainer} container`}>
        {/* Hero Content (Left Column) */}
        <div className={styles.heroContent}>
          <div className={styles.tagline}>
            <span className={styles.taglineDot}></span>
            NEXT-GEN WEB DEVELOPMENT
          </div>
          <h1 className={styles.headline}>
            Crafting <span className="text-gradient">Premium</span> Digital Experiences for Elite Brands
          </h1>
          <p className={styles.subheadline}>
            We combine high-end design aesthetics with production-grade engineering to build conversion-focused web solutions that position your business at the top.
          </p>
          <div className={styles.ctaGroup}>
            <a href="#portfolio">
              <Button variant="primary" size="lg">Explore Work</Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg">Start a Project</Button>
            </a>
          </div>
          
          <div className={styles.heroTrust}>
            <p className={styles.trustText}>Trusted by industry leaders worldwide</p>
            <div className={styles.trustStats}>
              <div className={styles.statItem}>
                <span className={styles.statVal}>99%</span>
                <span className={styles.statLbl}>Client Satisfaction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>150+</span>
                <span className={styles.statLbl}>Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup (Right Column) */}
        <div className={styles.heroVisual}>
          <div className={styles.mockupWrapper}>
            {/* Desktop Browser Window Mockup */}
            <div className={styles.desktopMockup}>
              <div className={styles.browserHeader}>
                <div className={styles.windowControls}>
                  <span className={styles.controlDot}></span>
                  <span className={styles.controlDot}></span>
                  <span className={styles.controlDot}></span>
                </div>
                <div className={styles.browserUrl}>https://socialedge.agency/dashboard</div>
              </div>
              
              <div className={styles.browserBody}>
                {/* Mockup Dashboard Content */}
                <aside className={styles.mockSidebar}>
                  <div className={styles.mockLogo}></div>
                  <div className={styles.mockNav}>
                    <div className={`${styles.mockNavItem} ${styles.mockNavActive}`}></div>
                    <div className={styles.mockNavItem}></div>
                    <div className={styles.mockNavItem}></div>
                    <div className={styles.mockNavItem}></div>
                  </div>
                </aside>
                
                <main className={styles.mockMain}>
                  <div className={styles.mockHeader}>
                    <div className={styles.mockTitle}></div>
                    <div className={styles.mockAvatar}></div>
                  </div>
                  
                  <div className={styles.mockGrid}>
                    <div className={styles.mockCard}>
                      <div className={styles.mockCardTitle}></div>
                      <div className={styles.mockCardValue}></div>
                      <div className={styles.mockCardChart}>
                        <span className={styles.bar} style={{ height: '30%' }}></span>
                        <span className={styles.bar} style={{ height: '45%' }}></span>
                        <span className={styles.bar} style={{ height: '35%' }}></span>
                        <span className={styles.bar} style={{ height: '60%' }}></span>
                        <span className={styles.bar} style={{ height: '50%' }}></span>
                        <span className={styles.bar} style={{ height: '75%' }}></span>
                        <span className={styles.bar} style={{ height: '90%' }}></span>
                      </div>
                    </div>
                    <div className={styles.mockCard}>
                      <div className={styles.mockCardTitle}></div>
                      <div className={styles.mockCardValue}></div>
                      <div className={styles.mockCardLines}>
                        <div className={styles.mockLine} style={{ width: '80%' }}></div>
                        <div className={styles.mockLine} style={{ width: '60%' }}></div>
                        <div className={styles.mockLine} style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.mockFooter}>
                    <div className={styles.mockCtaButton}></div>
                  </div>
                </main>
              </div>
            </div>

            {/* Mobile Smartphone Mockup */}
            <div className={styles.mobileMockup}>
              <div className={styles.phoneScreen}>
                <div className={styles.phoneNotch}></div>
                <div className={styles.phoneHeader}>
                  <div className={styles.phoneLogo}></div>
                  <div className={styles.phoneMenu}></div>
                </div>
                
                <div className={styles.phoneBody}>
                  <div className={styles.phoneHero}></div>
                  <div className={styles.phoneCard}></div>
                  <div className={styles.phoneCard}></div>
                </div>
              </div>
            </div>

            {/* Glowing Accent Elements */}
            <div className={styles.visualGoldDecor}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
export { Hero as default_Hero };
