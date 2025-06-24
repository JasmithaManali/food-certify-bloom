import React from 'react';
import { ArrowRight, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import useCarousel from '../hooks/useCarousel';
import { heroImages, HeroImage } from '../data/heroImages';

const Hero = () => {
  const images: HeroImage[] = heroImages;
  const { currentSlide: currentImageIndex, nextSlide: goToNextSlide, prevSlide: goToPrevSlide, setCurrentSlide: setCurrentImageIndex } = useCarousel(images.length);


  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={images[currentImageIndex].src}
            alt={`Hero Image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10 text-white">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Award className="h-4 w-4" />
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
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2 group">
              <span>Get Certified Today</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-colors duration-200">
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
        
        
        {/* Navigation buttons for carousel */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-20"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-20"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>

        {/* Indicators for carousel */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentImageIndex ? 'bg-emerald-600 w-8' : 'bg-gray-300'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
