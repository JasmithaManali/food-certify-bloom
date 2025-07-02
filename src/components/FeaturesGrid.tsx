
import React from 'react';
import { Clock, Shield, Award, Users, Globe, CheckCircle } from 'lucide-react';

const FeaturesGrid = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const features = [
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick inspection and certification processes without compromising quality standards.",
      stats: "48-72 hours",
      color: "emerald"
    },
    {
      icon: Shield,
      title: "Certified Experts",
      description: "Team of qualified food safety professionals with extensive industry experience.",
      stats: "50+ Experts",
      color: "blue"
    },
    {
      icon: Award,
      title: "Accredited Services",
      description: "Internationally recognized certifications and accreditations for global acceptance.",
      stats: "ISO Accredited",
      color: "purple"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your food safety and certification needs.",
      stats: "Always Available",
      color: "orange"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Compliance with international food safety standards and regulatory requirements.",
      stats: "200+ Countries",
      color: "teal"
    },
    {
      icon: CheckCircle,
      title: "100% Compliance",
      description: "Perfect track record of helping businesses achieve and maintain compliance.",
      stats: "Zero Failures",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "bg-emerald-500 text-emerald-600 border-emerald-200",
      blue: "bg-blue-500 text-blue-600 border-blue-200",
      purple: "bg-purple-500 text-purple-600 border-purple-200",
      orange: "bg-orange-500 text-orange-600 border-orange-200",
      teal: "bg-teal-500 text-teal-600 border-teal-200",
      green: "bg-green-500 text-green-600 border-green-200"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section
      className={`py-20 transition-colors duration-500 `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto   px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-20">
          <div className='mt-20'>
          <h2 className={`text-4xl font-bold mb-4  text-[#3B7A57] `}>Why Choose Unavar?</h2>
          <p className={`text-xl max-w-3xl mx-auto ${isHovered ? 'text-gray-900' : 'text-gray-600'}`}>
            Experience the difference with our comprehensive approach to food safety and certification services.
          </p>
          </div>
        </div>

        <div className="flex overflow-x-auto pb-4 space-x-8 scrollbar-hide">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = getColorClasses(feature.color);
            
            return (
              <div
                key={index}
                className={`group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex-shrink-0 w-80 ${isHovered ? 'flip-scale-2-hor-top' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-${feature.color}-100 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 text-${feature.color}-600`} />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 ${isHovered ? 'text-[#3B7A57]' : 'text-gray-900'} group-hover:text-gray-800 transition-colors`}>
                    {feature.title}
                  </h3>
                  
                  <p className={`leading-relaxed mb-6 ${isHovered ? 'text-gray-400' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                  
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-${feature.color}-50 border border-${feature.color}-200`}>
                    <span className={`text-sm font-semibold text-${feature.color}-700`}>
                      {feature.stats}
                    </span>
                  </div>
                </div>
                
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-${feature.color}-400 to-${feature.color}-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* <div className="mt-16 text-center">
          <div className={`p-8 rounded-2xl text-white transition-colors duration-500 ${isHovered ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-emerald-500 to-blue-600'}`}>
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join hundreds of businesses that trust us with their food safety certification needs.
            </p>
            <button className={`px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2 ${isHovered ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' : 'bg-white text-emerald-600 hover:bg-gray-100'}`}>
              <span>Schedule Your Inspection</span>
              <CheckCircle className="h-5 w-5" />
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturesGrid;
