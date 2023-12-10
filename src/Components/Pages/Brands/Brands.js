import React from "react";
import "./Brands.css";
import screen from "../../../Images/IMG/Screen.png";
import effects13 from "../../../Images/IMG/effect-13-1.png";
const Brands = () => {
  return (
    <div className="mt-40">
      <div>
        <img src={screen} alt="" />
      </div>
      <div
        style={{ marginTop: "-5rem" }}
        className="brands-container  flex justify-center"
      >
        <div className="brands">
          <div className="brand">
            <div className="card  w-96 h-32 rounded-none ">
              <div className="card-body items-center text-center">
                <img src="https://i.ibb.co/9YPSJWr/l-1-1-1-1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="brand">
            <div className="card  w-96 h-32 rounded-none ">
              <div className="card-body items-center text-center">
                <img src="https://i.ibb.co/1MsDttm/l-2-1-1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="brand">
            <div className="card  w-96 h-32 rounded-none ">
              <div className="card-body items-center text-center">
                <img src="https://i.ibb.co/bRvypSp/l-3-1-1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="brand">
            <div className="card  w-96 h-32 rounded-none ">
              <div className="card-body items-center text-center">
                <img src="https://i.ibb.co/0sfCSR3/l-4-1-1-1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="brand">
            <div className="card  w-96 h-32 rounded-none ">
              <div className="card-body items-center text-center">
                <img src="https://i.ibb.co/sqLnjnh/l-5-1-1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="brand">
            <div className="card  w-96 h-32 rounded-none ">
              <div className="card-body items-center text-center">
                <img src="https://i.ibb.co/bRvypSp/l-3-1-1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="brand">
            <div className="card  w-96 h-32 rounded-none ">
              <div className="card-body items-center text-center">
                <img src="https://i.ibb.co/VBVR58K/l-7-1-1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="brand">
            <div className="card  w-96 h-32 rounded-none  ">
              <div className="card-body items-center text-center">
                <img src="https://i.ibb.co/60w5GNF/l-8-1-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <img src={effects13} alt="" />
      </div>
    </div>
  );
};

export default Brands;
