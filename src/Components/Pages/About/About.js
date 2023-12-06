import React from "react";
import "./About.css";
import colleague from "../../../Images/IMG/about.png";

const About = () => {
  return (
    <div className="about-container mt-40">
      <div className="about-work">
        <div className="about-section mt-48">
          <div className="card w-96 ">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/MRZvz0t/fontend.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Frontend Development</h2>
              <p>
                I specialize in crafting dynamic and intuitive user interfaces
                using React.js. My proficiency extends to state management,
                component architecture, and responsive design.
              </p>
            </div>
          </div>
          <div className="card w-96">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/VMfxM8R/backend.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Backend Development</h2>
              <p>
                With Node.js and Express.js, I build robust and scalable
                server-side applications. I am well-versed in creating RESTful
                APIs, authentication systems, and database integration.
              </p>
            </div>
          </div>
          <div className="card w-96">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/qFBBkhn/database.png"
                alt=""
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Database Management</h2>
              <p>
                MongoDB is my database of choice, and I have hands-on experience
                in designing and implementing database schemas, performing CRUD
                operations, and ensuring data integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="developer-section mt-20 flex justify-center">
        <div className="developer-area ">
          <div className="img">
            <img src={colleague} alt="" />
          </div>
          <div className="about-title text-start mt-4">
            <h4>I'm a Developer</h4>
            <h2>I can make your awesome website </h2>
            <p className="pt-4">
              Hello, I'm Rayel Ahmed Turjo, a passionate MERN stack developer
              with a keen interest in building robust and scalable web
              applications. I thrive on turning innovative ideas into reality
              through code and am constantly exploring new technologies to stay
              on the cutting edge of web development
            </p>
            <button className="about-me-btn mt-10   pl-8 pr-8 pt-2 pb-2  rounded-full">
              <span className=" about-me-span "> HIre Me</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
