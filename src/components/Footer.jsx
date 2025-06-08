const Footer = ({ state }) => {


  return (
    <footer className={`p-12 bottom-0 w-full z-50 transition-all duration-300 ${
      state.darkMode ? 'bg-gray-900/90 border-cyan-500/20' : 'bg-white/90 border-indigo-200'
    } backdrop-blur-md border-b`}>
        <div className={`text-2xl font-bold ${state.darkMode ? 'text-cyan-400' : 'text-indigo-600'}`}>
          <div>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} vcodementor. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
           
          </div>
        </div>
      </footer>
  );
};

export default Footer;