import React, { useState, useEffect } from "react";
import { ethers, utils } from "ethers";
import { AiOutlineClose } from "react-icons/ai";
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
          <div class="modal-content">
            <div class="modal-body">
              {/* <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> */}
              <div className="wallet-colose-btn">
              <AiOutlineClose
                data-bs-dismiss="modal"
                aria-label="Close"
                size={30}
                type="button"
              />
              </div>
              <h3 className="wallet-heading-style">Connect MetaMask</h3>
              <div className="connect-wallet-background">
                {account.address ? (
                  <p color="black">
                    {" "}
                    MetaMask wallet address is : {account.address}
                  </p>
                ) : (
                  <button
                    onClick={connectWallet}
                    className="wallet-button-style-inner"
                  >
                    Connect wallet
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WalletModal;