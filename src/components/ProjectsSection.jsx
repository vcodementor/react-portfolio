import { ExternalLink } from "lucide-react";

const ProjectsSection = ({ darkMode }) => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Full-Stack",
      tech: ["PHP", "React", "My Sql", "Stripe"],
      description: "Modern e-commerce solution with AI recommendations",
      image: "🛒",
      link: "https://www.auroramarine.ca"
    },
    {
      title: "Hotel booking",
      category: "Full-Stack",
      tech: ["PHP", "Wordpress", "MYSQL", "AWS"],
      description: "Patient management system with telemedicine features",
      image: "🏥",
      link: "https://hotelamavi.com/"
    },
    {
      title: "Real Estate Platform",
      category: "Full-Stack",
      tech: ["React", "Nodejs", "MySQL", "Google Maps"],
      description: "Property listing platform with virtual tours",
      image: "🏠",
      link: "https://www.charthome.ca/"
    },
    {
      title: "Tour guide",
      category: "Full-Stack",
      tech: ["Angular", "PHP", "Redis", "Aws"],
      description: "Complete travel booking solution with AI itinerary",
      image: "✈️",
      link: "https://www.shakaguide.com/"
    },
    {
      title: "tour Book",
      category: "Full-Stack",
      tech: ["Vue.js", "PHP", "Docker", "Azure"],
      description: "Multi-platform tour booking management tool",
      image: "📱",
      link: "https://citysightseeingtoronto.com/"
    },
    {
      title: "AI Content Generator",
      category: "AI/ML",
      tech: ["Python", "TensorFlow", "Django", "React"],
      description: "Content generation platform using advanced AI",
      image: "🤖",
      link: "https://vosyn.ai/"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className={`${
              darkMode ? 'text-cyan-400' : 'text-indigo-600'
            }`}>Works</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Innovative solutions across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a href={project.link} target="_blank" title={project.title} rel="noopener noreferrer">
            <div
              key={index}
              className={`group relative rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 ${
                darkMode
                  ? 'bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10'
                  : 'bg-white/50 border border-gray-200/50 hover:border-indigo-300/50 hover:shadow-2xl hover:shadow-indigo-500/10'
              } backdrop-blur-sm`}
            >
              <div className="text-4xl mb-4">{project.image}</div>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-indigo-100 text-indigo-600'
              }`}>
                {project.category}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {project.title}
              </h3>
              <p className={`mb-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-2 py-1 rounded text-xs ${
                      darkMode
                        ? 'bg-gray-700/50 text-gray-300'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button className={`flex items-center space-x-2 font-medium transition-all duration-300 ${
                darkMode
                  ? 'text-cyan-400 hover:text-cyan-300'
                  : 'text-indigo-600 hover:text-indigo-500'
              }`}>
                <span>View Project</span>
                <ExternalLink size={16}  />
              </button>
            </div>
            </a>
          ))}

        </div>
    
      </div>
    </section>
  );
};
export default ProjectsSection;