import React, { useState } from "react";
import "./Projects.css";
import ECommerce from "./ECommerce";
import object2 from "../../../Images/IMG/object-2-1-1.png";

const Projects = () => {
  const [activeButton, setActiveButton] = useState("All");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="project-container mt-10  flex justify-center">
      <div>
        <div className="buttons flex mt-10 flex justify-center">
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
                activeButton === "Additional Information" ? "active-button" : ""
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
            <div>
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
  );
};

export default Projects;
