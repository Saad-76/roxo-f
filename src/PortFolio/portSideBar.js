import React from "react";
import "./portSideBar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo";
import SectionThree from "./sectionThree";
import SectionFour from "./sectionFour";
import SectionFive from "./sectionFive";
import SectionSix from "./sectionSix";
import SectionSeven from "./sectionSeven";
import SectionEight from "./sectionEight";
import SectionNine from "./sectionNine";
import SectionTen from "./sectionTen";
import SectionEleven from "./sectionEleven";
import SectionTwelve from "./sectionTwelve";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PortSideBar = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 4);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
  return (
    <>
      <div className="portfolio-sidebar-style">
      <h1>Logo</h1>

        <AnchorLink href="#gamelaunch">Game Launch</AnchorLink>
        <AnchorLink href="#homepage">Home Page</AnchorLink>
        <AnchorLink href="#gameintro">Game Introduction</AnchorLink>
        <AnchorLink href="#gameconcept">Game Concept</AnchorLink>
        <AnchorLink href="#value">Value Proposition</AnchorLink>
        <AnchorLink href="#earn">Earn Mechanism</AnchorLink>
        <AnchorLink href="#roadmap">Roadmap</AnchorLink>
        {/* <AnchorLink href="#token">Tokenomic</AnchorLink>
        <AnchorLink href="#vesting">Vesting Schedule</AnchorLink> */}
        <AnchorLink href="#allocation">Token Allocation</AnchorLink>
        {/* <AnchorLink href="#members">Team Members</AnchorLink>
        <AnchorLink href="#partners">Our Partners</AnchorLink> */}
      </div>
      <section id="gamelaunch">
        <SectionOne/>
      </section>
      <section id="homepage">
        <SectionTwo/>
      </section>
      <section id="gameintro">
        <SectionThree/>
      </section>
      <section id="gameconcept">
        <SectionFour/>
      </section>
      <section id="value">
        <SectionFive/>
      </section>

      <section id="earn">
        <SectionSix/>
      </section>
      <section id="roadmap">
        <SectionSeven/>
      </section>
      <section id="allocation">
        <SectionEight/>
      </section>
      {/* <section id="vesting">
        <SectionNine/>
      </section>
      <section id="allocation">
        <SectionTen/>
      </section>
      <section id="members">
        <SectionEleven/>
      </section>
      <section id="partners">
        <SectionTwelve/>
      </section> */}
      
    </>
  );
};

export default PortSideBar;
