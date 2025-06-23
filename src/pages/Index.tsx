
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesCarousel from '../components/ServicesCarousel';
import FeaturesGrid from '../components/FeaturesGrid';
import ProcessSection from '../components/ProcessSection';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesCarousel />
      <FeaturesGrid />
      <ProcessSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
