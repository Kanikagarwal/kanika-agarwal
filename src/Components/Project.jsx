import React from "react";
import Tech from "./Tech";


function Project({ name, des, t1, t2, t3, t4, t5, img,code, demo }) {
  return (
    <div className="border border-gray-800 rounded-xl bg-gray-900/50 backdrop-blur-sm p-8 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden group mt-10">
      <div className="h-48 bg-gradient-to-br from-green-400/20 to-emerald-600/20 flex items-center justify-center border-b border-gray-800 overflow-hidden">
  <img
    src={img}
    alt="chess"
    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
  />
</div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
          {name}
        </h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{des}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          <Tech name={t1} />
          <Tech name={t2} />
          <Tech name={t3} />
          <Tech name={t4} />
          <Tech name={t5} />
        </div>
        <div className="flex space-x-4">
          <a href={code} target="_blank" className="p-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white hover:text-green-400 transition duration-300"
            >
              <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.297 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.086 1.84 1.236 1.84 1.236 1.07 1.832 2.81 1.303 3.495.996.108-.775.418-1.303.76-1.603-2.665-.305-5.467-1.333-5.467-5.932 0-1.31.465-2.38 1.235-3.22-.124-.304-.535-1.53.116-3.186 0 0 1.005-.322 3.3 1.23a11.51 11.51 0 013.003-.403c1.02.005 2.045.138 3.003.403 2.28-1.552 3.28-1.23 3.28-1.23.655 1.656.244 2.882.12 3.186.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.103.823 2.222 0 1.604-.015 2.897-.015 3.293 0 .32.216.694.825.576C20.565 22.09 24 17.59 24 12.297 24 5.67 18.627 0.297 12 0.297z" />
            </svg>
            <span>Code</span>
          </a>
          <a href={demo} target="_blank" className="p-link">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 3h3v3M11 13l10-10M21 21H3V3h9" />
            </svg>
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
