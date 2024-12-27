import React from "react";

const Ronaldo = () => {
  return (
    <div className="bg-white rounded shadow p-6 max-w-sm">
      <img
        src="https://via.placeholder.com/150" // Replace with Ronaldo's image URL
        alt="Cristiano Ronaldo"
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="text-2xl font-bold text-center mb-4">Cristiano Ronaldo</h2>
      <p className="text-gray-700 text-center mb-4">
        Cristiano Ronaldo, one of the greatest footballers of all time, is known
        for his incredible goal-scoring ability, athleticism, and work ethic.
        With numerous accolades, he has inspired millions across the globe.
      </p>
      <ul className="text-gray-700">
        <li><strong>Goals:</strong> 850+</li>
        <li><strong>Assists:</strong> 230+</li>
        <li><strong>Champions League Titles:</strong> 5</li>
        <li><strong>Ballon d'Or:</strong> 5</li>
        <li><strong>Clubs:</strong> Man United, Real Madrid, Juventus, Al Nassr</li>
      </ul>
    </div>
  );
};

export default Ronaldo;
