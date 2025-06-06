import useGlobalState from "../redux/useGlobalState";
import BlogsSection from "./BlogsSection";
import ContactSection from "./ContactSection";
import HomeSection from "./HomeSection";
import ProjectsSection from "./ProjectsSection";
import Navigation from "./Navigation";
import ThreeBackground from "./ThreeBackground";

const Portfolio = () => {
  const [state, dispatch] = useGlobalState();

  const renderSection = () => {
    switch (state.activeSection) {
      case 'home':
        return <HomeSection darkMode={state.darkMode} />;
      case 'projects':
        return <ProjectsSection darkMode={state.darkMode} />;
      case 'blogs':
        return <BlogsSection darkMode={state.darkMode} />;
      case 'contact':
        return <ContactSection darkMode={state.darkMode} />;
      default:
        return <HomeSection darkMode={state.darkMode} />;
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      state.darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    }`}>
      <ThreeBackground darkMode={state.darkMode} />
      <Navigation state={state} dispatch={dispatch} />
      <main className="relative z-10">
        {renderSection()}
      </main>
    </div>
  );
};

export default Portfolio;