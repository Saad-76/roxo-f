import React from "react";
import Footer from "../HomePage/footer";
import Header from "../HomePage/header";
import { AiOutlineShoppingCart } from "react-icons/ai";
import NFT1 from "../Assests/NFT1.png";
import TokenCoin from "../Assests/Token Coin.png";
import "./marketProductDetail.css";

const MarketProductDetail = () => {
  return (
    <div>
      <Header />
      <div className="market-product-detail row">
        <div className="card  col-md-3">
          <div>
            <p>Lorem</p>
          </div>
          <div className="crd-head"></div>
          <center>
            <button className="crd_btn">ID: 133856</button>
          </center>
          <center>
            <div className="btm_txt_crd">BUSD: 15,17</div>
          </center>
          <div className="bottom_crd"></div>
        </div>
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
                <img src={NFT1} alt="nft1" height="100px" width="100px" />
                <img
                  className="img-resp-margin"
                  src={NFT1}
                  alt="nft1"
                  height="100px"
                  width="100px"
                />
                <img
                  className="img-resp-margin"
                  src={NFT1}
                  alt="nft1"
                  height="100px"
                  width="100px"
                />
                <img
                  className="img-resp-margin"
                  src={NFT1}
                  alt="nft1"
                  height="100px"
                  width="100px"
                />
                <img
                  className="img-resp-margin"
                  src={NFT1}
                  alt="nft1"
                  height="100px"
                  width="100px"
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
