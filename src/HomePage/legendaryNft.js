import React from "react";
import "./legendaryNft.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import NFT1 from "../Assests/NFT1.png";
import NFT2 from "../Assests/NFT2.jpg";
import NFT3 from "../Assests/NFT3.png";
import NFT4 from "../Assests/NFT4.jpg";
const LegendaryNft = () => {
  const scrollRightHandler = () => {
    document.getElementById("legendaryscroll").scrollLeft += 430;
  };
  const scrollLeftHandler = () => {
    document.getElementById("legendaryscroll").scrollLeft -= 430;
  };
  return (
    <>
    <div className="legendary-nft-outer">
      <div className="legendary_nft">
        <h3>Legendary NFTs</h3>
        <div className="legendary-nft-outer-pad">
          <div className="col-md-12 legendary-nft-inner-flex">
            <div className="col-md-4 legendary-inner-left">
              <img
                src={NFT3}
                alt=""
                height="150px"
                width="150px"
                style={{ borderRadius: "12px" }}
              />
              <h6>Lorem Ipsm</h6>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-md-8">
              <div>
                <h3 className="">Lorem Ipsm</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------legendary-nft-slider--------- */}
      <div className="legendary-nft-slider-outer">
        <div className="legendary-nft-slider" id="legendaryscroll">
          <button onClick={scrollRightHandler} className="tes-btn11">
            <FaArrowLeft size={22.5} />
          </button>
          <button onClick={scrollLeftHandler} className="tes-btn12">
            <FaArrowRight size={22.5} />
          </button>
          <img
            className="image-slider-style"
            src={NFT1}
            alt="nf"
            height="100px"
            width="100px"
          />

          <img
            className="image-slider-style"
            src={NFT2}
            alt="nf"
            height="100px"
            width="100px"
          />

          <img
            className="image-slider-style"
            src={NFT3}
            alt="nf"
            height="100px"
            width="100px"
          />

          <img
            className="image-slider-style"
            src={NFT4}
            alt="nf"
            height="100px"
            width="100px"
          />

          <img
            className="image-slider-style"
            src={NFT1}
            alt="nf"
            height="100px"
            width="100px"
          />
          <img
            className="image-slider-style"
            src={NFT2}
            alt="nf"
            height="100px"
            width="100px"
          />

          <img
            className="image-slider-style"
            src={NFT3}
            alt="nf"
            height="100px"
            width="100px"
          />

          <img
            className="image-slider-style"
            src={NFT4}
            alt="nf"
            height="100px"
            width="100px"
          />
        </div>
      </div>
      </div>
    </>
  );
};
export default LegendaryNft;
