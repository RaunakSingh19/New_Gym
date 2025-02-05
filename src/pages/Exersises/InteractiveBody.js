import React from "react";
import "./InteractiveBody.css";

const InteractiveBody = () => {
  const handleNavigation = (muscleGroup) => {
    // Navigate to the desired page
    window.location.href = `/exercises/${muscleGroup}`;
  };

  return (
    <div className="interactive-body">
      <img
        src="path-to-anatomical-image.jpg"
        alt="Anatomical Body"
        useMap="#bodyMap"
        className="body-image"
      />
      {/* Image Map */}
      <map name="bodyMap">
        <area
          shape="rect"
          coords="50,50,150,150"
          alt="Arms"
          onClick={() => handleNavigation("arms")}
        />
        <area
          shape="rect"
          coords="200,50,300,150"
          alt="Legs"
          onClick={() => handleNavigation("legs")}
        />
        <area
          shape="rect"
          coords="300,200,400,300"
          alt="Back"
          onClick={() => handleNavigation("back")}
        />
        {/* Add more areas */}
      </map>

      {/* Muscle Group Links */}
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
        {/* Add more links */}
      </div>
    </div>
  );
};

export default InteractiveBody;
