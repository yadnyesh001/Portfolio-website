import React from 'react';

function Skills() {
  const skills = [
    { name: 'HTML', level: 90, logo: 'https://raw.githubusercontent.com/github/explore/main/topics/html/html.png' },
    { name: 'CSS', level: 90, logo: 'https://raw.githubusercontent.com/github/explore/main/topics/css/css.png' },
    { name: 'JavaScript', level: 85, logo: 'https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png' },
    { name: 'React', level: 80, logo: 'https://raw.githubusercontent.com/github/explore/main/topics/react/react.png' },
    { name: 'Node.js', level: 75, logo: 'https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png' },
    { name: 'Express.js', level: 75, logo: 'https://raw.githubusercontent.com/github/explore/main/topics/express/express.png' },
    { name: 'Postman', level: 70, logo: 'https://raw.githubusercontent.com/github/explore/main/topics/postman/postman.png' },
    { name: 'Redux', level: 80, logo: 'https://raw.githubusercontent.com/github/explore/main/topics/redux/redux.png' },
    { name: 'Tailwind', level: 75, logo: 'https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png' },
    { name: 'MongoDB', level: 75, logo: 'https://raw.githubusercontent.com/github/explore/main/topics/mongodb/mongodb.png' },
    { name: 'Git', level: 80, logo: 'https://raw.githubusercontent.com/github/explore/main/topics/git/git.png' },
    { name: 'Java', level: 70, logo: 'https://raw.githubusercontent.com/github/explore/main/topics/java/java.png' },
    { name: 'Figma', level: 70, logo: 'https://raw.githubusercontent.com/github/explore/main/topics/figma/figma.png' },
    { name: 'SQL', level: 75, logo: 'https://raw.githubusercontent.com/github/explore/main/topics/sql/sql.png' },
  ];

  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
          Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div 
            key={skill.name} 
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <img src={skill.logo} alt={skill.name} className="h-16 w-16 mb-4" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {skill.name}
            </span>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;