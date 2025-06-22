import React, { useState } from 'react';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-28 py-4 fixed w-full bg-black/80 backdrop-blur-md z-50 text-white border-b border-gray-600">
  {/* Left: Logo */}
  <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
    KA
  </h1>

  {/* Right: Nav links and hamburger grouped together */}
  <div className="flex items-center">
    {/* Nav links (show from md and up) */}
    <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
      <li><a href="#home" className="link">Home</a></li>
      <li><a href="#about" className="link">About</a></li>
      <li><a href="#skills" className="link">Skills</a></li>
      <li><a href="#projects" className="link">Projects</a></li>
      <li><a href="#contact" className="link">Contact</a></li>
    </ul>

    {/* Hamburger (show below md) */}
    <button
      className="md:hidden text-green-400 ml-4"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {menuOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  </div>
</nav>


      {/* Slide-in mobile menu */}
      <div className={`md:hidden fixed top-10 right-0 w-1/4 h-screen bg-black/90 backdrop-blur-md text-white px-4 py-8 transition-transform duration-300 z-40 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col gap-6 text-sm font-medium">
          <li><a href="#home" className="link" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" className="link" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" className="link" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" className="link" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="link" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>

      <section className="section items-center flex-col justify-center">
        <h1 className="name text-7xl md:text-7xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 text-center mt-6">Kanika Agarwal</h1>
        <div className="underline w-30"></div>
        <p className="text-2xl md:text-2xl sm:text-lg mt-2 text-center text-gray-300 font-normal">
          Frontend Developer • DSA Enthusiast • AI Undergraduate
        </p>
        <p className="mt-8 max-w-2xl text-center text-gray-400 text-lg">
          Crafting beautiful, efficient web experiences while exploring the fascinating world of artificial intelligence and algorithmic problem-solving.
        </p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <a href="#" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 to-emerald-700 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">Get In Touch</a>
          <a href="#" className="text-green-500 bg-black rounded-full px-8 py-3 transition-all duration-300 transform hover:scale-105 font-semibold border border-green-500 hover:text-black hover:bg-green-500 ">View Projects</a>
        </div>
        <div className="mt-10 max-w-xl flex justify-evenly items-center text-2xl gap-8">
          <a href="" className="icon"><i className="fab fa-github"></i></a>
          <a href="" className="icon"><i className="fab fa-linkedin"></i></a>
          <a href="" className="icon"><i className="fas fa-envelope"></i></a>
          <a href="" className="icon"><i className="fas fa-download"></i></a>
        </div>
      </section>
    </>
  );
};

export default Hero;
