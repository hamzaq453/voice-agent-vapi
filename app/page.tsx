'use client';

import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/ui/Hero';
import Features from './components/ui/Features';
import Pricing from './components/ui/Pricing';
import DemoCard from './components/ui/DemoCard';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <DemoCard />
      </main>
      <Footer />
    </>
  );
}
