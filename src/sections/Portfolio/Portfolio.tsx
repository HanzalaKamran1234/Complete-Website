import React, { useState } from 'react';
import styles from './Portfolio.module.css';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

interface Project {
  id: number;
  title: string;
  category: 'development' | 'ecommerce' | 'design';
  categoryLabel: string;
  tagline: string;
  previewBg: string;
  previewContent: React.ReactNode;
}

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'development' | 'ecommerce' | 'design'>('all');

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'development', label: 'Web Dev' },
    { value: 'ecommerce', label: 'E-Commerce' },
    { value: 'design', label: 'UI/UX Design' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Luxe & Co.',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce Store',
      tagline: 'High-end jewelry & fashion retailer digital storefront.',
      previewBg: 'linear-gradient(135deg, #1f1a24 0%, #322639 100%)',
      previewContent: (
        <div className={styles.luxePreview}>
          <div className={styles.luxeHeader}>
            <div className={styles.luxeLogo}>LUXE</div>
            <div className={styles.luxeMenu}>
              <span></span><span></span>
            </div>
          </div>
          <div className={styles.luxeHero}>
            <span className={styles.luxeTag}>NEW COLLECTION</span>
            <div className={styles.luxeTitle}>Timeless Elegance</div>
            <div className={styles.luxeBtn}>SHOP NOW</div>
          </div>
          <div className={styles.luxeProducts}>
            <div className={styles.luxeProdCard}></div>
            <div className={styles.luxeProdCard}></div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Nova SaaS',
      category: 'development',
      categoryLabel: 'Web Application',
      tagline: 'Enterprise cloud platform featuring high-fidelity analytics.',
      previewBg: 'linear-gradient(135deg, #0e1726 0%, #162238 100%)',
      previewContent: (
        <div className={styles.novaPreview}>
          <div className={styles.novaNav}>
            <div className={styles.novaLogo}></div>
            <div className={styles.novaCta}></div>
          </div>
          <div className={styles.novaContent}>
            <div className={styles.novaHeading}></div>
            <div className={styles.novaChart}>
              <svg viewBox="0 0 100 40" fill="none" className={styles.novaSvgChart}>
                <path d="M0,35 Q15,10 30,25 T60,5 T90,20 L100,20" stroke="var(--color-accent)" strokeWidth="3" fill="none" />
                <path d="M0,35 Q15,10 30,25 T60,5 T90,20 L100,20 L100,40 L0,40 Z" fill="rgba(212, 161, 42, 0.05)" />
                <circle cx="60" cy="5" r="3" fill="var(--color-accent-light)" />
              </svg>
            </div>
            <div className={styles.novaGrid}>
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Apex Capital',
      category: 'design',
      categoryLabel: 'UI/UX Design Case',
      tagline: 'Asset management portal dashboard with ultra-clean interactions.',
      previewBg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      previewContent: (
        <div className={styles.apexPreview}>
          <div className={styles.apexHeader}>
            <span className={styles.apexDot}></span>
            <span className={styles.apexDot}></span>
            <span className={styles.apexDot}></span>
          </div>
          <div className={styles.apexBody}>
            <div className={styles.apexSidebar}>
              <span></span><span></span><span></span>
            </div>
            <div className={styles.apexMain}>
              <div className={styles.apexTitle}></div>
              <div className={styles.apexMetrics}>
                <div className={styles.apexMetCard}></div>
                <div className={styles.apexMetCard}></div>
              </div>
              <div className={styles.apexTable}></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: 'Solaria Energy',
      category: 'development',
      categoryLabel: 'Web Platform',
      tagline: 'Marketing landing page for clean energy infrastructure firm.',
      previewBg: 'linear-gradient(135deg, #fafaf9 0%, #f5f5f4 100%)',
      previewContent: (
        <div className={styles.solariaPreview}>
          <div className={styles.solariaNav}>
            <span className={styles.solariaLogo}></span>
            <span className={styles.solariaLink}></span>
          </div>
          <div className={styles.solariaBody}>
            <div className={styles.solariaBadge}></div>
            <div className={styles.solariaTitle}>Solar Grid Analytics</div>
            <div className={styles.solariaRow}>
              <div className={styles.solariaCircle}>
                <svg viewBox="0 0 36 36" className={styles.circularChart}>
                  <path className={styles.circleBg} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e6e6e6" strokeWidth="3" />
                  <path className={styles.circle} strokeDasharray="82, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--color-primary-light)" strokeWidth="3" />
                </svg>
              </div>
              <div className={styles.solariaLines}>
                <span></span><span></span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className={`${styles.portfolio} section-padding`}>
      <div className="container">
        <SectionHeader
          badge="PORTFOLIO"
          title={
            <>
              Successfully Delivered <span className="text-gradient">Digital Masterpieces</span>
            </>
          }
          description="A selection of high-converting, premium web assets designed and developed by our team of specialists."
        />

        {/* Filter Navigation */}
        <div className={styles.filterContainer}>
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`${styles.filterBtn} ${activeFilter === filter.value ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveFilter(filter.value as any)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Projects Grid */}
        <div className={`${styles.portfolioGrid} reveal`}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={styles.portfolioCard}
              style={{ background: project.previewBg }}
            >
              {/* Browser frame decoration */}
              <div className={styles.cardBrowserHeader}>
                <div className={styles.browserDots}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
                <div className={styles.browserAddressBar}>{project.title.toLowerCase().replace(/\s+/g, '')}.com</div>
              </div>

              {/* Render unique mockup components */}
              <div className={styles.previewContainer}>
                {project.previewContent}
              </div>

              {/* Glassmorphic info overlay */}
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.projectCategory}>{project.categoryLabel}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectTagline}>{project.tagline}</p>
                  <a href="#contact" className={styles.viewLink}>
                    View Project Case
                    <svg className={styles.viewArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
export { Portfolio as default_Portfolio };
