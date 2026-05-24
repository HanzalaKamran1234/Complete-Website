import React from 'react';
import styles from './Cta.module.css';
import Button from '../../components/Button/Button';

export const Cta: React.FC = () => {
  return (
    <section className={`${styles.cta} section-padding`}>
      <div className="container">
        <div className={`${styles.ctaBox} reveal`}>
          {/* Glowing Background Blobs inside CTA Box */}
          <div className={styles.ctaGlow}>
            <div className={styles.glowPurple}></div>
            <div className={styles.glowGold}></div>
          </div>

          <div className={styles.content}>
            <span className={styles.tag}>WORK WITH US</span>
            <h2 className={styles.heading}>Ready to Engineer Your <span className="text-gradient-gold">Digital Growth?</span></h2>
            <p className={styles.subheading}>
              Partner with our team of senior designers and software engineers. We combine cutting-edge technology with high-end design to scale your business.
            </p>
            <div className={styles.btnGroup}>
              <a href="#contact">
                <Button variant="accent" size="lg">Start a Project</Button>
              </a>
              <a href="#services">
                <Button variant="outline" size="lg" className={styles.outlineBtn}>Explore Solutions</Button>
              </a>
            </div>
          </div>
          
          {/* Decorative SVG Graphic */}
          <div className={styles.decoGraphic}>
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" stroke="rgba(212, 161, 42, 0.08)" strokeWidth="2" strokeDasharray="5 5" />
              <circle cx="100" cy="100" r="60" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
              <path d="M100 20V180" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
              <path d="M20 100H180" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
export { Cta as default_Cta };
