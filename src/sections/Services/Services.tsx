import React, { useState } from 'react';
import styles from './Services.module.css';
import Card from '../../components/Card/Card';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Button from '../../components/Button/Button';
import FloatingSocials from '../../components/FloatingSocials/FloatingSocials';

interface Package {
  name: string;
  price: string;
  features: string[];
  delivery: string;
  revisions: string;
  badge?: string;
  isPopular?: boolean;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  packages: Package[];
  slug: string;
}

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPackages = (service: Service) => {
    setActiveService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  };

  const closePackages = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setActiveService(null);
    }, 300); // Wait for exit animation
    document.body.style.overflow = 'unset'; // Unlock background scrolling
  };

  const servicesList: Service[] = [
    {
      id: 1,
      title: 'Full Stack Website Development',
      slug: 'web-dev',
      description: 'Modern responsive business websites, ecommerce stores, dashboards, and custom web applications with premium UI/UX.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
      packages: [
        {
          name: 'Basic',
          price: '$300',
          features: ['5 Pages Website', 'Responsive Design', 'Basic UI/UX', 'Contact Form', 'Basic SEO Setup'],
          delivery: '7 Days',
          revisions: '2 Revisions'
        },
        {
          name: 'Standard',
          price: '$700',
          features: ['10 Pages Website', 'Custom Design', 'CMS Integration', 'Speed Optimization', 'On-Page SEO', 'Social Media Integration'],
          delivery: '12 Days',
          revisions: '4 Revisions',
          isPopular: true
        },
        {
          name: 'Premium',
          price: '$1500',
          features: ['15+ Pages Website', 'Fully Custom Design', 'Advanced Features', 'Ecommerce Setup', 'Security Setup', 'Full SEO Optimization', 'Admin Dashboard'],
          delivery: '20 Days',
          revisions: 'Unlimited Revisions'
        }
      ]
    },
    {
      id: 2,
      title: 'Company Profile Design',
      slug: 'branding',
      description: 'Professional company profiles, pitch decks, branding documents, and corporate presentations.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      packages: [
        {
          name: 'Basic',
          price: '$80',
          features: ['5 Pages Profile', 'Professional Layout', 'Company Info', 'Company Services', 'PDF Format'],
          delivery: '5 Days',
          revisions: '2 Revisions'
        },
        {
          name: 'Standard',
          price: '$150',
          features: ['10 Pages Profile', 'Custom Design', 'Infographics', 'Branding Colors', 'PDF + Editable File'],
          delivery: '8 Days',
          revisions: '4 Revisions',
          isPopular: true
        },
        {
          name: 'Premium',
          price: '$300',
          features: ['15+ Pages Profile', 'Premium Layout', 'Custom Graphics', 'Brand Identity Design', 'Print Ready File'],
          delivery: '12 Days',
          revisions: 'Unlimited Revisions'
        }
      ]
    },
    {
      id: 3,
      title: 'App Development',
      slug: 'app-dev',
      description: 'Modern Android and iOS mobile applications with elegant UI/UX and scalable architecture.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      packages: [
        {
          name: 'Basic',
          price: '$2000',
          features: ['Simple Mobile App', 'Android Only', 'Basic UI Design', 'API Integration'],
          delivery: '15 Days',
          revisions: '3 Revisions'
        },
        {
          name: 'Standard',
          price: '$4500',
          features: ['Android + iOS App', 'Custom UI/UX', 'Admin Panel', 'Push Notifications', 'Payment Integration'],
          delivery: '30 Days',
          revisions: '5 Revisions',
          isPopular: true
        },
        {
          name: 'Premium',
          price: '$8000',
          features: ['Advanced Mobile App', 'Android + iOS', 'Custom Dashboard', 'CRM Integration', 'Full Testing', 'Maintenance Support'],
          delivery: '45 Days',
          revisions: 'Unlimited Revisions'
        }
      ]
    },
    {
      id: 4,
      title: 'CRM Software',
      slug: 'crm',
      description: 'Business management systems and CRM solutions to manage customers, sales, teams, and automation.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      packages: [
        {
          name: 'Basic',
          price: '$500',
          features: ['Contact Management', 'Lead Tracking', 'Basic Dashboard', 'User Login System'],
          delivery: '10 Days',
          revisions: '3 Revisions'
        },
        {
          name: 'Standard',
          price: '$1200',
          features: ['Sales Pipeline', 'Customer Database', 'Email Integration', 'Reports & Analytics'],
          delivery: '18 Days',
          revisions: '5 Revisions',
          isPopular: true
        },
        {
          name: 'Premium',
          price: '$2500',
          features: ['Custom CRM System', 'Automation Tools', 'Team Management', 'Advanced Analytics'],
          delivery: '30 Days',
          revisions: 'Unlimited Revisions'
        }
      ]
    },
    {
      id: 5,
      title: 'UI/UX Designing',
      slug: 'ui-ux',
      description: 'Premium web and mobile UI/UX design with modern interfaces and interactive prototypes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      ),
      packages: [
        {
          name: 'Basic',
          price: '$150',
          features: ['3 Screens Design', 'Wireframe Layout', 'Basic UI styling'],
          delivery: '4 Days',
          revisions: '2 Revisions'
        },
        {
          name: 'Standard',
          price: '$350',
          features: ['8 Screens Design', 'Interactive Prototype', 'Mobile + Web UI layouts'],
          delivery: '7 Days',
          revisions: '4 Revisions',
          isPopular: true
        },
        {
          name: 'Premium',
          price: '$700',
          features: ['15+ Screens', 'Full App UI/UX systems', 'Advanced Prototype animations'],
          delivery: '12 Days',
          revisions: 'Unlimited Revisions'
        }
      ]
    },
    {
      id: 6,
      title: 'Video Editing',
      slug: 'video-editing',
      description: 'Professional video editing for social media, advertisements, promotional content, and branding.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
      packages: [
        {
          name: 'Basic',
          price: '$40/vid',
          features: ['Video Cutting', 'Basic Transitions', 'Background Music', '1080p Export'],
          delivery: '3 Days',
          revisions: '2 Revisions'
        },
        {
          name: 'Standard',
          price: '$100',
          features: ['Professional Editing', 'Motion Graphics', 'Text Animation', 'Sound Effects'],
          delivery: '5 Days',
          revisions: '4 Revisions',
          isPopular: true
        },
        {
          name: 'Premium',
          price: '$250',
          features: ['Advanced Editing', 'Cinematic Effects', 'Custom Animation', 'Voice Sync', 'Color Correction'],
          delivery: '8 Days',
          revisions: 'Unlimited Revisions'
        }
      ]
    },
    {
      id: 7,
      title: 'Navttc',
      slug: 'navttc',
      description: 'Professional Navttc services and processing.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      packages: [
        {
          name: 'Standard',
          price: '16000 PKR',
          features: ['Complete Processing', 'Fast Turnaround', 'Dedicated Support'],
          delivery: '3-5 Days',
          revisions: 'None',
          isPopular: true
        }
      ]
    },
    {
      id: 8,
      title: 'Tahseer',
      slug: 'tahseer',
      description: 'Reliable Tahseer documentation and clearance.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      packages: [
        {
          name: 'Standard',
          price: '1000 PKR',
          features: ['Document Review', 'Quick Clearance', 'Verified Process'],
          delivery: '1-2 Days',
          revisions: 'None',
          isPopular: true
        }
      ]
    },
    {
      id: 9,
      title: 'Gamca',
      slug: 'gamca',
      description: 'Gamca medical appointment booking and services.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      packages: [
        {
          name: 'Standard',
          price: '3500 PKR',
          features: ['Medical Appointment', 'Center Allocation', 'Slip Generation'],
          delivery: '1 Day',
          revisions: 'None',
          isPopular: true
        }
      ]
    }
  ];

  return (
    <section id="services" className={`${styles.services} section-padding`}>
      <FloatingSocials preset="services" />
      <div className="container">
        <SectionHeader
          badge="OUR CAPABILITIES"
          title={
            <>
              High-Performance <span className="text-gradient">Digital Solutions</span>
            </>
          }
          description="We deliver full-suite digital solutions designed to grow your business, build credibility, and convert visitors into long-term loyal clients."
        />

        {/* Services Showcase Grid */}
        <div className={`${styles.servicesGrid} reveal`}>
          {servicesList.map((service) => (
            <Card key={service.id} variant="default" interactive={true} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginTop: 'auto', width: '100%' }}>
                <button className={styles.packagesBtn} onClick={() => openPackages(service)}>
                  View Packages
                  <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <a href={`#service/${service.slug}`} style={{ fontSize: '0.9rem', color: 'var(--color-primary-light)', fontWeight: 700, textDecoration: 'none', marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Learn More
                  <span>&rarr;</span>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Glassmorphic Interactive Packages Overlay Modal */}
      {activeService && (
        <div className={`${styles.modalOverlay} ${isModalOpen ? styles.modalOpen : ''}`} onClick={closePackages}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderTitle}>
                <span className={styles.modalBadge}>PACKAGES</span>
                <h2 className={styles.modalHeading}>{activeService.title}</h2>
              </div>
              <button className={styles.closeBtn} onClick={closePackages} aria-label="Close Packages">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Packages Grid */}
            <div className={styles.packagesGrid}>
              {activeService.packages.map((pkg, idx) => (
                <div key={idx} className={`${styles.packageCard} ${pkg.isPopular ? styles.popularCard : ''}`}>
                  {pkg.isPopular && <div className={styles.popularBadge}>MOST POPULAR</div>}
                  <div className={styles.packageHeader}>
                    <h3 className={styles.packageName}>{pkg.name}</h3>
                    <div className={styles.packagePrice}>{pkg.price}</div>
                  </div>
                  
                  {/* Checklist */}
                  <ul className={styles.featureList}>
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className={styles.featureItem}>
                        <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Meta (Delivery & Revisions) */}
                  <div className={styles.packageMeta}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Delivery</span>
                      <span className={styles.metaVal}>{pkg.delivery}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Revisions</span>
                      <span className={styles.metaVal}>{pkg.revisions}</span>
                    </div>
                  </div>

                  {/* Order Button */}
                  <a href="#contact" onClick={closePackages} className={styles.orderLink}>
                    <Button variant={pkg.isPopular ? 'accent' : 'primary'} size="md" className={styles.orderBtn}>
                      Order Package
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
