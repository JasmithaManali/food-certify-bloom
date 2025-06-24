import React from 'react';
import BlurText from './BlurText';
import person from '../assets/person1.png';

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
    <section className="py-16 bg-white">
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
          <div className="flex items-center">
            <img src={logoUrl} alt={logoAlt} className="h-20 mr-4" />
            <span className="text-xl font-semibold text-gray-800">{logoAlt}</span>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src={person} alt={imageAlt} className="rounded-lg shadow-lg w-[50%] h-auto flex "style={{
            position:"relative",
            left:'350px'
          }}  />
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;