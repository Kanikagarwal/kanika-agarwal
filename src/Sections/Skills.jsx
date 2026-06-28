import React from "react";
import { motion } from "framer-motion";
import Technology from "../Components/Technology";

/* Same animation helpers as About */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.8,
    delay,
    ease: "easeOut",
  },
});

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-[#020409] overflow-hidden py-24 px-4 sm:px-6 lg:px-10"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/[0.04] blur-[100px] pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald-400/[0.03] blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-emerald-500" />

          <span className="font-mono text-[0.65rem] tracking-[0.3em] text-emerald-500 uppercase">
            03 // Skills
          </span>

          <span className="w-[6px] h-[6px] rounded-full bg-emerald-500 animate-pulse"></span>
        </motion.div>

        <motion.h2
          {...fadeUp(0.2)}
          className="text-3xl sm:text-4xl font-black text-white mb-2"
          style={{ fontFamily: "'Orbitron', monospace" }}
        >
          Skills{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            & Technologies
          </span>
        </motion.h2>

        <motion.div
          {...fadeUp(0.25)}
          className="w-16 h-[3px] rounded-full bg-gradient-to-r from-emerald-500 to-transparent mb-5"
        />

        <motion.p
          {...fadeUp(0.3)}
          className="text-emerald-300/70 max-w-2xl leading-8 mb-14"
        >
          
        </motion.p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div {...fadeUp(0.35)}>
            <Technology
              name="Web Development"
              s1="React"
              s2="Redux"
              s3="MongoDB"
              s4="Express.js"
              s5="Tailwind CSS"
              s6="Node.js"
              p1="90%"
              p2="85%"
              p3="95%"
              p4="80%"
              p5="70%"
              p6="95%"
            />
          </motion.div>

          <motion.div {...fadeUp(0.45)}>
            <Technology
              name="Programming & DSA"
              s1="Java"
              s2="C++"
              s3="Python"
              s4="C"
              s5="Javascript"
              s6="Data Structures & Algorithms"
              p1="90%"
              p2="70%"
              p3="60%"
              p4="70%"
              p5="95%"
              p6="90%"
            />
          </motion.div>

          <motion.div {...fadeUp(0.55)}>
            <Technology
              name="Tools"
              s1="VS Code"
              s2="IntelliJ IDEA"
              s3="Postman"
              s4="Git"
              s5="Github"
              s6="Figma"
              p1="90%"
              p2="85%"
              p3="60%"
              p4="70%"
              p5="75%"
              p6="60%"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;