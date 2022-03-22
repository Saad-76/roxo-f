import React from "react";
import "./path.css";
import { Link } from "react-router-dom";
import IconicImage from "../Assests/IconicImage.jpg";

const Path = () => {
  const slideOpen = () => {
    document.getElementById("mySidebar").style.display = "block";
  };

  const slideClose = () => {
    document.getElementById("mySidebar").style.display = "none";
  };
  return (
    <>
      <h3 className="path-heading-style">Choose Your Path</h3>

      {/* <div  className="navbar-toggler"
            type="button"
             onClick={slideOpen}>Open</div>

<div className="collapse-navbar " id="mySidebar">
  <p onClick={slideClose} >Close</p>
  <Link to="/engineering"><p >Engineering</p></Link>
  <Link to="/design"><p>Design & Production </p></Link>
  <Link to="/art"><p>Art & Animation </p></Link>
  <Link to="/operation"><p>Operations & Marketing </p></Link>
  <Link to="/other"><p>Others </p></Link>

</div> */}

      <div className="container path-header-main">
        <div className="col-md-12 path-header-style haed-nav-btns">
          <div className="sections-style">
            <Link to="/engineering">
              <img
                src={IconicImage}
                alt="IconicImage"
                width="150px"
                height="150px"
              />
              <p>Engineering</p>
            </Link>
          </div>
          <div className="sections-style">
            <Link to="/design">
              <img
                src={IconicImage}
                alt="IconicImage"
                width="150px"
                height="150px"
              />
              <p>Design & Production</p>
            </Link>
          </div>
          <div className="sections-style">
            <Link to="/art">
              <img
                src={IconicImage}
                alt="IconicImage"
                width="150px"
                height="150px"
              />
              <p>Art & Animation</p>
            </Link>
          </div>
          <div className="sections-style">
            <Link to="/operation">
              <img
                src={IconicImage}
                alt="IconicImage"
                width="150px"
                height="150px"
              />
              <p>Operations & Marketing</p>
            </Link>
          </div>
          <div className="sections-style">
            <Link to="/other">
              <img
                src={IconicImage}
                alt="IconicImage"
                width="150px"
                height="150px"
              />
              <p>Others</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Path;
