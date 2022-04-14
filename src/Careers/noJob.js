import React from "react";
// import "./notAvailable.css";

import CareersHome from "./careersHome";
import Path from "./path";
import Header from "../HomePage/header";
import Footer from "../HomePage/footer";

const NoJob = () => {
  return (
    <div className="careers-background-color">
      <Header />
      <CareersHome />
      <Path />
      {/* <div className="develop-outer-style">
        <div className="develop-heading-style col-md-5">
          <h1>No Job Available</h1>
          <h5>Coming Soon...</h5>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};
export default NoJob;
