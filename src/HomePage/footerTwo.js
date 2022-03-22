import React from 'react';
import FooterLeft from "../Assests/FooterLeft.png"
import FooterRight from "../Assests/FooterRight.png"
import { Link } from "react-router-dom";

import  blogIcon  from "../Assests/3D-ICONS/Blog Icon/bloger 256.png";
import  discordIcon  from "../Assests/3D-ICONS/Discord icon/main 256.png";
import  teleIcon  from "../Assests/3D-ICONS/Telegram/main 256.png";
import twitterIcon  from "../Assests/3D-ICONS/Twitter Icon/main 256.png";
import Roxo from "../Assests/25.png"

import "./footerTwo.css"




const  Footer=()=> {
  return (
    <>
    <div className="col-md-12 footer-flex">
{/* <div className="footer-image-left-style"> */}
{/* <img src={FooterLeft} height="450px" width="450px"  /> */}
{/* </div> */}
<div className="footer-image-style    ">

            <div className="  footer-icons-style">
              <div>
               <div  className="roxo-footer" > 
               <img src={Roxo} alt="roxo" width="50px" height="50px"/> <h6>ROXO</h6> 
               </div>
            <Link> <img src={blogIcon} height="35px"/></Link>
                <Link><img src={discordIcon} height="35px"/></Link>
                <Link><img src={twitterIcon} height="35px"/></Link>
                <Link><img src={teleIcon} height="35px"/></Link>
                </div>
                <p className="footer-copyright">Copyright @2022 ROXO, All rights reserved.</p>
                <p className="terms-footer">Terms Of Service | Privacy Policy | Contact Us</p>

                </div>

</div>

{/* <div className="footer-image-right-style "> */}

{/* <img src={FooterRight} height="450px" width="450px"  /> */}
{/* </div> */}

    </div>
    </>

  );
}

export default Footer;
