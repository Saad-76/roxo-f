import React, { useState, useEffect } from "react";
import { ethers, utils } from "ethers";
import { AiOutlineClose } from "react-icons/ai";

import TokenCoin from "../Assests/Token Coin.png";
import MetaMask from "../Assests/web roxo/wallet/MetaMask.png";
import "./walletModal.css";

const WalletModal = () => {
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
                {account.address ? (
                  <p color="black">
                    MetaMask wallet address is : {account.address}
                  </p>
                ) : (
                  <div className="wallet-button-background " type="button" onClick={connectWallet} >
                    <h4 className="">
                      MetaMask
                    </h4>
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
    </>
  );
};
export default WalletModal;
