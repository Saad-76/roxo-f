import React from "react";
import { Link } from "react-router-dom";

import FooterLeft from "../Assests/bottomleft.png";
import FooterRight from "../Assests/bottomright.png";
import "./footerTwo.css";

const Footer = () => {
  return (
    <>
      <div className="footer-bg">
        <div className="footer  col-sm-12  ">
          <div className="col-md-4 image-left">
            <img src={FooterLeft} alt="" className="img-fluid" />
          </div>

          <div className="col-md-4 footer-content-style  ">
            <h3>ROXO</h3>
            <p>
              Copyrights 2022 ROXO LTD.
              <br />
              All rights reserved.
            </p>
            <p>
              <span className="links-footer">
                <Link to="/contactus">Contact US</Link> |
                <Link to="/terms_conditions"> Terms and Conditions</Link> |
                <Link to="/privacy_policy"> Privacy Policy</Link>
              </span>
            </p>
          </div>

          <div className="col-md-4 ">
            <div className="col-sm-12 text-right image-right">
              <img src={FooterRight} alt="" className="img-fluid" />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* -----------resp footer-------- */}
      <div className="footer-resp">
        <div className="col-md-4 footer-content-style   ">
          <h3>ROXO</h3>
          <p>
            Copyrights 2022 ROXO LTD.
            <br />
            All rights reserved.
          </p>
          <p>
            <span className="links-footer">
              <Link to="/contactus">Contact US</Link> |
              <Link to="/terms_conditions"> Terms and Conditions</Link> |
              <Link to="/privacy_policy"> Privacy Policy</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
