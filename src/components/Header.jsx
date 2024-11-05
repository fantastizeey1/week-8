import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-5 bg-blue-600 text-white shadow-lg">
      <div className="text-xl font-bold">
        <Link to="/">Pet & Recipe Finder</Link>
      </div>
      <nav className="hidden md:flex">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/petgallery"
              className="hover:underline transition duration-300"
            >
              Pet Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/recipes"
              className="hover:underline transition duration-300"
            >
              Recipes
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 bg-blue-600 w-full md:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link
                to="/petgallery"
                className="hover:underline transition duration-300"
                onClick={toggleMenu}
              >
                Pet Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/recipes"
                className="hover:underline transition duration-300"
                onClick={toggleMenu}
              >
                Recipes
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
