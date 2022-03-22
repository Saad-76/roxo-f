import React from "react";
import "./connectWallet.css";
import GAME from "../Assests/GAME.jpg";
import { ImCopy } from "react-icons/im";

const ConnectWallet = () => {
  return (
    <>
      <h2 className="connect-heading">Dashboard</h2>

      <div className="col-md-12 connect-main-section">
        <div className="col-md-4 connect-GameName-outer">
          <div className="connect-GameName">
            <img src={GAME} alt="game" width="40px" height="40px" />
            <p className="connect-gameName-heading">Game Name</p>
          </div>
          <div className="horizintal-line-style" />
        </div>

        <div className="col-md-8">
          <div className="background-connectWallet">
            <div className="connect-address-section">
              <div>
                <p>
                  {" "}
                  <b> Public Address:</b>
                </p>
              </div>
              <div>
                <p> 1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2 </p>
              </div>
              <button className="copy-icon-connect">
                {" "}
                <ImCopy size={20} />{" "}
              </button>
              <div>
                <button className="wallet-connected-button-style">
                  <b> Wallet Connected </b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectWallet;
