import { React, useState } from "react";
import "./gamingNft.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import NFT1 from "../Assests/NFT1.png";
import NFT2 from "../Assests/NFT2.jpg";
import NFT3 from "../Assests/NFT3.png";
import NFT4 from "../Assests/NFT4.jpg";

const GamingNft = () => {
  const [nftOne, setNftOne] = useState(true);
  const [nftTwo, setNftTwo] = useState(false);
  const [nftThree, setNftThree] = useState(false);
  const [nftFour, setNftFour] = useState(false);
  const [nftFive, setNftFive] = useState(false);
  const [nftSix, setNftSix] = useState(false);

  const handleNftOne = () => {
    setNftOne(true);
    setNftTwo(false);
    setNftThree(false);
    setNftFour(false);
    setNftFive(false);
    setNftSix(false);
  };

  const handleNftTwo = () => {
    setNftOne(false);
    setNftTwo(true);
    setNftThree(false);
    setNftFour(false);
    setNftFive(false);
    setNftSix(false);
  };

  const handleNftThree = () => {
    setNftOne(false);
    setNftTwo(false);
    setNftThree(true);
    setNftFour(false);
    setNftFive(false);
    setNftSix(false);
  };

  const handleNftFour = () => {
    setNftOne(false);
    setNftTwo(false);
    setNftThree(false);
    setNftFour(true);
    setNftFive(false);
    setNftSix(false);
  };

  const handleNftFive = () => {
    setNftOne(false);
    setNftTwo(false);
    setNftThree(false);
    setNftFour(false);
    setNftFive(true);
    setNftSix(false);
  };

  const handleNftSix = () => {
    setNftOne(false);
    setNftTwo(false);
    setNftThree(false);
    setNftFour(false);
    setNftFive(false);
    setNftSix(true);
  };

  const Rightscrol = () => {
    document.getElementById("nftscroll").scrollLeft += 430;
  };
  const Leftscrol = () => {
    document.getElementById("nftscroll").scrollLeft -= 430;
  };
  return (
    <>
      <div className="gaming-nft-outer gaming-section-pad">
        <div className="gaming-nft-heading">
          <h1 className="gaming-nft-heading-inner">GAMING NFTs</h1>
        </div>
        <div className="gaming_nft">
          <div className="gaming-nft-outer-pad">
            <div className="col-md-12 gaming-nft-inner-flex">
              {/* <div className="gaming-nft-inner"> */}
              {nftOne && (
                <div className="col-md-4 gaming-inner-left">
                  <img
                    src={NFT1}
                    alt=""
                    height="150px"
                    width="150px"
                    style={{ borderRadius: "12px" }}
                  />
                  <h6>Lorem Ipsm 1</h6>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              )}

              {nftTwo && (
                <div className="col-md-4 gaming-inner-left">
                  <img
                    src={NFT2}
                    alt=""
                    height="150px"
                    width="150px"
                    style={{ borderRadius: "12px" }}
                  />
                  <h6>Lorem Ipsm 2</h6>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              )}
              {nftThree && (
                <div className="col-md-4 gaming-inner-left">
                  <img
                    src={NFT3}
                    alt=""
                    height="150px"
                    width="150px"
                    style={{ borderRadius: "12px" }}
                  />
                  <h6>Lorem Ipsm 3</h6>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              )}
              {nftFour && (
                <div className="col-md-4 gaming-inner-left">
                  <img
                    src={NFT4}
                    alt=""
                    height="150px"
                    width="150px"
                    style={{ borderRadius: "12px" }}
                  />
                  <h6>Lorem Ipsm 4</h6>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              )}
              {nftFive && (
                <div className="col-md-4 gaming-inner-left">
                  <img
                    src={NFT1}
                    alt=""
                    height="150px"
                    width="150px"
                    style={{ borderRadius: "12px" }}
                  />
                  <h6>Lorem Ipsm 5</h6>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              )}
              {nftSix && (
                <div className="col-md-4 gaming-inner-left">
                  <img
                    src={NFT1}
                    alt=""
                    height="150px"
                    width="150px"
                    style={{ borderRadius: "12px" }}
                  />
                  <h6>Lorem Ipsm 6</h6>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              )}

              <div className="col-md-8">
                <div className="gamingnft-detail-bottom-outer">
                  <img
                    className="gaming-nft-img-resp-margin"
                    src={NFT1}
                    alt="nft1"
                    height="100px"
                    width="100px"
                  />
                  <img
                    className="gaming-nft-img-resp-margin"
                    src={NFT1}
                    alt="nft1"
                    height="100px"
                    width="100px"
                  />
                  <img
                    className="gaming-nft-img-resp-margin"
                    src={NFT1}
                    alt="nft1"
                    height="100px"
                    width="100px"
                  />
                  <img
                    className="gaming-nft-img-resp-margin"
                    src={NFT1}
                    alt="nft1"
                    height="100px"
                    width="100px"
                  />
                  <img
                    className="gaming-nft-img-resp-margin"
                    src={NFT1}
                    alt="nft1"
                    height="100px"
                    width="100px"
                  />
                </div>
                <div>
                  <h3 className="gaming-inner-heading">Lorem Ipsm</h3>
                </div>
                <div className="gaming-nft-link-buttons">
                  <button className="gaming-nft-link-button-inner">Link</button>
                  {/* <button className="gaming-nft-link-button-inner">
                    Link2
                  </button>
                  <button className="gaming-nft-link-button-inner">
                    Link3
                  </button> */}
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
            <button onClick={Rightscrol} className="tes-btnSecond">
              <FaArrowRight size={22.5} />
            </button>
            <img
              onClick={handleNftOne}
              className="image-slider-game"
              src={NFT1}
              alt="nf"
              height="100px"
              width="100px"
            />
            <img
              onClick={handleNftTwo}
              className="image-slider-game"
              src={NFT2}
              alt="nf"
              height="100px"
              width="100px"
            />

            <img
              onClick={handleNftThree}
              className="image-slider-game"
              src={NFT3}
              alt="nf"
              height="100px"
              width="100px"
            />

            <img
              onClick={handleNftFour}
              className="image-slider-game"
              src={NFT4}
              alt="nf"
              height="100px"
              width="100px"
            />

            <img
              onClick={handleNftFive}
              className="image-slider-game"
              src={NFT1}
              alt="nf"
              height="100px"
              width="100px"
            />
            <img
              onClick={handleNftSix}
              className="image-slider-game"
              src={NFT2}
              alt="nf"
              height="100px"
              width="100px"
            />

            <img
              className="image-slider-game"
              src={NFT3}
              alt="nf"
              height="100px"
              width="100px"
            />

            <img
              className="image-slider-game"
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
