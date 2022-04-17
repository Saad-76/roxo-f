import { React, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import NftOnem from "../Assests/web roxo/characters nfts/1-main.jpg";
import NftOne1 from "../Assests/web roxo/characters nfts/1-1.jpg";
import NftOne2 from "../Assests/web roxo/characters nfts/1-2.jpg";
import NftOne3 from "../Assests/web roxo/characters nfts/1-3.jpg";

import NftTwom from "../Assests/web roxo/characters nfts/2-main.jpg";
import NftTwo1 from "../Assests/web roxo/characters nfts/2-1.jpg";
import NftTwo2 from "../Assests/web roxo/characters nfts/2-2.jpg";
import NftTwo3 from "../Assests/web roxo/characters nfts/2-3.jpg";

import NftThreem from "../Assests/web roxo/characters nfts/3-main.jpg";
import NftThree1 from "../Assests/web roxo/characters nfts/3-1.jpg";
import NftThree2 from "../Assests/web roxo/characters nfts/3-2.jpg";
import NftThree3 from "../Assests/web roxo/characters nfts/3-3.jpg";

import NftFourm from "../Assests/web roxo/characters nfts/4-main.jpg";
import NftFour1 from "../Assests/web roxo/characters nfts/4-1.jpg";
import NftFour2 from "../Assests/web roxo/characters nfts/4-2.jpg";
import NftFour3 from "../Assests/web roxo/characters nfts/4-3.jpg";

import NftFivem from "../Assests/web roxo/characters nfts/5-main.jpg";
import NftFive1 from "../Assests/web roxo/characters nfts/5-1.jpg";
import NftFive2 from "../Assests/web roxo/characters nfts/5-2.jpg";
import NftFive3 from "../Assests/web roxo/characters nfts/5-3.jpg";

import NftSixm from "../Assests/web roxo/characters nfts/ash-main.jpg";
import NftSix1 from "../Assests/web roxo/characters nfts/ash-1.jpg";
import NftSix2 from "../Assests/web roxo/characters nfts/ash-2.jpg";
import NftSix3 from "../Assests/web roxo/characters nfts/ash-3.jpg";

import NftSevenm from "../Assests/web roxo/characters nfts/Jen main.jpg";
import NftSeven1 from "../Assests/web roxo/characters nfts/jen-1.jpg";
import NftSeven2 from "../Assests/web roxo/characters nfts/jen-2.jpg";
import NftSeven3 from "../Assests/web roxo/characters nfts/jen-3.jpg";

import NftEightm from "../Assests/web roxo/characters nfts/lilli-main.jpg";
import NftEight1 from "../Assests/web roxo/characters nfts/lilli-1.jpg";
import NftEight2 from "../Assests/web roxo/characters nfts/lilli-2.jpg";
import NftEight3 from "../Assests/web roxo/characters nfts/lilli-3.jpg";

import "./gamingNft.css";

const GamingNft = () => {
  const [nftOne, setNftOne] = useState(true);
  const [nftTwo, setNftTwo] = useState(false);
  const [nftThree, setNftThree] = useState(false);
  const [nftFour, setNftFour] = useState(false);
  const [nftFive, setNftFive] = useState(false);
  const [nftSix, setNftSix] = useState(false);
  const [nftSeven, setNftSeven] = useState(false);
  const [nftEight, setNftEight] = useState(false);

  const handleNftOne = () => {
    setNftOne(true);
    setNftTwo(false);
    setNftThree(false);
    setNftFour(false);
    setNftFive(false);
    setNftSix(false);
    setNftSeven(false);
    setNftEight(false);
  };

  const handleNftTwo = () => {
    setNftOne(false);
    setNftTwo(true);
    setNftThree(false);
    setNftFour(false);
    setNftFive(false);
    setNftSix(false);
    setNftSeven(false);
    setNftEight(false);
  };

  const handleNftThree = () => {
    setNftOne(false);
    setNftTwo(false);
    setNftThree(true);
    setNftFour(false);
    setNftFive(false);
    setNftSix(false);
    setNftSeven(false);
    setNftEight(false);
  };

  const handleNftFour = () => {
    setNftOne(false);
    setNftTwo(false);
    setNftThree(false);
    setNftFour(true);
    setNftFive(false);
    setNftSix(false);
    setNftSeven(false);
    setNftEight(false);
  };

  const handleNftFive = () => {
    setNftOne(false);
    setNftTwo(false);
    setNftThree(false);
    setNftFour(false);
    setNftFive(true);
    setNftSix(false);
    setNftSeven(false);
    setNftEight(false);
  };

  const handleNftSix = () => {
    setNftOne(false);
    setNftTwo(false);
    setNftThree(false);
    setNftFour(false);
    setNftFive(false);
    setNftSix(true);
    setNftSeven(false);
    setNftEight(false);
  };

  const handleNftSeven = () => {
    setNftOne(false);
    setNftTwo(false);
    setNftThree(false);
    setNftFour(false);
    setNftFive(false);
    setNftSix(false);
    setNftSeven(true);
    setNftEight(false);
  };

  const handleNftEight = () => {
    setNftOne(false);
    setNftTwo(false);
    setNftThree(false);
    setNftFour(false);
    setNftFive(false);
    setNftSix(false);
    setNftSeven(false);
    setNftEight(true);
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
              {nftOne && (
                <div className="col-md-4 gaming-inner-left">
                  <img
                    src={NftOnem}
                    alt=""
                    className="main-image-style"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
              )}

              {nftTwo && (
                <div className="col-md-4 gaming-inner-left">
                  <img
                    src={NftTwom}
                    alt=""
                    className="main-image-style"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
              )}
              {nftThree && (
                <div className="col-md-4 gaming-inner-left">
                  <img
                    src={NftThreem}
                    alt=""
                    className="main-image-style"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
              )}
              {nftFour && (
                <div className="col-md-4 gaming-inner-left">
                  <img
                    src={NftFourm}
                    alt=""
                    className="main-image-style"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
              )}
              {nftFive && (
                <div className="col-md-4 gaming-inner-left">
                  <img
                    src={NftFivem}
                    alt=""
                    className="main-image-style"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
              )}
              {nftSix && (
                <div className="col-md-4 gaming-inner-left">
                  <img
                    src={NftSixm}
                    alt=""
                    className="main-image-style"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
              )}
              {nftSeven && (
                <div className="col-md-4 gaming-inner-left">
                  <img
                    src={NftSevenm}
                    alt=""
                    className="main-image-style"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
              )}
              {nftEight && (
                <div className="col-md-4 gaming-inner-left">
                  <img
                    src={NftEightm}
                    alt=""
                    className="main-image-style"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
              )}
              {/* ---------------------------sub-images(variants)----------- */}
              {nftOne && (
                <div className="col-md-8">
                  <div className="gamingnft-detail-bottom-outer">
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftOne1}
                      alt="nft1"
                    />
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftOne2}
                      alt="nft1"
                    />
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftOne3}
                      alt="nft1"
                    />
                  </div>
                  <div>
                    <h3 className="gaming-inner-heading">ROXO NFT HUB</h3>
                  </div>
                  <div className="gaming-nft-link-buttons">
                    <button className="gaming-nft-link-button-inner">
                   Buy
                    </button>
                  </div>
                </div>
              )}

              {nftTwo && (
                <div className="col-md-8">
                  <div className="gamingnft-detail-bottom-outer">
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftTwo1}
                      alt="nft1"
                    />
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftTwo2}
                      alt="nft1"
                    />
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftTwo3}
                      alt="nft1"
                    />
                  </div>
                  <div>
                    <h3 className="gaming-inner-heading">ROXO NFT HUB</h3>
                  </div>
                  <div className="gaming-nft-link-buttons">
                    <button className="gaming-nft-link-button-inner">
                   Buy
                    </button>
                  </div>
                </div>
              )}

              {nftThree && (
                <div className="col-md-8">
                  <div className="gamingnft-detail-bottom-outer">
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftThree1}
                      alt="nft1"
                    />
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftThree2}
                      alt="nft1"
                    />
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftThree3}
                      alt="nft1"
                    />
                  </div>
                  <div>
                    <h3 className="gaming-inner-heading">ROXO NFT HUB</h3>
                  </div>
                  <div className="gaming-nft-link-buttons">
                    <button className="gaming-nft-link-button-inner">
                   Buy
                    </button>
                  </div>
                </div>
              )}

              {nftFour && (
                <div className="col-md-8">
                  <div className="gamingnft-detail-bottom-outer">
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftFour1}
                      alt="nft1"
                    />
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftFour2}
                      alt="nft1"
                    />
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftFour3}
                      alt="nft1"
                    />
                  </div>
                  <div>
                    <h3 className="gaming-inner-heading">ROXO NFT HUB</h3>
                  </div>
                  <div className="gaming-nft-link-buttons">
                    <button className="gaming-nft-link-button-inner">
                   Buy
                    </button>
                  </div>
                </div>
              )}

              {nftFive && (
                <div className="col-md-8">
                  <div className="gamingnft-detail-bottom-outer">
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftFive1}
                      alt="nft1"
                    />
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftFive2}
                      alt="nft1"
                    />
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftFive3}
                      alt="nft1"
                    />
                  </div>
                  <div>
                    <h3 className="gaming-inner-heading">ROXO NFT HUB</h3>
                  </div>
                  <div className="gaming-nft-link-buttons">
                    <button className="gaming-nft-link-button-inner">
                   Buy
                    </button>
                  </div>
                </div>
              )}

              {nftSix && (
                <div className="col-md-8">
                  <div className="gamingnft-detail-bottom-outer">
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftSix1}
                      alt="nft1"
                    />
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftSix2}
                      alt="nft1"
                    />
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftSix3}
                      alt="nft1"
                    />
                  </div>
                  <div>
                    <h3 className="gaming-inner-heading">ROXO NFT HUB</h3>
                  </div>
                  <div className="gaming-nft-link-buttons">
                    <button className="gaming-nft-link-button-inner">
                   Buy
                    </button>
                  </div>
                </div>
              )}

              {nftSeven && (
                <div className="col-md-8">
                  <div className="gamingnft-detail-bottom-outer">
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftSeven1}
                      alt="nft1"
                    />
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftSeven2}
                      alt="nft1"
                    />
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftSeven3}
                      alt="nft1"
                    />
                  </div>
                  <div>
                    <h3 className="gaming-inner-heading">ROXO NFT HUB</h3>
                  </div>
                  <div className="gaming-nft-link-buttons">
                    <button className="gaming-nft-link-button-inner">
                   Buy
                    </button>
                  </div>
                </div>
              )}

              {nftEight && (
                <div className="col-md-8">
                  <div className="gamingnft-detail-bottom-outer">
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftEight1}
                      alt="nft1"
                    />
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftEight2}
                      alt="nft1"
                    />
                    <img
                      className="gaming-nft-img-resp-margin variant-images-size"
                      src={NftEight3}
                      alt="nft1"
                    />
                  </div>
                  <div>
                    <h3 className="gaming-inner-heading">ROXO NFT HUB</h3>
                  </div>
                  <div className="gaming-nft-link-buttons">
                    <button className="gaming-nft-link-button-inner">
                   Buy
                    </button>
                  </div>
                </div>
              )}
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
              src={NftOnem}
              alt="nf"
              height="100px"
              width="100px"
            />
            <img
              onClick={handleNftTwo}
              className="image-slider-game"
              src={NftTwom}
              alt="nf"
              height="100px"
              width="100px"
            />

            <img
              onClick={handleNftThree}
              className="image-slider-game"
              src={NftThreem}
              alt="nf"
              height="100px"
              width="100px"
            />

            <img
              onClick={handleNftFour}
              className="image-slider-game"
              src={NftFourm}
              alt="nf"
              height="100px"
              width="100px"
            />

            <img
              onClick={handleNftFive}
              className="image-slider-game"
              src={NftFivem}
              alt="nf"
              height="100px"
              width="100px"
            />
            <img
              onClick={handleNftSix}
              className="image-slider-game"
              src={NftSixm}
              alt="nf"
              height="100px"
              width="100px"
            />

            <img
              onClick={handleNftSeven}
              className="image-slider-game"
              src={NftSevenm}
              alt="nf"
              height="100px"
              width="100px"
            />

            <img
              onClick={handleNftEight}
              className="image-slider-game"
              src={NftEightm}
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
