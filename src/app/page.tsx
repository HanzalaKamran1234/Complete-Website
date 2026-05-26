import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import InvoicesCollaboration from '../components/InvoicesCollaboration';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-background select-none">
        <Hero />
        <TrustedBy />
        <Services />
        <Portfolio />
        <InvoicesCollaboration />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
