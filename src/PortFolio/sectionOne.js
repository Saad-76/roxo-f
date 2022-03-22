import React from "react";
import "./sectionOne.css";
import OneImg from "../Assests/portfolio/OneImg.png"


const SectionOne = () => {
  return (
    <>
      <div className="sectionOne-background-image">
  
          <div className="col-md-12 one-main-body">
<div className="col-md-6">
</div>
<div className="col-md-6">
  <div className="col-md-12"> 
<img src={OneImg} alt="oneimg" height="650x" className="pl-5" />
  </div>
</div>
          </div>

      </div>
    </>
  );
};

export default SectionOne;
