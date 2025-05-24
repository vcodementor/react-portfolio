import {React,useState} from "react";
import Navbar from "./Navbar";
import {Images} from '../utlis/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("lock-scroll");
  };

  return (
    <header className={`max-w-[87.75rem] mx-auto px-4 sm:px-4 lg:px-6 flex items-center justify-between  top-0 z-10`}>
      <a href="#about" className="mr-[3.875rem] ml-3 title-font font-medium text-xl text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light">
        <img
          src={Images.logo}
          alt="snap"
          className={`dark:filter-logo-white mt-[0.3125rem] w-32 h-26 rounded-full object-cover border-4 border-gray-800"`}
        />
      </a>
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
  
}