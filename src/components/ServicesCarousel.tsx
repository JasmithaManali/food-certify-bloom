
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Microscope, FileCheck, Users, Award, Zap } from 'lucide-react';

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: Shield,
      title: "Food Safety Audits",
      description: "Comprehensive inspection of your facilities, processes, and documentation to ensure complete compliance with food safety standards.",
      features: ["HACCP Implementation", "Risk Assessment", "Documentation Review", "Staff Training"],
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Microscope,
      title: "Laboratory Testing",
      description: "State-of-the-art laboratory analysis for microbiological, chemical, and physical contamination detection.",
      features: ["Pathogen Detection", "Allergen Testing", "Nutritional Analysis", "Shelf-life Studies"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: FileCheck,
      title: "Certification Services",
      description: "Official certification for various food safety standards including ISO 22000, HACCP, and organic certifications.",
      features: ["ISO 22000", "Organic Certification", "Halal Certification", "Export Documentation"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Training Programs",
      description: "Professional training for your staff on food safety protocols, hygiene practices, and regulatory compliance.",
      features: ["Staff Workshops", "Manager Training", "Online Courses", "Certification Programs"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Award,
      title: "Regulatory Compliance",
      description: "Expert guidance on navigating complex food regulations and maintaining ongoing compliance with local and international standards.",
      features: ["FDA Compliance", "EU Regulations", "Local Standards", "Documentation Support"],
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: Zap,
      title: "Emergency Response",
      description: "Rapid response services for food safety incidents, recalls, and urgent compliance issues.",
      features: ["Incident Management", "Recall Procedures", "Crisis Communication", "Recovery Planning"],
      color: "from-yellow-500 to-amber-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial assessment to final certification, we provide end-to-end food safety solutions tailored to your business needs.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white mx-4 rounded-xl shadow-xl overflow-hidden">
                      <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                      <div className="p-8 lg:p-12">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                          <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                              <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} text-white`}>
                                <Icon className="h-8 w-8" />
                              </div>
                              <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                              {service.description}
                            </p>
                            <button className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-200`}>
                              Learn More
                              <ChevronRight className="ml-2 h-5 w-5" />
                            </button>
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-gray-900">Key Features:</h4>
                            <div className="grid gap-3">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                                  <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-emerald-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
