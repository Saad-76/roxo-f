import React from "react";
import Tescards from "../shared/components/Tescards";
import Quotepic from "../Assests/games.jpg";
import Controllers from "../Assests/gameController.png";
import GameSlider1 from "../Assests/GameSlider1.jpeg";
import GameSlider2 from "../Assests/GameSlider2.jpeg";

import { FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Tescards.css";
const TesCards = (props) => {
  const Rightscrol = () => {
    document.getElementById("containe").scrollLeft += 430;
  };
  const Leftscrol = () => {
    document.getElementById("containe").scrollLeft -= 430;
  };

  return (
    <>
    <div className="our-games-outer-pad">
      <div className="cards-nav game-heading-outer">
        <h1 className="game-heading-cards"> Our Games</h1>
      </div>

      <div className="tes-card" id="containe">
        <button onClick={Leftscrol} className="tes-btn">
          <FaArrowLeft size={22.5} />
        </button>
        <button onClick={Rightscrol} className="tes-btn1">
          <FaArrowRight size={22.5} />
        </button>

        <div className="cards-style-test-data">
          <Tescards
            tesicon={<img src={GameSlider1} height="150px" />}
            tesheading="Haste King"
            tesheading1={<p>Real PVP running battle </p>}
            button="View"
            link="/portfolio"
          />
          <Tescards
            tesicon={<img src={GameSlider2} />}
            secondHeading="Coming Soon... "
            // tesheading1={<p>Coming Soon... </p>}
          />
        </div>
        {/* <Tescards
        tesicon={<img src={Quotepic} />}
        tesheading="Sa Game"
        tesheading1="Real PVP running battle "

      />
      <Tescards
        tesicon={<img src={Quotepic} />}
        tesheading="Data Game"
        tesheading1="Real PVP running battle "

      />
      <Tescards
        tesicon={<img src={Quotepic} />}
        tesheading="Fighting Game"
        tesheading1="Real PVP running battle "

      /> */}
      </div>
      </div>
    </>
  );
};

export default TesCards;
