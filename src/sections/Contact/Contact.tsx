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
                    <a href="mailto:partners@socialedge.com.pk" className={styles.detailLink}>partners@socialedge.com.pk</a>
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
                    <a href="tel:+18005550199" className={styles.detailLink}>+1 (800) 555-0199</a>
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
                    <p className={styles.detailVal}>88 Luxury Plaza, Suite 400<br />New York, NY 10001</p>
                  </div>
                </div>
              </div>

              {/* Mock map graphic placeholder */}
              <div className={styles.mapContainer}>
                <div className={styles.mapOverlay}>
                  <span className={styles.mapPin}>
                    <span className={styles.pinPulse}></span>
                  </span>
                  <span className={styles.mapLabel}>SOCIALEDGE HQ</span>
                </div>
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
