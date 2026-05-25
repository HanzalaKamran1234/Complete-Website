import React, { useState } from 'react';
import styles from './Contact.module.css';
import Button from '../../components/Button/Button';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Card from '../../components/Card/Card';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'web-dev',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only presentation: simulate submit success
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', service: 'web-dev', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className={`${styles.contact} section-padding`}>
      <div className="container">
        <SectionHeader
          badge="CONTACT US"
          title={
            <>
              Let's Create Something <span className="text-gradient">Exceptional</span>
            </>
          }
          description="Ready to elevate your digital footprint? Send us a message and our strategy team will respond within one business day."
        />

        <div className={styles.grid}>
          {/* Contact Form Panel (Left) */}
          <div className={`${styles.formPanel} reveal reveal-left`}>
            <Card variant="default" interactive={false} className={styles.contactCard}>
              {submitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className={styles.successTitle}>Inquiry Sent Successfully!</h3>
                  <p className={styles.successDesc}>
                    Thank you for reaching out. A senior partner from our strategy team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.label}>Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="service" className={styles.label}>Project Interest</label>
                    <div className={styles.selectWrapper}>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={styles.select}
                      >
                        <option value="web-dev">Website Development</option>
                        <option value="ecommerce">Ecommerce Solutions</option>
                        <option value="ui-ux">UI/UX Design & Branding</option>
                        <option value="seo">SEO & Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="message" className={styles.label}>Project Description</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your brand, goals, and timeline..."
                      className={styles.textarea}
                      rows={5}
                      required
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary" size="md" className={styles.submitBtn}>
                    Send Project Brief
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Business Info Panel (Right) */}
          <div className={`${styles.infoPanel} reveal reveal-right`}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Connect Directly</h3>
              <p className={styles.infoSubtitle}>Prefer direct correspondence? Call or email our office directly.</p>

              <div className={styles.contactDetails}>
                <div className={styles.detailItem}>
                  <div className={styles.detailIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className={styles.detailText}>
                    <span className={styles.detailLabel}>Email Our Partners</span>
                    <a href="mailto:14starssocaileedge@gmail.com" className={styles.detailLink}>14starssocaileedge@gmail.com</a>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <div className={styles.detailIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className={styles.detailText}>
                    <span className={styles.detailLabel}>Call Our Office</span>
                    <a href="tel:+923117501630" className={styles.detailLink}>+92 311 7501630</a>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <div className={styles.detailIcon} style={{ background: 'rgba(37, 211, 102, 0.1)', color: '#25D366' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <div className={styles.detailText}>
                    <span className={styles.detailLabel}>WhatsApp Message</span>
                    <a href="https://wa.me/923117501630" target="_blank" rel="noopener noreferrer" className={styles.detailLink} style={{ color: '#25D366' }}>
                      Message on WhatsApp &rarr;
                    </a>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <div className={styles.detailIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className={styles.detailText}>
                    <span className={styles.detailLabel}>Headquarters</span>
                    <p className={styles.detailVal}>Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className={styles.socialsTitle}>Follow Our Socials</div>
              <div className={styles.socialsRow}>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://instagram.com/14starssocialedgepvtltd" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Google">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Z" />
                    <path d="M17.5 12H12V14.5H15A3 3 0 1 1 12 9.5" />
                  </svg>
                </a>
              </div>

              {/* Interactive Google Map */}
              <div className={styles.mapContainer}>
                <iframe
                  title="SocialEdge Islamabad Headquarters Map"
                  src="https://maps.google.com/maps?q=Islamabad,%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
export { Contact as default_Contact };
