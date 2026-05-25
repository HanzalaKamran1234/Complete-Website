import React from 'react';
import styles from './Portfolio.module.css';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { projectsData } from '../../data/projects';
import type { Project } from '../../data/projects';
import SocialsRow from '../../components/SocialsRow/SocialsRow';

export const Portfolio: React.FC = () => {
  // The 7 specific projects requested
  const targetSlugs = [
    'esglinkanalytics',
    'redsignature',
    'jamals',
    'holidaysmaker',
    'pharmanook',
    'collectionprestige',
    'rukhnews'
  ];

  // Map slugs to projectsData to preserve exact requested order
  const displayProjects = targetSlugs
    .map((slug) => projectsData.find((p) => p.slug === slug))
    .filter(Boolean) as Project[];

  // Dynamic visual mockup renderer based on category/filter
  const renderMockup = (project: Project) => {
    const filterType = project.filter;
    const colors = [
      ['#4A1C74', '#6175E5'], // Purple to Blue
      ['#2F104B', '#74A6C7'], // Dark Purple to Soft Blue
      ['#0e1726', '#162238'], // Midnight Dark
      ['#1e1b4b', '#4338ca'], // Indigo Slate
      ['#0f172a', '#1e293b']  // Slate Dark
    ];
    const pair = colors[project.id % colors.length];
    const gradient = `linear-gradient(135deg, ${pair[0]} 0%, ${pair[1]} 100%)`;

    return (
      <div className={styles.mockupBg} style={{ background: gradient }}>
        {filterType === 'ecommerce' && (
          <div className={styles.mockupContent}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupLogo} style={{ background: 'var(--color-accent)' }}></div>
              <div className={styles.mockupNav}>
                <span></span><span></span>
              </div>
            </div>
            <div className={styles.mockupEcomGrid}>
              <div className={styles.mockupEcomCard}>
                <div className={styles.mockupEcomImg}></div>
                <div className={styles.mockupEcomTitle}></div>
                <div className={styles.mockupEcomPrice}></div>
              </div>
              <div className={styles.mockupEcomCard}>
                <div className={styles.mockupEcomImg}></div>
                <div className={styles.mockupEcomTitle}></div>
                <div className={styles.mockupEcomPrice}></div>
              </div>
            </div>
          </div>
        )}

        {filterType === 'corporate' && (
          <div className={styles.mockupContent}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupLogo}></div>
              <div className={styles.mockupNav}>
                <span></span><span></span>
              </div>
            </div>
            <div className={styles.mockupChart}>
              <div className={styles.mockupChartBar} style={{ height: '30%' }}></div>
              <div className={styles.mockupChartBar} style={{ height: '50%' }}></div>
              <div className={styles.mockupChartBar} style={{ height: '80%' }}></div>
              <div className={styles.mockupChartBar} style={{ height: '45%' }}></div>
            </div>
            <div className={styles.mockupGrid}>
              <span></span><span></span><span></span>
            </div>
          </div>
        )}

        {filterType === 'business' && (
          <div className={styles.mockupContent}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupLogo} style={{ background: 'var(--color-accent)' }}></div>
              <div className={styles.mockupNav}>
                <span></span><span></span>
              </div>
            </div>
            <div className={styles.mockupHero}>
              <div className={styles.mockupHeading} style={{ width: '85%', height: '12px' }}></div>
              <div className={styles.mockupSubheading} style={{ width: '65%' }}></div>
            </div>
            <div style={{ height: '14px', background: 'var(--color-primary-light)', borderRadius: '3px', width: '45px', marginTop: 'auto' }}></div>
          </div>
        )}

        {filterType === 'news' && (
          <div className={styles.mockupContent} style={{ gap: '8px' }}>
            <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid rgba(0, 0, 0, 0.05)', paddingBottom: '6px' }}>
              <span style={{ fontSize: '9px', fontWeight: 'bold', color: 'var(--color-primary)' }}>PORTAL NEWS</span>
              <span style={{ fontSize: '9px', color: 'var(--color-text-muted)', marginLeft: 'auto' }}>Live</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '35px', height: '35px', background: 'rgba(0,0,0,0.05)', borderRadius: '3px' }}></div>
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ height: '8px', width: '90%', background: '#111', borderRadius: '2px' }}></div>
                <div style={{ height: '5px', width: '40%', background: 'var(--color-text-muted)', borderRadius: '1.5px' }}></div>
              </div>
            </div>
          </div>
        )}

        {(filterType === 'educational' || filterType === 'travel' || filterType === 'portfolio' || filterType === 'custom') && (
          <div className={styles.mockupContent}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupLogo} style={{ background: 'var(--color-primary-light)' }}></div>
              <div className={styles.mockupNav}>
                <span></span><span></span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', margin: 'auto 0' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(to right, var(--color-accent), var(--color-accent-light))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" strokeWidth="2.5">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                </svg>
              </div>
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ height: '8px', width: '80%', background: 'var(--color-text-dark)', borderRadius: '2px' }}></div>
                <div style={{ height: '6px', width: '50%', background: 'var(--color-text-muted)', borderRadius: '2px' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="portfolio" className={`${styles.portfolio} section-padding`}>
      <div className="container">
        <SectionHeader
          badge="PORTFOLIO HIGHLIGHTS"
          title={
            <>
              Delivering <span className="text-gradient">Digital Masterpieces</span>
            </>
          }
          description="Explore high-converting, custom-engineered digital systems and SaaS storefronts designed to scale commercial influence."
        />

        {/* Portfolio Projects Grid */}
        <div className={`${styles.portfolioGrid} reveal`}>
          {displayProjects.map((project) => (
            <div key={project.id} className={styles.portfolioCard}>
              {/* Browser frame decoration */}
              <div className={styles.cardBrowserHeader}>
                <div className={styles.browserDots}>
                  <span className={`${styles.dot} ${styles.dotRed}`}></span>
                  <span className={`${styles.dot} ${styles.dotYellow}`}></span>
                  <span className={`${styles.dot} ${styles.dotGreen}`}></span>
                </div>
                <div className={styles.browserAddressBar}>{project.title}</div>
              </div>

              {/* Render dynamic mockup visual placeholder */}
              <div className={styles.previewContainer}>
                {renderMockup(project)}
              </div>

              {/* Glassmorphic info overlay */}
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.projectCategory}>{project.category}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectTagline}>{project.description}</p>
                  
                  <div className={styles.actionRow}>
                    <a href={`#project/${project.slug}`} className={styles.viewLink}>
                      Explore Case
                      <svg className={styles.viewArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                    
                    <a href={project.details.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
                      Live Site
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.portfolioSocials}>
        <span className={styles.portfolioSocialsLabel}>Connect with our design desk:</span>
        <SocialsRow size={14} />
      </div>
    </section>
  );
};

export default Portfolio;
