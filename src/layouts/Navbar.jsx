import { React } from "react";
import Sidebar from "./Sidebar";
import ThemeSwitcher from "../components/ThemeSwitcher";


const Navbar = ({ toggleMenu, isMenuOpen }) => {

  return (
    <nav aria-label="Main" className="w-auto lg:w-full">
      <Sidebar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <ul
        className={`transition-visibility z-40 flex translate-x-[150%] flex-col items-center gap-4 p-10 pt-24 text-[0.875rem] text-medium-gray dark:text-white lg:flex-row lg:items-center lg:gap-10 lg:p-0 max-lg:invisible max-lg:dark:bg-gray-800 ${
          isMenuOpen ? "!visible !translate-x-0 max-lg:overflow-y-auto" : ""
        } fixed top-0 right-0 w-full max-w-[15.625rem] h-screen bg-white lg:static lg:max-w-none lg:transform-none lg:h-auto lg:bg-transparent`}
        id="navbar-menu"
      >
        <li>
          <a href="#about" className="font-medium cursor-pointer text-[16px] transition duration-300 ease-in-out block hover:text-almost-black dark:hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="font-medium cursor-pointer text-[16px] transition duration-300 ease-in-out block hover:text-almost-black dark:hover:text-gray-400">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="font-medium cursor-pointer text-[16px] transition duration-300 ease-in-out block hover:text-almost-black dark:hover:text-gray-400">
            Projects
          </a>
        </li>
        <li className="py-4 md:mr-[0.1875rem] md:py-0 lg:ml-auto">
          <a href="#contact" className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300">
            Hire Me
          </a>
        </li>
        <li>
          <ThemeSwitcher />
        </li>   
      </ul>
    </nav>
  );
};

export default Navbar;
