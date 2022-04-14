import { React, useState, useRef } from "react";
import emailjs from "emailjs-com";

import ContactForm from "../Assests/ContactForm.png";
import "./contactUsForm.css";

const ContactUsForm = () => {
  const form = useRef();
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mq2mpps",
        "template_89516yg",
        e.target,
        "yvC1i7AAhZ7brqQX4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="contact-background-color">
        <section className="contact-form-section" id="contactFormSection">
          <form ref={form} onSubmit={sendEmail}>
            <div className="container pb-5">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img src={ContactForm} style={{ width: "100%" }} />
                </div>
                <div className="col-md-6">
                  <div className="col-md-12 contact-form-fields-section-style">
                    <h3 className="send-message-style">Send a Message</h3>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-4 pr-md-0 form-detail">
                        <input
                          type="text"
                          id="name"
                          placeholder="Name"
                          name="name"
                          required=""
                        />
                      </div>
                      <div className="col-md-4 pr-md-0 form-detail">
                        <input
                          type="Email"
                          id="email"
                          name="email"
                          placeholder="Email Address"
                          required=""
                        />
                      </div>
                      <div className="col-md-4 form-detail">
                        <input
                          type="text"
                          id="subject"
                          placeholder="Subject"
                          name="subject"
                          required=""
                        />
                      </div>

                      <div className="col-md-12 form-detail pt-1">
                        <textarea
                          id="message"
                          rows="9"
                          cols="77"
                          placeholder="Write your message here..."
                          name="message"
                          required=""
                        ></textarea>
                      </div>
                    </div>
                    <div className="contactus-button-outer">
                      <button className="contactus-button-style" type="submit">
                        {" "}
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default ContactUsForm;
