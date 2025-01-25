import React from 'react';

const Portfolio = () => {
  const images = [
    { src: '/images/desktop/image-gallery-milkbottles.jpg', alt: 'Milk bottles' },
    { src: '/images/desktop/image-gallery-orange.jpg', alt: 'Orange' },
    { src: '/images/desktop/image-gallery-cone.jpg', alt: 'Cone' },
    { src: '/images/desktop/image-gallery-sugarcubes.jpg', alt: 'Sugar cubes' },
  ];

  return (
    <section id="portfolio" className="grid grid-cols-2 md:grid-cols-4">
      {images.map((image, index) => (
        <div key={index} className="aspect-square">
          <img 
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </section>
  );
};

export default Portfolio;