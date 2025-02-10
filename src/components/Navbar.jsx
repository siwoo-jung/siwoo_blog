import React, { useState } from "react";
import dark_mode_logo from "/public/assets/dark_mode.png";
import light_mode_logo from "/public/assets/light_mode.svg";
import list_dark_logo from "/public/assets/list_dark.svg";
import list_light_logo from "/public/assets/list_light.svg";
import tag_dark_logo from "/public/assets/tag_dark.svg";
import tag_light_logo from "/public/assets/tag_light.svg";

const Navbar = ({ darkMode, setDarkMode }) => {
  const maxWidth = "w-7";

  return (
    <nav
      className={`flex px-5 py-5 border-b-2 border-b-gray-400/30 md:px-[10%] xl:px-[20%]`}
    >
      <div className="w-[100%] flex justify-between">
        <div className="text-xl md:text-3xl font-bold">
          <a href="/" className="hover:text-neutral-500">
            <p className="font-serif">Siwoo's Blog</p>
          </a>
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <button onClick={() => setDarkMode(!darkMode)} className="flex">
              {darkMode ? (
                <img
                  src={light_mode_logo}
                  className={maxWidth}
                  alt="light_mode_logo"
                ></img>
              ) : (
                <img
                  src={dark_mode_logo}
                  className={maxWidth}
                  alt="dark_mode_logo"
                ></img>
              )}
            </button>
          </li>
          <li>
            <div to="/" className="hover:text-neutral-500 ">
              {darkMode ? (
                <img
                  src={list_light_logo}
                  className={maxWidth}
                  alt="list_light_logo"
                ></img>
              ) : (
                <img
                  src={list_dark_logo}
                  className={maxWidth}
                  alt="list_dark_logo"
                ></img>
              )}
            </div>
          </li>
          <li>
            <div to="/" className="hover:text-neutral-500 ">
              {darkMode ? (
                <img
                  src={tag_light_logo}
                  className={maxWidth}
                  alt="tag_light_logo"
                ></img>
              ) : (
                <img
                  src={tag_dark_logo}
                  className={maxWidth}
                  alt="tag_dark_logo"
                ></img>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
