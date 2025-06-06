import { Code, Globe, Database, Cloud} from 'lucide-react';

const SkillsSection = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      skills: ["React", "Next.js", "Vue.js", "Angular",  "TypeScript", "Tailwind CSS", "Three.js", "Redux"]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      skills: ["Node.js", "Python", "PHP", "Express", "Django", "Laravel", "FastAPI"]
    },
    {
      title: "Web & Mobile Developement",
      icon: <Code className="w-8 h-8" />,
      skills: ['Wordpress', 'Shopify', 'webflow', 'Wix' , 'Cordova' ,'Ionic' ,'React Native']
    },
    {
      title: " UI/ UX & Digital Marketing",
      icon: <Code className="w-8 h-8" />,
      skills: ['Figma', 'Adobe XD', 'SEO', 'Soical Media Marketing', 'Sendgrid' ,'mailchimp']
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform", "Monitoring"]
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Technical <span className={`${
              darkMode ? 'text-cyan-400' : 'text-indigo-600'
            }`}>Expertise</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Comprehensive skill set across modern web technologies and cloud platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50'
                  : 'bg-white/50 border border-gray-200/50 hover:border-indigo-300/50'
              } backdrop-blur-sm`}
            >
              <div className={`flex items-center space-x-4 mb-6 ${
                darkMode ? 'text-cyan-400' : 'text-indigo-600'
              }`}>
                {category.icon}
                <h3 className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`px-4 py-2 rounded-lg text-center font-medium transition-all duration-300 hover:scale-105 ${
                      darkMode
                        ? 'bg-gray-700/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                        : 'bg-gray-100/80 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600'
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;