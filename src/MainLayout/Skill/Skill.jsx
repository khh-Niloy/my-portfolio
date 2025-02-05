import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";

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
    <div id="skills" className="min-h-screen relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0"></div>

        {/* Animated Background Shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -top-20 right-0 w-[800px] h-[800px] rounded-full"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(85,107,47,0.08) 0%, rgba(34,139,34,0.05) 50%, transparent 70%)",
          }}
        ></motion.div>

        {/* Decorative Lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(210,180,140,0.03) 25%, rgba(210,180,140,0.03) 26%, transparent 27%, transparent 74%, rgba(210,180,140,0.03) 75%, rgba(210,180,140,0.03) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(210,180,140,0.03) 25%, rgba(210,180,140,0.03) 26%, transparent 27%, transparent 74%, rgba(210,180,140,0.03) 75%, rgba(210,180,140,0.03) 76%, transparent 77%, transparent)`,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-2 sm:px-4 py-10 sm:py-20">
        {/* Modern Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block relative">
            <motion.span
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -top-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#8b451352] to-transparent"
            ></motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] tracking-tight">
              Skills
            </h2>
            <motion.span
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#8b451352] to-transparent"
            ></motion.span>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 sm:mt-8 text-sm sm:text-md text-[#1E293B] font-light max-w-2xl mx-auto"
          >
            Mastering modern technologies to create exceptional digital
            experiences
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="w-[85%] mx-auto grid md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 gap-8">
          {/* Frontend Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute -inset-[1px] brounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-border-flow -z-10"></div>
            <div className="relative p-6 rounded-2xl border border-transparent bg-[rgba(210,140,140,0.04)] shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#1E293B] transition-colors duration-300">
                  Frontend
                </h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {front.map((e, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="p-3 rounded-lg transition-colors duration-300">
                      {e.name === "Javascript" && (
                        <RiJavascriptFill className="text-3xl text-[#1E293B]" />
                      )}
                      {e.name === "React" && (
                        <FaReact className="text-3xl text-[#1E293B]" />
                      )}
                      {e.name === "Tailwind" && (
                        <SiTailwindcss className="text-3xl text-[#1E293B]" />
                      )}
                    </div>
                    <span className="mt-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {e.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute -inset-[1px] brounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-border-flow -z-10"></div>
            <div className="relative p-6 rounded-2xl border border-transparent bg-[rgba(210,140,140,0.04)] shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#1E293B] transition-colors duration-300">
                  Backend
                </h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {back.map((e, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="p-3 rounded-lg transition-colors duration-300">
                      {e.name === "Node.js" && (
                        <FaNode className="text-3xl text-[1E293B]" />
                      )}
                      {e.name === "Express.js" && (
                        <SiExpress className="text-3xl text-[1E293B]" />
                      )}
                    </div>
                    <span className="mt-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {e.name}
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <div className="p-3 rounded-lg  transition-colors duration-300">
                    <SiMongodb className="text-3xl text-[#1E293B]" />
                  </div>
                  <span className="mt-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    MongoDB
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Design Tools Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute -inset-[1px] brounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-border-flow -z-10"></div>
            <div className="relative p-6 rounded-2xl border border-transparent bg-[rgba(210,140,140,0.04)] shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#1E293B] transition-colors duration-300">
                  Design Tools
                </h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {design.map((e, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="p-3 rounded-lg transition-colors duration-300">
                      {e.name === "Adobe illustrator" && (
                        <SiAdobeillustrator className="text-3xl text-[#1E293B]" />
                      )}
                      {e.name === "Adobe XD" && (
                        <SiAdobexd className="text-3xl text-[#1E293B]" />
                      )}
                    </div>
                    <span className="mt-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {e.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Others Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute -inset-[1px] brounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-border-flow -z-10"></div>
            <div className="relative p-6 rounded-2xl border border-transparent bg-[rgba(210,140,140,0.04)] shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#1E293B] transition-colors duration-300">
                  Other Tools
                </h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {others.map((e, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="p-3 rounded-lg transition-colors duration-300">
                      {e.name === "Github" && (
                        <FaGithub className="text-3xl text-[#1E293B]" />
                      )}

                      {e.name === "Vite" && (
                        <SiVite className="text-3xl text-[#1E293B]" />
                      )}
                      {e.name === "Firebase" && (
                        <IoLogoFirebase className="text-3xl text-[#1E293B]" />
                      )}
                    </div>
                    <span className="mt-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {e.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* More Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute -inset-[1px] brounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-border-flow -z-10"></div>
            <div className="relative p-6 rounded-2xl border border-transparent bg-[rgba(210,140,140,0.04)] shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#1E293B] transition-colors duration-300">
                  More Languages
                </h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {more.map((e, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="p-3 rounded-lg transition-colors duration-300">
                      {e.name === "C" && (
                        <img className="w-8 h-8" src="C.svg" alt="C" />
                      )}
                      {/* {e.name === "C++" && (
                        <img className="w-8 h-8" src="C++.svg" alt="C++" />
                      )}
                      {e.name === "Java" && (
                        <img className="w-8 h-8" src="java.svg" alt="Java" />
                      )} */}
                    </div>
                    <span className="mt-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {e.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
