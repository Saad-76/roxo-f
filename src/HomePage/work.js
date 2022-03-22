import { React, useState } from "react";
import "./work.css";

const Work = () => {
  const [dataOne, setDataOne] = useState(true);
  const [dataTwo, setDataTwo] = useState(false);
  const [dataThree, setDataThree] = useState(false);
  const [dataFour, setDataFour] = useState(false);
  const[dataFive,setDataFive]= useState(false);

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
  const handleDataFive=()=>{
    setDataOne(false);
    setDataTwo(false);
    setDataThree(false);
    setDataFour(false);
    setDataFive(true);
  }
  return (
    <>
      <div className="work-outer">
        <div className="work-heading-outer">
          <h1>HOW WE WORK?</h1>
        </div>
        <div className="container">
          <div className="col-md-12 d-flex">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex">
              <div className="work-button-style-outer">
                <div>
                  <button className="work-button-style" onClick={handleDataOne}>
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
                <div>
                  <button
                    className="work-button-style"
                    onClick={handleDataFive}
                  >
                    5
                  </button>
                </div>
              </div>

              <div>
                {dataOne && (
                  <div className="work-content-section-backgroud">
                    <h3>Work 1</h3>
                    <p>Lore IpsM lOREM ipsum</p>
                  </div>
                )}
                {dataTwo && (
                  <div className="work-content-section-backgroud">
                    <h3>Work 2</h3>
                    <p>Lore IpsM lOREM ipsum</p>
                  </div>
                )}
                {dataThree && (
                  <div className="work-content-section-backgroud">
                    <h3>Work 3</h3>
                    <p>Lore IpsM lOREM ipsum</p>
                  </div>
                )}
                {dataFour && (
                  <div className="work-content-section-backgroud">
                    <h3>Work 4</h3>
                    <p>Lore IpsM lOREM ipsum</p>
                  </div>
                )}
                   {dataFive && (
                  <div className="work-content-section-backgroud">
                    <h3>Work 5</h3>
                    <p>Lore IpsM lOREM ipsum</p>
                  </div>
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
