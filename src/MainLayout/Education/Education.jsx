import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { HiBriefcase } from "react-icons/hi2";

const Education = () => {
  return (
    <div className="text-center mt-40 pt-20">
      <h1 id="skills" className="text-4xl  font-semibold">
        Educational qualification & Experience
      </h1>

      <div className="flex w-[80%] mx-auto mt-16">
        <div className="w-1/2 font-medium">
          <div className="flex items-center justify-center gap-2">
            <FaGraduationCap className="text-2xl"></FaGraduationCap>
            <h1>Educational qualification</h1>
          </div>

          <div className="w-[50%] mx-auto flex mt-10 relative">
            <div className="w-3 h-3 bg-[#494949] rounded-full absolute top-0 right-[7.6rem]"></div>
            <div className="w-3 h-3 bg-[#494949] rounded-full absolute top-[6rem] right-[7.6rem]"></div>
            <div className="w-1/2 border-r-[1.4px] border-[#494949]  flex flex-col items-start">
              <h1 className="text-xs text-left text-black leading-[1.4] -translate-x-4">
                BSc in Software Engineering, <br /> Daffodil International
                University
              </h1>
              <p className="text-[11px] mt-2 text-black/60 -translate-x-4">
                2023 - Present
              </p>
            </div>
            <div className="w-1/2  text-left">
              <h1 className="text-xs translate-x-5 text-black whitespace-nowrap mt-[5.9rem]">
                Web Development Course, <br /> Programming Hero
              </h1>
              <p className="text-[11px] mt-2 text-black/60 translate-x-5">
                2024 - Present
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 font-medium">
          <div className="flex items-center justify-center gap-2">
            <HiBriefcase className="text-2xl"></HiBriefcase>
            <h1>Experience</h1>
          </div>

          <div className="w-[50%] mx-auto flex mt-10 relative">
            <div className="w-3 h-3 bg-[#494949] rounded-full absolute top-0 right-[7.6rem]"></div>
            <div className="w-3 h-3 bg-[#494949] rounded-full absolute top-[5rem] right-[7.6rem]"></div>
            <div className="w-1/2 border-r-[1.4px] border-[#494949]  flex flex-col items-start">
              <h1 className="text-xs text-left text-black leading-[1.4] -translate-x-4">
                As Sunnah Book Shop - Social media banner designer
              </h1>
              <p className="text-[11px] mt-2 text-black/60 -translate-x-4">
                2020
              </p>
            </div>
            <div className="w-1/2  text-left">
              <h1 className="text-xs translate-x-5 text-black whitespace-nowrap mt-[5rem]">
                Fresh Foodie - Social media <br /> banner designer
              </h1>
              <p className="text-[11px] mt-2 text-black/60 translate-x-5">
                2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
