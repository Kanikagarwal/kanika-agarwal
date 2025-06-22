import React from "react";
import { useState } from "react";

const Contact = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = async function (e) {
        e.preventDefault();
        const form = new FormData(e.target);
        const data={
            name: form.get("name"),
            email: form.get("email"),
            message: form.get("message"),
        }

         const response = await fetch("https://formspree.io/f/xrbkybgg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus("Message sent!");
      e.target.reset();
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <section id="contact" className="section flex-col py-20 px-8 mx-auto max-w-6xl">
      <div className="mb-16 text-center">
        <h1 className="heading">Get In Touch</h1>
        <div className="underline w-20 mx-auto"></div>
        <p className="text-center text-gray-300 text-xl mt-8">
          I'm always open to discussing new opportunities, collaborations, or
          just having a chat about technology!
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-white font-semibold text-2xl mb-6">
              Let's Connect
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I'd love to hear from you. Drop me a message
              and I'll get back to you as soon as possible!
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="round w-13 h-13">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div>
                <p>Email</p>
                <p className="text-gray-400"><a href="mailto:aanika6510@gmail.com" target="_blank">aanika6510@gmail.com</a></p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="round w-13 h-13">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div>
                <p>Location</p>
                <p className="text-gray-400">India</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="round w-13 h-13">
                <i class="fa-brands fa-x-twitter"></i>
              </div>
              <div>
                <p>Twitter</p>
                <p className="text-gray-400"><a href="https://x.com/KanikaConnect" target="_blank">KanikaConnect</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
          <form onSubmit={handleSubmit} method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                className="input"
                id="name"
                placeholder="Your Name"
                name="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="text"
                className="input"
                id="email"
                placeholder="your.email@example.com"
                name="email"
              />
            </div>
            <div>
              <label htmlFor="msg" className="label">
                Email
              </label>
              <textarea
                className="input resize-none"
                placeholder="Your Message..."
                id="msg"
                name="message"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover-scale-105 fleex items-center justify-center space-x-2 hover:cursor-pointer">
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
