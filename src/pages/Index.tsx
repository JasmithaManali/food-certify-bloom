
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesCarousel from "../components/ServicesCarousel";
import CertificationSection from "../components/CertificationSection";
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
      <CertificationSection
        title="Ensuring the Highest Standards of Food safety and Quality."
        description="Unavar, is a distinguished certification body dedicated to aiding Indian Food Business Operators (FBOs) in obtaining certifications aligned with the Food Safety Standards Authority of India (FSSAI), International Organization for Standardization (ISO), Quality Council of India (QCI) and various global standards."
        imageUrl="/assets/cert.jpg"
        imageAlt="Food safety and quality certification"
        logoUrl="/assets/fssai.svg"
        logoAlt="QCI Accredited Organization"
      />
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
