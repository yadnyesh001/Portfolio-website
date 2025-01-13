import React from 'react';
import { motion } from 'framer-motion';
import { Database, Globe, Server, Code } from 'lucide-react';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const mernStack = [
    { 
      icon: <Database size={20} />, 
      title: "MongoDB", 
      description: "NoSQL database expert, proficient in data modeling and aggregation pipelines" 
    },
    { 
      icon: <Server size={20} />, 
      title: "Express.js", 
      description: "RESTful API development with middleware and authentication" 
    },
    { 
      icon: <Code size={20} />, 
      title: "React", 
      description: "Component architecture, hooks, and state management with Redux" 
    },
    { 
      icon: <Globe size={20} />, 
      title: "Node.js", 
      description: "Server-side JavaScript, async programming, and microservices" 
    }
  ];

  return (
    <div className="h-screen bg-gradient-to-bl from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div 
        className="container mx-auto max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-center mb-6"
          variants={itemVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-3">
            About Me
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {mernStack.map((tech, index) => (
            <motion.div
              key={tech.title}
              variants={itemVariants}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-900"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">{tech.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="space-y-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-blue-100 dark:border-blue-900"
          variants={itemVariants}
        >
          <motion.p 
            className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-serif"
            variants={itemVariants}
          >
            I am a passionate MERN stack developer with extensive experience in building modern web applications. My expertise spans the entire development lifecycle, from designing scalable database schemas to creating responsive user interfaces.
          </motion.p>
          
          <motion.p 
            className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-serif"
            variants={itemVariants}
          >
            Through my journey with the MERN stack, I've developed a deep understanding of full-stack JavaScript development. I specialize in creating performant applications that leverage MongoDB's flexibility, Express's robust middleware system, React's component-based architecture, and Node.js's event-driven runtime.
          </motion.p>

          <motion.div 
            className="relative p-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-xl border border-blue-200 dark:border-blue-800"
            variants={itemVariants}
          >
            <div className="absolute -top-3 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-0.5 rounded-full text-xs">
              Tech Stack
            </div>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-serif">
              My technical expertise includes authentication systems, RESTful APIs, state management with Redux, MongoDB aggregation pipelines, and deployment automation. I'm passionate about writing clean, maintainable code and implementing best practices for scalable web applications.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;