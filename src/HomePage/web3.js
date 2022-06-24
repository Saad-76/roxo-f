import { ethers } from "ethers";
import { useState } from "react";

import contractInterface from "../Contract/contract.json";
const { utils, BigNumber } = require("ethers");

export async function getPrice() {
  const contractInstance = new ethers.Contract(
    CONTRACT_ADDRESS,
    contractInterface.ABI,
    provider.getSigner()
  );

  let result = await contractInstance.basePrice();
  alert(utils.formatEther(BigNumber.from(result)));
}

const ethereum = window.ethereum;
const provider = new ethers.providers.Web3Provider(ethereum);
let signer = null;
export let address = null;
export let connected = false;

const connectWallet = async () => {
  if (!ethereum) {
    alert("please install MetaMask");
    return false;
  }

  try {
    await ethereum.request({ method: "eth_requestAccounts" });
    signer = provider.getSigner();
    address = await signer.getAddress();
    const ens = await provider.lookupAddress(address);
    connected = true;
    localStorage.setItem("complete_wallet_address", address);
    const walletAddress = address.substring(0, 4);
    const walletlastAddress = address.substring(
      address.length - 4,
      address.length
    );
    const addressConcat = walletAddress + "***" + walletlastAddress;

    return addressConcat;
  } catch (error) {
    alert(error);
    return false;
  }
};

const CONTRACT_ADDRESS = "0x775D514De9578e4501362ec1A46869964F8d66fb";

const test = async () => {
  const contractInstance = new ethers.Contract(
    contractInterface.Address,
    contractInterface.ABI,
    signer
  );
  let result = await contractInstance.usd();
  console.log(result);
};

export { test };
export { connectWallet };

export async function buyRoxo(amountVal) {
  let usdAddress = await getAddress();
  const contract = new ethers.Contract(
    usdAddress,
    contractInterface.ABI,
    provider.getSigner()
  );
  let approveRes = await contract.approve(
    CONTRACT_ADDRESS,
    ethers.utils.parseEther(amountVal)
  );
  console.log(approveRes, "approveRes");

  provider
    .waitForTransaction(approveRes.hash, 1, 300000)
    .then(async (result) => {
      const contractB = new ethers.Contract(
        CONTRACT_ADDRESS,
        contractInterface.ABI,
        provider.getSigner()
      );
      let Buyres = await contractB.buy();
      provider
        .waitForTransaction(Buyres.hash, 1, 300000)
        .then(async (Bresult) => {
          //Successfully Bought
          console.log("Successfully Bought ", Bresult);
        });
    });
}

export async function getAddress() {
  const contractInstance = new ethers.Contract(
    contractInterface.Address,
    contractInterface.ABI,
    provider.getSigner()
  );
  let result = await contractInstance.usd();
  console.log(result);
  return result;
}

export async function getBalance(_user) {
  const contractInstance = new ethers.Contract(
    contractInterface.Address,
    contractInterface.ABI,
    provider.getSigner()
  );
  let result = await contractInstance.balanceOf(_user);
  return utils.formatEther(BigNumber.from(result));
}

const chainId = "0x4";

export async function checkNetwork() {
  if (window.ethereum.networkVersion !== chainId) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainId }],
      });
    } catch (err) {
      console.log(err);
      // This error code indicates that the chain has not been added to MetaMask
      if (err.code === 4902) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainName: "Rinkeby Test Network",
              chainId: chainId,
              nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
              rpcUrls: ["https://rinkeby.infura.io/v3/"],
            },
          ],
        });
      }
    }
  }
}

export async function sellRoxo(amountVal) {
  //its a usd Value
  const contract = new ethers.Contract(
    contractInterface.Address,
    contractInterface.ABI,
    provider.getSigner()
  );
  let tx = await contract.sell(ethers.utils.parseEther(amountVal));
  provider.waitForTransaction(tx.hash, 1, 300000, () => {});
}

export async function ironSecure(_user) {
  const contract = new ethers.Contract(
    contractInterface.Address,
    contractInterface.ABI,
    provider.getSigner()
  );
  console.log(_user);
  let result = await contract._sercureBalances(_user);
  console.log(utils.formatEther(BigNumber.from(result)));
  return utils.formatEther(BigNumber.from(result));
}
