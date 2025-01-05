import React from "react";
import map from "../../assets/map.svg";

const About = () => {
  return (
    <div className="text-center lg:mt-32 sm:mt-24 pt-20 lg:pb-0 pb-[17rem] relative">
      <h1 id="about" className="text-4xl font-semibold">
        About
      </h1>

      <div className="lg:w-[80%] w-[85%] mx-auto">
        <h1 className="absolute lg:text-base md:text-sm lg:top-[12rem] top-[10rem] leading-7 md:leading-7 lg:leading-7 font-normal text-left lg:pr-0 pr-5">
          I began my design career in 2019, marking the start of my journey in
          the creative field. <br className="lg:flex hidden" /> From 2020 to
          2021, I transitioned into professional design work, refining my <br />{" "}
          skills and expertise. <br /> In 2022, I started learning HTML and CSS,
          but was unable to continue. <br className="lg:flex hidden" /> In 2023,
          I was admitted to Daffodil International University. During the same
          year, <br /> I embarked on my coding journey with C and began solving
          problems with C++. <br /> In 2024, I joined Programming Hero, where I
          am currently learning the <br className="lg:flex hidden" />{" "}
          <span className="font-medium">MERN</span> stack to further enhance my
          development skills.
        </h1>
        <img
          src={map}
          className="xl:w-[85%] xl:mt-40 lg:mt-[20rem] lg:ml-20 sm:scale-125 md:scale-[1.35] lg:rotate-0 lg:translate-x-0 md:-rotate-6 md:-translate-x-16 md:mt-[22rem] sm:mt-[23rem] sm:flex hidden"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
