import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Pandiyan",
      position: "CHEF MEDICAL OFFICER",
      company: "CHETTIAR GOVERNMENT HOSPITAL, THIRUVANANTHAPURAM",
      rating: 0,
      text: "We just wanted to thank all of your team members of Unavar for the Eat Right Campus audit. Certification Private Limited for initiating Eat Right Campus Certification at our hospital. Your team members supported and gave a lot of ideas and suggestions to maintain the kitchen and surrounding area to keep clean and good. All areas were checked thoroughly to ensure food safety practices and documents were verified by auditor. It was very useful to us and we learned how to maintain the canteen area, provision and also personal hygiene. Thank you, team Unavar for the Eat Right campus audit.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b999?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Sundara Pandiyan",
      position: "ASSISTANT PROFESSOR",
      company: "College of Food and Dairy Technology, Thanjavur",
      rating: 0,
      text: "First of all, I would like to thank Unavar Food Inspection team for their approach and attitude in conducting the audit. Food handlers working in kitchen, hostel premise, chefs everyone got the awareness on how to maintain themselves and the area they are working clean and hygiene that way we create a better environment and healthy atmosphere for the students. Lots of improvements and feedback were given by the auditor during their pre audit in our campus which helped us a lot. Auditor was very good in explaining things in way everyone could relate and understand. Thank you you.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;