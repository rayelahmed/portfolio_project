import React from "react";
import Banner from "../Home/Banner";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import Development from "../Pages/Development/Development";
import Services from "../Pages/Services/Services";
import Testimonials from "../Pages/Testimonials/Testimonials";
import Brands from "../Pages/Brands/Brands";
import Contacts from "../Pages/Contact/Contacts";
import Footer from "../Shared/Footer/Footer";
import ToTop from "../Pages/ToTop/ToTop";

const Home = () => {
  return (
    <div>
      <Banner />
      <ToTop />
      <About />
      <Projects />
      <Development />
      <Services />
      <Testimonials />
      <Brands />
      <Contacts />

      <div style={{ marginTop: "800px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
