import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import CharacterMarket from "../Assests/marketPlace/CharacterMarket.png";
import FrameMarket from "../Assests/marketPlace/FrameMarket.png";
import MarketProductModal from "./productModal";
import "./marketProduct.css";

const MarketProduct = () => {
  return (
  
    <>
      <div className="card-row">
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
          <div className="button-outer-marketplace">
            <button data-bs-toggle="modal" data-bs-target="#exampleModal">
              Buy
            </button>
          </div>
        </div>

        {/* ----------------designed  card------- */}
        <div className="card  col-md-3">
          {/* <div>
            <p>DESIHNED</p>
          </div> */}
          <div className="">
            <img
              className="frame-image"
              src={FrameMarket}
              alt=""
              width="360px"
            />
            <img
              className="character-image"
              src={CharacterMarket}
              alt=""
              height="350px"
              width="250px"
            />
          </div>

          {/* <div className="button-outer-marketplace">
            <button data-bs-toggle="modal" data-bs-target="#exampleModal">
              Buy
            </button>
          </div> */}
        </div>
        {/* ------------------------------------------------------------------------ */}
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

        <div className="card  col-md-3">
          {" "}
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
        <div className="card  col-md-3">
          {" "}
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
        <div className="card  col-md-3">
          {" "}
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
        <div className="card  col-md-3">
          {" "}
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
        <div className="card  col-md-3">
          {" "}
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
        <div className="card  col-md-3">
          {" "}
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
      </div>
      <MarketProductModal />
    </>
  );
};
export default MarketProduct;
