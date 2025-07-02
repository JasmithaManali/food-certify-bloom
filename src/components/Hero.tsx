import React, { useEffect } from 'react';
import { ArrowRight, Award } from 'lucide-react';
import useCarousel from '../hooks/useCarousel';

// Importing images from src/assets
import FoodInspectionImage from '../assets/foodinspection.jpg';
import FoodSafetyImage from '../assets/inspects.jpg';
import QualityManagementImage from '../assets/inspection.jpg';

// Define HeroImage interface
interface HeroImage {
  src: string;
  title: string;
  description: string;
}

// Define heroImages array
const heroImages: HeroImage[] = [
  {
    src: FoodInspectionImage,
    title: 'Unavar Food Inspection',
    description: 'Ensuring quality and safety from farm to table.',
  },
  {
    src: FoodSafetyImage,
    title: 'Food Safety Certification',
    description: 'Comprehensive certification for food processing and handling.',
  },
  {
    src: QualityManagementImage,
    title: 'Quality Management Systems',
    description: 'Implementing ISO standards for operational excellence.',
  },
];

const Hero = () => {
  const images: HeroImage[] = heroImages;
  const { currentSlide: currentImageIndex, nextSlide: goToNextSlide, setCurrentSlide: setCurrentImageIndex } = useCarousel(images.length);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Hero Image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10 text-white">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Award className="h-4 w-4 text-white" />
              <span>Food Inspection and Certification Pvt. Ltd.</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              {images[currentImageIndex].title}
            </h1>
            <p className="text-xl text-white leading-relaxed">
              {images[currentImageIndex].description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2 group"
              style={{ border: 'none' }}
            >
              <span>Get Certified Today</span>
              <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="text-black px-8 py-4 rounded-lg font-semibold hover:text-emerald-600 transition-colors duration-200"
              style={{ border: 'none' }}
            >
              Learn More
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-white">Certified Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-sm text-white">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-white">Compliance Rate</div>
            </div>
          </div>
        </div>
        
        {/* Indicators for carousel */}
       
      </div>
       <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentImageIndex ? 'bg-emerald-600 w-8' : 'bg-gray-300'}`}
              style={{ border: 'none' }}
            />
          ))}
        </div>
    </section>
  );
};

export default Hero;