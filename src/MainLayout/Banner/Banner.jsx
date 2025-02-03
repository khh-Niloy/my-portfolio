import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import Lottie from "lottie-react";
import scroll from "../../assets/scroll.json";
import { FaCode } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const tiltRef = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(2);
    }
  }, []);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
  }, []);

  return (
    <>
      <div
        id="banner"
        className="mt-[4.5rem] xl:w-[85%] lg:w-[90%] md:w-[90%] relative z-0 flex flex-col-reverse md:flex-row items-center justify-center mx-auto"
      >
        <div className="xl:w-[30%] lg:w-[40%] md:w-[50%] w-[85%] mt-10">
          <h1 className="text-4xl text-[#1e293b] font-bold mb-2">
            Greetings, <br />{" "}
            <span className="text-4xl sm:text-[2.8rem]">I'm Niloy</span> <br />
            <span className="whitespace-nowrap text-4xl sm:text-[2.8rem] text-[#1e293b]">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1500,
                  "MERN Developer",
                  1500,
                  "REACT Developer",
                  1500,
                ]}
                wrapper="span"
                speed={40}
                style={{ display: "inline-block" }}
                repeat={Infinity}
                cursor={true}
                deletionSpeed={65}
                className="transition-all duration-200"
              />
            </span>
          </h1>
          <div className="flex items-center justify-start gap-1">
            <FaCode className="text-lg bg-[#1a222e] p-1 rounded-full text-white"></FaCode>
            <p className="text-md font-semibold">where creativity meets code</p>
          </div>
          <h1 className="font-light text-sm leading-7 mt-4">
            I craft fast, responsive MERN stack applications, blending design,
            creativity, and technical expertise to bring your vision to life.
          </h1>

          <div className="flex gap-2 -translate-y-3">
            <a
              href="https://docs.google.com/document/d/1kjlcC3CVjy6LkDzA_BB3eZeE0zQ8nL14gpRiUXybCCs/edit?tab=t.0"
              target="_blank"
            >
              <button className="hover:shadow-xl hover:scale-[1.02] duration-300 text-white font-light px-5 py-2.5 mt-5 text-xs rounded-full relative overflow-hidden">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] rounded-full animate-border-flow -z-10"></div>
                <div className="absolute inset-[1px] bg-[#1e2735] rounded-full"></div>
                <span className="relative">View Resume</span>
              </button>
            </a>
            <a href="/Resume.pdf" download="Niloy_Resume.pdf">
              <button className="flex gap-2 items-center hover:shadow-xl hover:scale-[1.02] duration-500 text-white font-light px-5 py-2.5 mt-5 text-xs rounded-full relative overflow-hidden">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] rounded-full animate-border-flow -z-10"></div>
                <div className="absolute inset-[1px] bg-[#1e2735] rounded-full"></div>
                <span className="relative flex gap-2 items-center">
                  Download Resume
                  <FiDownload className="text-sm"></FiDownload>
                </span>
              </button>
            </a>
          </div>
          <div className="flex text-2xl gap-3 mt-3.5 text-[#1E2735]">
            <a href="https://github.com/khh-Niloy" target="_blank">
              <FaGithub className="cursor-pointer hover:scale-[1.15] duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/khh-niloy-b7b8a91b5/"
              target="_blank"
            >
              <FaLinkedin className="cursor-pointer hover:scale-[1.15] duration-300"></FaLinkedin>
            </a>
            <a href="https://www.facebook.com/khhniloy.niloy/" target="_blank">
              <FaFacebook className="cursor-pointer hover:scale-[1.15] duration-300"></FaFacebook>
            </a>
          </div>
        </div>

        <div
          ref={tiltRef}
          className="lg:mt-3 flex flex-col border-[10px] border-black items-center justify-center mt-10 sm:w-[39%] w-[57%] xl:w-[23.5%] lg:w-[27.5%] md:w-[36.5%] mx-auto rounded-full hover:shadow-2xl duration-500 relative overflow-hidden"
        >
          <div className="overflow-hidden border border-black w-full rounded-full h-[23rem]">
            <img
              className="hover:scale-[1.9] -translate-y-8 duration-300 scale-[1.7] translate-x-[0.7rem] w-full object-cover h-[23rem] rounded-full"
              src="myimage.jpg"
              alt=""
            />
          </div>
          <h1 className="opacity-40 bg-gradient-to-t from-[#ffffff1e] to-[#ffffff] bg-clip-text text-transparent absolute leading-5 top-[19.5rem] text-center -translate-y-1/2 text-white z-50 font-bold text-xl whitespace-nowrap">
            KHH <br /> NILOY
          </h1>
          <div className="bg-gradient-to-t from-[#000000e6] to-[#00000000] rounded-full duration-300 mt-64 absolute w-full h-full flex"></div>
          <div className="bg-gradient-to-t from-[#000000e6] to-[#00000000] rounded-full duration-300 mt-64 absolute w-full h-full flex"></div>
          <div className="bg-gradient-to-t from-[#000000e6] to-[#00000000] rounded-full duration-300 mt-64 absolute w-full h-full flex"></div>
        </div>

        <div className="w-[30%] mt-10 hidden lg:flex">
          <img src="/right.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center mt-8 pb-10 gap-1 w-[80%] mx-auto justify-center">
        <Lottie
          className="w-7 h-7"
          animationData={scroll}
          lottieRef={lottieRef}
          loop={true}
        />
        <h1 className="text-sm text-black font-normal">Scroll Down</h1>
      </div>
      <ScrollLink to="banner" smooth={true} duration={500}>
        <div className="z-50 fixed w-10 h-10 hover:bg-[#212121] border border-[#212121] duration-300 xl:top-[29.5rem] sm:right-16 lg:top-[32.5rem] md:top-[32.5rem] bottom-5 right-5 flex items-center justify-center rounded-full">
          <IoIosArrowRoundUp className="text-3xl text-black hover:text-white duration-300"></IoIosArrowRoundUp>
        </div>
      </ScrollLink>
    </>
  );
};

export default Banner;
