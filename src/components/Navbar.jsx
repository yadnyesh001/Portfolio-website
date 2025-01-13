import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

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
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div 
            className="relative flex-shrink-0 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            {/* Main Container */}
            <div className="relative px-4 py-2">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-lg transform transition-all duration-700 ease-out opacity-0 group-hover:opacity-100" />
              
              {/* Text with Multiple Layers */}
              <div className="relative">
                {/* Main Text */}
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-500">
                  YADNYESH
                </h1>
                
                {/* Decorative elements */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-600 to-purple-600 transition-all duration-500 group-hover:h-full" />
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-purple-600 to-pink-600 transition-all duration-500 group-hover:h-full" />
              </div>

              {/* Animated Border Lines */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-500 group-hover:w-full" />
              <div className="absolute top-0 right-0 w-0 h-0.5 bg-gradient-to-l from-blue-600 via-purple-600 to-pink-600 transition-all duration-500 group-hover:w-full" />

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-600 opacity-0 transition-all duration-500 group-hover:opacity-100" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-pink-600 opacity-0 transition-all duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-purple-600 opacity-0 transition-all duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-purple-600 opacity-0 transition-all duration-500 group-hover:opacity-100" />

            </div>
          </div>

          {/* Rest of the navbar code remains the same */}
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 lg:space-x-10">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative group px-6 py-3 text-base lg:text-lg font-medium capitalize transition-all duration-500"
                >
                  {/* Text and Icon */}
                  <span className={`relative z-10 transition-all duration-500 flex items-center gap-2 transform ${
                    activeSection === item
                      ? 'text-blue-600 dark:text-blue-400 scale-105'
                      : 'text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400'
                  } group-hover:translate-x-1`}>
                    {item}
                    <ChevronRight 
                      className={`h-4 w-4 transition-all duration-500 transform ${
                        hoveredItem === item ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-4 -rotate-45'
                      }`}
                    />
                  </span>
                  
                  {/* Hover Background Effect */}
                  <span className={`absolute inset-0 rounded-xl transition-all duration-500 ease-out ${
                    activeSection === item
                      ? 'bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 scale-100 opacity-100'
                      : 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100'
                  }`} />
                  
                  {/* Animated Borders */}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-500 ease-out ${
                    activeSection === item
                      ? 'w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
                      : 'group-hover:w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'
                  }`} />
                  
                  <span className={`absolute top-0 right-0 w-0 h-0.5 transition-all duration-500 ease-out delay-100 ${
                    activeSection === item
                      ? 'w-full bg-gradient-to-l from-blue-600 via-purple-600 to-pink-600'
                      : 'group-hover:w-full bg-gradient-to-l from-blue-400 via-purple-400 to-pink-400'
                  }`} />
                  
                  <span className={`absolute left-0 bottom-0 w-0.5 h-0 transition-all duration-500 ease-out ${
                    activeSection === item
                      ? 'h-full bg-gradient-to-t from-blue-600 via-purple-600 to-pink-600'
                      : 'group-hover:h-full bg-gradient-to-t from-blue-400 via-purple-400 to-pink-400'
                  }`} />
                  
                  <span className={`absolute right-0 top-0 w-0.5 h-0 transition-all duration-500 ease-out delay-100 ${
                    activeSection === item
                      ? 'h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600'
                      : 'group-hover:h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none group"
              aria-label="Toggle menu"
            >
              <span className="absolute inset-0 rounded-lg transition-colors duration-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30" />
              {isOpen ? (
                <X size={24} className="relative z-10 transition-all duration-500 rotate-0 group-hover:rotate-180" />
              ) : (
                <Menu size={24} className="relative z-10 transition-all duration-300 group-hover:scale-110" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          } backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 shadow-xl rounded-b-2xl border-t border-gray-200 dark:border-gray-700`}
        >
          <div className="px-4 py-3 space-y-2 max-h-[calc(100vh-6rem)] overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`w-full relative group px-4 py-3 rounded-xl text-base font-medium capitalize transition-all duration-500 ${
                  activeSection === item
                    ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                }`}
              >
                <span className="relative z-10 flex items-center justify-between group-hover:translate-x-1 transition-transform duration-500">
                  {item}
                  <ChevronRight 
                    className={`h-4 w-4 transition-all duration-500 transform ${
                      activeSection === item ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0'
                    }`}
                  />
                </span>
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;