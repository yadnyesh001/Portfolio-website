import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', logo: 'https://raw.githubusercontent.com/github/explore/main/topics/html/html.png', category: 'Frontend' },
    { name: 'CSS', logo: 'https://raw.githubusercontent.com/github/explore/main/topics/css/css.png', category: 'Frontend' },
    { name: 'JavaScript', logo: 'https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png', category: 'Frontend' },
    { name: 'React', logo: 'https://raw.githubusercontent.com/github/explore/main/topics/react/react.png', category: 'Frontend' },
    { name: 'Node.js', logo: 'https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png', category: 'Backend' },
    { name: 'Express.js', logo: 'https://raw.githubusercontent.com/github/explore/main/topics/express/express.png', category: 'Backend' },
    { name: 'Postman', logo: 'https://raw.githubusercontent.com/github/explore/main/topics/postman/postman.png', category: 'Tools' },
    { name: 'Redux', logo: 'https://raw.githubusercontent.com/github/explore/main/topics/redux/redux.png', category: 'Frontend' },
    { name: 'Tailwind', logo: 'https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png', category: 'Frontend' },
    { name: 'MongoDB', logo: 'https://raw.githubusercontent.com/github/explore/main/topics/mongodb/mongodb.png', category: 'Backend' },
    { name: 'Git', logo: 'https://raw.githubusercontent.com/github/explore/main/topics/git/git.png', category: 'Tools' },
    { name: 'Java', logo: 'https://raw.githubusercontent.com/github/explore/main/topics/java/java.png', category: 'Backend' },
    { name: 'Figma', logo: 'https://raw.githubusercontent.com/github/explore/main/topics/figma/figma.png', category: 'Tools' },
    { name: 'SQL', logo: 'https://raw.githubusercontent.com/github/explore/main/topics/sql/sql.png', category: 'Backend' },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Technical Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-gray-700"
              style={{ animation: `fadeInUp ${0.3 + index * 0.1}s ease` }}
            >
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 mb-4">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {skill.name}
                </h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;