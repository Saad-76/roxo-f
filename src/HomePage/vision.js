import React from "react";
import "./vision.css";
// import VisionImage from "../Assests/VisionImage.jpg";
import NFTGamevision from "../Assests/NFT Game vision.png";

const Vision = () => {
  return (
    <div>
      <div className="vision-style">
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
              {/* <div className="visiion-upper-text"> */}
                <div className="vision-upper-flex">
                  <h3 className="vision-heading-style">Our Vision</h3>
                 
                </div>
              {/* </div> */}
              <p className="vision-para">
                Our vision is that no NFT metaverse should be singular but
                rather each metaverse can be interconnected each unique NFT
                increased utility through NFT interoperability between games and
                platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
