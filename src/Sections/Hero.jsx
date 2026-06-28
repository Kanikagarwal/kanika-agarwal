import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";

/* ── animation helpers ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" },
});

const fadeLeft = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, delay: 0.5, ease: "easeOut" },
};

/* ── starfield hook ── */
function useStarfield(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let raf;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from(
        { length: Math.floor((canvas.width * canvas.height) / 4000) },
        () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.2 + 0.2,
          speed: Math.random() * 0.3 + 0.05,
          twinkle: Math.random() * Math.PI * 2,
        })
      );
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.twinkle += s.speed * 0.04;
        const a = 0.3 + Math.sin(s.twinkle) * 0.5;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,255,230,${a})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [canvasRef]);
}

/* ── component ── */
const Hero = () => {
  const canvasRef = useRef(null);
  useStarfield(canvasRef);

  const skills = ["React", "Java", "Tailwind", "Node.js", "MongoDB", "Express.js"];

  return (
    <div className="relative min-h-screen bg-[#020409] overflow-x-hidden font-sans">

      {/* Starfield */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* Nebula glows */}
      <div className="fixed top-[-120px] right-[-80px] w-[520px] h-[520px] rounded-full bg-emerald-500/[0.07] blur-[90px] pointer-events-none z-0 animate-drift1" />
      <div className="fixed bottom-[-100px] left-[-60px] w-[400px] h-[400px] rounded-full bg-emerald-400/[0.05] blur-[90px] pointer-events-none z-0 animate-drift2" />
      <div className="fixed top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-cyan-500/[0.04] blur-[90px] pointer-events-none z-0" />

      {/* Hero section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-10 py-20 sm:py-24">
        <div className="max-w-6xl w-full mx-auto">

          {/* Eyebrow */}
          <motion.div {...fadeUp(0.2)} className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-emerald-500" />
            <span className="font-mono text-[0.65rem] tracking-[0.3em] text-emerald-500 uppercase">
              Kanika.dev
            </span>
            <span className="w-[6px] h-[6px] rounded-full bg-emerald-500 animate-pulse" />
          </motion.div>

          {/* Two-column grid — stacks to single col on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-12 items-start">

            {/* ── LEFT ── */}
            <div className="text-center sm:text-left">

              {/* Name */}
              <motion.div {...fadeUp(0.4)} className="mb-6">
                <span
                  className="block font-black leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-emerald-600"
                  style={{
                    fontFamily: "'Orbitron', monospace",
                    fontSize: "clamp(2.8rem, 11vw, 7rem)",
                  }}
                >
                  Kanika
                </span>
                <span
                  className="block font-black leading-none tracking-tight text-white"
                  style={{
                    fontFamily: "'Orbitron', monospace",
                    fontSize: "clamp(2.8rem, 11vw, 7rem)",
                  }}
                >
                  Agarwal
                </span>
              </motion.div>

              {/* Accent bar */}
              <motion.div {...fadeUp(0.6)} className="flex items-center justify-center sm:justify-start gap-3 mb-4">
                <div className="w-12 h-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-transparent" />
                <span className="font-mono text-[0.65rem] text-emerald-400 tracking-[0.2em]">// developer</span>
              </motion.div>

              {/* Role strip */}
              {/* <motion.div
                {...fadeUp(0.7)}
                className="flex flex-wrap justify-center sm:justify-start gap-1.5 items-center text-emerald-400 font-medium text-sm tracking-wide mb-5"
              >
                <span>Full Stack Developer</span>
                <span className="text-emerald-900 font-light">&nbsp;·&nbsp;</span>
                <span>DSA Enthusiast</span>
                <span className="text-emerald-900 font-light">&nbsp;·&nbsp;</span>
                <span>AI Undergraduate</span>
              </motion.div> */}

              {/* Bio */}
              <motion.p
                {...fadeUp(0.85)}
                className="text-emerald-300/70 leading-[1.85] font-light text-base mx-auto sm:mx-0 max-w-md"
              >
                Passionate about building responsive web applications, solving
                algorithmic challenges, and exploring the future of Artificial
                Intelligence — one commit at a time.
              </motion.p>

              {/* Buttons */}
              <motion.div
                {...fadeUp(1)}
                className="flex flex-wrap justify-center sm:justify-start gap-4 mt-8"
              >
                <button onClick={() =>
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" })
  } className="px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-bold text-sm tracking-wide hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(16,185,129,0.4)] transition-all duration-200">
                  Get In Touch
                </button>
                <button onClick={() =>
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" })
  } className="px-7 py-3.5 rounded-full border border-emerald-500 text-emerald-400 font-semibold text-sm tracking-wide hover:bg-emerald-500 hover:text-black transition-all duration-200 hover:-translate-y-0.5">
                  View Projects
                </button>
              </motion.div>

              {/* Socials */}
              <motion.div
  {...fadeUp(1.15)}
  className="flex justify-center sm:justify-start gap-4 mt-8"
>
  <a
    href="https://github.com/Kanikagarwal"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-emerald-500/25 flex items-center justify-center text-[#4b7a6c] text-lg hover:bg-emerald-500/10 hover:-translate-y-1 hover:border-white hover:text-white transition-all duration-300"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/kanika-agarwal-b372a6278/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-emerald-500/25 flex items-center justify-center text-[#4b7a6c] text-lg hover:bg-emerald-500/10 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
  >
    <FaLinkedin />
  </a>

  <a
  href="https://leetcode.com/u/Kanika-Agarwal/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full border border-emerald-500/25 flex items-center justify-center text-[#4b7a6c] text-lg hover:bg-emerald-500/10 hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
>
  <SiLeetcode />
</a>

  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=aanika6510@gmail.com"
  target="_blank"
  className="w-10 h-10 rounded-full border border-emerald-500/25 flex items-center justify-center text-[#4b7a6c] text-lg hover:bg-emerald-500/10 hover:-translate-y-1 hover:border-red-400 hover:text-red-400 transition-all duration-300"
>
  <FaEnvelope />
</a>

  <a
    href="/Kanika_Agarwal.pdf"
    download
    className="w-10 h-10 rounded-full border border-emerald-500/25 flex items-center justify-center text-[#4b7a6c] text-lg hover:bg-emerald-500/10 hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300"
  >
    <HiDownload />
  </a>
</motion.div>

              {/* Stats */}
              <motion.div
                {...fadeUp(1.25)}
                className="flex justify-center sm:justify-start gap-8 mt-8 pt-6 border-t border-emerald-500/10"
              >
                {[
                  { num: "15+", label: "Projects" },
                  { num: "3+", label: "Years Coding" },
                  { num: "6", label: "Core Skills" },
                ].map((st) => (
                  <div key={st.label} className="flex flex-col gap-0.5 items-center sm:items-start">
                    <span
                      className="text-[1.4rem] font-bold text-emerald-400"
                      style={{ fontFamily: "'Orbitron', monospace" }}
                    >
                      {st.num}
                    </span>
                    <span className="text-[0.65rem] tracking-widest uppercase text-emerald-600">
                      {st.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT: Terminal ── order-first on mobile so card appears below name */}
            <motion.div
              {...fadeLeft}
              className="flex justify-center lg:justify-end order-last"
            >
              {/* Outer wrapper clips overflow so rings don't cause horizontal scroll */}
              <div className="relative w-full max-w-[360px] sm:max-w-[400px]">

                {/* Orbital rings — hidden on small screens to avoid overflow */}
                <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-emerald-500/15 pointer-events-none animate-spin-slow" />
                <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-dashed border-emerald-500/[0.07] pointer-events-none animate-spin-slower" />

                {/* Orbiting dot — hidden on small screens */}
                <div
                  className="hidden sm:block absolute top-1/2 left-1/2 pointer-events-none animate-spin-slow"
                  style={{ width: 440, height: 440, marginTop: -220, marginLeft: -220 }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
                </div>

                {/* Card */}
                <div className="relative z-10 bg-[#060a12]/90 border border-emerald-500/25 rounded-2xl p-5 sm:p-7 backdrop-blur-xl shadow-[0_0_60px_rgba(16,185,129,0.08),inset_0_1px_0_rgba(255,255,255,0.04)] overflow-hidden">
                  {/* Scanline */}
                  <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent pointer-events-none animate-scanline" />

                  {/* Terminal header */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="flex-1 text-center font-mono text-[0.6rem] text-emerald-500/40 tracking-[0.2em] truncate">
                      kanika@portfolio ~ zsh
                    </span>
                  </div>

                  {/* Prompt */}
                  <div className="flex items-center gap-2 font-mono text-emerald-400 text-sm mb-5">
                    <span className="text-emerald-300">$</span>
                    <span>whoami</span>
                    <span className="inline-block w-2 h-3.5 bg-emerald-400 animate-blink ml-0.5" />
                  </div>

                  {/* Info rows */}
                  <div className="space-y-2 mb-5 font-mono text-[0.78rem]">
                    {[
                      { k: "Name", v: "Kanika Agarwal", cls: "text-white" },
                      { k: "Role", v: "Full Stack Dev", cls: "text-emerald-400" },
                      { k: "Focus", v: "Full Stack · DSA · React", cls: "text-slate-300" },
                      { k: "Status", v: null },
                    ].map((row) => (
                      <div key={row.k} className="flex gap-3 min-w-0">
                        <span className="text-emerald-700 w-14 shrink-0">{row.k}</span>
                        {row.v ? (
                          <span className={`${row.cls} truncate`}>{row.v}</span>
                        ) : (
                          <span className="text-green-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                            Open to Work
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="h-px bg-white/[0.06] my-4" />

                  {/* Skills */}
                  <div className="flex items-center gap-2 font-mono text-emerald-400 text-sm mb-4">
                    <span className="text-emerald-300">$</span>
                    <span>skills --list</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + i * 0.1, duration: 0.35 }}
                        className="px-3 py-1 rounded-lg bg-emerald-500/[0.07] border border-emerald-500/20 text-emerald-300 font-mono text-xs tracking-wide hover:bg-emerald-500/[0.18] hover:border-emerald-500/50 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
