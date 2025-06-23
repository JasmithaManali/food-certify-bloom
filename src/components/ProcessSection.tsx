
import React from 'react';
import { ArrowRight, FileText, Search, ClipboardCheck, Award } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Initial Assessment",
      description: "We begin with a comprehensive evaluation of your current food safety practices and identify areas for improvement.",
      details: ["Documentation review", "Facility inspection", "Risk assessment", "Gap analysis"]
    },
    {
      icon: Search,
      title: "Detailed Inspection",
      description: "Our certified experts conduct thorough inspections using internationally recognized standards and protocols.",
      details: ["On-site evaluation", "Process monitoring", "Staff interviews", "Equipment testing"]
    },
    {
      icon: ClipboardCheck,
      title: "Compliance Review",
      description: "We provide detailed reports with actionable recommendations to ensure full compliance with regulations.",
      details: ["Comprehensive reporting", "Corrective actions", "Implementation support", "Follow-up guidance"]
    },
    {
      icon: Award,
      title: "Certification",
      description: "Upon successful completion, we issue your official certification with ongoing support and monitoring.",
      details: ["Official certificate", "Digital credentials", "Ongoing support", "Renewal planning"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Certification Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined, efficient process designed to get your business certified quickly while maintaining the highest standards.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center text-center max-w-xs">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                          <Icon className="h-10 w-10" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="h-8 w-8 text-emerald-500 mx-4" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-white relative">
                        <Icon className="h-8 w-8" />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 flex-shrink-0"></div>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-8 bg-emerald-200"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Your Certification Journey Today</h3>
            <p className="text-gray-600 mb-6">
              Our team is ready to help you achieve compliance and certification efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Schedule Assessment
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-colors">
                Download Process Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
