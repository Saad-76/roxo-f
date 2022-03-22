import React from "react";
import "./earningModal.css";
import GameImage from "../Assests/GameSlider1.jpeg";

const EarningsModal = () => {
  return (
    <>
      <div
        class="modal fade"
        id="EarningModal"
        tabindex="-1"
        aria-labelledby="EarningModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog earning-modal-size">
          <div class="modal-content modal-border-style">
            <div class="earning-modal-body ">
              <div class=" col-md-12 earning-modal-style ">
                <h5>You don't have any Data/Earning yet!</h5>
                <h3>How it work?</h3>
                <p>
                  <span className="earning-modal-steps">Step:1</span> Download Game from Play/App store.
                </p>
                <div className="earning-game-data">
                  <img
                    src={GameImage}
                    alt="gameimage"
                    height="100px "
                    width="150px"
                  />
                  <h6>Haste King 3D online</h6>
                </div>
                <p>
                  <span className="earning-modal-steps">Step:2</span> Register or Login with same email that you
                  use here.
                  </p>
                <p>
                  <span className="earning-modal-steps">Step:3</span> Play and earn coins in games.
                  </p>
                <p>
                  <span className="earning-modal-steps">Step:4</span> Finally Covert your games coin into ROXO
                  Token.
                  </p>
                  <button className="earning-video-button" data-bs-toggle="modal"
            data-bs-target="#VideoModal" >Click Here to watch Video</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EarningsModal;
