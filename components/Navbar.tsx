
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (onNavClick) onNavClick();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={handleClick} className="text-xl md:text-2xl font-bold gradient-text tracking-tighter cursor-pointer">JAMES JULLIES</a>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#projects" onClick={handleClick} className="text-gray-300 hover:text-[#2B9B78] transition-colors cursor-pointer">Achievements</a>
          <a href="#skills" onClick={handleClick} className="text-gray-300 hover:text-[#2B9B78] transition-colors cursor-pointer">Expertise</a>
          <a href="#experience" onClick={handleClick} className="text-gray-300 hover:text-[#2B9B78] transition-colors cursor-pointer">Timeline</a>
          <a href="#contact" onClick={handleClick} className="text-gray-300 hover:text-[#2B9B78] transition-colors cursor-pointer">Contact</a>
        </div>
        <button className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;