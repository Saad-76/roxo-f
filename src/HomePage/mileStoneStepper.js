import { React, useState, useEffect } from "react";

import "./mileStoneStepper.css";

const MileStoneStepper = () => {
  const [dataOne, setDataOne] = useState(false);
  const [dataTwo, setDataTwo] = useState(false);
  const [dataThree, setDataThree] = useState(false);
  const [dataFour, setDataFour] = useState(true);

  const handleDataOne = () => {
    setDataOne(true);
    setDataTwo(false);
    setDataThree(false);
    setDataFour(false);
  };
  const handleDataTwo = () => {
    setDataOne(false);
    setDataTwo(true);
    setDataThree(false);
    setDataFour(false);
  };

  const handleDataThree = () => {
    setDataOne(false);
    setDataTwo(false);
    setDataThree(true);
    setDataFour(false);
  };

  const handleDataFour = () => {
    setDataOne(false);
    setDataTwo(false);
    setDataThree(false);
    setDataFour(true);
  };

  return (
    <div className="milestone-steper-pad">
      <div className="milestone-heading-outer">
        <h1>MILESTONE</h1>
      </div>
      {/* -------button-style------------------ */}
      <div className="milestone-icon-main col-md-12  d-flex">
        <div className="col-md-2"></div>
        <div
          className="col-md-8 stepper-button-outer mile-stone-middle-flex "
          id="myDIV"
        >
          <button
            type="button"
            className="stepper-button-style  "
            onClick={handleDataFour}
          >
            Q4
          </button>
          <div className="stepper-button-inner-line"></div>
          <button
            type="button"
            className="stepper-button-style "
            onClick={handleDataOne}
          >
            Q1
          </button>
          <div className="stepper-button-inner-line"></div>

          <button
            type="button"
            className="stepper-button-style "
            onClick={handleDataTwo}
          >
            Q2
          </button>
          <div className="stepper-button-inner-line"></div>

          <button
            type="button"
            className="stepper-button-style "
            onClick={handleDataThree}
          >
            Q3
          </button>
        </div>
        <div className="col-md-2"></div>
      </div>

      {dataOne && (
        <div className="col-md-12 outer-flex-content-milestone">
          <div className="col-md-2"></div>
          <div className="col-md-8 mile-stone-middle-flex ">
            <div className="stepper-content-background">
              <div className="stepper-inner-heading">
                <h3>Q1- 2022</h3>
              </div>
              <div className="col-md-12 d-flex milestone-inner-content">
                <div className="col-md-6">
                  <h3>GOALS</h3>
                  <p>• Causal 3D PVP Game. </p>
                  <p>• ROXO platform Alpha development. </p>
                  <p>• Contracts on BSC.</p>
                  <p>• Complete NFT Smart Contracts.</p>
                  <p>• Introduce Free to play, play to earn mechanism.</p>
                </div>
                <hr className="section-divider-milestone" />
                <div className="col-md-6 status-col-style ">
                  <h3>STATUS</h3>
                  <h3 className="status-content">Complete</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      )}
      {dataTwo && (
        <div className="col-md-12 outer-flex-content-milestone">
          <div className="col-md-2"></div>
          <div className="col-md-8 mile-stone-middle-flex">
            <div className="stepper-content-background">
              <div className="stepper-inner-heading">
                <h3>Q2- 2022</h3>
              </div>
              <div className="col-md-12 d-flex milestone-inner-content">
                <div className="col-md-6">
                  <h3>GOALS</h3>
                  <p>
                    • ROXO Free to play - Play to earn Platform official launch.{" "}
                  </p>
                  <p>
                    • Update Haste King Features and link with ROXO Platform.{" "}
                  </p>
                  <p>
                    • Integrate Haste King with ROXO Platform for secure Token
                    Distribution.
                  </p>
                </div>
                <hr className="section-divider-milestone" />
                <div className="col-md-6 status-col-style ">
                  <h3>STATUS</h3>
                  <h3 className="status-content">Under Development</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      )}
      {dataThree && (
        <div className="col-md-12 outer-flex-content-milestone">
          <div className="col-md-2"></div>
          <div className="col-md-8 mile-stone-middle-flex">
            <div className="stepper-content-background">
              <div className="stepper-inner-heading">
                <h3>Q3- 2022</h3>
              </div>
              <div className="col-md-12 d-flex milestone-inner-content">
                <div className="col-md-6">
                  <h3>GOALS</h3>
                  <p>• ROXO Haste King NFT decentralized exchange. </p>
                  <p>• ROXO Bridge for Cross Chain NFT support. </p>
                  <p>• Testing .</p>
                  <p>• Official Launch for the world .</p>
                </div>
                <hr className="section-divider-milestone" />
                <div className="col-md-6 status-col-style ">
                  <h3>STATUS</h3>
                  <h3 className="status-content">Under Development</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      )}
      {dataFour && (
        <div className="col-md-12 outer-flex-content-milestone">
          <div className="col-md-2"></div>
          <div className="col-md-8 mile-stone-middle-flex">
            <div className="stepper-content-background">
              <div className="stepper-inner-heading">
                <h3>Q4- 2021</h3>
              </div>
              <div className="col-md-12 d-flex milestone-inner-content">
                <div className="col-md-6">
                  <h3>GOALS</h3>
                  <p>• Market Research. </p>
                  <p>• Brainstorming, & Team Formation. </p>
                  <p>• Roxo Platform and Game Proof-Of-Concept.</p>
                  <p>• ROXO Platform Initial development.</p>
                </div>
                <hr className="section-divider-milestone" />

                <div className="col-md-6 status-col-style ">
                  <h3>STATUS</h3>
                  <h3 className="status-content">Complete</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      )}
    </div>
  );
};
export default MileStoneStepper;
