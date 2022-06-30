import React from "react";

import Coin from "../Assests/Coin.png";
import { Link } from "react-router-dom";
import Buy1 from "../Assests/web roxo/buy/buy.png";
import Buy2 from "../Assests/web roxo/buy/buy2.png";
import "./roxo.css";

const Roxo = () => {
  return (
    <div>
      <div className="roxo-heading-style">
        <h1>ROXO COIN</h1>
      </div>
      <div className="col-md-12 buy-section-outer-flex">
        <div className="col-md-6 buy-text-section">
          <h2>Welcome to ROXO Gamefi App.</h2>
          <p>
            ROXO is the first gaming platform that brings power and innovation
            to the mobile gaming industry where users can play and earn crypto,
            especially in mobile games.
          </p>
          <div className="buy-button-outer">
            <button className="buy-button-style">
              <Link to="/buySell">Buy</Link>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          {/* <img className="buy-image-style" src={Buy1} alt="" /> */}
          <img className="buy-image-style" src={Buy2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Roxo;
