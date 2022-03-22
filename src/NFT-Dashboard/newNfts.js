import React from 'react'
import NFT1 from "../Assests/NFT1.png"
import NFT2 from "../Assests/NFT2.jpg"
import NFT3 from "../Assests/NFT3.png"
import NFT4 from "../Assests/NFT4.jpg"
import "./newNfts.css"

const  NewNfts=()=> {
    return (
        <div>
             <div className="welcome-background-color">
      <div className="newNft-container">

        <h3 className="welcome-heading">NEW NFTs</h3>
        <div className="col-md-12 welcome-images-style">
          <div className="col-md-3 welcome-images-inner ">
            <img  src={NFT1} alt="nft" height="200px" width="200px" />
          </div>
          <div className="col-md-3 welcome-images-inner">
            <img src={NFT2} alt="nft" height="200px" width="200px" />
          </div>
          <div className="col-md-3 welcome-images-inner">
            <img src={NFT3} alt="nft" height="200px" width="200px" />
          </div>
          <div className="col-md-3 welcome-images-inner">
            <img src={NFT4} alt="nft" height="200px" width="200px" />
          </div>
          
        </div>
        <div className="newNft-view-button-outer">
      <button className="newNft-view-button-inner" >View All</button>
</div>
      </div>

      </div>
 
        </div>
    )
}

export default NewNfts;
