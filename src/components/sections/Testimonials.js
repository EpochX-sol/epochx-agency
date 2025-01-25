import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimation } from '../utils/ScrollAnimation';

const Testimonials = () => {
  const testimonials = [
    {
      image: '/images/image-emily.jpg',
      text: 'We put our trust in EpochX and they delivered, making sure our needs were met and deadlines were always hit.',
      name: 'Emily R.',
      role: 'Marketing Director'
    },
    {
      image: '/images/image-thomas.jpg',
      text: 'Epochx enthusiasm coupled with their keen interest in our brands success made it a satisfying and enjoyable experience.',
      name: 'Thomas S.',
      role: 'Chief Operating Officer'
    },
    {
      image: '/images/image-jennie.jpg',
      text: 'Incredible end result! Our sales increased over 400% when we worked with EpochX. Highly recommended!',
      name: 'Jennie F.',
      role: 'Business Owner'
    }
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

  return (
    <section id="testimonials" className="py-24 px-6">
      <ScrollAnimation>
        <h2 className="text-center font-fraunces text-lg tracking-[0.3em] uppercase text-gray-400 mb-16">
          Client testimonials
        </h2>
      </ScrollAnimation>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-6xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center px-4"
          >
            <img 
              src={testimonial.image}
              alt={testimonial.name}
              className="w-[72px] h-[72px] rounded-full mb-4"
            />
            <p className="text-gray-600 text-lg leading-relaxed mb-4 text-center">
              {testimonial.text}
            </p>
            <div className="mt-auto">
              <h3 className="font-fraunces text-lg text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {testimonial.role}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;