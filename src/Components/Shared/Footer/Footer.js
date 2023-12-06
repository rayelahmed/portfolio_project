import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer
        style={{ backgroundColor: "aliceBlue" }}
        className="footer flex justify-center p-10 p-20"
      >
        <p className="inline" style={{ fontSize: "18px", color: " #6f6b80" }}>
          © 2024. Developed with ❤️ by{" "}
          <span style={{ color: " #f75023" }}>Rayel Ahmed Turjo</span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
