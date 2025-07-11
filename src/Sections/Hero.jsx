import React, { useState } from "react";

const Hero = () => {
  

  return (
    <>
     
      <section id="home" className="section items-center flex-col justify-center">
        <h1 className="name text-7xl md:text-7xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 text-center mt-6">
          Kanika Agarwal
        </h1>
        <div className="underline w-30"></div>
        <p className="text-2xl md:text-2xl sm:text-lg mt-2 text-center text-gray-300 font-normal">
          Frontend Developer • DSA Enthusiast • AI Undergraduate
        </p>
        <p className="mt-8 max-w-2xl text-center text-gray-400 text-lg">
          Crafting beautiful, efficient web experiences while exploring the
          fascinating world of artificial intelligence and algorithmic
          problem-solving.
        </p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <a
            href="#contact"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 to-emerald-700 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="text-green-500 bg-black rounded-full px-8 py-3 transition-all duration-300 transform hover:scale-105 font-semibold border border-green-500 hover:text-black hover:bg-green-500 "
          >
            View Projects
          </a>
        </div>
        <div className="mt-10 max-w-xl flex justify-evenly items-center text-2xl gap-8">
          <a href="https://github.com/Kanikagarwal" target="_blank" className="icon" title="Github">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/kanika-agarwal-b372a6278/" target="_blank" className="icon" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:aanika6510@gmail.com" target="_blank" className="icon" title="Email me">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="/Resume.pdf" download="Kanika_Agarwal_Resume.pdf" className="icon" title="Resume">
            <i className="fas fa-download"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
