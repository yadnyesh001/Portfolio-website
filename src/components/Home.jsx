import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

function Home() {
  const scrollToNext = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 animate-shimmer"></div>
      
      {/* Content */}
      <div className="relative text-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200"
            alt="Profile"
            className="mx-auto h-32 w-32 rounded-full object-cover mb-8 border-4 border-blue-500 shadow-xl animate-float hover:scale-110 transition-transform duration-300 animate-glow"
          />
          {/* Decorative circles */}
          <div className="absolute -inset-4 border-2 border-blue-500/20 rounded-full animate-spin-slow"></div>
          <div className="absolute -inset-8 border-2 border-purple-500/20 rounded-full animate-spin-slow"></div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4 animate-slide-left">
          John Doe
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-right">
          Full Stack Developer
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in">
          Passionate about creating beautiful and functional web applications
          with modern technologies.
        </p>
        
        {/* Social links with hover effects */}
        <div className="flex justify-center space-x-6 mb-16 animate-fade-in">
          {[
            { Icon: Github, href: '#', label: 'GitHub' },
            { Icon: Linkedin, href: '#', label: 'LinkedIn' },
            { Icon: Mail, href: '#', label: 'Email' }
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="group relative p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400 transition-colors animate-bounce-slow"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </div>
  );
}

export default Home;