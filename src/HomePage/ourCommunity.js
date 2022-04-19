import { React, useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { ImTelegram } from "react-icons/im";
import { RiWechatFill } from "react-icons/ri";

import JoinUs from "../Assests/web roxo/JoinUs.jpeg";
import "./ourCommunity.css";

const OurCommunity = () => {
  const [showTwitter, setShowTwitter] = useState(true);
  const [showTelegram, setShowTelegram] = useState(false);
  const [showDiscord, setShowDiscord] = useState(false);
  const [showWechat, setShowWechat] = useState(false);

  const twitterHandler = () => {
    setShowTwitter(true);
    setShowTelegram(false);
    setShowDiscord(false);
    setShowWechat(false);
  };
  const telegramHandler = () => {
    setShowTwitter(false);
    setShowTelegram(true);
    setShowDiscord(false);
    setShowWechat(false);
  };
  const discordHandler = () => {
    setShowTwitter(false);
    setShowTelegram(false);
    setShowDiscord(true);
    setShowWechat(false);
  };
  const wechatHandler = () => {
    setShowTwitter(false);
    setShowTelegram(false);
    setShowDiscord(false);
    setShowWechat(true);
  };

  return (
    <>
      <div className="community-outer-style">
        <div className="community-heading-outer">
          <h1>OUR COMMUNITY</h1>
        </div>
        <div className="ourCommunity-outer-section col-md-12">
          <div className="">
            <div className="community-icons col-md-6">
              <div onClick={twitterHandler} type="button">
                <AiFillTwitterCircle size={50} />
              </div>
              <div
                onClick={discordHandler}
                className="twitter-icon-style"
                type="button"
              >
                <SiDiscord size={40} />
              </div>
              <div
                onClick={telegramHandler}
                className="twitter-icon-style"
                type="button"
              >
                <ImTelegram size={40} />
              </div>
              <div
                onClick={wechatHandler}
                className="twitter-icon-style"
                type="button"
              >
                <RiWechatFill size={50} />
              </div>
            </div>
          </div>
          <div className="community-heading col-md-6">
            <h3>This is Our Community</h3>
            <h6>Free to Play, Play to Earn</h6>
          </div>
        </div>
        {/* --------twitter Handler------------ */}
        {showTwitter && (
          <div className="col-md-12 community-icon-display-outer">
            <div className="community-icon-detail">
              <div className="col-md-6 ">
                <div className="icon-image-detail">
                  <img className="join-image-style" src={JoinUs} alt="" />
                </div>
              </div>
              <div className="col-md-6 community-icon-content">
                <h3>Join our community</h3>
                <p className="join-content-style">
                  Join our community to get updated information about our
                  upcoming events and announcements.
                </p>
              </div>
            </div>
          </div>
        )}
        {/* --------telegram Handler------------ */}
        {showTelegram && (
          <div className="col-md-12 community-icon-display-outer">
            <div className="community-icon-detail">
              <div className="col-md-6 ">
                <div className="icon-image-detail">
                  <img className="join-image-style" src={JoinUs} alt="" />
                </div>
              </div>
              <div className="col-md-6 community-icon-content">
                <h3>Join our community</h3>
                <p className="join-content-style">
                  Join our community to get updated information about our
                  upcoming events and announcements.
                </p>
              </div>
            </div>
          </div>
        )}
        {/* --------discord Handler------------ */}
        {showDiscord && (
          <div className="col-md-12 community-icon-display-outer">
            <div className="community-icon-detail">
              <div className="col-md-6 ">
                <div className="icon-image-detail">
                  <img className="join-image-style" src={JoinUs} alt="" />
                </div>
              </div>
              <div className="col-md-6 community-icon-content">
                <h3>Join our community</h3>
                <p className="join-content-style">
                  Join our community to get updated information about our
                  upcoming events and announcements.
                </p>
              </div>
            </div>
          </div>
        )}
        {/* --------weChat Handler------------ */}
        {showWechat && (
          <div className="col-md-12 community-icon-display-outer">
            <div className="community-icon-detail">
              <div className="col-md-6 ">
                <div className="icon-image-detail">
                  <img className="join-image-style" src={JoinUs} alt="" />
                </div>
              </div>
              <div className="col-md-6 community-icon-content">
                <h3>Join our community</h3>
                <p className="join-content-style">
                  Join our community to get updated information about our
                  upcoming events and announcements.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default OurCommunity;
