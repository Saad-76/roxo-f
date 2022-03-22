import { React, useState } from "react";
import "./contactUsForm.css";
import ContactForm from "../Assests/ContactForm.png";

const ContactUsForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  return (
    <>
      <div className="contact-background-color">
        <section className="contact-form-section" id="contactFormSection">
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
                        value={user.name}
                      />
                    </div>
                    <div className="col-md-4 pr-md-0 form-detail">
                      <input
                        type="Email"
                        id="email"
                        placeholder="Email Address"
                        value={user.email}
                      />
                    </div>
                    <div className="col-md-4 form-detail">
                      <input
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        value={user.subject}
                      />
                    </div>

                    <div className="col-md-12 form-detail pt-1">
                      <textarea
                        id="message"
                        rows="9"
                        cols="77"
                        placeholder="Write your message here..."
                        value={user.message}
                      ></textarea>
                    </div>
                  </div>
                  <div className="contactus-button-outer">
                    <button className="contactus-button-style"> SUBMIT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUsForm;
