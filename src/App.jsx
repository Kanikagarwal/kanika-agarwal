import { useState } from 'react'
import Hero from './Sections/Hero'
import './App.css'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
    <Footer/>
    </>
  )
}

export default App
