import React, { useState, useEffect } from "react";
import { ethers, utils } from "ethers";
import "./metaMask.css"





const MetaMaskLoginData=()=> {



  
  const [account, setAccount] = useState({});



const connectWallet =async ()=>{
  if (!window.ethereum) {
    alert('please install MetaMask');
    return;
  }

try {
  await window.ethereum.request({ method: 'eth_requestAccounts' });

  const provider =  new ethers.providers.Web3Provider(window.ethereum);
 
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  const ens = await provider.lookupAddress(address);
  // const avatar = await provider.getAvatar(ens);

  setAccount({
    address,
    // avatar,
    ens
  });

  console.log('address', address)
} catch (error) {
  console.log(error)
}}



  return (
<>
{account.address ? (
    <p color='black'> MetaMask wallet address is : {account.address}</p>
  ) : (
    <button onClick={connectWallet}>Connect wallet</button>
  )}

</>
    
  );
}

export default MetaMaskLoginData;
