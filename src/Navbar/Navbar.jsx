import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const links = (
    <>
      <ScrollLink to="about" smooth={true} duration={500}>
        <li className="cursor-pointer relative group">
          <a className="duration-300 text-black relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-current after:left-0 after:bottom-[-4px] after:rounded-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
            About
          </a>
        </li>
      </ScrollLink>
      <ScrollLink to="skills" smooth={true} duration={500}>
        <li className="cursor-pointer relative group">
          <a className="duration-300 text-black relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-current after:left-0 after:bottom-[-4px] after:rounded-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
            Skills
          </a>
        </li>
      </ScrollLink>
      <ScrollLink to="project" smooth={true} duration={500}>
        <li className="cursor-pointer relative group">
          <a className="duration-300 text-black relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-current after:left-0 after:bottom-[-4px] after:rounded-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
            Projects
          </a>
        </li>
      </ScrollLink>
      <ScrollLink to="education" smooth={true} duration={500}>
        <li className="cursor-pointer relative group">
          <a className="duration-300 text-black relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-current after:left-0 after:bottom-[-4px] after:rounded-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
            Education
          </a>
        </li>
      </ScrollLink>
      <ScrollLink to="Contact" smooth={true} duration={500}>
        <li className="cursor-pointer relative group">
          <a className="duration-300 text-black relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-current after:left-0 after:bottom-[-4px] after:rounded-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
            Contact
          </a>
        </li>
      </ScrollLink>
    </>
  );

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-full backdrop-blur-md fixed top-0 z-50">
      <div id="nav" className="xl:w-[85%] lg:w-[90%] w-[90%] mx-auto mt-2 font">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div>
              <img
                onClick={() => {
                  navigate("/");
                }}
                src="mylogo2.png"
                className="xl:w-[6%] cursor-pointer lg:w-[7%] md:w-[9%] sm:w-[8%] w-[11%]  md:ml-0 sm:ml-[29rem] ml-[18rem]"
                alt=""
              />
            </div>
          </div>
          <div className="flex-none hidden navbar-end md:flex">
            <ul className="gap-10 text-sm menu-horizontal px-1">{links}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
