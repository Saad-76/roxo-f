import React from "react";
import "./gameTwo.css";
import GameSlider1 from "../Assests/GameSlider2.jpeg";

const GameTwo = () => {
  return (
    <>
      <div className="container">
        <div className="col-md-12 gameTwo-main-section ">
          <div className="col-md-6 content-gameTwo-section">
            <h3>Haste King</h3>
            <p>Real-Time Multiplayer Running Battle</p>
            <p>
              ROXO is a leading interactive entertainment company for the mobile
              world, with people all around the world playing one or more of our
              games. We believe in making great games for everyone, no matter
              what your skills are, We have developed fun titles, offering games
              that are enjoyed all around the world.
            </p>
          </div>
          <div className="col-md-6 image-gameTwo-outer">
            <img
              className="image-gameTwo-inner"
              src={GameSlider1}
              alt="image"
              height="400px"
              width="500px"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default GameTwo;
