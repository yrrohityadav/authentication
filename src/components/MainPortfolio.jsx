import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const MainPortfolio = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Player Portfolio</h1>
      {/* Navigation Bar */}
      <nav className="flex justify-center mb-8 gap-6">
        <NavLink
          to="/ronaldo"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-700"
          }
        >
          Ronaldo
        </NavLink>
        <NavLink
          to="/messi"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-700"
          }
        >
          Messi
        </NavLink>
        <NavLink
          to="/neymar"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-700"
          }
        >
          Neymar
        </NavLink>
        <NavLink
          to="/kaka"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-700"
          }
        >
          Kaka
        </NavLink>
      </nav>
      {/* Player Details */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainPortfolio;
