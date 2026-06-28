import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.8,
    delay,
    ease: "easeOut",
  },
});

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    const response = await fetch("https://formspree.io/f/xrbkybgg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
  setStatus("✅ Message sent successfully!");
  e.target.reset();

  setTimeout(() => {
    setStatus("");
  }, 5000); // Remove after 5 seconds
} else {
  setStatus("❌ Something went wrong.");

  setTimeout(() => {
    setStatus("");
  }, 5000);
}
  };

  return (
    <section
      id="contact"
      className="relative bg-[#020409] overflow-hidden py-24 px-4 sm:px-6 lg:px-10"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[320px] rounded-full bg-emerald-500/[0.04] blur-[110px] pointer-events-none"></div>

      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-emerald-400/[0.03] blur-[90px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Label */}

        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-emerald-500"></div>

          <span className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-emerald-500">
            05 // CONTACT
          </span>

          <span className="w-[6px] h-[6px] rounded-full bg-emerald-500 animate-pulse"></span>
        </motion.div>

        {/* Heading */}

        <motion.h2
          {...fadeUp(0.2)}
          className="text-3xl sm:text-4xl font-black text-white mb-2"
          style={{ fontFamily: "'Orbitron', monospace" }}
        >
          Get In{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            Touch
          </span>
        </motion.h2>

        <motion.div
          {...fadeUp(0.25)}
          className="w-16 h-[3px] rounded-full bg-gradient-to-r from-emerald-500 to-transparent mb-6"
        />

        {/* <motion.p
          {...fadeUp(0.3)}
          className="text-emerald-300/70 max-w-2xl leading-8 mb-14"
        >
          Whether you have a project in mind, an internship opportunity,
          or simply want to discuss technology, I'd love to hear from you.
          Let's build something amazing together.
        </motion.p> */}

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <motion.div
            {...fadeUp(0.35)}
            className="space-y-8"
          >

            <div>
              <h3
                className="text-2xl font-bold text-white mb-5"
                style={{ fontFamily: "'Orbitron', monospace" }}
              >
                Let's Connect
              </h3>

              <p className="text-emerald-300/70 leading-8">
                I'm currently open to internships, freelance projects,
                collaborations and exciting opportunities. Feel free to
                reach out anytime.
              </p>
            </div>

            {/* Email */}

            <div className="flex items-center gap-5 rounded-2xl border border-emerald-500/15 bg-[#060a12]/80 backdrop-blur-xl p-5 hover:border-emerald-500/40 transition-all duration-300">

              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex justify-center items-center text-xl text-emerald-400">
                <i className="fa fa-envelope"></i>
              </div>

              <div>
                <h4 className="text-white font-semibold">
                  Email
                </h4>

                <a
                  href="mailto:aanika6510@gmail.com"
                  className="text-emerald-300 hover:text-green-400 transition"
                >
                  aanika6510@gmail.com
                </a>
              </div>

            </div>

            {/* Location */}

            <div className="flex items-center gap-5 rounded-2xl border border-emerald-500/15 bg-[#060a12]/80 backdrop-blur-xl p-5 hover:border-emerald-500/40 transition-all duration-300">

              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex justify-center items-center text-xl text-emerald-400">
                <i className="fa fa-map-marker"></i>
              </div>

              <div>
                <h4 className="text-white font-semibold">
                  Location
                </h4>

                <p className="text-emerald-300">
                  Jaipur, Rajasthan, India
                </p>
              </div>

            </div>

            {/* Twitter */}

            <div className="flex items-center gap-5 rounded-2xl border border-emerald-500/15 bg-[#060a12]/80 backdrop-blur-xl p-5 hover:border-emerald-500/40 transition-all duration-300">

              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex justify-center items-center text-xl text-emerald-400">
                <i className="fa-brands fa-x-twitter"></i>
              </div>

              <div>
                <h4 className="text-white font-semibold">
                  X (Twitter)
                </h4>

                <a
                  href="https://x.com/KanikaConnect"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-300 hover:text-green-400 transition"
                >
                  @KanikaConnect
                </a>
              </div>

            </div>
                      </motion.div>

          {/* Contact Form */}

          <motion.div
            {...fadeUp(0.45)}
            className="relative overflow-hidden rounded-2xl bg-[#060a12]/80 backdrop-blur-xl border border-emerald-500/15 hover:border-emerald-500/40 transition-all duration-300 p-8 mb-4"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent pointer-events-none"></div>

            <form
              onSubmit={handleSubmit}
              className="relative z-10 space-y-6"
            >
              <div>
                <label className="block mb-2 text-emerald-300 font-medium">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-emerald-500/15 bg-[#0b111b] px-4 py-3 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-emerald-300 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-emerald-500/15 bg-[#0b111b] px-4 py-3 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-emerald-300 font-medium">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-emerald-500/15 bg-[#0b111b] px-4 py-3 text-white placeholder:text-gray-500 resize-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(16,185,129,0.35)]"
              >
                <i className="fa-solid fa-paper-plane transition-transform duration-300 group-hover:translate-x-1"></i>

                <span>Send Message</span>
              </button>

              {status && (
                <p className="text-center text-emerald-400 font-medium mt-2">
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Back To Top */}

        <motion.div
          {...fadeUp(0.6)}
          className="flex justify-center mt-20"
        >
          <a
            href="#home"
            className="group flex flex-col items-center"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-500 mb-4">
              Back To Top
            </span>

            <div className="w-14 h-14 rounded-full border border-emerald-500/30 bg-[#060a12]/80 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 group-hover:bg-emerald-500/10 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <i className="fa-solid fa-arrow-up text-xl animate-bounce"></i>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;