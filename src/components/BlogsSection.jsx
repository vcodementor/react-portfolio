import { useEffect, useState } from 'react';

import axios from 'axios';

const BlogsSection = ({ darkMode }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchMediumFeed = async () => {
      try {
        const response = await axios.get(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vcodementor'
        );
        const items = response.data.items;

        const formattedBlogs = items.map((item) => ({
          title: item.title,
          excerpt: item.description.replace(/<[^>]+>/g, '').slice(0, 150) + '...',
          date: new Date(item.pubDate).toLocaleDateString(),
          readTime: `${Math.ceil(item.content.length / 1000)} min read`,
          category: item.categories[0] || 'General',
          link: item.link,
          image: 'https://placehold.co/600x400'
        }));

        setBlogs(formattedBlogs);
      } catch (error) {
        console.error('Error fetching Medium RSS feed:', error);
      }
    };

    fetchMediumFeed();
  }, []);

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Latest{' '}
            <span className={`${darkMode ? 'text-cyan-400' : 'text-indigo-600'}`}>Blogs</span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Insights and tutorials from my Medium blog
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <a
              href={blog.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-2xl  transition-all duration-300 transform hover:scale-105 ${
                darkMode
                  ? 'bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50'
                  : 'bg-white/50 border border-gray-200/50 hover:border-indigo-300/50'
              } backdrop-blur-sm cursor-pointer block`}
            >
              <div className="relative flex items-center justify-between mb-4">
                <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`inline-block px-3 py-1 absolute top-4 left-6 rounded-full text-sm font-medium ${
                    darkMode ? 'bg-cyan-700 text-cyan-400' : 'bg-indigo-100 text-indigo-600'
                  }`}
                >
                  {blog.category}
                </div>
              </div>
              <div className='p-6'>
              <h3
                className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                  darkMode
                    ? 'text-white group-hover:text-cyan-400'
                    : 'text-gray-900 group-hover:text-indigo-600'
                }`}
              >
                {blog.title}
              </h3>
              <p
                className={`mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {blog.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {/* {blogs.tags.map((tag, index) => (
                  <span
                    key={index}
                          className={`px-2 py-1 text-xs rounded-full ${
                            darkMode  ? 'text-cyan-400 group-hover:text-cyan-300'
                    : 'text-indigo-600 group-hover:text-indigo-500'
                          }`}
                        >
                          {tag}
                  </span>
                ))} */}
              </div> 
              <div  className={`flex items-center justify-between text-sm font-medium transition-all duration-300 ${
                  darkMode
                    ? 'text-cyan-400 group-hover:text-cyan-300'
                    : 'text-indigo-600 group-hover:text-indigo-500'
                }`}>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center">
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <span className="text-xs font-medium text-green-500">
                  {blog.readTime}
                </span>
              </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;