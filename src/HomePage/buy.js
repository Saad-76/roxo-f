import React from "react";

import { Link } from "react-router-dom";
import FINANCE from "../Assests/FINANCE.jpg";
import "./buy.css";

const Buy = () => {
  return (
    <>
      <div className="container">
        <div className="col-md-12 buy-main-section">
          <div className="col-md-6 buy-content-section">
            <h3>Welcome to </h3>
            <h4> Roxo Website</h4>

            <button className="buy-button-style">
              <Link to="/buySell">Buy</Link>
            </button>
          </div>
          <div className="col-md-6 buy-image-outer">
            <img
              className="buy-image-inner"
              src={FINANCE}
              alt=""
              height="300px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Buy;
