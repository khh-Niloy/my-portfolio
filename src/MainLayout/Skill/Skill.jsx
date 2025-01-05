import React, { useEffect, useState } from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

const Skill = () => {
  const [front, setfront] = useState([]);
  const [back, setback] = useState([]);
  const [design, setdesign] = useState([]);
  const [others, setothers] = useState([]);
  const [more, setmore] = useState([]);

  useEffect(() => {
    fetch("frontend.json")
      .then((res) => res.json())
      .then((data) => {
        setfront(data);
      });

    fetch("backend.json")
      .then((res) => res.json())
      .then((data) => {
        setback(data);
      });

    fetch("design.json")
      .then((res) => res.json())
      .then((data) => {
        setdesign(data);
      });

    fetch("others.json")
      .then((res) => res.json())
      .then((data) => {
        setothers(data);
      });

    fetch("more.json")
      .then((res) => res.json())
      .then((data) => {
        setmore(data);
      });
  }, []);

  return (
    <div className="text-center mt-36 xl:mt-0 xl:pt-0 pt-36 sm:pt-0 relative">
      <h1 id="skills" className="text-4xl  font-semibold">
        Skills
      </h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 w-[80%] m-auto mt-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-3">Frontend</h1>
          <div className="flex gap-6 mt-5">
            {front.map((e, index) => (
              <div
                key={index}
                className="flex flex-col justify-end items-center"
              >
                {(e.name === "Javascript" && (
                  <RiJavascriptFill className="text-5xl"></RiJavascriptFill>
                )) ||
                  (e.name === "React" && (
                    <FaReact className="text-[2.7rem] -translate-y-1"></FaReact>
                  )) ||
                  (e.name === "Vite" && (
                    <SiVite className="text-[2.5rem] -translate-y-1"></SiVite>
                  )) ||
                  (e.name === "Tailwind" && (
                    <SiTailwindcss className="text-5xl translate-y-0.5"></SiTailwindcss>
                  ))}
                <h1 className="text-xs mt-1.5">{e.name}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:mt-0 mt-20">
          <h1 className="mb-3 ">Backend</h1>
          <div className="flex gap-6 mt-5">
            {back.map((e, index) => (
              <div
                key={index}
                className="flex flex-col justify-end items-center"
              >
                {(e.name === "Node.js" && (
                  <FaNode className="text-5xl"></FaNode>
                )) ||
                  (e.name === "Express.js" && (
                    <SiExpress className="text-[2.3rem] -translate-y-1"></SiExpress>
                  ))}
                <h1 className="text-xs mt-1.5">{e.name}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center lg:mt-0 mt-20 md-mt-0">
          <h1 className="mb-3 ">Database</h1>
          <div className="flex gap-6 mt-5">
            <div className="flex flex-col justify-end items-center">
              <SiMongodb className="text-4xl"></SiMongodb>
              <h1 className="text-xs mt-1.5">MongoDB</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center lg:mt-16 items-center mt-20">
          <h1 className="mb-3 ">Design Tools</h1>
          <div className="flex gap-6 mt-5">
            {design.map((e, index) => (
              <div
                key={index}
                className="flex flex-col justify-end items-center"
              >
                {(e.name === "Adobe illustrator" && (
                  <SiAdobephotoshop className="text-[2.3rem] "></SiAdobephotoshop>
                )) ||
                  (e.name === "Adobe XD" && (
                    <SiAdobexd className="text-4xl "></SiAdobexd>
                  ))}
                <h1 className="text-xs mt-1.5">{e.name}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center lg:mt-16 items-center mt-20">
          <h1 className="mb-3">Others</h1>
          <div className="flex gap-6 mt-5">
            {others.map((e, index) => (
              <div
                key={index}
                className="flex flex-col justify-end items-center"
              >
                {(e.name === "Github" && (
                  <FaGithub className="text-[2.3rem]"></FaGithub>
                )) ||
                  (e.name === "Firebase" && (
                    <IoLogoFirebase className="text-[2.3rem] -translate-y-1"></IoLogoFirebase>
                  ))}
                <h1 className="text-xs mt-1.5">{e.name}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center lg:mt-16 mt-20 items-center">
          <h1 className="mb-3">More languages</h1>
          <div className="flex gap-1 mt-5 items-center justify-center">
            {more.map((e, index) => (
              <div
                key={index}
                className="flex flex-col justify-end items-center w-[20%]"
              >
                {(e.name === "C" && (
                  <img
                    className="md:w-[75%] sm:w-[50%] w-[78%]"
                    src="C.svg"
                    alt=""
                  />
                )) ||
                  (e.name === "C++" && (
                    <img
                      className="md:w-[65%] sm:w-[45%] w-[67%]"
                      src="C++.svg"
                      alt=""
                    />
                  )) ||
                  (e.name === "Java" && (
                    <img
                      className="sm:w-[55%] w-[70%] md:w-[65%] -translate-y-1"
                      src="java.svg"
                      alt=""
                    />
                  ))}
                <h1 className="text-xs mt-1.5">{e.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
