import React from 'react';
import styles from './WhyChooseUs.module.css';
import Card from '../../components/Card/Card';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

export const WhyChooseUs: React.FC = () => {
  const stats = [
    { value: '3x', label: 'Faster Load Speeds', desc: 'Than standard React apps' },
    { value: '99.9%', label: 'Uptime SLA', desc: 'Guaranteed high availability' },
    { value: '100%', label: 'Custom Code', desc: 'No templates, clean structures' },
  ];

  const features = [
    {
      title: 'Performance First',
      description: 'We optimize every kilobyte. Our websites load in milliseconds, securing high ranks on Google Core Web Vitals.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: 'Strategic Consulting',
      description: 'We align design and code with business objectives, building interfaces that guide users into conversions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      )
    },
    {
      title: 'Elite Engineering',
      description: 'Built by senior engineers using production-grade standards. Scalable, maintainable, and highly secure.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      )
    },
    {
      title: 'Ironclad Security',
      description: 'Advanced data protection. We implement SSL, secure APIs, and perform security audits on every launch.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-us" className={`${styles.whyUs} section-padding`}>
      <div className="container">
        <SectionHeader
          badge="WHY CHOOSE US"
          title={
            <>
              Engineered to Drive <span className="text-gradient">Business Growth</span>
            </>
          }
          description="We do not just build websites — we engineer highly optimized digital systems that represent your brand and convert users."
        />

        {/* Numeric Stats Row */}
        <div className={`${styles.statsRow} reveal`}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={`${styles.statValue} text-gradient-gold`}>{stat.value}</div>
              <h4 className={styles.statLabel}>{stat.label}</h4>
              <p className={styles.statDesc}>{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Core Value Props Grid */}
        <div className={`${styles.featuresGrid} reveal`}>
          {features.map((feat, index) => (
            <Card key={index} variant="lavender" interactive={true} className={styles.featureCard}>
              <div className={styles.iconBox}>
                {feat.icon}
              </div>
              <h3 className={styles.featureTitle}>{feat.title}</h3>
              <p className={styles.featureDesc}>{feat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
export { WhyChooseUs as default_WhyChooseUs };
