import React from 'react'
import Project from '../Components/Project'

const Projects = () => {
  return (
    <section className='section flex-col py-20 px-8 mx-auto max-w-6xl'>
      <div className="">
    <h1 className="heading">Featured Projects</h1>
    <div className="underline w-20 mx-auto"></div>
    <p className='text-center text-gray-300 text-xl mt-8'>A showcase of my recent work combining frontend development, algorithms, and AI concepts</p>
    <div className='grid md:grid-cols-2 gap-8 mt-6'>
        <Project name="Chess" des="A real-time multiplayer chess web app using Socket.io for seamless two-player gameplay and live
 move synchronization." t1="Node.js" t2="Express.js" t3="MongoDB" t4="Socket.io" t5="Chess.js"/>
        <Project name="Snappy" des="A real-time chat application using Socket.io and Node.js enabling instant messaging, user presence
 detection, and scalable communication between multiple users." t1="Node.js" t2="Express.js" t3="MongoDB" t4="Socket.io" t5="Reactjs"/>
        <Project name="Daily Journal" des="Designed and developed a dynamic blog website with user authentication, rich text content creation, and
 responsive UI, enabling seamless content publishing and engagement." t1="Node.js" t2="Express.js" t3="MongoDB" t4="EJS" t5="Bootstrap"/>
        <Project name="Solar System" des="A 3D interactive solar system visualization built with Three.js." t1="HTML" t2="CSS" t3="Javascript" t4="Three.js" t5="Figma"/>
        <Project name="Secret" des="A fun tool to encrypt and decrypt messages using emojis as secret code." t1="HTML" t2="CSS" t3="Javascript" t4="Reactjs" t5="Figma"/>
        <Project name="Snake Game" des="A classic Snake game built using HTML5 Canvas for smooth, real-time gameplay." t1="HTML" t2="CSS" t3="Javascript" t4="Canvas" t5="Figma"/>
    </div>
    <div className="text-center mx-auto my-6">
    <a href="" className='text-gray-500 hover:text-green-500'>Visit more...</a>
    </div>
  </div>
    </section>
  )
}

export default Projects
