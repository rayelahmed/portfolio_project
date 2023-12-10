import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const PDF_FILE_URL = "http://localhost:3000/mycv.pdf";
  const handleDownloadCv = (url) => {
    const fileName = url.split("/").pop();
    const downloadNavLink = document.createElement("a");

    downloadNavLink.href = url; // Replace with the desired file name
    downloadNavLink.setAttribute("downloadUrl", fileName);
    document.body.appendChild(downloadNavLink);
    downloadNavLink.click();
    downloadNavLink.remove();
  };

  return (
    <nav className=" navbar pl-20 pr-20 pt-5">
      <div className="flex-1  flex items-center ">
        <Link to="/">
          <img
            src="https://i.ibb.co/vQJTJXT/logo11-21.png"
            className="h-14"
            alt=""
          />
        </Link>
      </div>

      <ul className={showHamburger ? "open" : ""}>
        <div
          style={{ width: "60%" }}
          className="flex items-center justify-between"
        >
          <div className="flex-1 dev-logo flex items-center ">
            <Link to="/">
              <img
                src="https://i.ibb.co/vQJTJXT/logo11-21.png"
                className="h-14"
                alt=""
              />
            </Link>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setShowHamburger(!showHamburger)}
              className="btn cross-btn btn-square "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>

        <li>
          <NavLink to="/services">Service</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="cv-download text-center">
          <button
            onClick={() => {
              handleDownloadCv(PDF_FILE_URL);
            }}
            className=" download-cv-btn border-2  btn pl-5 pr-5 btn-outline  rounded-full btn-primary "
          >
            <span className=" cv "> Download CV</span>
          </button>
        </li>
      </ul>
      <div className="hamburger-icon">
        <button onClick={() => setShowHamburger(!showHamburger)}>
          <div className="bg-neutral m-1 h-1 w-8"></div>
          <div className="bg-neutral m-1 h-1 w-8"></div>
          <div className="bg-neutral m-1 h-1 w-8"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
