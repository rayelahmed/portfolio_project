import React from "react";
import "./Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import effects12 from "../../../Images/IMG/effect-12-1.png";
import ReactGoogleMaps from "../Maps/ReactGoogleMaps";
import effects52 from "../../../Images/IMG/effect-52-1.png";

const Contacts = () => {
  return (
    <div style={{ marginTop: "-12rem" }} id="contact">
      <div style={{ marginBottom: "-12rem" }}>
        <img src={effects12} alt="" />
      </div>

      <div style={{ marginTop: "-5rem" }} className="contact-section ">
        <div>
          <h4 className="services">Contact Me</h4>
          <h2 className="pt-2">I Want To Hear From You</h2>
          <p className="pt-3">
            Please fill out the form on this section to contact with me. <br />
            Knock me any time as you need !
          </p>
        </div>

        <div className="contact-area mt-20 flex justify-center">
          <div className="contacts-form">
            <div className="contact-text flex justify-center ">
              <div>
                <div className="flex items-center ">
                  <div className="">
                    <div className="avatar placeholder">
                      <div
                        style={{ backgroundColor: "#fedfd7" }}
                        className=" text-neutral-content rounded-full w-20"
                      >
                        <span className="text-3xl">
                          {" "}
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            style={{ color: "#F75023" }}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pl-6">
                    <h2 className="text-left">Address</h2>
                    <p>East Rampura, Dhaka Bangladesh</p>
                  </div>
                </div>
                <div className="flex pt-8">
                  <div className="avatar placeholder">
                    <div
                      style={{ backgroundColor: "#ddf5e6" }}
                      className=" text-neutral-content rounded-full w-20"
                    >
                      <span className="text-3xl">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          style={{ color: "#1CBE59" }}
                        />
                      </span>
                    </div>
                  </div>

                  <div className="pl-6">
                    <h2 className="text-left">Email</h2>
                    <p>rayelahhmed404@gmail.com</p>
                  </div>
                </div>
                <div className="flex pt-8">
                  <div className="avatar placeholder">
                    <div
                      style={{ backgroundColor: "#ece8fd" }}
                      className=" text-neutral-content rounded-full w-20"
                    >
                      <span className="text-3xl">
                        <FontAwesomeIcon
                          icon={faPhone}
                          style={{ color: "#8067F0" }}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="pl-6">
                    <h2>Phone</h2>
                    <p>+8801626723831</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <div className="flex justify-start">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered  focus:outline-none input-primary w-full  max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="input input-bordered ml-2 focus:outline-none input-primary w-full  max-w-xs"
                />
              </div>
              <div className="flex pt-4">
                <input
                  type="Your Phone "
                  placeholder="Your Phone"
                  className="input input-bordered   focus:outline-none input-primary w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Your Subject"
                  className="input   input-bordered ml-2  focus:outline-none input-primary w-full max-w-xs"
                />
              </div>
              <div className="pt-4">
                <label className="form-control">
                  <textarea
                    placeholder="Bio"
                    className="textarea textarea-bordered  focus:outline-none textarea-md h-32 w-full max-w-lg"
                  ></textarea>
                </label>
              </div>
              <div className="pt-6 text-left">
                <button className="about-me-btn   pl-8 pr-8 pt-2 pb-2  rounded-full">
                  <span className=" about-me-span ">Submit Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "-8rem" }} className="flex justify-end">
          <img src={effects52} alt="" />
        </div>
        <div style={{ height: "80%" }}>
          <ReactGoogleMaps />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
