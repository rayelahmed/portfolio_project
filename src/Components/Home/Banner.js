import React from "react";
import Navbar from "../Shared/Navabr/Navbar";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div>
      <div className="container-banner  ">
        <div className="banner ">
          <Navbar />
          <div className="banner-section ">
            <div className="text-start">
              <h4>Hello, I'm</h4>
              <h2 className="pt-1">Rayel Ahmed Turjo</h2>
              <h5 className="pt-4">
                A Creative Developer From
                <span className="bd pl-1">Bangladesh</span>
              </h5>
              <p className="pt-4">
                I’m creative developer in Bangladesh, and I’m very passionate
                and dedicated to my work.
              </p>
              <div className="flex pt-12 social-icon-and-button">
                <div className="">
                  <button className="about-me-btn    pl-8 pr-8 pt-2 pb-2  rounded-full">
                    <span className=" about-me-span "> About Me</span>
                  </button>
                </div>
                <div className="flex items-center pl-8">
                  <ul className="flex">
                    <li className="p-2">
                      <a href="/">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="/">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="/">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="portfolio-image ">
              <img src="https://i.ibb.co/ykbfC0N/profile.png" alt="" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="navigate-down-btn rounded-full pb-4 pl-1.5 pr-1.5">
              <small className="text-sm">।</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
