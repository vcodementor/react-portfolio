import { useState, useEffect } from 'react';
import { Mail, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import SkillsSection from './SkillsSection';
import ReviewsSection from './ReviewsSection';

const HomeSection = ({ darkMode, dispatch }) => {
  const skills = ['Full Stack Development', 'Web Developer', 'Mobile  Application Developer' , 'E-commerce Solutions', 'SEO', 'AI & Machine Learning', 'Social Media Marekting',];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className={`inline-block px-4 py-2 rounded-full mb-6 ${
          darkMode ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-indigo-100 text-indigo-600 border border-indigo-200'
        }`}>
          <span className="text-sm font-medium">Available for hire</span>
        </div>

        <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Vivek <span className={`bg-gradient-to-r ${
            darkMode 
              ? 'from-cyan-400 to-green-400' 
              : 'from-indigo-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            Patel
          </span>
        </h1>

        <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Full Stack <span className={`bg-gradient-to-r ${
            darkMode 
              ? 'from-cyan-400 to-green-400' 
              : 'from-indigo-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            Developer
          </span>
        </h1>

        <div className={`text-xl md:text-2xl mb-8 h-8 ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Specializing in{' '}
          <span className={`font-semibold ${
            darkMode ? 'text-cyan-400' : 'text-indigo-600'
          } transition-all duration-500`}>
            {skills[currentSkill]}
          </span>
        </div>

        <p className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Crafting comprehensive digital solutions from concept to deployment. 
          Expertise in modern web technologies, cloud architecture, search optimization, and conversion-focused marketing strategies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            darkMode
              ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-black hover:shadow-2xl hover:shadow-cyan-500/25'
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-indigo-500/25'
          }`}
           onClick={() => dispatch({ type: 'SET_ACTIVE_SECTION', payload: 'projects' })}
          >
            View My Work
          </button>
          <button className={`px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-300 ${
            darkMode
              ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
              : 'border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white'
          }`}
           onClick={() => dispatch({ type: 'SET_ACTIVE_SECTION', payload: 'contact' })}
          >
            Get In Touch
          </button>
        </div>
        <div className="flex justify-center space-x-6 mt-12">
          {[
            { icon: Mail, link: "mailto:vcodementor@gmail.com" },
            {
              icon: Linkedin,
              link: 'https://linkedin.com/in/vcodementor',
            },
            {
              icon: Twitter,
              link: 'https://x.com/vcodementor',
            },
            { icon: Instagram, 
              link: "https://instagram.com/vcodementor" },
            { icon: Facebook, 
              link: "https://facebook.com/vcodementor"
            }
          ].map(({ icon: Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                darkMode
                  ? 'bg-gray-800/50 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50'
                  : 'bg-gray-100/50 text-gray-600 hover:text-indigo-600 hover:bg-gray-200/50'
              }`}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
        <SkillsSection darkMode={darkMode} />
        <ReviewsSection darkMode={darkMode} />
      </div>
    </section>
  );
};

export default HomeSection;