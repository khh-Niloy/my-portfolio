import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import scroll from "../assets/scroll.json";
import { LottiePlayer } from "lottie-react";
import { FaCode } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Skill from "./Skill/Skill";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const MainLayout = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      {/* <Education></Education> */}
      {/* <Projects></Projects> */}
      {/* <Contact></Contact> */}
    </>
  );
};

export default MainLayout;
