
import React, { useState, useEffect, useCallback } from 'react';
import { Shield, Microscope, FileCheck, Users, Award, Zap, Home, Leaf, Utensils, School, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';

const ServicesCarousel = () => {
  const [emblaInspectionRef, emblaInspectionApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    dragFree: false,
    startIndex: 2, // Start at the 3rd card (0-indexed)
  });

  const [emblaCertificationRef, emblaCertificationApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    dragFree: false,
    startIndex: 2, // Start at the 3rd card (0-indexed)
  });

  const [selectedInspectionIndex, setSelectedInspectionIndex] = useState(0);
  const [selectedCertificationIndex, setSelectedCertificationIndex] = useState(0);

  useEffect(() => {
    if (!emblaInspectionApi) return;
    const onSelect = () => {
      setSelectedInspectionIndex(emblaInspectionApi.selectedScrollSnap());
    };
    emblaInspectionApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaInspectionApi.off('select', onSelect);
    };
  }, [emblaInspectionApi, setSelectedInspectionIndex]);

  useEffect(() => {
    if (!emblaCertificationApi) return;
    const onSelect = () => {
      setSelectedCertificationIndex(emblaCertificationApi.selectedScrollSnap());
    };
    emblaCertificationApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaCertificationApi.off('select', onSelect);
    };
  }, [emblaCertificationApi, setSelectedCertificationIndex]);

  const calculateScale = useCallback((index: number, isInspection: boolean) => {
    const emblaApi = isInspection ? emblaInspectionApi : emblaCertificationApi;
    const selectedIndex = isInspection ? selectedInspectionIndex : selectedCertificationIndex;

    if (!emblaApi) return 0.8;
    const diff = Math.abs(selectedIndex - index);
    return 1.0 - (diff * 0.2);
  }, [emblaInspectionApi, selectedInspectionIndex, emblaCertificationApi, selectedCertificationIndex]);

  const calculateOpacity = useCallback((index: number, isInspection: boolean) => {
    const emblaApi = isInspection ? emblaInspectionApi : emblaCertificationApi;
    const selectedIndex = isInspection ? selectedInspectionIndex : selectedCertificationIndex;

    if (!emblaApi) return 0.6;
    const diff = Math.abs(selectedIndex - index);
    return 1.0 - (diff * 0.4);
  }, [emblaInspectionApi, selectedInspectionIndex, emblaCertificationApi, selectedCertificationIndex]);

  const calculateZIndex = useCallback((index: number, isInspection: boolean) => {
    const emblaApi = isInspection ? emblaInspectionApi : emblaCertificationApi;
    const selectedIndex = isInspection ? selectedInspectionIndex : selectedCertificationIndex;

    if (!emblaApi) return 1;
    const diff = Math.abs(selectedIndex - index);
    return 10 - diff;
  }, [emblaInspectionApi, selectedInspectionIndex, emblaCertificationApi, selectedCertificationIndex]);

  const renderServiceCard = (service: any, index: number, isInspection: boolean) => {
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
              {service.icon && <service.icon className="h-12 w-12 text-gray-700" />}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-2 mb-1">
              {service.badge}
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex-grow">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm mb-4 flex-grow">
              {service.description}
            </p>
            <div className="flex space-x-2 mt-auto">
              <button className="px-4 py-2 rounded-lg font-semibold text-sm text-gray-800 border border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-200">
                Sample Certificate
              </button>
              <button className="px-4 py-2 rounded-lg font-semibold text-sm text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200">
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
      icon: FileCheck,
      title: "FSSAI Third Party Auditing",
      description: "Independent third-party audits to ensure compliance with FSSAI regulations and standards.",
      color: "#8B5CF6", // Purple
      image: "/src/assets/agri1.png",
      badge: "Ready for Harvest",
      metrics: [
        { icon: "speed", value: "3.5 km/h" },
        { icon: "activity", value: "3 Activity" }
      ]
    },
    {
      icon: Shield,
      title: "Food Safety Audits",
      description: "Comprehensive inspection of your facilities, processes, and documentation to ensure complete compliance with food safety standards.",
      color: "#10B981", // Emerald
      image: "/src/assets/agri1.png",
      badge: "Pesticide",
      metrics: [
        { icon: "speed", value: "3.5 km/h" },
        { icon: "humidity", value: "76.28 %" }
      ]
    },
    {
      icon: Microscope,
      title: "Laboratory Testing",
      description: "State-of-the-art laboratory analysis for microbiological, chemical, and physical contamination detection.",
      color: "#3B82F6", // Blue
      image: "/src/assets/agri1.png",
      badge: "Ready for Harvest",
      metrics: [
        { icon: "speed", value: "3.5 km/h" },
        { icon: "humidity", value: "76.28 %" }
      ]
    },
    {
      icon: Users,
      title: "Training Programs",
      description: "Professional training for your staff on food safety protocols, hygiene practices, and regulatory compliance.",
      color: "#F97316", // Orange
      image: "/src/assets/agri1.png",
      badge: "Pesticide",
      metrics: [
        { icon: "speed", value: "3.5 km/h" },
        { icon: "activity", value: "3 Activity" }
      ]
    },
    {
      icon: Award,
      title: "Regulatory Compliance",
      description: "Expert guidance on navigating complex food regulations and maintaining ongoing compliance with local and international standards.",
      color: "#14B8A6", // Teal
      image: "/src/assets/agri1.png",
      badge: "Ready for Harvest",
      metrics: [
        { icon: "speed", value: "3.5 km/h" },
        { icon: "humidity", value: "76.28 %" }
      ]
    },
    {
      icon: Zap,
      title: "Emergency Response",
      description: "Rapid response services for food safety incidents, recalls, and urgent compliance issues.",
      color: "#F59E0B", // Yellow
      image: "/src/assets/agri1.png",
      badge: "Pesticide",
      metrics: [
        { icon: "speed", value: "3.5 km/h" },
        { icon: "activity", value: "3 Activity" }
      ]
    }
  ];

  const certificationServices = [
    {
      icon: Award,
      title: "Hygiene Rating",
      description: "Assessment and rating of hygiene and food safety standards for food businesses.",
      color: "#F59E0B", // Amber
      image: "/src/assets/agri1.png",
      badge: "Ready for Harvest",
      metrics: [
        { icon: "speed", value: "3.5 km/h" },
        { icon: "humidity", value: "76.28 %" }
      ]
    },
    {
      icon: Home,
      title: "Eat Right Station",
      description: "Certification for food service establishments promoting safe and healthy food practices.",
      color: "#3B82F6", // Indigo
      image: "/src/assets/agri1.png",
      badge: "Pesticide",
      metrics: [
        { icon: "speed", value: "3.5 km/h" },
        { icon: "activity", value: "3 Activity" }
      ]
    },
    {
      icon: Leaf,
      title: "Eat Right Fruits and Vegetables Market",
      description: "Certification for markets ensuring safe and hygienic handling of fresh produce.",
      color: "#10B981", // Green
      image: "/src/assets/agri1.png",
      badge: "Ready for Harvest",
      metrics: [
        { icon: "speed", value: "3.5 km/h" },
        { icon: "humidity", value: "76.28 %" }
      ]
    },
    {
      icon: Utensils,
      title: "Eat Right Street Food Hub",
      description: "Certification for street food vendors adhering to food safety and hygiene norms.",
      color: "#EF4444", // Red
      image: "/src/assets/agri1.png",
      badge: "Pesticide",
      metrics: [
        { icon: "speed", value: "3.5 km/h" },
        { icon: "activity", value: "3 Activity" }
      ]
    },
    {
      icon: School,
      title: "Eat Right Campus",
      description: "Certification for educational campuses promoting safe and healthy food environments.",
      color: "#06B6D4", // Cyan
      image: "/src/assets/agri1.png",
      badge: "Ready for Harvest",
      metrics: [
        { icon: "speed", value: "3.5 km/h" },
        { icon: "humidity", value: "76.28 %" }
      ]
    },
    {
      icon: Star,
      title: "Eat Right Place of Worship",
      description: "Certification for places of worship ensuring safe and hygienic food preparation and distribution.",
      color: "#F43F5E", // Rose
      image: "/src/assets/agri1.png",
      badge: "Pesticide",
      metrics: [
        { icon: "speed", value: "3.5 km/h" },
        { icon: "activity", value: "3 Activity" }
      ]
    },
    {
      icon: FileCheck,
      title: "Certification Services",
      description: "Official certification for various food safety standards including ISO 22000, HACCP, and organic certifications.",
      color: "#8B5CF6", // Purple
      image: "/src/assets/agri1.png",
      badge: "Ready for Harvest",
      metrics: [
        { icon: "speed", value: "3.5 km/h" },
        { icon: "humidity", value: "76.28 %" }
      ]
    }
  ];

  return (
    <section id="services" className="py-16 relative overflow-hidden bg-gradient-ui">
      <div className="absolute inset-0 bg-[url('/images/wheat-pattern.svg')] bg-repeat opacity-5 pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Inspection Services We Offer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Independent third-party audits to ensure compliance with FSSAI regulations and standards.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaInspectionRef}>
            <div className="flex -ml-4">
              {inspectionServices.map((service, index) => (
                renderServiceCard(service, index, true)
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            onClick={() => emblaInspectionApi && emblaInspectionApi.scrollPrev()}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            onClick={() => emblaInspectionApi && emblaInspectionApi.scrollNext()}
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
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
              {certificationServices.map((service, index) => (
                renderServiceCard(service, index, false)
              ))}
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
