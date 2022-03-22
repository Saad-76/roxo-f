import { React, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import "./mileStoneStepper.css";

const MileStoneStepper = () => {
  const [dataOne, setDataOne] = useState(true);
  const [dataTwo, setDataTwo] = useState(false);
  const [dataThree, setDataThree] = useState(false);
  const [dataFour, setDataFour] = useState(false);

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
      <div className="stepper-button-outer">
        <button
          type="button"
          className="stepper-button-style"
          onClick={handleDataOne}
        >
          1
        </button>
        <HiArrowNarrowRight className="arrow-icon-style" size={50} />
        <button
          type="button"
          className="stepper-button-style"
          onClick={handleDataTwo}
        >
          2
        </button>
        <HiArrowNarrowRight className="arrow-icon-style" size={50} />
        <button
          type="button"
          className="stepper-button-style"
          onClick={handleDataThree}
        >
          3
        </button>
        <HiArrowNarrowRight className="arrow-icon-style" size={50} />
        <button
          type="button"
          className="stepper-button-style"
          onClick={handleDataFour}
        >
          4
        </button>
      </div>
      {dataOne && (
        <div className="col-md-12 d-flex">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="stepper-content-background">
              <p>MileStone 1</p>
              <p>
                Lorem Ipsm Lorem IpsmLorem IpsmLorem IpsmLorem Ipsm Lorem Ipsm
                Lorem Ipsm Lorem Ipsm.
              </p>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      )}
      {dataTwo && (
        <div className="col-md-12 d-flex">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="stepper-content-background">
              <p>MileStone 2</p>
              <p>
                Lorem Ipsm Lorem IpsmLorem IpsmLorem IpsmLorem Ipsm Lorem Ipsm
                Lorem Ipsm Lorem Ipsm.
              </p>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      )}
      {dataThree && (
        <div className="col-md-12 d-flex">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="stepper-content-background">
              <p>MileStone 3</p>
              <p>
                Lorem Ipsm Lorem IpsmLorem IpsmLorem IpsmLorem Ipsm Lorem Ipsm
                Lorem Ipsm Lorem Ipsm.
              </p>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      )}
      {dataFour && (
        <div className="col-md-12 d-flex">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="stepper-content-background">
              <p>MileStone 4</p>
              <p>
                Lorem Ipsm Lorem IpsmLorem IpsmLorem IpsmLorem Ipsm Lorem Ipsm
                Lorem Ipsm Lorem Ipsm.
              </p>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      )}
    </div>
  );
};
export default MileStoneStepper;
