import React from "react";
import Domain from "../Components/Domain";

const About = () => {
  return (
    <section id="about" className="section items-center flex-col py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="heading">About Me</h1>
        <div className="underline w-10"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="para">
              I'm a passionate AI undergraduate with a strong foundation in
              web development and a deep love for data structures and
              algorithms. My journey in technology is driven by curiosity and
              the desire to create meaningful digital experiences.
            </div>
            <div className="para">
              When I'm not coding, you'll find me exploring the latest
              research, solving algorithmic challenges, or experimenting with
              new web technologies. I believe in the power of clean code and
              intuitive design to solve real-world problems.
            </div>
          </div>
          <div className="w-80 h-80 mx-auto flex flex-col justify-center items-center bg-gradient-to-br from-green-400/20 to-emerald-600/20 border border-green-500/30 aspect-square rounded-full">
            <div className="text-5xl">👩&zwj;💻</div>
            <div className="text-green-500 mt-2">Always Learning</div>
          </div>
        </div>

        <div className="flex justify-evenly items-center w-full max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Domain
              icon={`fa-solid fa-code`}
              name="Frontend Development"
              des="Creating responsive, interactive web applications with modern frameworks and libraries."
            />
            <Domain
              icon={`fa-solid fa-brain`}
              name="Backend Development"
              des="Exploring server-side programming, databases, APIs, and the technologies that power modern web applications."
            />
            <Domain
              icon={`fa-solid fa-bolt`}
              name="Data Structures & Algorithms"
              des="Passionate about solving complex problems and optimizing code performance."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
