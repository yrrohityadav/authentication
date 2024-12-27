import React from "react";
import Ronaldo from "./Ronaldo";
import Messi from "./Messi";
import Neymar from "./Neymar"

const Portfolio = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Portfolio</h1>
      <div className="flex justify-center items-center flex-wrap gap-8">
        {/* Ronaldo's Component */}
        <Ronaldo />
        {/* Messi's Component */}
        <Messi />
        <Neymar/>
      </div>
    </div>
  );
};

export default Portfolio;
