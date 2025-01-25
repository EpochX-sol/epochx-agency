import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimation } from '../utils/ScrollAnimation';

const Services = () => {
  return (
    <section id="services">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ScrollAnimation className="flex flex-col justify-center px-8 md:px-16 py-16 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-fraunces text-4xl mb-6 text-gray-900"
          >
            Transform your brand
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 mb-8 leading-relaxed"
          >
            We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-fraunces uppercase relative inline-block w-fit"
          >
            Learn More
            <span className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-300 opacity-30 hover:opacity-60 transition-opacity"></span>
          </motion.button>
        </ScrollAnimation>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="h-[400px] md:h-auto"
        >
          <img 
            src="/images/desktop/image-transform.jpg"
            alt="Transform"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="h-[400px] md:h-auto md:order-1"
        >
          <img 
            src="/images/desktop/image-stand-out.jpg"
            alt="Stand out"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <ScrollAnimation className="flex flex-col justify-center px-8 md:px-16 py-16 text-center md:text-left md:order-1">
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-fraunces text-4xl mb-6 text-gray-900"
          >
            Stand out to the right audience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 mb-8 leading-relaxed"
          >
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-fraunces uppercase relative inline-block w-fit"
          >
            Learn More
            <span className="absolute bottom-0 left-0 right-0 h-2 bg-red-300 opacity-30 hover:opacity-60 transition-opacity"></span>
          </motion.button>
        </ScrollAnimation>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px]"
        >
          <img 
            src="/images/desktop/image-graphic-design.jpg"
            alt="Graphic Design"
            className="w-full h-full object-cover"
          />
          <ScrollAnimation className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-center text-emerald-900">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-fraunces text-3xl mb-6"
            >
              Graphic Design
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="leading-relaxed"
            >
              Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
            </motion.p>
          </ScrollAnimation>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px]"
        >
          <img 
            src="/images/desktop/image-photography.jpg"
            alt="Photography"
            className="w-full h-full object-cover"
          />
          <ScrollAnimation className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-center text-blue-900">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-fraunces text-3xl mb-6"
            >
              Photography
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="leading-relaxed"
            >
              Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
            </motion.p>
          </ScrollAnimation>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;