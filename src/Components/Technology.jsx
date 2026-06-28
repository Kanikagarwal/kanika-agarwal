import React, { useEffect, useRef, useState } from "react";

const Technology = ({
  name,
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
}) => {
  const ref = useRef();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      {
        threshold: 0.35,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { skill: s1, percent: p1 },
    { skill: s2, percent: p2 },
    { skill: s3, percent: p3 },
    { skill: s4, percent: p4 },
    { skill: s5, percent: p5 },
    { skill: s6, percent: p6 },
  ];

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl bg-[#060a12]/80 border border-emerald-500/15 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-2 backdrop-blur-xl"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 via-transparent to-transparent group-hover:from-emerald-500/[0.05] transition-all duration-500"></div>

      {/* Small Top Glow */}
      <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="relative z-10 p-7">

        {/* Card Title */}
        <h2
          className="text-center text-white text-xl font-black tracking-wide group-hover:text-emerald-300 transition-colors duration-300"
          style={{ fontFamily: "'Orbitron', monospace" }}
        >
          {name}
        </h2>

        <div className="w-14 h-[3px] rounded-full bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mt-3 mb-8"></div>

        <div className="space-y-5">
          {skills.map((item, index) => (
            <div key={index}>

              {/* Skill Name + Percentage */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-emerald-100 font-medium text-sm">
                  {item.skill}
                </span>

                <span className="text-emerald-400 font-semibold text-sm">
                  {item.percent}
                </span>
              </div>

              {/* Progress Background */}
              <div className="relative w-full h-2 rounded-full bg-emerald-950 overflow-hidden">

                {/* Animated Fill */}
                <div
                  className="h-full rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-300 transition-all duration-[1600ms] ease-out"
                  style={{
                    width: animate ? item.percent : "0%",
                  }}
                />

                {/* Shine Effect */}
                <div
                  className={`absolute top-0 left-0 h-full w-10 bg-white/20 blur-sm ${
                    animate ? "animate-pulse" : ""
                  }`}
                  style={{
                    left: animate ? item.percent : "0%",
                    transition: "left 1.6s ease-out",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Technology;