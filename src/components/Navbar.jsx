import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-neutral-500">
            Siwoo JUNG
          </Link>
        </div>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-200">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
