import React from "react";
import "./Projects.css";
import color1 from "../../../Images/IMG/color-1-1.png";
const Project = () => {
  return (
    <div className="mt-20">
      <div style={{ marginBottom: "-10rem", marginLeft: "5rem" }}>
        <img src={color1} alt="" />
      </div>
      <div className="flex justify-center ">
        <div className="project-section">
          <h4>Projects</h4>
          <h2 className="pt-4">My Creative Projects</h2>
          <p className="pt-4">
            Creating web applications that seamlessly adapt to various screen
            sizes and devices is a fundamental aspect of my development
            approach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
