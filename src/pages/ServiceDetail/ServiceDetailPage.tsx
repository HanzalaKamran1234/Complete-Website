import React, { useState } from 'react';
import styles from './ServiceDetailPage.module.css';
import { servicesData } from '../../data/services';
import { projectsData } from '../../data/projects';
import Button from '../../components/Button/Button';
import SocialsRow from '../../components/SocialsRow/SocialsRow';

interface ServiceDetailPageProps {
  serviceSlug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceSlug }) => {
  const service = servicesData.find((s) => s.slug === serviceSlug);

  // Keep track of which FAQ index is open
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  if (!service) {
    return (
      <div className={styles.serviceDetailPage}>
        <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-headings)', fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-primary)' }}>
            Service Not Found
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '30px' }}>
            The service you are looking for does not exist or has been relocated.
          </p>
          <a href="#home">
            <Button variant="primary">Return Home</Button>
          </a>
        </div>
      </div>
    );
  }

  // Filter 28 projects to find the ones matching this service slug
  const relatedProjects = projectsData.filter((p) => p.details.serviceSlug === serviceSlug);

  const toggleFaq = (idx: number) => {
    if (openFaqIdx === idx) {
      setOpenFaqIdx(null);
    } else {
      setOpenFaqIdx(idx);
    }
  };

  return (
    <div className={styles.serviceDetailPage}>
      {/* Back to Home Nav Link */}
      <div className={styles.backBar}>
        <div className="container">
          <a href="#home" className={styles.backLink}>
            <svg className={styles.backArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>
        <div className={`${styles.heroContent} container`}>
          <span className={styles.badge}>Service Detail</span>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.tagline}>{service.tagline}</p>
          <p className={styles.description}>{service.description}</p>
          <div className={styles.pageSocials}>
            <SocialsRow size={14} />
          </div>
        </div>
      </section>

      {/* Core Grid: Features list & Process timeline */}
      <div className="container">
        <div className={styles.mainGrid}>
          {/* Left Column: Key Features & Testimonial */}
          <div className={styles.leftCol}>
            <div>
              <h2 className={styles.sectionTitle}>Key Capabilities</h2>
              <div className={styles.featuresGrid}>
                {service.features.map((feature, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    <div className={styles.checkIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className={styles.featureText}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Panel */}
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>"{service.testimonial.quote}"</p>
              <div className={styles.author}>
                <span className={styles.authorName}>{service.testimonial.author}</span>
                <span className={styles.authorRole}>
                  {service.testimonial.role}, {service.testimonial.company}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Process Timeline */}
          <div className={styles.processContainer}>
            <h2 className={styles.sectionTitle} style={{ marginBottom: '20px' }}>Delivery Process</h2>
            <div className={styles.timeline}>
              {service.process.map((step, idx) => (
                <div key={idx} className={styles.timelineStep}>
                  <div className={styles.timelineIndicator}></div>
                  <span className={styles.timelineNum}>STAGE 0{idx + 1}</span>
                  <h3 className={styles.timelineTitle}>{step.title}</h3>
                  <p className={styles.timelineDesc}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Packages */}
      <section className={styles.pricingSection}>
        <div className="container">
          <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '10px' }}>
            Transparent Pricing Plans
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Choose a package tailored to your organization's budget and timeline requirements.
          </p>

          <div className={styles.pricingGrid}>
            {service.packages.map((pkg, idx) => (
              <div key={idx} className={`${styles.priceCard} ${pkg.isPopular ? styles.popularCard : ''}`}>
                {pkg.isPopular && <div className={styles.popularBadge}>MOST POPULAR</div>}
                
                <div className={styles.priceHeader}>
                  <h3 className={styles.packageName}>{pkg.name}</h3>
                  <div className={styles.packagePrice}>{pkg.price}</div>
                </div>

                <div className={styles.pkgFeatures}>
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className={styles.pkgFeatureItem}>
                      <svg className={styles.pkgFeatureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.pkgMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Delivery</span>
                    <span className={styles.metaVal}>{pkg.delivery}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Revisions</span>
                    <span className={styles.metaVal}>{pkg.revisions}</span>
                  </div>
                </div>

                <a href="#contact" className={styles.orderLink}>
                  <Button variant={pkg.isPopular ? 'accent' : 'primary'} className={styles.orderBtn}>
                    Order Package
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Portfolio Projects Showcase */}
      {relatedProjects.length > 0 && (
        <section className={styles.portfolioSection}>
          <div className="container">
            <h2 className={styles.sectionTitle} style={{ marginBottom: '10px' }}>
              Related Case Studies
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '30px' }}>
              Explore projects we have designed and developed under this service category.
            </p>

            <div className={styles.portfolioGrid}>
              {relatedProjects.map((project) => (
                <a key={project.id} href={`#project/${project.slug}`} className={styles.portCard}>
                  <h3 className={styles.portTitle}>{project.title}</h3>
                  <p className={styles.portDesc}>{project.description}</p>
                  <div className={styles.portTags}>
                    {project.techStack.map((tech) => (
                      <span key={tech} className={styles.portTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section Accordion */}
      <section className={styles.faqSection}>
        <div className="container">
          <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '40px' }}>
            Frequently Asked Questions
          </h2>
          <div className={styles.faqGrid}>
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`${styles.faqItem} ${openFaqIdx === idx ? styles.faqOpen : ''}`}
              >
                <button className={styles.faqQuestion} onClick={() => toggleFaq(idx)}>
                  <span>{faq.question}</span>
                  <svg className={styles.faqArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
