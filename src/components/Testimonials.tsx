
import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Quality Manager",
      company: "Fresh Valley Foods",
      rating: 5,
      text: "FoodCert Pro transformed our food safety protocols. Their expert team guided us through HACCP certification seamlessly, and we achieved compliance faster than expected. Highly recommended!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b999?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      position: "Operations Director",
      company: "Golden Harvest Restaurant Group",
      rating: 5,
      text: "Working with FoodCert Pro was a game-changer for our restaurant chain. Their comprehensive approach and ongoing support have helped us maintain perfect health inspection scores across all locations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      position: "Food Safety Coordinator",
      company: "Organic Harvest Co.",
      rating: 5,
      text: "The organic certification process can be complex, but FoodCert Pro made it straightforward. Their attention to detail and regulatory expertise saved us months of work. Exceptional service!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      position: "Plant Manager",
      company: "Premium Food Processing",
      rating: 5,
      text: "FoodCert Pro's rapid response during our FDA inspection was incredible. Their expertise and preparation helped us pass with flying colors. They're now our trusted food safety partners.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-blue-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover why businesses trust FoodCert Pro for their food safety and certification needs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
            <Quote className="h-12 w-12 text-emerald-400 mb-6" />
            
            <div className="mb-8">
              <p className="text-lg lg:text-xl leading-relaxed text-gray-100 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-emerald-400"
              />
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-emerald-400 font-medium">
                  {testimonials[currentTestimonial].position}
                </p>
                <p className="text-gray-300 text-sm">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
              <div className="flex space-x-1">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentTestimonial ? 'bg-emerald-400 w-8' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-emerald-400">500+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-emerald-400">4.9/5</div>
            <div className="text-gray-300">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-emerald-400">100%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
