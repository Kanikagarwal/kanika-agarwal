import React from "react";
import { motion } from "framer-motion";

import Project from "../Components/Project";

import ChessImage from "../assets/Images/Chess.png";
import SS from "../assets/Images/SS.png";
import Snappy from "../assets/Images/Snappy.png";
import Secret from "../assets/Images/Secret.png";
import Imagify from "../assets/Images/Imagify.png";
import Fundflow from "../assets/Images/Fundflow.png";

/* Same animation helper */
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

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-[#020409] overflow-hidden py-24 px-4 sm:px-6 lg:px-10"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[320px] rounded-full bg-emerald-500/[0.04] blur-[110px] pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-emerald-400/[0.03] blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Label */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-emerald-500" />

          <span className="font-mono text-[0.65rem] tracking-[0.3em] text-emerald-500 uppercase">
            04 // Projects
          </span>

          <span className="w-[6px] h-[6px] rounded-full bg-emerald-500 animate-pulse" />
        </motion.div>

        {/* Heading */}

        <motion.h2
          {...fadeUp(0.2)}
          className="text-3xl sm:text-4xl font-black text-white mb-2"
          style={{ fontFamily: "'Orbitron', monospace" }}
        >
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            Projects
          </span>
        </motion.h2>

        <motion.div
          {...fadeUp(0.25)}
          className="w-16 h-[3px] rounded-full bg-gradient-to-r from-emerald-500 to-transparent mb-6"
        />

        {/* <motion.p
          {...fadeUp(0.3)}
          className="text-emerald-300/70 max-w-2xl leading-8 mb-14"
        >
          A collection of projects showcasing my passion for full-stack
          development, AI integration, real-time applications, and modern user
          experiences.
        </motion.p> */}

        {/* Projects Grid */}

        <div className="grid md:grid-cols-2 gap-8">

          <motion.div {...fadeUp(0.35)}>
            <Project
              name="FundFlow"
              img={Fundflow}
              des="A crowdfunding platform with authentication, secure Razorpay payments, campaign management and responsive UI."
              t1="MongoDB"
              t2="Express"
              t3="React"
              t4="Node.js"
              t5="Tailwind CSS"
              code="https://github.com/Kanikagarwal/crowdFunding"
              demo="https://crowd-funding-puce-kappa.vercel.app/"
            />
          </motion.div>

          <motion.div {...fadeUp(0.45)}>
            <Project
              name="Snappy"
              img={Snappy}
              des="Real-time chat application using Socket.io featuring instant messaging, user presence and scalable communication."
              t1="React"
              t2="Node.js"
              t3="MongoDB"
              t4="Express"
              t5="Socket.io"
              code="https://github.com/Kanikagarwal/snappy"
              demo="https://snappy-mga7.vercel.app/"
            />
          </motion.div>

          <motion.div {...fadeUp(0.55)}>
            <Project
              name="Imagify"
              img={Imagify}
              des="AI-powered image generation platform built with the ClipDrop API allowing users to generate creative artwork from prompts."
              t1="React"
              t2="Node.js"
              t3="MongoDB"
              t4="Express"
              t5="Tailwind CSS"
              code="https://github.com/Kanikagarwal/imagify"
              demo="https://imagify-1-a41y.onrender.com/"
            />
          </motion.div>

          <motion.div {...fadeUp(0.65)}>
            <Project
              name="Solar System"
              img={SS}
              des="Interactive 3D visualization of the Solar System built using Three.js with smooth animations and realistic rendering."
              t1="HTML"
              t2="CSS"
              t3="JavaScript"
              t4="Three.js"
              t5="Figma"
              code="https://github.com/Kanikagarwal/Solar_system"
              demo="https://kanikagarwal.github.io/Solar_system/"
            />
          </motion.div>

          <motion.div {...fadeUp(0.75)}>
            <Project
              name="Secret"
              img={Secret}
              des="A fun encryption tool that converts messages into emoji-based secret codes and decodes them instantly."
              t1="HTML"
              t2="CSS"
              t3="JavaScript"
              t4="React"
              t5="Figma"
              code="https://github.com/Kanikagarwal/Secret"
              demo="https://secret-murex.vercel.app/"
            />
          </motion.div>

          <motion.div {...fadeUp(0.85)}>
            <Project
              name="Chess"
              img={ChessImage}
              des="Real-time multiplayer Chess game using Socket.io with synchronized gameplay and interactive move validation."
              t1="Node.js"
              t2="Express"
              t3="MongoDB"
              t4="Socket.io"
              t5="Chess.js"
              code="https://github.com/Kanikagarwal/chess"
              demo="https://chess-yem8.onrender.com/"
            />
          </motion.div>

        </div>

        {/* More Projects */}

        <motion.div
          {...fadeUp(0.95)}
          className="flex justify-center mt-14"
        >
          <a
            href="https://github.com/Kanikagarwal?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-500/20 bg-[#060a12]/80 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="text-emerald-300 group-hover:text-white transition">
              View More Projects
            </span>

            <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;