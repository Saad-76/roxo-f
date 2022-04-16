import React from "react";

import NFT1 from "../Assests/NFT1.png";
import NFT from "../Assests/NFT.jpg"
import NFT4 from "../Assests/NFT4.jpg"
import "./team.css";

const Team = () => {
  return (
    <>
      <div className="team-heading-outer">
        <h1>MEET OUR TEAM </h1>
      </div>

      <div className="team-outer-style">
        <div className="col-md-12 join-team-flex">
          <div className="col-md-4"> </div>
          <div className="col-md-4">
            <div className="team-card-background">
              <h3>MEET OUR TEAM</h3>
              <h5>JOIN US </h5>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>

        <div className="col-md-12 team-cards-flex">
          <div className="col-md-4 team-members-inner-flex-left">
            <div className="team-member-background">
              <img className="team-member-image-style" src={NFT1} alt="NFT1" />
              <h3>Lorem Ipsm</h3>
              <h5>CEO</h5>
              <p>
                lorem ips lorem ips lorem ipsm lorem ipsm lorem ipsm ipsm lorem
                ipsm lorem ipsm
              </p>
            </div>
          </div>
          <div className="col-md-4 team-members-inner-flex">
            <div className="team-member-background">
              <img className="team-member-image-style" src={NFT4} alt="NFT1" />
              <h3>Lorem Ipsm</h3>
              <h5>CEO</h5>
              <p>
                lorem ips lorem ips lorem ipsm lorem ipsm lorem ipsm ipsm lorem
                ipsm lorem ipsm
              </p>
            </div>
          </div>
          <div className="col-md-4 team-members-inner-flex-right">
            <div className="team-member-background">
              <img className="team-member-image-style" src={NFT} alt="NFT1" />
              <h3>Lorem Ipsm</h3>
              <h5>CEO</h5>
              <p>
                lorem ips lorem ips lorem ipsm lorem ipsm lorem ipsm ipsm lorem
                ipsm lorem ipsm
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-12 team-cards-flex">
          <div className="col-md-4 team-members-inner-flex-left">
            <div className="team-member-background">
              <img className="team-member-image-style" src={NFT4} alt="NFT1" />
              <h3>Lorem Ipsm</h3>
              <h5>CEO</h5>
              <p>
                lorem ips lorem ips lorem ipsm lorem ipsm lorem ipsm ipsm lorem
                ipsm lorem ipsm
              </p>
            </div>
          </div>
          <div className="col-md-4 team-members-inner-flex">
            <div className="team-member-background">
              <img className="team-member-image-style" src={NFT} alt="NFT1" />
              <h3>Lorem Ipsm</h3>
              <h5>CEO</h5>
              <p>
                lorem ips lorem ips lorem ipsm lorem ipsm lorem ipsm ipsm lorem
                ipsm lorem ipsm
              </p>
            </div>
          </div>
          <div className="col-md-4 team-members-inner-flex-right">
            <div className="team-member-background">
              <img className="team-member-image-style" src={NFT1} alt="NFT1" />
              <h3>Lorem Ipsm</h3>
              <h5>CEO</h5>
              <p>
                lorem ips lorem ips lorem ipsm lorem ipsm lorem ipsm ipsm lorem
                ipsm lorem ipsm
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Team;
