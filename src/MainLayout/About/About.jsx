import React from "react";
import map from "../../assets/map.svg";

const About = () => {
  return (
    <div className="text-center mt-32 pt-20 relative">
      <h1 id="about" className="text-4xl  font-semibold">
        About
      </h1>

      <div className="w-[80%] mx-auto">
        <h1 className="absolute top-[12rem] leading-7 font-normal text-left">
          I began my design career in 2019, marking the start of my journey in
          the creative field. <br /> From 2020 to 2021, I transitioned into
          professional design work, refining my <br /> skills and expertise.{" "}
          <br /> In 2022, I started learning HTML and CSS, but was unable to
          continue. <br /> In 2023, I was admitted to Daffodil International
          University. During the same year, <br /> I embarked on my coding
          journey with C and began solving problems with C++. <br /> In 2024, I
          joined Programming Hero, where I am currently learning the <br />{" "}
          <span className="font-medium">MERN</span> stack to further enhance my
          development skills.
        </h1>
        <img src={map} className="w-[95%] mt-28 ml-20" alt="" />
      </div>
    </div>
  );
};

export default About;
