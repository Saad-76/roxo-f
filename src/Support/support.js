import React from "react";

import Header from "../HomePage/header";
import Footer from "../HomePage/footer";
import GameOne from "./gameOne";
import "./support.css";

const Support = () => {
  return (
    <>
      <div className="support-background-color">
        <Header />
        <div className="support-heading-outer">
          <h3 className="support-heading-style">Support</h3>
        </div>
        <GameOne />
        <div className="support-footer-outer">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Support;
