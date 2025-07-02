import React from "react";

interface Testimonial {
  id: number;
  image: string;
  quote: string;
  name: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
    quote: "Thank Unavar for the audit that raised hygiene awareness and improved our campus environment.",
    name: "Dr. Sundara Pandiyan",
    title: "ASSISTANT PROFESSOR",
    company: "College of Food and Dairy Technology, Thiruvallur",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
    quote: "Unavar's audit enhanced food safety at our temple's Annadhana Koodam with valuable insights.",
    name: "Govardhana Giri",
    title: "Temple office incharge",
    company: "",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop&crop=face",
    quote: "Grateful for Unavar's support in our 'Eat Right Campus' audit and future collaboration.",
    name: "Prithivi Kumar A R",
    title: "Assistant Professor | Department of Hotel Management",
    company: "CHRIST (Deemed to be University)",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop&crop=face",
    quote: "Thank Unavar for initiating 'Eat Right Campus' certification and improving our kitchen hygiene.",
    name: "Pandiyan",
    title: "Chief Medical Officer",
    company: "CHEYYAR GOVERMENT HOSPITAL, Thiruvannamalai.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    quote: "Unavar improved our kitchen safety standards effectively.",
    name: "John Doe",
    title: "Head Chef",
    company: "City Restaurant",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop&crop=face",
    quote: "Unavar maintained top-tier hygiene in our cafeteria.",
    name: "Jane Smith",
    title: "School Administrator",
    company: "Green Valley School",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    quote: "Excellent support from Unavar for our certification.",
    name: "Alex Brown",
    title: "Facility Manager",
    company: "Urban Hotel",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    quote: "Unavar's thorough audit boosted our food safety confidence.",
    name: "Maria Garcia",
    title: "Health Officer",
    company: "Community Clinic",
  },
];

const TestimonialComponent: React.FC = () => {
  return (
    <div className="h-[100%] bg-white pt-10 pb-20 px-2">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Discover how we maintain food safety standards
          </p>
        </div>

        <div className="mt-6">
          <div
            className="max-h-[600px] overflow-y-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>
              {`
                .max-h-[600px]::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-lg p-4 shadow-md border-2 border-gray-500 hover:border-gray-400 transition flex flex-col justify-between min-h-[200px]"
                >
                  <div className="flex items-start mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h3>
                      <p className="text-xs text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 text-sm leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-4 text-sm text-gray-500">
                    {index === 0 && "10:01 PM • Apr 7, 2025"}
                    {index === 1 && "6:57 PM • Dec 1, 2024"}
                    {index === 2 && "1:32 PM • Jan 4, 2025"}
                    {index === 3 && "10:17 PM • Jan 3, 2025"}
                    {index === 4 && "9:45 AM • May 15, 2025"}
                    {index === 5 && "2:30 PM • Jun 10, 2025"}
                    {index === 6 && "11:15 AM • Jun 20, 2025"}
                    {index === 7 && "3:20 PM • Jun 25, 2025"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
