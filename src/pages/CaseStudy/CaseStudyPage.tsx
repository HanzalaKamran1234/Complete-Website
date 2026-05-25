import React from 'react';
import styles from './CaseStudyPage.module.css';
import { projectsData } from '../../data/projects';
import Button from '../../components/Button/Button';
import FloatingSocials from '../../components/FloatingSocials/FloatingSocials';

interface CaseStudyPageProps {
  projectSlug: string;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ projectSlug }) => {
  const project = projectsData.find((p) => p.slug === projectSlug);

  if (!project) {
    return (
      <div className={styles.caseStudyPage}>
        <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-headings)', fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-primary)' }}>
            Case Study Not Found
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '30px' }}>
            The case study you are looking for does not exist or has been relocated.
          </p>
          <a href="#portfolio">
            <Button variant="primary">Return to Portfolio</Button>
          </a>
        </div>
      </div>
    );
  }

  // Calculate Next and Prev projects for horizontal navigation wrapper
  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  return (
    <div className={styles.caseStudyPage}>
      {/* Back to Portfolio Nav Bar */}
      <div className={styles.backBar}>
        <div className="container">
          <a href="#portfolio" className={styles.backLink}>
            <svg className={styles.backArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Portfolio
          </a>
        </div>
      </div>

      {/* Case Study Header Banner */}
      <section className={styles.hero}>
        <FloatingSocials preset="caseStudy" />
        <div className={styles.heroGlow}></div>
        <div className={`${styles.heroContent} container`}>
          <span className={styles.category}>{project.category}</span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.tagline}>{project.details.tagline}</p>
        </div>
      </section>

      {/* Main Breakdown Layout */}
      <div className="container">
        <div className={styles.layoutGrid}>
          {/* Left Column: Core Writeup */}
          <main className={styles.mainContent}>
            {/* Overview */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>Overview & Vision</h2>
              <p className={styles.paragraph}>{project.details.overview}</p>
            </div>

            {/* Client Requirements */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>Client Requirements</h2>
              <p className={styles.paragraph}>{project.details.requirements}</p>
            </div>

            {/* Problem Solved */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>Problems Solved & Architecture</h2>
              <p className={styles.paragraph}>{project.details.solved}</p>
            </div>

            {/* UI/UX Strategy */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>UI/UX & Creative Strategy</h2>
              <p className={styles.paragraph}>{project.details.strategy}</p>
            </div>

            {/* Impact stats and before/after comparisons */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>Business Impact & Stat Optimization</h2>
              <p className={styles.paragraph} style={{ marginBottom: '25px' }}>
                {project.details.impact}
              </p>
              
              <div className={styles.statsBoxGrid}>
                <div className={`${styles.statsBox} ${styles.statsBoxBefore}`}>
                  <div className={`${styles.statsBoxLabel} ${styles.labelBefore}`}>Before State</div>
                  <div className={styles.statsBoxContent}>{project.details.beforeState}</div>
                </div>
                <div className={`${styles.statsBox} ${styles.statsBoxAfter}`}>
                  <div className={`${styles.statsBoxLabel} ${styles.labelAfter}`}>After Optimization</div>
                  <div className={styles.statsBoxContent}>{project.details.afterState}</div>
                </div>
              </div>
            </div>
          </main>

          {/* Right Column: Metadata Sidebar */}
          <aside className={styles.sidebar}>
            {/* Project Specs */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Project Details</h3>
              <div className={styles.metadataList}>
                <div className={styles.metadataItem}>
                  <span className={styles.metaLabel}>Client Brand</span>
                  <span className={styles.metaValue}>{project.title}</span>
                </div>
                <div className={styles.metadataItem}>
                  <span className={styles.metaLabel}>Service Area</span>
                  <span className={styles.metaValue}>{project.category}</span>
                </div>
                <div className={styles.metadataItem}>
                  <span className={styles.metaLabel}>Live URL</span>
                  <span className={styles.metaValue}>
                    <a href={project.details.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary-light)' }}>
                      {project.details.liveUrl.replace('https://', '')}
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Technology Stack</h3>
              <div className={styles.techTags}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Conversion CTA card */}
            <div className={`${styles.sidebarCard} ${styles.sidebarCtaCard}`}>
              <h3 className={styles.sidebarCtaTitle}>Need something similar?</h3>
              <p className={styles.sidebarCtaDesc}>
                We can build a high-performance web experience matching your exact business rules. Let's talk today.
              </p>
              <a href="#contact" style={{ width: '100%', display: 'inline-block' }}>
                <Button variant="accent" style={{ width: '100%' }}>Get a Free Quote</Button>
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* Next/Prev Navigation Selector */}
      <section className={styles.navigator}>
        <div className={`${styles.navContainer} container`}>
          <a href={`#project/${prevProject.slug}`} className={`${styles.navBlock} ${styles.navBlockPrev}`}>
            <span className={styles.navDirection}>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Previous Project
            </span>
            <span className={styles.navProjectTitle}>{prevProject.title}</span>
          </a>

          <a href={`#project/${nextProject.slug}`} className={`${styles.navBlock} ${styles.navBlockNext}`}>
            <span className={styles.navDirection}>
              Next Project
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
            <span className={styles.navProjectTitle}>{nextProject.title}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;
