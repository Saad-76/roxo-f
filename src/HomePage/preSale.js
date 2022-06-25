import { React, useState, useEffect } from "react";
import Countdown from "react-countdown";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import smPre from "../Assests/web roxo/preSale/smPre.png";
import "./preSale.css";

const PreSale = () => {
  const [count, setCount] = useState(0);
  const [members, setMembers] = useState(
    Array.from({ length: 10 }, (v, i) => false)
  );
  const [availables, setAvailables] = useState(
    Array.from({ length: 10 }, (v, i) => false)
  );

  const handle = (state) => {
    if (state && count !== 3) {
      setCount(count + 1);
    } else if (!state && count !== 1) {
      setCount(count - 1);
    }
  };
  const selectHandle = (index, key) => {
    if (index) {
      let k = members;
      k[key] = !k[key];
      setMembers([...k]);
    } else {
      let k = availables;
      k[key] = !k[key];
      setAvailables([...k]);
    }
  };
  const [showModal, setShowModal] = useState(false);
  const handleChange = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    setTimeout(() => {
      handleChange();
    }, 1000);
  }, []);

  // useEffect(() => {
  //   console.log(Date.now(), "dataehere");
  // }, []);

  return (
    <>
      {showModal && (
        <div className="">
          <div className="pre-lg presale-position-bg">
            <div className="col-md-12 d-flex">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <div className="preSale-back">
                  <AiOutlineClose
                    onClick={handleClose}
                    size={30}
                    type="button"
                    className="close-preSale-btn"
                  />
                  <div className="time-remain-border">
                    <div className="time-remain-iner">
                      <Countdown
                        date={1654867966579 + 1000000000}
                        renderer={({ days, hours, minutes, seconds }) => {
                          return (
                            <div className="time timer-style">
                              <div className="timer-inner">
                                <p>
                                  <span>{Math.floor(days / 10)}</span>{" "}
                                  <span>{days % 10}</span>
                                </p>
                                <h6>Days</h6>
                              </div>
                              <h3>:</h3>
                              <div className="timer-inner">
                                <p>
                                  <span>{Math.floor(hours / 10)}</span>{" "}
                                  <span>{hours % 10}</span>
                                </p>
                                <h6>Hours</h6>
                              </div>
                              <h3>:</h3>
                              <div className="timer-inner">
                                <p>
                                  <span>{Math.floor(minutes / 10)}</span>
                                  <span>{minutes % 10}</span>
                                </p>
                                <h6>Minutes</h6>
                              </div>
                            </div>
                          );
                        }}
                      ></Countdown>
                    </div>
                  </div>
                </div>
                <Link to="/buyForm">
                  <div className="buy-btn-outer">
                    <button className="buy-btn-inner">Click me</button>
                  </div>
                </Link>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>

          <div className="pre-sm presale-position-sm">
            <AiOutlineClose
              onClick={handleClose}
              size={30}
              type="button"
              className="close-preSale-btn-sm"
            />
            <img src={smPre} alt="smPre" className="smpre-img-style" />
          </div>
        </div>
      )}
    </>
  );
};

export default PreSale;
