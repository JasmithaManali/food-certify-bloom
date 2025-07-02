import React from 'react';


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
    quote: "First of all, I would like to thank Unavar Food Inspection team for their approach and attitude in conducting the audit. Food handlers working in kitchen, hostel premise, chefs everyone got the awareness on how to maintain themselves and the area they are working clean and hygiene that way we create a better environment and healthy food for the students. Lots of improvements and feedback were given by the auditor during their pre audit in our campus which helped us a lot. Auditor was very good in explaining things in way everyone could relate and understand. Thank you",
    name: 'Dr. Sundara Pandiyan',
    title: 'ASSISTANT PROFESSOR',
    company: 'College of Food and Dairy Technology, Thiruvallur'

  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
    quote: "Arulmigu Balasubramaniya Swamy Temple , Somasipadi , Thiruvannamalai.Audit conducted by Unavar Food Inspection has been invaluable for our Annadhana Koodam at the temple. The insights and recommendations provided have significantly enhanced our food safety protocols, ensuring the well-being of all those having our sacred meals. The audit process was very smooth. Auditor explained how important it is to maintain food safety standards in our annadhana koodam and gave suggestions on where to improve. Sufficient time was given to make corrective actions in our temple. Overall, the audit was good and we gained a lot of knowledge",
    name: 'Govardhana Giri',
    title: 'Temple office incharge',
    company: ''
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop&crop=face",
    quote: "I'm grateful for Unavar's exceptional effort in the 'Eat Right Campus' audit, providing invaluable support and insights. The dedication shown was commendable, aligning with our goal of promoting safety, health, and sustainable food practices. We're eager to implement the certification process campus-wide and collaborate further for improvement. Let's schedule a meeting to discuss strategies. Thank you for conducting the audit, and I look forward to future collaboration.",
    name: 'Prithivi Kumar A R',
    title: 'Assistant Professor | Department of Hotel Management',
    company: 'CHRIST (Deemed to be University)'
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop&crop=face",
    quote: "We just wanted to thank all of your team members of Unavar Food Inspection and Certification Private Limited for Initiating Eat Right Campus Certification at our hospital. Your team members supported and gave a lot of ideas and suggestions to maintain the kitchen and surrounding area to keep clean and good. All areas were checked thoroughly to ensure food safety is practiced. Documents were verified by auditor. It was very useful to us and we learned how to maintain the canteen area , provision and also personal hygiene . Thank you, team Unavar for the Eat right campus audit.",
    name: 'Pandiyan',
    title: 'Chief Medical Officer',
    company: 'CHEYYAR GOVERMENT HOSPITAL, Thiruvannamalai.'
  }
];

const TestimonialComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4 mt-28">
      <div className="max-w-6xl mx-auto ">
        <div className="text-center ">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped organizations maintain the highest standards of food safety and hygiene
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 border border-gray-100 shadow-xl"
            >
              {/* Profile */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3 flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h3>
                  <p className="text-xs text-gray-600">{testimonial.title}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
                
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-sm leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Date */}
              <div className="mt-4 text-xs text-gray-400">
                {index === 0 && "10:01 PM • Apr 7, 2025"}
                {index === 1 && "6:57 PM • Dec 1, 2024"}
                {index === 2 && "1:32 PM • Jan 4, 2025"}
                {index === 3 && "10:17 PM • Jan 3, 2025"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
