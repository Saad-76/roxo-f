import React from "react";

import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import glowCoin from "../Assests/Token Coin.png";
import { useHistory } from "react-router-dom";

// -------------------------------------
import { ethers, utils } from "ethers";
import { AiOutlineClose } from "react-icons/ai";
// --------------------------------------------

import TokenCoin from "../Assests/Token Coin.png";
import Coin from "../Assests/web roxo/wallet/Binance.png";
import MetaMask from "../Assests/web roxo/wallet/MetaMask.jpeg";

import "./buyForm.css";

const BuyForm = () => {
  // --------------------
  const [account, setAccount] = useState({});

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("please install MetaMask");
      return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const ens = await provider.lookupAddress(address);
      // const avatar = await provider.getAvatar(ens);

      setAccount({
        address,
        // avatar,
        ens,
      });

      console.log("address", address);
    } catch (error) {
      console.log(error);
    }
  };
  // -------

  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const routePath = useLocation();

  const onTop = () => {
    window.scrollTo(0, 4);
  };

  useEffect(() => {
    onTop();
  }, [routePath]);

  const handleChange = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setTimeout(() => {
      handleChange();
    }, 5000);
  }, []);

  return (
    <>
      <Header />
      {showModal && (
        <div className="col-md-12 modal-content-style">
          <div class="modal-dialog ">
            <div class="modal-content wallet-modal-border">
              <div class="">
                <div className="wallet-colose-btn" onClick={handleClose}>
                  <h3 className="wallet-heading-style">Connect Wallet</h3>

                  <AiOutlineClose
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    size={30}
                    type="button"
                  />
                </div>
                <div className="">
                  {account.address ? (
                    <p color="black">
                      MetaMask wallet address is : {account.address}
                    </p>
                  ) : (
                    <div className="wallet-button-background">
                      <h6 type="button" onClick={connectWallet} className="">
                        Connect MetaMask
                      </h6>
                      <img
                        src={MetaMask}
                        alt=""
                        height="50px"
                        width="50px"
                        style={{ borderRadius: "50px" }}
                      />
                    </div>
                  )}
                </div>
                {/* <div className="wallet-button-background">
                  <h6 type="button">Connect ROXO Wallet</h6>
                  <img src={TokenCoin} alt="" height="50px" width="50px" />
                </div>
                <div className="wallet-button-background">
                  <h6 type="button">Connect Safepal</h6>
                  <img src={TokenCoin} alt="" height="50px" width="50px" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="buy-form-style">
        <div className="col-md-12 sell-main-heading">
          <h3>
            BUY <span className="color-sell"> TOKENS </span>
          </h3>
        </div>

        <div className="col-md-12 buy-card-main">
          <div className="col-md-4"></div>
          <div className="col-md-3">
            <div className="buy-card-body">
              <div className="buy-card-body-flex">
                <div className="col-md-12 sell-button-main">
                  <div>
                    <img src={TokenCoin} alt="" height="50px" width="50px" />
                  </div>
                  <div>
                    <h3 style={{ textAlign: "center" }}>Buy</h3>
                    <p>Trade tokens in an instant</p>
                  </div>
                  <div className="buy-hidden-image">
                    <img src={Coin} alt="" height="30px" width="30px" />
                  </div>
                </div>
                <hr
                  className="section-divider-sellform"
                  style={{ marginTop: "1%" }}
                />
                <div className="col-md-12 input-display-sellform">
                  <label>
                    <img src={Coin} alt="" height="30px" width="30px" />
                    BNB
                  </label>
                  <input
                    className="input-field-sellfrom-inner"
                    type="number"
                    min="0"
                    max="10000000"
                    placeholder="Enter Amount "
                  />
                </div>
                <div className="col-md-12 input-display-sellform ">
                  <label>
                    <img src={TokenCoin} alt="" height="30px" width="30px" />
                    ROXO
                  </label>
                  <input
                    className="input-field-sellfrom-inner"
                    type="number"
                    min="0"
                    max="10000000"
                    // placeholder="Enter Amount "
                  />
                </div>
                {/* <hr
                className="section-divider-sellform"
                style={{ marginTop: "14%" }}
              /> */}
                <div className="col-md-12 trading-fee-flex">
                  <div className="col-md-6">
                    <p>Slipage Tolerance</p>
                  </div>
                  <div className="col-md-6 trading-fee-value">
                    <p>0.5%</p>
                  </div>
                </div>

                <div className="col-md-12 swap-button-outer">
                  <button className="swap-button-inner">Swap</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default BuyForm;
