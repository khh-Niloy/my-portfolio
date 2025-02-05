import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { HiBriefcase } from "react-icons/hi2";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(210,180,140,0.03) 25%, rgba(210,180,140,0.03) 26%, transparent 27%, transparent 74%, rgba(210,180,140,0.03) 75%, rgba(210,180,140,0.03) 76%, transparent 77%, transparent)`,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      <div
        id="education"
        className="text-center mt-7 xl:pt-20 pt-20 lg:pt-10 relative "
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block relative mb-16"
        >
          <motion.span
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -top-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#8b451352] to-transparent"
          ></motion.span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] tracking-tight">
            Educational qualification & Experience
          </h2>
          <motion.span
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#8b451352] to-transparent"
          ></motion.span>
        </motion.div>

        <div className="flex md:flex-row flex-col mt-10 w-[80%] md:w-[90%] lg:w-[80%] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 font-medium"
          >
            <div className="flex items-center justify-center gap-2">
              <FaGraduationCap className="text-2xl text-[#1E293B]" />
              <h1 className="text-[#1E293B]">Educational qualification</h1>
            </div>

            <div className="md:w-[50%] w-[80%] mx-auto flex mt-10 relative">
              <div className="w-3 h-3 bg-[#b86742c5] rounded-full absolute top-0 xl:right-[7.6rem] lg:right-[6.1rem] right-[8.2rem] sm:right-[12.45rem] md:right-[4.9rem]"></div>
              {/* <div className="w-3 h-3 bg-[#b86742c5] rounded-full absolute top-[6rem] xl:right-[7.6rem] lg:right-[6.1rem] right-[8.2rem] sm:right-[12.45rem] md:right-[4.9rem]"></div> */}
              <div className="w-1/2 border-r-[1.4px] border-[rgba(210,180,140,0.3)] flex flex-col items-start">
                <h1 className="text-xs text-left text-[#1E293B] leading-[1.4] -translate-x-4">
                  BSc in Software Engineering, <br /> Daffodil International
                  University
                </h1>
                <p className="text-[11px] mt-2 text-[#1E293B]/50 -translate-x-4">
                  2023 - Present
                </p>
              </div>

              {/* <div className="w-1/2 text-left">
                <h1 className="text-xs translate-x-5 text-[#1E293B] whitespace-nowrap mt-[5.9rem]">
                  Web Development Course, <br /> Programming Hero
                </h1>
                <p className="text-[11px] mt-2 text-[#1E293B]/50 translate-x-5">
                  2024 - Present
                </p>
              </div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 md:mt-0 mt-20 font-medium"
          >
            <div className="flex items-center justify-center gap-2">
              <HiBriefcase className="text-2xl text-[#1E293B]" />
              <h1 className="text-[#1E293B]">Experience</h1>
            </div>

            <div className="md:w-[50%] w-[80%] mx-auto flex mt-10 relative">
              <div className="w-3 h-3 bg-[#b86742c5] rounded-full absolute top-0 xl:right-[7.6rem] lg:right-[6.1rem] right-[8.2rem] sm:right-[12.45rem] md:right-[5rem]"></div>
              <div className="w-3 h-3 bg-[#b86742c5] rounded-full absolute top-[5rem] xl:right-[7.6rem] lg:right-[6.1rem] right-[8.2rem] sm:right-[12.45rem] md:right-[5rem]"></div>
              <div className="w-1/2 border-r-[1.4px] border-[rgba(210,180,140,0.3)] flex flex-col items-start">
                <h1 className="text-xs text-left text-[#1E293B] leading-[1.4] -translate-x-4">
                  As Sunnah Book Shop - Social media banner designer
                </h1>
                <p className="text-[11px] mt-2 text-[#1E293B]/50 -translate-x-4">
                  2020
                </p>
              </div>
              <div className="w-1/2 text-left">
                <h1 className="text-xs translate-x-5 text-[#1E293B] whitespace-nowrap mt-[5rem]">
                  Fresh Foodie - Social media <br /> banner designer
                </h1>
                <p className="text-[11px] mt-2 text-[#1E293B]/50 translate-x-5">
                  2021
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
