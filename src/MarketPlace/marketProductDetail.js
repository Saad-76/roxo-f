import { React, useState } from "react";
import Footer from "../HomePage/footer";
import Header from "../HomePage/header";
import { AiOutlineShoppingCart } from "react-icons/ai";
import NFT1 from "../Assests/NFT1.png";
import NFT2 from "../Assests/NFT2.jpg";
import NFT3 from "../Assests/NFT3.png";
import NFT4 from "../Assests/NFT4.jpg";

import TokenCoin from "../Assests/Token Coin.png";
import "./marketProductDetail.css";

const MarketProductDetail = () => {
  const [nftOne, setNftOne] = useState(true);
  const [nftTwo, setNftTwo] = useState(false);
  const [nftThree, setNftThree] = useState(false);
  const [nftFour, setNftFour] = useState(false);
  const [nftFive, setNftFive] = useState(false);

  const handleNftOne = () => {
    setNftOne(true);
    setNftTwo(false);
    setNftThree(false);
    setNftFour(false);
    setNftFive(false);
  };
  const handleNftTwo = () => {
    setNftOne(false);
    setNftTwo(true);
    setNftThree(false);
    setNftFour(false);
    setNftFive(false);
  };
  const handleNftThree = () => {
    setNftOne(false);
    setNftTwo(false);
    setNftThree(true);
    setNftFour(false);
    setNftFive(false);
  };
  const handleNftFour = () => {
    setNftOne(false);
    setNftTwo(false);
    setNftThree(false);
    setNftFour(true);
    setNftFive(false);
  };
  const handleNftFive = () => {
    setNftOne(false);
    setNftTwo(false);
    setNftThree(false);
    setNftFour(false);
    setNftFive(true);
  };

  return (
    <div>
      <Header />
      <div className="market-product-detail row">
        {nftOne && (
          <div className="card  col-md-3">
            <div>
              <p>Lorem</p>
            </div>
            <div className="crd-head">
              <img
                src={NFT1}
                alt=""
                height="284px"
                width="250px"
                style={{ borderRadius: "12px" }}
              />
            </div>
            <center>
              <button className="crd_btn">ID: 133856</button>
            </center>
            <center>
              <div className="btm_txt_crd">BUSD: 15,17</div>
            </center>
            <div className="bottom_crd"></div>
          </div>
        )}
        {nftTwo && (
          <div className="card  col-md-3">
            <div>
              <p>Lorem</p>
            </div>
            <div className="crd-head">
              <img
                src={NFT2}
                alt=""
                height="284px"
                width="250px"
                style={{ borderRadius: "12px" }}
              />
            </div>
            <center>
              <button className="crd_btn">ID: 133856</button>
            </center>
            <center>
              <div className="btm_txt_crd">BUSD: 15,17</div>
            </center>
            <div className="bottom_crd"></div>
          </div>
        )}
        {nftThree && (
          <div className="card  col-md-3">
            <div>
              <p>Lorem</p>
            </div>
            <div className="crd-head">
              <img
                src={NFT3}
                alt=""
                height="284px"
                width="250px"
                style={{ borderRadius: "12px" }}
              />
            </div>
            <center>
              <button className="crd_btn">ID: 133856</button>
            </center>
            <center>
              <div className="btm_txt_crd">BUSD: 15,17</div>
            </center>
            <div className="bottom_crd"></div>
          </div>
        )}
        {nftFour && (
          <div className="card  col-md-3">
            <div>
              <p>Lorem</p>
            </div>
            <div className="crd-head">
              <img
                src={NFT4}
                alt=""
                height="284px"
                width="250px"
                style={{ borderRadius: "12px" }}
              />
            </div>
            <center>
              <button className="crd_btn">ID: 133856</button>
            </center>
            <center>
              <div className="btm_txt_crd">BUSD: 15,17</div>
            </center>
            <div className="bottom_crd"></div>
          </div>
        )}
        {nftFive && (
          <div className="card  col-md-3">
            <div>
              <p>Lorem</p>
            </div>
            <div className="crd-head">
              <img
                src={NFT1}
                alt=""
                height="284px"
                width="250px"
                style={{ borderRadius: "12px" }}
              />
            </div>
            <center>
              <button className="crd_btn">ID: 133856</button>
            </center>
            <center>
              <div className="btm_txt_crd">BUSD: 15,17</div>
            </center>
            <div className="bottom_crd"></div>
          </div>
        )}

        <div className="col-md-8">
          <div className="market-product-detail-background">
            <div className="price-grid">
              <h4>Price</h4>
              <p>
                <AiOutlineShoppingCart size={30} />
              </p>
            </div>
            <div className="coin-button-outer">
              <button className="product-detail-price">
                <img src={TokenCoin} alt="token" height="50px" width="50px" />{" "}
                3,999
              </button>
            </div>

            <div className="market-purchase-outer">
              <button
                className="market-purchase-button-inner"
                data-bs-toggle="modal"
                data-bs-target="#confirmModal"
              >
                Purchase
              </button>
              <button className="market-add-button-inner">Add to Cart</button>
            </div>
            <div className="nft">
              <div className="market-detail-bottom-outer">
                <img
                  src={NFT1}
                  alt="nft1"
                  height="100px"
                  width="100px"
                  onClick={handleNftOne}
                />
                <img
                  className="img-resp-margin"
                  src={NFT2}
                  alt="nft1"
                  height="100px"
                  width="100px"
                  onClick={handleNftTwo}
                />
                <img
                  className="img-resp-margin"
                  src={NFT3}
                  alt="nft1"
                  height="100px"
                  width="100px"
                  onClick={handleNftThree}
                />
                <img
                  className="img-resp-margin"
                  src={NFT4}
                  alt="nft1"
                  height="100px"
                  width="100px"
                  onClick={handleNftFour}
                />
                <img
                  className="img-resp-margin"
                  src={NFT1}
                  alt="nft1"
                  height="100px"
                  width="100px"
                  onClick={handleNftFive}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------modal code-------------------- */}
      <div
        class="modal fade"
        id="confirmModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <h6 className="confirm-text">
                Confirm to Purchase for 3,999 ROXO?
              </h6>
              <div className="confirm-modal-outer">
                <button className="market-cancel-inner" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button className="market-confirm-inner">Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MarketProductDetail;
