import React from "react";
import "./buyForm.css";
import Header from "./header";
import Footer from "./footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
        <div className="col-md-4">
          <div className="buy-card-body">
            <div className="buy-card-body-flex">
              <div className="col-md-12 sell-button-main">
                <div className="col-md-6">
                  <h3 className="sell-button-inner">Buy</h3>
                </div>
                {/* <div className="col-md-6 charts-sell-form">
                  <h6>Charts</h6>
                </div> */}
              </div>
              <div className="col-md-12 input-display-sellform">
                <label>From</label>
                <input
                  className="input-field-sellfrom-inner"
                  type="number"
                  min="0"
                  max="10000000"
                />
              </div>
              <div className="col-md-12 input-display-sellform ">
                <label>To</label>
                <input
                  className="input-field-sellfrom-inner"
                  type="number"
                  min="0"
                  max="10000000"
                />
              </div>
              <div className="col-md-12 trading-fee-flex">
                <div className="col-md-6">
                  <p>Trading Fee</p>
                </div>
                <div className="col-md-6 trading-fee-value">
                  <p>0 STT + 1 UST</p>
                </div>
              </div>

              <div className="col-md-12 tax-fee-flex">
                <div className="col-md-6">
                  <p>Est Tx Fee</p>
                </div>
                <div className="col-md-6 tax-fee-value">
                  <p> UST</p>
                </div>
              </div>
              <hr className="section-divider-sellform" />
              <div className="col-md-12 text-sell-form">
                <p>
                  The displaying number is the simulated result
                  <br />
                  and can be different from the actual swap rate.
                  <br />
                  Trade at your own risk.{" "}
                </p>
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
