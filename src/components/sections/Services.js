import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 text-center md:text-left">
          <h2 className="font-fraunces text-4xl mb-6 text-gray-900">
            Transform your brand
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.
          </p>
          <button className="font-fraunces uppercase relative inline-block w-fit">
            Learn More
            <span className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-300 opacity-30 hover:opacity-60 transition-opacity"></span>
          </button>
        </div>
        <div className="h-[400px] md:h-auto">
          <img 
            src="/images/desktop/image-transform.jpg"
            alt="Transform"
            className="w-full h-full object-cover"
          />
        </div> 
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-[400px] md:h-auto md:order-1">
          <img 
            src="/images/desktop/image-stand-out.jpg"
            alt="Stand out"
            className="w-full h-full object-cover"
          />
        </div> 
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 text-center md:text-left md:order-1">
          <h2 className="font-fraunces text-4xl mb-6 text-gray-900">
            Stand out to the right audience
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.
          </p>
          <button className="font-fraunces uppercase relative inline-block w-fit">
            Learn More
            <span className="absolute bottom-0 left-0 right-0 h-2 bg-red-300 opacity-30 hover:opacity-60 transition-opacity"></span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[600px]">
          <img 
            src="/images/desktop/image-graphic-design.jpg"
            alt="Graphic Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-center text-emerald-900">
            <h2 className="font-fraunces text-3xl mb-6">Graphic Design</h2>
            <p className="leading-relaxed">
              Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
            </p>
          </div>
        </div> 
        <div className="relative h-[600px]">
          <img 
            src="/images/desktop/image-photography.jpg"
            alt="Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-center text-blue-900">
            <h2 className="font-fraunces text-3xl mb-6">Photography</h2>
            <p className="leading-relaxed">
              Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
            </p>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default Services;