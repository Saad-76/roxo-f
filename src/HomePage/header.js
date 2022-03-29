import { React, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logoPic from "../Assests/25.png";
import coinPic from "../Assests/3.png";

import blogIcon from "../Assests/3D-ICONS/Blog Icon/bloger 256.png";
import discordIcon from "../Assests/3D-ICONS/Discord icon/main 256.png";
import teleIcon from "../Assests/3D-ICONS/Telegram/main 256.png";
import twitterIcon from "../Assests/3D-ICONS/Twitter Icon/main 256.png";
import careerIcon from "../Assests/3D-ICONS/Career Icon/front 256.png";
import contactIcon from "../Assests/3D-ICONS/Contact Us Icon/main 256.png";
import WhiteIcon from "../Assests/whitePaper.png";
import Glowcoin from "../Assests/glowCoin.png";

import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Login from "./login";
import { GoThreeBars } from "react-icons/go";
import PDF from "../Assests/PDF.pdf";

const Header = () => {
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
        {/* <Link>
          <div className="hover-coin">
            <img className="glowCoin" src={Glowcoin} height="50px"></img>
            <div className="coin-logo">
              <img src={coinPic} height="60px"></img>
              <p>$0.0025</p>
            </div>
          </div>
        </Link> */}

        {/* <Link className="dropbtn ourCommunity">
            Our Community <AiFillCaretDown size={10} />
            <div class="dropdown-content">
              <Link>
                <img src={blogIcon} height="20px" />
                Blog
              </Link>
              <Link>
                <img src={discordIcon} height="20px" />
                Discord
              </Link>
              <Link>
                <img src={twitterIcon} height="20px" />
                Twitter
              </Link>
              <Link>
                <img src={teleIcon} height="20px" />
                Telegram
              </Link>
            </div>
          </Link> */}

        {/* <Link className="dropbtn1 more">
            More
            <AiFillCaretDown size={10} />
            <div class="dropdown-content1">
              <Link to="/support">
                <img src={contactIcon} height="20px" />
                Support
              </Link>
              <Link to="/careers">
                <img src={careerIcon} height="20px" />
                Careers
              </Link>
              <Link onClick={onResumeClick}>
                <img src={WhiteIcon} height="20px" />
                White Paper
              </Link>
              <Link to="/contactus">
                <img src={contactIcon} height="20px" />
                Contact Us
              </Link>
            </div>
          </Link> */}
        <div>
          <Link to="/buyForm">
            <button className="header-price-button-style font-style-header">
              $ 5.09
            </button>
          </Link>
          &nbsp;&nbsp;
          <button
            data-bs-toggle="modal"
            data-bs-target="#walletModal"
            className="font-style-header"
          >
            <b>Connect Wallet</b>
          </button>
          {/* <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => setModalShow(true)}
          >
            <b> GAME EARNINGS </b>
          </button> */}
        </div>
        {/* <button data-bs-toggle="modal" data-bs-target="#exampleModal">
          GAME EARNINGS
        </button> */}
        {/* </Link> */}
      </div>
      <div className="header-nav-sml col 12">
        <Link to="/homepage">
          <div className="logo-head">
            <img src={logoPic} height="50px"></img>
            {/* <h5>ROXO</h5> */}
          </div>
        </Link>
        <div>
        <Link to="/buyForm">
            <button className="header-price-button-style font-style-header">
              $ 5.09
            </button>
          </Link>
        </div>
        {/* <Link>
          <div className="coin-logo">
            <img src={coinPic} height="50px"></img>
            <p>$0.0025</p>
          </div>
        </Link> */}
        <Link>
          <p className="menu-btn" onClick={slideOpen}>
            <GoThreeBars size={35} />
          </p>
        </Link>
      </div>
      <div className="slides" id="mySidebar">
        {/* <div className="slide-down-1" onClick={slideClose}>
          <p>Close</p>
        </div> */}
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
        {/* <div className="slide-down">
          <Link to="/buyForm">
            <p className="font-style-header">$5.09</p>
          </Link>
        </div> */}
        {/* <div className="slide-down">
          <Link className="nav-links-1 single " id="target2" href="#tools">
            <AiFillCaretLeft size={15} />
            <div class="dropdown-content">
              <Link>
                <img src={blogIcon} height="20px" />
                Blog
              </Link>
              <Link>
                <img src={discordIcon} height="20px" />
                Discord
              </Link>
              <Link>
                <img src={twitterIcon} height="20px" />
                Twitter
              </Link>
              <Link>
                <img src={teleIcon} height="20px" />
                Telegran
              </Link>
            </div>
            Our Community
          </Link>
        </div> */}
        {/* <div className="slide-down">
          <Link className="nav-links-2 single" id="target3" href="#news">
            <AiFillCaretLeft size={15} />
            <div class="dropdown-content1">
              <Link>
                <img src={contactIcon} height="20px" />
                Support
              </Link>
              <Link>
                <img src={careerIcon} height="20px" />
                Careers
              </Link>
              <Link>
                <img src={contactIcon} height="20px" />
                Contact Us
              </Link>
              <Link onClick={onResumeClick}>
                <img src={WhiteIcon} height="20px" />
                White Paper
              </Link>
            </div>
            <p>More</p>
          </Link>
        </div> */}
        <div className="slide-down">
          <p
            className="font-style-header"
            data-bs-toggle="modal"
            data-bs-target="#walletModal"
          >
            Connect Wallet
          </p>
        </div>
        {/* <div className="slide-down">
          <p onClick={() => setModalShow(true)}>GAME EARNINGS</p>
          <Login show={modalShow} onHide={() => setModalShow(false)} />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
