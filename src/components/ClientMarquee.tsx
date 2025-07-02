import React from 'react';

interface ClientMarqueeProps {
  images: string[];
}

const ClientMarquee: React.FC<ClientMarqueeProps> = ({ images }) => {
  return (
    <div className="w-full overflow-hidden py-8 bg-white">
      <div className="marquee-container">
        <div className="marquee-content">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Client ${index + 1}`} className="h-20 mx-8 object-contain" />
          ))}
          {/* Duplicate images for seamless loop */}
          {images.map((image, index) => (
            <img key={`duplicate-${index}`} src={image} alt={`Client ${index + 1}`} className="h-20 mx-8 object-contain" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientMarquee;