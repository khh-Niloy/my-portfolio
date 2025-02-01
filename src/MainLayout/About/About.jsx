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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a]">
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

      <div className="relative container mx-auto px-4 py-20">
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
              className="absolute -top-2 left-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(210,180,140,0.3)] to-transparent"
            ></motion.span>
            <h2 className="text-7xl font-bold text-white tracking-tight">
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
            className="mt-8 text-xl text-gray-200 font-light max-w-2xl mx-auto"
          >
            Crafting digital experiences with a blend of design aesthetics and
            technical expertise
          </motion.p>
        </motion.div>

        {/* Modern Content Layout */}
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Journey Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-3"
          >
            {/* Journey Card 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(139,69,19,0.1)] to-[rgba(85,107,47,0.1)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 rounded-2xl border border-[rgba(210,180,140,0.1)] bg-[rgba(26,26,26,0.95)] backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[rgba(139,69,19,0.2)] to-[rgba(85,107,47,0.2)] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <MdDesignServices className="text-md text-[rgba(210,180,140,1)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[rgba(210,180,140,1)] transition-colors duration-300">
                      Design Journey
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
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
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(85,107,47,0.1)] to-[rgba(139,69,19,0.1)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 rounded-2xl border border-[rgba(210,180,140,0.1)] bg-[rgba(26,26,26,0.95)] backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[rgba(85,107,47,0.2)] to-[rgba(139,69,19,0.2)] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FaCode className="text-md text-[rgba(210,180,140,1)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[rgba(210,180,140,1)] transition-colors duration-300">
                      Programming Evolution
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
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
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(210,180,140,0.1)] to-[rgba(85,107,47,0.1)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 rounded-2xl border border-[rgba(210,180,140,0.1)] bg-[rgba(26,26,26,0.95)] backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[rgba(210,180,140,0.2)] to-[rgba(85,107,47,0.2)] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FaLaptopCode className="text-md text-[rgba(210,180,140,1)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[rgba(210,180,140,1)] transition-colors duration-300">
                      Current Focus
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
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
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(139,69,19,0.1)] to-[rgba(85,107,47,0.1)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-8 rounded-2xl border border-[rgba(210,180,140,0.1)] bg-[rgba(26,26,26,0.95)] backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                    <FaUserGraduate className="text-[rgba(210,180,140,1)]" />
                    Education & Expertise
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        University Education
                      </h4>
                      <p className="text-gray-300 mt-2">
                        Daffodil International University
                      </p>
                      <p className="text-gray-400 text-sm">
                        Computer Science & Engineering
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Core Skills
                      </h4>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {[
                          "HTML",
                          "CSS",
                          "JavaScript",
                          "React",
                          "Node.js",
                          "MongoDB",
                          "C++",
                          "UI/UX",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 rounded-full text-sm border border-[rgba(210,180,140,0.2)] bg-gradient-to-r from-[rgba(139,69,19,0.1)] to-[rgba(85,107,47,0.1)] text-white hover:text-[rgba(210,180,140,1)] hover:border-[rgba(210,180,140,0.4)] hover:bg-[rgba(26,26,26,0.9)] transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Current Focus
                      </h4>
                      <p className="text-gray-300 mt-2">
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
