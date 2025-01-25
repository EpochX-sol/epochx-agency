import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimation } from '../utils/ScrollAnimation';

const Portfolio = () => {
  const images = [
    { src: '/images/desktop/image-gallery-milkbottles.jpg', alt: 'Milk bottles' },
    { src: '/images/desktop/image-gallery-orange.jpg', alt: 'Orange' },
    { src: '/images/desktop/image-gallery-cone.jpg', alt: 'Cone' },
    { src: '/images/desktop/image-gallery-sugarcubes.jpg', alt: 'Sugar cubes' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="portfolio">
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {images.map((image, index) => (
          <motion.div 
            key={index} 
            className="aspect-square overflow-hidden"
            variants={item}
          >
            <motion.img 
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;