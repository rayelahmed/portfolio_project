import React from "react";
import client1 from "../../../Images/IMG/testmonial-1-1.jpg";
import client2 from "../../../Images/IMG/testimonials-img-1-1.jpg";
import "./Testimonials.css";
import effects2 from "../../../Images/IMG/effect-2-1.png";

const Testimonials = () => {
  return (
    <div className="testimonials-container mt-20">
      <div className=" flex justify-end">
        {" "}
        <img src={effects2} alt="" />
      </div>
      <div style={{ marginTop: "-5rem" }}>
        <h4>Testimonials</h4>
        <h2 className="pt-2">What my Clients say</h2>
        <p className="testimonials-text pt-3">
          My responsibility in the client section involves creating the user{" "}
          interface and <br /> managing client-side logic for web applications.
        </p>{" "}
      </div>
      <div className="flex justify-center pt-16 ">
        <div className="my-role  mt-6">
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="card-actions flex justify-center"></div>
              <p className=" pt-8 ">
                "Working with <span> Rayel Ahmed Turjo </span> was like having
                the ace up our sleeve.He seamlessly played the 'development
                card,' turning our ideas into a winning hand. From crafting
                intuitive user interfaces with React.js to dealing with backend
                complexities using Node.js and MongoDB,{" "}
                <span> Rayel Ahmed Turjo </span> demonstrated a full deck of
                skills. The end result? A web application that not only met but
                exceeded our expectations. We've found our trump card for future
                projects!"
              </p>{" "}
              <div className="flex justify-center items-center pt-6">
                <div className="flex">
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src={client1} alt="" />
                    </div>
                  </div>
                  <div className=" flex items-center  pl-3">
                    <div className="text-start">
                      <h3>William Carey</h3>
                      <p className="clients-role">Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="card-actions flex justify-center "></div>
              <p className=" pt-8">
                "<span> Rayel Ahmed Turjo </span> played the 'communication
                card' exceptionally well throughout our collaboration. Like a
                perfectly shuffled deck,he ensured all stakeholders were on the
                same page. Clear and concise updates on project progress, prompt
                responses to queries, and a collaborative spirit made the entire
                development process a breeze. If effective communication is what
                you seek in a developer, <span> Rayel Ahmed Turjo </span> is the
                ace of cards!"
              </p>
              <div className="flex justify-center items-center pt-6">
                <div className="flex">
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src={client2} alt="" />
                    </div>
                  </div>
                  <div className=" flex items-center  pl-3">
                    <div className="text-start">
                      <h3>David Luke</h3>
                      <p className="clients-role">Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
