import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className=" navbar pl-20 pr-20 pt-5">
      <div className="flex-1 flex items-center ">
        <Link to="/">
          <img
            src="https://i.ibb.co/vQJTJXT/logo11-21.png"
            className="h-14"
            alt=""
          />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex items-center justify-center">
          <li>
            <a href="/">
              <Link to="/">Home</Link>
            </a>
          </li>

          <li>
            <a href="/">
              <Link to="/about">About</Link>
            </a>
          </li>
          <li>
            <a href="/">
              <Link to="/">Projects</Link>
            </a>
          </li>

          <li>
            <a href="/">
              <Link to="/">Service</Link>
            </a>
          </li>
          <li>
            <a href="/" className="bg-none">
              <Link to="/">Contact</Link>
            </a>
          </li>
          <li className="cv-download text-center">
            <Link to="/">
              <button className=" border-2  btn pl-5 pr-5 btn-outline  rounded-full btn-primary ">
                <span className=" cv "> Download CV</span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
