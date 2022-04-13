import { React, useState } from "react";

import StepOne from "../Assests/imagesHome/how it works/step1 desktop.png";
import stepTwo from "../Assests/imagesHome/how it works/step 2 desktop.png";
import StepThree from "../Assests/imagesHome/how it works/step3 desktop.png";
import StepFour from "../Assests/imagesHome/how it works/step4 desktop.png";
import StepOneMbl from "../Assests/imagesHome/how it works/step1 mobile.png";
import "./work.css";

const Work = () => {
  const [dataOne, setDataOne] = useState(true);
  const [dataTwo, setDataTwo] = useState(false);
  const [dataThree, setDataThree] = useState(false);
  const [dataFour, setDataFour] = useState(false);
  const [dataFive, setDataFive] = useState(false);

  const handleDataOne = () => {
    setDataOne(true);
    setDataTwo(false);
    setDataThree(false);
    setDataFour(false);
    setDataFive(false);
  };

  const handleDataTwo = () => {
    setDataOne(false);
    setDataTwo(true);
    setDataThree(false);
    setDataFour(false);
    setDataFive(false);
  };
  const handleDataThree = () => {
    setDataOne(false);
    setDataTwo(false);
    setDataThree(true);
    setDataFour(false);
    setDataFive(false);
  };
  const handleDataFour = () => {
    setDataOne(false);
    setDataTwo(false);
    setDataThree(false);
    setDataFour(true);
    setDataFive(false);
  };
  const handleDataFive = () => {
    setDataOne(false);
    setDataTwo(false);
    setDataThree(false);
    setDataFour(false);
    setDataFive(true);
  };
  return (
    <>
      <div className="work-outer">
        <div className="work-heading-outer">
          <h1>HOW WE WORK?</h1>
        </div>
        <div className="container">
          <div className="col-md-12 d-flex">
            <div className="col-md-2"></div>
            <div className="col-md-8 work-outer-flex-style">
              <div className="work-button-style-outer">
                <div>
                  <button
                    className="work-button-style "
                    // className="work-button-style active  "
                    onClick={handleDataOne}
                  >
                    1
                  </button>
                </div>
                <div>
                  <button className="work-button-style" onClick={handleDataTwo}>
                    2
                  </button>
                </div>
                <div>
                  <button
                    className="work-button-style"
                    onClick={handleDataThree}
                  >
                    3
                  </button>
                </div>
                <div>
                  <button
                    className="work-button-style"
                    onClick={handleDataFour}
                  >
                    4
                  </button>
                </div>
                {/* <div>
                  <button
                    className="work-button-style"
                    onClick={handleDataFive}
                  >
                    5
                  </button>
                </div> */}
              </div>

              <div>
                {dataOne && (
                  <div className="work-content-section-backgroud">
                    <img className="web-img-work" src={StepOne} alt="StepOne" />
                    <img className="mbl-img-work" src={StepOneMbl} alt="StepOneMbl" />
                  </div>
                )}
                {dataTwo && (
                  <div className="work-content-section-backgroud">
                    <img className="web-img-work" src={stepTwo} alt="stepTwo" />
                  </div>
                )}
                {dataThree && (
                  <div className="work-content-section-backgroud">
                    <img className="web-img-work" src={StepThree} alt="StepThree" />
                  </div>
                )}
                {dataFour && (
                  <div className="work-content-section-backgroud">
                    <img className="web-img-work" src={StepFour} alt="StepFour" />
                  </div>
                )}
                {/* {dataFive && (
                  <div className="work-content-section-backgroud">
                    <h3>Work 5</h3>
                    <p>Lore IpsM lOREM ipsum</p>
                  </div>
                )} */}
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Work;
