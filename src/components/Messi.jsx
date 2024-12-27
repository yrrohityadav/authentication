import React from "react";

const Messi = () => {
  return (
    <div className="bg-white rounded shadow p-6 max-w-sm">
      <img
        src="https://via.placeholder.com/150" // Replace with Messi's image URL
        alt="Lionel Messi"
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="text-2xl font-bold text-center mb-4">Lionel Messi</h2>
      <p className="text-gray-700 text-center mb-4">
        Lionel Messi, often hailed as the "GOAT" of football, is celebrated for
        his unparalleled dribbling, playmaking skills, and consistency. His
        journey from Argentina to becoming a global icon is truly inspirational.
      </p>
      <ul className="text-gray-700">
        <li><strong>Goals:</strong> 800+</li>
        <li><strong>Assists:</strong> 300+</li>
        <li><strong>Champions League Titles:</strong> 4</li>
        <li><strong>Ballon d'Or:</strong> 7</li>
        <li><strong>Clubs:</strong> Barcelona, PSG, Inter Miami</li>
      </ul>
    </div>
  );
};

export default Messi;
