import React, { useState, useMemo } from 'react';
import styles from './PortfolioPage.module.css';
import { projectsData } from '../../data/projects';
import type { Project } from '../../data/projects';
import Button from '../../components/Button/Button';

export const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'business', label: 'Business' },
    { value: 'ecommerce', label: 'E-Commerce' },
    { value: 'educational', label: 'Educational' },
    { value: 'travel', label: 'Travel' },
    { value: 'news', label: 'News & Media' },
    { value: 'portfolio', label: 'Portfolio' },
    { value: 'custom', label: 'Custom' },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData;
    return projectsData.filter((p) => p.filter === activeFilter);
  }, [activeFilter]);

  // Statistics counters data
  const stats = [
    { value: '28', label: 'Premium Web Projects' },
    { value: '100%', label: 'Delivery Integrity' },
    { value: '12+', label: 'Industries Served' },
    { value: '95+', label: 'Avg Speed Score' }
  ];

  // Dynamically render a modern UI mockup block inside the cards based on category
  const renderMockup = (project: Project) => {
    const filterType = project.filter;

    // Use project slug or ID to generate consistent gradients
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
                <span></span><span></span><span></span>
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
              <div className={styles.mockupChartBar} style={{ height: '40%' }}></div>
              <div className={styles.mockupChartBar} style={{ height: '70%' }}></div>
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
              <div className={styles.mockupHeading} style={{ width: '90%', height: '14px' }}></div>
              <div className={styles.mockupSubheading} style={{ width: '70%' }}></div>
              <div className={styles.mockupSubheading} style={{ width: '50%' }}></div>
            </div>
            <div style={{ height: '15px', background: 'var(--color-primary-light)', borderRadius: '3px', width: '50px', marginTop: 'auto' }}></div>
          </div>
        )}

        {filterType === 'news' && (
          <div className={styles.mockupContent} style={{ gap: '8px' }}>
            <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid rgba(0, 0, 0, 0.05)', paddingBottom: '6px' }}>
              <span style={{ fontSize: '9px', fontWeight: 'bold', color: 'var(--color-primary)' }}>DAILY NEWS</span>
              <span style={{ fontSize: '9px', color: 'var(--color-text-muted)', marginLeft: 'auto' }}>Live</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '40px', height: '40px', background: 'rgba(0,0,0,0.05)', borderRadius: '3px' }}></div>
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ height: '8px', width: '90%', background: '#111', borderRadius: '2px' }}></div>
                <div style={{ height: '8px', width: '80%', background: '#111', borderRadius: '2px' }}></div>
                <div style={{ height: '5px', width: '40%', background: 'var(--color-text-muted)', borderRadius: '1.5px' }}></div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '40px', height: '40px', background: 'rgba(0,0,0,0.05)', borderRadius: '3px' }}></div>
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ height: '8px', width: '90%', background: '#111', borderRadius: '2px' }}></div>
                <div style={{ height: '8px', width: '70%', background: '#111', borderRadius: '2px' }}></div>
                <div style={{ height: '5px', width: '50%', background: 'var(--color-text-muted)', borderRadius: '1.5px' }}></div>
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
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'linear-gradient(to right, var(--color-accent), var(--color-accent-light))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" strokeWidth="2.5">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ height: '10px', width: '80%', background: 'var(--color-text-dark)', borderRadius: '2px' }}></div>
                <div style={{ height: '6px', width: '50%', background: 'var(--color-text-muted)', borderRadius: '2px' }}></div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '6px', marginTop: 'auto' }}>
              <div style={{ height: '6px', width: '30px', background: 'rgba(0,0,0,0.1)', borderRadius: '2px' }}></div>
              <div style={{ height: '6px', width: '20px', background: 'rgba(0,0,0,0.1)', borderRadius: '2px' }}></div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.portfolioPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>
        <div className={`${styles.heroContent} container`}>
          <span className={styles.badge}>Our Work</span>
          <h1 className={styles.title}>
            Mastering Digital Web <span className={styles.titleHighlight}>Elegance & Power</span>
          </h1>
          <p className={styles.tagline}>
            Explore our curated gallery of 28 bespoke websites, corporate portals, and software systems. 
            Each project is meticulously built from scratch using clean code and industry-leading design paradigms.
          </p>

          {/* Stats Summary Counter */}
          <div className={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <div key={idx} className={styles.statCard}>
                <div className={styles.statVal}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Options (Sticky) */}
      <section className={styles.filterSection}>
        <div className={`${styles.filterContainer} container`}>
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`${styles.filterBtn} ${activeFilter === filter.value ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Showcase Grid */}
      <section className={`${styles.gridSection} container`}>
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              {/* Browser bar layout */}
              <div className={styles.cardBrowserHeader}>
                <div className={styles.browserDots}>
                  <span className={`${styles.dot} ${styles.dotRed}`}></span>
                  <span className={`${styles.dot} ${styles.dotYellow}`}></span>
                  <span className={`${styles.dot} ${styles.dotGreen}`}></span>
                </div>
                <div className={styles.browserAddressBar}>{project.title}</div>
              </div>

              {/* Dynamic visual mockup representation */}
              <div className={styles.previewContainer}>
                {renderMockup(project)}
              </div>

              {/* Glassmorphic Overlay detailing Case Study details on hover */}
              <div className={styles.overlay}>
                <div className={styles.overlayTop}>
                  <span className={styles.overlayCategory}>{project.category}</span>
                  <h3 className={styles.overlayTitle}>{project.title}</h3>
                  <p className={styles.overlayDesc}>{project.description}</p>
                  <div className={styles.techList}>
                    {project.techStack.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.overlayCta}>
                  <a href={`#project/${project.slug}`} className={styles.caseStudyBtn}>
                    Explore Case Study
                  </a>
                  <a
                    href={project.details.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.liveLink}
                  >
                    <span>Visit Live</span>
                    <svg
                      className={styles.liveIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* bottom converting CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaGlow}></div>
        <div className={`${styles.ctaContent} container`}>
          <h2 className={styles.ctaTitle}>Ready to build your digital masterpiece?</h2>
          <p className={styles.ctaDesc}>
            Let our senior software engineers and elite designers build your custom portal, dashboard, or SaaS storefront.
          </p>
          <div className={styles.ctaButtons}>
            <a href="#contact">
              <Button variant="accent" size="lg">Start Your Project</Button>
            </a>
            <a href="#home" style={{ marginLeft: '10px' }}>
              <Button variant="outline" size="lg">Explore Services</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
