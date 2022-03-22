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
import MileStone from "./mileStone";
import OurCommunity from "./ourCommunity";
import GamingNft from "./gamingNft";
// import LegendaryNft from "./legendaryNft";
import Partners from "./partners";
import Work from "./work";

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
      {/* <LegendaryNft /> */}
      <MileStone />
      <Vision />
      <Play />
      {/* <Video /> */}
      <Work/>
      <Partners />
      <OurCommunity />
      <Footer />
    </div>
  );
};

export default HomePage;
