import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const maxWidth = "max-w-7";
  return (
    <nav className="py-2 border-b-2 border-b-gray-400/30">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="text-3xl font-bold">
          <Link
            to="/"
            className="hover:text-neutral-500 dark:text-white font-serif"
          >
            Siwoo's Blog
          </Link>
        </div>
        <ul className="flex items-center space-x-3">
          <li>
            <button onClick={() => setDarkMode(!darkMode)} className="flex ">
              {darkMode ? (
                <img src="src/assets/light_mode.svg" className={maxWidth}></img>
              ) : (
                <img src="src/assets/dark_mode.png" className={maxWidth}></img>
              )}
            </button>
          </li>
          <li>
            <Link to="/" className="hover:text-neutral-500 ">
              {darkMode ? (
                <img src="src/assets/list_light.svg" className={maxWidth}></img>
              ) : (
                <img src="src/assets/list_dark.svg" className={maxWidth}></img>
              )}
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-neutral-500 ">
              {darkMode ? (
                <img src="src/assets/tag_light.svg" className={maxWidth}></img>
              ) : (
                <img src="src/assets/tag_dark.svg" className={maxWidth}></img>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
