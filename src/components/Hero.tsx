
import React from 'react';
import { ArrowRight, CheckCircle, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
              <Award className="h-4 w-4" />
              <span>Trusted Food Safety Experts</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Ensuring Food
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600"> Safety</span>
              <br />Excellence
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional food inspection and certification services that guarantee compliance, safety, and quality standards for your business.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2 group">
              <span>Get Certified Today</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-colors duration-200">
              Learn More
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">500+</div>
              <div className="text-sm text-gray-600">Certified Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">100%</div>
              <div className="text-sm text-gray-600">Compliance Rate</div>
            </div>
          </div>
        </div>
        
        <div className="relative lg:h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl transform rotate-3 opacity-20"></div>
          <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
                <span className="text-gray-800 font-medium">HACCP Certification</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
                <span className="text-gray-800 font-medium">ISO 22000 Standards</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
                <span className="text-gray-800 font-medium">FDA Compliance</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
                <span className="text-gray-800 font-medium">Risk Assessment</span>
              </div>
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>Trusted by industry leaders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
