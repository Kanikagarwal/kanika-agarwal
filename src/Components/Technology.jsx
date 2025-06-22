import React from "react";

const Technology = ({ name, s1,s2,s3,s4,s5,s6,p1,p2,p3,p4,p5,p6,p7,p8 }) => {
  return (
    <div className="border border-gray-800 rounded-xl bg-gray-900/50 backdrop-blur-sm p-8 mt-10">
      <h2 className="text-center text-green-400 font-semibold text-xl font-bold mt-2">
        {name}
      </h2>
      <div className="flex flex-col my-8">
        <div className="flex justify-between items-center">
          <p>{s1}</p>
          <p className="text-green-400 font-normal">{p1}</p>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mx-auto my-2">
          <div className="bg-gradient-to-r from-green-400 to-emerald-600 h-2 transition-all rounded-full duration-1000 ease-out" style={{width:p1}}></div>
        </div>
        <div className="flex justify-between items-center">
          <p>{s2}</p>
          <p className="text-green-400 font-normal">{p2}</p>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mx-auto my-2">
          <div className="bg-gradient-to-r from-green-400 to-emerald-600 h-2 transition-all rounded-full duration-1000 ease-out" style={{width:p2}}></div>
        </div>
        <div className="flex justify-between items-center">
          <p>{s3}</p>
          <p className="text-green-400 font-normal">{p3}</p>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mx-auto my-2">
          <div className="bg-gradient-to-r from-green-400 to-emerald-600 h-2 transition-all rounded-full duration-1000 ease-out" style={{width:p3}}></div>
        </div>
        <div className="flex justify-between items-center">
          <p>{s4}</p>
          <p className="text-green-400 font-normal">{p4}</p>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mx-auto my-2">
          <div className="bg-gradient-to-r from-green-400 to-emerald-600 h-2 transition-all rounded-full duration-1000 ease-out" style={{width:p4}}></div>
        </div>
        <div className="flex justify-between items-center">
          <p>{s5}</p>
          <p className="text-green-400 font-normal">{p5}</p>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mx-auto my-2">
          <div className="bg-gradient-to-r from-green-400 to-emerald-600 h-2 transition-all rounded-full duration-1000 ease-out" style={{width:p5}}></div>
        </div>
        <div className="flex justify-between items-center">
          <p>{s6}</p>
          <p className="text-green-400 font-normal">{p6}</p>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mx-auto my-2">
          <div className="bg-gradient-to-r from-green-400 to-emerald-600 h-2 transition-all rounded-full duration-1000 ease-out" style={{width:p6}}></div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
