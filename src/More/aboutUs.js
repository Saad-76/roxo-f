import React from "react";
import "./aboutUs.css";
const AboutUs = () => {
  return (
    <>
    <div className="about-background-color">
      <h3 className="about-us-heading">About Us</h3>
      <div className="container">
      <div className="col-md-12 about-main-style">

        <div className="col-md-4 about-graph-data">
          <h4>We Never Compromise With.</h4>
          <h6 >Quality</h6>
<p className="percentage-style">100%</p>
    <div className="horizintal-line-about" ></div>
          <h6>Performance</h6>
          <p className="percentage-style">100%</p>
    <div className="horizintal-line-about" ></div>
          <h6>Development</h6>
          <p className="percentage-style">100%</p>
    <div className="horizintal-line-about" ></div>
        </div>

        <div className="col-md-6 about-all-content">
          <h3>Who We Are?</h3>
          <p>Play With Fun</p>
          <p className="about-content-style">
            ROXO is a leading interactive entertainment company for the mobile
            world, with people all around the world playing one or more of our
            games. We believe in making great games for everyone, no matter what
            your skills are, We have developed fun titles, offering games that
            are enjoyed all around the world
          </p>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default AboutUs;
