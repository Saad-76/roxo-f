import React from "react";
import "./art.css";
import CareersHome from "./careersHome"
import Path from "./path"
import Header from "../HomePage/header"
import Footer from "../HomePage/footer"
import CardProp from "./cardProp"

const Art = () => {
  return (
    <>
          <div className='careers-background-color'>

       <Header/>
    <CareersHome/>
    <Path/>
    
    <div className="container">
        <div className="row  cards-jobs-margin">
          <div className="col-md-6 column-style">
            <CardProp
              headLg="Senior 3D Animator"
              headSm="ANIMATION,  SEOUL,  "
              content="Developer with 6 months experience."
              button="Apply"
            />
          </div>
          <div className="col-md-6 column-style">
            <CardProp
              headLg="Senior 3D Animator"
              headSm="ANIMATION,  SEOUL,  "
              content="Developer with 6 months experience."
              button="Apply"
            />
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default Art;
