import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Code, Globe, Database, Cloud } from "lucide-react";

const SkillsSection = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-10 h-10" />,
      skills: ["React", "Next.js", "Vue", "Angular", "TypeScript", "Tailwind CSS", "Three.js", "Bootstrap", "HTML", "CSS", "Javascript"]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-10 h-10" />,
      skills: ["Node.js", "Python", "PHP", "Express", "Django", "Laravel", "FastAPI"]
    },
    {
      title: "AI/ML",
      icon: <Code className="w-10 h-10" />,
      skills: ['LangChain', 'LangGraph', 'N8N', 'Autogen', 'Prompt Engineering']
    },
    {
      title: "Web & Mobile Development",
      icon: <Code className="w-10 h-10" />,
      skills: ['Wordpress', 'Shopify', 'Webflow', 'Wix', 'Magento', 'Cordova', 'Ionic', 'React Native']
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-10 h-10" />,
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform", 'Jenkins', "Monitoring"]
    },
    {
      title: "UI/UX & Digital Marketing",
      icon: <Code className="w-10 h-10" />,
      skills: ['Figma', 'Adobe XD', 'SEO', 'Social Media Marketing', 'Sendgrid', 'Mailchimp']
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            My <span className={darkMode ? "text-cyan-400" : "text-indigo-600"}>Skills</span>
          </h2>
          <p className={`text-lg ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            A broad range of tools and technologies across development and design
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full"
        >
          {skillCategories.map((category, idx) => (
            <SwiperSlide key={idx} className="h-auto cusotm-swipe">
              <div className={`flex flex-col h-full p-6 rounded-3xl transition-all duration-300 shadow-md ${
                darkMode
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-cyan-500/50'
                  : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200 hover:border-indigo-300/50'
              }`}>
                <div className={`flex items-center mb-4 gap-3 ${
                  darkMode ? 'text-cyan-400' : 'text-indigo-600'
                }`}>
                  {category.icon}
                  <h3 className={`text-xl font-bold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition hover:scale-105 ${
                        darkMode
                          ? 'bg-gray-700/50 text-gray-200 hover:bg-cyan-500/30 hover:text-cyan-300'
                          : 'bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SkillsSection;
