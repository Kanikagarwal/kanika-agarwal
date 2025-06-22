import React from 'react'
import Technology from '../Components/Technology'

function Skills() {
  return (
    <section className="section flex-col py-20 px-8 max-w-6xl mx-auto">
  <div className=" text-center">
    <h1 className="heading">Skills & Technologies</h1>
    <div className="underline w-20 mx-auto"></div>
  </div>

  {/* Centered Grid Container */}
  <div className="flex justify-center mt-6">
    <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
      <Technology
        name="Web Development"
        s1="Javascript" s2="Bootstrap" s3="HTML/CSS"
        s4="Tailwind CSS" s5="React" s6="Node.js"
        p1="90%" p2="85%" p3="95%" p4="80%" p5="70%" p6="95%"
      />
      <Technology
        name="Programming & DSA"
        s1="Python" s2="Java" s3="C++"
        s4="Data Structures" s5="Algorithm" s6="Problem Solving"
        p1="50%" p2="80%" p3="60%" p4="88%" p5="85%" p6="90%"
      />
      <Technology
        name="AI & Tools"
        s1="VS Code" s2="IntelliJ" s3="Postman"
        s4="Git/Github" s5="Figma" s6="Express.js"
        p1="90%" p2="85%" p3="60%" p4="70%" p5="75%" p6="80%"
      />
    </div>
  </div>
</section>

  )
}

export default Skills
