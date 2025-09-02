import React, { useState, useEffect } from 'react';
import { Menu, X } from 'react-feather'; // Install react-feather for icons
import Logo from '../../assets/logo.svg';

const Header = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-[#FFFFFFB2] bg-opacity-[32px] backdrop-blur-md' : 'bg-white'
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3">
        {/* Left Section: Hamburger Icon and Logo */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Icon (visible on small screens) */}
          <div className="lg:hidden">
            {isMenuOpen ? (
              <X
                className="w-6 h-6 cursor-pointer z-20 relative"
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <Menu
                className="w-6 h-6 cursor-pointer z-20 relative"
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>

          {/* Logo */}
          <img src={Logo} alt="Logo" className="md:pl-10" />
        </div>

        {/* Desktop Menu */}
        <div className="lg:flex hidden font-inter font-semibold text-sm text-black gap-12 pr-[92px]">
          <span className="cursor-pointer" onClick={() => scrollToSection('home')}>Home</span>   
          <span className="cursor-pointer" onClick={() => scrollToSection('people')}>People</span>
          <span className="cursor-pointer" onClick={() => scrollToSection('about')}>About Us</span>

          <span className="cursor-pointer" onClick={() => scrollToSection('events')}>Events</span>
          <span className="cursor-pointer" onClick={() => scrollToSection('contact')}>Contact Us</span>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-0 left-0 w-full bg-white shadow-md transform transition-all duration-500 ease-in-out lg:hidden z-10 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          <div className="flex flex-col items-center space-y-6 py-6 px-5 font-inter">
            <span className="text-lg font-semibold text-black cursor-pointer" onClick={() => {scrollToSection('home'); setIsMenuOpen(false)}}>Home</span>
            <span className="text-lg font-semibold text-black cursor-pointer" onClick={() => {scrollToSection('people'); setIsMenuOpen(false)}}>People</span>
            <span className="text-lg font-semibold text-black cursor-pointer" onClick={() => { scrollToSection('about'); setIsMenuOpen(false) }}>About Us</span>
            <span className="text-lg font-semibold text-black cursor-pointer" onClick={() => { scrollToSection('events'); setIsMenuOpen(false) }}>Events</span>
            <span className="text-lg font-semibold text-black cursor-pointer" onClick={() => {scrollToSection('contact'); setIsMenuOpen(false)}}>Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
