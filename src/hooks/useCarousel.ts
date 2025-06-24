import { useState, useEffect } from 'react';

const useCarousel = (totalSlides: number, interval: number = 5000) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [totalSlides, interval]);

  return { currentSlide, nextSlide, prevSlide, setCurrentSlide };
};

export default useCarousel;