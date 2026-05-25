import React, { useState, useEffect } from 'react';
import Navbar from './sections/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import TrustedBy from './sections/TrustedBy/TrustedBy';
import Services from './sections/Services/Services';
import Portfolio from './sections/Portfolio/Portfolio';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import SocialsRow from './components/SocialsRow/SocialsRow';

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
        <SocialsRow size={14} className="floatingSidebarGrid" />
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
