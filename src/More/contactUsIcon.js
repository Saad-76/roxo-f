import { React, useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { ImTelegram } from "react-icons/im";
import { RiWechatFill } from "react-icons/ri";
import "./contactUsIcon.css";
// import { BsWhatsapp, BsBoxArrowInUpRight } from "react-icons/bs";

const ContactUsIcon = () => {
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
      <div className="contact-us-outer">
        <h3 className="contact-us-heading">Contact Us</h3>
      </div>
      {/* <p className="contact-react-text">React Us Directly</p>
      <div className="row pt-3">
        <div className="col-md-4 contact-col-section">
          <BsWhatsapp size={25} />
          <p>Lore Ipsm</p>
          <BsBoxArrowInUpRight size={25} />
        </div>
        <div className="col-md-4 contact-col-section">
          <BsWhatsapp size={25} />
          <p>Lore Ipsm</p>
          <BsBoxArrowInUpRight size={25} />
        </div>
        <div className="col-md-4 contact-col-section">
          <BsWhatsapp size={25} />
          <p>Lore Ipsm</p>
          <BsBoxArrowInUpRight size={25} />
        </div>
      </div>

      <div className="row pt-3">
        <div className="col-md-4 contact-col-section">
          <BsWhatsapp size={25} />
          <p>Lore Ipsm</p>
          <BsBoxArrowInUpRight size={25} />
        </div>
        <div className="col-md-4 contact-col-section">
          <BsWhatsapp size={25} />
          <p>Lore Ipsm</p>
          <BsBoxArrowInUpRight size={25} />
        </div>
        <div className="col-md-4 contact-col-section">
          <BsWhatsapp size={25} />
          <p>Lore Ipsm</p>
          <BsBoxArrowInUpRight size={25} />
        </div>
      </div>

      <div className="row pt-3">
        <div className="col-md-4 contact-col-section">
          <BsWhatsapp size={25} />
          <p>Lore Ipsm</p>
          <BsBoxArrowInUpRight size={25} />
        </div>
        <div className="col-md-4 contact-col-section">
          <BsWhatsapp size={25} />
          <p>Lore Ipsm</p>
          <BsBoxArrowInUpRight size={25} />
        </div>
        <div className="col-md-4 contact-col-section">
          <BsWhatsapp size={25} />
          <p>Lore Ipsm</p>
          <BsBoxArrowInUpRight size={25} />
        </div>
      </div> */}
      <div className="contact-us-section-pad">
        <div className="ourCommunity-outer-section  col-md-12">
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
            {/* <h3>Contact Us</h3> */}
            {/* <h6>Free to Play, Play to Earn</h6> */}
          </div>
        </div>
        {/* --------twitter Handler------------ */}
        {showTwitter && (
          <div className="col-md-12 community-icon-display-outer">
            <div className="community-icon-detail">
              <div className="col-md-4 ">
                <div className="icon-image-detail">
                  <h3>
                    Twitter
                    <br />
                    <span>100K+</span>
                  </h3>
                </div>
              </div>
              <div className="col-md-8 community-icon-content">
                <h3>Lorem Ipsum</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        )}
        {/* --------telegram Handler------------ */}
        {showTelegram && (
          <div className="col-md-12 community-icon-display-outer">
            <div className="community-icon-detail">
              <div className="col-md-4 ">
                <div className="icon-image-detail">
                  <h3>
                    Telegram <br />
                    <span>100K+</span>
                  </h3>
                </div>
              </div>
              <div className="col-md-8 community-icon-content">
                <h3>Lorem Ipsum</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        )}
        {/* --------discord Handler------------ */}
        {showDiscord && (
          <div className="col-md-12 community-icon-display-outer">
            <div className="community-icon-detail">
              <div className="col-md-4 ">
                <div className="icon-image-detail">
                  <h3>
                    Discord
                    <br />
                    <span>100K+</span>
                  </h3>
                </div>
              </div>
              <div className="col-md-8 community-icon-content">
                <h3>Lorem Ipsum</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        )}
        {/* --------weChat Handler------------ */}
        {showWechat && (
          <div className="col-md-12 community-icon-display-outer">
            <div className="community-icon-detail">
              <div className="col-md-4 ">
                <div className="icon-image-detail">
                  <h3>
                    We Chat <br />
                    <span>100K+</span>
                  </h3>
                </div>
              </div>
              <div className="col-md-8 community-icon-content">
                <h3>Lorem Ipsum</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default ContactUsIcon;
