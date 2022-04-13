import React from "react";
import "./gameOne.css";
import GameSlider1 from "../Assests/GameSlider1.jpeg";

const GameOne = () => {
  return (
    <>
      <div className="gameOne-outer-pad">
        <div className="col-md-8 gameOne-main-section">
          <div className="col-md-6 image-gameOne-outer ">
            <img
              className="image-gameOne-inner"
              src={GameSlider1}
              alt="image"
            />
          </div>
          <div className="col-md-6 content-gameOne-section">
            <h3>Haste King</h3>
            <p>Online Running Battle</p>
            <p>
              If you need any help regarding Haste King, feel free to reach as
              at:
            </p>
            <p>
              <b>Email :</b> support@roxo.fun
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default GameOne;
