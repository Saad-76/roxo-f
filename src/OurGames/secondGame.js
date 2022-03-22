import React from "react";
import Coin from "../Assests/Coin.png";
import { Carousel } from "react-bootstrap";
import GameOne1 from "../Assests/gameOne1.jpg";
import "./secondGame.css";

const SecondGame = () => {
  return (
    <div>
      <div className="secondGame-style">
        <div className="container">
          <div className="col-md-12 secondGame-main-style">
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className="bg-color ">
                <Carousel className="inner-style">
                  <Carousel.Item className="carousel-item-style">
                    <img
                      className="d-block image-height  w-100"
                      src={GameOne1}
                      alt="Third slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item className="secondCarousel-image carousel-item-style">
                    <img
                      className="d-block image-height   w-100"
                      src={GameOne1}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>

            <div className="col-md-6 secondGame-text-section">
              <h3 className="secondGame-xoin-heading">Second Game Name</h3>
              <p className="text-style-secondGame">
                A game is a structured form of play, usually undertaken for
                entertainment or fun, and sometimes used as an educational tool.
                ... Toys generally allow for unrestricted play whereas games
                come with present rules. Key components of games are goals,
                rules, challenge, and interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondGame;
