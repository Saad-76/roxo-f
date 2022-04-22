import { React, useState } from "react";

import { AiFillTwitterCircle } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { ImTelegram } from "react-icons/im";
import { RiWechatFill } from "react-icons/ri";

import Youtube from "../Assests/web roxo/Icons/Youtube.png";
import Tiwitter from "../Assests/web roxo/Icons/Tiwitter.png";
import Telegram from "../Assests/web roxo/Icons/Telegram.png";
import Reddit from "../Assests/web roxo/Icons/Reddit.png";
import Instragram from "../Assests/web roxo/Icons/Instragram.png";
import Facebook from "../Assests/web roxo/Icons/Facebook.png";
import Discord from "../Assests/web roxo/Icons/Discord.png";
import JoinUs from "../Assests/web roxo/JoinUs.jpeg";
import "./contactUsIcon.css";

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
        <h3 className="contact-us-heading">OUR COMMUNITY</h3>
      </div>

      <div className="contact-us-section-pad">
        <div className="ourCommunity-outer-section  col-md-12">
          <div className="">
        
          </div>
          <div className="community-heading col-md-6">
            {/* <h3>Contact Us</h3> */}
            {/* <h6>Free to Play, Play to Earn</h6> */}
          </div>
        </div>
        {/* --------twitter Handler------------ */}
        {showTwitter && (
         <div className="col-md-12 ">
         <div className=" community-icon-display-outer">
           <div className="community-icon-detail">
             <div className="col-md-6 ">
               <div className="icon-image-detail">
                 <img className="join-image-style" src={JoinUs} alt="" />
               </div>
             </div>
             <div className="col-md-6 community-icon-content">
               <h3>Join our community</h3>
               {/* <p className="join-content-style">
                 Join our community to get updated information about our
                 upcoming events and announcements.
               </p> */}
               <div className="community-icons ">
           <div onClick={twitterHandler} type="button">
             {/* <AiFillTwitterCircle size={50} /> */}
             <a
               href="https://www.youtube.com/channel/UCa3iLWxbozoKB8K7AK3cKLg"
               target="_blank"
             >
               {" "}
               <img
                 className="icons-images-style-community"
                 src={Youtube}
                 alt=""
               />
             </a>
           </div>
           <div
             onClick={wechatHandler}
             className="twitter-icon-style"
             type="button"
           >
             {/* <RiWechatFill size={50} /> */}
             <a href="https://fb.me/roxoFunPlay" target="_blank">
               {" "}
               <img
                 src={Facebook}
                 alt=""
                 className="icons-images-style-community"
               />
             </a>
           </div>
           <div
             onClick={wechatHandler}
             className="twitter-icon-style"
             type="button"
           >
             {/* <RiWechatFill size={50} /> */}
             <a href="https://discord.gg/M4ucFW6AHU" target="_blank">
               {" "}
               <img
                 src={Discord}
                 alt=""
                 className="icons-images-style-community"
               />
             </a>
           </div>

           <div
             onClick={discordHandler}
             className="twitter-icon-style"
             type="button"
           >
             {/* <SiDiscord size={40} /> */}
             <a href="https://twitter.com/RoxoFun" target="_blank">
               {" "}
               <img
                 src={Tiwitter}
                 alt=""
                 className="icons-images-style-community"
               />
             </a>
           </div>
           <div
             onClick={wechatHandler}
             className="twitter-icon-style"
             type="button"
           >
             {/* <RiWechatFill size={50} /> */}
             <a href="https://www.instagram.com/roxo.fun/" target="_blank">
               {" "}
               <img
                 src={Instragram}
                 alt=""
                 className="icons-images-style-community"
               />
             </a>
           </div>
           <div
             onClick={telegramHandler}
             className="twitter-icon-style"
             type="button"
           >
             {/* <ImTelegram size={40} /> */}
             <a href="https://t.me/roxo_token" target="_blank">
               {" "}
               <img
                 src={Telegram}
                 alt=""
                 className="icons-images-style-community"
               />
             </a>
           </div>

           <div
             onClick={wechatHandler}
             className="twitter-icon-style"
             type="button"
           >
             {/* <RiWechatFill size={50} /> */}
             <a href="https://www.reddit.com/r/roxo/" target="_blank">
               {" "}
               <img
                 src={Reddit}
                 alt=""
                 className="icons-images-style-community"
               />
             </a>
           </div>
         </div>
             </div>
           </div>
         
         </div>
       
       </div>
        )}
        {/* --------telegram Handler------------ */}
        {showTelegram && (
          <div className="col-md-12 community-icon-display-outer">
            {/* <div className="community-icon-detail">
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
            </div> */}
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
          <div className="col-md-12 ">
            <div className=" community-icon-display-outer">
              <div className="community-icon-detail">
                <div className="col-md-6 ">
                  <div className="icon-image-detail">
                    <img className="join-image-style" src={JoinUs} alt="" />
                  </div>
                </div>
                <div className="col-md-6 community-icon-content">
                  <h3>Join our community</h3>
                  {/* <p className="join-content-style">
                    Join our community to get updated information about our
                    upcoming events and announcements.
                  </p> */}
                  <div className="community-icons ">
              <div onClick={twitterHandler} type="button">
                {/* <AiFillTwitterCircle size={50} /> */}
                <a
                  href="https://www.youtube.com/channel/UCa3iLWxbozoKB8K7AK3cKLg"
                  target="_blank"
                >
                  {" "}
                  <img
                    className="icons-images-style-community"
                    src={Youtube}
                    alt=""
                  />
                </a>
              </div>
              <div
                onClick={wechatHandler}
                className="twitter-icon-style"
                type="button"
              >
                {/* <RiWechatFill size={50} /> */}
                <a href="https://fb.me/roxoFunPlay" target="_blank">
                  {" "}
                  <img
                    src={Facebook}
                    alt=""
                    className="icons-images-style-community"
                  />
                </a>
              </div>
              <div
                onClick={wechatHandler}
                className="twitter-icon-style"
                type="button"
              >
                {/* <RiWechatFill size={50} /> */}
                <a href="https://discord.gg/M4ucFW6AHU" target="_blank">
                  {" "}
                  <img
                    src={Discord}
                    alt=""
                    className="icons-images-style-community"
                  />
                </a>
              </div>

              <div
                onClick={discordHandler}
                className="twitter-icon-style"
                type="button"
              >
                {/* <SiDiscord size={40} /> */}
                <a href="https://twitter.com/RoxoFun" target="_blank">
                  {" "}
                  <img
                    src={Tiwitter}
                    alt=""
                    className="icons-images-style-community"
                  />
                </a>
              </div>
              <div
                onClick={wechatHandler}
                className="twitter-icon-style"
                type="button"
              >
                {/* <RiWechatFill size={50} /> */}
                <a href="https://www.instagram.com/roxo.fun/" target="_blank">
                  {" "}
                  <img
                    src={Instragram}
                    alt=""
                    className="icons-images-style-community"
                  />
                </a>
              </div>
              <div
                onClick={telegramHandler}
                className="twitter-icon-style"
                type="button"
              >
                {/* <ImTelegram size={40} /> */}
                <a href="https://t.me/roxo_token" target="_blank">
                  {" "}
                  <img
                    src={Telegram}
                    alt=""
                    className="icons-images-style-community"
                  />
                </a>
              </div>

              <div
                onClick={wechatHandler}
                className="twitter-icon-style"
                type="button"
              >
                {/* <RiWechatFill size={50} /> */}
                <a href="https://www.reddit.com/r/roxo/" target="_blank">
                  {" "}
                  <img
                    src={Reddit}
                    alt=""
                    className="icons-images-style-community"
                  />
                </a>
              </div>
            </div>
                </div>
              </div>
            
            </div>
          
          </div>
        )}
      </div>
    </>
  );
};
export default ContactUsIcon;
