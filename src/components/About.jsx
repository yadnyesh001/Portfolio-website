import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 bg-gradient-to-bl from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
      </div>

      <div className="space-y-8">
        <p className="text-lg text-gray-600 dark:text-gray-300" style={{ fontFamily: 'Georgia, serif' }}>
          I am a passionate web developer with extensive experience in building modern web applications using React, Node.js, and other cutting-edge technologies. My journey in web development began several years ago, and I have since honed my skills to deliver high-quality, efficient, and scalable solutions.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300" style={{ fontFamily: 'Georgia, serif' }}>
          With a strong background in UI/UX design, I am dedicated to creating beautiful and intuitive user interfaces that prioritize user experience and accessibility. I believe that design is not just about aesthetics but also about functionality and usability.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300" style={{ fontFamily: 'Georgia, serif' }}>
          As a Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js), I am proficient in both frontend and backend development. This allows me to create complete web solutions that are robust, secure, and performance-driven. I enjoy the challenge of solving complex problems and continuously learning new technologies.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300" style={{ fontFamily: 'Georgia, serif' }}>
          I also leverage Tailwind CSS to create responsive and visually appealing designs. Tailwind's utility-first approach allows me to quickly build custom designs without writing a lot of custom CSS, ensuring that my applications are both functional and beautiful.
        </p>
      </div>
    </div>
  );
}

export default About;