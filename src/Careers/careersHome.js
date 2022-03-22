import React from "react";
import "./careersHome.css";

const CareersHome = () => {
  return (
    <>
      <div className="careers-home-outer">
        <h3 className="careers-heading-style">Careers</h3>
      </div>
      <div className="col-md-12">
        <div className="col-md-6 ">
          <h3 className="careers-drop-down-heading">
            Locations of Open Positions
          </h3>
          <div className="careers-drop-outer">
            <select className="careers-dropdown">
              <option selected>Select</option>
              <option value="Customer"> Dubai</option>
              <option value="Employee"> Pakistan</option>
            </select>
          </div>
        </div>

        <div className="col-md-6"></div>
      </div>
    </>
  );
};

export default CareersHome;
