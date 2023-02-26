const SideBar = ({ toggleMenu, isMenuOpen }) => {
  return (
    <button
      type="button"
      onClick={toggleMenu}
      className={`absolute top-[1.65rem] right-[1.25rem] z-50 flex h-[1.15rem] w-7 flex-col justify-between lg:hidden ${
        isMenuOpen ? "!fixed" : ""
      }`}
      aria-haspopup="true"
      aria-expanded={isMenuOpen}
      aria-controls="navbar-menu"
    >
      <span className="sr-only">Open menu</span>
      <span
        className={`z-50 h-0.5 w-7 transform bg-primary-dark dark:bg-secondary-light ${
          isMenuOpen ? "translate-y-2 rotate-45 " : ""
        } transition duration-300 ease-in-out`}
        aria-hidden="true"
      ></span>
      <span
        className={`z-50 h-0.5 w-7 bg-primary-dark dark:bg-secondary-light ${
          isMenuOpen ? " opacity-0" : ""
        } transition duration-300 ease-in-out`}
        aria-hidden="true"
      ></span>
      <span
        className={`z-50 h-0.5 w-7 transform bg-primary-dark dark:bg-secondary-light ${
          isMenuOpen ? "-translate-y-2 -rotate-45 " : ""
        } transition duration-300 ease-in-out`}
        aria-hidden="true"
      ></span>
    </button>
  );
};

export default SideBar;