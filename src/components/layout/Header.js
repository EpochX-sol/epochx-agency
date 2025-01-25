import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Portfolio', href: '#portfolio' }, 
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].href.replace('#', ''));
          }
        }
      });

      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    setActiveSection(href.replace('#', ''));
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-blue-500/90 backdrop-blur-sm shadow-lg' : 'bg-gradient-to-b from-black/50 to-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-white font-fraunces text-2xl font-black">
          EpochX
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className={`px-4 py-2 rounded-full transition-all duration-300 font-fraunces text-sm uppercase tracking-wider
                ${activeSection === item.href.replace('#', '') 
                  ? 'bg-white text-black hover:bg-opacity-90 font-black' 
                  : 'text-white hover:text-gray-200'}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-6 right-6 bg-white py-6 md:hidden shadow-xl rounded-lg">
          <div className="relative">
            {/* Triangle */}
            <div className="absolute -top-4 right-0 w-0 h-0 
                          border-l-[16px] border-l-transparent
                          border-b-[16px] border-b-white
                          border-r-[16px] border-r-transparent">
            </div>
            
            <div className="flex flex-col items-center space-y-4 py-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`px-4 py-2 rounded-full transition-all duration-300 font-barlow text-base
                    ${activeSection === item.href.replace('#', '') 
                      ? 'bg-yellow-400 text-black font-semibold' 
                      : 'text-gray-500 hover:text-gray-900'}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;