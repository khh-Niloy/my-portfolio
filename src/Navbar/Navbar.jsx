import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const links = (
    <>
      <ScrollLink to="about" smooth={true} duration={500}>
        <li className="cursor-pointer">
          <a>About</a>
        </li>
      </ScrollLink>
      <ScrollLink to="skills" smooth={true} duration={500}>
        <li className="cursor-pointer">
          <a>Skills</a>
        </li>
      </ScrollLink>
      <ScrollLink to="projects" smooth={true} duration={500}>
        <li className="cursor-pointer">
          <a>Projects</a>
        </li>
      </ScrollLink>
      <li className="cursor-pointer">
        <a>Contact</a>
      </li>
    </>
  );

  return (
    <div className="w-[85%] mx-auto mt-2 font">
      <div className="navbar">
        <div className="flex-1">
          <Link to={`/`}>
            <a className="text-xl font-semibold ">Khh Niloy</a>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="gap-10 text-sm menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
