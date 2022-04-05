import React from "react";

import Header from "./header";
import Footer from "./footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import glowCoin from "../Assests/Token Coin.png";
import "./buyForm.css";

const BuyForm = () => {
  const routePath = useLocation();

  const onTop = () => {
    window.scrollTo(0, 4);
  };

  useEffect(() => {
    onTop();
  }, [routePath]);
  return (
    <>
      <Header />
      <div className="col-md-12 sell-main-heading">
        <h3>
          BUY <span className="color-sell"> TOKENS </span>
        </h3>
      </div>
      <div className="col-md-12 buy-card-main">
        <div className="col-md-4"></div>
        <div className="col-md-3">
          <div className="buy-card-body">
            <div className="buy-card-body-flex">
              <div className="col-md-12 sell-button-main">
                <div>
                  <img src={glowCoin} alt="" height="50px" width="50px" />
                </div>
                <div>
                  <h3 style={{ textAlign: "center" }}>Buy</h3>
                  <p>Trade tokens in an instant</p>
                </div>
                <div className="buy-hidden-image">
                  <img src={glowCoin} alt="" height="30px" width="30px" />
                </div>
              </div>
              <hr
                className="section-divider-sellform"
                style={{ marginTop: "1%" }}
              />
              <div className="col-md-12 input-display-sellform">
                <label>
                  <img src={glowCoin} alt="" height="30px" width="30px" />
                  Metic
                </label>
                <input
                  className="input-field-sellfrom-inner"
                  type="number"
                  min="0"
                  max="10000000"
                />
              </div>
              <div className="col-md-12 input-display-sellform ">
                <label>
                  <img src={glowCoin} alt="" height="30px" width="30px" />
                  Roxo
                </label>
                <input
                  className="input-field-sellfrom-inner"
                  type="number"
                  min="0"
                  max="10000000"
                />
              </div>
              {/* <hr
                className="section-divider-sellform"
                style={{ marginTop: "14%" }}
              /> */}
              <div className="col-md-12 trading-fee-flex">
                <div className="col-md-6">
                  <p>Slipage Tolerance</p>
                </div>
                <div className="col-md-6 trading-fee-value">
                  <p>0.5%</p>
                </div>
              </div>

              <div className="col-md-12 swap-button-outer">
                <button className="swap-button-inner">Swap</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
      <Footer />
    </>
  );
};
export default BuyForm;
