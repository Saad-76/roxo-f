import React from "react";
import "./gamingNft.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import NFT1 from "../Assests/NFT1.png";
import NFT2 from "../Assests/NFT2.jpg";
import NFT3 from "../Assests/NFT3.png";
import NFT4 from "../Assests/NFT4.jpg";

const GamingNft = () => {
  const Rightscrol = () => {
    document.getElementById("nftscroll").scrollLeft += 430;
  };
  const Leftscrol = () => {
    document.getElementById("nftscroll").scrollLeft -= 430;
  };
  return (
    <>
      <div className="gaming-nft-outer gaming-section-pad">
        <div className="gaming_nft">
          <div className="gaming-nft-heading">
       
            <h3>Gaming NFTs</h3>
          </div>

          <div className="gaming-nft-outer-pad">
            <div className="col-md-12 gaming-nft-inner-flex">
              {/* <div className="gaming-nft-inner"> */}
              <div className="col-md-4 gaming-inner-left">
                <img
                  src={NFT1}
                  alt=""
                  height="150px"
                  width="150px"
                  style={{ borderRadius: "12px" }}
                />
                <h6>Lorem Ipsm</h6>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="col-md-8">
                <div className="gaming-inner-flex-images">
                  <img
                    src={NFT1}
                    alt=""
                    height="100px"
                    width="100px"
                    style={{ borderRadius: "12px" }}
                  />
                  <img
                    src={NFT1}
                    alt=""
                    height="100px"
                    width="100px"
                    style={{ borderRadius: "12px" }}
                  />
                  <img
                    src={NFT1}
                    alt=""
                    height="100px"
                    width="100px"
                    style={{ borderRadius: "12px" }}
                  />
                  <img
                    src={NFT1}
                    alt=""
                    height="100px"
                    width="100px"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <div>
                  <h3 className="gaming-inner-heading">Lorem Ipsm</h3>
                </div>
                <div className="gaming-nft-link-buttons">
                  <button className="gaming-nft-link-button-inner">
                    Link1
                  </button>
                  <button className="gaming-nft-link-button-inner">
                    Link2
                  </button>
                  <button className="gaming-nft-link-button-inner">
                    Link3
                  </button>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* -------------gaming-nft-slider--------- */}
        <div className="gaming-nft-slider-outer">
          <div className="gaming-nft-slider" id="nftscroll">
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
export default GamingNft;
