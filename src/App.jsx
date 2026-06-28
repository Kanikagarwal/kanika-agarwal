import { useState } from "react";
import Hero from "./Sections/Hero";
import "./App.css";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import AnimatedSection from "./Sections/AnimatedSection";
import Navbar from "./Sections/Navbar";
import Expierence from "./Sections/Expierence";
import CustomCursor from "./Components/CustomCursor";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
      <CustomCursor />
        <Navbar/>
       <AnimatedSection><Hero /></AnimatedSection> 
       <AnimatedSection><About /></AnimatedSection> 
       <AnimatedSection><Expierence /></AnimatedSection> 
       <AnimatedSection><Skills /></AnimatedSection> 
       <AnimatedSection><Projects /></AnimatedSection>
       <AnimatedSection><Contact /></AnimatedSection> 
        
        
        
        
      </main>
      <Footer />
    </>
  );
}

export default App;
