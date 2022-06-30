import React from "react";

import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TokenCoin from "../Assests/Token Coin.png";
import Coin from "../Assests/web roxo/wallet/Binance.png";
import MetaMask from "../Assests/web roxo/wallet/MetaMask.png";
import {
  connectWallet,
  checkNetwork,
  getAddress,
  getBalance,
  ironSecure,
  sellRoxo,
  buyRoxoOne,
  BuyRoxoTwo,
} from "./web3";
import "./buyForm.css";

const BuyForm = ({ adressState }) => {
  // -----------form handling-----------
  const [buyForm, setBuyForm] = useState(true);
  const [sellForm, setSellForm] = useState(false);
  const [conct, setConct] = useState(false);

  const [maxLimit, setMaxLimit] = useState("");

  const handleSellForm = async () => {
    setBuyForm(false);
    setSellForm(true);
    const localAdress = localStorage.getItem("complete_wallet_address");
    const secureValue = await ironSecure(localAdress);
    const maxValueData = secureValue / 0.0001;
    setMaxLimit(maxValueData);
    // console.log(maxValueData,"maxValueData")
  };

  const handleBuyForm = () => {
    setBuyForm(true);
    setSellForm(false);
  };

  const [data, setData] = useState({
    amount: "",
  });
  const [coinValue, setCoinValue] = useState("");

  const [enteredValue, setEnteredValue] = useState("");
  const [waletError, setWalletError] = useState({
    networkError: "",
    amountError: "",
    negAmountError: "",
    formError: "",
  });
  const [loader, setLoader] = useState(false);
  const [sucessMesssage, setSuccessMessage] = useState(false);

  // const buyHandler = async (e) => {
  //   if (data.amount !== "") {
  //     try {
  //       setLoader(true);
  //       const buy = await buyRoxo(enteredValue);
  //       setWalletError({ ...waletError, networkError: "" });
  //       setData({ ...data, amount: "" });
  //       setWalletError({ ...waletError, formError: "" });
  //       // setLoader(false);
  //       console.log(buy, "buy form resp");
  //     } catch (error) {
  //       setWalletError({
  //         ...waletError,
  //         networkError: "Change Your Network to Rinkeyby Test Network",
  //       });
  //       setWalletError({ ...waletError, formError: "" });
  //       setLoader(false);
  //     }
  //   } else {
  //     setWalletError({ ...waletError, formError: "Fill above field" });
  //   }

  // };
  // ----------------net check function---

  const buyHandler = async (e) => {
    if (data.amount !== "") {
      try {
        const buy = await buyRoxoOne(enteredValue);
        console.log(buy, "buy form first response ");
        if (buy.status === "Sucessful") {
          setLoader(true);
        }
        setWalletError({ ...waletError, networkError: "" });
        setData({ ...data, amount: "" });
        setWalletError({ ...waletError, formError: "" });

        const buySecond = await BuyRoxoTwo();
        console.log(buySecond, "buy Second response ");
        if (buySecond !== "") {
          setLoader(false);
          setSuccessMessage(true);
          setTimeout(() => setSuccessMessage(false), 4000);
        }
      } catch (error) {
        setWalletError({
          ...waletError,
          networkError: "Change Your Network to Rinkeyby Test Network",
        });
        setWalletError({ ...waletError, formError: "" });
        setLoader(false);
      }
    } else {
      setWalletError({ ...waletError, formError: "Fill above field" });
    }
  };

  useEffect(async () => {
    const add = localStorage.getItem("wallet_address");
    if (add.length !== 0) {
      checkNetwork();
    } else {
      console.log("check Your Network ");
    }
  }, []);

  // ----------------------------------------------
  const handleData = (e) => {
    if (e.target.id === "amount") {
      if (e.target.value !== "") {
        if (e.target.value > 0) {
          let inputData = e.target.value;
          setEnteredValue(inputData);

          let finalValue = inputData / 0.0001;
          setData(finalValue);
          const swapValue = finalValue.toString();
          setCoinValue(swapValue);
          setWalletError({ ...waletError, amountError: "" });
          setWalletError({ ...waletError, negAmountError: "" });
        } else if (e.target.value <= 0) {
          setWalletError({
            ...waletError,
            negAmountError: "Enter positive Value",
          });
        }
      } else {
        setWalletError({ ...waletError, amountError: "Field is require" });
        setWalletError({ ...waletError, negAmountError: "" });
      }
    }
  };

  const [showModal, setShowModal] = useState(false);

  const routePath = useLocation();

  const onTop = () => {
    window.scrollTo(0, 4);
  };

  useEffect(() => {
    onTop();
  }, [routePath]);

  const handleChange = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  // --------auto modal popup-----------
  const checkOpenWallet = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts && accounts.length > 0) {
      setShowModal(false);
      setConct(true);
    } else {
      console.log("working", adressState);
      setConct(false);
      setTimeout(() => {
        handleChange();
      }, 5000);
    }
  };

  useEffect(() => {
    checkOpenWallet();
  }, []);

  // -----connect wallet--
  const walletConnection = async () => {
    let cw = await connectWallet();
    localStorage.setItem("wallet_address", cw);
    if (cw === false) return cw;
    else {
      window.location.reload();
    }
  };

  // ------------roxo coin sell code--------
  const [roxoData, setRoxoData] = useState({
    roxoAmount: "",
  });
  const [error, setError] = useState({
    sellError: "",
    roxoError: "",
    limitError: "",
    negValError: "",
  });

  const handleSellChange = (e) => {
    if (e.target.id === "roxoAmounts") {
      if (e.target.value !== "") {
        if (e.target.value > 0) {
          const roxoValue = e.target.value;
          const finalRoxoValue = roxoValue * 0.0001;
          const lastRoxoValue = finalRoxoValue.toString();
          setRoxoData(lastRoxoValue);
          setError({ ...error, roxoError: "" });
          setError({ ...error, negValError: "" });
        } else {
          setError({ ...error, negValError: "Enter Positive Value" });
        }
      } else {
        setError({ ...error, roxoError: "Field is require" });
      }
    } else {
      console.log("Fill all fields");
    }
  };

  const [sellMessage, setSellMessage] = useState(false);

  const sellHandler = async (e) => {
    console.log("sell Handler is called");
    if (roxoData.roxoAmount !== "" || roxoData.roxoAmount !== null) {
      if (maxLimit > 0) {
        const sellRoxoFunc = await sellRoxo(roxoData);
        console.log(sellRoxoFunc, "sellRoxoFunc return");
        if (sellRoxoFunc !== "" || sellRoxoFunc !== null) {
          setSellMessage(true);
          setTimeout(() => setSellMessage(false), 4000);
        }
        // console.log("sell Handler is called");
        setError({ ...error, sellError: "" });
        setRoxoData({ ...roxoData, roxoAmount: "" });
      } else {
        setError({ ...error, limitError: "Your balance is low" });
        setError({ ...error, sellError: "" });
      }
    } else {
      setError({ ...error, sellError: "Fill above field" });
      console.log(error, "error");
      setError({ ...error, limitError: "" });
    }
  };

  return (
    <>
      <Header />

      {showModal && (
        <div className="col-md-12 modal-content-style">
          <div class="modal-dialog ">
            <div class="modal-content wallet-modal-border">
              <div class="">
                <div className="wallet-colose-btn" onClick={handleClose}>
                  <h3 className="wallet-heading-style">Connect Wallet</h3>

                  <AiOutlineClose
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    size={30}
                    type="button"
                  />
                </div>
                <div className="">
                  <div
                    className="wallet-button-background"
                    onClick={walletConnection}
                    type="button"
                  >
                    <h4 className="">MetaMask</h4>
                    <img
                      src={MetaMask}
                      alt=""
                      height="50px"
                      width="50px"
                      style={{ borderRadius: "50px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="buy-form-style">
        <div className="col-md-12 sell-main-heading">
          <p>
            "Get back your 70% amount anytime, if you purchase in pre-sale
            duration" <br />
            {/* <span className="color-sell"> TOKENS </span> */}
          </p>
        </div>
        <div className="col-md-12  buy-sell-flex">
          <div className="col-md-4"></div>
          <div className="col-md-4 buy-sell-buttons-style">
            <button onClick={handleBuyForm} className="buy-sell-button-inner">
              Buy
            </button>{" "}
            &nbsp;
            <button onClick={handleSellForm} className="buy-sell-button-inner">
              Sell
            </button>
          </div>
          <div className="col-md-4"></div>
        </div>
        {buyForm && (
          <div className="col-md-12 buy-card-main">
            <div className="col-md-4"></div>
            <div className="col-md-3">
              <div className="buy-card-body">
                <div className="buy-card-body-flex">
                  <div className="col-md-12 sell-button-main">
                    {/* <div>
                      <img src={TokenCoin} alt="" height="50px" width="50px" />
                    </div> */}
                    <div>
                      <h3
                        className="form-head-style"
                        style={{ textAlign: "center" }}
                      >
                        Buy
                      </h3>
                      {/* <p>Get back your 70% amount anytime</p> */}
                    </div>
                    {/* <div className="buy-hidden-image">
                      <img src={Coin} alt="" height="30px" width="30px" />
                    </div> */}
                  </div>
                  <hr
                    className="section-divider-sellform"
                    style={{ marginTop: "1%" }}
                  />
                  <div className="col-md-12 input-display-sellform">
                    <label>
                      <img
                        src={Coin}
                        alt=""
                        height="22px"
                        width="22px"
                        style={{ margin: "0px 2px" }}
                      />
                      USDT( MATIC)
                    </label>
                    <input
                      className="input-field-sellfrom-inner"
                      type="number"
                      id="amount"
                      placeholder="Enter Amount "
                      value={data.amount}
                      onChange={handleData}
                    />
                    {waletError?.amountError && (
                      <span className="badge badge-danger">
                        {waletError?.amountError}
                      </span>
                    )}

                    {waletError?.negAmountError && (
                      <span className="badge badge-danger">
                        {waletError?.negAmountError}
                      </span>
                    )}
                  </div>
                  <div className="col-md-12 input-display-sellform ">
                    <label>
                      <img src={TokenCoin} alt="" height="30px" width="30px" />
                      ROXO
                    </label>
                    <input
                      className="input-field-sellfrom-inner"
                      type="number"
                      value={data}
                    />
                  </div>

                  <div className="col-md-12 swap-button-outer">
                    {conct === true && (
                      <button
                        className="swap-button-inner"
                        onClick={buyHandler}
                      >
                        Buy
                      </button>
                    )}
                    {conct === false && (
                      <button
                        className="swap-button-inner"
                        onClick={walletConnection}
                      >
                        Connect Wallet
                      </button>
                    )}
                  </div>

                  {waletError?.networkError && (
                    <span className="badge badge-danger">
                      {waletError?.networkError}
                    </span>
                  )}
                  {waletError?.formError && (
                    <span className="badge badge-danger">
                      {waletError?.formError}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        )}
      </div>

      <div className="toast-outer">
        {loader && (
          <h3 className="toast-mesage-style">
            Your Transaction is being processed{" "}
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </h3>
        )}
      </div>

      <div className="toast-outer">
        {sucessMesssage && (
          <h3 className="toast-successMesage-style">Transaction Successfull</h3>
        )}
      </div>

      {/* ---------sell form here-------- */}
      {sellForm && (
        <div className="buy-form-style">
          <div className="col-md-12 buy-card-main">
            <div className="col-md-4"></div>
            <div className="col-md-3">
              <div className="buy-card-body">
                <div className="buy-card-body-flex">
                  <div className="col-md-12 sell-button-main">
                    <div>
                      <h3
                        className="form-head-style"
                        style={{ textAlign: "center" }}
                      >
                        Sell
                      </h3>
                    </div>
                  </div>
                  <hr
                    className="section-divider-sellform"
                    style={{ marginTop: "1%" }}
                  />

                  <div className="col-md-12 input-display-sellform ">
                    <label>
                      <img src={TokenCoin} alt="" height="30px" width="30px" />
                      ROXO
                    </label>
                    <input
                      className="input-field-sellfrom-inner"
                      type="number"
                      id="roxoAmounts"
                      value={roxoData.roxoAmount}
                      onChange={handleSellChange}
                      max="5"
                      placeholder="Enter Amount "
                    />
                    {error?.roxoError && (
                      <span className="badge badge-danger">
                        {error?.roxoError}
                      </span>
                    )}
                    {error?.negValError && (
                      <span className="badge badge-danger">
                        {error?.negValError}
                      </span>
                    )}
                  </div>

                  <div className="col-md-12 trading-fee-flex">
                    <div className="col-md-6">
                      <p className="max-mint-style">Max Limit</p>
                    </div>
                    <div className="col-md-6 trading-fee-value">
                      {maxLimit && <p>{maxLimit}</p>}
                    </div>
                  </div>

                  <div className="col-md-12 input-buy-bottomField">
                    <label>
                      <img
                        src={Coin}
                        alt=""
                        height="22px"
                        width="22px"
                        style={{ margin: "0px 2px" }}
                      />
                      USDT( MATIC)
                    </label>
                    <input
                      className="input-field-sellfrom-inner"
                      type="number"
                      id="amount"
                      value={roxoData.toString()}
                    />
                  </div>

                  <div className="col-md-12 swap-button-outer">
                    {conct === true && (
                      <button
                        className="swap-button-inner"
                        onClick={sellHandler}
                      >
                        Sell
                      </button>
                    )}
                    {conct === false && (
                      <button
                        className="swap-button-inner"
                        onClick={walletConnection}
                      >
                        Connect Wallet
                      </button>
                    )}
                  </div>
                  {error?.sellError && (
                    <span className="badge badge-danger">
                      {error?.sellError}
                    </span>
                  )}
                  {waletError?.networkError && (
                    <span className="badge badge-danger">
                      {waletError?.networkError}
                    </span>
                  )}

                  {error?.limitError && (
                    <span className="badge badge-danger">
                      {error?.limitError}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      )}
      <div className="toast-outer">
        {sellMessage && (
          <h3 className="toast-successMesage-style">Successfully Sold</h3>
        )}
      </div>
      <Footer />
    </>
  );
};
export default BuyForm;
