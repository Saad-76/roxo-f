import React from "react";

import Team6 from "../Assests/web roxo/team/team1.jpg";
import Team3 from "../Assests/web roxo/team/team2.jpg";
import Team2 from "../Assests/web roxo/team/team3.jpg";
import Team5 from "../Assests/web roxo/team/team4.jpg";
import Team1 from "../Assests/web roxo/team/team5.jpg";
import Team4 from "../Assests/web roxo/team/team6.jpg";
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
              <div className="team-member-top-background"></div>
              <img className="team-member-image-style" src={Team1} alt="NFT1" />
              <h3>Zohaib Latif </h3>
              <h5>Founder CEO</h5>
              <p>
                The primary strength of expertise in the field of block chain
                and development, which he utilizes to help guide ROXO to
                success.
              </p>
            </div>
          </div>
          <div className="col-md-4 team-members-inner-flex">
            <div className="team-member-background">
              <div className="team-member-top-background"></div>

              <img className="team-member-image-style" src={Team2} alt="NFT1" />
              <h3>Waseem Aslam</h3>
              <h5>CO-Founder</h5>
              <p>
                As CO-Founder, core responsibilities is to overseeing overall
                vision and direction and strategy of the company.
              </p>
            </div>
          </div>
          <div className="col-md-4 team-members-inner-flex-right">
            <div className="team-member-background">
              <div className="team-member-top-background"></div>

              <img className="team-member-image-style" src={Team3} alt="NFT1" />
              <h3>Usman Zaheer </h3>
              <h5>CTO</h5>
              <p>
                Overseeing the development and dissemination of technology used
                in game development especially and increase business efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-12 team-cards-flex">
          <div className="col-md-4 team-members-inner-flex-left">
            <div className="team-member-background">
              <div className="team-member-top-background"></div>

              <img className="team-member-image-style" src={Team4} alt="NFT1" />
              <h3>Kamran Faiz </h3>
              <h5>Lead 3D Artist</h5>
              <p>
                Working closely with with artists in the team in order to
                produce cutting-edge environments and visual elements for our
                products.
              </p>
            </div>
          </div>
          <div className="col-md-4 team-members-inner-flex">
            <div className="team-member-background">
              <div className="team-member-top-background"></div>

              <img className="team-member-image-style" src={Team5} alt="NFT1" />
              <h3>Junaid Iqbal </h3>
              <h5>
                 Environmental Artist{" "}
              </h5>
              <p>
                Having a creative and detail-oriented illustrator with strong
                background in gaming and animation films.
              </p>
            </div>
          </div>
          <div className="col-md-4 team-members-inner-flex-right">
            <div className="team-member-background">
              <div className="team-member-top-background"></div>

              <img className="team-member-image-style" src={Team6} alt="NFT1" />
              <h3>Asad </h3>
              <h5>Marketing Manager</h5>
              <p>
                Implementing and executing strategic marketing plans for an
                entire organization in order to attract potential customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Team;
