import React from 'react';
import styles from './Services.module.css';
import Card from '../../components/Card/Card';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

export const Services: React.FC = () => {
  const servicesList = [
    {
      title: 'Website Development',
      description: 'Production-grade, ultra-fast websites built with modern frameworks. Optimized for accessibility, performance, and SEO.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      )
    },
    {
      title: 'Ecommerce Solutions',
      description: 'Custom digital storefronts engineered for high conversions. Secure payments, smooth checkouts, and seamless catalog management.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      )
    },
    {
      title: 'UI/UX Design',
      description: 'Elegant, user-centric interfaces crafted with meticulous attention to detail. High-fidelity wireframes, user testing, and interactive mockups.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      title: 'Search Engine Optimization',
      description: 'Data-driven SEO strategies that elevate search rankings, expand brand authority, and deliver high-intent organic traffic.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <path d="M3 20H21" />
          <path d="M3 10L9 4L15 8L21 2" stroke="var(--color-accent)" />
        </svg>
      )
    },
    {
      title: 'Branding & Identity',
      description: 'Distinct brand systems that tell powerful stories. Custom logos, cohesive style guides, typography systems, and voice design.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: 'Social Media Marketing',
      description: 'Result-oriented social strategies designed to build active communities, increase brand loyalty, and drive conversions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className={`${styles.services} section-padding`}>
      <div className="container">
        <SectionHeader
          badge="OUR SERVICES"
          title={
            <>
              High-End Solutions for <span className="text-gradient">Digital Growth</span>
            </>
          }
          description="We deliver full-suite digital solutions designed to grow your business, build credibility, and convert visitors into long-term loyal clients."
        />

        <div className={`${styles.servicesGrid} reveal`}>
          {servicesList.map((service, index) => (
            <Card key={index} variant="default" interactive={true} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <a href="#contact" className={styles.learnMore}>
                Learn More
                <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
export { Services as default_Services };
