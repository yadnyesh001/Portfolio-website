import React from "react";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import profile from "../assets/dp.jpeg";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[length:24px_24px] animate-[spin_100s_linear_infinite] opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 animate-gradient"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(120,119,198,0.05)_50%,transparent_52%)] bg-[length:24px_24px]"></div>
      </div>

      {/* Main content - Added pt-24 for navbar spacing */}
      <div className="relative flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8 pt-24 md:pt-28">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-16 max-w-7xl mx-auto w-full">
          {/* Profile Image Section - Adjusted sizing and spacing */}
          <div className="relative group w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 flex-shrink-0 mt-8 sm:mt-12">
            {/* Ripple effects */}
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 animate-ripple"></div>
            <div
              className="absolute inset-0 rounded-full border-2 border-violet-500/20 animate-ripple"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute inset-0 rounded-full border-2 border-blue-500/10 animate-ripple"
              style={{ animationDelay: "2s" }}
            ></div>

            {/* Main image container */}
            <div className="relative animate-float">
              <div className="relative w-full h-full animate-morph group-hover:scale-105 transition-transform duration-700">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover shadow-2xl animate-glow"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/30 to-purple-500/30 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
              </div>

              {/* Rotating borders */}
              <div className="absolute -inset-2 border-2 border-dashed border-blue-500/20 rounded-full animate-rotate"></div>
              <div
                className="absolute -inset-4 border-2 border-dashed border-purple-500/20 rounded-full animate-rotate"
                style={{ animationDirection: "reverse" }}
              ></div>
              <div
                className="absolute -inset-6 border-2 border-dotted border-indigo-500/10 rounded-full animate-rotate"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>

          {/* Content Section - Improved spacing and text layout */}
          <div className="max-w-2xl w-full px-4 sm:px-6">
            {/* Name and Title with adjusted spacing */}
            <div className="relative mb-8 text-center lg:text-left">
              <div className="absolute -left-12 top-0 flex flex-col space-y-2 sm:space-y-3">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-yellow-400 animate-pulse" />
                <Sparkles
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>

              {/* Updated greeting and name */}
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 font-medium mb-2 animate-slide-up">
                  Hi, I am
                </h2>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold relative inline-block animate-slide-up">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 animate-gradient whitespace-nowrap">
                    Yadnyesh Badgujar
                  </span>
                </h1>
              </div>

              <p className="text-2xl sm:text-3xl md:text-4xl text-gray-600 dark:text-gray-300 mb-6 animate-slide-up animation-delay-300 font-medium tracking-wide">
                <span className="relative inline-block">
                  Full Stack Developer
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </span>
              </p>
            </div>

            {/* Bio */}
            <div className="prose prose-lg dark:prose-invert max-w-none animate-slide-up animation-delay-450 text-center lg:text-left">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg sm:text-xl">
                As a passionate Full Stack Developer, I craft modern digital
                experiences that combine elegant design with robust
                functionality. Specializing in building scalable web
                applications, I transform complex challenges into intuitive
                solutions using cutting-edge technologies.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-6 mt-8 sm:mt-12 animate-slide-up animation-delay-600 justify-center lg:justify-start">
              {[
                {
                  Icon: Github,
                  href: "#",
                  label: "GitHub",
                  color: "hover:text-gray-900 dark:hover:text-white",
                  bgHover: "hover:bg-gray-100 dark:hover:bg-gray-700",
                },
                {
                  Icon: Linkedin,
                  href: "#",
                  label: "LinkedIn",
                  color: "hover:text-blue-600 dark:hover:text-blue-400",
                  bgHover: "hover:bg-blue-50 dark:hover:bg-blue-900/30",
                },
                {
                  Icon: Mail,
                  href: "#",
                  label: "Email",
                  color: "hover:text-red-500 dark:hover:text-red-400",
                  bgHover: "hover:bg-red-50 dark:hover:bg-red-900/30",
                },
              ].map(({ Icon, href, label, color, bgHover }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group relative"
                >
                  <div
                    className={`relative p-3 sm:p-4 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 ${bgHover}`}
                  >
                    <Icon
                      className={`w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-300 ${color} transition-colors`}
                    />
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
