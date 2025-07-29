import React,{useState} from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
       <nav className="top-0 flex justify-between items-center px-28 py-4 fixed w-full bg-black/80 backdrop-blur-md z-50 text-white border-b border-gray-600">
        {/* Left: Logo */}
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
          KA
        </h1>

        {/* Right: Nav links and hamburger grouped together */}
        <div className="flex items-center">
          {/* Nav links (show from md and up) */}
          <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
            <li>
              <a href="#home" className="link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="link">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="link">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="link">
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger (show below md) */}
          <button
            className="md:hidden text-green-400 ml-4"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Slide-in mobile menu */}
      <div
        className={`md:hidden fixed top-10 right-0 w-1/4 h-screen bg-black/90 backdrop-blur-md text-white px-4 py-8 transition-transform duration-300 z-40 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 text-sm font-medium">
          <li>
            <a href="#home" className="link" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="link"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="link"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="link"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="link"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

    </>
  )
}

export default Navbar
