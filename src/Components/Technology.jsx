import React, { useEffect, useRef, useState } from "react";
import "../App.css"; // Make sure to import your custom CSS

const Technology = ({ name, s1, s2, s3, s4, s5, s6, p1, p2, p3, p4, p5, p6 }) => {
  const ref = useRef();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAnimate(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const progressClass = animate ? "progress-fill animate" : "progress-fill";

  return (
    <div
      ref={ref}
      className="border border-gray-800 rounded-xl bg-gray-900/50 backdrop-blur-sm p-8 mt-10"
    >
      <h2 className="text-center text-green-400 font-semibold text-xl font-bold mt-2">
        {name}
      </h2>
      <div className="flex flex-col my-8">
        {[s1, s2, s3, s4, s5, s6].map((skill, index) => {
          const percent = [p1, p2, p3, p4, p5, p6][index];
          return (
            <React.Fragment key={index}>
              <div className="flex justify-between items-center">
                <p>{skill}</p>
                <p className="text-green-400 font-normal">{percent}</p>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mx-auto my-2">
                <div
                  className={`bg-gradient-to-r from-green-400 to-emerald-600 h-2 rounded-full ${progressClass}`}
                  style={{ width: animate ? percent : "0%" }}
                ></div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Technology;
