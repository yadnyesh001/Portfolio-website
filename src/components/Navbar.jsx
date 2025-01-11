import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => 
        document.getElementById(item).getBoundingClientRect()
      );
      
      const current = sections.findIndex(
        ({ top, bottom }) => top <= 100 && bottom >= 100
      );
      
      if (current !== -1) {
        setActiveSection(navItems[current]);
      }

      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between">
          <div 
            className="flex-shrink-0 cursor-pointer group relative" 
            onClick={() => scrollToSection('home')}
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              Yadnyesh
            </h1>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ease-out group-hover:w-full" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="relative group px-6 py-2 text-lg font-medium capitalize transition-colors duration-300"
                >
                  <span className={`relative z-10 transition-colors duration-300 ${
                    activeSection === item
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}>
                    {item}
                  </span>
                  
                  {/* Animated background */}
                  <span className={`absolute inset-0 rounded-lg transition-all duration-300 ease-out scale-0 group-hover:scale-100 ${
                    activeSection === item
                      ? 'bg-gray-100 dark:bg-gray-800 scale-100'
                      : 'bg-gray-50 dark:bg-gray-800/50'
                  }`} />
                  
                  {/* Animated underline */}
                  <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 -translate-x-1/2 transition-all duration-300 ease-out ${
                    activeSection === item
                      ? 'w-1/2 bg-gray-900 dark:bg-white'
                      : 'group-hover:w-1/3 bg-gray-400 dark:bg-gray-500'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className="absolute inset-0 rounded-lg transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800" />
              {isOpen ? (
                <X size={24} className="relative z-10 transition-transform duration-300 rotate-0 hover:rotate-90" />
              ) : (
                <Menu size={24} className="relative z-10 transition-transform duration-300 hover:scale-110" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden backdrop-blur-md bg-white/90 dark:bg-gray-900/90`}
      >
        <div className="px-6 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`w-full relative group px-4 py-3 rounded-lg text-lg font-medium capitalize transition-all duration-300 ${
                activeSection === item
                  ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute inset-0 rounded-lg bg-gray-50 dark:bg-gray-800/50 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;