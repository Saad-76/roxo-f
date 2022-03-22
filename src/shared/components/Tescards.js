import React from "react";
import "../../HomePage/Tescards.css";
import { Link } from "react-router-dom";

const Tescards = (props) => {
  return (
    <div className="colum">
        <div class="tes-scr">
          <div className="tes-icon"><a>{props.tesicon}</a></div>
         <div className="col-md-12 flex-style-props">
          <div className="col-md-6 first-card-style">
        <h3>
          {props.tesheading}
          
          </h3>
          <h4>{props.secondHeading}</h4>
          <h6>{props.tesheading1}</h6>
          </div>
          <div className="col-md-6 button-col-style">
          {
         props.button ?  <button><Link to={props.link} >{props.button} </Link></button>   : ""           }
         </div>
         </div>

        <p className="text-tes text-align-center" style={{width:'400px'}}> {props.testext}</p>
        </div>
        </div>
     
  );
};

export default Tescards;
