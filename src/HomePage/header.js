import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import logoPic from "../Assests/25.png";
import Login from "./login";
import { GoThreeBars } from "react-icons/go";
import PDF from "../Assests/PDF.pdf";
import "./header.css";
import { arrayify } from "ethers/lib/utils";
import { connectWallet } from "./web3";

const Header = () => {
  let history = useHistory();
  const onResumeClick = () => {
    window.open(PDF);
  };

  const [modalShow, setModalShow] = useState(false);

  const slideOpen = () => {
    if (document.getElementById("mySidebar").style.display == "block") {
      document.getElementById("mySidebar").style.display = "none";
    } else {
      document.getElementById("mySidebar").style.display = "block";
    }
  };

  // ----------walllet connection-------------
  const [adress, setAdress] = useState("");

  const func = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts && accounts.length > 0) {
      // console.log(accounts[0], "accounts valye");

      const newWalletAddress = accounts[0].substring(0, 4);
      // console.log(newWalletAddress,"newwALEE")
      const walletlastAddress = accounts[0].substring(
        accounts[0].length - 4,
        accounts[0].length
      );
      const addressConcat = newWalletAddress + "***" + walletlastAddress;

      // console.log(addressConcat, "addressConcat");

      console.log("user is connected");
      const getAddress = localStorage.getItem("wallet_address");
      setAdress(addressConcat);
    } else {
      console.log("user not connected");
      console.log("acc", accounts);
      setAdress("");
      // window.location.reload();
    }
  };
  useEffect(() => {
    func();
  }, []);

  return (
    <div className="header">
      <div className="header-nav col-md-12">
        <Link to="/homepage">
          <div className="logo-head">
            <img src={logoPic} height="70px"></img>
          </div>
        </Link>
        <Link to="/" className="ourGames font-style-header">
          Home
        </Link>
        <Link to="/ourgames" className="ourGames font-style-header">
          Our Games
        </Link>
        <Link className="marketPlace font-style-header" to="/marketPlace">
          Market Place
        </Link>
        <Link to="/support" className="font-style-header">
          Support
        </Link>
        <Link to="/careers" className="font-style-header">
          Careers
        </Link>
        <Link onClick={onResumeClick} className="font-style-header">
          White Paper
        </Link>
        <Link to="/contactus" className="font-style-header">
          Contact Us
        </Link>

        <div className="header-buttons-outer-flex">
          <Link to="/buyForm">
            <button className="header-price-button-style font-style-header">
              $ 0.0001
            </button>
          </Link>
        </div>

        <div>
          {adress?.length === 0 && (
            <button
              data-bs-toggle="modal"
              data-bs-target="#walletModal"
              className="font-style-header"
            >
              <b>Connect Wallet</b>
            </button>
          )}

          {adress?.length > 0 && (
            <button>
              <b>{adress}</b>
            </button>
          )}
        </div>
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => setModalShow(true)}
        >
          <b> GAME EARNINGS </b>
        </button>
      </div>
      <div className="header-nav-sml col 12">
        <Link to="/homepage">
          <div className="logo-head">
            <img src={logoPic} height="50px"></img>
          </div>
        </Link>
        <div>
          <Link to="/buyForm">
            <button className="header-price-button-style font-style-header">
              $ 0.0001
            </button>
          </Link>
        </div>

        <Link>
          <p className="menu-btn" onClick={slideOpen}>
            <GoThreeBars size={35} />
          </p>
        </Link>
      </div>
      <div className="slides" id="mySidebar">
        <div className="slide-down">
          <Link className="nav-links  single  " href="#vision" to="/">
            <p className="font-style-header">Home </p>
          </Link>
        </div>
        <div className="slide-down">
          <Link className="nav-links  single  " to="/ourgames" href="#homepage">
            <p className="font-style-header"> Our Games </p>
          </Link>
        </div>
        <div className="slide-down">
          <Link
            className="nav-links  single  "
            to="/marketPlace"
            href="#vision"
          >
            <p className="font-style-header">Market Place </p>
          </Link>
        </div>
        <div className="slide-down">
          <Link to="/support">
            <p className="font-style-header">Support</p>
          </Link>
        </div>
        <div className="slide-down">
          <Link to="/careers">
            <p className="font-style-header"> Careers</p>
          </Link>
        </div>
        <div className="slide-down">
          <Link to="/contactus">
            <p className="font-style-header"> Contact Us </p>
          </Link>
        </div>
        <div className="slide-down">
          <Link onClick={onResumeClick}>
            <p className="font-style-header"> White Paper</p>
          </Link>
        </div>

        <div className="slide-down">
          {adress?.length === 0 && (
            <p
              className="font-style-header"
              data-bs-toggle="modal"
              data-bs-target="#walletModal"
            >
              Connect Wallet
            </p>
          )}

          {adress?.length > 0 && (
            <p>
              <b>{adress}</b>
            </p>
          )}
        </div>
        <div className="slide-down">
          <p onClick={() => setModalShow(true)}>GAME EARNINGS</p>
          <Login show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </div>
  );
};

export default Header;
