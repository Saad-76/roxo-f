import React from "react";
import { GoThreeBars } from "react-icons/go";

import { Link } from "react-router-dom";

import "./connectWallet.css";
import GAME from "../Assests/GAME.jpg";
import { ImCopy } from "react-icons/im";

const ConnectWallet = () => {
  const slideOpen = () => {
    if (document.getElementById("dashboardSideBar").style.display == "block") {
      document.getElementById("dashboardSideBar").style.display = "none";
    } else {
      document.getElementById("dashboardSideBar").style.display = "block";
    }
  };
  return (
    <>
      {/* ---------------------------------resp sidebar  nft Dashboard---------- */}

      <div className="resp-sidebar-dashboard">
        <div className="dashboad-sidebar-sml col 12">
          <p className="menu-btn" onClick={slideOpen}>
            <GoThreeBars size={35} />
          </p>
        </div>

        <div className="dashboard-resp-view" id="dashboardSideBar">
          <div className="slide-down">
            <Link className="nav-links  single  " href="#vision">
              <p className="font-style-header">Game Name </p>
            </Link>
          </div>
          <div className="slide-down">
            <Link
              className="nav-links  single  "
              to="/dashboard"
              href="#homepage"
            >
              <p className="font-style-header"> Dashboard </p>
            </Link>
          </div>
          <div className="slide-down">
            <Link className="nav-links  single  " href="#vision">
              <p className="font-style-header">NFTS </p>
            </Link>
          </div>
          <div className="slide-down">
            <Link>
              <p className="font-style-header">Buy More</p>
            </Link>
          </div>
          <div className="slide-down">
            <p
              className="font-style-header"
              data-bs-toggle="modal"
              data-bs-target="#DepositeModal"
            >
              {" "}
              Deposit
            </p>
          </div>
          <div className="slide-down">
            <p
              className="font-style-header"
              data-bs-toggle="modal"
              data-bs-target="#WithDrawModal"
            >
              With Draw{" "}
            </p>
          </div>
          <div className="slide-down">
            <p
              className="font-style-header"
              data-bs-toggle="modal"
              data-bs-target="#convertModal"
            >
              {" "}
              Convert
            </p>
          </div>
        </div>
      </div>
      {/* ------------------------------------ */}

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
