import React from 'react';
import { Code2, Palette, Globe } from 'lucide-react';

function About() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 bg-gradient-to-bl from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            Icon: Code2,
            title: "Web Development",
            description: "Experienced in building modern web applications using React, Node.js, and other cutting-edge technologies.",
            delay: "0"
          },
          {
            Icon: Palette,
            title: "UI/UX Design",
            description: "Creating beautiful and intuitive user interfaces with a focus on user experience and accessibility.",
            delay: "200"
          },
          {
            Icon: Globe,
            title: "Full Stack",
            description: "Proficient in both frontend and backend development, creating complete web solutions.",
            delay: "400"
          }
        ].map(({ Icon, title, description, delay }, index) => (
          <div
            key={index}
            className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-scale-in"
            style={{ animationDelay: `${delay}ms` }}
          >
            <div className="text-blue-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <Icon size={40} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;