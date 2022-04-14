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

 

      <div className="container path-header-main">
        <div className="col-md-12 path-header-style haed-nav-btns">
          <div className="sections-style">
            <Link to="/no_job">
            <button>

              <img
                src={IconicImage}
                alt="IconicImage"
                width="150px"
                height="150px"
              />
              <p>Engineering</p>
              </button>
            </Link>
          </div>
          <div className="sections-style">
            {/* <Link to="/design"> */}
            <Link to="/no_job">
            <button>

              <img
                src={IconicImage}
                alt="IconicImage"
                width="150px"
                height="150px"
              />
              <p>Design & Production</p>
              </button>
            </Link>
          </div>
          <div className="sections-style">
            <Link to="/no_job">
              <button>
              <img
                src={IconicImage}
                alt="IconicImage"
                width="150px"
                height="150px"
              />
              <p>Art & Animation</p>
              </button>
            </Link>
          </div>
          <div className="sections-style">
            <Link to="/no_job">
            <button>

              <img
                src={IconicImage}
                alt="IconicImage"
                width="150px"
                height="150px"
              />
              <p>Operations & Marketing</p>
              </button>
            </Link>
          </div>
          <div className="sections-style">
            <Link to="/no_job">
            <button>

              <img
                src={IconicImage}
                alt="IconicImage"
                width="150px"
                height="150px"
              />
              <p>Others</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
        <div className="develop-outer-style">
        <div className="develop-heading-style col-md-5">
          <h1>No Job Available</h1>
          <h5>Coming Soon...</h5>
        </div>
      </div>
    </>
  );
};

export default Path;
