import React from "react";
import Project from "../Components/Project";
import ChessImage from "../assets/Images/Chess.png";
import SS from "../assets/Images/SS.png";
import Snappy from "../assets/Images/Snappy.png";
import Plan from "../assets/Images/Plan.png";
import DJ from "../assets/Images/DJ.png";
import Secret from "../assets/Images/Secret.png";
import Imagify from "../assets/Images/Imagify.png";
import Fundflow from "../assets/Images/Fundflow.png";
const Projects = () => {
  return (
    <section id="projects" className="section flex-col py-20 px-8 mx-auto max-w-6xl">
      <div className="">
        <h1 className="heading">Featured Projects</h1>
        <div className="underline w-20 mx-auto"></div>
        <p className="text-center text-gray-300 text-xl mt-8">
          A showcase of my recent work combining frontend development,
          algorithms, and AI concepts
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <Project
            name="FundFlow"
            img={Fundflow}
            des="A dynamic to-do list app that displays the current date and lets users manage tasks by category."
            t1="MongoDB"
            t2="Express.js"
            t3="Tailwind CSS"
            t4="Nodejs"
            t5="Reactjs"
            code="https://github.com/Kanikagarwal/crowdFunding"
            demo="https://crowd-funding-puce-kappa.vercel.app/"
          />
          <Project
            name="Snappy"
            img={Snappy}
            des="A real-time chat application using Socket.io and Node.js enabling instant messaging, user presence
 detection, and scalable communication between multiple users."
            t1="Node.js"
            t2="Express.js"
            t3="MongoDB"
            t4="Socket.io"
            t5="Reactjs"
            code="https://github.com/Kanikagarwal/snappy"
            demo="https://snappy-mga7.vercel.app/"
          />
          <Project
            name="Imagify"
            img={Imagify}
            des="An AI image Generating platform that allows users to create unique images based on text prompts using ClipDrop API."
            t1="Node.js"
            t2="Express.js"
            t3="MongoDB"
            t4="Reactjs"
            t5="Tailwind CSS"
            code="https://github.com/Kanikagarwal/imagify"
            demo="https://imagify-1-a41y.onrender.com/"
          />
          <Project
            name="Solar System"
            img={SS}
            des="A 3D interactive solar system visualization built with Three.js."
            t1="HTML"
            t2="CSS"
            t3="Javascript"
            t4="Three.js"
            t5="Figma"
            code="https://github.com/Kanikagarwal/Solar_system"
            demo="https://kanikagarwal.github.io/Solar_system/"
          />
          <Project
            name="Secret"
            img={Secret}
            des="A fun tool to encrypt and decrypt messages using emojis as secret code."
            t1="HTML"
            t2="CSS"
            t3="Javascript"
            t4="Reactjs"
            t5="Figma"
            code="https://github.com/Kanikagarwal/Secret"
            demo="https://secret-murex.vercel.app/"
          />
          <Project
            name="Chess"
            img={ChessImage}
            des="A real-time multiplayer chess web app using Socket.io for seamless two-player gameplay and live
 move synchronization."
            t1="Node.js"
            t2="Express.js"
            t3="MongoDB"
            t4="Socket.io"
            t5="Chess.js"
            code="https://github.com/Kanikagarwal/chess"
            demo="https://chess-yem8.onrender.com/"
          />
          
        </div>
        <div className="text-center mx-auto my-6">
          <a href="https://github.com/Kanikagarwal?tab=repositories" target="_blank" className="text-gray-500 hover:text-green-500">
            Visit more...
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
