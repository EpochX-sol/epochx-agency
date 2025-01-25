import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' }
  ];

  const socialIcons = [
    { Icon: FacebookIcon, href: '#' },
    { Icon: InstagramIcon, href: '#' },
    { Icon: TwitterIcon, href: '#' },
    { 
      Icon: () => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.14 2.52 7.69 6.11 9.19-.08-.72-.16-1.84.03-2.63.17-.71 1.11-4.5 1.11-4.5s-.28-.57-.28-1.41c0-1.32.77-2.31 1.72-2.31.81 0 1.2.61 1.2 1.34 0 .82-.52 2.04-.79 3.17-.22.95.47 1.72 1.41 1.72 1.69 0 2.99-1.78 2.99-4.37 0-2.29-1.64-3.89-3.98-3.89-2.71 0-4.3 2.03-4.3 4.13 0 .82.31 1.7.71 2.17.08.09.09.18.07.27-.07.29-.23.92-.26 1.05-.04.17-.14.21-.32.13-1.19-.55-1.94-2.29-1.94-3.69 0-3.02 2.19-5.79 6.31-5.79 3.31 0 5.89 2.36 5.89 5.52 0 3.29-2.07 5.95-4.94 5.95-.97 0-1.88-.5-2.19-1.09l-.6 2.28c-.21.84-.79 1.89-1.18 2.53 1.06.31 2.18.48 3.35.48 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
      ),
      href: '#'
    }
  ];

  const handleNavClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
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
  };

  return (
    <footer className="bg-[#90D4C5] py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <h2 className="text-[#2C7566] font-fraunces text-3xl font-bold mb-8">
            EpochX
          </h2>
          
          {/* Navigation */}
          <div className="flex justify-center space-x-12 mb-20">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="text-[#458D7E] hover:text-white transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            {socialIcons.map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-[#2C7566] hover:text-white transition-colors duration-300"
                aria-label={`Visit our social media ${index + 1}`}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;