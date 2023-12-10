import React from "react";
import "./Services.css";
import FrontEnd from "../../../Images/IMG/ui-design.png";
import backEnd from "../../../Images/IMG/backend (1).png";
import databaseManagement from "../../../Images/IMG/data-management.png";
import fullStack from "../../../Images/IMG/developer.png";
import objects6 from "../../../Images/IMG/object-6-1-1.png";
import objects5 from "../../../Images/IMG/object-5-1-1.png";

const Services = () => {
  return (
    <div className="services-container">
      <div className="flex justify-end">
        <img src={objects6} alt="" />
      </div>
      <div style={{ marginTop: "-5rem", marginBottom: "-5rem" }}>
        <h4 className="services">Services</h4>
        <h2 className="pt-2">What I Do for Clients</h2>
        <p className="pt-3">
          My responsibility in the client section involves creating the user{" "}
          interface and <br /> managing client-side logic for web applications.
        </p>{" "}
      </div>
      <div className="flex justify-start">
        <img className="h-80 w-80" src={objects5} alt="" />
      </div>
      <div style={{ marginTop: "-10rem" }} className="flex justify-center  ">
        <div className="my-role  mt-6">
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="card-actions flex justify-center ">
                <img className="h-20 w-20" src={FrontEnd} alt="" />
              </div>
              <h4 className="pt-4">Front-End Development</h4>
              <h5>
                Start from <span className="dollar"> $22</span>
              </h5>
              <p className="text-justify ">
                Building interactive user interfaces using React.js.
                Implementing state management with tools like Redux and Working
                with component-based architecture.
              </p>{" "}
              <div className="flex justify-center">
                <button className=" about-me-btn mt-4 contact-now  pt-2 pb-2  rounded-full">
                  <span className=" about-me-span "> Hire Me</span>
                </button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="card-actions flex justify-center ">
                <img className="h-20 w-20" src={backEnd} alt="" />
              </div>
              <h4 className="pt-4">Back-End Development</h4>
              <h5>
                Start From <span className="dollar">$20</span>
              </h5>
              <p className="text-justify">
                Developing server-side logic and APIs using Node.js and
                Express.js. Handling data storage and retrieval using MongoDB (a
                NoSQL database).
              </p>{" "}
              <div className="flex justify-center">
                <button className=" about-me-btn mt-4 contact-now  pt-2 pb-2  rounded-full">
                  <span className=" about-me-span "> Hire Me</span>
                </button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="card-actions flex justify-center">
                <img className="h-20 w-20" src={databaseManagement} alt="" />
              </div>
              <h4 className="pt-4"> Database Management </h4>
              <h5>
                Start from <span className="dollar">$18</span>
              </h5>
              <p className="text-justify">
                Designing and implementing MongoDB databases. Performing CRUD
                (Create, Read, Update, Delete) operations on data.
              </p>{" "}
              <div className="flex justify-center">
                <button className=" about-me-btn mt-4 contact-now  pt-2 pb-2  rounded-full">
                  <span className=" about-me-span "> Hire Me</span>
                </button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="card-actions flex justify-center">
                <img className="h-20 w-20" src={fullStack} alt="" />
              </div>
              <h4 className="pt-4"> Full-Stack Development </h4>
              <h5>
                Start from <span className="dollar">$32</span>
              </h5>
              <p className="text-justify">
                Integrating front-end and back-end components to create a
                cohesive web application. Managing data flow between the client
                and server.
              </p>{" "}
              <div className="flex justify-center">
                <button className=" about-me-btn mt-4 contact-now  pt-2 pb-2  rounded-full">
                  <span className=" about-me-span "> Hire Me</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
