import React from 'react';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import Demo  from './component/Demo';
import Features from './component/Features';
import Pricing from './component/Pricing';
import Reviews  from './component/Reviews';
import Footer from './component/Footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Demo />
      <Features />
      <Pricing />
      <Reviews />
      <Footer />
    </>
  );
}
