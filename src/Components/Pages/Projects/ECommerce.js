import React from "react";
import ECommerce1 from "../../../Images/IMG/e-commerce1.jpg";
import ECommerce2 from "../../../Images/IMG/e-commerce2.jpg";
import ECommerce3 from "../../../Images/IMG/e-commerce3.jpg";
import ECommerce4 from "../../../Images/IMG/e-commerce4.jpg";
import "./ECommerce.css";

const ECommerce = () => {
  return (
    <div className="e-commerce-container">
      <div className="e-commerce-projects">
        <div>
          <a href="https://gym-equipment-apps.netlify.app/">
            <img src={ECommerce1} alt="" />
          </a>
        </div>
        <div>
          <img src={ECommerce2} alt="" />
        </div>

        <div>
          <img src={ECommerce3} alt="" />
        </div>
        <div>
          <img src={ECommerce4} alt="" />
        </div>
        <div>
          <img src={ECommerce4} alt="" />
        </div>
        <div>
          <img src={ECommerce4} alt="" />
        </div>
        <div>
          <img src={ECommerce4} alt="" />
        </div>
        <div>
          <img src={ECommerce4} alt="" />
        </div>
        <div>
          <img src={ECommerce4} alt="" />
        </div>
        <div>
          <img src={ECommerce4} alt="" />
        </div>
        <div>
          <img src={ECommerce4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ECommerce;
