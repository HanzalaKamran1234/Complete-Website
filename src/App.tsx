import React, { useState, useEffect } from 'react';
import Navbar from './sections/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import TrustedBy from './sections/TrustedBy/TrustedBy';
import Services from './sections/Services/Services';
import Portfolio from './sections/Portfolio/Portfolio';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

// Sections
import About from './sections/About/About';
import InvoicesCollaboration from './sections/InvoicesCollaboration/InvoicesCollaboration';

// Pages
import { PortfolioPage } from './pages/Portfolio/PortfolioPage';
import { CaseStudyPage } from './pages/CaseStudy/CaseStudyPage';
import { ServiceDetailPage } from './pages/ServiceDetail/ServiceDetailPage';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return window.location.hash || '#';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash || '#');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
  }, [currentRoute]);

  // Handle routing scroll side effects
  useEffect(() => {
    const hash = currentRoute;
    const isSubpage = hash.startsWith('#portfolio') || 
                      hash.startsWith('#project/') || 
                      hash.startsWith('#service/');

    if (isSubpage) {
      window.scrollTo(0, 0);
    } else {
      if (!hash || hash === '#' || hash === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const timer = setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [currentRoute]);

  const renderMainContent = () => {
    if (currentRoute === '#portfolio') {
      return <PortfolioPage />;
    }

    if (currentRoute.startsWith('#project/')) {
      const slug = currentRoute.substring('#project/'.length);
      return <CaseStudyPage projectSlug={slug} />;
    }

    if (currentRoute.startsWith('#service/')) {
      const slug = currentRoute.substring('#service/'.length);
      return <ServiceDetailPage serviceSlug={slug} />;
    }

    // Default Home Layout
    return (
      <>
        <div id="home">
          <Hero />
        </div>
        <TrustedBy />
        <Services />
        <Portfolio />
        <InvoicesCollaboration />
        <About />
        <Contact />
      </>
    );
  };

  return (
    <>
      <Navbar />
      
      {/* Global Floating Social Sidebar */}
      <div className="floatingSidebar">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="floatingSidebarLink" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="floatingSidebarLink" aria-label="Facebook">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a href="https://instagram.com/14starssocialedgepvtltd" target="_blank" rel="noopener noreferrer" className="floatingSidebarLink" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="floatingSidebarLink" aria-label="Google">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Z" />
            <path d="M17.5 12H12V14.5H15A3 3 0 1 1 12 9.5" />
          </svg>
        </a>
        <div className="sidebarLine"></div>
      </div>

      <main>
        {renderMainContent()}
      </main>
      <Footer />
    </>
  );
};

export default App;
