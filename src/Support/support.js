import React from "react";
import "./support.css";
import Header from "../HomePage/header";
import Footer from "../HomePage/footer";

import GameOne from "./gameOne";

const Support = () => {
  return (
    <>
      <div className="support-background-color">
        <Header />
        <div className="support-heading-outer">
          <h3 className="support-heading-style">Support</h3>
        </div>
        <GameOne />
        <Footer />
      </div>
    </>
  );
};
export default Support;
