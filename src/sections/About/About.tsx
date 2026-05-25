import React from 'react';
import styles from './About.module.css';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Button from '../../components/Button/Button';
import FloatingSocials from '../../components/FloatingSocials/FloatingSocials';

export const About: React.FC = () => {
  const bioBullets = [
    { icon: '📈', text: 'Grow Your Business Digitally' },
    { icon: '🚀', text: 'Digital Marketing Experts' },
    { icon: '🎯', text: 'Ads | Branding | SEO | Social Media' },
    { icon: '💡', text: 'Website design & Engineering' }
  ];

  return (
    <section id="about" className={`${styles.about} section-padding`}>
      <FloatingSocials preset="about" />
      <div className="container">
        <SectionHeader
          badge="ABOUT US"
          title={
            <>
              Who We Are & <span className="text-gradient">Our Mission</span>
            </>
          }
          description="Learn about the team, our founders, and how we empower enterprises globally."
        />

        <div className={`${styles.aboutGrid} reveal`}>
          {/* Left Column: Story & Writeup */}
          <div className={styles.contentCol}>
            <h3 className={styles.title}>
              14Stars SocialEdge <br />
              <span className="text-gradient">(SMC-Pvt) Limited</span>
            </h3>
            
            <p className={styles.desc}>
              We are a Pakistani digital solutions agency based in Islamabad, specializing in high-end web development (full-stack, WordPress, e-commerce) and target-driven digital marketing (branding, social media, SEO). Our primary focus is to help businesses connect with their customers, build professional credibility, and grow exponentially online.
            </p>

            <div className={styles.founderNote}>
              Led by visionary founders including <strong>Sardar Rajab Ali Khan</strong>, we deliver custom results-driven strategies—from crafting brand identity guides to executing lead generation campaigns—for diverse sectors like real estate.
            </div>

            {/* Bullets grid from bio */}
            <div className={styles.bulletGrid}>
              {bioBullets.map((bullet, idx) => (
                <div key={idx} className={styles.bulletItem}>
                  <span className={styles.bulletIcon}>{bullet.icon}</span>
                  <span>{bullet.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Social Brand Card Mockup */}
          <div className={styles.visualCol}>
            <div className={styles.brandBadge}>
              <div className={styles.badgeHeader}>
                <div className={styles.avatarGroup}>
                  <div className={styles.avatar}>14S</div>
                  <div className={`${styles.avatar} ${styles.avatarSecond}`}>SE</div>
                </div>
                <div className={styles.brandMeta}>
                  <span className={styles.brandName}>14Star SocialEdge</span>
                  <span className={styles.brandHandle}>@14starssocialedgepvtltd</span>
                </div>
              </div>

              {/* Stats Bar */}
              <div className={styles.statsRow}>
                <div className={styles.statBox}>
                  <div className={styles.statVal}>17</div>
                  <div className={styles.statLabel}>Posts</div>
                </div>
                <div className={styles.statBox}>
                  <div className={styles.statVal}>37</div>
                  <div className={styles.statLabel}>Followers</div>
                </div>
                <div className={styles.statBox}>
                  <div className={styles.statVal}>41</div>
                  <div className={styles.statLabel}>Following</div>
                </div>
              </div>

              {/* Bio description list */}
              <div className={styles.bioSection}>
                <div className={styles.bioLine}>
                  <span>📈</span>
                  <span>Grow Your Business Digitally</span>
                </div>
                <div className={styles.bioLine}>
                  <span>🚀</span>
                  <span>Digital Marketing Experts</span>
                </div>
                <div className={styles.bioLine}>
                  <span>🎯</span>
                  <span>Ads | Branding | SEO | Social Media</span>
                </div>
                <div className={styles.bioLine}>
                  <span>💡</span>
                  <span>Website design & Engineering</span>
                </div>
                <div className={styles.bioLine} style={{ marginTop: '15px' }}>
                  <span>🔗</span>
                  <a href="http://14staressocialedge.steslights.com" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>
                    14staressocialedge.steslights.com
                  </a>
                </div>
              </div>

              <a href="#contact" className={styles.followBtn}>
                <Button variant="accent" style={{ width: '100%' }}>
                  📩 Book Your Free Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
