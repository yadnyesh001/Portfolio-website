import React from 'react';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import profile from '../assets/dp.jpeg';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[length:24px_24px] animate-[spin_100s_linear_infinite] opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 animate-gradient"></div>
      </div>

      {/* Main content */}
      <div className="relative flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-16 max-w-7xl mx-auto">
          {/* Profile Image Section */}
          <div className="relative group">
            {/* Ripple effect circles */}
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 animate-ripple"></div>
            <div className="absolute inset-0 rounded-full border-2 border-violet-500/20 animate-ripple" style={{ animationDelay: '1s' }}></div>
            
            {/* Main image container */}
            <div className="relative animate-float">
              <div className="relative w-80 h-80 animate-morph group-hover:scale-105 transition-transform duration-700">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover animate-glow"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-700"></div>
              </div>

              {/* Rotating borders */}
              <div className="absolute -inset-2 border-2 border-dashed border-blue-500/20 rounded-full animate-rotate"></div>
              <div className="absolute -inset-4 border-2 border-dashed border-purple-500/20 rounded-full animate-rotate" style={{ animationDirection: 'reverse' }}></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-2xl">
            {/* Name and Title */}
            <div className="relative mb-8">
              <Sparkles className="absolute -left-12 top-0 w-8 h-8 text-yellow-400 animate-pulse" />
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 relative">
                <span className="inline-block animate-slide-up">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 animate-gradient">
                    Yadnyesh Badgujar
                  </span>
                </span>
                <br />
                
              </h1>
              <p className="text-4xl text-gray-600 pl-2 pt-3 dark:text-gray-300 mb-6 animate-slide-up animation-delay-300 font-medium tracking-wide">
                Full Stack Developer
              </p>
            </div>

            {/* Bio */}
            <div className="prose prose-lg dark:prose-invert pl-2 animate-slide-up animation-delay-450">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                As a passionate Full Stack Developer, I craft modern digital experiences 
                that combine elegant design with robust functionality. Specializing in 
                building scalable web applications, I transform complex challenges into 
                intuitive solutions using cutting-edge technologies.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mt-12 animate-slide-up animation-delay-600">
              {[
                { Icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
                { Icon: Mail, href: '#', label: 'Email', color: 'hover:text-red-500 dark:hover:text-red-400' },
              ].map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group relative"
                >
                  <div className="relative p-4 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition-all duration-300">
                    <Icon className={`w-7 h-7 text-gray-600 dark:text-gray-300 ${color} transition-colors`} />
                    <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/90 dark:bg-gray-700/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm">
                      {label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;