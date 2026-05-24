import React, { useEffect } from 'react';
import Navbar from './sections/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import TrustedBy from './sections/TrustedBy/TrustedBy';
import Services from './sections/Services/Services';
import Portfolio from './sections/Portfolio/Portfolio';
import WhyChooseUs from './sections/WhyChooseUs/WhyChooseUs';
import Process from './sections/Process/Process';
import Testimonials from './sections/Testimonials/Testimonials';
import Cta from './sections/Cta/Cta';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    // Scroll reveal observer initialization
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Unobserve once triggered to lock animation in state
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is in view
        rootMargin: '0px 0px -60px 0px', // Delay trigger slightly from viewport bottom
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    // Dynamic cursor coordinates handler for Card borders borderGlow highlights
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('[class*="borderGlow"]');
      cards.forEach((glowEl) => {
        const cardEl = glowEl.parentElement;
        if (cardEl) {
          const rect = cardEl.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          (glowEl as HTMLElement).style.setProperty('--x', `${x}px`);
          (glowEl as HTMLElement).style.setProperty('--y', `${y}px`);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
