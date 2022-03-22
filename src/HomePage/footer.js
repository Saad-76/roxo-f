import React from "react";
import FooterLeft from "../Assests/FooterLeft.png";
import FooterRight from "../Assests/FooterRight.png";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiOutlineInstagram, AiFillGoogleCircle } from "react-icons/ai";

import "./footerTwo.css";

const Footer = () => {
  return (
    <>
      <div className="footer col-sm-12  " style={{ overflowX: "hidden" }}>
        <div className="col-md-4 image-left">
          <img src={FooterLeft} alt="" className="img-fluid" />
        </div>
    
          <div className="col-md-4 footer-content-style  ">
            <h3>ROXO</h3>
      <p>Copyrights 2022 ROXO LTD.
        <br/>
        All rights reserved.
      </p>
      <p>Contact US | Careers | White Paper</p>
           
          </div>
        
        <div className="col-md-4 ">
          <div className="col-sm-12 text-right image-right">
            <img src={FooterRight} alt="" className="img-fluid" />
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Footer;
