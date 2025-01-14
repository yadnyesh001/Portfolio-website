import React from 'react';
import { Github, ExternalLink, Globe, Server, Database, Code2 } from 'lucide-react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';

function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      subtitle: 'Full Stack Development',
      description: 'A cutting-edge e-commerce platform built with React and Node.js, featuring real-time inventory management and seamless payment integration. Supports multiple payment gateways and includes an advanced admin dashboard.',
      image: project1,
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'Production Ready',
      technologies: [
        { name: 'React', icon: <Code2 size={16} />, color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300' },
        { name: 'Node.js', icon: <Server size={16} />, color: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300' },
        { name: 'MongoDB', icon: <Database size={16} />, color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-300' }
      ]
    },
    {
      title: 'Task Management App',
      subtitle: 'Real-time Collaboration',
      description: 'An innovative task management application with real-time updates, featuring team workflows and progress tracking dashboards. Includes customizable Kanban boards and automated notifications.',
      image: project2,
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'Beta Release',
      technologies: [
        { name: 'React', icon: <Code2 size={16} />, color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300' },
        { name: 'Socket.io', icon: <Globe size={16} />, color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300' },
        { name: 'PostgreSQL', icon: <Database size={16} />, color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300' }
      ]
    }
  ];

  return (
    <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block animate-fade-in mb-3">
            <span className="px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium">
              Portfolio Showcase
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 tracking-tight mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my latest works showcasing modern web development techniques and creative solutions
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
            >
              <div className={`relative z-10 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 dark:opacity-40 blur-3xl group-hover:opacity-30 dark:group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 z-10 mix-blend-overlay"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-sm font-medium text-blue-600 dark:text-blue-400 shadow-lg">
                      {project.status}
                    </div>
                  </div>

                  <div className="absolute -bottom-3 left-6 right-6 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/70 to-purple-500/0"></div>
                </div>
              </div>

              <div className={`relative z-20 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative p-5">
                  <div className="absolute -inset-3 bg-white/40 dark:bg-gray-800/40 rounded-3xl blur-2xl"></div>
                  
                  <div className="relative space-y-5">
                    <div className="space-y-2">
                      <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                        {project.subtitle}
                      </span>
                      <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 tracking-tight">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <div 
                          key={techIndex}
                          className={`flex items-center gap-2 px-3 py-1 rounded-full ${tech.color} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}
                        >
                          {tech.icon}
                          <span className="text-xs font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-3">
                      <a
                        href={project.demo}
                        className="group relative flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-500/30"
                      >
                        <span>Live Preview</span>
                        <ExternalLink size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                        <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                      </a>
                      <a
                        href={project.github}
                        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 font-medium hover:-translate-y-0.5"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

