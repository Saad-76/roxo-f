import React from "react";
import "./tokenBalance.css";
import RoxoCoin from "../Assests/3.png";
import NftDashboard from "../Assests/NftDashboard.png";
import Dashboard from "../Assests/Dashboard.png";
import BuyMore from "../Assests/BuyMore.png";
import Convert from "../Assests/Convert.png";
import WithDraw from "../Assests/WithDraw.png";
import Deposit from "../Assests/Deposit.png";
import GameCoin from "../Assests/GameCoin.png";

const TokenBalance = () => {
  return (
    <>
      <div className="col-md-12 balance-style">
        <div className="col-md-4 dashboard-sidebar">
          <div>
            <div className="balance-dashboard">
              <img src={Dashboard} alt="game" width="40px" height="40px" />
              <button className="dashboard-heading">Dashboard</button>
            </div>
          </div>
          <div className="nft-dashboard">
            <img src={NftDashboard} alt="game" width="40px" height="40px" />
            <button className="nft-heading">NFTs</button>
          </div>
          <div className="horizintal-line-style" />
          <h6 className="balance-roxo-heading"> ROXO Token</h6>
          <div className="horizintal-line-Roxotoken-botttom" />

          <div className="buy-more">
            <img src={BuyMore} width="40px" height="40px" />
            <button className="buy-more-heading">Buy More</button>
          </div>
          <div className="deposit">
            <img src={Deposit} width="40px" height="40px" />
            <button
              className="deposit-heading"
              data-bs-toggle="modal"
              data-bs-target="#DepositeModal"
            >
              Deposit
            </button>
          </div>
          <div className="with-draw">
            <img src={WithDraw} width="40px" height="40px" />
            <button
              className="with-draw-heading"
              data-bs-toggle="modal"
              data-bs-target="#WithDrawModal"
            >
              With Draw
            </button>
          </div>

          <div className="convert">
            <img src={Convert} width="40px" height="40px" />
            <button
              className="convert-heading"
              data-bs-toggle="modal"
              data-bs-target="#convertModal"
            >
              Convert
            </button>
          </div>
        </div>

        <div className="col-md-4  ">
          <div className=" balance-firstCard-style">
            <div className="balance-firstCard-background">
              <div className="firstCard-backColor">
                <div className="balance-firstCard-inner">
                  <img src={RoxoCoin} alt="roxo" width="100px" height="100px" />
                  <p>
                    <span className="token-main-headings"> Token Balance </span>
                    <br />
                    <span className="small-size-words"> 17832.12 ROXO </span>
                  </p>
                </div>
                <p className="token-valueIn">
                  <span className="token-sub-headings"> Token value in </span>
                </p>
                <div className="token-value">
                  <span className="small-size-words">
                 
                    <p>
                      3223
                      <br />
                      USD
                    </p>
                  </span>
                  <span className="small-size-words">
                 <p className="ETH-style">
                      0.731
                      <br />
                      ETH
                    </p>
                  </span>
                  <span className="small-size-words">
             
                    <p className="BTC-style">
                      0.12231
                      <br />
                      BTC
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
 

          {/* ------------------Third-Cardd---------------- */}
          <div className="thirdCard-main">
            <div className="third-card-set">
              <div className="thirdCard-backColor">
                <span className="token-main-headings  nft-balance-heading">
         
                  <p>NFTs balance</p>
                </span>
                <div className="balance-thirdCard-data">
                  <p>
                    <span className="token-sub-headings">
         
                      Total NFTs OWN:{" "}
                    </span>
                  </p>
                  <span className="small-size-words">

                    <p>300</p>{" "}
                  </span>
                </div>
                <div className="balance-thirdCard-data">
                  <p>

                    <span className="token-sub-headings"> Total value: </span>
                  </p>
                  <span className="small-size-words">

                    <p>
                      2.31 ETH <br /> ($8733.12)
                    </p>
                  </span>
                  
                </div>
                      <div className="thirdCard-button">
            <button className="thirdCard-button-style">
              <b>With Draw</b>
            </button>
          </div>
              </div>
              
            </div>
          </div>
    
        </div>

        <div className="col-md-4">
          <div className="balance-secondCard-background">
            <div className="secondCard-backColor">
              <div className="hasteKing-button">
                <p className="hasteKing-button-button">
                  <b> Haste King</b>{" "}
                </p>
              </div>
              <div className="balance-secondCard-inner">
                <img src={GameCoin} alt="roxo" width="80px" height="60px" />
                <p>
                  <span className="token-main-headings"> Game Coins </span>
                  <br />
                  <span className="small-size-words"> 17832.12 ROXO </span>
                </p>
                <button className="convert-button-secondCard"     data-bs-toggle="modal"
              data-bs-target="#convertModal">
                  <b>Convert</b>
                </button>
              </div>
              <div className="global-rank">
                <p>
                  {" "}
                  <span className="token-sub-headings">Global Rank </span>
                </p>
                <p>3</p>
              </div>
              <div className="balance-stats-button">
                <p className="balance-stats-button-button"> Stats</p>
              </div>
              <div className="stat-fields">
                <p>
                  {" "}
                  <span className="token-sub-headings">Total Score:</span>
                </p>
                <span className="small-size-words">
                  {" "}
                  <p>27482</p>{" "}
                </span>
              </div>

              <div className="stat-fields">
                <p>
                  <span className="token-sub-headings">Total Races:</span>
                </p>
                <span className="small-size-words">
                  {" "}
                  <p>1322</p>{" "}
                </span>
              </div>

              <div className="stat-fields">
                <p>
                  {" "}
                  <span className="token-sub-headings">Race Wons: </span>
                </p>
                <span className="small-size-words">
                  {" "}
                  <p>1933</p>{" "}
                </span>
              </div>

              <div className="stat-fields">
                <p>
                  {" "}
                  <span className="token-sub-headings">Race Loses: </span>
                </p>
                <span className="small-size-words">
                  {" "}
                  <p>339</p>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenBalance;
