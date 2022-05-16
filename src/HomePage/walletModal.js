import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

import TokenCoin from "../Assests/Token Coin.png";
import MetaMask from "../Assests/web roxo/wallet/MetaMask.png";
import { connectWallet } from "./web3";
import "./walletModal.css";

const WalletModal = () => {
  const walletConnection = async () => {
    let cw = await connectWallet();
    localStorage.setItem("wallet_address", cw);
    console.log(cw, "cw");
    return cw;
  };

  return (
    <>
      <div
        class="modal fade"
        id="walletModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content wallet-modal-border">
            <div class="modal-body modal-outer-style">
              <div className="wallet-colose-btn d-flex">
                <h3 className="wallet-heading-style">Connect Wallet</h3>

                <AiOutlineClose
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  size={30}
                  type="button"
                />
              </div>
              <div className="">
                <div
                  className="wallet-button-background "
                  type="button"
                  onClick={walletConnection}
                >
                  <h4 className="">MetaMask</h4>
                  <img
                    src={MetaMask}
                    alt=""
                    height="50px"
                    width="50px"
                    style={{ borderRadius: "50px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WalletModal;
