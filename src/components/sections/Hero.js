import React from 'react';

const Hero = () => {
  return (
    <section id="about" className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="/images/desktop/image-header.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-white font-fraunces text-5xl md:text-6xl uppercase tracking-widest mb-12">
          We are creatives
        </h1>
        <img 
          src="/images/icon-arrow-down.svg"
          alt="Scroll down"
          className="animate-bounce"
        />
      </div>
    </section>
  );
};

export default Hero;