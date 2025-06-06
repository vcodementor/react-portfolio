import {  ChevronRight } from 'lucide-react';

const BlogsSection = ({ darkMode }) => {
  const blogs = [
    {
      title: "Building Scalable E-commerce with React & AWS",
      excerpt: "Learn how to create a modern e-commerce platform using React, Node.js, and AWS services for maximum scalability.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Web Development",
      image: "📝"
    },
    {
      title: "AI Integration in Healthcare Applications",
      excerpt: "Exploring the implementation of machine learning models in healthcare management systems for better patient outcomes.",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      category: "AI/ML",
      image: "🤖"
    },
    {
      title: "Three.js: Creating Immersive 3D Web Experiences",
      excerpt: "A comprehensive guide to building interactive 3D visualizations and animations for modern web applications.",
      date: "Dec 5, 2024",
      readTime: "15 min read",
      category: "3D Graphics",
      image: "🎨"
    },
    {
      title: "Cloud Architecture: AWS vs Azure Comparison",
      excerpt: "Detailed comparison of AWS and Azure services for different project requirements and cost considerations.",
      date: "Nov 28, 2024",
      readTime: "10 min read",
      category: "Cloud Computing",
      image: "☁️"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Latest <span className={`${
              darkMode ? 'text-cyan-400' : 'text-indigo-600'
            }`}>Blogs</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Insights and tutorials on modern web development, AI, and cloud technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className={`group rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 ${
                darkMode
                  ? 'bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50'
                  : 'bg-white/50 border border-gray-200/50 hover:border-indigo-300/50'
              } backdrop-blur-sm cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-indigo-100 text-indigo-600'
                }`}>
                  {blog.category}
                </div>
                <div className="text-3xl">{blog.image}</div>
              </div>
              
              <h3 className={`text-xl font-bold mb-3 group-hover:${
                darkMode ? 'text-cyan-400' : 'text-indigo-600'
              } transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {blog.title}
              </h3>
              
              <p className={`mb-4 leading-relaxed ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {blog.excerpt}
              </p>
              
              <div className={`flex items-center justify-between text-sm ${
                darkMode ? 'text-gray-500' : 'text-gray-500'
              }`}>
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
              
              <div className={`flex items-center mt-4 font-medium transition-all duration-300 ${
                darkMode
                  ? 'text-cyan-400 group-hover:text-cyan-300'
                  : 'text-indigo-600 group-hover:text-indigo-500'
              }`}>
                <span>Read More</span>
                <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;