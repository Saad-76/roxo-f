import React from "react";
import "./gameOne.css";
import GameSlider1 from "../Assests/GameSlider1.jpeg";

const GameOne = () => {
  return (
    <>
    <div className="gameOne-outer-pad">
      <div className="col-md-12 gameOne-main-section">
        <div className="col-md-6 image-gameOne-outer ">
          <img
            className="image-gameOne-inner"
            src={GameSlider1}
            alt="image"
           
          />
        </div>
        <div className="col-md-6 content-gameOne-section">
                <h3>Haste King</h3>
          <p>Real-Time Multiplayer Running Battle</p>
          <p>
            ROXO is a leading interactive entertainment company for the mobile
            world, with people all around the world playing one or more of our
            games. We believe in making great games for everyone, no matter what
            your skills are, We have developed fun titles, offering games that
            are enjoyed all around the world.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};
export default GameOne;
