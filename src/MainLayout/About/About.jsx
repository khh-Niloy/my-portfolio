import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaCode, FaLaptopCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

const About = () => {
  const colors = {
    brown: "rgba(139, 69, 19, 0.2)",
    green: "rgba(34, 139, 34, 0.1)",
    tan: "rgba(210, 180, 140, 0.2)",
    olive: "rgba(85, 107, 47, 0.2)",
    saddle: "rgba(160, 82, 45, 0.2)",
  };

  return (
    <div
      id="about"
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a]"
    >
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(139,69,19,0.1)] via-transparent to-[rgba(85,107,47,0.1)]"></div>

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
          style={{
            background:
              "radial-gradient(circle, rgba(210,180,140,0.08) 0%, rgba(139,69,19,0.05) 50%, transparent 70%)",
          }}
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
          className="text-center mb-10 sm:mb-20"
        >
          <div className="inline-block relative">
            <motion.span
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -top-2 left-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(210,180,140,0.3)] to-transparent"
            ></motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              About Me
            </h2>
            <motion.span
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(210,180,140,0.3)] to-transparent"
            ></motion.span>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 sm:mt-8 text-sm sm:text-md text-gray-200 font-light max-w-2xl mx-auto px-4"
          >
            Crafting digital experiences with a blend of design aesthetics and
            technical expertise
          </motion.p>
        </motion.div>

        {/* Modern Content Layout */}
        <div className="w-full sm:w-[95%] md:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-0">
          {/* Journey Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-3 sm:space-y-4"
          >
            {/* Journey Card 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[rgba(210,180,140,1)] via-[rgba(139,69,19,1)] to-[rgba(210,180,140,1)] rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-border-flow -z-10"></div>
              <div className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-transparent bg-[rgba(26,26,26,0.95)] shadow-lg hover:shadow-2xl transition-all duration-300 z-10">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-[rgba(139,69,19,0.2)] to-[rgba(85,107,47,0.2)] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <MdDesignServices className="text-base sm:text-lg text-[rgba(210,180,140,1)]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white group-hover:text-[rgba(210,180,140,1)] transition-colors duration-300">
                      Design Journey
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      Started my creative journey in 2019, diving into design
                      fundamentals. From 2020 to 2021, I refined my skills
                      through professional projects, developing a keen eye for
                      aesthetics and user experience.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Journey Card 2 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[rgba(210,180,140,1)] via-[rgba(139,69,19,1)] to-[rgba(210,180,140,1)] rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-border-flow -z-10"></div>
              <div className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-transparent bg-[rgba(26,26,26,0.95)] shadow-lg hover:shadow-2xl transition-all duration-300 z-10">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-[rgba(85,107,47,0.2)] to-[rgba(139,69,19,0.2)] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FaCode className="text-base sm:text-lg text-[rgba(210,180,140,1)]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white group-hover:text-[rgba(210,180,140,1)] transition-colors duration-300">
                      Programming Evolution
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      In 2022, I began with HTML and CSS. By 2023, I was solving
                      problems with C/C++ at Daffodil International University,
                      building a strong foundation in programming concepts.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Journey Card 3 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[rgba(210,180,140,1)] via-[rgba(139,69,19,1)] to-[rgba(210,180,140,1)] rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-border-flow -z-10"></div>
              <div className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-transparent bg-[rgba(26,26,26,0.95)] shadow-lg hover:shadow-2xl transition-all duration-300 z-10">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-[rgba(210,180,140,0.2)] to-[rgba(85,107,47,0.2)] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FaLaptopCode className="text-base sm:text-lg text-[rgba(210,180,140,1)]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white group-hover:text-[rgba(210,180,140,1)] transition-colors duration-300">
                      Learning Journey
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      2024 marks my journey into full-stack development with the
                      MERN stack at Programming Hero, where I'm building modern
                      web applications and expanding my technical expertise.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills & Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-20">
              <motion.div
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(139,69,19,0.1)] to-[rgba(85,107,47,0.1)] rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-[rgba(210,180,140,0.1)] bg-[rgba(26,26,26,0.95)] backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3 text-white">
                    <FaUserGraduate className="text-[rgba(210,180,140,1)]" />
                    Education & Expertise
                  </h3>

                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white">
                        University Education
                      </h4>
                      <p className="text-sm sm:text-base text-gray-300 mt-2">
                        Daffodil International University
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Computer Science & Engineering
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white">
                        Technical Skills
                      </h4>
                      <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                        {[
                          "JavaScript",
                          "React.js",
                          "Tailwind",
                          "Express.js",
                          "Node.js",
                          "MongoDB",
                          "C",
                          "Java",
                          "Adobe Illustrator",
                          "Adobe XD",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border border-[rgba(210,180,140,0.2)] bg-gradient-to-r from-[rgba(139,69,19,0.1)] to-[rgba(85,107,47,0.1)] text-white hover:text-[rgba(210,180,140,1)] hover:border-[rgba(210,180,140,0.4)] hover:bg-[rgba(26,26,26,0.9)] transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white">
                        Current Focus
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 mt-2">
                        Mastering the MERN stack while building real-world
                        projects with a focus on scalable solutions
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
