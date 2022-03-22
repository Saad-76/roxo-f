import React from "react";
import FooterLeft from "../Assests/FooterLeft.png";
import FooterRight from "../Assests/FooterRight.png";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiOutlineInstagram, AiFillGoogleCircle } from "react-icons/ai";

import './footerTwo.css'

const Footer = () => {
  return (
    <div className="footer col-sm-12  " style={{ overflowX: "hidden" }}>
        <div className="col-md-4">
          <img src={FooterLeft} alt="" className="img-fluid" />
        </div>
          <center><div className="col-md-4 m-auto footer-roxo-icons "><h3>ROXO</h3>
          <div className="inner-icons">
            <div className="inner-icons-flex-footer">
              Facebook &nbsp;
              <BsFacebook size={25} />
            </div>
            &nbsp; &nbsp; &nbsp;
            <div className="inner-icons-flex-footer">
              Instagram <AiOutlineInstagram size={30} />
            </div>
          </div>
          <div className="inner-icons ">
            <div className="inner-icons-flex-footer">
              LinkedIn
              <BsLinkedin size={25} />
            </div>
            &nbsp; &nbsp;
            <div className="inner-icons-flex-footer">
              Google
              <AiFillGoogleCircle size={30} />
            </div>
          </div>
        </div></center>
        <div className="col-md-4 ">
          <div className="col-sm-12 text-right">
            <img src={FooterRight} alt="" className="img-fluid" />
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Footer;
