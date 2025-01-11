import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profile from '../assets/dp.jpeg';

function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Content Container */}
      <div className="relative flex flex-col sm:flex-row items-center sm:items-start space-y-8 sm:space-y-0 sm:space-x-12 text-center sm:text-left">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={profile}
            alt="Profile"
            className="h-72 w-72 rounded-full object-cover border-4 border-blue-500 shadow-xl animate-float hover:scale-110 transition-transform duration-300 animate-glow"
          />
          {/* Decorative Circles */}
          <div className="absolute -inset-4 border-2 border-blue-500/20 rounded-full animate-spin-slow"></div>
          <div className="absolute -inset-8 border-2 border-purple-500/20 rounded-full animate-spin-slow"></div>
        </div>

        {/* Text Content */}
        <div>
          <h1 className="p-4 text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4 animate-slide-left leading-[1.2] overflow-visible">
            Yadnyesh Badgujar
          </h1>
          <p className="text-xl sm:text-2xl pl-6 text-gray-600 dark:text-gray-300 mb-4 animate-slide-right">
            Full Stack Developer
          </p>
          <p className="text-lg text-gray-600 pl-6 dark:text-gray-400 max-w-2xl mx-auto sm:mx-0 animate-fade-in">
            As a passionate Full Stack Developer, I specialize in building modern, responsive web applications. I love solving complex problems and delivering elegant solutions using cutting-edge technologies.
          </p>

          {/* Social Links */}
          <div className="flex justify-center sm:justify-start space-x-6 pl-6 mt-8 animate-fade-in">
            {[
              { Icon: Github, href: '#', label: 'GitHub' },
              { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              { Icon: Mail, href: '#', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group relative p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              >
                <Icon className="w-7 h-7 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
