import { ExternalLink } from "lucide-react";

const ProjectsSection = ({ darkMode }) => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Full-Stack",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      description: "Modern e-commerce solution with AI recommendations",
      image: "🛒",
      link: "#"
    },
    {
      title: "Healthcare Management",
      category: "Web App",
      tech: ["Next.js", "Python", "PostgreSQL", "AWS"],
      description: "Patient management system with telemedicine features",
      image: "🏥",
      link: "#"
    },
    {
      title: "Real Estate Platform",
      category: "Full-Stack",
      tech: ["React", "PHP", "MySQL", "Google Maps"],
      description: "Property listing platform with virtual tours",
      image: "🏠",
      link: "#"
    },
    {
      title: "Travel Booking App",
      category: "Mobile + Web",
      tech: ["React Native", "Node.js", "Redis", "Azure"],
      description: "Complete travel booking solution with AI itinerary",
      image: "✈️",
      link: "#"
    },
    {
      title: "Social Media Dashboard",
      category: "SaaS",
      tech: ["Vue.js", "Python", "Docker", "GCP"],
      description: "Multi-platform social media management tool",
      image: "📱",
      link: "#"
    },
    {
      title: "AI Content Generator",
      category: "AI/ML",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      description: "Content generation platform using advanced AI",
      image: "🤖",
      link: "#"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured <span className={`${
              darkMode ? 'text-cyan-400' : 'text-indigo-600'
            }`}>Projects</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Innovative solutions across various industries, from e-commerce to healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;