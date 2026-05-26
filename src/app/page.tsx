import React from 'react';
import Navbar from '../components/Navbar';
import CinematicHero from '../components/CinematicHero';
import TrustedBy from '../components/TrustedBy';
import InteractiveCanvas from '../components/InteractiveCanvas';
import PrestigePortfolio from '../components/PrestigePortfolio';
import EliteDashboardPreview from '../components/EliteDashboardPreview';
import CreativeProcess from '../components/CreativeProcess';
import About from '../components/About';
import LuxuryTestimonials from '../components/LuxuryTestimonials';
import CinematicContact from '../components/CinematicContact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-background select-none">
        <CinematicHero />
        <TrustedBy />
        <InteractiveCanvas />
        <PrestigePortfolio />
        <EliteDashboardPreview />
        <CreativeProcess />
        <About />
        <LuxuryTestimonials />
        <CinematicContact />
      </main>
      <Footer />
    </>
  );
}
