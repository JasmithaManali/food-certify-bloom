import React, { useState, useEffect, useCallback } from 'react';
import {
  FileCheck, Award, Home, Leaf, Utensils, School, Star, ChevronLeft, ChevronRight
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import FSSAI from '../assets/fssai.png'; // <-- Importing the FSSAI image

const ServicesCarousel = () => {
  const [emblaInspectionRef, emblaInspectionApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    dragFree: false,
    startIndex: 0,
  });

  const [emblaCertificationRef, emblaCertificationApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    dragFree: false,
    startIndex: 2,
  });

  const [selectedInspectionIndex, setSelectedInspectionIndex] = useState(0);
  const [selectedCertificationIndex, setSelectedCertificationIndex] = useState(0);

  useEffect((): void => {
    if (!emblaInspectionApi) return;
    const onSelect = () => setSelectedInspectionIndex(emblaInspectionApi.selectedScrollSnap());
    emblaInspectionApi.on('select', onSelect);
    onSelect();
    return () => emblaInspectionApi.off('select', onSelect);
  }, [emblaInspectionApi]);

  useEffect((): (() => void) => {
    if (!emblaCertificationApi) return;
    const onSelect = () => setSelectedCertificationIndex(emblaCertificationApi.selectedScrollSnap());
    emblaCertificationApi.on('select', onSelect);
    onSelect();
    return () => emblaCertificationApi.off('select', onSelect);
  }, [emblaCertificationApi]);

  const calculateScale = useCallback((index, isInspection) => {
    const emblaApi = isInspection ? emblaInspectionApi : emblaCertificationApi;
    const selectedIndex = isInspection ? selectedInspectionIndex : selectedCertificationIndex;
    if (!emblaApi) return 0.8;
    const diff = Math.abs(selectedIndex - index);
    return 1.0 - (diff * 0.2);
  }, [emblaInspectionApi, selectedInspectionIndex, emblaCertificationApi, selectedCertificationIndex]);

  const calculateOpacity = useCallback((index, isInspection) => {
    const emblaApi = isInspection ? emblaInspectionApi : emblaCertificationApi;
    const selectedIndex = isInspection ? selectedInspectionIndex : selectedCertificationIndex;
    if (!emblaApi) return 0.6;
    const diff = Math.abs(selectedIndex - index);
    return 1.0 - (diff * 0.4);
  }, [emblaInspectionApi, selectedInspectionIndex, emblaCertificationApi, selectedCertificationIndex]);

  const calculateZIndex = useCallback((index, isInspection) => {
    const emblaApi = isInspection ? emblaInspectionApi : emblaCertificationApi;
    const selectedIndex = isInspection ? selectedInspectionIndex : selectedCertificationIndex;
    if (!emblaApi) return 1;
    const diff = Math.abs(selectedIndex - index);
    return 10 - diff;
  }, [emblaInspectionApi, selectedInspectionIndex, emblaCertificationApi, selectedCertificationIndex]);

  const renderServiceCard = (service, index, isInspection) => {
    const scale = calculateScale(index, isInspection);
    const opacity = calculateOpacity(index, isInspection);
    const zIndex = calculateZIndex(index, isInspection);

    return (
      <motion.div
        key={service.title}
        className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 p-4"
        style={{
          minWidth: '300px',
          maxWidth: '350px',
          zIndex: zIndex,
        }}
        initial={{ scale: 0.8, opacity: 0.6 }}
        animate={{ scale: scale, opacity: opacity }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-shadow duration-300 h-full flex flex-col ${scale === 1.0 ? 'shadow-2xl' : 'hover:shadow-xl'}`}
          style={{ transform: `scale(${scale})`, opacity: opacity }}
        >
          <div className="h-2" style={{ backgroundColor: service.color }}></div>
          <div className="p-6 flex flex-col items-center text-center flex-grow">
            <div className="flex items-center justify-center mb-4">
              {service.image ? (
                <img src={service.image} alt={service.title} className="h-20 object-contain" />
              ) : (
                service.icon && <service.icon className="h-12 w-12 text-gray-700" />
              )}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-2 mb-1">{service.badge}</p>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex-grow">{service.title}</h3>
            <p className="text-gray-700 text-sm mb-4 flex-grow">{service.description}</p>
            <div className="flex space-x-2 mt-auto">
              <button className="px-4 py-2 rounded-lg font-semibold text-sm text-gray-800 border border-gray-300 bg-white hover:bg-gray-50">
                Sample Certificate
              </button>
              <button className="px-4 py-2 rounded-lg font-semibold text-sm text-white bg-purple-600 hover:bg-purple-700">
                View More
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const inspectionServices = [
    {
      icon: null,
      image: FSSAI, // 👈 Replace icon with imported image
      title: "FSSAI Third Party Auditing",
      description: "Independent third-party audits to ensure compliance with FSSAI regulations and standards.",
      color: "#8B5CF6",
      badge: "Ready for Harvest",
      metrics: [],
    }
  ];

  const certificationServices = [
    {
      icon: Award,
      title: "Hygiene Rating",
      description: "Assessment and rating of hygiene and food safety standards for food businesses.",
      color: "#F59E0B",
      badge: "Ready for Harvest",
      metrics: [],
    },
    {
      icon: Home,
      title: "Eat Right Station",
      description: "Certification for food service establishments promoting safe and healthy food practices.",
      color: "#3B82F6",
      badge: "Pesticide",
      metrics: [],
    },
    {
      icon: Leaf,
      title: "Eat Right Fruits and Vegetables Market",
      description: "Certification for markets ensuring safe and hygienic handling of fresh produce.",
      color: "#10B981",
      badge: "Ready for Harvest",
      metrics: [],
    },
    {
      icon: Utensils,
      title: "Eat Right Street Food Hub",
      description: "Certification for street food vendors adhering to food safety and hygiene norms.",
      color: "#EF4444",
      badge: "Pesticide",
      metrics: [],
    },
    {
      icon: School,
      title: "Eat Right Campus",
      description: "Certification for educational campuses promoting safe and healthy food environments.",
      color: "#06B6D4",
      badge: "Ready for Harvest",
      metrics: [],
    },
    {
      icon: Star,
      title: "Eat Right Place of Worship",
      description: "Certification for places of worship ensuring safe and hygienic food preparation and distribution.",
      color: "#F43F5E",
      badge: "Pesticide",
      metrics: [],
    },
    {
      icon: FileCheck,
      title: "Certification Services",
      description: "Official certification for various food safety standards including ISO 22000, HACCP, and organic certifications.",
      color: "#8B5CF6",
      badge: "Ready for Harvest",
      metrics: [],
    }
  ];

  return (
    <section id="services" className="py-16 relative overflow-hidden bg-gradient-ui">
      <div className="absolute inset-0 flex justify-center bg-[url('/images/wheat-pattern.svg')] bg-repeat opacity-5 pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Inspection Services We Offer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Independent third-party audits to ensure compliance with FSSAI regulations and standards.
            <img src="" alt="" />
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaInspectionRef}>
            <div className={`flex -ml-4 ${inspectionServices.length === 1 ? 'justify-center' : ''}`}>
              {inspectionServices.map((service, index) => renderServiceCard(service, index, true))}
            </div>
          </div>
        </div>

        <div className="text-center mt-20 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certification Services We Offer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Official certification for various food safety standards including ISO 22000, HACCP, and organic certifications.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaCertificationRef}>
            <div className="flex -ml-4">
              {certificationServices.map((service, index) => renderServiceCard(service, index, false))}
            </div>
          </div>
          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            onClick={() => emblaCertificationApi && emblaCertificationApi.scrollPrev()}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            onClick={() => emblaCertificationApi && emblaCertificationApi.scrollNext()}
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
