import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HomeImage2 from "../../assets/imgs/Group 1.webp";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  document.documentElement.classList.add("dark");

  return (
    <div
      className={`dark:bg-[#030714] bg-gray-100 shadow-lg fixed top-0 start-0 end-0 py-3 z-50 max-md:py-5`}
    >
      <div className="w-[80%] mx-auto text-white flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12">
            <img className="w-full" src={HomeImage2} alt="" />
          </div>
          <div>
            <p className="font-semibold dark:text-white text-[#070B18] max-md:text-sm">
              Omar Sabry
            </p>
            <p className="dark:text-[#FFC400] text-[#6032CC]  font-semibold max-md:text-sm text-sm">
              Frontend Engineer
            </p>
          </div>
        </Link>

        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center bg-transparent p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <ul
          className={`md:flex items-center text-[#070B18] dark:text-white gap-6 hidden ${
            isMenuOpen ? "block" : "hidden"
          } mt-4 md:mt-0`}
        >
          <li>
            <NavLink
              className="duration-300 hover:text-[#8C5EF6]"
              onClick={() => {}}
              to=""
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="duration-300 hover:text-[#8C5EF6]"
              onClick={() => {}}
              to="about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="duration-300 hover:text-[#8C5EF6]"
              onClick={() => {}}
              to="skills"
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              className="duration-300 hover:text-[#8C5EF6]"
              onClick={() => {}}
              to="projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="duration-300 hover:text-[#8C5EF6]"
              onClick={() => {}}
              to="contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 mt-4 bg-[#030714] text-white py-4">
          <li>
            <NavLink
              className="duration-300 hover:text-[#8C5EF6]"
              to=""
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="duration-300 hover:text-[#8C5EF6]"
              to="about"
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="duration-300 hover:text-[#8C5EF6]"
              to="skills"
              onClick={toggleMenu}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              className="duration-300 hover:text-[#8C5EF6]"
              to="projects"
              onClick={toggleMenu}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="duration-300 hover:text-[#8C5EF6]"
              to="contact"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}
