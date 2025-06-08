import {Mail, Github, Linkedin} from 'lucide-react';

const ContactSection = ({ darkMode }) => {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Let's <span className={`${
              darkMode ? 'text-cyan-400' : 'text-indigo-600'
            }`}>Connect</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Get In Touch
            </h3>
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", link: "vcodementor@gmail.com" },
                { icon: Github, label: "GitHub", link: "github.com/vcodementor" },
                { icon: Linkedin, label: "LinkedIn", link: "linkedin.com/in/vcodementor" }
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <a
                      key={index}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                        darkMode
                          ? 'bg-gray-800/50 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50'
                          : 'bg-gray-100/50 text-gray-600 hover:text-indigo-600 hover:bg-gray-200/50'
                      }`}
                    >
                    <div className={`p-3 rounded-lg ${
                      darkMode ? 'bg-gray-800/50 text-cyan-400' : 'bg-gray-100 text-indigo-600'
                    }`}>
                      <contact.icon size={24} />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-2xl p-8 ${
            darkMode
              ? 'bg-gray-800/50 border border-gray-700/50'
              : 'bg-white/50 border border-gray-200/50'
          } backdrop-blur-sm`}>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400'
                      : 'bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500'
                  } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400'
                      : 'bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500'
                  } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 resize-none ${
                    darkMode
                      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400'
                      : 'bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500'
                  } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                />
              </div>
              <button
                type="submit"
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  darkMode
                    ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-black hover:shadow-xl hover:shadow-cyan-500/25'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl hover:shadow-indigo-500/25'
                }`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;