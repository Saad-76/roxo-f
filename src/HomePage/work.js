import { React, useState } from "react";

import StepOne from "../Assests/web roxo/how i work desktop jpg/step1 desktop.jpg";
import stepTwo from "../Assests/web roxo/how i work desktop jpg/step 2 desktop.jpg";
import StepThree from "../Assests/web roxo/how i work desktop jpg/step3 desktop.jpg";
import StepFour from "../Assests/web roxo/how i work desktop jpg/step4 desktop.jpg";
import StepOneMbl from "../Assests/web roxo/how it work mobile jpgs/mbl1.jpg";
import StepOneMb2 from "../Assests/web roxo/how it work mobile jpgs/mbl2.jpg";
import StepOneMb3 from "../Assests/web roxo/how it work mobile jpgs/mbl3.jpg";
import StepOneMb4 from "../Assests/web roxo/how it work mobile jpgs/mbl4.jpg";

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
              </div>

              <div>
                {dataOne && (
                  <>
                    <div className="work-content-section-backgroud work-resp-back">
                      <img
                        className="web-img-work"
                        src={StepOne}
                        alt="StepOne"
                      />
                    </div>
                    {/* ------resp-image--- */}

                    <img
                      className="mbl-img-work"
                      src={StepOneMbl}
                      alt="StepOneMbl"
                    />
                  </>
                )}
                {dataTwo && (
                  <>
                    <div className="work-content-section-backgroud  work-resp-back">
                      <img
                        className="web-img-work"
                        src={stepTwo}
                        alt="stepTwo"
                      />
                    </div>
                    {/* ------resp-image--- */}

                    <img
                      className="mbl-img-work"
                      src={StepOneMb2}
                      alt="StepOneMbl"
                    />
                  </>
                )}
                {dataThree && (
                  <>
                    <div className="work-content-section-backgroud  work-resp-back">
                      <img
                        className="web-img-work"
                        src={StepThree}
                        alt="StepThree"
                      />
                    </div>
                    {/* ------resp-image--- */}

                    <img
                      className="mbl-img-work"
                      src={StepOneMb3}
                      alt="StepOneMbl"
                    />
                  </>
                )}
                {dataFour && (
                  <>
                    <div className="work-content-section-backgroud  work-resp-back">
                      <img
                        className="web-img-work"
                        src={StepFour}
                        alt="StepFour"
                      />
                    </div>
                    {/* ------resp-image--- */}

                    <img
                      className="mbl-img-work"
                      src={StepOneMb4}
                      alt="StepOneMbl"
                    />
                  </>
                )}
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
