import {Mail, Linkedin, Instagram, Facebook, Twitter} from 'lucide-react';

const ContactSection = ({ darkMode }) => {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 min-h-[300px] gap-12">
          <div className={`rounded-2xl p-2 ${
            darkMode
              ? 'bg-gray-800/50 border border-gray-700/50'
              : 'bg-white/50 border border-gray-200/50'
          } backdrop-blur-sm`}>
            <iframe className="rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369115.04650811513!2d-80.00122787362278!3d43.71654840893945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1749581051176!5m2!1sen!2sca" width="100%" title="google map" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            {/* <form className="space-y-6">
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
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;