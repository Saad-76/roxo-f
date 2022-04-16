import React from "react";

import Header from "./header";
import Slider from "./slider";
import Vision from "./vision";
import Play from "./play";
import TesCards from "./TesCards";
import Login from "./login";
import SignUp from "./signUp";
import Footer from "./footer";
import OurCommunity from "./ourCommunity";
import GamingNft from "./gamingNft";
// import Partners from "./partners";
import Work from "./work";
import MileStoneStepper from "./mileStoneStepper";
import WalletModal from "./walletModal";
import "./homePage.css";
import Team from "./team";

const HomePage = () => {
  return (
    <div className="background-color-main  " style={{ overflowX: "hidden" }}>
      <Header />
      <SignUp />
      <Login />
      <Slider />
      <TesCards />
      <GamingNft />
      <WalletModal />
      <MileStoneStepper />
      <Vision />
      <Play />
      <Work />
      {/* <Partners /> */}
      <OurCommunity />
      <Team />
      <Footer />
    </div>
  );
};

export default HomePage;
