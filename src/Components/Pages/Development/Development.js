import React from "react";
import development from "../../../Images/IMG/development.png";
import "./Development.css";

import Progress from "./ProgressBar";
const Development = () => {
  return (
    <div className="development-container flex justify-center mt-40">
      <div className="development-section flex justify-center">
        <div className="development-text flex items-center text-start">
          <div>
            <h4>Coding is my Life</h4>
            <h2 className="pt-2">
              I Develop Skills <br /> Regularly to Keep Me <br /> Updated
            </h2>
            <p className="pt-4 ">
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>

            <div>
              <Progress />
            </div>
          </div>
        </div>

        <div className="development-img  flex justify-center">
          <img src={development} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Development;
