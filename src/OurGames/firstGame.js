import React from "react";
import Coin from "../Assests/Coin.png";
import { Carousel } from "react-bootstrap";
import GameOne1 from "../Assests/gameOne1.jpg";
import GameOne2  from "../Assests/GameOne2.jpg";

import "./firstGame.css";

const FirstGame = () => {
  return (
    <div>
      <div className="firstGame-style">
        <div className="col-md-12 firstGame-main-style">
          <div className="col-md-6 firstGame-text-section">
            <h3 className="firstGame-xoin-heading">First Game Name</h3>
            <p className="text-style-firstGame">
              Most kids like to run, but many get bored running in place or
              running laps around a track or a gymnasium. So why not get
              creative to keep them active? Planning organized games that
              involve running is a great way to get kids to exercise while still
              having fun.
            </p>
          </div>
          <div className="col-md-4 firstGame-image-section">




          <div className="">
          <Carousel>
        
            {/* <Carousel.Item className="carousel-item-style">
              <img
                className="d-block image-height   w-100"
                src={ForWebsite}
                alt="Second slide"
              />
            </Carousel.Item> */}
            <Carousel.Item  className="carousel-inner-style">
              <img
                className="d-block image-height  w-100"
                src={GameOne1}

                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item className=" ">
              <img
                className="d-block image-height   w-100"
                src={GameOne1}

                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
      </div>



          </div>
          {/* <div className="col-md-2"></div> */}

        </div>
      </div>
    </div>
  );
};

export default FirstGame;
