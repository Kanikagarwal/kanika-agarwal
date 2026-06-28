import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Journey", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-emerald-500/10">
        <div className="w-full flex items-center justify-between sm:px-44 px-5 h-16">

          {/* Logo */}
          <h1 className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            KA.
          </h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300 text-sm font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-emerald-400 transition duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-emerald-400 after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-emerald-400 text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-[#050505] border-l border-emerald-500/20 backdrop-blur-xl z-50 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-emerald-500/10">
          {/* <h2 className="text-xl font-bold text-emerald-400">
            Menu
          </h2> */}

          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-emerald-400"
          >
            <HiX />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col mt-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-8 py-4 text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;