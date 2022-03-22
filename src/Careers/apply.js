import React from "react";
import "./apply.css";
import Header from "../HomePage/header"
import { Link } from "react-router-dom";


const Apply = () => {
  return (
    <>
       <Header/>
       <div className="container-style-apply">
      <div className="col-md-12 apply-first-flex">
        <div className="col-md-6">
          <h6>
            Unity Developer <br /> <span>Canada, Vancouver</span>
          </h6>
        </div>
        <div className="col-md-6">
       <Link to="/applyform">   <button className="job-apply-button"> Apply For Job</button></Link>
        </div>
      </div>

      <div className="col-md-12 apply-second-flex">
        <h6>Responsibilities</h6>
        <p>- Program games and applications in C# / Unity</p>
        <p>- Assess, develop, debug, maintain, and set code standards</p>
        <p>- Strong ability to scope and define project requirements</p>
        <p>- Propose creative solutions to meet product goals</p>
        <p>
          - Work effectively in cross-functional teams and collaborate with
          internal and remote teams to identify, produce, and deliver tasks on
          time
        </p>
      </div>
      <div className="col-md-12 apply-third-flex">
        <h6>Requirements:</h6>
        <p>
          - Bachelor's degree in Computer Science, Software Engineering or
          related technical discipline
        </p>
        <p>
          - 3+ years of Mobile Game development experience in Unity 3D or
          equivalent
        </p>
        <p>- Proficient in C#</p>
        <p>- Strong software design, development, and programming skills</p>
        <p>- Have exceptional problem-solving and debugging skills</p>
        <p>
          - Self-motivated and strong team player with a passion for making
          quality mobile games
        </p>
        <p>
          - Experience with several game engineer domains (Example: graphics,
          gameplay, AI, pathfinding, animation, physics, UI)
        </p>
        <p>- Experience in Object Oriented (OO) design and programming</p>
        <p>- Understanding of advanced 3D mathematics</p>
        <p>
          - Passion for (and understanding of) game design and the user game
          experience
        </p>
        <p>- Has shipped 2+ mobile game titles</p>
        <p>
          - Good at listening, speaking, reading and writing in English &
          Chinese prefer
        </p>
      </div>
      <div className="apply-button-outer-style ">
      <Link to="/applyform"> <button className="job-apply-button-two"> Apply For Job</button></Link> </div>
      </div>
    </>
  );
};
export default Apply;
