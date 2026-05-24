import React, { useState } from 'react';
import styles from './Testimonials.module.css';
import Card from '../../components/Card/Card';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  stars: number;
  avatarBg: string;
  initials: string;
}

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Aura Digital transformed our online presence. Their engineering expertise combined with a refined luxury aesthetic gave us a website that truly represents our brand and has boosted our organic leads by 180%.",
      author: "Vivienne Vance",
      role: "Creative Director",
      company: "Luxe & Co.",
      stars: 5,
      avatarBg: "linear-gradient(135deg, #4B1D8C 0%, #D4A017 100%)",
      initials: "VV"
    },
    {
      id: 2,
      quote: "The performance gains were incredible. Our page load times dropped from 4.5 seconds to 750 milliseconds. Google Web Vitals are green across the board, and our checkout drop-offs decreased by 32%.",
      author: "Marcus Sterling",
      role: "VP of Product",
      company: "Nova SaaS",
      stars: 5,
      avatarBg: "linear-gradient(135deg, #6D3ECF 0%, #F2C14E 100%)",
      initials: "MS"
    },
    {
      id: 3,
      quote: "Working with them was seamless. They delivered the project on time and provided strategic suggestions that improved our database interactions and user flow. Highly professional engineering.",
      author: "Sarah Jenkins",
      role: "CMO",
      company: "AlphaMedia",
      stars: 5,
      avatarBg: "linear-gradient(135deg, #1F1F1F 0%, #D4A017 100%)",
      initials: "SJ"
    }
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className={`${styles.testimonials} section-padding`}>
      {/* Soft background blob */}
      <div className={styles.glowBlob}></div>

      <div className="container">
        <SectionHeader
          badge="TESTIMONIALS"
          title={
            <>
              What Our Elite <span className="text-gradient">Partners Say</span>
            </>
          }
          description="Hear from the leaders and directors of high-performing brands who have scaled their web presence with our team."
        />

        <div className={`${styles.sliderContainer} reveal`}>
          {/* Slider Controls (Left Button) */}
          <button 
            className={`${styles.navBtn} ${styles.prevBtn}`} 
            onClick={handlePrev}
            aria-label="Previous Testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>

          {/* Testimonials Deck */}
          <div className={styles.sliderDeck}>
            {testimonials.map((item, index) => {
              let posClass = styles.slideInactive;
              if (index === activeIdx) {
                posClass = styles.slideActive;
              } else if (index === (activeIdx - 1 + testimonials.length) % testimonials.length) {
                posClass = styles.slidePrev;
              } else if (index === (activeIdx + 1) % testimonials.length) {
                posClass = styles.slideNext;
              }

              return (
                <div key={item.id} className={`${styles.slide} ${posClass}`}>
                  <Card variant="glass" interactive={false} className={styles.testimonialCard}>
                    {/* Stars */}
                    <div className={styles.starRow}>
                      {[...Array(item.stars)].map((_, i) => (
                        <svg key={i} className={styles.starIcon} viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className={styles.quoteText}>
                      "{item.quote}"
                    </blockquote>

                    {/* Author Meta */}
                    <div className={styles.authorMeta}>
                      <div className={styles.avatar} style={{ background: item.avatarBg }}>
                        {item.initials}
                      </div>
                      <div className={styles.authorInfo}>
                        <h4 className={styles.authorName}>{item.author}</h4>
                        <p className={styles.authorDetails}>{item.role} at <span className={styles.companyName}>{item.company}</span></p>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Slider Controls (Right Button) */}
          <button 
            className={`${styles.navBtn} ${styles.nextBtn}`} 
            onClick={handleNext}
            aria-label="Next Testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        {/* Pager Dots indicator */}
        <div className={styles.pagerDots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.pagerDot} ${index === activeIdx ? styles.pagerDotActive : ''}`}
              onClick={() => setActiveIdx(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
export { Testimonials as default_Testimonials };
