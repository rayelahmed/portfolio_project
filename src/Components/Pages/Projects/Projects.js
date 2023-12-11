import React, { useState } from "react";
import "./Projects.css";
import ECommerce from "./ECommerce";
import object2 from "../../../Images/IMG/object-2-1-1.png";
import color1 from "../../../Images/IMG/color-1-1.png";

const Projects = () => {
  const [activeButton, setActiveButton] = useState("All");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="project-container mt-10  flex justify-center" id="projects">
      <div>
        <div>
          <div style={{ marginBottom: "-10rem", marginLeft: "5rem" }}>
            <img src={color1} alt="" />
          </div>
          <div className="flex justify-center ">
            <div className="project-section">
              <h4>Projects</h4>
              <h2 className="pt-4">My Creative Projects</h2>
              <p className="pt-4">
                Creating web applications that seamlessly adapt to various
                screen sizes and devices is a fundamental aspect of my
                development approach.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="buttons flex mt-20 flex justify-center">
            <div>
              <button
                className={` m-2 rounded-none ${
                  activeButton === "All" ? "active-button" : ""
                }`}
                onClick={() => handleButtonClick("All")}
              >
                All
              </button>
              <button
                className={` m-2 rounded-none ${
                  activeButton === "Additional Information"
                    ? "active-button"
                    : ""
                }`}
                onClick={() => handleButtonClick("Additional Information")}
              >
                Additional Information
              </button>
              <button
                className={` m-2 rounded-none ${
                  activeButton === "Reviews" ? "active-button" : ""
                }`}
                onClick={() => handleButtonClick("Reviews")}
              >
                Reviews
              </button>
              <div className="mt-10">
                <div
                  className="m-2"
                  style={{
                    display: activeButton === "All" ? "block" : "none",
                  }}
                >
                  <ECommerce />
                </div>
                <div
                  className="m-4"
                  style={{
                    display:
                      activeButton === "Additional Information"
                        ? "block"
                        : "none",
                  }}
                >
                  <ECommerce />
                </div>
                <div
                  className="m-2"
                  style={{
                    display: activeButton === "Reviews" ? "block" : "none",
                  }}
                >
                  <ECommerce />
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "-14rem" }} className="flex justify-end">
            <img src={object2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
