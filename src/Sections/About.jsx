import React from "react";
import { motion } from "framer-motion";

/* ── reuse the same animation helpers from Hero ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: -32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.9, delay, ease: "easeOut" },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.9, delay, ease: "easeOut" },
});

/* ── data pulled from resume ── */
const stats = [
  { num: "9.4", label: "CGPA" },
  { num: "5+", label: "Projects" },
  { num: "3+", label: "Certifications" },
  { num: "2", label: "Internships" },
];

const domains = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    name: "Frontend Development",
    desc: "Building responsive and modern UIs with React, Tailwind CSS, and modern JavaScript.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    name: "MERN Stack",
    desc: "Full-stack development with MongoDB, Express.js, React, and Node.js — from auth to deployment.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6.75v6.75" />
      </svg>
    ),
    name: "DSA & Problem Solving",
    desc: "Passionate about algorithms, data structures, and competitive programming on LeetCode.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    name: "Backend Development",
    desc: "Building scalable backend systems with Node.js, Express.js, MongoDB, REST APIs, and secure authentication.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#020409] overflow-hidden py-24 px-4 sm:px-6 lg:px-10"
    >
      {/* Subtle nebula echoes — same as Hero so sections feel connected */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald-400/[0.03] blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Section label ── */}
        <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-4">
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-emerald-500" />
          <span className="font-mono text-[0.65rem] tracking-[0.3em] text-emerald-500 uppercase">
            01 // About
          </span>
          <span className="w-[6px] h-[6px] rounded-full bg-emerald-500 animate-pulse" />
        </motion.div>

        <motion.h2
          {...fadeUp(0.2)}
          className="text-3xl sm:text-4xl font-black text-white mb-2"
          style={{ fontFamily: "'Orbitron', monospace" }}
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            Me
          </span>
        </motion.h2>

        <motion.div
          {...fadeUp(0.25)}
          className="w-16 h-[3px] rounded-full bg-gradient-to-r from-emerald-500 to-transparent mb-12"
        />

        {/* ── Top grid: image + bio ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">

          {/* Image */}
          <motion.div {...fadeRight(0.3)} className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">

              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-transparent blur-xl" />

              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-emerald-500/60 rounded-tl-lg" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-emerald-500/60 rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-emerald-500/60 rounded-bl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-emerald-500/60 rounded-br-lg" />

              {/* Image container — replace src with your actual photo */}
              <div className="relative w-full h-full rounded-2xl border border-emerald-500/25 overflow-hidden bg-[#060a12]">
                <img
                  src="/kanika2.png"
                  alt="Kanika Agarwal"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    /* Fallback if image isn't found */
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback avatar shown if no image */}
                <div
                  className="absolute inset-0 hidden flex-col items-center justify-center gap-2 bg-gradient-to-br from-emerald-500/10 to-transparent"
                >
                  <span className="text-6xl">👩‍💻</span>
                  <span className="text-emerald-400 font-mono text-xs tracking-widest">KA</span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-4 -right-18 bg-[#060a12] border border-emerald-500/30 rounded-xl px-3 py-2 flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[0.65rem] text-emerald-400 tracking-wide">Open to Work</span>
              </div>
            </div>
          </motion.div>
          {/* Bio text */}
          <motion.div {...fadeLeft(0.35)} className="space-y-5">
            <p className="text-emerald-300/70 leading-[1.9] font-light text-base text-justify">
              I'm a <span className="text-emerald-400 font-medium">B.Tech Computer Science (AI)</span> undergraduate
              at SKIT Jaipur with a <span className="text-emerald-400 font-medium">9.4 CGPA</span>, driven by curiosity
              and a passion for building things that matter. My journey spans full-stack development, intelligent systems,
              and competitive programming.
            </p>
            <p className="text-emerald-300/70 leading-[1.9] font-light text-base text-justify">
              From building a real-time crowdfunding platform with Razorpay integration to developing AI-powered image
              generation tools, I love turning ideas into production-ready applications. When I'm not shipping code,
              you'll find me grinding LeetCode or exploring the latest in AI research.
            </p>

            {/* Quick info pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: "📍", value: "Jaipur, Rajasthan" },
                { label: "🎓", value: "B.Tech CSE (AI) — 2027" },
                { label: "💼", value: "MERN Stack Developer" },
              ].map((item) => (
                <span
                  key={item.value}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/[0.07] border border-emerald-500/20 text-emerald-300 font-mono text-xs tracking-wide"
                >
                  {item.label} {item.value}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── Stats row ── */}
        <motion.div
          {...fadeUp(0.4)}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center py-6 px-4 rounded-2xl bg-[#060a12]/80 border border-emerald-500/15 hover:border-emerald-500/35 transition-colors duration-300 group"
            >
              <span
                className="text-2xl sm:text-3xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors"
                style={{ fontFamily: "'Orbitron', monospace" }}
              >
                {s.num}
              </span>
              <span className="text-[0.65rem] tracking-widest uppercase text-emerald-700 mt-1">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Domain cards ── */}
        <motion.div {...fadeUp(0.5)} className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-emerald-500" />
            <span className="font-mono text-[0.65rem] tracking-[0.3em] text-emerald-500 uppercase">
              What I Do
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {domains.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.12, duration: 0.7, ease: "easeOut" }}
              className="group relative p-5 rounded-2xl bg-[#060a12]/80 border border-emerald-500/15 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/[0.04] group-hover:to-transparent transition-all duration-300 rounded-2xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                  {d.icon}
                </div>

                <h3
                  className="text-white font-semibold text-sm mb-2 leading-tight"
                  style={{ fontFamily: "'Orbitron', monospace", fontSize: "0.75rem" }}
                >
                  {d.name}
                </h3>
                <p className="text-emerald-300/60 text-xs leading-relaxed font-light">
                  {d.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
