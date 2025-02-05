import React from "react";
import "./InteractiveBody.css";

const InteractiveBodySVG = () => {
  const handleNavigation = (muscleGroup) => {
    window.location.href = `/exercises/${muscleGroup}`;
  };

  return (
    <div className="interactive-body">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 800"
        className="body-svg"
      >
        {/* Arms */}
        <path
          d="M50,50 L150,50 L150,150 L50,150 Z"
          fill="transparent"
          stroke="red"
          strokeWidth="2"
          onClick={() => handleNavigation("arms")}
        />
        {/* Legs */}
        <path
          d="M200,50 L300,50 L300,150 L200,150 Z"
          fill="transparent"
          stroke="blue"
          strokeWidth="2"
          onClick={() => handleNavigation("legs")}
        />
        {/* Back */}
        <path
          d="M300,200 L400,200 L400,300 L300,300 Z"
          fill="transparent"
          stroke="green"
          strokeWidth="2"
          onClick={() => handleNavigation("back")}
        />
        {/* Add more paths for other muscle groups */}
      </svg>

      <div className="muscle-group-links">
        <button
          className="muscle-link"
          onClick={() => handleNavigation("arms")}
        >
          Arms
        </button>
        <button
          className="muscle-link"
          onClick={() => handleNavigation("legs")}
        >
          Legs
        </button>
        <button
          className="muscle-link"
          onClick={() => handleNavigation("back")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default InteractiveBodySVG;
