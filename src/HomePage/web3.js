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
  //Approve
  let usdAddress = await getAddress();
  const contractInstance = new ethers.Contract(
    usdAddress,
    contractInterface.ABI,
    provider.getSigner()
  );

  contractInstance
    .approve(CONTRACT_ADDRESS, ethers.utils.parseEther(amountVal))
    .then((res) => {
      const contractB = new ethers.Contract(
        CONTRACT_ADDRESS,
        contractInterface.ABI,
        provider.getSigner()
      );
      contractB
        .buy()
        .then((res) => {})
        .catch((error) => {
          console.log(ethers.utils.toUtf8String(Object.values(error.body)));
        });
    })
    .catch((error) => {
      console.log(ethers.utils.toUtf8String(Object.values(error.body)));
    });
  //Buy Now
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
