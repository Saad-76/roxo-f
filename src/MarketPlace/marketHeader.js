import React from "react";
import FooterRight from "../Assests/FooterRight.png";
import "./marketHeader.css";

const MarketHeader = () => {
  return (
    <>
      <div className="marketHeader">
        <div className="header_content col-md-6 col-sm-12">
          <div className="market_typography">
            <h1>Marketplace</h1>
          </div>
          <div className="market_place_btm">
          <div ><h5>Total Heroes</h5><p>900 Heroes</p></div>
          <div className="typ_btm"><h5>Total Volume</h5><p>20,951,987,20 HER</p></div>
          <div className="typ_btm"><h5>Highest Price</h5><p>900 Heroes</p></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MarketHeader;
