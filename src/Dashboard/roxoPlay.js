import React from "react";
import "./roxoPlay.css";
import GameSlider1 from "../Assests/GameSlider1.jpeg";
import GameSlider2 from "../Assests/GameSlider2.jpeg";
import { GiPlainCircle } from "react-icons/gi";
import { BsCoin } from "react-icons/bs";
import { Link } from "react-router-dom";
import GameCoin from "../Assests/GameCoin.png"


const RoxoPlay = () => {
  return (
    <>
    <div className="roxo-play-parent">
      <h3 className="roxo-play-heading-style">Roxo Play To Earn Games</h3>
      <div className="col-md-12 display-main-flex">
        <div className="col-md-6 column-size ">
          <div className="background-cards">
            <img
              src={GameSlider1}
              alt="gameslider1"
              className="cards-image-size"
            />
            <h3 className="first-card-heading">Haste King</h3>
            <div className="inner-data-style">
              <div>
                <p>
                   <b> Active User </b>     <br /><span className="dot"/> 82238
              
                </p>
              </div>

              <div>
                <p>
                  <b> Total Earnings </b><br /> <img src={GameCoin} alt="gamecoin" width="25px" height="25px" /> 8.7 M
                  
                </p>
              </div>
            </div>
          </div>

          <div className="button-display-style">
          <button className="checkEarnings-inner-button" >  <Link to="/nftdashboard" >Check Your Earnings</Link></button> 

          </div>
        </div>

        <div className="col-md-6 column-size cards-space-betweeen">
          <div className="background-cards">
            <img src={GameSlider2} alt="" className="cards-image-size" />
            <h3 className="second-card-heading">Coming Soon...</h3>
          </div>
          <div className="button-display-style">
          <button className="checkEarnings-inner-button"  data-bs-toggle="modal"
                data-bs-target="#EarningModal">Check Your Earnings</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default RoxoPlay;
