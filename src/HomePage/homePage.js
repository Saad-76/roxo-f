import React from "react";
import "./homePage.css";
import Header from "./header";
import Slider from "./slider";
import Roxo from "./roxo";
import Vision from "./vision";
import Video from "./video";
import Play from "./play";
import TesCards from "./TesCards";
import Login from "./login";
import SignUp from "./signUp";
import Footer from "./footer";

import OurCommunity from "./ourCommunity";
import GamingNft from "./gamingNft";

import Partners from "./partners";
import Work from "./work";
import MileStoneStepper from "./mileStoneStepper";

const HomePage = () => {
  return (
    <div className="background-color-main ">
      <Header />
      <SignUp />
      <Login />
      <Slider />
      <TesCards />
      <Roxo />
      <GamingNft />

      <MileStoneStepper />
      <Vision />
      <Play />
      {/* <Video /> */}
      <Work />
      <Partners />
      <OurCommunity />
      <Footer />
    </div>
  );
};

export default HomePage;
