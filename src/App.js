import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default App;