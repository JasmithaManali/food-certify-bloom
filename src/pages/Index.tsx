
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesCarousel from "../components/ServicesCarousel";
import CertificationSection from "../components/CertificationSection";

import TestimonialComponent from '../components/TestimonialComponent';
import ProcessSection from '../components/ProcessSection';
import Testimonials from '../components/Testimonials';

import Footer from '../components/Footer';
import CertificateStats from '@/components/CertificateStats';
import ClientMarquee from '../components/ClientMarquee';
import BlurText from '../components/BlurText';

import A2BLogo from '../assets/A2B-Logo-PDF-1.webp';
import Anjappar from '../assets/Anjappar.webp';
import AshokLeylandLogo from '../assets/Ashok-Leyland-Logo.webp';
import ChristUniversity from '../assets/CHRIST UNIVERSITY.webp';
import FortunePandiyanHotels from '../assets/FORTUNE PANDIYAN HOTELS.webp';
import HardCastle from '../assets/HardCastle.png';
import IdhayamOils from '../assets/IDHAYAM OILS.webp';
import Jubilant from '../assets/Jubilant.webp';
import KRBakes from '../assets/KR BAKES.webp';
import Kitchen from '../assets/Kitchen.webp';
import KumarMess from '../assets/Kumar Mess.webp';
import MuruganIdly from '../assets/Murugan Idly.webp';
import PeramburSrinivasa from '../assets/PERAMBUR SRINIVASA.webp';
import RaddissonBlu from '../assets/radisson.png';
import RKGLogo from '../assets/RKG LOGO.webp';
import SaharaHospitalityMumbai from '../assets/SAHARA HOSPITALITY MUMBAI.webp';
import Sapphire from '../assets/Sapphire.webp';
import TuyaaChennaiLogo from '../assets/Tuyaa-Chennai-logo.png';
import AromaBakeryCoimbatore from '../assets/aroma Bakery Coimbatore.webp';
import GRT from '../assets/grt.webp';
import MaduraiMeenakshiMissionHospital from '../assets/madurai meenakshi mission hospital.webp';
import TheParkChennai from '../assets/the park chennai.webp';

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
      <CertificateStats/>
    
        <TestimonialComponent />
      {/* <ProcessSection /> */}
      {/* <Testimonials /> */}

      <BlurText className="text-4xl font-bold text-center item-center justify-center text-black my-8" text="Our Clients" />
      <ClientMarquee
        images={[
          A2BLogo, Anjappar, AshokLeylandLogo, ChristUniversity, FortunePandiyanHotels,
          HardCastle, IdhayamOils, Jubilant, KRBakes, Kitchen, KumarMess, MuruganIdly,
          PeramburSrinivasa, RaddissonBlu, RKGLogo, SaharaHospitalityMumbai, Sapphire,
          TuyaaChennaiLogo, AromaBakeryCoimbatore, GRT, MaduraiMeenakshiMissionHospital,
          TheParkChennai
        ]}
      />
      <Footer />
    </div>
  );
};

export default Index;
