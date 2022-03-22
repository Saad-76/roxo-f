import React from "react";

import { FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";

import NFT1 from "../Assests/NFT1.png";
import NFT2 from "../Assests/NFT2.jpg";
import NFT3 from "../Assests/NFT3.png";
import NFT4 from "../Assests/NFT4.jpg";

import "./newNftSlider.css";

const NewNftSlider = () => {
  const Rightscrol = () => {
    document.getElementById("nftscroll").scrollLeft += 430;
  };
  const Leftscrol = () => {
    document.getElementById("nftscroll").scrollLeft -= 430;
  };

  return (
    <>
      <div>
        <h3 className="nftSlider-heading">New NFTs</h3>
      </div>
      <div className="nft-Slider" id="nftscroll">
        <button onClick={Leftscrol} className="tes-btn11">
          <FaArrowLeft size={22.5} />
        </button>
        <button onClick={Rightscrol} className="tes-btn12">
          <FaArrowRight size={22.5} />
        </button>
        <img
          className="image-slider-style"
          src={NFT1}
          alt="nf"
          height="200px"
          width="200px"
        />
        <img
          className="image-slider-style"
          src={NFT2}
          alt="nf"
          height="200px"
          width="200px"
        />

        <img
          className="image-slider-style"
          src={NFT3}
          alt="nf"
          height="200px"
          width="200px"
        />

        <img
          className="image-slider-style"
          src={NFT4}
          alt="nf"
          height="200px"
          width="200px"
        />

        <img
          className="image-slider-style"
          src={NFT1}
          alt="nf"
          height="200px"
          width="200px"
        />
        <img
          className="image-slider-style"
          src={NFT2}
          alt="nf"
          height="200px"
          width="200px"
        />

        <img
          className="image-slider-style"
          src={NFT3}
          alt="nf"
          height="200px"
          width="200px"
        />

        <img
          className="image-slider-style"
          src={NFT4}
          alt="nf"
          height="200px"
          width="200px"
        />
      </div>
      <div className="newNftSlider-view-button-outer">
        <button className="newNftSlider-view-button-inner">View All</button>
      </div>
    </>
  );
};

export default NewNftSlider;
