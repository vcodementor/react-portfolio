import { Menu, X, Sun, Moon, Code, Home, Briefcase, BookOpen, Mail} from 'lucide-react';

const Navigation = ({ state, dispatch }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'blogs', label: 'Blogs', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      state.darkMode ? 'bg-gray-900/90 border-cyan-500/20' : 'bg-white/90 border-indigo-200'
    } backdrop-blur-md border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={`text-2xl font-bold ${state.darkMode ? 'text-cyan-400' : 'text-indigo-600'}`}>
            Vcode<span className={state.darkMode ? 'text-green-400' : 'text-purple-600'}>Mentor</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => dispatch({ type: 'SET_ACTIVE_SECTION', payload: id })}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  state.activeSection === id
                    ? state.darkMode
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'bg-indigo-100 text-indigo-600 border border-indigo-200'
                    : state.darkMode
                      ? 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100/50'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
              className={`p-2 rounded-lg transition-all duration-300 ${
                state.darkMode
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {state.darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
              className={`md:hidden p-2 rounded-lg ${
                state.darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {state.isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {state.isMenuOpen && (
          <div className={`md:hidden py-4 ${state.darkMode ? 'border-gray-700' : 'border-gray-200'} border-t`}>
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  dispatch({ type: 'SET_ACTIVE_SECTION', payload: id });
                  dispatch({ type: 'TOGGLE_MENU' });
                }}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                  state.activeSection === id
                    ? state.darkMode
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'bg-indigo-100 text-indigo-600'
                    : state.darkMode
                      ? 'text-gray-300 hover:bg-gray-800/50'
                      : 'text-gray-600 hover:bg-gray-100/50'
                }`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;