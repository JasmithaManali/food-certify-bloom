import React from 'react';
import BlurText from './BlurText';
import person from '../assets/person1.png';
import logo from '../assets/qci.svg'

interface CertificationSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  logoUrl: string;
  logoAlt: string;
}

const CertificationSection: React.FC<CertificationSectionProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  logoUrl,
  logoAlt,
}) => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
          <BlurText
            text={title}
            className="text-4xl font-bold text-teal-700 mb-6 leading-tight"
            delay={100}
          />
          <p className="text-lg text-gray-700 mb-8">
            {description}
          </p>
          <div className="flex items-center border ">
            <img src={logo} alt={logoAlt} className="h-16 mr-4" />
            <span className="text-xl font-semibold text-gray-800">{logoAlt}</span>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="bg-white p-4 rounded-xl shadow-2xl ring-1 ring-gray-200 transform translate-y-[-8px] hover:scale-105 transition-transform duration-300 ease-in-out" style={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.06)' }}>
            <img src={person} alt={imageAlt} className="rounded-lg w-full h-auto max-h-[50vh] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;