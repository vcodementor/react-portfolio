import {React,useState} from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("lock-scroll");
  };

  return (
    <header className={`max-w-[87.75rem] mx-auto px-4 sm:px-4 lg:px-6 flex items-center justify-between py-[1.3125rem] top-0 z-10`}>
      <a href="#about" className="mr-[3.875rem] ml-3 title-font font-medium text-xl text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light">
        {/* <img
          src={logo}
          alt="snap"
          width={91}
          height={26}
          className={`${styles.transition} dark:filter-logo-white mt-[0.3125rem]`}
        /> */}
        Vivek Patel
      </a>
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
  
}