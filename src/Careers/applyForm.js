import React from "react";
import Header from "../HomePage/header";
import Footer from "../HomePage/footer"
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdOutlineCancelPresentation } from "react-icons/md";
import "./appyForm.css";

const ApplyForm = () => {
  const Alert = () => {
    alert("Your Application  is Submitted.");
  };
  return (
    <>
      <Header />

      <div className="applyForm-background">
        <div className="container-applyForm">
          <div className="job-titile-form ">
            <h6 className="">
              Unity Developer <br /> <span>Canada, Vancouver</span>
            </h6>
          </div>

          <div className="col-md-12 careers-form-body">
            <h5 className="submit-application-heading">
              Submit Your Application
            </h5>

            <div className="input-fieds-outer col-md-12">
              <label className="col-md-6 career-form-label">Name*</label>
              <div className="col-md-6  input-field-style">
                <input className=" input-field-inner" type="text" />
              </div>
            </div>
            <div className="input-fieds-outer col-md-12">
              <label className="col-md-6 career-form-label">
                Highest Education*
              </label>
              <div className="col-md-6  input-field-style">
                <input className=" input-field-inner" type="text" />
              </div>
            </div>
            <div className="input-fieds-outer col-md-12">
              <label className="col-md-6 career-form-label">Number*</label>
              <div className="col-md-6  input-field-style">
                <input className=" input-field-inner" type="number" />
              </div>
            </div>

            <div className="input-fieds-outer col-md-12">
              <label className="col-md-6 career-form-label">Email*</label>
              <div className="col-md-6  input-field-style">
                <input className=" input-field-inner" type="email" />
              </div>
            </div>
            <div className="input-fieds-outer col-md-12">
              <label className="col-md-6 career-form-label">
                Expected Work Place*
              </label>
              <div className="col-md-6  input-field-style">
                <input className=" input-field-inner" type="text" />
              </div>
            </div>
            <div className="input-fieds-outer col-md-12">
              <label className="col-md-6 career-form-label">Resume*</label>
              <div className="col-md-6  input-field-style">
                <input
                  className=" input-field-inner"
                  type="file"
                  id="test"
                  name="test"
                  accept=".pdf,.doc"
                />
              </div>
            </div>
            <div className="input-fieds-outer col-md-12">
              <label className="col-md-6 career-form-label">Note*</label>
              <div className="col-md-6  input-field-style">
                <textarea
                  className=" input-field-inner"
                  placeholder="Type message here..."
                />
              </div>
            </div>

            <button className="submit-application-button" onClick={Alert}>
              Submit Application
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default ApplyForm;
