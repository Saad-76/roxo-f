import React from "react";
import "./vision.css";
// import VisionImage from "../Assests/VisionImage.jpg";
import NFTGamevision from "../Assests/NFT Game vision.png";

const Vision = () => {
  return (
    <div>
      <div className="vision-style">
        <div className="vision-heading-outer">
          <h1>OUR VISION</h1>
        </div>
        <div className="col-md-12 vision-main-style">
          <div className="col-md-8 vision-image-style">
            <img
              className="vision-image-size"
              src={NFTGamevision}
              alt="visionimage"
            />
          </div>
          <div className="col-md-4 vision-text-style">
            <div className="vision-text-data-style">
              <div className="vision-upper-flex">
                <h3 className="vision-heading-style">PLAY TO EARN</h3>
              </div>
              <p className="vision-para">
                ROXO vision is to empowering the users by rewarding them for
                their engagement and enjoyment, through our best quality and
                interactive multiplayer mobile titles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
