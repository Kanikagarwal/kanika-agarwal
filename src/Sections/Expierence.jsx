import { motion } from "framer-motion";

const milestones = [
  {
    year: "2023",
    type: "Education",
    title: "Joined B.Tech CSE (AI)",
    place: "SKIT Jaipur",
    desc: "Started my engineering journey with a specialization in Artificial Intelligence while building a strong foundation in programming and computer science.",
    tags: ["C++", "Programming", "Engineering"],
  },
  {
    year: "2024",
    type: "Hackathon",
    title: "Smart India Hackathon",
    place: "SIH",
    desc: "Participated in Smart India Hackathon, collaborating with a team to solve real-world challenges.",
    tags: ["Hackathon", "Teamwork"],
  },
  {
    year: "2025",
    type: "Internship",
    title: "Web Development Intern",
    place: "KistechnoSoftware Pvt. Ltd.",
    desc: "Worked on industry projects while improving full-stack development and collaborative software engineering skills.",
    tags: ["Internship", "Full Stack"],
  },
  {
    year: "2026",
    type: "Project",
    title: "Built Pravah 2026 Website",
    place: "SKIT Jaipur",
    desc: "Designed and developed the official SKIT Pravah 2026 fest website with a modern responsive UI.",
    tags: ["React", "Event", "Frontend"],
  },
];

export default function Experience() {
    const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" },
});
  return (
    <section
      id="work"
      className="relative py-24 px-6 bg-[#020409] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-px bg-gradient-to-r from-transparent to-emerald-500" />
                    <span className="font-mono text-[0.65rem] tracking-[0.3em] text-emerald-500 uppercase">
                      02 // Work
                    </span>
                    <span className="w-[6px] h-[6px] rounded-full bg-emerald-500 animate-pulse" />
                  </motion.div>

          <h2
            className="text-4xl md:text-5xl text-white mt-4 text-left mb-2"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Journey
            </span>
          </h2>

          {/* <p className="text-gray-400 mt-5 text-left">
            Every milestone has been a step toward becoming a better developer.
          </p> */}

          <motion.div
                    {...fadeUp(0.25)}
                    className="w-16 h-[3px] rounded-full bg-gradient-to-r from-emerald-500 to-transparent mb-12"
                  />
          {/* <div className="w-20 h-1 bg-emerald-500 rounded-full mx-auto mt-5" /> */}
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-[2px] bg-emerald-500/30"></div>

          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className={`relative mb-8 flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              } justify-start`}
            >

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,.8)] border-4 border-[#020409]"></div>

              {/* Card */}
              <div className="ml-12 md:ml-0 md:w-[45%] bg-[#061018]/80 border border-emerald-500/20 rounded-2xl p-4 hover:border-emerald-400 transition duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,.25)]">

                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded text-emerald-400">
                    {item.year}
                  </span>

                  <span className="text-[10px] uppercase tracking-widest text-gray-500">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-emerald-400 text-sm mt-1">
                  {item.place}
                </p>

                <p className="text-gray-400 mt-2 leading-7 text-sm">
                  {item.desc}
                </p>

                {/* <div className="flex flex-wrap gap-2 mt-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}