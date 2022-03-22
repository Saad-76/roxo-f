import React from "react";
import NFTOne from "../Assests/NFTOne.png";
import GameOne from "../Assests/GameOne.png";
import FinanceOne from "../Assests/FinanceOne.png";
import "./welcome.css";

const Welcome = () => {
  return (
    <div>
      {/* <div className="welcome-background-color"> */}
      <div className="welcome-container">
        <h3 className="welcome-heading">Welcome TO Gamefi World </h3>
        <div className="pad-inner-style">
          <div className="col-md-12 welcome-images-style">
            <div className="col-md-4 welcome-images-inner ">
              <img src={NFTOne} alt="nft" height="250px" width="250px" />
              <h5>Nfts</h5>
            </div>
            <div className="col-md-4 welcome-images-inner">
              <img src={GameOne} alt="nft" height="250px" width="250px" />
              <h5>Games</h5>
            </div>
            <div className="col-md-4 welcome-images-inner">
              <img src={FinanceOne} alt="nft" height="250px" width="250px" />
              <h5>Finance</h5>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Welcome;
